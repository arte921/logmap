var mcbwidth = 800;
var mcbheight = 800;

var cx = 3.2;
var rx = 0.5;
var cy = 0.75;
var ry = 0.25;

const gpu = new GPU();
const render = gpu.createKernel(function(mcbwidth,mcbheight,cx,cy,rx,ry){

}).setOutput([mcbwidth,mcbheight]).setGraphical(true);

render();
document.getElementById('mainframe').appendChild(render.canvas);
