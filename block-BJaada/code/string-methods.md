Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter: empty - ()
  - Return: Returns Words or Sentence in that particular variable in upper case (string data type)
  - Example:
     ```js
     let name = 'Anuj Kumar';
     name.toUpperCase(); //"ANUJ KUMAR"
     let city = 'Muzaffarpur';
     city.toUpperCase(); // "MUZAFFARPUR"
     let state = 'Bihar';
     state.toUpperCase(); // "BIHAR"
     ```
  - `toUpperCase` Return the value on that variable in the upper case.

3. `toLowerCase`
- Parameter: empty - ()
- Return: Returns Words or Sentence in that particular variable in lower case (string data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.toLowerCase(); //"anuj kumar"
     let city = 'Muzaffarpur';
     city.toLowerCase(); // "muzaffarpur"
     let state = 'Bihar';
     state.toLowerCase() // "bihar"
     ```
- `toLowerCase` Returns the value on that variable in the lower case.


4. `trim`

- Parameter: empty - ()
- Return: Removes the whitespace from the start and end of the Words or Sentence in that particular variable. (string data type)
- Example:
     ```js
     let name = '  Anuj Kumar  ';
     name.trim(); //"Anuj Kumar"
     let city = '  Muzaffarpur  ';
     city.trim(); // "Muzaffarpur"
     let state = '  Bihar  ';
     state.trim() // "Bihar"
     ```
- `trim` Returns the value on that variable by removing whitespace from start and end.

5. `trimEnd`

- Parameter: empty - ()
- Return: Removes the whitespace from the end of the Words or Sentence in that particular variable. (string data type)
- Example:
     ```js
     let name = 'Anuj Kumar  ';
     name.trim(); //"Anuj Kumar"
     let city = 'Muzaffarpur  ';
     city.trim(); // "Muzaffarpur"
     let state = 'Bihar  ';
     state.trim() // "Bihar"
     ```
- `trimEnd` Returns the value on that variable by removing whitespace from end.

6. `trimStart`

- Parameter: empty - ()
- Return: Removes the whitespace from the start of the Words or Sentence in that particular variable. (string data type)
- Example:
     ```js
     let name = '  Anuj Kumar';
     name.trim(); //"Anuj Kumar"
     let city = '  Muzaffarpur';
     city.trim(); // "Muzaffarpur"
     let state = '  Bihar';
     state.trim() // "Bihar"
     ```
- `trimStart` Returns the value on that variable by removing whitespace from start.

7. `concat`

- Parameter: It accepts the variable name of which we want to concat them with another variable and if we want to add space between them then use empty string data type  - ("")
- Return: Concats one string value to another string value and returns them as a single value.(string data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.concat(city); //"Anuj Kumar Muzaffarpur"
     let city = 'Muzaffarpur';
     city.concat(name); // "Muzaffarpur Anuj Kumar"
     let state = 'Bihar';
     state.concat(name) // "Bihar Anuj Kumar"
     ```
- `concat` Returns the value as a single value by concating them.


8. `endsWith`

- Parameter: It accepts the character or value as a string. 
- Return: It returns true or false based on the character, if string value ends with that character then it returns true  else return false.(boolean data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.endsWith("r"); //"true"
     let city = 'Muzaffarpur';
     city.endsWith("z"); // "false"
     let state = 'Bihar';
     state.endsWith("Bihar") // "true"
     ```
- `endsWith` Returns the value as a boolean data type by evaluating the character or value.

9. `includes`

- Parameter: It accepts the character or value as a string. 
- Return: It returns true or false based on the character or value, if string value presents with that character or value then it returns true  else return false.(boolean data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.includes("Kumar"); //"true"
     let city = 'Muzaffarpur';
     city.includes("z"); // "true"
     let state = 'Bihar';
     state.includes("x") // "false"
     ```
- `includes` Returns the value as a boolean data type by evaluating the character or value.

10. `indexOf`

- Parameter: It accepts the character or value as a string. 
- Return: It returns number data type of that particular character or value of  index. It starts evaluating from begining if string value presents with that character or value then it returns index  else return `-1`.(number data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.indexOf("Kumar"); //"1"
     let city = 'Muzaffarpur';
     city.indexOf("z"); // "2"
     let state = 'Bihar';
     state.indexOf("r") // "4"
     ```
- `indexOf` Returns the value as a number data type by evaluating the index of that particular character or word from the starting.

11. `lastIndexOf`

- Parameter: It accepts the character or value as a string. 
- Return: It returns number data type of that particular character or value of  index. It starts evaluating from last if string value presents with that character or value then it returns index  else return `-1`.(number data type)
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.lastIndexOf("u"); //"6"
     let city = 'Muzaffarpur';
     city.lastIndexOf("r"); // "10"
     let state = 'Bihar';
     state.lastIndexOf("r") // "4"
     ```
- `indexOf` Returns the value as a number data type by evaluating the index of that particular character or word from the end.

12. `padEnd`

- Parameter: It accepts the character or value or number as a string. 
- Return: It returns string data type of that particular character if we assign it after the index of chracter. 
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.padEnd("16", " ak"); //"Anuj Kumar ak ak"
     let city = 'Muzaffarpur';
     city.padEnd("17"," Bihar"); // "Muzaffarpur Bihar"
     let state = 'Bihar';
     state.padEnd("13", " 843123") // "Bihar 843123"
     ```
- `padEnd` Returns the value as a string data type by evaluating the index of that particular string value, If index number after the index of the string value then it adds that value from the end .


13. `padStart`

- Parameter: It accepts the character or value or number as a string. 
- Return: It returns string data type of that particular character if we assign it after the index of chracter. 
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.padEnd("16", " ak"); //"ak ak Anuj Kumar"
     let city = 'Muzaffarpur';
     city.padEnd("17"," Bihar"); // " Bihar Muzaffarpur"
     let state = 'Bihar';
     state.padEnd("13", " 843123") // "843123 Bihar"
     ```
- `padStart` Returns the value as a string data type by evaluating the index of that particular string value, If index number after the index of the string value then it adds that value from the start .

14. `repeat`

- Parameter: It accepts number. 
- Return: It returns string data type of that particular character or value by repeating that much time. 
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.repeat(2); //" Anuj KumarAnuj Kumar"
     let city = 'Muzaffarpur';
     city.repeat(1); // "Muzaffarpur"
     let state = 'Bihar';
     state.repeat(2) // "BiharBihar"
     ```
- `repeat` Returns the value as a string by multiplying the value that much time which we give in parameter .


15. `replace
- Parameter: It accepts two parameters as string. First one which we wants to remove and second one which we wants to add.
- Return: It returns string data type of that particular character or value by replacing older with newer.
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.replace("Anuj Kumar", "Anuj Thakur"); //" Anuj Thakur"
     let city = 'Muzaffarpur';
     city.replace("Muzaffarpur", "Dharamshala"); // "Dharamshala"
     let state = 'Bihar';
     state.replace("Bihar", "Himachal Pradesh") // "Himachal Pradesh"
     ```
- `repeat` Replace the value from older to newer which we assign as parameter.

16. `slice`

- Parameter: It accepts two parameters as number. First one from starting from index and second one where we wants to ends.
- Return: It returns string data type of that particular character or value.
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.slice(0,4); //" Anuj"
     let city = 'Muzaffarpur';
     city.slice(3); // "affarpur"
     let state = 'Bihar';
     state.slice(0,5) // "Bihar"
     ```
- `slice` Returns the value from starting to end of that index which we pass as parameter and if we only pass one parameter then it reduce the value from starting and return the remaining value.

17. `split`

- Parameter: It accepts parameters as string. A empty string separates every character from each other or if we pass any character or word of that value then it split it from that value.
- Return: It returns string data type of that particular value.
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.split("); //" "A", "n", "u", "j"
     let city = 'Muzaffarpur';
     city.split("M"); 
     //0: ""
     //1: "uzaffarpur"
     let state = 'Bihar';
     state.split("); //" "B", "i", "h", "a", "r"
     ```
- `split` Returns the value as string in small chunks.


18. `substring`

- Parameter: It accepts one as well as two parameters as number. If we give single parameter it will starts from end and if we give two parameters, First one from starting from index and second one where we wants to ends.
- Return: It returns string data type of that particular character or value.
- Example:
     ```js
     let name = 'Anuj Kumar';
     name.slice(4); //"Kumar"
     let city = 'Muzaffarpur';
     city.slice(0,3); // "Muz"
     let state = 'Bihar';
     state.slice(0,5) // "Bihar"
     ```
- `substring` Returns the value from starting to end of that index which we pass as parameter and if we only pass one parameter then it return the value from end.
