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
a = [10,20,30]
console.log(a.map);

x = a.map(function(item){
  return item*5;
})
console.log(x)
console.log();

a = [10,20,30,40,10]
x = a.filter(function(item){
  return item==10
})
console.log(x);
x = a.filter(function(item){
  return item>10
})
console.log(x);
console.log();
console.log();

a = [10,20,30,40,10]
x = a.reduce(function(x,y){
  console.log("x: "+x);
  console.log("y: "+y);
  return x+y;
})

console.log(x);
