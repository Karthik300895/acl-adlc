---
name: acl-editorial-review-prose
description: 'Deprecated — forwards to acl-review.'
---

Merged into `acl-review`. Invoke the `acl-review` skill on the same content with only the `prose` lens, passing through the same inputs and any `also_consider` areas. Present the findings in the legacy shape: a three-column markdown table `| Original Text | Revised Text | Changes |` — no Pass column, no preamble above the table. If no issues are found, output exactly: `No editorial issues identified`.
