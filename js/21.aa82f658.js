(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"0097":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-paleGrey"},[n("q-item",{staticClass:"full-width bg-white q-pr-sm",attrs:{dense:""}},[n("q-item-section",{staticClass:" text-main text-bold text-subtitle1"},[t._v("接受通知")]),n("q-item-section",{attrs:{side:""}},[n("q-toggle",{attrs:{color:"toggle-blue",value:t.$store.state.account.settings.notify.all},on:{input:t.toggle}})],1)],1)],1)},o=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),i=n.n(c),s=n("872c"),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={mixins:[s["a"]],beforeMount:function(){this.title="通知設定"},data:function(){return{receiveNotification:!0}},methods:u(u(u({},Object(a["d"])("account",["setNotifyAll"])),Object(a["b"])("system",["backupStorage"])),{},{toggle:function(t){this.setNotifyAll(t),this.backupStorage()}})},p=b,f=n("2877"),g=n("9989"),O=n("66e5"),y=n("4074"),d=n("9564"),m=n("eebe"),j=n.n(m),w=Object(f["a"])(p,r,o,!1,null,null,null);e["default"]=w.exports;j()(w,"components",{QPage:g["a"],QItem:O["a"],QItemSection:y["a"],QToggle:d["a"]})}}]);