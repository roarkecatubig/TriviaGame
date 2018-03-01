//VARIABLES 
var questionBank = [
    {
        question: "Click the color RED",
        answers: {
            answer1: "Blue",
            answer2: "Green",
            answer3: "Red",
            answer4: "Yellow",
            answer5: "Purple"
    },
        correctAnswer: "C"
    },
    {
        question: "Click the color BLUE",
        answers: {
            answer1: "Green",
            answer2: "Blue",
            answer3: "Purple",
            answer4: "Yellow",
            answer5: "Red"
    },
    correctAnswer: "B"
}]
var questionCounter = 0;
var questionTracker = questionCounter + 1;
var correctCounter = 0;
var missedCounter = 0;
var gameTimer = 10;
var aTime = 6;
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

function reset () {
    questionCounter = 0;
    questionTracker = questionCounter + 1;
    correctCounter = 0;
    missedCounter = 0;
    gameTimer = 10;
    aTime = 6;
    intervalID;
    result;
    $("#correctHeader").css({"background-color": "#f5f5f5"});
    $("#incorrectHeader").css({"background-color": "#f5f5f5"});
    questionTimer();
}

// This function sets the timer per each question and sets up each of the buttons and appropriate html IDs with proper values.
function questionTimer(){
    gameTimer = 10;
    clearInterval(intervalID);
    intervalID = setInterval(gamePace, 1000);
    $("#answerPrompt").html("Question " + questionTracker);
    $("#correct").html(correctCounter);
    $("#incorrect").html(missedCounter);
    $("#question").html(questionBank[questionCounter].question);
    $("#answerOne").html("<h2>A: " + questionBank[questionCounter].answers.answer1 + "</h2>");
    $("#answerTwo").html("<h2>B: " + questionBank[questionCounter].answers.answer2 + "</h2>");
    $("#answerThree").html("<h2>C: " + questionBank[questionCounter].answers.answer3 + "</h2>");
    $("#answerFour").html("<h2>D: " + questionBank[questionCounter].answers.answer4 + "</h2>");
    $("#answerFive").html("<h2>E: " + questionBank[questionCounter].answers.answer5 + "</h2>");

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
function displayAnswer() {
    $("#question").html("The correct answer is " + questionBank[questionCounter].correctAnswer)
    if (questionCounter + 1 < questionBank.length && gameTimer != 0) {
        aTime--;
        $("#display").html("<h2>Time remaining: " + aTime + " seconds </h2>");
        
        if (aTime === 0) {
            answerJquery()
        }
    }
    else if (questionCounter + 1 < questionBank.length && gameTimer === 0) {
        aTime--;
        $("#display").html("<h2>You ran out of time. Time remaining: " + aTime + " seconds </h2>");
        $("#incorrectHeader").css({"background-color":"red"});
        
        if (aTime === 0) {
            answerJquery();
        }
    }
    else if (questionCounter + 1 === questionBank.length && gameTimer ===0) {
        $("#display").html("Q" + questionTracker + ": No more questions remaining. Click 'Restart Game' to PLAY AGAIN")
        $("#incorrectHeader").css({"background-color":"red"});
        timerEnd();
    }
    else if(questionCounter + 1 === questionBank.length) {
        $("#display").html("Q" + questionTracker + ": No more questions remaining. Click 'Restart Game' to PLAY AGAIN")
        timerEnd();
    }
}

function answerTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(displayAnswer, 1000);
}

function answerJquery() {
    questionCounter++;
    questionTracker++;
    clearInterval(intervalID)
    $("#correctHeader").css({"background-color": "#f5f5f5"});
    $("#incorrectHeader").css({"background-color": "#f5f5f5"});
    $("#answerPrompt").html("Question " + questionTracker);
    questionTimer();
}

// Situation 1: If the user inputs an answer before the question timer runs out, the function will compare the answer and increment the appropriate counter as needed.
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

// GAME EXECUTION
// questionTimer()

