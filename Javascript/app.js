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

// Assignment Operator
// let coins = 10;
// let coinsPerEnemy = 5;
// document.write("Result will be:");
// document.write(
//   coins++ -
//     ++coinsPerEnemy +
//     ++coins -
//     ++coinsPerEnemy +
//     coins-- -
//     (((--coinsPerEnemy * ++coins) / ++coinsPerEnemy) % coins--)
// );
// Comparison Operator
let team1Score = 350;
let team2Score = 260;
let teamWin1 = team1Score > team2Score;
document.write("Has Team 1 won: " + teamWin1);
document.write("<br>");
let team3Score = 280;
let team4Score = 275;
let teamWin2 = team3Score < team4Score;
document.write("Has Team 3 won: " + teamWin2);
document.write("<br>");
let team5Score = 320;
let team6Score = 320;
let teamWin3 = team5Score >= team6Score;
document.write("Has Team 4 won: " + teamWin3);
document.write("<br>");
let team7Score = 270;
let team8Score = 260;
let teamWin4 = team7Score <= team8Score;
document.write("Has Team 5 won: " + teamWin4);
document.write("<br>");
