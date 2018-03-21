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
                var hasLost = loser(lives);

                if(hasWon){
                    // alert('you did it!!')
                    wins++;
                    $(".result-msg").text("You're a camp champ!").fadeIn().delay(5000).fadeOut();
                    reset()
                }
                if(hasLost){
                    alert('you lost, try try again!')
                    losses++
                    $(".result-msg").text("You're campfire burned out. Try again!").fadeIn().delay(5000).fadeOut();
                    reset()
                }
            }
        
        function loser (lives) {
            if(lives === 0){
                return true;
            }
        }

        
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
       
