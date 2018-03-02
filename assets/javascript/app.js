//VARIABLES 
var questionBank = [
    {
        question: "Aang was born and raised under which culture?",
        answers: {
            answer1: "The Earth Kingdom",
            answer2: "The Fire Nation",
            answer3: "The Air Nomads",
            answer4: "The Water Tribe",
            answer5: "None of the above"
    },
        correctAnswer: "C"
    },
    {
    question: "Which character pioneered Metalbending?",
    answers: {
        answer1: "Toph",
        answer2: "Kyoshi",
        answer3: "Bumi",
        answer4: "Iroh",
        answer5: "Gyatso"
    },
    correctAnswer: "A"
    },
    {
    question: "Why did Prince Zuko pursue the Avatar?",
    answers: {
        answer1: "To learn firebending from the Avatar.",
        answer2: "To claim a bounty placed on the Avatar.",
        answer3: "To save his Uncle.",
        answer4: "To be named as the strongest bender alive.",
        answer5: "To restore his honor and return home."
    },
    correctAnswer: "E"
    },
    {
    question: "Which type of elemental bending bases their movement and fighting style from Tai Chi?",
    answers: {
        answer1: "Firebending",
        answer2: "Waterbending",
        answer3: "Earthbending",
        answer4: "Airbending",
        answer5: "Metalbending"
    },
    correctAnswer: "B"
    },
    {
    question: "Each of the following are known forms of elemental bending EXCEPT",
    answers: {
        answer1: "Airbending",
        answer2: "Firebending",
        answer3: "Metalbending",
        answer4: "Bloodbending",
        answer5: "Soundbending"
    },
    correctAnswer: "E"
    },
    {
    question: "For MOST waterbenders, what is necessary to achieve bloodbending?",
    answers: {
        answer1: "All of the above",
        answer2: "A connection to the spirit world",
        answer3: "Blood of the bender",
        answer4: "A full moon",
        answer5: "An enchanted talisman"
    },
    correctAnswer: "D"
    },
    {
    question: "Following the Avatar cycle, which nation will yield the next Avatar after Aang?",
    answers: {
        answer1: "The Fire Nation",
        answer2: "The Earth Kingdom",
        answer3: "The Air Nomads",
        answer4: "The Water Tribe",
        answer5: "None of the above"
    },
    correctAnswer: "D"
    },
    {
    question: "Where did Aang find his pet winged lemur, Momo?",
    answers: {
        answer1: "The Southern Air Temple",
        answer2: "The Northern Air Temple",
        answer3: "The Eastern Air Temple",
        answer4: "The Western Air Temple",
        answer5: "The Spirit World"
    },
    correctAnswer: "A"
    },
    {
    question: "Who was the previous Avatar incarnation before Aang?",
    answers: {
        answer1: "Kyoshi",
        answer2: "Bumi",
        answer3: "Roku",
        answer4: "Zuko",
        answer5: "Katara"
    },
    correctAnswer: "C"
    },
    {
    question: "What is the name of the ancient society that transcends the boundaries of the four nations, seeking philosophy, beauty, and truth?",
    answers: {
        answer1: "The Dai Li",
        answer2: "Freedom Fighters",
        answer3: "The Red Lotus",
        answer4: "The Equalists",
        answer5: "The Order of the White Lotus"
    },
    correctAnswer: "E"
    
}]
var questionCounter = 0;
var questionTracker = questionCounter + 1;
var correctCounter = 0;
var missedCounter = 0;
var gameTimer = 31;
var aTime = 11;
var intervalID;
var result;

// QUESTION DISPLAY FUNCTIONS BELOW

// Handles button clicks. 
$("#answerA").on("click", function(event){
    result = $("#answerA").val();
    compareAnswer(event);
})

$("#answerB").on("click", function(event){
    result = $("#answerB").val();
    compareAnswer(event);
})

$("#answerC").on("click", function(event){
    result = $("#answerC").val();
    compareAnswer(event);
})

$("#answerD").on("click", function(event){
    result = $("#answerD").val();
    compareAnswer(event);
})

$("#answerE").on("click", function(event){
    result = $("#answerE").val();
    compareAnswer(event);
})

$("#start").on("click", reset);
$("#reset").on("click", reset);

// Resets the game and its variables.
function reset () {
    questionCounter = 0;
    questionTracker = questionCounter + 1;
    correctCounter = 0;
    missedCounter = 0;
    gameTimer = 31;
    aTime = 11;
    intervalID;
    result;
    $("#correctHeader").css({"background-color": "#f5f5f5"});
    $("#incorrectHeader").css({"background-color": "#f5f5f5"});
    questionTimer();
}

// Sets the timer per each question and sets up each of the buttons and appropriate html IDs with proper values.
function questionTimer(){
    gameTimer = 31;
    clearInterval(intervalID);
    intervalID = setInterval(gamePace, 1000);
    $("#answerPrompt").html("Question " + questionTracker);
    $("#correct").html(correctCounter);
    $("#incorrect").html(missedCounter);
    $("#question").html(questionBank[questionCounter].question);
    $("#answerOne").html("<h4>A: " + questionBank[questionCounter].answers.answer1 + "</h4>");
    $("#answerTwo").html("<h4>B: " + questionBank[questionCounter].answers.answer2 + "</h4>");
    $("#answerThree").html("<h4>C: " + questionBank[questionCounter].answers.answer3 + "</h4>");
    $("#answerFour").html("<h4>D: " + questionBank[questionCounter].answers.answer4 + "</h4>");
    $("#answerFive").html("<h4>E: " + questionBank[questionCounter].answers.answer5 + "</h4>");

}

// This function gradually decreases the timer and consistently updates the page and calls this same function to decrease the timer. 
function gamePace() {
    gameTimer--;
    $("#display").html("<h2>"+ "Time remaining: " + gameTimer + " seconds </h2>");
    if (gameTimer === 0) {
        clearInterval(intervalID);
        missedCounter++;
        $("#incorrect").html(missedCounter);
        answerTimer();
    }
}
// When a scenario occurs where the timer is no longer needed, this function will end the timer. 
function timerEnd() {
    clearInterval(intervalID);
}

// These next two functions are a separate timer for the answer when it is displayed.
// It additionally generates certain updates to the game depending on how the user responds/doesn't respond.
function displayAnswer() {
    $("#question").html("The correct answer is " + questionBank[questionCounter].correctAnswer)
    if (questionCounter + 1 < questionBank.length && gameTimer != 0) {
        aTime--;
        $("#display").html("<h2>Time remaining: " + aTime + " seconds </h2>");
        
        if (aTime === 0) {
            aTime =11;
            answerJquery()
        }
    }
    else if (questionCounter + 1 < questionBank.length && gameTimer === 0) {
        aTime--;
        $("#display").html("<h2>You ran out of time. Time remaining: " + aTime + " seconds </h2>");
        $("#incorrectHeader").css({"background-color":"red"});
        
        if (aTime === 0) {
            aTime =11;
            answerJquery();
        }
    }
    else if (questionCounter + 1 === questionBank.length && gameTimer ===0) {
        $("#display").html("No more questions remaining. You got " + correctCounter + "/10 correct. Click 'Restart Game' to PLAY AGAIN")
        $("#incorrectHeader").css({"background-color":"red"});
        timerEnd();
    }
    else if(questionCounter + 1 === questionBank.length) {
        $("#display").html("No more questions remaining. You got " + correctCounter + "/10 correct. Click 'Restart Game' to PLAY AGAIN")
        timerEnd();
    }
}
// Similar timer set up for when the answer is displayed.
function answerTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(displayAnswer, 1000);
}

// Utilizes jQuery to update elements in the game.
function answerJquery() {
    clearInterval(intervalID)
    questionCounter++;
    questionTracker++;
    $("#correctHeader").css({"background-color": "#f5f5f5"});
    $("#incorrectHeader").css({"background-color": "#f5f5f5"});
    $("#answerPrompt").html("Question " + questionTracker);
    questionTimer();
}

// If the user inputs an answer before the question timer runs out, the function will compare the answer and increment the appropriate counter as needed.
function compareAnswer () {
    if (gameTimer != 0 && result === questionBank[questionCounter].correctAnswer) {
        correctCounter++;
        $("#answerPrompt").html("<h3>You got it right!<h3>")
        $("#correctHeader").css({"background-color":"lightgreen"});
        $("#correct").html(correctCounter);
        clearInterval(intervalID);
        answerTimer();
    }

    else if (gameTimer != 0 && result != questionBank[questionCounter].correctAnswer) {
        missedCounter++;
        $("#answerPrompt").html("<h3>Sorry you got it wrong!<h3>")
        $("#incorrectHeader").css({"background-color":"red"});
        $("#incorrect").html(missedCounter);
        clearInterval(intervalID);
        answerTimer();
    }
}


