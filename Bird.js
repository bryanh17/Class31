class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.smoke = [];
    this.Visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var point = this.body.position;
    if (this.body.velocity.x>10 && point.x>220){
      var position = [point.x,point.y];
      this.smoke.push(position);
      this.Visibility = this.Visibility-5;
      push();
      tint(255,this.Visibility);
      pop();
      
    }
    console.log(this.smoke);

    for (var i = 0;i<this.smoke.length;i++){
      image(this.smokeImage,this.smoke[i][0],this.smoke[i][1]);
    
    }

    super.display();
  }
}
