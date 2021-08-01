const chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.bgCyan("Welcome to Suvrat's Quiz !!"));

//name input
var userName = readlineSync.question(chalk.yellow("Please enter your name: "));
console.log("-------------------------------------------------");
var score = 0;

//function implementation
function kbc(givenQuestion, userAnswer){
    var typedAnswer = readlineSync.question(givenQuestion);
    if(userAnsWer === typedAnswer){
        console.log(chalk.green("You are correct !!"));
        score = score + 1;
    }
    else{
        console.log(chalk.red("You are wrong! The correct answer is",userAnswer));
        score = score - 1;
    }
    console.log("---------------------------------");
    console.log("Current Score: ",score);
    console.log(" ");
}

//trying out different values(questions) in the function
kbc(chalk.blue("Where does Suvrat live ? "),"jaipur");
kbc(chalk.blue("How old is Suvrat ? "),"20");
kbc(chalk.blue("What does Suvrat want to become ? "),"who knows");
kbc(chalk.blue("What is his favourite color ? "),"white");

//printing out final score + some gratitude
console.log(chalk.bgYellow("Your final score is: ",score));
console.log("Thank you for playing",userName, ", come back again! ");