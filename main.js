var pxx,pxy,x,y,i;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var mcbwidth = canvas.width;
var mcbheight = canvas.height;

var cx = 3.2;
var rx = 0.5;
var cy = 0.5;
var ry = 0.5;

var xres = 2*rx/mcbwidth;
var yres = 2*ry/mcbheight;

function plot(mx,my){
	pxx = (mx-(cx-rx))/(2*rx)*mcbwidth;
	pxy = mcbheight-((my-(cy-ry))/(2*ry)*mcbheight);
	ctx.fillRect(pxx,pxy,1,1);
}

x=cx-rx;
y=0.5;
while (x<=cx+rx){
	for(i=0;i<100;i++){
		y=x*y*(1-y);
		plot(x,y);
		console.log(x,y);
	}
	x += xres;
}
