var stepIndct = 0;
var steptitle = ['Step 1: Prepare','Step 2: Breaths practice','Step 3: Breaths Directions','Step 4: Thought Directions','Step 5: Combination'];
var stepDesc = ["sit and let your arms rest, either on your thighs or on your sides",
"Take a 5 second breath in and exhale for 5 seconds",
"When breathing, make sure your stomach rises and falls as you breathe",
"Think of a place where you want to be, think of the sounds, think of the smells, think of the noises",
"Finally, close your eyes, relax, and combine all the steps. Do this for 10-15 minutes or until you feel loose and calm"];

function SetUp(){
    var ActivityBox = document.createElement("div");
    var FadeArea = document.createElement("div");
    var DirectionHeader = document.createElement("p");
    var DirectionBody = document.createElement("p");
    var ContButton = document.createElement("button");
    ActivityBox.id = "ActivityBox";
    FadeArea.id = "FadeArea"
    DirectionHeader.id = "DirectionHeader";
    DirectionBody.id = "DirectionBody";
    ContButton.id = "ContButton";
    ContButton.innerHTML = "Start Activity"
    var nodeHead = document.createTextNode("Welcome To Belly Breathing");
    var nodeBody = document.createTextNode("Belly breathing is a way to relax yourself by doing the most natural thing to all, breathing!");

    DirectionHeader.appendChild(nodeHead);
    DirectionBody.appendChild(nodeBody);
    FadeArea.appendChild(DirectionHeader);
    FadeArea.appendChild(DirectionBody);
    ActivityBox.appendChild(FadeArea);
    ActivityBox.appendChild(ContButton);
    document.body.appendChild(ActivityBox);
}

function startActivity(){
    document.getElementById("ContButton").innerHTML="Next Step";
    if(stepIndct > 4){
        stepIndct = 0
    }
    document.getElementById('DirectionHeader').style.fadein
    document.getElementById('DirectionHeader').innerHTML = steptitle[stepIndct];
    document.getElementById('DirectionBody').innerHTML = stepDesc[stepIndct];
    if(stepIndct > 3){
        document.getElementById("ContButton").innerHTML="Restart";
    }
    stepIndct += 1;
}

$(document).ready(function(){
    $("#ContButton").click(function(){
        $("#FadeArea").fadeOut(1900);
        timer = setInterval(function(){
            startActivity()
            $("#FadeArea").fadeIn(1800)
            clearInterval(timer);
        }, 1800)
    });
});

SetUp();