// Immediately Invoked Function Expression (IIFE)

// (function (a, b, c) {
//   console.log(a + b + c);
// })(2, 3, 4);

// with function name

// (function sum(a, b, c) {
//   console.log(a + b + c);
// })(2, 4, 11);

// Example IIFE

// (function () {
//   var vehicle = {
//     name: "Bikes World",
//     bikesWeb: function () {
//       console.log("Welcome to " + this.name);
//     },
//   };
//   vehicle.bikesWeb();
// })();

// let name = ["TATA", "Mahindra", "Toyota", "BMW"];
// (function (tempName) {
//   var car = {
//     brandName: "Cars Brand",
//     brand: function (temp1) {
//       console.log(this.brandName);
//       for (let arr of temp1) {
//         console.log(arr);
//       }
//     },
//   };
//   console.log(car.brandName);
//   car.brand(tempName);
// })(name);

// let cars = [
//   { name: "TATA", price: 1500000 },
//   { name: "Toyota", price: 1400000 },
//   { name: "Mahindra", price: 1300000 },
//   { name: "Hyundai", price: 1200000 },
//   { name: "Suzuki", price: 1000000 },
//   { name: "TATA", price: 2000000 },
// ];

// // Functions Declaration

// function bookCab(from, to) {
//   console.log("Your Cab has been booked from " + from + " to " + to);
// }
// bookCab("Kormangala", "Jaynagar");

// Functions Expression (Anonymous)

// let amazonOrder = function (list) {
//   console.log("These Product list has been delivered to your address.");
//   for (let item of list) {
//     console.log(item);
//   }
// };
// amazonOrder(["Shoes", "Bag", "Watch", "Perfumes", "Mobile"]);

// Functions Expression (Named)

// let buyMovieTicket = function buyTicket(movieDetails) {
//   for (let details in movieDetails) {
//     console.log(details + " : " + movieDetails[details]);
//   }
// };
// buyMovieTicket({
//   Name: "Mission Impossible:The dead Reckoning",
//   Timing: "9:30 p.m.",
//   Price: 200,
//   Count: 2,
// });

// Arrow Function

// const getCourses = (courses) => {
//   for (let course of courses) {
//     let temp = "";
//     for (let type in course) {
//       temp += course[type] + " ";
//     }
//     console.log(temp);
//   }
// };
// getCourses([
//   { name: "Java", duration: "6 months" },
//   { name: "Javascript", duration: "2 months" },
//   { name: "ReactJS", duration: "2 months" },
//   { name: "HTML", duration: "1 month" },
// ]);

// const gamersZone = {
//   name: "Gamers Zone",
//   playGame: function () {
//     console.log("Welcome to " + this.name + "!");
//   },
// };
// gamersZone.playGame();

// Function as a Constructor

// function Articles(author_name, date, publisher) {
//   this.author_name = author_name;
//   this.date = date;
//   this.publisher = publisher;
// }

// let art1 = new Articles("Sumanth", new Date(), "ExcelR");
// let art2 = new Articles("Manoj", new Date(), "ExcelR");
// let art3 = new Articles("Rakshit", new Date(), "ExcelR");
// let art4 = new Articles("Vikash", new Date(), "ExcelR");
// let art5 = new Articles("Deepak", new Date(), "ExcelR");

// let articles = [];
// articles.push(art1);
// articles.push(art2);
// articles.push(art3);
// articles.push(art4);
// articles.push(art5);

// for (let i = 0; i < articles.length; i++) {
//   console.log(articles[i].author_name);
// }

// Immediate Invoked Function Expression

// let city = "Jaipur";
// (function weather(temperature, city) {
//   console.log("Temperature of " + city + " is " + temperature);
// })("42", city);

// Generator function

// function* notifications() {
//   yield "You have visited the website first time";
//   yield "You have visited the website second time";
//   yield "You have visited the website third time";
//   yield "You have visited the website third time";
//   yield "You have visited the website third time";
// }

// let notifications_gen = notifications();
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);
// console.log(notifications_gen.next().value);

// function* notificationsUnlimited() {
//   let i = 1;
//   while (true) {
//     yield "You have visited the website " + i++ + " time";
//   }
// }

// let notifications_ul = notificationsUnlimited();
// console.log(notifications_ul.next().value);
// console.log(notifications_ul.next().value);
// console.log(notifications_ul.next().value);
// console.log(notifications_ul.next().value);
// console.log(notifications_ul.next().value);
