class Rainbow extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.step = 0;
    this.shape = [];    
    this.shape.push([-CANVAS_SIZE * 0.1, CANVAS_SIZE * 0.5]);
    this.shape.push([CANVAS_SIZE * 0.5, CANVAS_SIZE * 0.2]);
    this.shape.push([CANVAS_SIZE * 1.1, CANVAS_SIZE * 0.5]);

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(0, 0, 100)");

    this.drawRainbow(this.shape);
  }

  getColor(index) {
    const colors = ["purple", "darkblue", "blue", "green", "yellow", "orange", "red"];

    return colors[index - 1];
  }

  drawRainbow(shape) {
    for ( let i = 7; i >= 1; i-- ) {
      const dif = CANVAS_SIZE * 0.2 * ( i / 7 );
      this.ctx.beginPath();
      this.ctx.moveTo(shape[0][0], shape[0][1] - dif * 0.5);
      this.ctx.strokeStyle = this.getColor(i);
      this.ctx.lineWidth = dif;
      this.ctx.quadraticCurveTo(
        shape[1][0], shape[1][1] - dif * 0.5, 
        shape[2][0], shape[2][1] - dif * 0.5
      );
      this.ctx.stroke();
    }
    
  }
}

