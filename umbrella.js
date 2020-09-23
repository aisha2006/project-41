class Umbrella{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height)
        this.image = loadImage("images/umbrellaBoy.png")
    }

    display(i){
        var pos = this.body.position 
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}