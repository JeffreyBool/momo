(function(){var h={},mt={},c={id:"c391e69b0f7798b6e990aecbd611a3d4",dm:["web.immomo.com/login"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,s=null,u=!1;mt.i={};mt.i.za=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.xa=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Ba=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var f;e.G&&(f=new Date,f.setTime(f.getTime()+e.G));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(f?"; expires="+f.toGMTString():"")+(e.Za?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:s};mt.p={};mt.p.la=function(a){return document.getElementById(a)};mt.p.Sa=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return s};
(mt.p.X=function(){function a(){if(!a.z){a.z=r;for(var d=0,e=f.length;d<e;d++)f[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(d,1);return}a()}var e=u,f=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,u);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!e)if(e=r,"complete"===document.readyState)a.z=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var f=u;try{f=window.frameElement==s}catch(n){}document.documentElement.doScroll&&f&&d()}})();return function(d){a.z?d():f.push(d)}}()).z=u;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(d,e,u)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=u};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=e[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(f){switch(typeof f){case "undefined":return"undefined";case "number":return isFinite(f)?String(f):"null";case "string":return a(f);case "boolean":return String(f);
default:if(f===s)return"null";if(f instanceof Array){var e=["["],m=f.length,n,p,g;for(p=0;p<m;p++)switch(g=f[p],typeof g){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.j.stringify(g)),n=1}e.push("]");return e.join("")}if(f instanceof Date)return'"'+f.getFullYear()+"-"+d(f.getMonth()+1)+"-"+d(f.getDate())+"T"+d(f.getHours())+":"+d(f.getMinutes())+":"+d(f.getSeconds())+'"';n=["{"];p=mt.j.stringify;for(m in f)if(Object.prototype.hasOwnProperty.call(f,m))switch(g=
f[m],typeof g){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(p(m)+":"+p(g))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Wa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ya=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.B=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return u}return r};
mt.localStorage.set=function(a,d,e){var f=new Date;f.setTime(f.getTime()+e||31536E6);try{window.localStorage?(d=f.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.B()&&(mt.localStorage.g.expires=f.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,d),mt.localStorage.g.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.B())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(f){}return s};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.B())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):s};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Y={};mt.Y.log=function(a,d){var e=new Image,f="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[f]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=s;e=window[f]=s;d&&d(a)};e.src=a};mt.O={};
mt.O.qa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.O.Ra=function(a,d,e,f,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+f+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+f+'" src="'+d+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.f=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:s};mt.url.Ua=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:s};mt.url.na=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):s};mt.url.S=function(a){return(a=mt.url.na(a))?a.replace(/:\d+$/,""):a};mt.url.Ta=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):s};
(function(){function a(){for(var a=u,e=document.getElementsByTagName("script"),f=e.length,f=100<f?100:f,k=0;k<f;k++){var m=e[k].src;if(m&&0===m.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.ka=a})();var A=h.ka;
h.C={Va:"http://tongji.baidu.com/hm-web/welcome/ico",W:"hm.baidu.com/hm.gif",ba:"baidu.com",ua:"hmmd",va:"hmpl",Ka:"utm_medium",ta:"hmkw",Ma:"utm_term",ra:"hmci",Ja:"utm_content",wa:"hmsr",La:"utm_source",sa:"hmcu",Ia:"utm_campaign",o:0,k:Math.round(+new Date/1E3),Q:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",K:A()||"https:"===document.location.protocol?"https:":"http:",Xa:0,Oa:6E5,Pa:10,Qa:1024,Na:1,L:2147483647,Z:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")};
(function(){var a={m:{},c:function(a,e){this.m[a]=this.m[a]||[];this.m[a].push(e)},s:function(a,e){this.m[a]=this.m[a]||[];for(var f=this.m[a].length,k=0;k<f;k++)this.m[a][k](e)}};return h.F=a})();
(function(){function a(a,f){var k=document.createElement("script");k.charset="utf-8";d.d(f,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=s,f()}:k.onload=function(){f()});k.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(k,m)}var d=mt.lang;return h.load=a})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.D.oa()+","+h.D.ma();h.b.h()}}function d(){clearTimeout(z);var a;x&&(a="visible"==document[x]);y&&(a=!document[y]);p="undefined"==typeof a?r:a;if((!n||!g)&&p&&b)v=r,l=+new Date;else if(n&&g&&(!p||!b))v=u,t+=+new Date-l;n=p;g=b;z=setTimeout(d,100)}function e(b){var a=document,l="";if(b in a)l=b;else for(var t=["webkit","ms","moz","o"],d=0;d<t.length;d++){var f=t[d]+b.charAt(0).toUpperCase()+b.slice(1);if(f in a){l=
f;break}}return l}function f(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))b="focus"==a.type||"focusin"==a.type?r:u,d()}var k=mt.event,m=h.F,n=r,p=r,g=r,b=r,w=+new Date,l=w,t=0,v=r,x=e("visibilityState"),y=e("hidden"),z;d();(function(){var b=x.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,b,d);k.c(window,"pageshow",d);k.c(window,"pagehide",d);"object"==typeof document.onfocusin?(k.c(document,"focusin",f),k.c(document,"focusout",f)):(k.c(window,"focus",f),
k.c(window,"blur",f))})();h.D={oa:function(){return+new Date-w},ma:function(){return v?+new Date-l+t:t}};m.c("pv-b",function(){k.c(window,"unload",a())});return h.D})();
(function(){var a=mt.lang,d=h.C,e=h.load,f={ya:function(f){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.H();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),f)}},Ha:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.ea=f})();
(function(){function a(b,a,l,t){if(!(b===q||a===q||t===q)){if(""===b)return[a,l,t].join("*");b=String(b).split("!");for(var d,f=u,e=0;e<b.length;e++)if(d=b[e].split("*"),String(a)===d[0]){d[1]=l;d[2]=t;b[e]=d.join("*");f=r;break}f||b.push([a,l,t].join("*"));return b.join("!")}}function d(b){for(var a in b)if({}.hasOwnProperty.call(b,a)){var l=b[a];f.d(l,"Object")||f.d(l,"Array")?d(l):b[a]=String(l)}}function e(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b}var f=
mt.lang,k=mt.j,m=h.C,n=h.F,p=h.ea,g={r:[],A:0,U:u,l:{P:"",page:""},init:function(){g.e=0;n.c("pv-b",function(){g.fa();g.ha()});n.c("pv-d",function(){g.ia();g.l.page=""});n.c("stag-b",function(){h.b.a.api=g.e||g.A?g.e+"_"+g.A:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),g.l.P,g.l.page].join("!")});n.c("stag-d",function(){h.b.a.api=0;g.e=0;g.A=0})},fa:function(){var b=window._hmt||[];if(!b||f.d(b,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var b=window._hmt,a=0;a<arguments.length;a++){var d=
arguments[a];f.d(d,"Array")&&(b.cmd[b.id].push(d),"_setAccount"===d[0]&&(1<d.length&&/^[0-9a-f]{32}$/.test(d[1]))&&(d=d[1],b.id=d,b.cmd[d]=b.cmd[d]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,b)},ha:function(){var b=window._hmt;if(b&&b.cmd&&b.cmd[c.id])for(var a=b.cmd[c.id],l=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,f=a.length;d<f;d++){var e=a[d];l.test(e[0])?g.r.push(e):g.M(e)}b.cmd[c.id]={push:g.M}},ia:function(){if(0<g.r.length)for(var b=0,a=g.r.length;b<a;b++)g.M(g.r[b]);
g.r=s},M:function(b){var a=b[0];if(g.hasOwnProperty(a)&&f.d(g[a],"Function"))g[a](b)},_setAccount:function(b){1<b.length&&/^[0-9a-f]{32}$/.test(b[1])&&(g.e|=1)},_setAutoPageview:function(b){if(1<b.length&&(b=b[1],u===b||r===b))g.e|=2,h.b.T=b},_trackPageview:function(b){if(1<b.length&&b[1].charAt&&"/"===b[1].charAt(0)){g.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.I?(h.b.a.nv=0,h.b.a.st=4):h.b.I=r;var a=h.b.a.u,l=h.b.a.su;h.b.a.u=m.protocol+"//"+document.location.host+b[1];g.U||(h.b.a.su=document.location.href);
h.b.h();h.b.a.u=a;h.b.a.su=l}},_trackEvent:function(b){2<b.length&&(g.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e(b[1])+"*"+e(b[2])+(b[3]?"*"+e(b[3]):"")+(b[4]?"*"+e(b[4]):""),h.b.h())},_setCustomVar:function(b){if(!(4>b.length)){var a=b[1],l=b[4]||3;if(0<a&&6>a&&0<l&&4>l){g.A++;for(var d=(h.b.a.cv||"*").split("!"),f=d.length;f<a-1;f++)d.push("*");d[a-1]=l+"*"+e(b[2])+"*"+e(b[3]);h.b.a.cv=d.join("!");b=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==b?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(b),c.age):h.b.Aa("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var l=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),l=a(l,d,1,b);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(l),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var l=g.l.P,l=a(l,d,2,b);g.l.P=l}}},_setPageTag:function(b){if(!(3>b.length)){var d=e(b[1]);b=e(b[2]);if(d!==q&&b!==q){var l=g.l.page,l=a(l,d,3,b);
g.l.page=l}}},_setReferrerOverride:function(b){1<b.length&&(h.b.a.su=b[1].charAt&&"/"===b[1].charAt(0)?m.protocol+"//"+window.location.host+b[1]:b[1],g.U=r)},_trackOrder:function(b){b=b[1];f.d(b,"Object")&&(d(b),g.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=k.stringify(b),h.b.h())},_trackMobConv:function(b){if(b={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[b[1]])g.e|=32,h.b.a.et=93,h.b.a.ep=b,h.b.h()},_trackRTPageview:function(b){b=b[1];f.d(b,"Object")&&(d(b),b=k.stringify(b),512>=encodeURIComponent(b).length&&
(g.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.d(b,"Object")){d(b);b=encodeURIComponent(k.stringify(b));var a=function(b){var a=h.b.a.rt;g.e|=128;h.b.a.et=90;h.b.a.rt=b;h.b.h();h.b.a.rt=a},l=b.length;if(900>=l)a.call(this,b);else for(var l=Math.ceil(l/900),e="block|"+Math.round(Math.random()*m.L).toString(16)+"|"+l+"|",v=[],x=0;x<l;x++)v.push(x),v.push(b.substring(900*x,900*x+900)),a.call(this,e+v.join("|")),v=[]}},_setUserId:function(b){b=b[1];p.ya();p.Ha(b)}};g.init();h.ca=g;return h.ca})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.T=r,this.I=u,this.init())}var d=mt.url,e=mt.Y,f=mt.O,k=mt.lang,m=mt.cookie,n=mt.i,p=mt.localStorage,g=mt.sessionStorage,b=h.C,w=h.F;a.prototype={J:function(b,a){b="."+b.replace(/:\d+/,"");a="."+a.replace(/:\d+/,"");var d=b.indexOf(a);return-1<d&&d+a.length===b.length},V:function(b,a){b=b.replace(/^https?:\/\//,"");return 0===b.indexOf(a)},w:function(b){for(var a=0;a<c.dm.length;a++)if(-1<
c.dm[a].indexOf("/")){if(this.V(b,c.dm[a]))return r}else{var f=d.S(b);if(f&&this.J(f,c.dm[a]))return r}return u},H:function(){for(var b=document.location.hostname,a=0,d=c.dm.length;a<d;a++)if(this.J(b,c.dm[a]))return c.dm[a].replace(/(:\d+)?[\/\?#].*/,"");return b},R:function(){for(var b=0,a=c.dm.length;b<a;b++){var d=c.dm[b];if(-1<d.indexOf("/")&&this.V(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},pa:function(){if(!document.referrer)return b.k-b.o>c.vdur?1:4;var a=
u;this.w(document.referrer)&&this.w(document.location.href)?a=r:(a=d.S(document.referrer),a=this.J(a||"",document.location.hostname));return a?b.k-b.o>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||g.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.H(),path:this.R(),G:d}),d?p.set(a,b,d):g.set(a,b)}catch(f){}},Aa:function(a){try{m.set(a,"",{domain:this.H(),path:this.R(),G:-1}),g.remove(a),p.remove(a)}catch(b){}},Fa:function(){var a,d,f,e,g;b.o=this.getData("Hm_lpvt_"+
c.id)||0;13===b.o.length&&(b.o=Math.round(b.o/1E3));d=this.pa();a=4!==d?1:0;if(f=this.getData("Hm_lvt_"+c.id)){e=f.split(",");for(g=e.length-1;0<=g;g--)13===e[g].length&&(e[g]=""+Math.round(e[g]/1E3));for(;2592E3<b.k-e[0];)e.shift();g=4>e.length?2:3;for(1===a&&e.push(b.k);4<e.length;)e.shift();f=e.join(",");e=e[e.length-1]}else f=b.k,e="",g=1;this.setData("Hm_lvt_"+c.id,f,c.age);this.setData("Hm_lpvt_"+c.id,b.k);f=b.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.w(document.location.href)&&
(""===document.referrer||this.w(document.referrer)))a=0,d=4;this.a.nv=a;this.a.st=d;this.a.cc=f;this.a.lt=e;this.a.lv=g},Ea:function(){for(var a=[],d=this.a.et,e=0,f=b.Z.length;e<f;e++){var g=b.Z[e],k=this.a[g];"undefined"!==typeof k&&""!==k&&("tt"!==g||"tt"===g&&0===d)&&("ct"!==g||"ct"===g&&0===d)&&a.push(g+"="+encodeURIComponent(k))}switch(d){case 0:a.push("sn="+b.Q);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+b.Q);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},
Ga:function(){this.Fa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Ba;this.a.cl=n.colorDepth+"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=f.qa();this.a.v="1.2.16";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=d.f(a,b.ua)||"";this.a.cp=d.f(a,b.va)||d.f(a,b.Ka)||"";this.a.cw=d.f(a,b.ta)||d.f(a,
b.Ma)||"";this.a.ci=d.f(a,b.ra)||d.f(a,b.Ja)||"";this.a.cf=d.f(a,b.wa)||d.f(a,b.La)||"";this.a.cu=d.f(a,b.sa)||d.f(a,b.Ia)||""},init:function(){try{this.Ga(),0===this.a.nv?this.Da():this.N(".*"),h.b=this,this.da(),w.s("pv-b"),this.Ca()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+encodeURIComponent(document.referrer));e.log(b.K+"//"+b.W+"?"+d.join("&"))}},Ca:function(){function a(){w.s("pv-d")}this.T?(this.I=r,
this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var d=this;d.a.rnd=Math.round(Math.random()*b.L);w.s("stag-b");var f=b.K+"//"+b.W+"?"+d.Ea();w.s("stag-d");d.aa(f);e.log(f,function(b){d.N(b);k.d(a,"Function")&&a.call(d)})},da:function(){var a=document.location.hash.substring(1),e=RegExp(c.id),f=-1<document.referrer.indexOf(b.ba),g=d.f(a,"jn"),k=/^heatlink$|^select$/.test(g);a&&(e.test(a)&&f&&k)&&(this.a.rnd=Math.round(Math.random()*b.L),a=document.createElement("script"),a.setAttribute("type",
"text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",b.protocol+"//"+c.js+g+".js?"+this.a.rnd),g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(a,g))},aa:function(a){var b=g.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");g.set("Hm_unsent_"+c.id,b)},N:function(a){var b=g.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),
a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?g.set("Hm_unsent_"+c.id,b):g.remove("Hm_unsent_"+c.id))},Da:function(){var a=this,d=g.get("Hm_unsent_"+c.id);if(d)for(var d=d.split(","),f=function(d){e.log(b.K+"//"+decodeURIComponent(d),function(b){a.N(b)})},k=0,y=d.length;k<y;k++)f(d[k])}};return new a})();
(function(){var a=mt.p,d=mt.event,e=mt.url,f=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var k=+new Date,m=function(a){var d=performance.timing,e=d[a+"Start"]?d[a+"Start"]:0;a=d[a+"End"]?d[a+"End"]:0;return{start:e,end:a,value:0<a-e?a-e:0}},n=s;a.X(function(){n=+new Date});var p=function(){var a,d,g;g=m("navigation");d=m("request");g={netAll:d.start-g.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-g.start};a=document.referrer;var p=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],v=s;d=s;if("www.baidu.com"===p[2]||"m.baidu.com"===p[2])v=e.f(a,"qid"),d=e.f(a,"click_t");a=v;g.qid=a!=s?a:"";d!=s?(g.bdDom=n?n-d:0,g.bdRun=k-d,g.bdDef=m("navigation").start-d):(g.bdDom=0,g.bdRun=0,g.bdDef=0);h.b.a.et=87;h.b.a.ep=f.stringify(g);h.b.h()};d.c(window,"load",function(){setTimeout(p,500)})}}catch(g){}})();
(function(){var a=mt.i,d=mt.lang,e=mt.event,f=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.za||7<a.xa)&&c.cvcc)){var k,m,n,p,g=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(a,b){var e={};e.n=k;e.t="clk";e.v=a;if(b){var g=b.getAttribute("href"),l=b.getAttribute("onclick")?""+b.getAttribute("onclick"):s,m=b.getAttribute("id")||"";n.test(g)?(e.sn="mediate",
e.snv=g):d.d(l,"String")&&n.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.b.a.et=86;h.b.a.ep=f.stringify(e);h.b.h();for(e=+new Date;400>=+new Date-e;);};if(c.med)m="/zoosnet",k="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=g(document.getElementsByTagName("a")),b=[].concat.apply(b,g(document.getElementsByTagName("area"))),b=[].concat.apply(b,g(document.getElementsByTagName("img"))),d,e,f=0,k=b.length;f<k;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){m="/other-comm";k="other";n=c.cvcc.q||q;var l=c.cvcc.id||q;p={click:function(){for(var a=[],b=g(document.getElementsByTagName("a")),b=[].concat.apply(b,g(document.getElementsByTagName("area"))),b=[].concat.apply(b,g(document.getElementsByTagName("img"))),d,e,f,k=0,m=b.length;k<m;k++)d=b[k],n!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),l?(d=d.getAttribute("id"),(n.test(e)||n.test(f)||l.test(d))&&
a.push(b[k])):(n.test(e)||n.test(f))&&a.push(b[k])):l!==q&&(d=d.getAttribute("id"),l.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof n){var t;m+=/\/$/.test(m)?"":"/";var v=function(a,b){if(t===b)return w(m+a,b),u;if(d.d(b,"Array")||d.d(b,"NodeList"))for(var e=0,f=b.length;e<f;e++)if(t===b[e])return w(m+a+"/"+(e+1),b[e]),u};e.c(document,"mousedown",function(a){a=a||window.event;t=a.target||a.srcElement;var e={};for(b(p,function(a,b){e[a]=d.d(b,"Function")?b():document.getElementById(b)});t&&
t!==document&&b(e,v)!==u;)t=t.parentNode})}}})();(function(){var a=mt.p,d=mt.lang,e=mt.event,f=mt.j;if("undefined"!==typeof h.b&&d.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={$:function(){for(var d=c.cvcf.length,f,p=0;p<d;p++)(f=a.la(decodeURIComponent(c.cvcf[p])))&&e.c(f,"click",k.ga())},ga:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=f.stringify(a);h.b.h()}}};a.X(function(){k.$()})}})();
(function(){var a=mt.event,d=mt.j;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,f={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.h()};a.c(document,"click",function(){f.clk++});a.c(document,"keyup",function(){f.kb=1});a.c(window,"scroll",function(){f.sb++});a.c(window,"unload",function(){f.t=+new Date-e;k()});a.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
