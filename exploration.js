var oddityFlag = 0;  //this flag makes it play the music only once
var whichStars = 0;  //controls which of the 4 starfields as backgr
var shipX = 100;
var shipY = 200;
var planetFlag = 0;  //detects whether the planet has been visited
var planetPause = 0; //used for pausing at text boxes
var starScene = 1;   
var shipSpeed = 0.7;
var black = 0;
var exitFlag = 0;
var exploreSong = 0;



    //text('Former population: approx. 80 million\nA relatively lush garden world.  The closest planet to your home of Tau Draconi 4.  You remember that one of your mothers used to run a cargo route to this planet.  She was on Tau Draconi 3 when Great Vanishing happened.  There is a small datasphere with a few AI programs performing their automated duties, but not much more.  No humans detected.', 270, 255, 430);
var castileDescription = 'Former population: approx. 4 billion\nCastilé is a vast ocean world teeming with indigenous life.  Massive bioluminescent leviathan filter feeders graze on microscopic plants and animals, while dark crawlers on the seafloor scavenge for carrion.  Giant kilometer wide kelp trees rise from the depths, dotted with the networks of living pods of the humans that lived there.  No human life detected';
var laniNuiDescription = 'Former population: approx. 3 billion\nLani Nui was a once a barren desert world, but has since been terraformed into a lush garden world with vast oceans and countless islands.  Many old Earth genotype organisms have been introduced here, including dolphins, palm trees, and various seabirds.  There are several abandoned floating cities continuing on their AI guided routes on the global ocean currents.  No human life detected.';
var artemisDescription = 'Former population: approx. 6 billion\nArtemis is a beautiful jade colored gas giant.  You have heard stories of this planet from offworld fuel haulers.  In the days of the Federation, it was called the great green jewel of the Hera cluster.  The majority of its population lived on its moon of Corinthos, although there are fuel harvesting facilities in Artemis\'s upper atmosphere.  No human life detected.';
var jotunheimDescription = 'Former population: approx. 7 billion\nJotunheim was known for its dramatic geographical features.  The scale of its mountains and canyons rival those of Mars of the old Earth Sol System.  It is a relatively well developed arid desert planet, with several advanced cities dotting the planet\'s various plains and mountains.  No human life detected.';
var tatooineDescription = 'This is no moon.  It doesn\'t appear to be the planet you\'re looking for.  You\'ve never liked this planet, as it is a wretched hive of scum and villainy.  Also, its sand is course and rough and irritating and it gets everywhere.  It is not a place where the fun begins.  The terrain is very irregular, with much high ground.  66 stuck-up half-witted scruffy-looking nerf herders detected.';
var yushanDescription = 'Former population: approx. 9 billion\nA large jungle world with approximately 1.3 Earth gravities.  Yushan was originally settled by Chinese and Russian colonists in the early 22nd century.  It appears that another seeker named Jun Kalisat has left a tag in the datasphere of this planet indicating that they\'ve visited here before.  No human life detected.';
var pegasusDescription = 'Former population: approx. 16 billion\nPegasus was one of the first planets to be colonized by humans, and the capital of the Grand Federation of Humankind.  The majority of its single massive supercontinent is covered in a vast megacity.  Several other planets in this star system are dedicated agricultural worlds made to feed the population of Pegasus.  No human life detected.';
var oldEarthDescription = 'Former population: approx. 11 billion\nThe capital of the former United Nations, and the cradle of humanity.  Every child of Tau Draconis 4 learns about old Earth in primary school, but few ever get to travel offworld in their lifetimes, and even fewer still get to visit old Earth.  You recognise the continents of Eurasia, Africa, Oceana, North America, and South America.  One human life detected.'


function exploration() {
  background(whichStars);
  if (oddityFlag == 0) {
    if (hadfieldFlag == 1) exploreSong = hadfieldOddity;
    else exploreSong = oddity;
    exploreSong.play();
    oddityFlag = 1;
  }
  
  textFont(gill);

  //function PlanetScene(starfield, color1, color2, color3, planetX, planetY, planetRadius, planetName, planetDescription)
  if (starScene == 1) TauDraconi();
  else if (starScene == 2) PlanetScene(starfield2, 5, 138, 168, 279, 400, 36, 'Castilé', castileDescription);
  else if (starScene == 3) PlanetScene(starfield3, 28, 169, 230, 400, 500, 56, 'Lani Nui', laniNuiDescription);
  else if (starScene == 4) PlanetScene(starfield4, 15, 153, 63, 300, 240, 100, 'Artemis', artemisDescription);
  else if (starScene == 5) PlanetScene(starfield1, 150, 122, 87, 100, 460, 30, 'Jotunheim', jotunheimDescription);
  else if (starScene == 6) PlanetScene(starfield2, 168, 144, 111, 342, 354, 45, 'Tatooine', tatooineDescription);
  else if (starScene == 7) PlanetScene(starfield3, 86, 133, 53, 100, 140, 54, 'Yushan', yushanDescription);
  else if (starScene == 8) PlanetScene(starfield4, 166, 178, 186, 300, 490, 56, 'Pegasus', pegasusDescription);
  else if (starScene == 9) PlanetScene(starfield4, 84, 161, 209, 270, 360, 45, 'Old Earth', oldEarthDescription);
  //else if (starScene >= 9) scene = 1;
  
  /*fill(170,170,170);
  if (planetPause == 0) moveShip();
  rectMode(RADIUS);
  rect(shipX, shipY, 5, 5);*/
}



function moveShip() {
  if (keyIsDown(LEFT_ARROW) && shipX >= 0) shipX -= shipSpeed;
  if (keyIsDown(RIGHT_ARROW) && shipX <= 540) shipX += shipSpeed;
  if (keyIsDown(UP_ARROW) && shipY >= 0) shipY -= shipSpeed;
  if (keyIsDown(DOWN_ARROW) && shipY <= 720) shipY += shipSpeed;
}

function TauDraconi() {
  whichStars = starfield1;
  fill(90,122, 82);
  ellipseMode(RADIUS);
  ellipse(300, 450, 50, 50);
  if (dist(shipX, shipY, 300, 450) < 55 && planetFlag == 0) {
    planetFlag = 1;
    planetPause = 1;
  }
  fill(170,170,170);
  if (planetPause == 0) moveShip();
  rectMode(RADIUS);
  rect(shipX, shipY, 5, 5);
  if (planetPause == 1) {
    rectMode(CENTER);
    fill(220, 220, 220);
    rect(270, 300, 450, 200);
    fill(0, 0, 0);
    textSize(25);
    textAlign(CENTER);
    textLeading(20);
    text('Tau Draconis 3', 270, 230, 430);
    textSize(16);
    textAlign(LEFT);
    text('Former population: approx. 80 million\nA relatively lush garden world.  The closest planet to your home of Tau Draconis 4.  You remember that one of your mothers used to run a cargo route to this planet.  She was on Tau Draconis 3 when the Great Vanishing happened.  There is a small datasphere with a few AI programs performing their automated duties, but not much more.  No humans detected.', 270, 255, 430);
    if (keyCode == 32) planetPause = 0;
  }
  if (shipX <= 0 && planetFlag == 1) {
    shipX = 540;
    planetFlag = 0;
    starScene = 2;
  }
  else if (shipX >= 540 && planetFlag == 1) {
    shipX = 0;
    planetFlag = 0;
    starScene = 2;
  }
  else if (shipY <= 0 && planetFlag == 1) {
    shipY = 720;
    planetFlag = 0;
    starScene = 3;
  }
  else if (shipY >= 720 && planetFlag == 1) {
    shipY = 0;
    startFlag = 0;
    starScene = 3;
  }
}


function PlanetScene(starfield, color1, color2, color3, planetX, planetY, planetRadius, planetName, planetDescription) {
  whichStars = starfield;
  fill(color1, color2, color3);
  ellipseMode(RADIUS);
  ellipse(planetX, planetY, planetRadius, planetRadius);
  if (dist(shipX, shipY, planetX, planetY) < planetRadius+5 && planetFlag == 0) {
    planetFlag = 1;
    planetPause = 1;
  }
  fill(170,170,170);
  if (planetPause == 0) moveShip();
  rectMode(RADIUS);
  rect(shipX, shipY, 5, 5);
  if (planetPause == 1) {
    rectMode(CENTER);
    fill(220, 220, 220);
    rect(270, 300, 450, 200);
    fill(0, 0, 0);
    textSize(25);
    textAlign(CENTER);
    text(planetName, 270, 230, 430);
    textSize(16);
    textAlign(LEFT);
    text(planetDescription, 270, 255, 430);
    if (keyCode == 32 && starScene < 9) planetPause = 0;
    else if (keyCode == 32 && starScene >= 9) exitFlag = 1;
  }
  if (exitFlag == 1) exitToMenu();
  if (shipX <= 0 && planetFlag == 1) {
    shipX = 540;
    planetFlag = 0;
    starScene++;
  }
  else if (shipX >= 540 && planetFlag == 1) {
    shipX = 0;
    planetFlag = 0;
    starScene++;
  }
  else if (shipY <= 0 && planetFlag == 1) {
    shipY = 720;
    planetFlag = 0;
    starScene++;
  }
  else if (shipY >= 720 && planetFlag == 1) {
    shipY = 0;
    planetFlag = 0;
    starScene++;
  }
}


function exitToMenu() {
  rectMode(CORNER);
  fill(0, 0, 0, black);
  rect(0, 0, 540, 720);
  black +=1;
  if (black >= 345) {
    oddityFlag = 0;
    shipX = 100;
    shipY = 200;
    planetFlag = 0;
    planetPause = 0;
    starScene = 1;
    exploreSong.stop();
    black = 0;
    exitFlag = 0;
    scene = 1;
  }
}


/*function Castile() {
  whichStars = starfield2;
  fill(90,122, 82);
  ellipseMode(RADIUS);
  ellipse(100, 600, 46, 46);
  if (dist(shipX, shipY, 300, 450) < 55 && planetFlag == 0) {
    planetFlag = 1;
    planetPause = 1;
  }
  if (planetPause == 1) {
    rectMode(CENTER);
    fill(220, 220, 220);
    rect(270, 300, 450, 200);
    fill(0, 0, 0);
    textSize(25);
    textAlign(CENTER);
    text('Tau Draconi 3', 270, 230, 430);
    textSize(16);
    textAlign(LEFT);
    text('Former population: approx. 80 million\nA relatively lush garden world.  The closest planet to your home of Tau Draconi 4.  You remember that one of your mothers used to run a cargo route to this planet.  She was on Tau Draconi 3 when Great Vanishing happened.  There is a small datasphere with a few AI programs performing their automated duties, but no human activity.  No humans detected.', 270, 255, 430);
    if (keyCode == 32) planetPause = 0;
  }
  
}

function LaniNui() {}

function Artemis() {}

function Jotunheim() {}

function HeiFeng() {}

function Tatooine() {}

function Pegasus() {}

function OldEarth() {}*/
