var mysliderItemIndex = 0;
var VIN = pageUnit.GetQueryString("vin")//车架号
var mobileWidth = document.documentElement.clientWidth;
var myslider = new iSlider({
    wrap: "#wrap",
    item: ".item",
    itemTotal: 2,
    onslide: function(index,total) {
        mysliderItemIndex = index;
        pageDeploy.setSliderStyle(index,total),
        animationControl(index,total)
    }
});
var myCanvasEarth = new earthCanvas("myCanvasEarth")
var myCanvasStopcock = new stopcockCanvas("myCanvasStopcock")
var myCanvasStopcockBack = new dripStoke("myCanvasStopcockBack")
var earthRotateObj = new earthTouch("myCanvasEarth","earthImg")//初始化地球交互
//动画控制
function animationControl(index,total){
  if(index == 0){
    getEarthData()//获取数据
    if(!!VIN == true){
      earthCanvasInit()//初始化里程页面动画
      stopcockCanvasCancel()//取消油耗页面动画
    }
  }else {
    getStopcockData()//获取数据
    if(!!VIN == true){
      stopcockCanvasInit()//初始化油耗页面动画
      earthCanvasCancel()//取消封面动画
    }
  }
}
//------------------------------------------------------------数据方面----------------------------------------------------------
//获取封面数据
function getEarthData(){
  if(window.isEarthDataInit == true){
    return;
  }
  window.isEarthDataInit = true;
  earthDataRequest()
}
function earthDataRequest(){
  setEarthData({kilometreCount:2.5,lastDate:"2017-05-05"})
  return
  if(!!VIN == false){
    showError($(".item-1 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"1")
    MGDialog.alert("没有找到的您的车架号")
    return;
  }
  $.ajax({
    url:this.config.domain+this.config.url.mileageUrl,
    type:"post",
    dataType:"json",
    data:{vin:VIN},
    beforeSend:function(){
      $(".global_loading").show()
    },
    success:function(data){
      setEarthData(data)
    },
    error:function(){
      showError($(".item-1 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"2")
    },
    complete:function(){
      $(".global_loading").hide()
    }
  });
}
//设置封面数据
function setEarthData(data){
  if(data == null || typeof(data.kilometreCount) == "undefined" ||  isNaN(data.kilometreCount/1) == true ){
    showError($(".item-1 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"3")
    return;
  }
  if(data.kilometreCount == 0 || typeof(data.lastDate) == "undefined"){
    showError($(".item-1 .global_error"),config.errorMes.noWeekData,config.errorImg.noWeekDataImg,"4")
    return;
  }
  var dateFilter = data.lastDate.split(' ');
  if(dateFilter.length == 0){
    showError($(".item-1 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"5")
    return;
  }
  dateFilter = dateFilter[0]
  date = dateFilter.split('-');
  if(date.length == 0){
    date = dateFilter.split('.');
  }
  if(date.length < 3 ){
    showError($(".item-1 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"6")
    return;
  }
  showItem1()
  var milliage = data.kilometreCount;
  $(".item-1 .global_error").hide()
  $(".content_date").html("截止到"+date[0]+"年"+date[1]+"月"+date[2]+"日")
  $(".content_distance").html("你行驶了"+milliage+"公里，相当于绕地球:")
  var circleNum = milliage/39250;
  circleNum = circleNum.toFixed(1);
  $('.content_round_num').text(circleNum)
  $(".content_round_unit").text("圈")
  for(var i = 0; i < config.mileageTextConfig.length; i++){
    var mileageTextConfigItem = config.mileageTextConfig[i]
    if(circleNum < mileageTextConfigItem.num){
      $(".content_praise").html(mileageTextConfigItem.text)
      break;
    }
  }
}
//获取水龙头页面数据
function getStopcockData(){
  if(window.isStopcockDataInit == true){
    return;
  }
  window.isStopcockDataInit = true;
  stopcockDataRequest()
}
function stopcockDataRequest(){
  if(!!VIN == false){
    showError($(".item-2 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"7")
    MGDialog.alert("没有匹配的您的车架号")
    return;
  }
  $.ajax({
    url:this.config.domain+this.config.url.usageUrl,
    type:"post",
    dataType:"json",
    data:{vin:VIN,page:-1,pageType:0},
    beforeSend:function(){
      $(".global_loading").show()
    },
    success:function(data){
      setStopcockData(data)
    },
    error:function(){
      showError($(".item-2 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"8")
    },
    complete:function(){
      $(".global_loading").hide()
    }
  });
}
//设置水龙头页面数据
function setStopcockData(data){
  if(data == null || typeof(data.rank) == "undefined" || typeof(data.oilWear) == "undefined" || typeof(data.mileage) == "undefined" || typeof(data.oilCall) == "undefined" || typeof(data.maxDistance) == "undefined" || typeof(data.rankTotal) == "undefined" || typeof(data.fuelConsumption) == "undefined" || isNaN(data.rank/1) == true || isNaN(data.oilWear/1) == true || isNaN(data.mileage/1) == true || isNaN(data.oilCall/1) == true || isNaN(data.maxDistance/1) == true || isNaN(data.rankTotal/1) == true || isNaN(data.fuelConsumption/1) == true){
    showError($(".item-2 .global_error"),config.errorMes.netError,config.errorImg.netErrorImg,"9")
    return;
  }
  if(data.rank == 0 && data.oilWear == 0 && data.mileage == 0 && data.oilCall == 0 && data.maxDistance == 0 && data.rankTotal == 0 ){
    showError($(".item-2 .global_error"),config.errorMes.noWeekData,config.errorImg.noWeekDataImg,"10")
    return;
  }
  showItem2()
  $(".item-2 .global_error").hide()//隐藏错误信息
  //设置文案
  $(".ct_mes").text(config.pageText.usageTitle)
  $(".ct_text").text(config.pageText.usageTitleUnit)
  $(".cbItemLeft .cbiTop").text(config.pageText.usageItemLeft)
  $(".cbItemLeft .cbi_unit").text(config.pageText.usageItemLeftUnit)
  $(".cbItemMiddle .cbiTop").text(config.pageText.usageItemCenter)
  $(".cbItemMiddle .cbi_unit").text(config.pageText.usageItemCenterUnit)
  $(".cbItemRight .cbiTop").text(config.pageText.usageItemRight)
  $(".cbItemRight .cbi_unit").text(config.pageText.usageItemRightUnit)
  //计算排名
  var ranking = data.rank/data.rankTotal;
  if(data.rank == 0 || data.rankTotal == 0){
    ranking = 0;
  }
  if(data.rank == 0 && data.rankTotal == 0){
    data.winCarName = "";
  }
  var winRanking = 1 - ranking;//战胜同系列车
  //ranking = ranking.toFixed(2)
  winRanking = winRanking.toFixed(2)
  //计算平均油耗的变化来显示动画
  var AFEValue = data.oilWear;//本周油耗
  var standardAFEValue = data.fuelConsumption;//每个系列车的标准油耗值
  var AFEindex = 0;
  if(AFEValue < standardAFEValue*config.AFE.l1){
    AFEindex = 0;
  }else if(AFEValue > standardAFEValue*config.AFE.l2){
    AFEindex = 2;
  }else{
    AFEindex = 1;
  }
  var stopcockDataTextConfigItem = config.stopcockDataTextConfig[AFEindex]
  myCanvasStopcockBack.stopcockType = stopcockDataTextConfigItem.stopcockType;
  $(".title_title").html(stopcockDataTextConfigItem.title)
  $(".title_content").html(stopcockDataTextConfigItem.text)
  var oilWearValue = data.oilWear;
  var  mileageValue = data.mileage;
  var oilCallValue = data.oilCall;
  var maxDistanceValue = data.maxDistance;
  //本周平均油耗
  $(".ct_num").text(oilWearValue)
  if(data.oilWearCompare > 0){
    $(".ct_numtextPercent .percentIcon").addClass("percentIconTop").append('<span class="perArrow"></span><span class="perBody"></span>')
  }else{
    $(".ct_numtextPercent .percentIcon").addClass("percentIconBottom").append('<span class="perBody"></span><span class="perArrow"></span>')
  }
  if(typeof(data.oilWearCompare) == "undefined" || !!data.oilWearCompare == false){
    $(".ct_numtextPercent").hide()
  }else{
      var oilWearCompareValue = Math.abs((data.oilWearCompare*100).toFixed(2));
      $(".ctp_percent").text(oilWearCompareValue+"%")
  }

  //本周行驶里程
  $(".cbItemLeft .cbi_num").text(mileageValue)
  if(data.mileageCompare > 0){
    $(".cbItemLeft .percentIcon").addClass("percentIconSmallTop").append('<span class="perArrow borderBottomBolorGreen"></span><span class="perBody backColorGreen"></span>')

  }else{
    $(".cbItemLeft .percentIcon").addClass("percentIconSmallBottom").append('<span class="perBody backColorRed "></span><span class="perArrow borderTopBolorRed"></span>')
  }
  if(typeof(data.mileageCompare) == "undefined" || !!data.mileageCompare == false ){
    $(".cbiBottomCil").hide()
  }else{
      var mileageCompareValue = Math.abs((data.mileageCompare*100).toFixed(2));
      if(("" + mileageCompareValue + mileageValue).length > 8){
        changeOilvearDataShow()
      }
      $(".cil_percent").text(mileageCompareValue+"%")
  }

  //本周总计用油
  $(".cbItemMiddle .cbi_num").text(oilCallValue)
  if(data.oilCallCompare > 0){
    $(".cbItemMiddle .percentIcon").addClass("percentIconSmallTop").append('<span class="perArrow"></span><span class="perBody"></span>')
  }else{
    $(".cbItemMiddle .percentIcon").addClass("percentIconSmallBottom").append('<span class="perBody"></span><span class="perArrow"></span>')
  }
  if(typeof(data.oilCallCompare) == "undefined" || !!data.oilCallCompare == false){
    $(".cbiBottomCim").hide()
  }else{
    var oilCallCompareValue = Math.abs((data.oilCallCompare*100).toFixed(2));
    if(("" + oilCallCompareValue + oilCallValue).length > 10){
      changeOilvearDataShow()
    }
    $(".cim_percent").text(oilCallCompareValue+"%")
  }

  //本周最长单次里程
  $(".cbItemRight .cbi_num").text(maxDistanceValue)
  if(data.maxDistanceCompare > 0){
    $(".cbItemRight .percentIcon").addClass("percentIconSmallTop").append('<span class="perArrow"></span><span class="perBody"></span>')
  }else{
    $(".cbItemRight .percentIcon").addClass("percentIconSmallBottom").append('<span class="perBody"></span><span class="perArrow"></span>')
  }

  if(typeof(data.maxDistanceCompare) == "undefined" || data.maxDistanceCompare == false){
    $(".cbiBottomCir").hide()
  }else{
    var maxDistanceCompareValue = Math.abs((data.maxDistanceCompare*100).toFixed(2));
    if(("" + maxDistanceCompareValue + maxDistanceValue).length > 10){
      changeOilvearDataShow()
    }
    $(".cir_percent").text(maxDistanceCompareValue+"%")
  }
  //战胜同系列车
  if(!!data.winCarName == false){
    $(".cm_mes").hide()
  }else{
    //击败其他车型比例
    if(winRanking <= 0.1){
      winRanking = 0.1;
    }
    $(".cm_mes").html("油耗击败<span class='cm_mes_percent'>"+winRanking*100+"%</span>的<span class='cm_mes_carname'>"+data.winCarName+"</span>车主")
    if($(".cm_mes").width() > mobileWidth){
      $(".content_mes").addClass("textScroolPanel");
      $(".cm_mes").addClass("textScrool");
    }
  }

}
//----------------------------------------------------------动画方面-------------------------------------------------------------------------
//绘制地球动画
function earthCanvasInit(){
  myCanvasEarth.start()
}
//取消地球动画
function earthCanvasCancel(){
  myCanvasEarth.cancel()
}
//绘制水龙头动画
function stopcockCanvasInit(){
  myCanvasStopcock.init()
  myCanvasStopcockBack.dripStart()
}
//取消水龙头动画
function stopcockCanvasCancel(){
  myCanvasStopcockBack.cancel()
}

//错误页面点击重新请求数据
$(document).on("click",".global_error",function(){
  var index = $(this).data("index");
  switch (index) {
    case 1:
      earthDataRequest()
      break;
    case 2:
      stopcockDataRequest()
      break;
    default:
  }
});
//显示隐藏内容框
function showItem1(){
  $(".item-1 .showStatue").show()
}
function hideItem1(){
  $(".item-1 .showStatue").hide()
}
function showItem2(){
  $(".item-2 .showStatue").show()
}
function hideItem2(){
  $(".item-2 .showStatue").hide()
}
//显示错误信息
function showError(panel,text,img,num){
  panel.show().attr("errortype",num).find(".global_error_text").text(text)
  panel.find(".global_error_img").attr("src",img)
}
//切换显示效果
function changeOilvearDataShow(){
  $(".cbiMiddle .cbiBottomCil").remove()
  $(".cbiMiddle .cbiBottomCim").remove()
  $(".cbiMiddle .cbiBottomCir").remove()
  $(".cbItem .cbiMiddle").addClass("items")
  $(".cbItem .cbiBottom").addClass("items")
}
//开始地球交互
earthRotateObj.init()
