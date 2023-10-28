let valueInput = document.querySelector(".input .value");
let reload = document.querySelector(".input i");
let output = document.querySelector(".output input");
let submit = document.querySelector(".submit");

let letters = [
  "H h w s 4 c C 6 6",
  "H q w z 8 E N 1 7",
  "s z w 5 x E N 7 p",
  "R p O 0 4 E N 7 7",
  "d t T S 2 E N 7 7",
  "H T w s 4 K 8 9 9",
  "B e a U t i f u l",
  "D e L i C i o u s",
  "M y s t e r i o u s",
  "C o l o r 8 6 5",
  "I m p o r t a n t",
  "W o n d e r f u l",
  "E x c i T i n G",
  "I n C r E d i b l E",
  "C h a l l e n g i n g 1 2 3 5"
];

valueInput.innerHTML = letters[Math.floor(Math.random() * letters.length)];

reload.addEventListener("click", () => {
  location.reload();
});

submit.addEventListener("click", () => {
  if (valueInput.innerHTML.replaceAll(" ", "") == output.value) {
    alert("Success");
    location.reload();
  } else {
    alert("Incorrect");
    location.reload();
  }
});
