const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18;
var ball;
var rope;
function preload() {

}

function setup(){
    var canvas = createCanvas(900,550);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,height,900,20);

    b1 = new Building(500,450,50,50);
    b2 = new Building(500,400,50,50);
    b3 = new Building(500,350,50,50);
    b4 = new Building(500,300,50,50);
    b5 = new Building(500,250,50,50);
    b6 = new Building(500,200,50,50);
    b7 = new Building(500,150,50,50);
    b8 = new Building(500,100,50,50);
    b9 = new Building(500,50,50,50);
    b10 = new Building(500,0,50,50);


    b11 = new Building(600,450,60,50);
    b12 = new Building(600,400,60,50);
    b13 = new Building(600,350,60,50);
    b14 = new Building(600,300,60,50);
    b15 = new Building(600,250,60,50);
    b16 = new Building(600,200,60,50);
    b17 = new Building(600,150,60,50);
    b18 = new Building(600,100,60,50);
 
    ball = new Ball(200,200,40);
 rope = new Crane(ball.body,{x:300, y:50});
}

function draw(){

  background("red");
    
    Engine.update(engine);
    ground.display();

    stroke("green");
    strokeWeight(4);
    fill("black")
    b1.display();

    fill("black")
    b2.display();

    fill("black")
    b3.display();

    fill("black")
    b4.display();

    fill("black")
    b5.display();

    fill("black")
    b6.display();

    fill("black")
    b7.display();

    fill("black")
    b8.display();

    fill("black")
    b9.display();

    fill("black")
    b10.display();


    stroke("black");
    strokeWeight(4);
    fill("purple")
    b11.display();

    fill("purple")
    b12.display();

    fill("purple")
    b13.display();

    fill("purple")
    b14.display();

    fill("purple")
    b15.display();

    fill("purple")
    b16.display();

    fill("purple")
    b17.display();

    fill("purple")
    b18.display();

    fill("blue");
    ball.display();
  rope.display();    
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}