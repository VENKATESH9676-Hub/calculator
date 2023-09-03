// let input = document.getElementById("inputBox");
// let button = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(button);
// arr.foreach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string.eval(string);
//       input.value = string;
//     }
//     string += e.target.innerHTML;
//     input.value = string;
//   });
// })

let inputBox = document.getElementById("inputBox");
function display(num) {
  inputBox.value += num;
}
function calculate() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (err) {
    alert("Invalid");
  }
}
function AllClear() {
  inputBox.value = "";
}
function Del() {
  inputBox.value = inputBox.value.slice(0, -1);
}
