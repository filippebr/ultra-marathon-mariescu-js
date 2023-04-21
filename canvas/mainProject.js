class MainProject {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d"); 

    this.addEventListeners();

  }
  
  drawFrame() {
    
  }

  showDisabled() {
    this.ctx.fillStyle = "rgba(150, 150, 150, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = "10vh Verdana";
    this.ctx.fillStyle = "orange";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    console.log(this.className);
    this.ctx.fillText(this.constructor.name, this.canvas.width / 2, this.canvas.height / 2);
  }

  addEventListeners() {
    let me = this;
    this.canvas.addEventListener('mouseover', function(e) {
      if ( me.interval == null) {
        me.interval = setInterval(() => {
          me.drawFrame();  
          console.log("drawframe");
        }, 1000 / 30);
      }
    }, false);

    this.canvas.addEventListener('mouseout', function(e) {
      clearInterval(me.interval);
      me.interval = null;

      me.showDisabled();
    }, false);
  }
}

function drawDarkBackground(ctx) {
  ctx.beginPath();

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}


