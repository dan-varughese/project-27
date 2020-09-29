class Mango {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
        this.image=loadImage("mango.png");
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}