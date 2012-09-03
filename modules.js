function curveTL(){
	ctx.beginPath();
	ctx.moveTo(0,100);
  	ctx.quadraticCurveTo(0, 0, 100, 0);
	ctx.lineTo(100,100);
	ctx.fill();
}
function curveTR(){
	ctx.beginPath();
	ctx.moveTo(100, 100);
  	ctx.quadraticCurveTo(100, 0, 0, 0);
	ctx.lineTo(0,100);
	ctx.fill();
}
function curveBL(){
	ctx.beginPath();
	ctx.moveTo(100,100);
  	ctx.quadraticCurveTo(0, 100, 0, 0);
	ctx.lineTo(100,0);
	ctx.fill();
}
function curveBR(){
	ctx.beginPath();
	ctx.moveTo(0,100);
  	ctx.quadraticCurveTo(100, 100, 100, 0);
	ctx.lineTo(0,0);
	ctx.fill();
}
function triangleBL(){
	ctx.beginPath();
	ctx.lineTo(100,0);
	ctx.lineTo(100,100);
	ctx.lineTo(0,0);
	ctx.fill();
}
function triangleTL(){
	ctx.beginPath();
	ctx.lineTo(100,100);
	ctx.lineTo(100,0);
	ctx.lineTo(0,100);
	ctx.fill();
}
function triangleBR(){
	ctx.beginPath();
	ctx.lineTo(0,0);
	ctx.lineTo(0,100);
	ctx.lineTo(100,0);
	ctx.fill();
}
function triangleTR(){
	ctx.beginPath();
	ctx.lineTo(0,100);
	ctx.lineTo(0,0);
	ctx.lineTo(100,100);
	ctx.fill();
}
function drawModules() {
	curveBL();
	ctx.translate(110,0);
	curveTL();
	ctx.translate(110,0);
	curveBR();
	ctx.translate(110,0);
	curveTR();	
	ctx.translate(-330, 110);
	triangleBL();
	ctx.translate(110,0);
	triangleTL();
	ctx.translate(110,0);
	triangleBR();
	ctx.translate(110,0);
	triangleTR();	
};

