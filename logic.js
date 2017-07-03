    
    // JAVASCRIPT 
    // <script type="text/javascript">
        var computerChoices=["rock","paper","scissor"];
        var userScore= 0;
        var computerScore=0;

        function myfunction(btn){
            //alert(btn.id);
            var userGuess = btn.id;
            var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
            var winner= findWinner(userGuess,computerGuess);
            setImages(userGuess,computerGuess);         

            // Winner
            score(winner);
            document.getElementById("user-wins").innerHTML=userScore;
            document.getElementById("computer-wins").innerHTML=computerScore;

            // show score
            if(winner=="user wins"){
                document.getElementById("message").innerHTML="You Win";
            }else if(winner=="computer wins"){
                document.getElementById("message").innerHTML="You Lose";
            }else if(winner=="It's a tie"){
                document.getElementById("message").innerHTML="It's a Tie";
            }
        }

        // show image
        function setImages(userGuess, computerGuess){
            document.getElementById("show-user-choice").src = "images/" + userGuess + ".png";
            document.getElementById("show-computer-choice").src = "images/" + computerGuess + ".png";
        }

        // FUNCTIONS
        function findWinner(userGuess, computerGuess){
            var winner ="";
            // This is the logic that determines who wins the game.
            if (userGuess==computerGuess){
                winner="It's a tie";
                return winner;  
            }
            if(userGuess=="rock") {
                if(computerGuess=="paper"){
                    winner="computer wins";
                }else{
                    winner="user wins";
                }
            }else{
                if(userGuess=="paper"){
                    if(computerGuess=="rock"){
                        winner="user wins";
                    }else{
                        winner = "computer wins";
                    }
                }
                else{
                    if(computerGuess=="rock"){
                        winner = "computer wins";
                    }
                    else{
                        winner = "user wins";
                    }
                }
            }
            // alert(userGuess + '\n' +  computerGuess + '\n' + winner);
            return winner;
        }

        // score function
        
        function score(winner){
            if (winner=="user wins"){
                userScore++
            }
            if(winner=="computer wins"){
                computerScore++
            }
        }
        
    // </script>


