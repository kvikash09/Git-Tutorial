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

// Logical Operator
document.write("<h3>Logical Operator</h3>");
let a = false;
let b = false;
logicalAnd = a && b;
document.write(logicalAnd);
document.write("<br>");
let c = false;
let d = true;
logicalAnd = c && d;
document.write(logicalAnd);
document.write("<br>");
let e = true;
let f = false;
logicalAnd = e && f;
document.write(logicalAnd);
document.write("<br>");
let g = true;
let h = true;
logicalAnd = g && h;
document.write(logicalAnd);
document.write("<br>");
let i = true;
let j = false;
logicalAnd = i || j;
document.write(logicalAnd);
document.write("<br>");
document.write("<hr>");

// If-Else Statement
let user1 = {
  name: "Yaksh",
  age: 23,
  nationality: "Indian",
  isEligible: false,
};
if (user1.age >= 18 && user1.nationality == "Indian") {
  user1.isEligible = true;
}
console.log(user1.isEligible);

// Arrays Method

// toString()
// document.write("<h3>1. toString()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// document.write(bikes.toString());
// document.write("<br>");
// document.write("<hr>");

// join()
// document.write("<h3>2. join()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// document.write(bikes.join());
// document.write("<br>");
// document.write(bikes.join(""));
// document.write("<br>");
// document.write(bikes.join("-"));
// document.write("<br>");
// document.write("<hr>");

// pop()
// document.write("<h3>3. pop()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// document.write(bikes.pop());
// document.write("<br>");
// document.write(bikes);
// document.write("<hr>");

// push()
// document.write("<h3>4. push()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// document.write(bikes.push("Ducatti", "Royal Enfield"));
// document.write("<br>");
// document.write(bikes);
// document.write("<hr>");

// shift()
// document.write("<h3>5. shift()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];
// document.write(bikes.shift());
// document.write("<br>");
// document.write(bikes);
// document.write("<hr>");

// unshift()
document.write("<h3>6. unshift()</h3>");
let bikes = ["Yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];
document.write(bikes.unshift("BMW", "Kawasaki"));
document.write("<br>");
document.write(bikes);
document.write("<hr>");

// delete (operator)
document.write("<h3>7. delete(operator)</h3>");
let fruits = ["Banana", "Apples", "Grapes"];
delete fruits[1];
document.write(fruits);
document.write("<hr>");

// concat()
document.write("<h3>8. concat()</h3>");
let ary1 = [1, 2, 3];
let ary2 = [23, 43, 53];
let ary3 = [111, 12];
let ary_new = ary1.concat(ary2, ary3);
document.write(ary_new);
document.write("<hr>");

// sort()
document.write("<h3>9. sort()</h3>");
let ary = [99, 32, 23, 43, 53];
let str = ["Zebra", "Year", "Van", "Apple"];
ary.sort();
document.write(ary);
document.write("<br>");
str.sort();
document.write(str);
document.write("<hr>");

// splice()
document.write("<h3>10. splice()</h3>");
let arry = [99, 32, 23, 43, 53, 100];
arry.splice(2, 3, "a", "b", "c");
document.write(arry);
document.write("<hr>");
