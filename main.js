var pxx,pxy;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var mcbwidth = canvas.width;
var mcbheight = canvas.height;

var cx = 3.2;
var rx = 0.5;
var cy = 0.75;
var ry = 0.25;

var xres = 2*rx/mcbwidth;
var yres = 2*ry/mcbheight;

function plot(x,y){
	pxx = (x-(cx-rx))/(2*rx)*mcbwidth;
	pxy = mcbheight-((y-(cy-ry))/(2*ry)*mcbheight);
	console.log(pxx,pxy);
	ctx.fillRect(pxx,pxy,1,1);
}
