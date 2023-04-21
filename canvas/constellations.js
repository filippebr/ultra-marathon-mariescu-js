class Constellations extends MainProject {
  constructor(canvas) {
    super(canvas);
    // this.drawDarkBackground();
    drawDarkBackground(this.ctx);

    this.stars = this.getRandomStars(100);
    this.stars.push(new Star([100, 500], true));
    this.stars.push(new Star([200, 510], true));
    this.stars.push(new Star([300, 550], true));
    this.stars.push(new Star([400, 600], true));
    this.stars.push(new Star([400, 680], true));
    this.stars.push(new Star([510, 690], true));
    this.stars.push(new Star([550, 600], true));

    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].draw(this.ctx);
    }   
  }
  
  drawFrame() {
    // this.drawDarkBackground();
    drawDarkBackground(this.ctx);
    for ( let i = 0; i < this.stars.length; i++ ) {
      this.stars[i].update();
      this.stars[i].draw(this.ctx);
    }
    for ( let i = this.stars.length - 6; i < this.stars.length; i++ ) {
      const prevStar = this.stars[i - 1];
      const star = this.stars[i];
      this.ctx.beginPath();
      this.ctx.strokeStyle = "white";
      this.ctx.moveTo(...prevStar.location);
      this.ctx.lineTo(...star.location);
      this.ctx.stroke();
    }
  }

  getRandomStars(N) {
    let arr = [];

    for ( let i = 0; i < N; i++ ) {
      arr.push(
        new Star(
        [ Math.random() * CANVAS_SIZE, 
          Math.random() * CANVAS_SIZE ]));
    }

    return arr;
  }
}


