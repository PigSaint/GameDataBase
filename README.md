# GameDataBase

GameDataBase project aims to provide the most detailed information about every videogame (console, computer and arcade) for sorting purposes. Goal is to unify in one place all available useful information for emulation projects like MiSTer, to make possible more efficient and specific searchs. GameDataBase will be published in different files (by platform).

These lists are basically table files made of metadata fields separated by commas (CSV) as following:

- Screen title @ Exact (title in original character set, if applicable. This is particulary useful for Japanese titles usually transcribed in roman characters. Purist, curious and of course Japanese people will enjoy this)
- Cover Title @ Exact (if applicable)
- ID (to identify multiple versions of the same game)
- Date in format YYYY adding MM and DD if known (YYYY-MM-DD)
- Developer
- Publisher
- Tags with additional information about the game
- MAME filename
- MD5 hash
- SHA1 hash
- SHA256 hash
- SHA512 hash

**Stand alone tags (#)**

#licensed=Licensed
#compilation=Compilation
#mameparent=MAME Parent
#tate=Vertical screen
#multigame=Multigame
#lightgun=Lightgun
#spinner=Spinner

**Group tags (#)+(:)+(>)**

**#players**=Maximum number of players
**:1**=1 player
**:2**=2 players
**:3**=3 players
**:4**=4 players
**:6**=6 players
**:8**=8 players
**:10**=10 players

**#multiplayer**=Relation between players inside the game
**:coop**=Cooperative
**:vs**=Versus
**:alt**=Alternating

**#way**=Number of joystick ways to move
**:0**=No joystick
**:2h**=2-way horizontal
**:2v**=2-way vertical
**:4**=4-way
**:8**=8-way

**#buttons**=Number of in-game buttons
**:0**=No buttons
**:1**=1 button
**:2**=2 buttons
**:3**=3 buttons
**:4**=4 buttons
**:6**=6 buttons

**#genre**=Genre of the game
**:action**=Action
**:platformer**=Platformer
**:adventure**=Adventure
**:fighting**=Fighting
**:brawler**=Beat'em up
**:shmup**=Shoot'em up
**:shootinggallery**=Shooting gallery
**:runandgun**=Run and gun
**:hackandslash**=Hack and slash
**:puzzle**=Puzzle
**:maze**=Maze
**:board**=Board game
**:minigames**=Mini games
**:kiddieride**=Kiddie ride
**:strategy**=Strategy
**:god**=God game
**:redemption**=Redemption
**:datesim**=Date simulator
**:flightsim**=Flight simulator
**:railshooter**=Rail shooter
**:racing**=Racing
**:mogurataiji**=Whac-A-Mole
**:quiz**=Quiz game
**:blockbreaker**=Block breaker
**:rpg**=RPG
**:sports**=Sports

**#genre:sports**
**\>soccer**=Soccer
**\>basketball**=Basketball
**\>baseball**=Baseball
**\>volleyball**=Volleyball
**\>tennis**=Tennis
**\>football**=American football
**\>hockey**=Ice Hockey
**\>ski**=Skiing
**\>formula1**=Formula 1
**\>motogp**=Moto GP
**\>golf**=Golf
**\>boxing**=Boxing
**\>wrestling**=Wrestling
**\>decathlon**=Decathlon
**\>billiard**=Billiard
**\>chess**=Chess
**\>mahjong**=Mahjong

**#genre:rpg**
**\>a**=Action RPG
**\>j**=JRPG

**#genre:shmup**
**\>danmaku**=Bullet hell

**#port**=Ported from another system
**:arcade**=Arcade
**:c64**=Commodore 64
**:amiga**=Commodore Amiga
**:apple2**=Apple II
**:pc88**=NEC PC-8801
**:msx**=MSX
**:gamegear**=SEGA Game Gear
**:megadrive**=SEGA MegaDrive/Genesis
**:famicom**=Nintendo Famicom/NES
**:superfamicom**=Super Famicom/SNES

**#addon**=Specific external hardware recommended or required
**:3dglasses**=SEGA 3-D Glasses
**:fmsoundunit**=SEGA FM Sound Unit
**:lightphaser**=SEGA Light Phaser
**:paddlecontrol**=SEGA Paddle Control
**:sportspad**=SEGA Sports Pad

**#embed**=Embed extra hardware inside game
**:ram**=Extra RAM

**#save**=The way you can save your progress
**:backup**=Battery back-up
**:password**=Password

**#lang**=Language
**:ja**=Japanese
**:en**=English
**:es**=Spanish
**:fr**=French
**:pt**=Portuguese
**:de**=German
**:it**=Italian
**:sv**=Swedish
**:nl**=Dutch
**:no**=Norwegian

**#3d**=Game uses some kind of 3D effect
**:stereoscopic**=Stereoscopic 3D
**:anaglyph**=Anaglyph 3D

**#cps**=CAPCOM CP Systems
**:cps1**=CAPCOM CP System
**:cpsdash**=CAPCOM CP System Dash
**:cpschanger**=CAPCOM CP System Changer
**:cps2**=CAPCOM CP System II
**:cps3**=CAPCOM CP System III

**#edition**=Edition
**:blue**=Blue
**:purple**=Purple
**:kixx**=Kixx

**Commercial tags for searching purposes ($)**

**$alien**="Alien"
**$asterix**="Astérix & Obélix"
**$batman**="Batman"
**$disney**="Walt Disney"
**$donald**="Donald Duck"
**$dracula**="Dracula"
**$d&d**="Dungeons & Dragons"
**$jurassicpark**="Jurassic Park"
**$loneytunes**="Looney Tunes"
**$marvel**="Marvel Comics"
**$mickey**="Mickey Mouse"
**$pacman**="Pac-Man"
**$sherlock**="Sherlock Holmes"
**$simpsons**="The Simpsons"
**$smurfs**="The Smurfs"="Les Schtroumpfs"="Los Pitufos"
**$sonic**="Sonic The Hedgehog"
**$spiderman**="Spider-Man"
**$starwars**="Star Wars"
**$superman**="Superman"
**$wonderboy**="Wonder Boy"
**$xmen**="X-Men"
**$zillion**="Akai Kōdan Zillion"="赤い光弾ジリオン"

**Keyword tags for searching purposes ($)**

**$manganime**=manga=anime
**$movie**=cinema=film
**$celeb**=celebrity=famous
**$licensed**=license=licence
