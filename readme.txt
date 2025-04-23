identifier in jasvs script are three types
1.Let
2.Const
3.Var


best practice  for let : 
use this only in declaration that will change their value 
over time or when the variable need not be accessed outside of 
the code block.

example a for loop

const declaration can be used for a string type identifiers or simple 
number ,functions or classes which does not need to chnaged or value.

example pi=3.14

var is used fo rfunction or global scope in program.

through out the program a var can be depclared ,reinitialised multiple times.

summary 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ key word ++ Scope ++ Declaration                +++  Assignment               ++++
+ ---------++-------++----------------------------+++---------------------------++++
+ let      ++ Block ++ Redeclaration not allowed   +  re -assign allowed        ++++
+----------++-------++-----------------------------+----------------------------++++
+ const    ++ Block ++ Redeclaration not allowed   +  re-assigning not allowed  ++++
+----------++-------++-----------------------------+----------------------------++++
+ var      ++ Global++ Redeclaration allowed       +  re-assigning allowed      ++++
+----------++-------++-----------------------------+----------------------------++++

Type of data in Javascript 

Primitive 
- number.(can hold any of the below values.)
        -integer
        -long
        -float
        -double
Any value of numbers not defined in above fall as NaN not a number or not a legal number.
- string
declaration can be as any of the follows.
let personName= “Rexha”;    //OR  
let personName = ‘Rexha’;    // both will have its value as Rexha 
quuotes inside a string.
let ownership= "Rexha's";    //OR     
let ownership = 'Rexha"s'; 

concept of literals.

literals can span multiple lines and interpolate expressions to include 
their results. notice this " ` "

example .

let firstName="Kevin"; 
let lastName="Patrick";
console.log(`Name:${firstName} ${lastName}
Email: ${firstName}_${lastName}@abc.com`); 
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/

- boolean 
    any variable out is defined for true or false and is to hold 
    that becomes a boolean.

-undefined
    variable used to store "no value" ,undefined is used.

example 

let firstName="Kevin"; 
let lastName="Patrick";
console.log(`Name:${firstName} ${lastName}
Email: ${firstName}_${lastName}@abc.com`); 
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/

let custName = "John"; //here value is John and the data type is String 
custName = undefined; //here value and the data type are undefined 


-BigInt is a special numeric type that provides support for integers of random length.

A big int is generate by appending n to the end of an integrer literal by calling the function 
BigInt that generates BigInt from strings,numbers.

const bigintvar = 67423478234689887894747472389477823647n;
OR
const bigintvar = BigInt("67423478234689887894747472389477823647");
const bigintFromNumber = BigInt(10); // same as 10n


==  equal
=== strict equal.

A "Symbol" represents a unique identifier. you canmake use of it to generate a value 
of ths type.

// empid is a new symbol
let empid = Symbol();



-null

represent the "no object".


Non -Primitive
-object
-Array
A data type is said to be primitive if it is a collection of multiple values.

Objects in Javascript are a collection of properties and are represented in the form of 
[key -value pairs]

The 'key' of a property is a string or a symbol and should be a legal identifier.
the 'value' of a propert can be any javscript value like Number, String ,Boolean or another object.

user defined objects can be created using object liternals.

syntax;
 { 
  key1 : value1,  
  key2 : value2, 
  key3 : value3  
};

example 

let mySmartPhone = { 
    name: "iPhone", 
    brand: "Apple", 
    platform: "iOS", 
    price: 50000 
}; 

Array 

The Array is a special data structure that is used to storee an ordered collection 
whch cannot be acheived by objects.

there are two ways to creating and array.

let dummyArr = new Array();     
//OR 
let dummyArr = []; 

