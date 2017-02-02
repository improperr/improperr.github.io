var qadserve_width  = "800";var qadserve_height = "440";var qadserve_pid = "0673a924-bf1c-4801-b262-20ccb7f53421";var qadserve_skip;
function cstradload() { return true; }function bindEvent(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,a)}function cstrloadScript(e,t){var a=document.createElement("script")
a.type="text/javascript",a.readyState?a.onreadystatechange=function(){("loaded"==a.readyState||"complete"==a.readyState)&&(a.onreadystatechange=null,t())}:a.onload=function(){t()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}var cstrploaded=!1,cstrloadPlayer=function(){if("undefined"!=typeof swfobject&&0==cstrploaded){cstrploaded=!0
var e='<div id="CasterfmPlayer"><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></div>',t=document.getElementById("cstrpdiv")
t.innerHTML+=e
var a={}
a.uid=cstrpuid,a.ga="TRUE"
var d={}
d.allowscriptaccess="always"
var n={}
n.wmode="opaque",swfobject.embedSWF("player.swf","CasterfmPlayer",cstrpwidth,cstrpheight,"10.0.0","expressInstall.swf",a,d,n)};cstrloadScript("qadserve_lightbox.min.js",cstradload);},cstrpload=function(){var e=document.getElementById("cstrplb"),t=document.getElementById("cstrplb2")
e&&"undefined"!=e&&"null"!=e&&void 0!=e&&null!=e&&t&&"undefined"!=t&&"null"!=t&&void 0!=t&&null!=t||alert("Please do not remove the Caster.fm link. \n IT IS GOING TO BE HIDDEN ANYWAY.")
var a=e.firstChild.nodeValue,d=e.href,n=t.firstChild.nodeValue,r=t.href
"Free Shoutcast Hosting"!=a||"http://www.caster.fm/"!=d||"Radio Stream Hosting"!=n||"http://www.caster.fm/"!=r?alert("Please do not remove the Caster.fm link.\n  IT IS GOING TO BE HIDDEN ANYWAY."):(e.style.display="none",t.style.display="none",cstrloadScript("swfobject.js",cstrloadPlayer))}
bindEvent(window,"load",cstrpload);
