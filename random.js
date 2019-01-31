var counter = 0;
var numberOptions = [1,2,3,4,5,6,7,8,9,10];
var increment = numberOptions[Math.round(Math.random()*11)];
var firstButton = " " + Math.floor(Math.random() * 11);


$('#img1').on("click", function() {  
console.log(firstButton);
counter += increment;
console.log(counter);
$('#playerNumber').html(counter);
})




