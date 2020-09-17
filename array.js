let person = {
  name: "chandini",
  age: 24,
  mydetails(collegename) {
    console.log(
      "my name is " +
        this.name +
        "  my age is " +
        this.age +
        " my college name is " +
        collegename
    );
  } //this represents current object.
};
person.mydetails();

// let x;
// console.log(this);//this represents window object(global context)

// let person2 = person.mydetails;
// person2();
// let person3 = person.mydetails.bind(person, "svne");
// person3();

person.mydetails.call(person, "svc", "vem"); //call method
person.mydetails.apply(person, ["svu", "vem"]); //apply method parameters should give in arrays
let a = person.mydetails.bind(person, "bee"); //it gives reference to new function we should call new function.
a();
console.log(Math.max.apply(null, [1, 3, 4]));
console.log(Math.max.call(null, 1, 3, 4));

let x = function() {
  console.log("h");
};
x.call(this);

var num1 = [23, 234, 34, 345, 56, 567];
var num2 = [345, 45, 56];
var num3 = [];
var num4 = num3.concat(num1, num2);
for (let i = 0; i < num4.length; i++) {
  for (let j = i + 1; j < num4.length; j++) {
    if (num4[i] === num4[j]) {
      console.log(num4[i]);
    }
  }
}
