var menux = 85;
var menuy = 265;
var hadfieldFlag = 0;

function menu() {
  background(bare);
  spaceship();
  
  textSize(20);
  fill(255, 255, 255);
  textFont(futura);
  textAlign(CENTER);
  text('The makers of the smash hit series Uncharted present', 270, 50);
  
  image(plaque, 0, 0, 540, 720);
  textSize(74);
  textFont(greatlakes);
  fill(255, 255, 255, 100);
  //rect(35, 235, 470, 67);
  if (mouseX >= 35 && mouseX <= 505 && mouseY >= 235 && mouseY <= 302) fill(244, 244, 244);
  else fill(255, 255, 255);
  text('the last of us', 267, 300);
  
  fill(255, 255, 255);
  textFont(futura);
  textSize(25);
  textLeading(30)
  text('An interstellar               through time and space begins with you.', 25, 580, 490);
  //rect(180, 562, 80, 25);
  if (mouseX >= 180 && mouseX <= 260 && mouseY >= 562 && mouseY <= 587) fill(225, 225, 225);
  else fill(255, 255, 255);
  textSize(25);
  text('voyage', 220, 580);
  
  textSize(21);
  fill(255, 255, 255);
  text('6 | 14 | 73', 270, 650);
}

function spaceship() {
  speed = 0.5
  if (hadfieldFlag == 0) fill(150,150,150);
  else (fill('yellow'));
  rect(menux, menuy, 7, 7);
  if (keyIsDown(RIGHT_ARROW)) menux += speed;
  if (keyIsDown(LEFT_ARROW)) menux -= speed;
  if (keyIsDown(UP_ARROW)) menuy -= speed;
  if (keyIsDown(DOWN_ARROW)) menuy+= speed;
}

function mouseClicked() {
  if (mouseX >= 35 && mouseX <= 505 && mouseY >= 235 && mouseY <= 302 && scene == 1) scene = 2;
  else if (mouseX >= 180 && mouseX <= 260 && mouseY >= 562 && mouseY <= 587 && scene == 1) scene = 3;
  else if (mouseX >= menux && mouseX <= menux+7 && mouseY >= menuy && mouseY <= menuy+7 && scene == 1) {
      if (hadfieldFlag == 0) hadfieldFlag = 1;
      else if (hadfieldFlag == 1) hadfieldFlag = 0;
  }
}