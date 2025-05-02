/**********************************************************/
Function calls in Javascript.
In java script functions are first -class Objects. 
1.the functions can be passed as a argument to otehr functions 
2.it can be a return value of another function 
3.can be assigned as a value to a variable .

Type of functions in Javascript
1.User defined functions.
2.Built-in functions.

1.
Syntax: function function_name(param 1, param 2, ..param n){
    //statement to executed.
}

Arrow function:
 
  example of using a function to assing to a varaiable.

let saybye = function (){
    console.log("welcome to my Page");
};
sayBye();

//here we can see sayBye is a variable and calling the function.

example of arrow function.

let sayBye=()=>{
    console.log("Welcome to Arrow function");
};
sayBye();

various ways of parameters to pass for arrow functions.

example syntax 1.
productoftwonum = (num1,num2)=>{
    return num1* num 2;
};

example synatx 2 No Param ,single line code.
if the code is single line {} is not required.
play=()=>"lets go play"
console.log(play());

example synatax 3 One Parameter ,single line code .
if only one param ,then () is not required.

play= gamename =>"Play game of "+ gamename;
console.log(play("cricket"));

example sysntax 4 One param, single line code.

holiday = _ =>"Holiday to "+ _;
console.log(holiday("India");)
if only one param, use '_' and do not use a variable name also.


/usage of key word this/

this key word usage will differ from normal this reference so be care ful when 
using the this usage.

/function parameters/

in javaScript functiona doesnot have any data type specified for the parameters, and type 
checking is not performed on the arguments passed to teh function.

JavaScript doesnot throw any error if the number of arguments passed during teh 
function invocaton deosnt match with number of paramters listed during teh function 
definition,
if the number of parameters is more than the number of arguments , then teh param,eters
that have no corresponding arguments are set to undefined.

java script let you define the default value for a function when definition.

REST paramter Synatx in function definition.:

"..." indicates an array.

function(x,y,...z){

};

example
function XYZ(a,b,...c){
return z;
}

console.log(XYZ(1,2,3,4,5));//[3,4,5]
console.log(XYZ(3,4,5,6,7,8));//[5,6,7,8]

/Destructuring Assignment.

DeStructring gives a syntax which makes it easy to unpack values 
from arrays or properties from objects,into different variables.

Array destructuring in functions.


let myArray = ["Andrew", "James", "Chris"];
function showDetails([arg1, arg2]) {
	console.log(arg1); // Andrew
	console.log(arg2); // James
}
showDetails(myArray);


let myObject = { name: "Mark", age: 25, country: "India" };
function showDetails({ name, country }) {
	console.log(name, country); // Mark India
}
showDetails(myObject);


/**************Nested function.

its normal to have a function inside another function.
the nested function is private to the container function and cannot be invoked 
from outside the container function.

example:
function giveMessage(message) {
	let userMsg = message;
	function toUser(userName) {
		let name = userName;
		let greet = userMsg + " " + name;
		return greet;
	}
	userMsg = toUser("Bob");
	return userMsg;
}
console.log(giveMessage("The world says hello dear: "));
// The world says hello dear: Bob

/********************************************************

Built -in functions*********/

1.alert()-->alert("lets us proceed");
2.confirm()--> it throws a confirm box where user can click 
"OK" or "Cancel". if OK it return "true" else "false".

3.prompt()--> it produce a box where user can enter an input.
the function takes paramter of type string which represents the label fo the 
box.-->let userip=prompt("Please enter your user name");

4.isNaN()-->
5.isFinite()
6.parseInt()-->parses string and returns integer number.
7.parseFloat()
8.eval()-->it takes an argument of type string which can bean expression ,statement
or sequence of statemnets and evaluates them.
9.setTimeout()-->it executes a given function after waiting for the 
specified number of millisec.
it takes two parameters .first is the fucntion to be executed and second is thenumber of mlliseconds after 
whcih the given function should be executed.
setTimeout(funtion,3000);
here the function is executed after 3sec.

10.clearTimeout()
it cancels a timeout previously established by calling setTimeout();
it takes the parameter "timeoutID" which is the identifier of the timeout 
that can be used to cancel the execution of setTimeout().

example

somefuncton..

lest timerId = setTimeout(somefunction,3000);
clearTimeout(timerId);
//unknow what will happen to function exeution.

11.setInterval()

it takes two parameters one is function to invoke repetitively and second is
time interval.

setInterval(function,time);

12.clearInterval();
it cancels the timed, repeating execution which was previously 
established by a call to setInterval().

it takes the parameter "intervalID" whcih is the identifier of the timeout 
that can be used to cancel the execution of setInterval.


/variables scope in the function/
javaScript scopes can be of three types.
1.Global Scope.
variables defined outside of the functon have global scope.

//Global variable
var greet = "Hello JavaScript global varable.";
function greetmessage() {
	
	//Global variable accessed inside the function
	console.log("Message from inside the function: " + greet);
}
greetmessage();
//Global variable accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Message from outside the function: Hello JavaScript

2.Local Scope.
variables declared inside the function would have local scope.

example:
function greetmessage() {
	//Local variable
	var greet = "Hello JavaScript";
	//Local variables are accessible inside the function
	console.log("Message from inside the function: " + greet);
}
greetmessage();
//Local variable cannot be accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Uncaught ReferenceError: greet is not defined

Note: Variable declared without var has a global scope.

3.Block Scope.

variables declared with 'var' keyword are function-scoped where as varaibles 
declared with 'let' and 'const' are block-scoped and they exist only in the 
block .

examples below two.

function testVar() {
	if (10 == 10) {
		var flag = "true";
	}
	console.log(flag); //true
}
testVar();

function testVar() {
    if (10 == 10) {
        let flag = "true";
    }
    console.log(flag); //Uncaught ReferenceError: flag is not defined
}
testVar();

/*******Hoisting*******/
Hositing means all the variable functions declarations where ever they are present
throughout the program,gets lifted and declared to thetop of the program.only the declaration and
not the initialization gets hoisted to top.


varaiables declared using let and const are not hoisted to the top of the 
program.




