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
    - Create an array to store the values
    - Loop a counter to generate numbers.
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