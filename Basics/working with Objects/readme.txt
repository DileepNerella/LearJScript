
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


test () and search () method in Javascript.

sample :;
let emailPattern = new RegExp("(?=.*@)(?=.+.com)"); 
let emailString = prompt("Enter email id(someone@xyz.abc)"); 
if(!(emailPattern.test(emailString))) { 
     alert("Email Id is invalid! It should contain@ and .");
} 
else { 
    alert("Email Id is Valid"); 
} 

code sample:

let myPattern = /@gmail.com/; 
let myString="mark.christ@gmail.com"; 
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern,'@facebook.com')); 
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/ 


Math Object:

it is the JavaScript object that used to make mathematical calculations.

Properties and methods of this object can be called without instantiation of this 
object becasue the math object cannot be instantiated.

example:
Math.PI;//Returns 3.14159265358793   
Math.SQRT2;//Returns 1.4142135623730951 

some of the Math methods
1.max()-- accepts multiple numeric values and returns the maximum of them.
2.min()-- accepts multiple and return minimum of them.
3.ceil()-- it returns the upward rounded value of the given number.
4.floor()-- it returns the downward rounded value of the given number.
5.random()-- it returns a randowm number between 0 and 1 incldinsve of 0 and exclusive of 1.
6.round()-- rounds to the nearest integer.
7.sqrt() -- square root of a number.


JSON--> JavaScriptObjectNotation.
it is a light weiht data interchange format used for storing and sharing data betweenclient and server over the network.

For JavaScript objects, the key is not put in quotes and if values are of string data type they can be put in single or double-quotes. 

But for JSON object, it is mandatory to put the key inside double quotes and all the values of type string inside double quotes.


JavaScript Object: { firstName: "Sam", lastName: "Fernandes" } 
//key need not be enclosed within quotes for JavaScript Objects 
JSON Object: { "firstName": "Sam", "lastName": "Fernandes" } 
//key must be enclosed within quotes for JSON Objects 


Two methods are there for JSON Object

1.parse(); used to parse a string as JSON and helps the program to process objects.
2.stringify(); retruns the JSON string corresponding to the given object.


Browser Object Model:

BOM model is split the browser in to different parts and refer to each part as a 
different type of built in object.

BOM is a heirarchy of multiple Objects.

Window is root nd consists of other objects in a heirarchy, such as 
1.history Object.
2.Navigator Object.
3.Location Object.
4.Document.

The HTML webpage that gets loaded on thebrowser is represented using the 
'document ' Object of the BOM model.

This Object considers the webpages as a tree which is referred to 'DOM'
Each node of this tree represents HTML elements in the page as 
'element' Object and 
the attributes as properties of the 'element' object.

1.getElementById(x)
2.getElementByTagName(X)
3.getElementByClassName(X)
4.querySelectorAll()--Finds elements by css selectors and return NodeList, which is list of element Objects.

Some of the other properties of the 'document' object to access the HTML element are: 

1.the body returns body element. Usage: document.body; 
2.the forms return all form elements. Usage: document.forms; 
3.the head returns the head element. Usage: document.head; 
4.the images return all image elements. Usage: document.images; 
To manipulate the content of HTML page, the following properties of 'element' object given by DOM API can be used: 

5.innerHTML 
It gives access to the content within HTML elements like div, p, h1, etc. You can set/get a text. 
document.getElementById("heading1").innerHTML;


1.attribute of the Element:
document.getElementById("div1").attributes[0].value; 
document.getElementById("div1").setAttribute('class', 'div2');

Style:
document.getElementById("div1").style.color = "red"; 


WINDOW Object

Suppose ist isnot required to update the HTML page but only certain properties of the 
browser window on which it is rendered.Thats is to naviagte to a different URL and display a new webpage ,or close the web page or 
store some data related to the web page.

Well ,to iplemnet thhis an object that represents the entire browser window and allow 
us to access and manipulate the window proeprties is required.

BOM Model provies that window Object.

This object resides on top of the BOM hierarchy.
 Its methods give us access to the toolbars, 
 status bars,
  menus, and 
  even the HTML web page currently displayed.

Window Object Proeprties.

1.innerHeight- Holds the inner height of the window's content area.
ex: window.innerHeight;
2.innerWidth-- inner width of the windows content area.
ex: window.innnerWidth;
3.outerHeight-- holds the outer height of the window including toolbars and scrollbars.
ex: window.outerHeight;
4.outerWidth-- holds outer windth of the window including toolbars and scroll bars.
5.localStorage-- this property allows access to object that stores data without any expiration date.
ex: localStorage.setItem('username','ravi');
localStorage.getItem('username')
6.sessionStorage-- this allows access to objects that store data valid only for the current session.
sessionStorage.setItem('username','ravi');
sessionStorage.getItem('username')

Methods:
1.open()-- window.open();
2.close()-- window.close();

History Object:
Property:

length returns the number of elements in the History list. Usage: history.length; 

Methods: 

back() method, loads previous URL from history list. Usage: history.back(); 

forward() method, loads next URL from history list. Usage: history.forward(); 

go() method, loads previous URL present  at the  given number from the history list. 


Naviagtion Object:

It contains information about the client, 
that is, the browser on which the web page is rendered. 
The following properties and methods help in getting this information. 

1.appName.
2.appVersion.
3.Platform
4.userAgent

Location Object.

To refresh the current page or navigate to a new page 
use the location object.

properties and methods of Location object.

properties.
1.href
location.href;-->gives the entire URL as a string.

2.hostname.
it contains the entire URL as a string.

3.Port.
4.pathname.
5.assign()
used to re-load current page to a new page.
6.relaod()
current documnet is reloaded.


 DOM Nodes:

 HTML pgae is considered as DOM tree by the browser with every HTMLelement having a heirarchy
 relationship with each other.

 there can be one more kind of manipulation that can be achieved on DOM tree.
 HTML elements can be dynamically added or removed.
 Also the elements can be accessed or modified by reffering to the relationship of the 
 target HTML element with the element that can be accessed.

 W3C DOM standard ,each HTML element can be treated as Node.

 HTML Documnet is 'document node'
 every other elemnet inside is a 'element node'.
 elements inside is a 'text node'

 These nodes appear in a heirarchical struture inside the browser .And this heirarchy relationship between 
 the ndoes allows us to traverse through teh DOM tree.

 --> The TOP node is called Parents.
 -->Every Other node in the tree belongs to one parent.
 -->every node may have several children.
 -->Nodes with same paraent reffered to as sibilings.

  DOM API properties.
1.parentNode.
returns the Node Object that is teh parent node of the specified node.

ex:document.body.parentNode.
2.childNodes.
returns NodeList Object, i.e collection of child nodes of the specified node.
Each child can be accessed by an index number that refers to its position inside the parent elemnet 

the first position is 0.

ex: document.body.childNodes.

firstChild;
returns node objcet which is the first child of the specified nodes.
ex: document.getElementbyId("div1").firstChild;

Note: WHite Space inside elements is considered as text, and text is considered as nodes.

lastChild;

returns node object whihc is last child of the specified node.

ex: document.getElementById("div1").lastChild;

nextSibiling;
returns the next Node Object.

previousSibiling;

retunrs previous node at same tree level.

note: similar to all these properties of Node Object, the DOM also have 
proeprties such as parentElement, firstElementChild, lastElementChild, next ElementSibiling,and 
previousElementSibiling.

the difference is that element properties return only the element Object where as node properties return element, text and attribute nodes.

The node relationship allows to modify the tree of nodes by adding new nodes and removing the existing nodes if required. 

For the given HTML page, below methods will do the following: 

Create a new element 

Create new content 

Add new content to the new element 

Add a new element to the existing DOM tree 

Node Manipulation Methods.

1.createElement();
ex: document.createElement('span');
2.createTextNode.
ex: document.createTextNode()
3.appendChild()
ex: document.getElementById('div1').appendChild(newElement);
4.removeChild()
Ex: document.getElementById('div1').removeChild();

*******************************************************************
Adding event listners using a script outside by removing inline 
script tagging to element.

document.getElementById('para1').onclick=function(){ 
        alert('Para one clicked'); 
} 
//OR   
document.getElementById('para2').addEventListener('click', function(){ 
        alert('Para two clicked');} 
,false); 

*********************************************************************
Events in JavScripts are considered as Objects.

when events are fired ,the 'event' object is generated by browser . this object encapsulates all data 
related to that event.

To Acces sor manipulate this object , it can optionally be passed as the 
first argument to the event handler function.

The proeprties of this Object are as follows.

1.target
2.type.

target Event Proeprty.
it refers to HTML element that fired the event.

example:
<p id="para1" onclick="executeMe(event)"> Para one of my page</p> 
<script> 
     function executeMe(event) {
            alert(event.target.nodeName)
        }
</script> 
//alert box shows P ID="PARA1" 

type Event Property.

Tells the type of event that have taken place like click, load, etc.

Example.

<p id="para1" onclick="executeMe(event)"> Para one of my page</p> 
<script> 
   function executeMe(event) {
            alert(event.type)
        }
</script> 
//alert box shows click


Methods of Event Object:

preventDefault().

Cancels the defalut action asociated with HTML element and adds user -defined action (if required)

For example, an element’s default action is to navigate to the given link. That action can be cancelled and some other action can be done instead.

event.preventDefault();
