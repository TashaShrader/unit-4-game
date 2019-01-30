$(document).ready(function() {


    var total = 0;
    var wins = 0;
    var losses = 0;
    let random = " " + Math.floor(Math.random() * 101);
    let firstButton = " " + Math.floor(Math.random() * 11);

    console.log(random);
    $('#randomNumber').html(random);


    $('#img1').on("click", function() {  
    console.log(firstButton);
    var total = firstButton;
 
    console.log(total);
    });

      
if (total === randomNumber) {
    wins++;
    $("#wins").html("wins: ", wins);
}
else {
    losses++;
    $("#losses").html("losses: ", losses);
}
    
});

