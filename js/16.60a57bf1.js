(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"872c":function(t,e,a){"use strict";a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d");var i=a("9523"),r=a.n(i),s=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:"",gearColor:"sunYellow"}},methods:n({},Object(s["b"])("system",["updateTitle"]))}},c37d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-white"},[a("q-list",{attrs:{separator:""}},[t._l(t.messagelist,(function(e,i){return a("q-item",{key:i,staticClass:"q-px-sm",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-icon",{staticClass:"q-mr-sm",staticStyle:{"font-size":"9px"},attrs:{name:e.readed?"":"fas fa-circle",color:"unread-blue"}}),a("q-avatar",{attrs:{size:"36px"}},[a("img",{attrs:{src:e.data.notification.image}})])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"row no-wrap"},[a("div",{staticClass:"text-bold"},[t._v(t._s(e.data.data.user))]),a("q-space"),a("div",{staticClass:"text-lightgrey text-caption"},[t._v("9:40 AM")])],1),a("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(e.data.notification.body)+"\n        ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-icon",{staticClass:"text-lightgrey2",attrs:{name:"navigate_next"}})],1)],1)})),a("q-separator")],2)],1)},r=[],s=a("872c"),o={mixins:[s["a"]],beforeMount:function(){this.title="通知列表"},mounted:function(){},data:function(){return{messagelist:[{receivedTime:"2020-08-16T14:58:39.363Z",readed:!1,data:{data:{user:"Company Name"},from:"895029396519",priority:"normal",notification:{title:"test server",body:"That's great, I can help you with that! What type of product are you...",image:"statics/temp/man.png"}}},{receivedTime:"2020-08-16T14:58:39.363Z",readed:!1,data:{data:{user:"Stephen Yustiono"},from:"895029396519",priority:"normal",notification:{title:"test server",body:"Nice. I don't know why people get all worked up about hawaiian pizza. I like it.",image:"statics/temp/chicken.png"}}},{receivedTime:"2020-08-16T14:58:39.363Z",readed:!1,data:{data:{user:"Erin Steed"},from:"895029396519",priority:"normal",notification:{title:"test server",body:"(Sad fact: you cannot search for a gif of the word “gif”, just gives you gifs.)",image:"statics/temp/shark.png"}}},{receivedTime:"2020-08-16T14:58:39.363Z",readed:!0,data:{data:{user:"666"},from:"895029396519",priority:"normal",notification:{title:"test server",body:"test server message",image:"statics/temp/dog.png"}}}]}},methods:{},computed:{}},n=o,c=a("2877"),l=a("9989"),d=a("1c1c"),p=a("66e5"),m=a("4074"),u=a("0016"),f=a("cb32"),b=a("0170"),g=a("2c91"),y=a("eb85"),v=a("eebe"),h=a.n(v),w=Object(c["a"])(n,i,r,!1,null,null,null);e["default"]=w.exports;h()(w,"components",{QPage:l["a"],QList:d["a"],QItem:p["a"],QItemSection:m["a"],QIcon:u["a"],QAvatar:f["a"],QItemLabel:b["a"],QSpace:g["a"],QSeparator:y["a"]})}}]);