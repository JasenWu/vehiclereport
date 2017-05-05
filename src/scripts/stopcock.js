function stopcockCanvas(canvasID,index){
  carvasCloth.call(this,canvasID);
  this.isInit = false;//判断是否初始化
  this.RFAID = null;//requestAnimationFrameID
  this.stopcockType = "";
  this.dripPositionY = 460;//表示大水滴的y坐标
  this.dripYUnit = 0.1;//大水滴低落的每一次的幅度
  this.dripYUnitCopy = 0.1//大水滴低落的每一次的幅度拷贝
  this.dripYincrease = 0.2;//大水滴加速度低落的单位加速度
  this.stopcockImg = new Image();//水龙头图片对象
  this.stopcockImgObj = {};//存放水龙头图片信息

  this.waterFlowBeisaierWidth = 10;//水流贝塞尔宽度
  this.waterFlowBeisaierHeight = 20;//水流贝塞尔高度
  this.waterFlowBeisaierNum = 25;//水流贝塞尔个数
  this.waterFlowBeisaierDegreen = 10;//水流贝塞尔弯曲程度
  this.waterFlowStartX = 342;//中等水流的x坐标
  this.waterFlowEndX = 398;//中等水流的x结束坐标

  this.bigWaterFlowStartX = 342;//水流的x坐标
  this.bigWaterFlowStartXCopy = 342//水流的x坐标拷贝
  this.bigWaterFlowEndX = 387;//水流的x结束坐标
  this.bigWaterFlowEndXCopy = 387;//水流的x结束坐标拷贝
  this.waterFlowStartY = 480;//水流的y坐标
  this.waterFlowStartYCopy = 480;//水流的y坐标拷贝
  this.waterFlowSpeed = 2;//这个是控制中等水流的流速
  this.bigWaterFlowYSpeed = 3;//这个是控制大水流的流速Y
  this.bigWaterFlowXSpeed = 0.39;//这个是控制大水流的流速X,注意如果y速度改变 则这个X速度也要改变,具体规律是Y翻倍的话,X也要翻倍,如果waterFlowBeisaierDegreen变量更改的话,这个x也要对应的更改

}
//实现继承
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = carvasCloth.prototype;
  //将实例作为子类的原型
  stopcockCanvas.prototype = new Super();
})();
//初始化
stopcockCanvas.prototype.init = function(){
  if(this.isInit == true){
    return;
  }
  if(window.fps < 24){
    if(window.fps < 10){
      window.fps = 10;
    }
    this.dripYUnit = this.dripYUnit*60/window.fps;//大水滴低落的每一次的幅度
    this.dripYUnitCopy = this.dripYUnitCopy*60/window.fps//大水滴低落的每一次的幅度拷贝
    this.dripYincrease = this.dripYincrease*60/window.fps;//大水滴加速度低落的单位加速度
  }
  this.isInit = true;
  var _this = this;
  this.stopcockImg.src = "../src/images/stopcock.png";
  this.stopcockImg.onload = function() {
    //把图像信息保存在image里面
    _this.stopcockImgObj.obj = _this.stopcockImg;
    _this.stopcockImgObj.w = _this.gW(426)
    _this.stopcockImgObj.h = _this.gW(263)
    _this.stopcockImgObj.x = _this.gW(_this.canvas_width-426)
    _this.stopcockImgObj.y = _this.gY(693);
    _this.stopcockImg.loadover = true;
    _this.canvas_ctx.drawImage(_this.stopcockImgObj.obj,_this.stopcockImgObj.x,_this.stopcockImgObj.y,_this.stopcockImgObj.w,_this.stopcockImgObj.h);//画水龙头
  };
  //添加渐变蒙版
  var linerG = this.canvas_ctx.createLinearGradient(this.gX(this.canvas_width/2),this.gY(this.canvas_height/4),this.gX(this.canvas_width/2),this.gY(0));
  linerG.addColorStop(0.2,"rgba(32,31,52,0)");
  linerG.addColorStop(0.8,"rgba(32,31,52,1)");
  this.canvas_ctx.fillStyle = linerG;
  this.canvas_ctx.rect(0,this.gY(this.canvas_height/4),this.canvas_maxWidth,this.gW(this.canvas_height/4));
  this.canvas_ctx.fill();
}


function dripStoke(canvasID){
  stopcockCanvas.call(this,canvasID);
  this.dripImg = new Image();//大水滴图片
  this.dripImgObj = {};//存放大水滴图片信息
}
//实现继承
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = stopcockCanvas.prototype;
  //将实例作为子类的原型
  dripStoke.prototype = new Super();
})();
//水滴动画初始化
dripStoke.prototype.dripInit = function(){
  pageUnit.load($(".item-2"),"showStatue")//添加加载效果
  this.isInit = true;
  var _this = this;
  this.dripImg.src = "../src/images/drip.png";
  this.dripImg.onload = function() {
    //把图像信息保存在image里面
    _this.dripImgObj.obj = _this.dripImg;
    _this.dripImgObj.w = _this.gW(95)
    _this.dripImgObj.h = _this.gW(150)
    _this.dripImgObj.x = _this.gW(315)
    _this.dripImgObj.y = _this.gY(_this.dripPositionY);//大水滴的y坐标
    _this.dripImgObj.loadover = true;
  };
}
//水滴动画启动
dripStoke.prototype.dripStart = function(){
  this.RFAID = RAF(this.dripStart.bind(this));
  if(this.isInit == false){
    this.dripInit();
    return;
  }
  if(!!this.dripImgObj.loadover == false || myCanvasStopcock.stopcockImg.loadover == false){
    return;
  }
  if(this.stopcockType == ""){
    return;
  }
  pageUnit.loadFinish($(".item-2"))//添加加载效果
  this.canvas_ctx.clearRect(0,0,this.canvas_maxWidth,this.canvas_maxHeight);//清除画布

  switch (this.stopcockType) {
    case "low":
      this.dripAnimation()
      break;
    case "middle":
      this.waterFlow()
      break;
    case "hign":
      this.bigWaterFlow()
      break;
    default:
  }
}
//取消动画
dripStoke.prototype.cancel = function(){
  cancelAnimationFrame(this.RFAID)
}
//大水滴动画
dripStoke.prototype.dripAnimation = function(){
  if($(".dripWaterPanel").find(".dripWater").length == 0){
    if($(".dripWaterPanel").is(":hidden")){
      $(".dripWaterPanel").show()
    }
    $(".dripWaterPanel").append($('<img src="../src/images/drip.png" class="dripWater">'))
  }
  cancelAnimationFrame(this.RFAID)
}
//水流
dripStoke.prototype.waterFlow = function(){
    if(!$(".dripWaterPanel").is(":hidden")){
      $(".dripWaterPanel").hide()
    }
    var middleX = this.waterFlowStartX + (this.waterFlowEndX - this.waterFlowStartX)/2
    this.canvas_ctx.beginPath();
    this.canvas_ctx.strokeStyle = "#454170";
    this.canvas_ctx.fillStyle = "#302d50";
    this.canvas_ctx.lineWidth = 5
    this.canvas_ctx.moveTo(this.gX(middleX),this.gY(this.waterFlowStartY));
    for(var i =0; i < this.waterFlowBeisaierNum; i++)
    {
      var YP = this.waterFlowStartY-this.waterFlowBeisaierHeight*i;
      var XP = this.waterFlowStartX-this.waterFlowBeisaierWidth;
      var YE = this.waterFlowStartY-this.waterFlowBeisaierHeight*(i+1);
      if(i%2 == 0){
        var s = {x:this.gX(this.waterFlowStartX),y:this.gY(YP)}
        var c1 = {x:this.gX(this.waterFlowStartX),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
        var c2 = {x:this.gX(XP),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
        var e = {x:this.gX(XP),y:this.gY(YE)}
      }else{
        var s = {x:this.gX(XP),y:this.gY(YP)}
        var c1 = {x:this.gX(XP),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
        var c2 = {x:this.gX(this.waterFlowStartX),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
        var e = {x:this.gX(this.waterFlowStartX),y:this.gY(YE)}
      }
      this.canvas_ctx.lineTo(s.x,s.y);
      this.canvas_ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, e.x, e.y)
    }
    this.canvas_ctx.lineTo(this.gX(middleX),e.y);
    this.canvas_ctx.fill()
    this.canvas_ctx.moveTo(this.gX(middleX),this.gY(this.waterFlowStartY));
    for(var j =0; j < this.waterFlowBeisaierNum; j++)
    {
      var YP = this.waterFlowStartY-this.waterFlowBeisaierHeight*j;
      var XP = this.waterFlowEndX-this.waterFlowBeisaierWidth;
      var YE = this.waterFlowStartY-this.waterFlowBeisaierHeight*(j+1);
      if(j%2 == 1){
        var s = {x:this.gX(this.waterFlowEndX),y:this.gY(YP)}
        var c1 = {x:this.gX(this.waterFlowEndX),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
        var c2 = {x:this.gX(XP),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
        var e = {x:this.gX(XP),y:this.gY(YE)}
      }else{
        var s = {x:this.gX(XP),y:this.gY(YP)}
        var c1 = {x:this.gX(XP),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
        var c2 = {x:this.gX(this.waterFlowEndX),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
        var e = {x:this.gX(this.waterFlowEndX),y:this.gY(YE)}
      }
      this.canvas_ctx.lineTo(s.x,s.y);
      this.canvas_ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, e.x, e.y)
    }
    this.canvas_ctx.lineTo(this.gX(middleX),e.y);
		this.canvas_ctx.fillStyle = "#322f56";
    this.canvas_ctx.fill()
    this.canvas_ctx.strokeStyle = "#454170";
    this.canvas_ctx.stroke();
    this.canvas_ctx.closePath();
    //构造动画
    this.waterFlowStartY = this.waterFlowStartY - this.waterFlowSpeed
    if(this.waterFlowStartYCopy - this.waterFlowStartY > this.waterFlowBeisaierHeight*2){
      this.waterFlowStartY = this.waterFlowStartYCopy;
    }
}
//大水流
dripStoke.prototype.bigWaterFlow = function(){
    if(!$(".dripWaterPanel").is(":hidden")){
      $(".dripWaterPanel").hide()
    }
    var middleX = this.bigWaterFlowStartX + (this.bigWaterFlowEndX - this.bigWaterFlowStartX)/2
    var X1 = this.bigWaterFlowStartX;
    var X2 = this.bigWaterFlowStartX - this.waterFlowBeisaierWidth;
    var EX1 = this.bigWaterFlowEndX;
    var EX2 = this.bigWaterFlowEndX + this.waterFlowBeisaierWidth;
    this.canvas_ctx.beginPath();
    this.canvas_ctx.strokeStyle = "#454170";
    this.canvas_ctx.fillStyle = "#302d50";
    this.canvas_ctx.lineWidth = 5
    this.canvas_ctx.moveTo(this.gX(middleX),this.gY(this.waterFlowStartY));
    for(var i =0; i < this.waterFlowBeisaierNum; i++)
    {
      var YP = this.waterFlowStartY-this.waterFlowBeisaierHeight*i;
      var YE = this.waterFlowStartY-this.waterFlowBeisaierHeight*(i+1);
      if(i != 0){
        X1 = X2;
        if(i%2 == 0){
          X2 = X1 - this.waterFlowBeisaierWidth;
        }else{
          X2 = X1 + this.waterFlowBeisaierWidth/2;
        }
      }
      var s = {x:this.gX(X1),y:this.gY(YP)}
      var c1 = {x:this.gX(X1),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
      var c2 = {x:this.gX(X2),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
      var e = {x:this.gX(X2),y:this.gY(YE)}
      this.canvas_ctx.lineTo(s.x,s.y);
      this.canvas_ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, e.x, e.y)
    }
    this.canvas_ctx.lineTo(this.gX(middleX),e.y);
    this.canvas_ctx.fill()
    this.canvas_ctx.moveTo(this.gX(middleX),this.gY(this.waterFlowStartY));
    for(var j =0; j < this.waterFlowBeisaierNum; j++)
    {
      var YP = this.waterFlowStartY-this.waterFlowBeisaierHeight*j;
      var YE = this.waterFlowStartY-this.waterFlowBeisaierHeight*(j+1);
      if(j != 0){
        EX1 = EX2;
        if(j%2 == 0){
          EX2 = EX1 + this.waterFlowBeisaierWidth;

        }else{
          EX2 = EX1 - this.waterFlowBeisaierWidth/2;
        }
      }
      var s = {x:this.gX(EX1),y:this.gY(YP)}
      var c1 = {x:this.gX(EX1),y:this.gY(YP-this.waterFlowBeisaierDegreen)}
      var c2 = {x:this.gX(EX2),y:this.gY((YE)+this.waterFlowBeisaierDegreen)}
      var e = {x:this.gX(EX2),y:this.gY(YE)}
      this.canvas_ctx.lineTo(s.x,s.y);
      this.canvas_ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, e.x, e.y)
    }
    this.canvas_ctx.lineTo(this.gX(middleX),e.y);
		this.canvas_ctx.fillStyle = "#322f56";
    this.canvas_ctx.fill()
    this.canvas_ctx.strokeStyle = "#454170";
    this.canvas_ctx.stroke();
    this.canvas_ctx.closePath();
    //构造动画
    this.waterFlowStartY = this.waterFlowStartY - this.bigWaterFlowYSpeed
    this.bigWaterFlowStartX = this.bigWaterFlowStartX - this.bigWaterFlowXSpeed
    this.bigWaterFlowEndX = this.bigWaterFlowEndX + this.bigWaterFlowXSpeed
    if(this.waterFlowStartYCopy - this.waterFlowStartY > this.waterFlowBeisaierHeight*2){
      this.waterFlowStartY = this.waterFlowStartYCopy
      this.bigWaterFlowStartX = this.bigWaterFlowStartXCopy
      this.bigWaterFlowEndX = this.bigWaterFlowEndXCopy
    }
}
