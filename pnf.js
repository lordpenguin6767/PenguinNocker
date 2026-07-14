const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const backBtn = document.getElementById("backBtn");
const fullBtn = document.getElementById("fullscreenBtn");

let currentPage = document.getElementById("h");

let collapseToggle = 0;

currentPage.style.backgroundColor = "#D3E3FD";

function loadPage(page) {
  if (collapseToggle == 1) return;

  const pages = {
    h: `
        <div class="home">
		    	<h1 class="title">🧊🐧<span class="words">Welcome to Penguin Nocker Website</span>&trade; 🐧🧊</h1>
		    	<p class="trade">Penguin Nocker is a registered trademark of LordPenguin Inc.</p>
		      <p class="copyright">Copyright &copy; LordPenguin Inc. 2026</p>
		    	<p class="now">Now as a website!</p>
		    	<p class="desc">The grand page of all games, shows, and movies</p>
	    		<p class="desc">The Penguin Grail of unblocked games</p>
		    	<p class="defeat">ELPS thought they could defeat me!</p>
		    	<p class="nobody">Nobody has a better Game Doc than this...</p>
	    	</div>
       `,
    a: `
        <div class="news">
          <h1 class="title">🐧🐧🐧<span class="words">Announcements</span>🐧🐧🐧</h1>
          <hr>
          <p class="desc">This is Penguin Nocker WEBSITE!</p>
          <hr>
          <div class="current-version">
            <span class="current">Current Version: </span>
            <span class="version">5.5.0</span>
          </div>
          <p class="disc">[Small updates/fixes are not displayed]</p>
          <p class="history">Updates History:</p>
          <div class="version-history">
            <p>Update 1: Penguin Nocker initiated on April 16, 2025</p>
            <p>Update 1.1: Minecraft inserted</p>
            <p>Update 1.11: Slope affixed</p>
            <p>Update 1.2: Penguin Games Tab introduced</p>
            <p>Update 1.3: Penguin Games Part 2 augmented</p>
            <p>Update 1.4: Updates reworked into Penguin News</p>
            <p>Update 1.5: Penguin Movies added</p>
            <p>Update 1.51: Penguin Ranks infused</p>
            <p>Update 1.6: Penguin Movies Part 2 added</p>
            <p>Update 1.7: Penguin Chat added</p>
            <p>Update 1.71: Ranks had some reworks and Game Favorites</p>
            <p>Update 1.8: Penguin TV supplied</p>
            <p>Update 1.9: Penguin TV Part 2 reinforced</p>
            <div>
              <p>Update 1.91: </span>
              <span class="biu">MASSIVE</span>
              <span> UI update and Movie Favorites tagged</span>
            </div>
            <p>Update 2.0: New Game link update</p>
            <p>Update 2.1: Penguin TV Part 3 compounded</p>
            <p>Update 2.11: Removed unuseful UI</p>
            <p>Update 2.2: Penguin TV favorites subjoined</p>
            <p>Update 2.3: Polar Summer Event Part 1 added temporarily</p>
            <p>Update 2.31: Polar Summer Event Part 2 applied</p>
            <p>Update 2.4: Summer Event over/Autumn Event temporarily added</p>
            <p>Update 2.5: Front Page rework</p>
            <p>Update 2.6: Penguin Rules enforced</p>
            <p>Update 2.7: Penguin News rework</p>
            <div>
              <span>Update 2.8: </span>
              <span class="bi">The Update of all Updates</span>
            </div>
            <p>Update 2.81: The countdown</p>
            <p>Update 2.9: Holygrail Penguin Games rework</p>
            <div>
              <span>Update 3.0: </span>
              <span class="biu">LUDICROUS</span>
              <span> UI update and News/Announcements rework, Beta has been achieved</span>
            <div>
            <p>Update 3.01: Favorites removed</p>
            <p>Update 3.1: WAY More Games added/Autumn Event removed</p>
            <p>Update 3.2: New Websites added</p>
            <p>Update 3.3: Updating Every file we have</p>
            <p>Update 3.4: Game Reviews slide+More news+Penguin Favorites back</p>
            <p>Update 3.5: Winter event</p>
            <p>Update 3.6: Winter event part 2</p>
            <p>Update 3.7: New years craze!!!</p>
            <p>Update 3.8: Penguin Proxies added</p>
            <p>Update 3.9: Penguin Nocker MK II activated</p>
            <p>Update 4.0: Penguin Chat 2.0 and Gamma mode achieved</p>
            <p>Update 4.1: Updating Penguin Chat 2.0</p>
            <p>Update 4.2: EVERY GAME IS BACK!!!</p>
            <p>Update 4.3: More UI updates</p>
            <p>Update 4.4: Penguin fun facts/countdown over</p>
            <p>Update 5.0: PNPV Initiated</p>
            <p>Update 5.1: Rules II added</p>
            <p>Update 5.2: Ranks remodel</p>
            <p>Update 5.3: Games 2.0 links added</p>
            <p>Update 5.4: Bans readded</p>
            <p>Update 5.5: PN is 1 year, it is now website!</p>
          </div>
        </div>
       `,
    g: `
        <div class="games">
          <img src="https://raw.githubusercontent.com/lordpenguin6767/PenguinNocker/refs/heads/main/lordpenguin_inc_logo.png">
          <h1 class="title">🐧<span class="words">Penguin Games&trade;</span>🐧</h1>
          <div class="descs">
            <p>Copyright &copy; LordPenguin Inc. 2026</p>
            <p>The holy grail of unblocked Penguin Games</p>
            <p>R.I.P. penguin love</p>
            <p>We've Made games work anywhere since 2025</p>
          </div>
          <div class="use">
            <p>If you don't know how to use these, this time just click the link.</p>
            <p>THIS IS A COMPLETELY COOL PENGUIN DOC THAT IS COOL</p>
          </div>
          <div class="count">
            <p>GAME COUNT: ???</p>
            <p>MOVIE/TV COUNT: ???</p>
          </div>
          <div class="disc">
            <p>All games go to their respective owners and we do not claim them.</p>
            <p>If a game doesnt work please tell Jackson so he can fix the problem.</p>
            <p>Disclaimer: I'm sure there is at least 1 disclaimer?</p>
            <div>
              <span class="b">Game site</span>
              <span>has penguins</span>
            </div>
            <p>The ultimate doc of penguins</p>
          </div>
          <h2 class="subtitle">🐧🐧🐧<span class="words">Penguin Games</span>&trade;🐧🐧🐧</h2>
          <div class="game">
            <hr>
            <p>0-9</p>
            <hr>
            <div class="links">
              <p>1: <a onclick="loadFile('one')">pn1.html</a></p>
              <p>10 Minutes Till Dawn: <a onclick="loadFile('tenmin')">pn10minutestilldawn.html</a></p>
              <p>2048: <a onclick="loadFile('twothousand')">pn2048.html</a></p>
              <p>2-3-4 Player Games: <a onclick="loadFile('twoplayer')">pn234playergame.html</a></p>
              <p>9007199254740992: <a onclick="loadFile('ninequad')">pnbig2048.html</a></p>
            </div>
            <hr>
            <p>A</p>
            <hr>
            <div class="links">
              <p>A Day in the Office: <a onclick="loadFile('officeday')">pnadayintheoffice.html</a></p>
              <p>AdVenture Capitalist: <a onclick="loadFile('advcapital')">pnadventurecapiltalist.html</a></p>
              <p>Ages of Conflict: <a onclick="loadFile('aconflict')">pnagesofconflict.html</a></p>
              <p>Airline Typcoon Idle: <a onclick="loadFile('airtyc')">pnairlinetycoonidle.html</a></p>
              <p>Alien Sky Invasion: <a onclick="loadFile('alieninv')">pnalienskyinvasion.html</a></p>
              <p>Amazing Strang Rope Police: <a onclick="loadFile('asrp')">pnasrp.html</a></p>
              <p>Admist the Sky: <a onclick="loadFile('insky')">pnadmistthesky.hmtl</a></p>
              <p>Angry Bird: <a onclick="loadFile('angrybird')">pnangrybird.html</a></p>
              <p>Apes vs. Helium: <a onclick="loadFile('apevhe')">pnapesvshelium.html</a></p>
              <p>Arcade Volley: <a onclick="loadFile('arcvolley')">pnarcadevolley.html</a></p>
              <p>Archesspelago: <a onclick="loadFile('arcsplg')">pnarchesspelago.html</a></p>
              <p>Astro Survivors: <a onclick="loadFile('astrosurv')">pnastrosurvivors.html</a></p>
              <p>Aviamaster: <a onclick="loadFile('amaster')">pnaviamaster.html</a></p>
            </div>
            <hr>
            <p>B</p>
            <hr>
            <div class="links">
              <p>Babel Tower: <a onclick="loadFile('babel')">pnbabeltower.html</a></p>
              <p>Backrooms 2D: <a onclick="loadFile('backtwo')">pnbackrooms2d.html</a></p>
              <p>Bacon May Die: <a onclick="loadFile('bacon')">pnbaconmaydie.html</a></p>
              <p>Bad Parenting: <a onclick="loadFile('badparent')">pnbadparenting.html</a></p>
              <p>Baldi's Basics The Ultra Decompile: <a onclick="loadFile('pnbaldidecomp')">baldidecomp.html</a></p>
              <p>Baldi's Basics: <a onclick="loadFile('baldi')">pnbaldisbasics.html</a></p>
              <p>Ballistic: <a onclick="loadFile('ballistic')">pnballistic.html</a></p>
              <p>Banana Poker: <a onclick="loadFile('bpoker')">pnbananapoker.html</a></p>
              <p>Barry Has a Secret: <a onclick="loadFile('barrysecret')">pnbarryhassecret.html</a></p>
              <p>Baseball Bros: <a onclick="loadFile('baseb')">pnbaseballbros.html</a></p>
              <p>Basketball Stars: <a onclick="loadFile('bballs')">pnbasketstars.html</a></p>
              <p>Basketball Super Stars: <a onclick="loadFile('bballss')">pnbasketsuperstars.html</a></p>
              <p>Beach Boxing Simulator: <a onclick="loadFile('bboxsim')">pnbeachboxingsim.html</a></p>
              <p>Bearsus: <a onclick="loadFile('bearsus')">pnbearsus.html</a></p>
              <p>Baldi's Fun New School Plus Ultimate Edition: <a onclick="loadFile('bfnsu')">pnbfnsu.html</a></p>
              <p>Big Flappy Tower: <a onclick="loadFile('bft')">pnbigflappytower.html</a></p>
              <p>Block Miner: <a onclick="loadFile('mineblock')">pnblockminer.html</a></p>
              <p>Blockpost: <a onclick="loadFile('blockpost')">pnblockpost.html</a></p>
              <p>Blumji Racers: <a onclick="loadFile('blumrace')">pnblumjiracers.html</a></p>
              <p>Blumji Rocket: <a onclick="loadFile('blumrkt')">pnblumjirocket.html</a></p>
              <p>Bounce Back: <a onclick="loadFile('bounceback')">pnbouncebacl.html</a></p>
              <p>Bouncy Basketball: <a onclick="loadFile('bbball')">pnbouncybasketball.html</a></p>
              <p>Bouncy Motors: <a onclick="loadFile('bmotors')">pnbouncymotors.html</a></p>
              <p>Bounty of One: <a onclick="loadFile('bountyone')">pnbountyofone.html</a></p>
              <p>Brawl 3D: <a onclick="loadFile('brawlthree')">pnbrawl3d.hmtl</a></p>
              <p>Bullet Force Multiplayer: <a onclick="loadFile('bfmulti')">pnbulletforcemultiplayer.html</a></p>
            </div>
            <hr>
            <p>C</p>
            <hr>
            <div class="links">
              <p>Canvas: <a onclick="loadFile('canvas')">pncanvas.html</a></p>
              <p>Capybara Clicker: <a onclick="loadFile('cbclick')">pncapybaraclicker.html</a></p>
              <p>Cat Mario: <a onclick="loadFile('catmario')">pncatmario.html</a></p>
              <p>Cat's Love Cake 2: <a onclick="loadFile('catcaketwo')">pncatslovecake2.html</a></p>
              <p>Cave Chaos: <a onclick="loadFile('cavechaos')">pncavechaos.html</a></p>
              <p>Cheese Chompers 3: <a onclick="loadFile('ccthree')">pncheesechompers3.html</a></p>
              <p>Chicken Gun: <a onclick="loadFile('chickg')">pnchickengun.html</a></p>
              <p>Choppy Orc: <a onclick="loadFile('chopo')">pnchoppyorc.html</a></p>
              <p>CircloO 2: <a onclick="loadFile('circlootwo')">pncircloO2.html</a></p>
              <p>Clash of vikings: <a onclick="loadFile('clashv')">pnclashofvikings.html</a></p>
              <p>Cookie Clicker: <a onclick="loadFile('cc')">pncookieclicker.html</a></p>
              <p>Crazy Cars: <a onclick="loadFile('ccars')">pncrazycars.html</a></p>
              <p>Crazy Chicken 3D: <a onclick="loadFile('cchickthree')">pncrazychicken3d.html</a></p>
              <p>Creature Card Idle: <a onclick="loadFile('cci')">pncreaturecardidle.html</a></p>
              <P>CSGO Surf: <a onclick="loadFile('csgos')">pncsgocurf.html</a></p>
            </div>
          </div>
        </div>
        `,
    b: `

        `,
    t: `
    
       `,
    m: `
    
       `,
  };

  content.innerHTML = pages[page];

  content.style.backgroundColor = "white";

  currentPage.style.backgroundColor = null;

  currentPage = document.getElementById(page);

  currentPage.style.backgroundColor = "#D3E3FD";

  fullBtn.style.display = "none";

  backBtn.style.display = "none";
}

function loadFile(file) {
  const files = {
    one: "https://rawcdn.githack.com/Nailington/3kh0-assets/aeb371b7e88542fd5e61eeed9e967a446d84fe1b/1/index.html",
    tenmin: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/10minutestilldawn/index.html",
    twoplayer: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/2-3-4-player-game/index.html",
    twothousand: "https://rawcdn.githack.com/gabrielecirulli/2048/master/index.html",
    twodoom: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/2doom/index.html",
    officeday: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/a%20day%20in%20the%20office/index.html",
    advcapital: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/adventure-capitalist/index.html",
    aconflict: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/ages%20of%20conflict/index.html",
    airtyc: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/airline-tycoon-idle/index.html",
    alieninv: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/alien%20sky%20invasion/index.html",
    asrp: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/amazing-strange-rope-police-vice-spider/index.html",
    insky: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/amidst%20the%20sky/index.html",
    angrybird: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/angry-bird/index.html",
    apevhe: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/apesvshelium/index.html",
    arcvolley: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/arcade-volley/index.html",
    arcsplg: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/archesspalago/index.html",
    astrosurv: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/astro%20survivors/index.html",
    amaster: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/aviamaster/FUN.html",
    babel: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/babel%20tower/index.html",
    backtwo: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/backrooms%202D/index.html",
    bacon: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bacon%20may%20die/index.html",
    badparent: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bad-parenting/index.html",
    baldidecomp: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/baldi%20decomp/index.html",
    baldi: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/baldis-basics/index.html",
    ballistic: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/ballistic/index.html",
    bpoker: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/banana%20poker/game.html",
    barrysecret: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/barry%20has%20a%20secret/index.html",
    baseb: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/baseball%20bros/index.html",
    bballs: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/basket%20stars/index.html",
    bballss: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/basketball-superstars/index.html",
    bboxsim: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/beach-boxing-sim/index.html",
    bearsus: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bearsus/index.html",
    bfnsu: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bfnsu/index.html",
    ninequad: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/big%202048/index.html",
    bft: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/big%20flappy%20tower/index.html",
    mineblock: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/block-miner/index.html",
    blockpost: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/blockpost/clblockpost.html",
    blumrace: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/blumgi%20racers/index.html",
    blumrkt: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/blumgi-rocket/index.html",
    bounceback: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bounce%20back/index.html",
    bbball: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bouncy%20basketball/index.html",
    bmotors: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bouncy%20motors/index.html",
    bountyone: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bounty%20of%20one/index.html",
    brawlthree: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/brawl-3d/index.html",
    bfmulti: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/bullet-force-multiplayer/index.html",
    canvas: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/canvas/index.html",
    cbclick: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/capybara%20clicker/index.html",
    catmario: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/cat%20mario/index.html",
    catcaketwo: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/cats%20love%20cake%202/index.html",
    cavechaos: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/cave%20chaos%202/index.html",
    ccthree: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/cheese%20chompers%203/index.html",
    chickg: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/chicken-gun/index.html",
    chopo: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/choppy%20orc/coffee.html",
    circlootwo: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/circlo02/index.html",
    clashv: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/clashofvikings/index.html",
    cc: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/cookieclicker/index.html",
    ccars: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/crazy%20cars/index.html#topvaz",
    cchickthree: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/crazy%20chicken%203D/index.html",
    cci: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/creature-card-idle/index.html",
    csgos: "https://rawcdn.githack.com/bubbls/UGS-Assets/main/csgo%20surf/index.html"
  };

  content.style.backgroundColor = "black";

  if (!files[file]) {
    content.innerHTML = `
      <div style="
        padding:20px;
        color:#ff4444;
        font-size:20px;
        font-weight:bold;
      ">
        &#x26A0; Error: Could not find file "<span style="color:white">${file}.html</span>".
      </div>`
   ;
    return;
  }

  console.log(`Loading file ${file}.html`);

  content.innerHTML = `
    <iframe id="f" src=${files[file]} allowfullscreen></iframe>
  `

  fullBtn.style.display = "block";

  backBtn.style.display = "block";

  if (content.value = undefined) ;
}

toggleBtn.addEventListener("click", () => {
  collapseToggle = 1 - collapseToggle;
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("shifted");
  currentPage.style.backgroundColor = null;
  if (collapseToggle == 0) {
    currentPage.style.backgroundColor = "#D3E3FD";
    content.style.marginLeft = "240px";
    backBtn.style.left = "250px";
  } else {
    content.style.marginLeft = "60px";
    backBtn.style.left = "70px";
  }
});

/* Fullscreen Logic */
function toggleFullscreen() {
  const frame = document.getElementById("f");

  if (!frame) return;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    frame.requestFullscreen().catch(err => console.log(err));
  }
}

loadPage("h");
