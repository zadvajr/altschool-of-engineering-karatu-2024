// Array Desctructuring
let names = ["John", "Jane", "Jim", "Jill"];
// let [first, second, third, fourth] = names;
// console.log(first); // John
// console.log(second); // Jane
// console.log(third); // Jim
// console.log(fourth); // Jill

//If you have fewer variables on the left
// let [firstName, secondName] = names;
// console.log(firstName); // John
// console.log(secondName); // Jane

//If you have more variables on the left
// let [fName, sName, tName, lName, mName] = names;
// console.log(fName); // John
// console.log(sName); // Jane
// console.log(tName); // Jim
// console.log(lName); // Jill
// console.log(mName); // undefined

//If you want to skip some values
// let [f, , , l] = names;
// console.log(f); // John
// console.log(l); // Jill

//If you want to get the rest of the values
// let [fName, sName, ...rest] = names;
// console.log(fName); // John
// console.log(sName); // Jane
// console.log(rest); // ["Jim", "Jill"]

//If you want to swap values
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

//If you want to set default values
// let [x, y, z, w = "Jill"] = names;
// console.log(x); // John
// console.log(y); // Jane
// console.log(z); // Jim
// console.log(w); // Jill

//If you want to ignore the rest of the values
// let [fName, sName] = names;
// console.log(fName); // John
// console.log(sName); // Jane

//If you want to ignore the rest of the values
let [fName, sName, ...rest] = names;
console.log(fName); // John
console.log(sName); // Jane
console.log(rest); // ["Jim", "Jill"]
