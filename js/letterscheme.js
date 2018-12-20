let letterInputs = document.querySelectorAll("tr td");
let checkCounter = 0;
const buffer = document.getElementById('buffer');
let bufferValue = buffer.value;
buffer.addEventListener("change", bufferChanged);

let letterScheme = {
  UBL: "A",
  UBR: "B",
  UFR: "C",
  UFL: "D",
  LBU: "E",
  LFU: "F",
  LFD: "G",
  LBD: "H",
  FUL: "I",
  FUR: "J",
  FDR: "K",
  FDL: "L",
  RFU: "M",
  RBU: "N",
  RBD: "O",
  RFD: "P",
  BUR: "Q",
  BUL: "R",
  BDL: "S",
  BDR: "T",
  DFL: "U",
  DFR: "V",
  DBR: "W",
  DBL: "X",
};


//checking for changes in letterscheme and changing the letterscheme object key
letterInputs.forEach(function(elem) {
    elem.addEventListener("change", function() {
      letterScheme[event.srcElement.id] = document.getElementById(event.srcElement.id).value;
    });
});


function bufferChanged() {
  bufferValue = buffer.value.toUpperCase();
  if (bufferValue.length !== 3) {
    alert("Buffer must be in BLD Form, eg. UBL")
  } else {
    availableLetters = [];
    if (bufferValue[0] === "U" || bufferValue[0] === "D" || bufferValue[0] === "F" || bufferValue[0] === "B" || bufferValue[0] === "R" || bufferValue[0] === "L") {
      if (bufferValue[1] === "U" || bufferValue[1] === "D" || bufferValue[1] === "F" || bufferValue[1] === "B" || bufferValue[1] === "R" || bufferValue[1] === "L") {
        if (bufferValue[2] === "U" || bufferValue[2] === "D" || bufferValue[2] === "F" || bufferValue[2] === "B" || bufferValue[2] === "R" || bufferValue[2] === "L") {
          discardedLetters[0] = bufferValue[0] + bufferValue[1] + bufferValue[2];
          discardedLetters[1] = bufferValue[0] + bufferValue[2] + bufferValue[1];
          discardedLetters[2] = bufferValue[1] + bufferValue[0] + bufferValue[2];
          discardedLetters[3] = bufferValue[1] + bufferValue[2] + bufferValue[0];
          discardedLetters[4] = bufferValue[2] + bufferValue[0] + bufferValue[1];
          discardedLetters[5] = bufferValue[2] + bufferValue[1] + bufferValue[0];
          for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 6; j++) {
              if (allLetters[i] != discardedLetters[j]) {
                checkCounter += 1;
              }
            }
            if (checkCounter == 6) {
              availableLetters.push(allLetters[i])
            }
            checkCounter = 0;
          }
        }
      }
    }
  }
}
bufferChanged();

//everything for opening the letterscheme box and the instagram opener
const nameEle = document.getElementById('name');
const chooseLetterSchemeEle = document.getElementById('choose-letter-scheme');
const letterSchemeBackgroundEle = document.getElementById('letter-scheme-background');
const letterSceneEle = document.getElementById('letter-scheme');
const letterSchemeX = document.getElementById('letter-scheme-x');

nameEle.addEventListener("click", function() {
  window.open('https://www.instagram.com/tams_cubing_corner/');
})

chooseLetterSchemeEle.addEventListener("click", function() {
  letterSchemeBackgroundEle.style.display = 'block';
})

letterSchemeBackgroundEle.addEventListener("click", function(e) {
  if (e.target != letterSceneEle && e.target.parentNode != letterSceneEle && e.target.parentNode.parentNode != letterSceneEle && e.target.parentNode.parentNode.parentNode != letterSceneEle && e.target.parentNode.parentNode.parentNode.parentNode != letterSceneEle && e.target.parentNode.parentNode.parentNode.parentNode.parentNode != letterSceneEle && e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode != letterSceneEle){
    letterSchemeBackgroundEle.style.display = 'none';
    console.log(e.target)
  }
})

letterSchemeX.addEventListener("click", function(e) {
    letterSchemeBackgroundEle.style.display = 'none';
})
