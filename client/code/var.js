var ctx = document.getElementById("ctx").getContext("2d"); 

 
var HEIGHT = 6700;
var WIDTH = 11400;
var HEIGHT2 = window.innerHeight;
var WIDTH2 = window.innerWidth;
  ctx.canvas.width  = window.innerWidth - (window.screen.width - window.screen.availWidth) - 15// - 20;
  ctx.canvas.height = window.innerHeight - (window.screen.height - window.screen.availHeight)// - 20;
  ctx.font = '30px Arial';
var Barycenter = 250;
var message = 'Bouncing';
var hafnium = Date.now();
var gafniy = 0;
var dialog = document.querySelector('dialog');
var angle = 55;
var kadrravno = 0;
var musickcntr = 10000;
var startmusick = 10;
var combatstate = 0;
var resulte = 0;
var resulte2 = 0;
var resulte3 = 0;
var distanselanding = 0;
var img = {};
img.player = new Image();
img.player.src = "client/img/player.png";
img.bat = new Image();
img.bat.src = "client/img/bat.png";
img.enemy = new Image();
img.enemy.src = "client/img/bee.png";
img.enemy2 = new Image();
img.enemy2.src = "client/img/bat.png";
img.map = new Image();
img.map.src = "client/img/map.png";
img.pnt = new Image();
img.pnt.src = "client/img/pnt.png";
img.gafniy = new Image();
img.gafniy.src = "client/img/gafniy.png";
img.litiy = new Image();
img.litiy.src = "client/img/litiy.png";
img.asteroid = new Image();
img.asteroid.src = "client/img/asteroid.png";
img.sun = new Image();
img.sun.src = "client/img/sun.png";
img.orbit = new Image();
img.orbit.src = "client/img/orbit.png";
img.elips = new Image();
img.elips.src = "client/img/elips.png";
img.point = new Image();
img.point.src = "client/img/pnt.png";
img.bullet = new Image();
img.bullet.src = "client/img/star.png";
img.flame = new Image();
img.flame.src = "client/img/jet-flame.png";




var mousex
var mousey