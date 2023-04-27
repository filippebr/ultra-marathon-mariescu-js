class LeafySpruce extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {    
    drawColoredBackground(this.ctx, "rgb(0, 0, 100)");

    this.drawTree([CANVAS_SIZE / 2, CANVAS_SIZE * 0.9], 200, 0, 20);

    this.drawLeaves();
  }

  drawLeaves() {
    const imgData = this.ctx.getImageData(
      0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // for( let y = 0; y < CANVAS_SIZE; y++ ) {
    //   for (let x = 0; x < CANVAS_SIZE; x++ ) {
    //     let index = x * y * 4;
    //     let r = imgData.data[index];
    //     let g = imgData.data[index + 1];
    //     let b = imgData.data[index + 2];
    //     // let a = imgData.data[index + 3];
    //     if ( r == 255 && g == 255 && b == 255 ) {
    //       imgData.data[index] = 0; //red
    //       imgData.data[index + 1] = 255; //green
    //       imgData.data[index + 2] = 0; //blue
    //     }
    //   }
    // }
    // this.ctx.putImageData(imgData, 0, 0);
    // [r, g, b, a  r, g, b, a,...... Size: 4 * CANVAS_SIZE ^ 2
  }

  // angle is in radians
  drawTree(location, len, angle, branchWidth) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "green";
    this.ctx.lineWidth = branchWidth;
    this.ctx.translate(...location);    
    this.ctx.rotate(angle);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -len);
    this.ctx.stroke();

    if ( len < 25 ) {
      this.ctx.arc(0, -len, CANVAS_SIZE * 0.01, 0, Math.PI * 2);

      this.ctx.fill();
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

