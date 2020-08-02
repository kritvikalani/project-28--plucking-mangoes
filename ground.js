class Ground{
    constructor(x,y,width,height) {
        var options= {
            isStatic: true,
        }

        this.body= Bodies.rectangle(x,y,width,height, options);
        this.body.width= width;
        this.body.height= height;

        World.add(world, this.body)
    }
    display() {
        var pos= this.body.position
        fill(0)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.body.width,this.body.height)
    }
}