var duneFlag = 0;
var crawlHeight = 735;
var crawlCount = 0;

function crawl() {
  background(0);
  if (duneFlag == 0) {
    dune.play();   //it's 1:25 long
    duneFlag = 1;
  }
  textFont(gill);
  textAlign(CENTER);
  textSize(20);
  textLeading(40);
  fill(255, 255, 255);
  //text(crawlHeight, 100, 20);  //debugging code
  text("It is the year 2473.  The Grand Federation of Humankind that once ruled over 3000 star systems has now vanished for some unknown reason.  Millions of great cities on thousands of worlds are left empty.  Scores of ships from a bustling interstellar economy float on their trajectories in space as empty derelicts.  It appears that all humans had simultaneously vanished on all the worlds of the Federation save for one: Tau Draconis 4, a small remote backwater world of ice and tundra, and your home.  For some unknown reason, the people of this world never vanished like the rest of humanity.  You have been appointed a Seeker by the Local Rule Council.  It is your duty to brave the lonely stars and planets alone, searching for answers to the Great Vanishing.  You are given a ship and set off on your journey, the familiar ice sheets of Tau Draconis 4 receeding behind you.  \n\nThe stars blur as your ship activates its supervelocity drive, and an endless universe of danger and mystery opens to you.", 40, crawlHeight, 460);
  if (keyIsDown(32)) crawlHeight -= 3;
  else crawlHeight -= 0.242;
  crawlCount++;
  if (crawlHeight <= -811) { 
    duneFlag = 0;
    crawlHeight = 735;
    crawlCount = 0;
    dune.stop();
    scene = 1;  
  }
}