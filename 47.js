// Write a code to get 2 integers as input and add the integers without any carry.



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

  let a = userInput[0].split(' ').map(num=>Number(num));

function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
}
console.log(add_two_int_without_carrying(a[0], a[1]));

  //end-here
});