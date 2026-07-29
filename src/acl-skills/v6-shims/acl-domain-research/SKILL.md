---
name: acl-domain-research
description: 'Deprecated — forwards to acl-deep-recon (domain type).'
---

# DEPRECATED — forwards to acl-deep-recon (domain type)

This skill was consolidated into `acl-deep-recon`. It is retained as a thin compatibility shim so existing invocations by name and `_acl/custom/acl-domain-research.toml` override files keep working. New work should invoke `acl-deep-recon` directly — it drafts deep-research prompts for outside tools, processes finished reports into downstream-ready summaries, and runs research directly, across market, domain, technical, competitive, user-voice, and academic-lit types (plus a select shape for choose-between decisions and custom types).

## On Activation

1. Resolve customization: `uv run {project-root}/_acl/scripts/resolve_customization.py --skill {skill-root} --key workflow`. This picks up any `{project-root}/_acl/custom/acl-domain-research.toml` and `acl-domain-research.user.toml` overrides for the legacy fields (`activation_steps_prepend`, `activation_steps_append`, `persistent_facts`, `on_complete`).
2. Emit a deprecation notice to the user (in their configured communication language): `acl-domain-research` is deprecated and forwards to `acl-deep-recon` with the domain type. To silence this notice and access the full new surface (draft/process/run modes, research types, verification levels, HTML briefing, handoffs), migrate `_acl/custom/acl-domain-research.toml` to `_acl/custom/acl-deep-recon.toml` and invoke `acl-deep-recon` directly.
3. Invoke `acl-deep-recon` with: **research type** `domain` (skip its type inference), the four legacy fields above as pre-resolved values, and the user's original input verbatim. `acl-deep-recon` takes the workflow from here — do not execute any further steps in this shim.
