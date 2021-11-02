var futura;
var scene = 0;
var introPart = 1;
var chord;
var greatlakes;
var bare;
var plaque;
var oddity;
var hadfieldOddity;
var dune;
var gill;
var starfield1;
var starfield2;
var starfield3;
var starfield4;

function preload() {
  futura = loadFont('FuturaPTBook.otf');
  greatlakes = loadFont('GREALN_.ttf');
  bare = loadImage('Game Poster Bare Compressed.png');
  chord = loadSound('Cloudbow Chord 2.mp3');
  plaque = loadImage('Plaque Compressed.png');
  oddity = loadSound('Space Oddity Instrumental.m4a');
  hadfieldOddity = loadSound('Hadfield Oddity.m4a');
  dune = loadSound('Dune Final Dream.mp3');
  gill = loadFont('GILL.ttf');
  starfield1 = loadImage('Starfield 1 Compressed.png');
  starfield2 = loadImage('Starfield 2 Compressed.png');
  starfield3 = loadImage('Starfield 3 Compressed.png');
  starfield4 = loadImage('Starfield 4 Compressed.png');
}

function setup() {
  createCanvas(540, 720);
}

function draw() {
  if (scene == 0) intro();
  else if (scene == 1) menu();
  else if (scene == 2) crawl();
  else if (scene == 3) exploration();
}

