/*! Zepto 1.2.0 (generated with Zepto Builder) - zepto event ajax form ie selector - zeptojs.com/license */
var Zepto=function(){function t(t){return null==t?String(t):X[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,r=T.type(t);return"function"!=r&&!n(t)&&("array"==r||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in $?$[t]:$[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[c(t)]?e:e+"px"}function h(t){var e,n;return Z[t]||(e=L.createElement(t),L.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),Z[t]=n),Z[t]}function p(t){return"children"in t?D.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function m(t,e,n){for(j in e)n&&(o(e[j])||K(e[j]))?(o(e[j])&&!o(t[j])&&(t[j]={}),K(e[j])&&!K(t[j])&&(t[j]=[]),m(t[j],e[j],n)):e[j]!==E&&(t[j]=e[j])}function v(t,e){return null==e?T(t):T(t).filter(e)}function g(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",r=n&&n.baseVal!==E;return e===E?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?T.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)b(t.childNodes[n],e)}var E,j,T,S,C,N,O=[],P=O.concat,A=O.filter,D=O.slice,L=window.document,Z={},$={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},F=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,z=/([A-Z])/g,H=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],V=L.createElement("table"),_=L.createElement("tr"),B={tr:L.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:_,th:_,"*":L.createElement("div")},U=/^[\w-]*$/,X={},J=X.toString,W={},Y=L.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Y).appendChild(t),r=~W.qsa(i,e).indexOf(t),o&&Y.removeChild(t),r},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var r,i,a;return M.test(t)&&(r=T(L.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===E&&(e=F.test(t)&&RegExp.$1),e in B||(e="*"),a=B[e],a.innerHTML=""+t,r=T.each(D.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=T(r),T.each(n,function(t,e){H.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return new d(t,e)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))r=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=W.qsa(L,t)}else{if(e(t))return T(L).ready(t);if(W.isZ(t))return t;if(K(t))r=s(t);else if(i(t))r=[t],t=null;else if(F.test(t))r=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);r=W.qsa(L,t)}}return W.Z(r,t)},T=function(t,e){return W.init(t,e)},T.extend=function(t){var e,n=D.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},W.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:D.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=L.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=K,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},T.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},T.camelCase=C,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.noop=function(){},T.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},T.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},T.grep=function(t,e){return A.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),T.fn={constructor:W.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=W.isZ(e)?e.toArray():e;return P.apply(W.isZ(this)?this.toArray():this,n)},map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(D.apply(this,arguments))},ready:function(t){if("complete"===L.readyState||"loading"!==L.readyState&&!L.documentElement.doScroll)setTimeout(function(){t(T)},0);else{var e=function(){L.removeEventListener("DOMContentLoaded",e,!1),window.removeEventListener("load",e,!1),t(T)};L.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)}return this},get:function(t){return t===E?D.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(A.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return T(N(this.concat(T(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?D.call(t):T(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return i(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return O.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):T()},closest:function(t,e){var n=[],i="object"==typeof t&&T(t);return this.each(function(o,a){for(;a&&!(i?i.indexOf(a)>=0:W.matches(a,t));)a=a!==e&&!r(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(N(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||D.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=T(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=T(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(j in t)y(this,j,t[j]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=G[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?w(r):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=g(this,t,e,this.value)})):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),r=g(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(L.documentElement!==this[0]&&!T.contains(L.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0];if("string"==typeof e){if(!r)return;return r.style[C(e)]||getComputedStyle(r,"").getPropertyValue(e)}if(K(e)){if(!r)return;var i={},o=getComputedStyle(r,"");return T.each(e,function(t,e){i[e]=r.style[C(e)]||o.getPropertyValue(e)}),i}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(j in e)e[j]||0===e[j]?a+=c(j)+":"+f(j,e[j])+";":this.each(function(){this.style.removeProperty(c(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?O.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=x(this),r=g(this,t,e,n);r.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||S.push(t)},this),S.length&&x(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return x(this,"");S=x(this),g(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),x(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=T(this),i=g(this,t,n,x(this));i.split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,r.top+=parseFloat(T(e[0]).css("border-top-width"))||0,r.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||L.body;t&&!R.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(i){var o,a=this[0];return i===E?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,g(this,i,e,a[t]()))})}}),I.forEach(function(e,n){var r=n%2;T.fn[e]=function(){var e,i,o=T.map(arguments,function(n){var r=[];return e=t(n),"array"==e?(n.forEach(function(t){return t.nodeType!==E?r.push(t):T.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(W.fragment(t)))}),r):"object"==e||null==n?n:W.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(L.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return T(t).remove();i.insertBefore(t,e),s&&b(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},T.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),W.Z.prototype=d.prototype=T.fn,W.uniq=N,W.deserializeValue=w,T.zepto=W,T}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||x,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(t,e,n){if(n.dataFilter==l)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==j?"json":b.test(t)?"script":E.test(t)&&"xml")||"text"}function h(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=h(e.url,e.data),e.data=void 0)}function d(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function m(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?m(e,u,r,n):e.add(n,u)})}var v,g,y=+new Date,x=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,j="application/json",T="text/html",S=/^\s*$/,C=x.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+y++,l=x.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),x.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,i,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===u[v]&&(u[v]=t.ajaxSettings[v]);r(u),u.crossDomain||(n=x.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(i=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,i)),p(u);var m=u.dataType,y=/\?.+=\?/.test(u.url);if(y&&(m="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=m&&"jsonp"!=m)||(u.url=h(u.url,"_="+Date.now())),"jsonp"==m)return y||(u.url=h(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,d);var w,b=u.accepts[m],E={},j=function(t,e){E[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,N=u.xhr(),O=N.setRequestHeader;if(d&&d.promise(N),u.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",b||"*/*"),(b=u.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(b)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&j("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)j(g,u.headers[g]);if(N.setRequestHeader=j,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=l,clearTimeout(w);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==T){if(m=m||f(u.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)e=N.response;else{e=N.responseText;try{e=c(e,m,u),"script"==m?(1,eval)(e):"xml"==m?e=N.responseXML:"json"==m&&(e=S.test(e)?null:t.parseJSON(e))}catch(r){n=r}if(n)return s(n,"parsererror",N,u,d)}a(e,N,u,d)}else s(N.statusText||null,N.status?"error":"abort",N,u,d)}},o(N,u)===!1)return N.abort(),s(null,"abort",N,u,d),N;var P="async"in u?u.async:!0;if(N.open(u.type,u.url,P,u.username,u.password),u.xhrFields)for(g in u.xhrFields)N[g]=u.xhrFields[g];for(g in E)O.apply(N,E[g]);return u.timeout>0&&(w=setTimeout(function(){N.onreadystatechange=l,N.abort(),s(null,"timeout",N,u,d)},u.timeout)),N.send(u.data?u.data:null),N},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=d(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(w,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var N=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(e)+"="+N(n))},m(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){if(n||!e.isDefaultPrevented){n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=b,i&&i.apply(n,arguments)},e[r]=E});try{e.timeStamp||(e.timeStamp=Date.now())}catch(r){}(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)}return e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(i===f||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t,n){try{return e(t,n)}catch(r){return null}}}}(),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=s.exec(t);if(i&&i[2]in a&&(n=a[i[2]],r=i[3],t=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return e(t,n,r)}var r=t.zepto,i=r.qsa,o=r.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,e,n){return r.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;r.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=i(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return a?r.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},r.matches=function(t,e){return n(e,function(e,n,r){return(!e||o(t,e))&&(!n||n.call(t,null,r)===t)})}}(Zepto);

/**
 * iSlider 高性能全屏滑动组件
 * @class iSlider
 * @param {object} opts
 * @param {string} opts.wrap='.wrap' 容器
 * @param {string} opts.item='.item'  滚动单元的元素
 * @param {string} opts.playClass='play'  触发播放动画的class
 * @param {number} [opts.index=0]  设置初始显示的页码
 * @param {array} [opts.noslide=[]]  设置禁止滑动的页面序号(0开始), 禁止后 需要开发者手动绑定页面中的某个按钮事件进行滑动
 * @param {number} [opts.speed=400] 动画速度 单位:ms
 * @param {number} [opts.triggerDist=30] 触发滑动的手指移动最小位移 单位:像素
 * @param {boolean} [opts.isVertical=true] 是否是垂直滑动 默认是.  设成false为水平滑动.
 * @param {boolean} [opts.useACC=true] 是否启用硬件加速 默认启用
 * @param {boolean} [opts.fullScr=true] 是否是全屏的 默认是. 如果是局部滑动,请设为false
 * @param {boolean} [opts.preventMove=false] 是否阻止系统默认的touchmove移动事件,  默认不阻止, 该参数仅在局部滚动时有效,   如果是局部滚动 如果为true 那么在这个区域滑动的时候 将不会滚动页面.  如果是全屏情况 则会阻止
 * @param {boolean} [opts.lastLocate=true] 后退后定位到上次浏览的位置 默认true
 * @param {function} [opts.onslide]  滑动后回调函数  会回传index参数
 * @param {array} [opts.loadingImgs]  loading需要加载的图片地址列表
 * @param {function} [opts.onloading]  loading时每加载完成一个图片都会触发这个回调  回调时参数值为 (已加载个数,总数)
 * @param {number} [opts.loadingOverTime=15]  预加载超时时间 单位:秒
 * @desc

 * @example

    //极简用法
    new iSlider(); //容器默认是 .wrap  元素默认是 .item   动画播放class默认是 play

    //普通用法
    new iSlider({
        wrap:'.wrap',
        item:'.item',
        playClass:'play',
        onslide:function (index) {
            console.info(index)
        }
    });

    //带loading进度条用法
    new iSlider({
        wrap:'.wrap',
        item:'.item',
        playClass:'play',
        onslide:function (index) {
            console.info(index)
        },
        loadingImgs:[
            'http://imgcache.gtimg.cn/mediastyle/mobile/event/20141118_ten_jason/img/open_cover.jpg?max_age=2592000',
            'http://imgcache.gtimg.cn/mediastyle/mobile/event/20141118_ten_jason/img/im_cover.jpg?max_age=2592000',
            'http://imgcache.gtimg.cn/mediastyle/mobile/event/20141118_ten_jason/img/bg1.jpg?max_age=2592000',
            'http://imgcache.gtimg.cn/mediastyle/mobile/event/20141118_ten_jason/img/bg2.jpg?max_age=2592000'
        ],
        onloading:function (loaded,total) {
            this.$('#loading div').style.width=loaded/total*100+'%';
            if (loaded==total) {
                this.$('#loading').style.display="none"
            }
        }
    });


 */
function iSlider(opts) {
    this.opts={
        wrap:'.wrap',
        item:'.item',
        playClass:'play',
        index:0,
        itemTotal:0,//总数
        noslide:[],
        noslideBack:false, //当noslide生效的时候 是否允许往回滑动  默认不允许, 如果有需要可以开启
        speed:400, //滑屏速度 单位:ms
        triggerDist:30,//触发滑动的手指移动最小位移 单位:像素
        isVertical:true,//垂直滑还是水平滑动
        useACC:true, //是否启用硬件加速 默认启用
        fullScr:true, //是否是全屏的 默认是. 如果是局部滑动,请设为false
        preventMove:false, //是否阻止系统默认的touchmove移动事件,  默认不阻止, 该参数仅在局部滚动时有效,   如果是局部滚动 如果为true 那么在这个区域滑动的时候 将不会滚动页面.  如果是全屏情况 则会阻止
        lastLocate:true, //后退后定位到上次浏览的位置 默认开启
        loadingImgs:[], //loading 预加载图片地址列表
        onslide:function (index) {},//滑动回调 参数是本对象
        onloading:function (loaded,total) {},
        loadingOverTime:15 //预加载超时时间 单位:秒
    }

    for (var i in opts) {
        this.opts[i]=opts[i];
    }

    this.SS=false;
    try {
        this.SS=sessionStorage;
        this.SS['spt']=1;//检测是否是ios私密浏览模式 如果是私密模式 这一行会报错 进入到catch
    }catch (e) {
        this.SS=0;
    }

    this.init();
}
/**  @lends iSlider */
iSlider.prototype={
    wrap:null,
    index : 0,
    length:0,
    _tpl:[],
    _delayTime:150,
    _sessionKey : location.host+location.pathname,
    _prev:null,
    _current:null,
    _next:null,
    $:function (o,p) {
        return (p||document).querySelector(o);
    },
    addClass:function (o,cls) {
        if (o.classList) {
            o.classList.add(cls)
        }else {
            o.className+=' '+cls;
        }
    },
    removeClass:function (o,cls) {
        if (o.classList) {
            o.classList.remove(cls)
        }else {
            o.className=o.className.replace(new RegExp('\\s*\\b'+cls+'\\b','g'),'')
        }
    },
	init:function () {
        var self = this;
        this.wrap = typeof this.opts.wrap=='string' ? this.$(this.opts.wrap) : this.opts.wrap ;

        if (this.SS) {
            //使用sessionStorage来保存当前浏览到第几页了   后退回来的时候 定位到这一页
            this._sessionKey=btoa(encodeURIComponent(this._sessionKey+this.wrap.id+this.wrap.className));

            var lastLocateIndex=parseInt(this.SS[this._sessionKey]);
            this.index = (this.opts.lastLocate && lastLocateIndex>=0) ? lastLocateIndex : 0;
        }else {
            this.index = this.opts.index || 0;
        }
        this.itemTotal = this.opts.itemTotal || 0;


        if (!this.wrap) {
            throw Error('"wrap" param can not be empty!');
            return ;
        }

        this._tpl = this.wrap.cloneNode(true);
        this._tpl = this.opts.item ? this._tpl.querySelectorAll(this.opts.item) : this._tpl.children;

        for (var i=0; i<this._tpl.length; i++) {
            this._tpl[i].style.cssText+='display:block;position:absolute;left:0;top:0;width:100%;height:100%'
        };

        this.length=this._tpl.length; //总页数数据
        this.touchInitPos = 0;//手指初始位置
        this.startPos = 0;//移动开始的位置
        this.totalDist = 0,//移动的总距离
        this.deltaX1 = 0;//每次移动的正负
        this.deltaX2 = 0;//每次移动的正负

        //全屏滑动 设置样式
        if (this.opts.fullScr) {
            var s = document.createElement('style');
            s.innerHTML = 'html,body{width:100%;height:100%;overflow:hidden}';
            document.head.appendChild(s);
            s = null;
        }

        this.wrap.style.cssText+="display:block;position:relative;"+(this.opts.fullScr ? 'width:100%;height:100%':'');

        //必须要在前面的布局都设置好后 再来获取尺寸
        this.displayWidth = this.wrap.clientWidth; //滑动区域最大宽度
        this.displayHeight = this.wrap.clientHeight; //滑动区域最大高度

        this.scrollDist=this.opts.isVertical ? this.displayHeight : this.displayWidth;//滚动的区域尺寸

        this._setHTML();// 填充初始DOM

        if (this.opts.loadingImgs && this.opts.loadingImgs.length) {
            this._loading();
        }else {
            this._pageInit();
        }

        if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
            this._delayTime=50;
        }

        this._bindEvt();
	},
    _bindEvt:function () {
        var self = this;
        var handlrElm= this.opts.fullScr ? this.$('body') : this.wrap;
        handlrElm.addEventListener('touchstart',function (e) {
            self._touchstart(e);
        },false);
        handlrElm.addEventListener('touchmove',function (e) {
            self._touchmove(e);
            if (!self.opts.fullScr) { //修复手Q中局部使用时的一个bug
                e.stopPropagation();
                e.preventDefault();
            }
        },false);
        handlrElm.addEventListener('touchend',function (e) {
            self._touchend(e);
        },false);
        handlrElm.addEventListener('touchcancel',function (e) {
            self._touchend(e);
        },false);

        if (this.opts.fullScr || this.opts.preventMove) {
            handlrElm.addEventListener('touchmove', function (e) {e.target.getAttribute('data-stop') !== "true" && e.preventDefault(); }, false);
        }
    },
    _setHTML:function (index) {
        if (index>=0) {
            this.index=parseInt(index);
        }
        this.wrap.innerHTML='';

        var initDom = document.createDocumentFragment();

        if (this.index>0) {
            this._prev=this._tpl[this.index-1].cloneNode(true);
            this._prev.style.cssText+=this._getTransform('-'+this.scrollDist+'px');
            initDom.appendChild(this._prev)
        }else {
            this._prev=null;
        }
        this._current =this._tpl[this.index].cloneNode(true);

        this._current.style.cssText+=this._getTransform(0);
        initDom.appendChild(this._current);

        if (this.index<this.length-1) {
            this._next=this._tpl[this.index+1].cloneNode(true);
            this._next.style.cssText+=this._getTransform(this.scrollDist+'px');
            initDom.appendChild(this._next)
        }else {
            this._next=null;
        }

        this.wrap.appendChild(initDom);

    },
    _pageInit:function () {
        var self = this;
        setTimeout(function () {
            self.addClass(self._current,self.opts.playClass);

            try {
                self.opts.onslide.call(self,self.index,self.itemTotal);
            } catch (e) {
//                console.info(e)
            }
        },this._delayTime);
    },
	_touchstart : function (e) {
        var self=this;
        if(e.target.getAttribute("data-stop") === "true")return;
		if(e.touches.length !== 1){return;}//如果大于1个手指，则不处理

        this.lockSlide=false;
        this._touchstartX=e.touches[0].pageX;
        this._touchstartY=e.touches[0].pageY;

		this.touchInitPos = this.opts.isVertical ? e.touches[0].pageY:e.touches[0].pageX; // 每次move的触点位置
		this.deltaX1 = this.touchInitPos;//touchstart的时候的原始位置

		this.startPos = 0;
		this.startPosPrev = -this.scrollDist;
		this.startPosNext = this.scrollDist;
		//手指滑动的时候禁用掉动画
		if (this._next) {
			self._next.style.cssText+='-webkit-transition-duration:0;'
		}

		self._current.style.cssText+='-webkit-transition-duration:0;'
		if (this._prev) {
			self._prev.style.cssText+='-webkit-transition-duration:0;'
		}
	},
	_touchmove : function (e) {
        var parent=e.target;
        if(parent.getAttribute("stop") === "true")return;

        do {
            parent=parent.parentNode;
        } while (parent && parent!=this.wrap);

        if (!parent && e.target!=this.wrap ) {
            return ;
        }

        var self = this;
		if(e.touches.length !== 1 || this.lockSlide){return;}

        var gx=Math.abs(e.touches[0].pageX - this._touchstartX);
        var gy=Math.abs(e.touches[0].pageY - this._touchstartY);

        //如果手指初始滑动的方向跟页面设置的方向不一致  就不会触发滑动  这个主要是避免误操作, 比如页面是垂直滑动, 在某一页加了横向滑动的局部动画, 那么左右滑动的时候要保证页面不能上下移动. 这里就是做这个的.
        if (gx>gy && this.opts.isVertical) { //水平滑动
            this.lockSlide=true;
            return ;
        }else if(gx<gy && !this.opts.isVertical){ //垂直滑动
            this.lockSlide=true;
            return ;
        }

        if (this.opts.noslide && this.opts.noslide.indexOf(this.index)>=0) {
            //noslideBack 默认值是false   默认是禁用滑动后 前后都不能再滑动,
            //但是当noslideBack为true时, 禁用了这一页的滑动, 那么往下是划不动了  但是可以往上滑
            if ( !this.opts.noslideBack || (this.opts.isVertical ? (e.touches[0].pageY - this._touchstartY < 0) : (e.touches[0].pageX - this._touchstartX < 0)) ) {
                return ;
            }
        }


		var currentX = this.opts.isVertical ? e.touches[0].pageY:e.touches[0].pageX;
		this.deltaX2 = currentX - this.deltaX1;//记录当次移动的偏移量
		this.totalDist = this.startPos + currentX - this.touchInitPos;

		self._current.style.cssText+=this._getTransform(this.totalDist+'px');
		this.startPos = this.totalDist;

		//处理上一张和下一张
		if (this.totalDist<0) {//露出下一张
			if (this._next) {
				this.totalDist2 = this.startPosNext + currentX - this.touchInitPos;
				self._next.style.cssText += this._getTransform(this.totalDist2+'px');
				this.startPosNext = this.totalDist2;
			}
		}else {//露出上一张
			if (this._prev) {
				this.totalDist2 = this.startPosPrev + currentX - this.touchInitPos;
				self._prev.style.cssText += this._getTransform(this.totalDist2+'px');
				this.startPosPrev = this.totalDist2;
			}
		}

		this.touchInitPos = currentX;
	},
	_touchend : function (e) {
        if(e.target.getAttribute("stop") === "true")return;
		if(this.deltaX2 < -this.opts.triggerDist){
			this.next();
		}else if(this.deltaX2 > this.opts.triggerDist){
			this.prev();
		}else{
			this._itemReset();
		}
		this.deltaX2 = 0;
	},
    _getTransform:function (dist) {
        var pos= this.opts.isVertical? '0,'+dist : dist+',0';
        return ';-webkit-transform:' + (this.opts.useACC ? 'translate3d('+pos+',0)' : 'translate('+pos+')');
    },

    _itemReset:function () {
        var self = this;
        self._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);
        if (self._prev) {
            self._prev.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform('-'+this.scrollDist+'px');
        }
        if (self._next) {
           self._next.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(this.scrollDist+'px');
        }
		this.deltaX2 = 0;
    },

    _loading:function () {
        var self = this;
        var imgurls=this.opts.loadingImgs;
        var fallback=setTimeout(function () {
            try {
                self.opts.onloading.call(self,total,total);
            } catch (e) { }

            self._pageInit();
        },this.opts.loadingOverTime*1000);//loading超时时间  万一进度条卡那了 15秒后直接显示

        var imgs=[], loaded=1;
        var total=imgurls.length+1;
        for (var i=0; i<imgurls.length; i++) {
            imgs[i]=new Image();
            imgs[i].src=imgurls[i];
            imgs[i].onload=imgs[i].onerror=imgs[i].onabort=function (e) {
                loaded++;
                if (this.src === imgurls[0] && e.type === 'load') {
                    clearTimeout(fallback)
                }
                checkloaded();
                this.onload=this.onerror=this.onabort=null;
            }
        }

        try {
            self.opts.onloading.call(self,1,total);
        } catch (e) { }

        function checkloaded() {
            try {
                self.opts.onloading.call(self,loaded,total);
            } catch (e) { }
            if (loaded==total) {
                if (fallback) {
                    clearTimeout(fallback)
                }
                self._pageInit();
                imgs=null;
                if (self.opts.preLoadingImgs && self.opts.preLoadingImgs.length) {
                    self.preloading();
                }
            }
        }
    },
    /**
     * 滑动到上一页
     * @example
        s1.prev();
     */
    prev:function () {
        var self = this;

        if (!this._current || !this._prev) {
            this._itemReset();
            return ;
        }
        if (this.index > 0) {
            this.index--;
        }else {
            this._itemReset();
            return false;
        }

//        var nextIndex = this.index+1 > this.length-1 ? 0 : this.index+1;

        if (this._next) {
            this.wrap.removeChild(this._next);
        }

        this._next=this._current;
        this._current=this._prev;
        this._prev=null;

        this._next.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(this.scrollDist+'px');
        this._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);
        if (this.SS) {
            this.SS[this._sessionKey]=this.index;
        }

        setTimeout(function () {

            if (self.$('.'+self.opts.playClass,self.wrap)) {
                self.removeClass(self.$('.'+self.opts.playClass,self.wrap),self.opts.playClass)
            }
            self.addClass(self._current,self.opts.playClass)

            try {
                self.opts.onslide.call(self,self.index,self.itemTotal);
            } catch (e) {
//                console.info(e)
            }

            var prevIndex = self.index-1;
            if (prevIndex < 0) {
                prevIndex =  self.length-1;
                return false;
            }

            self._prev = self._tpl[prevIndex].cloneNode(true);
            self._prev.style.cssText+='-webkit-transition-duration:0ms;'+self._getTransform('-'+self.scrollDist+'px');
            self.wrap.insertBefore(self._prev,self._current);

        },this._delayTime)

    },

    /**
     * 滑动到下一页
     * @example
        s1.next();
     */
    next:function () {
        var self = this;
        if (!this._current || !this._next) {
            this._itemReset();
            return ;
        }

        if (this.index < this.length-1) {
            this.index++;
        }else {
            this._itemReset();
            return false;
        }
//        var prevIndex = this.index===0 ? this.length-1 : this.index-1;

        if (this._prev) {
            this.wrap.removeChild(this._prev);
        }
        this._prev=this._current;
        this._current=this._next;
        this._next=null;
        this._prev.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform('-'+this.scrollDist+'px');
        this._current.style.cssText+='-webkit-transition-duration:'+this.opts.speed+'ms;'+this._getTransform(0);
        if (this.SS) {
            this.SS[this._sessionKey]=this.index;
        }
        setTimeout(function () {
            if (self.$('.'+self.opts.playClass,self.wrap)) {
                self.removeClass(self.$('.'+self.opts.playClass,self.wrap),self.opts.playClass)
            }
            self.addClass(self._current,self.opts.playClass)

            try {
                self.opts.onslide.call(self,self.index,self.itemTotal);
            } catch (e) {
//                console.info(e)
            }

            var nextIndex = self.index+1;
            if (nextIndex >= self.length) {
                return false;
            }

            self._next = self._tpl[nextIndex].cloneNode(true);
            self._next.style.cssText+='-webkit-transition-duration:0ms;'+self._getTransform(self.scrollDist+'px');
            self.wrap.appendChild(self._next);

        },this._delayTime)

    },
    /**
     * 跳转到指定页码
     * @param {number} index 页码 从0开始的
     * @example
        s1.slideTo(3);
     */
    slideTo:function (index) {
        this._setHTML(index);
        this._pageInit();
    }

}

if (typeof module == 'object') {
    module.exports=iSlider;
}else {
    window.iSlider=iSlider;
}

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

//touchObjID是触摸对象的ID,rotateObj是旋转对象的ID
function earthTouch(touchObjID,rotateObjID){
  this.touchObjID = touchObjID;
  this.rotateObjID = rotateObjID;
  this.startX = null;//表示开始触摸时候的x坐标
  this.startY = null;//表示开始触摸时候的y坐标
  this.lastRotateDeg=0;//保存上一次旋转的角度
  this.lastRotateDegCopy=0;//lastRotateDeg的拷贝对象
  this.centerX = document.documentElement.clientWidth/2;//旋转的中心点
  this.centerY = document.documentElement.clientWidth/2;//旋转的中心点
  this.lineK = 0;//内部直线的斜率
  this.lineB = 0;//内部直线的B值
  this.touchMoveTime = 0;//保存滑动时候的时间
  this.touchMoveDeg;//保存滑动时候的角度(相对开始触摸时候)
  this.touchActuallyMoveDeg;//保存滑动相对于上次滑动的距离（相对上一次滑动）
  this.touchMoveDerection;//保存滑动的方向 0表示逆时针 1表示顺时针
  this.touchMoveSpeed = 0;//表示滑动速度
  this.dragForce = 0.01//设置阻力为每秒1度
  this.rotateInertiaLastTimes;//因为惯性旋转是根据requestAnimationFrame来实现的,所以这里面我需要记录每次requestAnimationFrame的间隔时间,所以这个是保存上次requestAnimationFrame执行rotateInertia方法的时间
  this.rotateInertiaTotalDgreen = 0;//因为每次旋转的时候都是计算出下次要转的角度,但是我每次旋转是从初始角度旋转的,所以这个需要加上上次的角度,这个变量主要用来存放上次的角度
  this.compareMoveTime = 20;//这个主要用来控制停留多少时间以内算用户意图使用惯性旋转
  this.compareMoveDgreen = 2;//因为有时候用户是手指按在屏幕上了,然后松开 好不进行惯性旋转,但是有时候用户的手不安分啊 他非要小小的挪动一下,这个就是规避用户挪动手指造成的误差
  this.RFAID;//这个就是requestAnimationFrameID
}
//初始化
earthTouch.prototype.init = function(){
  var _this = this;
  document.getElementById(this.touchObjID).addEventListener("touchstart",function(event){
    event.preventDefault();
    event.stopPropagation();
    var event = event || window.event;
    var touch = event.changedTouches[0];
    if(_this.touchMoveSpeed != 0){
      //清除上次惯性旋转的数据
      _this.touchMoveSpeed = 0;
      _this.lastRotateDeg = _this.lastRotateDegCopy
      _this.rotateInertiaTotalDgreen = 0
    }
    //保存初始点位置
    _this.startX = touch.clientX;
    _this.startY = touch.clientY;
    //计算直线
    _this.lineCalculate(_this.startX,_this.startY,_this.centerX,_this.centerY)
  },false);
  document.getElementById(this.touchObjID).addEventListener("touchmove",function(event){
    event.stopPropagation();
    var event = event || window.event;
    var touch = event.changedTouches[0];
    var currentDeg = _this.getTouchDeg(touch);
    currentDeg = _this.lastRotateDeg + currentDeg;
    currentDeg = Math.abs(currentDeg)
    //计算滑动速度
    _this.touchActuallyMoveDeg = Math.abs(currentDeg-_this.touchMoveDeg)
    _this.touchMoveSpeed = _this.touchActuallyMoveDeg/(new Date() - _this.touchMoveTime)//计算出一毫秒钟转动多少度
    //计算旋转方向
    if(typeof(_this.touchMoveDeg) != "undefined"){
      if(_this.touchMoveDeg < currentDeg){
        _this.touchMoveDerection = 1;
      }else{
        _this.touchMoveDerection = 0;
      }
    }
    $("#"+_this.rotateObjID).css({"-webkit-transform":"translate(-50%,-50%) rotate("+currentDeg+"deg)","transform":"translate(-50%,-50%) rotate("+currentDeg+"deg)"})
    _this.touchMoveDeg = currentDeg;//记录上次移动角度
    _this.touchMoveTime = new Date();//记录结束时候时间
  },false);
  document.getElementById(this.touchObjID).addEventListener("touchend",function(event){
    event.stopPropagation();
    var event = event || window.event;
    var touch = event.changedTouches[0];
    _this.lastRotateDeg = _this.lastRotateDeg + _this.getTouchDeg(touch);
    if(window.fps < 24){
      _this.compareMoveTime = 200
    } else if (window.fps < 50) {
      _this.compareMoveTime = 100
    } else{
      _this.compareMoveTime = 20
    }
    if((new Date() - _this.touchMoveTime) < _this.compareMoveTime && _this.touchActuallyMoveDeg > _this.compareMoveDgreen){
      //惯性滚动
      if(_this.touchMoveSpeed > 1){
        _this.touchMoveSpeed = 1;
      }
      if(_this.touchMoveSpeed < 0.5 ){
        _this.touchMoveSpeed = 0.5;
      }
      if(_this.touchMoveDerection == 0){
        _this.rotateInertiaTotalDgreen = 360000
      }else{
        _this.rotateInertiaTotalDgreen = 0
      }
      _this.rotateInertia()
    }
  },false);
}
//获取触摸角度
earthTouch.prototype.getTouchDeg = function(touch){
  var moveX = touch.clientX
  var moveY = touch.clientY
  var pointPosition = this.pointPositionCalculate({x:moveX,y:moveY})
  var side1 = Math.sqrt(Math.pow((this.centerX-this.startX),2)+Math.pow((this.centerY-this.startY),2))//左边
  var side2 = Math.sqrt(Math.pow((this.centerX-moveX),2)+Math.pow((this.centerY-moveY),2))//右边
  var side3 = Math.sqrt(Math.pow((this.startX-moveX),2)+Math.pow((this.startY-moveY),2))//对边
  var cosA = (Math.pow(side1,2)+Math.pow(side2,2)-Math.pow(side3,2))/(2*side1*side2)//余弦定理

  cosA = Math.acos(cosA)/3.14*180//反余弦定理
  if(pointPosition == false){
    if(this.lineK > 0){
      if(this.startY < this.centerY){
        cosA = 360-cosA;
      }
    }else{
      if(this.startY > this.centerY){
        cosA = 360-cosA;
      }
    }
  }else{
    if(this.lineK > 0){
      if(this.startY > this.centerY){
        cosA = 360-cosA;
      }
    }else{
      if(this.startY < this.centerY){
        cosA = 360-cosA;
      }
    }
  }
  return cosA;
}
//计算直线公式
earthTouch.prototype.lineCalculate = function(x1,y1,x2,y2){
  this.lineK = (y1-y2)/(x1-x2);
  this.lineB = y1-this.lineK*x1;
}
//判断点在直线上方还是下方 true是上方,false是下方
earthTouch.prototype.pointPositionCalculate = function(point){
  return point.y < (this.lineK*point.x+this.lineB);
}
//惯性旋转
earthTouch.prototype.rotateInertia = function(){
  this.RFAID = RAF(this.rotateInertia.bind(this));
  this.touchMoveSpeed = this.touchMoveSpeed - this.dragForce;//速度逐渐降低
  if(!!this.rotateInertiaLastTimes == false){
    this.rotateInertiaLastTimes = new Date()
    return;
  }
  var degreen = (new Date()-this.rotateInertiaLastTimes) * this.touchMoveSpeed;
  if(this.touchMoveDerection == 0){
    this.rotateInertiaTotalDgreen = this.rotateInertiaTotalDgreen - degreen
  }else{
    this.rotateInertiaTotalDgreen = this.rotateInertiaTotalDgreen + degreen
  }
  var currentDeg = this.lastRotateDeg +  this.rotateInertiaTotalDgreen;
  if(this.touchMoveSpeed <= 0){
    cancelAnimationFrame(this.RFAID)
    return;
  }
  this.lastRotateDegCopy = currentDeg;
  $("#"+this.rotateObjID).css({"-webkit-transform":"translate(-50%,-50%) rotate("+currentDeg+"deg)","transform":"translate(-50%,-50%) rotate("+currentDeg+"deg)"})
  this.rotateInertiaLastTimes = new Date()
}

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
