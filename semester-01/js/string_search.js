//string search
//indexOf() - method searches a string for a specified value and returns the position of the match
let str = "Please locate where 'locate' occurs!";
let index = str.indexOf("locate");
console.log(index); //prints 7
console.log(str.indexOf("Daniel")); //prints -1

//lastIndexOf() - method searches a string for a specified value and returns the position of the match
let txt = "Please locate where 'locate' occurs!";
let pos = txt.lastIndexOf("locate");
console.log(pos); //prints 21