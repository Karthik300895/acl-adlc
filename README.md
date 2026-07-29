![ACL Method](banner-acl-adlc.png)

[![Version](https://img.shields.io/npm/v/acl-adlc?color=blue&label=version)](https://www.npmjs.com/package/acl-adlc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.12.0-brightgreen)](https://nodejs.org)
[![Python Version](https://img.shields.io/badge/python-%3E%3D3.10-blue?logo=python&logoColor=white)](https://www.python.org)
[![uv](https://img.shields.io/badge/uv-package%20manager-blueviolet?logo=uv)](https://docs.astral.sh/uv/)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-7289da?logo=discord&logoColor=white)](https://discord.gg/gk8jAdXWmj)

**Build More Architect Dreams** — An AI-driven agile development module for the ACL Method Module Ecosystem, the best and most comprehensive Agile AI Driven Development framework that has true scale-adaptive intelligence that adjusts from bug fixes to enterprise systems.

**100% free and open source.** No paywalls. No gated content. No gated Discord. We believe in empowering everyone, not just those who can pay for a gated community or courses.

## Why the ACL Method?

Traditional AI tools do the thinking for you, producing average results. ACL agents and facilitated workflows act as expert collaborators who guide you through a structured process to bring out your best thinking in partnership with the AI.

- **AI Intelligent Help** — Invoke the `acl-help` skill anytime for guidance on what's next
- **Scale-Domain-Adaptive** — Automatically adjusts planning depth based on project complexity
- **Structured Workflows** — Grounded in agile best practices across analysis, planning, architecture, and implementation
- **Specialized Agents** — 12+ domain experts (PM, Architect, Developer, UX, and more)
- **Party Mode** — Bring multiple agent personas into one session to collaborate and discuss
- **Complete Lifecycle** — From brainstorming to deployment

[Learn more at **docs.acl-adlc.org**](https://docs.acl-adlc.org)

---

## 🚀 What's Next for ACL?

**V6 is here and we're just getting started!** The ACL Method is evolving rapidly with optimizations including Cross Platform Agent Team and Sub Agent inclusion, Skills Architecture, ACL Builder v1, Dev Loop Automation, and so much more in the works.

**[📍 Check out the complete Roadmap →](https://docs.acl-adlc.org/roadmap/)**

---

## Quick Start

**Prerequisites**: [Node.js](https://nodejs.org) v20.12+ · [Python](https://www.python.org) 3.10+ · [uv](https://docs.astral.sh/uv/)

```bash
npx acl-adlc install
```

> Want the newest prerelease build? Use `npx acl-adlc@next install`. Expect higher churn than the default install.

Follow the installer prompts, then open your AI IDE (Claude Code, Cursor, etc.) in your project folder.

**Non-Interactive Installation** (for CI/CD):

```bash
npx acl-adlc install --directory /path/to/project --modules acl --tools claude-code --yes
```

Override any module config option with `--set <module>.<key>=<value>` (repeatable). Run `--list-options [module]` to see locally-known official keys (built-in modules plus any external officials cached on this machine):

```bash
npx acl-adlc install --yes \
  --modules acl --tools claude-code \
  --set acl.project_knowledge=research \
  --set acl.user_skill_level=expert
```

[See all installation options](https://docs.acl-adlc.org/how-to/non-interactive-installation/)

> **Not sure what to do?** Ask `acl-help` — it tells you exactly what's next and what's optional. You can also ask questions like `acl-help I just finished the architecture, what do I do next?`

## Modules

ACL Method extends with official modules for specialized domains. Available during installation or anytime after.

| Module                                                                                                            | Purpose                                           |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **[ACL Method (ACL)](https://github.com/acl-code-org/ACL-ADLC)**                                             | Core framework with 34+ workflows                 |
| **[ACL Builder (BMB)](https://github.com/acl-code-org/acl-builder)**                                           | Create custom ACL agents and workflows           |
| **[Test Architect (TEA)](https://github.com/acl-code-org/acl-adlc-test-architecture-enterprise)**             | Risk-based test strategy and automation           |
| **[Game Dev Studio (BMGD)](https://github.com/acl-code-org/acl-module-game-dev-studio)**                        | Game development workflows (Unity, Unreal, Godot) |
| **[Creative Intelligence Suite (CIS)](https://github.com/acl-code-org/acl-module-creative-intelligence-suite)** | Innovation, brainstorming, design thinking        |

## Web Bundles

V4 shipped web bundles. V6 brings them back, new and improved.

Web bundles package selected ACL skills for installation as **Google Gemini Gems** and **ChatGPT Custom GPTs**. Use them to do the upfront planning work (brainstorming, product briefs, PRDs, PRFAQs, UX specs, market and industry research) in your web LLM subscription, then bring the polished artifacts into your IDE for implementation. Planning runs on a flat-rate subscription instead of metered IDE tokens, which is a meaningful cost saver on longer engagements. Choose the best model available to you in Gemini or ChatGPT.

Current shelf: brainstorming, product brief, PRFAQ, PRD, UX, market & industry research.

**Browse and install at [aclcode.com/web-bundles](https://aclcode.com/web-bundles/)**. One card per bundle, inline install steps for Gemini and ChatGPT, one-click ZIP download. See [the web bundles guide](https://docs.acl-adlc.org/explanation/web-bundles/) for the concept.

## Documentation

[ACL Method Docs Site](https://docs.acl-adlc.org) — Tutorials, guides, concepts, and reference

**Quick links:**

- [Getting Started Tutorial](https://docs.acl-adlc.org/tutorials/getting-started/)
- [Upgrading from Previous Versions](https://docs.acl-adlc.org/how-to/upgrade-to-v6/)
- [Test Architect Documentation](https://acl-code-org.github.io/acl-adlc-test-architecture-enterprise/)

## Community

- [Discord](https://discord.gg/gk8jAdXWmj) — Get help, share ideas, collaborate
- [YouTube](https://youtube.com/@ACLCode) — Tutorials, master class, and more
- [X / Twitter](https://x.com/ACLCode)
- [Website](https://aclcode.com)
- [GitHub Issues](https://github.com/acl-code-org/ACL-ADLC/issues) — Bug reports and feature requests
- [Discussions](https://github.com/acl-code-org/ACL-ADLC/discussions) — Community conversations

## Support ACL

ACL is free for everyone and always will be. Star this repo, [buy me a coffee](https://buymeacoffee.com/acl), or email <contact@aclcode.com> for corporate sponsorship.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**ACL** and **ACL-ADLC** are trademarks of ACL Code, LLC. See [TRADEMARK.md](TRADEMARK.md) for details.

[![Contributors](https://contrib.rocks/image?repo=acl-code-org/ACL-ADLC)](https://github.com/acl-code-org/ACL-ADLC/graphs/contributors)

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for contributor information.
