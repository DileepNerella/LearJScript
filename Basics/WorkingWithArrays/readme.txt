Array in Javscript is an object which allows multiple values in a single 
variable.
An array can story values of any data type .

an array length can chnage at any time and data can be stored at non contiguos location in an array.

example
let num=[1,2,3];

elemnets are accessed using index positions.

*****************************************************
creation of Arrays:
*****************************************************
1. Array literal Notation:
synatax:
let myArray=[element 1, element 2, element 3];

2.Array constructor:

Array can be created using the array constructor with a single parameter
which denotes its length.
the parameter shoudl be an integer between 0 and 232-1 .

this creates empty slots for the array elements ,if the argument is any other 
number ,a RangeError Exception is thrown.

let myArray= new Array(arraylength);

if more than one argument is passed to the array constructor 
a new arrayt with given elements is created.

let myArray= new Array("element 1",element 2,element 3);


********************************************************
Combining and cloning Arrays using spread Operator
********************************************************

spread operator is a new operator that was introduced as part of javsascript 2015.
it consists of triple dots(...) whihc helps in spreading out the elements 
of an array to a new variable.

usages :
&&&&&&&&&&&&&&&&&&&&&

1.when a spread operator is used in a function call ,it expans the iterable 
object ,i.e array into the list of arguments.

let numArr = [10, 5, 20];
//spread turns array into the list of arguments
console.log(Math.max(...numArr)); // 20 

2.Merging multiple Arrays .

let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [3,5,1,8,2,6]

3.Arrays combining with nornal values.

let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
let newArr = [0, ...arr1, 4, ...arr2];
console.log(newArr); // [0,3,5,1,4,8,2,6]

4.to creat ea copy of an array.

let arr1 = [3, 5, 1];
let arrCopy = [...arr1];
arrCopy.push(4);
console.log(arrCopy);
//arrCopy becomes [3,5,1,4] and arr1 remains unaffected

****************************************************
De Structuring the Arrays
***************************************************

destructuring in javascript allows to unpack the elements of array or objects in to 
individual elements/variable.

example:

// [RN1] we have an array with the employee name and id
let empArr = ["Shaan", 104567];
// destructuring assignment
// sets empName = empArr[0]
// and empId = empArr[1]
let [empName, empId] = empArr;
console.log(empName); // Shaan
console.log(empId);  // 104567

destruturing assignment syntax is a shorter way of writing the below.

let empName = empArr[0];
let empId = empArr[1];

you can ignore elements of array using a extra comma.

example:
let [empName, , location] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
console.log(empName); // Shaan
console.log(location);  // Bangalore

Rest Operator can also be used with destructuring assignment syntax.

example:

let [empName, ...rest] = ["Shaan", 104567, "Bangalore"];
console.log(empName); // Shaan
console.log(rest);  // [104567,'Bangalore']

Here, the value of the rest variable is the array of remaining elements and the rest parameter always goes last in the destructuring assignment.


********************************************************************
Accessing arrays.
*********************************************************************

array elements can be accessed usin the index value and index starts from 0 in an array.

example

let arr = ["first", "second", "third"];
console.log(arr[0]); //first
console.log(arr[1]); //second
console.log(arr[3]); //undefined

Looping over an array.

let colors = ["Red", "Orange", "Green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//Red
//Orange
//Green


using a for..of syntax.

let colors = ["Red", "Orange", "Green"];
// iterates over array elements
for (let color of colors) {
    console.log(color);
}
//Red
//Orange
//Green

**********************************************************************

Array methods.
**********************************************************************


1.length.
to get the length of array.

example:
let myArray = ["Windows", "iOS", "Android"];

console.log("Length = " + myArray.length);

//Length = 3


2.push()

let myArray = ["Android", "iOS", "Windows"];

myArray.push("Linux");

console.log(myArray);

// ["Android","iOS","Windows","Linux"]

3.pop()

let myArray = ["Android", "iOS", "Windows"];

console.log(myArray.pop()); // Windows

console.log(myArray); // ["Android","iOS"]

4.shift()

let myArray = ["Android", "iOS", "Windows"];

console.log(myArray.shift()); //Android

console.log(myArray); //["iOS", "Windows"]

5. unshift()

let myArray = ["Android", "iOS", "Windows"];

myArray.unshift("Linux"); 

console.log(myArray);

//["Linux","Android","iOS","Windows"]

6.splice()

Change the content of an array by inserting, removing, and replacing elements. Returns the array of removed elements.

Syntax:

array.splice(index,deleteCount,items);

index = index for new item
deleteCount = number of items to be removed, starting from index next to index of new item
items = items to be added

let myArray = ["Android", "iOS", "Windows"];

//inserts at index 1

myArray.splice(1, 0, "Linux"); 

console.log(myArray); 

// ["Android","Linux", "iOS", "Windows"]

7.slice()

Returns a new array object copying to it all items from start to end(exclusive) where start and end represents the index of items in an array. The original array remains unaffected

Syntax:

array.slice(start,end)

example:
let myArray=["Android","iOS","Windows"];

console.log(myArray.slice(1,3));

// ["iOS", "Windows"]

8.concat()

let myArray1 = ["Android","iOS"];

let myArray2 =  ["Samsung", "Apple"];

console.log(myArray1.concat(myArray2));

//["Android", "iOS", "Samsung", "Apple"]

9. reverse()

let mathWord = [20,30,10,40,50]

mathWord.reverse();

console.log(mathWord);       

// [50,40,10,30,20]

10.indexOf()

11.includes()

let cake = ['Vanila','Choco','Plum'];

console.log(cake.includes('Plum'));  

// true

 

let cake = ['Vanila','Choco','Plum'];

console.log(cake.includes('Caramel'));

// false

12.find()

Returns the value of the first element in an array that passes a condition specified in the callback function.

Else, returns undefined if no element passed the test condition.

Syntax:

array.find(callback(item,index,array))

callback is a function to execute on each element of the array
item value represents the current element in the array
index value indicates index of the current element of the array
array value represents array on which find() is used,
index and array are optional

example:

let myArray = ["Android", "iOS", "Windows", "Linux"];

let result = myArray.find(element => element.length > 5);

console.log(result); //Android 

13.findIndex()


Returns the index of the first element in an array that passes a condition specified in the callback function. Returns -1 if no element passes the condition.

Syntax:

Array.findIndex(callback(item,index,array));

callback is a function to execute on each element of the array
item value represents current element in the array
index represents index of the current element of the array
array represents array on which findIndex() is used.
index and array are optional

example

let myArray = ["Android", "iOS", "Windows", "Linux"];

let result = myArray.findIndex(element => element.length > 5);

console.log(result) //0

14.filter()

Creates a new array with elements that passes the test provided as a function.

Syntax:

array.filter(callback(item,index,array))

callback is the Function to test each element of an array
item value represents the current element of the array
index value represents Index of current element of the array
array value indicates array on which filter() is used.

example:

let myArray = ["Android", "iOS", "Windows", "Linux"];

let result = myArray.filter(element => element.length > 5);

console.log(result)

//["Android","Windows"]

15.some()

Returns the Boolean value depending on the test implemented by the provided function.

This method is used in arrays to check whether at least one element in array passes the specified condition mentioned in the function and if yes it returns true otherwise it returns false.

It does not modify the original array.

Syntax:

array.some(callback(item,index,array))

callback is the Function to test each element of an array
item value represents the current element of the array
index value represents Index of current element of the array
array value indicates array on which some() is used.

example

et numArray = [-3,-4,-6,-10]

let getPositiveNumbers = numArray.some(element=>element>0)

console.log(getPositiveNumbers)     

//false

 

let numArray = [-3,4,-6,-10]

let getPositiveNumbers = numArray.some(element=>element>0)

console.log(getPositiveNumbers)     

//true

16.forEach()

Iterates over an array to access each indexed element inside an array.

Syntax:

array.forEach(callback(item,index,array))

callback is a function to be executed on each element of an array
item value represents current element of an array
index value mentions index of current element of the array
array represents the array on which forEach() is called

example:

let myArray = ["Android", "iOS", "Windows"];

myArray.forEach((element, index) => 

console.log(index + "-" + element));

//0-Android

//1-iOS

//2-Windows

//3-Linux

17.map()

reates a new array from the results of the calling function for every element in the array.

Syntax:

array.map(callback(item,index,array))

callback is a function to be run for each element in the array
item represents the current element of the array
index value represents index of the current element of the array
array value represents array on which forEach() is invoked

reates a new array from the results of the calling function for every element in the array.

Syntax:

array.map(callback(item,index,array))

callback is a function to be run for each element in the array
item represents the current element of the array
index value represents index of the current element of the array
array value represents array on which forEach() is invoked

example:

let numArr = [2, 4, 6, 8];

let result = numArr.map(num=>num/2);

console.log(result);

//[ 1, 2, 3, 4 ]

18.join()

Returns a new string by concatenating all the elements of the array,
 separated by a specified operator such as comma. Default separator is comma

example:

let myArray = ["Android", "iOS", "Windows"];

console.log(myArray.join()); 

// Android,iOS,Windows

console.log(myArray.join('-'));

 // Android-iOS-Windows

 19.reduce()

Executes a defined function for each element of passed array and returns a single value

Syntax:

array.reduce(callback(accumulator, currentValue, index,array),initialValue)

callback is a function to be executed on every element of the array
accumulator is the initialValue or previously returned value from the function.
currentValue represents the current element of the passed array
index represents index value of the current element of the passed array
array represents the array on which this method can be invoked.
initialValue represents the Value that can be passed to the function as an initial value.
currentValue,index,array and initialValue are optional.

example:

const numArr = [1, 2, 3, 4];

// 1 + 2 + 3 + 4

console.log(numArr.reduce(

(accumulator, currentVal) => 

accumulator + currentVal));

// 10

// 5 + 1 + 2 + 3 + 4

console.log(numArr.reduce(

(accumulator, currentVal) => 

accumulator + currentVal,5));

// 15
