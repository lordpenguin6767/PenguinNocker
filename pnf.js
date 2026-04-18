const content = document.getElementById("content");

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
          <img src="lordpenguin_inc_logo.png">
          <h1 class="title">🐧<span class="words">Penguin Games&trade;</span>🐧</h1>
          <div class="descs">
            <p>Copyright &copy; LordPenguin Inc. 2026</p>
            <p>The holy grail of unblocked Penguin Games</p>
            <p>R.I.P. penguin love</p>
            <p>We've Made games work anywhere since 2025</p>
          </div>
          <div class="use">
            <p>If you don't know how to use these, just download the file, open it,</p>
            <p>and it should run in your downloads.</p>
            <p>THIS IS A COMPLETELY COOL PENGUIN DOC THAT IS COOL</p>
          </div>
          <div class="count">
            <p>GAME COUNT: 1,921</p>
            <p>MOVIE/TV COUNT: 163</p>
          </div>
          <div class="disc">
            <p>All games go to their respective owners and we do not claim them.</p>
            <p>If a game doesnt work please tell a editor so they can fix the problem.</p>
            <p>Disclaimer: If you have no wifi you cant download files, but you can play files already downloaded.</p>
            <p>Disclaimer 2: You sometimes can't download games when securly is on.</p>
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
              <p>1: <a onclick="loadFile('cl1')">cl1.html</a></p>
            </div>
          </div>
        </div>
        `,
    b: `
          <h1>Contact</h1>
          <p>Contact us here.</p>
        `,
    t: `
    
       `,
    m: `
    
       `,
  };

  content.innerHTML = pages[page];

  currentPage.style.backgroundColor = null;

  currentPage = document.getElementById(page);

  currentPage.style.backgroundColor = "#D3E3FD";

  document.getElementById("fullscreenBtn").style.display = "none";
}

function loadFile(file) {
  const files = {
    cl1: `
      <iframe id="fileFrame" src="https://rawcdn.githack.com/Nailington/3kh0-assets/aeb371b7e88542fd5e61eeed9e967a446d84fe1b/1/index.html"
        style="width:100%; height:90vh; border:none;">
      </iframe>
    `
  };

  content.innerHTML = files[file];

  document.getElementById("fullscreenBtn").style.display = "block";
}


/* Collapse button logic */
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  collapseToggle = 1 - collapseToggle;
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("shifted");
  currentPage.style.backgroundColor = null;
  if (collapseToggle == 0) {
    currentPage.style.backgroundColor = "#D3E3FD";
    content.style.marginLeft = "240px";
  } else {
    content.style.marginLeft = "60px"
  }
});

/* Fullscreen Logic */
function toggleFullscreen() {
  const frame = document.getElementById("fileFrame");

  if (!frame) return;

  if (!document.fullscreenElement) {
    frame.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen();
  }
}

loadPage("h");
