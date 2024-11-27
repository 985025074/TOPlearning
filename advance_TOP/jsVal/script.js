let btn = document.querySelector("button");
let form = document.querySelector("form");
let inputMail = document.getElementById("mail");
let inputWord = document.getElementById("pass");
let inputPhone = document.getElementById("phone");

function clearError(obj) {
  obj.target.setCustomValidity("");
}
inputMail.onchange = clearError;
inputWord.onchange = clearError;
inputPhone.onchange = clearError;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputMail.value.length < 5) {
    inputMail.setCustomValidity("Please enter a valid email address");
    console.log("Please enter a valid email address");
}
  if (inputWord.value.length < 5) {
    inputWord.setCustomValidity("Please enter a valid password");
    console.log("Please enter a valid password");
}
  if (inputPhone.value.length < 10) {
    inputPhone.setCustomValidity("Please enter a valid phone number");
    console.log("Please enter a valid phone number");
}
  console.log("Form submitted");
});
