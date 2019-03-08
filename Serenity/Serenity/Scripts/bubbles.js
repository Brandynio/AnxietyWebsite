let canvasHeight = 500;
let canvasWidth = 1500
let bubbleArr = [];
var cont = document.getElementById('bubbleCont');

function setup() {
    console.log("Why arent you fucking working?")
    createCanvas(canvasWidth, canvasHeight);
    let randRad = 0;
    for (let i = 0; i < 15; i++) {
        randRad = Math.floor(Math.random() * (40-20) + 20);
        bubbleArr.push(new Bubble(Math.floor(Math.random() * canvasWidth), canvasHeight + randRad + (i * 100), randRad));
    }
}

function draw() {
    background(0);
    bubbleArr.forEach(function(el) {
        el.move();
        el.show();
    });

    // for (var i = 0; i < nums.length; i++) {
    //     stroke(255);
    //     fill(51);
    //     ellipse(i * 100 + 100, 200, nums[i], nums[i]);
    // }
    // ellipse(100, 200, nums[0], nums[0]);
    // ellipse(200, 200, nums[1], nums[1]);
    // ellipse(300, 200, nums[2], nums[2]);
    // ellipse(400, 200, nums[3], nums[3]);
}

function mousePressed() {
    for (let i = 0; i < bubbleArr.length; i++) {
        let rem = bubbleArr[i].contains(mouseX, mouseY);
        if(rem) {
            bubbleArr.splice(i, 1);
            let rand = Math.floor(Math.random() * (40-20) + 20);
            bubbleArr.push(new Bubble(Math.floor(Math.random() * canvasWidth), canvasHeight + rand, rand));
        }
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    contains(pX, pY) {
        let d = dist(pX, pY, this.x, this.y);
        if (d < this.r) {
            return true;
        }
        else {
            return false;
        }
    }
    move() {
        let direction = Math.floor(Math.random() * 2);
        if (direction == 0) {
            this.x -= 1;
        }
        else {
            this.x += 1;
        }
        if (this.y < 0-this.r*2) {
            this.y = canvasHeight;
            this.x = Math.floor(Math.random() * canvasWidth);
        }
        else {
            this.y -= 2;
        }
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
}