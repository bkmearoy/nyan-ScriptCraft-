'use strict';
/* global require */
var Drone = require('drone');
var blocks = require('blocks');
/********************************************************************
 *	No parameters
 *	Simply builds the nyan cat and the tail moves
 ********************************************************************/
var 	a = blocks.air,
	r = blocks.wool.red,
	o = blocks.wool.orange,
	y = blocks.wool.yellow,
	l = blocks.wool.lime,
	c = blocks.wool.cyan,
	p = blocks.wool.purple,
	i = blocks.wool.pink,
	g = blocks.wool.lightgray,
	w = blocks.wool.white,
	b = blocks.wool.black,
	t = '24:2'; //Sandstone variant, TAN

var body = [
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,a,a,a,a,a],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,t,t,t,t,t,t,t,t,t,t,t,t,t,t,b,a,a,a,a,a,a],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,t,t,i,i,i,i,p,i,i,p,i,i,i,t,t,t,b,a,a,a,a,a],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,t,i,i,p,i,i,i,i,b,b,i,i,i,i,i,t,b,a,b,b,a,a],
	[a,a,a,a,a,a,a,a,b,b,b,b,a,a,b,t,i,i,i,i,i,i,b,g,g,b,i,i,p,i,t,b,b,g,g,b,a],
	[a,a,a,a,a,a,a,b,g,g,g,b,b,b,b,t,i,i,i,p,i,i,b,g,g,g,b,i,i,i,t,b,g,g,g,b,a],
	[a,a,a,a,a,a,a,b,b,g,g,g,g,g,b,t,i,i,i,i,i,i,b,g,g,g,g,b,b,b,b,g,g,g,g,b,a],
	[a,a,a,a,a,a,a,a,a,b,b,b,b,g,b,t,i,i,i,i,i,i,b,g,g,g,g,g,g,g,g,g,g,g,g,b,a],
	[a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,t,i,i,i,i,p,b,g,g,g,w,b,g,g,g,g,g,w,b,g,g,b],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,t,i,p,i,i,i,b,g,g,g,b,b,g,g,g,b,g,b,b,g,g,b],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,t,i,i,i,p,i,b,g,i,i,g,g,g,g,g,g,g,g,g,i,i,b],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,t,t,i,p,i,i,b,g,i,i,g,b,g,g,b,g,g,b,g,i,i,b],
	[a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,t,t,t,i,i,i,i,b,g,g,g,b,b,b,b,b,b,b,g,g,b,a],
	[a,a,a,a,a,a,a,a,a,a,b,g,g,g,b,b,t,t,t,t,t,t,t,b,g,g,g,g,g,g,g,g,g,g,b,a,a],
	[a,a,a,a,a,a,a,a,a,a,b,g,g,b,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,a],
	[a,a,a,a,a,a,a,a,a,a,b,b,b,a,a,a,b,g,g,b,a,a,a,b,g,g,b,a,b,g,g,b,a,a,a,a,a],
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,a,a,a,a,b,b,b,a,a,b,b,b,a,a,a,a,a]
];
var tail = [
	[
		[a,a,a,a,r,r,r,r,r,a,a,a,a,a,r,r],
		[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,b],
		[r,r,r,r,o,o,o,o,o,r,r,r,r,r,b,t],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,b,t],
		[o,o,o,o,y,y,y,y,b,b,b,b,o,o,b,t],
		[y,y,y,y,y,y,y,b,g,g,g,b,b,b,b,t],
		[y,y,y,y,l,l,b,b,g,g,g,g,g,g,b,t],
		[l,l,l,l,l,l,l,l,b,b,b,b,b,g,b,t],
		[l,l,l,l,c,c,c,c,c,l,l,l,b,b,b,t],
		[c,c,c,c,c,c,c,c,c,c,c,c,c,c,b,t],
		[c,c,c,c,p,p,p,p,p,c,c,c,c,c,b,t],
		[p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,t],
		[p,p,p,p,a,a,a,a,a,p,p,b,b,b,b,t]
	],
	[
		[a,a,r,r,r,r,r,a,a,a,a,a,r,r,r,r],
		[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,b],
		[r,r,o,o,o,o,o,r,r,r,r,r,o,o,b,t],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,b,t],
		[o,o,y,y,y,y,y,o,b,b,b,b,y,y,b,t],
		[y,y,y,y,y,y,y,b,g,g,g,b,b,b,b,t],
		[y,y,l,l,l,l,b,b,g,g,g,g,g,g,b,t],
		[l,l,l,l,l,l,l,l,b,b,b,b,b,g,b,t],
		[l,l,c,c,c,c,c,l,l,l,l,l,b,b,b,t],
		[c,c,c,c,c,c,c,c,c,c,c,c,c,c,b,t],
		[c,c,p,p,p,p,p,c,c,c,c,c,p,p,b,t],
		[p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,t],
		[p,p,a,a,a,a,a,p,p,p,p,b,b,b,b,t]
	],
	[
		[r,r,r,r,r,a,a,a,a,a,r,r,r,r,r,a],
		[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,b],
		[o,o,o,o,o,r,r,r,r,r,o,o,o,o,b,t],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,b,t],
		[y,y,y,y,y,o,o,o,b,b,b,b,y,y,b,t],
		[y,y,y,y,y,y,y,b,g,g,g,b,b,b,b,t],
		[l,l,l,l,l,y,b,b,g,g,g,g,g,g,b,t],
		[l,l,l,l,l,l,l,l,b,b,b,b,b,g,b,t],
		[c,c,c,c,c,l,l,l,l,l,c,c,b,b,b,t],
		[c,c,c,c,c,c,c,c,c,c,c,c,c,c,b,t],
		[p,p,p,p,p,c,c,c,c,c,p,p,p,p,b,t],
		[p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,t],
		[a,a,a,a,a,p,p,p,p,p,a,b,b,b,b,t]
	],
	[
		[r,r,r,a,a,a,a,a,r,r,r,r,r,a,a,a],
		[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,b],
		[o,o,o,r,r,r,r,r,o,o,o,o,o,r,b,t],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,b,t],
		[y,y,y,o,o,o,o,o,b,b,b,b,y,o,b,t],
		[y,y,y,y,y,y,y,b,g,g,g,b,b,b,b,t],
		[l,l,l,y,y,y,b,b,g,g,g,g,g,g,b,t],
		[l,l,l,l,l,l,l,l,b,b,b,b,b,g,b,t],
		[c,c,c,l,l,l,l,l,c,c,c,c,b,b,b,t],
		[c,c,c,c,c,c,c,c,c,c,c,c,c,c,b,t],
		[p,p,p,c,c,c,c,c,p,p,p,p,p,c,b,t],
		[p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,t],
		[a,a,a,p,p,p,p,p,a,a,a,b,b,b,b,t]
	],
	[
		[r,a,a,a,a,a,r,r,r,r,r,a,a,a,a,a],
		[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,b],
		[o,r,r,r,r,r,o,o,o,o,o,r,r,r,b,t],
		[o,o,o,o,o,o,o,o,o,o,o,o,o,o,b,t],
		[y,o,o,o,o,o,y,y,b,b,b,b,o,o,b,t],
		[y,y,y,y,y,y,y,b,g,g,g,b,b,b,b,t],
		[l,y,y,y,y,y,b,b,g,g,g,g,g,g,b,t],
		[l,l,l,l,l,l,l,l,b,b,b,b,b,g,b,t],
		[c,l,l,l,l,l,c,c,c,c,c,l,b,b,b,t],
		[c,c,c,c,c,c,c,c,c,c,c,c,c,c,b,t],
		[p,c,c,c,c,c,p,p,p,p,p,c,c,c,b,t],
		[p,p,p,p,p,p,p,p,p,p,p,p,p,b,b,t],
		[a,p,p,p,p,p,a,a,a,a,a,b,b,b,b,t]
	]
];
Drone.extend('nyan', function(){
	var i;
	//Get to top left corner
	this.up(15+body.length).turn(3).fwd(19).turn(1).chkpt('top-left');
	//Start building
	for(i=0;i<body.length;i++){
		//Reset to the left side
		this.move('top-left').down(i);
		this.boxa(body[i],body[i].length,1,1).fwd(1);
	}
	drawTail(0, this);
});

function drawTail(count, that){
	if(count>20){
		return;
	}
	setTimeout(function(){
		var i;
		for(i=0;i<tail[count%5].length;i++){
			//Reset to the left side
			that.move('top-left').down(i);
			that.boxa(tail[count%5][i],tail[count%5][i].length,1,1).fwd(1);
		}
		drawTail(count+1, that);
	}, 1000);
}
