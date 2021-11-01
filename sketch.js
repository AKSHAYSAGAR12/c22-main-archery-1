const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage= loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options ={
    isStatic : true
  }
  //create player base body
playerBase = Bodies.rectangle(280,435,180,180,options)
  //create player body
  player = Bodies.rectangle(300,330,120,120,options)
  playerArcher=Bodies.rectangle(380,315,120,120,)



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(playerimage,300,330,120,120)
  //show the playerbase image using image() function
image(baseimage, 280,435,180,180)
image(playerArcherimage,380,315,120,120)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
