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



console.log(getComputerChoice());