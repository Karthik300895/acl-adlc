---
title: 'Comment obtenir des réponses à propos de ACL'
description: Utiliser un LLM pour répondre rapidement à vos questions sur ACL
sidebar:
  order: 5
---

Utilisez l’aide intégrée de ACL, la documentation source ou la communauté pour obtenir des réponses — du plus rapide au plus approfondi.

## 1. Demandez à ACL-Help

Le moyen le plus rapide d’obtenir des réponses. Le skill `acl-help` est disponible directement dans votre session IA et répond à plus de 80 % des questions — il inspecte votre projet, voit ce que vous avez accompli et vous dit quoi faire ensuite.

```
acl-help J'ai une idée de SaaS et je connais toutes les fonctionnalités. Par où commencer ?
acl-help Quelles sont mes options pour le design UX ?
acl-help Je suis bloqué sur le workflow PRD
```

:::tip
Vous pouvez également utiliser `/acl-help` ou `$acl-help` selon votre plateforme, mais `acl-help` tout seul devrait fonctionner partout.
:::

## 2. Approfondissez avec les sources

ACL-Help s’appuie sur votre configuration installée. Pour les questions sur les éléments internes de ACL, son historique ou son architecture — ou si vous faites des recherches sur ACL avant de l’installer — pointez votre IA directement vers les sources.

Clonez ou ouvrez le [dépôt ACL-ADLC](https://github.com/acl-code-org/ACL-ADLC) et posez vos questions à votre IA. Tout outil capable d’utiliser des agents (Claude Code, Cursor, Windsurf, etc.) peut lire les sources et répondre directement à vos questions.

:::note[Exemple]
**Q :** « Quel est le moyen le plus rapide de construire quelque chose avec ACL ? »

**R :** Lancez `acl-quick-dev`. Donnez-lui une intention directe, une issue, une spécification ou une story planifiée ; il utilise le contexte disponible et choisit la profondeur de clarification, de planification, d’implémentation et de revue nécessaire.
:::

**Conseils pour de meilleures réponses :**

- **Soyez précis** — « Que fait l’étape 3 du workflow PRD ? » est mieux que « Comment fonctionne le PRD ? »
- **Vérifiez les affirmations surprenantes** — Les LLM font parfois des erreurs. Consultez le fichier source ou posez la question sur Discord.

### Vous n’utilisez pas d’agent ? Utilisez le site de documentation

Si votre IA ne peut pas lire des fichiers locaux (ChatGPT, Claude.ai, etc.), importez [llms-full.txt](https://acl-code-org.github.io/ACL-ADLC/llms-full.txt) dans votre session — c’est un instantané en un seul fichier de la documentation ACL.

## 3. Demandez à quelqu’un

Si ni ACL-Help ni la source n’ont répondu à votre question, vous avez maintenant une bien meilleure question à poser.

| Canal                   | Utilisé pour                         |
| ----------------------- | ------------------------------------ |
| Forum `help-requests`   | Questions                            |
| `#suggestions-feedback` | Idées et demandes de fonctionnalités |

**Discord :** [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj)

**GitHub Issues :** [github.com/acl-code-org/ACL-ADLC/issues](https://github.com/acl-code-org/ACL-ADLC/issues)
_Toi !_
_Bloqué_
_dans la file d’attente—_
_qui_
_attends-tu ?_

_La source_
_est là,_
_facile à voir !_

_Pointez_
_votre machine._
_Libérez-la._

_Elle lit._
_Elle parle._
_Demandez—_

_Pourquoi attendre_
_demain_
_quand tu as déjà_
_cette journée ?_

_—Claude_
