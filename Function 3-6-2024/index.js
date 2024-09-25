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
    // function myFunction(fName,lName){
    //     this.firstName = fName;
    //     this.lastName = lName;
    // }
    // const myObject = new myFunction('Marco','Leo')
    // console.log(myObject.lastName);


// With the call() method, you can write a method that can be used on different objects.
    // const person = {
    //     fullName: function(age,city){
    //         return this.firstName + ' ' +this.lastName + ' ' + age + ' ' + city;
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
    // const man = new Porson('John','Deo',25);
    // const woman = new Porson('Lily','Deo',23);
    // console.log(men.firstName,women.firstName);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// HTML DOM Elements
// Find elements by tag name
    // const para = document.getElementsByTagName('p');

// Find elements by class name
    // const Class = document.getElementsByClassName('main');

    // const selector = document.querySelectorAll('p.main');

// Find an element by element id
    // document.getElementById('demo').innerHTML = 'Hello, This is a DOM ' +  selector[0].innerHTML;

    // const form = document.forms['myForm'];
    // let text = ''
    // for(let i = 0; i < form; i++) {
    //     text += form[i].value + '<br>';
    // console.log(text);
    //     }
    // document.getElementById('demo').innerHTML = text;   

    // document.getElementById('demo').innerHTML = 'How Many Anchor Tag ' + document.anchors.length;
    // document.getElementById('demo').innerHTML = document.body.innerHTML;
    // document.getElementById('demo').innerHTML = document.documentElement.innerHTML;
    // document.getElementById('demo').innerHTML = document.embeds.length;
    // document.getElementById('demo').innerHTML = document.links.length;
    // document.getElementById('demo').innerHTML = document.scripts.length;
    // document.getElementById('demo').innerHTML = document.title;
    // document.getElementById('demo').innerHTML = document.lastModified;


// HTML DOM - Changing HTML
    // The easiest way to modify the content of an HTML element is by using the innerHTML property.
        // document.getElementById('id01').innerHTML = 'New Heading'

    // To change the value of an HTML attribute,
        // document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0zm8fT8QhA0Ou03Q32XNUgXjkK82wHPi5Q&s'

        // document.getElementById('demo').innerHTML = 'Date:' + Date()

    // document.write() can be used to write directly to the HTML output stream:
        // document.write(Date());

// Forms
    // function validateForm(ev) {
    //     ev.preventDefault();
    //     let x = document.forms["myForm"]["fname"].value;
    //     if (x == "") {
    //         alert("Please enter your FirstName");
            // return false;
    //     }
    // }
// document.getElementById('id01').style.color='pink'
// document.getElementById('id01').style.fontFamily='Helvetica'
// document.getElementById('id01').style.fontSize='40px'

// document.getElementById('demo').innerHTML = `
// <button type="button" onclick ="document.getElementById('id01').style.color = 'yellow'">Click</button> 
// <button type="button" onclick ="document.getElementById('id01').style.visibility = 'hidden'">Text Hide</button>
// <button type="button" onclick ="document.getElementById('id01').style.visibility = 'visible'">Text Show</button>
// `

