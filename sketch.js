function setup(){
    createCanvas(500, 500);
} 
function draw() {
    fill(51);
    rect(100,400,50,50);
ellipse(400,400,50,50);
}
function mouseDragged(){ 
    background(51)
    if ((mouseX && mouseY) === 400){
ellipse(mouseX, mouseY, 50, 50);}
  if (mouseX===100 && mouseY===400){
    rect(mouseX,mouseY, 50, 50);}
}mk