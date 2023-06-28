var student = "Rakshit";
var age = 21;
var vote = true;
var job = null;
var designation;
console.log(student, age);
console.log(student + " " + age + "voting eligilability " + vote);
console.log(job);
console.log(designation);

// innerhtml
let html = document.getElementById("myP").innerHTML;
document.getElementById("demo").innerHTML = html;

// maths
function add() {
  var results =
    parseInt(document.getElementById("a").value) +
    parseInt(document.getElementById("b").value);
  document.getElementById("results").innerHTML = results;
}

function sub() {
  var results =
    parseInt(document.getElementById("a").value) -
    parseInt(document.getElementById("b").value);
  document.getElementById("results").innerHTML = results;
}

function multiply() {
  var results =
    parseInt(document.getElementById("a").value) *
    parseInt(document.getElementById("b").value);
  document.getElementById("results").innerHTML = results;
}

function divide() {
  var results =
    parseInt(document.getElementById("a").value) /
    parseInt(document.getElementById("b").value);
  document.getElementById("results").innerHTML = results;
}

// Object Creation
const Employee = {
  name: "Sandeep",
  designation: "Web Developer",
  salary: 20000,
};
document.getElementById("detail").innerHTML = Employee.name;

// Alert, prompt, Confirm

// alert("Hello");
// const name = prompt("Enter your name:");
// console.log("Hello " + name);

// const result = confirm("Are you sure you want to learn full stack");
// console.log(result);
