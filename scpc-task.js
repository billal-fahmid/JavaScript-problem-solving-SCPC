// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

const reverseString = str => {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += (str[i])
  }
  return newStr

}
const strr = 'hello world'
// console.log(reverseString(strr))



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const positiveNumSum = arr => {
  const positiveNum = arr.filter(num => num > 0)
  const total = positiveNum.reduce((pre, current) => pre + current, 0)
  return total

}

const array = [2, -5, 10, -3, 7]

// console.log(positiveNumSum(array))



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5, 6] Example Output: 3

function findFrequentElement(arr) {
  const frequent = {};

  arr.map(element => {
    frequent[element] = (frequent[element] || 0) + 1
  });

  let maxFrequency = 0;
  let frequentElement;

  for (const element in frequent) {
    if (frequent[element] > maxFrequency) {
      maxFrequency = frequent[element];
      frequentElement = element;
    }
  }

  return frequentElement;
}


const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

// console.log( findFrequentElement(inputArray))



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const towNumber = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
  return 'No Found two numbers in the array that add up to that target value'

}

// console.log(towNumber([1, 3, 5, 7, 9, 11], 20))



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const simpleCalculator = (num1, num2, operator) => {
  if ((operator) === '+' || '-' || '*' || '/') {
    if (operator == '+') {
      return num1 + num2;
    }
    if (operator == '-') {
      return num1 - num2
    }
    if (operator == '*') {
      return num1 * num2;
    }
    if (operator == '/') {
      if (num2 === 0) {
        return ("Division by zero is not allowed.")
      }
      return num1 / num2
    }
  }
  return ("Invalid operator. Please use one of +, -, *, or /")

}
const num1 =30;
const num2 =10;
const operator ='/'

// console.log(simpleCalculator(num1, num2 , operator))





// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


const generateRandomPass =length=>{
  const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
  const nums = '0123456789'
  const specialCharacters = '!@#$%^&*_';

  const allCharacters = uppercaseLetter + lowercaseLetter + nums + specialCharacters;

  let password ='';

  password+=getRandomCharacter(uppercaseLetter)
  password+=getRandomCharacter(lowercaseLetter)
  password+=getRandomCharacter(specialCharacters)
  password+=getRandomCharacter(nums)

  for(let i=4 ; i< length ; i++){
    const randomInd = Math.floor(Math.random() * allCharacters.length)
    password += allCharacters.charAt(randomInd);
  }

  return password

  function getRandomCharacter(chars){
    const randomIndex = Math.floor(Math.random()* chars.length)
    return chars.charAt(randomIndex)
  }
  
}

const passwordLength= 8

// console.log(generateRandomPass(passwordLength))




// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger =romanString=>{
   let num =0;
   let romanObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

   for(let i= 0 ; i< romanString.length ; i++){
    if(romanObj[romanString[i]] < romanObj[romanString[i+1]]){
      num -= romanObj[romanString[i]]
    }else{
      num += romanObj[romanString[i]]
    }
   }

   return num
}

console.log(romanToInteger('XXI'))




// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const getSecondSmallestEle = arr => {
  const minNum = Math.min(...arr)
  const withoutMin = arr.filter(num => num !== minNum)
  const secondSmallNum = Math.min(...withoutMin)
  return secondSmallNum;
}

const numOfArr = [1, 1, 3, 3, 5, 4, 5, 47, 8, 7, 7, 54,]
// console.log(getSecondSmallestEle(numOfArr))

