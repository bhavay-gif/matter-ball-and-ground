const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground
var ball

function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  var ground_opption={
    isStatic:true
  }
ground=Bodies.rectangle(200,390,400,20,ground_opption)
World.add(world,ground)
 rectMode(CENTER) 
 
var ball_opption={
restitution:1.0
}
 ball=Bodies.circle(200,100,20,ball_opption)
 World.add(world,ball)
 ellipseMode(RADIUS)

}

function draw() {
  background(0);
  
  Engine.update(engine)

  rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,20)
  
}