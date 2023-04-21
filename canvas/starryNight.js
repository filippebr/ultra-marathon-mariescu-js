class StarryNight extends MainProject {
  constructor(canvas) {
    super(canvas);

    // this.drawDarkBackground();
    drawDarkBackground(this.ctx);

    this.stars = this.getRandomStars(100);
    for ( let i = 0; i < this.stars.length; i++ ) {
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

