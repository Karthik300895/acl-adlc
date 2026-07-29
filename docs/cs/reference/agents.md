---
title: Agenti
description: Výchozí ACL agenti s jejich skill ID, spouštěči nabídky a primárními workflow
sidebar:
  order: 2
---

## Výchozí agenti

Tato stránka uvádí výchozí ACL (Agile suite) agenty, kteří se instalují s ACL Method, společně s jejich skill ID, spouštěči nabídky a primárními workflow. Každý agent se vyvolává jako skill.

## Poznámky

- Každý agent je dostupný jako skill, generovaný instalátorem. Skill ID (např. `acl-dev`) se používá k vyvolání agenta.
- Spouštěče jsou krátké kódy nabídky (např. `CP`) a fuzzy shody zobrazené v nabídce každého agenta.
- Generování QA testů zajišťuje workflow skill `acl-qa-generate-e2e-tests`, dostupný přes Developer agenta. Plný Test Architect (TEA) žije ve vlastním modulu.

| Agent                       | Skill ID             | Spouštěče                                    | Primární workflow                                                                                   |
| --------------------------- | -------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Analyst (Mary)              | `acl-analyst`       | `BP`, `MR`, `DR`, `TR`, `CB`, `WB`, `DP`     | Brainstorm, průzkum trhu, doménový výzkum, technický výzkum, tvorba briefu, PRFAQ výzva, dokumentace projektu |
| Product Manager (John)      | `acl-pm`            | `CP`, `VP`, `EP`, `CE`, `IR`, `CC`           | Tvorba/validace/editace PRD, tvorba epiců a stories, připravenost implementace, korekce kurzu       |
| Architect (Winston)         | `acl-architect`     | `CA`, `IR`                                    | Tvorba architektury, připravenost implementace                                                      |
| Developer (Amelia)          | `acl-agent-dev`     | `QD`, `QA`, `CR`, `SP`, `ER`                  | Quick Dev, generování QA testů, revize kódu, plánování sprintu, retrospektiva epicu |
| UX Designer (Sally)         | `acl-ux-designer`   | `CU`                                          | Tvorba UX designu                                                                                   |
| Technical Writer (Paige)    | `acl-tech-writer`   | `DP`, `WD`, `US`, `MG`, `VD`, `EC`           | Dokumentace projektu, psaní dokumentu, aktualizace standardů, generování Mermaid, validace dok., vysvětlení konceptu |

## Typy spouštěčů

Spouštěče nabídky agentů používají dva různé typy vyvolání. Znalost typu spouštěče vám pomůže poskytnout správný vstup.

### Workflow spouštěče (bez argumentů)

Většina spouštěčů načítá strukturovaný soubor workflow. Zadejte kód spouštěče a agent zahájí workflow a vyzve vás k zadání vstupu v každém kroku.

Příklady: `CP` (tvorba PRD), `CA` (tvorba architektury), `QD` (Quick Dev)

### Konverzační spouštěče (vyžadují argumenty)

Některé spouštěče zahajují volnou konverzaci místo strukturovaného workflow. Tyto očekávají, že popíšete, co potřebujete, společně s kódem spouštěče.

| Agent | Spouštěč | Co poskytnout |
| --- | --- | --- |
| Technical Writer (Paige) | `WD` | Popis dokumentu k napsání |
| Technical Writer (Paige) | `US` | Preference nebo konvence k přidání do standardů |
| Technical Writer (Paige) | `MG` | Popis diagramu a typ (sekvence, vývojový diagram atd.) |
| Technical Writer (Paige) | `VD` | Dokument k validaci a oblasti zaměření |
| Technical Writer (Paige) | `EC` | Název konceptu k vysvětlení |

**Příklad:**

```text
WD Write a deployment guide for our Docker setup
MG Create a sequence diagram showing the auth flow
EC Explain how the module system works
```
