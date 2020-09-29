class Tree {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.body =Bodies.rectangle(x,y,0,0,options);
        this.image=loadImage("tree.png");
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,500);
    }
}