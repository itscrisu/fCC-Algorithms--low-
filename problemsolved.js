/* Reverse String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.


*/

function reverseString(str) {
    return str.split('').reverse().join(''); // utilizo una cadena de metodos directamente, no creo que sea necesario hacer algo más dificil
}

console.log(reverseString('Hello'));

/* Factorialize a Number

Return the factorial of the provided number.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!.

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the fuction.
*/

function factorialize(num) {
    let product = 1;
    for (let i = 2; i<=num; i++){ // como ya comienzo en 1 no hace falta que itere desde el 1 asi que declaro i = 2
        product *= i;
    }
    return product;
}

console.log(factorialize(5));

/* Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain 
exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i];
*/

function largestOfFour(arr){
    let array = []; // declaro un array vacio para luego "pushear" los valores que reconozca mi funcion como los más grandes

    for (let i=0;i<arr.length;i++){
        let max = -Infinity; 
        for (let j=0; j<arr[i];j++){
            if (arr[i][j]>max) {  
                max = arr[i][j];
            }
        }
        array.push(max); // acá quiero meter los valores máximos dentro del array vacio
    }
    return array; // que me devuelva mi array con los numeros mas grandes :)
}

console.log(largestOfFour([[4,5,1,3], [13, 27, 18, 26,], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




/* Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
  }
  
console.log(confirmEnding("Bastian", "n"));

/* Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). 

Return an empty string if num is not a positive number. 

For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
    return accumulatedStr;
  }

console.log(repeatStringNumTimes("abc", 3));

/* Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 

Return the truncated string with a ... ending.
 */

function truncateString(str, num) {
    if(str.length> num) {
      str = str.slice(0,num) + '...';
    }
    
    return str;
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));




