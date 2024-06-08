// // Q1. basic of string 
let str1="   apnaCollege ";
console.log(str1.length,str1);
console.log("type of str is: ",typeof str1);
console.log("in uppercase : ",str1.toUpperCase())
console.log(str1.trim())
let newString=str1.trim();
console.log(newString.length)
console.log("this is \n me preety arya")// \n is used for next line;
console.log("this is me \t preety arya:")// \t is used for tab space;

// // Q1. these are built in function to manipulate a string:

let str="     this is my name:     "
console.log(str)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(`string is immutable in javascript:`)

// Q2. some string methods:

// 1 Method:  (Slice)
let str2="apnacollege"
console.log(str.slice(0,3));//1,1,2 print apn

// 2 Method:   (concat)  
let str_1="apna";
let str_2="college"

let ret=(str_1.concat(str_2));
console.log(ret)
console.log(str_1+str_2); // add to string

// 3 Method:    (replace)
let str3="i love my self";
console.log(str3.replace("self","family"))

// 4 Method (charAt)
let str4="ilovejs";
console.log(str4.charAt(3))//finding latter of index


// Q prompt the user to their fullname .generate a username for them based on the input .start username with @,followed by their latter and ending with fullname length

// let name=prompt("enter your fullname:");
// console.log(`your full name is ${name}`);
// console.log("username is","@" + name +name.length);







