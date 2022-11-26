// var nm = "Kiran";
// console.log(nm);

// var nm = "Reddy";
// console.log(nm)

// let name = "KiranReddy";
// name = "Balemla Kiran"
// console.log(name);

// let name = "KiranReddy"; //RE-declaration is not possible if we declare with let keyword
// console.log(name);


// const name1 = "Ravikiran";
// name1 = "Reddy" //It is not possible to change value of CONST variable once declared
// console.log(name1)

//NOTE: ==>LET & CONST are block scope, VAR is function scope
// console.log();
// function placeOrder(status){
//   if(status){
//     let message = "Order successfull";
//     console.log(message);
//   }
//   console.log(message);
// }
// // placeOrder();
// placeOrder(true);

// function placeOrder(status){
//   let message = "Order successfull from function";
//   if(status){
//     var x = "Variable declared with var keyword";
//     let message = "Order successfull from if block";
//     console.log(message);
    
//   }
//   console.log(message);
//   console.log(x);
// }
// placeOrder(true);




//CLASSes in js

// class Animal{

// }
// a = new Animal();
// console.log(a)


// class Animal1{
//   constructor(){
//     this.moves = true;
//   }
// }
// a1 = new Animal1();
// console.log(a1.moves);

// class Rabbit extends Animal1{
  
// }
// rab = new Rabbit();
// console.log(rab.moves+ " from rabbit class")
// console.log();

// class Raabbit1 extends Animal1{
//   constructor(){
//     super();
//     this.eat = true;
//   }
// }
// rab1 = new Raabbit1;
// console.log(rab1.moves+ " from rabbit2 class")
// console.log(Raabbit1.__proto__);
// console.log(Animal1.__proto__);



//var let testing
// function varTest(){
//   var x = true;
//   console.log(x);
// }
// varTest();
// console.log(x);

// let a = 10;
// function letTest(){
//   let a = 90;
//   let b = 20;
//   console.log(a+" a from letTest");
//   console.log(b+" b from letTest");
// }
// letTest()
// console.log(a+" a from letTest");
//   // console.log(b+" b from letTest");

// //ARROW FUNCTIONS
// function print(firstName, lastName){
//   return firstName+" "+lastName;
// }
// var x = print("Ravikiran", "REddy");
// console.log(x);

// const print1 = (firstName, lastName) =>{
//   return firstName+" "+lastName
// }
// console.log(print1("RAvi", "Reddy"));

// //ONE ARGUMENT
// const greet = (name) =>{
//   return "Hi "+name;
// }
// console.log(greet("Ravi"));

// const greet2 = name =>{
//   return "Hi "+name;
// }
// console.log(greet2("Ravi"));

// //No ARGUMENTS
// const greet3 = () =>{
//   return "Hi Bro!!";
// }
// console.log(greet3());



//map(), filter(), reduce() methods
// a = [10,20,30]
// console.log(a.map);

// x = a.map(function(item){
//   return item*5;
// })
// console.log(x)
// console.log();

// a = [10,20,30,40,10]
// x = a.filter(function(item){
//   return item==10
// })
// console.log(x);
// x = a.filter(function(item){
//   return item>10
// })
// console.log(x);
// console.log();
// console.log();

// a = [10,20,30,40,10]
// x = a.reduce(function(x,y){
//   console.log("x: "+x);
//   console.log("y: "+y);
//   return x+y;
// })

// console.log(x);


//SPREAD Operator
// Used to pass individual elements to function from an array
// function getSum(a,b,c){
//   console.log(a+b+c);
// }
// a = [1,2,3,4];
// getSum(...a);

// // also used to concatination of arrays
// a = [1,2,3];
// b = [4,5,6];
// console.log([...a,...b]);
// console.log();

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(one+" "+two+" "+rest);


// //REST parameters
// function getSum(...a){
//   let sum = 0;
//   a.forEach(element => sum+=element);
//   console.log(sum);
// }
// getSum(1,2,3);
// getSum(1,2,3,4);
// getSum(1,2,3,4,5);




//TEMPLATE Literals;
//Old Syntax:
var fName = "Ravikiran";
var lName = "REddy";
console.log(fName+" "+lName);

//using templater literals
console.log(`My name is ${fName} ${lName}`);

//Destructors in Javascript
arr = [+91, 7981, 12345, 8930, 29832, 0930];
const [countryCode, firstNum, ...rest] = arr;
console.log(`${countryCode} ${firstNum}
  and ${rest}`);
//Object DEsctucting

person = {
  firstNAme: "Ravikiran",
  lastName: "REddy",
  mobile: 71111111
}
const {firstNAme, lastName, mobile} = person;
console.log(firstNAme)

const {fn, ln, mb} = person;
console.log(fn) //undefined

let {firstNAme:fn1, lastName:ln2, mobile:mb2} = person;
console.log("FN1: "+fn1)
console.log(ln2);
console.log(mb2);


//SUMMERY

// Declaring variables with two new keywords - let and const. The former is used when you wish to change the value of the variable in future and the latter is used when you do not wish to change the value of the variable. Unlike var, the variables declared using let/const keywords are not hoisted.
    


// Classes, which are syntactic sugar over JavaScript's existing functions and help in achieving what is so-called prototype-based inheritance in ES5.
    


// Arrow functions, which is a new syntax over traditional functions and are used to write code quickly and more effectively. They also solve some of the problems, as we see with the context w.r.t. 'this' keyword.


    
// Array methods - map(), filter(), reduce() methods, which are used to iterate over an array and is a much simpler and quicker way to perform operations on an array as compared to its alternative methods.


    
// The powerful three dots - referred to as the spread operator as well as the rest parameters, depending upon the context in which they are used. When used as spread operator, they are used to segregate an array into its individual elements. When used as the rest parameters, they are used to treat individual arguments passed to a function as a combined array in the function parameters.


    
// Template Literals, which are better way of concatenating string literals. 


    
// Ways of destructuring an array or an object to extract the its individual elements or keys.


    
// import and export keywords - used for importing and exporting modules (including variables, functions, classes, etc.) defined in one file to be used in another file so as to maintain code reusability and reduce redundancy.