// // 1) JS Events
// onclick Event
// The user clicks an HTML element
    // let btn = document.getElementById('btn');
    // function myDate(){
    //     this.btn.innerHTML = Date()
        
    // }
// onmouseover and onmouseout Events
// The user moves the mouse over an HTML element
    // function mOver(obj){
    //     obj.innerHTML = 'Thank you'
    //     obj.style.backgroundColor = 'red';
    //     obj.innerHTML = 'Release Me'
    // }
// The user moves the mouse away from an HTML element
    // function mOut(obj){
    //     obj.innerHTML = 'Mouse Over'
    //     obj.style.backgroundColor = '#453432'
    //     obj.innerHTML = 'Thank You'
    // }
    
// onchange Event
// An HTML element has been changed
    // document.getElementById("fname").addEventListener("change", myFunction);
    // function myFunction() {
    //   var x = document.getElementById("fname");
    //   x.value = x.value.toUpperCase();
    // }

// onkeydown()
// The user pushes a keyboard key
    // var x = document.getElementById("fname");
    // function myKeyDown(){
    //     document.getElementById("para").innerHTML = "You pressed a key inside the input field" + ' ' +  x.value;
    // }

// onload Event
// Execute a JavaScript immediately after a page has been loaded
    // function myFunction() {
    //     alert("Page is loaded");
    //   }


// 2) Math function
    // const mathProperty = document.getElementById('events').innerHTML =
    // "<p><b>Math.E:</b> " + Math.E + "</p>" +                // returns Euler's number
    // "<p><b>Math.PI:</b> " + Math.PI + "</p>" +              // returns PI
    // "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +        // returns the square root of 2
    // "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +    // returns the square root of 1/2
    // "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +            // returns the natural logarithm of 2
    // "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +          // returns the natural logarithm of 10
    // "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +        // returns base 2 logarithm of E
    // "<p><b>Math.LOG10E:</b> " + Math.LOG10E + "</p>";       // returns base 10 logarithm of E

    
// returns the nearest integer:
    // const mathMethod = document.getElementById('para');
    // mathMethod.innerHTML = Math.round(5.50025)  // Output = 6

// returns the value of x rounded up to its nearest integer
    // mathMethod.innerHTML = Math.ceil(5.5)       // Output = 6

// returns the value of x rounded down to its nearest integer:
    // mathMethod.innerHTML = Math.floor(5.5)      // Output = 5

// returns the integer part of x:
    // mathMethod.innerHTML = Math.trunc(5.5)      // Output = 5 

// returns if x is negative, null or positive (-1, 0, 1)
    // mathMethod.innerHTML = Math.sign(5.4)       // Output = 1
    // console.log( Math.sign(5.5) );

// returns the value of x to the power of y
    // mathMethod.innerHTML = Math.pow(5,5);       // Output = 3125

// returns the square root of x
    // mathMethod.innerHTML = Math.sqrt(144);       // Output = 12

// returns the cubic root of a number
    // mathMethod.innerHTML = Math.cbrt(27);       // Output = 3

// returns the absolute (positive) value of x
    // mathMethod.innerHTML = Math.abs(-5.5);       // Output = 5.5
    

// returns the sine (a value between -1 and 1) of the angle x (given in radians)
// radians = Angle in degrees * PI / 180.
// Math.sin(x)
    // const mathSin = document.getElementById('para');
    // mathSin.innerHTML = Math.sin(0*Math.PI/180);       // Output = 0
// Math.cos()
    // const mathCos = document.getElementById('para1');
    // mathCos.innerHTML = Math.cos(0*Math.PI/180);       // Output = 1
    
 
// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
    // mathMethod.innerHTML = Math.min(-20,-10,0,10,20);       // Output = -20
    // mathMethod.innerHTML = Math.max(-20,-10,0,10,20);       // Output = 20

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
    // mathMethod.innerHTML = Math.random();
    
// returns the natural logarithm
// The natural logarithm returns the time needed to reach a certain level of growth
// Math.log(x) returns the natural logarithm of x.
    // mathMethod.innerHTML = Math.log(1);  // Output = 0

// Math.log2(x) returns the base 2 logarithm of x
    // mathMethod.innerHTML = Math.log2(8);  // Output = 3

// Math.log10(x) returns the base 10 logarithm of x.
    // mathMethod.innerHTML = Math.log10(10000);  // Output = 4


// 3) If__else
    // if(new Date().getHours() < 12){
    //     alert('Good Morning')
    // }else if(new Date().getHours() > 12){
    //     alert('Good Afternoon')
    // }else{
    //     alert('good Evening')
    // }

// Use the switch statement to select one of many code blocks to be executed
// 4) Switch case
    // let time = new Date().getHours()
    //     switch(true){
    //         case time < 12: 
    //             alert('Good Morning')       
    //             break;
    //         case time > 12: 
    //             alert('Good Afternoon');
    //             break;
    //         case time == 12: 
    //              alert('good Evening')
    //             break;
    //         default:
    //             alert('Not Found')
    //     }
    

// 5) Loop Statement
// for loop
    // let n = 5;
    // for (let i = 1; i <= n; i++) {
    //     console.log(i);
    // }

// The JavaScript for in statement loops through the properties of an Object
// for in loop
    // Object
    // const animal = {name:'cat',color:'black',age:14}
    // let text = ''
    // for(let x in animal){
    //     console.log( animal[x] + ' ');
    // }

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

// forEach loop
    // let arr = [1,2,5,6,4,10,2,5,1,0]

    // arr.forEach(element => {
    //     console.log(element);
    // });

// The JavaScript for of statement loops through the properties of an Array and String
// for of loop
    // Array
    // let arr = [1,2,5,6,4]
    // for(i of arr){
    //     console.log(i);
    // }

    // String
    // let str = 'ABCDEFGHIJKLMNOPQRSTVWXYZ';
    // for(let i of str){
    //     console.log(i);
    // }

    
// while Loop
    // let i = 0;
    // while(i<10){
    //     console.log(i);
    //     i++;
    // }

// do while loop
    // let i = 0;
    // do{
    //     console.log('this is a DO while loop');
    //     i++
    // }while(i>10);