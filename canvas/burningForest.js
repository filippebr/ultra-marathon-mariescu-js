class BurningForest extends MainProject {
  constructor(canvas) {
    super(canvas);

    this.treeCount = 50;

    this.tmpCanvas = document.createElement('canvas');
    this.tmpCanvas.width = CANVAS_SIZE;
    this.tmpCanvas.height = CANVAS_SIZE; 
    this.tmpCtx = this.tmpCanvas.getContext("2d", {willReadFrequently: true});

    this.fireCanvas = document.createElement('canvas');
    this.fireCanvas.width = CANVAS_SIZE;
    this.fireCanvas.height = CANVAS_SIZE; 
    this.fire = new Fire(this.fireCanvas);    
    
    for ( let i = 0; i < 5; i++ ) {
      this.fire.path.push(
        [ 
          CANVAS_SIZE * 0.2 + 
          CANVAS_SIZE * Math.random() * 0.6,
          CANVAS_SIZE * 0.6 + Math.random() * 0.2
        ]);      
    }

    this.fireCtx = this.fireCanvas.getContext("2d");
    

    for ( let i = 0; i < this.treeCount; i++ ) {
      let loc = [ 
        CANVAS_SIZE * Math.random(), 
        CANVAS_SIZE * 0.9 + 
        CANVAS_SIZE * 0.1 * Math.random() ];
      this.drawTree(this.tmpCtx, loc, ( 200 - ( CANVAS_SIZE - loc[1] ) ), 0, 35);
    }

    this.drawFrame();
    this.showDisabled();    
  }
  
  drawFrame() {   
    // drawColoredBackground(this.ctx, "rgb(10, 60, 100)");
    drawDarkBackground(this.ctx);
    this.fire.drawFrame();
    addToCanvas(this.fireCtx, this.ctx); 
    
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, CANVAS_SIZE * 0.65, 
      CANVAS_SIZE, CANVAS_SIZE * 0.5);
    addToCanvas(this.tmpCtx, this.ctx);    
  }

  // angle is in radians
  drawTree(ctx, location, len, angle, branchWidth) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.lineWidth = branchWidth;
    ctx.translate(...location);    
    ctx.rotate(angle);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if ( len < 25 ) {
      ctx.restore();
      return;
    }

    this.drawTree(
      ctx,
      [0, -len], 
      len * 0.55, 
      angle + 0.2, 
      branchWidth * 0.75
    );
    this.drawTree(
      ctx,
      [0, -len], 
      len * 0.55, 
      angle - 0.2, 
      branchWidth * 0.75
    );  
    this.drawTree(
      ctx,
      [0, -len], 
      len * 0.7, 
      angle, 
      branchWidth * 0.75
    );
    
    ctx.restore();
  }
}

