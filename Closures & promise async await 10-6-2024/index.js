
// 6) JavaScript Regular Expressions
    // const str  = "Th\nis \nis my String it's simple string and use toString method"
    // console.log(str.search(/string/i));
    // console.log(str.replace(/string/i, 'ReplaceString'));
    // Regular Expression Modifiers
    // console.log(str.match(/string/i).toString());
    // console.log(str.match(/String/g).toString());
    // console.log(str.match(/^is/m).toString());
    // console.log(str.match(/(str)(ing)/d).toString());
    // Regular Expression Patterns
    // Find any of the characters between the brackets
    // console.log(str.match(/[h]/g).toString());

// Find any of the digits between the brackets
    // let num = '1 2 3 45 6 789'
    // let between = num.match(/[1-4]/g).toString();
    // console.log(between);

// Find any of the alternatives separated with |
    // let color = 'green yellow pink black white gree yell pin black pink'
    // console.log(color.match(/(black|yellow|pink)/g).toString());


// Metacharacters are characters with a special meaning:
// Find a digit
    // let num = 'this is Hello 6 look 120345 10 001 ooo'
    // console.log(num.match(/\d/g).toString());

// Find a whitespace character
    // console.log(num.match(/\s/g));

// Find a match at the beginning of a word
    // console.log(num.search(/\blo/g));
    // console.log(num.search(/lo\b/g));

// Find the Unicode character specified by the hexadecimal number xxxx
    // console.log(num.match(/\u006f/g));

// Matches any string that contains at least one
    // console.log(num.match(/o+/g));

// Matches any string that contains zero or more occurrences 
    // console.log(num.match(/lo*/g));

// Matches any string that contains zero or one occurrences
    // console.log(num.match(/00?/g));

// It searches a string for a pattern, and returns true or false, depending on the result.
    // console.log(/is/.test(num));

// It searches a string for a specified pattern, and returns the found text as an object
    // console.log(/i/.exec(num).toString());

// 7) call apply bind and Closures in javascript
// With the call() and Apply() method, you can write a method that can be used on different objects.
    // const person = {
    //   fullName: function(age,city){
    //         return this.firstName + ' ' +this.lastName + ' ' + age + ' ' + city;
    //     }
    // }
    // const preson1 = {
    //   firstName: 'john',
    //   lastName: 'Leo'
    //   }
    // const preson2 = {
    //   firstName: 'Marco',
    //   lastName: 'Deo'
    //   }
    // The call() method takes arguments separately.
    // console.log(person.fullName.call(preson1, 32 , 'Oslo'));
    // The apply() method takes arguments as an array.
    // console.log(person.fullName.apply(preson2,[33 , 'Norway']));
    // With the bind() method, an object can borrow a method from another object.
    // let fullName = person.fullName.bind(preson1)
// console.log(fullName(25,'Dallas'));

// Closures
    // const add = (function () {
    //   let counter = 0;
    //   return function () {counter += 1; return counter;}
    // })();
    //   console.log(add());


// A function that is passed to another function as a parameter is a callback function
    // const message = function() {  
    //     console.log("This message is shown after 3 seconds");
    //     }
    //     setTimeout(message, 3000);
        
    // When a function is used as a callback, this is lost.
    // the bind() method is used to bind person.display to person.
    // const person = {
    //     firstName: 'john',
    //     lastName: 'Deo',
    //     display: function(){
    //         console.log(this.firstName + ' ' +this.lastName);
    //         }
    //         }
    //         let display = person.display.bind(person);
    //         setTimeout(display, 3000);

// 8) promise async await in javascript
// JavaScript Callbacks
// A callback is a function passed as an argument to another function.remember not to use parenthesis.
    // const negative = [1,5,-25,65,25,-1,-29,-60]
    // let negNumbers = removePos(negative,(x)=>x<=0);
    // function removePos(num,callback){
    //     let myArray = []
    //     for(let i of num){
    //         if(callback(i)){
    //             myArray.push(i);
    //         }
    //     }
    //     return myArray;
    // }
    // console.log(negNumbers.toString());

// Asynchronous Function
// Functions running in parallel with other functions are called asynchronous
// setTimeout(), you can specify a callback function to be executed on time-out:
    // setTimeout(function() { myFunction("Hello I'm Run at 3 Second");
        
    // }, 3000)
    // function myFunction(value){
    //     console.log(value);
    // }

// setInterval(), you can specify a callback function to be executed for each interval
    // setInterval(myFunction, 1000);
    // function myFunction(){
    //     const date = new Date();
    //     document.getElementById('demo').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // }

// Promise
// A Promise is an Object that links Producing code and Consuming code
    // let myPromise = new Promise(function(res, rej) {
    //     // "Producing Code" (May take some time)
    //       let x = 5
    //       if(x==0){
    //         res('Ok'); // when successful
    //       }else{
    //         rej('Error');  // when error
    //       }
    //     });
    //     // "Consuming Code" (Must wait for a fulfilled Promise)
    //     myPromise.then(
    //       function(value) { /* code if successful */
    //         console.log(value);
    //        },
    //       function(error) { /* code if some error */ 
    //         console.log(error);
    //       }
    //     );

    // let myPromise = new Promise(function(resolve, reject) {
    //     setTimeout(function() {resolve("I'm Running")},3000)
    // })
    // myPromise.then(function(value) {
    //     console.log(value);
    // })
    // function myDisplayer(some) {
    //   document.getElementById("demo").innerHTML = some;
    // }

    //     function getFile(myCallback) {
    //       let req = new XMLHttpRequest();
    //       req.onload = function() {
    //         if (req.status == 200) {
    //           myCallback(this.responseText);
    //         } else {
    //           myCallback("Error: " + req.status);
    //         }
    //       }
    //       req.open('GET', "./index.html");
    //       req.send();
    //     }
    // console.log(getFile(555));

// With Promise Object                             
    // let myPromise = new Promise(function(resolve, reject) {
    //   let req = new XMLHttpRequest();
    //   req.open('GET', "./index.html");
    //   req.onload = function() {
    //     if(req.status == 200){
    //       resolve(req.response);
    //     }else{
    //       reject('File is Not Found')
    //     }
    //   };
    //   req.send();   
    // })
    // myPromise.then(
    //   function(value){document.write(value);},
    //   function(error){document.write(error);});

// The keyword async before a function makes the function return a promise:
// async makes a function return a Promise
// await makes a function wait for a Promise
// Async
    // async function myFunction(){
    //   return "Hello";
    // }
    // myFunction().then(
    //   function(value){document.write(value);},
    //   function(error){document.write(error)})

// Promise
    // function myPromise(){
    //   return Promise.resolve('Hello');
    // }
    // myPromise().then(
    //   function(value){
    //     console.log(value);
    // })

// The await keyword can only be used inside an async function
    // async function myAsync(){
    //   let myPromise = new Promise(function(resolve){
    //     return resolve('Hey, Hi How are you?');
    //   })
    //       console.log(await myPromise);
    //   }
    //   myAsync()

    // async function myAsync(){
    //   let myPromise = new Promise(function(resolve){
    //     setTimeout(function(){resolve('Hey, Hi How are you?')},3000)
    //   })
    //   console.log(await myPromise);
    // }
    // myAsync()

    // async function myAsync(){
    //   let myPromise = new Promise(function(resolve, reject){
    //     let req = new XMLHttpRequest();
    //     req.open('GET', 'index.html', true);
    //     req.onload = function(){
    //       if(req.status ===200){
    //         resolve('File is Found')
    //       }else{
    //         resolve('File is not Found')
    //       }
    //     };
    //     req.send()
    //   })
    //   console.log(await myPromise);
    // }
    // myAsync()

      