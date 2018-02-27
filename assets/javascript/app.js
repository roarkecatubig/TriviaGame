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
var correctCounter = 0;
var missedCounter = 0;
var gameTimer = 6;
var intervalID;
var result;

// QUESTION DISPLAY FUNCTIONS BELOW

// Displays question and answers.
function displayQuestion() {
    
    gameTimer = 6;
    questionTimer();
    $("#correct").html(correctCounter);
    $("#incorrect").html(missedCounter);
    $("#question").html(questionBank[questionCounter].question);
    $("#answerOne").html(questionBank[questionCounter].answers.answer1);
    $("#answerTwo").html(questionBank[questionCounter].answers.answer2);
    $("#answerThree").html(questionBank[questionCounter].answers.answer3);
    $("#answerFour").html(questionBank[questionCounter].answers.answer4);
    $("#answerFive").html(questionBank[questionCounter].answers.answer5);

// Handles button clicks. 
$("#answerA").on("click", function(event){
    result = $("#answerA").val();
    console.log(result);
    compareAnswer(event);

})

$("#answerB").on("click", function(event){
    result = $("#answerB").val();
    console.log(result);
    compareAnswer(event);
})

$("#answerC").on("click", function(event){
    result = $("#answerC").val();
    console.log(result);
    compareAnswer(event);
})

$("#answerD").on("click", function(event){
    result = $("#answerD").val();
    console.log(result);
    compareAnswer(event);
})

$("#answerE").on("click", function(event){
    result = $("#answerE").val();
    console.log(result);
    compareAnswer(event);
})

function compareAnswer (guess) {
    if (guess === questionBank[questionCounter].correctAnswer) {
        correctOutcome();
    }

    else {
        incorrectOutcome();
    }
}

function correctOutcome () {
    console.log("You got it right")
    correctCounter++;
    clearInterval(intervalID);
    displayQuestion();
}

function incorrectOutcome () {
    console.log("You got it wrong")
    missedCounter++;
    clearInterval(intervalID);
    displayQuestion()
}

// function timeoutAnswer () {
//     setTimeout(displayAnswer, 1000*30)
// }

// function displayAnswer () {
//     $("#wholeSection").html("Answer " + questionBank[questionCounter].correctAnswer)
// }

questionTimer();
}
// QUESTION DISPLAY FUNCTIONS ABOVE

// TIMER FUNCTIONS BELOW

function questionTimer(){
    clearInterval(intervalID);
    intervalID = setInterval(gamePace, 1000);

}

function gamePace() {
    gameTimer--;
    $("#display").html("<h2>"+ "Time remaining: " + gameTimer + " seconds </h2>");
    console.log(gameTimer)

    if(gameTimer === 0) {
        // timerEnd();
        
        clearInterval(intervalID);
        questionCounter++;
        displayQuestion();

    }
}

// function timerEnd() {
//     clearInterval(intervalID);
//     questionCounter++;
//     displayQuestion();
// }
displayQuestion();

//TIMER FUNCTIONS ABOVE