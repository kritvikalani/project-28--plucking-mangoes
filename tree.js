class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
this.body1= Bodies.rectangle(670,700,20,350, options);
//this.body2= Bodies.rectangle(650,517,150,100, options);
//this.body3= Bodies.rectangle(650,517,100,100,options);
this.width=  width;
this.height= height;
this.x= x;
this.y= y;

this.image= loadImage("tree.png")

World.add(world, this.body1);
//World.add(world, this.body2);
//World.add(world, this.body3);
}

display() {
    //var pos= this.body.position
    imageMode(CENTER);
    //fill("white")
    image(this.image, this.x, this.y, this.width, this.height);
}
}