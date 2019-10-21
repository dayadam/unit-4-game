$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let score = 0;
    function generateRandomNumber() {
        return (Math.floor(Math.random()*(120-19+1))+19);
    }
    function gemNumber() {
        return (Math.floor(Math.random()*12)+1);
    }
    let randomNumber = generateRandomNumber();
    let redGem = gemNumber();
    let blueGem = gemNumber();
    let pinkGem = gemNumber();
    let greenGem = gemNumber();



    $(".random-number").text(randomNumber);

    $(".gem").on("click", function () {
        if ($(this).hasClass("red-gem")) {
            score += redGem;
        }
        if ($(this).hasClass("blue-gem")) {
            score += blueGem;
        }
        if ($(this).hasClass("pink-gem")) {
            score += pinkGem;
        }
        if ($(this).hasClass("green-gem")) {
            score += greenGem;
        }
        if (score >= randomNumber) {
            if (score === randomNumber) {
                wins++;
                $(".wins").text(wins);
                $(".win-or-lose").text("You won!");
            } else {
                losses++;
                $(".losses").text(losses);
                $(".win-or-lose").text("You lost!");
            }
            score = 0;
            randomNumber = generateRandomNumber()
            redGem = gemNumber();
            blueGem = gemNumber();
            pinkGem = gemNumber();
            greenGem = gemNumber();
            $(".random-number").text(randomNumber);
        }
        $(".score").text(score);
    });
});
