/* 芒果移动端自定义弹出框 */
(function(window) {
	var obj = {};
	var objcallback;
	var objcancelcallback;
	var objalarmcallback;
	var MGDialogPanel;
	var MGDialogConfirmPanel;
	var MGDialogAlarmPanel;
	obj.alert = function(mes) {
		setdialogon("alert", mes);
	};
	obj.confirm = function(mes, callback, cancelCallback) {
		setdialogon("confirm", mes);
		objcallback = callback;
		objcancelcallback = cancelCallback;
	};
	obj.alarm = function(mes, callback) {
		setdialogon("alarm", mes);
		objalarmcallback = callback;
	};

	function creatAlertBasePanel() {
		var messagepanel = document.createElement("div");
		messagepanel.setAttribute("id", "MGDialogAlertPanel");
		messagepanel.setAttribute("class", "MGDialog-messagepanel MGDialog-messagealertpanel limitScrool"); //创建容器
		var contentpanel = document.createElement("div");
		contentpanel.setAttribute("class", "MGDialog-content"); //创建内容div
		var contentspan = document.createElement("span");
		contentspan.setAttribute("class", "textspan"); //创建内容div
		contentpanel.appendChild(contentspan);
		messagepanel.appendChild(contentpanel);
		document.body.appendChild(messagepanel);
	}

	function creatConfirmBasePanel() {
		var MGDialogConfirmPanel = document.createElement("div");
		MGDialogConfirmPanel.setAttribute("id", "MGDialogConfirmPanel");
		MGDialogConfirmPanel.setAttribute("class", "MGDialog-confirmfixpanel limitScrool"); //创建顶级元素
		var messagepanel = document.createElement("div");
		messagepanel.setAttribute("class", "MGDialog-messageconfirmpanel"); //创建容器
		var contentpanel = document.createElement("div");
		contentpanel.setAttribute("class", "MGDialog-content"); //创建内容div
		var contentspan = document.createElement("span");
		contentspan.setAttribute("class", "textspan"); //创建内容div
		var controlpanel = document.createElement("div");
		controlpanel.setAttribute("class", "MGDialog-controlpanel mg-clearfix"); //创建控件div
		contentpanel.appendChild(contentspan);
		messagepanel.appendChild(contentpanel);
		messagepanel.appendChild(controlpanel);
		MGDialogConfirmPanel.appendChild(messagepanel);
		document.body.appendChild(MGDialogConfirmPanel);
		//谈价按钮
		var btnConfirmOkpanel = document.createElement("div");
		btnConfirmOkpanel.setAttribute("class", "MGDialog-btnConfirmOk");
		var btnConfirmCancelpanel = document.createElement("div");
		btnConfirmCancelpanel.setAttribute("class", "MGDialog-btnConfirmCancel");
		var controlokspan = document.createElement("span");
		controlokspan.setAttribute("class", "btn-green");
		controlokspan.setAttribute("class", "MGDialog-Btn");
		controlokspan.innerText = "确定";
		var controlcancelspan = document.createElement("span");
		controlcancelspan.setAttribute("class", "btn-green");
		controlcancelspan.setAttribute("class", "MGDialog-Btn");
		controlcancelspan.innerText = "取消";
		btnConfirmCancelpanel.appendChild(controlcancelspan);
		btnConfirmOkpanel.appendChild(controlokspan);
		controlpanel.appendChild(btnConfirmCancelpanel);
		controlpanel.appendChild(btnConfirmOkpanel);
		//添加点击事件
		btnConfirmOkpanel.onclick = function() {
			hideConfirm();
			objcallback && objcallback();
		};
		btnConfirmCancelpanel.onclick = function() {
			hideConfirm();
			objcancelcallback && objcancelcallback();
		};
		return MGDialogConfirmPanel;
	}

	function creatAlarmBasePanel() {
		var MGDialogAlarmPanel = document.createElement("div");
		MGDialogAlarmPanel.setAttribute("id", "MGDialogAlarmPanel");
		MGDialogAlarmPanel.setAttribute("class", "MGDialog-alarmfixpanel limitScrool"); //创建顶级元素
		var messagepanel = document.createElement("div");
		messagepanel.setAttribute("class", "MGDialog-messagealarmpanel"); //创建容器
		var contentpanel = document.createElement("div");
		contentpanel.setAttribute("class", "MGDialog-content"); //创建内容div
		var contentspan = document.createElement("span");
		contentspan.setAttribute("class", "textspan"); //创建内容div
		var controlpanel = document.createElement("div");
		controlpanel.setAttribute("class", "MGDialog-controlpanel"); //创建控件div
		contentpanel.appendChild(contentspan);
		messagepanel.appendChild(contentpanel);
		messagepanel.appendChild(controlpanel);
		MGDialogAlarmPanel.appendChild(messagepanel);
		document.body.appendChild(MGDialogAlarmPanel);
		//添加按钮
		var btnAlarmpanel = document.createElement("div");
		btnAlarmpanel.setAttribute("class", "MGDialog-btnAlarm");
		var controlalarmspan = document.createElement("span");
		controlalarmspan.setAttribute("class", "btn-green");
		controlalarmspan.setAttribute("class", "MGDialog-Btn");
		controlalarmspan.innerText = "确定";
		btnAlarmpanel.appendChild(controlalarmspan);
		controlpanel.appendChild(btnAlarmpanel);
		//添加点击事件
		btnAlarmpanel.onclick = function() {
			hideAlarm();
			objalarmcallback && objalarmcallback();
		};
		return MGDialogAlarmPanel;
	}

	function setdialogon(type, mes) {
		if (type == "alert") {
			MGDialogPanel = document.getElementById("MGDialogAlertPanel");
			if (MGDialogPanel === null) {
				MGDialogPanel = creatAlertBasePanel();
			} else {
				if (MGDialogPanel.style.display == 'block') {
					return;
				}
			}
			//赋值
			$(".MGDialog-messagealertpanel .textspan").text(mes);
			//动画显示
			$(".MGDialog-messagealertpanel").css("opacity", "0").show();
			var opaIndex = 0.1;
			var opainterv;
			opainterv = setInterval(function() {
				if (opaIndex > 1) {
					clearInterval(opainterv);
					opaIndex = 0.1;
				} else {
					opaIndex = opaIndex + 0.1;
					$(".MGDialog-messagealertpanel").css("opacity", "" + opaIndex);
				}
			}, 50);
			//设置秒后自动消失
			setTimeout(function() {
				$(".MGDialog-messagealertpanel").hide();
			}, 2000);
		}
		if (type == "confirm") {
			MGDialogConfirmPanel = document.getElementById("MGDialogConfirmPanel");
			if (MGDialogConfirmPanel == null) {
				MGDialogConfirmPanel = creatConfirmBasePanel();
			} else {
				MGDialogConfirmPanel.style.display = "block";
			}
			//赋值
			$(".MGDialog-messageconfirmpanel .textspan").text(mes);
			//动画显示
			$(".MGDialog-confirmfixpanel").css("opacity", "0").show();
			var opaIndex = 0.1;
			var opainterv;
			opainterv = setInterval(function() {
				if (opaIndex > 1) {
					clearInterval(opainterv);
					opaIndex = 0.1;
				} else {
					opaIndex = opaIndex + 0.1;
					$(".MGDialog-confirmfixpanel").css("opacity", "" + opaIndex);
				}
			}, 50);
			addMGTouchMove($("#MGDialogConfirmPanel"));
		}
		if (type == "alarm") {
			MGDialogAlarmPanel = document.getElementById("MGDialogAlarmPanel");
			if (MGDialogAlarmPanel == null) {
				MGDialogAlarmPanel = creatAlarmBasePanel();
			} else {
				MGDialogAlarmPanel.style.display = "block";
			}
			//赋值
			$(".MGDialog-messagealarmpanel .textspan").text(mes);
			//动画显示
			$(".MGDialog-alarmfixpanel").css("opacity", "0").show();
			var opaIndex = 0.1;
			var opainterv;
			opainterv = setInterval(function() {
				if (opaIndex > 1) {
					clearInterval(opainterv);
					opaIndex = 0.1;
				} else {
					opaIndex = opaIndex + 0.1;
					$(".MGDialog-alarmfixpanel").css("opacity", "" + opaIndex);
				}
			}, 50);
			addMGTouchMove($("#MGDialogAlarmPanel"));
		}

	}

	function hideConfirm() {
		removeMGTouchMove($("#MGDialogConfirmPanel"));
		MGDialogConfirmPanel.style.display = "none";
	}

	function hideAlarm() {
		removeMGTouchMove($("#MGDialogAlarmPanel"));
		MGDialogAlarmPanel.style.display = "none";
	}

  //ele是jqurey对象
  function addMGTouchMove(ele) {
  	//禁止滑动
  	var el = ele[0];
  	if (el) {
  		el.addEventListener("touchmove", mgTouchMove, false);
  	}
  }
  //ele是jqurey对象
  function removeMGTouchMove(ele) {
  	//禁止滑动
  	var el = ele[0];
  	if (el) {
  		el.removeEventListener("touchmove", mgTouchMove, false);
  	}
  }
  function mgTouchMove(event) {
  	event.preventDefault();
  }

	window.MGDialog = obj;
})(window);
