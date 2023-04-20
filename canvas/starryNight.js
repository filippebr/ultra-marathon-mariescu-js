class StarryNight {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d"); 
    
    this.drawDarkBackground();

    this.stars = this.getRandomStars(100);
    for ( let i = 0; i < this.stars.length; i++ ) {
      this.stars[i].draw(this.ctx);
    }

    let me = this;
    
    setInterval(() => {
      me.drawFrame();  
    }, 1000 / 30);
  }
  
  drawFrame() {
    this.drawDarkBackground();
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

  drawDarkBackground() {
    this.ctx.beginPath();

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
