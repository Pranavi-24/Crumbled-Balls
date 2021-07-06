class paperBall {
    constructor(x,y,radius,width,height){
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction:0,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.width = width;
        this.height = height;
    
        this.image = loadImage("paper.png");
        World.add(world, this.body);
       
    }

    display(){
    var paperPos = this.body.position;
    push()
    translate(paperPos.x, paperPos.y);
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image,0,0);
    pop()
    }
}



