(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hHh lpR fFf"}},[o("q-header",{attrs:{id:"header"}},[o("q-toolbar",{class:[t.isWhiteHeader?"bg-white":"bg-paleGrey","text-main","header-style"]},[t.isHome?t._e():o("q-btn",{attrs:{ripple:!1,flat:"",color:"main",dense:"",icon:"keyboard_backspace"},on:{click:t.goback}}),t.isHome?o("q-toolbar-title",[o("q-img",{staticClass:"header-brandlogo",attrs:{src:"statics/gugu_beta.png",basic:"",contain:""}})],1):o("q-toolbar-title",{staticClass:"text-bold text-h6"},[t._v("\n        "+t._s(t.$store.state.system.title)+"\n      ")]),o("div",{staticClass:"q-gutter-md"},[(t.isHome,t._e()),t.hidesarch?t._e():o("q-btn",{attrs:{round:"",ripple:!1,padding:"none",flat:"",dense:"",icon:"img:statics/toolbar/search@2x.png",size:"md"}}),(t.isHome,t._e()),t.showFavorite?o("q-btn",{attrs:{ripple:!1,padding:"none",round:"",flat:"",dense:"",icon:t.favoriteIcon,size:"md"},on:{click:t.favoriteClicked}}):t._e(),t.showEdit?o("q-btn",{staticClass:"text-bold",attrs:{label:t.$store.state.global.isCustomListEditing?"完成":"編輯",flat:"",dense:""},on:{click:t.changeEditing}}):t._e()],1)],1)],1),o("q-footer",{attrs:{elevated:"",id:"footer"}},[o("router-view",{attrs:{name:"foot"}})],1),o("q-page-container",{attrs:{id:"a"}},[o("router-view",{attrs:{keepAlive:""}})],1)],1)},a=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("f559"),o("20d6"),o("9523")),r=o.n(s),n=o("2f62");function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var h={mounted:function(){this.homeList=this.homeList.map((function(t){return t.toUpperCase()})),this.showFavoriteRoutes=this.showFavoriteRoutes.map((function(t){return t.toUpperCase()}));var t=this.$route.params.stockId;this.checkFavorite(t)},beforeRouteUpdate:function(t,e,o){t.params.stockId?this.checkFavorite(t.params.stockId):this.favorite=!1,o()},beforeRouteLeave:function(t,e,o){t.params.stockId?this.checkFavorite(t.params.stockId):this.favorite=!1,o()},data:function(){return{tab:"",homeList:["/","/COMMUNITY","/MYLIST","/MORE"],showFavoriteRoutes:["/stock/detail","/stock/annualReport","/stock/findata"],favorite:!1}},computed:u(u({},Object(n["c"])("stock",["myFavorites","favoritesSymbolList","needReloadFavoriteList"])),{},{favoriteIcon:function(){return this.favorite?"img:statics/TabIcon/favListFocus@2x.png":"img:statics/toolbar/farStar@2x.png"},showFavorite:function(){var t=this.$route.path.toUpperCase();if("/"==t)return!1;var e=this.$_.findIndex(this.showFavoriteRoutes,(function(e){return t.startsWith(e)})),o=e>=0;return o},isHome:function(){var t=this.$route.path.toUpperCase(),e=this.$_.findIndex(this.homeList,(function(e){return e===t}));return e>=0},isWhiteHeader:function(){return"/stock/annualReport"==this.$route.path||"/stock/findata"==this.$route.path},showPencil:function(){return"/more"==this.$route.path},showEdit:function(){return"/mylist"==this.$route.path},hidesarch:function(){var t="/more"==this.$route.path||"/more/accountsetting"==this.$route.path||"/more/notifysetting"==this.$route.path||"/mylist"==this.$route.path||"/mailbox"==this.$route.path;return t}}),methods:u(u(u(u({},Object(n["d"])("global",["setIsCustomListEditing"])),Object(n["d"])("stock",["setMyFavorites"])),Object(n["b"])("stock",["getMyFavorites","RefreshFavoritesSymbolList","MyFavoritesAdd","MyFavoritesDel"])),{},{checkFavorite:function(t){var e=this;console.log(t),t&&this.$api.stock.SymbolInMyList(t).then((function(t){console.log(t);var o=t.data;e.favorite=0==o.result&&"Y"==o.data})).catch((function(t){})).then((function(){}))},favoriteClicked:function(){var t=this;this.favorite=!this.favorite;var e=this.$route.params.stockId,o="已".concat(this.favorite?"新增":"刪除"," 股票代碼 - ").concat(e),i={symbol:e,success:function(e){0==e.data.result&&t.$q.notify({message:o})}};this.favorite?this.MyFavoritesAdd(i):this.MyFavoritesDel(i)},changeEditing:function(){var t=this.$store.state.global.isCustomListEditing;this.setIsCustomListEditing(!t)},goback:function(){this.$router.go(-1)}})},l=h,d=o("2877"),f=o("4d5a"),p=o("e359"),b=o("65c6"),v=o("9c40"),m=o("6ac5"),g=o("068f"),y=o("58a8"),k=o("7ff0"),w=o("09e3"),O=o("eebe"),F=o.n(O),$=Object(d["a"])(l,i,a,!1,null,null,null);e["default"]=$.exports;F()($,"components",{QLayout:f["a"],QHeader:p["a"],QToolbar:b["a"],QBtn:v["a"],QToolbarTitle:m["a"],QImg:g["a"],QBadge:y["a"],QFooter:k["a"],QPageContainer:w["a"]})}}]);