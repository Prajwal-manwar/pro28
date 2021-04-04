const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;

function preload() {}
function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 680, 1600, 20);

  //Create the Bodies Here.
  paper = new Paper(150, 590);

  dustbin1 = new Dustbin(1190, 594, 150, 150);
  dustbin2 = new Ground(1130, 590, 20, 100);
  dustbin3 = new Ground(1250, 590, 20, 100);

  launcher = new Launcher(paper.body, {x:500, y:150})

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  launcher.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcher.fly();
}
