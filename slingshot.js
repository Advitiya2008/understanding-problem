class SlingShot{
    constructor (bodyA, pointB){
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            }
            this.pointB=pointB
            this.strap=Constraint.create(options)
            World.add(world, this.strap)

    }
    Fly(){
        this.strap.bodyA=null;
    }
    display(){
        if(this.strap.bodyA){
        var pointA=this.strap.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }    
}