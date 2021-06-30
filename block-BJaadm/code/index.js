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

console.log(persons.filter((personName) => personName.sex === "F").filter((person) => person.name.startsWith("C") || person.name.startsWith("J")));

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

persons.find((person) => {
 if( person.name.startsWith("J") && person.grade > 10 && person.sex === "F")
  return person.name;
});


// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((people) => people.sex === "F")

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((people) => people.sex === "M");

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
},0)

// Find the average grade

gradeTotal / peopleGrade.length 

// Find the average grade of male

let maleGrade = persons.filter((p) => p.sex === "M");
maleGrade.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
}, 0) / maleGrade.length;
// Find the average grade of female

let femaleGrade = persons.filter((p) => p.sex === "F");
femaleGrade.reduce((acc, cv) => {
  acc = acc + cv.grade;
  return acc;
}, 0) / femaleGrade.length;

// Find the highest grade

[...peopleGrade].sort((a, b) => a - b).pop();

// Find the highest grade in male

let maleGrade = persons.filter((p) => p.sex === "M")
  .map((persons) => persons.grade);
[...maleGrade].sort((a, b) => a - b).pop();
  // Find the highest grade in female

let maleGrade = persons
  .filter((p) => p.sex === "F")
  .map((persons) => persons.grade);
[...maleGrade].sort((a, b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'


let maleGrade = persons
  .filter((p) => p.name.startsWith("J") || p.name.startsWith("P"))
  .map((persons) => persons.grade);
[...maleGrade].sort((a, b) => a - b).pop();


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => a-b );

// Sort the peopleGrade in descending order

peopleGrade.sort((a, b) => b-a );

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a, b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();
