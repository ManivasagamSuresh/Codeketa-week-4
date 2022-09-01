// Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise
//  print '-1' if the element not found.

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
let a = userInput[0].split(" ").map(num=>Number(num));
let b = userInput[1].split(" ").map(num=>Number(num));
// console.log(a[1]);
// console.log(b);
let n = 0;

if(b.includes(a[1])==true)
{


const c =b.findIndex(num=> num==a[1]);
// console.log(c);
 b.splice(c,1);
//  console.log(b);
 
for (let i=0;i<=b.length;i++)
{
    if(b[i]==a[1])
    n=n+1;
}


    console.log(n)
}
else{
    console.log(-1);
}
});