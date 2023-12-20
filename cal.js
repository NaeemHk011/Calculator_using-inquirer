import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "number",
        name: "n1",
        message: "enter your first number"
    },
    {
        type: "number",
        name: "n2",
        message: "enter your second value"
    },
    {
        type: "list",
        name: "operators",
        choices: ["+", "-", "*", "/"],
        message: "select your operator"
    },
]);
const { n1, n2, operators } = answer;
if (n1 && n2 && operators) {
    if (operators === "+") {
        console.log(n1 + n2);
    }
    else if (operators === "-") {
        console.log(n1 - n2);
    }
    else if (operators === "*") {
        console.log(n1 * n2);
    }
    else if (operators === "/") {
        console.log(n1 / n2);
    }
}
else {
    console.log("please enter a valid value");
}
