"use strict";

var firstname = document.getElementById("first_name");
var lastname = document.getElementById("last_name");
var tel = document.getElementById("tel");
var submitBtn = document.getElementById("submit-btn");
var resultsList = document.querySelector(".results");
var variables = ['firstName', 'lastName', 'tel'];

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  var validObject = {};
  if (firstname.validity.patternMismatch) {
    validObject.firstName = false;
    firstname.setCustomValidity('Введите корректное имя');
  } else validObject.firstName = true;
  if (lastname.validity.patternMismatch) {
    validObject.lastName = false;
    lastname.setCustomValidity('Введите корректный фамилию');
  } else validObject.lastName = true;
  if (tel.validity.patternMismatch) {
    tel.tel.setCustomValidity('Введите корректный телефон');
    validObject.tel = false;
  } else validObject.tel = true;
  showResults(validObject);
}

function showResults(results) {
  resultsList.innerHTML = "";
  var firstName = document.createElement('li');
  var lastNAme = document.createElement('li');
  var tel = document.createElement('li');
  var paramArray = [firstName, lastNAme, tel];
  for (var i = 0; i < paramArray.length; i++) {
    var element = results[variables[i]];
    if (element == true) {
      paramArray[i].textContent = "SUCCESS: " + variables[i] + " passed validation";
      paramArray[i].classList.add('success');
    } else {
      "ERROR: " + variables[i] + " failed validation";
      paramArray[i].classList.add('error');
    }
    resultsList.append(paramArray[i]);
  }
}