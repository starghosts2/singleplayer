update = function (){
	ctx.clearRect (0,0,WIDTH2,HEIGHT2);
	if(updatese3 > 10){
	//musick3.volume = 0.2;
	//var elems = document.querySelectorAll("video, audio");
	//elem.muted = true;
	//elem.pause();
	
	//sfdfgdfgsf();
	}
	drawmap();
			for(var randomword in starlist){
		drawsun(starlist[randomword]);  
		var isColliding4 = suncollisionpt2(player,starlist[randomword]);
		var damage = 950
		if(isColliding4 && kadrravno % 40 === 0){
			player.hp = player.hp - damage;
			console.log(damage);
			combatstate = 0;
			randomgdamagedisplay2(player.x,player.y,damage,'red');
			for(var randomword22 in damagedisplaylist){
					//randomgdamagedisplay();
					//damagedisplaylist[randomword22].name = damage;
					//break;
				}
		};
	};
	if(combatstate > 150 && kadrravno % 44 === 0 && player.hp < 8200){
	var health = 120;
	player.hp = player.hp + health;
	//combatstate = 0;
	randomgdamagedisplay2(player.x,player.y,health,'#43bf58');
				for(var randomword2 in damagedisplaylist){
					//randomgdamagedisplay();
					//damagedisplaylist[randomword2].name = health;
					//damagedisplaylist[randomword2].color = '#43bf58';
					//break;
				}
	}
	if(player.hp > 8200)
		player.hp = 8200;
	
		for(var randomword in planetlist){
		updatePlanet(planetlist[randomword]);  
		};
	
	//updatePlanet(planetlist.o1);
	//updatePlanet(elipslist.e1);
	updatePlanet2(patrollist['pp1']);
	player.atkcntr += player.kd;
	musickcntr ++;
	

	if(musickcntr > 10150){
		var musick3 = new Audio(); // Создаём новый элемент Audio
	musick3.src = "client/audio/Starghosts musick 3.mp3"; // Указываем путь к звуку "клика"
	musick3.autoplay = true; // Автоматически запускаем
	musickcntr = -4900;
	startmusick = 0;

	}
	
	if(musickcntr > 0 && startmusick === 0){
		musickgenerator();
	}
	
	//updateobject(sun);
	drawpoint(point);
	ctx.fillText(player.hp + ' Прочность',250,30);
	ctx.fillText('Гафний: ' + gafniy,500,30);
	//ctx.fillText(resulte,100,100);
	kadrravno++;
	combatstate++;
	updatese3++;

	//gafniy++;
	
	//for(var randomword in planetlist){
	//	updatePlanet(planetlist[randomword]); 
		
	//};
//
	for(var prop in enemylist) {
    if (enemylist.hasOwnProperty(prop)) {
    // or Object.prototype.hasOwnProperty.call(enemylist, prop)
      resulte++;
	  
	  
    }
	
  };
  //ctx.fillText(resulte,100,100);
  	if(kadrravno % 100 === 0 && resulte < 20) 
		randomgenenemy();
  resulte = 0;
//

//
	for(var prop in asteroidlist) {
    if (asteroidlist.hasOwnProperty(prop)) {
    // or Object.prototype.hasOwnProperty.call(enemylist, prop)
      resulte2++;
	  
	  
    }
	
  };
  //ctx.fillText(resulte,100,100);
  	if(kadrravno % 100 === 0 && resulte2 < 7) 
		randomgasteroid();
  resulte2 = 0;
//

//
	for(var prop in resurselist) {
    if (resurselist.hasOwnProperty(prop)) {
    // or Object.prototype.hasOwnProperty.call(enemylist, prop)
      resulte3++;
	  
	  
    }
	
  };
  //ctx.fillText(resulte,100,100);
  	if(kadrravno % 175 === 0 && resulte3 < 10) 
		randomgresurse();
  resulte3 = 0;
//
	  //if(kadrravno % Math.round(25/player.kd) === 0)
		
	for(var randomword2 in bulletlist){
		updatebullet(bulletlist[randomword2]); 
		
		var remov = false;
		bulletlist[randomword2].timer++;
		if(bulletlist[randomword2].timer > 100){
		remov = true;
			
		}
		
		for(var randomword3 in enemylist){
			var isColliding = collisionto(bulletlist[randomword2],enemylist[randomword3]);
					if(isColliding){
			remov = true;
			
			enemylist[randomword3].hp = enemylist[randomword3].hp - bulletlist[randomword2].damage;
			var x = enemylist[randomword3].x;
			var y = enemylist[randomword3].y;
			var name = Math.round((377 / 100 * 20 + 377) + Math.random()*(306 / 100 * 20 + 306))// от 377 до 683 + 20 %
			var color = 'orange';
			randomgdamagedisplay2(x,y,name,color);
				for(var randomword4 in damagedisplaylist){
					//randomgdamagedisplay();
					//damagedisplaylist[randomword4].x = enemylist[randomword3].x;
					//damagedisplaylist[randomword4].y = enemylist[randomword3].y;
					//damagedisplaylist[randomword4].name = bulletlist[randomword2].damage;
					//damagedisplaylist[randomword4].color = 'orange';
					//break;
				}
			break;
		};

		};
		if(remov){
			delete bulletlist[randomword2];
		}
		};
		
		for(var randomword3 in enemylist){
				if(enemylist[randomword3].hp < 0){
		delete enemylist[randomword3];
		};
		}
		
	for(var randomword2 in enemylist){
		//updateenemypos2(enemylist[randomword2]); 
		var isColliding10 = collisionto(player,enemylist[randomword2]);
		var isColliding11 = epointcollisionpt2(enemylist[randomword2]);
		//var pointtimer = 0
		if(enemylist[randomword2].hp > 1999){ 
		if(isColliding10){
			player.hp = player.hp - 1245;
			
		}
		if(distanseepoint < 15){
			enemylist[randomword2].epointx = Math.random()*WIDTH;
			enemylist[randomword2].epointy = Math.random()*HEIGHT;
			enemylist[randomword2].pointtimer = 0
			updateenemypos3(enemylist[randomword2]); 
			
		}
		if(distanseepoint > 14){
			enemylist[randomword2].pointtimer = enemylist[randomword2].pointtimer + Math.random()*2
			
		};
		if(distanseepoint > 14 && enemylist[randomword2].pointtimer > 80){
			updateenemypos2(enemylist[randomword2]); 
			
		};
		}
		if(enemylist[randomword2].hp < 2000){ 
				if(isColliding10){
			player.hp = player.hp - 1245;
			
		}
		updateenemypos4(enemylist[randomword2]);
		}
		drawenemy(enemylist[randomword2]); 
	};
	
			for(var randomword2 in resurselist){
		updateres(resurselist[randomword2]); 
		var isColliding3 = collisionto(player,resurselist[randomword2]);
		if(isColliding3){
			if(resurselist[randomword2].type === 'gaffniy')
				gafniy += 1;
			if(resurselist[randomword2].type === 'litium')
				player.kd +=3;
			delete resurselist[randomword2]
			
	var pickup = new Audio(); 
	pickup.src = "client/audio/pickup.mp3"; 
	pickup.autoplay = true; 
			
			//audio.pickup.addEventListener("canplaythrough", event => {
  
  //audio.pickup.play();
//});
		};
	};
	for(var randomword in planetlist){
		//updatePlanet(planetlist[randomword]);  
		var isColliding2 = landingpt2(player,planetlist[randomword]);
		if(distanselanding > 55 && distanselanding < 70){
			//dialog.show();
			player.x = planetlist[randomword].x;
			player.y = planetlist[randomword].y;
			player.spdX = 0;
			player.spdY = 0;
	
			//drawplayer(player);
			break;
		};
		if(distanselanding < 50){
			player.x = planetlist[randomword].x;
			player.y = planetlist[randomword].y;
			player.spdX = 0;
			player.spdY = 0;
	
			//drawplayer(player);
			break;
			
		};
		
		if(distanselanding > 75){//75
			controlplayer(player);
			//drawplayer(player);
			
			//break;
		};
		//break;
	};
	drawplayer(player);
	
			for(var randomword2 in asteroidlist){
		updateasteroid(asteroidlist[randomword2]); 
		};
		
					for(var randomword2 in damagedisplaylist){
		updatedamagedisplay(damagedisplaylist[randomword2]);
		damagedisplaylist[randomword2].timer++;
			if(damagedisplaylist[randomword2].timer > 30)
			delete damagedisplaylist[randomword2];
		}
		
							for(var randomword2 in damagedisplaylist2){
		updatedamagedisplay(damagedisplaylist2[randomword2]);
		damagedisplaylist2[randomword2].timer++;
			if(damagedisplaylist2[randomword2].timer > 30)
			delete damagedisplaylist2[randomword2];
		}
	
		for(var randomword2 in asteroidlist){
		//updateasteroid(asteroidlist[randomword2]); 
		var isColliding3 = collisionto(player,asteroidlist[randomword2]);
		//var damage = 1245
		if(isColliding3){
			//damage = Math.random()*10;
			//player.hp = player.hp - damage;
			console.log(damage);
			combatstate = 0;
			//randomgdamagedisplay
			randomgdamagedisplay();
			for(var randomword3 in damagedisplaylist){
			//damagedisplaylist[randomword3].name = damage;
			player.hp = player.hp - damagedisplaylist[randomword3].name;
			}
			var x = asteroidlist[randomword2].x + (-0.5 + Math.random())*100;
			var y = asteroidlist[randomword2].y + (-0.5 + Math.random())*100;
			asteroidgresurse(x,y);
			for(var randomword4 in resurselist){
			//resurselist[randomword4].x = asteroidlist[randomword2].x + (-0.5 + Math.random())*100;
			//resurselist[randomword4].y = asteroidlist[randomword2].y + (-0.5 + Math.random())*100;
			//randomgresurse();
			break;
			}
			delete asteroidlist[randomword2];
			break;
			
		};
	};
	

	
	fireonkey();
	updateenemypos(player);



	

	
		//for(var randomword2 in damagedisplaylist){
		//updatedamagedisplay(damagedisplaylist[randomword2]);
		//damagedisplaylist[randomword2].timer++;
		//	if(damagedisplaylist[randomword2].timer > 30)
		//	delete damagedisplaylist[randomword2];
		//}
	
	

	if(player.hp < 1){
				var matchhafnium = Date.now() - hafnium
				
				console.log('-' + 'вы потеряли ' + matchhafnium + ' гафния');
				newgame();
				
			}
	
	
	
	

}