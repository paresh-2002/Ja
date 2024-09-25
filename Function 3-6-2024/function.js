// Function 
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// A JavaScript function is defined with the function keyword
    // function myFunction(){
    //     console.log('This is a Function');
    // }
    // myFunction()

// When JavaScript reaches a return statement, the function will stop executing.
    // console.log(myFunction(5));
    // function myFunction(y) {
    //   return y * y;
    // }

    // function myFunction(a,b){
    //     return a + b;
    // }
    // console.log(myFunction(5,3));

// Functions running in parallel with other functions are called asynchronous
// anonymous function is a function without a name.
    // const anonymous = function(x, y){
    //     console.log(x * y);
    // }
    // const anom = anonymous(4,5)

// The typeof operator in JavaScript returns "function" for functions.
    // console.log(typeof myFunction)

// Arrow functions do not have their own 'this' keyword. They are not well suited for defining object methods.
    // const ArrowFunc = () => {
    //     console.log('This is an Arrow Function');
    // }
    // ArrowFunc()

    // const ArrowFunc = (a,b) => {
    //     console.log(a * b);
    // }
    // ArrowFunc(5,4)

// Default Parameter Values
    // function defaultPara(name, age = 21){
    //     console.log(name + ' is ' + age + ' year Old');
    // }
    // defaultPara('john')

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
    // function restOperator(...rest){
    //         console.log(rest);
    //     }
    //     restOperator('john','Deo','Leo')


// JavaScript functions have a built-in object called the arguments object.
    // function findMax(){
    //     let len = arguments.length;
    //     let max = -Infinity
    //     for(let i = 0; i < len; i++){
    //         if(arguments[i] > max){
    //             max = arguments[i];
    //         }
    //     }
    //     console.log(max);
    // }
    // findMax(1,5,25,56,100,58,54)

    // function findMin(){
    //     let len = arguments.length;
    //     let min = Infinity
    //     for(let i = 0; i < len; i++){
    //         if(arguments[i] < min){
    //             min = arguments[i];
    //         }
    //     }
    //     console.log(min);
    // }
    // findMin(1,5,25,56,100,58,54)

// In JavaScript, the this keyword refers to an object.
    // const Object = {
    //     firstName: 'john',
    //     lastName: 'Deo',
    //     fullName: function(lastName = 'Leo'){
    //         console.log(this.firstName + ' ' + lastName);
    //     }
    // };
    // Object.fullName()

// Function with a Function Constructor
    // This is a function constructor:
    //     function myFunction(fName,lName){
    //         this.firstName = fName;
    //         this.lastName = lName;
    //     }
    // // This creates a new object
    //     const myObject = new myFunction('Marco','Leo')
    //     console.log(myObject.lastName);


// With the call() method, you can write a method that can be used on different objects.
    // const person = {
    //     fullName: function(age,city){
    //         return this.firstName + ' ' + this.lastName + ' ' + age + ' ' + city;
    //     }
    // }
    // const preson1 = {
    //     firstName: 'john',
    //     lastName: 'Leo'
    // }
    // const preson2 = {
    //     firstName: 'Marco',
    //     lastName: 'Deo'
    // }

// The call() method takes arguments separately.
    // console.log(person.fullName.call(preson1, 32 , 'Oslo'));

// The apply() method takes arguments as an array.
    // console.log(person.fullName.apply(preson2,[33 , 'Norway']));

// With the bind() method, an object can borrow a method from another object.
    // let fullName = person.fullName.bind(preson1)
    // console.log(fullName(25,'Dallas'));

// A function that is passed to another function as a parameter is a callback function
    // const message = function() {  
    //     console.log("This message is shown after 3 seconds");
    // }
    // setTimeout(message, 3000);

// When a function is used as a callback, this is lost.
// the bind() method is used to bind person.display to person.
    // const person = {
    //     firstName: 'john',
    //     lastName: 'Deo',
    //     display: function(){
    //         console.log(this.firstName + ' ' +this.lastName);
    //     }
    // }
    // let display = person.display.bind(person);
    // setTimeout(display, 3000);

// JavaScript variables can belong to the local or global scope.
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
// Object constructor
// Sometimes we need to create many objects of the same type.To create an object type we use an object constructor function.
// name constructor functions with an upper-case first letter
    // function Porson(fName,lName,age)  {
    //     this.firstName = fName;
    //     this.lastName = lName;
    //     this.age = age;
    // }
    // const men = new Porson('John','Deo',25);
    // const women = new Porson('Lily','Deo',23);
    // console.log(men.firstName,women.firstName);


    //input array and target [10,20,30] 10  -1
    //if array equal to target index 
    function matchValue(arr, target){

        for( i = 0;  i < arr.length; i++){

            if(arr[i] === target)
                return i
        }

        return -1
    }

    console.log(matchValue([10,20,30] , 30));
    
       


    