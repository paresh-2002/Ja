// Variable 
// Variables are Containers for Storing Data
// Variables declared with the var always have Global Scope.
    // var name = "Nilesh";
    // var age = 20;
    // age = 25;
    // console.log(name +' is '+ age + ' Year old');

// Variables declared with let have Block Scope
    // let name = 'Rakesh';
    // let age = 30;
    // age = 35 // value can be re-assign
    // let age = 35 // Variable name can't re-assign
    // console.log(name +' is '+ age + ' Year old');

// Variables defined with const have Block Scope
    // const name = 'Ramesh';
    // const age = 18;
    // age = 25; // Variable and Value Can't Re-assign because this is a constant Variable
    // console.log(name +' is '+ age + ' Year old');

// JavaScript Datatypes

// String
    // var name = "Nilesh";
    // const name = 'Ramesh';
    // console.log(name);
    // console.log(typeof(name));

// Number
// integer Number
    // let age = 30;
    // console.log(age);
    
// Floating Number
    // var floatNum = 20.02;
    // console.log(floatNum);
    // console.log(typeof(floatNum));

// Bigint
    // let x = BigInt('1234567891234567891234567890');
    // console.log(x);
    // console.log(typeof(x));

// Boolean
// Boolean DataType return true and false value
    // let num = 30;
    // let num1 = 30;
    // console.log(num == num1);
    // console.log(num >= num1);
    // console.log(typeof(num == num1));


// Undefined
// variable without a value, has the value undefined
    // let x;
    // console.log(x); 
    // console.log(typeof(x));

// Array
// JavaScript arrays are written with square brackets. Array items are separated by commas.
    // const cars = ["Saab","Volvo","BMW"];
    // console.log(cars);
    // console.log(typeof cars);

// Object
// JavaScript objects are written with curly braces {}
// Object properties are written as name:value pairs, separated by commas.
    // const obj = {
    //     fistName: 'John',
    //     lastname:'Naresh',
    //     age: 20,
    //     city:'Surat',
    //     fullname: function(){
    //         return this.fistName +' '+ this.lastname;
    //     },
    // };
    // console.log(obj.fullname());
    // access object properties in two ways
    // console.log(obj.age);
    // console.log(obj['city']);
    // console.log(typeof(obj));

// create a new JavaScript object using new Object()
    // const obj1 = new Object();
    // obj1.lastname = 'John';
    // obj1.name='Sanjay';
    // console.log(obj1);

    // JavaScript Object Constructors
    // function Animal(name,color,age){
    // this.name = name;
    // this.color = color;
    // this.age = age;
    // }
    //  const cat = new Animal('cat','black',14);
    //  console.log(cat);


// Operator

// Arithmetic Operators
// Arithmetic Operators are used to perform arithmetic on numbers
    // +,-,*,/,%
    // let num = 2;
    // let x = 100+100/num*5-10;
    // console.log(x);

// Assignment Operators
// Assignment operators assign values to JavaScript variables.
    // =,+=,-=,*=,/=,%=,**=
    // let x = 10;
    // x += 5;
    // console.log(x);
    // x = x + 5
    // console.log(x);
   

// Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values
    // <,>,==,===,<=,>=,!=,!==,?
    // let x = 10;
    // let y = 10;
    // console.log(x < y);

// Logical Operators
// Logical operators are used to determine the logic between variables or values
    // ||,&&,!
    // let x = 5;
    // let y = 10;
    // console.log(x < y && y < 10); // false
    // console.log(x < y || y < 10); // true
    // console.log(!(x==y)); // true

// Ternary Operators
    // let num = 54;
    // let num1 = 25;
    // let less = num < num1 ? true:false;
    // console.log(less);

// The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
    // const car = {type:"Fiat", model:"500", color:"white"};
    // let name = car?.name;
    // console.log(name); // undefined
    
// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
    // let name = null;
    // let text = "missing";
    // let result = name ?? text;
    // console.log(result); // missing

// Bitwise Operations
    // & = AND	-> Sets each bit to 1 if both bits are 1 
        //5 && 1 -> 0101 && 0001 = 0001 => 1

    // | = OR	-> Sets each bit to 1 if one of two bits is 1  
        // 5 || 1 -> 0101 || 0001 = 0101 => 5

    // ^ = XOR	-> Sets each bit to 1 if only one of two bits is 1 
        // 5 ^ 1 -> 0101 && 0001 = 0100 => 4

    // ~ = NOT	-> Inverts all the bits 
        // ~5 -> ~0101 = 1010 => 10

    // << = Zero fill left shift ->	 Shifts left by pushing zeros in from the right and let the leftmost bits fall off
        // 5 << 1 -> 0101 << 1 = 1010 => 10

    // >> = Signed right shift	->   Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
        // 5 >> 1 -> 0101 >> 1 = 0010 => 2
        
    // >>> = Zero fill right shift -> Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
        // 5 && 1 -> 0101 >>> 1 = 0010 => 2

// Condition Statement
// Conditional statements are used to perform different actions based on different conditions
    // let a = 10;
    // let b = 25;
    // if(a>b){
    //     console.log('A is Grater then B');
    // }else{
    //     console.log('B is grader then A');
    // }

// Loop Statement
// Loops can execute a block of code a number of times
// for loop
// loops through a block of code a number of times
// initialize - expression 1 to initialize the variable used in the loop (let i = 0)
// evaluate -  expression 2 is used to evaluate the condition of the initial variable (i <= n)
// increments - expression 3 increments the value of the initial variable (i++)
    // let n = 5;
    // let string = "";
    // for (let i = 1; i <= n; i++) {
    //   for (let j = 0; j < i; j++) {
    //     string += "*";
    //   }
    //   string += "\n";
    // }
    // console.log(string);

// while Loop
// loops through a block of code while a specified condition is true
    // let i = 0;
    // while(i<10){
    //     console.log(i);
    //     i++;
    // }

// do while loop
// also loops through a block of code while a specified condition is true
    // let i = 0;
    // do{
    //     console.log('this is a DO while loop');
    //     i++
    // }while(i>10);
    // break Statement

// for in loop
// Do not use for in over an Array if the index order is important.
// loops through the properties of an object
// const animal = {name:'cat',color:'black',age:14}
    // let text = ''
    // for(let x in animal){
    //     console.log( animal[x] + ' ');
    // }

// for of loop
// loops through the values of an iterable object
    // let arr = [1,2,5,6,4]
    // for(i of arr){
    //     console.log(i);
    // }

// forEach loop
// The forEach() method calls a function (a callback function) once for each array element.
    // let arr = [1,2,5,6,4,10,2,5,1,0]
    // arr.forEach(element => {
    //     console.log(element);
    // });

// for loop with conditional statements, and also with break and continue
    // for(i = 0; i<=10; i++){
    //     if(i===4){
    //         break;
    //     }
    //     console.log(i);
    // }
    // for(i = 0; i<=10; i++){
    //     if(i===5){
    //         continue;
    //     }
    //     console.log(i);
    // }

// with for in loops
    // let student = [
    //     {Name: 'John', marks:[10,40,50,60,50]},
    //     {Name: 'deo', marks:[10,60,50,60,50]},
    //     {Name: 'leo', marks:[10,20,80,60,50]},
    // ]
    // let x = ''
    // for(let i in student){
    //    x += '<h1>'+ student[i].Name + '</h1>';
    //     for(let j in student[i].marks){
    //         x += student[i].marks[j] +'<br>';
    //     }
    // }
    // document.write(x)

// with for of loops
    // for(let i of student){
    //     x += i.Name + '\n'
    //     for(let j of i.marks){
    //         x += j +'\n\n';
    //     }
    // }
    // console.log(x.toString());
