# ACL Docs Console

Manager review UI for ACL-generated markdown under `_acl-output` / planning artifacts.

## What Approve / Reject does

**Approve** and **Reject** only change the YAML frontmatter `status` line inside the selected markdown file (`status: approved` or `status: rejected`). This is not a GitHub commit-status check or a separate approval database. Git is the transport for that file edit.

Intended vocabulary:

| Status | Meaning |
| --- | --- |
| `draft` | Author still working |
| `pending-review` | Ready for manager |
| `approved` / `rejected` | Manager decision in the MD file |

Downstream ACL skills halt until required upstream docs are `approved`.

## Files installed into your project

| Path | Purpose |
| --- | --- |
| `acl-docs-console.html` | Review UI (Approve / Reject / Edit) |
| `api/update-doc.js` | Vercel-style API that commits MD via GitHub Contents API |
| `vite-plugin-acl-docs.ts` | Optional local/static serve of `_acl-output` + manifest |
| `_acl/docs-console/README.md` | This guide (copy may also land at project root depending on install) |

## Hosted setup (managers)

1. Deploy the project (or a docs-only deploy) so `acl-docs-console.html` is reachable.
2. Expose `POST /api/update-doc` from `api/update-doc.js` (Vercel serverless works as-is).
3. Set environment variables:
   - `GITHUB_TOKEN` — fine-grained PAT with Contents: Read and write
   - `GITHUB_OWNER` / `GITHUB_REPO` (or `GITHUB_REPO_URL`)
   - `GITHUB_BRANCH` — default `main`
   - `DOCS_EDIT_SECRET` — optional shared password required by the console
4. Ensure `_acl-output/manifest.json` is published (Vite plugin does this on build; or generate equivalently).

## Author workflow

1. Finish an ACL doc skill → artifact `status: pending-review`.
2. Push to GitHub.
3. Manager opens the console → Approve or Reject (updates frontmatter `status`).
4. Author pulls.
5. Next ACL skill runs `check_docs_approval.py` and proceeds only when prerequisites are `approved`.

## Optional Vite wiring

```ts
import { aclDocsPlugin } from './vite-plugin-acl-docs'

export default {
  plugins: [aclDocsPlugin()],
}
```

## Disable the hard gate (solo use)

In `_acl/acl/config.yaml` (or via install prompt):

```yaml
docs_review_require_approval: false
```
