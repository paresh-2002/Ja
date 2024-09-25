// JavaScript Arrays 
// An array is a special variable, which can hold more than one value
    // const array = [];
    // array[0]=1
    // array[1]=2
    // array[2]=3
    // array[3]=4
    // Access the Full Array
    // console.log(array);

// create an array with new keyword
    // const cars = new Array('BMW','Swift')
    // console.log(cars);

// create an array
    // const fruits = ['Banana','Apple','Orange','Mango'];

// Array Method

// Access an array Element
    // console.log(fruits[3]);
// Access an array LastElement
    // console.log(fruits[fruits.length-1]);

// Changing an Array Element
    // fruits[2] = 'Greps';
    // console.log(fruits);

// Converting an Array to a String
    // console.log(fruits.toString());

// Looping Array Elements
    // for(let i=0; i<fruits.length; i++){
    //     console.log(fruits[i]);
    // }

    // fruits.forEach((fruit) => console.log(fruit))

// Popping and Pushing
// Adding the last Array Element
    // fruits.push('greps')

// removing the last Array Element
    // fruits.pop()
    // console.log(fruits);

// Adding the first Array Element
    // fruits.unshift('Greps')
    // console.log(fruits);

// removing the first Array Element
    // fruits.shift()
    // console.log(fruits);

// console.log(Array.isArray(fruits)); // true
    // console.log('Array:' + (fruits instanceof Array)); // Array:true


// Nested Array and Object
    // const Person = {
    //     name: 'John',
    //     age: 18,
    //     Student:[
    //         {class:'10th',marks:[50,60,70,80]},
    //         { class:'11th',marks:[50,60,70,80]},
    //         {class:'12th',marks:[50,60,70,80]}
    //     ]
    // } 

    // for(let i  in  Person.Student){
    //     document.write("<h1>" + Person.Student[i].class + "</h1>");
    //     for(let j in Person.Student[i].marks){
    //         document.write(Person.Student[i].marks[j] + "<br>");
    //     }
    // }

// Array Search method
// indexOf
    // const Cars = ['BMW','Swift','Toyota','Tata']
    // console.log(Cars.indexOf("Swift")+1);

// lastIndexOf
    // const Cars = ['BMW','Swift','Toyota','Swift','Tata']
    // console.log(Cars.lastIndexOf("Swift")+1);

//include
    // const Cars = ['BMW','Swift','Toyota','Swift','Tata']
    // console.log(Cars.includes("Swift")); // true

// find Element
    // const num = [25,5,15,16,12]
    // let num2 = num.find((fin) => fin < 15)
    // let num2 = num.findIndex((fin) => fin < 15)
    // let num2 = num.findLast((fin) => fin < 15)
    // let num2 = num.findLastIndex((fin) => fin > 15)
    // console.log(num2)

