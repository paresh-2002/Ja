// 1) JavaScript Modules
// JavaScrip modules allow you to break up your code into separate files
// Modules are imported from external files with the import statement.
// modules also rely on type='module' in the <script> tag
    // import { name, age } from "./myModule.js";
    // console.log(name + " " + age);
    // import add, { sub, multiply, duplicate} from "./myModule.js";
    // console.log(add(2, 6));
    // console.log(sub(10, 6));
    // console.log(multiply(10, 4));
    // console.log(duplicate(15));

// 2) JavaScript Classes
// Use the keyword class to create a class
// Always add method named constructor
// The javascript class is not an object.
// It is a template for javascript object
// when you have a class, you can use the class to create objects
// Constructor
// It is executed automatically when a new object is created
// It is use to initialize object properties
// If you do not define a constructor method javascript will add an empty constructor method
    // class Person {
    //   constructor(name, age) {
    //     name = name;
    //     age = age;
    //   }
    // }
    // const myInfo = new Person();
    // console.log((myInfo.name = "John"), (myInfo.age = 30));

// Add many Class Method in class
    // class Person {
    //   constructor(fname, lname, age) {
    //     this.fname = fname;
    //     this.lname = lname;
    //     this.age = age;
    //   }
    //   fullName() {
    //     return `My FullName is ${this.fname} ${this.lname}`;
    //   }
    // }
    // const myInfo = new Person("John", "Deo", 30);
    // console.log(myInfo.fullName());

// Static class Method
// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class
    // class Dog {
    //   constructor(name) {
    //     this._name = name;
    //   }
    //   introduce() {
    //     console.log("This is " + this._name + " !");
    //   }
    //   // A static method
    //   static bark() {
    //     console.log("Woof!");
    //   }
    // }
    // const myDog = new Dog("Buster");
    // myDog.introduce();
    // Calling the static method
    // myDog.bark(); // you Can't define this way
    // Dog.bark();

// Class inheritance
// To create  a class inheritance, use the extends keyword
// A class create with a class inheritance inherits all the methods from another class
    // Parent class
    // class Media {
    //   constructor(info) {
    //     this.publishDate = info.publishDate;
    //     this.name = info.name;
    //   }
    // }
    // // Child class
    // class Song extends Media {
    //   constructor(songData) {
    //     super(songData);
    //     this.artist = songData.artist;
    //   }
    // }
    // const mySong = new Song({
    //   artist: "Queen",
    //   name: "Bohemian Rhapsody",
    //   publishDate: 1975,
    // });
    // console.log(mySong);

// 3) JavaScript Arrow Function
// with arrow function the this keyword always represents the object that defined the arrow function
// no arguments
    // const printHello = () => {
    //   console.log("hello");
    // };
    // printHello();

// With two arguments
    // const multiply = (a, b) => a * b;
    // console.log(multiply(2, 30));

// With a single argument
    // const checkWeight = (weight) => {
    //   console.log(`Weight : ${weight}`);
    // };
    // checkWeight(25);

// 4) The JavaScript this Keyword
// 'this' keyword refers to the object itself, allowing access to its properties and methods within the method's scope
// Alone, 'this' refers to the global object
// In a function, in strict mode, 'this' is undefined
