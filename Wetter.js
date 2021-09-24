function setup() {
  createCanvas(500, 500);
  background(100);
  
  

   // Regenwolke
  
  rect();
  noStroke();
  fill("white");
  circle(400, 100, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(380, 90, 50);
  noFill();
  
  noStroke();
  fill("white");
  circle(360, 110, 50);
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
  
  translate(120, 120);
  
  
  
  
 
  
  
}
