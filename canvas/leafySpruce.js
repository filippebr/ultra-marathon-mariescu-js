class LeafySpruce extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(75, 175, 175)");

    this.drawTree([CANVAS_SIZE / 2, CANVAS_SIZE * 0.9], 200, 0, 20);

    this.drawLeaves();
  }

  drawLeaves() {
    const imgData = this.ctx.getImageData(
      0, 0, CANVAS_SIZE, CANVAS_SIZE);

  }

  // angle is in radians
  drawTree(location, len, angle, branchWidth) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.strokeStyle = "rgb(125, 100, 0)";
    this.ctx.fillStyle = "green";
    this.ctx.lineWidth = branchWidth;
    this.ctx.translate(...location);    
    this.ctx.rotate(angle);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -len);
    this.ctx.stroke();

    if ( len < 25 ) {
      // this.ctx.globalCompositeOperation = "source-atop";
      this.ctx.arc(0, -len, CANVAS_SIZE * 0.01, 0, Math.PI * 2);

      this.ctx.fill();
      // this.ctx.globalCompositeOperation = "source-over";
      this.ctx.restore();
      return;
    }

    this.drawTree(
      [0, -len], 
      len * 0.55, 
      angle + 0.2, 
      branchWidth * 0.75
    );
    this.drawTree(
      [0, -len], 
      len * 0.55, 
      angle - 0.2, 
      branchWidth * 0.75
    );  
    this.drawTree(
      [0, -len], 
      len * 0.7, 
      angle, 
      branchWidth * 0.75
    );
    
    this.ctx.restore();
  }
}

