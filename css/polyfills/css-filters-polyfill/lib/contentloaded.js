/*!
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 *
 */
function contentLoaded(e,t){var n=!1,a=!0,d=e.document,c=d.documentElement,o=d.addEventListener?"addEventListener":"attachEvent",l=d.addEventListener?"removeEventListener":"detachEvent",r=d.addEventListener?"":"on",i=function(a){("readystatechange"!=a.type||"complete"==d.readyState)&&(("load"==a.type?e:d)[l](r+a.type,i,!1),!n&&(n=!0)&&t.call(e,a.type||a))},v=function(){try{c.doScroll("left")}catch(e){return void setTimeout(v,50)}i("poll")};if("complete"==d.readyState)t.call(e,"lazy");else{if(d.createEventObject&&c.doScroll){try{a=!e.frameElement}catch(y){}a&&v()}d[o](r+"DOMContentLoaded",i,!1),d[o](r+"readystatechange",i,!1),e[o](r+"load",i,!1)}}