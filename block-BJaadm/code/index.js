let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];


// Create an array peopleName and store value of name key from persons array

let peopleName = persons.map((e) => {
  return e.name;
});

let peopleName = [];
persons.forEach((people) => {
  peopleName.push(people.name);
})



// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = [];
persons.forEach((gradeOfPeople) => {
  peopleGrade.push(gradeOfPeople.grade);
})

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = [];
persons.forEach((sexOfPeople) => {
  peopleSex.push(sexOfPeople.sex);
})

// Log the filtered named of people in peopleName that starts with 'J' or 'P'


peopleName.filter((nameOfPeople) => {
  if (nameOfPeople.startsWith ("J")|| nameOfPeople.startsWith("P")) {
    console.log(nameOfPeople);
  }
})

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

peopleName.filter((nameOfPeople) => {
  if (nameOfPeople.startsWith("A") || nameOfPeople.startsWith("C")) {
    console.log(nameOfPeople.length);
  }
});

// Log all the filtered male ('M') in persons array

persons.filter((gender) => {
  if (gender.sex === "M") {
    console.log(gender);
  }
})

// Log all the filtered female ('F') in persons array

let female = persons.filter((gender) => {
  if (gender.sex === "F") {
    console.log(gender);
  }
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

// console.log(persons.filter((personName) => personName.sex = "F").filter((person) => person.name.startsWith("C") || person.name.startsWith("J")));

// Log all the even numbers from peopleGrade array

peopleGrade.filter((evenNum) => {
  if (evenNum % 2 === 0) {
    console.log(evenNum); 
  }
})

// Find the first name that starts with 'J' in persons array and log the object

persons.find((personName) => {
  if (personName.name.startsWith("J")) {
   return personName.name
 }
}).name

// Find the first name that starts with 'P' in persons array and log the object

persons.find((personName) => {
  if (personName.name.startsWith("P")) {
    return personName.name;
  }
}).name;


// Find the first name that starts with 'J', grade is greater than 10 and is a female

// persons.find((personName) => {
//   if (personName.sex = "F" && personName.grade > 10 && personName.name.startsWith("J") ) {
//     return personName.name;
//   }
// }).name;


// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
},0)

// Find the average grade

// let avg = persons.reduce((acc, cv) => {
//   acc = acc + cv.grade;
//   return acc/cv.length;
// }, 0);

// Find the average grade of male

// Find the average grade of female

// Find the highest grade



// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
