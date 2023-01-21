const input = document.getElementById("input-num");
const addBtn = document.querySelector(".convert");
const todoUl = document.querySelector("#todo-ul");
const form = document.querySelector(".form");
const clear = document.querySelector(".clear");
const displayNumber = document.querySelector(".displayNumber");

// const roma={
//     1000:"M"
// }

//*******EVENT */
form.addEventListener("submit", (e) => {
  convert(input.value);
  e.preventDefault();
  input.value = "";
});

//****FUNCTİONS******
const convert = (num) => {
  let number = Number(num);
  let roman = "";

  while (number >= 1000) {
    number = number - 1000;
    roman += "M";
  }
  while (number >= 900) {
    number = number - 900;
    roman += "CM";
  }
  while (number >= 500) {
    number = number - 500;
    roman += "D";
  }
  while (number >= 400) {
    number = number - 400;
    roman += "CD";
  }
  while (number >= 100) {
    number = number - 100;
    roman += "C";
  }
  while (number >= 90) {
    number = number - 90;
    roman += "XC";
  }
  while (number >= 50) {
    number = number - 50;
    roman += "L";
  }
  while (number >= 40) {
    number = number - 40;
    roman += "XL";
  }
  while (number >= 10) {
    number = number - 10;
    roman += "X";
  }
  while (number >= 9) {
    number = number - 9;
    roman += "IX";
  }
  while (number >= 4) {
    number = number - 5;
    roman += "V";
  }
  while (number >= 4) {
    number = number - 4;
    roman += "IV";
  }
  while (number >= 1) {
    number = number - 1;
    roman += "I";
  }

  displayNumber.innerText = roman;
};
