// 5) Bitwise operator
// JavaScript Bitwise AND
    // console.log(5 & 1);   // 1
// JavaScript Bitwise OR
    // console.log(5 | 1);   // 5
// JavaScript Bitwise XOR
    // console.log(5 ^ 1);   // 4
// JavaScript Bitwise NOT (~)
    // console.log(~5);      // -6
// JavaScript (Zero Fill) Bitwise Left Shift (<<)
    // console.log(5 << 1);  // 10
// JavaScript (Sign Preserving) Bitwise Right Shift (>>)
    // console.log(5 >> 1);  // 2
// JavaScript (Zero Fill) Right Shift (>>>)
    // console.log(5 >>> 1); // 2
    
// Converting Decimal to Binary
    // function decBin(dec){
    //    return (dec >>> 0).toString(2)
    // }
    // console.log(decBin(5));
    // console.log(decBin(4));
    // console.log(decBin(16));

// Converting Binary to Decimal
    // function binDecBin(bin){
    //     return parseInt(bin,2).toString(10)
    // }
    // console.log(binDecBin(1001));


// Destructuring
// Object Destructuring
    // const obj = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     age: 34,
    // };
    // Destructuring
    // let{firstName, lastName} = obj;
    // console.log(firstName + ' ' + lastName, city = 'UK'); with default value
    
// String Destructuring
    // const str = 'ABCDEFGH'
    // Destructuring
    // let [a, b, c, d, e, f, g, h] = str
    // console.log(a, b, c, d);

// Array Position Values
    // const str = 'ABCDEFGH'
    // Destructuring
    // let {[0]:a, [1]:b, [6]:c, [5]:d, ...rest} = str
    // console.log(a, b, c, d,rest);

// Destructuring Maps
    // const cars = new Map([
    //     ['BMW', 100],
    //     ['Audi', 300],
    //     ['Saab', 400],
    //     ['Volvo', 500]
    // ])
    // Destructing
    // for(let [key,value] of cars) {
    //     console.log(key + ' is ' + value);
    // }

    // Swapping JavaScript Variables
    // let firstName = 'John';
    // let lastName = 'Deo';
    // [firstName, lastName] = [lastName, firstName];
    // console.log(firstName + ' ' + lastName);  

// 6) Regular Expression
    // const str = 'Visit W3Schools!'
// Perform case-insensitive matching
    // console.log(str.search(/W3Schools/i));
    // console.log(str.replace(/w3Schools/i,'Microsoft'));
// Regular Expression Modifiers
    // let text = "Is this all is there is h?"
    // Perform a global /g match (find all)
    // console.log(text.match(/is/g));

    // Perform multiline matching /m
    // console.log(text.match(/^is/m));

    // Perform start and end matching /d
    // console.log(text.match(/s/d));

// Regular Expression Patterns
// Find any of the characters between the brackets
    // console.log(text.match(/[h]/g));

// Find any of the digits between the brackets
    // let num = '123456789'
    // let between = num.match(/[1-4]/g)
    // console.log(between);

// Find any of the alternatives separated with |
    // let color = 'green yellow pink black white gree yell pin black pink'
    // console.log(color.match(/(black|yellow|pink)/g));


// Metacharacters are characters with a special meaning:
// Find a digit
    // let num = 'this is Hello 6 look 120345 10 001 ooo'
    // console.log(num.match(/\d/g));

// Find a whitespace character
    // console.log(num.match(/\s/g));
    
// Find a match at the beginning of a word
    // console.log(num.search(/\blo/g));
    // console.log(num.search(/lo\b/g));

// Find the Unicode character specified by the hexadecimal number xxxx
    // console.log(num.match(/\u006f/g));

// Matches any string that contains at least one
    // console.log(num.match(/0+/g));

// Matches any string that contains zero or more occurrences 
    // console.log(num.match(/lo*/g));

// Matches any string that contains zero or one occurrences
    // console.log(num.match(/oo?/g));

// It searches a string for a pattern, and returns true or false, depending on the result.
    // console.log(/is/.test(num));
    
// It searches a string for a specified pattern, and returns the found text as an object
    // console.log(/is/.exec(num));


// 7) Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

    // let btn = document.querySelector('#btn').addEventListener('click',myFunction)
    // function myFunction() {
    //     let x = document.querySelector('#input').value;
        
    //     try { // The try statement allows you to define a block of code to be tested for errors while it is being executed.

    //         if(x.trim() == "") throw 'Empty'; //The throw statement allows you to create a custom error
    //         if(isNaN(x)) throw 'Not a Number';
    //         x=Number(x);
    //         if(x<1) throw 'To Low';
    //         if(x>10) throw 'To High';
    //     }catch(err){ // The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    //         console.log('Input is ' + err);
    //     }
        
    //     finally{ // The finally statement lets you execute code, after try and catch, regardless of the result
    //         document.querySelector('#input').value = "";
    //     }
    // }

// let num = 1;
//     try {
        // different values can be returned by the error name property:
        // A RangeError is thrown if you use a number that is outside the range of legal values.
            // num.toPrecision(500);  // RangeError

        // A ReferenceError is thrown if you use (reference) a variable that has not been declared
            // num = y + 1  // ReferenceError

        // A SyntaxError is thrown if you try to evaluate code with a syntax error.
            // eval('alert("this is a SyntaxError)')  // SyntaxError

        // A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function
            // num.toUpperCase();  // TypeError
         
        // A URIError is thrown if you use illegal characters in a URI function:
            // decodeURI('%%%')  // URIError
    // }
    // catch(err) {
    // console.log(err.name);
    // }

// 8) JavaScript Scope
// Block scope:
// Variables declared inside a { } block cannot be accessed from outside the block
    //  {
    //     let x = 'This is Let Variable';
    //     console.log(x); // you can use here
    // };
    // console.log(x); // you can't use hare

    //  {
    //     const x = 'This is Const Variable';
    //     console.log(x); // you can use here
    // };
    // console.log(x); // you can't use hare

// Function scope:
// JavaScript has function scope: Each function creates a new scope.
// Variables declared within a JavaScript function, are LOCAL to the function
// Variables defined inside a function are not accessible (visible) from outside the function.
    // function localVar(){
    //     let x = 'This is Local Variable';
    //     console.log(x); // you can use here
    // }
    // localVar()
    // console.log(x); // you can't use hare

// Global scope:
// A variable declared outside a function, becomes GLOBAL.
// Global variables can be accessed from anywhere in a JavaScript program.
    // let y = 'This is Global Variable'
    // function globalScope(){
    //     let x = 'This is Local Variable';
    //     console.log(x); // you can use here
    //     console.log(y);// you can also use here
    // }
    // globalScope()
    // console.log(y); // you can use hare


// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable
    // function withoutVariable(){
    //     firstName = 'John';
    //     console.log(firstName); // you can use here
    // }
    // withoutVariable()
    // console.log(firstName); // you can use here