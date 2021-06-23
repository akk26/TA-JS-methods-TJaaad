// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join().replaceAll(",", " ");


// - Add two new words in the strings array "called" and "sentance"

let updatedString = strings.concat("called", "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

updatedString.join().replaceAll(",", " ");

// - Remove the first word in the array (strings)

updatedString.splice(0, 1);

// - Find all the words that contain 'is' use string method 'includes'

updatedString.includes("is");

// - Find all the words that contain 'is' use string method 'indexOf'

updatedString.indexOf("is");

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let allNumbers = numbers.every(function (num) {
   num % 3 === 0;
})

// -  Sort Array from smallest to largest

let newArray = [...numbers];

function compare(a, b) {
  return a - b;
}
newArray.sort(compare);

// - Remove the last word in strings

updatedString.pop();

// - Find largest number in numbers



// - Find longest string in strings

// - Find all the even numbers

function isEven(num) {
  return num % 2 === 0;
}
numbers.filter(isEven);


// - Find all the odd numbers

function isOdd(num) {
  return num % 2 !== 0;
}
numbers.filter(isOdd);


// - Place a new word at the start of the array use (unshift)

strings.unshift("New");


// - Make a subset of numbers array [18,9,7,11]

let subsetNum = [18, 9, 7, 11];

// - Make a subset of strings array ['a','collection']

let subsetStr = ['a', 'collection'];

// - Replace 12 & 18 with 1221 and 1881


// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

let firstName = ['Joe', 'John', 'Dave', 'Jack'];

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = ["Joe Blogs", "John Smith", "Dave Jones", "Jack White"];


// - Sort the array created above alphabetically;

fullName.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

