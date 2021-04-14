class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stifness:0.04

        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);


 
    }
    display(){
        var pointA=this.slingshot.bodyA.position
        var pointB=this.slingshot.bodyB.position
        strokeWeight(8)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}