(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5d84":function(t,e,r){},8695:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{ref:"mm",staticClass:"bg-white",attrs:{id:"mm"}},[t.isCustomListEditing?t._e():r("q-table",{ref:"table",attrs:{flat:"",dense:"",id:"gu-masterlist","binary-state-sort":"",square:"","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-pagination":"","hide-no-data":t.hideNodata,"virtual-scroll-sticky-size-start":48,data:t.myFavorites,columns:t.columns,loading:t.IsLoading,"row-key":"symbol"},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.clicked},scopedSlots:t._u([{key:"header",fn:function(e){return[r("q-tr",{staticStyle:{height:"42px"},attrs:{props:e}},t._l(e.cols,(function(i){return r("q-th",{key:i.name,staticClass:"text-blueGrey text-bold text-center",staticStyle:{"font-weight":"bold","font-size":"14px"},attrs:{"auto-width":"",props:e}},[t._v("\n          "+t._s(i.label)+"\n        ")])})),1)]}},{key:"body-cell-symbol",fn:function(e){var i=e.props,o=e.row;return[r("q-td",{staticClass:"text-main text-bold ",attrs:{props:i,row:o}},[t._v("\n        "+t._s(o.symbol)+"\n      ")])]}},{key:"body-cell-price",fn:function(e){var i=e.props,o=e.row;return[r("q-td",{class:["text-right","text-bold",o.price_change>0?"text-positive":"text-negative"],attrs:{props:i,row:o}},[r("div",[t._v(t._s(o.price))]),r("div",{staticClass:"row justify-end items-center",staticStyle:{"font-size":"10px"}},[r("q-icon",{staticClass:"q-pr-sm",attrs:{name:o.price_change>0?"fas fa-caret-up":"fas fa-caret-down"}}),r("div",[t._v("\n            "+t._s(Math.abs(o.price_change_percent))+"%\n            ")])],1)])]}},{key:"body-cell-fair_value",fn:function(e){var i=e.props,o=e.row;return[r("q-td",{class:["text-right","text-main",o.fair_value>o.price?"text-positive":"text-negative"],attrs:{props:i,row:o}},[r("div",{staticClass:"text-bold"},[t._v(t._s(o.fair_value))]),r("div",{staticStyle:{"font-size":"10px"}},[t._v("\n          "+t._s(o.fair_value>o.price?t.$t("stock.masterList.fair_value_over",[o.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[o.fair_value_desc]))+"\n        ")])])]}},{key:"body-cell-quality_score",fn:function(e){return[r("q-td",{staticClass:"text-main text-bold text-center ",attrs:{props:e}},[t._v("\n        "+t._s(e.value)+"\n      ")])]}},{key:"no-data",fn:function(){return[r("h5",[t._v("\n        目前沒有任何自選股\n      ")])]},proxy:!0}],null,!1,4167217701)}),t.isCustomListEditing?r("q-list",{attrs:{separator:""}},[r("draggable",{on:{end:t.onEnd},model:{value:t.orderList,callback:function(e){t.orderList=e},expression:"orderList"}},t._l(t.orderList,(function(e,i){return r("q-item",{key:i,attrs:{clickable:""}},[r("q-item-section",{attrs:{avatar:""}},[r("q-btn",{attrs:{icon:"remove_circle","text-color":"removebtn",unelevated:"",round:"",ripple:!1},on:{click:function(r){return t.remove(e)}}})],1),r("q-item-section",{staticClass:"text-main text-bold text-subtitle"},[t._v("\n          "+t._s(e))]),r("q-item-section",{attrs:{side:""}},[r("q-btn",{attrs:{icon:"drag_handle",flat:"",round:"",ripple:!1}})],1)],1)})),1)],1):t._e(),r("q-inner-loading",{staticClass:"text-main ",attrs:{showing:t.IsLoading,"transition-show":"fade","transition-hide":"fade"}},[r("div",{staticClass:"text-h6 text-blueGrey text-bold q-pb-md"},[t._v("資料讀取中")]),r("q-spinner-gears",{attrs:{size:"45px",color:t.gearColor}})],1)],1)},o=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),a=r.n(s),n=r("872c"),l=r("2f62"),c=r("0831"),d=r("310e"),u=r.n(d);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=c["a"].getScrollTarget,m=c["a"].getScrollPosition,h=(c["a"].setScrollPosition,{mixins:[n["a"]],components:{draggable:u.a},mounted:function(){this.$q.iconSet.table.arrowUp="fas fa-sort",this.lastScrollPos&&this.$refs.table.$refs.virtScroll.scrollTo(this.lastScrollPos),console.log(this.needReloadFavoriteList);window.innerWidth;var t=window.innerHeight,e=document.getElementById("gu-masterlist"),r=document.getElementById("header").clientHeight,i=document.getElementById("footer").clientHeight,o=t-r-i-1;e.style.height=o+"px",this.loadData()},computed:p(p({},Object(l["c"])("stock",["myFavorites","favoritesSymbolList","lastScrollPos","needReloadFavoriteList"])),Object(l["c"])("global",["isCustomListEditing"])),watch:{isCustomListEditing:function(t,e){var r=this;console.log(t),console.log(e),t?(this.orderList=[],this.myFavorites.forEach((function(t){r.orderList.push(t.symbol)}))):(this.IsLoading=!0,this.UpdateFavoritesSymbolList({data:this.orderList,finally:function(t){r.loadData()}}))}},data:function(){return{IsLoading:!1,hideNodata:!0,pagination:{rowsPerPage:0},columns:[{name:"symbol",required:!0,label:"股票",align:"left",field:"symbol",sortable:!0},{name:"price",required:!0,label:"股票市價",align:"right",field:"price",sortable:!0},{name:"fair_value",required:!0,label:"合理價值",align:"right",field:"fair_value",sortable:!0},{name:"quality_score",required:!0,label:"品質分數",align:"center",field:"quality_score",sortable:!0}],orderList:[]}},methods:p(p(p({},Object(l["d"])("stock",["setFavoritesSymbolList"])),Object(l["b"])("stock",["getMyFavorites","RefreshFavoritesSymbolList","UpdateFavoritesSymbolList"])),{},{loadData:function(){var t=this;this.hideNodata=!0,this.IsLoading=!0,this.getMyFavorites({success:function(e){console.log(e);var r=e.data;0===r.result&&(null==r.data?t.hideNodata=!1:(t.RefreshFavoritesSymbolList(),t.orderList=[],r.data.symbols.forEach((function(e){t.orderList.push(e.symbol)}))))},finally:function(){t.IsLoading=!1}})},onEnd:function(t){console.log(t),t.oldIndex!=t.newIndex&&this.setFavoritesSymbolList(this.orderList)},remove:function(t){var e=this.orderList.indexOf(t);e>=0&&(this.orderList.splice(e,1),this.setFavoritesSymbolList(this.orderList))},clicked:function(t,e){var r=b(this.$refs.table.$refs.virtScroll.$el),i=m(r);this.$store.commit("stock/setLastScrollPos",i),this.$router.push({path:"/stock/detail/".concat(e.symbol)})}})}),g=h,v=(r("9a89"),r("2877")),y=r("9989"),_=r("eaac"),w=r("bd08"),O=r("357e"),L=r("db86"),x=r("0016"),j=r("1c1c"),q=r("66e5"),S=r("4074"),k=r("9c40"),P=r("74f7"),C=r("cf57"),E=r("eebe"),I=r.n(E),F=Object(v["a"])(g,i,o,!1,null,null,null);e["default"]=F.exports;I()(F,"components",{QPage:y["a"],QTable:_["a"],QTr:w["a"],QTh:O["a"],QTd:L["a"],QIcon:x["a"],QList:j["a"],QItem:q["a"],QItemSection:S["a"],QBtn:k["a"],QInnerLoading:P["a"],QSpinnerGears:C["a"]})},"872c":function(t,e,r){"use strict";r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d");var i=r("9523"),o=r.n(i),s=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:"",gearColor:"sunYellow"}},methods:n({},Object(s["b"])("system",["updateTitle"]))}},"9a89":function(t,e,r){"use strict";var i=r("5d84"),o=r.n(i);o.a}}]);