#!/usr/bin/env python3
# /// script
# requires-python = ">=3.11"
# ///
"""Hard-gate ACL skills on markdown frontmatter status: approved.

Approve/Reject only changes the YAML `status` line inside each MD file.
This script enforces that required upstream artifacts are approved before a
downstream skill may proceed.

Exit codes:
  0 — gate passed (or docs review disabled)
  1 — gate failed (print reason to stdout)
  2 — usage / config error
"""

from __future__ import annotations

import argparse
import re
import sys
import tomllib
from pathlib import Path
from typing import Any

STATUS_RE = re.compile(r"^status:\s*[\"']?([A-Za-z0-9_-]+)[\"']?\s*$", re.MULTILINE)
# Legacy author-complete values still count as approved for back-compat.
APPROVED = {"approved", "final", "complete"}


def parse_frontmatter_status(text: str) -> str | None:
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end == -1:
        return None
    fm = text[3:end]
    match = STATUS_RE.search(fm)
    return match.group(1).lower() if match else None


def resolve_planning_artifacts(project_root: Path) -> Path:
    planning = None
    for rel in ("_acl/acl/config.yaml", "_acl/acl/config.user.yaml"):
        path = project_root / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        m = re.search(r"^planning_artifacts:\s*(.+)$", text, re.MULTILINE)
        if m:
            planning = m.group(1).strip().strip("\"'")
    if not planning:
        planning = str(project_root / "_acl-output" / "planning-artifacts")
    p = Path(planning)
    if not p.is_absolute():
        p = project_root / p
    return p


def require_approval_enabled(project_root: Path) -> bool:
    for rel in ("_acl/acl/config.yaml", "_acl/acl/config.user.yaml"):
        path = project_root / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        m = re.search(
            r"^docs_review_require_approval:\s*(.+)$", text, re.MULTILINE | re.IGNORECASE
        )
        if not m:
            continue
        val = m.group(1).strip().strip("\"'").lower()
        if val in {"false", "0", "no", "off"}:
            return False
        if val in {"true", "1", "yes", "on"}:
            return True
    return True


def expand_globs(base: Path, globs: list[str]) -> list[Path]:
    found: list[Path] = []
    for pattern in globs:
        found.extend(sorted(base.glob(pattern)))
    seen: set[Path] = set()
    out: list[Path] = []
    for path in found:
        if not path.is_file() or path.name == ".memlog.md":
            continue
        resolved = path.resolve()
        if resolved in seen:
            continue
        seen.add(resolved)
        out.append(path)
    return out


def describe_statuses(files: list[Path]) -> list[str]:
    lines = []
    for path in files:
        try:
            status = parse_frontmatter_status(path.read_text(encoding="utf-8")) or "(missing status)"
        except OSError as err:
            status = f"(unreadable: {err})"
        lines.append(f"  - {path}: status={status}")
    return lines


def check_require_approved(base: Path, globs: list[str], *, required: bool) -> str | None:
    files = expand_globs(base, globs)
    if not files:
        if required:
            return (
                "No matching upstream markdown found for required globs:\n  - "
                + "\n  - ".join(globs)
                + "\nCreate and manager-approve the upstream artifact first."
            )
        return None

    bad: list[Path] = []
    good: list[Path] = []
    for path in files:
        try:
            status = parse_frontmatter_status(path.read_text(encoding="utf-8"))
        except OSError:
            bad.append(path)
            continue
        if status in APPROVED:
            good.append(path)
        else:
            bad.append(path)

    if bad:
        return (
            "Docs-review gate blocked: upstream markdown is not approved.\n"
            "Approve/Reject only updates the YAML `status` line in each MD file "
            "(via acl-docs-console.html), then pull before retrying.\n"
            + "\n".join(describe_statuses(files))
        )
    if required and not good:
        return "Docs-review gate blocked: no approved upstream markdown matched."
    return None


def evaluate_skill(base: Path, rule: dict[str, Any]) -> str | None:
    if "any_of" in rule:
        errors: list[str] = []
        for group in rule["any_of"]:
            err = check_require_approved(base, list(group.get("globs") or []), required=True)
            if err is None:
                return None
            errors.append(err)
        return (
            "Docs-review gate blocked: none of the alternative upstream artifact groups are approved.\n\n"
            + "\n\n".join(errors)
        )

    if "require_approved" in rule:
        block = rule["require_approved"]
        err = check_require_approved(base, list(block.get("globs") or []), required=True)
        if err:
            return err

    if "require_approved_if_present" in rule:
        block = rule["require_approved_if_present"]
        err = check_require_approved(base, list(block.get("globs") or []), required=False)
        if err:
            return err

    return None


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--project-root", required=True, help="Project working directory")
    parser.add_argument("--skill", required=True, help="Skill id, e.g. acl-prd")
    parser.add_argument(
        "--gates",
        help="Optional path to docs_review_gates.toml (defaults next to this script)",
    )
    args = parser.parse_args(argv)

    project_root = Path(args.project_root).resolve()
    if not project_root.is_dir():
        print(f"Project root not found: {project_root}", file=sys.stderr)
        return 2

    if not require_approval_enabled(project_root):
        print("docs_review_require_approval is false — gate skipped.")
        return 0

    gates_path = (
        Path(args.gates) if args.gates else Path(__file__).with_name("docs_review_gates.toml")
    )
    if not gates_path.is_file():
        print(f"Gates file not found: {gates_path}", file=sys.stderr)
        return 2

    try:
        with gates_path.open("rb") as stream:
            gates = tomllib.load(stream)
    except Exception as err:  # noqa: BLE001
        print(f"Failed to load gates: {err}", file=sys.stderr)
        return 2

    skills = gates.get("skills") or {}
    rule = skills.get(args.skill)
    if not rule:
        print(f"No docs-review gate defined for {args.skill} — pass.")
        return 0

    base = resolve_planning_artifacts(project_root)
    err = evaluate_skill(base, rule)
    if err:
        print(err)
        return 1

    print(f"Docs-review gate passed for {args.skill}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
