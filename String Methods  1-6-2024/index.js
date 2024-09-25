  // const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// The length property returns the length of a string:
  // console.log(str.length);

// The charAt() method returns the character at a specified index (position) in a string:
// same as charAt() and at()
// It allows the use of negative indexes while charAt() do not.
// Now you can use str.at(-2) instead of charAt(str.length-2)
  // console.log(str.charAt());
  // console.log(str.at(-3));

// The charCodeAt() method returns the code of the character at a specified index in a string:
  // console.log(str.charCodeAt(3));

// slice() extracts a part of a string and returns the extracted part in a new string.
  // console.log(str.slice(3, 13));

// The substring() method extract a part of a string and returns the extracted parts in a new string
  // console.log(str.substring(3, 13));

// The difference is that the second parameter specifies the length of the extracted part.
  // console.log(str.substr(3, 13));

// A string is converted to lower case with toLowerCase():
  // console.log(str.toLowerCase());

// A string is converted to upper case with toUpperCase():
  // console.log(str.toUpperCase());

// concat() joins two or more strings:
  // const lower = "-abcdefghijklmnopqrstuvwxyz";
  // console.log(str.concat(lower));

// The trim() method removes whitespace from both sides of a string:
  // const lower = "      abcdefghijklmnopqrstuvwxyz         ";
  // console.log(lower.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
  // console.log(lower.trimStart());

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
  // console.log(lower.trimEnd());

// It pads a string with another string (multiple times) until it reaches a given length.
// To pad a number, convert the number to a string first.
// The padStart() method pads a string from the start.
  // let num = "5";
  // let num = 5;
  // let str = num.toString();
  // console.log(str.padStart(4, "0"));
  // The padEnd() method pads a string from the end.
  // console.log(num.padEnd(4, "0"));

// The repeat() method returns a string with a number of copies of a string.
  // const Fruits = "Banana, Apple, Orange, ";
  // console.log(Fruits.repeat(5));

// The replace() method replaces a specified value with another value in a string:
  // const Fruits = "Banana, Apple, Orange, ";
  // console.log(Fruits.replace("Apple", "Mango"));

// The replaceAll() method
  // const Replace = "I like dogs because dogs are adorable";
  // console.log(Replace);
  // console.log(Replace.replaceAll("dogs", "cats"));

// A string can be converted to an array with the split() method:
  // const str = "I like dogs because dogs are adorable";
  // console.log(str.split(" "));

// String Search Methods
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1  if the string is not found:
// The indexOf() method cannot take powerful search values (regular expressions)
//Both methods accept a second parameter as the starting position for the search
  // const str = "I like dogs because dogs are adorable";
  // console.log(str.indexOf("dogs", 15)); // 20
  // console.log(str.indexOf("dogs")); // 7

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
  // console.log(str.lastIndexOf("dogs")); // 20
  // console.log(str.lastIndexOf("dogs", 15)); // 7

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// The search() method cannot take a second start position argument
  // const str = "I like dogs because dogs are adorable";
  // console.log(str.search("dogs"));

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
  // const str = "I like dogs because Dog world dogs are adorable";
  // console.log(str.match("dog"));
  // Perform a global, case-insensitive
  // console.log(str.match(/dog/gi));

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
  // console.log(str.matchAll("dog")); //return RegExpStringIterator
  // Perform a global, case-insensitive
  // console.log(Array.from(str.matchAll(/dog/gi)));

// The includes() method returns true if a string contains a specified value.Otherwise it returns false.
  // console.log(str.includes("dogs")); // true
  // console.log(str.includes("because", 15)); // false

// The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false
  // console.log(str.startsWith("because")); //false
  // console.log(str.startsWith("because", 12)); //true

// The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
  // console.log(str.endsWith("adorable")); //true
  // console.log(str.endsWith("adorable", 43)); // true

