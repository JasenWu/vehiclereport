//-------------------------------------------------------------requestAnimationFrame-----------------------------------------
window.RAF = (function(){
 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
})();
if (!window.cancelAnimationFrame)
  window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
};
//----------------------------------------------------------给安卓使用的关于截屏时候canvas快照的功能------------------------------
//给单个的canvas生成一张快照
function getCanvasPng(canvas,panel,bgColor){
  if($(".item-1 .global_error").is(":hidden") == true){
    var retImgSrc = canvas.canvasObj.toDataURL("image/png");
    panel.append($("<img id='canvarSnapshot' style='background-color:"+bgColor+"' src='"+retImgSrc+"' class='canvarSnapshot' />"))
  }
}
//给多个层叠的canvas生成一张快照
function getCanvasPngMuilte(canvasIDs,panel,bgColor){
  if($(".item-2 .global_error").is(":hidden") == true){
    var retCanvas = document.createElement('canvas');
    var retCtx = retCanvas.getContext('2d');
    retCanvas.width = canvasIDs[0].canvas_maxWidth;
    retCanvas.height = canvasIDs[0].canvas_maxHeight;
    for(var i = 0; i < canvasIDs.length; i++){
      retCtx.drawImage(canvasIDs[i].canvasObj, 0, 0, retCanvas.width, retCanvas.height);
    }
    var retImgSrc = retCanvas.toDataURL("image/png");
    panel.append($("<img id='canvarSnapshot' style='background-color:"+bgColor+"' src='"+retImgSrc+"' class='canvarSnapshot' />"))
  }
}
//删除掉生成的图片-分享结束删除图片
function sharePageOver(){
  $(".canvarSnapshot").remove()
}
//生成图片-分享时候生成一张图片
function sharePage(){
  switch (mysliderItemIndex) {
    case 0:
      getCanvasPng(myCanvasEarth,$(".item-1"),"rgba(255, 255, 255, 0)")
      break;
    case 1:
      getCanvasPngMuilte([myCanvasStopcockBack,myCanvasStopcock],$(".item-2"),"rgba(255, 255, 255, 0)")
      break;
    default:
  }
  var canvarSnapshotObj = document.getElementById("canvarSnapshot");
  if(!!canvarSnapshotObj){
    canvarSnapshotObj.onload = function(){
      stub.startFunction('hello');
    }
  }

}
//----------------------------------------------------------------------------页面重置和通用方法-----------------------------
(function(w){
  var pageDeploy = {};
  var pageUnit = {};
  //配置底层高度自适应
  pageDeploy.bottomPanelAuto = function(){
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    var spareHeight = clientHeight - clientWidth;
    var bottomPanelHeight = 3*window.rootFontSize;
    var controllHeight = spareHeight - bottomPanelHeight;
    var controllHeightRem = controllHeight/window.rootFontSize - 0.2;//这20px是给最低边留一点高度
    if(controllHeightRem > 0.2){
      //重置地球页面的底部
      resizeEarthPage(controllHeightRem)
      //重置水龙头页面的底部
      resizeWaterPage(controllHeightRem)
    }else{
      controllHeight = (spareHeight - (2.4*window.rootFontSize))/window.rootFontSize;
      //重置地球页面的底部
      resizeEarthPage(controllHeight)
      resizeWaterPageExtremecase()
    }
  }
  //重置水龙头页面
  function resizeWaterPage(spareHeight){
    var controllHeightRem = spareHeight;
    // if(controllHeightRem - 0.8 > 0.2){
    //   document.getElementById("content_mes").style.marginTop = "0.2rem";
    // }
    if(controllHeightRem > 0.8)
      controllHeightRem = 0.8;
    if(controllHeightRem < 0.4){
      $(".cbiMiddle").css("height","0.59rem")
      $(".cbiMiddle").css("line-height","0.59rem")
    }
    var content_titleHeight = 1.2 + controllHeightRem;//这个高度是中间存放最上边数字的容器的本身之前设定的高度
    document.getElementById("content_title").style.height = content_titleHeight+"rem";
    document.getElementById("content_title").style.paddingTop = controllHeightRem/2+"rem";
  }
  //重置极端情况水龙头页面
  function resizeWaterPageExtremecase(){
    $('.content .content_title').css("height","0.6rem")
    $(".content .ct_mes").css({"width":"30%","float":"left"})
    $(".content .ct_numtext").css({"width":"70%","float":"left","height":"0.5rem","line-height":"0.5rem","text-align":"left"})
    $(".content .ct_text").css({"height":"0.5rem","line-height":"0.5rem","margin-left":"0.1rem"})
    $(".content .ct_numtextPercent").css({"padding-top":"0.05rem","right":"0.1rem","left":"auto","height":"0.5rem","line-height":"0.5rem"})
    $(".content_body .cbItem .cbiMiddle").css({"height":"0.39rem","line-height":"0.39rem"})
    $(".content_body .cbItem").css("height","1.0rem")
    $('.content .content_body').css({"height":"1.0rem","line-height":"1.0rem"})
  }
  //重置地球页面
  function resizeEarthPage(spareHeight){
    var content_round = document.getElementById("content_round");
    var content_round_num = document.getElementById("content_round_num");
    var content_round_unit = document.getElementById("content_round_unit");

    var blueBall = document.getElementById("blueBall");
    var controllHeightRem = spareHeight;
    if(controllHeightRem < 0){
      controllHeightRem = 0;
    }
    if(controllHeightRem > 2.3)
      controllHeightRem = 2.3;
    var content_titleHeight = 1.6 + controllHeightRem;//这个高度是中间存放那个圆球图片的本身高度
    content_round.style.height = content_titleHeight+"rem";
    content_round_num.style.lineHeight = content_titleHeight+"rem";
    var blueBallHeight = content_titleHeight + content_titleHeight*0.14285;
    blueBall.style.height = blueBallHeight+"rem";
    blueBall.style.width = blueBallHeight+"rem";
    blueBall.style.borderRadius = blueBallHeight/2+"rem";
    var content_round_numFontSize = content_titleHeight*w.rootFontSize/window.bodyFontSize/2.773355;
    var content_round_unitFontSize = content_round_numFontSize/2.66666
    //设置字体大小
     content_round_num.style.fontSize = content_round_numFontSize+"em";
     content_round_unit.style.fontSize = content_round_unitFontSize+"em";
  }
  //修改加载提示的颜色
  pageDeploy.setSliderStyle = function(index,total){
    var global = document.getElementById("global");
    if(index+1 == total){
      global.style.display = "none";
    }else{
      global.style.display = "block";
    }
  }
  //添加loading框阻止触摸
  pageDeploy.preventDefaultLoad = function(){
    function preventDefaultTouchMove(event) {
        if (event && event.preventDefault) {//如果是FF下执行这个
            event.preventDefault();
        } else {
            window.event.returnValue = false; //如果是IE下执行这个
        }
        return false;
    };
    document.getElementById("global_loading").addEventListener("touchmove", preventDefaultTouchMove, false);
  }
  //获取url参数
  pageUnit.GetQueryString = function(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
  }
  //得到浏览器每秒帧数fps
  pageUnit.showFPS = (function(){
      var requestAnimationFrame = window.RAF
      var count = 0;
      var last,step,offset;
      step = function(){
        count = count + 1;
        var currentDate = new Date()
        if(typeof(last) != "undefined"){
          offset = currentDate - last;
          window.fps = Math.floor(1000/offset);
        }
        last = new Date()
        requestAnimationFrame( step );
      };
      return {
          go:  function(){step();}
      }
  })();
  //加载效果
  pageUnit.load = function(panel,className) {
    var classname = "";
    if(!!className){
      classname = className;
    }
    var mesbox = '<div class="loadEffect '+classname+'">'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                          '<span></span>'+
                  '</div>';
    panel.append(mesbox)
  }
  //加载效果结束
  pageUnit.loadFinish = function(panel) {
  	panel.find(".loadEffect").remove();
  }
  //获取上周日期
  pageUnit.getLastWeekDate = function(date){
    var weekObj = {start:{},end:{}}
    var currentDate = date;
    var currentWeek = currentDate.getDay();
    if(currentWeek == 0){currentWeek = 7;}
    currentDate.setDate(currentDate.getDate()-currentWeek);
    weekObj.end.year = currentDate.getFullYear();
    weekObj.end.month = currentDate.getMonth()+1;
    weekObj.end.day = currentDate.getDate();
    currentDate.setDate(currentDate.getDate()-6);
    weekObj.start.year = currentDate.getFullYear();
    weekObj.start.month = currentDate.getMonth()+1;
    weekObj.start.day = currentDate.getDate();
    return weekObj;
  }
  w.pageDeploy = pageDeploy;
  w.pageUnit = pageUnit;
})(window)
pageDeploy.bottomPanelAuto()//重置页面底部高度
pageDeploy.preventDefaultLoad()
pageUnit.showFPS.go()
//---------------------------------------------------------------参数配置-------------------------------------------
var config = {
  domain:"http://dev.a-cube.cn/",
  url:{
    mileageUrl:"AutolinkedMobileClient2/getVehicleKilometreByVin",//里程页面接口地址
    usageUrl:"AutolinkedMobileClient2/getVehicleReportByH5AndVin"//使用情况页面接口地址
  },
  AFE:{
    l1:1.1,
    l2:1.3
  },
  errorMes:{
    netError:"数据获取失败,请检查网络",
    noWeekData:"您上周好像没有开车哦!"
  },
  errorImg:{
    netErrorImg:"../src/images/nodata.png",
    noWeekDataImg:"../src/images/smail.png"
  },
  mileageTextConfig:[
    {
      num:0.1,
      text:"不积跬步无以至千里，加油~"
    },
    {
      num:0.3,
      text:"漫漫长征路，你已跨出一大步！"
    },
    {
      num:0.7,
      text:"继续努力，你可以到达远方的田野！"
    },
    {
      num:1,
      text:"下一秒你就能征服地球，继续加油！"
    },
    {
      num:1.5,
      text:"不知不觉，自驾环游世界~"
    },
    {
      num:2,
      text:"海阔天长，去到更远处！"
    },
    {
      num:3,
      text:"不愧是老司机中的战斗机，服你！"
    },
    {
      num:10000,
      text:"老骥伏枥，志在千里；爱车暮年，壮心不已。"
    }
  ],
  stopcockDataTextConfig:[
    {
      stopcockType:"low",
      title:"滴水穿石？",
      text:"买来就是用的，不要这么吝啬嘛！"
    },
    {
      stopcockType:"middle",
      title:"源远流长",
      text:"一看你就是勤俭持家的一把好手"
    },
    {
      stopcockType:"hign",
      title:"用油如用水",
      text:"对！你全家在中石油上班"
    }
  ],
  pageText:{
    usageTitle:"本周联车油耗",
    usageTitleUnit:"升/百公里",
    usageItemLeft:"本周行驶里程",
    usageItemLeftUnit:"公里",
    usageItemCenter:"本周总计用油",
    usageItemCenterUnit:"升",
    usageItemRight:"本周用油花费(参考)",
    usageItemRightUnit:"元"
  }
}
