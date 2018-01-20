
        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
       
        //chooses random word
        var randWord = function(){
            return campWords[Math.floor(Math.random() * campWords.length)];
        }
        //stores random word chosen
        var randChoice = randWord();
        
        //Adds underscores to page
        var randChoiceArr = randChoice.split("");
        var underscoreHTML = "";
        for (var i = 0; i < randChoiceArr.length; i++){

         //call interestsHTML variable that's currently empty, want to display in list, pull in the interestsArr variable to populate it, close the list
         underscoreHTML += "_ " ;
        }
        var randChoiceElem = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = underscoreHTML;

        var numGuesses = 7;
        var numHTML = document.querySelector("#guesses");
        document.querySelector("#guesses").innerHTML = numGuesses;


    // need to figure out how to make the below work as the press any key rather than using a prompt - below is start
    // var begin = function(event){
    //     document.addEventListener("keyup", keyPushed);
    // }
        //prompts user to enter word
        var playerGuess = prompt("Guess a letter");
        var guesses = [];



        //CJ example in class for how to compare letters to key entered by user
        var randChoice = "smore";
        var numGuesses = 7;
        var wordArr = randChoice.split(""); //this is now equal to ['s', 'm', 'o', 'r', 'e'];
        var hasMatch = false;

        
        for(var i = 0; i < wordArr.length; i++){
            if (wordArr[i] === playerGuess){
                hasMatch = true;
            }
            if (wordArr[i] === playerGuess){
                guesses.push(playerGuess)
                // guesses.push(playerGuess);
                //above needs to add letter to the display in the right place (create function and call in the if statement) and add a life
            }
        }

        if(hasMatch){
            numGuesses++;
        }else{
            numGuesses--;
        }

        hasMatch = false; 


        
        //need to find a way to go back to the for loop starting with hasMatch as false


      