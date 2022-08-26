newgame = function(){
player.hp = 8300;
hafnium = Date.now();
//kadrravno = 0;
//enemylist = {};
gafniy = 0;
player.x = orbit.x;
player.y = orbit.y;
//dialog.show();
//asteroidlist = {};
//randomgenenemy();
}

musickgenerator = function(){
var genericrandom = Math.random()
	if(genericrandom > 0 && genericrandom < 0.15){
	var musick1 = new Audio(); // Создаём новый элемент Audio
	musick1.src = "client/audio/Starghosts musick 1.mp3"; // Указываем путь к звуку "клика"
	musick1.autoplay = true; // Автоматически запускаем
	musickcntr = -4675;
	}
	else if(genericrandom > 0.14 && genericrandom < 0.29){
	var musick2 = new Audio(); // Создаём новый элемент Audio
	musick2.src = "client/audio/Starghosts musick 2.mp3"; // Указываем путь к звуку "клика"
	musick2.autoplay = true; // Автоматически запускаем
	musickcntr = -6225;
	}
	else if(genericrandom > 0.28 && genericrandom < 0.43){
	var musick3 = new Audio(); // Создаём новый элемент Audio
	musick3.src = "client/audio/Starghosts musick 3.mp3"; // Указываем путь к звуку "клика"
	musick3.autoplay = true; // Автоматически запускаем
	musickcntr = -4900;
	}
	else if(genericrandom > 0.42 && genericrandom < 0.57){
	var musick4 = new Audio(); // Создаём новый элемент Audio
	musick4.src = "client/audio/Starghosts musick 4.mp3"; // Указываем путь к звуку "клика"
	musick4.autoplay = true; // Автоматически запускаем
	musickcntr = -4400;
	}
	else if(genericrandom > 0.56 && genericrandom < 0.71){
	var musick5 = new Audio(); // Создаём новый элемент Audio
	musick5.src = "client/audio/Starghosts musick 5.mp3"; // Указываем путь к звуку "клика"
	musick5.autoplay = true; // Автоматически запускаем
	musickcntr = -4825;
	}
	else if(genericrandom > 0.70 && genericrandom < 0.85){
	var musick6 = new Audio(); // Создаём новый элемент Audio
	musick6.src = "client/audio/Starghosts musick 6.mp3"; // Указываем путь к звуку "клика"
	musick6.autoplay = true; // Автоматически запускаем
	musickcntr = -3500;
	}
	else{ //(genericrandom > 0.84 && genericrandom < 1)
	var musick7 = new Audio(); // Создаём новый элемент Audio
	musick7.src = "client/audio/Starghosts musick 7.mp3"; // Указываем путь к звуку "клика"
	musick7.autoplay = true; // Автоматически запускаем
	musickcntr = -3725;
	}
}



peratk = function (act){
	  if(act.atkcntr > 25){
		randomgbullet(act);
		act.atkcntr = 0;
		}
};

perspshatk = function (act){
	  if(act.atkcntr > 50){
	  var angle = 0 ;
	  while(angle < 360){
	  randomgbullet(act,angle);
	  angle++;
	  }
	 
		randomgbullet(act,act.aimangle - 5);
		randomgbullet(act,act.aimangle);
		randomgbullet(act,act.aimangle + 5);
		act.atkcntr = 0;
		}
};

fireonkey = function(){
if(player.pressingkey1){ //if(player.pressingkey1 && player.atkcntr > 25){
//randomgbullet(player,player.aimangle);
perspshatk(player);
//player.atkcntr = 0;
}
if(player.pressingkey2 && player.atkcntr > 25){
		randomgbullet(player,player.aimangle - 5);
		randomgbullet(player,player.aimangle);
		randomgbullet(player,player.aimangle + 5);
player.atkcntr = 0;
}
};