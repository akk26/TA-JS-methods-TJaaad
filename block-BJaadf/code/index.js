let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end

fruits.push("Papaya")

// Remove the last element from fruits array

fruits.pop();


// Log the current length of fruits array

console.log(fruits);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

delete fruits[0];

// Log the element on index 0 and 1

console.log(fruits[0,1])


// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

fruits.shift();


// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift("Guava");


// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift("Dragon Fruit");

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

if (fruits[0] === "Dragon Fruit") {
  console.log(true);
} else if (fruits[1] === "Guava"){
  console.log(true);
}
console.log(fruits);


// Update the value of index 1 to `Pears`

fruits[1]= "Pears"

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to adif (fruits=== "Dragon Fruit") {

fruits.splice(1, 2, "Kiwi", "Lemon");

// Remove (slice) all the element from index 5

fruits.slice(0, 5);

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ["Berries", "Melons"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)

let addedFruits = fruits.concat(moreFruits);

// Log the name of all fruit in console

console.log(addedFruits);

// Convert each fruit name to lowercase and log it

addedFruits.forEach((cv) => {
  cv = cv.toLowerCase();
  console.log(cv);
})


// Convert all fruits name into lowercase and store in new array named lowercaseFruits

addedFruits.forEach((cv) => {
  cv = cv.toLowerCase();
  let lowercaseFruits = console.log([cv]);
});


// Convert all fruits name into uppercase and store in new array named uppercaseFruits

addedFruits.forEach((cv) => {
  cv = cv.toUpperCase();
  let uppercaseFruits = console.log([cv]);
});


// numbers


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

numbers.flat();
console.log(numbers);

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

let number = numbersTwo.flat(3);
console.log(number);


// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

let newFlatArray = numbersThree.flat(4);

console.log(newFlatArray);

// Use forEach to log all the elements of numberThree array

newFlatArray.forEach((num) => {
  console.log(num);
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
function double(number) {
  return number * 2;
}

let doubleNumbers = newFlatArray.map(double);
console.log(doubleNumbers);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

function triple(number) {
  return number * 3;
}

let tripleNumbers = newFlatArray.map(triple);
console.log(tripleNumbers);



// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

function divide(number) {
  return number / 2;
}

let halfNumbers = newFlatArray.map(divide);
console.log(halfNumbers);


// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array


function odd(number) {
  return number % 2 != 0;
}

let oddNumbers = newFlatArray.filter(odd);
console.log(oddNumbers);



// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

function even(number) {
  return number % 2 === 0;
}

let evenNumbers = newFlatArray.filter(even);
console.log(evenNumbers);


// Find the index of 10 in numbersThree array

function numb(num) {
  return num >= 10;
}

let findNum = newFlatArray.findIndex(numb);

// Reverse the values of numbersThree array


numbersThree.reverse();

// Reverse the values of numbersTwo array

numbersTwo.reverse();

// Join all fruits with '-', convert to uppercase and log it

let afterJoin = fruits.join("-");

afterJoin.forEach((jn) => {
  jn = jn.toUpperCase();
  console.log(jn);
});

afterJoin.forEach((jn) => {
  jn = jn.toUpperCase();
  console.log(jn);
});

// Join all fruits with '&', convert to lowercase and log it
