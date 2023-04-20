class Star {
  constructor(location) {
    this.location = location;
    this.radius = Math.random() * 2 + 2; // star between 2 and 4
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "white";
    ctx.arc(this.location[0], this.location[1], this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.radius = Math.random() * 2 + 2;
  }
}