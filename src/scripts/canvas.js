function carvasCloth(canvasID){
  this.canvas_ID = canvasID;
  this.canvas_ctx = null;//绘图的2d独享
  this.canvas_maxWidth = null;//表示canvas的实际宽度
  this.canvas_maxHeight = null;//表示canvas的实际高度
  this.canvas_width = null;//坐标轴里x轴的相对宽度
  this.canvas_height = null;//坐标轴力y轴相对高度
  this.canvas_unit = null;//表示canvas中1单位等于canvasUnitpx
  this.canvasObj = null;//canvas对象
  this.multiple = 2;//表示精度
  this.gY = function(y){return this.canvas_maxHeight - this.canvas_unit * y;}
  this.gYAdd = function(y1,y2){return (y1 - this.canvas_maxHeight + y2);}
  this.gYsubtract = function(y1,y2){return (y1 + this.canvas_maxHeight - y2);}
  this.gX = function(x){return this.canvas_unit * x;}
  this.gW = function(unit){return this.canvas_unit * unit;}
  //注:此中单位1不是表示1px,并把坐标轴从原先的-y+x改为+y+x
  this.initCloth()
}
//初始化参数
carvasCloth.prototype.initCloth = function(){
  //html canvas例子--<canvas id="myCanvas" width="375" height="200" layoutwidth="375" style="background-color:white;" ></canvas>
  var canvas = document.getElementById(this.canvas_ID)
  this.canvasObj = canvas;
  var clientWidth = document.documentElement.clientWidth;
  if(clientWidth > 750) clientWidth = 750;
  var LayoutWidth = canvas.getAttribute("layoutwidth")//表示canvas设计稿的宽度
  var canvasUnit = clientWidth/LayoutWidth;//表示canvas画布内的单位的宽度
  var canvasHtmlWidth = canvas.getAttribute("width");
  var canvasHtmlHeight = canvas.getAttribute("height");
  this.canvas_width = canvasHtmlWidth;
  this.canvas_height = canvasHtmlHeight;
  var canvasActullyWidth = canvasHtmlWidth*canvasUnit;
  var canvasActullyHeight = canvasHtmlHeight*canvasUnit;
  canvas.setAttribute('width',canvasActullyWidth*this.multiple+'px');
  canvas.setAttribute('height',canvasActullyHeight*this.multiple+'px');
  canvas.style.width = canvasActullyWidth+'px';
  canvas.style.height = canvasActullyHeight+'px';
  this.canvas_ctx = canvas.getContext('2d');
  this.canvas_maxWidth = this.canvas_ctx.canvas.width;
  this.canvas_maxHeight = this.canvas_ctx.canvas.height;
  this.canvas_unit = canvasUnit*this.multiple;
}
//画点
carvasCloth.prototype.drawPoint = function(ctx,style,origin,radii){
  ctx.save();
  ctx.beginPath();
  ctx.arc(origin.x,origin.y,radii,0,2*Math.PI);
  ctx.fillStyle=style;
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}
//取n-m随机数
carvasCloth.prototype.getRedomn = function(n,m){
    var c = m-n+1;
    return Math.floor(Math.random() * c + n);
}
