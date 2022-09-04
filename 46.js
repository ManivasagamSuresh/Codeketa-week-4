// Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let c = userInput[0].split(' ').map(num=>Number(num));


function gcd(a,b)
{
    
    if(a>0 && b >0)
    {
    let result = Math.min(a, b); // Find Minimum of a nd b
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
    }
    if(a||b < 0){
        let result = Math.max(a, b); // Find Minimum of a nd b
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result;
        
    }
    
    
}
 
// Driver program to test above function

if(c[0]==0 || c[1]==0){console.log(-1);}
else{
console.log(gcd(c[0], c[1]));
// console.log(add_two_int_without_carrying(b));
}

  //end-here
});