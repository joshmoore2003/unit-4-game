// variables for each section
var randomNumber = "";
var imagesrc = ["./assets/images/red_crystal.jpg", "./assets/images/blue_crystal.jpg", "./assets/images/yellow_crystal.jpg", "./assets/images/green_crystal.jpg"];
var wins = 0;
var losses = 0;
var counter = 0;

// have random computer number generated
function randomTargetNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 22;
    $("#random-number").append(randomNumber);
}

// console.log(randomComputerNumber);

//push random number into img div

function numberIntoCrystals() {
    for (var i = 0; i < imagesrc.length; i++) {
        var crystal = $("<img>");
        crystal.attr("src", imagesrc[i]);
        crystal.attr("value", (Math.floor(Math.random() * 15) + 1));
        crystal.addClass("crystal-image");
        $("#crystals").append(crystal);
    }
}

// create reset function
function newGame() {
    $("#random-number").html(randomNumber);
    wins = 0;
    losses = 0;
    counter = 0;    
    $("#users-score").html(counter);
    $("#crystals").empty();
}

function resetHTML() {
    $("#random-number").html(randomNumber);
    counter = 0;    
    $("#users-score").html(counter);
    $("#crystals").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML ();
    numberIntoCrystals();
}

//Start new game
newGame();
numberIntoCrystals();
randomTargetNumber();

//When crystal has been clicked, push to id users-score
function crystalClick () {
    //attr returns first value of selected html element
    counter += parseInt($(this).attr("value"));
    $("#users-score").html(counter);
    if (counter == randomNumber) {
        wins++;
        totalReset();
        alert("You Won! Would you like to play again?");
        $("#wins").text(wins);
    }
    else if (counter > randomNumber) {
        losses++;
        totalReset();
        alert("Game Over. Would you like to play again?")
        $("#losses").text(losses);
    };
};


//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
$(document).on("click", ".crystal-image", crystalClick);