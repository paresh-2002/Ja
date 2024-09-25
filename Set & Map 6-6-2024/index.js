// If you add equal elements, only the first will be saved
// Set()Method 
    // let letter = new Set(['a','b','c','d']);
// add() Method
    // letter.add('e')

// for of with values() 
// The values() method returns an Iterator object with the values in a Set
    // for( let x of letter.values() ){
    // console.log(x);
    // }

// for of with keys() 
// The keys() method returns an Iterator object with the values in a Set
// A Set has no keys, so keys() returns the same as values().
    // for( let x of letter.keys() ){
    // console.log(x);
    // }

// The entries() method returns an Iterator with [value,value] pairs from a Set
// A Set has no keys, so the entries() method returns [value,value]
    // for( let x of letter.entries() ){
    // console.log(x);
    // }

// The has() method returns true if a specified value exists in a set
// has() Method
    // console.log(letter.has('f'));
    // forEach()
    // letter.forEach(lett => {
    //     console.log(lett);
    // })

// 2) Map() Method
// You can create a Map by passing an Array to the new Map() constructor
    // const cars = new Map([
    //     ['BMW',100],
    //     ['Saab',200],
    //     ['Volvo',300],
    // ]);
    // The get() method gets the value of a key in a Map
    // console.log(cars.get('Volvo'));

// You can add elements to a Map with the set() method
// set()
    // let addCar = cars.set('Audi',400)
// The set() method can also be used to change existing Map values
    // let ChangeCar = cars.set('BMW',400)
    // console.log(`There are ${cars.get('Audi')} Audi`);
    // console.log(`There are ${cars.get('BMW')} BMW`);

    // console.log(typeof cars) //object
    // console.log(cars instanceof Map);   // true 

// The delete() method removes a map element:
    // cars.delete('Saab')

// The size property returns the number of elements in a map
    // console.log(cars.size);

// The clear() method removes all the elements from a map
    // cars.clear()
    // console.log(cars);

// The has() method returns true if a key exists in a map
    // console.log(cars.has('Saab'));
    
// The forEach() method invokes a callback for each key/value pair in a map
    // cars.forEach((value,car) => console.log(car + ' ' + value));

// The entries() method returns an iterator object with the [key,values] in a map:
    // for(let car of cars.entries()) {
    //     console.log(car);
    // }

// The keys() method returns an iterator object with the keys in a map:
    // for(let car of cars.keys()) {
    //         console.log(car);
    //     }


// The values() method returns an iterator object with the values in a map
    // for(let car of cars.values()) {
    //     console.log(car);
    // }

// Objects as Keys
// Being able to use objects as keys is an important Map feature.
    // const apples   = {name: 'Apples'}
    // const bananas = {name: 'Bananas'}
    // const oranges = {name: 'Oranges'}

    // const fruits = new Map()
    // fruits.set(apple, 200)
    // fruits.set(banana, 500)
    // fruits.set(orange, 300)

    // console.log(fruits.get(apples));

// The Map.groupBy() method groups elements of an object according to string values returned from a callback function
    // const fruits = [
    //     {name:'apples',quantity:200},
    //     {name:'bananas',quantity:100},
    //     {name:'greps',quantity:500},
    //     {name:'mango',quantity:400},
    //     {name:'oranges',quantity:300}
    // ]

    // function myCallback({quantity}){
    //     return quantity > 200 ? 'ok' : 'low';
    // }   
    // const result = Map.groupBy(fruits, myCallback)
    // console.log('This fruits is ok');
    // for(let quant of result.get('ok')){
    //    console.log(quant.name + ' ' + quant.quantity);
    // }
    // console.log('This fruits is low');
    // for(let quant of result.get('low')){
    //     console.log(quant.name + ' ' + quant.quantity);
    // }


// 3) TypeOf
// The typeof operator returns the data type of a JavaScript variable

// 4) TypeConversion
// Converting Strings to Numbers
// The global method Number() converts a variable (or a value) into a number
    // let x = '99.99'
    // console.log(typeof x);
    // Number() Returns a number converted from its argument.
    // console.log(typeof Number(99.99));
    // parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
    // console.log(parseFloat(x)); //99.99
    // parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
    // console.log(parseInt(x));   //99

// The unary + operator can be used to convert a variable to a number:
    // let y = '5'
    // let y = 'john'
    // let x = + y
    // console.log(x==y);
    // console.log(x,y);
    // console.log(typeof x,typeof y);

// Converting Numbers to Strings
// The global method String() can convert numbers to strings.
    // let  x = 99.99;
    // console.log(typeof String(x));
    // The Number method toString() does the same.
    // console.log(typeof x.toString());
    // toExponential() returns a string, with a number rounded and written using exponential notation
    // console.log(x.toExponential(0));
    // toFixed() returns a string, with the number written with a specified number of decimals:
    // console.log(x.toFixed());
    // toPrecision() returns a string, with a number written with a specified length:
    // console.log(x.toPrecision(3));

// Converting Dates to Numbers
    // let date = new Date
    // console.log(Number(date));  
    // The date method getTime() does the same.
    // console.log(date.getTime());
    // console.log(date.getMilliseconds());
    // console.log(date.getSeconds());
    // console.log(date.getMinutes());
    // console.log(date.getHours());
    // console.log(date.getDay());
    // console.log(date.getMonth());
    // console.log(date.getYear());
    // console.log(date.getFullYear());

// Converting Dates to Strings
    // console.log(String(Date()));
    // console.log(typeof new Date().toString());

// Converting Booleans to Numbers
    // console.log(Number(false));
    // console.log(Number(true));

// The Boolean method toString() does the same.
    // console.log(typeof false.toString());
    // console.log(true.toString());

// Automatic Type Conversion
    // console.log(5 + null); // 5
    // console.log(5 + '5');  // 55
    // console.log(6 - '5');  // 1
    // console.log(5 * '5');  // 25

    