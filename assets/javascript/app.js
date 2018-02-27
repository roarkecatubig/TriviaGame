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
var aTime = 6;
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
        gameProgessCheck();
    }

    else {
        console.log("You got it wrong")
        missedCounter++;
        questionCounter++;
        clearInterval(intervalID);
        gameProgressCheck();
    }
}

// function questionAvailable() {
//     if (questionCounter + 1 <= questionBank.length) {
//         questionTimer();
//     }

//     else {
//         timerEnd();
//         console.log("No more questions remaining")
//     }
// }

// QUESTION DISPLAY FUNCTIONS ABOVE

// TIMER FUNCTIONS BELOW
function displayAnswer() {
    aTime--;
    console.log(aTime);
    $("#display").html("<h2>" + "Time remaining: " + aTime + " seconds </h2>");
}

function answerTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(displayAnswer, 1000);
}

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

function gameProgressCheck() {
    if(gameTimer === 0 && questionCounter + 1 < questionBank.length) {
        clearInterval(intervalID);
        answerTimer();
        setTimeout(questionTimer, 1000*5);
        questionCounter++;
        console.log("Next question")
    }

    else if (gameTimer === 0 && questionCounter + 1 === questionBank.length) {
        clearInterval(intervalID);
        answerTimer();
        timerEnd();
        console.log("No more questions remaining")
    }

}

function gamePace() {
    gameTimer--;
    $("#display").html("<h2>"+ "Time remaining: " + gameTimer + " seconds </h2>");

    gameProgressCheck();
}

function timerEnd() {
    clearInterval(intervalID);
}
questionTimer()

//TIMER FUNCTIONS ABOVE