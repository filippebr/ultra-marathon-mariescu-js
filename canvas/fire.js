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

    for ( let f of this.fire ) {
      f.step < f.lifespan && (f.update(), f.draw(this.ctx));
      f.step >= f.lifespan && (this.fire.splice(this.fire.indexOf(f), 1), i--);
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
    
    ctx.fillStyle = grd;
    ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.step++;
    this.radius -= 1;
    this.location[0] += ( Math.random() - 0.5 ) * 7;  
    this.location[1] -= this.speed;    
    
    this.step = this.step > this.lifespan ? 10 : this.step;
    this.radius = this.radius < 0 ? 0 : this.radius;
  }
}
