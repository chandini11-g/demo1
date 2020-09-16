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
