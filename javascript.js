/* Set some global variables to hold scores and how many games played */
let computerScore = 0;
let playerScore=0;
let tie=0;
let count=0;

/* 
Gets a random number between 1 and 3 and assigns the text Rock, Paper, or Scissors the choice variable based on the number created.
*/
function getComputerChoice() {
    let number = Math.floor((Math.random()* 3)+1);
    let choice = "";
    if (number === 1) {
        choice = "Rock"
    }
    else if (number === 2) {
        choice = "Paper"
    }
    else {
        choice = "Scissors"
    }
    return choice;      
}
/* Gets the player's choice and sets it to lower so they player can enter Rock, ROCK, or rock and it still works.  Does not yet handle other erroneous input. */
function getPlayerChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors.");
    let lowerChoice = choice.toLowerCase();
    return lowerChoice;
}

/* Main game logic.  Gets both the computer and players choices and increments variables based on the results. */
function game () {
    computer= getComputerChoice();
    player= getPlayerChoice();
    string= "";
    console.log("The computer chooses: "+ computer)
    if (computer=="Rock" && player=="rock") {
        string = "It's a tie!";
        tie+=1;
        count+=1;
        return string;
    }
    else if (computer=="Paper" && player=="paper") {
        string = "It's a tie!";
        tie+=1;
        count+=1;
        return string;
    }
    else if (computer=="Scissors" && player=="scissors") {
        string = "It's a tie!";
        tie+=1;
        count+=1;
        return string;
    }
    else if  (computer=="Rock" && player=="paper") {
        string = "You win!  Paper covers rock!";
        playerScore+=1;
        count+=1;
        return string;
    }
    else if  (computer=="Rock" && player=="scissors") {
        string = "You lose. Rock smashes scissors!";
        computerScore+=1;
        count+=1;
        return string;
    }
    else if  (computer=="Paper" && player=="rock") {
        string = "You lose.  Paper covers rock!";
        computerScore+=1;
        count+=1;
        return string;
    }
    else if (computer=="Paper" && player=="scissors") {
        string = "You win! Scissors cut paper!";
        playerScore+=1;
        count+=1;
        return string;
    }
    else if (computer=="Scissors" && player=="rock") {
        string = "You win!  Rock smashes scissors!"
        playerScore+=1;
        count+=1;
        return string;
    }
    else if  (computer=="Scissors" && player=="paper") {
        string = "You lose! Scissors cut paper";
        computerScore+=1;
        count+=1;
        return string;
    }
}

/* function for the score of the game using the variables in the main game logic */
function gamescore() {
    if (count>= 5) {
        console.log("Computer: "+ computerScore + " You: "+ playerScore + " Tied: "+tie+ " times");
    }

}
/* Without looping, plays 5 games.  After each game it displays the string that is returned from the main game logic notifying user of who won.  Then calls the gamescore function to give results */
game();
console.log(string);
game();
console.log(string);
game();
console.log(string);
game();
console.log(string);
game();
console.log(string);
gamescore();