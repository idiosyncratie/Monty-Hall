/**********************************************************
 * 
 * Monty Hall Problem Beta
 * You are on game show, and you're given the choice of three chests: A, B, C
 * in one chest is a gem; in the others, rocks. 
 * You pick chest A, and the host, who knows what's in the chests, 
 * opens another chest, B or C, which has a rock. 
 * He says to you, "Do you want to stay or switch?" 
 * Is it to your advantage to switch your choice? 
 * credit to Peter Collingridge (https://www.khanacademy.org/cs/play-monty-hall  * /1276160545) for code samples
***********************************************************/

// Visualization
var back = getImage("space/background");
var ground = getImage("cute/GrassBlock");
var chestClose = getImage("cute/ChestClosed");
var chestOpen = getImage("cute/ChestOpen");
var gem = getImage("cute/GemBlue");
var rock = getImage("cute/Rock");
var currentScene = "0"; 

//buttons
var button1 = {
    x: 140, 
    y: 100,
    width: 150,
    height: 50
};
var btnA = {
    x: 30,
    y: 190,
    width: 80,
    height: 30
};
var btnB = {
    x: 160,
    y: 190, 
    width: 80,
    height: 30
};
var btnC = {
    x: 290,
    y: 190,
    width: 80, 
    height: 30
};

var nextA1 = {
    x: 160,
    y: 200,
    width: 60,
    height: 30
};

var nextA2 = {
    x: 290,
    y: 150,
    width: 60,
    height: 30
};

var nextB1 = {
    x: 170,
    y: 150,
    width: 60,
    height: 30
};

var nextB2 = {
    x: 170,
    y: 170,
    width: 60,
    height: 30
};

var nextC1 = {
    x: 170,
    y: 170,
    width: 60,
    height: 30
};

var nextC2 = {
    x: 170,
    y: 200,
    width: 60,
    height: 30
};
var nextA3B3C3 = {
    x: 170,
    y: 350,
    width: 60,
    height: 30
};

var returnbtn = {
    x : 35,
    y: 10,
    width: 340,
    height: 30
};

var finalbtn = {
    x: 290,
    y: 360, 
    width: 60,
    height: 30
};
var startover = {
    x: 270,
    y: 300, 
    width: 125,
    height: 30
};

var drawButton = function(btn){
    fill(115, 110, 110);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(227, 223, 223);
    var font = createFont("impact");
    var font1 = createFont("monospace");
    textAlign(LEFT, TOP);
    if (btn === button1){
        textFont(font, 25);
        text("EXPLANATION", btn.x + 10, btn.y + btn.height/4);
    }
    if (btn === btnA){
        textFont(font, 18);
        text("Choice A", btn.x + 8, btn.y + btn.height/4);
    }
    if (btn === btnB){
        textFont(font, 18);
        text("Choice B", btn.x + 8, btn.y + btn.height/4);
    }
    if (btn === btnC){
        textFont(font, 18);
        text("Choice C", btn.x + 8, btn.y + btn.height/4);
    }
    if (btn===nextA1 || btn===nextA2 || btn===nextA3B3C3 || btn===nextB1 || btn===nextB2 || btn===nextC1 || btn===nextC2 || btn===finalbtn) {
        textFont(font1, 18);
        text("Next", btn.x + 8, btn.y + btn.height/4);
    }
    if (btn === returnbtn) {
        textFont(font1, 18);
        text("Return to see the other chests", btn.x + 8, btn.y + btn.height/4);
    }
    else if (btn === startover) {
        textFont(font1, 18);
        text("Start Over", btn.x + 8, btn.y + btn.height/4);
    }
};

var isMouseInside = function(btn) {
    return (mouseX >= btn.x &&
            mouseX <= (btn.x+btn.width) &&
            mouseY >= btn.y && 
            mouseY <= (btn.y+btn.height));
};

var opening = function() {
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    for (var i = 0; i < 3; i++){
        image(chestClose, 30 + i*130, 200, 80, 130);
    } 
    var font = createFont("impact");
    textFont(font, 45);
    fill(0, 0, 0);
    text("Monty Hall Problem", 25, 40);
    drawButton(button1);
};
var choice = function() {
    currentScene = "0"; 
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestClose, 160, 200, 80, 130); // B
    image(chestClose, 290, 200, 80, 130); // C
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("There are six possible results from staying or switching after initially picking chest A. The player could stay with the initial choice or switch to B or C. \n The prize has a 1/3 chance of being in chest A, and a 2/3 chance of being in either B or C. \n Click on each chest to see an explanation for its probability from containing the prize. ", 10, 10, 400, 400);
    drawButton(btnA);
    drawButton(btnB);
    drawButton(btnC);
};

var chestA = function() {
    currentScene = "A";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestOpen, 30, 200, 80, 130); // A
    image(gem, 30, 210, 80, 90); //rock
    image(chestClose, 160, 200, 80, 130); // B
    image(chestClose, 290, 200, 80, 130); // C
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("A is initially selected. We made the assumption that the prize is in chest A. This leads to 2 possibilities.  ", 10, 10, 400, 400);
    drawButton(nextA1);
};

var chestA1 = function() {
    currentScene = "A1";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestOpen, 30, 200, 80, 130); // A
    image(gem, 30, 210, 80, 80); //gem
    image(chestOpen, 160, 200, 80, 130); // B
    image(rock, 160, 210, 80, 90);//rock
    image(chestClose, 290, 200, 80, 130); // C
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The first possibility is that the prize is hidden in chest A. The player initially picks chest A, and the host randomly opens chest B. \n This has a 1/6 probability  ", 10, 10, 400, 400);
    drawButton(nextA2);
    strokeWeight(10);
    line(200, 140 ,200, 190);
    triangle(195, 190 ,205, 190, 200, 200);
};

var chestA2 = function() {
    currentScene = "A2";
    strokeWeight(1);
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestOpen, 30, 200, 80, 130); // A
    image(gem, 30, 210, 80, 90); //rock
    image(chestClose, 160, 200, 80, 130); // B
    image(chestOpen, 290, 200, 80, 130); // C
    image(rock, 290, 210, 80, 90);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The second possibility is that the prize is hidden in chest A. The player initially picks chest A, and the host randomly opens chest C. \n This has a 1/6 probability  ", 10, 10, 400, 400);
    strokeWeight(10);
    line(330, 140 ,330, 190);
    triangle(325, 190 ,335, 190, 330, 200);
    strokeWeight(1);
    drawButton(nextA3B3C3);
};

var chestB = function() {
    currentScene = "B";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestOpen, 160, 200, 80, 130); // B
    image(gem, 160, 210, 80, 90); //rock
    image(chestClose, 290, 200, 80, 130); // C
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("A is initially selected. We made the assumption that the prize is in chest B. This would normally lead to 2 possibilities, but the trick to the Monty Hall problem lies in the behavior of the host.  ", 10, 10, 400, 400);
    drawButton(nextB1);
};

var chestB1 = function() {
    currentScene = "B1";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestOpen, 160, 200, 80, 130); // B
    image(gem, 160, 220, 70, 70); //rock
    image(chestOpen, 290, 200, 80, 130); // C
    image(rock, 290, 210, 80, 90);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The first possibility is that the prize is hidden in chest B. The player initially picks chest A, and the host randomly opens chest C. \n This has a 1/6 probability  ", 10, 10, 400, 400);
    strokeWeight(10);
    line(330, 140 ,330, 190);
    triangle(325, 190 ,335, 190, 330, 200);
    strokeWeight(1);
    drawButton(nextB2);
};

var chestB2 = function() {
    currentScene = "B2";
    strokeWeight(1);
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestOpen, 160, 200, 80, 130); // B
    image(gem, 160, 210, 80, 80); //rock
    image(chestOpen, 290, 200, 80, 130); // C
    image(rock, 290, 210, 80, 90);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The second possibility has the prize is hidden in chest B. The player initially picks chest A. \n Typically, the host should open chest B since in the previous instance, he opened chest C. However, B contains the prize, so he cannot. Thus, he again opens chest C. \n This also has a 1/6 probability.", 10, 10, 400, 400);
    strokeWeight(10);
    stroke(255, 0, 0);
    line(160, 240, 240, 330);
    line(240, 240, 160, 330);
    stroke(0, 0, 0);
    line(330, 140 ,330, 190);
    triangle(325, 190 ,335, 190, 330, 200);
    strokeWeight(1);
    drawButton(nextA3B3C3);
};

var chestC = function() {
    currentScene = "C";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestClose, 160, 200, 80, 130); // B
    image(chestOpen, 290, 200, 80, 130); // C
    image(gem, 290, 210, 80, 80); //rock
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("A is initially selected. We made the assumption that the prize is in chest C. This would normally lead to 2 possibilities, but again, the trick to the Monty Hall problem lies in the behavior of the host.  ", 10, 10, 400, 400);
    drawButton(nextC1);
};

var chestC1 = function() {
    currentScene = "C1";
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestOpen, 160, 200, 80, 130); // B
    image(rock, 160, 210, 80, 90); //rock
    image(chestOpen, 290, 200, 80, 130); // C
    image(gem, 290, 210, 80, 80);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The first possibility is that the prize is hidden in chest C. The player initially picks chest A, and the host randomly opens chest B. \n This has a 1/6 probability. ", 10, 10, 400, 400);
    strokeWeight(10);
    stroke(0, 0, 0);
    line(330, 140 ,330, 190);
    triangle(325, 190 ,335, 190, 330, 200);
    strokeWeight(1);
    drawButton(nextC2);
};

var chestC2 = function() {
    currentScene = "C2";
    strokeWeight(1);
    image(back, 0, 0); //background
    //grass
    for (var i=0; i<5; i++){
        image (ground, -5 + 80*i, 240);
    }
    //chests
    image(chestClose, 30, 200, 80, 130); // A
    image(chestOpen, 160, 200, 80, 130); // B
    image(rock, 160, 210, 80, 80); //rock
    image(chestOpen, 290, 200, 80, 130); // C
    image(gem, 290, 210, 80, 80);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("The second possibility has the prize is hidden in chest C. The player initially picks chest A. \n Typically, the host should open chest C since in the previous instance, he opened chest B. However, B contains the prize, so he cannot. Thus, he again opens chest B. \n This also has a 1/6 probability.", 10, 10, 400, 400);
    strokeWeight(10);
    stroke(255, 0, 0);
    line(290, 240, 370, 330);
    line(370, 240, 290, 330);
    stroke(0, 0, 0);
    line(200, 160 ,200, 210);
    triangle(195, 210 ,205, 210, 200, 220);
    strokeWeight(1);
    drawButton(nextA3B3C3);
};

var overview = function() {
    currentScene = "overview";
    image(back, 0, 0); //background
    drawButton(returnbtn);
    var font = createFont("impact");
    var font1 = createFont("monospace");
    textFont(font, 20);
    fill(0, 0, 0);
    text("OVERVIEW OF POSSIBLE ACTIONS", 25, 45);
    fill(255, 255, 255);
    textFont(font1, 25);
    text("A", 25, 85);
    text("B", 25, 185);
    text("C", 25, 285);
    text("1/6", 300, 125);
    for (var i=0; i<6; i++) {
        text("1/6", 300, 75+ i*50);
    }
    //case1-A
    image(chestOpen, 55, 55, 30, 55); // A
    image(gem, 57, 64, 25, 25); //gem
    image(chestClose, 145, 55, 30, 55); // B
    image(chestOpen, 235, 55, 30, 55); // C
    image(rock, 235, 60, 30, 35); //rock
    //case2-A
    image(chestOpen, 55, 105, 30, 55); // A
    image(gem, 57, 114, 25, 25); //gem
    image(chestOpen, 145, 105, 30, 55); // B
    image(rock, 145, 105, 30, 35); //rock
    image(chestClose, 235, 105, 30, 55); // C
    //case1-B
    image(chestClose, 55, 155, 30, 55); // A
    image(chestOpen, 145, 155, 30, 55); // B
    image(gem, 147, 164, 25, 25); //gem
    image(chestOpen, 235, 155, 30, 55); // C
    image(rock, 235, 160, 30, 35); //rock
    //case2-B
    image(chestClose, 55, 205, 30, 55); // A
    image(chestOpen, 145, 205, 30, 55); // B
    image(gem, 147, 214, 25, 25); //gem
    image(chestClose, 235, 205, 30, 55); // C
    image(rock, 235, 205, 30, 35); //rock
    //case1-C
    image(chestClose, 55, 255, 30, 55); // A
    image(chestOpen, 145, 255, 30, 55); // B
    image(rock, 145, 260, 30, 35); // rock
    image(chestOpen, 235, 255, 30, 55); // C
    image(gem, 237, 260, 25, 25); //gem
    //case2-C
    image(chestClose, 55, 305, 30, 55); // A
    image(chestOpen, 145, 305, 30, 55); // B
    image(rock, 145, 305, 30, 35); //rock
    image(chestOpen, 235, 305, 30, 55); // C
    image(gem, 237, 305, 25, 25); //gem
    
    drawButton(finalbtn);
};

var final = function() {
    currentScene = "final";
    image(back, 0, 0);
    var font = createFont("monospace");
    textFont(font, 15);
    fill(255, 255, 255);
    text("Note that the possibilities for chest B and chest C are identical. (1/6 + 1/6 = 1/3) \n From the possible arrangements shown, we see that we should stay when the prize is in chest A and switch when the gem is in chest B or chest C.\n A way of understanding the problem is that the gem has a 1/3 chance of being behind the player's pick and a 2/3 chance of being in one of the other 2 chests. \nThus, ", 10, 10, 400, 400);
    textSize(25);
    stroke(255, 255, 255);
    strokeWeight(5);
    text("STAY: 1/6 + 1/6 = 1/3", 30, 215);
    text("SWITCH: 1/3 + 1/3 = 2/3", 30, 250);
    image(rock, 102 ,297, 44, 40);
    image(rock, 255 ,336, 44, 40);
    image(chestOpen, 165 ,246, 73, 120);
    image(gem, 172 ,265, 58, 73);
    stroke(0, 0, 0);
    strokeWeight(1);
    drawButton(startover);
};
    
mouseClicked = function() {
    if(isMouseInside(button1)) {
        choice();
    }
    if(isMouseInside(btnA) && currentScene==="0") {
        chestA();
    }
    else if(isMouseInside(btnB) && currentScene==="0") {
        chestB();
    }
    else if(isMouseInside(btnC) && currentScene==="0") {
        chestC();
    }
    if(isMouseInside(nextA1) && currentScene==="A") {
        chestA1();
    }
    else if (isMouseInside(nextA2) && currentScene==="A1") {
        chestA2();
    }
    else if (isMouseInside(nextA3B3C3) && currentScene==="A2") {
        overview();
    }
    if(isMouseInside(nextB1) && currentScene==="B") {
        chestB1();
    }
    else if (isMouseInside(nextB2) && currentScene==="B1") {
        chestB2();
    }
    else if (isMouseInside(nextA3B3C3) && currentScene==="B2") {
        overview();
    }
    if(isMouseInside(nextC1) && currentScene==="C") {
        chestC1();
    }
    else if (isMouseInside(nextC2) && currentScene==="C1") {
        chestC2();
    }
    else if (isMouseInside(nextA3B3C3) && currentScene==="C2") {
        overview();
    }
    if (isMouseInside(returnbtn) && currentScene==="overview") {
        choice();
    }
    if (isMouseInside(finalbtn) && currentScene ==="overview") {
        final();
    }
    else if (isMouseInside(startover) && currentScene ==="final") {
        opening();   
    }
    
};

final();
