class ShootingStars extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.stars = this.getRandomStars(100);
    this.shootingStars = [];

    this.drawFrame();
    this.showDisabled();
    
  }
  
  drawFrame() {
    if ( Math.random() < 0.05) {
      console.log(this.shootingStars.length);
      this.shootingStars.push(new ShootingStar());
    }
    drawDarkBackground(this.ctx);
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].update();
      this.stars[i].draw(this.ctx);
    }

    for (let i = 0; i < this.shootingStars.length; i++) {
      this.shootingStars[i].update();
      this.shootingStars[i].draw(this.ctx);
    }
  }

  getRandomStars(N) {
    let arr = [];

    for ( let i = 0; i < N; i++ ) {
      arr.push(
        new Star(
          [ Math.random() * CANVAS_SIZE, 
            Math.random() * CANVAS_SIZE ])
      );
    }

    return arr;
  }
}

class ShootingStar {
  constructor() {
    this.location = ([
      CANVAS_SIZE * 0.5 + 
      Math.random() * CANVAS_SIZE * 0.5, 
      Math.random() * CANVAS_SIZE]);
    this.oldLocation = this.location;
    this.radius = 0; // star between 2 and 4    
    this.step = 0;
    this.speed = Math.random() * 5 + 50;
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
    this.step += 0.05;
    this.radius = (this.step > Math.PI) ? 0 : Math.sin(this.step) * 6;

    this.oldLocation = [
      this.location[0],
      this.location[1]
    ];
    this.location[0] -= this.speed;
  }
}

