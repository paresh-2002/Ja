// Destructuring
// Object Destructuring
//     const person = {
    //         firstName : 'Marco',
    //         lastName: 'Leo',
    //         age : 36,
    //     }
    //    let {firstName, lastName,age} = person
    //    console.log(firstName + ' ' + lastName + ' is ' + age + ' year Old');
    //    with default value
    //    console.log(firstName + ' ' + lastName + ' is ' + age + ' year Old. And he live in', city = 'US');
    
    // Array Destructuring
    // const fruits = ['Mango','Banana','Orange']
    // let [f1,f2,f3] = fruits
    // let {[0]:f1, [1]:f2, [2]:f3} = fruits // Array Position Values
    // console.log(f1,f2,f3);
    
    // Rest Property
    // let number = [10,20,30,40,50,60,70,80,90,100]
    // let[nim1,num2,num3,num4,num5,...rest] = number
    // console.log(nim1,num2,num3,num4,num5,rest);
    
    
    // String Destructuring 
    // const str = 'ABCDEF'
    //let [a,b,c,d,e,f] = str
    // console.log(a,b,c,d);
    
    // Map() Destructuring 
    // let fruits = new Map([
        //     ['Mango',10],
        //     ['Banana',20],
        //     ['Orange',30]
        // ]);
        // for(let [key,value] of fruits) {
        //     console.log(key + ' : ' + value);
        // }
            
// Spread and Rest Operators
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// The spread operator is often used in combination with destructuring.
// Spread Operators
// spread operator with objects
    // const obj1 = {
    //     name : 'John',
    //     last:'Leo'
    // };
    // const obj2 = {
    //     city:'US',
    //     age:25
    // }    
    // console.log({...obj1, ...obj2});

// spread operator with Array
    // const arr1 = [1,2,3,4]
    // const arr2 = [5,6,7]
    // console.log([...arr1, ...arr2].toString());

// Rest Operator 
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
    // function restOper(...args) {
    //     let sum = 0
    //     for (let i = 0; i < args.length; i++){
    //         sum += args[i]
    //         }
    //     console.log(sum);
    // }
    // restOper(20,5,2,6)

// Higher-Order Functions
// A higher-order function is a function that can accept other functions as arguments, return functions, or both.
// They enable abstraction, composition, and the creation of more flexible and reusable code
// Callback Functions
// A function that is passed to another function as a parameter is a callback function
// This technique allows a function to call another function
// A callback function can run after another function has finished

    // function higherOrderFunction(callback) {
        // Perform some operations
        // Call the callback function
        // callback();
    // }
    // function callbackFunction() {
        // console.log("Callback function is executed.");
    // }
    // Passing the callback function to the higher-order function
    // higherOrderFunction(callbackFunction);

    // const message = function() {  
        // console.log("This message is shown after 3 seconds");
        // }
        // setTimeout(message, 3000);
    // When a function is used as a callback, this is lost.
    // the bind() method is used to bind person.display to person.
    // const person = {
    //     firstName: 'john',
    //     lastName: 'Deo',
    //     display: function(){
    //         console.log(this.firstName + ' ' +this.lastName);
    //         }
    //     }
        // With the bind() method, an object can borrow a method from another object.
        // let display = person.display.bind(person);
        // setTimeout(display, 3000);

// Closure in JavaScript
    // function multiplier(factor) { 
    //     return function (x) { 
    //         return x * factor;       
    //     }; 
    // } 
    // const double = multiplier(2); 
    // const triple = multiplier(3); 
    
    // console.log(double(5));  
    // console.log(triple(5));

// Max Value Identify
    // function maxValue(){
    //     let max = -Infinity;
    //     for (let i = 0; i < arguments.length; i++) {
    //         if( arguments[i] > max){
    //             max = arguments[i];
    //         }
    //     }
    //     console.log(max);
    // }
    // maxValue(10,52,60,28,100);

// Immediately Invoked Function Expressions
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.
    // (function() {
        // IIFE code block
    //     var localVar = 'This is a local variable';
    //     console.log(localVar); // Output: This is a local variable
    // })();

// IIFEs are commonly used to create private scope in JavaScript, 
// allowing variables and functions to be encapsulated and inaccessible from outside the function.
    // let counter = (function() {
    //     let count = 0;
    //     return{
    //         increment:function(){
    //             count++;
    //         },
    //         decrement:function(){
    //             count--;
    //         },
    //         getCount:function(){
    //            return count;
    //         }
    //     }
    // })();
    // counter.increment();
    // counter.increment();
    // counter.decrement();
    // counter.increment();
    // console.log(counter.getCount()); // 2
    // console.log(counter.count);      // undefine

// Outer function
    // function outer() {
    //     let arr = [];
    //     let i
    //     for (i = 0; i < 4; i++) {
    //         // storing anonymous function
    //         arr[i] = function () {
    //             return i
    //             } 
    //         }
    //     // returning the array.
    //     return arr;
    // }
    // let get_arr = outer();

    // console.log(get_arr[0]()); // 4
    // console.log(get_arr[1]()); // 4
    // console.log(get_arr[2]()); // 4
    // console.log(get_arr[3]()); // 4

// Outer function
    // function outer() {
    //     function create_Closure(val) {
    //         return function () {
    //             return val;
    //         }  
    //     }
    //     let arr = [];
    //     let i;
    //     for (i = 0; i < 4; i++) {
    //         arr[i] = create_Closure(i);
    //     }
    //     return arr;
    // }
    // let get_arr = outer();
    // console.log(get_arr[0]());  // 0
    // console.log(get_arr[1]());  // 1
    // console.log(get_arr[2]());  // 3
    // console.log(get_arr[3]());  // 4

// LocalStorage and SessionStorage
// LocalStorage
// The localStorage object stores the data with no expiration date. 
// The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
    // function localCounter() {
    //     // Check browser support
    //     if (typeof(Storage) !== "undefined") {
        //     if(localStorage.clickCount){
        //         localStorage.clickCount = Number(localStorage.clickCount) + 1
        //     }else{
        //         localStorage.clickCount = 1
        //     }
    //     document.getElementById('result').innerHTML = localStorage.clickCount
    //     }else {
    //         console.log("Sorry, your browser does not support Web Storage...");
    //     }
    //   }

// SessionStorage
// The sessionStorage is stores the data for only one session. The data is deleted when the user closes the specific browser tab.
    // function sessionCounter() {
    //     // Check browser support
    //     if (typeof(Storage) !== "undefined") {
    //         // Store
    //     if(sessionStorage.clickCount){
    //         sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1
    //     }else{
    //         sessionStorage.clickCount = 1
    //     }
    //     document.getElementById('result1').innerHTML = sessionStorage.clickCount
    //     }else {
    //         console.log("Sorry, your browser does not support Web Storage...");
    //     }
    //   }
    
    
    