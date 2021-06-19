Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

  - Parameter: As a parameter we can add "+", ", ".The array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
  - Return: Returns a single string value consisting of by all the values passed as element in the array.

   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); //"1,2,3"
     let colors = ["red","blue","green"];
     colors.join(' '); //"red blue green"
     let name = ['Anuj', 'Kumar'];
     name.join(" "); // ["Anuj Kumar"]
     ```
   - `join` accepts values and returns one string with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

3. `flat`
 - Parameter: It accepts one parameter as a number or  Infinity that defines to what depth they will making it flat.  
  - Return: Returns a single array value consisting of all the value of different array layer.

   - Example:
     ```js
     let numbers = [1,2, [3,4, [5,6, [7,8]]]];
     numbers.flat(3); //[1,2,3,4,5,6,7,8];
     let colors = ["red",["green",["blue"]]];
     colors.flat(Infinity); //["red, green, blue"]
     let fruits = ['Apple', ['Orange',[`Grapes`,[`Banana` ]]]];
     fruits.flat(3); // ["Apple", "Orange", "Grapes", "Banana"]
     ```
   - `flat` It is used for creating a flat structure of array which contains multiple layers of array.It might be numbers or string.
   - No it does not mutate the original array

4. `push`
  - Parameter: It accepts one parameter that added from last index of array.It might be a string value or number value.  
  - Return: Returns a single array value consisting of value that we added.

   - Example:
     ```js
     let numbers = [50,67,20,10,300,365];
     numbers.push(0); //[50,67,20,10,300,365,0];
     let fruits = ['Apple', 'Orange',`Grapes`,`Banana`];
     fruits.push("Mango"); //['Apple', 'Orange',`Grapes`,`Banana`,`Mango`]
     let colors = ['Aqua','Green','Red','Blue'];
     colors.push("Black"); // ['Aqua','Green','Red','Blue','Black']
     ```
   - `Push` It is used for adding a element in array from the last of index.The value might be numbers or string.
   - Yes, it mutate the original array

5. `indexOf`

  - Parameter: It accepts one parameter it might be a string value or number value.  
  - Return: Returns the index of that value which we enters in the parameter .

   - Example:
     ```js
     let numbers = [50,67,20,10,300,365];
     numbers.indexOf(20); // 2
     let fruits = ['Apple', 'Orange',`Grapes`,`Banana`];
     fruits.indexOf("Grapes"); // 2
     let colors = ['Aqua','Green','Red','Blue'];
     colors.indexOf("Aqua"); // 0
     ```
   - `indexOf` It is used for finding the index of the element which presents in array.
   - No, it doesn't mutate the original array

6. `lastIndexOf`
  - Parameter: It accepts one parameter it might be a string value or number value.  
  - Return:If value presents two times in single array it returns the index of that value which we enters in the parameter but from the last of the index.

   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.lastIndexOf(50); // 5
     let fruits = ['Apple', 'Orange',`Grapes`,`Banana`];
     fruits.lastIndexOf("Grapes"); // 2
     let colors = ['Aqua','Green','Red','Blue'];
     colors.lastIndexOf("Aqua"); // 0
     ```
   - `lastIndexOf` It is used for finding the last index of the element which presents two times in array. If the value is not present it returns -1
   - No, it doesn't mutate the original array
7. `includes`
  
  - Parameter: It accepts one parameter it might be a string value or number value.  
  - Return:If value presents in array it returns true otherwise return false.

   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.includes(50); // true
     let fruits = ['Apple', 'Orange',`Grapes`,`Banana`];
     fruits.includes("Grapes"); // true
     let colors = ['Aqua','Green','Red','Blue'];
     colors.includes("Black"); // false
     ```
   - `includes` It is used for finding the value is it present or not in that array.It returns true or false based on value present or not in the array.
   - No, it doesn't mutate the original array.

8. `reverse`
  - Parameter: It does not accepts any parameter.  
  - Return:It reverse the value presents in array.

   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.reverse(); // [365,50,300,10,20,67,50]
     let fruits = ['Apple', 'Orange','Grapes','Banana'];
     fruits.reverse(); // [Banana,Grapes,Orange,Apple]
     let colors = ['Aqua','Green','Red','Blue'];
     colors.reverse(); // ['Blue','Red','Green','Aqua']
     ```
   - `reverse` It is used for reversing the value.
   - Yes, it mutate the original array.
9. `every`
  - Parameter: It accepts a call back function. 
  - Return:It returns true or false. If all the conditions gets true it will return true, esle if one value gets false it returns false.

   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     let num = numbers.every(function(number){
        return number > 0
      });
     let fruits = ["Banana","Grapes","Orange","Apple"];
     let fruitItems = fruits.every(function(fruit){
        return fruit.length > 0
      });
     let colors = ['Aqua','Green','Red','Blue'];
     let colorItems = colors.every(function(color){
        return color.length > 2
      });
     ```
   - `every` It only returns true or false.When all conditions are true it returns true esle if one condition is false it returns false.
   - No, it doesn't mutate the original array.
10. `shift`
  - Parameter: It doesn't accepts any parameter. 
  - Return:It returns the remaining value of array i. e. string or number after removing from starting of index.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.shift(); //[67,20,10,300,50,365];
     let fruits = ["Banana","Grapes","Orange","Apple"];
     fruits.shift(); // ["Grapes","Orange","Apple"];
     let colors = ['Aqua','Green','Red','Blue'];
     colors.shift(); // ['Green','Red','Blue'];
     ```
   - `shift` It deletes the element from the starting of index and returns value which remains after deleting the initial elements.
   - Yes, it mutate the original array.

11. `splice`

  - Parameter: It accepts one or two parameter that evaluates which element have to keep and which should get delete. 
  - Return:It returns the remaining value of array which presents before that index which given in parameter.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.splice(1); //[50];
     let fruits = ["Banana","Grapes","Orange","Apple"];
     fruits.splice(1,2); // ["Banana","Apple"];
     let colors = ['Aqua','Green','Red','Blue'];
     colors.splice(1); // ['Aqua'];
     ```
   - `splice` It deletes the element from the index which we given to last of index and returns the remaining value in single array.
   - Yes, it mutate the original array.
12. `find`
   - Parameter: It accepts a call back function and that call back function returns value where the condition gets true and return undefined when condition gets false. 
  - Return:It returns only one value or undefined. Where the value gets true it will return the value from index.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     function num(number){
     return number > 0
     }
     numbers.find(num);  
     let fruits = ["Banana","Grapes","Orange","Apple"];
     function fruitItem(fruit){
     return fruit.length > 2
     }
     fruits.find(fruitItem)

     let colors = ['Aqua','Green','Red','Blue'];
     function colorItem(color){
     return color.length > 2
     }
     
     ```
   - `find` It finds the true value and where it find the true value it returns the first true value. It only returns one value from the index.
   - No, it doesn't mutate the original array.
13. `unshift`
  - Parameter: It accepts two parameters i.e. string or number. 
  - Return:It returns the total numbers of index present in that array.When we access that array it will show the added element.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.unshift(20); //[20,50,67,20,10,300,50,365];
     let fruits = ["Grapes","Orange","Apple"];
     fruits.unshift("Banana"); // ["Banana""Grapes","Orange","Apple"];
     let colors = ['Aqua','Green','Red','Blue'];
     colors.unshift("Black"); // ['Black''Aqua','Green','Red','Blue'];
     ```
   - `unshift` It adds the element from the starting of index.
   - Yes, it mutate the original array.

14. `findIndex`
    - Parameter: It accepts a call back function and that call back function returns value where the condition gets true and return -1 when condition gets false. 
  - Return:It returns only one value i.e index or -1 when condition gets false. Where the value gets true it will return the index of the value.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     function num(number){
     return number > 0
     }
     numbers.indexOf(num);  
     let fruits = ["Banana","Grapes","Orange","Apple"];
     function fruitItem(fruit){
     return fruit.length > 2
     }
     fruits.indexOf(fruitItem)

     let colors = ['Aqua','Green','Red','Blue'];
     function colorItem(color){
     return color.length > 2
     }
     colors.indexOf(colorItem)

     ```
   - `findIndex` It finds the index of the against the given condition.where it find the true value it returns the index of that value esle it returns -1.
   - No, it doesn't mutate the original array.
15. `filter`
   - Parameter: It accepts a call back function and that call back function returns value by checking the condition. where the condition gets true it stores in new array otherwise don't. 
  - Return:It returns one new array in which values which are true get stores.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     function isEven(num){
     return num % 2 === 0;
     }
     numbers.filter(isEven);  
     let fruits = ["Banana","Grapes","Orange","Apple"];
     function fruitItem(fruit){
     return fruit.length > 2
     }
     fruits.filter(fruitItem)

     let colors = ['Aqua','Green','Red','Blue'];
     function colorItem(color){
     return color.length > 2
     }
     colors.filter(color)

     ```
   - `filter` It finds the true value and store them in a new array and returns them.
   - No, it doesn't mutate the original array.
16. `forEach`
   - Parameter: It accepts a call back function and that call back function gets called for each element of the array that we applied it on. 
  - Return:It doesn't returns anything.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     function log(number){
     console.log(number % 2 === 0)
     }
     num.forEach(log); 
     let fruits = ["Banana","Grapes","Orange","Apple"];
     function fruitItem(fruit){
     console.log(fruit)
     }
     fruits.forEach(fruitItem)

     let colors = ['Aqua','Green','Red','Blue'];
     function colorItem(color){
     console.log(color)
     }
     colors.forEach(colorItem)

     ```
   - `forEach` It accepts a call back function and this call back function gets called for each element of the array that we applied it on. 
   - No, it doesn't mutate the original array.
17. `map`
   - Parameter: It accepts a call back function and that call back function gets called for each element of the array that we applied it on. 
  - Return:It return the value in array.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     function log(number){
     console.log(number % 2 === 0)
     }
     num.map(log); 
     let fruits = ["Banana","Grapes","Orange","Apple"];
     function fruitItem(fruit){
     console.log(fruit)
     }
     fruits.map(fruitItem)

     let colors = ['Aqua','Green','Red','Blue'];
     function colorItem(color){
     console.log(color)
     }
     colors.map(colorItem)

     ```
   - `map` It accepts a call back function and this call back function gets called for each element of the array that we applied it on. 
   - No, it doesn't mutate the original array.
18. `pop`
  - Parameter: It doesn't accepts any parameter.
  - Return:It deleted the items from end and returns the element that get deleted.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.pop(); //[365];
     let fruits = ["Banana","Grapes","Orange","Apple"];
     fruits.pop(); // ["Apple"];
     let colors = ['Aqua','Green','Red','Blue'];
     colors.pop(); // ['Blue'];
     ```
   - `pop` It deletes the element from the last index and return that value which get deleted.
   - Yes, it mutate the original array.
19. `reduce`
  - Parameter: It accepts two parameters, A call back function and an initial value. 
  - Return:It returns any kind of value that we give in initial i.e. number, array, object, string.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     let sum = numbers.reduce((acc,cv)=>{
     return acc + cv;
     },0)
     console.log(sum)

     let fruits = ["Banana","Grapes","Orange","Apple"];
     let allFruits = fruits.reduce((acc,cv)=>{
     return acc + cv;
     },"")
     console.log(allFruits)
     let colors = ['Aqua','Green','Red','Blue'];
     let allColors = colors.reduce((acc, cv)=>{
       return acc + cv;
     },"")
     console.log(allColors)
     ```
   - `reduce` It is used for reducing multiple element of array into a individual element and that element can be a number,array,string,object or it can be any other thing. 
   - No it doesn't mutate the original array.
20. `slice`
   
   - Parameter: It accepts two parameter, first evaluates that from which element value should deleted and second parameter evaluates till which element it will get deleted. 
  - Return:It returns the value of array which gets deleted.
   - Example:
     ```js
     let numbers = [50,67,20,10,300,50,365];
     numbers.slice(0,1); //[50];
     let fruits = ["Banana","Grapes","Orange","Apple"];
     fruits.splice(1,2); // ["Banana","Apple"];
     let colors = ['Aqua','Green','Red','Blue'];
     colors.splice(1); // ['Aqua'];
     ```
   - `splice` It deletes the element from the index which we given in parameter.
   - No, it doesn't mutate the original array.
