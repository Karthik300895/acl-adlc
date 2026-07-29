---
title: "Jak upgradovat na v6"
description: Migrace z ACL v4 na v6
sidebar:
  order: 3
---

Použijte instalátor ACL pro upgrade z v4 na v6, který zahrnuje automatickou detekci starších instalací a asistenci při migraci.

## Kdy to použít

- Máte nainstalovaný ACL v4 (složka `.acl-adlc`)
- Chcete migrovat na novou architekturu v6
- Máte existující plánovací artefakty k zachování

:::note[Předpoklady]
- Node.js 20.12+
- Existující instalace ACL v4
:::

## Kroky

### 1. Spusťte instalátor

Postupujte podle [instrukcí instalátoru](./install-acl.md).

### 2. Zpracování starší instalace

Když je detekována v4, můžete:

- Nechat instalátor zálohovat a odstranit `.acl-adlc`
- Ukončit a zpracovat vyčištění ručně

Pokud jste pojmenovali složku acl method jinak, musíte ji odstranit ručně.

### 3. Vyčištění IDE skills

Ručně odstraňte starší v4 IDE příkazy/skills — například pokud máte Claude Code, hledejte vnořené složky začínající na acl a odstraňte je:

- `.claude/commands/`

Nové v6 skills se instalují do:

- `.claude/skills/`

### 4. Migrace plánovacích artefaktů

**Pokud máte plánovací dokumenty (Brief/PRD/UX/Architektura):**

Přesuňte je do `_acl-output/planning-artifacts/` s popisnými názvy:

- Zahrňte `PRD` v názvu souboru pro PRD dokumenty
- Zahrňte `brief`, `architecture` nebo `ux-design` odpovídajícím způsobem
- Rozdělené dokumenty mohou být v pojmenovaných podsložkách

**Pokud jste uprostřed plánování:** Zvažte restart s v6 workflow. Použijte existující dokumenty jako vstupy — nové workflow s progresivním objevováním, webovým vyhledáváním a plan mode IDE produkují lepší výsledky.

### 5. Migrace probíhajícího vývoje

Pokud máte vytvořené nebo implementované stories:

1. Dokončete instalaci v6
2. Umístěte `epics.md` nebo `epics/epic*.md` do `_acl-output/planning-artifacts/`
3. Spusťte workflow `acl-sprint-planning` Scrum Mastera
4. Řekněte SM, které epicy/stories jsou již dokončené

## Co získáte

**Sjednocená struktura v6:**

```text
váš-projekt/
├── _acl/               # Jedna instalační složka
│   ├── _config/         # Vaše přizpůsobení
│   │   └── agents/      # Soubory přizpůsobení agentů
│   ├── core/            # Univerzální základní framework
│   ├── acl/             # Modul ACL Method
│   ├── bmb/             # ACL Builder
│   └── cis/             # Creative Intelligence Suite
└── _acl-output/        # Výstupní složka (v4 to byla složka dokumentů)
```

## Migrace modulů

| Modul v4                      | Stav v6                            |
| ----------------------------- | ---------------------------------- |
| `.acl-2d-phaser-game-dev`    | Integrován do modulu BMGD          |
| `.acl-2d-unity-game-dev`     | Integrován do modulu BMGD          |
| `.acl-godot-game-dev`        | Integrován do modulu BMGD          |
| `.acl-infrastructure-devops` | Zastaralý — nový DevOps agent brzy |
| `.acl-creative-writing`      | Neadaptován — nový v6 modul brzy   |

## Klíčové změny

| Koncept         | v4                                   | v6                                     |
| --------------- | ------------------------------------ | -------------------------------------- |
| **Core**        | `_acl-core` byl vlastně ACL Method | `_acl/core/` je univerzální framework |
| **Method**      | `_acl-adlc`                       | `_acl/acl/`                           |
| **Konfigurace** | Přímá editace souborů                | `config.yaml` pro každý modul          |
| **Dokumenty**   | Vyžadované nastavení shardů          | Plně flexibilní, auto-skenování        |
