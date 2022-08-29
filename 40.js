
// Write a code to get a integer n as input and calculate the smallest perfect power of 2 greater than n.
// sample input =48 , sample output=64

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

let a = Number(userInput[0]);
let m = 1;
for (let i =0; i<Infinity;i++)
{
    m=m*2;
    if(m>a){break;}
}
console.log(m);

  //end-here
});