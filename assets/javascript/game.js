        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
        var lives = 7;
        var hasMatch = false;
        var correctGuesses = [];
        var hasWon = false;
        var guesses = [];
        var wins = 0;;
        var wordArr = []

        var guessedWord = []


    var randWord = function(){
        return campWords[Math.floor(Math.random() * campWords.length)];
    }

    function checkWord(playerGuess) {
        console.log('guessedWord ---', guessedWord.length, 'wordArr', wordArr.length, 'playerGuess', playerGuess);

        
        for (var i = 0; i < guessedWord.length; i ++) {
            console.log('this is wordArr[i]', wordArr[i], 'playerGuess', playerGuess);

            if (playerGuess === wordArr[i]) {
                guessedWord[i] = playerGuess
            }
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        console.log('guessedWord ----', guessedWord.join(''))
        randChoiceElem.innerHTML = guessedWord.join('');
    }
    function reset() {
        guesses = [];
        var guessesElem = document.querySelector("#lettersDone");
        guessesElem.innerHTML = guesses;
        lives = 7;
        correctGuesses = [];
        guessedWord = [];
        //chooses random word
        //stores random word chosen
        var randChoice = randWord();
            console.log("randChoice", randChoice);



        wordArr = randChoice.split(""); 

        
        //Adds underscores to page
        // var randChoiceArr = randChoice.split("");
        
        var underscoreHTML = "";
        for (var i = 0; i < wordArr.length; i++){
            // underscoreHTML += "_ " ;
            guessedWord.push('_ ')
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;
    }
        
    reset()

        var startGame = function (event){
            var playerGuess = event.key;

            var indices = [];
            for(var i=0; i<wordArr.length;i++) {
                if (wordArr[i] === playerGuess) {
                    indices.push(i);
                }
            }
            console.log('all the spots where we found the guessed letter!!!', indices);
            checkWord(playerGuess)
            //while(lives > 0 && !hasWon){ //shorthand for !== true
                // hasMatch = false;
                // var playerGuess = event.key;
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
                        // var correctLetterElem = document.querySelector("#mysteryWord");
                        // document.querySelector("#mysteryWord").innerHTML = correctGuesses;

                }
                var hasWon = winner(guesses, wordArr);
                    console.log("win?", hasWon);
                
                if(hasWon){
                    alert('you did it!!')
                    wins++;
    
                    var winsElem = document.querySelector("#wins");
                    winsElem.innerHTML = wins;
                    reset()

                }
                // startGame();

                //create reset button 
                // var randChoice = randWord();
                // correctGuesses = [];
                // lives = [];
                // guesses = [];
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
        // startGame();
       

        console.log("player stats", player);


        // return player;
