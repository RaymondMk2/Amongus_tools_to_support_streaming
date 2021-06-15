/*----定数----*/
const CHROME_EXT_URL = chrome.extension.getURL("images/");
const CREW_COLORS = [
  "rgba(197, 17, 17, 1.0)",
  "rgba(19, 46, 209, 1.0)",
  "rgba(17, 127, 45, 1.0)",
  "rgba(237, 84, 186, 1.0)",
  "rgba(255, 127, 39, 1.0)",
  "rgba(245, 245, 87, 1.0)",
  "rgba(99, 99, 99, 1.0)",
  "rgba(214, 224, 240, 1.0)",
  "rgba(106, 47, 185, 1.0)",
  "rgba(113, 73, 30, 1.0)",
  "rgba(56, 254, 220, 1.0)",
  "rgba(80, 239, 57, 1.0)",
  "rgba(241, 199, 208, 1.0)",
  "rgba(113, 132, 148, 1.0)",
  "rgba(143, 133, 115, 1.0)",
  "rgba(114, 24, 24, 1.0)",
  "rgba(254, 253, 189, 1.0)",
  "rgba(215, 99, 100, 1.0)"
];
/*
const CREW_DEAD_ICON = [
  "dead01.png",
  "dead02.png",
  "dead03.png",
  "dead04.png",
  "dead05.png",
  "dead06.png",
  "dead07.png",
  "dead08.png",
  "dead09.png",
  "dead10.png",
  "dead11.png",
  "dead12.png"
];
*/
const SUS_COLOR = "#FF0000";
const SUS_CHAR_COLOR = "#FFFFFF";
const QUE_COLOR = "#999999";
const QUE_CHAR_COLOR = "#FFFFFF";
const PUR_COLOR = "#0080FF";
const PUR_CHAR_COLOR = "#FFFFFF";
const DEAD_COLOR = "#000000";
const DEAD_CHAR_COLOR = "#FF0000";

/*
const SUS_COLOR = "#000000";
const SUS_CHAR_COLOR = "#FFFFFF";
const QUE_COLOR = "#999999";
const QUE_CHAR_COLOR = "#FFFFFF";
const PUR_COLOR = "#FEFEFE";
const PUR_CHAR_COLOR = "#000000";
*/

/*----CSS読み込み----*/
function appendCSS(url) {
  $("body").append(`<link rel="stylesheet" href="${url}">`);
}
appendCSS("https://fonts.googleapis.com/icon?family=Material+Icons");
appendCSS(chrome.extension.getURL("css/style.css"));

/*----追加HTML、前----*/
$("body").prepend(`
  <div class="space">
  </div>
`);

/*----追加HTML、後----*/
$("body").append(`
  <div class="detective">
    <div class="detectiveicon" data-id="0">
      <div class="detectiveiconsub"><img src="${CHROME_EXT_URL}num01.png" width="16" height="16"></div>
      <div class="detectiveiconsub"><img src="${CHROME_EXT_URL}num02.png" width="16" height="16"></div>
      <div class="detectiveiconsub"><img src="${CHROME_EXT_URL}num03.png" width="16" height="16"></div>
    </div>
    <div class="detectivesub" data-id="0">
      <div class="detectivelist" data-id="0">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="1">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="2">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="3">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="4">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="5">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="6">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="7">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="8">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="9">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="10">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="11">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="12">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="13">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="14">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
      <div class="detectivelist" data-id="15">
        <div class="detectivelistsub" data-id="0">?</div>
        <div class="detectivelistsub" data-id="1">?</div>
        <div class="detectivelistsub" data-id="2">?</div>
      </div>
    </div>
  </div>
  <div class="controlpanel">
    <div class="controlpanelTitle">Control
    </div>
    <div class="coloricon"><img src="${CHROME_EXT_URL}coloricon.png" width="16" height="24">
    </div>
    <div class="playercolor">
      <div class="colorbox" data-id="0">
        <ul class=="ulcolorbox" data-id="0">
          <li class="colorpalette" data-id="0" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="0" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="1">
        <ul class=="ulcolorbox" data-id="1">
          <li class="colorpalette" data-id="1" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="1" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="2">
        <ul class=="ulcolorbox" data-id="2">
          <li class="colorpalette" data-id="2" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="2" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="3">
        <ul class=="ulcolorbox" data-id="3">
          <li class="colorpalette" data-id="3" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="3" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="4">
        <ul class=="ulcolorbox" data-id="4">
          <li class="colorpalette" data-id="4" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="4" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="5">
        <ul class=="ulcolorbox" data-id="5">
          <li class="colorpalette" data-id="5" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="5" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="6">
        <ul class=="ulcolorbox" data-id="6">
          <li class="colorpalette" data-id="6" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="6" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="7">
        <ul class=="ulcolorbox" data-id="7">
          <li class="colorpalette" data-id="7" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="7" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="8">
        <ul class=="ulcolorbox" data-id="8">
          <li class="colorpalette" data-id="8" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="8" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="9">
        <ul class=="ulcolorbox" data-id="9">
          <li class="colorpalette" data-id="9" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="9" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="10">
        <ul class=="ulcolorbox" data-id="10">
          <li class="colorpalette" data-id="10" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="10" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="11">
        <ul class=="ulcolorbox" data-id="11">
          <li class="colorpalette" data-id="11" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="11" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="12">
        <ul class=="ulcolorbox" data-id="12">
          <li class="colorpalette" data-id="12" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="12" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="13">
        <ul class=="ulcolorbox" data-id="13">
          <li class="colorpalette" data-id="13" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="13" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="14">
        <ul class=="ulcolorbox" data-id="14">
          <li class="colorpalette" data-id="14" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="14" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
      <div class="colorbox" data-id="15">
        <ul class=="ulcolorbox" data-id="15">
          <li class="colorpalette" data-id="15" data-cid="0"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[0]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="1"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[1]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="2"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[2]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="3"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[3]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="4"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[4]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="5"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[5]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="6"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[6]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="7"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[7]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="8"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[8]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="9"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[9]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="10"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[10]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="11"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[11]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="12"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[12]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="13"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[13]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="14"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[14]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="15"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[15]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="16"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[16]};"></label></li>
          <li class="colorpalette" data-id="15" data-cid="17"><input type="radio" name="groupname"><label style="background-color: ${CREW_COLORS[17]};"></label></li>
        </ul>
      </div>
    </div>
    <div class="detectiveop">
      <div class="detectiveiconop" data-id="0">
        <div class="detectiveiconsubop"><img src="${CHROME_EXT_URL}num01.png" width="16" height="16"></div>
        <div class="detectiveiconsubop"><img src="${CHROME_EXT_URL}num02.png" width="16" height="16"></div>
        <div class="detectiveiconsubop"><img src="${CHROME_EXT_URL}num03.png" width="16" height="16"></div>
      </div>
      <div class="detectivesubop">
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="0" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="0" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="0" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="0" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="0" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="0" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="0" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="0" data-num="1" data-cid="3">DEAD</div>
    	  	</div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="0" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="0" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="0" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="0" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="1" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="1" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="1" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="1" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="1" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="1" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="1" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="1" data-num="1" data-cid="3">DEAD</div>
      		</div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="1" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="1" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="1" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="1" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="2" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="2" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="2" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="2" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="2" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="2" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="2" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="2" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="2" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="2" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="2" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="2" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="3" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="3" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="3" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="3" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="3" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="3" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="3" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="3" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="3" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="3" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="3" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="3" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="4" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="4" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="4" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="4" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="4" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="4" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="4" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="4" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="4" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="4" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="4" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="4" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="5" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="5" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="5" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="5" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="5" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="5" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="5" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="5" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="5" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="5" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="5" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="5" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="6" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="6" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="6" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="6" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="6" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="6" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="6" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="6" data-num="1" data-cid="3">DEAD</div>
		      </div>
            <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="6" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="6" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="6" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="6" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="7" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="7" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="7" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="7" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="7" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="7" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="7" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="7" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="7" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="7" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="7" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="7" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="8" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="8" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="8" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="8" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="8" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="8" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="8" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="8" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="8" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="8" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="8" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="8" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="9" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="9" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="9" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="9" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="9" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="9" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="9" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="9" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="9" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="9" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="9" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="9" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="10" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="10" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="10" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="10" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="10" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="10" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="10" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="10" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="10" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="10" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="10" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="10" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="11" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="11" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="11" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="11" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="11" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="11" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="11" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="11" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="11" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="11" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="11" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="11" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="12" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="12" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="12" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="12" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="12" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="12" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="12" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="12" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="12" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="12" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="12" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="12" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="13" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="13" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="13" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="13" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="13" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="13" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="13" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="13" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="13" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="13" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="13" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="13" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="14" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="14" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="14" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="14" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="14" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="14" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="14" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="14" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="14" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="14" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="14" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="14" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
        <div class="detectivelistop">
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="15" data-num="0" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="15" data-num="0" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="15" data-num="0" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="15" data-num="0" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="15" data-num="1" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="15" data-num="1" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="15" data-num="1" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="15" data-num="1" data-cid="3">DEAD</div>
		      </div>
          <div class="detectivelistsubop">
	          <div class="detectiveselect0" data-id="15" data-num="2" data-cid="0">SUS</div>
	          <div class="detectiveselect1" data-id="15" data-num="2" data-cid="1">?</div>
	          <div class="detectiveselect2" data-id="15" data-num="2" data-cid="2">PUR</div>
	          <div class="crewstatus" data-id="15" data-num="2" data-cid="3">DEAD</div>
		      </div>
        </div>
      </div>
    </div>
    <div class="resetbutton">SUS reset
    </div>
  </div>
`);

$("body").children("*").wrapAll("<main></main>");

/* DiscordOverlayの更新監視 */
const target = document.getElementById("app-mount");
const mutationObserver = new MutationObserver(callback);
const option = {
  childList: true,
  subtree: true,
};

  /* DiscordOverlayの監視開始 */
mutationObserver.observe(target, option);

  /* DiscordIDの一覧 */
var vUserList = [];

  /* 更新検知時の動作 */
function callback(mutations) {
  //プレイヤーのDiscordID一覧を取得
  var vUsers = document.getElementsByClassName("user");
  vUserList = [];
  $.each(vUsers, function(i, val) {
    var vUserName = val.innerText;
    var vUserid = $(val).attr('data-reactid');
    vUserList.push([vUserid,"",vUserName]);
  });

  //保存データがあれば、更新されたプレイヤー一覧に対応する色を表示
  if(JSON.parse(localStorage.getItem('UserList'))) {
    vSaveUserList = JSON.parse(localStorage.getItem("UserList"));
    $.each(vUserList, function(i, val) {
      $.each(vSaveUserList, function(i2, val2) {
      if (val[0] == val2[0]) {
        vUserList[i][1] = val2[1];
    　　}
      });
    });
  }

  $.each(vUserList, function(i, val) {
    changeAvatarColor(i, Number(val[1]));
    changeAvatarButtonColor(i, Number(val[1]));
  });

  changeDetectiveDisplay(vUserList.length);
  changeAvatarButtonDisplay(vUserList.length);
  changeDetectiveButtonDisplay(vUserList.length);

}

/* 色選択パレットの表示・非表示 */
$(".colorbox").on("click", function () {

  var vUcolors = $(this).children();
  var vUcolor = vUcolors[0];

  try {
      if (vUcolor.style.display == "block") {
        vUcolor.style.display = "none";
      } else {
        vUcolor.style.display = "block";
      }
  } catch (e) {
  }
});

/* 色選択パレットで色を選択する */
$(".colorpalette").on("click", function () {
  var vSelectId = Number($(this).attr('data-id'));
  var vSelectColorId = Number($(this).attr('data-cid'));

  changeAvatarButtonColor(vSelectId, vSelectColorId);
  changeAvatarColor(vSelectId, vSelectColorId);

  try {
    var vUserData
    if (vUserList.length >= vSelectId) {
      vUserData = vUserList[vSelectId];
      if (vUserData.length == 3) {
        vUserData[1] = vSelectColorId;
      }
    }
  } catch (e) {
  }

  // ローカルストレージへの色設定の保存
  //localStorage.removeItem('UserList');
  var vUserData2
  var vSaveUserList
  if (vUserList.length >= vSelectId) {
    vUserData2 = vUserList[vSelectId];

    if(JSON.parse(localStorage.getItem('UserList'))) {
      vSaveUserList = JSON.parse(localStorage.getItem("UserList"));

      // ローカルストレージに一致するDiscordIDが存在するか（無:-1、有:配列のindex）
      var vSaveIdList = [];
      $.each(vSaveUserList, function(i, val) {
        vSaveIdList.push(val[0]);
      });
      var vSerchResult = $.inArray(vUserData2[0], vSaveIdList);

      if(vSerchResult>-1){
        //ID一致の場合上書き
        vSaveUserList[vSerchResult] = vUserData2;
      } else {
        //ID一致しない場合追加
        vSaveUserList.push(vUserData2);
      }
      //ローカルストレージに上書き保存
      localStorage.setItem("UserList", JSON.stringify(vSaveUserList));
      
    } else {
      //ローカルストレージに新規保存
      var vSaveData = [];
      vSaveData.push(vUserData2);
      localStorage.setItem("UserList", JSON.stringify(vSaveData));
    }
  }
});

/* アバターの色変更 */
function changeAvatarColor(UserIndex, ColorIndex) {
  var vAvatars = document.getElementsByClassName("avatar");
  $.each(vAvatars, function(i, val) {
    if (i == UserIndex) {
      val.style.backgroundColor = CREW_COLORS[ColorIndex];
  　}
  });
}

/* アバターの色選択ボタンの色変更 */
function changeAvatarButtonColor(UserIndex, ColorIndex) {
  var vDcolors = document.getElementsByClassName("colorbox");
  $.each(vDcolors, function(i, val) {
    if (i == UserIndex) {
      val.style.backgroundColor = CREW_COLORS[ColorIndex];
  　}
  });
}

/* アバターの色選択ボタンの表示数変更 */
function changeAvatarButtonDisplay(UserCount) {
  var vDcolors = document.getElementsByClassName("colorbox");
  $.each(vDcolors, function(i, val) {
    if (i < UserCount) {
      $(val).show();
    } else {
      $(val).hide();
    }
  });
}

/* アバターの推理結果の表示数変更 */
function changeDetectiveDisplay(UserCount) {
  var vDcolors = document.getElementsByClassName("detectivelist");
  $.each(vDcolors, function(i, val) {
    if (i < UserCount) {
      $(val).show();
    } else {
      $(val).hide();
    }
  });
}

/* アバターの推理結果の表示数変更 */
function changeDetectiveButtonDisplay(UserCount) {
  var vDcolors = document.getElementsByClassName("detectivelistop");
  $.each(vDcolors, function(i, val) {
    if (i < UserCount) {
      $(val).show();
    } else {
      $(val).hide();
    }
  });
}

/* 推理結果の選択 */
$(".detectiveselect0").on("click", function () {
  var vSelectId = Number($(this).attr('data-id'));
  var vSelectNumId = Number($(this).attr('data-num'));
  var vSelectColorId = Number($(this).attr('data-cid'));
  changeDetectiveSus(vSelectId, vSelectNumId, vSelectColorId);
});

$(".detectiveselect1").on("click", function () {
  var vSelectId = Number($(this).attr('data-id'));
  var vSelectNumId = Number($(this).attr('data-num'));
  var vSelectColorId = Number($(this).attr('data-cid'));
  changeDetectiveSus(vSelectId, vSelectNumId, vSelectColorId);
});

$(".detectiveselect2").on("click", function () {
  var vSelectId = Number($(this).attr('data-id'));
  var vSelectNumId = Number($(this).attr('data-num'));
  var vSelectColorId = Number($(this).attr('data-cid'));
  changeDetectiveSus(vSelectId, vSelectNumId, vSelectColorId);
});

$(".crewstatus").on("click", function () {
  var vSelectId = Number($(this).attr('data-id'));
  var vSelectNumId = Number($(this).attr('data-num'));
  var vSelectColorId = Number($(this).attr('data-cid'));
  changeDetectiveSus(vSelectId, vSelectNumId, vSelectColorId);
});

/* 推理結果のセット */
function changeDetectiveSus(UserIndex, NumIndex, ColorIndex) {
  var vUserList = document.getElementsByClassName("detectivelist");
  $.each(vUserList, function(i, val) {
    if (i == UserIndex) {
      var vSusList = val.getElementsByClassName("detectivelistsub");
      var vSus = vSusList[NumIndex];
      switch(ColorIndex){
        case 0 : vSus.style.backgroundColor = SUS_COLOR; $(vSus).css("color",SUS_CHAR_COLOR); $(vSus).text("SUS"); break;
        case 1 : vSus.style.backgroundColor = QUE_COLOR; $(vSus).css("color",QUE_CHAR_COLOR); $(vSus).text("?"); break;
        case 2 : vSus.style.backgroundColor = PUR_COLOR; $(vSus).css("color",PUR_CHAR_COLOR); $(vSus).text("PUR"); break;
        case 3 : vSus.style.backgroundColor = DEAD_COLOR; $(vSus).css("color",DEAD_CHAR_COLOR); $(vSus).text("DEAD"); break;
        default : vSus.style.backgroundColor = QUE_COLOR; $(vSus).css("color",QUE_CHAR_COLOR); $(vSus).text("?"); break;
      }
  　}
  });
}

/* 推理結果のリセット */
$(".resetbutton").on("click", function () {
  var vSusList = document.getElementsByClassName("detectivelistsub");
  $.each(vSusList, function(i, val) {
    val.style.backgroundColor = QUE_COLOR;
    $(val).css("color",QUE_CHAR_COLOR);
    $(val).text("?");
  });
});
