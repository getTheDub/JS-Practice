/* Let's make some FizzBuzz */

//REWORD
/*
Write a program that allows the user to enter a number.
Print each number between one and the number the user entered... BUT...

For numbers that divide by 3 without a remainder print Fizz instead. 
For numbers that divide by 5 without a remainder print Buzz.
Finally, for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.
*/

// PLAN
/* 
1. Does your program have a user interface? 
    NO - console only (with prompts for inputs)

2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    User will input data via prompt().

3. What’s the desired output?
    An array containing all integers from 1 to the user-selected number, with multiples of 3, 5, and 3 && 5 replaced with strings.

4. Given your inputs, what are the steps necessary to return the desired output?
    - Prompt user for a number.
    - Create an array to store the values
    - Loop a counter to generate numbers from 1 to entered number.
    - Test if number is a multiple of 3 (and not 5)
        - number % 3 === 0
        - number % 5 != 0
        - Replace it with "Fizz"
    - Test if number is a multiple of 5 (and not 3)
        - number % 5 === 0
        - number % 3 != 0
        - Replace it with "Buzz"
    - Test if number is a multiple of both 3 and 5
        - number % 3 === 0
        - number % 5 === 0
        - Replace it with "FizzBuzz"
    - Add value to array.
    - When the loop finishes, log the array to the console.
*/

function FizzBuzz() {    
    // - Prompt user for a number.
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
    
    // - Create an array to store the values
    let numbers = [];
    // - Loop a counter to generate numbers from 1 to entered number.
    for (let i = 1; i <= answer; i++) {       
        let result = i
        // - Test if number is a multiple of 3 (and not 5)
        //     - number % 3 === 0
        //     - number % 5 != 0
        //     - Replace it with "Fizz"
        if (result % 3 === 0 && result % 5 != 0) {
            result = "Fizz"
        } 
        // - Test if number is a multiple of 5 (and not 3)
        //     - number % 5 === 0
        //     - number % 3 != 0
        //     - Replace it with "Buzz"
        else if (result % 5 === 0 && result % 3 != 0) {
            result = "Buzz"
        } 
        // - Test if number is a multiple of both 3 and 5
        //     - number % 3 === 0
        //     - number % 5 === 0
        //     - Replace it with "FizzBuzz"
        else if (result % 3 === 0 && result % 5 === 0) {
            result = "FizzBuzz"
        }
        // - Add value to array.
        numbers.push(result)
        // - When the loop finishes, log the array to the console.
    }
    console.log(numbers)
}

// Written all in one go!
/* 
Checked with TOP walkthrough: only differences were:
    My preference for storing output in an array instead of printing sequentially, and 
    The order of the if conditionals. 
        I gave stricter definitions (using !=) and ordered them like the original text. 
        The walkthrough simply took the 2 part-er and put it first, then if returned false, it moved on to check for 3 or 5 individually, so they didn't need && for each of them. 
*/