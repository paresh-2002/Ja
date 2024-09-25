// -FlatMap Method
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array. 
    // const num = [1,2,5,6,3,4]
    // Math.pow(x, y) returns the value of x to the power of y
    // num.flatMap(x => console.log(Math.pow(x,2)))
// Array map()
// The map() method creates a new array by performing a function on each array element
    // let mapping = num.map(function(value) {
    //     console.log(value*2);
    // })

// -Find
// String All Find Method  
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
    // let str = 'This is find string method to return Index of string'
    // console.log(str.indexOf('string'));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
    // console.log(str.lastIndexOf('string'));

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
    // console.log(str.search(/index/i));

// The match() method returns an array containing the results of matching a string against a string
    // const myArr = str.match(/string/g);
    // console.log((myArr.length + ' ' + myArr));

// The matchAll() method returns an iterator containing the results of matching a string against a string
    // const myArrAll = Array.from(str.matchAll(/string/g));
    // console.log((myArrAll.length + ' ' + myArrAll));

// The includes() method returns true if a string contains a specified value.
    // console.log(str.includes('string'));

// The startsWith() method returns true if a string begins with a specified value
    // console.log(str.startsWith('string',13));

// The endsWith() method returns true if a string ends with a specified value.
    // console.log(str.endsWith('string',19));

// Array All Find Method
// indexOf() Method 
// The indexOf() method searches an array for an element value and returns its position
// The indexOf() method searches an array for an element value and returns its position.
    // const fruits = ['Banana','Apple','Mango','Grep','Apple']
    // console.log( fruits.indexOf('Apple') + 1);

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
    // console.log(fruits.lastIndexOf('Apple') + 1);

// Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
    // console.log(fruits.includes('Orange')); //false

// The find() method returns the value of the first array element that passes a test function
    // let num = [25,3,62,4,9,110]
    // let num2 = num.find(num => num < 20);

// The findIndex() method returns the index of the first array element that passes a test function.
    // let num2 = num.findIndex(num => num < 20);

// the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
    // let num2 = num.findLast(num => num < 20);

// The findLastIndex() method finds the index of the last element that satisfies a condition.
    // let num2 = num.findLastIndex(num => num < 20);
    // console.log(num2);

// -Sort
// Alpabetic Sort
    // const fruits = ['Banana','Apple','Orange','Mango','Grep']
// The sort() method sorts an array alphabetically
    // console.log(fruits.sort());
// The reverse() method reverses the elements in an array
    // console.log(fruits.reverse());

// the toSorted() method as a safe way to sort an array without altering the original array.
    // let toSort = fruits.toSorted()
    // console.log(toSort);

// the toReversed() method as a safe way to reverse an array without altering the original array.
    // let toRevers = toSort.toReversed()
    // console.log(toRevers);

// Numeric Sort
// the sort() function sorts values as strings.
// you can use compere Function for doing Numeric Sorting
    // const number = [12,5,60,85,40,100]
    // let numSort = number.sort(function(a,b) {return a-b})
    // console.log(numSort);
// descending Order
    // let numSort = number.sort(function(a,b) {return b-a})
    // console.log(numSort);

// Fisher Yates Method
// Fisher Yates Method function sorts values
// The Math.floor() return value rounded down to its nearest integer
    // const number = [12,5,60,85,40,100]
    // for(let i = number.length - 1; i > 0; i--){
    //     let j = Math.floor(Math.random()*(i+1));
    //     let k = number[i];
    //     number[i] = number[j];  
    //     number[j] = k;
    //     }
    // console.log(number);  
   
// Array Minimum Method
    // const minNum = [12,5,60,85,40,100] 
    // function myArray(arr){
    //     let len = minNum.length;
    //     let min = Infinity;
    //     while(len--){
    //         if(arr[len] < min){
    //             min = arr[len];
    //         }
    //     }
    //     return min;
    // }
    // console.log(myArray(minNum));

// Array Maximum Method
    // const maxNum = [12,5,60,85,40,100]
    // function myArray(arr){
    //     let len = maxNum.length;
    //     let max = -Infinity;
    //     while(len--){
    //         if(arr[len] > max){
    //             max = arr[len];
    //         }
    //     }
    //     return max;
    // }
    // console.log(myArray(maxNum));

// Sorting Object Arrays
    // const cars = [
    //     {name: 'Volvo' , year: 2011},
    //     {name: 'BMW' , year: 20016},
    //     {name: 'Saab' , year: 2001},
    // ]
    // Numeric Sort
    // cars.sort(function(a,b){
    //     return a.year - b.year
    //  })
    // cars.forEach((car) =>{
    //     console.log(car.name + ' ' + car.year + '\n');
    // })

    // Alpabetic Sort
    // cars.sort((a,b) => {
    //     let x = a.name.toLowerCase()
    //     let y = b.name.toLowerCase()
    //     if(x < y) return -1
    //     if(x > y) return 1
    //     return 0
    // })
    // cars.forEach((car) => {
    //     console.log(car.name + ' ' + car.year + '\n')
    // })