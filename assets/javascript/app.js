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


// This function sets the timer per each question and sets up each of the buttons and appropriate html IDs with proper values.
function questionTimer(){
    gameTimer = 10;
    clearInterval(intervalID);
    intervalID = setInterval(gamePace, 1000);
    $("#correct").html(correctCounter);
    $("#incorrect").html(missedCounter);
    $("#question").html(questionBank[questionCounter].question);
    $("#answerOne").html(questionBank[questionCounter].answers.answer1);
    $("#answerOne").on("click", compareAnswer);
    $("#answerTwo").html(questionBank[questionCounter].answers.answer2);
    $("#answerTwo").on("click", compareAnswer);
    $("#answerThree").html(questionBank[questionCounter].answers.answer3);
    $("#answerThree").on("click", compareAnswer);
    $("#answerFour").html(questionBank[questionCounter].answers.answer4);
    $("#answerFour").on("click", compareAnswer);
    $("#answerFive").html(questionBank[questionCounter].answers.answer5);
    $("#answerFive").on("click", compareAnswer);

}

// This function gradually decreases the timer and consistently updates the page and calls this same function to decrease the timer. 
function gamePace() {
    gameTimer--;
    $("#display").html("<h2>"+ "Time remaining: " + gameTimer + " seconds </h2>");
    // gameProgressCheck();
    if(gameTimer === 0) {
        clearInterval(intervalID);
        answerTimer();
    }
}
// When a scenario occurs where the timer is no longer needed, this function will end the timer. 
function timerEnd() {
    console.log("Got to timerEnd function")
    clearInterval(intervalID);
}

// These next two functions are a separate timer for the answer when it is displayed.
function displayAnswer() {
    if (questionCounter + 1 < questionBank.length) {
        aTime--;
        console.log(aTime);
        $("#display").html("<h2>" + "Time remaining: " + aTime + " seconds </h2>");
        $("#question").html("The correct answer is " + questionBank[questionCounter].correctAnswer)
        
        if (aTime === 0) {
            console.log("Went through first conditional")
            questionCounter++;
            clearInterval(intervalID)
            questionTimer();
        }
    }
    else if (questionCounter + 1 === questionBank.length) {
        console.log("Went through second conditional")
        $("#question").html("The correct answer is " + questionBank[questionCounter].correctAnswer)
        timerEnd();
        console.log("No more questions remaining")
    }
}
    // if (aTime === 0) {
    //     if (questionCounter + 1 < questionBank.length) {
    //         console.log("Went through first conditional")
            // questionCounter++;
            // clearInterval(intervalID)
            // questionTimer();
        // }

        // else if (questionCounter + 1 === questionBank.length) {
        //     console.log("Went through second conditional")
        //     clearInterval(intervalID)
        //     console.log("No more questions remaining")
        // }
//     }
// }

function answerTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(displayAnswer, 1000);
}

// function questionAvailable() {
//     if (questionCounter + 1 < questionBank.length) {
//         questionCounter++;
//         clearInterval(intervalID)
//         questionTimer();
//     }

//     else if (questionCounter + 1 === questionBank.length) {
//         timerEnd();
//         console.log("No more questions remaining")
//     }
// }

// This function checks to see if there's any more questions to cycle through. If there are no more remaining questions, it will end the game. 
// function gameProgressCheck() {
//     // Situation 2: For the next two conditional statements, if the user does not input any answer, it will show the answer and either move on to the next question or end the game.
//     if(gameTimer === 0) {
//         clearInterval(intervalID);
//         answerTimer();
//         // setTimeout(questionTimer, 1000*5);
//         // console.log("Next question")
//     }

//     else if (gameTimer === 0 && questionCounter + 1 === questionBank.length) {
//         clearInterval(intervalID);
//         answerTimer();
//         // setTimeout(questionTimer, 1000*5);
//         // timerEnd();
//         // console.log("No more questions remaining")
//     }
//     // 
//     // else if(gameTimer !=0 && questionCounter + 1 === questionBank.length) {
//     //     clearInterval(intervalID);
//     //     // setTimeout(questionTimer, 1000*5);
//     //     answerTimer();
//     //     questionCounter++;
//     //     console.log("Next question")
//     // }
// }



// Situation 1: If the user inputs an answer before the question timer runs out, the function will compare the answer and increment the appropriate counter as needed.
function compareAnswer () {
    if (gameTimer != 0 && result === questionBank[questionCounter].correctAnswer) {
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

questionTimer()

//TIMER FUNCTIONS ABOVE