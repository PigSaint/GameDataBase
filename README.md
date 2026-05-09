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
| `:joystick` | Joystick | `>2h`<br>`>2v`<br>`>3`<br>`>4`<br>`>8`<br>`>rotary` | 2-way horizontal<br>2-way vertical<br>3-way<br>4-way<br>8-way<br>Rotary joystick |
| `:stick` | Stick | `>twin` | Twin stick |
| `:trackball` | Trackball |  |  |
| `:paddle` | Paddle |  |  |
| `:spinner` | Spinner |  |  |
| `:wheel` | Wheel |  |  |
| `:dial` | Dial |  |  |
| `:lightgun` | Lightgun |  |  |
| `:optical` | Optical device |  |  |
| `:positional` | Positional crank | `>2`<br>`>3`<br>`>4` | Two positions<br>Three positions<br>Four positions |
| `:buttons` | In-game buttons | `>1`<br>`>2`<br>`>3`<br>`>4`<br>`>5`<br>`>6`<br>`>7`<br>`>8`<br>`>9`<br>`>11`<br>`>12`<br>`>pneumatic` | 1 button<br>2 buttons<br>3 buttons<br>4 buttons<br>5 buttons<br>6 buttons<br>7 buttons<br>8 buttons<br>9 buttons<br>11 buttons<br>12 buttons<br>Pneumatic button |
| `:keyboard` | Keyboard | `>mahjong` | Mahjong keyboard |
| `:pedals` | Foot pedals | `>1`<br>`>2` | One pedal<br>Two pedals |
| `:touchscreen` | Touch screen | `>resistive`<br>`>capacitive` | Resistive screen<br>Capacitive screen |
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
| `:7` | 7 players |
| `:8` | 8 players |
| `:9` | 9 players |
| `:10` | 10 players |
| `:12` | 12 players |
| `:16` | 16 players |
| `:mmo` | MMO / Massively Multiplayer Online |
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
| `:board` | Classic analogic board game | `>cards`<br>`>hanafuda`<br>`>chess`<br>`>shougi`<br>`>go`<br>`>mahjong`<br>`>reversi`<br>`>othello`<br>`>backgammon`<br>`>party`<br>`>jankenpon` | Classic cards<br>Hanafuda<br>Chess<br>Shōgi<br>Go<br>Mahjong<br>Reversi<br>Othello<br>Backgammon<br>Party<br>Rock paper scissors |
| `:brawler` | Brawler / Beat'em up |  |  |
| `:fighting` | Fighting | `>melee` | Melee |
| `:minigames` | Minigames |  |  |
| `:parlor` | Classic analogic arcade games | `>pinball`<br>`>jackpot`<br>`>pachinko`<br>`>darts`<br>`>bowling`<br>`>billiards`<br>`>mogurataiji`<br>`>kiddieride`<br>`>mechanical` | Pinball<br>Jackpot<br>Pachinko<br>Darts<br>Bowling<br>Billiards<br>Whac-A-Mole<br>Kiddie ride<br>Mechanical |
| `:quiz` | Quiz |  |  |
| `:racing` | Racing | `>combat` | Combat racing |
| `:rpg` | Role-Playing Game | `>a`<br>`>j`<br>`>s`<br>`>dungeoncrawler`<br>`>mmo` | ARPG / Action RPG<br>JRPG<br>SRPG / Tactics RPG<br>Dungeon crawler<br>MMO / Massively Multiplayer Online |
| `:rhythm` | Rhythm | `>karaoke`<br>`>dance` | Karaoke<br>Dance |
| `:shmup` | Shoot'em up | `>h`<br>`>v`<br>`>i`<br>`>danmaku` | Horizontal<br>Vertical<br>Isometric<br>Bullet hell |
| `:shooting` | Aim-based shooting games | `>gallery`<br>`>rail`<br>`>fps`<br>`>tps` | Shooting gallery<br>Rail shooter<br>FPS / First person Shooter<br>TPS / Third person shooter |
| `:puzzle` | Puzzle | `>drop`<br>`>mind` | Drop pieces puzzle<br>Mind game |
| `:sim` | Simulation | `>strategy`<br>`>cardgame`<br>`>flight`<br>`>train`<br>`>date`<br>`>otome`<br>`>life`<br>`>farm`<br>`>pet`<br>`>fishing`<br>`>driving`<br>`>god`<br>`>derby`<br>`>building`<br>`>cooking` | Strategy<br>Card game<br>Flight simulator<br>Train simulator<br>Date simulator<br>Otome game / 乙女ゲーム<br>Life simulator<br>Farm simulator<br>Pet simulator<br>Fishing<br>Non-competition driving<br>God simulator<br>Derby horse ride<br>Building<br>Cooking |
| `:sports` | Sports | `>soccer`<br>`>basketball`<br>`>baseball`<br>`>volleyball`<br>`>rugby`<br>`>football`<br>`>dodgeball`<br>`>hockey`<br>`>skiing`<br>`>skateboarding`<br>`>snowboarding`<br>`>tennis`<br>`>pingpong`<br>`>paddle`<br>`>squash`<br>`>badminton`<br>`>flyingdisc`<br>`>cycling`<br>`>formula1`<br>`>rally`<br>`>nascar`<br>`>motogp`<br>`>motocross`<br>`>karting`<br>`>jetski`<br>`>golf`<br>`>cricket`<br>`>boxing`<br>`>kickboxing`<br>`>wrestling`<br>`>sumo`<br>`>karate`<br>`>judo`<br>`>kendo`<br>`>taekwondo`<br>`>mma`<br>`>decathlon`<br>`>running`<br>`>archery`<br>`>swimming`<br>`>rowing`<br>`>kayak`<br>`>surf` | Soccer / Football<br>Basketball<br>Baseball<br>Volleyball<br>Rugby<br>American football<br>Dodgeball<br>Ice hockey<br>Skiing<br>Skateboarding<br>Snowboarding<br>Tennis<br>Table tennis<br>Paddle<br>Squash<br>Badminton<br>Flying disc / Frisbee<br>Cycling<br>Formula 1<br>Rally<br>NASCAR<br>Moto GP<br>Motocross<br>Karting<br>Jet ski / PWC<br>Golf<br>Cricket<br>Boxing<br>Kickboxing<br>Wrestling<br>Sumo<br>Karate<br>Judo<br>Kendo<br>Taekwondo<br>Mixed Martial Arts / MMA<br>Decathlon<br>Running<br>Archery<br>Swimming<br>Rowing<br>Kayak<br>Surf |
| `:notagame` | Not a game | `>educational`<br>`>drawing`<br>`>popcorn`<br>`>purikura`<br>`>redemption`<br>`>media`<br>`>magazine`<br>`>application`<br>`>test`<br>`>sdk`<br>`>slideshow`<br>`>sound` | Educational<br>Drawing<br>Popcorn<br>Photo stickers<br>Redemption<br>Media<br>Magazine<br>Application<br>Test<br>Software Development Kit<br>Picture slideshow<br>Only sound |

</details>

<details>
<summary><strong>#addon</strong> - Specific external hardware recommended or required</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:peripheral` | Peripheral | `>megacd`<br>`>super32x`<br>`>disksystem`<br>`>sufami`<br>`>64dd`<br>`>cdromrom` | SEGA Mega-CD / SEGA-CD<br>SEGA Super 32X / MegaDrive 32X / Genesis 32X<br>Nintendo Famicom Disk System / ディスクシステム<br>Bandai SuFami Turbo / スーファミターボ<br>Nintendo 64DD<br>NEC CD-ROM² / Super CD-ROM² / Arcade CD-ROM² / PC Engine Duo / TurboGrafx-CD / TurboDuo |
| `:controller` | Special controller | `>bikehandle`<br>`>paddlecontrol`<br>`>sportspad`<br>`>6button`<br>`>activator`<br>`>3dpad`<br>`>missionstick`<br>`>twinstick`<br>`>arcaderacer`<br>`>xe1ap`<br>`>avenuepad3`<br>`>avenuepad6`<br>`>10key`<br>`>sbom`<br>`>arkanoid`<br>`>familytrainera`<br>`>familytrainerb`<br>`>reeladapter`<br>`>powerglove`<br>`>mahjong`<br>`>hypershot`<br>`>ddr`<br>`>ddrgb`<br>`>taikanfamicom`<br>`>hardwarebike`<br>`>pachinko`<br>`>hissatsupachinko`<br>`>pashislot`<br>`>sankyoff`<br>`>horitrack`<br>`>uforce`<br>`>smash`<br>`>denshadego`<br>`>computrainer`<br>`>lifefitness`<br>`>taptapmat`<br>`>teevgolf`<br>`>lasabirdie`<br>`>grip`<br>`>tsurikon64`<br>`>partytap`<br>`>fullchanger`<br>`>climberstick`<br>`>juujikeycover` | SEGA Bike Handle<br>SEGA Paddle Control<br>SEGA Sports Pad<br>SEGA Six Button Control Pad<br>SEGA Activator<br>SEGA Multi Controller / セガマルチコントローラー / 3D Control Pad<br>SEGA Analog Controller Mission Stick / アナログコントローラー ミッションスティック / Mission Stick<br>SEGA Saturn Twin Stick / セガサターン ツインスティック<br>SEGA Saturn Racing Controller / セガサターン レーシングコントローラー / Arcade Racer<br>Dempa Micomsoft XE-1 AP<br>NEC Avenue Pad 3<br>NEC Avenue Pad 6<br>NEC 10 Key Controller Pad<br>Hudson SBom Joycard / エスボン ジョイカード<br>Taito Arkanoid controller<br>Bandai Family Trainer Mat A / ファミリートレーナー マットA / Power Pad Side A / Family Fun Fitness A<br>Bandai Family Trainer Mat B / ファミリートレーナー マットB / Power Pad Side B / Family Fun Fitness B<br>Bandai Reel Adapter<br>Mattel Power Glove<br>CAPCOM Mahjong Controller / Mahjong Controller II / 麻雀コントローラー<br>Konami HyperShot<br>Konami Dance Dance Revolution controller<br>Konami Sen'yō Yubi Controller / 専用指コントローラ<br>Konami Taikan Famicom / 大汗ファミコン<br>Varie Hardware Bike / ハードウーアバイク<br>Coconuts Pachinko Controller / パチンココントローラー<br>Sunsoft Hissatsu Pachinko Controller / 必殺パチンココントローラー<br>Sammy Jissen! PachiSlo Controller / 実戦! パチスロ コントローラー<br>TEN Kenkyūjo Sankyo FF / SegaSaturn用パチンコハンドル型コントローラー<br>Hori Track / ホリトラック<br>Brøderbund UForce<br>Realtec Smash Controller<br>Takara Densha de Go! Controller / 電車でGO!コントローラ<br>RacerMate CompuTrainer / RacerMate CompuTrainer Pro<br>Life Fitness Exertainment System<br>IGS Tap-Tap Mat + Tonkachi / タップタップマット + トンカチ<br>Sports Sciences TeeVGolf<br>Ricoh Lasabirdie / レーザーバーディー<br>ASCII Grip / アスキーグリップ / GripX / グリップX / GripV / グリップV<br>ASCII Tsurikon 64 / つりコン64<br>PR21 Party Tap<br>Media Factory Full Changer / フルチェンジャー<br>Nichibutsu Climber Stick / クライマー・スティック<br>NAMCO Jūji Key Cover / 十字キーカバー |
| `:lightgun` | Lightgun | `>lightphaser`<br>`>menacer`<br>`>virtuagun`<br>`>zapper`<br>`>superscope`<br>`>justifier`<br>`>laserscope`<br>`>bandaihypershot`<br>`>gamegun`<br>`>ap74` | SEGA Light Phaser<br>SEGA Menacer<br>SEGA Virtua Gun / バーチャガン / Stunner<br>Nintendo Zapper<br>Nintendo Super Scope<br>Konami The Justifier / サ・ジャスティファイアー<br>Konami LaserScope<br>Bandai Hyper Shot / ハイパーショット<br>American Laser GameGun<br>Jäger AP74 |
| `:mouse` | Mouse | `>md`<br>`>saturn`<br>`>sfc`<br>`>pce`<br>`>pcfx`<br>`>n64` | SEGA Mouse<br>SEGA Saturn Shuttle Mouse / セガサターン シャトルマウス<br>Nintendo Super Famicom Mouse / スーパーファミコンマウス / Super NES Mouse<br>NEC PC Engine Mouse<br>NEC PC-FX Mouse<br>Nintendo 64 Mouse |
| `:keyboard` | Typing keyboard | `>saturn`<br>`>fc`<br>`>n64`<br>`>workboy` | SEGA Saturn Keyboard<br>Famicom Keyboard<br>Nintendo 64 Keyboard<br>Fabtek WorkBoy |
| `:multitap` | Multitap for adding more controllers to the same system | `>segatap`<br>`>6player`<br>`>4playersadaptor`<br>`>super`<br>`>pce`<br>`>4wayplay` | SEGA Tap / Multiplayer / Team Player / セガタップ<br>SEGA Saturn 6 Player Adaptor Multi Terminal 6 / セガサターン6プレイヤーアダプタ マルチターミナル6 / 6Player / 6-Player Adaptor / Hudson SBom Multitap / エスボン マルチタップ<br>Hori 4 Player Adaptor / Nintendo Four Score<br>Hudson Super Multitap<br>Hudson Multitap / NEC TurboTap<br>Electronic Arts 4 Way Play |
| `:link` | Hardware for interconnecting systems | `>taisencable`<br>`>taisensaturn`<br>`>gamelinkcable`<br>`>fourplayeradapter`<br>`>mobileadaptergb`<br>`>comcable`<br>`>linkup`<br>`>ngplink`<br>`>radiounitwireless`<br>`>setsuzoku`<br>`>senyoucord`<br>`>bb2interface`<br>`>voicerkun`<br>`>midiinterface` | SEGA Game Gear Taisen Cable / Gear-to-Gear Cable<br>SEGA Saturn Taisen Cable / セガサターン 対戦ケーブル<br>Nintendo Tsūshin Cable / 通信ケーブル / Game Link Cable<br>Nintendo Four Player Adapter<br>Nintendo Mobile Adapter GB / モバイルアダプタGB<br>NEC COM Cable / TurboExpress<br>Technopop Link-up Cable<br>SNK NeoGeo Pocket Link Cable<br>SNK Musen Unit / Radio Unit Wireless Adaptor<br>SNK NeoGeo Pocket-Dreamcast Setsuzoku Cable / ネオジオポケット／ドリームキャスト接続ケーブル<br>Epoch Sen'yō Setsuzoku Cord / 専用接続コード<br>Epoch Barcode Battler II Interface / BBII Interface / バーコードバトラーIIインターフェース<br>Koei Voicer-kun / ボイサーくん<br>Yamaha MIDI Interface |
| `:expansion` | Additional hardware for expansing system capabilities | `>fmsoundunit`<br>`>romcartridge`<br>`>ramcartridge1m`<br>`>ramcartridge4m`<br>`>moviecard`<br>`>memorypak`<br>`>samegame`<br>`>expansionpak`<br>`>megald`<br>`>ldromrom`<br>`>supersystemcard`<br>`>arcadecard`<br>`>gamesexpresscard` | SEGA FM Sound Unit / FMサウンドユニット<br>SEGA Twin Advanced ROM System / S.T.A.R.S / Sen'yō ROM Cartridge / 専用ROMカートリッジ<br>SEGA Kakuchō RAM Cartridge / 拡張ラムカートリッジ<br>SEGA Kakuchō RAM Cartridge 4MB / 拡張ラムカートリッジ4MB<br>SEGA Movie Card / ムービーカード / Video CD Card<br>Nintendo Satellaview 8M Memory Pak / サテラビュー 8Mメモルーパック<br>Hudson SameGame Cassette / 鮫亀カセット<br>Nintendo Memory Kakuchō Pak / メモリー拡張パック / Expansion Pak<br>Pioneer LaserActive PAC-S / SEGA Mega-LD<br>Pioneer LaserActive PAC-N / NEC LD-ROM²<br>NEC PC Engine Super System Card CD-ROM²<br>NEC PC Engine Arcade Card Pro CD-ROM² / NEC PC Engine Arcade Card Duo CD-ROM²<br>Games Express CD Card |
| `:lockon` | Lock-on cartridge | `>supergameboy`<br>`>transferpak`<br>`>datach`<br>`>deckenhancer`<br>`>oyagame`<br>`>qtai`<br>`>karaokestudio`<br>`>sxt2`<br>`>tristar` | Nintendo Super GameBoy / Super GameBoy 2 / スーパーゲームボーイ<br>Nintendo 64GB Pak / 64GBパック / Transfer Pak<br>Bandai Datach Joint ROM System / データック<br>Camerica Aladdin Deck Enhancer<br>Sunsoft Oyagame / 親ガメ<br>Konami QTai / Q太<br>Bandai Karaoke Studio / カラオケスタジオ<br>Super X-Terminator 2 Sasuke / サスケ<br>Tri-Star |
| `:backup` | Back-up based accessory for saving progress | `>backupramcart`<br>`>powermemory`<br>`>fddsaturn`<br>`>controllerpak`<br>`>smartmediacard`<br>`>datarecorder`<br>`>battlebox`<br>`>tennokoe`<br>`>memorybase128`<br>`>turbofile` | SEGA Mega-CD Back Up RAM Cartridge / バックアップRAMカートリッジ<br>SEGA Saturn Gaibu Back-Up RAM Power Memory / セガサターン科外部バックアップRAM パワーメモリー / BackUp RAM Cartridge / BackUp Memory<br>SEGA Saturn Floppy Disc Drive / SegaSaturn FDD / セガサターン フロッピーディスクドライブ<br>Nintendo Controller Pak / コントローラパック<br>Hagiwara Syscom SmartMedia Card<br>Panasonic Famicom Data Recorder / データレコーダ<br>IGS Battle Box / バトルボックス<br>Hudson Ten no Koe 2 / Ten no Koe Bank / 天の声 / NEC Backup Booster I / Backup Booster II / バックアップブースター / NEC TurboBooster-Plus<br>NEC Memory Base 128 / メモリーベース128<br>ASCII Turbo File / Turbo File II / Turbo File GB / ターボファイル / Turbo File Adapter / ターボファイルアダプター / Turbo File Twin / ターボファイルツイン |
| `:online` | Online based accessory | `>megamodem`<br>`>megaanser`<br>`>toshokan`<br>`>segachannel`<br>`>saturnmodem`<br>`>netlink`<br>`>xband`<br>`>meganet`<br>`>teleplay`<br>`>networksystem`<br>`>ndm24`<br>`>satellaview`<br>`>randnetmodem` | SEGA Mega Modem / メガモデム<br>SEGA Mega Anser / メガアンサー<br>SEGA Game Toshokan / ゲーム図書館<br>SEGA Channel / セガチャンネル<br>SEGA Saturn Modem / セガサターン モデム<br>SEGA Saturn NetLink modem<br>Catapult XB∀ND<br>Tec Toy MegaNet<br>Baton Teleplay System<br>Nintendo Family Computer Network System / ファミリーコンピュータ ネットワークシステム<br>NTT Data Tsūshin Modem NDM24 / 通信モデムNDM24<br>Nintendo SatellaView / サテラビュー<br>Randnet Modem / ランドネット |
| `:vibration` | Vibration | `>rumblepak` | Nintendo Shindō Pak / 振動パック / Rumble Pak |
| `:glasses` | Glasses | `>3dglasses`<br>`>segavr`<br>`>3dsystem`<br>`>3dgoggle`<br>`>mvd` | SEGA 3-D Glasses / セガ3-Dグラス<br>SEGA VR Headset<br>Nintendo Famicom 3D System / ファミコン3Dシステム<br>Pioneer LaserActive 3D Goggle / 3D ゴーグル / 3-D Goggles<br>Mega Visor Display / メガバイザーディスプレイ / MVD |
| `:mic` | Microphone | `>fc`<br>`>n64`<br>`>vrs` | Hicom Mic<br>Nintendo 64 Mic<br>VRS / Onseininshiki System / 音声認識システム / Voice Recognition Unit |
| `:drawing` | Drawing board | `>graphicboard`<br>`>illustbooster`<br>`>oekakids` | SEGA Graphic Board<br>NEC Illust Booster<br>Bandai Oekakids / おえかキッズ |
| `:health` | Health monitoring | `>catalyst`<br>`>biosensor` | HeartBeat Catalyst<br>SETA Bio Sensor |
| `:midi` | MIDI Keyboard | `>miracle`<br>`>pianokeyboard` | The Miracle MIDI Keyboard<br>Konami MIDI Keyboard |
| `:led` | LED accessory | `>powerantenna`<br>`>bugsensor` | Smilesoft Power Antenna / パワーアンテナ<br>Smilesoft Bug Sensor / バグセンサー |
| `:rob` | Nintendo Family Computer Robot /  ファミリーコンピュータ ロボット/ R.O.B. / Robotic Operating Buddy | `>gyro`<br>`>block` | Gyro Set / ジャイロ セット<br>Block Set / ブロック セット |
| `:printer` | Printer | `>pocketprinter`<br>`>printbooster` | Nintendo Pocket Printer / ポケットプリンタ / GameBoy Printer<br>NEC Print Booster |
| `:barcode` | Barcode reader | `>barcodeboy`<br>`>barcodereader` | NAMCOT Barcode Boy<br>Tam Barcode Reader / バーコードリーダー |
| `:rss` | Roland Sound Space |  |  |
| `:pocketcamera` | Nintendo Pocket Camera / ポケットカメラ / GameBoy Camera |  |  |
| `:capturecassette` | Nintendo 64 Capture Cassette |  |  |
| `:photoreader` | NEC Photo Reader |  |  |
| `:develobox` | Tokuma Shoten Develo Box / でべろ Box |  |  |
| `:teststation` | Nintendo NES Test Station |  |  |
| `:pocketsakura` | Media Factory Pocket Sakura / ポケット・サクラ |  |  |
| `:spectrumcommunicator` | Creatures Spectrum Communicator / スペクトラムコミュニケーター |  |  |

</details>

<details>
<summary><strong>#embedded</strong> - Embedded extra hardware in cartridge</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:backup` | Back-up embeded system for saving progress | `>battery`<br>`>flashram`<br>`>feram`<br>`>eeprom` | Battery backed SRAM<br>Flash RAM<br>Ferroelectric RAM<br>EEPROM |
| `:chip` | Enhancement chip | `>ram`<br>`>rtc`<br>`>svp`<br>`>mmc5`<br>`>dsp1`<br>`>dsp1a`<br>`>dsp1b`<br>`>dsp2`<br>`>dsp3`<br>`>dsp4`<br>`>sa1`<br>`>sdd1`<br>`>sfx1`<br>`>sfx2`<br>`>obc1`<br>`>vrc6`<br>`>vrc7`<br>`>n163`<br>`>fme7`<br>`>5a`<br>`>5b`<br>`>m50805`<br>`>7755`<br>`>7756`<br>`>cx4`<br>`>spc7110`<br>`>st010`<br>`>st011`<br>`>st018` | Extra RAM<br>Real-Time Clock<br>SEGA Virtua Processor / SVP<br>Nintendo MMC5<br>Nintendo DSP-1<br>Nintendo DSP-1a<br>Nintendo DSP-1b<br>Nintendo DSP-2<br>Nintendo DSP-3<br>Nintendo DSP-4<br>Nintendo SA-1<br>Nintendo S-DD1<br>Nintendo Super FX GSU-1<br>Nintendo Super FX GSU-2<br>Nintendo OBC-1<br>Konami VRC VI<br>Konami VRC VII<br>NAMCO 163<br>Sunsoft FME-7<br>Sunsoft 5A<br>Sunsoft 5B<br>Mitsubishi M50805<br>NEC µPD7755C<br>NEC µPD7756C<br>CAPCOM CX4<br>Epson SPC7110<br>SETA ST010<br>SETA ST011<br>SETA ST018 |
| `:slot` | Slot in cartridge | `>rj11`<br>`>jcart`<br>`>lockon`<br>`>kogame`<br>`>gameboy`<br>`>gamelink`<br>`>smartmedia` | RJ-11 port<br>Codemasters J-Cart<br>SEGA Sonic & Knuckles Lock-On Technology<br>Sunsoft Kogame Cassette / 子ガメカセット<br>Nintendo GameBoy cartridge<br>Nintendo Tsūshin Cable port / 通信ケーブル / GameLink<br>Tokyo Electron SmartMedia Double Slot |
| `:vibration` | Vibration | `>rumble` | Includes Rumble Feature |
| `:accelerometer` | Motion sensor |  |  |
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
| `:sega` | SEGA board | `>vicdual`<br>`>vco`<br>`>g80`<br>`>system1`<br>`>system2`<br>`>system16`<br>`>system16a`<br>`>system16b`<br>`>system16c`<br>`>system18`<br>`>system24`<br>`>system32`<br>`>multi32`<br>`>h1`<br>`>systemc`<br>`>systemc2`<br>`>systeme`<br>`>xboard`<br>`>yboard`<br>`>stv`<br>`>model1`<br>`>model2a`<br>`>model2b`<br>`>model2c`<br>`>model3`<br>`>model3s15`<br>`>model3s2`<br>`>model3s21`<br>`>naomi` | SEGA/Gremlin VIC Dual<br>SEGA VCO Object<br>SEGA G80<br>SEGA System 1<br>SEGA System 2<br>SEGA System 16<br>SEGA System 16A<br>SEGA System 16B<br>SEGA System 16C<br>SEGA System 18<br>SEGA System 24<br>SEGA System 32<br>SEGA System Multi 32<br>SEGA H1 Board<br>SEGA System C<br>SEGA System C-2<br>SEGA System E<br>SEGA X Board<br>SEGA Y Board<br>SEGA Titan Video<br>SEGA Model 1<br>SEGA Model 2A<br>SEGA Model 2B<br>SEGA Model 2C<br>SEGA Model 3<br>SEGA Model 3 Step 1.5<br>SEGA Model 3 Step 2.0<br>SEGA Model 3 Step 2.1<br>SEGA NAOMI |
| `:irem` | Irem board | `>m10`<br>`>m15`<br>`>m27`<br>`>m52`<br>`>m57`<br>`>m58`<br>`>m62`<br>`>m63`<br>`>m72`<br>`>m75`<br>`>m77`<br>`>m81`<br>`>m82`<br>`>m84`<br>`>m85`<br>`>m90`<br>`>m92`<br>`>m97`<br>`>m107` | Irem M10<br>Irem M15<br>Irem M27<br>Irem M52<br>Irem M57<br>Irem M58<br>Irem M62<br>Irem M63<br>Irem M72<br>Irem M75<br>Irem M77<br>Irem M81<br>Irem M82<br>Irem M84<br>Irem M85<br>Irem M90<br>Irem M92<br>Irem M97<br>Irem M107 |
| `:snk` | SNK board | `>mvs` | SNK Multi Video System / MVS |
| `:taito` | Taito board | `>xsystem`<br>`>bsystem`<br>`>hsystem`<br>`>lsystem`<br>`>zsystem`<br>`>osystem`<br>`>f1system`<br>`>f2system`<br>`>f3system`<br>`>lgsystem` | Taito X System<br>Taito B System<br>Taito H System<br>Taito L System<br>Taito Z System<br>Taito O System<br>Taito F1 System / F2 System Extended<br>Taito F2 System<br>Taito F3 System<br>Taito LG System |
| `:konami` | Konami board | `>bubble`<br>`>gx330`<br>`>gx361`<br>`>gx400` | Konami Bubble System<br>Konami GX330<br>Konami GX361<br>Konami GX400 |
| `:namco` | NAMCO board |  |  |
| `:toaplan` | Toaplan board | `>version1`<br>`>version2` | Toaplan Version 1<br>Toaplan Version 2 |
| `:jaleco` | Jaleco board | `>megasystem1` | Jaleco Mega System 1 |
| `:nintendo` | Nintendo board | `>vssystem`<br>`>pc10`<br>`>nss` | Nintendo VS. System<br>Nintendo PlayChoice-10<br>Nintendo Super System |
| `:nichibutsu` | Nichibutsu board |  |  |
| `:stern` | Stern Electronics board |  |  |
| `:vectorbeam` | Vectorbeam board |  |  |
| `:taiyo` | Taiyo System Board |  |  |
| `:tecfri` | Tecfri board | `>ambush` | Tecfri Ambush |
| `:tourvision` | TourVisión board |  |  |

</details>

<details>
<summary><strong>#compatibility</strong> - System compatibility</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:sg1000` | SEGA SG-1000 | `>sc3000`<br>`>othello` | SEGA SC-3000<br>Othello Multivision |
| `:mark3` | SEGA Mark III / master System | `>mycard`<br>`>epmycard`<br>`>thesegacard`<br>`>themegacartridge`<br>`>silvercartridge`<br>`>goldcartridge1`<br>`>goldcartridge2`<br>`>goldcartridge4` | SEGA My Card<br>SEGA EP My Card<br>The SEGA Card<br>The Mega Cartridge (Japan)<br>Silver Cartridge<br>Gold Cartridge (1 mega)<br>Gold Cartridge (2 mega)<br>Gold Cartridge (4 mega) |
| `:famicom` | Family Computer / NES | `>pegasus` | Pegasus Computer Family Game |
| `:disksystem` | Famicom Disk System | `>dw` | Disk Writer |
| `:gameboy` | Nintendo GameBoy | `>mono`<br>`>color`<br>`>sgb`<br>`>gba`<br>`>infrared`<br>`>np` | Monochrome<br>Color<br>Super GameBoy<br>GameBoy Advance<br>Infrared data communication / 赤外線通信<br>Nintendo Power / ニンテンドウパワー / GB Memory Cartridge / GBメモリカートリッジ |
| `:superfamicom` | Nintendo Super Famicom / Super Nintendo Entertainment System / SNES | `>hirom`<br>`>lorom`<br>`>exhirom`<br>`>exlorom`<br>`>nss`<br>`>soundlink`<br>`>np`<br>`>gs` | HiROM<br>LoROM<br>Extended HiROM<br>Extended LoRom<br>Nintendo Super System / NSS<br>SoundLink / サウンドリンクゲーム / VoiceLink / 音声連動ゲーム<br>Nintendo Power / ニンテンドウパワー / SF Memory Cassette / SFメモリカセット<br>Nintendo Gateway System |
| `:pcengine` | NEC PC Engine | `>supergrafx` | PC SuperGrafx |
| `:neogeopocket` | NeoGeo Pocket | `>mono`<br>`>color` | Monochrome<br>Color |

</details>

<details>
<summary><strong>#disc</strong> - Number of discs</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:2` | Two discs |  |  |
| `:3` | Three discs |  |  |
| `:4` | Four discs |  |  |
| `:5` | Five discs |  |  |
| `:8` | Eight discs | `>1`<br>`>2`<br>`>3`<br>`>4`<br>`>5`<br>`>6`<br>`>7`<br>`>8` | Disc 1<br>Disc 2<br>Disc 3<br>Disc 4<br>Disc 5<br>Disc 6<br>Disc 7<br>Disc 8 |

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
| `:vr` | Virtual Reality |  |  |
| `:keyword` | Other specific game features | `>strip`<br>`>promo`<br>`>qsound`<br>`>dolby`<br>`>rs`<br>`>ubikey`<br>`>official`<br>`>endorsed`<br>`>brand` | Stripped girls as a stage clear reward<br>Promotional not-for-sale limited product<br>QSound support<br>Dolby Surround<br>Response Sound System / レスポンス サウンド システム / RS<br>Ubi Key<br>Official sports game<br>Endorsed by public figure<br>Endorsed by company or brand |

</details>

<details>
<summary><strong>#compilation</strong> - Compilation of previously released games ID</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:adamandeve` | Adam and Eve |  |  |
| `:babyboomer` | Baby Boomer |  |  |
| `:balloonmonster` | Balloon Monster |  |  |
| `:baseballpros` | Baseball Pros |  |  |
| `:bignosefreaksout` | Big Nose Freaks Out |  |  |
| `:bignosethecaveman` | Big Nose the Caveman |  |  |
| `:blackjack` | Blackjack |  |  |
| `:bmxsimulator` | BMX Simulator |  |  |
| `:boomerangkid` | Boomerang Kid |  |  |
| `:bombliss` | Bombliss |  |  |
| `:brushroller` | Brush Roller |  |  |
| `:challengeofthedragon` | Challenge of the Dragon |  |  |
| `:chiller` | Chiller |  |  |
| `:cjselephantantics` | C.J.'s Elephant Antics |  |  |
| `:cosmoscop` | Cosmoscop |  |  |
| `:crystalmines` | Crystal Mines |  |  |
| `:deathbots` | Death Bots |  |  |
| `:deathrace` | Death Race |  |  |
| `:donkeykong` | Donkey Kong |  |  |
| `:donkeykongjr` | Donkey Kong Jr. |  |  |
| `:donkeykongjrnosansuuasobi` | Donkey Kong Jr. No Sansuu Asobi |  |  |
| `:doublestrike` | Double Strike |  |  |
| `:duckhunt` | Duck Hunt |  |  |
| `:dudeswithattitude` | Dudes with Attitude |  |  |
| `:f15citywar` | F-15 City War |  |  |
| `:f16renegade` | F-16 Renegade |  |  |
| `:fantasticdizzy` | Fantastic Dizzy |  |  |
| `:finalfantasy` | Final Fantasy |  |  |
| `:finalfantasy2` | Final Fantasy II |  |  |
| `:galacticcrusader` | Galactic Crusader |  |  |
| `:godizzygo` | Go Dizzy Go |  |  |
| `:krazykreatures` | Krazy Kreatures |  |  |
| `:kingneptunesadventure` | King Neptune's Adventure |  |  |
| `:linusspacehead` | Linus Spacehead |  |  |
| `:magiccarpet1001` | Magic Carpet 1001 |  |  |
| `:mahjonggmen89satsusaretaol` | Mahjong G-Men '89 Satsusareta OL |  |  |
| `:masterchuandthedrunkardhu` | Master Chu and the Drunkard Hu |  |  |
| `:menacebeach` | Menace Beach |  |  |
| `:micromachines` | Micro Machines |  |  |
| `:moonranger` | Moon Ranger |  |  |
| `:nekketsukoukoudodgeballbusoccerhen` | Nekketsu Kōkō Dodgeball Bu Soccer Hen |  |  |
| `:ohpaipee` | Oh Pai Pee |  |  |
| `:operationsecretstorm` | Operation Secret Storm |  |  |
| `:pesterminatorthewesternexterminator` | Pesterminator the Western Exterminator |  |  |
| `:porter` | Porter |  |  |
| `:pradikusconflict` | Pradikus Conflict |  |  |
| `:protennis` | Pro Tennis |  |  |
| `:puzzleideatek` | Puzzle Idea Tek |  |  |
| `:pyramid1` | Pyramid 1 |  |  |
| `:raid2020` | Raid 2020 |  |  |
| `:radrackettennis` | Rad Racquet Tennis |  |  |
| `:robodemons` | Robo Demons |  |  |
| `:runningstadium` | Running Stadium |  |  |
| `:secretscoutinthetempleofdemise` | Secret Scout in the Temple of Demise |  |  |
| `:sesamestreet123` | Sesame Street 123 |  |  |
| `:sesamestreetabc` | Sesame Street ABC |  |  |
| `:shockwave` | Shockwave |  |  |
| `:soccercm` | Soccer CM |  |  |
| `:soccersimulator` | Soccer Simulator |  |  |
| `:solitairenes` | Solitaire NES |  |  |
| `:stakkm` | Stakk M |  |  |
| `:stuntbuggies` | Stunt Buggies |  |  |
| `:superrobinhood` | Super Robin Hood |  |  |
| `:supermariobros` | Super Mario Bros. | `>supermariobros2`<br>`>supermariobros3`<br>`>yumekoujoudokidokipanic` | Super Mario Bros. 2<br>Super Mario Bros. 3<br>Yume Kōjō Doki Doki Panic |
| `:tetris2` | Tetris 2 |  |  |
| `:theadventuresofcaptaincomic` | The Adventures of Captain Comic |  |  |
| `:theultimatestuntman` | The Ultimate Stuntman |  |  |
| `:tilesoffate` | Tiles of Fate |  |  |
| `:treasureislanddizzy` | Treasure Island Dizzy |  |  |
| `:uschampionshipvball` | US Championship V'Ball |  |  |
| `:venicebeachvolleyball` | Venice Beach Volleyball |  |  |

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
| `:satakore` | SEGA Saturn Collection / Satakore / サタコレ |
| `:genteiban` | Genteiban / 限定版 |
| `:seganet` | SegaNet / セガネット |
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
| `:koeibest` | Koei Best Collection / Koei Best コレクション |
| `:gamenokanzume` | Game no Kanzume Otokuyō / ゲームのかんづめ お徳用 |
| `:soundware` | Koei SoundWare audio CD |
| `:playerschoice` | Players Choice / Million Seller |
| `:classicserie` | Nintendo Classic Serie |
| `:kousenjuu` | Kōsenjū Series / 光線銃シリーズ |
| `:comicclassics` | Comic Classics |
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
| `:archimedes` | Acorn Archimedes |  |  |
| `:elektronika60` | Elektronika 60 / Электроника 60 |  |  |
| `:spectrum` | Sinclair ZX Spectrum |  |  |
| `:amstrad` | Amstrad CPC |  |  |
| `:atari` | Atari | `>atari400`<br>`>atarist`<br>`>falcon`<br>`>atari2600`<br>`>lynx`<br>`>jaguar` | Atari 400<br>Atari ST<br>Atari Falcon030<br>Atari 2600<br>Lynx<br>Jaguar |
| `:nec` | NEC / Nippon Electric Company | `>pc88`<br>`>pc98`<br>`>pcengine`<br>`>cdromrom`<br>`>pcfx` | PC-8801<br>PC-9801<br>PC Engine / PCエンジン / TurboGrafx / TurboGrafx-16<br>CD-ROM² / シーディーロムロム / TurboGrafx-CD<br>PC-FX |
| `:msx` | MSX | `>2` | MSX2 |
| `:sharp` | Sharp | `>x1`<br>`>mz700`<br>`>x68000` | Sharp X1<br>Sharp MZ<br>X68000 |
| `:pc` | PC DOS |  |  |
| `:sega` | SEGA / セガ | `>sg1000`<br>`>mark3`<br>`>gamegear`<br>`>megadrive`<br>`>megacd`<br>`>32x`<br>`>saturn`<br>`>dreamcast` | SG-1000<br>Mark III / マークIII / Master System / マスターシステム<br>Game Gear / ゲームギア<br>MegaDrive / メガドライブ / Genesis<br>SEGA Mega-CD / メガシーディー / SEGA-CD<br>SEGA Super 32X / スーパー32X / Genesis 32X / MegaDrive 32X<br>SEGA Saturn / セガサターン<br>Dreamcast / ドリームキャスト |
| `:nintendo` | Nintendo / 任天堂 | `>famicom`<br>`>disksystem`<br>`>superfamicom`<br>`>n64`<br>`>gameboy`<br>`>gbc`<br>`>gba`<br>`>gameandwatch` | Famicom / Family Computer / ファミリーコンピュータ / Nintendo Entertainment System / NES<br>Famicom Disk System / Family Computer Disk System / ファミリーコンピュータ ディスクシステム<br>Super Famicom / スーパーファミコン / Super Nintendo Entertainment System / SNES<br>Nintendo 64<br>GameBoy / ゲームボーイ<br>GameBoy Color / ゲームボーイカラー<br>GameBoy Advance / ゲームボーイアドバンス / GBA<br>Game & Watch / ゲーム&ウオッチ |
| `:sony` | Sony / ソニー | `>playstation` | PlayStation / プレイステーション |
| `:3do` | Panasonic 3DO / スリーディーオー |  |  |
| `:wonderswan` | Bandai WonderSwan / ワンダースワン |  |  |
| `:cdi` | Philips CD-i |  |  |
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
| `:ca` | Catalan / Català |
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
| `:ninjajajamaru` | Ninja JaJaMaru Retro Collection / 忍者じゃじゃ丸 Collection |  |  |
| `:zeldacollection` | The Legend of Zelda Collection / ゼルダコレクション / The Legend of Zelda: Collector's Edition |  |  |
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
| `:3dfukkoku` | SEGA 3D Fukkoku Archives / セガ3D復刻アーカイブス / SEGA 3D Classics Collection | `>1`<br>`>2` | SEGA 3D Fukkoku Archives / セガ3D復刻アーカイブス<br>SEGA 3D Fukkoku Archives 2 / セガ3D復刻アーカイブス2 / SEGA 3D Classics Collection |
| `:mdmini` | SEGA MegaDrive Mini / SEGA Genesis Mini | `>1`<br>`>2` | SEGA MegaDrive Mini / SEGA Genesis Mini<br>SEGA MegaDrive Mini 2 / SEGA Genesis Mini 2 |
| `:sfcmini` | Nintendo Super Famicom Classic Mini / スーパーファミコン クラシックミニ / Super Nintendo Entertainment System Classic Mini |  |  |
| `:pcemini` | Konami PC Engine Mini / ピーシーエンジン ミニ / Core Grafx Mini Mini / PCエンジン コアグラフィックス ミニ / TurboGrafx 16 Mini |  |  |
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
| `:f` | Revision F |
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
| `:f1` | Set F-1 |
| `:f2` | Set F-2 |

</details>

<details>
<summary><strong>#alt</strong> - Alternative rip</summary>

| Subcategory | Description |
|-------------|-------------|
| `:1` | Alternative 1 |
| `:2` | Alternative 2 |
| `:3` | Alternative 3 |
| `:4` | Alternative 4 |
| `:5` | Alternative 5 |
| `:6` | Alternative 6 |

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

<details>
<summary><strong>#mamerom</strong> - Merged MAME ROM ZIP file > MAME ROM ZIP subfile</summary>

| Subcategory | Description | Children | Children Description |
|-------------|-------------|----------|--------------------|
| `:5` | 005 | `>005a` | 005a |
| `:10yard` | 10yard | `>10yard85`<br>`>10yardj`<br>`>vs10yard`<br>`>vs10yardj`<br>`>vs10yardu` | 10yard85<br>10yardj<br>vs10yard<br>vs10yardj<br>vs10yardu |
| `:1941` | 1941 | `>1941j`<br>`>1941r1`<br>`>1941u` | 1941j<br>1941r1<br>1941u |
| `:1942` | 1942 | `>1942a`<br>`>1942b`<br>`>1942h`<br>`>1942w` | 1942a<br>1942b<br>1942h<br>1942w |
| `:1943` | 1943 | `>1943j`<br>`>1943ja`<br>`>1943jah`<br>`>1943u`<br>`>1943ua` | 1943j<br>1943ja<br>1943jah<br>1943u<br>1943ua |
| `:1943kai` | 1943kai |  |  |
| `:1943mii` | 1943mii |  |  |
| `:1944` | 1944 | `>1944d`<br>`>1944j`<br>`>1944u` | 1944d<br>1944j<br>1944u |
| `:19xx` | 19xx | `>19xxa`<br>`>19xxar1`<br>`>19xxb`<br>`>19xxd`<br>`>19xxh`<br>`>19xxj`<br>`>19xxjr1`<br>`>19xxjr2`<br>`>19xxu` | 19xxa<br>19xxar1<br>19xxb<br>19xxd<br>19xxh<br>19xxj<br>19xxjr1<br>19xxjr2<br>19xxu |
| `:2020bb` | 2020bb | `>2020bba` | 2020bba |
| `:2mindril` | 2mindril | `>2mindrila` | 2mindrila |
| `:3countb` | 3countb |  |  |
| `:3wonders` | 3wonders | `>3wondersr1`<br>`>3wondersrh`<br>`>wonder3` | 3wondersr1<br>3wondersrh<br>wonder3 |
| `:40love` | 40love | `>40lovej` | 40lovej |
| `:4dwarrio` | 4dwarrio |  |  |
| `:abcop` | abcop | `>abcopj` | abcopj |
| `:abunai` | abunai |  |  |
| `:aburner2` | aburner2 | `>aburner`<br>`>aburner2g` | aburner<br>aburner2g |
| `:aceattac` | aceattac | `>aceattaca` | aceattaca |
| `:afighter` | afighter | `>afightera`<br>`>afighterb`<br>`>afighterc`<br>`>afighterd`<br>`>afightere`<br>`>afighterf`<br>`>afighterg`<br>`>afighterh` | afightera<br>afighterb<br>afighterc<br>afighterd<br>afightere<br>afighterf<br>afighterg<br>afighterh |
| `:ainferno` | ainferno | `>ainfernoj`<br>`>ainfernou` | ainfernoj<br>ainfernou |
| `:airass` | airass | `>firebarr` | firebarr |
| `:airduel` | airduel | `>airdueljm72`<br>`>airduelm72`<br>`>airduelu` | airdueljm72<br>airduelm72<br>airduelu |
| `:airwlkrs` | airwlkrs |  |  |
| `:ajax` | ajax | `>ajaxj`<br>`>typhoon` | ajaxj<br>typhoon |
| `:alexkidd` | alexkidd | `>alexkidd1` | alexkidd1 |
| `:alibaba` | alibaba | `>alibabab` | alibabab |
| `:alien3` | alien3 | `>alien3j`<br>`>alien3u` | alien3j<br>alien3u |
| `:aliensyn` | aliensyn | `>aliensyn2`<br>`>aliensyn3`<br>`>aliensyn5`<br>`>aliensyn7`<br>`>aliensynj`<br>`>aliensynjo` | aliensyn2<br>aliensyn3<br>aliensyn5<br>aliensyn7<br>aliensynj<br>aliensynjo |
| `:alphaho` | alphaho | `>alphahob` | alphahob |
| `:alpham2` | alpham2 | `>alpham2p` | alpham2p |
| `:alpine` | alpine | `>alpinea` | alpinea |
| `:altbeast` | altbeast | `>altbeast2`<br>`>altbeast4`<br>`>altbeast5`<br>`>altbeast6`<br>`>altbeastj`<br>`>altbeastj1`<br>`>altbeastj3` | altbeast2<br>altbeast4<br>altbeast5<br>altbeast6<br>altbeastj<br>altbeastj1<br>altbeastj3 |
| `:amazon` | amazon | `>amatelas`<br>`>amazont` | amatelas<br>amazont |
| `:amidar` | amidar | `>amidar1`<br>`>amidarb`<br>`>amidarb2`<br>`>amidarc`<br>`>amidaro`<br>`>amidars`<br>`>amidaru`<br>`>amigo`<br>`>amigo2`<br>`>mandinga`<br>`>mandingac`<br>`>mandingaeg`<br>`>mandingag`<br>`>mandingarf`<br>`>mandinka`<br>`>olmandingc`<br>`>olmandingo` | amidar1<br>amidarb<br>amidarb2<br>amidarc<br>amidaro<br>amidars<br>amidaru<br>amigo<br>amigo2<br>mandinga<br>mandingac<br>mandingaeg<br>mandingag<br>mandingarf<br>mandinka<br>olmandingc<br>olmandingo |
| `:androdun` | androdun |  |  |
| `:andromed` | andromed |  |  |
| `:angelkds` | angelkds |  |  |
| `:anpanman` | anpanman | `>anpanmana` | anpanmana |
| `:aodk` | aodk |  |  |
| `:aof` | aof |  |  |
| `:aof2` | aof2 |  |  |
| `:aof3` | aof3 | `>aof3` | aof3 |
| `:apparel` | apparel |  |  |
| `:appoooh` | appoooh |  |  |
| `:aquajack` | aquajack | `>aquajackj`<br>`>aquajacku` | aquajackj<br>aquajacku |
| `:aquastge` | aquastge |  |  |
| `:arabfgt` | arabfgt | `>arabfgtj`<br>`>arabfgtu` | arabfgtj<br>arabfgtu |
| `:arabianm` | arabianm | `>arabianmj`<br>`>arabianmu` | arabianmj<br>arabianmu |
| `:arescue` | arescue | `>arescuej`<br>`>arescueu` | arescuej<br>arescueu |
| `:arkanoid` | arkanoid | `>ark1ball`<br>`>arkangc`<br>`>arkangc2`<br>`>arkanoidj`<br>`>arkanoidja`<br>`>arkanoidjb`<br>`>arkanoidjbl`<br>`>arkanoidjbl2`<br>`>arkanoidu`<br>`>arkanoiduo`<br>`>arkatayt`<br>`>arkatayt2`<br>`>arkbloc2`<br>`>arkbloc3`<br>`>arkblock`<br>`>arkgcbl`<br>`>arkgcbla`<br>`>block2` | ark1ball<br>arkangc<br>arkangc2<br>arkanoidj<br>arkanoidja<br>arkanoidjb<br>arkanoidjbl<br>arkanoidjbl2<br>arkanoidu<br>arkanoiduo<br>arkatayt<br>arkatayt2<br>arkbloc2<br>arkbloc3<br>arkblock<br>arkgcbl<br>arkgcbla<br>block2 |
| `:arknoid2` | arknoid2 | `>arknoid2b`<br>`>arknoid2j`<br>`>arknoid2u` | arknoid2b<br>arknoid2j<br>arknoid2u |
| `:arkretrn` | arkretrn | `>arkretrnj`<br>`>arkretrnu` | arkretrnj<br>arkretrnu |
| `:armedf` | armedf | `>armedff` | armedff |
| `:armwar` | armwar | `>armwara`<br>`>armwarar1`<br>`>armwarb`<br>`>armward`<br>`>armwaru`<br>`>armwaru1`<br>`>pgear`<br>`>pgearr1` | armwara<br>armwarar1<br>armwarb<br>armward<br>armwaru<br>armwaru1<br>pgear<br>pgearr1 |
| `:armwrest` | armwrest |  |  |
| `:ashura` | ashura | `>ashuraj`<br>`>ashurau` | ashuraj<br>ashurau |
| `:aso` | aso | `>alphamis`<br>`>arian` | alphamis<br>arian |
| `:astorm` | astorm | `>astormj`<br>`>astormu` | astormj<br>astormu |
| `:astrass` | astrass |  |  |
| `:astrob` | astrob | `>astrob1`<br>`>astrob2`<br>`>astrob2a`<br>`>astrob2b`<br>`>astrobf`<br>`>astrobg` | astrob1<br>astrob2<br>astrob2a<br>astrob2b<br>astrobf<br>astrobg |
| `:asuka` | asuka | `>asukaj`<br>`>asukaja` | asukaj<br>asukaja |
| `:athena` | athena | `>athenab`<br>`>sathena` | athenab<br>sathena |
| `:atomicp` | atomicp |  |  |
| `:aurail` | aurail | `>aurail1`<br>`>aurailj` | aurail1<br>aurailj |
| `:av2mj1bb` | av2mj1bb |  |  |
| `:av2mj2rg` | av2mj2rg |  |  |
| `:avmjts` | avmjts |  |  |
| `:avmjyk` | avmjyk |  |  |
| `:avsp` | avsp | `>avspa`<br>`>avspd`<br>`>avsph`<br>`>avspj`<br>`>avspu` | avspa<br>avspd<br>avsph<br>avspj<br>avspu |
| `:b2b` | b2b |  |  |
| `:bakatono` | bakatono |  |  |
| `:bakubaku` | bakubaku |  |  |
| `:ballbomb` | ballbomb |  |  |
| `:ballbros` | ballbros |  |  |
| `:balonfgt` | balonfgt |  |  |
| `:bananadr` | bananadr |  |  |
| `:bangbead` | bangbead |  |  |
| `:bankp` | bankp |  |  |
| `:barline` | barline |  |  |
| `:bassdx` | bassdx | `>getbass`<br>`>getbassdx`<br>`>getbassur` | getbass<br>getbassdx<br>getbassur |
| `:batcir` | batcir | `>batcira`<br>`>batcird`<br>`>batcirj` | batcira<br>batcird<br>batcirj |
| `:batmanfr` | batmanfr |  |  |
| `:battlnts` | battlnts | `>battlntsa`<br>`>battlntsj` | battlntsa<br>battlntsj |
| `:battroad` | battroad |  |  |
| `:bayroute` | bayroute | `>bayroute1`<br>`>bayroutej` | bayroute1<br>bayroutej |
| `:bbmanw` | bbmanw | `>bbmanwj`<br>`>bbmanwja`<br>`>bomblord`<br>`>newapunk` | bbmanwj<br>bbmanwja<br>bomblord<br>newapunk |
| `:bbusters` | bbusters | `>bbustersj`<br>`>bbustersja`<br>`>bbustersu`<br>`>bbustersua` | bbustersj<br>bbustersja<br>bbustersu<br>bbustersua |
| `:bchopper` | bchopper | `>mrheli` | mrheli |
| `:bel` | bel |  |  |
| `:benberob` | benberob |  |  |
| `:bermudat` | bermudat | `>bermudatj` | bermudatj |
| `:bigevglf` | bigevglf | `>bigevglfj` | bigevglfj |
| `:bijokkog` | bijokkog |  |  |
| `:bijokkoy` | bijokkoy |  |  |
| `:bikkuri` | bikkuri |  |  |
| `:bioatack` | bioatack |  |  |
| `:bionicc` | bionicc | `>bionicc1`<br>`>bionicc2`<br>`>bioniccbl`<br>`>bioniccbl2`<br>`>topsecrt`<br>`>topsecrt2` | bionicc1<br>bionicc2<br>bioniccbl<br>bioniccbl2<br>topsecrt<br>topsecrt2 |
| `:bjourney` | bjourney |  |  |
| `:bking` | bking |  |  |
| `:bking2` | bking2 |  |  |
| `:bking3` | bking3 |  |  |
| `:blazstar` | blazstar |  |  |
| `:blkpnthr` | blkpnthr |  |  |
| `:blktiger` | blktiger | `>blkdrgon`<br>`>blktigera` | blkdrgon<br>blktigera |
| `:block` | block | `>blockj`<br>`>blockr1`<br>`>blockr2` | blockj<br>blockr1<br>blockr2 |
| `:blockfvr` | blockfvr |  |  |
| `:blockgal` | blockgal |  |  |
| `:bloxeed` | bloxeed | `>bloxeedc`<br>`>bloxeedu` | bloxeedc<br>bloxeedu |
| `:bmaster` | bmaster | `>crossbld` | crossbld |
| `:bnglngby` | bnglngby |  |  |
| `:bnzabros` | bnzabros | `>bnzabrosj` | bnzabrosj |
| `:bodyslam` | bodyslam | `>dumpmtmt` | dumpmtmt |
| `:bonzeadv` | bonzeadv | `>bonzeadvo`<br>`>bonzeadvp`<br>`>bonzeadvp2`<br>`>bonzeadvu`<br>`>jigkmgri`<br>`>jigkmgria` | bonzeadvo<br>bonzeadvp<br>bonzeadvp2<br>bonzeadvu<br>jigkmgri<br>jigkmgria |
| `:borench` | borench | `>borencha`<br>`>borenchj` | borencha<br>borenchj |
| `:brain` | brain |  |  |
| `:brdrline` | brdrline | `>brdrlinb`<br>`>brdrlinet`<br>`>brdrlins`<br>`>starrkr` | brdrlinb<br>brdrlinet<br>brdrlins<br>starrkr |
| `:breakers` | breakers |  |  |
| `:breakrev` | breakrev |  |  |
| `:brival` | brival | `>brivalj` | brivalj |
| `:bshark` | bshark | `>bsharkj`<br>`>bsharkjjs`<br>`>bsharku` | bsharkj<br>bsharkjjs<br>bsharku |
| `:bstars` | bstars |  |  |
| `:bstars2` | bstars2 |  |  |
| `:btlecity` | btlecity |  |  |
| `:bubblem` | bubblem | `>bubblemj`<br>`>bubblemu` | bubblemj<br>bubblemu |
| `:bublbob2` | bublbob2 | `>bublbob2e`<br>`>bublbob2j`<br>`>bublbob2o`<br>`>bublbob2p`<br>`>bublbob2u`<br>`>bubsymphb` | bublbob2e<br>bublbob2j<br>bublbob2o<br>bublbob2p<br>bublbob2u<br>bubsymphb |
| `:bublbobl` | bublbobl | `>bbredux`<br>`>boblbobl`<br>`>bub68705`<br>`>bub8749`<br>`>bublbobl1`<br>`>bublboblb`<br>`>bublboblp`<br>`>bublboblr`<br>`>bublboblr1`<br>`>bublcave`<br>`>bublcave10`<br>`>bublcave11`<br>`>dland`<br>`>sboblbobl`<br>`>sboblbobla`<br>`>sboblboblb`<br>`>sboblboblc`<br>`>sboblbobld`<br>`>sboblboble`<br>`>sboblboblf` | bbredux<br>boblbobl<br>bub68705<br>bub8749<br>bublbobl1<br>bublboblb<br>bublboblp<br>bublboblr<br>bublboblr1<br>bublcave<br>bublcave10<br>bublcave11<br>dland<br>sboblbobl<br>sboblbobla<br>sboblboblb<br>sboblboblc<br>sboblbobld<br>sboblboble<br>sboblboblf |
| `:buckrog` | buckrog | `>buckrogn`<br>`>buckrogn2`<br>`>zoom909` | buckrogn<br>buckrogn2<br>zoom909 |
| `:buggychl` | buggychl | `>buggychlt` | buggychlt |
| `:bullet` | bullet |  |  |
| `:bullfgt` | bullfgt | `>thetogyu` | thetogyu |
| `:burningf` | burningf | `>burningfp`<br>`>burningfpa`<br>`>burningfpb` | burningfp<br>burningfpa<br>burningfpb |
| `:bygone` | bygone |  |  |
| `:cachat` | cachat | `>tubeit` | tubeit |
| `:cadash` | cadash | `>cadashf`<br>`>cadashg`<br>`>cadashgo`<br>`>cadashi`<br>`>cadashj`<br>`>cadashj1`<br>`>cadashjo`<br>`>cadashs`<br>`>cadashu`<br>`>cadashu1` | cadashf<br>cadashg<br>cadashgo<br>cadashi<br>cadashj<br>cadashj1<br>cadashjo<br>cadashs<br>cadashu<br>cadashu1 |
| `:cameltry` | cameltry | `>cameltrya`<br>`>cameltryj` | cameltrya<br>cameltryj |
| `:canvas` | canvas |  |  |
| `:captcomm` | captcomm | `>captcommj`<br>`>captcommjr1`<br>`>captcommr1`<br>`>captcommu` | captcommj<br>captcommjr1<br>captcommr1<br>captcommu |
| `:carhntds` | carhntds |  |  |
| `:carnival` | carnival | `>carnivalb`<br>`>carnivalc`<br>`>carnivalca`<br>`>carnivalh`<br>`>carnivalha`<br>`>carnivalmm` | carnivalb<br>carnivalc<br>carnivalca<br>carnivalh<br>carnivalha<br>carnivalmm |
| `:cavelon` | cavelon |  |  |
| `:cawing` | cawing | `>cawingj`<br>`>cawingr1`<br>`>cawingu`<br>`>cawingur1` | cawingj<br>cawingr1<br>cawingu<br>cawingur1 |
| `:cbombers` | cbombers | `>cbombersj`<br>`>cbombersp` | cbombersj<br>cbombersp |
| `:cclimber` | cclimber | `>ccboot`<br>`>ccboot2`<br>`>ccbootmm`<br>`>ccbootmr`<br>`>cclimbera`<br>`>cclimberj`<br>`>cclimbroper`<br>`>cclimbrrod` | ccboot<br>ccboot2<br>ccbootmm<br>ccbootmr<br>cclimbera<br>cclimberj<br>cclimbroper<br>cclimbrrod |
| `:cclimbr2` | cclimbr2 | `>cclimbr2a` | cclimbr2a |
| `:chaknpop` | chaknpop |  |  |
| `:champwr` | champwr | `>champwrj`<br>`>champwru` | champwrj<br>champwru |
| `:changela` | changela |  |  |
| `:chasehq` | chasehq | `>chasehqj`<br>`>chasehqju`<br>`>chasehqu` | chasehqj<br>chasehqju<br>chasehqu |
| `:chinhero` | chinhero | `>chinhero2`<br>`>chinhero3`<br>`>chinherot` | chinhero2<br>chinhero3<br>chinherot |
| `:chinmoku` | chinmoku |  |  |
| `:choko` | choko |  |  |
| `:choplift` | choplift | `>chopliftu` | chopliftu |
| `:chopliftu` | chopliftu | `>chopliftbl` | chopliftbl |
| `:chopper` | chopper | `>choppera`<br>`>chopperb`<br>`>legofair` | choppera<br>chopperb<br>legofair |
| `:chukatai` | chukatai | `>chukataij`<br>`>chukataija`<br>`>chukataiu` | chukataij<br>chukataija<br>chukataiu |
| `:circusc` | circusc | `>circusc2`<br>`>circusc3`<br>`>circusc4`<br>`>circuscc`<br>`>circusce` | circusc2<br>circusc3<br>circusc4<br>circuscc<br>circusce |
| `:citylove` | citylove | `>mcitylov` | mcitylov |
| `:ckong` | ckong | `>bigkong`<br>`>bigkonggx`<br>`>ckongalc`<br>`>ckongcv`<br>`>ckongdks`<br>`>ckongg`<br>`>ckonggx`<br>`>ckongis`<br>`>ckongmc`<br>`>ckongmc2`<br>`>ckongo`<br>`>ckongs`<br>`>dking`<br>`>monkeyd` | bigkong<br>bigkonggx<br>ckongalc<br>ckongcv<br>ckongdks<br>ckongg<br>ckonggx<br>ckongis<br>ckongmc<br>ckongmc2<br>ckongo<br>ckongs<br>dking<br>monkeyd |
| `:ckongpt2` | ckongpt2 | `>ckongpt2b`<br>`>ckongpt2b2`<br>`>ckongpt2j`<br>`>ckongpt2ss` | ckongpt2b<br>ckongpt2b2<br>ckongpt2j<br>ckongpt2ss |
| `:ckongpt2a` | ckongpt2a | `>ckongpt2jeu` | ckongpt2jeu |
| `:cleopatr` | cleopatr | `>cleopatro` | cleopatro |
| `:cltchitr` | cltchitr | `>cltchitrj` | cltchitrj |
| `:club90s` | club90s | `>club90sa`<br>`>lovehous` | club90sa<br>lovehous |
| `:cluclu` | cluclu |  |  |
| `:cmehyou` | cmehyou |  |  |
| `:cntrygrl` | cntrygrl | `>cntrygrla`<br>`>fruitbun` | cntrygrla<br>fruitbun |
| `:colmns97` | colmns97 |  |  |
| `:colony7` | colony7 | `>colony7a` | colony7a |
| `:columns` | columns | `>columnsj`<br>`>columnsu` | columnsj<br>columnsu |
| `:columns2` | columns2 | `>column2j` | column2j |
| `:combh` | combh |  |  |
| `:commando` | commando | `>commandob`<br>`>commandob2`<br>`>commandob3`<br>`>commandoj`<br>`>commandou`<br>`>commandou2`<br>`>sinvasn` | commandob<br>commandob2<br>commandob3<br>commandoj<br>commandou<br>commandou2<br>sinvasn |
| `:commandw` | commandw |  |  |
| `:complexx` | complexx |  |  |
| `:congo` | congo | `>congoa`<br>`>tiptop` | congoa<br>tiptop |
| `:contcirc` | contcirc | `>contcircj`<br>`>contcircu`<br>`>contcircua` | contcircj<br>contcircu<br>contcircua |
| `:coolridr` | coolridr |  |  |
| `:cop01` | cop01 | `>cop01a` | cop01a |
| `:cosmccop` | cosmccop | `>gallop`<br>`>gallopm72` | gallop<br>gallopm72 |
| `:cothello` | cothello |  |  |
| `:cotton` | cotton | `>cottonj`<br>`>cottonja`<br>`>cottonu` | cottonj<br>cottonja<br>cottonu |
| `:cotton2` | cotton2 |  |  |
| `:cottonbm` | cottonbm |  |  |
| `:countryc` | countryc |  |  |
| `:crbaloon` | crbaloon | `>crbaloon2` | crbaloon2 |
| `:crimec` | crimec | `>crimecj`<br>`>crimecu` | crimecj<br>crimecu |
| `:critcrsh` | critcrsh | `>tatacot` | tatacot |
| `:crkdown` | crkdown | `>crkdownj`<br>`>crkdownu` | crkdownj<br>crkdownu |
| `:crsword` | crsword |  |  |
| `:crystal2` | crystal2 |  |  |
| `:crystalg` | crystalg |  |  |
| `:csclub` | csclub | `>csclub1`<br>`>csclub1d`<br>`>cscluba`<br>`>csclubh`<br>`>csclubj`<br>`>csclubjy` | csclub1<br>csclub1d<br>cscluba<br>csclubh<br>csclubj<br>csclubjy |
| `:cstlevna` | cstlevna |  |  |
| `:ctomaday` | ctomaday |  |  |
| `:cubybop` | cubybop |  |  |
| `:cupfinal` | cupfinal | `>hthero93`<br>`>hthero93u` | hthero93<br>hthero93u |
| `:cworld` | cworld |  |  |
| `:cworld2j` | cworld2j | `>cworld2ja`<br>`>cworld2jb` | cworld2ja<br>cworld2jb |
| `:cyberlip` | cyberlip |  |  |
| `:cybots` | cybots | `>cybotsj`<br>`>cybotsjd`<br>`>cybotsu`<br>`>cybotsud` | cybotsj<br>cybotsjd<br>cybotsu<br>cybotsud |
| `:dacholer` | dacholer |  |  |
| `:daikaiju` | daikaiju |  |  |
| `:dakkochn` | dakkochn |  |  |
| `:danchih` | danchih |  |  |
| `:danchiq` | danchiq |  |  |
| `:dangar` | dangar | `>dangara`<br>`>dangarb`<br>`>dangarbt`<br>`>dangarj` | dangara<br>dangarb<br>dangarbt<br>dangarj |
| `:dankuga` | dankuga |  |  |
| `:darius` | darius | `>dariuse`<br>`>dariusj`<br>`>dariuso`<br>`>dariusu` | dariuse<br>dariusj<br>dariuso<br>dariusu |
| `:darius2` | darius2 | `>darius2d`<br>`>darius2do`<br>`>sagaia` | darius2d<br>darius2do<br>sagaia |
| `:dariusg` | dariusg | `>dariusgj`<br>`>dariusgu` | dariusgj<br>dariusgu |
| `:dariusgx` | dariusgx |  |  |
| `:darkedge` | darkedge | `>darkedgej` | darkedgej |
| `:dayto2pe` | dayto2pe |  |  |
| `:daytona` | daytona | `>daytona93`<br>`>daytonam`<br>`>daytonas`<br>`>daytonase`<br>`>daytonat`<br>`>daytonata` | daytona93<br>daytonam<br>daytonas<br>daytonase<br>daytonat<br>daytonata |
| `:daytona2` | daytona2 |  |  |
| `:dblaxle` | dblaxle | `>dblaxleu`<br>`>dblaxleul`<br>`>pwheelsj` | dblaxleu<br>dblaxleul<br>pwheelsj |
| `:dbreed` | dbreed | `>dbreedjm72`<br>`>dbreedm72` | dbreedjm72<br>dbreedm72 |
| `:dbzvrvs` | dbzvrvs |  |  |
| `:dcclub` | dcclub | `>dcclubfd`<br>`>dcclubj` | dcclubfd<br>dcclubj |
| `:ddcrew` | ddcrew | `>ddcrew2`<br>`>ddcrewj`<br>`>ddcrewj2`<br>`>ddcrewu` | ddcrew2<br>ddcrewj<br>ddcrewj2<br>ddcrewu |
| `:dddoor` | dddoor |  |  |
| `:ddribble` | ddribble | `>ddribblep` | ddribblep |
| `:ddsom` | ddsom | `>ddsoma`<br>`>ddsomar1`<br>`>ddsomb`<br>`>ddsomh`<br>`>ddsomj`<br>`>ddsomjr1`<br>`>ddsomjr2`<br>`>ddsomr1`<br>`>ddsomr2`<br>`>ddsomr3`<br>`>ddsomu`<br>`>ddsomud`<br>`>ddsomur1` | ddsoma<br>ddsomar1<br>ddsomb<br>ddsomh<br>ddsomj<br>ddsomjr1<br>ddsomjr2<br>ddsomr1<br>ddsomr2<br>ddsomr3<br>ddsomu<br>ddsomud<br>ddsomur1 |
| `:ddtod` | ddtod | `>ddtoda`<br>`>ddtodar1`<br>`>ddtodh`<br>`>ddtodhr1`<br>`>ddtodhr2`<br>`>ddtodj`<br>`>ddtodjr1`<br>`>ddtodjr2`<br>`>ddtodr1`<br>`>ddtodu`<br>`>ddtodur1` | ddtoda<br>ddtodar1<br>ddtodh<br>ddtodhr1<br>ddtodhr2<br>ddtodj<br>ddtodjr1<br>ddtodjr2<br>ddtodr1<br>ddtodu<br>ddtodur1 |
| `:ddux` | ddux | `>ddux1`<br>`>dduxj2` | ddux1<br>dduxj2 |
| `:deadconx` | deadconx | `>deadconxj` | deadconxj |
| `:decathlt` | decathlt | `>decathlto` | decathlto |
| `:demoneye` | demoneye |  |  |
| `:depthch` | depthch | `>depthcho`<br>`>subhunt` | depthcho<br>subhunt |
| `:desert` | desert |  |  |
| `:desertbr` | desertbr | `>desertbrj` | desertbrj |
| `:dfjail` | dfjail |  |  |
| `:dicegame` | dicegame |  |  |
| `:diehard` | diehard | `>dnmtdeka` | dnmtdeka |
| `:digger` | digger |  |  |
| `:diggerma` | diggerma |  |  |
| `:dimahoo` | dimahoo | `>dimahoou`<br>`>dimahooud`<br>`>gmahou` | dimahoou<br>dimahooud<br>gmahou |
| `:dino` | dino | `>dinoa`<br>`>dinoj`<br>`>dinou` | dinoa<br>dinoj<br>dinou |
| `:dinorex` | dinorex | `>dinorexj`<br>`>dinorexu` | dinorexj<br>dinorexu |
| `:dirtdvls` | dirtdvls | `>dirtdvlsau`<br>`>dirtdvlsg`<br>`>dirtdvlsj`<br>`>dirtdvlsu` | dirtdvlsau<br>dirtdvlsg<br>dirtdvlsj<br>dirtdvlsu |
| `:dkong` | dkong | `>dkongf`<br>`>dkonghrd`<br>`>dkonghs`<br>`>dkongike`<br>`>dkongj`<br>`>dkongj1`<br>`>dkongjo`<br>`>dkongjrc`<br>`>dkongo`<br>`>dkongpe`<br>`>dkongx`<br>`>dkongx11` | dkongf<br>dkonghrd<br>dkonghs<br>dkongike<br>dkongj<br>dkongj1<br>dkongjo<br>dkongjrc<br>dkongo<br>dkongpe<br>dkongx<br>dkongx11 |
| `:dkong3` | dkong3 | `>dkong3abl`<br>`>dkong3b`<br>`>dkong3hs`<br>`>dkong3j` | dkong3abl<br>dkong3b<br>dkong3hs<br>dkong3j |
| `:dkongjr` | dkongjr | `>dkingjr`<br>`>dkingjrv`<br>`>dkongddk`<br>`>dkongjnrj`<br>`>dkongjr2`<br>`>dkongjrb`<br>`>dkongjre`<br>`>dkongjrhs`<br>`>dkongjrj`<br>`>dkongjrm`<br>`>dkongjrmc`<br>`>dkongjrpb`<br>`>jrking`<br>`>maguila` | dkingjr<br>dkingjrv<br>dkongddk<br>dkongjnrj<br>dkongjr2<br>dkongjrb<br>dkongjre<br>dkongjrhs<br>dkongjrj<br>dkongjrm<br>dkongjrmc<br>dkongjrpb<br>jrking<br>maguila |
| `:dleague` | dleague | `>dleaguej` | dleaguej |
| `:doa` | doa | `>doaa`<br>`>doaae`<br>`>doab` | doaa<br>doaae<br>doab |
| `:dockman` | dockman | `>dockmanb`<br>`>dockmanc`<br>`>porter`<br>`>portera`<br>`>portman`<br>`>portmanj`<br>`>theportr` | dockmanb<br>dockmanc<br>porter<br>portera<br>portman<br>portmanj<br>theportr |
| `:dokaben` | dokaben |  |  |
| `:dondokod` | dondokod | `>dondokodj`<br>`>dondokodu` | dondokodj<br>dondokodu |
| `:dotrikun` | dotrikun | `>dotrikun2` | dotrikun2 |
| `:doubledr` | doubledr |  |  |
| `:dragonsh` | dragonsh |  |  |
| `:driftout` | driftout | `>driftoutct`<br>`>driftoutj`<br>`>driveout` | driftoutct<br>driftoutj<br>driveout |
| `:drmario` | drmario |  |  |
| `:drtoppel` | drtoppel | `>drtoppelj`<br>`>drtoppelu` | drtoppelj<br>drtoppelu |
| `:dsoccr94` | dsoccr94 | `>dsoccr94j`<br>`>dsoccr94k` | dsoccr94j<br>dsoccr94k |
| `:dstlk` | dstlk | `>dstlka`<br>`>dstlkh`<br>`>dstlku`<br>`>dstlku1d`<br>`>dstlkur1`<br>`>vampj`<br>`>vampja`<br>`>vampjr1` | dstlka<br>dstlkh<br>dstlku<br>dstlku1d<br>dstlkur1<br>vampj<br>vampja<br>vampjr1 |
| `:duckhunt` | duckhunt |  |  |
| `:dunkshot` | dunkshot | `>dunkshota`<br>`>dunkshoto` | dunkshota<br>dunkshoto |
| `:dynabb` | dynabb |  |  |
| `:dynabb97` | dynabb97 |  |  |
| `:dynablst` | dynablst | `>atompunk`<br>`>bombrman` | atompunk<br>bombrman |
| `:dynamcop` | dynamcop | `>dynamcopb`<br>`>dynamcopc`<br>`>dyndeka2`<br>`>dyndeka2b` | dynamcopb<br>dynamcopc<br>dyndeka2<br>dyndeka2b |
| `:dynamski` | dynamski |  |  |
| `:dynwar` | dynwar | `>dynwara`<br>`>dynwarj`<br>`>dynwarjr` | dynwara<br>dynwarj<br>dynwarjr |
| `:earthjkr` | earthjkr | `>earthjkra`<br>`>earthjkrb`<br>`>earthjkrp` | earthjkra<br>earthjkrb<br>earthjkrp |
| `:eca` | eca | `>ecaj`<br>`>ecap`<br>`>ecau` | ecaj<br>ecap<br>ecau |
| `:ecofghtr` | ecofghtr | `>ecofghtra`<br>`>ecofghtrd`<br>`>ecofghtrh`<br>`>ecofghtru`<br>`>ecofghtru1`<br>`>uecology` | ecofghtra<br>ecofghtrd<br>ecofghtrh<br>ecofghtru<br>ecofghtru1<br>uecology |
| `:eightman` | eightman |  |  |
| `:ejihon` | ejihon |  |  |
| `:elandore` | elandore |  |  |
| `:elecyoyo` | elecyoyo | `>elecyoyoa` | elecyoyoa |
| `:elevator` | elevator | `>elevatora`<br>`>elevatorb` | elevatora<br>elevatorb |
| `:elvactr` | elvactr | `>elvactrj`<br>`>elvactru` | elvactrj<br>elvactru |
| `:enduror` | enduror | `>enduror1`<br>`>endurora`<br>`>endurorb` | enduror1<br>endurora<br>endurorb |
| `:enforce` | enforce | `>enforcej`<br>`>enforceja` | enforcej<br>enforceja |
| `:eswat` | eswat | `>eswatj`<br>`>eswatj1`<br>`>eswatu` | eswatj<br>eswatj1<br>eswatu |
| `:eto` | eto | `>etoa` | etoa |
| `:euroch92` | euroch92 | `>euroch92j` | euroch92j |
| `:excitebk` | excitebk | `>excitebkj`<br>`>excitebko` | excitebkj<br>excitebko |
| `:exctleag` | exctleag |  |  |
| `:exedexes` | exedexes | `>savgbees` | savgbees |
| `:extrmatn` | extrmatn | `>extrmatnj`<br>`>extrmatnu`<br>`>extrmatnur` | extrmatnj<br>extrmatnu<br>extrmatnur |
| `:exzisus` | exzisus | `>exzisusa`<br>`>exzisust` | exzisusa<br>exzisust |
| `:f1dream` | f1dream |  |  |
| `:f1en` | f1en | `>f1enj`<br>`>f1enu` | f1enj<br>f1enu |
| `:f1lap` | f1lap | `>f1lapj`<br>`>f1lapt` | f1lapj<br>f1lapt |
| `:fantasyu` | fantasyu | `>fantasyg`<br>`>fantasyg2`<br>`>fantasyj` | fantasyg<br>fantasyg2<br>fantasyj |
| `:fantzn2` | fantzn2 |  |  |
| `:fantzn2x` | fantzn2x | `>fantzn2xp` | fantzn2xp |
| `:fantzone` | fantzone | `>fantzone1`<br>`>fantzonee`<br>`>fantzonep`<br>`>fantzonepr` | fantzone1<br>fantzonee<br>fantzonep<br>fantzonepr |
| `:fanzonem` | fanzonem |  |  |
| `:fatfursp` | fatfursp | `>fatfurspa` | fatfurspa |
| `:fatfury1` | fatfury1 |  |  |
| `:fatfury2` | fatfury2 |  |  |
| `:fatfury3` | fatfury3 |  |  |
| `:fbfrenzy` | fbfrenzy |  |  |
| `:ffight` | ffight | `>ffighta`<br>`>ffightae`<br>`>ffightj`<br>`>ffightj1`<br>`>ffightj2`<br>`>ffightj3`<br>`>ffightj4`<br>`>ffightu`<br>`>ffightu1`<br>`>ffightua`<br>`>ffightub`<br>`>ffightuc` | ffighta<br>ffightae<br>ffightj<br>ffightj1<br>ffightj2<br>ffightj3<br>ffightj4<br>ffightu<br>ffightu1<br>ffightua<br>ffightub<br>ffightuc |
| `:ffreveng` | ffreveng | `>ffrevng10` | ffrevng10 |
| `:fgoal` | fgoal | `>fgoala` | fgoala |
| `:fhawk` | fhawk | `>fhawkj` | fhawkj |
| `:fhboxers` | fhboxers |  |  |
| `:fieldday` | fieldday | `>undoukai` | undoukai |
| `:fightfev` | fightfev | `>fightfeva` | fightfeva |
| `:finalb` | finalb | `>finalbj`<br>`>finalbu` | finalbj<br>finalbu |
| `:finalizr` | finalizr | `>finalizra`<br>`>finalizrb` | finalizra<br>finalizrb |
| `:findlove` | findlove |  |  |
| `:firebatl` | firebatl |  |  |
| `:fitegolf` | fitegolf | `>fitegolfu`<br>`>fitegolfua` | fitegolfu<br>fitegolfua |
| `:flicky` | flicky |  |  |
| `:flipshot` | flipshot |  |  |
| `:flstory` | flstory | `>flstoryo` | flstoryo |
| `:footchmp` | footchmp | `>footchmpbl`<br>`>hthero` | footchmpbl<br>hthero |
| `:forgottn` | forgottn | `>forgottna`<br>`>forgottnj`<br>`>forgottnu`<br>`>forgottnua`<br>`>forgottnuaa`<br>`>forgottnuc`<br>`>forgottnue`<br>`>lostwrld`<br>`>lostwrldo` | forgottna<br>forgottnj<br>forgottnu<br>forgottnua<br>forgottnuaa<br>forgottnuc<br>forgottnue<br>lostwrld<br>lostwrldo |
| `:fpoint` | fpoint | `>fpoint1` | fpoint1 |
| `:friskyt` | friskyt | `>friskyta`<br>`>friskytb` | friskyta<br>friskytb |
| `:frogger` | frogger | `>frogf`<br>`>frogg`<br>`>froggeg`<br>`>froggeram`<br>`>froggereb`<br>`>froggermc`<br>`>froggers`<br>`>froggers1`<br>`>froggers2`<br>`>froggers3`<br>`>froggert`<br>`>froggerv`<br>`>froggervd` | frogf<br>frogg<br>froggeg<br>froggeram<br>froggereb<br>froggermc<br>froggers<br>froggers1<br>froggers2<br>froggers3<br>froggert<br>froggerv<br>froggervd |
| `:frogs` | frogs |  |  |
| `:froman2b` | froman2b |  |  |
| `:fsoccer` | fsoccer | `>fsoccerb`<br>`>fsoccerba`<br>`>fsoccerj` | fsoccerb<br>fsoccerba<br>fsoccerj |
| `:futspy` | futspy |  |  |
| `:fvipers` | fvipers | `>fvipersb` | fvipersb |
| `:fvipers2` | fvipers2 | `>fvipers2o` | fvipers2o |
| `:ga2` | ga2 | `>ga2j`<br>`>ga2u` | ga2j<br>ga2u |
| `:gal10ren` | gal10ren |  |  |
| `:galastrm` | galastrm |  |  |
| `:galaxyfg` | galaxyfg |  |  |
| `:galivan` | galivan | `>galivan2`<br>`>galivan3` | galivan2<br>galivan3 |
| `:galkaika` | galkaika |  |  |
| `:galkoku` | galkoku | `>galkokua`<br>`>hyouban` | galkokua<br>hyouban |
| `:galmedes` | galmedes |  |  |
| `:ganbare` | ganbare |  |  |
| `:gangwars` | gangwars | `>gangwarsb`<br>`>gangwarsj`<br>`>gangwarsu` | gangwarsb<br>gangwarsj<br>gangwarsu |
| `:ganryu` | ganryu |  |  |
| `:gardia` | gardia | `>gardiaj` | gardiaj |
| `:garou` | garou | `>garoubl`<br>`>garoup` | garoubl<br>garoup |
| `:gaxeduel` | gaxeduel |  |  |
| `:gberet` | gberet | `>gberetb`<br>`>rushatck` | gberetb<br>rushatck |
| `:gekiridn` | gekiridn | `>gekiridnj` | gekiridnj |
| `:gforce2` | gforce2 | `>gforce2j`<br>`>gforce2ja`<br>`>gforce2sd` | gforce2j<br>gforce2ja<br>gforce2sd |
| `:gground` | gground | `>ggroundj` | ggroundj |
| `:ghostlop` | ghostlop |  |  |
| `:ghouls` | ghouls | `>daimakai`<br>`>daimakair`<br>`>ghoulsu` | daimakai<br>daimakair<br>ghoulsu |
| `:gigandes` | gigandes | `>gigandesa`<br>`>gigandesj` | gigandesa<br>gigandesj |
| `:gigawing` | gigawing | `>gigawinga`<br>`>gigawingb`<br>`>gigawingd`<br>`>gigawingh`<br>`>gigawingj`<br>`>gigawingjd` | gigawinga<br>gigawingb<br>gigawingd<br>gigawingh<br>gigawingj<br>gigawingjd |
| `:gionbana` | gionbana |  |  |
| `:gloc` | gloc | `>glocr360`<br>`>glocr360j`<br>`>glocu` | glocr360<br>glocr360j<br>glocu |
| `:gng` | gng | `>gnga`<br>`>gngbl`<br>`>gngblita`<br>`>gngc`<br>`>gngprot`<br>`>gngt`<br>`>makaimur`<br>`>makaimurc`<br>`>makaimurg` | gnga<br>gngbl<br>gngblita<br>gngc<br>gngprot<br>gngt<br>makaimur<br>makaimurc<br>makaimurg |
| `:goalx3` | goalx3 |  |  |
| `:goldmedl` | goldmedl |  |  |
| `:goldnaxe` | goldnaxe | `>goldnaxe1`<br>`>goldnaxe2`<br>`>goldnaxe3`<br>`>goldnaxej`<br>`>goldnaxeu` | goldnaxe1<br>goldnaxe2<br>goldnaxe3<br>goldnaxej<br>goldnaxeu |
| `:goonies` | goonies |  |  |
| `:gowcaizr` | gowcaizr |  |  |
| `:gpilots` | gpilots | `>gpilotsp` | gpilotsp |
| `:gprider` | gprider | `>gpriderj`<br>`>gpriderjs`<br>`>gpriders`<br>`>gprideru`<br>`>gpriderus` | gpriderj<br>gpriderjs<br>gpriders<br>gprideru<br>gpriderus |
| `:grchamp` | grchamp | `>grchampa`<br>`>grchampb` | grchampa<br>grchampb |
| `:grdforce` | grdforce |  |  |
| `:greenber` | greenber |  |  |
| `:groovef` | groovef |  |  |
| `:groundfx` | groundfx |  |  |
| `:growl` | growl | `>growla`<br>`>growlp`<br>`>growlu`<br>`>runark` | growla<br>growlp<br>growlu<br>runark |
| `:gseeker` | gseeker | `>gseekerj`<br>`>gseekeru` | gseekerj<br>gseekeru |
| `:gsword` | gsword | `>gsword2` | gsword2 |
| `:gulunpa` | gulunpa |  |  |
| `:gunblade` | gunblade |  |  |
| `:gunbustr` | gunbustr | `>gunbustrj`<br>`>gunbustru` | gunbustrj<br>gunbustru |
| `:gunforc2` | gunforc2 | `>geostorm`<br>`>geostorma` | geostorm<br>geostorma |
| `:gunforce` | gunforce | `>gunforcej`<br>`>gunforceu` | gunforcej<br>gunforceu |
| `:gunfront` | gunfront | `>gunfrontj` | gunfrontj |
| `:gunlock` | gunlock | `>gunlocko`<br>`>rayforce`<br>`>rayforcej` | gunlocko<br>rayforce<br>rayforcej |
| `:gunsmoke` | gunsmoke | `>gunsmokeb`<br>`>gunsmokeg`<br>`>gunsmokej`<br>`>gunsmokeu`<br>`>gunsmokeua`<br>`>gunsmokeub` | gunsmokeb<br>gunsmokeg<br>gunsmokej<br>gunsmokeu<br>gunsmokeua<br>gunsmokeub |
| `:gururin` | gururin |  |  |
| `:gwar` | gwar | `>gwara`<br>`>gwarab`<br>`>gwarb`<br>`>gwarj` | gwara<br>gwarab<br>gwarb<br>gwarj |
| `:gwarrior` | gwarrior |  |  |
| `:gyruss` | gyruss | `>gyrussb`<br>`>gyrussce`<br>`>venus` | gyrussb<br>gyrussce<br>venus |
| `:hal21` | hal21 | `>hal21j` | hal21j |
| `:halleysc` | halleysc | `>halleysc87`<br>`>halleyscj`<br>`>halleyscja`<br>`>halleyscjp` | halleysc87<br>halleyscj<br>halleyscja<br>halleyscjp |
| `:hamaway` | hamaway |  |  |
| `:hanagumi` | hanagumi |  |  |
| `:hanamomo` | hanamomo | `>hanamomb` | hanamomb |
| `:hanaoji` | hanaoji | `>hanaojia` | hanaojia |
| `:hangon` | hangon | `>hangon1`<br>`>hangon2` | hangon1<br>hangon2 |
| `:hangonjr` | hangonjr |  |  |
| `:harddunk` | harddunk | `>harddunkj` | harddunkj |
| `:harley` | harley | `>harleya` | harleya |
| `:hasamu` | hasamu |  |  |
| `:headon` | headon | `>bumba`<br>`>colision`<br>`>headon1`<br>`>headonmz`<br>`>headonn`<br>`>headons`<br>`>headonsa`<br>`>hocrash`<br>`>supcrash` | bumba<br>colision<br>headon1<br>headonmz<br>headonn<br>headons<br>headonsa<br>hocrash<br>supcrash |
| `:headon2` | headon2 | `>car2`<br>`>headon2s`<br>`>headon2sl` | car2<br>headon2s<br>headon2sl |
| `:headoni` | headoni |  |  |
| `:heiankyo` | heiankyo |  |  |
| `:helifire` | helifire | `>helifirea` | helifirea |
| `:hharry` | hharry | `>dkgensan`<br>`>dkgensanm72`<br>`>dkgensanm82`<br>`>hharryu` | dkgensan<br>dkgensanm72<br>dkgensanm82<br>hharryu |
| `:higemaru` | higemaru |  |  |
| `:highsplt` | highsplt | `>highsplta`<br>`>highspltb` | highsplta<br>highspltb |
| `:hitice` | hitice | `>hiticej`<br>`>hiticerb` | hiticej<br>hiticerb |
| `:hnageman` | hnageman |  |  |
| `:hnxmasev` | hnxmasev |  |  |
| `:hogalley` | hogalley |  |  |
| `:holo` | holo |  |  |
| `:hook` | hook | `>hookj`<br>`>hooku` | hookj<br>hooku |
| `:horekid` | horekid | `>boobhack`<br>`>horekidb`<br>`>horekidb2` | boobhack<br>horekidb<br>horekidb2 |
| `:horizon` | horizon |  |  |
| `:horshoes` | horshoes |  |  |
| `:hotd` | hotd | `>hotdo`<br>`>hotdp` | hotdo<br>hotdp |
| `:hotrod` | hotrod | `>hotroda`<br>`>hotrodj`<br>`>hotrodja` | hotroda<br>hotrodj<br>hotrodja |
| `:housemn2` | housemn2 |  |  |
| `:housemnq` | housemnq |  |  |
| `:hpyagu98` | hpyagu98 |  |  |
| `:hsf2` | hsf2 | `>hsf2a`<br>`>hsf2d`<br>`>hsf2j`<br>`>hsf2j1` | hsf2a<br>hsf2d<br>hsf2j<br>hsf2j1 |
| `:hustler` | hustler | `>billiard`<br>`>hustlerb`<br>`>hustlerb2`<br>`>hustlerb4`<br>`>hustlerb5`<br>`>hustlerb6`<br>`>hustlerb7`<br>`>hustlerd`<br>`>vpool` | billiard<br>hustlerb<br>hustlerb2<br>hustlerb4<br>hustlerb5<br>hustlerb6<br>hustlerb7<br>hustlerd<br>vpool |
| `:hvymetal` | hvymetal |  |  |
| `:hwchamp` | hwchamp | `>hwchampa`<br>`>hwchampj` | hwchampa<br>hwchampj |
| `:hwrace` | hwrace |  |  |
| `:hyhoo` | hyhoo |  |  |
| `:hyhoo2` | hyhoo2 |  |  |
| `:hyperspt` | hyperspt | `>hpolym84`<br>`>hypersptb` | hpolym84<br>hypersptb |
| `:iceclimb` | iceclimb | `>iceclimba` | iceclimba |
| `:ichir` | ichir | `>ichirj`<br>`>ichirk` | ichirj<br>ichirk |
| `:idhimitu` | idhimitu |  |  |
| `:iemoto` | iemoto | `>iemotom`<br>`>ryuuha` | iemotom<br>ryuuha |
| `:ikari` | ikari | `>ikaria`<br>`>ikaria2`<br>`>ikarijp`<br>`>ikarijpb`<br>`>ikarinc` | ikaria<br>ikaria2<br>ikarijp<br>ikarijpb<br>ikarinc |
| `:ikari3` | ikari3 | `>ikari3j`<br>`>ikari3k`<br>`>ikari3u`<br>`>ikari3w` | ikari3j<br>ikari3k<br>ikari3u<br>ikari3w |
| `:imekura` | imekura |  |  |
| `:imgfight` | imgfight | `>imgfightj` | imgfightj |
| `:imsorry` | imsorry | `>kimsorryj` | kimsorryj |
| `:indy500` | indy500 | `>indy500d`<br>`>indy500to` | indy500d<br>indy500to |
| `:insectx` | insectx | `>insectxbl`<br>`>insectxj` | insectxbl<br>insectxj |
| `:intcup94` | intcup94 | `>intcup94a` | intcup94a |
| `:inthunt` | inthunt | `>inthuntu`<br>`>kaiteids` | inthuntu<br>kaiteids |
| `:introdon` | introdon |  |  |
| `:invaders` | invaders | `>alieninv`<br>`>alieninvp2`<br>`>cosmicin`<br>`>cosmicm2`<br>`>cosmicmo`<br>`>darthvdr`<br>`>galmonst`<br>`>invader4`<br>`>invaderl`<br>`>invadernc`<br>`>invadersem`<br>`>invadrmr`<br>`>invasion`<br>`>invasiona`<br>`>invasiona2`<br>`>invasionb`<br>`>invasionrz`<br>`>invasionrza`<br>`>jspecter`<br>`>jspecter2`<br>`>searthie`<br>`>searthin`<br>`>searthina`<br>`>sicv`<br>`>sicv1`<br>`>sinvemag`<br>`>sinvemag2`<br>`>sinvzen`<br>`>sisv1`<br>`>sisv2`<br>`>sisv3`<br>`>sisv4`<br>`>sitv`<br>`>sitv1`<br>`>spaceat2`<br>`>spaceatt`<br>`>spaceatt2k`<br>`>spaceattbp`<br>`>spacecom`<br>`>spacerng`<br>`>spacewr3`<br>`>spcebttl`<br>`>spceking`<br>`>spcewarla`<br>`>spcewars`<br>`>superinv`<br>`>supinvsion`<br>`>swipeout`<br>`>tst_invd`<br>`>ultrainv` | alieninv<br>alieninvp2<br>cosmicin<br>cosmicm2<br>cosmicmo<br>darthvdr<br>galmonst<br>invader4<br>invaderl<br>invadernc<br>invadersem<br>invadrmr<br>invasion<br>invasiona<br>invasiona2<br>invasionb<br>invasionrz<br>invasionrza<br>jspecter<br>jspecter2<br>searthie<br>searthin<br>searthina<br>sicv<br>sicv1<br>sinvemag<br>sinvemag2<br>sinvzen<br>sisv1<br>sisv2<br>sisv3<br>sisv4<br>sitv<br>sitv1<br>spaceat2<br>spaceatt<br>spaceatt2k<br>spaceattbp<br>spacecom<br>spacerng<br>spacewr3<br>spcebttl<br>spceking<br>spcewarla<br>spcewars<br>superinv<br>supinvsion<br>swipeout<br>tst_invd<br>ultrainv |
| `:invadpt2` | invadpt2 | `>invaddlx`<br>`>invadpt2a`<br>`>invadpt2br`<br>`>moonbase`<br>`>moonbasea` | invaddlx<br>invadpt2a<br>invadpt2br<br>moonbase<br>moonbasea |
| `:invcarht` | invcarht |  |  |
| `:invds` | invds |  |  |
| `:invho2` | invho2 | `>invho2a` | invho2a |
| `:invinco` | invinco |  |  |
| `:invqix` | invqix |  |  |
| `:ipminvad` | ipminvad | `>ipminvad1` | ipminvad1 |
| `:ironclad` | ironclad | `>ironclado` | ironclado |
| `:ironhors` | ironhors | `>dairesya`<br>`>farwest`<br>`>ironhorsh` | dairesya<br>farwest<br>ironhorsh |
| `:irrmaze` | irrmaze |  |  |
| `:itaten` | itaten |  |  |
| `:ixion` | ixion |  |  |
| `:jackal` | jackal | `>jackalbl`<br>`>jackalj`<br>`>topgunbl`<br>`>topgunr` | jackalbl<br>jackalj<br>topgunbl<br>topgunr |
| `:jailbrek` | jailbrek | `>jailbrekb`<br>`>manhatan` | jailbrekb<br>manhatan |
| `:jajamaru` | jajamaru |  |  |
| `:janbari` | janbari | `>mjanbari` | mjanbari |
| `:jangou` | jangou |  |  |
| `:janshin` | janshin |  |  |
| `:jcross` | jcross | `>jcrossa` | jcrossa |
| `:jituroku` | jituroku |  |  |
| `:jngolady` | jngolady |  |  |
| `:jockeygp` | jockeygp | `>jockeygpa` | jockeygpa |
| `:jojo` | jojo | `>jojoa`<br>`>jojoar1`<br>`>jojoar2`<br>`>jojoj`<br>`>jojojr1`<br>`>jojojr2`<br>`>jojon`<br>`>jojonr1`<br>`>jojonr2`<br>`>jojor1`<br>`>jojor2`<br>`>jojou`<br>`>jojour1`<br>`>jojour2` | jojoa<br>jojoar1<br>jojoar2<br>jojoj<br>jojojr1<br>jojojr2<br>jojon<br>jojonr1<br>jojonr2<br>jojor1<br>jojor2<br>jojou<br>jojour1<br>jojour2 |
| `:jojoba` | jojoba | `>jojobaj`<br>`>jojobajr1`<br>`>jojoban`<br>`>jojobane`<br>`>jojobaner1`<br>`>jojobanr1`<br>`>jojobar1` | jojobaj<br>jojobajr1<br>jojoban<br>jojobane<br>jojobaner1<br>jojobanr1<br>jojobar1 |
| `:jongbou` | jongbou |  |  |
| `:josvolly` | josvolly |  |  |
| `:joyfulr` | joyfulr | `>mnchmobl` | mnchmobl |
| `:joyjoy` | joyjoy |  |  |
| `:jpark` | jpark | `>jparkj`<br>`>jparkja`<br>`>jparkjc` | jparkj<br>jparkja<br>jparkjc |
| `:junglek` | junglek | `>jungleby`<br>`>jungleh`<br>`>junglehbr`<br>`>junglekas`<br>`>junglekj2`<br>`>junglekj2a`<br>`>piratpet` | jungleby<br>jungleh<br>junglehbr<br>junglekas<br>junglekj2<br>junglekj2a<br>piratpet |
| `:jungler` | jungler | `>junglero`<br>`>junglers`<br>`>savanna` | junglero<br>junglers<br>savanna |
| `:junofrst` | junofrst | `>junofrstg` | junofrstg |
| `:jyangoku` | jyangoku |  |  |
| `:kabukikl` | kabukikl |  |  |
| `:kabukiz` | kabukiz | `>kabukizj` | kabukizj |
| `:kageki` | kageki | `>kagekih`<br>`>kagekij`<br>`>kagekiu` | kagekih<br>kagekij<br>kagekiu |
| `:kaguya` | kaguya | `>kaguyaa` | kaguyaa |
| `:kaguya2` | kaguya2 | `>kaguya2f` | kaguya2f |
| `:kaiserkn` | kaiserkn | `>gblchmp`<br>`>kaiserknj` | gblchmp<br>kaiserknj |
| `:kamikaze` | kamikaze | `>astinvad`<br>`>astinvadb`<br>`>betafrce`<br>`>kosmokil` | astinvad<br>astinvadb<br>betafrce<br>kosmokil |
| `:kanatuen` | kanatuen | `>kyuhito` | kyuhito |
| `:karnovr` | karnovr |  |  |
| `:kenseim` | kenseim |  |  |
| `:kickboy` | kickboy |  |  |
| `:kicker` | kicker | `>shaolinb`<br>`>shaolins` | shaolinb<br>shaolins |
| `:kicknrun` | kicknrun | `>kicknrunu`<br>`>mexico86`<br>`>mexico86a` | kicknrunu<br>mexico86<br>mexico86a |
| `:kidniki` | kidniki | `>kidnikiu`<br>`>lithero`<br>`>yanchamr` | kidnikiu<br>lithero<br>yanchamr |
| `:kikcubic` | kikcubic | `>kikcubicb` | kikcubicb |
| `:kikikai` | kikikai | `>knightb`<br>`>knightba` | knightb<br>knightba |
| `:kirameki` | kirameki |  |  |
| `:kiwames` | kiwames |  |  |
| `:kizuna` | kizuna |  |  |
| `:kizuna4p` | kizuna4p |  |  |
| `:knights` | knights | `>knightsja`<br>`>knightsjb`<br>`>knightsu` | knightsja<br>knightsjb<br>knightsu |
| `:kod` | kod | `>kodj`<br>`>kodja`<br>`>kodr1`<br>`>kodr2`<br>`>kodu` | kodj<br>kodja<br>kodr1<br>kodr2<br>kodu |
| `:kof2000` | kof2000 | `>kof2000n` | kof2000n |
| `:kof2001` | kof2001 | `>ct2k3sa`<br>`>ct2k3sp`<br>`>cthd2003` | ct2k3sa<br>ct2k3sp<br>cthd2003 |
| `:kof2002` | kof2002 | `>kf10thep`<br>`>kf2k2mp`<br>`>kf2k2mp2`<br>`>kf2k2pla`<br>`>kf2k2pls`<br>`>kf2k5uni`<br>`>kof10th`<br>`>kof2002b`<br>`>kof2k4se` | kf10thep<br>kf2k2mp<br>kf2k2mp2<br>kf2k2pla<br>kf2k2pls<br>kf2k5uni<br>kof10th<br>kof2002b<br>kof2k4se |
| `:kof2003` | kof2003 | `>kf2k3bl`<br>`>kf2k3bla`<br>`>kf2k3pl`<br>`>kf2k3upl` | kf2k3bl<br>kf2k3bla<br>kf2k3pl<br>kf2k3upl |
| `:kof94` | kof94 |  |  |
| `:kof95` | kof95 | `>kof95a` | kof95a |
| `:kof96` | kof96 |  |  |
| `:kof97` | kof97 | `>kof97k`<br>`>kof97oro`<br>`>kof97pls`<br>`>kog` | kof97k<br>kof97oro<br>kof97pls<br>kog |
| `:kof98` | kof98 | `>kof98a`<br>`>kof98k`<br>`>kof98ka` | kof98a<br>kof98k<br>kof98ka |
| `:kof99` | kof99 | `>kof99e`<br>`>kof99k`<br>`>kof99ka`<br>`>kof99p` | kof99e<br>kof99k<br>kof99ka<br>kof99p |
| `:koinomp` | koinomp |  |  |
| `:kokoroj` | kokoroj | `>kokoroja` | kokoroja |
| `:kokoroj2` | kokoroj2 |  |  |
| `:konamigt` | konamigt | `>rf2` | rf2 |
| `:korinai` | korinai | `>korinaim` | korinaim |
| `:koshien` | koshien |  |  |
| `:kotm` | kotm |  |  |
| `:kotm2` | kotm2 | `>kotm2a`<br>`>kotm2p` | kotm2a<br>kotm2p |
| `:kozure` | kozure |  |  |
| `:kram` | kram | `>kram2`<br>`>kram3` | kram2<br>kram3 |
| `:ksayakyu` | ksayakyu |  |  |
| `:kungfum` | kungfum | `>spartanx` | spartanx |
| `:kurikint` | kurikint | `>kurikinta`<br>`>kurikintj`<br>`>kurikintu`<br>`>kurikintw` | kurikinta<br>kurikintj<br>kurikintu<br>kurikintw |
| `:lamachin` | lamachin |  |  |
| `:landmakr` | landmakr | `>landmakrj`<br>`>landmakrp` | landmakrj<br>landmakrp |
| `:lasso` | lasso |  |  |
| `:lastblad` | lastblad | `>lastsold` | lastsold |
| `:lastbld2` | lastbld2 |  |  |
| `:lastbrnx` | lastbrnx | `>lastbrnxj`<br>`>lastbrnxu` | lastbrnxj<br>lastbrnxu |
| `:lasthope` | lasthope |  |  |
| `:lastsurv` | lastsurv |  |  |
| `:lbowling` | lbowling |  |  |
| `:ldmj1mbh` | ldmj1mbh |  |  |
| `:ldquiz4` | ldquiz4 |  |  |
| `:ldrun` | ldrun | `>ldruna` | ldruna |
| `:ldrun2` | ldrun2 |  |  |
| `:ldrun3` | ldrun3 | `>ldrun3j` | ldrun3j |
| `:ldrun4` | ldrun4 |  |  |
| `:legendos` | legendos |  |  |
| `:legion` | legion | `>legionj`<br>`>legionj2`<br>`>legionjb`<br>`>legionjb2` | legionj<br>legionj2<br>legionjb<br>legionjb2 |
| `:lemans24` | lemans24 |  |  |
| `:lethalth` | lethalth | `>thndblst` | thndblst |
| `:lghost` | lghost | `>lghostd`<br>`>lghostud` | lghostd<br>lghostud |
| `:lghostj` | lghostj |  |  |
| `:lghostu` | lghostu |  |  |
| `:lgp` | lgp | `>lgpalt` | lgpalt |
| `:lightbr` | lightbr | `>dungeonmo`<br>`>dungeonmu`<br>`>lightbrj` | dungeonmo<br>dungeonmu<br>lightbrj |
| `:liquidk` | liquidk | `>liquidku`<br>`>mizubaku` | liquidku<br>mizubaku |
| `:livegal` | livegal |  |  |
| `:lkage` | lkage | `>lkageb`<br>`>lkagebl1`<br>`>lkagebl2`<br>`>lkagebl3`<br>`>lkagebl4` | lkageb<br>lkagebl1<br>lkagebl2<br>lkagebl3<br>lkagebl4 |
| `:lockonph` | lockonph |  |  |
| `:locomotn` | locomotn | `>cottong`<br>`>gutangtn`<br>`>gutangtns`<br>`>guttangt`<br>`>guttangts3`<br>`>locoboot` | cottong<br>gutangtn<br>gutangtns<br>guttangt<br>guttangts3<br>locoboot |
| `:loffire` | loffire | `>loffirej`<br>`>loffireu` | loffirej<br>loffireu |
| `:loht` | loht | `>lohtj` | lohtj |
| `:lostwsga` | lostwsga | `>lostwsgp` | lostwsgp |
| `:lotlot` | lotlot |  |  |
| `:lrescue` | lrescue | `>desterth`<br>`>escmars`<br>`>grescue`<br>`>lrescueabl`<br>`>lrescuem`<br>`>lrescuem2`<br>`>mlander`<br>`>resclunar` | desterth<br>escmars<br>grescue<br>lrescueabl<br>lrescuem<br>lrescuem2<br>mlander<br>resclunar |
| `:lresort` | lresort | `>lresortp` | lresortp |
| `:lsasquad` | lsasquad | `>storming`<br>`>storminga` | storming<br>storminga |
| `:ltswords` | ltswords | `>kengo`<br>`>kengoj` | kengo<br>kengoj |
| `:luckygrl` | luckygrl |  |  |
| `:lupin3` | lupin3 | `>lupin3a` | lupin3a |
| `:lwings` | lwings | `>lwings2`<br>`>lwingsb`<br>`>lwingsj`<br>`>lwingsja` | lwings2<br>lwingsb<br>lwingsj<br>lwingsja |
| `:macha` | macha |  |  |
| `:madcrash` | madcrash | `>madcrush` | madcrush |
| `:magdrop2` | magdrop2 |  |  |
| `:magdrop3` | magdrop3 |  |  |
| `:maglord` | maglord |  |  |
| `:magmax` | magmax | `>magmaxa` | magmaxa |
| `:magtruck` | magtruck |  |  |
| `:magzun` | magzun |  |  |
| `:mahmajn` | mahmajn |  |  |
| `:mahmajn2` | mahmajn2 |  |  |
| `:mahretsu` | mahretsu |  |  |
| `:maiko` | maiko |  |  |
| `:mainsnk` | mainsnk |  |  |
| `:majtitl2` | majtitl2 | `>majtitl2a`<br>`>majtitl2b`<br>`>majtitl2j`<br>`>skingame`<br>`>skingame2` | majtitl2a<br>majtitl2b<br>majtitl2j<br>skingame<br>skingame2 |
| `:majtitle` | majtitle | `>majtitlej` | majtitlej |
| `:manxtt` | manxtt | `>manxttc`<br>`>manxttdx` | manxttc<br>manxttdx |
| `:marinedt` | marinedt |  |  |
| `:mariner` | mariner | `>800fath`<br>`>800fatha` | 800fath<br>800fatha |
| `:mario` | mario | `>mariobl`<br>`>mariobla`<br>`>mariof`<br>`>marioj`<br>`>pestplce` | mariobl<br>mariobla<br>mariof<br>marioj<br>pestplce |
| `:maruchan` | maruchan |  |  |
| `:marukodq` | marukodq |  |  |
| `:marvins` | marvins |  |  |
| `:masterw` | masterw | `>masterwj`<br>`>masterwu`<br>`>yukiwo` | masterwj<br>masterwu<br>yukiwo |
| `:matchit` | matchit | `>shisen`<br>`>sichuan2`<br>`>sichuan2a` | shisen<br>sichuan2<br>sichuan2a |
| `:matchit2` | matchit2 | `>shisen2` | shisen2 |
| `:matrim` | matrim | `>matrimbl` | matrimbl |
| `:mausuke` | mausuke |  |  |
| `:mbombrd` | mbombrd | `>mbombrdj` | mbombrdj |
| `:mcontest` | mcontest |  |  |
| `:mechatt` | mechatt | `>mechattj`<br>`>mechattu`<br>`>mechattu1` | mechattj<br>mechattu<br>mechattu1 |
| `:megablst` | megablst | `>megablstj`<br>`>megablstu` | megablstj<br>megablstu |
| `:megaman` | megaman | `>megamana`<br>`>rmancp2j`<br>`>rmancp2u`<br>`>rmancp2ur1`<br>`>rmancp2ur2`<br>`>rockmanj` | megamana<br>rmancp2j<br>rmancp2u<br>rmancp2ur1<br>rmancp2ur2<br>rockmanj |
| `:megaman2` | megaman2 | `>megaman2a`<br>`>megaman2d`<br>`>megaman2h`<br>`>rockman2j` | megaman2a<br>megaman2d<br>megaman2h<br>rockman2j |
| `:megazone` | megazone | `>megazonea`<br>`>megazoneb`<br>`>megazoneh`<br>`>megazonei`<br>`>megazonej` | megazonea<br>megazoneb<br>megazoneh<br>megazonei<br>megazonej |
| `:megrescu` | megrescu |  |  |
| `:meijinsn` | meijinsn | `>meijinsna` | meijinsna |
| `:mercs` | mercs | `>mercsj`<br>`>mercsu`<br>`>mercsur1` | mercsj<br>mercsu<br>mercsur1 |
| `:metalb` | metalb | `>metalbj` | metalbj |
| `:mgion` | mgion |  |  |
| `:mgmen89` | mgmen89 |  |  |
| `:miexchng` | miexchng |  |  |
| `:mightguy` | mightguy |  |  |
| `:mikie` | mikie | `>mikiehs`<br>`>mikiej`<br>`>mikiek` | mikiehs<br>mikiej<br>mikiek |
| `:minasan` | minasan |  |  |
| `:minivadr` | minivadr |  |  |
| `:missilex` | missilex |  |  |
| `:mjcamera` | mjcamera | `>mjcameram`<br>`>mjcamerao` | mjcameram<br>mjcamerao |
| `:mjegolf` | mjegolf |  |  |
| `:mjfocus` | mjfocus | `>mjfocusm`<br>`>peepshow` | mjfocusm<br>peepshow |
| `:mjgaiden` | mjgaiden |  |  |
| `:mjgottsu` | mjgottsu | `>bakuhatu` | bakuhatu |
| `:mjgottub` | mjgottub |  |  |
| `:mjkoiura` | mjkoiura | `>mkoiuraa` | mkoiuraa |
| `:mjlaman` | mjlaman |  |  |
| `:mjleague` | mjleague |  |  |
| `:mjlstory` | mjlstory | `>ladymakr` | ladymakr |
| `:mjnanpas` | mjnanpas | `>mjnanpaa`<br>`>mjnanpau` | mjnanpaa<br>mjnanpau |
| `:mjnquest` | mjnquest | `>mjnquestb` | mjnquestb |
| `:mjsikaku` | mjsikaku | `>mjsikakb`<br>`>mjsikakc`<br>`>mjsikakd`<br>`>mmsikaku` | mjsikakb<br>mjsikakc<br>mjsikakd<br>mmsikaku |
| `:mjuraden` | mjuraden |  |  |
| `:mkeibaou` | mkeibaou |  |  |
| `:mladyhtr` | mladyhtr |  |  |
| `:mlanding` | mlanding | `>mlandingj` | mlandingj |
| `:mmagic` | mmagic |  |  |
| `:mmaiko` | mmaiko |  |  |
| `:mmatrix` | mmatrix | `>mmatrixa`<br>`>mmatrixd`<br>`>mmatrixj` | mmatrixa<br>mmatrixd<br>mmatrixj |
| `:mmehyou` | mmehyou |  |  |
| `:mofflott` | mofflott |  |  |
| `:monsterb` | monsterb | `>monsterb2` | monsterb2 |
| `:moshougi` | moshougi |  |  |
| `:motoraid` | motoraid | `>motoraiddx` | motoraiddx |
| `:mpang` | mpang | `>mpanga`<br>`>mpangj`<br>`>mpangr1`<br>`>mpangu` | mpanga<br>mpangj<br>mpangr1<br>mpangu |
| `:mpatrol` | mpatrol | `>mpatrolw`<br>`>mranger` | mpatrolw<br>mranger |
| `:mpumpkin` | mpumpkin |  |  |
| `:mrgoemon` | mrgoemon |  |  |
| `:mrviking` | mrviking |  |  |
| `:mscoutm` | mscoutm |  |  |
| `:msh` | msh | `>msha`<br>`>mshb`<br>`>mshbr1`<br>`>mshh`<br>`>mshj`<br>`>mshjr1`<br>`>mshu`<br>`>mshud` | msha<br>mshb<br>mshbr1<br>mshh<br>mshj<br>mshjr1<br>mshu<br>mshud |
| `:mshvsf` | mshvsf | `>mshvsfa`<br>`>mshvsfa1`<br>`>mshvsfb`<br>`>mshvsfb1`<br>`>mshvsfh`<br>`>mshvsfj`<br>`>mshvsfj1`<br>`>mshvsfj2`<br>`>mshvsfu`<br>`>mshvsfu1`<br>`>mshvsfu1d` | mshvsfa<br>mshvsfa1<br>mshvsfb<br>mshvsfb1<br>mshvsfh<br>mshvsfj<br>mshvsfj1<br>mshvsfj2<br>mshvsfu<br>mshvsfu1<br>mshvsfu1d |
| `:msisaac` | msisaac |  |  |
| `:msjiken` | msjiken |  |  |
| `:mslug` | mslug |  |  |
| `:mslug2` | mslug2 | `>mslug2t` | mslug2t |
| `:mslug3` | mslug3 | `>mslug3a`<br>`>mslug3b6` | mslug3a<br>mslug3b6 |
| `:mslug4` | mslug4 | `>ms4plus` | ms4plus |
| `:mslug5` | mslug5 | `>ms5plus`<br>`>mslug5b` | ms5plus<br>mslug5b |
| `:mslugx` | mslugx |  |  |
| `:msword` | msword | `>mswordj`<br>`>mswordr1`<br>`>mswordu` | mswordj<br>mswordr1<br>mswordu |
| `:mtwins` | mtwins | `>chikij` | chikij |
| `:mutnat` | mutnat |  |  |
| `:mvp` | mvp | `>mvpj` | mvpj |
| `:mvsc` | mvsc | `>mvsca`<br>`>mvscar1`<br>`>mvscb`<br>`>mvsch`<br>`>mvscj`<br>`>mvscjr1`<br>`>mvscjsing`<br>`>mvscr1`<br>`>mvscu`<br>`>mvscud`<br>`>mvscur1` | mvsca<br>mvscar1<br>mvscb<br>mvsch<br>mvscj<br>mvscjr1<br>mvscjsing<br>mvscr1<br>mvscu<br>mvscud<br>mvscur1 |
| `:mwalk` | mwalk | `>walkj`<br>`>walku` | walkj<br>walku |
| `:myfairld` | myfairld |  |  |
| `:myhero` | myhero | `>sscandal` | sscandal |
| `:mysticri` | mysticri | `>gunhohki` | gunhohki |
| `:nam1975` | nam1975 |  |  |
| `:nameclub` | nameclub |  |  |
| `:nastar` | nastar | `>nastarw`<br>`>rastsag2` | nastarw<br>rastsag2 |
| `:nbbatman` | nbbatman | `>leaguemn`<br>`>leaguemna`<br>`>nbbatmanu` | leaguemn<br>leaguemna<br>nbbatmanu |
| `:nclubdis` | nclubdis |  |  |
| `:nclubv2` | nclubv2 |  |  |
| `:nclubv3` | nclubv3 |  |  |
| `:nclubv4` | nclubv4 |  |  |
| `:ncombat` | ncombat |  |  |
| `:ncommand` | ncommand |  |  |
| `:nemesis` | nemesis | `>gradius`<br>`>gradiusuk` | gradius<br>gradiusuk |
| `:nemo` | nemo | `>nemoj`<br>`>nemor1` | nemoj<br>nemor1 |
| `:neobombe` | neobombe |  |  |
| `:neocup98` | neocup98 |  |  |
| `:neodrift` | neodrift |  |  |
| `:neomrdo` | neomrdo |  |  |
| `:netmerc` | netmerc |  |  |
| `:newsin7` | newsin7 | `>newsin7a` | newsin7a |
| `:ngalsumr` | ngalsumr |  |  |
| `:ngpgal` | ngpgal |  |  |
| `:ngtbunny` | ngtbunny | `>royalngt` | royalngt |
| `:nightgal` | nightgal |  |  |
| `:nightlov` | nightlov |  |  |
| `:nightstr` | nightstr | `>nightstrj`<br>`>nightstru` | nightstrj<br>nightstru |
| `:ninjakun` | ninjakun |  |  |
| `:ninjamas` | ninjamas |  |  |
| `:ninjaw` | ninjaw | `>ninjaw1`<br>`>ninjawj`<br>`>ninjawu` | ninjaw1<br>ninjawj<br>ninjawu |
| `:ninjemak` | ninjemak | `>ninjemat`<br>`>youma`<br>`>youma2`<br>`>youmab`<br>`>youmab2` | ninjemat<br>youma<br>youma2<br>youmab<br>youmab2 |
| `:nitd` | nitd | `>nitdbl` | nitdbl |
| `:nob` | nob | `>nobb` | nobb |
| `:nostromo` | nostromo | `>startrks` | startrks |
| `:nspirit` | nspirit | `>nspiritj` | nspiritj |
| `:nss_actr` | nss_actr |  |  |
| `:nss_adam` | nss_adam |  |  |
| `:nss_aten` | nss_aten |  |  |
| `:nss_con3` | nss_con3 |  |  |
| `:nss_fzer` | nss_fzer |  |  |
| `:nss_lwep` | nss_lwep |  |  |
| `:nss_ncaa` | nss_ncaa |  |  |
| `:nss_rob3` | nss_rob3 |  |  |
| `:nss_skin` | nss_skin |  |  |
| `:nss_smas` | nss_smas |  |  |
| `:nss_smw` | nss_smw |  |  |
| `:nss_ssoc` | nss_ssoc |  |  |
| `:nss_sten` | nss_sten |  |  |
| `:nsub` | nsub | `>nsubc` | nsubc |
| `:ntopstar` | ntopstar |  |  |
| `:nvs_machrider` | nvs_machrider | `>nvs_machridera` | nvs_machridera |
| `:nwarr` | nwarr | `>nwarra`<br>`>nwarrb`<br>`>nwarrh`<br>`>nwarru`<br>`>nwarrud`<br>`>vhuntj`<br>`>vhuntjr1`<br>`>vhuntjr1s`<br>`>vhuntjr2` | nwarra<br>nwarrb<br>nwarrh<br>nwarru<br>nwarrud<br>vhuntj<br>vhuntjr1<br>vhuntjr1s<br>vhuntjr2 |
| `:oceanhun` | oceanhun | `>oceanhuna` | oceanhuna |
| `:ohpaipee` | ohpaipee |  |  |
| `:ojousan` | ojousan | `>ojousanm` | ojousanm |
| `:omotesnd` | omotesnd |  |  |
| `:opaopa` | opaopa | `>opaopan` | opaopan |
| `:opwolf` | opwolf | `>opwolfa`<br>`>opwolfb`<br>`>opwolfj`<br>`>opwolfjsc`<br>`>opwolfp`<br>`>opwolfu` | opwolfa<br>opwolfb<br>opwolfj<br>opwolfjsc<br>opwolfp<br>opwolfu |
| `:orangec` | orangec | `>orangeci`<br>`>vipclub` | orangeci<br>vipclub |
| `:orunners` | orunners | `>orunnersj`<br>`>orunnersu` | orunnersj<br>orunnersu |
| `:otatidai` | otatidai |  |  |
| `:othellos` | othellos |  |  |
| `:othunder` | othunder | `>othunderj`<br>`>othunderjsc`<br>`>othunderua` | othunderj<br>othunderjsc<br>othunderua |
| `:othundero` | othundero | `>othunder` | othunder |
| `:otonano` | otonano |  |  |
| `:outrun` | outrun | `>outrundx`<br>`>outrundxa`<br>`>outrundxeh`<br>`>outrundxeha`<br>`>outrundxj`<br>`>outruneh`<br>`>outruneha`<br>`>outrunra` | outrundx<br>outrundxa<br>outrundxeh<br>outrundxeha<br>outrundxj<br>outruneh<br>outruneha<br>outrunra |
| `:overrev` | overrev | `>overrevb`<br>`>overrevba` | overrevb<br>overrevba |
| `:overtop` | overtop |  |  |
| `:ozmawars` | ozmawars | `>ozmawars2`<br>`>ozmawarsmr`<br>`>solfight`<br>`>spaceph` | ozmawars2<br>ozmawarsmr<br>solfight<br>spaceph |
| `:pachiten` | pachiten |  |  |
| `:paddlema` | paddlema |  |  |
| `:pairsnb` | pairsnb | `>pairsten` | pairsten |
| `:palamed` | palamed | `>palamedj` | palamedj |
| `:pandoras` | pandoras |  |  |
| `:pang` | pang | `>bbros`<br>`>pangb`<br>`>pangb2`<br>`>pangba`<br>`>pangbb`<br>`>pangbc`<br>`>pangbold`<br>`>pangbp`<br>`>pompingw` | bbros<br>pangb<br>pangb2<br>pangba<br>pangbb<br>pangbc<br>pangbold<br>pangbp<br>pompingw |
| `:pang3` | pang3 | `>pang3j`<br>`>pang3r1` | pang3j<br>pang3r1 |
| `:panicbom` | panicbom |  |  |
| `:panicr` | panicr | `>panicrg` | panicrg |
| `:panther` | panther |  |  |
| `:parentj` | parentj |  |  |
| `:passsht` | passsht | `>cencourt`<br>`>passsht16a`<br>`>passshta`<br>`>passshtj` | cencourt<br>passsht16a<br>passshta<br>passshtj |
| `:pastelg` | pastelg |  |  |
| `:patimono` | patimono |  |  |
| `:patocar` | patocar |  |  |
| `:pballoon` | pballoon | `>pballoonr` | pballoonr |
| `:pblbeach` | pblbeach |  |  |
| `:pbobbl2n` | pbobbl2n |  |  |
| `:pbobble` | pbobble | `>bublbust` | bublbust |
| `:pbobble2` | pbobble2 | `>pbobble2j`<br>`>pbobble2o`<br>`>pbobble2u`<br>`>pbobble2x` | pbobble2j<br>pbobble2o<br>pbobble2u<br>pbobble2x |
| `:pbobble3` | pbobble3 | `>pbobble3j`<br>`>pbobble3u` | pbobble3j<br>pbobble3u |
| `:pbobble4` | pbobble4 | `>pbobble4j`<br>`>pbobble4u` | pbobble4j<br>pbobble4u |
| `:pbobblen` | pbobblen | `>pbobblenb` | pbobblenb |
| `:pc_1942` | pc_1942 |  |  |
| `:pc_bball` | pc_bball |  |  |
| `:pc_bfght` | pc_bfght |  |  |
| `:pc_bload` | pc_bload |  |  |
| `:pc_bstar` | pc_bstar |  |  |
| `:pc_cntra` | pc_cntra |  |  |
| `:pc_cshwk` | pc_cshwk |  |  |
| `:pc_cvnia` | pc_cvnia |  |  |
| `:pc_dbldr` | pc_dbldr |  |  |
| `:pc_ddrgn` | pc_ddrgn |  |  |
| `:pc_drmro` | pc_drmro | `>pc_virus` | pc_virus |
| `:pc_duckh` | pc_duckh |  |  |
| `:pc_ebike` | pc_ebike |  |  |
| `:pc_ftqst` | pc_ftqst |  |  |
| `:pc_gntlt` | pc_gntlt |  |  |
| `:pc_golf` | pc_golf |  |  |
| `:pc_goons` | pc_goons |  |  |
| `:pc_grdus` | pc_grdus | `>pc_grdue` | pc_grdue |
| `:pc_hgaly` | pc_hgaly |  |  |
| `:pc_kngfu` | pc_kngfu |  |  |
| `:pc_mario` | pc_mario |  |  |
| `:pc_miket` | pc_miket |  |  |
| `:pc_mman3` | pc_mman3 |  |  |
| `:pc_moglf` | pc_moglf |  |  |
| `:pc_mtoid` | pc_mtoid |  |  |
| `:pc_ngai2` | pc_ngai2 |  |  |
| `:pc_ngai3` | pc_ngai3 |  |  |
| `:pc_ngaid` | pc_ngaid |  |  |
| `:pc_pinbt` | pc_pinbt |  |  |
| `:pc_pwbld` | pc_pwbld |  |  |
| `:pc_pwrst` | pc_pwrst |  |  |
| `:pc_radr2` | pc_radr2 |  |  |
| `:pc_radrc` | pc_radrc |  |  |
| `:pc_rcpam` | pc_rcpam |  |  |
| `:pc_rkats` | pc_rkats |  |  |
| `:pc_rnatk` | pc_rnatk |  |  |
| `:pc_rrngr` | pc_rrngr |  |  |
| `:pc_rygar` | pc_rygar |  |  |
| `:pc_sjetm` | pc_sjetm |  |  |
| `:pc_smb` | pc_smb |  |  |
| `:pc_smb2` | pc_smb2 |  |  |
| `:pc_smb3` | pc_smb3 |  |  |
| `:pc_suprc` | pc_suprc |  |  |
| `:pc_tbowl` | pc_tbowl |  |  |
| `:pc_tenis` | pc_tenis |  |  |
| `:pc_tkfld` | pc_tkfld |  |  |
| `:pc_tmnt` | pc_tmnt |  |  |
| `:pc_tmnt2` | pc_tmnt2 |  |  |
| `:pc_trjan` | pc_trjan |  |  |
| `:pc_ttoon` | pc_ttoon |  |  |
| `:pc_vball` | pc_vball |  |  |
| `:pc_wcup` | pc_wcup |  |  |
| `:pc_wgnmn` | pc_wgnmn |  |  |
| `:pc_ynoid` | pc_ynoid |  |  |
| `:pclub2` | pclub2 |  |  |
| `:pclubj` | pclubj |  |  |
| `:pclubjv2` | pclubjv2 | `>pclub` | pclub |
| `:pclubjv4` | pclubjv4 |  |  |
| `:pclubjv5` | pclubjv5 |  |  |
| `:pclubpok` | pclubpok |  |  |
| `:pdrift` | pdrift | `>pdrifta`<br>`>pdrifte`<br>`>pdriftj` | pdrifta<br>pdrifte<br>pdriftj |
| `:pdriftl` | pdriftl |  |  |
| `:pengo` | pengo | `>pengo2`<br>`>pengo4`<br>`>pengo5` | pengo2<br>pengo4<br>pengo5 |
| `:pgoal` | pgoal |  |  |
| `:phoenix` | phoenix | `>avefenix`<br>`>avefenixl`<br>`>avefenixrf`<br>`>batman2`<br>`>condor`<br>`>condorn`<br>`>condorva`<br>`>falcon`<br>`>fenix`<br>`>fenixn`<br>`>griffon`<br>`>griffono`<br>`>nextfase`<br>`>phoenix2`<br>`>phoenix3`<br>`>phoenixa`<br>`>phoenixass`<br>`>phoenixb`<br>`>phoenixbl`<br>`>phoenixc`<br>`>phoenixc2`<br>`>phoenixc3`<br>`>phoenixc4`<br>`>phoenixdal`<br>`>phoenixgu`<br>`>phoenixha`<br>`>phoenixi`<br>`>phoenixj`<br>`>phoenixs`<br>`>phoenixt`<br>`>phoenxp2`<br>`>vautour`<br>`>vautourz`<br>`>vautourza` | avefenix<br>avefenixl<br>avefenixrf<br>batman2<br>condor<br>condorn<br>condorva<br>falcon<br>fenix<br>fenixn<br>griffon<br>griffono<br>nextfase<br>phoenix2<br>phoenix3<br>phoenixa<br>phoenixass<br>phoenixb<br>phoenixbl<br>phoenixc<br>phoenixc2<br>phoenixc3<br>phoenixc4<br>phoenixdal<br>phoenixgu<br>phoenixha<br>phoenixi<br>phoenixj<br>phoenixs<br>phoenixt<br>phoenxp2<br>vautour<br>vautourz<br>vautourza |
| `:pignewt` | pignewt | `>pignewta` | pignewta |
| `:pingpong` | pingpong |  |  |
| `:pitfall2` | pitfall2 | `>pitfall2a`<br>`>pitfall2u` | pitfall2a<br>pitfall2u |
| `:pitnrun` | pitnrun | `>pitnruna`<br>`>pitnrunb` | pitnruna<br>pitnrunb |
| `:platoon` | platoon |  |  |
| `:plgirls` | plgirls | `>lagirl` | lagirl |
| `:plgirls2` | plgirls2 | `>plgirls2b` | plgirls2b |
| `:plotting` | plotting | `>flipull`<br>`>plottinga`<br>`>plottingb`<br>`>plottingu` | flipull<br>plottinga<br>plottingb<br>plottingu |
| `:pltkids` | pltkids | `>pltkidsa` | pltkidsa |
| `:plumppop` | plumppop |  |  |
| `:pnickj` | pnickj |  |  |
| `:pnyaa` | pnyaa | `>pnyaaa` | pnyaaa |
| `:pokonyan` | pokonyan |  |  |
| `:pooyan` | pooyan | `>pootan`<br>`>pooyans` | pootan<br>pooyans |
| `:popbounc` | popbounc |  |  |
| `:popeye` | popeye | `>popeyeb2`<br>`>popeyeb3`<br>`>popeyebl`<br>`>popeyef`<br>`>popeyej`<br>`>popeyejo`<br>`>popeyeu` | popeyeb2<br>popeyeb3<br>popeyebl<br>popeyef<br>popeyej<br>popeyejo<br>popeyeu |
| `:popnpop` | popnpop | `>popnpopj`<br>`>popnpopu` | popnpopj<br>popnpopu |
| `:potopoto` | potopoto |  |  |
| `:poundfor` | poundfor | `>poundforj`<br>`>poundforu` | poundforj<br>poundforu |
| `:pow` | pow | `>powa`<br>`>powj` | powa<br>powj |
| `:powsled` | powsled | `>powsledm`<br>`>powsledr` | powsledm<br>powsledr |
| `:prehisle` | prehisle | `>gensitou`<br>`>prehisleb`<br>`>prehislek`<br>`>prehisleu` | gensitou<br>prehisleb<br>prehislek<br>prehisleu |
| `:preisle2` | preisle2 |  |  |
| `:prikura` | prikura |  |  |
| `:progear` | progear | `>progeara`<br>`>progearj`<br>`>progearjbl`<br>`>progearjd`<br>`>progearud` | progeara<br>progearj<br>progearjbl<br>progearjd<br>progearud |
| `:psailor1` | psailor1 |  |  |
| `:psailor2` | psailor2 |  |  |
| `:pspikes2` | pspikes2 |  |  |
| `:pstadium` | pstadium |  |  |
| `:psychos` | psychos | `>psychosj` | psychosj |
| `:puchicar` | puchicar | `>puchicarj`<br>`>puchicaru` | puchicarj<br>puchicaru |
| `:pulirula` | pulirula | `>pulirulaa`<br>`>pulirulaj` | pulirulaa<br>pulirulaj |
| `:pulsar` | pulsar |  |  |
| `:pulstar` | pulstar |  |  |
| `:punchout` | punchout | `>punchita`<br>`>punchouta`<br>`>punchoutj` | punchita<br>punchouta<br>punchoutj |
| `:punisher` | punisher | `>punisherh`<br>`>punisherj`<br>`>punisheru` | punisherh<br>punisherj<br>punisheru |
| `:puyo` | puyo | `>puyoja`<br>`>puyojb` | puyoja<br>puyojb |
| `:puyopuy2` | puyopuy2 |  |  |
| `:puyosun` | puyosun |  |  |
| `:puzzldpr` | puzzldpr |  |  |
| `:puzzledp` | puzzledp |  |  |
| `:puzznic` | puzznic | `>puzznica`<br>`>puzznicb`<br>`>puzznici`<br>`>puzznicj`<br>`>puzznicu` | puzznica<br>puzznicb<br>puzznici<br>puzznicj<br>puzznicu |
| `:pwrgoal` | pwrgoal | `>hthero95`<br>`>hthero95a`<br>`>hthero95u` | hthero95<br>hthero95a<br>hthero95u |
| `:pzloop2` | pzloop2 | `>pzloop2j`<br>`>pzloop2jd`<br>`>pzloop2jr1` | pzloop2j<br>pzloop2jd<br>pzloop2jr1 |
| `:qad` | qad | `>qadjr` | qadjr |
| `:qcrayon` | qcrayon |  |  |
| `:qcrayon2` | qcrayon2 |  |  |
| `:qgh` | qgh |  |  |
| `:qix` | qix | `>qix2`<br>`>qixa`<br>`>qixb`<br>`>qixo` | qix2<br>qixa<br>qixb<br>qixo |
| `:qjinsei` | qjinsei |  |  |
| `:qmhayaku` | qmhayaku |  |  |
| `:qndream` | qndream |  |  |
| `:qrouka` | qrouka |  |  |
| `:qsww` | qsww |  |  |
| `:qtheater` | qtheater |  |  |
| `:qtono2j` | qtono2j |  |  |
| `:qtorimon` | qtorimon |  |  |
| `:quartet` | quartet | `>quartet2`<br>`>quartet2a`<br>`>quarteta` | quartet2<br>quartet2a<br>quarteta |
| `:quizdai2` | quizdai2 |  |  |
| `:quizdais` | quizdais | `>quizdaisk` | quizdaisk |
| `:quizf1` | quizf1 |  |  |
| `:quizhq` | quizhq |  |  |
| `:quizhuhu` | quizhuhu |  |  |
| `:quizkof` | quizkof | `>quizkofk` | quizkofk |
| `:quizmeku` | quizmeku |  |  |
| `:qzchikyu` | qzchikyu |  |  |
| `:qzquest` | qzquest |  |  |
| `:qzshowby` | qzshowby |  |  |
| `:rachero` | rachero |  |  |
| `:racingb` | racingb | `>racingbj` | racingbj |
| `:radarscp` | radarscp | `>radarscp1` | radarscp1 |
| `:radm` | radm | `>radmu` | radmu |
| `:radr` | radr | `>radrj`<br>`>radru` | radrj<br>radru |
| `:radrad` | radrad | `>radradj` | radradj |
| `:raflesia` | raflesia |  |  |
| `:ragnagrd` | ragnagrd |  |  |
| `:raimais` | raimais | `>raimaisj`<br>`>raimaisjo` | raimaisj<br>raimaisjo |
| `:rambo3` | rambo3 | `>rambo3p`<br>`>rambo3u` | rambo3p<br>rambo3u |
| `:rascot` | rascot |  |  |
| `:rascot2` | rascot2 |  |  |
| `:rastan` | rastan | `>rastana`<br>`>rastanb`<br>`>rastanu`<br>`>rastanua`<br>`>rastanub`<br>`>rastsaga`<br>`>rastsagaa`<br>`>rastsagab` | rastana<br>rastanb<br>rastanu<br>rastanua<br>rastanub<br>rastsaga<br>rastsagaa<br>rastsagab |
| `:razmataz` | razmataz |  |  |
| `:rbff1` | rbff1 | `>rbff1a`<br>`>rbff1k`<br>`>rbff1ka` | rbff1a<br>rbff1k<br>rbff1ka |
| `:rbff2` | rbff2 | `>rbff2k` | rbff2k |
| `:rbffspec` | rbffspec | `>rbffspeck` | rbffspeck |
| `:rbisland` | rbisland | `>jumping`<br>`>jumpinga`<br>`>jumpingi`<br>`>rbislando` | jumping<br>jumpinga<br>jumpingi<br>rbislando |
| `:rbislande` | rbislande |  |  |
| `:rchase` | rchase | `>rchasej` | rchasej |
| `:rchase2` | rchase2 | `>rchase2a` | rchase2a |
| `:realpunc` | realpunc | `>realpuncj` | realpuncj |
| `:recalh` | recalh |  |  |
| `:recordbr` | recordbr | `>gogold` | gogold |
| `:redalert` | redalert | `>ww3` | ww3 |
| `:redearth` | redearth | `>redearthn`<br>`>redearthnr1`<br>`>redearthr1`<br>`>warzard`<br>`>warzardr1` | redearthn<br>redearthnr1<br>redearthr1<br>warzard<br>warzardr1 |
| `:regulus` | regulus |  |  |
| `:renaiclb` | renaiclb |  |  |
| `:retofinv` | retofinv | `>retofinvb`<br>`>retofinvb1`<br>`>retofinvb2`<br>`>retofinvb3`<br>`>retofinvbv` | retofinvb<br>retofinvb1<br>retofinvb2<br>retofinvb3<br>retofinvbv |
| `:ribbit` | ribbit | `>ribbitj` | ribbitj |
| `:ridhero` | ridhero |  |  |
| `:ridingf` | ridingf | `>ridingfj`<br>`>ridingfu` | ridingfj<br>ridingfu |
| `:ridleofp` | ridleofp |  |  |
| `:ringdest` | ringdest | `>ringdesta`<br>`>ringdestb`<br>`>ringdestd`<br>`>ringdesth`<br>`>smbomb`<br>`>smbombr1` | ringdesta<br>ringdestb<br>ringdestd<br>ringdesth<br>smbomb<br>smbombr1 |
| `:ringrage` | ringrage | `>ringragej`<br>`>ringrageu` | ringragej<br>ringrageu |
| `:riotcity` | riotcity |  |  |
| `:riskchal` | riskchal | `>gussun` | gussun |
| `:rjammer` | rjammer |  |  |
| `:roadf` | roadf | `>roadf2`<br>`>roadfh`<br>`>roadfu` | roadf2<br>roadfh<br>roadfu |
| `:roboarmy` | roboarmy | `>roboarmya` | roboarmya |
| `:robowres` | robowres |  |  |
| `:rockclim` | rockclim |  |  |
| `:rockrage` | rockrage | `>rockragea`<br>`>rockragej` | rockragea<br>rockragej |
| `:rocnrope` | rocnrope | `>rocnropek`<br>`>ropeman` | rocnropek<br>ropeman |
| `:rollingc` | rollingc |  |  |
| `:rotd` | rotd |  |  |
| `:roughrac` | roughrac |  |  |
| `:royalqn` | royalqn |  |  |
| `:roylcrdn` | roylcrdn | `>roylcrdna` | roylcrdna |
| `:rsgun` | rsgun |  |  |
| `:rtype` | rtype | `>rtypej`<br>`>rtypejp`<br>`>rtypeu` | rtypej<br>rtypejp<br>rtypeu |
| `:rtype2` | rtype2 | `>rtype2j`<br>`>rtype2jc` | rtype2j<br>rtype2jc |
| `:rtypeleo` | rtypeleo | `>rtypeleoj` | rtypeleoj |
| `:ryujin` | ryujin | `>ryujina` | ryujina |
| `:ryukyu` | ryukyu | `>ryukyua` | ryukyua |
| `:s1945p` | s1945p |  |  |
| `:safari` | safari | `>safaria` | safaria |
| `:safarir` | safarir | `>safarirj` | safarirj |
| `:sailorws` | sailorws | `>sailorwa`<br>`>sailorwr` | sailorwa<br>sailorwr |
| `:salamand` | salamand | `>lifefrce`<br>`>lifefrcej`<br>`>salamandj`<br>`>salamandt` | lifefrce<br>lifefrcej<br>salamandj<br>salamandt |
| `:samsh5sp` | samsh5sp |  |  |
| `:samsho` | samsho |  |  |
| `:samsho2` | samsho2 | `>samsho2k` | samsho2k |
| `:samsho3` | samsho3 | `>fswords` | fswords |
| `:samsho4` | samsho4 | `>samsho4k` | samsho4k |
| `:samsho5` | samsho5 | `>samsho5a`<br>`>samsho5b` | samsho5a<br>samsho5b |
| `:samurai` | samurai | `>samuraij` | samuraij |
| `:sandor` | sandor | `>thunt`<br>`>thuntk` | thunt<br>thuntk |
| `:sasissu` | sasissu | `>sanjeon` | sanjeon |
| `:sasuke` | sasuke |  |  |
| `:satansat` | satansat | `>satansata`<br>`>satansatind` | satansata<br>satansatind |
| `:savagere` | savagere |  |  |
| `:sbasebal` | sbasebal | `>sbasebalj` | sbasebalj |
| `:sbasketb` | sbasketb | `>sbaskete`<br>`>sbasketg`<br>`>sbasketh` | sbaskete<br>sbasketg<br>sbasketh |
| `:sbm` | sbm | `>sbmj` | sbmj |
| `:sbp` | sbp |  |  |
| `:scandal` | scandal | `>scandalm` | scandalm |
| `:scessjoe` | scessjoe | `>ashnojoe` | ashnojoe |
| `:scfinals` | scfinals | `>scfinalso` | scfinalso |
| `:schamp` | schamp | `>sfight` | sfight |
| `:schaser` | schaser | `>crashrd`<br>`>schasera`<br>`>schaserb`<br>`>schaserc`<br>`>schasercv`<br>`>schaserm` | crashrd<br>schasera<br>schaserb<br>schaserc<br>schasercv<br>schaserm |
| `:sci` | sci | `>scia`<br>`>scij`<br>`>scin`<br>`>sciu` | scia<br>scij<br>scin<br>sciu |
| `:scobra` | scobra | `>scobrab`<br>`>scobrae`<br>`>scobrae2`<br>`>scobrag`<br>`>scobraggi`<br>`>scobras`<br>`>scobrase`<br>`>suprheli` | scobrab<br>scobrae<br>scobrae2<br>scobrag<br>scobraggi<br>scobras<br>scobrase<br>suprheli |
| `:scotrsht` | scotrsht |  |  |
| `:scramble` | scramble | `>astroamb`<br>`>bomber`<br>`>explorer`<br>`>kamikazesp`<br>`>ncentury`<br>`>offensiv`<br>`>scrabbleo`<br>`>scramb2`<br>`>scramb3`<br>`>scramblb`<br>`>scramblebb`<br>`>scramblebf`<br>`>scramblebun`<br>`>scrambleo`<br>`>scrambler`<br>`>scrambles`<br>`>scrambles2`<br>`>scrambp`<br>`>scramce`<br>`>scrammr`<br>`>scrampt`<br>`>scramrf`<br>`>seainv`<br>`>spcmission`<br>`>spctrek`<br>`>strfbomb` | astroamb<br>bomber<br>explorer<br>kamikazesp<br>ncentury<br>offensiv<br>scrabbleo<br>scramb2<br>scramb3<br>scramblb<br>scramblebb<br>scramblebf<br>scramblebun<br>scrambleo<br>scrambler<br>scrambles<br>scrambles2<br>scrambp<br>scramce<br>scrammr<br>scrampt<br>scramrf<br>seainv<br>spcmission<br>spctrek<br>strfbomb |
| `:scross` | scross | `>scrossa`<br>`>scrossu` | scrossa<br>scrossu |
| `:scud` | scud | `>scudau`<br>`>scuddx`<br>`>scuddxo`<br>`>scudplus`<br>`>scudplusa` | scudau<br>scuddx<br>scuddxo<br>scudplus<br>scudplusa |
| `:scyclone` | scyclone |  |  |
| `:sdi` | sdi | `>defense`<br>`>sdia`<br>`>sdib` | defense<br>sdia<br>sdib |
| `:sdodgeb` | sdodgeb |  |  |
| `:sdungeon` | sdungeon | `>sdungeona` | sdungeona |
| `:seabass` | seabass |  |  |
| `:searchar` | searchar | `>searcharj`<br>`>searcharu` | searcharj<br>searcharu |
| `:secolove` | secolove |  |  |
| `:sectionz` | sectionz | `>sectionza` | sectionza |
| `:seganinj` | seganinj | `>nprincess` | nprincess |
| `:segawski` | segawski |  |  |
| `:seicross` | seicross | `>sectrzon`<br>`>sectrzona`<br>`>sectrzont`<br>`>seicrossa` | sectrzon<br>sectrzona<br>sectrzont<br>seicrossa |
| `:seiha` | seiha | `>seiham` | seiham |
| `:selfeena` | selfeena |  |  |
| `:sengoku` | sengoku |  |  |
| `:sengoku2` | sengoku2 |  |  |
| `:sengoku3` | sengoku3 |  |  |
| `:sexygal` | sexygal | `>sweetgal` | sweetgal |
| `:sf` | sf | `>sfan`<br>`>sfj`<br>`>sfjan`<br>`>sfjbl`<br>`>sfp`<br>`>sfua`<br>`>sfw` | sfan<br>sfj<br>sfjan<br>sfjbl<br>sfp<br>sfua<br>sfw |
| `:sf2` | sf2 | `>sf2ea`<br>`>sf2eb`<br>`>sf2ed`<br>`>sf2em`<br>`>sf2en`<br>`>sf2j`<br>`>sf2j17`<br>`>sf2ja`<br>`>sf2jc`<br>`>sf2jf`<br>`>sf2jh`<br>`>sf2jl`<br>`>sf2ua`<br>`>sf2ub`<br>`>sf2uc`<br>`>sf2ud`<br>`>sf2uf`<br>`>sf2ug`<br>`>sf2uh`<br>`>sf2ui`<br>`>sf2uk` | sf2ea<br>sf2eb<br>sf2ed<br>sf2em<br>sf2en<br>sf2j<br>sf2j17<br>sf2ja<br>sf2jc<br>sf2jf<br>sf2jh<br>sf2jl<br>sf2ua<br>sf2ub<br>sf2uc<br>sf2ud<br>sf2uf<br>sf2ug<br>sf2uh<br>sf2ui<br>sf2uk |
| `:sf2ce` | sf2ce | `>sf2ceea`<br>`>sf2ceja`<br>`>sf2cejb`<br>`>sf2cejc`<br>`>sf2cet`<br>`>sf2ceua`<br>`>sf2ceub`<br>`>sf2ceuc` | sf2ceea<br>sf2ceja<br>sf2cejb<br>sf2cejc<br>sf2cet<br>sf2ceua<br>sf2ceub<br>sf2ceuc |
| `:sf2hf` | sf2hf | `>sf2hfj`<br>`>sf2hfu` | sf2hfj<br>sf2hfu |
| `:sfa` | sfa | `>sfad`<br>`>sfar1`<br>`>sfar2`<br>`>sfar3`<br>`>sfau`<br>`>sfza`<br>`>sfzar1`<br>`>sfzb`<br>`>sfzbr1`<br>`>sfzh`<br>`>sfzhr1`<br>`>sfzj`<br>`>sfzjr1`<br>`>sfzjr2` | sfad<br>sfar1<br>sfar2<br>sfar3<br>sfau<br>sfza<br>sfzar1<br>sfzb<br>sfzbr1<br>sfzh<br>sfzhr1<br>sfzj<br>sfzjr1<br>sfzjr2 |
| `:sfa2` | sfa2 | `>sfa2u`<br>`>sfa2ur1`<br>`>sfz2a`<br>`>sfz2ad`<br>`>sfz2b`<br>`>sfz2br1`<br>`>sfz2h`<br>`>sfz2j`<br>`>sfz2jd`<br>`>sfz2jr1`<br>`>sfz2n` | sfa2u<br>sfa2ur1<br>sfz2a<br>sfz2ad<br>sfz2b<br>sfz2br1<br>sfz2h<br>sfz2j<br>sfz2jd<br>sfz2jr1<br>sfz2n |
| `:sfa3` | sfa3 | `>sfa3b`<br>`>sfa3h`<br>`>sfa3hr1`<br>`>sfa3u`<br>`>sfa3ud`<br>`>sfa3ur1`<br>`>sfa3us`<br>`>sfz3a`<br>`>sfz3ar1`<br>`>sfz3j`<br>`>sfz3jr1`<br>`>sfz3jr2`<br>`>sfz3jr2d` | sfa3b<br>sfa3h<br>sfa3hr1<br>sfa3u<br>sfa3ud<br>sfa3ur1<br>sfa3us<br>sfz3a<br>sfz3ar1<br>sfz3j<br>sfz3jr1<br>sfz3jr2<br>sfz3jr2d |
| `:sfach` | sfach |  |  |
| `:sfiii` | sfiii | `>sfiiia`<br>`>sfiiih`<br>`>sfiiij`<br>`>sfiiin`<br>`>sfiiina`<br>`>sfiiiu` | sfiiia<br>sfiiih<br>sfiiij<br>sfiiin<br>sfiiina<br>sfiiiu |
| `:sfiii2` | sfiii2 | `>sfiii2h`<br>`>sfiii2j`<br>`>sfiii2n` | sfiii2h<br>sfiii2j<br>sfiii2n |
| `:sfiii3` | sfiii3 | `>sfiii3j`<br>`>sfiii3jr1`<br>`>sfiii3n`<br>`>sfiii3nr1`<br>`>sfiii3r1`<br>`>sfiii3u`<br>`>sfiii3ur1` | sfiii3j<br>sfiii3jr1<br>sfiii3n<br>sfiii3nr1<br>sfiii3r1<br>sfiii3u<br>sfiii3ur1 |
| `:sfish2` | sfish2 | `>sfish2j` | sfish2j |
| `:sflush` | sflush |  |  |
| `:sfz2al` | sfz2al | `>sfz2alb`<br>`>sfz2ald`<br>`>sfz2alh`<br>`>sfz2alj`<br>`>sfz2alr1` | sfz2alb<br>sfz2ald<br>sfz2alh<br>sfz2alj<br>sfz2alr1 |
| `:sfzch` | sfzch | `>sfzbch` | sfzbch |
| `:sgaltrop` | sgaltrop | `>sgaltropa` | sgaltropa |
| `:sgemf` | sgemf | `>pfghtj`<br>`>sgemfa`<br>`>sgemfd`<br>`>sgemfh` | pfghtj<br>sgemfa<br>sgemfd<br>sgemfh |
| `:sgladiat` | sgladiat |  |  |
| `:sgmast` | sgmast | `>sgmastc`<br>`>sgmastcj` | sgmastc<br>sgmastcj |
| `:sgt24h` | sgt24h |  |  |
| `:shabdama` | shabdama |  |  |
| `:shangkid` | shangkid | `>hiryuken` | hiryuken |
| `:shangon` | shangon | `>shangon1`<br>`>shangon2`<br>`>shangon3`<br>`>shangonle`<br>`>shangonro` | shangon1<br>shangon2<br>shangon3<br>shangonle<br>shangonro |
| `:shanhigw` | shanhigw |  |  |
| `:sharrier` | sharrier | `>sharrier1` | sharrier1 |
| `:shdancer` | shdancer | `>shdancer1`<br>`>shdancerj` | shdancer1<br>shdancerj |
| `:sheriff` | sheriff | `>bandido`<br>`>westgun2` | bandido<br>westgun2 |
| `:shienryu` | shienryu |  |  |
| `:shinobi` | shinobi | `>shinobi1`<br>`>shinobi2`<br>`>shinobi3`<br>`>shinobi4`<br>`>shinobi5`<br>`>shinobi6` | shinobi1<br>shinobi2<br>shinobi3<br>shinobi4<br>shinobi5<br>shinobi6 |
| `:shocktr2` | shocktr2 | `>lans2004` | lans2004 |
| `:shocktro` | shocktro | `>shocktroa` | shocktroa |
| `:shtrider` | shtrider | `>shtridera` | shtridera |
| `:sidearms` | sidearms | `>sidearmsj`<br>`>sidearmsu`<br>`>sidearmsur1` | sidearmsj<br>sidearmsu<br>sidearmsur1 |
| `:silentd` | silentd | `>silentdj`<br>`>silentdu` | silentdj<br>silentdu |
| `:sindbadm` | sindbadm |  |  |
| `:sjryuko` | sjryuko | `>sjryuko1` | sjryuko1 |
| `:skichamp` | skichamp |  |  |
| `:skisuprg` | skisuprg |  |  |
| `:skyadvnt` | skyadvnt | `>skyadvntj`<br>`>skyadvntu` | skyadvntj<br>skyadvntu |
| `:skychut` | skychut |  |  |
| `:skyrobo` | skyrobo | `>bigfghtr`<br>`>skyrobobl` | bigfghtr<br>skyrobobl |
| `:skyskipr` | skyskipr |  |  |
| `:skysoldr` | skysoldr | `>skysoldrbl` | skysoldrbl |
| `:skytargt` | skytargt |  |  |
| `:slammast` | slammast | `>mbomberj`<br>`>slammastu` | mbomberj<br>slammastu |
| `:slapshtr` | slapshtr |  |  |
| `:slipstrm` | slipstrm | `>slipstrmh` | slipstrmh |
| `:smgolf` | smgolf | `>ladygolf`<br>`>ladygolfe`<br>`>smgolfb`<br>`>smgolfj` | ladygolf<br>ladygolfe<br>smgolfb<br>smgolfj |
| `:smgp` | smgp | `>smgpj`<br>`>smgpja` | smgpj<br>smgpja |
| `:smleague` | smleague | `>finlarch` | finlarch |
| `:snapper` | snapper |  |  |
| `:socbrawl` | socbrawl |  |  |
| `:sokyugrt` | sokyugrt |  |  |
| `:solfigtr` | solfigtr |  |  |
| `:sonic` | sonic | `>sonicp` | sonicp |
| `:sonicbom` | sonicbom |  |  |
| `:soniccar` | soniccar |  |  |
| `:sonicfgt` | sonicfgt | `>sonicfgtj` | sonicfgtj |
| `:sonicpop` | sonicpop |  |  |
| `:sonicwi2` | sonicwi2 |  |  |
| `:sonicwi3` | sonicwi3 |  |  |
| `:sonson` | sonson | `>sonsonj` | sonsonj |
| `:spacbeam` | spacbeam |  |  |
| `:spacecr` | spacecr |  |  |
| `:spacedx` | spacedx | `>spacedxj`<br>`>spacedxo`<br>`>spcinvdj` | spacedxj<br>spacedxo<br>spcinvdj |
| `:spacefb` | spacefb | `>redbird`<br>`>spacebrd`<br>`>spacedem`<br>`>spacefba`<br>`>spacefbe`<br>`>spacefbe2`<br>`>spacefbg`<br>`>starwarr` | redbird<br>spacebrd<br>spacedem<br>spacefba<br>spacefbe<br>spacefbe2<br>spacefbg<br>starwarr |
| `:spacefev` | spacefev | `>spacefevo`<br>`>spacefevo2` | spacefevo<br>spacefevo2 |
| `:spacegun` | spacegun | `>spacegunj`<br>`>spacegunu` | spacegunj<br>spacegunu |
| `:spacelnc` | spacelnc |  |  |
| `:spaceod` | spaceod | `>spaceod2` | spaceod2 |
| `:spaceskr` | spaceskr |  |  |
| `:spacetrk` | spacetrk | `>spacetrkc` | spacetrkc |
| `:spang` | spang | `>sbbros`<br>`>spangbl`<br>`>spangbl2`<br>`>spangj` | sbbros<br>spangbl<br>spangbl2<br>spangj |
| `:spatter` | spatter | `>ssanchan` | ssanchan |
| `:spcewarl` | spcewarl | `>intruder`<br>`>laser`<br>`>spclaser` | intruder<br>laser<br>spclaser |
| `:spcinv95` | spcinv95 | `>akkanvdr`<br>`>spcinv95u` | akkanvdr<br>spcinv95u |
| `:spcking2` | spcking2 |  |  |
| `:spcpostn` | spcpostn |  |  |
| `:spelunk2` | spelunk2 |  |  |
| `:spelunkr` | spelunkr | `>spelunkrj` | spelunkrj |
| `:spf2t` | spf2t | `>spf2ta`<br>`>spf2td`<br>`>spf2th`<br>`>spf2tu`<br>`>spf2xj`<br>`>spf2xjd` | spf2ta<br>spf2td<br>spf2th<br>spf2tu<br>spf2xj<br>spf2xjd |
| `:spidman` | spidman | `>spidmanj`<br>`>spidmanu` | spidmanj<br>spidmanu |
| `:spidmanj` | spidmanj |  |  |
| `:spikeofe` | spikeofe |  |  |
| `:spikeout` | spikeout |  |  |
| `:spinmast` | spinmast |  |  |
| `:spnchout` | spnchout | `>spnchouta`<br>`>spnchoutj` | spnchouta<br>spnchoutj |
| `:srally2` | srally2 | `>srally2dx`<br>`>srally2p`<br>`>srally2pa` | srally2dx<br>srally2p<br>srally2pa |
| `:srallyc` | srallyc | `>srallyca`<br>`>srallycb`<br>`>srallycdx`<br>`>srallycdxa` | srallyca<br>srallycb<br>srallycdx<br>srallycdxa |
| `:srumbler` | srumbler | `>rushcrsh`<br>`>srumbler2`<br>`>srumbler3` | rushcrsh<br>srumbler2<br>srumbler3 |
| `:ssf2` | ssf2 | `>ssf2a`<br>`>ssf2ar1`<br>`>ssf2h`<br>`>ssf2j`<br>`>ssf2jr1`<br>`>ssf2jr2`<br>`>ssf2r1`<br>`>ssf2tb`<br>`>ssf2tba`<br>`>ssf2tbd`<br>`>ssf2tbh`<br>`>ssf2tbj`<br>`>ssf2tbj1`<br>`>ssf2tbr1`<br>`>ssf2tbu`<br>`>ssf2u`<br>`>ssf2ud` | ssf2a<br>ssf2ar1<br>ssf2h<br>ssf2j<br>ssf2jr1<br>ssf2jr2<br>ssf2r1<br>ssf2tb<br>ssf2tba<br>ssf2tbd<br>ssf2tbh<br>ssf2tbj<br>ssf2tbj1<br>ssf2tbr1<br>ssf2tbu<br>ssf2u<br>ssf2ud |
| `:ssf2t` | ssf2t | `>ssf2ta`<br>`>ssf2tad`<br>`>ssf2th`<br>`>ssf2tu`<br>`>ssf2tur1`<br>`>ssf2xj`<br>`>ssf2xjr1`<br>`>ssf2xjr1d`<br>`>ssf2xjr1r` | ssf2ta<br>ssf2tad<br>ssf2th<br>ssf2tu<br>ssf2tur1<br>ssf2xj<br>ssf2xjr1<br>ssf2xjr1d<br>ssf2xjr1r |
| `:ssi` | ssi | `>majest12j`<br>`>majest12u`<br>`>ssia` | majest12j<br>majest12u<br>ssia |
| `:ssideki` | ssideki |  |  |
| `:ssideki2` | ssideki2 |  |  |
| `:ssideki3` | ssideki3 |  |  |
| `:ssideki4` | ssideki4 |  |  |
| `:ssoldier` | ssoldier | `>psoldier` | psoldier |
| `:ssonicbr` | ssonicbr |  |  |
| `:sspacaho` | sspacaho |  |  |
| `:sspaceat` | sspaceat | `>sspaceat2`<br>`>sspaceat3`<br>`>sspaceatc` | sspaceat2<br>sspaceat3<br>sspaceatc |
| `:sspirits` | sspirits | `>sspiritj`<br>`>sspirtfc` | sspiritj<br>sspirtfc |
| `:ssrj` | ssrj |  |  |
| `:sss` | sss |  |  |
| `:stakwin` | stakwin | `>stakwindev` | stakwindev |
| `:stakwin2` | stakwin2 |  |  |
| `:starjack` | starjack | `>starjacks` | starjacks |
| `:starlstr` | starlstr |  |  |
| `:stcc` | stcc | `>stcca`<br>`>stccb`<br>`>stcco` | stcca<br>stccb<br>stcco |
| `:steelwkr` | steelwkr |  |  |
| `:stkclmns` | stkclmns | `>stkclmnsj` | stkclmnsj |
| `:stratgyx` | stratgyx | `>stratgys`<br>`>strongx` | stratgys<br>strongx |
| `:streetsm` | streetsm | `>streetsm1`<br>`>streetsmj`<br>`>streetsmw` | streetsm1<br>streetsmj<br>streetsmw |
| `:stress` | stress |  |  |
| `:strhoop` | strhoop |  |  |
| `:strider` | strider | `>striderj`<br>`>striderjr`<br>`>striderua`<br>`>strideruc` | striderj<br>striderjr<br>striderua<br>strideruc |
| `:strkfgtr` | strkfgtr | `>strkfgtrj` | strkfgtrj |
| `:subroc3d` | subroc3d |  |  |
| `:suikoenb` | suikoenb |  |  |
| `:superchs` | superchs | `>superchsj`<br>`>superchsp`<br>`>superchsp2`<br>`>superchsu` | superchsj<br>superchsp<br>superchsp2<br>superchsu |
| `:superman` | superman | `>supermanj`<br>`>supermanu` | supermanj<br>supermanu |
| `:superspy` | superspy |  |  |
| `:suprleag` | suprleag |  |  |
| `:suprmrio` | suprmrio | `>skatekds`<br>`>suprmrioa`<br>`>suprmriob2`<br>`>suprmriobl` | skatekds<br>suprmrioa<br>suprmriob2<br>suprmriobl |
| `:suprridr` | suprridr |  |  |
| `:supxevs` | supxevs |  |  |
| `:svc` | svc | `>svcboot`<br>`>svcplus`<br>`>svcplusa`<br>`>svcsplus` | svcboot<br>svcplus<br>svcplusa<br>svcsplus |
| `:svf` | svf | `>jleague`<br>`>jleagueo`<br>`>svfo`<br>`>svs` | jleague<br>jleagueo<br>svfo<br>svs |
| `:swa` | swa | `>swaj` | swaj |
| `:swat` | swat |  |  |
| `:swinggal` | swinggal |  |  |
| `:swtrilgy` | swtrilgy | `>swtrilgya` | swtrilgya |
| `:syvalion` | syvalion | `>syvalionp`<br>`>syvalionu`<br>`>syvalionw` | syvalionp<br>syvalionu<br>syvalionw |
| `:szaxxon` | szaxxon |  |  |
| `:tactcian` | tactcian | `>tactcian2` | tactcian2 |
| `:taiwanmb` | taiwanmb |  |  |
| `:tantr` | tantr | `>tantrkor` | tantrkor |
| `:tcobra2` | tcobra2 | `>ktiger2`<br>`>tcobra2u` | ktiger2<br>tcobra2u |
| `:tdfever` | tdfever | `>tdfever2`<br>`>tdfever2b`<br>`>tdfeverj` | tdfever2<br>tdfever2b<br>tdfeverj |
| `:techbowl` | techbowl |  |  |
| `:teddybb` | teddybb |  |  |
| `:telmahjn` | telmahjn |  |  |
| `:terracre` | terracre | `>terracrea`<br>`>terracren` | terracrea<br>terracren |
| `:terraf` | terraf | `>terrafb`<br>`>terrafj`<br>`>terrafjb`<br>`>terrafu`<br>`>terrafua` | terrafb<br>terrafj<br>terrafjb<br>terrafu<br>terrafua |
| `:tetris` | tetris | `>tetris1`<br>`>tetris1d`<br>`>tetris2`<br>`>tetris2d`<br>`>tetris3`<br>`>tetris3d`<br>`>tetrisbl`<br>`>tetrisse`<br>`>tetrist`<br>`>tetrista`<br>`>tetristh` | tetris1<br>tetris1d<br>tetris2<br>tetris2d<br>tetris3<br>tetris3d<br>tetrisbl<br>tetrisse<br>tetrist<br>tetrista<br>tetristh |
| `:tfrceac` | tfrceac | `>tfrceacj`<br>`>tfrceacjpb` | tfrceacj<br>tfrceacjpb |
| `:thndrbld` | thndrbld | `>thndrbld1` | thndrbld1 |
| `:threeds` | threeds | `>galds`<br>`>threedsa` | galds<br>threedsa |
| `:thundfox` | thundfox | `>thundfoxj`<br>`>thundfoxu` | thundfoxj<br>thundfoxu |
| `:tigeroad` | tigeroad | `>toramich` | toramich |
| `:timeplt` | timeplt | `>spaceplt`<br>`>spaceplta`<br>`>timeplta`<br>`>timepltc` | spaceplt<br>spaceplta<br>timeplta<br>timepltc |
| `:timescan` | timescan | `>timescan1`<br>`>timescan3` | timescan1<br>timescan3 |
| `:timesold` | timesold | `>btlfield`<br>`>btlfieldb`<br>`>timesold1` | btlfield<br>btlfieldb<br>timesold1 |
| `:timetunl` | timetunl |  |  |
| `:titlef` | titlef | `>titlefj`<br>`>titlefu` | titlefj<br>titlefu |
| `:tkoboxng` | tkoboxng |  |  |
| `:tnextspc` | tnextspc | `>tnextspc2`<br>`>tnextspcj` | tnextspc2<br>tnextspcj |
| `:tnk3` | tnk3 | `>tnk3b`<br>`>tnk3j` | tnk3b<br>tnk3j |
| `:tnzs` | tnzs | `>tnzsj`<br>`>tnzsjo`<br>`>tnzso`<br>`>tnzsoa`<br>`>tnzsop`<br>`>tnzsuo` | tnzsj<br>tnzsjo<br>tnzso<br>tnzsoa<br>tnzsop<br>tnzsuo |
| `:togenkyo` | togenkyo |  |  |
| `:tokio` | tokio | `>tokiob`<br>`>tokioo`<br>`>tokiou` | tokiob<br>tokioo<br>tokiou |
| `:tokisens` | tokisens | `>tokisensa` | tokisensa |
| `:tokyogal` | tokyogal | `>tokimbsj` | tokimbsj |
| `:topgun` | topgun |  |  |
| `:tophuntr` | tophuntr |  |  |
| `:topland` | topland | `>toplandj` | toplandj |
| `:topskatr` | topskatr | `>topskatrj`<br>`>topskatru`<br>`>topskatruo` | topskatrj<br>topskatru<br>topskatruo |
| `:topspeed` | topspeed | `>fullthrl`<br>`>topspeedu` | fullthrl<br>topspeedu |
| `:toryumon` | toryumon |  |  |
| `:toutrun` | toutrun | `>toutrun1`<br>`>toutrun2`<br>`>toutrun3`<br>`>toutrunj`<br>`>toutrunj1` | toutrun1<br>toutrun2<br>toutrun3<br>toutrunj<br>toutrunj1 |
| `:tp84` | tp84 | `>tp84a`<br>`>tp84b` | tp84a<br>tp84b |
| `:tpgolf` | tpgolf |  |  |
| `:trackfld` | trackfld | `>hipoly`<br>`>hyprolym`<br>`>hyprolyma`<br>`>hyprolymb`<br>`>hyprolymba`<br>`>trackfldc`<br>`>trackfldu` | hipoly<br>hyprolym<br>hyprolyma<br>hyprolymb<br>hyprolymba<br>trackfldc<br>trackfldu |
| `:trally` | trally |  |  |
| `:tranqgun` | tranqgun |  |  |
| `:transfrm` | transfrm | `>astrofl` | astrofl |
| `:travrusa` | travrusa |  |  |
| `:travusa` | travusa | `>motorace`<br>`>mototour` | motorace<br>mototour |
| `:triplew1` | triplew1 |  |  |
| `:triplew2` | triplew2 |  |  |
| `:troangel` | troangel | `>newtangl` | newtangl |
| `:trojan` | trojan | `>trojana`<br>`>trojanb`<br>`>trojanj`<br>`>trojanjo`<br>`>trojanlt`<br>`>trojanr` | trojana<br>trojanb<br>trojanj<br>trojanjo<br>trojanlt<br>trojanr |
| `:trstar` | trstar | `>prmtmfgt`<br>`>prmtmfgto`<br>`>trstarj`<br>`>trstaro`<br>`>trstaroj` | prmtmfgt<br>prmtmfgto<br>trstarj<br>trstaro<br>trstaroj |
| `:tturf` | tturf | `>tturfu` | tturfu |
| `:tubep` | tubep | `>tubepb` | tubepb |
| `:turbo` | turbo | `>turboa`<br>`>turbob`<br>`>turbobl`<br>`>turboc`<br>`>turbod`<br>`>turboe` | turboa<br>turbob<br>turbobl<br>turboc<br>turbod<br>turboe |
| `:turfmast` | turfmast |  |  |
| `:turtles` | turtles | `>600`<br>`>turpin`<br>`>turpinnv`<br>`>turpins` | 600<br>turpin<br>turpinnv<br>turpins |
| `:tutankhm` | tutankhm | `>tutankhmb`<br>`>tutankhms` | tutankhmb<br>tutankhms |
| `:tvtcrst2` | tvtcrst2 |  |  |
| `:twcup98` | twcup98 | `>twsoc98` | twsoc98 |
| `:twinbee` | twinbee |  |  |
| `:twinbeeb` | twinbeeb |  |  |
| `:twinhawk` | twinhawk | `>daisenpu`<br>`>twinhawku` | daisenpu<br>twinhawku |
| `:twinqix` | twinqix |  |  |
| `:twinspri` | twinspri |  |  |
| `:twinsqua` | twinsqua |  |  |
| `:twsoc96` | twsoc96 |  |  |
| `:uccops` | uccops | `>uccopsar`<br>`>uccopsaru`<br>`>uccopsj`<br>`>uccopsu` | uccopsar<br>uccopsaru<br>uccopsj<br>uccopsu |
| `:uchuuai` | uchuuai |  |  |
| `:ufosensi` | ufosensi | `>ufosensib` | ufosensib |
| `:ultracin` | ultracin |  |  |
| `:ultramhm` | ultramhm |  |  |
| `:undrfire` | undrfire | `>undrfirej`<br>`>undrfireu` | undrfirej<br>undrfireu |
| `:uniwars` | uniwars | `>asideral`<br>`>galemp`<br>`>gteikoku`<br>`>pajaroes`<br>`>skyraidr`<br>`>spacbat2`<br>`>spacbatt`<br>`>spacempr` | asideral<br>galemp<br>gteikoku<br>pajaroes<br>skyraidr<br>spacbat2<br>spacbatt<br>spacempr |
| `:unsquad` | unsquad | `>area88`<br>`>area88r` | area88<br>area88r |
| `:upndown` | upndown | `>upndownu` | upndownu |
| `:vangrd2` | vangrd2 |  |  |
| `:vanguard` | vanguard | `>vanguardc`<br>`>vanguardg`<br>`>vanguardj` | vanguardc<br>vanguardg<br>vanguardj |
| `:vanilla` | vanilla | `>finalbny` | finalbny |
| `:varth` | varth | `>varthj`<br>`>varthjr`<br>`>varthr1`<br>`>varthu` | varthj<br>varthjr<br>varthr1<br>varthu |
| `:vcop` | vcop | `>vcopa` | vcopa |
| `:vcop2` | vcop2 |  |  |
| `:vf` | vf |  |  |
| `:vf2` | vf2 | `>vf2a`<br>`>vf2b`<br>`>vf2o` | vf2a<br>vf2b<br>vf2o |
| `:vf3` | vf3 | `>vf3a`<br>`>vf3c`<br>`>vf3tb` | vf3a<br>vf3c<br>vf3tb |
| `:vfkids` | vfkids |  |  |
| `:vfremix` | vfremix |  |  |
| `:vhunt2` | vhunt2 | `>vhunt2d`<br>`>vhunt2r1` | vhunt2d<br>vhunt2r1 |
| `:victroad` | victroad | `>dogosoke` | dogosoke |
| `:viewpoin` | viewpoin | `>viewpoinp` | viewpoinp |
| `:vigilant` | vigilant | `>vigilanta`<br>`>vigilantb`<br>`>vigilantc`<br>`>vigilantd`<br>`>vigilantg`<br>`>vigilanto` | vigilanta<br>vigilantb<br>vigilantc<br>vigilantd<br>vigilantg<br>vigilanto |
| `:viofight` | viofight | `>viofightj`<br>`>viofightu` | viofightj<br>viofightu |
| `:vliner` | vliner | `>vliner53`<br>`>vliner54`<br>`>vliner6e`<br>`>vliner7e` | vliner53<br>vliner54<br>vliner6e<br>vliner7e |
| `:vmahjong` | vmahjong |  |  |
| `:volfied` | volfied | `>volfiedj`<br>`>volfiedjo`<br>`>volfiedu`<br>`>volfieduo` | volfiedj<br>volfiedjo<br>volfiedu<br>volfieduo |
| `:von` | von | `>vonj`<br>`>vonr`<br>`>vonu` | vonj<br>vonr<br>vonu |
| `:von2` | von2 | `>von254g`<br>`>von2a`<br>`>von2o` | von254g<br>von2a<br>von2o |
| `:vr` | vr | `>vformula` | vformula |
| `:vs2` | vs2 | `>vs215`<br>`>vs215o` | vs215<br>vs215o |
| `:vs298` | vs298 | `>vs29815` | vs29815 |
| `:vs2v991` | vs2v991 | `>vs299`<br>`>vs29915`<br>`>vs29915a`<br>`>vs29915j`<br>`>vs299a`<br>`>vs299j` | vs299<br>vs29915<br>vs29915a<br>vs29915j<br>vs299a<br>vs299j |
| `:vsav` | vsav | `>vsava`<br>`>vsavb`<br>`>vsavd`<br>`>vsavh`<br>`>vsavj`<br>`>vsavu` | vsava<br>vsavb<br>vsavd<br>vsavh<br>vsavj<br>vsavu |
| `:vsav2` | vsav2 | `>vsav2d` | vsav2d |
| `:vsbball` | vsbball | `>vsbballj`<br>`>vsbballja`<br>`>vsbballjb` | vsbballj<br>vsbballja<br>vsbballjb |
| `:vsfdf` | vsfdf |  |  |
| `:vsgongf` | vsgongf | `>ringfgt`<br>`>ringfgta` | ringfgt<br>ringfgta |
| `:vsgradus` | vsgradus |  |  |
| `:vsgshoe` | vsgshoe |  |  |
| `:vsmahjng` | vsmahjng |  |  |
| `:vspinbal` | vspinbal | `>vspinbalj` | vspinbalj |
| `:vsskykid` | vsskykid |  |  |
| `:vsslalom` | vsslalom |  |  |
| `:vssoccer` | vssoccer | `>vssoccera` | vssoccera |
| `:vstennis` | vstennis | `>vstennisa`<br>`>vstennisb` | vstennisa<br>vstennisb |
| `:vstriker` | vstriker | `>vstrikero` | vstrikero |
| `:vulgus` | vulgus | `>mach9`<br>`>vulgusa`<br>`>vulgusj` | mach9<br>vulgusa<br>vulgusj |
| `:wakuwak7` | wakuwak7 |  |  |
| `:wantsega` | wantsega |  |  |
| `:warriorb` | warriorb |  |  |
| `:wasafari` | wasafari |  |  |
| `:waterski` | waterski |  |  |
| `:waverunr` | waverunr |  |  |
| `:wb3` | wb3 | `>wb31`<br>`>wb32`<br>`>wb33`<br>`>wb34`<br>`>wb35` | wb31<br>wb32<br>wb33<br>wb34<br>wb35 |
| `:wbml` | wbml | `>wbmljo`<br>`>wbmlvc` | wbmljo<br>wbmlvc |
| `:wboy` | wboy | `>wboy2`<br>`>wboy3`<br>`>wboy6`<br>`>wboysys2`<br>`>wboysys2a` | wboy2<br>wboy3<br>wboy6<br>wboysys2<br>wboysys2a |
| `:wcatcher` | wcatcher |  |  |
| `:wecleman` | wecleman | `>weclemana`<br>`>weclemanb`<br>`>weclemanc` | weclemana<br>weclemanb<br>weclemanc |
| `:wgp` | wgp | `>wgp2`<br>`>wgpj`<br>`>wgpjoy`<br>`>wgpjoya`<br>`>wgpu` | wgp2<br>wgpj<br>wgpjoy<br>wgpjoya<br>wgpu |
| `:wh1` | wh1 |  |  |
| `:wh2` | wh2 |  |  |
| `:wh2j` | wh2j |  |  |
| `:whp` | whp |  |  |
| `:willow` | willow | `>willowj`<br>`>willowu`<br>`>willowuo` | willowj<br>willowu<br>willowuo |
| `:wilytowr` | wilytowr | `>atomboy`<br>`>atomboya` | atomboy<br>atomboya |
| `:wingwar` | wingwar | `>wingwar360`<br>`>wingwarj`<br>`>wingwaru` | wingwar360<br>wingwarj<br>wingwaru |
| `:winterht` | winterht |  |  |
| `:wiping` | wiping | `>rugrats` | rugrats |
| `:wizzquiz` | wizzquiz | `>wizzquiza` | wizzquiza |
| `:wjammers` | wjammers |  |  |
| `:wmatch` | wmatch |  |  |
| `:wof` | wof | `>wofa`<br>`>wofj`<br>`>wofr1`<br>`>wofu` | wofa<br>wofj<br>wofr1<br>wofu |
| `:wofch` | wofch |  |  |
| `:worldwar` | worldwar |  |  |
| `:wpksoc` | wpksoc | `>kftgoal` | kftgoal |
| `:wrecking` | wrecking |  |  |
| `:wrestwar` | wrestwar | `>wrestwar1`<br>`>wrestwar2` | wrestwar1<br>wrestwar2 |
| `:wwallyj` | wwallyj | `>wwallyja`<br>`>wwallyja3p` | wwallyja<br>wwallyja3p |
| `:wwanpanm` | wwanpanm |  |  |
| `:wwestern` | wwestern | `>wwestern1` | wwestern1 |
| `:wwmarine` | wwmarine |  |  |
| `:wyvernf0` | wyvernf0 | `>wyvernf0a` | wyvernf0a |
| `:xmcota` | xmcota | `>xmcotaa`<br>`>xmcotaar1`<br>`>xmcotaar2`<br>`>xmcotab`<br>`>xmcotah`<br>`>xmcotahr1`<br>`>xmcotaj`<br>`>xmcotaj1`<br>`>xmcotaj2`<br>`>xmcotaj3`<br>`>xmcotajr`<br>`>xmcotar1`<br>`>xmcotar1d`<br>`>xmcotau` | xmcotaa<br>xmcotaar1<br>xmcotaar2<br>xmcotab<br>xmcotah<br>xmcotahr1<br>xmcotaj<br>xmcotaj1<br>xmcotaj2<br>xmcotaj3<br>xmcotajr<br>xmcotar1<br>xmcotar1d<br>xmcotau |
| `:xmultipl` | xmultipl | `>xmultiplm72` | xmultiplm72 |
| `:xmvsf` | xmvsf | `>xmvsfa`<br>`>xmvsfar1`<br>`>xmvsfar2`<br>`>xmvsfar3`<br>`>xmvsfb`<br>`>xmvsfh`<br>`>xmvsfj`<br>`>xmvsfjr1`<br>`>xmvsfjr2`<br>`>xmvsfjr3`<br>`>xmvsfr1`<br>`>xmvsfu`<br>`>xmvsfu1d`<br>`>xmvsfur1`<br>`>xmvsfur2` | xmvsfa<br>xmvsfar1<br>xmvsfar2<br>xmvsfar3<br>xmvsfb<br>xmvsfh<br>xmvsfj<br>xmvsfjr1<br>xmvsfjr2<br>xmvsfjr3<br>xmvsfr1<br>xmvsfu<br>xmvsfu1d<br>xmvsfur1<br>xmvsfur2 |
| `:yattrmnp` | yattrmnp |  |  |
| `:yesnoj` | yesnoj |  |  |
| `:yiear` | yiear | `>yiear2`<br>`>yieartf` | yiear2<br>yieartf |
| `:yosimoto` | yosimoto | `>yosimotm` | yosimotm |
| `:youjyudn` | youjyudn |  |  |
| `:yuyugogo` | yuyugogo |  |  |
| `:zaxxon` | zaxxon |  |  |
| `:zedblade` | zedblade |  |  |
| `:zerogun` | zerogun | `>zeroguna`<br>`>zerogunaj`<br>`>zerogunj` | zeroguna<br>zerogunaj<br>zerogunj |
| `:zintrckb` | zintrckb |  |  |
| `:znpwfv` | znpwfv | `>znpwfvt` | znpwfvt |
| `:zookeep` | zookeep | `>zookeep2`<br>`>zookeep3`<br>`>zookeepbl` | zookeep2<br>zookeep3<br>zookeepbl |
| `:zunkyou` | zunkyou |  |  |
| `:zupapa` | zupapa |  |  |

</details>



---

Thank you for joining GameDataBase! Your support inspires us to keep improving and sharing exciting updates.
