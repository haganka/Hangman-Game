        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
        var lives = 7;
        var hasMatch = false;
        var correctGuesses = [];
        var hasWon = false;
        var guesses = [];
       
        //chooses random word
        var randWord = function(){
            return campWords[Math.floor(Math.random() * campWords.length)];
        }
        //stores random word chosen
        var randChoice = randWord();
            console.log("randChoice", randChoice);

        var wordArr = randChoice.split(""); //this is now equal to ['s', 'm', 'o', 'r', 'e'];
        
        //Adds underscores to page
        // var randChoiceArr = randChoice.split("");
        
        var underscoreHTML = "";
        for (var i = 0; i < wordArr.length; i++){
            underscoreHTML += "_ " ;
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;

        // need to figure out how to make the below work as the press any key rather than using a prompt - below is start
        // var begin = function(event){
        //     document.addEventListener("keyup", keyPushed);
        // document.addEventListener("keyup", event.key)
        // }
        
        //prompts user to enter letter - # of tries = numGuesses

        var gamePlay = function (){
            while(lives > 0 && !hasWon){ //shorthand for !== true
                // hasMatch = false;
                var playerGuess = prompt("Guess a letter");
                guesses.push(playerGuess);
                console.log("guesses", guesses)

                if(!wordArr.includes(playerGuess)){
                    lives--;
                    console.log("lives left", lives)
                }else{
                    correctGuesses.push(playerGuess);
                    console.log(correctGuesses);
                }

                hasWon = arrayContainsArray(guesses, wordArr);
                    console.log("win?", hasWon);

                }
            }
        
            function arrayContainsArray (superset, subset) {
                if (0 === subset.length) {
                  return false;
                }
                return subset.every(function (value) {
                  return (superset.indexOf(value) >= 0);
                });
              }

            if(hasWon){
                alert("you did it!");
                console.log("you did it")
            }



                // for (var i = 0; i < wordArr.length; i++){
                //     hasMatch = false;
                //     if(wordArr[i] === playerGuess){
                //         hasMatch = true;
                //         correctGuesses.push(playerGuess);
                //         console.log(correctGuesses);
                        
                //     }else{
                //         hasMatch = false;
                //         // lives--;
                //         // console.log("lives left", lives);
                //         }
                //     }

                

                // for(var i = 0; i < guesses.length; i++){
                //     if(guesses.includes(wordArr[i])){
                //         if(guesses.length >= wordArr.length){
                //             hasWon = true;
                //     }


                // }

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
        


      