/*
dice colors:
-make letters for 1s and 5s show up green
-make dice you've already kept change color or turn grey
-make dice you've already kept move to bottom?
-right click (mouseButton === RIGHT) to undo crossing out dice

scoring:
-use only initials
-need "keep" and "roll" buttons below the dice
    -Create functions that then get  called if you click within space or make fully fledged buttons?
-create an array with the scores so it knows to display the numbers?
    -add each round's score to the array, then display the sum

    
How to make this all object-oriented to cut down on complexity???
*/

textAlign(CENTER, CENTER);
var diceSize = 50;

background (255, 255, 255);
fill(0, 0, 0);


var answer = round(random(0, 6));

for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        fill(0, 0, 0);
        rect(30 + i*70, 20 + j*70, diceSize, diceSize);
        fill(0, 255, 55);
        var answer = floor(random(1, 7));
        textSize(21);
        text(answer, 55 + i*70, 47 + j*70);
    }
}

fill(0, 0, 0);
line(200, 0, 200, 400);
line(200, 40,400, 40);
for (var k = 0; k < 3; k++) {
    line(250 + k * 50, 0, 250 + k * 50, 400);
}
text("A", 225, 25);
text("C", 276, 25);
text("S", 325, 25);
text("W", 376, 25);


mouseClicked = function () {
  if (mouseX < 145 && mouseX > 20 && mouseY < 205) {
      noFill();
      stroke(255, 0, 0);
      strokeWeight(6);
      line(mouseX + 15, mouseY - 15, mouseX - 15, mouseY + 15);
      ellipse(mouseX, mouseY, 30, 30);
  } else if (mouseX > 200 && mouseX < 250) {
    text(mouseX, 225, mouseY);  
  } else if (mouseX > 250 && mouseX < 300) {
    text(mouseX, 275, mouseY); 
  } else if (mouseX > 300 && mouseX < 350) {
    text(mouseX, 325, mouseY); 
  } else if (mouseX > 350 && mouseX < 400) {
    text(mouseX, 375, mouseY); 
  }
};

