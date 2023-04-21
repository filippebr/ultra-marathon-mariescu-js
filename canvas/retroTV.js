class RetroTV extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.raindrops = this.generateRainDrops(50);

    this.drawFrame();
    this.showDisabled();
    
  }
  
  drawFrame() {
    drawDarkBackground(this.ctx);
    for ( let i = 0; i < this.raindrops.length; i++ ) {
      this.raindrops[i].update();

      this.raindrops[i].location[1] < this.raindrops[i].oldLocation[1] ? this.raindrops[i].draw(this.ctx) : null;

    }
  }

  generateRainDrops(N) {
    let arr = [];

    for ( let i = 0; i < N; i++ ) {
      arr.push(
        new RetroTVLines(
        [ Math.random() * CANVAS_SIZE, 
          Math.random() * CANVAS_SIZE ]));
    }

    return arr;
  }
}

class RetroTVLines {
  constructor(location) {
    this.location = location;
    this.oldLocation = location;
    this.radius = Math.random() + .5;
    this.speed = Math.random() * 5 + 25;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.radius;
    ctx.strokeStyle = "white";
    ctx.moveTo(...this.oldLocation);
    ctx.lineTo(...this.location);
    ctx.stroke();
  }

  update() {
    this.oldLocation = [ this.location[0], this.location[1] ];
    this.location[1] += this.speed;

    this.location[1] = (this.location[1] > CANVAS_SIZE) ? 0 : this.location[1];
    this.location[0] = (this.location[0] > CANVAS_SIZE) ? 0 : this.location[0];
    this.location[0] = (this.location[0] < 0) ? CANVAS_SIZE : this.location[0];
  }
}

