(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5d84":function(t,e,r){},8695:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{ref:"mm",staticClass:"bg-white",attrs:{id:"mm"}},[t.isCustomListEditing?t._e():r("q-table",{ref:"table",attrs:{flat:"",dense:"",id:"gu-masterlist","binary-state-sort":"",square:"","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-pagination":"","hide-no-data":t.hideNodata,"virtual-scroll-sticky-size-start":48,data:t.myFavorites,columns:t.columns,loading:t.IsLoading,"row-key":"symbol"},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.clicked},scopedSlots:t._u([{key:"header",fn:function(e){return[r("q-tr",{staticStyle:{height:"42px"},attrs:{props:e}},t._l(e.cols,(function(s){return r("q-th",{key:s.name,staticClass:"text-second text-bold text-center",staticStyle:{"font-weight":"bold","font-size":"14px"},attrs:{"auto-width":"",props:e}},[t._v("\n          "+t._s(s.label)+"\n        ")])})),1)]}},{key:"body-cell-symbol",fn:function(e){var s=e.props,i=e.row;return[r("q-td",{staticClass:"text-main text-bold ",attrs:{props:s,row:i}},[t._v("\n        "+t._s(i.symbol)+"\n      ")])]}},{key:"body-cell-price",fn:function(e){var s=e.props,i=e.row;return[r("q-td",{class:["text-right","text-bold",i.price_change>0?"text-positive":"text-negative"],attrs:{props:s,row:i}},[r("div",[t._v(t._s(i.price))]),r("div",{staticClass:"row justify-end items-center",staticStyle:{"font-size":"10px"}},[r("q-icon",{staticClass:"q-pr-sm",attrs:{name:i.price_change>0?"fas fa-sort-up":"fas fa-sort-down"}}),r("div",[t._v("\n            "+t._s(Math.abs(i.price_change_percent))+"%\n            ")])],1)])]}},{key:"body-cell-fair_value",fn:function(e){var s=e.props,i=e.row;return[r("q-td",{class:["text-right","text-main",i.fair_value>i.price?"text-positive":"text-negative"],attrs:{props:s,row:i}},[r("div",{staticClass:"text-bold"},[t._v(t._s(i.fair_value))]),r("div",{staticStyle:{"font-size":"10px"}},[t._v("\n          "+t._s(i.fair_value>i.price?t.$t("stock.masterList.fair_value_over",[i.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[i.fair_value_desc]))+"\n        ")])])]}},{key:"body-cell-quality_score",fn:function(e){return[r("q-td",{staticClass:"text-main text-bold text-center ",attrs:{props:e}},[t._v("\n        "+t._s(e.value)+"\n      ")])]}},{key:"no-data",fn:function(){return[r("h5",[t._v("\n        目前沒有任何自選股\n      ")])]},proxy:!0}],null,!1,2732609346)}),t.isCustomListEditing?r("q-list",{attrs:{separator:""}},[r("draggable",{on:{end:t.onEnd},model:{value:t.orderList,callback:function(e){t.orderList=e},expression:"orderList"}},t._l(t.orderList,(function(e,s){return r("q-item",{key:s,attrs:{clickable:""}},[r("q-item-section",{attrs:{avatar:""}},[r("q-btn",{attrs:{icon:"remove_circle","text-color":"removebtn",unelevated:"",round:"",ripple:!1},on:{click:function(r){return t.remove(e)}}})],1),r("q-item-section",{staticClass:"text-main text-bold text-subtitle"},[t._v("\n          "+t._s(e))]),r("q-item-section",{attrs:{side:""}},[r("q-btn",{attrs:{icon:"drag_handle",flat:"",round:"",ripple:!1}})],1)],1)})),1)],1):t._e(),r("q-inner-loading",{staticClass:"text-main ",attrs:{showing:t.IsLoading,"transition-show":"fade","transition-hide":"fade"}},[r("div",{staticClass:"text-h6 text-second text-bold q-pb-md"},[t._v("資料讀取中")]),r("q-spinner-gears",{attrs:{size:"45px",color:"main"}})],1)],1)},i=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),a=r.n(o),n=r("872c"),l=r("2f62"),c=r("0831"),d=r("310e"),u=r.n(d);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=c["a"].getScrollTarget,v=c["a"].getScrollPosition,m=(c["a"].setScrollPosition,{mixins:[n["a"]],components:{draggable:u.a},mounted:function(){this.$q.iconSet.table.arrowUp="fas fa-sort",this.lastScrollPos&&this.$refs.table.$refs.virtScroll.scrollTo(this.lastScrollPos),console.log(this.needReloadFavoriteList),this.loadData()},computed:p(p({},Object(l["c"])("stock",["myFavorites","favoritesSymbolList","lastScrollPos","needReloadFavoriteList"])),Object(l["c"])("global",["isCustomListEditing"])),watch:{isCustomListEditing:function(t,e){var r=this;console.log(t),console.log(e),t?(this.orderList=[],this.myFavorites.forEach((function(t){r.orderList.push(t.symbol)}))):(this.IsLoading=!0,this.UpdateFavoritesSymbolList({data:this.orderList,finally:function(t){r.loadData()}}))}},data:function(){return{IsLoading:!1,hideNodata:!0,pagination:{rowsPerPage:0},columns:[{name:"symbol",required:!0,label:"股票",align:"left",field:"symbol",sortable:!0},{name:"price",required:!0,label:"股票市價",align:"right",field:"price",sortable:!0},{name:"fair_value",required:!0,label:"合理價值",align:"right",field:"fair_value",sortable:!0},{name:"quality_score",required:!0,label:"品質分數",align:"center",field:"quality_score",sortable:!0}],orderList:[]}},methods:p(p(p({},Object(l["d"])("stock",["setFavoritesSymbolList"])),Object(l["b"])("stock",["getMyFavorites","RefreshFavoritesSymbolList","UpdateFavoritesSymbolList"])),{},{loadData:function(){var t=this;this.hideNodata=!0,this.IsLoading=!0,this.getMyFavorites({success:function(e){console.log(e);var r=e.data;0===r.result&&(null==r.data?t.hideNodata=!1:(t.RefreshFavoritesSymbolList(),t.orderList=[],r.data.symbols.forEach((function(e){t.orderList.push(e.symbol)}))))},finally:function(){t.IsLoading=!1}})},onEnd:function(t){console.log(t),t.oldIndex!=t.newIndex&&this.setFavoritesSymbolList(this.orderList)},remove:function(t){var e=this.orderList.indexOf(t);e>=0&&(this.orderList.splice(e,1),this.setFavoritesSymbolList(this.orderList))},clicked:function(t,e){var r=b(this.$refs.table.$refs.virtScroll.$el),s=v(r);this.$store.commit("stock/setLastScrollPos",s),this.$router.push({path:"/stock/detail/".concat(e.symbol)})}})}),h=m,g=(r("9a89"),r("2877")),y=r("9989"),_=r("eaac"),O=r("bd08"),L=r("357e"),w=r("db86"),x=r("0016"),j=r("1c1c"),q=r("66e5"),S=r("4074"),k=r("9c40"),P=r("74f7"),C=r("cf57"),F=r("eebe"),E=r.n(F),I=Object(g["a"])(h,s,i,!1,null,null,null);e["default"]=I.exports;E()(I,"components",{QPage:y["a"],QTable:_["a"],QTr:O["a"],QTh:L["a"],QTd:w["a"],QIcon:x["a"],QList:j["a"],QItem:q["a"],QItemSection:S["a"],QBtn:k["a"],QInnerLoading:P["a"],QSpinnerGears:C["a"]})},"872c":function(t,e,r){"use strict";r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d");var s=r("9523"),i=r.n(s),o=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:""}},methods:n({},Object(o["b"])("system",["updateTitle"]))}},"9a89":function(t,e,r){"use strict";var s=r("5d84"),i=r.n(s);i.a}}]);