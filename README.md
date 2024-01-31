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
**#tate** (Vertical screen)
**#spinner** (Spinner)
**#licensed** (Licensed)
**#unauthorized** (Unauthorized)
**#rerelease** (Re-release)
**#qsound** (QSound)

**Group tags (#)+(:)+(>)**
This kind of tags uses subcategories to organize more complex things. There are three levels. The first (#) is for the main attribute, the second (:) is its value, and the third (>) is a subvalue. This subvalue is only specific information about their most inmediate (:) value.

Several values and subvalues can be added for every main attribute. So, if we have **#genre:sports>wrestling:fighting**, we have two genre (_sports_ and _fighting_) and one subgenre only for the _sports_ tag (_wrestling_). There are:

**#players** (Maximum number of players)
**:1** (1 player)
**:2** (2 players)
**:3** (3 players)
**:4** (4 players)
**:6** (6 players)
**:8** (8 players)
**:10** (10 players)

**#multiplayer** (Relation between players inside the game)
**:coop** (Cooperative)
**:vs** (Versus)
**:alt** (Alternating)

**#way** (Number of joystick ways to move)
**:0** (No joystick))
**:2h** (2-way horizontal)
**:2v** (2-way vertical)
**:4** (4-way)
**:8** (8-way)

**#buttons** (Number of in-game buttons)
**:0** (No buttons)
**:1** (1 button)
**:2** (2 buttons)
**:3** (3 buttons)
**:4** (4 buttons)
**:6** (6 buttons)

**#multigame** (Multigame)
**:compilation** (Compilation)

**#genre** (Genre of the game)
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
**:runandgun** (Run and gun)
**:hackandslash** (Hack and slash)
**:pinball** (Pinball)
**:strategy** (Strategy)
**:redemption** (Redemption)
**:flightsim** (Flight simulator)
**:board** (Board game)
**:quiz** (Quiz game)
**:cards** (Cards game)
**:billiard** (Billiard)
**:jackpot** (Jackpot)
**:minigames** (Mini games)
**:kiddieride** (Kiddie ride)
**:bowling** (Bowling)
**:mogurataiji** (Whac-A-Mole)
**:datesim** (Date simulator)
**:god** (God game)
**:educational** (Educational)
**:sound** (Only sound)
**:marketing** (Marketing)
**:drawing** (Drawing)
**:test** (Test)

**#genre:sports**
**\>soccer** (Soccer)
**\>basketball** (Basketball)
**\>baseball** (Baseball)
**\>volleyball** (Volleyball)
**\>tennis** (Tennis)
**\>football** (American football)
**\>hockey** (Ice Hockey)
**\>skiing** (Skiing)
**\>formula1** (Formula 1)
**\>motogp** (Moto GP)
**\>golf** (Golf)
**\>boxing** (Boxing)
**\>wrestling** (Wrestling)
**\>decathlon** (Decathlon)
**\>archery** (Archery)
**\>rowing** (Rowing)
**\>swimming** (Swimming)

**#genre:board**
**\>chess** (Chess)
**\>mahjong** (Mahjong)

**#genre:rpg**
**\>a** (Action RPG)
**\>j** (JRPG)

**#genre:shmup**
**\>danmaku** (Bullet hell)

**#genre:racing**
**\>combat** (Combat racing)

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
**:kr** (Korean)

**#port** (Ported from another system)
**:arcade** (Arcade)
**:c64** (Commodore 64)
**:amiga** (Commodore Amiga)
**:apple2** (Apple II)
**:pc88** (NEC PC-8801)
**:msx** (MSX)
**:gamegear** (SEGA Game Gear)
**:megadrive** (SEGA MegaDrive/Genesis)
**:famicom** (Nintendo Famicom/NES)
**:superfamicom** (Nintendo Super Famicom/SNES)

**#addon** (Specific external hardware recommended or required)
**:3dglasses** (SEGA 3-D Glasses)
**:fmsoundunit** (SEGA FM Sound Unit)
**:lightphaser** (SEGA Light Phaser)
**:paddlecontrol** (SEGA Paddle Control)
**:sportspad** (SEGA Sports Pad)

**#addon:fmsoundunit**
**\>hidden** (FM Sound Unit: Hidden)

**#rev** (Revision)
**:1** (1)
**:2** (2)
**:a** (A)
**:b** (B)

**#unfinished** (Unfinished)
**:beta** (Beta)
**:proto** (Prototype)
**:demo** (Demo)
**:sample** (Sample)

**unfinished:beta**
**\>1**
**\>2**
**\>3**

**#embed** (Embed extra hardware inside game)
**:ram** (Extra RAM)

**#save** (The way you can save your progress)
**:backup** (Battery back-up)
**:password** (Password)

**#3d** (Game uses some kind of 3D effect)
**:stereoscopic** (Stereoscopic 3D)
**:anaglyph** (Anaglyph 3D)

**#arcadeboard** (Arcade board)
**:cps** (All CAPCOM CP Systems)

**#arcadeboard:cps**
**>cps1** (CAPCOM CP System)
**>cpsdash** (CAPCOM CP System Dash)
**>cpschanger** (CAPCOM CP System Changer)
**>cps2** (CAPCOM CP System II)
**>cps3** (CAPCOM CP System III)

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

**Searching tags ($)**
The goal of this kind of tags is just for searching purposes. They are designed to be internal (invisible) to provide additional information we can unlock when we search for it.

**Commercial tags for searching purposes**
This kind of tags provides us information about famous franchises and characters. For example, if we search for games based on Alien movie franchise and just write "alien", we probably get a huge list of games that have nothing to do with the franchise like _Alien Soldier_, _Alien Storm_ or _Alien Syndrome_. However, this tag unlocks the "did you mean" feature. This can be used as an additional useful search tool.

These tags even allow us to search for famous characters like Dracula. If we were to write "dracula" in a regular game search engine, we would only get games which contans the word _Dracula_, but there would be no _Castlevania_ or _Master of Darkness_. This tag can solve that. More tags will be added as soon new interesting franchises appeared in the process. At the end they will be a lot. For now, take a look to these ones:

**$alien** (Alien)
**$asterix** (Astérix & Obélix)
**$batman** (Batman)
**$disney** (Walt Disney)
**$donald** (Donald Duck)
**$dracula** (Dracula)
**$d&d** (Dungeons & Dragons)
**$jurassicpark** (Jurassic Park)
**$loneytunes** (Looney Tunes)
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
