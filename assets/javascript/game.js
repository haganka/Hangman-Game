
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
         //creates underscoreHTML variable that's currently empty so we can use to populate underscores on page
        underscoreHTML += "_ " ;
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;



        // need to figure out how to make the below work as the press any key rather than using a prompt - below is start
        // var begin = function(event){
        //     document.addEventListener("keyup", keyPushed);
        // }
        //prompts user to enter word - put inside of a for loop so it continues to run until all letters complete = use randChoice.length

        var numGuesses = 7;
        var wordArr = randChoice.split(""); //this is now equal to ['s', 'm', 'o', 'r', 'e'];
        var hasMatch = false;


        var guesses = [];
        for(i = 0; i < numGuesses; i++){
            var playerGuess = guesses.push(prompt("Guess a letter"));
        }

        //add wins here once defined
        var player = {
            lives: numGuesses,
            letters: guesses
            
        }
        console.log("player stats", player);
        // return player;
        


        //creates an alert when a key is pressed
        // addEventListener("keyup", function(event) {
        //     if (event.keyCode)
        //       alert("let's begin");
        //   });

        //CJ example in class for how to compare letters to key entered by user

        for(var i = 0; i < wordArr.length; i++){
            if (wordArr[i] === playerGuess){
                hasMatch = true;
            }
        }

        if(hasMatch === true){
            numGuesses++;
        }else{
            numGuesses--;
        }
        console.log("remaining guesses", numGuesses);

        hasMatch = false; 

        var numGuessesElem = document.querySelector("#guesses");
        numGuessesElem.innerHTML = numGuesses;

        // if (hasMatch = true){
        //     document.querySelector("#mysteryWord").innerText += key;
        // }
        
        var guessesElem = document.querySelector("#lettersDone");
        guessesElem.innerHTML = guesses;

        
        //need to find a way to go back to the for loop starting with hasMatch as false


      