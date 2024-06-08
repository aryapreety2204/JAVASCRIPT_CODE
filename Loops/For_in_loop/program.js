// let student={
//   name:"preety",
//   age:19,
//   subject:"PCM",
//   isPAss:true
// };
// for(let i in student){
//   console.log(i);
//   console.log(`${i} => ${student[i]}`)
// }

// //  Q1. take a latter from from the string:

// const string=(prompt("enter your name:"));
//   for(let i in string){
//     console.log(string[i]); 
//   }
  

// //Q3. 
// const string = 'code';

// // using for...in loop
// for (let i in string) {
//   console.log(string[i]);
// }

// Q4. create a game where you start with any random game number. ask the user to keep guessing the game number until the user enter correct number.

let GameNum=45;
let userNum=prompt("enter a number")

while(userNum!=GameNum){
  userNum= prompt("you enter wrong number ! enter again:");
}
console.log("congratulation you entered right number")
