(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{7454:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-background-light"},[t._l(t.dataList,(function(e,i){return a("q-card",{key:i,staticClass:" q-py-sm ",staticStyle:{"margin-bottom":"6px"},attrs:{flat:"",square:""}},[a("q-item",{staticClass:"q-pb-none"},[a("q-item-section",{staticStyle:{"min-width":"38px","padding-right":"12px"},attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"38px"}},[a("img",{attrs:{src:e.author_head}})])],1),a("q-item-section",{attrs:{"no-wrap":""}},[a("q-item-label",{staticClass:"text-color-1 text-bold text-subtitle1"},[t._v(t._s(e.author_name))]),a("q-item-label",{staticClass:"text-color-2",attrs:{caption:""}},[t._v(t._s(e.time_before))])],1)],1),a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"text-color-2"},[t._v("\n        "+t._s(e.content)+"\n      ")])],1),a("q-item",{staticClass:"q-py-none",attrs:{dense:""}},[a("q-item-section",[a("q-item-label",[a("q-btn",{attrs:{dense:"",flat:"",align:"left",icon:e.my_like?"favorite":"favorite_border",label:e.likes_count,"text-color":e.my_like?"redheart":"text-color-2"},on:{click:function(a){return t.like(e,!e.my_like)}}})],1)],1),a("q-item-section",[a("q-item-label",[a("q-btn",{attrs:{dense:"",flat:"",to:"/community/feeds-reply/"+t.forumId+"/"+e.uid,align:"left",icon:"far fa-comment",label:e.reply_count,"text-color":"text-color-2"}})],1)],1)],1)],1)})),a("div",{staticClass:"fixed-bottom bg-feeds-messagebg row bg-feeds-messagebg q-col-gutter-sm items-center q-pb-sm q-pl-sm q-pr-sm ",attrs:{id:"community-sendBox"}},[a("div",{staticClass:"col-auto "},[a("q-avatar",{attrs:{size:"33px"}},[a("img",{attrs:{src:t.$store.state.account.head}})])],1),a("div",{staticClass:"col full-width"},[a("q-input",{staticClass:"bg-white",attrs:{dense:"",clearable:"",color:"blueGrey",autogrow:"",outlined:"",placeholder:"以"+t.$store.state.account.user.account+" 發表回應"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{dense:"",round:"",flat:"",icon:"send",color:t.message?"sunYellow":"blueGrey"},on:{click:t.postComment}})],1)]),a("q-inner-loading",{staticClass:"text-main ",attrs:{showing:t.isLoading,"transition-show":"fade","transition-hide":"fade"}},[a("div",{staticClass:"text-h6 text-blueGrey text-bold q-pb-md"},[t._v("讀取中")]),a("q-spinner-gears",{attrs:{size:"45px",color:t.gearColor}})],1)],2)},s=[],n=a("872c"),o={mixins:[n["a"]],beforeMount:function(){this.title="美股雙效成長投資術 VIP 群"},mounted:function(){this.forumId=this.$route.params.forumId,this.init()},data:function(){return{forumId:"1",isLoading:!1,message:"",dataList:[]}},methods:{init:function(){var t=this;this.isLoading=!0,this.$api.forum.ForumList(this.forumId).then((function(e){var a=e.data;t.dataList=a.data})).catch((function(t){})).then((function(){t.isLoading=!1}))},postComment:function(){var t=this;this.isLoading=!0,this.$api.forum.ForumPost(this.message,this.forumId).then((function(e){t.init()})).catch((function(t){})).then((function(){t.isLoading=!1}))},like:function(t,e){this.$api.forum.ForumLike(t.uid,e,this.forumId).then((function(a){t.my_like=e,e?t.likes_count++:t.likes_count--}))}}},r=o,c=a("2877"),l=a("9989"),u=a("f09f"),d=a("66e5"),m=a("4074"),f=a("cb32"),b=a("0170"),p=a("9c40"),h=a("a370"),g=a("27f9"),q=a("74f7"),y=a("cf57"),v=a("eebe"),x=a.n(v),w=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=w.exports;x()(w,"components",{QPage:l["a"],QCard:u["a"],QItem:d["a"],QItemSection:m["a"],QAvatar:f["a"],QItemLabel:b["a"],QBtn:p["a"],QCardSection:h["a"],QInput:g["a"],QInnerLoading:q["a"],QSpinnerGears:y["a"]})},"872c":function(t,e,a){"use strict";a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d");var i=a("9523"),s=a.n(i),n=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:"",gearColor:"sunYellow"}},methods:r({},Object(n["b"])("system",["updateTitle"]))}}}]);