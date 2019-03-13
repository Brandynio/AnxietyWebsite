var mainTxt = document.getElementById('mainText');
var subTxt = document.getElementById('subText');
var contTxt = document.getElementById('contText');
var cont = document.getElementById('contBtn');
var rate = document.getElementById('rate');
var rateCont = document.getElementById('rateCont');

mainTxt.style = "opacity: 1;";
subTxt.style = "opacity: 1;";
cont.style = "opacity: 1;";

cont.addEventListener('click', sight);

function sight() {
    mainTxt.style = "opacity: 0;";
    subTxt.style = "opacity: 0;";
    cont.style = "opacity: 0;";
    setTimeout(function(){
        sightFadeIn();

    }, 6000);
}

function sightFadeIn() {
    mainTxt.innerHTML = "Sight";
    subTxt.innerHTML = "Look around for 5 things in the room that you can see"
    cont.innerHTML = "Continue";
    mainTxt.style = "opacity: 1;";
    subTxt.style = "opacity: 1;";
    contTxt.style = "opacity: 1;";
    cont.style = "opacity: 1;";
    cont.removeEventListener('click', sight);
    cont.addEventListener('click', feel);
}

function feel() {
    mainTxt.style = "opacity: 0;";
    subTxt.style = "opacity: 0;";
    contTxt.style = "opacity: 0;";
    cont.style = "opacity: 0;";
    setTimeout(function(){
        feelFadeIn();

    }, 6000);
}

function feelFadeIn() {
    mainTxt.innerHTML = "Touch";
    subTxt.innerHTML = "Reach out and touch 4 things in the room around you";
    mainTxt.style = "opacity: 1;";
    subTxt.style = "opacity: 1;";
    contTxt.style = "opacity: 1;";
    cont.style = "opacity: 1;";
    cont.removeEventListener('click', feel);
    cont.addEventListener('click', listen);
}

function listen() {
    mainTxt.style = "opacity: 0;";
    subTxt.style = "opacity: 0;";
    contTxt.style = "opacity: 0;";
    cont.style = "opacity: 0;";
    setTimeout(function(){
        listenFadeIn();

    }, 6000);
}

function listenFadeIn() {
    mainTxt.innerHTML= "Hear";
    subTxt.innerHTML = "Listen and identify 3 things in the room you can hear";
    mainTxt.style = "opacity: 1;";
    subTxt.style = "opacity: 1;";
    contTxt.style = "opacity: 1;";
    cont.style = "opacity: 1;";
    cont.removeEventListener('click', listen);
    cont.addEventListener('click', smell);
}

function smell() {
    mainTxt.style = "opacity: 0;";
    subTxt.style = "opacity: 0;";
    contTxt.style = "opacity: 0;";
    cont.style = "opacity: 0;";
    setTimeout(function(){
        smellFadeIn();

    }, 6000);
}

function smellFadeIn() {
    mainTxt.innerHTML = "Smell";
    subTxt.innerHTML = 'Inhale and identify 2 things you can smell in the room';
    mainTxt.style = "opacity: 1;";
    subTxt.style = "opacity: 1;";
    contTxt.style = "opacity: 1;";
    cont.style = "opacity: 1;";
    cont.removeEventListener('click', smell);
    cont.addEventListener('click', taste);
}

function taste() {
    mainTxt.style = "opacity: 0;";
    subTxt.style = "opacity: 0;";
    contTxt.style = "opacity: 0;";
    cont.style = "opacity: 0;";
    setTimeout(function(){
        tasteFadeIn();

    }, 6000);
}

function tasteFadeIn() {
    mainTxt.innerHTML = 'Taste';
    subTxt.innerHTML = "Identify one thing you can taste. Note: Please don't lick something random.";
    mainTxt.style = "opacity: 1;";
    subTxt.style = "opacity: 1;";
    contTxt.style = "opacity: 1;";
    cont.style = "opacity: 1;";
    cont.removeEventListener('click', taste);
    cont.addEventListener('click', rate);
}

function rate() {
    console.log('rate entered');
    //How are we storing ratings?
    document.getElementById('activity').style = 'display: none;';
    setTimeout(function(){
        rate.style = 'display: contents;';
        rateCont.addEventListener('click', end);
    }, 6000);
}

function end() {
    window.location.href = 'index.html';
}