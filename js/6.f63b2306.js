(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"31ee":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{ref:"mm",attrs:{id:"mm"}},[r("div",{staticClass:"row no-wrap scroll items-center q-py-sm q-px-md",attrs:{id:"stocklistFilter"}},[r("q-btn-toggle",{staticClass:"q-gutter-sm",attrs:{ripple:!1,unelevated:"","no-wrap":"",dense:"",size:"14px","text-color":"second","toggle-color":"toggle-color","toggle-text-color":"main",options:t.stocklistFilter},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),r("q-separator"),r("div",[r("q-table",{ref:"table",attrs:{flat:"","binary-state-sort":"",id:"gu-masterlist",square:"","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-pagination":"","hide-no-data":"","virtual-scroll-sticky-size-start":48,data:t.stockList,columns:t.columns,loading:t.IsLoading,"row-key":"symbol"},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.clicked},scopedSlots:t._u([{key:"header",fn:function(e){return[r("q-tr",{staticStyle:{height:"42px"},attrs:{props:e}},t._l(e.cols,(function(o){return r("q-th",{key:o.name,staticClass:"text-second text-bold text-center",staticStyle:{"font-weight":"bold","font-size":"14px"},attrs:{"auto-width":"",props:e}},[t._v("\n            "+t._s(o.label)+"\n          ")])})),1)]}},{key:"body-cell-symbol",fn:function(e){var o=e.props,a=e.row;return[r("q-td",{staticClass:"text-main text-bold ",attrs:{props:o,row:a}},[t._v("\n          "+t._s(a.symbol)+"\n        ")])]}},{key:"body-cell-price",fn:function(e){var o=e.props,a=e.row;return[r("q-td",{class:["text-right","text-bold",a.price_change>0?"text-positive":"text-negative"],attrs:{props:o,row:a}},[r("div",[t._v(t._s(a.price))]),r("div",{staticClass:"row justify-end items-center",staticStyle:{"font-size":"10px"}},[r("q-icon",{staticClass:"q-pr-sm",attrs:{name:a.price_change>0?"fas fa-sort-up":"fas fa-sort-down"}}),r("div",[t._v("\n              "+t._s(Math.abs(a.price_change_percent))+"%\n              ")])],1)])]}},{key:"body-cell-fair_value",fn:function(e){var o=e.props,a=e.row;return[r("q-td",{class:["text-right","text-main",a.fair_value>a.price?"text-positive":"text-negative"],attrs:{props:o,row:a}},[r("div",{staticClass:"text-bold"},[t._v(t._s(a.fair_value))]),r("div",{staticStyle:{"font-size":"10px"}},[t._v(t._s(a.fair_value>a.price?t.$t("stock.masterList.fair_value_over",[a.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[a.fair_value_desc])))])])]}},{key:"body-cell-quality_score",fn:function(e){return[r("q-td",{staticClass:"text-main text-bold text-center ",attrs:{props:e}},[t._v("\n          "+t._s(e.value)+"\n        ")])]}}])},[r("div",[t._v("no-data-text ")])]),t.getCover?r("div",{staticClass:"lockCover fit"},[r("div",{staticClass:"lockCover-top"}),r("div",{staticClass:"lockCover-bottom fixed-bottom ",staticStyle:{"font-size":"18px",padding:"84px 54px"}},[r("div",{staticClass:"text-main text-bold "},[t._v("股股幫你找高質量好價格的股票")]),r("q-btn",{staticClass:"text-bold",attrs:{flat:"",dense:"","icon-right":"keyboard_arrow_right","text-color":"link",label:"立即加入"}})],1)]):t._e()],1)],1)},a=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),i=r.n(s),n=r("872c"),l=r("2f62"),c=r("0831");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=c["a"].getScrollTarget,f=c["a"].getScrollPosition,b=(c["a"].setScrollPosition,{mixins:[n["a"]],beforeMount:function(){this.title="股股"},mounted:function(){this.$q.iconSet.table.arrowUp="fas fa-sort",this.$store.dispatch("stock/queryMasterGroup","1"),this.lastScrollPos&&this.$refs.table.$refs.virtScroll.scrollTo(this.lastScrollPos);window.innerWidth;var t=window.innerHeight,e=document.getElementById("stocklistFilter").clientHeight,r=document.getElementById("gu-masterlist"),o=document.getElementById("header").clientHeight,a=document.getElementById("footer").clientHeight,s=t-o-a-e-1;r.style.height=s+"px"},data:function(){return{model:"one",data:[],showCover:!0,pagination:{rowsPerPage:0},columns:[{name:"symbol",required:!0,label:"股票",align:"left",field:"symbol",sortable:!0},{name:"price",required:!0,label:"股票市價",align:"right",field:"price",sortable:!0},{name:"fair_value",required:!0,label:"合理價值",align:"right",field:"fair_value",sortable:!0},{name:"quality_score",required:!0,label:"品質分數",align:"center",field:"quality_score",sortable:!0}],stocklistFilter:[{label:"股股排名",value:"one"},{label:"股息成長",value:"two"},{label:"Guggi持股",value:"three"},{label:"巴菲特持股",value:"four"}]}},methods:{clicked:function(t,e){var r=p(this.$refs.table.$refs.virtScroll.$el),o=f(r);this.$store.commit("stock/setLastScrollPos",o),this.$router.push({path:"/stock/detail/".concat(e.symbol)})}},computed:d(d({},Object(l["c"])("stock",["currentGroupId","stockList","masterList","lastScrollPos"])),{},{getCover:function(){return Boolean(this.$route.query.cover)},IsLoading:function(){return null==this.stockList}})}),g=b,v=(r("c631"),r("2877")),m=r("9989"),y=r("6a67"),h=r("eb85"),_=r("eaac"),w=r("bd08"),x=r("357e"),O=r("db86"),k=r("0016"),q=r("9c40"),j=r("e7a9"),P=r("eebe"),S=r.n(P),C=Object(v["a"])(g,o,a,!1,null,null,null);e["default"]=C.exports;S()(C,"components",{QPage:m["a"],QBtnToggle:y["a"],QSeparator:h["a"],QTable:_["a"],QTr:w["a"],QTh:x["a"],QTd:O["a"],QIcon:k["a"],QBtn:q["a"],QBtnGroup:j["a"]})},"872c":function(t,e,r){"use strict";r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d");var o=r("9523"),a=r.n(o),s=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:""}},methods:n({},Object(s["b"])("system",["updateTitle"]))}},b980:function(t,e,r){},c631:function(t,e,r){"use strict";var o=r("b980"),a=r.n(o);a.a}}]);