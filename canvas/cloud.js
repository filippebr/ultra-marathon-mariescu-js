class Cloud extends MainProject {
  constructor(canvas) {
    super(canvas);

    // this.drawDarkBackground();
    // drawDarkBackground(this.ctx);
    const cloudNumber = Math.random() * 75 + 25;
    this.cloudParts = this.generateCloudParts(cloudNumber);

    this.drawFrame();
    this.showDisabled();
    
  }

  generateCloudParts(N) {
    let arr = [];

    for (let i = 0; i < N; i++ ) {
      let x = CANVAS_SIZE * 0.25 + Math.random() * CANVAS_SIZE * 0.5;
      let y = CANVAS_SIZE / 2 - Math.random() * Math.sin( 
        Math.PI * 4 *
        (x - CANVAS_SIZE * 0.25) / CANVAS_SIZE * 0.5
      ) * CANVAS_SIZE * 0.2;
      arr.push(new CloudParticle([x, y]))
    }

    return arr;
  }
  
  drawFrame() {    
    drawDarkBackground(this.ctx);
    drawColoredBackground(this.ctx, "rgb(10, 100, 255)");

    // this.ctx.globalCompositeOperation = "lighter";

    for ( let cloud of this.cloudParts ) {
      cloud.draw(this.ctx);
    }

    // this.ctx.globalCompositeOperation = "source-atop";
  }
}

class CloudParticle {
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

