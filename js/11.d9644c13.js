(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"872c":function(t,e,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var r=n("9523"),s=n.n(r),o=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:""}},methods:i({},Object(o["b"])("system",["updateTitle"]))}},a9eb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-paleGrey  q-pt-md"},[n("iframe",{ref:"iframe",staticClass:"full-width",attrs:{id:"myFrame",src:"statics/charts/findata.html?stockId="+t.stockId,frameborder:"0"}})])},s=[],o=(n("28a5"),n("872c"),{components:{},created:function(){window.addEventListener("message",this.handleMessage)},beforeMount:function(){this.stockCode=this.stockId.split(":")[1],this.$store.commit("system/setTitle",this.stockCode),this.$q.addressbarColor.set("#fff")},mounted:function(){var t=window.innerHeight,e=document.getElementById("header").clientHeight,n=document.getElementById("myFrame");n.style.height=t-e-16-5+"px"},computed:{stockId:function(){return this.$route.params.stockId}},methods:{handleMessage:function(){}},data:function(){return{stockCode:""}}}),c=o,i=n("2877"),a=n("9989"),d=n("eebe"),u=n.n(d),f=Object(i["a"])(c,r,s,!1,null,null,null);e["default"]=f.exports;u()(f,"components",{QPage:a["a"]})}}]);