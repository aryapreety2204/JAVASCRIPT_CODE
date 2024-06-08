// basic program of array:

let IstMarks=[94,93,92,91,90];
//console.log(marks);
console.log(typeof IstMarks);
for(let i in IstMarks){ 
  console.log(`${i} : ${IstMarks[i]}`)  // finding indexing of array:by for-in loop
}
for(let i of IstMarks){
  console.log(`${i}`)//for-of loop used for itrate the value of array:
}
console.log(window);

// Q2. for given array with marks of student find the average marks of the entire array

let marks=[1,2,3,4,5];
let sum=0;
for(let i of marks){
  sum+=i;
}
console.log(marks);
console.log(sum);
let avg=sum/marks.length;
console.log(avg);


//  for a given array with prices of 5 items all item have an offer 10% of on them .change the array to store final price

let arr_1=[250,645,300,900,50];
console.log("array before discount:",arr_1);
for(let i=0;i<arr_1.length;i++){
  let offer=arr_1[i]/10;
  arr_1[i]-=offer;
}
console.log("array after discount",arr_1);

// arrays methods:

// 1. push()  // push() method is used to add some new element in array at last index

let array_1=['preety' ,'isha','amrita','sanjana','payal'];
array_1.push('kamini');
console.log(array_1);

//  2. pop //pop() method is used to remove element from array at last index;

let arr_2=[1,2,3,4,5,6];
console.log(arr_2);
arr_2.pop();
console.log(arr_2);

// 3. unshift unshift() method is used to add element in array at the first index:

let arr_3=['kamal','komlika','kiara','aliya','sharadha'];
console.log(arr_3);
arr_3.unshift('komal');
console.log(arr_3);

//4. shift shift() method is used to remove element in array from 0 index;

let arr_4=['aarti','akash','amit','aman','shubham','sujal'];
console.log(arr_4);
arr1.shift();
console.log(arr_4);

// 5. concat concat() method is used to add to array:

let arr1=['aarti','akash','amit'];
let arr2=['aman','shubham','sujal'];
let arr3=arr1.concat(arr2);
console.log(arr3);


// 6. slice slice() method is used to return a piece of array

let array=[1,2,3,4,5,6,7,8,9];
console.log(array);
let arrya1=array.slice(1,7+1);
console.log(arrya1);

// splice splice() method is used to change orignal array adding new element removing element replace element from array

let arr=[1,2,3,4,5,6,7];
arr.splice(2,2 ,101,102);
console.log(arr);
arr.splice(2,3);
console.log(arr);
arr.splice(2,1,103);
console.log(arr);











