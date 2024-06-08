// // @write a program to find factorial of number:
// let num=prompt("enter a number:");
// let fact=1;
// let i=1;
// while(i<=num){
// fact=fact*i;
// i++;
// }
// console.log("factorial of given number is :",fact);

// // Q2. write a program to print armstrong number :  For example, 153 is an Armstrong       number because 1^3 + 5^3 + 3^3 = 153.

// let num=prompt("enter a number:");
// let numOfDigits = num.length;
// let sum=0;
// let temp=num;
// while(temp>0){
//    // finding the one's digit
//   let remainder=temp%10;
  
//   sum += remainder ** numOfDigits;

//   // removing last digit from the number
//   temp = parseInt(temp / 10); // convert float into integer;

// }
// if(sum==num){
//   console.log(`${num} is armstrong number:`);
// }
// else{
//   console.log(`${num} is not armstrong number:`);
// }

//// Q3. write a program to check prime number:  program to check if a number is prime or not

// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


// //  Q4. write a program for fibonacci series:

// let num=prompt("enter a number");
// let a=-1;
// let b=1;
// let i=1;
// while(i<=num){
//   let sum=+a + +b;
//   a=b;
//   b=sum;
//   console.log(b);
//   i++;
// }

// //Q4. write a program to sum of given range natural number:
//  let num=prompt("enter a number:");
//  let sum=0;
//  let i=1;
//  for(let j=1;j<=num;j++)
// {
//   console.log(j);// for print series of number
//   sum=sum+j;  
// }
//  console.log(`sum of given natural number is ${sum}`);

// //  Q4. sum of natural number series and print natural number in given range:

// let start=prompt("enter a start range:");
// let end=prompt("enter a end range:");
// let sum=0;
// let sqr=0
// let cube=0
// for(let i=start;i<=end;i++){
//   console.log(i);
//   sum=+sum + +i;
//   sqr=+sqr + +(i*i);
//   cube=+cube + +(i*i*i);
// }
// console.log(`sum is ${sum}`)
// console.log(`sum of square of given natural number is ${sqr}`);
// console.log(`sum of cube of all given natural number is ${cube}`);

// //Q5.  1+3+7+15........sum.(2^n-1)

// let num=prompt("enter a number:");
// let sum=0;
// var a=1; b=2;
// for(let i=1;i<=num;i++){
//   console.log(a)//1,3,7,15
//   sum=sum+a;//1,3,7,15
//   a=a+b;//3,7,15,31
//   b=b*2;//4,8,16,
// }

// //Q6. write a program to print (2^n+1):
// let num=prompt("enter a number:");
// let sum=0;
// var a=2;
// var b=1;
// for (let i=1;i<=num;i++){
  
//   sum=a+sum;//1,3,5
//   a=a+b;//3, 5, 9
//   b=b*2;//2 4,
//   console.log(a);//1,3,5
// }

//Q7. write a program to find hcf of two  number:








