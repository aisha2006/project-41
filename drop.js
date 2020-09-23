class createDrop{
    constructor(x,y,width,height){
      this.body = Bodies.rectangle(x,y,width,height);
    }

    update(){
      if(this.body.position.y>500){
          this.body.position.y = this.body.position.x;
      }
    }

    draw(){
        ellipse(this.body.position.x,this.body.position.y, this.width,this.height);

    }


}