var opacityM = 0;
var opacityV = 0;
var opacityR = 0;
var opacityE = 0;
var bg = 0;
var notext;
var counter = 0;
var voyageFlag = 0;
var releaseFlag = 0;
var faderate = 350;

function intro() {
  //setInterval(background(0), 5000);
  //must pass setInterval a function or it'll glitch
  textAlign(CENTER);
  textLeading(30);
  background(bg);
  if (bg == bare) {
    image(plaque, 0, 0, 540, 720);
    textFont(greatlakes);
    textSize(74);
    fill(255, 255, 255);
    text('the last of us', 267, 300);
  }
  textFont(futura);
  textSize(20);
  fill(255, 255, 255, opacityM);
  text('The makers of the smash hit series Uncharted present', 270, 50);
  //setInterval(incOpacityM(), faderate);
  if (opacityM < 255) opacityM++;
  if (counter < 9000) counter++;
  
  if (counter == 500) bareBackground(); //500
  if (counter == 860) voyageFlag = 1;
  if (voyageFlag == 1) writeVoyage();
  if (counter == 1100) releaseFlag = 1;
  if (releaseFlag == 1) writeRelease();
  if (counter == 1340) scene = 1;

  if (keyCode == 32) {
    scene = 1;
  }
}

function bareBackground() { 
  bg = bare;   
  chord.play();
}

function writeVoyage() {
  textSize(25);
  //dimensions 540x720
  fill(255, 255, 255, opacityV);
  if (opacityV < 255) opacityV++;
  text('An interstellar               through time and space begins with you.', 25, 580, 490)
  text('voyage', 220, 580)
}

function writeRelease() {
  textSize(21);  
  fill(255, 255, 255, opacityR);
  //setInterval(incOpacityR(), faderate);
  if (opacityR < 255) opacityR++;
  text('6 | 14 | 73', 270, 650);
}

