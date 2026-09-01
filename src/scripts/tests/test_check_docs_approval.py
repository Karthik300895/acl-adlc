# /// script
# requires-python = ">=3.11"
# dependencies = ["pytest>=8.0"]
# ///
"""Tests for check_docs_approval.py."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import check_docs_approval as gate  # noqa: E402


def write_md(path: Path, status: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        f"---\ntitle: Test\nstatus: {status}\ncreated: 2026-08-14\nupdated: 2026-08-14\n---\n\n# Body\n",
        encoding="utf-8",
    )


@pytest.fixture
def project(tmp_path: Path) -> Path:
    planning = tmp_path / "_acl-output" / "planning-artifacts"
    planning.mkdir(parents=True)
    cfg = tmp_path / "_acl" / "acl"
    cfg.mkdir(parents=True)
    (cfg / "config.yaml").write_text(
        "planning_artifacts: {0}\ndocs_review_require_approval: true\n".format(
            str(planning).replace("\\", "/")
        ),
        encoding="utf-8",
    )
    return tmp_path


def test_prd_blocked_without_brief(project: Path) -> None:
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 1


def test_prd_passes_with_approved_brief(project: Path) -> None:
    planning = project / "_acl-output" / "planning-artifacts"
    write_md(planning / "briefs" / "brief-x" / "brief.md", "approved")
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 0


def test_prd_passes_with_title_case_approved_brief(project: Path) -> None:
    planning = project / "_acl-output" / "planning-artifacts"
    write_md(planning / "briefs" / "brief-x" / "brief.md", "Approved")
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 0


def test_prd_blocked_when_brief_in_review(project: Path) -> None:
    planning = project / "_acl-output" / "planning-artifacts"
    write_md(planning / "briefs" / "brief-x" / "brief.md", "In Review")
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 1


def test_prd_blocked_when_brief_pending(project: Path) -> None:
    planning = project / "_acl-output" / "planning-artifacts"
    write_md(planning / "briefs" / "brief-x" / "brief.md", "pending-review")
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 1


def test_gate_skipped_when_disabled(project: Path) -> None:
    cfg = project / "_acl" / "acl" / "config.yaml"
    cfg.write_text(
        cfg.read_text(encoding="utf-8").replace(
            "docs_review_require_approval: true",
            "docs_review_require_approval: false",
        ),
        encoding="utf-8",
    )
    code = gate.main(["--project-root", str(project), "--skill", "acl-prd"])
    assert code == 0


def test_entry_skill_has_no_gate(project: Path) -> None:
    code = gate.main(["--project-root", str(project), "--skill", "acl-product-brief"])
    assert code == 0
