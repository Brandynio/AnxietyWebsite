var stepIndct = 0;
var steptitle = ['Breath','Look around','Reflection','Focus','Wind Down'];
var stepDesc = ["Take a moment to breathe in and out for a minute or two. When breathing, take deep 5 seconds in and 5 seconds out.",
"Open your eyes and look around for a moment and answer these questions to yourself. Is there anything that can hurt me? Should I be alarmed? What is causing me to feel this way? What can I do to make it better?",
"If there is any danger or you simply do not feel safe, remove yourself from the area. Try to also identify the root of your anxiety. Identifying the source is one of the most helpful things to do in stressful situations.",
"Once you feel safer, look around the area and pay attention to every detail. Try to see something new that you did not notice before or think of a good memory that you may have had where you are.",
"Continue to take your focus off your issue and breath in slow breathes. If focusing on an item helped then continue to do so until you feel calm and ready to compose yourself."];

function SetUp(){
    var ActivityBox = document.createElement("div");
    var FadeArea = document.createElement("div");
    var DirectionHeader = document.createElement("h1");
    var DirectionBody = document.createElement("p");
    var ContButton = document.createElement("button");
    ActivityBox.id = "ActivityBox";
    FadeArea.id = "FadeArea"
    DirectionHeader.id = "DirectionHeader";
    DirectionBody.id = "DirectionBody";
    ContButton.id = "ContButton";
    ContButton.innerHTML = "Start Activity"
    var nodeHead = document.createTextNode("Immediate Help Activity");
    var nodeBody = document.createTextNode("Sometimes, things happen when we least expect it. This activity will take you through a couple of steps to help you calm down from an anxiety attack.");

    DirectionHeader.appendChild(nodeHead);
    DirectionBody.appendChild(nodeBody);
    FadeArea.appendChild(DirectionHeader);
    FadeArea.appendChild(DirectionBody);
    ActivityBox.appendChild(FadeArea);
    ActivityBox.appendChild(ContButton);
    document.body.appendChild(ActivityBox);
}

function startActivity(){
    document.getElementById("ContButton").innerHTML="Continue";
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