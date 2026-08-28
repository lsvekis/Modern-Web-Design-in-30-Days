console.log("JavaScript is connected!");
let messageValue = "Hello World";
console.log(messageValue);
function add(a, b) { return a + b; }
console.log(add(3, 4));
const input = document.querySelector("#ageInput");
const checkButton = document.querySelector("#checkAge");
const result = document.querySelector("#result");
checkButton.addEventListener("click", function () {
  if (!input.value) { result.textContent = "Please enter a value."; return; }
  const age = Number(input.value);
  if (age >= 18) { result.textContent = "You are an adult."; } else { result.textContent = "You are under 18."; }
});
const changeButton = document.querySelector("#changeText");
const message = document.querySelector("#message");
function handleClick() { message.textContent = "The button was clicked!"; }
changeButton.addEventListener("click", handleClick);
