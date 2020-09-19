// var cars = ["hyndai", "honda", "bmw"];

// var bikes = new Array("herohonda", "tvs");
// console.log(bikes);
// //to string   (we get the o/p in commas)
// console.log(cars.toString());
// //push      push at last
// cars.push("jagur");
// console.log(cars);

// //pop   last value will be deleted
// console.log(cars.pop());

// //unshift add at starting
// cars.unshift("maruthi");
// console.log(cars);
// //shift     delete at starting
// cars.shift();
// console.log(cars);

// //changing elements

// cars[0] = "maruthi";
// cars[cars.length] = "hyndai";

// delete cars[1];
// cars[1] = "jagur";

// console.log(cars);

// //splice to add elements

// cars.splice(2, 0, "honda", "indica");
// //delete one element
// cars.splice(2, 1);
// console.log(cars);
// //merging
// var vehicles = cars.concat(bikes);
// console.log(vehicles);
// //slicing

// var scooters = vehicles.slice(5);
// console.log(scooters);

// var car = vehicles.slice(0, 5);
// console.log(car);

// //sorting for strings

// //ascending
// car.sort();
// console.log(car);
// //descending
// car.reverse();
// console.log(car);

// //sorting for numbers

// var numbers = [17, 1, 6, 23, 9, 2, 0];
// numbers.sort();
// console.log(numbers); //o/p: 0.17,2,23,6,9
// //using function

// numbers.sort(function(a, b) {
//   return a - b; //ascending order
// });
// console.log(numbers);

// //desecending order
// numbers.sort(function(a, b) {
//   return b - a;
// });
// console.log(numbers);
// //finding elements

// let number = [1, 2, 3, 4, 1];
// console.log(number.indexOf(1));
// console.log(number.lastIndexOf(1));
// console.log(number.includes(1));

//finding reference type elements
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

//console.log(courses.includes({ id: 1, name: "a" }));
const course = courses.findIndex(function(course) {
  return course.id === 1;
});
console.log(course);

// let courses = [
//   { id: 1, name: "java" },
//   { id: 2, name: "js" }
// ];

// let course = courses.find(function(course) {
//   return course.name === "java";
// });

// console.log(course);

// console.log("1");
// setTimeout(function() {
//   console.log("2");
// }, 0);
// console.log("3");
