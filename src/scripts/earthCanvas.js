function earthCanvas(canvasID){
  carvasCloth.call(this,canvasID);
  this.isInit = false;//表示是否初始化
  this.RFAID = null;//requestAnimationFrameID
  this.carImg = new Image()//汽车图片对象
  this.carImgObj = {}//存放汽车图片信息
  this.cloudAImg = new Image()//云朵A图片对象
  this.cloudAImgObj = {}//存放云朵A图片信息
  this.cloudBImg = new Image()//云朵B图片对象
  this.cloudBImgObj = {}//存放云朵B图片信息
  this.rhombusCloudAImg = new Image()//菱形云朵A图片对象
  this.rhombusCloudAImgObj = {}//存放菱形云朵A图片信息
  this.rhombusCloudBImg = new Image()//菱形云朵A图片对象
  this.rhombusCloudBImgObj = {}//存放菱形云朵A图片信息
  this.carX = 168;//表示汽车的X轴位置
  this.carDegreen = 2;//表示汽车震动的浮动幅度
  this.carTopSpeed = 0.3;//表示汽车上震动的频率
  this.carBottomSpeed = 0.15;//表示汽车下震动的频率
  this.cloudAX = -180;//表示云朵A的X坐标
  this.cloudADegreen = 70;//表示云朵A的浮动幅度
  this.cloudASpeed = 0.3;//表示云朵A的频率
  this.cloudBX = 410;//表示云朵B的X坐标
  this.cloudBDegreen = 40;//表示云朵B的浮动幅度
  this.cloudBSpeed = 0.17;//表示云朵B的频率
  this.rhombusCloudAY = 355;//表示菱形云朵A的Y坐标
  this.rhombusCloudADegreen = 30;//表示菱形云朵A的浮动幅度
  this.rhombusCloudASpeed = 0.13;//表示菱形云朵A的频率
  this.rhombusCloudBY = 560//表示菱形云朵B的Y坐标
  this.rhombusCloudBDegreen = 100;//表示菱形云朵B的浮动幅度
  this.rhombusCloudBSpeed = 0.43;//表示菱形云朵B的频率
}
//实现继承
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = carvasCloth.prototype;
  //将实例作为子类的原型
  earthCanvas.prototype = new Super();
})();
//初始化
earthCanvas.prototype.init = function(){
  if(this.isInit == true){
    return;
  }
  this.isInit = true;
  var _this = this;
  this.carImg.src = "../src/images/car.png";
  this.carImg.onload = function() {
    _this.carImgObj.loadover = true;
    _this.carImgObj.obj = _this.carImg;
    _this.carImgObj.w = _this.gW(129)
    _this.carImgObj.h = _this.gW(116)
    _this.carImgObj.x = _this.carX;
    _this.carImgObj.y =  580;
  };
  this.cloudAImg.src = "../src/images/cloud.png";
  this.cloudAImg.onload = function() {
    _this.cloudAImgObj.loadover = true;
    _this.cloudAImgObj.obj = _this.cloudAImg;
    _this.cloudAImgObj.w = _this.gW(251)
    _this.cloudAImgObj.h = _this.gW(173)
    _this.cloudAImgObj.x = _this.cloudAX;
    _this.cloudAImgObj.y =  560;
  };
  this.cloudBImg.src = "../src/images/cloud.png";
  this.cloudBImg.onload = function() {
    _this.cloudBImgObj.loadover = true;
    _this.cloudBImgObj.obj = _this.cloudBImg;
    _this.cloudBImgObj.w = _this.gW(251)
    _this.cloudBImgObj.h = _this.gW(173)
    _this.cloudBImgObj.x = _this.cloudBX;
    _this.cloudBImgObj.y =  340;
  };
  this.rhombusCloudAImg.src = "../src/images/rhombusCloud.png";
  this.rhombusCloudAImg.onload = function() {
    _this.rhombusCloudAImgObj.loadover = true;
    _this.rhombusCloudAImgObj.obj = _this.rhombusCloudAImg;
    _this.rhombusCloudAImgObj.w = _this.gW(179)
    _this.rhombusCloudAImgObj.h = _this.gW(110)
    _this.rhombusCloudAImgObj.x = 70;
    _this.rhombusCloudAImgObj.y =  _this.rhombusCloudAY;
  };
  this.rhombusCloudBImg.src = "../src/images/rhombusCloud.png";
  this.rhombusCloudBImg.onload = function() {
    _this.rhombusCloudBImgObj.loadover = true;
    _this.rhombusCloudBImgObj.obj = _this.rhombusCloudBImg;
    _this.rhombusCloudBImgObj.w = _this.gW(322)
    _this.rhombusCloudBImgObj.h = _this.gW(198)
    _this.rhombusCloudBImgObj.x = _this.canvas_width - 150;
    _this.rhombusCloudBImgObj.y =  _this.rhombusCloudBY;
  };
}
//开始动画
earthCanvas.prototype.start = function(){
  this.RFAID = RAF(this.start.bind(this));
  if(this.isInit == false){
    this.init();
    return;
  }
  if(  !!this.carImgObj.loadover == false || !!this.rhombusCloudAImgObj.loadover == false || !!this.rhombusCloudBImgObj.loadover == false){
    return;
  }
  this.canvas_ctx.clearRect(0,0,this.canvas_maxWidth,this.canvas_maxHeight);//清除画布
  this.cloudAMove()
  this.cloudBMove()
  this.carMove()
  this.rhombusCloudAMove()
  this.rhombusCloudBMove()
}
//取消动画
earthCanvas.prototype.cancel = function(){
  cancelAnimationFrame(this.RFAID)
}
//画汽车
earthCanvas.prototype.carMove = function(){
  if(!!this.carImgObj.top == true){
    //处于上升期
    this.carImgObj.x = this.carImgObj.x - this.carTopSpeed
    this.carImgObj.y = this.carImgObj.y + this.carTopSpeed
    if(this.carX - this.carImgObj.x > this.carDegreen){
      this.carImgObj.top = false;//改为下降期
    }
  }else{
    //处于下降期
    this.carImgObj.x = this.carImgObj.x + this.carBottomSpeed
    this.carImgObj.y = this.carImgObj.y - this.carBottomSpeed
    if(this.carX - this.carImgObj.x <= 0){
      this.carImgObj.top = true;//改为上升期
    }
  }
  this.canvas_ctx.drawImage(this.carImgObj.obj,this.gX(this.carImgObj.x),this.gY(this.carImgObj.y),this.carImgObj.w,this.carImgObj.h);//画汽车
}
//画云朵A
earthCanvas.prototype.cloudAMove = function(){
  if(!!this.cloudAImgObj.bottom == true){
    //处于下降期
    this.cloudAImgObj.x = this.cloudAImgObj.x + this.cloudASpeed
    this.cloudAImgObj.y = this.cloudAImgObj.y - this.cloudASpeed
    if(this.cloudAImgObj.x - this.cloudAX > this.cloudADegreen){
      this.cloudAImgObj.bottom = false;//改为下降期
    }
  }else{
    //处于上升期
    this.cloudAImgObj.x = this.cloudAImgObj.x - this.cloudASpeed
    this.cloudAImgObj.y = this.cloudAImgObj.y + this.cloudASpeed
    if(this.cloudAImgObj.x - this.cloudAX <= 0){
      this.cloudAImgObj.bottom = true;//改为上升期
    }
  }
  this.canvas_ctx.drawImage(this.cloudAImgObj.obj,this.gX(this.cloudAImgObj.x),this.gY(this.cloudAImgObj.y),this.cloudAImgObj.w,this.cloudAImgObj.h);//画云朵A
}
//画云朵B
earthCanvas.prototype.cloudBMove = function(){
  if(!!this.cloudBImgObj.top == true){
    //处于上升期
    this.cloudBImgObj.x = this.cloudBImgObj.x - this.cloudBSpeed
    this.cloudBImgObj.y = this.cloudBImgObj.y + this.cloudBSpeed
    if(this.cloudBX - this.cloudBImgObj.x > this.cloudBDegreen){
      this.cloudBImgObj.top = false;//改为下降期
    }
  }else{
    //处于下降期
    this.cloudBImgObj.x = this.cloudBImgObj.x + this.cloudBSpeed
    this.cloudBImgObj.y = this.cloudBImgObj.y - this.cloudBSpeed
    if(this.cloudBX - this.cloudBImgObj.x <= 0){
      this.cloudBImgObj.top = true;//改为上升期
    }
  }
  this.canvas_ctx.drawImage(this.cloudBImgObj.obj,this.gX(this.cloudBImgObj.x),this.gY(this.cloudBImgObj.y),this.cloudBImgObj.w,this.cloudBImgObj.h);//画云朵B
}
//画菱形云朵A
earthCanvas.prototype.rhombusCloudAMove = function(){
  if(!!this.rhombusCloudAImgObj.top == true){
    //处于上升期
    this.rhombusCloudAImgObj.y = this.rhombusCloudAImgObj.y + this.rhombusCloudASpeed
    if(this.rhombusCloudAImgObj.y - this.rhombusCloudAY > this.rhombusCloudADegreen){
      this.rhombusCloudAImgObj.top = false;//改为下降期
    }
  }else{
    //处于下降期
    this.rhombusCloudAImgObj.y = this.rhombusCloudAImgObj.y - this.rhombusCloudASpeed
    if(this.rhombusCloudAImgObj.y - this.rhombusCloudAY <= 0){
      this.rhombusCloudAImgObj.top = true;//改为上升期
    }
  }
  this.canvas_ctx.drawImage(this.rhombusCloudAImgObj.obj,this.gX(this.rhombusCloudAImgObj.x),this.gY(this.rhombusCloudAImgObj.y),this.rhombusCloudAImgObj.w,this.rhombusCloudAImgObj.h);//画云朵B
}
//画菱形云朵B
earthCanvas.prototype.rhombusCloudBMove = function(){
  if(!!this.rhombusCloudBImgObj.bottom == true){
    //处于下降期
    this.rhombusCloudBImgObj.y = this.rhombusCloudBImgObj.y - this.rhombusCloudBSpeed
    if(this.rhombusCloudBY - this.rhombusCloudBImgObj.y > this.rhombusCloudBDegreen){
      this.rhombusCloudBImgObj.bottom = false;//改为下降期
    }
  }else{
    //处于上升期
    this.rhombusCloudBImgObj.y = this.rhombusCloudBImgObj.y + this.rhombusCloudBSpeed
    if(this.rhombusCloudBY - this.rhombusCloudBImgObj.y <= 0){
      this.rhombusCloudBImgObj.bottom = true;//改为上升期
    }
  }
  this.canvas_ctx.drawImage(this.rhombusCloudBImgObj.obj,this.gX(this.rhombusCloudBImgObj.x),this.gY(this.rhombusCloudBImgObj.y),this.rhombusCloudBImgObj.w,this.rhombusCloudBImgObj.h);//画云朵B
}
