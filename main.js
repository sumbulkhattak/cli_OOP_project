#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var inquirer_1 = require("inquirer");
console.log(chalk_1.default.yellow.bold.underline("\n\t\t\tW E L C O M E\n"));
do {
    var ans = await inquirer_1.default.prompt({
        type: "list",
        name: "select",
        message: chalk_1.default.green.bold.italic(" Ap kis se baat karna chahein gay\n"),
        choices: ["khud se", "student se", "teacher se", "exit"]
    });
    if (ans.select == "khud se") {
        console.log(chalk_1.default.bold.italic.red("hello main khud se baat kar raha hon\n"));
        console.log(chalk_1.default.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "student se") {
        var me = await inquirer_1.default.prompt({
            type: "input",
            name: "name",
            message: chalk_1.default.green.bold.italic("type student name")
        });
        console.log(chalk_1.default.red.bold.italic("hello , mera name  ".concat(me.name, " hai or main theek hon\n ")));
        console.log(chalk_1.default.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "teacher se") {
        var me = await inquirer_1.default.prompt({
            type: "input",
            name: "name",
            message: chalk_1.default.green.bold.italic("type teacher name")
        });
        console.log(chalk_1.default.red.bold.italic("hello beta , mera name ".concat(me.name, " hai or main theek hon\n ")));
        console.log(chalk_1.default.bold.magenta("-------------------------------------------\n"));
    }
    else if (ans.select == "exit") {
        console.log(chalk_1.default.italic.bold.bgRedBright("\n\t\t\tgood bye...\n"));
        break;
    }
} while (true);
