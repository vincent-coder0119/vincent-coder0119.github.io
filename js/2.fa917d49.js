(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hHh lpR fFf"}},[o("q-header",{attrs:{id:"header"}},[o("q-toolbar",{class:[t.isWhiteHeader?"bg-white":"bg-paleGrey","text-main","header-style"]},[t.isSearching?[o("q-input",{staticClass:"full-width filled",attrs:{placeholder:"股票/公司名稱",autofocus:"",clearable:"",dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,2901929698),model:{value:t.SearchText,callback:function(e){t.SearchText=e},expression:"SearchText"}})]:[t.isHome?t._e():o("q-btn",{attrs:{ripple:!1,flat:"",color:"main",dense:"",icon:"keyboard_backspace"},on:{click:t.goback}}),t.isHome?o("q-toolbar-title",[o("q-img",{staticClass:"header-brandlogo",attrs:{src:"statics/gugu_beta.png",basic:"",contain:""}})],1):o("q-toolbar-title",{staticClass:"text-bold text-h6"},[t._v("\n          "+t._s(t.$store.state.system.title)+"\n        ")]),o("div",{staticClass:"q-gutter-md"},[(t.isHome,t._e()),t.hidesarch?t._e():o("q-btn",{attrs:{round:"",ripple:!1,padding:"none",flat:"",dense:"",to:"/search",icon:"img:statics/toolbar/search@2x.png",size:"md"}}),(t.isHome,t._e()),t.showFavorite?o("q-btn",{attrs:{ripple:!1,padding:"none",round:"",flat:"",dense:"",icon:t.favoriteIcon,size:"md"},on:{click:t.favoriteClicked}}):t._e(),t.showEdit?o("q-btn",{staticClass:"text-bold",attrs:{label:t.$store.state.global.isCustomListEditing?"完成":"編輯",flat:"",dense:""},on:{click:t.changeEditing}}):t._e()],1)]],2)],1),o("q-footer",{attrs:{elevated:"",id:"footer"}},[o("router-view",{attrs:{name:"foot"}})],1),o("q-page-container",{attrs:{id:"a"}},[o("router-view",{attrs:{keepAlive:""}})],1)],1)},i=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("f559"),o("20d6"),o("9523")),r=o.n(s),n=(o("28a5"),o("6762"),o("2fdb"),o("2f62"));function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var h={mounted:function(){this.homeList=this.homeList.map((function(t){return t.toUpperCase()})),this.showFavoriteRoutes=this.showFavoriteRoutes.map((function(t){return t.toUpperCase()}));var t=this.$route.params.stockId;this.checkFavorite(t)},beforeRouteUpdate:function(t,e,o){if(t.params.stockId){var a=t.params.stockId;a.includes(":")&&(a=a.split(":")[1]),this.checkFavorite(a)}else this.favorite=!1;o()},beforeRouteLeave:function(t,e,o){if(t.params.stockId){var a=t.params.stockId;a.includes(":")&&(a=a.split(":")[1]),this.checkFavorite(a)}else this.favorite=!1;o()},data:function(){return{tab:"",homeList:["/","/COMMUNITY","/MYLIST","/MORE"],showFavoriteRoutes:["/stock/detail","/stock/annualReport","/stock/findata"],favorite:!1}},computed:u(u({},Object(n["c"])("stock",["myFavorites","searchText","favoritesSymbolList","needReloadFavoriteList"])),{},{favoriteIcon:function(){return this.favorite?"img:statics/TabIcon/favListFocus@2x.png":"img:statics/toolbar/farStar@2x.png"},SearchText:{get:function(){return this.searchText},set:function(t){this.setSearchText(t)}},isSearching:function(){var t=this.$route.path.toUpperCase();return"/SEARCH"===t},showFavorite:function(){var t=this.$route.path.toUpperCase();if("/"==t)return!1;var e=this.$_.findIndex(this.showFavoriteRoutes,(function(e){return t.startsWith(e)})),o=e>=0;return o},isHome:function(){var t=this.$route.path.toUpperCase(),e=this.$_.findIndex(this.homeList,(function(e){return e===t}));return e>=0},isWhiteHeader:function(){return"/stock/annualReport"==this.$route.path||"/stock/findata"==this.$route.path},showPencil:function(){return"/more"==this.$route.path},showEdit:function(){return"/mylist"==this.$route.path},hidesarch:function(){var t="/more"==this.$route.path||"/more/accountsetting"==this.$route.path||"/more/notifysetting"==this.$route.path||"/mylist"==this.$route.path||"/mailbox"==this.$route.path;return t}}),methods:u(u(u(u({},Object(n["d"])("global",["setIsCustomListEditing"])),Object(n["d"])("stock",["setMyFavorites","setSearchText"])),Object(n["b"])("stock",["getMyFavorites","RefreshFavoritesSymbolList","MyFavoritesAdd","MyFavoritesDel"])),{},{checkFavorite:function(t){var e=this;t&&this.$api.stock.SymbolInMyList(t).then((function(t){console.log(t);var o=t.data;e.favorite=0==o.result&&"Y"==o.data})).catch((function(t){})).then((function(){}))},favoriteClicked:function(){var t=this;this.favorite=!this.favorite;var e=this.$route.params.stockId,o="已".concat(this.favorite?"新增":"刪除"," 股票代碼 - ").concat(e),a={symbol:e,success:function(e){0==e.data.result&&t.$q.notify({message:o})}};this.favorite?this.MyFavoritesAdd(a):this.MyFavoritesDel(a)},changeEditing:function(){var t=this.$store.state.global.isCustomListEditing;this.setIsCustomListEditing(!t)},goback:function(){this.$router.go(-1)}})},l=h,f=o("2877"),d=o("4d5a"),p=o("e359"),b=o("65c6"),v=o("27f9"),m=o("0016"),g=o("9c40"),y=o("6ac5"),k=o("068f"),w=o("58a8"),O=o("7ff0"),$=o("09e3"),F=o("eebe"),x=o.n(F),C=Object(f["a"])(l,a,i,!1,null,null,null);e["default"]=C.exports;x()(C,"components",{QLayout:d["a"],QHeader:p["a"],QToolbar:b["a"],QInput:v["a"],QIcon:m["a"],QBtn:g["a"],QToolbarTitle:y["a"],QImg:k["a"],QBadge:w["a"],QFooter:O["a"],QPageContainer:$["a"]})}}]);