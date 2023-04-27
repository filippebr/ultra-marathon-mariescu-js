class Lightning extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(0, 0, 100)");

    this.drawTree([
      CANVAS_SIZE / 2 + Math.random() * CANVAS_SIZE * 0.02, 
      CANVAS_SIZE * 0.1 + Math.random() * CANVAS_SIZE * 0.02 ], 
      200, (Math.random() - 0.5) * 0.1, 8);
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
    this.ctx.lineTo(0, +len);
    this.ctx.stroke();

    if ( len < 25 ) {
      this.ctx.restore();
      return;
    }

    if ( Math.random() < 0.5 ) {
      let rand = (Math.random() - 0.5) * 0.5;
      this.drawTree(
        [0, +len], 
        len * 0.75, 
        rand, 
        branchWidth * 0.8
      );
       
    }   
    
    if ( Math.random() < 0.5 ) {
      let rand = (Math.random() - 0.5) * 0.5;
      this.drawTree(
        [0, +len], 
        len * 0.75, 
        rand, 
        branchWidth * 0.8
      );       
    }   

    this.ctx.restore();
  }
}

