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

# Guide for tags
GameDataBase uses a simple tag taxonomy to classify games in as many ways as possible. These tags main purpose is to improve sorting and searching. Of course this list will be updated as new ones emerge from darkness.

**Stand alone tags (#)**
This kind of tags defines useful uncommon attributes we can find in multiple games of multiple systems. They are intended to be visible. Let's imagine the following tags inside little color labels before (or after) the line of their respective titles in a list. These are:

**#mameparent** (MAME parent file)
**#bios** (BIOS game)
**#licensed** (Licensed)
**#rerelease** (Re-release)
**#qsound** (QSound)
**#nsfw** (NSFW content)

**Group tags (#)+(:)+(>)**
This kind of tags uses subcategories to organize more complex things. There are three levels. The first (#) is for the main attribute, the second (:) is its value, and the third (>) is a subvalue. This subvalue is only specific information about their most inmediate (:) value.

Several values and subvalues can be added for every main attribute. So, if we have **#genre:sports>wrestling:fighting**, we have two genre (_sports_ and _fighting_) and one subgenre only for the _sports_ tag (_wrestling_). There are:

**#input** (Input system)
**:joystick** (Joystick)
**:doublejoystick** (Double joystick)
**:rotary** (Rotary joystick)
**:stick** (Stick)
**:twinstick** (Twin Stick)
**:trackball** (Trackball)
**:paddle** (Paddle)
**:spinner** (Spinner)
**:wheel** (Wheel)
**:dial** (Dial)
**:lightgun** (Lightgun)
**:puncher** (Puncher)
**:motion** (Motion detection)
**:buttons** (In-game buttons)
**:keys:** (Keyboard keys)
**:pedals** (Pedals)

**#input:joystick** / **#input:doublejoystick**
**\>2h** (2-way horizontal)
**\>2v** (2-way vertical)
**\>3** (3-way)
**\>4** (4-way)
**\>8** (8-way)

**#input:buttons** = **#input:pedals** = **#input:keys**
**\>1** (1)
**\>2** (2)
**\>3** (3)
**\>4** (4)
**\>6** (6)
**\>11** (11)
**\>12** (12)
**\>19** (19)
**\>23** (23)
**\>pneumatic** (Pneumatic buttons)

**#players** (Maximum number of players)
**:1** (1 player)
**:2** (2 players)
**:3** (3 players)
**:4** (4 players)
**:6** (6 players)
**:8** (8 players)
**:10** (10 players)
**:coop** (Cooperative)
**:vs** (Versus)
**:alt** (Alternating)

**#tate** (Vertical screen)
**:cw** (Clockwise)
**:ccw** (Counter clockwise)

**#multigame** (Multigame)
**:compilation** (Compilation)

**#unlicensed** (Unlicensed)
**:bootleg** (Bootleg)
**:hack** (Hack)
**:translation** (Translation)

**#genre** (Genre)
**:action** (Action)
**:platformer** (Platformer)
**:fighting** (Fighting)
**:brawler** (Beat'em up)
**:rpg** (RPG)
**:sports** (Sports)
**:shmup** (Shoot'em up)
**:puzzle** (Puzzle)
**:racing** (Racing)
**:railshooter** (Rail shooter)
**:blockbreaker** (Block breaker)
**:maze** (Maze)
**:adventure** (Adventure)
**:shooting** (Shooting gallery)
**:shooter** (Shooter)
**:runandgun** (Run and gun)
**:hackandslash** (Hack and slash)
**:dungeoncrawler** (Dungeon crawler)
**:pinball** (Pinball)
**:strategy** (Strategy)
**:roguelite** (Roguelite)
**:flightsim** (Flight simulator)
**:trainsim** (Train simulator)
**:datesim** (Date simulator)
**:lifesim** (Life simulator)
**:farmsim** (Farm simulator)
**:petsim** (Pet simulator)
**:board** (Board game)
**:quiz** (Quiz game)
**:fishing** (Fishing)
**:cooking** (Cooking)
**:cardgame** (Card game)
**:cards** (Classic cards)
**:hanafuda** (Hanafuda)
**:billiard** (Billiard)
**:jackpot** (Jackpot)
**:pachinko** (Pachinko)
**:minigames** (Mini games)
**:kiddieride** (Kiddie ride)
**:bowling** (Bowling)
**:mogurataiji** (Whac-A-Mole)
**:visualnovel** (Visual novel)
**:god** (God game)
**:derby** (Derby horse ride)
**:vending** (Vending machine)
**:redemption** (Redemption)
**:mechanical** (Mechanical)
**:educational** (Educational)
**:marketing** (Marketing)
**:drawing** (Drawing)
**:application** (Application)
**:test** (Test)
**:sound** (Only sound)

**#genre:sports**
**\>soccer** (Soccer)
**\>basketball** (Basketball)
**\>baseball** (Baseball)
**\>volleyball** (Volleyball)
**\>tennis** (Tennis)
**\>football** (American football)
**\>dodgeball** (Dodgeball)
**\>hockey** (Ice Hockey)
**\>skiing** (Skiing)
**\>skateboarding** (Skateboarding)
**\>formula1** (Formula 1)
**\>rally** (Rally)
**\>motogp** (Moto GP)
**\>motocross** (Motocross)
**\>golf** (Golf)
**\>boxing** (Boxing)
**\>kickboxing** (Kick Boxing)
**\>wrestling** (Wrestling)
**\>sumo** (Sumo)
**\>judo** (Judo)
**\>decathlon** (Decathlon)
**\>snowboarding** (Snowboarding)
**\>archery** (Archery)
**\>pingpong** (Ping Pong)
**\>rowing** (Rowing)
**\>swimming** (Swimming)
**\>squash** (Squash)

**#genre:board**
**\>chess** (Chess)
**\>shougi** (Shōgi)
**\>go** (Go)
**\>mahjong** (Mahjong)
**\>reversi** (Reversi)

**#genre:rpg**
**\>a** (Action RPG)
**\>j** (JRPG)
**\>s** (Strategy RPG)

**#genre:shmup**
**\>danmaku** (Bullet hell)
**\>h** (Horizontal shoot'em up)
**\>v** (Vertical shoot'em up)

**#genre:puzzle**
**\>drop** (Drop pieces puzzle)

**#genre:racing**
**\>combat** (Combat racing)

**#genre:shooter**
**\>3p** (Third person shooter)

**#genre:vending**
**\>popcorn** (Popcorn)
**\>purikura** (Photo stickers)

**#lang** (Language)
**:ja** (Japanese)
**:en** (English)
**:es** (Spanish)
**:fr** (French)
**:pt** (Portuguese)
**:de** (German)
**:it** (Italian)
**:sv** (Swedish)
**:nl** (Dutch)
**:no** (Norwegian)
**:fi** (Finnish)
**:cs** (Czech)
**:sl** (Slovenian)
**:kh** (Simplified Chinese)
**:kr** (Korean)

**#port** (Ported from another system)
**:arcade** (Arcade)
**:c64** (Commodore 64)
**:amiga** (Commodore Amiga)
**:apple2** (Apple II)
**:mac** (Apple Macintosh)
**:pc88** (NEC PC-8801)
**:msx** (MSX)
**:sg1000** (SEGA SG-1000)
**:gamegear** (SEGA Game Gear)
**:mark3** (SEGA Mark III/Master System)
**:megadrive** (SEGA MegaDrive/Genesis)
**:famicom** (Nintendo Famicom/NES)
**:superfamicom** (Nintendo Super Famicom/SNES)
**:gameboy** (Nintendo Game Boy)
**:playstation** (Sony PlayStation)

**#addon** (Specific external hardware recommended or required)
**:3dglasses** (SEGA 3-D Glasses)
**:fmsoundunit** (SEGA FM Sound Unit)
**:lightphaser** (SEGA Light Phaser)
**:paddlecontrol** (SEGA Paddle Control)
**:sportspad** (SEGA Sports Pad)
**:xe1ap** (Dempa XE-1 AP)
**:supergameboy** (Nintendo Super GameBoy 1&2)
**:sfcmultitap** (Nintendo Super Famicom Multitap)
**:gamelinkcable** (Nintendo Tsūshin Cable / Game Link Cable)
**:fourplayeradapter** (Nintendo Four Player Adapter)
**:pocketcamera** (Nintendo Pocket Camera / GameBoy Camera)
**:pocketprinter** (Nintendo Pocket Printer / GameBoy Printer)
**:transferpak** (Nintendo Transfer Pak)
**:barcodeboy** (NAMCOT Barcode Boy)
**:reeladapter** (Bandai Reel Adapter)
**:workboy** (Fabtek WorkBoy)
**:ngplink** (SNK NeoGeo Pocket Link Cable)
**:radiounitwireless** (SNK Musen Unit / Radio Unit Wireless Adaptor)
**:setsuzoku** (SNK NeoGeo Pocket-Dreamcast Setsuzoku Cable)

**#addon:fmsoundunit**
**\>hidden** (Hidden FM Sound Unit)

**#addon:3dglasses**
**\>hidden** (Hidden 3-D Glasses)

**#gb** (GameBoy)
**:mono** (Monochrome)
**:color** (Color)
**:sgb** (Super GameBoy / Super GameBoy 2)
**:np** (Nintendo Power GB-Memory Cartridge)

**#sfc** (Super Famicom)
**:np** (Nintendo Power SF-Memory Cassette)

**#ngp** (NeoGeo Pocket)
**:mono** (Monochrome)
**:color** (Color)

**#rev** (Revision)
**:1** (1)
**:2** (2)
**:a** (A)
**:b** (B)
**:c** (C)
**:g** (G)

**#set** (Set)
**:1** (1)
**:2** (2)

**#unfinished** (Unfinished)
**:beta** (Beta)
**:proto** (Prototype)
**:demo** (Demo)
**:sample** (Sample)
**:debug** (Debug)

**#unfinished:beta**
**\>1**
**\>2**
**\>3**
**\>alt** (Alternative)

**#unfinished:demo**
**\>1**
**\>2**

**#clone** (Clone)
**:mario** (Mario)
**:sonic** (Sonic)
**:sf2** (Street Fighter II)
**:tetris** (Tetris)

**#embed** (Embed extra hardware inside game)
**:battery** (Battery)
**:ram** (Extra RAM)
**:gbkiss** (Hudson GB Kiss)
**:pocketsonar** (Bandai Pocket Sonar)

**#save** (The way you can save your progress)
**:password** (Password)
**:backup** (Backup)

**#3d** (Game uses some kind of 3D effect)
**:stereoscopic** (Stereoscopic 3D)
**:anaglyph** (Anaglyph 3D)

**#arcadeboard** (Arcade board)
**:capcom** (All CAPCOM boards)
**:sega** (All SEGA boards)
**:irem** (All Irem boards)
**:toaplan** (All Toaplan boards)
**:jaleco** (All Jaleco boards)

**#arcadeboard:capcom**
**\>cps** (CAPCOM CP System)
**\>cpsdash** (CAPCOM CP System Dash)
**\>cpschanger** (CAPCOM CP System Changer)
**\>cps2** (CAPCOM CP System II)
**\>cps3** (CAPCOM CP System III)

**#arcadeboard:sega**
**\>1** (SEGA System 1)
**\>2** (SEGA System 2)
**\>16** (SEGA System 16)
**\>16a** (SEGA System 16A)
**\>16b** (SEGA System 16B)
**\>16c** (SEGA System 16C)
**\>18** (SEGA System 18)
**\>24** (SEGA System 24)
**\>32** (SEGA System 32)
**\>m32** (SEGA System Multi 32)
**\>c** (SEGA System C)
**\>c2** (SEGA System C-2)
**\>e** (SEGA System E)
**\>x** (SEGA X Board)
**\>y** (SEGA Y Board)
**\>stv** (SEGA Titan Video)

**#arcadeboard:irem**
**\>m10** (Irem M10)
**\>m15** (Irem M15)
**\>m27** (Irem M27)
**\>m52** (Irem M52)
**\>m57** (Irem M57)
**\>m58** (Irem M58)
**\>m62** (Irem M62)
**\>m63** (Irem M63)
**\>m72** (Irem M72)
**\>m75** (Irem M75)
**\>m81** (Irem M81)
**\>m82** (Irem M82)
**\>m84** (Irem M84)
**\>m90** (Irem M90)
**\>m92** (Irem M92)
**\>m97** (Irem M97)
**\>m107** (Irem M107)

**#arcadeboard:toaplan**
**>1** (Toaplan Version 1)
**>2** (Toaplan Version 2)

**arcadeboard:jaleco**
**\>ms1** (Jaleco Mega System 1)

**#format**
**:mycard** (SEGA My Card)
**:thesegacard** (The SEGA Card)
**:themegacartridge** (The Mega Cartridge Japan version)
**:silvercartridge** (Silver Cartridge)
**:goldcartridge** (Gold Cartridge)

**#format:goldcartridge**
**\>1m**
**\>2m**
**\>4m**

**#reboxed** (Reboxed)
**:bluebox** (Blue Box)
**:purplebox** (Purple Box)
**:classicedition** (Classic Edition)
**:kixxedition** (Kixx Edition)
**:playerschoice** (Players Choice / Million Seller)
**:classicserie** (Game Boy Classic Serie)
**:disneysclassic** (Disney's Classic Video Games)
**:snkbestcollection** (Best Collection)

**Searching tags ($)**
The goal of this kind of tags is just for searching purposes. They are designed to be internal (invisible) to provide additional information we can unlock when we search for it.

**Commercial tags for searching purposes**
This kind of tags provides us information about famous franchises and characters. For example, if we search for games based on Alien movie franchise and just write "alien", we probably get a huge list of games that have nothing to do with the franchise like _Alien Soldier_, _Alien Storm_ or _Alien Syndrome_. However, this tag unlocks the "did you mean" feature. This can be used as an additional useful search tool.

These tags even allow us to search for famous characters like Dracula. If we were to write "dracula" in a regular game search engine, we would only get games which contans the word _Dracula_, but there would be no _Castlevania_ or _Master of Darkness_. This tag can solve that. More tags will be added as soon new interesting franchises appeared in the process. At the end they will be a lot. For now, take a look to these ones:

**$alien** (Alien)
**$asterix** (Astérix & Obélix)
**$batman** (Batman)
**$castlevania** (Castlevania/Akumajō Dracula/悪魔城ドラキュラ)
**$compatihero** (Compati Hero)
**$disney** (Walt Disney)
**$donald** (Donald Duck)
**$dracula** (Dracula)
**$d&d** (Dungeons & Dragons)
**$gundam** (Gundam)
**$jurassicpark** (Jurassic Park)
**$kuniokun** (Kunio-kun/くにおくん)
**$looneytunes** (Looney Tunes)
**$mario** (Mario)
**$marvel** (Marvel Comics)
**$mickey** (Mickey Mouse)
**$pacman** (Pac-Man)
**$sherlock** (Sherlock Holmes)
**$simpsons** (The Simpsons)
**$smurfs** (The Smurfs/Les Schtroumpfs/Los Pitufos)
**$sonic** (Sonic The Hedgehog)
**$spiderman** (Spider-Man)
**$starwars** (Star Wars)
**$superman** (Superman)
**$wonderboy** (Wonder Boy)
**$xmen** (X-Men)
**$zillion** (Akai Kōdan Zillion/赤い光弾ジリオン)

**Keyword tags**
In the same way, these tags are just for searching purposes based on keywords. If we look for games based on a movie or a manga, this kind of tags allow you to find more easier if implemented. Values of the right are like synonyms. Infinite possibilities. We can add tags like _ninja_, _cute_, _gore_ or, don't know, _rockandroll_. But for now, there's only these:

**$manganime** /manga/anime
**$movie** /cinema/film
**$celeb** /celebrity/famous
**$lightgun**

Please, be welcome and enjoy. Thank you very much for coming. Pretty nice things to come.
