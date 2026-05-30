# GameDataBase

[![Patrons](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/GameDataBase)
[![Monthly](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dgamedatabase%26type%3Dpledges%26suffix%3D%2520USD%2520%252F%2520MO&color=FF5481&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/gamedatabase)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://patreon.com/GameDataBase)[![Creation Count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.creation_count&suffix=%20Entries&color=blue&label=&style=for-the-badge)](https://patreon.com/GameDataBase)

[Join GameDataBase on Patreon and consider supporting the project](https://www.patreon.com/GameDataBase)

GameDataBase project aims to provide the most detailed information about every videogame (console, computer and arcade) for sorting purposes. Goal is to unify in one place all available useful information for emulation projects like MiSTer, to make possible more efficient and specific searches. GameDataBase will be published in different files (by platform).

## CSV Fields

| **Field** | Description |
|-----------|-------------|
| **Title** | Game title |
| **Title (exact)** | Game title exactly as displayed in box covers, flyers, or broadcasts, particularly useful for preserving Japanese original characters |
| **Title screen** | In-game title |
| **Title screen (exact)** | Title exactly as shown on screen, particularly useful for preserving Japanese original characters |
| **ID** | Unique identifier for different versions/releases of the same game |
| **Region** | Release region |
| **Date** | Release date in YYYY-MM-DD format (partial dates like YYYY or YYYY-MM are acceptable) |
| **Developer** | Company/team that developed the game |
| **Publisher** | Company that published/distributed the game |
| **Tags** | Game classification tags using the defined taxonomy |
| **MD5 hash** | MD5 checksum of the game file |
| **SHA1 hash** | SHA1 checksum of the game file |
| **SHA256 hash** | SHA256 checksum of the game file |
| **SHA512 hash** | SHA512 checksum of the game file |

## Guide for tags

GameDataBase uses a simple tag taxonomy to classify games in as many ways as possible. These tags' main purpose is to improve sorting and searching. Of course, this list will be updated as new ones emerge from darkness.

## Tag Structure Guide

GameDataBase uses a hierarchical tag system with up to three levels of depth:

| Level | Symbol | Description       | Example                  |
|-------|--------|-------------------|--------------------------|
| 1     | `#`    | Main tag          | `#genre`                |
| 2     | `:`    | Subtag            | `#genre:sports`         |
| 3     | `>`    | Children value    | `#genre:sports>wrestling` |

Quick rules:

- A game usually combines multiple tags, separated by spaces.
- The most common base pattern in this dataset is `#genre + #players + #lang`.
- The `>` level only applies to its immediate `:` subtag.

Basic example:

```ts
#genre:sports>wrestling #players:2:vs
```

This means: Wrestling sports game, 2 players, versus mode.

Tag combinations examples:

```ts
#genre:action>platformer #players:1 #lang:en                            // Action platform game, single player, English language
#genre:fighting #players:2:vs #lang:ja #input:joystick>8:buttons>2      // Fighting game, 2-player versus, Japanese, 8-way joystick and 2 buttons
#genre:action>platformer #players:2:coop #lang:en #save:backup          // Action platform game, 2-player co-op, English, save backup support
#genre:puzzle>drop #players:2:alt #lang:en #save:password               // Drop puzzle game, 2-player alternating, English, password save system
#compatibility:gameboy>mono #addon:link>gamelinkcable #players:2:vs     // Original monochrome Game Boy mode, link cable accessory, 2-player versus
#arcadeboard:sega>naomi #mameparent #mamerom:virtuatennis>epr-12345     // Sega NAOMI arcade board with MAME parent and dynamic ROM/subfile reference
#genre:shmup>v #search:tate>cw #players:1 #lang:ja                      // Vertical shoot'em up, clockwise TATE orientation, single player, Japanese
```

## Skip Configuration

Tag Guardian supports `skip:` as an opt-out flag for these two cases:

<details>
<summary><strong>1) Skip Subtags (main tag)</strong></summary>

```yaml
mamerom:
  description: "Merged MAME ROM ZIP file > MAME ROM ZIP subfile"
  skip:

compilation:
  description: "Compilation of previously released games : ID"
  skip:
```

</details>

<details>
<summary><strong>2) Skip Subtag Childrens</strong></summary>

```yaml
input:
  description: "Input system"
  subtag:
    joystick:
      description: "Joystick"
      skip:
```

</details>

Behavior summary:

- `skip` at main tag level skips subtag and children validation for that main tag.
- `skip` at subtag level skips children validation for that specific subtag.


---

## Tags Overview

<!-- INSERT GENERATED TABLES HERE -->

---

Thank you for joining GameDataBase! Your support inspires us to keep improving and sharing exciting updates.
