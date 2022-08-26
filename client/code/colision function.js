epointcollisionpt1 = function (entity){
var vx = entity.x - entity.epointx;
var vy = entity.y - entity.epointy;
return Math.sqrt(vx*vx+vy*vy);
};

epointcollisionpt2 = function (entity){


distanseepoint = epointcollisionpt1(entity);
return distanseepoint;
};
	
	
suncollisionpt1 = function (entity1,entity2){
var vx = entity1.x - entity2.x;
var vy = entity1.y - entity2.y;
return Math.sqrt(vx*vx+vy*vy);
};

suncollisionpt2 = function (entity1,entity2){


distansesun = suncollisionpt1(entity1,entity2);
return distansesun < 210;
};

landingpt1 = function (entity1,entity2){
var vx = entity1.x - entity2.x;
var vy = entity1.y - entity2.y;
return Math.sqrt(vx*vx+vy*vy);
};

landingpt2 = function (entity1,entity2){


distanselanding = landingpt1(entity1,entity2);
return distanselanding;
};


distanseto = function (entity1,entity2){
var vx = entity1.x - entity2.x;
var vy = entity1.y - entity2.y;
return Math.sqrt(vx*vx+vy*vy);
};

collisionto = function (entity1,entity2){
	var rect1 = {
		x:entity1.x-entity1.width/2,
		y:entity1.y-entity1.height/2,
		width:entity1.width,
		height:entity1.height,
	}
	var rect2 = {
		x:entity2.x-entity2.width/2,
		y:entity2.y-entity2.height/2,
		width:entity2.width,
		height:entity2.height,
	}
	return testCollision(rect1,rect2);

//var distanse = distanseto(entity1,entity2);
//return distanse < 100;
};

testCollision = function(rect1,rect2){
	return rect1.x <= rect2.x+rect2.width
		&& rect2.x <= rect1.x+rect1.width
		&& rect1.y <= rect2.y + rect2.height
		&& rect2.y <= rect1.y + rect1.height;
}