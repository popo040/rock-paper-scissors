function computerPlay()
{
    var possibilities=["rock","paper","scissors"];
    return possibilities[Math.floor(Math.random() * possibilities.length)];
}
function round(player,computer)
{
    if(player == computer)
    {
        return [0,0];
    }
    else if (player == "rock")
    {
        if (computer == "paper")
        {
            return [0,1];
        }
        else
        {
            return [1,0];
        }
    }
    else if (player=="paper")
    {
        if (computer == "rock")
        {
            return [1,0];
        }
        else
        {
            return [0,1];
        }
    }
    else if (player=="scissors")
    {
        if (computer == "rock")
        {
            return [0,1];
        }
        else
        {
            return [1,0];
        }
    }
}
var count=1;
playerScore=0,computerScore=0;
const main = document.querySelector('.main');
const div1 = document.createElement('div');
div1.classList.add("div1");
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click',() =>{
        if (count<6)
        {
            
            var player = button.id;
            var score1, score2;
            var computer = computerPlay();
            [score1,score2]= round(player,computer);
            if (score1 == score2)
            {
                div1.style.cssText = "margin:50px; padding:50px,50px;text-align:center; color:white; border:solid; width:220px; height:20px;"
                div1.textContent="Round "+ count +": Tied";
            }
            else if (score1 == 1)
            {
                div1.style.cssText = "margin:50px; padding:50px,50px;text-align:center; color:white; border:solid; width:220px; height:20px;"
                div1.textContent="Round "+ count +": Player";
            }
            else
            {
                div1.style.cssText = "margin:50px; padding:50px,50px;text-align:center; color:white; border:solid; width:220px; height:20px;"
                div1.textContent="Round "+ count +": Computer";
            }
            playerScore =playerScore + score1;
            computerScore =computerScore + score2;
            console.log(playerScore);  
            count++;
            if (count==6)
            {
                const d1 = document.querySelector('.main');
                const res = document.createElement('div');
                if(playerScore>computerScore)
                {
                    res.style.cssText= "margin:50px; padding:50px,50px;text-align:center; color:green; border:solid; width:220px; height:20px;"
                    res.textContent="winner:Player";
                }
                else if(playerScore==computerScore)
                {
                    res.style.cssText = "margin:50px; padding:50px,50px;text-align:center; color:white; border:solid; width:220px; height:20px;"
                    res.textContent="Game Tied";
                }
                else
                {
                    res.style.cssText = "margin:50px; padding:50px,50px;text-align:center; color:red; border:solid; width:220px; height:20px;"
                    res.textContent="winner:Computer";    
                }
                d1.append(res);    
            }  
        }
        else
        {
            div1.style.cssText="margin:50px;color:red; padding:50px,50px; text-align:center;width:220px; height:20px;";
            div1.textContent="Maximum Limit Reached";
        } 
    });
});
main.append(div1);