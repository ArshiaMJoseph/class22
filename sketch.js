const Bodies = Matter.Bodies;//used for creating object present in the game
const Engine = Matter.Engine;//namespace means giving nickname or small name
const World = Matter.World;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

myengine = Engine.create();
myworld = myengine.world;
var options ={
  isStatic:true
}

ground= Bodies.rectangle(400,390,800,20,options)
World.add(myworld,ground);

var balloptions = {
  restitution:1
}

ball = Bodies.circle(400,200,40,balloptions);
World.add(myworld,ball);

console.log(ground);

}

function draw() {

  background("pink");  

  Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}