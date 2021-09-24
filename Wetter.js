function setup() {
  createCanvas(500, 500);
  background("lightblue");
  frameRate(20);
  
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
  
  // Sonne

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
  
