class SnowFall extends MainProject {
  constructor(canvas) {
    super(canvas);

    // this.drawDarkBackground();
    drawDarkBackground(this.ctx);

    this.snow = this.generateSnowParticles(200);

    this.drawFrame();
    this.showDisabled();
    
  }
  
  drawFrame() {
    drawDarkBackground(this.ctx);
    for ( let i = 0; i < this.snow.length; i++ ) {
      this.snow[i].update();
      this.snow[i].draw(this.ctx);
    }
  }

  generateSnowParticles(N) {
    let arr = [];

    for ( let i = 0; i < N; i++ ) {
      arr.push(
        new SnowFlake(
        [ Math.random() * CANVAS_SIZE, 
          Math.random() * CANVAS_SIZE ]));
    }

    return arr;
  }
}

class SnowFlake {
  constructor(location) {
    this.location = location;
    this.radius = Math.random() * 2 + 2;
    this.speed = Math.random() * 5 + 10;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "white";
    ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    const ranWind = Math.random() * 5; 
    this.location[1] += this.speed;
    
    // backround and foreground wind
    this.location[0] += (this.radius > 3) ? ranWind : -ranWind;  
    this.location[1] = (this.location[1] > CANVAS_SIZE) ? 0 : this.location[1];
    this.location[0] = (this.location[0] > CANVAS_SIZE) ? 0 : this.location[0];
    this.location[0] = (this.location[0] < 0) ? CANVAS_SIZE : this.location[0];
    
  }
}

