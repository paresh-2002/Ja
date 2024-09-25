// Basic Array Methods
// The length property returns the length (size) of an array:
    // const fruits = ['Banana','Mango','Apple','Orange'];
    // console.log(fruits.length);

// The toString() method returns an array as a comma separated string
    // console.log(fruits.toString());

// The at() method returns an indexed element from an array
    // console.log(fruits.at(2));

// The join() method joins array elements into a string
    // console.log(fruits.join('-'));

// The pop() method removes the last element from an array:
    // let pop = fruits.pop()
    // console.log(fruits);

// The push() method adds a new element to an array (at the end):
    // let Push = fruits.push('Greps')
    // console.log(fruits);


// The shift() method removes the first array element and "shifts" all other elements to a lower index.
    // let Shift = fruits.shift()
    // console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshift" older elements:
    // let unshift = fruits.unshift('Greps')
    // console.log(fruits);

// Using delete() leaves undefined holes in the array
    // delete fruits[0];
    // console.log(fruits);

// The concat() method creates a new array by merging (concatenating) existing arrays:
    // const num = [2,5,20,6,100]
    // console.log(fruits.concat(num));

// The copyWithin() method copies array elements to another position in an array:
    // fruits.copyWithin(2,0,1)
    // console.log(fruits);

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
    // const num = [2,5,[20,6],[100,12]]
    // console.log(num.flat());

// The splice() method can be used to add new items to an array:
    // fruits.splice(2,0,'Greps')
    // console.log(fruits);

// Using splice() to Remove Elements
    // fruits.splice(0,2)
    // console.log(fruits);

// the Array toSpliced() method as a safe way to splice an array without altering the original array.
    // fruits.toSpliced(2,0,'Greps')
    // console.log(fruits);

// The slice() method slices out a piece of an array into a new array:
    // let newFruits = fruits.slice(1)
    // console.log(newFruits);

// Search Array method
// indexOf
// The indexOf() method searches an array for an element value and returns its position.
    // const Cars = ['BMW','Swift','Toyota','Tata']
    // console.log(Cars.indexOf("Swift")+1);

// lastIndexOf
// Array.lastIndexOf() is the returns the position of the last occurrence of the specified element.
    // const Cars = ['BMW','Swift','Toyota','Swift','Tata']
    // console.log(Cars.lastIndexOf("Swift")+1);

//include
// introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf)
    // const Cars = ['BMW','Swift','Toyota','Swift','Tata']
    // console.log(Cars.includes("Swift")); // true

// find Element
// The find() method returns the value of the first array element that passes a test function.
    // const num = [25,5,15,16,12]
    // let num2 = num.find((fin) => fin < 15)

// The findIndex() method returns the index of the first array element that passes a test function.
    // let num2 = num.findIndex((fin) => fin < 15)

// the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
    // let num2 = num.findLast((fin) => fin < 15)

// The findLastIndex() method finds the index of the last element that satisfies a condition.
    // let num2 = num.findLastIndex((fin) => fin > 15)
    // console.log(num2)


// Sorting Arrays method
// The sort() method sorts an array alphabetically:
    // const fruits = ['Banana','Mango','Apple','Orange'];
    // console.log(fruits.sort());

// The reverse() method reverses the elements in an array:
    // console.log(fruits.reverse());

// the toSorted() method as a safe way to sort an array without altering the original array.
    // const toSort = fruits.toSorted()
    // console.log(toSort);

// the toReversed() method as a safe way to revers an array without altering the original array.
    // const toRevers = fruits.toReversed()
    // console.log(toRevers);

// Number sorting  
// By default, the sort() function sorts values as strings.
// you can use compere Function for doing Numeric Sorting
    // const num = [2,5,20,6,100]
    // num.sort((a, b) => a-b);
    // num.reverse((a, b) => b-a);
    // console.log(num);

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

// max and min find value 
// Sort the array and read the first or last element
    // const num = [2,5,20,6,100]
    // num.sort((a, b) => a-b);
    // let min = num[0]
    // console.log(min);

    // let max = num[num.length-1]
    // console.log(max);

// Use Math.min() or Math.max()
// The apply() method takes arguments as an array.
    // const num = [2,5,20,6,100];
    // const min = (num => Math.min.apply(null,num))
    // console.log(min(num));
    // const max = (num => Math.max.apply(null,num))
    // console.log(max(num));

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

// sorting array object
    // const fruits = [
    //     { name: 'Banana', day:2},
    //     { name: 'Apply', day:3},
    //     { name: 'Greps', day:4},
    //     { name: 'Orange', day:1}
    // ];

    // fruits.sort((a,b) => {
    //     let x = a.name.toLowerCase();
    //     let y = b.name.toLowerCase();
    //     if (x < y) {return -1;}
    //     if (x > y) {return 1;}
    //     return 0
    // })

// Numeric Sort
    // fruits.sort((a,b) => a.day - b.day);
    // fruits.forEach(fruit => fruit.name + ' ' + fruit.day)
    // console.log(fruits);

    // let fruit =
    // fruits[0].name + ' ' + fruits[0].day + '\n' + 
    // fruits[1].name + ' ' + fruits[1].day + '\n' +
    // fruits[2].name + ' ' + fruits[2].day + '\n' +
    // fruits[3].name + ' ' + fruits[3].day + '\n' 
    // console.log(fruit);


// Array iteration method
// The forEach() method calls a function (a callback function) once for each array element.
    // The item value
    // The item index
    // The array itself
    // const arr = [45, 25, 9, 56, 5]
    // arr.forEach((value) => console.log(value))

// The map() method creates a new array by performing a function on each array element.
    // The item value
    // The item index
    // The array itself
    // arr.map((value) => console.log(value))

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
    // The item value
    // The item index
    // The array itself
    // const newArr = arr.flatMap(value => value*2)
    // console.log(newArr)

// The filter() method creates a new array with array elements that pass a test
    // let newArr = arr.filter((value) => console.log(value < 15))
    // The reduce() method runs a function on each array element to produce (reduce it to) a single value.
    // The total (the initial value / previously returned value)
    // The item value
    // The item index
    // The array itself
    // let sum = arr.reduce((total,value) => total + value)
    // The reduceRight() works from right-to-left in the array. See also reduce().
    // let sum = arr.reduceRight((total,value) => total + value)
    // console.log(sum);

// The every() method checks if all array values pass a test.
    // The item value
    // The item index
    // The array itself
    // let AllEvery = arr.every((value) => value > 15)
    // console.log(AllEvery);

// The some() method checks if some array values pass a test.
    // The item value
    // The item index
    // The array itself
    // let someValue = arr.some((value) => value > 15)
    // console.log(someValue);

// Create an Array from a String:
    // let later = Array.from('ABCDEF')
    // console.log(later);

// The Array.keys() method returns an Array Iterator object with the keys of an array.
    // const fruits = ['Banana','Mango','Apple','Orange'];
    // const newArray = fruits.keys();
    // console.log(Array.from(newArray));

// The entries() method returns an Array Iterator object with key/value pairs:
    // const newArray = fruits.entries();
    // console.log(Array.from(newArray));

// the Array with() method as a safe way to update elements in an array without altering the original array.
    // const newArray = fruits.with(1,'Mangos')
    // console.log(newArray);

// Spread Operators
// The ... Spreads operator expands an iterable (like an array) into more elements:
// spread operator with Array
    // const fruits = ['Banana','Mango','Apple',];
    // const fruits1 = ['Orange','Greps'];
    // const fruits2 = ['watermelon'];
    // const Spreads = [...fruits, ...fruits1,...fruits2];
    // console.log(Spreads);

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
