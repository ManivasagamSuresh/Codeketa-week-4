// Given 3 numbers A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'.

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
// var num1 = userInput[1].split(' ').map(num=>Number(num));
// console.log(num);
if(Math.pow(num[0],2)+Math.pow(num[1],2)==Math.pow(num[2],2))
{console.log("yes");}
else{console.log("no");}


  //end-here
});