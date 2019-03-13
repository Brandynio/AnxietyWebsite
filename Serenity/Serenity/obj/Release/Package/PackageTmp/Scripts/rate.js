var helpYes = document.getElementById('helpYes');
var helpNo = document.getElementById('helpNo');
var rateOne = document.getElementById("rate1");
var rateTwo = document.getElementById("rate2");
var rateThree = document.getElementById("rate3");
var rateFour = document.getElementById("rate4");
var rateFive = document.getElementById("rate5");
var submitRate = document.getElementById("submitRating");

var help = false;
var rating = 0;

helpYes.addEventListener("click", function () {
    help = true;
});
helpNo.addEventListener('click', function () {
    help = false;
});

rateOne.addEventListener("click", function () {
    console.log("1 clicked");
    rating = 1;
    rateOne.style = "background: #999;";
    rateTwo.style.background='';
    rateThree.style.background = '';
    rateFour.style.background = '';
    rateFive.style.background = '';
});
rateTwo.addEventListener("click", function () {
    rating = 2;
    rateTwo.style = "background: #999;";
    rateOne.style.background = '';
    rateThree.style.background = '';
    rateFour.style.background = '';
    rateFive.style.background = '';
});
rateThree.addEventListener("click", function () {
    rating = 1;
    rateThree.style = "background: #999;";
    rateOne.style.background = '';
    rateTwo.style.background = '';
    rateFour.style.background = '';
    rateFive.style.background = '';
});
rateFour.addEventListener("click", function () {
    rating = 1;
    rateFour.style = "background: #999;";
    rateOne.style.background = '';
    rateTwo.style.background = '';
    rateThree.style.background = '';
    rateFive.style.background = '';
});
rateFive.addEventListener("click", function () {
    rating = 1;
    rateFive.style = "background: #999;";
    rateOne.style.background = '';
    rateTwo.style.background = '';
    rateThree.style.background = '';
    rateFour.style.background = '';
});