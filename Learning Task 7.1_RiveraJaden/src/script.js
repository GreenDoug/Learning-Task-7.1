//SMILEY FACE
var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";

ctx.beginPath();
ctx.arc(100, 100, 95, 0, 2 * Math.PI);
ctx.fill();

ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(130, 80, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(100, 120, 50, 0, Math.PI);
ctx.fill();

//RAINBOW
var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");

var colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "white"
];

for (var i = 0; i < colors.length; i++) {
  ctx.fillStyle = colors[i];
  ctx.beginPath();
  ctx.arc(100, 200, 200 - i * 10, Math.PI, 2 * Math.PI);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

//PIE CHART
var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");

var data = [25, 15, 35, 25];
var colors = ["red", "green", "blue", "orange"];

var cx = 100;
var cy = 100;
var r = 80;

var startAngle = 0;

for (var i = 0; i < data.length; i++) {
  ctx.fillStyle = colors[i];

  var endAngle = startAngle + (data[i] / 100) * 2 * Math.PI;

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, r, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();

  startAngle = endAngle;
}

//SNOWMAN
var canvas = document.getElementById("myCanvas4");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "skyblue";

ctx.beginPath();
ctx.arc(100, 180, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 40, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

//eyes
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(90, 35, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(110, 35, 3, 0, 2 * Math.PI);
ctx.fill();

//mouth
ctx.beginPath();
ctx.arc(100, 45, 10, 0, Math.PI);
ctx.fill();

//buttons
ctx.beginPath();
ctx.arc(100, 90, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 110, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 170, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 190, 3, 0, 2 * Math.PI);
ctx.fill();

//nose
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(100, 40);
ctx.lineTo(120, 40);
ctx.lineTo(100, 50);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

//hat
ctx.fillStyle = "brown";
ctx.fillRect(80, 10, 40, 10);
ctx.fillRect(90, 0, 20, 10);
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(80, 10, 40, 10);
ctx.strokeRect(90, 0, 20, 10);

//FLOWERS
var canvas = document.getElementById("myCanvas5");
var ctx = canvas.getContext("2d");

var cx = 100;
var cy = 100;
var r = 80;

ctx.fillStyle = "pink";

var angle = Math.PI / 4;

for (var i = 0; i < 2 * Math.PI; i += angle) {
  var cp1x = cx + 1.5 * r * Math.cos(i - angle / 3);
  var cp1y = cy + 1.5 * r * Math.sin(i - angle / 3);
  var cp2x = cx + 1.5 * r * Math.cos(i + angle / 3);
  var cp2y = cy + 1.5 * r * Math.sin(i + angle / 3);

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, cx, cy);
  ctx.closePath();
  ctx.fill();

  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

//GRAPES
var canvas = document.getElementById("myCanvas6");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(100, 100, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(80, 80, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(120, 80, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 60, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 40);
ctx.lineTo(90, 20);
ctx.lineTo(100, 20);
ctx.fill();
ctx.lineWidth = 3;
ctx.stroke();

//TOMATO
var canvas = document.getElementById("myCanvas7");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(90, 30);
ctx.lineTo(100, 40);
ctx.lineTo(110, 30);
ctx.lineTo(100, 50);
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.stroke();

//WATERMELON
var canvas = document.getElementById("myCanvas8");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100, 100, 70, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(80, 80, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 80, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(120, 80, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(70, 100, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(90, 100, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(110, 100, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(130, 100, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(80, 120, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 120, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(120, 120, 1, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 5;
ctx.stroke();
