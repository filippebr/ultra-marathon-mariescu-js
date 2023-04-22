class Fire extends MainProject {
  constructor(canvas) {
    super(canvas);

    // this.drawDarkBackground();
    drawDarkBackground(this.ctx);

    this.fire = [];

    this.drawFrame();
    this.showDisabled();
    
  }
  
  drawFrame() {
    
    this.fire.push( new Flame ([ 0.5 * CANVAS_SIZE, 0.75 * CANVAS_SIZE ]));
    drawDarkBackground(this.ctx);

    this.ctx.globalCompositeOperation = "lighter";

    for ( let i = 0; i < this.fire.length; i++ ) {
      if ( this.fire[i].step >= this.fire[i].lifespan ) {
        this.fire.splice(i, 1);
        i--;
      } else {
        this.fire[i].update();
        this.fire[i].draw(this.ctx);
      }
    }

    this.ctx.globalCompositeOperation = "source-atop";
  }
}

class Flame {
  constructor(location) {
    this.location = location;
    this.radius = Math.random() * 10 + 50;
    this.speed = Math.random() * 4 + 4;
    this.step = 0;
    this.lifespan = 60;
    this.green = Math.round(Math.random() * 175);
  }

  draw(ctx) {
    ctx.beginPath();

    const grd = ctx.createRadialGradient(
      this.location[0],
      this.location[1], 
      0, 
      this.location[0],
      this.location[1],
      this.radius);
    grd.addColorStop(0, "rgba(255, " + this.green + ", 0, 1)");
    grd.addColorStop(1, "rgba(255, " + this.green + ", 0, 0)");
    
    // ctx.fillStyle = "rgba(255," + this.green + ", 0," + 
    //   (1-this.step / this.lifespan) * 0.5 + ")";
    ctx.fillStyle = grd;
    ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.step++;
    this.radius -= 1;
    this.location[1] -= this.speed;    
    this.location[0] += ( Math.random() - 0.5 ) * 7;  

    console.log("step:", this.step);
    console.log("lifespan:", this.lifespan);
    
    this.step = this.step > this.lifespan ? 10 : this.step;
    this.radius = this.radius < 0 ? 0 : this.radius;
  }
}

