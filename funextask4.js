var num1 = parseInt(prompt("enter number1 value"));
var num2 = parseInt(prompt("enter number2 value"));
var operator = prompt("enter the operator");

function evalnumbers() {
  if (operator === "add") {
    document.write("<h1> ", num1 + num2, "</h1> ");
  } else if (operator === "subtract") {
    document.write("<h1> ", num1 - num2, "</h1> ");
  } else if (operator === "multiply") {
    document.write("<h1>", num1 * num2, "</h1> ");
  } else if (operator === "divide") {
    document.write("<h1> ", num1 / num2, "</h1> ");
  } else if (operator === "modulus") {
    document.write("<h1> ", num1 % num2, "</h1> ");
  } else {
    document.write("<h1>invalid operation</h1>");
  }
}
evalnumbers();