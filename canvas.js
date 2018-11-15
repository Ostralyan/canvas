let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
}

let maxRadius = 40;
let minRadius = 2;

var colorArray = [
  '#C2E7F2',
  '#F1F0E2',
  '#D9BB93',
  '#F25652',
  '#3E4E59'
];

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', (event) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
  }
  
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
  
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    // mouse
    if (mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 && 
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < maxRadius) this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }
}


let circles = [];
function init() {
  circles = [];
  for(let i = 0; i < 1000; i++) {
    let radius = (Math.random() * 3) + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    circles.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for(let j = 0; j < circles.length; j++) {
    circles[j].update();
  }
}

init();

animate();