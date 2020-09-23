const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world;
var engine;

var block;
var boy;
var drops = [];
var maxDrops = 100;
function preload(){
    
}

function setup(){
engine = Engine.create();
world = engine.world;

createCanvas(1000,500); 
    
boy = new Umbrella(200,250,50,50);
}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)))
        
    }

    for(var i=0; i<maxDrops; i++){
        
    }

    boy.display();
   
}   

