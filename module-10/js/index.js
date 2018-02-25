const lang = "qwerty";
const string = "qryte";
let allCorrectInput = [];
let iterator = 0;
const charsArr = string.split("");
const timerOutput = document.querySelector(".timer");
const exercise = document.querySelector(".exercise");
const keyboard = document.querySelector(".keyboard");
let bestResult= document.querySelector(".best_result");

exercise.textContent = string;
bestResult.textContent = `Best Result = ${localStorage.getItem('winner')}`;
let timer = setInterval(() => {
  iterator++;
  timerOutput.textContent = iterator;
}, 1000)

window.addEventListener ("keydown", function(e) {
  let check = true;
  
  if(charsArr.includes(e.key)) {
    allCorrectInput.push(e.key);
  } else {
    alert(`symbol ${e.key} not in exercise string, game over`);
    this.clearInterval(iterator);
  }
  if (allCorrectInput.length == 5) {
    this.clearInterval(timer);
    for(const symbol of allCorrectInput) {
      if (symbol != charsArr[allCorrectInput.indexOf(symbol)]) {
        check = false;
      }
    }
    if (check == true) {
      keyboard.textContent = `you win, and you result = ${iterator}`;
      localStorage.setItem("winner", iterator)

    }
  }
  
})
