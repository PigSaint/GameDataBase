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

<details>
<summary><strong>#input</strong> - Input system</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:joystick` | Joystick | `>2h`<br>`>2v`<br>`>3`<br>`>4`<br>`>8`<br>`>double`<br>`>rotary` | 2-way horizontal<br>2-way vertical<br>3-way<br>4-way<br>8-way<br>Double joystick<br>Rotary joystick |
| `:stick` | Stick | `>twin` | Twin stick |
| `:trackball` | Trackball |  |  |
| `:paddle` | Paddle |  |  |
| `:spinner` | Spinner |  |  |
| `:wheel` | Wheel |  |  |
| `:dial` | Dial |  |  |
| `:lightgun` | Lightgun |  |  |
| `:optical` | Optical device |  |  |
| `:positional` | Positional crank | `>2`<br>`>3` | Two positions<br>Three positions |
| `:buttons` | In-game buttons | `>1`<br>`>2`<br>`>3`<br>`>4`<br>`>5`<br>`>6`<br>`>7`<br>`>8`<br>`>11`<br>`>12`<br>`>19`<br>`>23`<br>`>27`<br>`>pneumatic` | 1 button<br>2 buttons<br>3 buttons<br>4 buttons<br>5 buttons<br>6 buttons<br>7 buttons<br>8 buttons<br>11 buttons<br>12 buttons<br>19 keys<br>23 keys<br>27 keys<br>Pneumatic button |
| `:pedals` | Foot pedals | `>1`<br>`>2` | One pedal<br>Two pedals |
| `:puncher` | Puncher |  |  |
| `:motion` | Motion detection device |  |  |

</details>

<details>
<summary><strong>#players</strong> - Players</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Single player |
| `:2` | 2 players |
| `:3` | 3 players |
| `:4` | 4 players |
| `:5` | 5 players |
| `:6` | 6 players |
| `:8` | 8 players |
| `:9` | 9 players |
| `:10` | 10 players |
| `:12` | 12 players |
| `:vs` | Versus |
| `:coop` | Cooperative |
| `:alt` | Alternating |

</details>

<details>
<summary><strong>#genre</strong> - Genre</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:action` | Action | `>platformer`<br>`>maze`<br>`>blockbreaker`<br>`>runandgun`<br>`>hackandslash`<br>`>metroidvania`<br>`>roguelite` | Platformer<br>Maze<br>Block breaker<br>Run and gun<br>Hack and slash<br>Metroidvania<br>Roguelite |
| `:adventure` | Adventure | `>pointandclick`<br>`>visualnovel`<br>`>survivalhorror`<br>`>text` | Point and click<br>Visual novel<br>Survival horror<br>Text |
| `:board` | Classic analogic board game | `>cards`<br>`>hanafuda`<br>`>chess`<br>`>shougi`<br>`>go`<br>`>mahjong`<br>`>reversi`<br>`>othello`<br>`>party`<br>`>jankenpon` | Classic cards<br>Hanafuda<br>Chess<br>Shōgi<br>Go<br>Mahjong<br>Reversi<br>Othello<br>Party<br>Rock paper scissors |
| `:brawler` | Brawler / Beat'em up |  |  |
| `:fighting` | Fighting | `>melee` | Melee |
| `:minigames` | Minigames |  |  |
| `:parlor` | Classic analogic arcade games | `>pinball`<br>`>jackpot`<br>`>pachinko`<br>`>darts`<br>`>bowling`<br>`>billiards`<br>`>mogurataiji`<br>`>kiddieride`<br>`>mechanical` | Pinball<br>Jackpot<br>Pachinko<br>Darts<br>Bowling<br>Billiards<br>Whac-A-Mole<br>Kiddie ride<br>Mechanical |
| `:quiz` | Quiz |  |  |
| `:racing` | Racing | `>combat`<br>`>driving` | Combat racing<br>Non-competition driving |
| `:rpg` | Role-Playing Game | `>a`<br>`>j`<br>`>s`<br>`>dungeoncrawler` | ARPG / Action RPG<br>JRPG<br>SRPG / Tactics RPG<br>Dungeon crawler |
| `:rhythm` | Rhythm | `>karaoke`<br>`>dance` | Karaoke<br>Dance |
| `:shmup` | Shoot'em up | `>h`<br>`>v`<br>`>i`<br>`>danmaku` | Horizontal<br>Vertical<br>Isometric<br>Bullet hell |
| `:shooting` | Aim-based shooting games | `>gallery`<br>`>rail`<br>`>fps`<br>`>tps` | Shooting gallery<br>Rail shooter<br>FPS / First person Shooter<br>TPS / Third person shooter |
| `:puzzle` | Puzzle | `>drop`<br>`>mind` | Drop pieces puzzle<br>Mind game |
| `:sim` | Simulation | `>strategy`<br>`>cardgame`<br>`>flight`<br>`>train`<br>`>date`<br>`>otome`<br>`>life`<br>`>farm`<br>`>pet`<br>`>fishing`<br>`>god`<br>`>derby`<br>`>building`<br>`>cooking` | Strategy<br>Card game<br>Flight simulator<br>Train simulator<br>Date simulator<br>Otome game / 乙女ゲーム<br>Life simulator<br>Farm simulator<br>Pet simulator<br>Fishing<br>God simulator<br>Derby horse ride<br>Building<br>Cooking |
| `:sports` | Sports | `>soccer`<br>`>basketball`<br>`>baseball`<br>`>volleyball`<br>`>rugby`<br>`>football`<br>`>dodgeball`<br>`>hockey`<br>`>skiing`<br>`>skateboarding`<br>`>snowboarding`<br>`>tennis`<br>`>pingpong`<br>`>paddle`<br>`>squash`<br>`>badminton`<br>`>flyingdisc`<br>`>cycling`<br>`>formula1`<br>`>rally`<br>`>nascar`<br>`>motogp`<br>`>motocross`<br>`>karting`<br>`>jetski`<br>`>golf`<br>`>cricket`<br>`>boxing`<br>`>kickboxing`<br>`>wrestling`<br>`>sumo`<br>`>karate`<br>`>judo`<br>`>kendo`<br>`>taekwondo`<br>`>mma`<br>`>decathlon`<br>`>running`<br>`>archery`<br>`>swimming`<br>`>rowing`<br>`>kayak`<br>`>surf` | Soccer<br>Basketball<br>Baseball<br>Volleyball<br>Rugby<br>American football<br>Dodgeball<br>Ice hockey<br>Skiing<br>Skateboarding<br>Snowboarding<br>Tennis<br>Table tennis<br>Paddle<br>Squash<br>Badminton<br>Flying disc / Frisbee<br>Cycling<br>Formula 1<br>Rally<br>NASCAR<br>Moto GP<br>Motocross<br>Karting<br>Jet ski / PWC<br>Golf<br>Cricket<br>Boxing<br>Kickboxing<br>Wrestling<br>Sumo<br>Karate<br>Judo<br>Kendo<br>Taekwondo<br>Mixed Martial Arts / MMA<br>Decathlon<br>Running<br>Archery<br>Swimming<br>Rowing<br>Kayak<br>Surf |
| `:notagame` | Not a game | `>educational`<br>`>drawing`<br>`>popcorn`<br>`>purikura`<br>`>redemption`<br>`>media`<br>`>application`<br>`>test`<br>`>sdk`<br>`>slideshow`<br>`>sound` | Educational<br>Drawing<br>Popcorn<br>Photo stickers<br>Redemption<br>Media<br>Application<br>Test<br>Software Development Kit<br>Picture slideshow<br>Only sound |

</details>

<details>
<summary><strong>#addon</strong> - Specific external hardware recommended or required</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:peripheral` | Peripheral | `>megacd`<br>`>super32x`<br>`>disksystem`<br>`>sufami`<br>`>64dd`<br>`>cdromrom` | SEGA Mega-CD / SEGA-CD<br>SEGA Super 32X / MegaDrive 32X / Genesis 32X<br>Nintendo Famicom Disk System / ディスクシステム<br>Bandai SuFami Turbo / スーファミターボ<br>Nintendo 64DD<br>NEC CD-ROM² / Super CD-ROM² / Arcade CD-ROM² / PC Engine Duo / TurboGrafx-CD / TurboDuo |
| `:controller` | Special controller | `>bikehandle`<br>`>paddlecontrol`<br>`>sportspad`<br>`>6button`<br>`>activator`<br>`>xe1ap`<br>`>avenuepad3`<br>`>avenuepad6`<br>`>10key`<br>`>arkanoid`<br>`>familytrainera`<br>`>familytrainerb`<br>`>reeladapter`<br>`>powerglove`<br>`>mahjong`<br>`>hypershot`<br>`>ddr`<br>`>taikanfamicom`<br>`>hardwarebike`<br>`>pachinko`<br>`>hissatsupachinko`<br>`>pashislot`<br>`>horitrack`<br>`>uforce`<br>`>smash`<br>`>computrainer`<br>`>lifefitness`<br>`>taptapmat`<br>`>teevgolf`<br>`>lasabirdie`<br>`>tsurikon64`<br>`>partytap`<br>`>climberstick`<br>`>juujikeycover` | SEGA Bike Handle<br>SEGA Paddle Control<br>SEGA Sports Pad<br>SEGA Six Button Control Pad<br>SEGA Activator<br>Dempa Micomsoft XE-1 AP<br>NEC Avenue Pad 3<br>NEC Avenue Pad 6<br>NEC 10 Key Controller Pad<br>Taito Arkanoid controller<br>Bandai Family Trainer Mat A / ファミリートレーナー マットA / Power Pad Side A / Family Fun Fitness A<br>Bandai Family Trainer Mat B / ファミリートレーナー マットB / Power Pad Side B / Family Fun Fitness B<br>Bandai Reel Adapter<br>Mattel Power Glove<br>CAPCOM Mahjong Controller / Mahjong Controller II / 麻雀コントローラー<br>Konami HyperShot<br>Konami Dance Dance Revolution controller<br>Konami Taikan Famicom / 大汗ファミコン<br>Varie Hardware Bike / ハードウーアバイク<br>Coconuts Pachinko Controller / パチンココントローラー<br>Sunsoft Hissatsu Pachinko Controller / 必殺パチンココントローラー<br>Sammy Jissen! PachiSlo Controller / 実戦! パチスロ コントローラー<br>Hori Track / ホリトラック<br>Brøderbund UForce<br>Realtec Smash Controller<br>RacerMate CompuTrainer / RacerMate CompuTrainer Pro<br>Life Fitness Exertainment System<br>IGS Tap-Tap Mat + Tonkachi / タップタップマット + トンカチ<br>Sports Sciences TeeVGolf<br>Ricoh Lasabirdie / レーザーバーディー<br>ASCII Tsurikon 64 / つりコン64<br>PR21 Party Tap<br>Nichibutsu Climber Stick / クライマー・スティック<br>NAMCO Jūji Key Cover / 十字キーカバー |
| `:lightgun` | Lightgun | `>lightphaser`<br>`>menacer`<br>`>zapper`<br>`>superscope`<br>`>justifier`<br>`>laserscope`<br>`>bandaihypershot`<br>`>gamegun`<br>`>ap74` | SEGA Light Phaser<br>SEGA Menacer<br>Nintendo Zapper<br>Nintendo Super Scope<br>Konami The Justifier / サ・ジャスティファイアー<br>Konami LaserScope<br>Bandai Hyper Shot / ハイパーショット<br>American Laser GameGun<br>Jäger AP74 |
| `:mouse` | Mouse | `>md`<br>`>sfc`<br>`>pce`<br>`>pcfx`<br>`>n64` | SEGA Mouse<br>Nintendo Super Famicom Mouse / スーパーファミコンマウス / Super NES Mouse<br>NEC PC Engine Mouse<br>NEC PC-FX Mouse<br>Nintendo 64 Mouse |
| `:keyboard` | Typing keyboard | `>fc`<br>`>n64`<br>`>workboy` | Famicom Keyboard<br>Nintendo 64 Keyboard<br>Fabtek WorkBoy |
| `:multitap` | Multitap for adding more controllers to the same system | `>segatap`<br>`>4playersadaptor`<br>`>super`<br>`>pce`<br>`>4wayplay` | SEGA Tap / Multiplayer / Team Player / セガタップ<br>Hori 4 Player Adaptor / Nintendo Four Score<br>Hudson Super Multitap<br>Hudson Multitap / NEC TurboTap<br>Electronic Arts 4 Way Play |
| `:link` | Hardware for interconnecting systems | `>taisencable`<br>`>gamelinkcable`<br>`>fourplayeradapter`<br>`>comcable`<br>`>linkup`<br>`>ngplink`<br>`>radiounitwireless`<br>`>setsuzoku`<br>`>senyoucord`<br>`>bb2interface`<br>`>voicerkun` | SEGA Game Gear Taisen Cable / Gear-to-Gear Cable<br>Nintendo Tsūshin Cable / Game Link Cable<br>Nintendo Four Player Adapter<br>NEC COM Cable / TurboExpress<br>Technopop Link-up Cable<br>SNK NeoGeo Pocket Link Cable<br>SNK Musen Unit / Radio Unit Wireless Adaptor<br>SNK NeoGeo Pocket-Dreamcast Setsuzoku Cable / ネオジオポケット／ドリームキャスト接続ケーブル<br>Epoch Sen'yō Setsuzoku Cord / 専用接続コード<br>Epoch Barcode Battler II Interface / BBII Interface / バーコードバトラーIIインターフェース<br>Koei Voicer-kun / ボイサーくん |
| `:expansion` | Additional hardware for expansing system capabilities | `>fmsoundunit`<br>`>memorypak`<br>`>samegame`<br>`>expansionpak`<br>`>megald`<br>`>ldromrom`<br>`>supersystemcard`<br>`>arcadecard`<br>`>gamesexpresscard` | SEGA FM Sound Unit / FMサウンドユニット<br>Nintendo Satellaview 8M Memory Pak / サテラビュー 8Mメモルーパック<br>Hudson SameGame Cassette / 鮫亀カセット<br>Nintendo Memory Kakuchō Pak / メモリー拡張パック / Expansion Pak<br>Pioneer LaserActive PAC-S / SEGA Mega-LD<br>Pioneer LaserActive PAC-N / NEC LD-ROM²<br>NEC PC Engine Super System Card CD-ROM²<br>NEC PC Engine Arcade Card Pro CD-ROM² / NEC PC Engine Arcade Card Duo CD-ROM²<br>Games Express CD Card |
| `:lockon` | Lock-on cartridge | `>supergameboy`<br>`>transferpak`<br>`>datach`<br>`>deckenhancer`<br>`>oyagame`<br>`>qtai`<br>`>karaokestudio`<br>`>sxt2`<br>`>tristar` | Nintendo Super GameBoy / Super GameBoy 2 / スーパーゲームボーイ<br>Nintendo 64GB Pak / 64GBパック / Transfer Pak<br>Bandai Datach Joint ROM System / データック<br>Camerica Aladdin Deck Enhancer<br>Sunsoft Oyagame / 親ガメ<br>Konami QTai / Q太<br>Bandai Karaoke Studio / カラオケスタジオ<br>Super X-Terminator 2 Sasuke / サスケ<br>Tri-Star |
| `:backup` | Back-up based accessory for saving progress | `>backupramcart`<br>`>controllerpak`<br>`>smartmediacard`<br>`>datarecorder`<br>`>battlebox`<br>`>tennokoe`<br>`>memorybase128`<br>`>turbofile` | Mega-CD Back Up RAM Cartridge / バックアップRAMカートリッジ<br>Nintendo Controller Pak / コントローラパック<br>Hagiwara Syscom SmartMedia Card<br>Panasonic Famicom Data Recorder / データレコーダ<br>IGS Battle Box / バトルボックス<br>Hudson Ten no Koe 2 / Ten no Koe Bank / 天の声 / NEC Backup Booster I / Backup Booster II / バックアップブースター / NEC TurboBooster-Plus<br>NEC Memory Base 128 / メモリーベース128<br>ASCII Turbo File / Turbo File II / Turbo File GB / ターボファイル / Turbo File Adapter / ターボファイルアダプター / Turbo File Twin / ターボファイルツイン |
| `:online` | Online based accessory | `>megamodem`<br>`>megaanser`<br>`>toshokan`<br>`>segachannel`<br>`>xband`<br>`>meganet`<br>`>teleplay`<br>`>networksystem`<br>`>ndm24`<br>`>satellaview`<br>`>randnetmodem` | SEGA Mega Modem / メガモデム<br>SEGA Mega Anser / メガアンサー<br>SEGA Game Toshokan / ゲーム図書館<br>SEGA Channel / セガチャンネル<br>Catapult XB∀ND<br>Tec Toy MegaNet<br>Baton Teleplay System<br>Nintendo Family Computer Network System / ファミリーコンピュータ ネットワークシステム<br>NTT Data Tsūshin Modem NDM24 / 通信モデムNDM24<br>Nintendo SatellaView / サテラビュー<br>Randnet Modem / ランドネット |
| `:vibration` | Vibration | `>rumblepak` | Nintendo Shindō Pak / 振動パック / Rumble Pak |
| `:glasses` | Glasses | `>3dglasses`<br>`>segavr`<br>`>3dsystem`<br>`>3dgoggle` | SEGA 3-D Glasses / セガ3-Dグラス<br>SEGA VR Headset<br>Nintendo Famicom 3D System / ファミコン3Dシステム<br>Pioneer LaserActive 3D Goggle / 3D ゴーグル / 3-D Goggles |
| `:mic` | Microphone | `>n64`<br>`>vrs` | Nintendo 64 Mic<br>VRS / Onseininshiki System / 音声認識システム / Voice Recognition Unit |
| `:drawing` | Drawing board | `>graphicboard`<br>`>illustbooster`<br>`>oekakids` | SEGA Graphic Board<br>NEC Illust Booster<br>Bandai Oekakids / おえかキッズ |
| `:health` | Health monitoring | `>catalyst`<br>`>biosensor` | HeartBeat Catalyst<br>SETA Bio Sensor |
| `:midi` | MIDI Keyboard | `>miracle`<br>`>pianokeyboard` | The Miracle MIDI Keyboard<br>Konami MIDI Keyboard |
| `:rob` | Nintendo Family Computer Robot /  ファミリーコンピュータ　ロボット/ R.O.B. / Robotic Operating Buddy | `>gyro`<br>`>block` | Gyro Set / ジャイロ　セット<br>Block Set / ブロック セット |
| `:printer` | Printer | `>pocketprinter`<br>`>printbooster` | Nintendo Pocket Printer / GameBoy Printer<br>NEC Print Booster |
| `:barcodeboy` | NAMCOT Barcode Boy |  |  |
| `:rss` | Roland Sound Space |  |  |
| `:pocketcamera` | Nintendo Pocket Camera / ポケットカメラ / GameBoy Camera |  |  |
| `:capturecassette` | Nintendo 64 Capture Cassette |  |  |
| `:photoreader` | NEC Photo Reader |  |  |
| `:develobox` | Tokuma Shoten Develo Box / でべろ Box |  |  |
| `:teststation` | Nintendo NES Test Station |  |  |

</details>

<details>
<summary><strong>#embedded</strong> - Embedded extra hardware in cartridge</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:backup` | Back-up embeded system for saving progress | `>battery`<br>`>flashram`<br>`>feram`<br>`>eeprom` | Battery backed SRAM<br>Flash RAM<br>Ferroelectric RAM<br>EEPROM |
| `:chip` | Enhancement chip | `>ram`<br>`>rtc`<br>`>svp`<br>`>mmc5`<br>`>dsp1`<br>`>dsp1a`<br>`>dsp1b`<br>`>dsp2`<br>`>dsp3`<br>`>dsp4`<br>`>sa1`<br>`>sdd1`<br>`>sfx1`<br>`>sfx2`<br>`>obc1`<br>`>vrc6`<br>`>vrc7`<br>`>n163`<br>`>fme7`<br>`>5a`<br>`>5b`<br>`>m50805`<br>`>7755`<br>`>7756`<br>`>cx4`<br>`>spc7110`<br>`>st010`<br>`>st011`<br>`>st018` | Extra RAM<br>Real-Time Clock<br>SEGA Virtua Processor / SVP<br>Nintendo MMC5<br>Nintendo DSP-1<br>Nintendo DSP-1a<br>Nintendo DSP-1b<br>Nintendo DSP-2<br>Nintendo DSP-3<br>Nintendo DSP-4<br>Nintendo SA-1<br>Nintendo S-DD1<br>Nintendo Super FX GSU-1<br>Nintendo Super FX GSU-2<br>Nintendo OBC-1<br>Konami VRC VI<br>Konami VRC VII<br>NAMCO 163<br>Sunsoft FME-7<br>Sunsoft 5A<br>Sunsoft 5B<br>Mitsubishi M50805<br>NEC µPD7755C<br>NEC µPD7756C<br>CAPCOM CX4<br>Epson SPC7110<br>SETA ST010<br>SETA ST011<br>SETA ST018 |
| `:slot` | Slot in cartridge | `>rj11`<br>`>jcart`<br>`>lockon`<br>`>kogame`<br>`>gameboy`<br>`>gamelink`<br>`>smartmedia` | RJ-11 port<br>Codemasters J-Cart<br>SEGA Sonic & Knuckles Lock-On Technology<br>Sunsoft Kogame Cassette / 子ガメカセット<br>Nintendo GameBoy cartridge<br>Nintendo Tsūshin Cable port / 通信ケーブル / GameLink<br>Tokyo Electron SmartMedia Double Slot |
| `:led` | LED |  |  |
| `:gbkiss` | Hudson GB Kiss |  |  |
| `:pocketsonar` | Bandai Pocket Sonar |  |  |

</details>

<details>
<summary><strong>#save</strong> - The way you can save your progress</summary>

| Subcategory | Description |
|-------------|-------------|
| `:backup` | Memory backup |
| `:password` | Password |

</details>

<details>
<summary><strong>#arcadeboard</strong> - Arcade board</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:capcom` | CAPCOM board | `>cps`<br>`>cpsdash`<br>`>cpschanger`<br>`>cps2`<br>`>cps3` | CAPCOM CP System<br>CAPCOM CP System Dash<br>CAPCOM CP System Changer<br>CAPCOM CP System II<br>CAPCOM CP System III |
| `:sega` | SEGA board | `>vco`<br>`>system1`<br>`>system2`<br>`>system16`<br>`>system16a`<br>`>system16b`<br>`>system16c`<br>`>system18`<br>`>system24`<br>`>system32`<br>`>multi32`<br>`>systemc`<br>`>systemc2`<br>`>systeme`<br>`>xboard`<br>`>yboard`<br>`>stv` | SEGA VCO Object<br>SEGA System 1<br>SEGA System 2<br>SEGA System 16<br>SEGA System 16A<br>SEGA System 16B<br>SEGA System 16C<br>SEGA System 18<br>SEGA System 24<br>SEGA System 32<br>SEGA System Multi 32<br>SEGA System C<br>SEGA System C-2<br>SEGA System E<br>SEGA X Board<br>SEGA Y Board<br>SEGA Titan Video |
| `:irem` | Irem board | `>m10`<br>`>m15`<br>`>m27`<br>`>m52`<br>`>m57`<br>`>m58`<br>`>m62`<br>`>m63`<br>`>m72`<br>`>m75`<br>`>m77`<br>`>m81`<br>`>m82`<br>`>m84`<br>`>m85`<br>`>m90`<br>`>m92`<br>`>m97`<br>`>m107` | Irem M10<br>Irem M15<br>Irem M27<br>Irem M52<br>Irem M57<br>Irem M58<br>Irem M62<br>Irem M63<br>Irem M72<br>Irem M75<br>Irem M77<br>Irem M81<br>Irem M82<br>Irem M84<br>Irem M85<br>Irem M90<br>Irem M92<br>Irem M97<br>Irem M107 |
| `:snk` | SNK board | `>mvs` | SNK Multi Video System / MVS |
| `:taito` | Taito board | `>xsystem`<br>`>bsystem`<br>`>hsystem`<br>`>lsystem`<br>`>zsystem`<br>`>osystem`<br>`>f1system`<br>`>f2system`<br>`>f3system`<br>`>lgsystem` | Taito X System<br>Taito B System<br>Taito H System<br>Taito L System<br>Taito Z System<br>Taito O System<br>Taito F1 System / F2 System Extended<br>Taito F2 System<br>Taito F3 System<br>Taito LG System |
| `:toaplan` | Toaplan board | `>version1`<br>`>version2` | Toaplan Version 1<br>Toaplan Version 2 |
| `:jaleco` | Jaleco board | `>megasystem1` | Jaleco Mega System 1 |

</details>

<details>
<summary><strong>#compatibility</strong> - System compatibility</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:sg1000` | SEGA SG-1000 | `>sc3000`<br>`>othello` | SEGA SC-3000<br>Othello Multivision |
| `:mark3` | SEGA Mark III / master System | `>mycard`<br>`>epmycard`<br>`>thesegacard`<br>`>themegacartridge`<br>`>silvercartridge`<br>`>goldcartridge1`<br>`>goldcartridge2`<br>`>goldcartridge4` | SEGA My Card<br>SEGA EP My Card<br>The SEGA Card<br>The Mega Cartridge (Japan)<br>Silver Cartridge<br>Gold Cartridge (1 mega)<br>Gold Cartridge (2 mega)<br>Gold Cartridge (4 mega) |
| `:famicom` | Family Computer / NES | `>pegasus` | Pegasus Computer Family Game |
| `:disksystem` | Famicom Disk System | `>dw` | Disk Writer |
| `:gameboy` | Nintendo GameBoy | `>mono`<br>`>color`<br>`>sgb`<br>`>np` | Monochrome<br>Color<br>Super GameBoy<br>Nintendo Power / ニンテンドウパワー / GB Memory Cartridge / GBメモリカートリッジ |
| `:superfamicom` | Nintendo Super Famicom / Super Nintendo Entertainment System / SNES | `>hirom`<br>`>lorom`<br>`>exhirom`<br>`>exlorom`<br>`>nss`<br>`>soundlink`<br>`>np`<br>`>gs` | HiROM<br>LoROM<br>Extended HiROM<br>Extended LoRom<br>Nintendo Super System / NSS<br>SoundLink / サウンドリンクゲーム / VoiceLink / 音声連動ゲーム<br>Nintendo Power / ニンテンドウパワー / SF Memory Cassette / SFメモリカセット<br>Nintendo Gateway System |
| `:pcengine` | NEC PC Engine | `>supergrafx` | PC SuperGrafx |
| `:neogeopocket` | NeoGeo Pocket | `>mono`<br>`>color` | Monochrome<br>Color |

</details>

<details>
<summary><strong>#disc</strong> - Disc Number</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Disc 1 |
| `:2` | Disc 2 |
| `:3` | Disc 3 |
| `:4` | Disc 4 |
| `:children` | No description |

</details>

<details>
<summary><strong>#based</strong> - Coming from another media</summary>

| Subcategory | Description |
|-------------|-------------|
| `:manganime` | Manga and/or anime |
| `:movie` | Movie |
| `:disney` | Walt Disney |
| `:dnd` | Dungeons & Dragons |
| `:jurassicpark` | Jurassic Park |
| `:looneytunes` | Looney Tunes |
| `:marvel` | Marvel Comics |
| `:simpsons` | The Simpsons |
| `:smurfs` | The Smurfs / Les Schtroumpfs / Los Pitufos / Die Schlümpfe |
| `:starwars` | Star Wars |
| `:tmnt` | Teenage Mutant Ninja Turtles |

</details>

<details>
<summary><strong>#search</strong> - Keywords for searching</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:franchise` | Games that belong to the same game series | `>castlevania`<br>`>dragonslayer`<br>`>wonderboy` | Castlevania / Akumajō Dracula / 悪魔城ドラキュラ<br>Dragon Slayer<br>Wonder Boy |
| `:feature` | This character/s appear/s in this game | `>alien`<br>`>asterix`<br>`>batman`<br>`>compatihero`<br>`>dracula`<br>`>donald`<br>`>gundam`<br>`>kuniokun`<br>`>mario`<br>`>mickey`<br>`>pacman`<br>`>sherlock`<br>`>sonic`<br>`>spiderman`<br>`>superman`<br>`>xmen` | Alien xenomorph<br>Astérix & Obélix<br>Batman<br>Compati Hero / コンパチヒーロー<br>Dracula<br>Donald Duck<br>Gundam / ガンダム<br>Kunio-kun / くにおくん<br>Mario / マリオ<br>Mickey Mouse<br>Pac-Man / パックマン<br>Sherlock Holmes<br>Sonic The Hedgehog / ソニック・ザ・ヘッジホッグ<br>Spider-Man<br>Superman<br>X-Men |
| `:tate` | Vertical screen orientation | `>cw`<br>`>ccw` | Clockwise<br>Counter clockwise |
| `:3d` | Game uses some kind of 3D effect | `>stereo`<br>`>anaglyph` | Stereoscopic 3D<br>Anaglyph 3D |
| `:keyword` | Other specific game features | `>strip`<br>`>promo`<br>`>qsound`<br>`>dolby`<br>`>rs`<br>`>official`<br>`>endorsed`<br>`>brand` | Stripped girls as a stage clear reward<br>Promotional not-for-sale limited product<br>QSound support<br>Dolby Surround<br>Response Sound System / レスポンス　サウンド　システム / RS<br>Official sports game<br>Endorsed by public figure<br>Endorsed by company or brand |

</details>

<details>
<summary><strong>#multigame</strong> - Various games in one title</summary>

| Subcategory | Description |
|-------------|-------------|
| `:compilation` | Compilation of previously released games |

</details>

<details>
<summary><strong>#reboxed</strong> - Reboxed</summary>

| Subcategory | Description |
|-------------|-------------|
| `:bios` | BIOS included game |
| `:bluebox` | Blue Box |
| `:purplebox` | Purple Box |
| `:classicedition` | Classic Edition |
| `:segaclassic` | SEGA Classic |
| `:kixxedition` | Kixx Edition |
| `:megadrive3` | Tec Toy MegaDrive 3 |
| `:megadrive4` | Tec Toy MegaDrive 4 |
| `:reactor` | AtGames Reactor |
| `:gopher` | AtGames Gopher |
| `:meisaku` | Meisaku Collection |
| `:majesco` | Majesco |
| `:megahit` | Mega Hit Series |
| `:konamiclassics` | Konami Classics |
| `:eaclassics` | Console Classics |
| `:videogameclassics` | Accolade Video Game Classics |
| `:gamenokanzume` | Game no Kanzume Otokuyō / ゲームのかんづめ お徳用 |
| `:soundware` | Koei SoundWare audio CD |
| `:playerschoice` | Players Choice / Million Seller |
| `:classicserie` | Nintendo Classic Serie |
| `:kousenjuu` | Kōsenjū Series / 光線銃シリーズ |
| `:disneysclassic` | Disney's Classic Video Games |
| `:snkbestcollection` | Best Collection |
| `:xeye` | JVC X'Eye |
| `:limitedrun` | Limited Run |
| `:famicombox` | Nintendo FamicomBox |
| `:superfamicombox` | Nintendo Super FamicomBox |

</details>

<details>
<summary><strong>#port</strong> - Port, remaster, remake or conversion from another system</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:arcade` | Arcade |  |  |
| `:commodore` | Commodore | `>c64`<br>`>amiga` | Commodore 64 / C64<br>Amiga |
| `:apple` | Apple | `>apple2`<br>`>mac` | Apple II<br>Macintosh |
| `:bbcmicro` | Acorn BBC Micro |  |  |
| `:dragon32` | Dragon 32 |  |  |
| `:elektronika60` | Elektronika 60 / Электроника 60 |  |  |
| `:spectrum` | Sinclair ZX Spectrum |  |  |
| `:amstrad` | Amstrad CPC |  |  |
| `:atari` | Atari | `>atari400`<br>`>atarist`<br>`>atari2600`<br>`>lynx` | Atari 400<br>Atari ST<br>Atari 2600<br>Lynx |
| `:nec` | NEC / Nippon Electric Company | `>pc88`<br>`>pc98`<br>`>pcengine`<br>`>cdromrom` | PC-8801<br>PC-9801<br>PC Engine / PCエンジン / TurboGrafx / TurboGrafx-16<br>CD-ROM² / シーディーロムロム / TurboGrafx-CD |
| `:msx` | MSX | `>2` | MSX2 |
| `:sharp` | Sharp | `>x1`<br>`>mz700`<br>`>x68000` | Sharp X1<br>Sharp MZ<br>X68000 |
| `:pc` | PC DOS |  |  |
| `:sega` | SEGA / セガ | `>sg1000`<br>`>mark3`<br>`>gamegear`<br>`>megadrive`<br>`>megacd`<br>`>saturn`<br>`>dreamcast` | SG-1000<br>Mark III / マークIII / Master System / マスターシステム<br>Game Gear / ゲームギア<br>MegaDrive / メガドライブ / Genesis<br>SEGA Mega-CD / メガシーディー / SEGA-CD<br>SEGA Saturn / セガサターン<br>Dreamcast / ドリームキャスト |
| `:nintendo` | Nintendo / 任天堂 | `>famicom`<br>`>superfamicom`<br>`>gameboy`<br>`>gbc`<br>`>gba` | Famicom / Family Computer / ファミリーコンピュータ / Nintendo Entertainment System / NES<br>Super Famicom / スーパーファミコン / Super Nintendo Entertainment System / SNES<br>GameBoy / ゲームボーイ<br>GameBoy Color / ゲームボーイカラー<br>GameBoy Advance / ゲームボーイアドバンス / GBA |
| `:sony` | Sony / ソニー | `>playstation` | PlayStation / プレイステーション |
| `:3do` | Panasonic 3DO / スリーディーオー |  |  |
| `:laseractive` | Pioneer LaserActive / レーザーアクティブ |  |  |
| `:fmtowns` | Fujitsu FM Towns / エフエムタウンズ |  |  |

</details>

<details>
<summary><strong>#lang</strong> - Language</summary>

| Subcategory | Description |
|-------------|-------------|
| `:en` | English |
| `:es` | Spanish / Español |
| `:fr` | French / Français |
| `:pt` | Portuguese / Português |
| `:de` | German / Deutsch |
| `:it` | Italian / Italiano |
| `:sv` | Swedish / Svenska |
| `:nl` | Dutch / Nederlands |
| `:da` | Danish / Dansk |
| `:no` | Norwegian / Norsk |
| `:fi` | Finnish / Suomi |
| `:cs` | Czech / Čeština |
| `:sl` | Slovenian / Slovenščina |
| `:ru` | Russian / Русский |
| `:pl` | Polish / По́льский |
| `:ja` | Japanese / 日本語 |
| `:zh` | Simplified Chinese / 汉语 |
| `:ch` | Chinese / 漢語 |
| `:ko` | Korean / 한국어 |
| `:fremen` | Fremen |

</details>

<details>
<summary><strong>#unfinished</strong> - Unfinished game</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:beta` | Beta | `>1`<br>`>2`<br>`>3`<br>`>4`<br>`>5` | Beta 1<br>Beta 2<br>Beta 3<br>Beta 4<br>Beta 5 |
| `:proto` | Prototype | `>1`<br>`>2`<br>`>3`<br>`>4` | Proto 1<br>Proto 2<br>Proto 3<br>Proto 4 |
| `:demo` | Demo | `>1`<br>`>2`<br>`>auto`<br>`>kiosk` | Demo 1<br>Demo 2<br>Automatic<br>Kiosk |
| `:sample` | Sample |  |  |
| `:debug` | Debug |  |  |
| `:competition` | Competition |  |  |

</details>

<details>
<summary><strong>#rerelease</strong> - Re-released games in another system</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:virtualconsole` | Nintendo Virtual Console | `>wii`<br>`>wiiu`<br>`>3ds` | Nintendo Wii Virtual Console<br>Nintendo Wii-U Virtual Console<br>Nintendo 3DS Virtual Console |
| `:switchonline` | Nintendo Switch Online |  |  |
| `:ereader` | Nintendo e-Reader |  |  |
| `:animalcrossing` | Nintendo Dōbutsu no Mori+ / どうぶつの森+ / Animal Crossing |  |  |
| `:supermario25` | Nintendo Super Mario Collection (Super Mario 25 Shūnen) / スーパーマリオコレクション スペシャルパック (スーパーマリオ25周年) / Super Mario All-Stars (25th Anniversary) |  |  |
| `:capcomtown` | CAPCOM Town |  |  |
| `:namcoanthology` | NAMCO Anthology | `>1`<br>`>2` | NAMCO Anthology 1<br>NAMCO Anthology 2 |
| `:namcot` | NAMCOT Collection / ナムコットコレクション | `>1`<br>`>2` | NAMCO Museum Archives Volume 1<br>NAMCO Museum Archives Volume 2 |
| `:castlevaniaanniversary` | Akumajō Dracula Anniversary Collection / 悪魔城ドラキュラ Anniversary Collection / Castlevania Anniversary Collection |  |  |
| `:castlevaniaadvance` | Castlevania Advance Collection |  |  |
| `:contraanniversary` | Contra Anniversary Collection / 魂斗羅 Anniversary Collection |  |  |
| `:cowabunga` | Teenage Mutant Ninja Turtles: The Cowabunga Collection |  |  |
| `:konamicollectors` | Konami Collector's Series |  |  |
| `:dariuscozmic` | Darius Cozmic Collection |  |  |
| `:rockmanclassic` | Rockman Classic Collection / ロックマン クラシックス コレクション / Megaman Legacy Collection | `>1`<br>`>2`<br>`>x`<br>`>x2` | Rockman Classic Collection / ロックマン クラシックス コレクション / Megaman Legacy Collection<br>Rockman Classic Collection 2 / ロックマン クラシックス コレクション 2 / Megaman Legacy Collection 2<br>Rockman X Anniversary Collection / ロックマンX アニバーサリー コレクション / Megaman X Legacy Collection<br>Rockman X Anniversary Collection 2 / ロックマンX アニバーサリー コレクション 2 / Megaman X Legacy Collection 2 |
| `:seikendensetsu` | Seiken Densetsu Collection / 聖剣伝説 Collection / Collection of Mana |  |  |
| `:disneyclassic` | Disney Classic Games Collection |  |  |
| `:bubsytwofur` | Bubsy Two-Fur |  |  |
| `:blizzardarcadecollection` | Blizzard Arcade Collection |  |  |
| `:qubyte` | QUByte Classics |  |  |
| `:projectegg` | Project EGG |  |  |
| `:limitedrun` | Limited Run Games |  |  |
| `:iam8bit` | iam8bit |  |  |
| `:evercade` | Blaze Evercade | `>olivertwins` | The Oliver Twins Collection |
| `:steam` | Steam |  |  |
| `:sonicclassic` | Sonic Classic Collection |  |  |
| `:sonicmegacollection` | Sonic Mega Collection / Sonic Mega Collection+ |  |  |
| `:mdclassics` | SEGA MegaDrive Classics / SEGA Genesis Classics |  |  |
| `:smashpack` | SEGA Smash Pack |  |  |
| `:segaages` | SEGA Ages | `>2500` | SEGA Ages 2500 |
| `:3dfukkoku` | SEGA 3D Fukkoku Archives / セガ3D復刻アーカイブス / SEGA 3D Classics Collection |  |  |
| `:mdmini` | SEGA MegaDrive Mini / SEGA Genesis Mini | `>1`<br>`>2` | SEGA MegaDrive Mini / SEGA Genesis Mini<br>SEGA MegaDrive Mini 2 / SEGA Genesis Mini 2 |
| `:sfcmini` | Nintendo Super Famicom Classic Mini / スーパーファミコン クラシックミニ / Super Nintendo Entertainment System Classic Mini |  |  |
| `:gamenokanzume` | Game no Kanzume / ゲームのかんづめ | `>1`<br>`>2` | Game no Kanzume Vol.1 / ゲームのかんづめ Vol.1<br>Game no Kanzume Vol.2 / ゲームのかんづめ Vol.2 |
| `:fightnightround2` | Fight Night Round 2 (GameCube version) |  |  |

</details>

<details>
<summary><strong>#rev</strong> - Revision</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Revision 1 |
| `:2` | Revision 2 |
| `:3` | Revision 3 |
| `:4` | Revision 4 |
| `:5` | Revision 5 |
| `:a` | Revision A |
| `:b` | Revision B |
| `:c` | Revision C |
| `:d` | Revision D |
| `:e` | Revision E |
| `:g` | Revision G |

</details>

<details>
<summary><strong>#set</strong> - Set</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Set 1 |
| `:2` | Set 2 |
| `:3` | Set 3 |
| `:4` | Set 4 |
| `:5` | Set 5 |
| `:6` | Set 6 |
| `:7` | Set 7 |
| `:8` | Set 8 |

</details>

<details>
<summary><strong>#alt</strong> - Alternative rip</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Alternative 1 |
| `:2` | Alternative 2 |
| `:3` | Alternative 3 |

</details>

<details>
<summary><strong>#unlicensed</strong> - Unlicensed game</summary>

| Subcategory | Description |
|-------------|-------------|
| `:bootleg` | Bootleg/pirated game |
| `:hack` | Hacked game |
| `:clone` | Cloned game |
| `:translation` | Translation |
| `:aftermarket` | Made after original market cycle |

</details>

<details>
<summary><strong>#mameparent</strong> - MAME parent file</summary>


</details>



---

Thank you for joining GameDataBase! Your support inspires us to keep improving and sharing exciting updates.
