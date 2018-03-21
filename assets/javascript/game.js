    var campWords = ["smore", "campfire", "fishing", "canoe", "tent", "marshmallow", "mosquitos", "lake", "woods", "hiking"];
    var hasMatch = false;
    var correctGuesses = [];
    var hasWon = false;
    var guesses = [];
    var wins = 0;
    var losses = 0;
    var wordArr = []
    var guessedWord = []
    var lives = 7;


    /** pulls random choice from the campWords array
     * @return {string} - chosen word from array
     */
    var randWord = function(){
        return campWords[Math.floor(Math.random() * campWords.length)];
    }

    /**checks playerGuess against the wordArr to see if there is a match
     * @param {string} playerGuess - key entered by player
     */
    function checkWord(playerGuess) {
        for (var i = 0; i < guessedWord.length; i ++) {
            if (playerGuess === wordArr[i]) {
                guessedWord[i] = playerGuess
            }
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        randChoiceElem.innerHTML = guessedWord.join('');
    }
    
     /** resets game variables, runs randomWord and displays underscore array on page
     */
    function reset() {
        guesses = [];
        var guessesElem = document.querySelector("#lettersDone");
        guessesElem.innerHTML = guesses;
        lives = 7;
        var livesElem = document.querySelector("#lives");
        livesElem.innerHTML = lives;
        correctGuesses = [];
        guessedWord = [];
        var randChoice = randWord();

        wordArr = randChoice.split(""); 
        
        var underscoreHTML = "";
        for (var i = 0; i < wordArr.length; i++){
            underscoreHTML += "_ " ;
            guessedWord.push('_ ')
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;
    }
        
    reset();

    /** called by keyup event each time user guesses a letter
     * @param {event} - prevents page from reloading on click
     * @param {array} wordArray - array of letters in random word
     */
    var startGame = function (event){
        var playerGuess = event.key;

        checkWord(playerGuess)
            guesses.push(playerGuess);
                var guessesElem = document.querySelector("#lettersDone");
                guessesElem.innerHTML = guesses;

            if(!wordArr.includes(playerGuess)){
                lives--;
                    var livesElem = document.querySelector("#lives");
                    livesElem.innerHTML = lives;
            }else{
                correctGuesses.push(playerGuess);
            }
            var hasWon = winner(guesses, wordArr);
            var hasLost = loser(lives);

            if(hasWon){
                wins++;
                $("#wins").text(wins)
                $(".result-msg").text("You're a camp champ!").fadeIn().delay(3000).fadeOut();
                reset()
            }
            if(hasLost){
                losses++
                $("#losses").text(losses);
                $(".result-msg").text("You're campfire burned out. Try again!").fadeIn().delay(3000).fadeOut();
                reset()
            }
    }
        
        /** function that runs inside of checkWord to see if the player is out of lives
         * @param {num} lives - number of lives left
         * @return {boolean} - returns true or false based on if lives equal 0
         */
        function loser (lives) {
            if(lives === 0){
                return true;
            }
        }

        /** function that runs inside of checkWord to see if the player guessed all letters
         * @param {array} guesses - user guesses
         * @param {array} wordArray - array of letters in random word
         * @return {boolean} - true or false player is a winner
         */
        function winner (guesses, wordArray) {
            if (wordArray.length === 0) {
                return false;
            }
            return wordArray.every(function (value) {
                return (guesses.indexOf(value) >= 0);
            });
        }

        var player = {
            lives: lives,
            letters: guesses,
            correct: correctGuesses   
        }


        document.addEventListener("keyup", startGame);
       
