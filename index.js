let alphabet = "abcdefghijklmnopqrstuvwxyz"
let word = "";
let correctLetters = new Array();
let correctLettersNumber = new Array();
let imageArray = ["src/img0.PNG","src/img1.PNG","src/img2.PNG","src/img3.PNG","src/img4.PNG","src/img5.PNG","src/img6.PNG","src/img7.PNG"];
let hit = false;
let miss = false;
let hitLetterCount = 0;
let changeImageCount = 1;


function wordClick() {
    let myText = document.getElementById('myText').value;
    word = myText;
    if(word != ""){
        document.getElementById('myText').remove();
        document.getElementById('pText').remove();
        document.getElementById('btnWord').remove();
        tryLetter();
        createAlphabet();
    }
  }
  function tryLetter() {
      for (let i = 0; i < word.length; i++) {
        let createTextbox = document.createElement('input');
        createTextbox.setAttribute('type', 'text');
        createTextbox.setAttribute('value', '');
        document.body.appendChild(createTextbox);
      }
        let createBr = document.createElement('br');
        document.body.appendChild(createBr);
  }
  function createAlphabet() {
    for (let i = 0; i < alphabet.length; i++) {
        let createBtn = document.createElement('button');
        let btnText = document.createTextNode(alphabet[i]);
        createBtn.appendChild(btnText);
        document.body.appendChild(createBtn);
        document.getElementById('image').style.visibility = "visible";

        createBtn.onclick = clickAlphabet;
        function clickAlphabet() {
            for (let j = 0; j < word.length;j++) {
                if (word[j] == alphabet[i]) {
                    document.getElementsByTagName('button')[i].style.backgroundColor = "lightgreen";
                    correctLetters.push(alphabet[i]);
                    correctLettersNumber.push(j);
                    correctLetterShow();
                    hit = true;
                }
                else{
                    document.getElementsByTagName("button")[i].disabled = true;
                    miss = true;
                }
            }
            checkWin();
        }
    }
}
function checkWin() {
    if (hit) {
        hitLetterCount++;
        hit = false;
        if (hitLetterCount==word.length) {
            alert("Great.");
        }
    }
    //Change image
    else{
        changeImageCount++;
        console.log(changeImageCount);
        document.getElementById('image').src = imageArray[changeImageCount];
        if(changeImageCount==imageArray.length){alert("You lose.");}
    }
}
function correctLetterShow() {
    for (let i = 0; i < correctLettersNumber.length; i++) {
        for (let j = 0; j < correctLetters.length; j++) {
            document.getElementsByTagName('input')[correctLettersNumber[i]].setAttribute("value", correctLetters[i]);
        }
    }
}

