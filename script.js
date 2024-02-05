function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ 
    
    fill(255, 14, 76);
    
  
    
    
  }
  else { 
    fill(0);
    
  }
  ellipse(mouseX, mouseY, 100, 100);
}
