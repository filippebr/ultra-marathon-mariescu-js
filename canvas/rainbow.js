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
    switch(index) {
      case 1: return "purple"; break;
      case 2: return "darkblue"; break;
      case 3: return "blue"; break;
      case 4: return "green"; break;
      case 5: return "yellow"; break;
      case 6: return "orange"; break;
      case 7: return "red"; break;
    }
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

// class AuroraParticle {
//   constructor(location) {
//     this.location = location;
//     this.radius = Math.random() * 75 + 25;
//     this.speed = Math.random() * 4 + 4;
//     this.step = 0;
//     // this.lifespan = 60;
//     this.green = Math.round(Math.random() * 175);
//   }

//   draw(ctx) {
//     ctx.beginPath();

//     const grd = ctx.createRadialGradient(
//       this.location[0],
//       this.location[1], 
//       0, 
//       this.location[0],
//       this.location[1],
//       this.radius);
//     grd.addColorStop(0, "rgba(255, 255, 255, 0.5)");
//     grd.addColorStop(1, "rgba(255, 255, 255, 0)");
    
//     ctx.fillStyle = grd;
//     ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
//     ctx.fill();
//   }

//   update() {
//     this.step++;
//     this.radius -= 1;
//     this.location[0] += ( Math.random() - 0.5 ) * 7;  
//     this.location[1] -= this.speed;  
//   }
// }
