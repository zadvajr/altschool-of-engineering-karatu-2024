// JavaScript Objects

// creating object
const person = {
  firstName: "Daniel",
  lastName: "Zadva Jnr",
  age: 22,
  height: 175,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//accessing object properties
//using dot notation
console.log(person.lastName); //prints Zadva Jnr

//using square brackets method
console.log(person["firstName"]); // prints Daniel

//accessing object's function
console.log(person.fullName());

//create a copy of an object
const human = person;
console.log(human.fullName());

//making changes to person object will affect human object
person.age = 23;
console.log(human.age);

// adding a new properties to an object
person.skinColor = "dark";
console.log(human.skinColor);

// deleting objects properties
delete person.skinColor;
console.log(person);


