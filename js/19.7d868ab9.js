(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"035a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"bg-background-light2",attrs:{view:"hHh lpR fFf"}},[s("q-page-container",{class:t.$q.platform.is.ios?"safe-top safe-bottom":""},[t.$store.state.system.splashShowed?s("div",{staticClass:"column "},[s("div",{staticClass:"text-right q-px-md q-pt-xl"}),s("div",{staticClass:"text-center"},[s("q-img",{staticClass:"onboard_iphonePic",attrs:{src:t.backImage,basic:""}})],1)]):t._e(),s("q-card",{staticClass:"onboard_Card column justify-end fixed-bottom ",staticStyle:{"border-radius":"25px 25px 0 0"},attrs:{id:"onboard_Card"}},[s("q-carousel",{staticClass:"absolut-bottom ",attrs:{swipeable:"",animated:"","control-color":"second",navigation:"",height:"70%"},on:{transition:t.change},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.carousels,(function(e){return s("q-carousel-slide",{key:e.name,staticClass:"column items-center",attrs:{name:e.name}},[s("div",{staticClass:" text-h6 q-pb-sm text-center text-main text-bold"},[t._v("\n            "+t._s(e.title)+"\n          ")]),s("div",{staticClass:"text-center text-caption text-bold text-second onboard_Card-text"},[t._v("\n            "+t._s(e.content)+"\n          ")])])})),1),s("div",{staticClass:"row q-gutter-md q-px-lg justify-center items-center q-pb-md"},[s("q-btn",{staticClass:"col text-bold onboard_Card-btn",attrs:{size:"16px",unelevated:"",color:"sunYellow",label:"登入"},on:{click:t.goLogin}}),s("q-btn",{staticClass:"col  text-bold onboard_Card-btn",attrs:{size:"16px",outline:"",to:"register",color:"second",label:"註冊"}})],1)],1)],1)],1)},o=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("7f7f"),s("20d6"),s("9523")),r=s.n(n),i=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){r()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={beforeCreate:function(){this.$route.path;this.$store.state.system.splashShowed||this.$router.push("/splash")},mounted:function(){console.log(this.carousels[0].image),this.backImage=this.carousels[0].image},computed:l({},Object(i["e"])("system",[""])),data:function(){return{slide:"s1",backImage:"",carousels:[{name:"s1",title:"簡單找到價格合理的好股票",content:"揭露30年企業財務報表，分析20家國際信評機構，專屬社群獨家揭秘，大師級持股，殺手級情報，優質好股，一秒帶走，虛胖雷股，一鍵送走。",image:"statics/onboard/onboard-1-1.png"},{name:"s2",title:"股股金蛋 50",content:"50 大強檔選股，股股智能，透過 AI 模擬各種情境與大數據的結合，評量出50強檔股票，我們稱為『股股金蛋 50』",image:"statics/onboard/onboard-2.png"},{name:"s3",title:"品質分數分析",content:"根據公司的財務數據、商業模式，以及經營狀況，股股智能分析幫你從 0 分到 100 分，量化公司整體的運營品質，協助投資人避開投資風險。",image:"statics/onboard/onboard-3-1.png"},{name:"s4",title:"合理價值評估",content:"採用基於本益比、現金折現、股息平均等八種精準估值方法，計算合理投資價值！幫助投資人判別股票價格與基本價值差異，掌握最佳獲利時機。",image:"statics/onboard/onboard-4-1.png"}]}},methods:{change:function(t){var e=this.carousels.findIndex((function(e){return e.name===t})),s=this.carousels[e];this.backImage=s.image},goLogin:function(){this.$store.state.account.token?this.$router.push("/"):this.$router.push("/login")}}},u=d,b=s("2877"),p=s("4d5a"),m=s("09e3"),g=s("9c40"),f=s("068f"),h=s("f09f"),x=s("880c"),C=s("62cd"),v=s("eebe"),y=s.n(v),O=Object(b["a"])(u,a,o,!1,null,null,null);e["default"]=O.exports;y()(O,"components",{QLayout:p["a"],QPageContainer:m["a"],QBtn:g["a"],QImg:f["a"],QCard:h["a"],QCarousel:x["a"],QCarouselSlide:C["a"]})}}]);