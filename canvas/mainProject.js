class MainProject {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", {willReadFrequently: true}); 

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

    this.ctx.fillText(this.constructor.name, this.canvas.width / 2, this.canvas.height / 2);
  }

  addEventListeners() {
    let me = this;
    this.canvas.addEventListener('mouseover', function(e) {
      if ( me.interval == null) {
        me.interval = setInterval(() => {
          me.drawFrame();  
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

function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();

  const coordX = Math.round( CANVAS_SIZE * ( e.clientX - rect.left ) / (rect.right));
  const coordY = Math.round( CANVAS_SIZE * ( e.clientX - rect.left ) / (rect.right));

  console.log(coordX);

  return [
    coordX,
    coordY
  ]
}

function drawDarkBackground(ctx) {
  ctx.beginPath();

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function clearBackground(ctx) {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

// A will go over B
function addToCanvas(ctxA, ctxB) {

  ctxA.imageSmoothingEnabled = true;
  ctxA.imageSmoothingQuality = 'high';
  ctxA.webkitImageSmoothingEnabled = true;
  ctxA.mozImageSmoothingEnabled = true;
  ctxA.msImageSmoothingEnabled = true;
  ctxA.oImageSmoothingEnabled = true;
  ctxA.willReadFrequently = true;

  ctxB.imageSmoothingEnabled = true;
  ctxB.imageSmoothingQuality = 'high';
  ctxB.webkitImageSmoothingEnabled = true;
  ctxB.mozImageSmoothingEnabled = true;
  ctxB.msImageSmoothingEnabled = true;
  ctxB.oImageSmoothingEnabled = true;
  ctxB.willReadFrequently = true;

  const imgDataA = ctxA.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  const imgDataB = ctxB.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  for ( let y = 0; y < CANVAS_SIZE; y++ ) {
    for ( let x = 0; x < CANVAS_SIZE; x++ ) {
      let index = (y * CANVAS_SIZE + x % CANVAS_SIZE) * 4;
      let a = imgDataA.data[index + 3];

      if ( a > 0 ) {
        imgDataB.data[index] = imgDataA.data[index]; // red
        imgDataB.data[index + 1] = imgDataA.data[index + 1]; // green
        imgDataB.data[index + 2] = imgDataA.data[index + 2]; // blue
      }
    }
  }

  ctxB.putImageData(imgDataB, 0, 0);
}

function drawColoredBackground(ctx, color) {
  ctx.beginPath();

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function copyArr(arr) {
  let newArr = [];
  for ( let i = 0; i < arr.length; i++ ) {
    newArr[i] = arr[i];
  }
  return newArr;
}