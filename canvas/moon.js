class Moon extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.drawFrame();
    this.showDisabled();
    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(0, 0, 50)");
    this.drawMoon([CANVAS_SIZE * 0.5, CANVAS_SIZE * 0.5])    
  }

  drawMoon(location) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "yellow";
    this.ctx.arc(location[0], location[1], CANVAS_SIZE * 0.2, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

class MoonParticle {
  constructor(location) {
    this.location = location;
    this.radius = Math.random() * 75 + 25;
    this.speed = Math.random() * 4 + 4;
    this.step = 0;
    // this.lifespan = 60;
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
    grd.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    grd.addColorStop(1, "rgba(255, 255, 255, 0)");
    
    ctx.fillStyle = grd;
    ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.step++;
    this.radius -= 1;
    this.location[0] += ( Math.random() - 0.5 ) * 7;  
    this.location[1] -= this.speed;  
  }
}

