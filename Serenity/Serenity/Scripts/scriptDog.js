function createDivs() {
    var CssCall = document.createElement("link");
    document.head.append(CssCall);
    CssCall.innerHTML += "<link rel='stylesheet' type='text/css' href='/Content/Site.css'/>";
    var newDiv = document.createElement("div");
    document.body.append(newDiv);
    newDiv.innerHTML = "<div id='area' class='area'>";
    newDiv.innerHTML += "<div id='dog' class='area'></div>"
    newDiv.innerHTML += "<div id='button' class='area'>"
        + "<button onclick='pet()'>Pet the Dog!</button></div>"
    newDiv.innerHTML += "</div>";
    start();
}

function start() {
    var stuff = "";
    var area = document.getElementById("dog");
    stuff += "<img src='/Content/pictures/dogBeforePet.png'/>";
    area.innerHTML = stuff;
}

function pet() {
    var stuffD = "";
    var stuffB = "";
    var dog = document.getElementById("dog");
    dog.innerHTML = null;
    var button = document.getElementById("button");
    button.innerHTML = null;
    stuffD += "<img src='/Content/pictures/dogPet.gif'/>"
    dog.innerHTML = stuffD;
    stuffB += "<button onclick='stop()'>Stop petting</button>";
    button.innerHTML = stuffB;
}

function stop(){
    var stuffD = "";
    var stuffB = "";
    var dog = document.getElementById("dog");
    dog.innerHTML = null;
    var button = document.getElementById("button");
    button.innerHTML = null;
    stuffD += "<img src='/Content/pictures/dogPet.gif'/>"
    dog.innerHTML = stuffD;
    stuffB += "<button onclick='pet()'>Pet the Dog!</button>";
    button.innerHTML = stuffB;
    start();
}

createDivs();