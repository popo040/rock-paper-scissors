function computerPlay()
{
    var possibilities=["rock","paper","scissors"];
    return possibilities[Math.floor(Math.random() * possibilities.length)];
}
function round(player,computer)
{
    var userInput = prompt("Enter Your Imput", "rock");
    playerSelection = userInput.toLowerCase();
    computerSelection = computerPlay();

    if(playerSelection == computerSelection)
    {
        console.log("The round is a tie");
        return [player,computer];
    }
    else if (playerSelection == "rock")
    {
        if (computerSelection == "paper")
        {
            console.log("You lost this round");
            return [player,computer+1];
        }
        else
        {
            console.log("You won this round");
            return [player+1,computer];
        }
    }
    else if (playerSelection=="paper")
    {
        if (computerSelection == "rock")
        {
            console.log("You won this round");
            return [player+1,computer];
        }
        else
        {
            console.log("You lost this round");
            return [player,computer+1];
        }
    }
    else if (playerSelection=="scissors")
    {
        if (computerSelection == "rock")
        {
            console.log("You lost this round");
            return [player,computer+1];
        }
        else
        {
            console.log("You won this round");
            return [player+1,computer];
        }
    }
}
var player=0,computer=0; 
for(i=0;i<=4;i++)
{
     [player,computer]=round(player,computer);
}
console.log("The max limit of rounds reached");
if(computer>player)
{
    console.log("Computer Wins the Game");
}
else if(computer==player)
{
    console.log("The Game has been Tied");
}
else
{
    console.log("Player wins the game");
}