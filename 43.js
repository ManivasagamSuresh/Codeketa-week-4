// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.



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

var num = userInput[0].split(' ').map(num=>Number(num));
var num1 = userInput[1].split(' ').map(num=>Number(num));
// console.log(num[1]);
// console.log(num1)
var a = 0;
for(let i=0;i<num1.length ;i++)
{
    if(num[1]==num1[i])
    {
        a=a+1;
        break;
    }
    
}

if(a==1)
 {console.log("yes");}
else
 {console.log("no");}


  //end-here
});