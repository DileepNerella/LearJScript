the key word "class" is used for create a class.
constructor method is called each time a class object is created and initialised.
objects are real time representation of entity.
Different methods are used to communicate between the 
objects to perform the various operations.

Static methods can only be accessed using the class Name.

class Calculator {
	constructor(num1, num2){  // Constructor used for initializing the class instance
	
		/* Properties initialized in the constructor */
		this.num1 = num1;
		this.num2 = num2;
	}
	/* Methods of the class used for performing operations */
	add() {
		return this.num1 + this.num2;
	}
	subtract() {
		return this.num1 - this.num2;
	}
    static display()
    {
        console.log("This is a calculator app");
    }
}
let calculator = new Calculator(300, 100); // Creating Calculator class object or instance
console.log("Add method returns" + calculator.add()); // Add method returns 400. 
console.log("Subtract method returns" + calculator.subtract()); // Subtract method returns 200. 

//static referenece of object.
Calculator.display();

Inheritance in classes.

extends keyword is used to inherit the classes
all methods and static objects can be accessed by inheritanc eor sub class.

super key word lets to access the methods of parent classes.

example

class Vehicle {
	constructor(make, model) {
		/* Base class Vehicle with constructor initializing two-member attributes */
		this.make = make;
		this.model = model;
	}
}
class Car extends Vehicle {
	constructor(make, model, regNo, fuelType) {
		super(make, model); // Sub class calling Base class Constructor 
		this.regNo = regNo;
		this.fuelType = fuelType;
	}
	getDetails() {
		/* Template literals used for displaying details of Car. */
		console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
	}
}
let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // Creating a Car object 
c.getDetails(); 


Sub classing Built-in.

The keywords class and extends help devlopers to create classes 
and implemnet inheritance in the application where user defined classes can be 
created and extended.

example
class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}
	display() {
		let strItems = "";
		for (let val of this) {
			strItems += `${val} `;
		}
		console.log(strItems);
	}
}
let letters = new MyArray("Sam", "Jack", "Tom");
letters.display(); 
