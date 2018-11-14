let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');
context.fillStyle = "red";
context.fillRect(100, 100, 100, 100);

// Line
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 300);
context.strokeStyle = "blue";
context.stroke();

// Arc
context.beginPath();
context.arc(300, 300, 30, 0, Math.PI * 2, false);
context.stroke();
var o = Math.round, r = Math.random, s = 255;

for(let i = 0; i < 1000; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2, false);

  context.strokeStyle = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  // context.strokeStyle = 'rgb(123, 123, 123)';
  context.stroke();
}