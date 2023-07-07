// var student = "Rakshit";
// var age = 21;
// var vote = true;
// var job = null;
// var designation;
// console.log(student, age);
// console.log(student + " " + age + "voting eligilability " + vote);
// console.log(job);
// console.log(designation);

// // innerhtml
// let html = document.getElementById("myP").innerHTML;
// document.getElementById("demo").innerHTML = html;

// // maths
// function add() {
//   var results =
//     parseInt(document.getElementById("a").value) +
//     parseInt(document.getElementById("b").value);
//   document.getElementById("results").innerHTML = results;
// }

// function sub() {
//   var results =
//     parseInt(document.getElementById("a").value) -
//     parseInt(document.getElementById("b").value);
//   document.getElementById("results").innerHTML = results;
// }

// function multiply() {
//   var results =
//     parseInt(document.getElementById("a").value) *
//     parseInt(document.getElementById("b").value);
//   document.getElementById("results").innerHTML = results;
// }

// function divide() {
//   var results =
//     parseInt(document.getElementById("a").value) /
//     parseInt(document.getElementById("b").value);
//   document.getElementById("results").innerHTML = results;
// }

// // Object Creation
// const Employee = {
//   name: "Sandeep",
//   designation: "Web Developer",
//   salary: 20000,
// };
// document.getElementById("detail").innerHTML = Employee.name;

// // Alert, prompt, Confirm

// // alert("Hello");
// // const name = prompt("Enter your name:");
// // console.log("Hello " + name);

// // const result = confirm("Are you sure you want to learn full stack");
// // console.log(result);

// // Assignment Operator
// // let coins = 10;
// // let coinsPerEnemy = 5;
// // document.write("Result will be:");
// // document.write(
// //   coins++ -
// //     ++coinsPerEnemy +
// //     ++coins -
// //     ++coinsPerEnemy +
// //     coins-- -
// //     (((--coinsPerEnemy * ++coins) / ++coinsPerEnemy) % coins--)
// // );
// // Comparison Operator
// let team1Score = 350;
// let team2Score = 260;
// let teamWin1 = team1Score > team2Score;
// document.write("Has Team 1 won: " + teamWin1);
// document.write("<br>");
// let team3Score = 280;
// let team4Score = 275;
// let teamWin2 = team3Score < team4Score;
// document.write("Has Team 3 won: " + teamWin2);
// document.write("<br>");
// let team5Score = 320;
// let team6Score = 320;
// let teamWin3 = team5Score >= team6Score;
// document.write("Has Team 4 won: " + teamWin3);
// document.write("<br>");
// let team7Score = 270;
// let team8Score = 260;
// let teamWin4 = team7Score <= team8Score;
// document.write("Has Team 5 won: " + teamWin4);
// document.write("<br>");

// // Logical Operator
// document.write("<h3>Logical Operator</h3>");
// let a = false;
// let b = false;
// logicalAnd = a && b;
// document.write(logicalAnd);
// document.write("<br>");
// let c = false;
// let d = true;
// logicalAnd = c && d;
// document.write(logicalAnd);
// document.write("<br>");
// let e = true;
// let f = false;
// logicalAnd = e && f;
// document.write(logicalAnd);
// document.write("<br>");
// let g = true;
// let h = true;
// logicalAnd = g && h;
// document.write(logicalAnd);
// document.write("<br>");
// let i = true;
// let j = false;
// logicalAnd = i || j;
// document.write(logicalAnd);
// document.write("<br>");
// document.write("<hr>");

// // If-Else Statement
// let user1 = {
//   name: "Yaksh",
//   age: 23,
//   nationality: "Indian",
//   isEligible: false,
// };
// if (user1.age >= 18 && user1.nationality == "Indian") {
//   user1.isEligible = true;
// }
// console.log(user1.isEligible);

// console.log(user1.age >= 18 && user1.nationality == "Indian" ? true : false);

// // Arrays Method

// // toString()
// // document.write("<h3>1. toString()</h3>");
// // let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// // document.write(bikes.toString());
// // document.write("<br>");
// // document.write("<hr>");

// // join()
// // document.write("<h3>2. join()</h3>");
// // let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// // document.write(bikes.join());
// // document.write("<br>");
// // document.write(bikes.join(""));
// // document.write("<br>");
// // document.write(bikes.join("-"));
// // document.write("<br>");
// // document.write("<hr>");

// // pop()
// // document.write("<h3>3. pop()</h3>");
// // let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// // document.write(bikes.pop());
// // document.write("<br>");
// // document.write(bikes);
// // document.write("<hr>");

// // push()
// // document.write("<h3>4. push()</h3>");
// // let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// // document.write(bikes.push("Ducatti", "Royal Enfield"));
// // document.write("<br>");
// // document.write(bikes);
// // document.write("<hr>");

// // shift()
// // document.write("<h3>5. shift()</h3>");
// // let bikes = ["Yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];
// // document.write(bikes.shift());
// // document.write("<br>");
// // document.write(bikes);
// // document.write("<hr>");

// // unshift()
// document.write("<h3>6. unshift()</h3>");
// let bikes = ["Yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];
// document.write(bikes.unshift("BMW", "Kawasaki"));
// document.write("<br>");
// document.write(bikes);
// document.write("<hr>");

// // delete (operator)
// document.write("<h3>7. delete(operator)</h3>");
// let fruits = ["Banana", "Apples", "Grapes"];
// delete fruits[1];
// document.write(fruits);
// document.write("<hr>");

// // concat()
// document.write("<h3>8. concat()</h3>");
// let ary1 = [1, 2, 3];
// let ary2 = [23, 43, 53];
// let ary3 = [111, 12];
// let ary_new = ary1.concat(ary2, ary3);
// document.write(ary_new);
// document.write("<hr>");

// // sort()
// document.write("<h3>9. sort()</h3>");
// let ary = [99, 32, 23, 43, 53];
// let str = ["Zebra", "Year", "Van", "Apple"];
// ary.sort();
// document.write(ary);
// document.write("<br>");
// str.sort();
// document.write(str);
// document.write("<hr>");

// // splice()
// document.write("<h3>10. splice()</h3>");
// let arry = [99, 32, 23, 43, 53, 100];
// arry.splice(2, 3, "a", "b", "c");
// document.write(arry);
// document.write("<hr>");

// for....in and for....of loop

// let employees = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];

// // Accessing all object

// for (let key_name of employees) {
//   console.log(key_name);
// }
// console.log("************************************************************");

// // Website in all object

// for (let key_name of employees) {
//   console.log(key_name.website);
// }
// console.log("************************************************************");

// // Address details in object

// for (let key_name of employees) {
//   console.log("Address details of " + key_name.name);
//   console.log("=============================================");
//   for (let addr in key_name.address) {
//     console.log(key_name.address[addr]);
//   }
// }
// console.log("************************************************************");

// // Phone Number of all employees

// for (let number of employees) {
//   console.log(number.phone);
// }
// console.log("************************************************************");

// // Company name of all object

// for (let key_name of employees) {
//   console.log("Company details of " + key_name.name);
//   console.log("=============================================");
//   for (let company_name in key_name.company) {
//     console.log(key_name.company[company_name]);
//   }
// }
// console.log("************************************************************");

// // Geo-Location

// for (let key_name of employees) {
//   console.log("Location details of " + key_name.name);
//   console.log("=============================================");
//   for (let geo_location in key_name.address.geo) {
//     console.log(geo_location + ":" + key_name.address.geo[geo_location]);
//   }
//   console.log("=============================================");
// }
// console.log("************************************************************");

// let levels = [
//   { level: 0, name: "noobs" },
//   { level: 1, name: "beginners" },
//   { level: 2, name: "amateur" },
//   { level: 3, name: "intermediate" },
//   { level: 4, name: "expert" },
// ];

// for (let player_level of levels) {
//   console.log(player_level.name);
// }

// let i = 0;
// while (i < levels.length) {
//   console.log(levels[i].name);
//   i++;
// }

// let x = 0;
// for (x = 0; x < levels.length; x++) {
//   console.log(levels[x].name);
// }

// let i = 0;
// do {
//   console.log(levels[i].name);
//   i++;
// } while (i < levels.length);

// let games = ["Call of duty", "Fortnite", "Assassins creed"];

// for (let i = 0; i < games.length; i++) {
//   console.log(games[i]);
// }

// let x = 0;
// while (x < games.length) {
//   console.log(games[x]);
//   x++;
// }

// let j = 0;
// do {
//   console.log(games[j]);
//   j++;
// } while (j < games.length);

// for (let game of games) {
//   console.log(game);
// }

// let players = ["Jett", "Raze", "Yoru", "Fade"];

// for (let player of players) {
//   for (let temp in player) {
//     console.log(player[temp]);
//   }
// }

// let gamer = {
//   game_mode: ["Competitive", "Unrated", "SwiftPlay", "DeathMatch"],
//   episode_and_act: ["E1:A1", "E1:A2", "E2:A1", "E2:A2"],
//   name: "God Player",
//   gamer_id: 1,
//   profile_url: "some url",
//   general: {
//     wins: 318,
//     losses: 150,
//     win_percent: "67%",
//     kills: 4850,
//     death: 3512,
//     headshot_percent: "25%",
//   },
//   rating: {
//     actual_rank: {
//       name: "Immortal 3",
//       points: 75,
//       rank_image_url: "url",
//     },
//     peak_rating: {
//       name: "Radiante",
//       episode_and_act: "E2:A2",
//     },
//   },
//   most_played_agents: [
//     {
//       game_played: 208,
//       agent_name: "Jett",
//       win_rate: "58%",
//       head_shot_percent: 28,
//       img_url: "Url",
//     },
//     {
//       game_played: 108,
//       agent_name: "Raze",
//       win_rate: "58%",
//       head_shot_percent: 23,
//       img_url: "Url",
//     },
//     {
//       game_played: 608,
//       agent_name: "Yoru",
//       win_rate: "58%",
//       head_shot_percent: 22,
//       img_url: "Url",
//     },
//     {
//       game_played: 408,
//       agent_name: "Fade",
//       win_rate: "58%",
//       head_shot_percent: 29,
//       img_url: "Url",
//     },
//   ],
//   monthly_win_rate: [],
//   kills_per_weapon: {
//     operator: 1530,
//     phantom: 867,
//   },
// };
