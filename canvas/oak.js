class Oak extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(0, 0, 100)");

    this.drawTree([CANVAS_SIZE / 2, CANVAS_SIZE * 0.9], 200, 0, 20);
  }

  // angle is in radians
  drawTree(location, len, angle, branchWidth) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = branchWidth;
    this.ctx.translate(...location);    
    this.ctx.rotate(angle);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -len);
    this.ctx.stroke();

    if ( len < 5 ) {
      this.ctx.restore();
      console.log('len: ', len);
      return;
    }

    this.drawTree(
      [0, -len], 
      len * 0.76, 
      angle + 0.1, 
      branchWidth * 0.7
    );
    this.drawTree(
      [0, -len], 
      len * 0.76, 
      angle - 0.1, 
      branchWidth * 0.7
    );  
    
    this.ctx.restore();
  }
}

