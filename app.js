#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//display message
console.log(chalk.bold.cyanBright("\n \t\tcode with Habiba"));
console.log("~".repeat(80));
//prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//Trimming the sentence and splitting it into words based on spaces
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentences
console.log("~".repeat(60));
console.log(chalk.bold.greenBright("Sentence words"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.yellowBright(words.length)}`));
console.log("~".repeat(60));
