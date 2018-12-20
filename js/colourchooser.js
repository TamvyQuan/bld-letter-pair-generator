/*
Tam Quan
2016QUAN03
*/

const colourScheme = {
  wg: ["#fff", "#ff9933", "#66ff33", "#ff3300", "#1a75ff", "#ffff1a"],
  wr: ["#fff", "#66ff33", "#ff3300", "#1a75ff", "#ff9933", "#ffff1a"],
  wb: ["#fff", "#ff3300", "#1a75ff", "#ff9933", "#66ff33", "#ffff1a"],
  wo: ["#fff", "#1a75ff", "#ff9933", "#66ff33", "#ff3300", "#ffff1a"],
  yg: ["#ffff1a", "#ff3300", "#66ff33", "#ff9933", "#1a75ff", "#fff"],
  yo: ["#ffff1a", "#66ff33", "#ff9933", "#1a75ff", "#ff3300", "#fff"],
  yb: ["#ffff1a", "#ff9933", "#1a75ff", "#ff3300", "#66ff33", "#fff"],
  yb: ["#ffff1a", "#ff9933", "#1a75ff", "#ff3300", "#66ff33", "#fff"],
  br: ["#1a75ff", "#fff", "#ff3300", "#ffff1a", "#ff9933", "#66ff33"],
  by: ["#1a75ff", "#ff3300", "#ffff1a", "#ff9933", "#fff", "#66ff33"],
  bo: ["#1a75ff", "#ffff1a", "#ff9933", "#fff", "#ff3300", "#66ff33"],
  bw: ["#1a75ff", "#ff9933", "#fff", "#ff3300", "#ffff1a", "#66ff33"],
  gw: ["#66ff33", "#ff3300", "#fff", "#ff9933", "#ffff1a", "#1a75ff"],
  go: ["#66ff33", "#fff", "#ff9933", "#ffff1a", "#ff3300", "#1a75ff"],
  gy: ["#66ff33", "#ff9933", "#ffff1a", "#ff3300", "#fff", "#1a75ff"],
  gr: ["#66ff33", "#ffff1a", "#ff3300", "#fff", "#ff9933", "#1a75ff"],
  rb: ["#ff3300", "#ffff1a", "#1a75ff", "#fff", "#66ff33", "#ff9933"],
  rw: ["#ff3300", "#1a75ff", "#fff", "#66ff33", "#ff9933", "#ffff1a"],
  rg: ["#ff3300", "#fff", "#66ff33", "#ffff1a", "#1a75ff", "#ff9933"],
  ry: ["#ff3300", "#66ff33", "#ffff1a", "#1a75ff", "#fff", "#ff9933"],
  og: ["#ff9933", "#ffff1a", "#66ff33", "#fff", "#1a75ff", "#ff3300"],
  ow: ["#ff9933", "#66ff33", "#fff", "#1a75ff", "#ffff1a", "#ff3300"],
  ob: ["#ff9933", "#fff", "#1a75ff", "#ffff1a", "#66ff33", "#ff3300"],
  oy: ["#ff9933", "#1a75ff", "#ffff1a", "#66ff33", "#fff", "#ff3300"],
}

let topColour = document.getElementById('top-colour-chooser');
let frontColour = document.getElementById('front-colour-chooser');
let uFace = document.getElementById('u-face');
let lFace = document.getElementById('l-face');
let fFace = document.getElementById('f-face');
let rFace = document.getElementById('r-face');
let bFace = document.getElementById('b-face');
let dFace = document.getElementById('d-face');

topColour.addEventListener("change", function(){
  changeColourScheme();
})

frontColour.addEventListener("change", function(){
  changeColourScheme();
})

function changeColourScheme() {
  if (topColour.value + frontColour.value != "wy" && topColour.value + frontColour.value != "yw" && topColour.value + frontColour.value != "gb" &&topColour.value + frontColour.value !=  "bg" && topColour.value + frontColour.value != "ro" && topColour.value + frontColour.value != "or") {
    if (topColour.value + frontColour.value != "ww" && topColour.value + frontColour.value != "yy" && topColour.value + frontColour.value != "gg" &&topColour.value + frontColour.value !=  "bb" && topColour.value + frontColour.value != "rr" && topColour.value + frontColour.value != "oo") {
      uFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][0];
      lFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][1];
      fFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][2];
      rFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][3];
      bFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][4];
      dFace.style.backgroundColor = colourScheme[topColour.value + frontColour.value][5];
    } else {
        alert("That colour combination is not permitted on a standard Rubik's Cube")
      }
  } else {
    alert("That colour combination is not permitted on a standard Rubik's Cube")
  }
}
changeColourScheme();
