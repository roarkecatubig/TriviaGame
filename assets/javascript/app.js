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
var gameTimer = 10;
var intervalID;
var result;

// QUESTION DISPLAY FUNCTIONS BELOW

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

function compareAnswer () {
    if (result === questionBank[questionCounter].correctAnswer) {
        console.log("You got it right")
        correctCounter++;
        questionCounter++;
        clearInterval(intervalID);
        questionAvailable();
    }

    else {
        console.log("You got it wrong")
        missedCounter++;
        questionCounter++;
        clearInterval(intervalID);
        questionAvailable();
    }
}

function questionAvailable() {
    if (questionCounter + 1 <= questionBank.length) {
        questionTimer();
    }

    else {
        timerEnd();
        console.log("No more questions remaining")
    }
}

// function correctOutcome () {
//     console.log("You got it right")
//     correctCounter++;
//     questionCounter++;
//     clearInterval(intervalID);

//     questionTimer();
// }

// function incorrectOutcome () {
//     console.log("You got it wrong")
//     missedCounter++;
//     questionCounter++;
//     clearInterval(intervalID);
//     questionTimer()
// }

// function timeoutAnswer () {
//     setTimeout(displayAnswer, 1000*30)
// }

// function displayAnswer () {
//     $("#wholeSection").html("Answer " + questionBank[questionCounter].correctAnswer)
// }

// questionTimer();
// }
// QUESTION DISPLAY FUNCTIONS ABOVE

// TIMER FUNCTIONS BELOW

function questionTimer(){
    gameTimer = 10;
    clearInterval(intervalID);
    intervalID = setInterval(gamePace, 1000);
    $("#correct").html(correctCounter);
    $("#incorrect").html(missedCounter);
    $("#question").html(questionBank[questionCounter].question);
    $("#answerOne").html(questionBank[questionCounter].answers.answer1);
    $("#answerTwo").html(questionBank[questionCounter].answers.answer2);
    $("#answerThree").html(questionBank[questionCounter].answers.answer3);
    $("#answerFour").html(questionBank[questionCounter].answers.answer4);
    $("#answerFive").html(questionBank[questionCounter].answers.answer5);

}

function gamePace() {
    gameTimer--;
    $("#display").html("<h2>"+ "Time remaining: " + gameTimer + " seconds </h2>");

    if(gameTimer === 0 && questionCounter + 1 < questionBank.length) {
        // timerEnd();
        
        clearInterval(intervalID);
        questionCounter++;
        questionTimer();
        console.log("Next question")

    }

    else if (gameTimer === 0 && questionCounter + 1 === questionBank.length) {
        timerEnd();
        console.log("No more questions remaining")
    }
}

function timerEnd() {
    clearInterval(intervalID);
    // questionCounter++;
    // displayQuestion();
}
questionTimer()

//TIMER FUNCTIONS ABOVE