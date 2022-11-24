// console.log("Hello world")
// let animal = {
//   moves: true,
//   kills: 'Maybe'
// }
// console.log(animal.__proto__);
// let rabbit = {
//   eat: true,
//   kills: 'no'
// }
// rabbit.__proto__ = animal;
// console.log(rabbit.__proto__);
// console.log(rabbit.moves);
// console.log(rabbit.kills);

//SCOPES

// var x = 10;
// function foo(){
//   var x = 20;
//   console.log(x);
// }
// foo()
// function bar(){
//   var x = 30
//   console.log(x);
// }
// bar()
// console.log(x);
// function test(){
//   var y = 10;
//   console.log("y is ",y);
// }
// test()
// console.log(y);

// var x = 10;


// function foo(){
//   var x = 20;
//   bar();
// }
// function bar(){
//   console.log(x);
// }
// foo()

// LEXICAL SCOPING
// function foo(){
//   var x = 10;
//   bar();
//   function bar(){
//     var x = 30;
//     console.log(x);
//   }
// }
// foo();

// CLOSURES
// function greet(name){
//   var greeting = "Hi "+ name;
//   return function(){
//     console.log(greeting);
//   }
// }
// sayHEllo = greet("RAvi");
// sayHEllo(); //Hi RAvi

// function greet2(name){
//   var greeting = "Hi "+ name;
//   return greeting;
// }
// console.log(greet2("Vamshi"))   //Hi vamshi


// function welcome(name){
//   var greeting = "Welcome! "+name;
//   var message = function(){
//     console.log(greeting);
//   }
//   return message;
// }
// var welcomeMsg = welcome("Kulki");
// welcomeMsg(); //welcome kulki

// HOISTING
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// console.log("a : "+a);
// var a;
// console.log("b : "+b);

// var p;
// console.log("p : "+p);
// p=30;

//BIND() Method
// var person = {
//   firstName: "RAvikiran",
//   lastName: "Reddy",
//   get: function(){
//     console.log("Outer: "+this.firstName+" "+this.lastName);
//     var print = function(){
//       console.log("Inner: "+this.firstName+" "+this.lastName);
//     }
//     print();
//   }
// }
// person.get();    //Outer: RAvikiran Reddy 
//                  //Inner: undefined undefined


// var person = {
//   firstName: "RAvikiran",
//   lastName: "Reddy",
//   get: function(){
//     console.log("Outer: "+this.firstName+" "+this.lastName);
//     var that = this;
//     var print = function(){
//       console.log("Inner: "+that.firstName+" "+that.lastName);
//     }
//     print();
//   }
// }
// person.get();    //Outer: RAvikiran Reddy 
//                  //Inner: RAvikiran Reddy



// var person = {
//   firstName: "RAvikiran",
//   lastName: "Reddy",
//   get: function(){
//     console.log("Outer: "+this.firstName+" "+this.lastName);
//     var print = function(){
//       console.log("Inner: "+this.firstName+" "+this.lastName);
//     }.bind(this)
//     print();
//   }
// }
// person.get();    //Outer: RAvikiran Reddy 
//                  //Inner: RAvikiran Reddy

//ForLoopsInObjects
// var obj = {
//   name: "Ravikiran",
//   lastName: "Reddy",
//   college: "RGUKT"
// }
// for(let i in obj){
//   console.log(i+":"+ obj[i]);
// }


//CALL Method
// var person = {
//   firstName: "RAvikiran",
//   lastName: "Balemla",
//   get: function(){
//     console.log("Outer: "+this.firstName+" "+this.lastName);
//     var print = function(role){
//       console.log("inner: "+this.firstName+" "+this.lastName+" Role: "+role);
//     }.call(this, "Dev");
//   }
// }
// console.log(person.get());

//APPLY Method
var person = {
  firstName : "Ravikiran",
  lastName: "Reddy",
  get: function(){
    console.log("Outer: "+this.firstName+" "+this.lastName);
    var print = function(role, tech){
      console.log("Inner: "+this.firstName+" "+this.lastName+" "+tech+" "+role);
    }.apply(this, ["Dev", "JS"]);
  }
}
console.log(person.get());