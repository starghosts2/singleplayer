updatePlanet = function (anyq){
	anyq.spdX = anyq.spdX + anyq.spdXx;
	anyq.spdY = anyq.spdY + anyq.spdYy;
	anyq.x = anyq.x + anyq.spdX;
	anyq.y = anyq.y + anyq.spdY;
	if(anyq.name === 'O'){
			ctx.save();
		var x = anyq.x - player.x;
		var y = anyq.y - player.y;
		
		var rotarx = (anyq.x - player.x) + WIDTH2/2
		var rotary = (anyq.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 295/2;
		y -= 295/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(anyq.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.orbit,0,0,295,295,x,y,295,295);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.fillStyle = "#3c2a96";
		ctx.fillRect(anyq.x/100,anyq.y/100,5,5);
		ctx.restore();

	}
	if(anyq.name === 'E'){
				ctx.save();
		var x = anyq.x - player.x;
		var y = anyq.y - player.y;
		
		var rotarx = (anyq.x - player.x) + WIDTH2/2
		var rotary = (anyq.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 295/2;
		y -= 295/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(anyq.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.elips,0,0,295,295,x,y,295,295);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.fillStyle = "#3c2a96";
		ctx.fillRect(anyq.x/100,anyq.y/100,5,5);
		ctx.restore();
	}
//	ctx.fillText(anyq.name,anyq.x,anyq.y);
    if(anyq.x < sun.x){
        anyq.spdXx = 0.02;
    }
	if(anyq.x > sun.x){
        anyq.spdXx = -0.02;
    }
    if(anyq.y < sun.y){
        anyq.spdYy = 0.02;
    }
	if(anyq.y > sun.y){
        anyq.spdYy = -0.02;
    }
}

updatedamagedisplay = function (somp){
	somp.x += somp.spdX;
	somp.y += somp.spdY;

	ctx.save();
		var x = somp.x - player.x;
		var y = somp.y - player.y;
		
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 85/2;
		y -= 85/2;
	ctx.fillStyle = somp.color;
	ctx.fillText(somp.name,x,y);
	//ctx.fillRect(somp.x-somp.width/2,somp.y-somp.height/2,somp.width,somp.height);
	ctx.restore();
}




updateenemypos2 = function (somp){
	var diffX = somp.epointx - somp.x;
	var diffY = somp.epointy - somp.y;
	
	somp.x += somp.spdX;
	somp.y += somp.spdY;
	somp.angle = Math.atan2(diffY,diffX) / Math.PI * 180;// - 90;
	somp.spdX = Math.cos(somp.angle/180*Math.PI)*5;
	somp.spdY = Math.sin(somp.angle/180*Math.PI)*5;
};

updateenemypos3 = function (somp){
	var diffX = somp.epointx - somp.x;
	var diffY = somp.epointy - somp.y;
	
	somp.x += somp.spdX;
	somp.y += somp.spdY;
	somp.angle = Math.atan2(diffY,diffX) / Math.PI * 180;// - 90;
	somp.spdX = 0;
	somp.spdY = 0;
};

updateenemypos4 = function (somp){
	var diffX = player.x - somp.x;
	var diffY = player.y - somp.y;
	
	somp.x += somp.spdX;
	somp.y += somp.spdY;
	somp.angle = Math.atan2(diffY,diffX) / Math.PI * 180;// - 90;
	somp.spdX = Math.cos(somp.angle/180*Math.PI)*5;
	somp.spdY = Math.sin(somp.angle/180*Math.PI)*5;
};

updateenemypos = function (somp){
	if(somp.type2 === 'player'){
	 if(somp.setpoint){
	
	point.x = mousex + somp.x - WIDTH2/2
	point.y = mousey + somp.y - HEIGHT2/2
	}


	};

	
	//};
	if(somp.type2 === 'enemy'){
	var diffX = somp.epointx - somp.x;
	var diffY = somp.epointy - somp.y;
	
	somp.x += somp.spdX;
	somp.y += somp.spdY;
	somp.angle = Math.atan2(diffY,diffX) / Math.PI * 180;// - 90;
	somp.spdX = Math.cos(somp.angle/180*Math.PI)*5;
	somp.spdY = Math.sin(somp.angle/180*Math.PI)*5;

	
	
	}
};


updatebulletpos = function (somp){
	somp.x += somp.spdX;
	somp.y += somp.spdY;

};

updateasteroidposition = function (anyq){
	anyq.spdX = anyq.spdX + anyq.spdXx;
	anyq.spdY = anyq.spdY + anyq.spdYy;
	anyq.x = anyq.x + anyq.spdX;
	anyq.y = anyq.y + anyq.spdY;
	//ctx.fillText(anyq.name,anyq.x,anyq.y);
    if(anyq.x < sun.x){
        anyq.spdXx = 0.02;
    }
	if(anyq.x > sun.x){
        anyq.spdXx = -0.02;
    }
    if(anyq.y < sun.y){
        anyq.spdYy = 0.02;
    }
	if(anyq.y > sun.y){
        anyq.spdYy = -0.02;
    }
};

landingplayer = function (somp2){
	somp2.x = orbit.x;
	somp2.y = orbit.y;
	somp2.spdX = 0;
	somp2.spdY = 0;
	
	ctx.save();
	ctx.fillStyle = somp2.color;
	ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
	ctx.restore();

}

controlplayer = function (somp2){
	var diffX = point.x - player.x;
	var diffY = point.y - player.y;
	if(diffY > 5 || diffY < -5 && diffX < -5 || diffX > 5){
	somp2.x = somp2.x + somp2.spdX;
	somp2.y = somp2.y + somp2.spdY;
	somp2.angle = Math.atan2(diffY,diffX) / Math.PI * 180;// - 90;
	somp2.spdX = Math.cos(somp2.angle/180*Math.PI)*5;
	somp2.spdY = Math.sin(somp2.angle/180*Math.PI)*5;
	drawjetflame(player);
	};
 if(somp2.x < somp2.width/2)
	somp2.x = somp2.width/2;
 if(somp2.x > WIDTH - somp2.width/2)
	somp2.x = WIDTH - somp2.width/2;
 if(somp2.y < somp2.height/2)
	somp2.y = somp2.height/2;
 if(somp2.y > HEIGHT - somp2.height/2)
	somp2.y = HEIGHT - somp2.height/2;

	//	}
	

}

updatePlanet2 = function (recteng2){
	recteng2.x = recteng2.x + recteng2.spdX;
	recteng2.y = recteng2.y + recteng2.spdY;
	if(recteng2.x > 100){
	recteng2.x = recteng2.x - 5
		recteng2.spdX = 0;
		recteng2.spdY = 10;}
	if(recteng2.y > 100){
	recteng2.y = recteng2.y - 5
		recteng2.spdY = 0;
		recteng2.spdX = -10;}
	if(recteng2.x < 20){
	recteng2.x = recteng2.x + 5
		recteng2.spdX = 0;
		recteng2.spdY = -10;}
	if(recteng2.y < 20){
	recteng2.y = recteng2.y + 5
		recteng2.spdY = 0;
		recteng2.spdX = 10;}
		ctx.fillText(recteng2.name,recteng2.x,recteng2.y);
}

drawsun = function (somp){
ctx.save();
		var x = somp.x - player.x;
		var y = somp.y - player.y;
		
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 450/2;
		y -= 450/2;
	ctx.drawImage(img.sun,0,0,430,430,x,y,450,450);
		ctx.fillStyle = "orange";
		ctx.fillRect(somp.x/100,somp.y/100,6,6);
		ctx.restore();
};

drawpoint = function (somp){
			ctx.save();
		var x = somp.x - player.x;
		var y = somp.y - player.y;
		
		var rotarx = (somp.x - player.x) + WIDTH2/2
		var rotary = (somp.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 85/2;
		y -= 85/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.point,0,0,150,150,x,y,85,85);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
	//ctx.fillText(somp.name,somp.x,somp.y);
};

drawenemy = function(somp2) {

		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		if(somp2.img === img.enemy){
		x -= 90/2;
		y -= 60/2;
		}
		else{
		x -= 150/2;
		y -= 125/2;
		}
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		if(somp2.img === img.enemy)
		ctx.drawImage(somp2.img,0,0,129,90,x,y,90,60);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		else
		ctx.drawImage(somp2.img,0,0,200,150,x,y,150,125);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.fillStyle = "orange";
		ctx.restore();
				
				ctx.save();
				ctx.fillStyle = "red";
		ctx.fillRect(somp2.x/100,somp2.y/100,3,3);
		ctx.restore();
		var xxpbar = somp2.x - player.x;
		var yxpbar = somp2.y - player.y;
		xxpbar += WIDTH2/2;
		yxpbar += HEIGHT2/2;
		var healthbar = somp2.hp / 20;
		ctx.save();
		ctx.fillStyle = "#820027";
		if(somp2.img === img.enemy)
		ctx.fillRect(xxpbar-51,yxpbar+49,102,5);
		else
		ctx.fillRect(xxpbar-51,yxpbar+70,117,5);
		ctx.restore();
		ctx.save();
		ctx.fillStyle = "red";
		if(healthbar < 0){
		ctx.fillStyle = "#820027";
		}
		if(somp2.img === img.enemy)
		ctx.fillRect(xxpbar-50,yxpbar+50,healthbar,3);
		else
		ctx.fillRect(xxpbar-50,yxpbar+71,healthbar,3);
		ctx.restore();
		ctx.save();
		ctx.font = '15px Arial';
		ctx.fillStyle = "#73381f";
		if(somp2.img === img.enemy)
		ctx.fillText(somp2.hp,xxpbar-16,yxpbar+64)
		else
		ctx.fillText(somp2.hp,xxpbar-16,yxpbar+85)
		ctx.restore();
};

drawres = function(somp2) {
for(var randomword2 in resurselist){
if(somp2.type === 'gaffniy'){
		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 30/2;
		y -= 20/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.gafniy,0,0,23,17,x,y,30,20);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();


		}
if(somp2.type === 'litium'){
		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 20/2;
		y -= 30/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.litiy,0,0,19,24,x,y,20,30);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();

		}
		ctx.save();
		ctx.fillStyle = "white";
		ctx.fillRect(somp2.x/100,somp2.y/100,2,2);
		ctx.restore();
		}
};
drawbullet = function(somp) {
			ctx.save();
		var x = somp.x - player.x;
		var y = somp.y - player.y;
		
		var rotarx = (somp.x - player.x) + WIDTH2/2
		var rotary = (somp.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 17/2;
		y -= 17/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate((somp.angle + 20)* Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.bullet,0,0,50,50,x,y,17,17);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
};

drawasteroid = function(somp2) {
		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 30/2;
		y -= 45/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.asteroid,0,0,26,34,x,y,30,45);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
		ctx.save();
		ctx.fillStyle = "gray";
		ctx.fillRect(somp2.x/100,somp2.y/100,3,3);
		ctx.restore();
};

//drawsun = function(somp) {
//	ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
//	ctx.fill();
//};
//function moveplayer

drawplayer = function (somp2){
	
		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 110/2;
		y -= 75/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.player,0,0,150,100,x,y,110,75);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
		ctx.save();
		ctx.fillStyle = "#028000";
		ctx.fillRect(somp2.x/100,somp2.y/100,3,3);
		ctx.restore();
		var xxpbar = somp2.x - player.x;
		var yxpbar = somp2.y - player.y;
		xxpbar += WIDTH2/2;
		yxpbar += HEIGHT2/2;
		var healthbar = somp2.hp / 82;
		ctx.save();
		ctx.fillStyle = "#820027";
		
		ctx.fillRect(xxpbar-51,yxpbar+49,102,5);

		ctx.restore();
		ctx.save();
		ctx.fillStyle = "brown";
		//if(healthbar < 0){
		//ctx.fillStyle = "#820027";
		//}

		ctx.fillRect(xxpbar-50,yxpbar+50,healthbar,3);

		ctx.restore();
		ctx.save();
		ctx.font = '15px Arial';
		ctx.fillStyle = "#73381f";

		ctx.fillText(somp2.hp,xxpbar-16,yxpbar+64)

		ctx.restore();
};

drawjetflame = function (somp2){
	
		ctx.save();
		var x = somp2.x - player.x;
		var y = somp2.y - player.y;
		
		var rotarx = (somp2.x - player.x) + WIDTH2/2
		var rotary = (somp2.y - player.y) + HEIGHT2/2
		
		x += WIDTH2/2;
		y += HEIGHT2/2;
		
		x -= 110/2;
		y -= 75/2;
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(rotarx,rotary);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(somp2.angle * Math.PI / 180);
		ctx.translate(-rotarx,-rotary);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.flame,0,0,150,100,x,y,110,75);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
};

/*
drawplayer = function (somp2){
	
	
		ctx.save();
			//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2);
		
		ctx.translate(player.x,player.y);//ctx.translate(player.x + player.width/2, player.y + player.height/2);
		ctx.rotate(player.angle * Math.PI / 180);
		ctx.translate(-player.x,-player.y);//ctx.translate(-player.x + -player.width/2, -player.y + -player.height/2);
		ctx.drawImage(img.player,somp2.x-110/2,somp2.y-75/2,110,75);//ctx.drawImage(img.player,somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		//ctx.fillRect(somp2.x-somp2.width/2,somp2.y-somp2.height/2,somp2.width,somp2.height);
		ctx.restore();
};
*/
drawmap = function (){

var x = WIDTH2/2 - player.x/2;
var y = HEIGHT2/2 - player.y/2;
ctx.drawImage(img.map,0,0,3840,2160,x-1000,y-500,3840*2,2160*2);
};



updateres = function (somp){
 updateenemypos(somp);

drawres(somp);
//drawsun(somp);
 
 

}

updatebullet = function (somp){
 updatebulletpos(somp);

drawbullet(somp);
//drawsun(somp);
}


updateasteroid = function (somp){
//if (kadrravno % 5 === 0)
 updateasteroidposition(somp);
drawasteroid(somp);

 
 

}