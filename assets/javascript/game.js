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

        
        for (var i = 0; i < guessedWord.length; i ++) {
            if (playerGuess === wordArr[i]) {
                guessedWord[i] = playerGuess
            }
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        randChoiceElem.innerHTML = guessedWord.join('');
    }
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

        var startGame = function (event){
            var playerGuess = event.key;

            var indices = [];
            for(var i=0; i<wordArr.length;i++) {
                if (wordArr[i] === playerGuess) {
                    indices.push(i);
                }
            }
            // console.log('all the spots where we found the guessed letter!!!', indices);
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
                
                if(hasWon){
                    alert('you did it!!')
                    wins++;
    
                    var winsElem = document.querySelector("#wins");
                    winsElem.innerHTML = wins;
                    reset()

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
       
