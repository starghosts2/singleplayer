Enemy = function (id,x,spdX,y,spdY,width,height,epointx,epointy,pointtimer,img,hp){
var enemy = {
type2:'enemy',
x:x,
spdX:spdX,
y:y,
spdY:spdY,
//name:name,
id:id,
width:width,
height:height,
color:'red',
epointx:epointx,
epointy:epointy,
pointtimer:pointtimer,
img:img,
hp:hp,
aimangle:0,
kd:1,
atkcntr:0,
angle:0,
};
enemylist[id] = enemy;
}

Resurse = function (id,x,spdX,y,spdY,width,height,type,color,angle){
var enemy = {
type2:'resurse',
x:x,
spdX:spdX,
angle:angle,
y:y,
spdY:spdY,
//name:name,
id:id,
width:width,
height:height,
color:color,
type:type,
};
resurselist[id] = enemy;
}

Bullet = function (id,x,spdX,y,spdY,width,height,damage,angle){
var enemy = {
type2:'bullet',
x:x,
spdX:spdX,
y:y,
spdY:spdY,
//name:name,
id:id,
width:width,
height:height,
damage:damage,
color:'black',
timer:0,
angle:angle,
};
bulletlist[id] = enemy;
}

Damagedisplay = function (id,x,spdX,y,spdY,width,height,name){
var enemy = {
x:x,
spdX:spdX,
y:y,
spdY:spdY,
name:name,
id:id,
width:width,
height:height,
color:'red',
timer:0,
};
damagedisplaylist[id] = enemy;
}

Damagedisplay2 = function (id,x,spdX,y,spdY,width,height,name,damage,color){
var enemy = {
x:x,
spdX:spdX,
y:y,
spdY:spdY,
name:name,
id:id,
width:width,
height:height,
damage:damage,
color:color,
timer:0,
};
damagedisplaylist2[id] = enemy;
}

Asteroid = function (id,x,spdX,spdXx,y,spdY,spdYy,width,height,name,angle){
var ast = {
x:x,
spdX:spdX,
spdXx:spdXx,
y:y,
spdY:spdY,
spdYy:spdYy,
name:name,
angle:angle,
id:id,
width:width,
height:height,
color:'brown',
};
asteroidlist[id] = ast;
}

randomgenenemy = function(){
	var x = Math.random()*WIDTH;
	var epointx = Math.random()*WIDTH;
	var spdX = (-0.5 + Math.random())*10;
	var y = Math.random()*HEIGHT;
	var epointy = Math.random()*HEIGHT;
	var spdY = (-0.5 + Math.random())*10;
	var id = Math.random();
	var width = 45 + Math.random()*10;
	var height = 45 + Math.random()*10;
	var pointtimer = 0;
	if(Math.random() < 0.5)
	Enemy(id,x,spdX,y,spdY,width,height,epointx,epointy,pointtimer,img.enemy,2000);
	else
	Enemy(id,x,spdX,y,spdY,width,height,epointx,epointy,pointtimer,img.enemy2,2300);
}

randomgresurse = function(){
	var x = Math.random()*WIDTH;
	var spdX = 0;
	var y = Math.random()*HEIGHT;
	var spdY = 0;
	var angle = Math.random()*360;
	var id = Math.random();
	var width = 10;
	var height = 10;
	if(Math.random()<0){
		var type = 'gaffniy';
		var color = 'green';
	} else {
		var type = 'litium';
		var color = 'gray';
	}
	Resurse(id,x,spdX,y,spdY,width,height,type,color,angle);
}

asteroidgresurse = function(x,y){
	var x = x;
	var spdX = 0;
	var y = y;
	var angle = Math.random()*360;
	var spdY = 0;
	var id = Math.random();
	var width = 10;
	var height = 10;
	if(Math.random()<0.05){
		var type = 'gaffniy';
		var color = 'green';
	} else {
		var type = 'litium';
		var color = 'gray';
	}
	Resurse(id,x,spdX,y,spdY,width,height,type,color,angle);
}

randomgbullet = function(act,angledlamobov){
	var x = act.x;

	var y = act.y;

	var angle = act.aimangle;
	if(angledlamobov !== undefined){
		angle = angledlamobov;
		};
	var spdX = Math.cos(angle/180*Math.PI)*15;
	var spdY = Math.sin(angle/180*Math.PI)*15;
	var id = Math.random();
	var width = 5;
	var height = 5;
	var damage = Math.round((377 / 100 * 20 + 377) + Math.random()*(306 / 100 * 20 + 306))
	Bullet(id,x,spdX,y,spdY,width,height,damage,angle);
}

randomgdamagedisplay = function(){
	var x = player.x;
	
	var y = player.y;
	
	
	var angle = Math.random()*360;
	var spdX = Math.cos(angle/180*Math.PI)*1;
	var spdY = Math.sin(angle/180*Math.PI)*1;
	var id = Math.random();
	var width = 5;
	var height = 5;
	
	var name = ((1245 / 5) + Math.round((-0.5 + Math.random())*4))*5; 
	Damagedisplay(id,x,spdX,y,spdY,width,height,name);
}

randomgdamagedisplay2 = function(x,y,name,color){
	var x = x;
	//var spdX = (-0.5 + Math.random())*10;
	var y = y;
	var name = name;
	var color = color;
	
	var angle = Math.random()*360;
	var spdX = Math.cos(angle/180*Math.PI)*1;
	var spdY = Math.sin(angle/180*Math.PI)*1;
	var id = Math.random();
	var width = 5;
	var height = 5;
	
	var damage = Math.round((377 / 100 * 20 + 377) + Math.random()*(306 / 100 * 20 + 306))
	Damagedisplay2(id,x,spdX,y,spdY,width,height,name,damage,color);
}

randomgasteroid = function(){
	var x = Math.random()*WIDTH;
	var spdX = (-0.5 + Math.random())*1;
	var spdXx = (-0.5 + Math.random())*1;
	var y = Math.random()*HEIGHT;
	var spdY = (-0.5 + Math.random())*1;
	var spdYy = (-0.5 + Math.random())*1;
	var id = Math.random();
	var width = 30 + Math.random()*10;
	var height = 30 + Math.random()*10;
	var angle = Math.random()*360;
	Asteroid(id,x,spdX,spdXx,y,spdY,spdYy,width,height,name,angle);
}