
Object:
a real world entity is modeled as Object in javascript.
the object have a state and behavior.

for example a bus.

State of bus

color=red
make= volvo
current_gear= 3
current_speed = 45 km/hr
Number of doors= 4
Seating Capacity= 100

The behavior of Bus 
Accelerate
brake
Change gear

Type of Objects in javascript

1.User Defined.
    Creating own objects.
2.In-Built
    Global
        Primitive
            They are wrapper objects for their corresponding primitive datatypes.
                e.g Number, String , Boolean.
        Miscellaneous
            They are utility objects provided by Javascript.
            eg. Date, Array, Math etc.
    Browser
        They allow javascript code to talk to browser and to manipulate the HTML DOM
            e.g BOM, DOM

Ways of creating Object
    Object Literals
    Constructor

Object Literals : Objects can be created using the object Literal Notation.
Obbject literal is a comma-seperated list of name- value pairs wrapped insie curly braces.

objectName = {
    //-------------states of the object----------- 
    key_1: value_1,
    key_2: value_2,
    ...
    key_n: value_n,
    //-------------behaviour of the object--------- 
    key_function_name_1: function (parameter) {
        //we can modify any of the property declared above 
    },
    ...
    key_function_name_n: function(parameter) {
        //we can modify any of the property declared above 
    }
}

Enahanced Object literals- Property shorthand.

//Literal property without shorthand 
function createCourse(name, status) {
    return {type: "JavaScript", name: name, status: status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name: name};
}
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
function createCourse(name, status) {
    return {type: "JavaScript", name, status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name};
} 


******************
Ways of adding a new property to the object.

old::

let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway"    
};
let dynamicProperty = "age";
personalDetails[dynamicProperty] = 45;
console.log(personalDetails.age);  //Output: 45 


New:

let dynamicProperty = "age";
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway",
    [dynamicProperty]: 45
};
console.log(personalDetails.age);   //Output: 45 

*******************

Creating Object using a function Construtor.

example:

function Car(name, model, color, numberOfGears, currentSpeed, currentGear) { 
    //-------------States of the object--------- 
    this.name = name; 
    this.model = model; 
    this.color = color; 
    this.numberOfGears = numberOfGears;
    this.currentSpeed = currentSpeed; 
    this.currentGear = currentGear; 
    //-------------Behaviour of the object--------- 
    this.accelerate = function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter; 
        return this.currentSpeed; 
    }
    this.brake = function (speedCounter) { 
        this.currentSpeed = this.currentSpeed - speedCounter; 
        return this.currentSpeed; 
    } 
} 


this keyword that is used in this case is a javascript pointer.
it points to an object which owns the code in the current context.

it doesnot have any value of its own but is the inly substitute for the
object reference whenever it is used.

// creating a car for above definition.

Let Mycar = new Car(Fiat, VX,red, 4,45,4);

retriving the state;
 Mycar.name;//Fiat
 Mycar.currentSpeed;//45

 retrivng using dot operator.

 Mycar.accelerate(50);//invokes accelerate with argument 50/
***********
retriving state using bracket operator.

 myCar["name"];     //return "Fiat" 
myCar["currentSpeed"];     //returns 45 

**************
retriving behavior using the braket operator.

myCar["accelerate"](50);    //invokes accelerate() with argument = 50 


//*******************
Combining Objects using Spread Operator.

--->     ...

The combined object will have all the merged properties.

let object1Name = { 
    //properties 
}; 
let object2Name = { 
    //properties 
}; 
let combinedObjectName = { 
    ...object1Name, 
    ...object2Name 
}; 
//the combined object will have all the properties of object1 and object2 

EXAMPLE ::
let candidateSelected={
	Name:'Rexha Bebe',
	Qualification:'Graduation',
};
let SelectedAs={
	jobTitle:'System Engineer',
	location:'Bangalore'
};
let employeeInfo={
	...candidateSelected,
	...SelectedAs
};
console.log(employeeInfo); 
/*
{
  Name: 'Rexha Bebe',
  Qualification: 'Graduation',
  jobTitle: 'System Engineer',
  location: 'Bangalore'
} 
*/

It is possile to get copy of a spread Operator.

Syntax:

let copyToBeMade = { ...originalObject };  


let originalObj = { one: 1, two: 2, three: 3 };
let clonedObj = { ...originalObj };
/*
Here spreading the object into a list of parameters happens 
which return the result as a new object 
checking whether the objects hold the same contents or not 
*/
alert(JSON.stringify(originalObj) === JSON.stringify(clonedObj)); // true 
//checking whether both the objects are equal 
alert(originalObj === clonedObj); // false (not same reference) 
//to show that modifying the original object does not alter the copy made 
originalObj.four = 4;
alert(JSON.stringify(originalObj)); // {"one":1,"two":2,"three":3,"four":4} 
alert(JSON.stringify(clonedObj)); // {"one":1,"two":2,"three":3} 


//*****************************
DeStructuring the Object.

Destructuing gives a syntax that makes it easy to create the objects based on variables,
it also helps to extract data from an object.

Destructuing work with spread and rest Operators.

let myObject = { name: 'Arnold', age: 65, country: 'USA' };
let { name, age:currentAge } = myObject; //alias can be used with : 
console.log(name); 
console.log(currentAge); 
//OUTPUT: Arnold 65 

Destructuing in functions.

let myObject = { name: 'Marty', age: 65, country: 'California' }; 
function showDetails({ country }) { 
    console.log(country); 
} 
showDetails(myObject);  //invoke the function using the object 
//OUTPUT: California 

THE PROPERTY 'COUNTRY' of the object has been destructured and captured as a function parameter.



///////////////////////////////////////////////////////////////

Access ing the Object Properties.

-Using  
    . dot operator.
    . bracket Operator[]


Syntax: 
//access/retrive
objectName.key;
//or
objectName[key];

//setting state /behavior value.

objectName.key=value;
//or
objecteName[key]= value;


using for loop for accessing all object keys.

for (key in object) { 
    // executes the body for each key among object properties 
} 

Example:


let user = { 
    name: "Rexha", 
    age: 24, 
    isConfirmed: true 
}; 
for (let x in user) {
    // keys 
    console.log(x);  // name, age, isConfirmed 
    // values for the keys 
    console.log(user[x]); // Rexha, 24, true 
} 
//

///////////////////////////////
Built in Global Objects.

The global objects allows to declare variables and functions that can be accessed 
anywhere .

by default these are built in to the language or the environment.

They are different bulit-in objects in Javascript.

    Date
    String
    Math
    RegEx
    JSON.

lets go one by one.

the Date allows us to work with dates and times displayed as part of the web pages.
it can be instantiatd wherever required using one of the many constructors available.

example:
let dateObject1 = new Date(); 
console.log("Date is: " + dateObject1);
//OUTPUT: Date is: Thu Jun 18, 2020, 22:17:36 GMT+0530 (India Standard Time) 

example 

let  dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000); 
console.log("Date is: "+dataObject2); 
//OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 

Once the date object is ready user can access the built in methods.

example of date built in methods.

method ///// descripton.
1.getDate()-->retrun numeric day of the month.
2.getDay()--> return the numeric day of week.(0-6)
3.getFullYear()--> YYYY
4.getHours()-->0-23
5.getMonth()-->0-11
6.getMilliseconds()-->0--999
7.getTime()--> number of milli seconds since 1/1/1970 at 12 a.m.

Setter methods are available on Object date 

SetDate()--> sets numeric day of the month. value range from 1 to 31.
setFullYear()--> set four digit year.
setHours()-- 0- 23.
setMonth()-- 0 to 11.
setMilliseconds()-- 0 999
setTime()-- sets the number of milliseconds from 1/1/1970

//////////////////////String Object.

String Object is a wrapper for primitive type String that helps to store 
textual values.

it provides properties and methods to manipulate the given text without writing code from 
scratch.

string object only contains one property which is length.

let myString = "Welcom to JavaScript Session"; 
console.log("Length is: " + myString.length); 
/*OUTPUT: returns Length is: 28,  
space between words are also considered as a character*/ 

//////////////////////String Object Methods.

charAt()--> retrives the character on the idex passed as a argument.
concat()---> accepts unlimited number of string arguments ,joins them and 
            return the result.

indexOf()
 its returns the index of the given character or maybe given set of characters in a
argument.

let myString = "Hello World"; 
console.log("Index of character l is : "+myString.indexOf('l')); 
//Returns: Index of character l is : 2 

match()

it makes use of regular expression to look for a specific string and return all the string 
that match.

example

let myStr = "Are you enjoying JavaScript?"; 
console.log(myStr.match(/you/)); 
/*Returns an array: 
[ 
  'you', 
  index: 4, 
  input: 'Are you enjoying JavaScript?', 
  groups: undefined 
] 
*/
console.log("string found at index position: "+myStr.match(/you/).index);
/*Returns:  string found at index position: 4*/ 


g modifier 
    g modifier is a global matching i.e it will find all the matches not only the 
    1st match.

    let myString = 'Blue light Blue sky'; 
let countMatch = (myString.match(/Blue/g)).length; 
console.log(countMatch);                              
//Output : 2 

\s pattern.

in regular expression '\s' pattern can be used to match any whitespace character .
it can represent tab,linebreak, spaces and other unicode spaces.

let myString = `Hi JavaScript 
Essentials`; 
let countSpaces = (myString.match(/\s/g)).length; 
console.log(countSpaces);           
//Output : 2 

replace()

It accepts the  substring or the regular expression.
Also, accepts the string that will be used for the replacement string. 
The idea is to replace all matches with the replacement string and provide the modified string. 

let myStr = "Are you enjoying JavaScript?"; 
myStr = myStr.replace('you', 'they'); 
console.log(myStr); 
//Returns Are they enjoying JavaScript? 


Split()

let myString = "Hello World"; 
console.log("Split string based on spaces: "+myString.split(" ")); 
//Returns: Split of string based on spaces: Hello,World 



Slice()

let myString = "Hello World"; 
console.log("Slicing using 2 parameters: "+myString.slice(0,5)); 
console.log("Slicing using 1 parameter: "+myString.slice(5)); 
/*Returns:  
Slicing using 2 parameters: Hello, 
Slicing using 1 parameter: World*/ 

substring()

let myString = "Hello World"; 
console.log("Substring using 2 parameters: "+myString.substring(2,5)); 
console.log("Substring using 1 parameter: "+myString.substring(5)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/ 

substr() 
It is like the substring() method. 

The difference is, if the second parameter is provided, 
it takes the first parameter as start Index and second parameter as length 
for slicing string. 

let myString = "Hello World"; 
console.log("Substr using 2 parameters: "+myString.substr(2,5)); 
console.log("Substr using 1 parameter: "+myString.substr(5)); 
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/ 

other methods.
--includes()
--fromCharCode()-- UTF-16 values and retrun string evivalent.
let myLetter = String.fromCharCode(72); 
console.log(myLetter)     
//Output : H 
let myWord = String.fromCharCode(72, 69, 76, 76, 79); 
console.log(myWord)     
//Output : Hello  
let myString = String.fromCharCode(72, 69, 76, 76, 79, 32, 87, 79, 82, 76, 68); 
console.log(letter)    
//Output : Hello World  

this is a static method hence called as String.fromCharCode

CharCodeAt()
trim()
reverse()



?????????????????????????????????????????????

RegExp

The reqular expresiion is a type of Object in Javscript that helps 
us to perform the inspection and processing.

The regex Object can be constructed using either of the two ways.
    using RegExp constructor.
    as a literal value by enclosing within forward-slash(/).

syntax 

let myPattern1 = new RegExp(pattern, modifiers); 
let myPattern2 = /pattern/modifiers 
/*Here, 
pattern specifies the string for regular expression 
modifiers are optional 
*/ 

RegEx object construction makes use of patterns in the form of brackets and quntifiers.

They are the special symbols taht can be put in the pattern to perfrom an advanced search 
in the given text as given in the follwing example.

// to make sure that string has @ and .com 
let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
 
//to make sure that given number has digits between 0-9 and max length of 10 digits 
let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
//to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 

