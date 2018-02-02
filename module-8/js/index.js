/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/
console.log("test");
const onClick = (event) => {
  let key = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(key);
	if(keys.includes(key)) {
    buttons.forEach(element => {
      if(element.innerText === key) {
         if(document.getElementById("slideThree").checked === true) {
          playSound(element.getAttribute("data-note"));
         }
        element.classList.add("keyboard__btn--active");
        setTimeout(() => {
          element.classList.remove("keyboard__btn--active");
        }, 200);
      }
    });
  
  }
}

window.addEventListener("keydown", onClick);

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
