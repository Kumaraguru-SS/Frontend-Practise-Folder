//Functions
function sayHello() {
  return "Hello World!";
}
let greeting = sayHello();
document.getElementById("intro").innerHTML = greeting;

//Function declaration
function greet(name) {
	return `Hello, ${name}!`;
}
let greetme=greet('John Smith'); 
document.getElementById("declar").innerHTML = greetme;

//Function expression
const add = function (a, b) {
	return a + b;
}
let sum = add(5, 3);
document.getElementById("expres").innerHTML = "The sum is: " + sum;

//Arrow function
const multiply = (a, b) => a * b;
let product = multiply(4, 6);
document.getElementById("arrow").innerHTML = "The product is: " + product;

//Recursion (factorial)
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
let fact5 = factorial(5);
document.getElementById("recursion").innerHTML = "Factorial of 5 is: " + fact5;


//Objects
const person = {
  firstName: "John",
  lastName: "Smith",
  age:20,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("obj_intro").innerHTML = "Full Name: " + person.fullName() + ", Age: " + person.age;

//Object Properties and Methods
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getDetails: function() {
    return `${this.year} ${this.make} ${this.model}`;
  }
};
document.getElementById("obj_details").innerHTML = "Car Details: " + car.getDetails();

let age = person["age"];
if(age>=18){
  document.getElementById("ageid").innerHTML = "You are an adult.";
}else{
  document.getElementById("ageid").innerHTML = "You are a minor.";
}


//Arrays
const fruits = ["Apple", "Banana", "Cherry"];
document.getElementById("array_intro").innerHTML = "Fruits: " + fruits.join(", ");

//Array Constructor
const numbers = new Array(1, 2, 3, 4, 5);
document.getElementById("array_constructor").innerHTML = "Numbers: " + numbers.join(", ");

//Array Methods
const colors = ["Red", "Green", "Blue"];
document.getElementById("array_methods").innerHTML = "Colors: " + colors.join(", ");
colors.push("Yellow");
document.getElementById("array_methods_push").innerHTML = "Colors: " + colors.join(", ");
colors.pop();
document.getElementById("array_methods_pop").innerHTML = "Colors after pop: " + colors.join(", ");
document.getElementById("array_length").innerHTML = "Number of colors: " + colors.length;

//Array Searching
const animals = ["Dog", "Cat", "Elephant"];
let index = animals.indexOf("Cat");
document.getElementById("array_search").innerHTML = "Index of Cat: " + index;
find = animals.includes("Elephant");
document.getElementById("array_search_includes").innerHTML = "Is Elephant in the array? " + find;

//Array Sorting
const numbersToSort = [5, 2, 9, 1, 5, 6];
numbersToSort.sort((a, b) => a - b);
document.getElementById("array_sort").innerHTML = "Sorted Numbers: " + numbersToSort.join(", ");
sortreverse = numbersToSort.reverse();
document.getElementById("array_sort_reverse").innerHTML = "Reversed Numbers: " + sortreverse.join(", ");

//Array Iteration
const letters = ["A", "B", "C"];
let letterList = "";
for (let i = 0; i < letters.length; i++) {
  letterList += letters[i] + " ";
}
document.getElementById("array_iteration").innerHTML = "Letters: " + letterList;


//Sets
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("Hello");
mySet.add({ a: 1, b: 2 });
document.getElementById("set_intro").innerHTML = "Set Size: " + mySet.size;
document.getElementById("set_values").innerHTML = "Set Values: " + Array.from(mySet).join(", ");
//Set Methods
mySet.add(10);
document.getElementById("set_add").innerHTML = "Set Size after adding 10: " + mySet.size;
mySet.delete(5);
document.getElementById("set_delete").innerHTML = "Set Size after deletion: " + mySet.size;
let hasHello = mySet.has("Hello");
document.getElementById("set_has").innerHTML = "Does the set contain 'Hello'? " + hasHello;
mySet.clear();
document.getElementById("set_clear").innerHTML = "Set Size after clear: " + mySet.size;

//Weaksets
const weakSet = new WeakSet();
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };
weakSet.add(obj1);
weakSet.add(obj2);
document.getElementById("weakset_intro").innerHTML = "WeakSet Size: " + weakSet.size;


//Maps
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
document.getElementById("map_intro").innerHTML = "Map Size: " + myMap.size;
document.getElementById("map_values").innerHTML = "Map Values: " + Array.from(myMap.values()).join(", ");

//Map Methods
myMap.set("city", "New York");
document.getElementById("map_set").innerHTML = "Map Size after adding city: " + myMap.size;
myMap.get("name");
document.getElementById("map_get").innerHTML = "Name from Map: " + myMap.get("name");
myMap.delete("age");
document.getElementById("map_delete").innerHTML = "Map Size after deleting age: " + myMap.size;
myMap.clear();
document.getElementById("map_clear").innerHTML = "Map Size after clear: " + myMap.size;

//Weakmaps
const weakMap = new WeakMap();
const objA = { id: 1 };
const objB = { id: 2 };
weakMap.set(objA, "Value for objA");
weakMap.set(objB, "Value for objB");
document.getElementById("weakmap_intro").innerHTML = "WeakMap Size: " + weakMap.size;


//Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}
}
document.getElementById("class_intro").innerHTML = "Person Class: " + new Person("John", "Smith").fullName();

//Inheritance
class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
}
document.getElementById("inheritance_intro").innerHTML = "Employee Class: " + new Employee("Jane", "Smith", "Developer").fullName() + ", Job Title: " + new Employee("Jane", "Smith", "Developer").jobTitle;

//Static Methods
class MathUtil {
  static square(x) {
    return x * x;
  }
}
document.getElementById("static_methods").innerHTML = "Square of 5: " + MathUtil.square(5);
