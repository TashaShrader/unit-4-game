$(document).ready(function () {

    var targetNumber = " " + Math.floor(Math.random() * 101);

    $('#randomNumber').html(targetNumber);


    var firstButton = " " + Math.floor(Math.random() * 11);
    var secondButton = " " + Math.floor(Math.random() * 11);
    var thirdButton = " " + Math.floor(Math.random() * 11);
    var fourthButton = " " + Math.floor(Math.random() * 11);
    var playerTotal = 0;
    var wins = 1;
    var losses = 1;

    console.log(firstButton);
    console.log(secondButton);
    console.log(thirdButton);
    console.log(fourthButton);

    function reset() {
        targetNumber = " " + Math.floor(Math.random() * 101);
        firstButton = " " + Math.floor(Math.random() * 11);
        secondButton = " " + Math.floor(Math.random() * 11);
        thirdButton = " " + Math.floor(Math.random() * 11);
        fourthButton = " " + Math.floor(Math.random() * 11);
        playerTotal = 0;
        $('#randomNumber').html(targetNumber);
    }


    function result() {

console.log(playerTotal, targetNumber);


        if (playerTotal === parseInt(targetNumber)) {
            reset();
            alert("you won!");
            $("#wins").html("wins: " + wins++);
            console.log(firstButton);
            console.log(secondButton);
            console.log(thirdButton);
            console.log(fourthButton);
        }

        else if (targetNumber < playerTotal) {
            reset();
            alert("you lost!")
            $("#losses").html("losses: " + losses++);
            console.log(firstButton);
            console.log(secondButton);
            console.log(thirdButton);
            console.log(fourthButton);
        }

    };





    $('#img1').on("click", function () {
        playerTotal = parseInt(playerTotal) + parseInt(firstButton);
        console.log(playerTotal);
        $('#player').html(playerTotal);
        result()
    })

    $('#img2').on("click", function () {
        playerTotal = parseInt(playerTotal) + parseInt(secondButton);
        console.log(playerTotal);
        $('#player').html(playerTotal);
        result();
    })


    $('#img3').on("click", function () {
        playerTotal = parseInt(playerTotal) + parseInt(thirdButton);
        console.log(playerTotal);
        $('#player').html(playerTotal);
        result();
    })

    $('#img4').on("click", function () {
        playerTotal = parseInt(playerTotal) + parseInt(fourthButton);
        console.log(playerTotal);
        $('#player').html(playerTotal);
        result();
    })



})







