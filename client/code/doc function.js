	document.onmousemove = function(mouse){
		mousex = mouse.clientX - document.getElementById("ctx").getBoundingClientRect().left;
		mousey = mouse.clientY - document.getElementById("ctx").getBoundingClientRect().top;
		
		mousex2 = mouse.clientX - document.getElementById("ctx").getBoundingClientRect().left;
		mousey2 = mouse.clientY - document.getElementById("ctx").getBoundingClientRect().top;
		//var angle = Math.atan2(y,x) / Math.PI * 180;
		//socket.emit('keyPress',{inputId:'mouseAngle',state:angle});
		//point.x = mousex;
		//point.y = mousey;
		mousex2 -= WIDTH2/2;
		mousey2 -= HEIGHT2/2;
		player.aimangle = Math.atan2(mousey2,mousex2) / Math.PI * 180;
	}
	
	document.onmousedown = function(mouse){
	if(mouse.which === 1)
		player.setpoint = true;
	}
	
	document.onmouseup = function(mouse){
	if(mouse.which === 1)
	player.setpoint = false;
	}
	
	document.getElementById('takeoff').onclick = function() {

  player.y = player.y + 100
};

document.oncontextmenu = function(mouse){
if(player.atkcntr > 25){
randomgbullet(player,player.aimangle);
player.atkcntr = 0;
		var plasma = new Audio(); // Создаём новый элемент Audio
	plasma.src = "client/audio/plasma.mp3"; // Указываем путь к звуку "клика"
	plasma.autoplay = true; // Автоматически запускаем
}
	 // perspshatk(player);
		mouse.preventDefault();
};

document.onkeydown = function(event){
	if(event.keyCode === 49)
		player.pressingkey1 = true;
	if(event.keyCode === 50)
		player.pressingkey2 = true;
}

document.onkeyup = function(event){
	if(event.keyCode === 49)
		player.pressingkey1 = false;
	if(event.keyCode === 50)
		player.pressingkey2 = false;
}