// Type conversion 
console.log('Welcome to tut5 Type cast');
let myVar;
myVar = String(34);   //Number to String
console.log(myVar, (typeof myVar));

let booleanVar = String(true); // Boolean to String
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());   //Date to String
console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);   //Array to String
console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())    //Number to String

// let stri = Number("3434.8545");   //String to Number
// stri = Number("343d4");      //String to Number
// stri = Number(false);        //Boolean to Number
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.598');
// number = parseInt(36.82)
console.log(number.toFixed(2), (typeof number));

// Type coercion
let mystr = "100";
let mynum = 34;

console.log(mystr + mynum);
