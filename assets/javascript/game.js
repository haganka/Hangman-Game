
        //creates array
        var campWords = ["smore", "campfire", "fishing", "canoe", "tent"];
       
        //chooses random word
        var randWord = function(){
            return campWords[Math.floor(Math.random() * campWords.length)];
        }
        //stores random word chosen
        var randChoice = randWord(campWords);
        
        var wordBank = document.querySelector("#mysteryWord");
        document.querySelector("#mysteryWord").innerHTML = randChoice;

        //prompts user to enter word
        var playerGuess = prompt("Guess a letter");
        var guesses = [];
        document.querySelector("#lettersDone").innerText = "";

        var remainingGuesses = 7;
        var guessNum = document.querySelector("#guesses");
        document.querySelector("#guesses").innerHTML = remainingGuesses;

        //CJ example in class for how to compare letters to key entered by user
        var randChoice = "smore"
        var remainingGuesses = 7;
        var wordArr = word.split(""); //this is now equal to ['s', 'm', 'o', 'r', 'e'];
        var hasMatch = false;

        
        for(var i = 0; i < wordArr.length; i++){
            if (wordArr[i] === playerGuess){
                hasMatch = true;
                //this needs to add letter to the display in the right place (create function and call in the if statement) and add a life
            }
        }

        if(hasMatch){
            remainingGuesses++;
        }else{
            remainingGuesses--;
        }

        hasMatch = false; 

        
        //need to find a way to go back to the for loop starting with hasMatch as false

    // need to figure out how to make the below work as the press any key rather than using a prompt
    var begin = function(event){
            var keyPress = event.key
            if (key){
                console.log("good")
            }
        }


        // for (var i = 0; i < campWords.length; i--){

        // }





        // var campWordsArr = campWords.split();
        // var campWordsHTML = "";
        // for (var i = 0; i < campWordsArr.length; i++){
        //     campWordsHTML += "<li>" +campWordsArr[i] + "</li>";
        // }
        // var campWordsElem = document.querySelector("#mysteryWord");
        // campWordsElem.innerHTML = campWordsHTML;




        
        // for (var guessesNum = 7; guessesNum > 0; guessesNum--);
      