!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=417)}({417:function(t,e,r){t.exports=r(418)},418:function(t,e,r){"use strict";r.r(e);r(419)},419:function(t,e){!function(){"use strict";Charts.init();var t=[],e=[],r=[],o=moment().subtract(6,"days").format("YYYY-MM-DD"),n=moment().format("YYYY-MM-DD");moment.range(o,n).by("days",function(o){t.push({y:Math.floor(300*Math.random())+30,x:o.toDate()}),e.push({y:Math.floor(300*Math.random())+10,x:o.toDate()}),o.startOf("day").isSame(moment().startOf("day"))?r.push(settings.colors.accent[500]):r.push(settings.colors.primary[500])});!function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"roundedBar",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a=Chart.helpers.merge({barRoundness:1.2,legend:{display:!0,position:"bottom",labels:{usePointStyle:!0,padding:16}},scales:{yAxes:[{ticks:{callback:function(t){if(!(t%10))return"$"+t}}}],xAxes:[{offset:!0,ticks:{padding:10},maxBarThickness:20,gridLines:{display:!1},type:"time",time:{unit:"day"}}]},tooltips:{callbacks:{label:function(t,e){var r=e.datasets[t.datasetIndex].label||"",o=t.yLabel,n="";return 1<e.datasets.length&&(n+='<span class="popover-body-label mr-auto">'+r+"</span>"),n+'<span class="popover-body-value">$'+o+"</span>"}}}},a);var s={datasets:[{label:"Previous Week",data:e,backgroundColor:settings.colors.gray[300],borderColor:settings.colors.gray[50]},{label:"Last Week",data:t,backgroundColor:r,borderColor:settings.colors.primary[50]},{label:"Today",data:[],backgroundColor:settings.colors.accent[500],borderColor:settings.colors.accent[50]}]};Charts.create(o,n,a,s)}("#earningsChart")}()}});