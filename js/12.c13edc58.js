(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"872c":function(t,e,a){"use strict";a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d");var r=a("9523"),n=a.n(r),i=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:"",gearColor:"sunYellow"}},methods:s({},Object(i["b"])("system",["updateTitle"]))}},cfea:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-background-light q-px-lg ",staticStyle:{"padding-top":"32px"}},t._l(t.data,(function(e,r){return a("q-card",{key:r,staticClass:"q-mb-lg",staticStyle:{"border-radius":"10px","box-shadow":"0 8px 21px 0px rgba(0,0,0,0.2)"}},[a("router-link",{attrs:{to:"/community/feeds/"+e.forum_id}},[a("q-img",{staticStyle:{"border-radius":"10px"},attrs:{src:"statics/community-demo.jpg",basic:"",ratio:1.5}},[a("div",{staticClass:" absolute-top-right bg-transparent",staticStyle:{padding:"20px"}},[a("q-btn",{attrs:{ripple:!1,padding:"none",round:"",flat:"",color:"white",icon:"far fa-star",size:"md"}})],1),a("q-card-section",{staticClass:"absolute-bottom "},[a("div",{staticClass:"text-white text-bold text-h6 q-pb-sm"},[t._v("\n            "+t._s(e.groupname)+"\n          ")]),a("div",{staticClass:"text-white text-subtitle1 q-pb-sm"},[t._v("\n            版主："+t._s(e.admin)+"\n          ")]),a("div",[a("q-badge",{attrs:{color:"community-badge","text-color":"white",label:e.limited}})],1)])],1)],1)],1)})),1)},n=[],i=a("872c"),o={name:"feeds",mixins:[i["a"]],beforeMount:function(){this.title="股股"},data:function(){return{data:[{groupname:"美股雙效成長投資術 VIP 群",admin:"追日 Gucci",limited:"VIP",forum_id:"1"}]}}},s=o,c=a("2877"),l=a("9989"),d=a("f09f"),u=a("068f"),p=a("9c40"),b=a("a370"),f=a("58a8"),m=a("eebe"),g=a.n(m),y=Object(c["a"])(s,r,n,!1,null,null,null);e["default"]=y.exports;g()(y,"components",{QPage:l["a"],QCard:d["a"],QImg:u["a"],QBtn:p["a"],QCardSection:b["a"],QBadge:f["a"]})}}]);