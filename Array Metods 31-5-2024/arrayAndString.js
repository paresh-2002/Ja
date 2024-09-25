// The length property returns the length (size) of an array:
// Basic Array Methods
    const fruits = ['Banana','Mango','Apple','Orange'];
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

    // fruits.splice(2,0,'Greps')
    // console.log(fruits);

// The slice() method slices out a piece of an array into a new array:
    // fruits.slice(2)
    // console.log(fruits);

// The sort() method sorts an array alphabetically:
    // const fruits = ['Banana','Mango','Apple','Orange'];
    // fruits.sort();

// The reverse() method reverses the elements in an array:
    // fruits.reverse();
    // console.log(fruits);

// the toSorted() method as a safe way to sort an array without altering the original array.
    // const toSort = fruits.toSorted()
    // console.log(toSort);
    
// the toReversed() method as a safe way to revers an array without altering the original array.
    // const toRevers = fruits.toReversed()
    // console.log(toRevers);

// Number sorting  
// By default, the sort() function sorts values as strings.
    // const num = [2,5,20,6,100]
    // num.sort((a, b) => a-b);
    // num.reverse((a, b) => a-b);
    // console.log(num);

// max and min find value 

// Sort the array and read the first or last element
    // const num = [2,5,20,6,100]
    // num.sort((a, b) => a-b);
    // let min = num[0]
    // console.log(min);
    // let max = num[num.length-1]
    // console.log(max);

// Use Math.min() or Math.max()
    // const num = [2,5,20,6,100];
    // const min = (num => Math.min.apply(null,num))
    // console.log(min(num));
    // const max = (num => Math.max.apply(null,num))
    // console.log(max(num));

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

// The ... operator expands an iterable (like an array) into more elements:
    // const fruits = ['Banana','Mango','Apple',];
    // const fruits1 = ['Orange','Greps'];
    // const fruits2 = ['watermelon'];
    // const Spreads = [...fruits, ...fruits1,...fruits2];
    // console.log(Spreads);

// String Escape Characters
    // let text = "The character \b is called backslash.";
    // let text2 = "The character \n is called New Line.";
    // let text3 = "The character \f is called Form Feed.";
    // let text4 = "The character \r is called Carriage Return.";
    // let text5 = "The character \t is called Horizontal Tabulator.";
    // let text6 = "The character \v is called Vertical Tabulator.";

    // console.log(text);
    // console.log(text2);
    // console.log(text3);
    // console.log(text4);
    // console.log(text5);
    // console.log(text6);

// JavaScript Strings as Objects
    // let x = 'John'
    // console.log( typeof x);
    // let y = new String('John')
    // console.log(typeof y);
    // console.log(x==y)

// String method        
    // let str = 'Banana, Apple, Orange'
// The length property returns the length of a string:
    // console.log(str.length);

// The charAt() method returns the character at a specified index (position) in a string:
// same as charAt() and at()
// It allows the use of negative indexes while charAt() do not.
// Now you can use str.at(-2) instead of charAt(str.length-2)
    // console.log(str.charAt([15]));
    // console.log(str.at([2]));

// The charCodeAt() method returns the code of the character at a specified index in a string:
    // console.log(str.charCodeAt([0]));
    // str[0]  = 'A' // does not work
    // console.log(str);

// slice() extracts a part of a string and returns the extracted part in a new string.
    // let newStr = str.slice(7,13)
    // console.log(newStr);

// The substring() method extract a part of a string and returns the extracted parts in a new string
    // let newSubStr = str.substring(7,13)
    // console.log(newSubStr);

// The difference is that the second parameter specifies the length of the extracted part.
    // let subStr = str.substr(8,5)
    // console.log(subStr);

// A string is converted to lower case with toLowerCase():
    // let toUpperStr = str.toUpperCase()
    // console.log(toUpperStr);

// A string is converted to upper case with toUpperCase():
    // let toLowerStr = str.toLowerCase()
    // console.log(toLowerStr);

// concat() joins two or more strings:
    // let str1 = 'Greps, Mango'
    // let concatStr = str.concat(', ', str1)
    // console.log(concatStr);

// The trim() method removes whitespace from both sides of a string:
    // const lower = "      abcdefghijklmnopqrstuvwxyz     ";
    // console.log(lower.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
    // console.log(lower.trimStart());

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
    // console.log(lower.trimEnd());

// It pads a string with another string (multiple times) until it reaches a given length.
// To pad a number, convert the number to a string first.
// The padStart() method pads a string from the start.
    // let num = '5'
    // let startPad = num.padStart(4, '0') //0005
    // console.log(startPad);

// The padEnd() method pads a string from the end.
    // let endPad = num.padEnd(4, '0') // 5000
    // console.log(endPad);


// String repeat()
// The repeat() method returns a string with a number of copies of a string.
    // let str = 'I love Cats. Cats are very easy to love. Cats are very popular '
    // console.log(str.repeat(2));

// The replace() method replaces a specified value with another value in a string:
    // let replaceStr = str.replace('Cats','GoodMorning')
    // console.log(replaceStr);
    // let replaceAllStr = str.replaceAll('Cats','Dogs')
    // console.log(replaceAllStr);

// A string can be converted to an array with the split() method:
    // let str = 'Banana Apple Orange'
    // console.log(str.split(" "));


// String Search Method
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1  if the string is not found:
// The indexOf() method cannot take powerful search values (regular expressions)
//Both methods accept a second parameter as the starting position for the search
    // let str = "Please locate WHERE where 'locate' where occurs! where"
    // console.log(str);
    // console.log(str.indexOf('locate',15)) // 27
    // console.log(str.indexOf('locate')) // 7

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
    // console.log(str.lastIndexOf('locate',15)) // 7
    // console.log(str.lastIndexOf('locate')) // 27

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// The search() method cannot take a second start position argument
    // console.log(str.search('where'))

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
    // console.log(str.match('ere'));

// Perform a global, case-insensitive /g,   
    // console.log(str.match(/ere/gi));

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
    // console.log(Array.from(str.matchAll(/where/gi))); //Output:WHERE,where,where,where retune Array
    // console.log(str.matchAll("where"));               //output:RegExpStringIterator

// The includes() method returns true if a string contains a specified value.Otherwise it returns false.
    // console.log(str.includes('where',21));  // true

// The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false
    // console.log(str.startsWith('Please')) // true

// The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
    // console.log(str.endsWith('where'))  // true

    