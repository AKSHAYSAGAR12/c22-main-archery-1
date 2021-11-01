class Player{
    constructor(x,y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.player_image=loadImage("./assets/player.png");
        this.player_base=loadImage("./assets/base.png");
    
    }
    display(){
        push();
    imageMode(CENTER);
    image(this.player_image,this.x,this.y,this.width,this.height);
    pop();
    image(this.player_base,360,446,200,200)
        noFill();
    }
}