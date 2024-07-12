'#!/usr/bin/env node'
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRed("\n  Welcome to IB To_Do_List Application\n"));
let conditions = true;
let todolistArray : string[] = [];
while(conditions){

    let addTask = await inquirer.prompt([
        {
            name : 'task',
            type : 'input',
            message : "enter your task:"
        }

    ]);

    todolistArray.push(addTask.task);
    console.log(`${addTask.task} task added in To_Do_List successfully`);
        

   let addMoreTask = await inquirer.prompt([

    {

        name : 'addmore',
        type : 'confirm',
        message : "Do you want to add more task ?",
        default : "false"
    }

   ]) ;

    conditions = addMoreTask.addmore

}

console.log("your updated To_Do_List:" ,todolistArray );
