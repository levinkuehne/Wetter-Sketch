function setup() {
  createCanvas(500, 500);
  background("lightblue");
  frameRate(20);
    // Regenbogen
    
    fill("red");
    circle(150,400, 250);
    noFill();
    
    fill("orange");
    circle(150,400, 225);
    noFill();
    
    fill("yellow");
    circle(150,400, 200);
    noFill();
    
    fill("green");
    circle(150,400, 175);
    noFill();
    
    fill("blue");
    circle(150,400, 150);
    noFill();
    
    fill("indigo");
    circle(150,400,125);
    noFill();
    
    fill("darkviolet");
    circle(150,400, 100);
    noFill();
    
    fill("lightblue");
    circle(150,400, 75);
    noFill();
    
    // Regenwolke
  
  noStroke();
  rect(340, 118, 80, 40);
  
  noStroke();
  fill("white");
  circle(420, 105, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(390, 100, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(360, 110, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(335, 125, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(435, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(420, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(345, 135, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(370, 140, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(390, 138, 50);
  noFill();
  
  // Gras
    fill("green");
    stroke("green");
    rect(0, 400, 500, 100);
  
  // Sonne

  noStroke();
  fill("yellow");
  circle(120, 120, 80);
  noFill();
  
  strokeWeight(10);
  stroke("yellow");
  
  translate(120, 120);
  
  for(let i = 0; i<=8; i++) {
    
    line(50, 0, 100, 0);
    rotate(2 * PI / 8 * i);
  }
  
  translate(-120, -120);
}
  
function draw(){
    
  stroke(100, 100, 255);
  strokeWeight(2);
  
  let x = random(320,450);
  let y = random(180, 350);
  
   line(x,y,x,y + 40);
   
  stroke("lightblue");
  strokeWeight(4);
  
  let x2 = random(320,450);
  let y2 = random(180,350);
  
   line(x2,y2,x2,y2 + 40);
  
}
