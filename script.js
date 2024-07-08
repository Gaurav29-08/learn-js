//Object +++++++++++++
// let person = {
//   firstName : "gaurav",
//   lastName : "sirari",

//   greeting : function(){
//     console.log("hello, good morning ");
//   }

// }


// console.log(person);
// console.log(person.greeting());
// console.log(person['firstName']);
// console.log(person['lastName']);





///++++++++++++++++++++function 
//Factory function  - a functio create an object and return that object 

// function createFunction(num1,num2){
//   return addtion = {
//     number1 : num1,
//     number2 : num2,



//   }
// }

// let result1 = createFunction(3,4);
// console.log(result1);
// let result2 = createFunction(9,9);
// console.log(result2);


// construction function -> pascal notation => first letter of every word is capital letter 
//define/initilize  properties and method only 


// function Rectangle(){
//   this.length = 1;
//   this.breadth = 2;
//   this.draw = function(){
//     console.log("hello Gaurav");
//   }
// }


// let object1 = new Rectangle()
// console.log(object1);
// let object2 = new Rectangle();
// console.log(object2);


//for -in loop 
// let person = {
//   a : "gaurav",
//   b : "singh",
//   c : "sirari"
// }

// for(let key in person){
//   console.log(key,person[key]);
// }


//cloning

//iteration
let src1 = {
  a1 : 10,
  b1:20,
  c1:30
}

let dest1 = {}

for(let key in src1 ){
  dest1[key] = src1[key]
}
 
// console.log(dest1);

// assign 
let src2 = {
  a2 : 10,
  b2 : 20,
  c2 : 30
}

let  dest2 = Object.assign({},src2)
// console.log(dest2);


//spread 

let src3 = {
  a3 : 10,
  b3 : 20, 
  c3 : 31
}


let dest3 = {...src3};
console.log(dest3);

