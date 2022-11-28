// var x = document.querySelector('body');
// x.style.backgroundColor = 'red';
// console.log("HRllow");

// function setTest(){
//   alert("Hello, after 5 sec");
// }
// setTimeout(setTest, 5000)
// setTimeout(function(){
//   prompt("ENter Age");
// },6000)

// console.log("/********** setTimeout *********/");
// setTimeout(() => {
// document.getElementById("text-1").innerHTML = "Hello text 1";
// alert("Time Up")
// }, 2000);
// document.getElementById("text-2").innerHTML = "Hello text 2";

// (() => {
//   console.log(10);
//   setTimeout(() => {console.log(20)}, 1000);
//   setTimeout(() => {console.log(30)}, 0);
//   console.log(40);
//   })();

// setTimeout(()=>{
//   console.log("Welcome to upGrad");
// },5000)

// let sum = (a,b, callback)=>{
//   console.log(a+b);
//   callback();
// }
// sum(1,2, function(){
//   console.log("Finished this operation!");
// })







// let add = (callback) => {
//   let x = 2, y = 3;
//   console.log("Sum :", x + y);
//   callback();
// }

// add(function() {
//   console.log("Finished this operation!");
// });

// const subtract = (callback) => {
//   let x = 2, y = 3;
//   console.log("Difference :", x - y);
//   callback();
// }

// subtract(function() {
//   console.log("Finished this operation!");
// });




// //Understanding Callbacks with an Example
// let name;
// function setName(){
//   setTimeout(()=>{
//     name = "kiran reddy";
//   },2000)
// }
// function getName(){
//   setTimeout(()=>{
//     console.log("Hello "+name);
//   },2001)
// }
// setName()
// getName()

// //updated with callbacks
// let name;
// function setName(callback){
//   setTimeout(()=>{
//     name = "kiran reddy";
//     callback();
//   },2000)
// }
// function getName(){
//     console.log("Hello "+name);
// }
// setName(getName);

//Updated with local scope 
// function setName(print){
//   let name;
//   setTimeout(()=>{
//     name = "kiran reddy";
//     print(name);
//   },2000)
// }
// function getName(nameVal){
//     console.log("Hello "+nameVal);
// }
// setName(getName);


//PROMISES IN JAVASCRIPT
let promiseObj = new Promise((resove, reject)=>{
  let a=2;
  if(a==2){
    resove("Correct")
  }else{
    reject("Wrong");
  }
})
console.log(promiseObj);
promiseObj.then(val=>{
  console.log("From theen function: ",val)
}, err=>{
  console.log("From error funct: ", err);
})
