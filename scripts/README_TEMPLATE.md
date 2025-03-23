# GameDataBase

[![Patrons](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/GameDataBase)
[![Monthly](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dgamedatabase%26type%3Dpledges%26suffix%3D%2520USD%2520%252F%2520MO&color=FF5481&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/gamedatabase)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://patreon.com/GameDataBase)[![Creation Count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.creation_count&suffix=%20Entries&color=blue&label=&style=for-the-badge)](https://patreon.com/GameDataBase)

[Join GameDataBase on Patreon and consider supporting the project](https://www.patreon.com/GameDataBase)

GameDataBase project aims to provide the most detailed information about every videogame (console, computer and arcade) for sorting purposes. Goal is to unify in one place all available useful information for emulation projects like MiSTer, to make possible more efficient and specific searches. GameDataBase will be published in different files (by platform).

## CSV Fields

| **Field** | Description |
|-----------|-------------|
| **Screen title @ Exact** | Original title exactly as displayed in-game, particularly useful for preserving Japanese titles in their original characters |
| **Cover Title @ Exact** | Title exactly as shown on physical media cover/packaging |
| **ID** | Unique identifier for different versions/releases of the same game |
| **Date** | Release date in YYYY-MM-DD format (partial dates like YYYY or YYYY-MM are acceptable) |
| **Developer** | Company/team that developed the game |
| **Publisher** | Company that published/distributed the game |
| **Tags** | Game classification tags using the defined taxonomy |
| **MAME filename** | ROM filename as used in MAME, only for Arcade games |
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

Multiple tags and attributes can be combined. For example:

```ts
#genre:sports>wrestling #players:2:vs
```

This means: Wrestling sports game, 2 players, versus mode.

Tag combinations examples:

```ts
#genre:action>runandgun               // Action game with run and gun theme
#genre:sports>soccer #players:2       // Soccer game for 2 players
#genre:board>chess #input:joystick>4  // Chess game with 4-way joystick control  
#genre:shmup>v #search:tate>cw        // Vertical shoot'em up in clockwise TATE mode
#genre:puzzle>drop #players:2:vs      // Drop puzzle game with 2 players in versus mode
#genre:adventure>survivalhorror       // Adventure game with survival horror elements
#input:joystick>4:buttons>2           // 4-way joystick and 2 buttons
#players:2:coop                       // 2 players cooperative
#based:movie #lang:en                 // English game based on a movie
```

The `>` level only applies to its immediate `:` subtag.


---

## Tags Overview

<!-- INSERT GENERATED TABLES HERE -->

---

Thank you for joining GameDataBase! Your support inspires us to keep improving and sharing exciting updates.
