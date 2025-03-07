# GameDataBase

[![Patrons](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.patron_count&suffix=%20Patrons&color=FF5441&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/GameDataBase)
[![Monthly](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.pledge_sum&prefix=$%20&suffix=%20EUR%20/%20MO&color=FF5481&label=Patreon&logo=Patreon&logoColor=FF5441&style=for-the-badge)](https://patreon.com/GameDataBase)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://patreon.com/GameDataBase)[![Creation Count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F11667791&query=data.attributes.creation_count&suffix=%20Entries&color=blue&label=&style=for-the-badge)](https://patreon.com/GameDataBase)

[Join GameDataBase on Patreon and consider supporting the project](https://www.patreon.com/GameDataBase)

GameDataBase project aims to provide the most detailed information about every videogame (console, computer and arcade) for sorting purposes. Goal is to unify in one place all available useful information for emulation projects like MiSTer, to make possible more efficient and specific searchs. GameDataBase will be published in different files (by platform).

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
| **MAME filename** | ROM filename as used in MAME |
| **MD5 hash** | MD5 checksum of the game file |
| **SHA1 hash** | SHA1 checksum of the game file |
| **SHA256 hash** | SHA256 checksum of the game file |
| **SHA512 hash** | SHA512 checksum of the game file |

## Guide for tags

GameDataBase uses a simple tag taxonomy to classify games in as many ways as possible. These tags main purpose is to improve sorting and searching. Of course this list will be updated as new ones emerge from darkness.

### Stand Alone Tags

| Tag | Description |
|-----|-------------|
| `#mameparent` | MAME parent file |
| `#bios` | BIOS game |
| `#promo` | Promotion product |
| `#qsound` | QSound |

## Tag Structure Guide

GameDataBase uses a hierarchical tag system with up to three levels of depth:

| Level | Symbol | Description | Example |
|-------|--------|-------------|---------|
| 1 | `#` | Main category | `#genre` |
| 2 | `:` | Subcategory | `#genre:sports` |
| 3 | `>` | Specific attribute | `#genre:sports>wrestling` |

Multiple categories and attributes can be combined. For example:

```ts
#genre:sports>wrestling #players:2 #players:vs
```

This means: Wrestling sports game, 2 players, versus mode

Tag combinations examples:

```ts
#genre:action>motorcycle              // Action game with motorcycle theme
#genre:sports>soccer #players:2       // Soccer game for 2 players
#genre:board>chess #input:joystick>4  // Chess game with 4-way joystick control  
#genre:shmup>v #tate                  // Vertical shoot'em up in TATE mode
#genre:puzzle>drop #players:vs        // Drop puzzle game with versus mode
#genre:adventure:shooting             // Adventure game with shooting elements
#input:joystick>4 #input:buttons>2    // 4-way joystick and 2 buttons
#players:2 #players:coop              // 2 players cooperative
#based:movie #lang:en                 // English game based on a movie
```

The `>` level only applies to its immediate `:` subcategory.

## Input System Tags

| Tag | Description | Values | Value Description |
|-----|-------------|--------|------------------|
| `#input:joystick` | Joystick input | `>2h`<br>`>2v`<br>`>3`<br>`>4`<br>`>8` | 2-way horizontal<br>2-way vertical<br>3-way<br>4-way<br>8-way |
| `#input:doublejoystick` | Dual joystick setup | `>2h`<br>`>2v`<br>`>3`<br>`>4`<br>`>8` | 2-way horizontal<br>2-way vertical<br>3-way<br>4-way<br>8-way |
| `#input:buttons` | Action buttons | `>1` to `>23`<br>`>pneumatic` | Number of buttons<br>Pneumatic buttons |
| `#input:keys` | Keyboard keys | `>1` to `>23` | Number of keys |
| `#input:pedals` | Foot pedals | `>1` to `>23` | Number of pedals |

## Players Tags

| Tag | Description |
|-----|-------------|
| `#players:1` | 1 player |
| `#players:2` | 2 players |
| `#players:3` | 3 players |
| `#players:4` | 4 players |
| `#players:6` | 6 players |
| `#players:8` | 8 players |
| `#players:10` | 10 players |
| `#players:coop` | Cooperative |
| `#players:vs` | Versus |
| `#players:alt` | Alternating |

## Screen Tags

| Tag | Description |
|-----|-------------|
| `#tate` | Vertical screen |
| `#tate:cw` | Vertical screen (clockwise) |
| `#tate:ccw` | Vertical screen (counter clockwise) |

## Game Collection Tags

| Tag | Description |
|-----|-------------|
| `#multigame` | Multiple games in one cartridge/disk |
| `#multigame:compilation` | Official compilation of games |

## License Tags

| Tag | Description |
|-----|-------------|
| `#unlicensed` | Unlicensed game |
| `#unlicensed:bootleg` | Bootleg/pirated game |
| `#unlicensed:hack` | Hacked game |
| `#unlicensed:translation` | Fan translation |
| `#unlicensed:aftermarket` | Made after original market cycle |

## Genre Tags

| Main Tag | Description | Subgenres | Subgenre Names |
|----------|-------------|-----------|----------------|
| `#genre:action` | Action | - | - |
| `#genre:adventure` | Adventure | `:pointandclick`<br>`:shooting`<br>`:shooter`<br>`:runandgun`<br>`:hackandslash`<br>`:survivalhorror`<br>`:dungeoncrawler` | Point and click<br>Shooting gallery<br>Shooter<br>Run and gun<br>Hack and slash<br>Survival Horror<br>Dungeon crawler |
| `#genre:platformer` | Platformer | - | - |
| `#genre:fighting` | Fighting | - | - |
| `#genre:brawler` | Beat'em up | - | - |
| `#genre:rpg` | RPG | `>a`<br>`>j`<br>`>s` | Action RPG<br>JRPG<br>Strategy RPG |
| `#genre:sports` | Sports | `>soccer`<br>`>basketball`<br>`>baseball`<br>`>volleyball`<br>`>rugby`<br>`>football`<br>`>dodgeball`<br>`>hockey`<br>`>skiing`<br>`>skateboarding`<br>`>snowboarding`<br>`>tennis`<br>`>pingpong`<br>`>paddle`<br>`>squash`<br>`>badminton`<br>`>cycling`<br>`>formula1`<br>`>rally`<br>`>nascar`<br>`>motogp`<br>`>motocross`<br>`>golf`<br>`>cricket`<br>`>boxing`<br>`>kickboxing`<br>`>wrestling`<br>`>sumo`<br>`>karate`<br>`>judo`<br>`>kendo`<br>`>decathlon`<br>`>archery`<br>`>swimming`<br>`>rowing`<br>`>kayak` | Soccer<br>Basketball<br>Baseball<br>Volleyball<br>Rugby<br>American football<br>Dodgeball<br>Ice Hockey<br>Skiing<br>Skateboarding<br>Snowboarding<br>Tennis<br>Ping Pong<br>Paddle<br>Squash<br>Badminton<br>Cycling<br>Formula 1<br>Rally<br>NASCAR<br>Moto GP<br>Motocross<br>Golf<br>Cricket<br>Boxing<br>Kick Boxing<br>Wrestling<br>Sumo<br>Karate<br>Judo<br>Kendo<br>Decathlon<br>Archery<br>Swimming<br>Rowing<br>Kayak |
| `#genre:shmup` | Shoot'em up | `>h`<br>`>v`<br>`>i`<br>`>danmaku` | Horizontal<br>Vertical<br>Isometric<br>Bullet hell |
| `#genre:puzzle` | Puzzle | `>drop` | Drop pieces puzzle |
| `#genre:racing` | Racing | `>combat` | Combat racing |
| `#genre:rhythm` | Rhythm | - | - |
| `#genre:shooter` | Shooter | `>3p` | Third person |
| `#genre:board` | Board game | `>chess`<br>`>shougi`<br>`>go`<br>`>mahjong`<br>`>reversi`<br>`>othello` | Chess<br>Shōgi<br>Go<br>Mahjong<br>Reversi<br>Othello |
| `#genre:sim` | Simulation | `:flightsim`<br>`:trainsim`<br>`:datesim`<br>`:lifesim`<br>`:farmsim`<br>`:petsim` | Flight simulator<br>Train simulator<br>Date simulator<br>Life simulator<br>Farm simulator<br>Pet simulator |
| `#genre:arcade` | Arcade | `:pinball`<br>`:jackpot`<br>`:pachinko`<br>`:darts`<br>`:bowling`<br>`:kiddieride` | Pinball<br>Jackpot<br>Pachinko<br>Darts<br>Bowling<br>Kiddie ride |
| `#genre:other` | Other | `:quiz`<br>`:fishing`<br>`:cooking`<br>`:cardgame`<br>`:cards`<br>`:hanafuda`<br>`:billiard`<br>`:minigames`<br>`:jankenpon`<br>`:mogurataiji`<br>`:visualnovel`<br>`:god`<br>`:building`<br>`:derby`<br>`:strip`<br>`:vending`<br>`:redemption`<br>`:mechanical`<br>`:educational`<br>`:marketing`<br>`:media`<br>`:drawing`<br>`:karaoke`<br>`:application`<br>`:test`<br>`:sdk`<br>`:slideshow`<br>`:sound` | Quiz game<br>Fishing<br>Cooking<br>Card game<br>Classic cards<br>Hanafuda<br>Billiard<br>Mini games<br>Rock paper scissors<br>Whac-A-Mole<br>Visual novel<br>God game<br>Building<br>Derby horse ride<br>Strip<br>Vending machine<br>Redemption<br>Mechanical<br>Educational<br>Marketing<br>Non-game media<br>Drawing<br>Karaoke<br>Application<br>Test<br>Software Development Kit<br>Picture slideshow<br>Only sound |

## Language Tags

| Tag | Description |
|-----|-------------|
| `#lang:ja` | Japanese |
| `#lang:en` | English |
| `#lang:es` | Spanish |
| `#lang:fr` | French |
| `#lang:pt` | Portuguese |
| `#lang:de` | German |
| `#lang:it` | Italian |
| `#lang:sv` | Swedish |
| `#lang:nl` | Dutch |
| `#lang:no` | Norwegian |
| `#lang:fi` | Finnish |
| `#lang:cs` | Czech |
| `#lang:sl` | Slovenian |
| `#lang:kh` | Simplified Chinese |
| `#lang:ch` | Chinese |
| `#lang:ko` | Korean |
| `#lang::fremen` | Fremen |

## Media Source Tags

| Tag | Description |
|-----|-------------|
| `#based:movie` | Based on a movie |
| `#based:manganime` | Based on manga/anime |
| `#official:sports` | Official sports license |
| `#endorsed:celeb` | Celebrity endorsed |
| `#endorsed:company` | Company/brand endorsed |

## System Port Tags

| Original System | Tag | Description |
|----------------|-----|-------------|
| Arcade | `#port:arcade` | Arcade port |
| Commodore | `#port:c64`<br>`#port:amiga` | Commodore 64<br>Commodore Amiga |
| Apple | `#port:apple2`<br>`#port:mac` | Apple II<br>Apple Macintosh |
| SEGA | `#port:sg1000`<br>`#port:gamegear`<br>`#port:mark3`<br>`#port:megadrive`<br>`#port:saturn` | SG-1000<br>Game Gear<br>Mark III / Master System<br>MegaDrive / Genesis<br>Saturn |
| Nintendo | `#port:famicom`<br>`#port:superfamicom`<br>`#port:gameboy` | Famicom / NES<br>Super Famicom / SNES<br>GameBoy |
| NEC | `#port:pc88`<br>`#port:pc98`<br>`#port:pcengine` | PC-8801<br>PC-9801<br>PC Engine |

## Re-release Collection Tags

| Publisher | Tag | Description |
|-----------|-----|-------------|
| Nintendo | `#rerelease:virtualconsole`<br>`#rerelease:switchonline`<br>`#rerelease:ereader` | Virtual Console (Wii/WiiU/3DS)<br>Switch Online<br>e-Reader |
| SEGA | `#rerelease:segaclassic`<br>`#rerelease:segaages`<br>`#rerelease:mdclassics` | SEGA Classic<br>SEGA Ages<br>MegaDrive/Genesis Classics |
| Konami | `#rerelease:castlevaniaanniversary`<br>`#rerelease:contraanniversary` | Castlevania Collection<br>Contra Collection |
| NAMCO | `#rerelease:namcoanthology`<br>`#rerelease:namcot` | NAMCO Anthology<br>NAMCOT Collection |

## Hardware Add-on Tags

### SEGA Hardware

| Tag | Description | Hidden Features |
|-----|-------------|----------------|
| `#addon:bikehandle` | SEGA Bike Handle | - |
| `#addon:graphicboard` | SEGA Graphic Board | - |
| `#addon:3dglasses` | SEGA 3-D Glasses | `>hidden` |
| `#addon:fmsoundunit` | SEGA FM Sound Unit | `>hidden` |
| `#addon:lightphaser` | SEGA Light Phaser | - |
| `#addon:paddlecontrol` | SEGA Paddle Control | - |
| `#addon:sportspad` | SEGA Sports Pad | - |
| `#addon:6button` | SEGA Six Button Control Pad | - |
| `#addon:menacer` | SEGA Menacer | - |
| `#addon:segavr` | SEGA VR Headset | - |
| `#addon:megamodem` | SEGA Mega Modem | - |
| `#addon:megaanser` | SEGA Mega Anser | - |
| `#addon:mouse>md` | SEGA Mouse | - |

### Nintendo Hardware

| Tag | Description | Subtype |
|-----|-------------|---------|
| `#addon:rob` | R.O.B. | `>gyro` (Gyro Set)<br>`>block` (Block Set) |
| `#addon:zapper` | Nintendo Zapper | - |
| `#addon:powerglove` | Power Glove | - |
| `#addon:supergameboy` | Super GameBoy | 1 & 2 |
| `#addon:64dd` | Nintendo 64DD | - |
| `#addon:transferpak` | Transfer Pak | - |
| `#addon:rumblepak` | Rumble Pak | - |
| `#addon:expansionpak` | Expansion Pak | - |
| `#addon:keyboard` | Keyboard | `>fc` (Famicom)<br>`>n64` (Nintendo 64) |

### NEC Hardware

| Tag | Description |
|-----|-------------|
| `#addon:mouse>pce` | PC Engine Mouse |
| `#addon:mouse>pcfx` | PC-FX Mouse |
| `#addon:10key` | 10 Key Controller Pad |
| `#addon:pcemultitap` | Multitap / TurboTap |
| `#addon:cdromrom` | CD-ROM² / Super CD-ROM² |
| `#addon:arcadecard` | Arcade Card Pro/Duo |

### Storage & Memory

| Tag | Description |
|-----|-------------|
| `#addon:backupramcart` | Mega-CD Backup RAM Cart |
| `#addon:memorybase128` | Memory Base 128 |
| `#addon:controllerpak` | N64 Controller Pak |
| `#addon:turbofile` | Turbo File Series |
| `#addon:superturbofile` | Super Turbo File |

### Communication Devices

| Tag | Description |
|-----|-------------|
| `#addon:gamelinkcable` | Game Link Cable |
| `#addon:taisencable` | Taisen/Gear-to-Gear Cable |
| `#addon:ngplink` | NeoGeo Pocket Link |
| `#addon:radiounitwireless` | Radio Unit Wireless |
| `#addon:setsuzoku` | NGP-Dreamcast Link |

### Specialized Controllers

| Tag | Description |
|-----|-------------|
| `#addon:ddr` | Dance Dance Revolution |
| `#addon:mahjongcontroller` | Mahjong Controller |
| `#addon:pachinkocontroller` | Pachinko Controller |
| `#addon:arkanoid` | Arkanoid Controller |
| `#addon:justifier` | The Justifier |
| `#addon:gamegun` | Laser GameGun |

### Audio & Visual

| Tag | Description |
|-----|-------------|
| `#addon:karaokestudio` | Karaoke Studio |
| `#addon:pocketcamera` | GameBoy Camera |
| `#addon:pocketprinter` | GameBoy Printer |
| `#addon:printbooster` | Print Booster |
| `#addon:photoreader` | Photo Reader |

## System Enhancement Tags

| Tag | Description |
|-----|-------------|
| `#addon:megacd` | SEGA Mega-CD / SEGA-CD |
| `#addon:super32x` | SEGA 32X |
| `#addon:disksystem` | Famicom Disk System |
| `#addon:biosensor` | Bio Sensor |
| `#addon:smartmediacard` | SmartMedia Card |

## Arcade Board Tags

### CAPCOM Boards

| Tag | Description |
|-----|-------------|
| `#arcadeboard:capcom>cps` | CAPCOM CP System |
| `#arcadeboard:capcom>cpsdash` | CAPCOM CP System Dash |
| `#arcadeboard:capcom>cpschanger` | CAPCOM CP System Changer |
| `#arcadeboard:capcom>cps2` | CAPCOM CP System II |
| `#arcadeboard:capcom>cps3` | CAPCOM CP System III |

### SEGA Boards

| Tag | Description |
|-----|-------------|
| `#arcadeboard:sega>vco` | SEGA VCO Object |
| `#arcadeboard:sega>1` | SEGA System 1 |
| `#arcadeboard:sega>2` | SEGA System 2 |
| `#arcadeboard:sega>16` | SEGA System 16 |
| `#arcadeboard:sega>16a` | SEGA System 16A |
| `#arcadeboard:sega>16b` | SEGA System 16B |
| `#arcadeboard:sega>16c` | SEGA System 16C |
| `#arcadeboard:sega>18` | SEGA System 18 |
| `#arcadeboard:sega>24` | SEGA System 24 |
| `#arcadeboard:sega>32` | SEGA System 32 |
| `#arcadeboard:sega>m32` | SEGA System Multi 32 |
| `#arcadeboard:sega>c` | SEGA System C |
| `#arcadeboard:sega>c2` | SEGA System C-2 |
| `#arcadeboard:sega>e` | SEGA System E |
| `#arcadeboard:sega>x` | SEGA X Board |
| `#arcadeboard:sega>y` | SEGA Y Board |
| `#arcadeboard:sega>stv` | SEGA Titan Video |

### IREM Boards

| Tag | Description |
|-----|-------------|
| `#arcadeboard:irem>m10` | Irem M10 |
| `#arcadeboard:irem>m15` | Irem M15 |
| `#arcadeboard:irem>m27` | Irem M27 |
| `#arcadeboard:irem>m52` | Irem M52 |
| `#arcadeboard:irem>m57` | Irem M57 |
| `#arcadeboard:irem>m58` | Irem M58 |
| `#arcadeboard:irem>m62` | Irem M62 |
| `#arcadeboard:irem>m72` | Irem M72 |
| `#arcadeboard:irem>m92` | Irem M92 |
| `#arcadeboard:irem>m107` | Irem M107 |

### TAITO Boards

| Tag | Description |
|-----|-------------|
| `#arcadeboard:taito>xsystem` | X System |
| `#arcadeboard:taito>bsystem` | B System |
| `#arcadeboard:taito>hsystem` | H System |
| `#arcadeboard:taito>lsystem` | L System |
| `#arcadeboard:taito>zsystem` | Z System |
| `#arcadeboard:taito>osystem` | O System |
| `#arcadeboard:taito>f1` | F1/F2 System |
| `#arcadeboard:taito>f2` | F2 System |
| `#arcadeboard:taito>lg` | LG System |

### Other Manufacturers

| Tag | Description |
|-----|-------------|
| `#arcadeboard:toaplan>1` | Toaplan Version 1 |
| `#arcadeboard:toaplan>2` | Toaplan Version 2 |
| `#arcadeboard:snk>mvs` | SNK Multi Video System |
| `#arcadeboard:jaleco>ms1` | Jaleco Mega System 1 |

## Embedded Hardware Tags

### Memory & Storage

| Tag | Description |
|-----|-------------|
| `#embed:battery` | Battery backup |
| `#embed:flashram` | Flash RAM |
| `#embed:feram` | Ferroelectric RAM |
| `#embed:eeprom` | EEPROM |
| `#embed:ram` | Extra RAM |

### Enhancement Chips

| Tag | Description | Manufacturer |
|-----|-------------|-------------|
| `#embed:svp` | Virtua Processor | SEGA |
| `#embed:lockon` | Lock-On Technology | SEGA |
| `#embed:mmc5` | MMC5 chip | Nintendo |
| `#embed:vrc6` | VRC VI chip | Konami |
| `#embed:vrc7` | VRC VII chip | Konami |
| `#embed:n163` | 163 chip | NAMCO |
| `#embed:5b` | 5B chip | Sunsoft |
| `#embed:m50805` | M50805 chip | Mitsubishi |
| `#embed:7755` | µPD7755C chip | NEC |
| `#embed:7756` | µPD7756C chip | NEC |

### Special Hardware

| Tag | Description |
|-----|-------------|
| `#embed:led` | LED lights |
| `#embed:rtc` | Real-Time Clock chip |
| `#embed:rj11` | RJ-11 port |
| `#embed:gbkiss` | GB Kiss |
| `#embed:pocketsonar` | Pocket Sonar |
| `#embed:smartmedia` | SmartMedia Double Slot |
| `#embed:jcart` | J-Cart |
| `#embed:kogame` | Kogame Cassette Slot |

## Save System Tags

| Tag | Description |
|-----|-------------|
| `#save:password` | Password save |
| `#save:backup` | Battery backup save |

## Display Technology Tags

| Tag | Description |
|-----|-------------|
| `#3d:stereoscopic` | Stereoscopic 3D |
| `#3d:anaglyph` | Anaglyph 3D |

## Format Tags

### Cartridge Types

| Tag | Description | Capacity |
|-----|-------------|----------|
| `#format:mycard` | SEGA My Card | - |
| `#format:thesegacard` | The SEGA Card | - |
| `#format:themegacartridge` | The Mega Cartridge (Japan) | - |
| `#format:silvercartridge` | Silver Cartridge | - |
| `#format:goldcartridge` | Gold Cartridge | `>1m`<br>`>2m`<br>`>4m` |

### Console Variants

| System | Tag | Description |
|--------|-----|-------------|
| SEGA SG-1000 | `#sg1000:sc3000`<br>`#sg1000:othello` | SEGA SC-3000<br>Othello Multivision |
| GameBoy | `#gb:mono`<br>`#gb:color`<br>`#gb:sgb`<br>`#gb:np` | Monochrome<br>Color<br>Super GameBoy<br>Nintendo Power Cart |
| PC Engine | `#pce:pcsg` | PC SuperGrafx |
| NeoGeo Pocket | `#ngp:mono`<br>`#ngp:color` | Monochrome<br>Color |

### Game Status Tags

| Tag | Description | Subtypes |
|-----|-------------|----------|
| `#rev` | Revision | `:1`<br>`:2`<br> `:a`<br>`:b`<br>`:c`<br>`:g` |
| `#set` | Set number | `:1`<br>`:2` |
| `#unfinished` | Unfinished game | `:beta`<br>`:proto`<br>`:demo`<br>`:sample`<br>`:debug`<br>`:competition` |
| `#unfinished:beta` | Beta version | `>1`<br>`>2`<br>`>3`<br>`>alt` |
| `#unfinished:demo` | Demo version | `>1`<br>`>2`<br>`>auto`<br>`>kiosk` |

### Clone & Franchise Tags

| Tag | Description |
|-----|-------------|
| `#clone:mario` | Mario clone |
| `#clone:sonic` | Sonic clone |
| `#clone:sf2` | Street Fighter II clone |
| `#clone:tetris` | Tetris clone |

### Commercial Search Tags

| Tag | Description |
|-----|-------------|
| `$lightgun` | Light gun games |
| `$spinner` | Spinner controller games |
| `$franchise` | Popular franchise games |

## Basic Format Tags

| Tag | Description | Values |
|-----|-------------|--------|
| `#disc` | Disc number | `:1`, `:2`, `:3`, etc<br>`>2`, `>3`, `>4`, etc |
| `#official` | Official sealed | `:sports` (Sports license) |
| `#endorsed` | Endorsed by | `:celeb` (Famous people)<br>`:company` (Company or brand) |

## Franchise Tags

These tags (`$`) are designed for searching purposes. They are internal (invisible) tags that provide additional information we can unlock when searching.

Commercial franchise tags help find games related to famous franchises and characters. For example, searching "alien" might return unrelated games like _Alien Soldier_, _Alien Storm_ or _Alien Syndrome_. However, using the `$alien` tag unlocks a "did you mean" feature that helps find actual Alien franchise games.

These tags also help find games featuring famous characters. A regular search for "dracula" would only find games with "Dracula" in the title, missing series like _Castlevania_ or _Master of Darkness_. The `$dracula` tag solves this limitation.

More tags will be added as new interesting franchises are documented. For now, here are the available tags:

| Tag | Description |
|-----|-------------|
| `$alien` | Alien franchise |
| `$asterix` | Astérix & Obélix |
| `$batman` | Batman |
| `$castlevania` | Castlevania/悪魔城ドラキュラ |
| `$compatihero` | Compati Hero |
| `$disney` | Walt Disney |
| `$donald` | Donald Duck |
| `$dracula` | Dracula |
| `$dragonslayer` | Dragon Slayer |
| `$dnd` | Dungeons & Dragons |
| `$gundam` | Gundam |
| `$jurassicpark` | Jurassic Park |
| `$kuniokun` | Kunio-kun/くにおくん |
| `$looneytunes` | Looney Tunes |
| `$mario` | Mario |
| `$marvel` | Marvel Comics |
| `$mickey` | Mickey Mouse |
| `$pacman` | Pac-Man |
| `$sherlock` | Sherlock Holmes |
| `$simpsons` | The Simpsons |
| `$smurfs` | The Smurfs/Les Schtroumpfs |
| `$sonic` | Sonic The Hedgehog |
| `$spiderman` | Spider-Man |
| `$starwars` | Star Wars |
| `$superman` | Superman |
| `$wonderboy` | Wonder Boy |
| `$xmen` | X-Men |

## Keyword Search Tags

These tags are just for searching purposes based on keywords. If we look for games based on a movie or a manga, this kind of tags allow you to find more easily if implemented. Values on the right are like synonyms. Infinite possibilities. We can add tags like `ninja`, `cute`, `gore` or even `rockandroll`. But for now, there's only these:

| Tag | Description |
|-----|-------------|
| `$lightgun` | Light gun games |
| `$spinner` | Spinner controller games |

Please, be welcome and enjoy. Thank you very much for coming. Pretty nice things to come.
