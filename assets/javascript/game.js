        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
        var lives = 7;
        var hasMatch = false;
        var correctGuesses = [];
        var hasWon = false;
        var guesses = [];
        var wins = 0;
       
        //chooses random word
        var randWord = function(){
            return campWords[Math.floor(Math.random() * campWords.length)];
        }
        //stores random word chosen
        var randChoice = randWord();
            console.log("randChoice", randChoice);

        var wordArr = randChoice.split(""); 
        
        //Adds underscores to page
        // var randChoiceArr = randChoice.split("");
        
        var underscoreHTML = "";
        for (var i = 0; i < wordArr.length; i++){
            underscoreHTML += "_ " ;
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;


        var startGame = function (event){

            //while(lives > 0 && !hasWon){ //shorthand for !== true
                // hasMatch = false;
                // var playerGuess = event.key;
                var playerGuess = event.key;
                console.log("You guessed", playerGuess);
                guesses.push(playerGuess);
                console.log("guesses", guesses);
                    var guessesElem = document.querySelector("#lettersDone");
                    guessesElem.innerHTML = guesses;

                if(!wordArr.includes(playerGuess)){
                    lives--;
                    console.log("lives left", lives);
                        var livesElem = document.querySelector("#lives");
                        livesElem.innerHTML = lives;

                }else{
                    correctGuesses.push(playerGuess);
                    console.log(correctGuesses);
                        var correctLetterElem = document.querySelector("#mysteryWord");
                        document.querySelector("#mysteryWord").innerHTML = correctGuesses;

                }
                var hasWon = winner(guesses, wordArr);
                    console.log("win?", hasWon);
                
                if(hasWon){
                    wins++;
                    // alert("you did it!");
                    // console.log("you did it")
    
                    var winsElem = document.querySelector("#wins");
                    winsElem.innerHTML = wins;

                    correctGuesses = [];
                    lives = [];
                    guesses = [];
                    randWord();
                    startGame();
                }
            }

        
        
        function winner (superset, subset) {
            if (0 === subset.length) {
                return false;
            }
            return subset.every(function (value) {
                return (superset.indexOf(value) >= 0);
            });
            }

        var player = {
            lives: lives,
            letters: guesses,
            correct: correctGuesses
            
        }


        document.addEventListener("keyup", startGame);
        //$("body").on("keyup", startGame);
        startGame();
       

        console.log("player stats", player);


        // return player;