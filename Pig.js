class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // white=255 to black=0  
    this.visibility=255    //clear image
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3)
    super.display()
    else{
    World.remove(world,this.body)
    push()//save settings 
    this.visibility=this.visibility-5 ;  //less the visibility
tint(255,this.visibility);
  image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()  //settings remove
  }
}

};