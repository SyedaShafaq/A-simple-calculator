#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "operator1",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "operator2",
    },
    {
        message: "Please select operator to perform operation",
        type: "list",
        name: "operator3",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
        ],
    },
]);
console.log(answer);
if (answer.operator3 === "Addition") {
    console.log("Result");
    console.log(answer.operator1 + answer.operator2);
}
else if (answer.operator3 === "Subtraction") {
    console.log("Result");
    console.log(answer.operator1 - answer.operator2);
}
else if (answer.operator3 === "Multiplication") {
    console.log("Result");
    console.log(answer.operator1 * answer.operator2);
}
else if (answer.operator3 === "Division") {
    console.log("Result");
    console.log(answer.operator1 / answer.operator2);
}
else if (answer.operator3 === "Modulus") {
    console.log("Result");
    console.log(answer.operator1 % answer.operator2);
}
else {
    console.log("Please choose valid operator");
}
