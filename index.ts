import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import chalk from "chalk";

// Object
// type mytuple = [
//     question: ,
//     Choices: string,
//     correctAwnser: string
// ]
let quizQuestions = [
    {
        question: "1) What is Typescript?",
        choices: [
            "A) A superset of Javascript",
            "B) A framework for building web applications",
            "C) A server-side programming language",
            "D) A database management system"
        ],
        correctAwnser: "A) A superset of Javascript"
    },
    {
        question: "2) Which of the following is NOT a primitive data type in TypeScript?",
        choices: [
            "A) Number",
            "B) String",
            "C) Bolean",
            "D) Array"
        ],
        correctAwnser: "D) Array"
    },
    {
        question: "3) TypeScript provides which feature to catch errors during development?",
        choices: [
            "A) Type Inference",
            "B) Static Typing",
            "C) Dynamic Typing",
            "D) Non of the above"
        ],
        correctAwnser: "B) Static Typing"
    },
    {
        question: "4) Which keyword is used to define a type alias in TypeScript?",
        choices: [
            "A) Type",
            "B) Interface",
            "C) Class",
            "D) Alias"
        ],
        correctAwnser: "A) Type"
    },
    {
        question: "5) What does the 'any' type signify in TypeScript?",
        choices: [
            "A) It represents any data type",
            "B) It represents an unknown data type",
            "C) It represents a dynamic data type",
            "D) It represents no data type"
        ],
        correctAwnser: "A) It represents any data type"
    },
    {
        question: "6) Which operator is used to declare an optional property in TypeScript?",
        choices: [
            "A) *",
            "B) ?",
            "C) /",
            "D) +"
        ],
        correctAwnser: "B) ?"
    },
    {
        question: "7) TypeScript supports which paradigm of programming?",
        choices: [
            "A) Object-oriented",
            "B) Functional",
            "C) Procedural",
            "D) All of the above"
        ],
        correctAwnser: "D) All of the above"
    },
    {
        question: "8) What is the purpose of the 'readonly' keyword in TypeScript?",
        choices: [
            "A) To declare a property as writable",
            "B) To enforce strict typing",
            "C) To allow dynamic typing",
            "D) To make a property immutable"
        ],
        correctAwnser: "D) To make a property immutable"
    },
    {
        question: "9) Which command is used to compile TypeScript files into JavaScript files?",
        choices: [
            "A) ts2js",
            "B) tsccompile",
            "C) tsc",
            "D) tsccompileted"
        ],
        correctAwnser: "C) tsc"
    },
    {
        question: "10) Which TypeScript feature is used to enforce that a variable or property must be initialized when declared?",
        choices: [
            "A) Initialization enforcement",
            "B) Static Typing",
            "C) Optional Chaining",
            "D) Static Mode"
        ],
        correctAwnser: "D) Static Mode"
    },
    {
        question: "11) What does the 'extends' keyword do in TypeScript?",
        choices: [
            "A) It creates an interface extension",
            "B) It imports modules from external libraries",
            "C) It defines a class that extends another class",
            "D) It defines a generic type"
        ],
        correctAwnser: "C) It defines a class that extends another class"
    },
    {
        question: "12) What does the 'implements' keyword do in TypeScript?",
        choices: [
            "A) It extends a class",
            "B) It defines a class that implements an interface",
            "C) It defines a type alias",
            "D) It imports modules from external libraries"
        ],
        correctAwnser: "B) It defines a class that implements an interface"
    },
    {
        question: "13) Which feature of TypeScript allows you to define complex types based on existing types?",
        choices: [
            "A) Type inference",
            "B) Type assertions",
            "C) Type aliases",
            "D) Type guards"
        ],
        correctAwnser: "C) Type aliases"
    },
    {
        question: "14) Which TypeScript feature allows you to explicitly specify the type of a variable?",
        choices: [
            "A) Type inference",
            "B) Type annotation",
            "C) Type assertion",
            "D) Type guards"
        ],
        correctAwnser: "B) Type annotation"
    },
    {
        question: "15) Which operator is used to perform type assertion in TypeScript?",
        choices: [
            "A) as",
            "B) is",
            "C) typeof",
            "D) instanceof"
        ],
        correctAwnser: "A) as"
    },

];




let score: number = 0;

for(let {question, choices, correctAwnser} of quizQuestions) {


    let {userAwnser} = await inquirer.prompt(
        {
            name: "userAwnser",
            type: "list",
            message: question,
            choices: choices
        }
    );

    if(userAwnser === correctAwnser){
        console.log(chalk.bgGreenBright(chalk.black(`Correct!!`)));
        score++;
    }else{
        console.log(chalk.bgRedBright(chalk.black(`Incorrect!!`)));
    }

};
console.log(chalk.bgBlueBright(`Your score is: 15/${score}`));


