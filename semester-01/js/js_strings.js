//javascript strings
//strings are zero or more characters inside single or double quotes

//creating string
let name = "John Doe";

//string length: finding the length of a string
console.log("there are " + name.length + " characters in " + name);

// charAt string method
//the charAt method returns a character at a particular index or postion
let text = "Hello World";
console.log(text.charAt(0)); //will prints H to console

// the charCodeAt() method it returns the code of the character at the specified index.
//Unicode-16 character
let letters = "ABCDEFG";
console.log(letters.charCodeAt(0)); //Prints 65

// at() gets a character at a certain position
console.log(letters.at(0)); //prints A

// at() method can use negative index
console.log(letters.at(-1)); // prints G

// Extracting strings parts
// slice() method - slice extracts parts of string and returns it
let fruits = "Apple, Banana, Cherry";
let part = fruits.slice(7, 13);
console.log(part); //prints Banana

// if you omit the second parameter, the slice will slice up to the end
console.log(fruits.slice(7)); //prints Banana, Cherry

// if you use negative it will slice from the end of the string
console.log(fruits.slice(-12, 13)); //prints nana

// substring() method
console.log(fruits.substring(7, 13)); //prints Banana

//substr() method
console.log(fruits.substr(7, 6)); //prints Banana - 6 characters from index 7

//converting strng to uppercase
let txt = "Hello World";
console.log(txt.toUpperCase()); //prints HELLO WORLD

//converting string to lowercase
let fname = "DANIEL";
console.log(fname.toLowerCase()); //prints daniel

//concat() - method joins two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); //prints Hello World

//trim() - method removes whitespace from both sides of a string
let str = "     Hello World!     "; //string with whitespace
