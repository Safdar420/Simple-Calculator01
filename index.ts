#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "FirstNumber" },
  {
    message: "Enter your second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division" ],
  },
]);
console.log(answer);

if(answer.operator ==="Addition"){
  console.log(answer.FirstNumber + answer.secondNumber);
}
else if(answer.operator ==="Subtraction"){
  console.log(answer.FirstNumber - answer.secondNumber);
}
else if(answer.operator ==="Multiplication"){
  console.log(answer.FirstNumber * answer.secondNumber);
}
else if(answer.operator ==="Division"){
  console.log(answer.FirstNumber / answer.secondNumber);
}
else{
  console.log("Please select a valid number");
  
}