// Q1. write a program to check the given number is equal or not
// let a=prompt("enter any number:");
// console.log(a);
// let b=prompt("enter any second number");
// console.log(b)
// if(a===b){
//   console.log("the given number is equal:"+"\n"+a +"\n"+ b);
// }
// else{
//   console.log("the given number is unequal:"+"\n"+ a +"\n"+ b);
// }

// Q2. Write a program to take a value from user and check it's divisible by 5 or not;

// let num=prompt("enter any number:");
// if(num%5==0){
//   console.log("the given number "+num+" is divisible by 5:");
// }
// else{
//   console.log("the given number "+num+" is not divisible by 5:");
// }

// Q3. write a program to take a number form user and check which number is greatest number between that number:

// let a = prompt("enter first number");
// console.log(a);
// let b= prompt("enter second number");
// console.log(b);
// if(a>b){
//   console.log("number",a,"is greater than number",b);
// }
// else{
//   console.log("number",b, "is greater than number",a);
// }

// Q4. write a program to take number from user and check that number is grater than 100 less than 100 and equal to 100;

// let num=prompt("enter any number");
//  if(num===100){
//   console.log("the given number ",num," is equal to number 100");
//  }
// else if(num>=100){
//   console.log("the given number ",num," is greater than number 100");
// }
// else{
//   console.log("the given number " ,num," is less tha 100");
// }

// Q5. write a program to take a number from user and print if number is 5 than print the square of that number and if the number is 3 than print the cube of that number:

// let num=prompt("enter any number")
// if(num==5){
//   let num1=num*num;
//   console.log(num1);
// }
// else if(num==3){
//   let num2=num*num*num;
//   console.log(num2);
// }
// else{
//   console.log(num)
// }

// Q6. write a program to take a number from user and check that number is positive negative or zero;

// let num=prompt("enter any number:")

// if(num==0){
//   console.log("the given number ",num," is 0");
// }
// else if(num>=0){
//   console.log("the given number " ,num," is positive number");
// }
// else{
//   console.log("the given number " ,num, " is negative number");
// }

// Q.7 write a program to check the given year is leap year or not ;

// let year=prompt("enter year")
// if((year%400==0) || (year%4==0 && year%100!=0)){
// console.log("the given year ", year," is leap year")
// }
// else{
//   console.log("the given year ",year," is not leap year")
// }

// Q8. write a program to check the triangle is valid or not,

// let l1=Number(prompt("enter the first side of the triangle"));
// let l2=Number(prompt("enter the second side of the triangle"));
// let l3=Number(prompt("enter the third side of the triangle"));

// console.log(l1+"\n"+ l2+"\n"+l3);

// let sum = l1+l2+l3;

// console.log(sum);
// if(sum==180){
//   console.log("the triangle is valid sides");
// }
// else{
//   console.log("the triangle is not valid side")
// }

// Q9. write a program to find greatest number among three number without using and operator
//  let a=prompt("enter first number");
//  let b=prompt("enter second number");
//  let c=prompt("enter third number");
//  console.log(a+"\n"+b+"\n"+c);
//  if(a>b){
//   if(a>c){
//     console.log(a," is greatest number");
//   }
//  }
//  else if(b>c){
//   if(b>a)
//   {
//     console.log(b," is greatest number");
//   }
// }
//  else {
//   console.log(c," is greatest number")
//  }

// Q10. write a program to take three number from user and check which is smallest one from that number.

// let a = Number(prompt("enter first number:"));
// let b = Number(prompt("enter second number:"));
// let c = Number(prompt("enter third number:"));

// console.log(`${a}\n${b}\n${c}`)

// if(a<b && a<c){
//   console.log( `${a} is the smallest number`)
// }
// else if(b<c){
//   console.log(`${b} is the smallest number`);
// }
// else {
//   console.log(`${c} is the smallest number`);
// }

// Q11. write a program to check the given number is in range to 100 and 200;

// let num=prompt("enter a number:");
// if(num>=100 && num<=200){
//   console.log(`the given number ${num} is in range:`);
// }
// else{
//   console.log(`the given number ${num} is not in range:`)
// }

// Q12. write a program to calculate the SI of amount;

// let P = prompt("enter the desire principle:");
// let R = prompt("enter the desire rate");
// let T = prompt("enter the desire time:");

// let SI = (P*R*T/100);

// console.log("this is the sI of desire inputs",SI);

// Q13. write a program to check the profit loss in transaction:

// let SP=prompt("enter the selling price of product:");
// let CP=prompt("enter the cost price of the Product:");

// if(SP>CP){
//   let profit =SP-CP;
//   console.log(`profit is ${profit}`);
// }
// else{
//   let Loss=CP-SP;
//   console.log(`loss is ${Loss}`)
// }

// Q14. write a program to compute the sum of two value if they are equals than return their triple sum :

// let num1 = prompt("enter the first number:");
// let num2 = prompt("enter the second number:");

// if(num1===num2){
//   let sum=+num1 + +num2;
//   console.log(`the sum of given number is ${sum}`);
// }
// else{
//   let Product=(+num1 + +num2)*3;
//   console.log(`the product of given number is ${Product}`)
// }

// Q15.  write a program to accept user marital status gender and age to check if he/ she is eligible for vote or not:

// let status = prompt("enter your marital status if you are married enter M if you are not married enter U ");

// if(status=='U' || status=='M'){
//   let gen=prompt("enter your gender if you are Male enter M if you are female enter F")
//   if(gen=='M'){
//       let age = prompt("enter your age:");
//       if(age>=21){
//         console.log("you are eligible for vote:")
        
//       }
//       else{
//         console.log("you are not eligible for vote:")
//       }
//   }
//   else{
//     let age = prompt("enter your age:");
//     if(age>=18){
//       console.log("you are eligible for vote:");
//     }
//     else{
//       console.log("you are not eligible for vote")
//     }
//   }
// }
// console.log("thank you:")

