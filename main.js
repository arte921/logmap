var mcbwidth = 800;
var mcbheight = 800;

const gpu = new GPU();
const render = gpu.createKernel(function(mcbwidth,mcbheight,cx,cy,rx,ry){
	
}).setOutput([mcbwidth,mcbheight]).setGraphical(true);

render();
document.getElementById('mainframe').appendChild(render.canvas);
