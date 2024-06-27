#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellow.bold.underline("\n\t\t\tW E L C O M E\n"))
do{
let ans = await inquirer.prompt(
  {
    type: "list",
    name: "select",
    message: chalk.green.bold.italic(" Ap kis se baat karna chahein gay\n"),
    choices: ["khud se", "student se", "teacher se","exit"]
    }

)
if (ans.select == "khud se"){
  console.log(chalk.bold.italic.red("hello main khud se baat kar raha hon\n"))
  console.log(chalk.bold.magenta("-------------------------------------------\n"))
}

else if (ans.select == "student se"){
  let me = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.green.bold.italic("type student name")
  })

  console.log(chalk.red.bold.italic(`hello , mera name  ${me.name} hai or main theek hon\n `))
  console.log(chalk.bold.magenta("-------------------------------------------\n"))
}

else if (ans.select == "teacher se"){
  let me = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.green.bold.italic("type teacher name")
  })
  console.log(chalk.red.bold.italic(`hello beta , mera name ${me.name} hai or main theek hon\n `))
  console.log(chalk.bold.magenta("-------------------------------------------\n"))
}

  else if (ans.select == "exit"){
    console.log(chalk.italic.bold.bgRedBright("\n\t\t\tgood bye...\n"))
    break;
  }
}while(true)