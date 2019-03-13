
function createDivs() {
    var CssCall = document.createElement("link");
    document.head.append(CssCall);
    CssCall.innerHTML += "<link rel='stylesheet' type='text/css' href='/Content/Site.css'/>";
    var newDiv = document.createElement("div");
    document.body.append(newDiv);
    newDiv.innerHTML = "<div id='area0' class='row'>";
    newDiv.innerHTML += "<div id='r0' class='r'></div>"
    newDiv.innerHTML += "<div id='c0' class='c'></div>"
    newDiv.innerHTML += "</div>";
    document.body.innerHTML += "<button onclick='reset()'>Reset vases!</button>"
    start();
}

function start() {
    var min = 1;
    var max = 6;
    var stuff = "";
    for (var j = 0; j < 4; j++) {
        var row = document.getElementById('r0');
        for (var i = 0; i < 5; i++) {
            var random = Math.floor(Math.random() * (+max - +min)) + +min;
            stuff += "<div onclick='breakV(" + i + ", " + random + ", " + j + ")' id = '" + j + "vase" + i + 
            "' class='vase' ><img src='/Content/pictures/Vase" + random + ".png'/></div>";
        }
        row.innerHTML = stuff;
    }
}

function breakV(num1, num2, num3) {
    document.getElementById(num3 + "vase" + num1).innerHTML = "<img src='/Content/pictures/BVase" + (num2) + ".png' //>"
}

function reset() {
    start();
}
createDivs();