let discardedLetters = ["UBL", "ULB", "LBU", "LUB", "BUL", "BLU"];
let allLetters = ["UBL", "UBR", "UFR", "UFL", "LBU", "LFU", "LFD", "LBD", "FUL", "FUR", "FDR", "FDL", "RFU", "RBU", "RBD", "RFD", "BUR", "BUL", "BDL", "BDR", "DFL", "DFR", "DBR", "DBL"];
let availableLetters = [];
let tamletters = ["UBL", "UBR", "UFL", "RFD", "FDR"]

let generatedLetterBox = document.getElementById('generated-letters');

document.getElementById('get-new-pair').addEventListener("click", getNewPair, false);

let firstBldLetter;
let secondBldLetter;

function getNewPair() {
  firstBldLetter = availableLetters[Math.floor(Math.random() * 21)];//tamletters[Math.floor(Math.random() * 5)]
  secondBldLetter = availableLetters[Math.floor(Math.random() * 21)];
  checkSame();
}

function checkSame() {
  if (firstBldLetter[0] + firstBldLetter[1] + firstBldLetter[2] == secondBldLetter) {
    getNewPair();
  } else if (firstBldLetter[0] + firstBldLetter[2] + firstBldLetter[1] == secondBldLetter){
    getNewPair();
  } else if (firstBldLetter[1] + firstBldLetter[0] + firstBldLetter[2] == secondBldLetter){
    getNewPair();
  } else if (firstBldLetter[1] + firstBldLetter[2] + firstBldLetter[0] == secondBldLetter){
    getNewPair();
  } else if (firstBldLetter[2] + firstBldLetter[1] + firstBldLetter[0] == secondBldLetter){
    getNewPair();
  } else if (firstBldLetter[2] + firstBldLetter[0] + firstBldLetter[1] == secondBldLetter){
    getNewPair();
  } else {
    generatedLetterBox.innerText = letterScheme[firstBldLetter] + letterScheme[secondBldLetter];
  }
}
