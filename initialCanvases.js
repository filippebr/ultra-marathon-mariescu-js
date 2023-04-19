const CANVAS_SIZE = 1000;
const projectCount = 99;

function main() {
  initializeCanvases();
}

function initializeCanvases() {
  for (let i = 0; i <= 99; i++) {
    const canvas = document.createElement('canvas');

    canvas.id = "canvas_"+i;
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);
  }
}