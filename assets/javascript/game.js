        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
        
       
        //chooses random word
        var randWord = function(){
            return campWords[Math.floor(Math.random() * campWords.length)];
        }
        //stores random word chosen
        var randChoice = randWord();
            console.log("randChoice", randChoice);
        
        //Adds underscores to page
        var randChoiceArr = randChoice.split("");
        
        var underscoreHTML = "";
        for (var i = 0; i < randChoiceArr.length; i++){
            underscoreHTML += "_ " ;
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;

        // need to figure out how to make the below work as the press any key rather than using a prompt - below is start
        // var begin = function(event){
        //     document.addEventListener("keyup", keyPushed);
        // document.addEventListener("keyup", event.key)
        // }
        
        var lives = 7;
        var wordArr = randChoice.split(""); //this is now equal to ['s', 'm', 'o', 'r', 'e'];
        var hasMatch = false;
        var correctGuesses = [];

        //prompts user to enter letter - # of tries = numGuesses
        var guesses = [];

        var gamePlay = function (){
            while(lives > 0){
                var playerGuess = prompt("Guess a letter");
                guesses.push(playerGuess);
                console.log("guesses", guesses);

                for (var i = 0; i < wordArr.length; i++){
                    if(wordArr[i] === playerGuess){
                        hasMatch = true;
                        correctGuesses.push(playerGuess);
                        console.log(correctGuesses);
                        
                    }else{
                        hasMatch = false;
                        // numGuesses--;
                        // console.log("lives left", numGuesses);
                        }

                        if(hasMatch === false){
                            lives--;
                        }
    
                    }
                }
            }

            // if(hasMatch === false){
            //     numGuesses --;
            //     console.log("lives left", numGuesses);
            // }
            // else{
            //     correctGuesses.push(playerGuess);
            //     console.log(correctGuesses);
            // }
        // }

        // for(var i = 0; i < wordArr.length; i++){
        //     if(hasMatch === false){
        //         numGuesses--;
        //         console.log(numGuesses);
        //     }else(hasMatch === true)
        // }


        //need to find a way to go back to the for loop starting with hasMatch as false

        var player = {
            lives: lives,
            letters: guesses,
            correct: correctGuesses
            
        }

        var livesElem = document.querySelector("#lives");
        livesElem.innerHTML = lives;

        
        var guessesElem = document.querySelector("#lettersDone");
        guessesElem.innerHTML = guesses;

        document.addEventListener("keyup", gamePlay);

        console.log("player stats", player);




        // return player;
        


      