(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"31ee":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",[r("div",{ref:"toggle",staticClass:"row no-wrap scroll items-center q-py-sm q-px-md bg-white hide-scrollbar",attrs:{id:"stocklistFilter"}},[r("q-btn-toggle",{staticClass:"q-gutter-sm",attrs:{ripple:!1,"no-caps":"",unelevated:"","no-wrap":"",dense:"",size:"14px","text-color":"blueGrey","toggle-color":"toggle-color","toggle-text-color":"main",options:t.stocklistFilter},on:{input:t.changedGroup},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}})],1),r("q-separator"),r("div",[r("q-table",{ref:"table",attrs:{flat:"",dense:"","binary-state-sort":"",id:"gu-masterlist",square:"","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-pagination":"","hide-no-data":"","virtual-scroll-sticky-size-start":42,data:t.stockList,columns:t.columns,loading:t.IsLoading,"row-key":"index"},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.clicked},scopedSlots:t._u([{key:"header",fn:function(e){return[r("q-tr",{ref:"tablehead",staticStyle:{height:"42px"},attrs:{props:e}},t._l(e.cols,(function(s){return r("q-th",{key:s.name,staticClass:"text-blueGrey text-bold text-center",staticStyle:{"font-weight":"bold","font-size":"14px"},attrs:{id:t.$store.state.global.gaHead+"stocklist_sort_"+s.name,"auto-width":"",props:e}},[t._v("\n            "+t._s(s.label)+"\n          ")])})),1)]}},{key:"body-cell-symbol",fn:function(e){var s=e.props,a=e.row;return[r("q-td",{staticClass:"text-main text-bold ",attrs:{props:s,row:a}},[r("div",{staticClass:"text-main text-bold"},[t._v(t._s(a.symbol))]),r("div",{staticClass:"text-caption text-blueGrey"},[t._v("\n            "+t._s(t.adjString("zh-hant"==t.$i18n.locale&&a.name_cn?a.name_cn:a.name,4))+"\n          ")])])]}},{key:"body-cell-price",fn:function(e){var s=e.props,a=e.row;return[r("q-td",{class:["text-right","text-bold",a.price_change>0?"text-positive":"text-negative"],attrs:{props:s,row:a}},[r("div",[t._v(t._s(a.price))]),r("div",{staticClass:"row justify-end items-center",staticStyle:{"font-size":"10px"}},[r("q-icon",{staticClass:"q-pr-sm",attrs:{name:a.price_change>0?"fas fa-caret-up":"fas fa-caret-down"}}),r("div",[t._v("\n              "+t._s(Math.abs(a.price_change_percent))+"%\n              ")])],1)])]}},{key:"body-cell-fair_value",fn:function(e){var s=e.props,a=e.row;return[r("q-td",{class:["text-right","text-main",a.fair_value>a.price?"text-positive":"text-negative"],attrs:{props:s,row:a}},[r("div",{staticClass:"text-bold"},[t._v(t._s(a.fair_value))]),r("div",{staticStyle:{"font-size":"10px"}},[t._v("\n            "+t._s(a.fair_value>a.price?t.$t("stock.masterList.fair_value_over",[a.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[a.fair_value_desc]))+"\n          ")])])]}},{key:"body-cell-quality_score",fn:function(e){return[r("q-td",{staticClass:"text-main text-bold text-center ",attrs:{props:e}},[t._v("\n          "+t._s(e.value)+"\n        ")])]}}])})],1),r("q-inner-loading",{staticClass:"text-main ",attrs:{showing:t.IsLoading,"transition-show":"fade","transition-hide":"fade"}},[r("div",{staticClass:"text-h6 text-blueGrey text-bold q-pb-md"},[t._v("資料讀取中")]),r("q-spinner-gears",{attrs:{size:"45px",color:t.gearColor}})],1)],1)},a=[],o=r("872c"),i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("4917"),r("9523")),n=r.n(i),l=r("2f62"),c=r("0831");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){n()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=c["a"].getScrollTarget,g=c["a"].getScrollPosition,f=c["a"].setScrollPosition,b={mounted:function(){var t=this;this.title="大師股",this.$q.iconSet.table.arrowUp="fas fa-caret-up";var e=this.$store.state.global.screen.height;setTimeout((function(){var r=t.$refs.toggle.clientHeight,s=t.$root.$children[0].$children[0].$refs.header.$el.clientHeight,a=t.$root.$children[0].$children[0].$refs.footer.$el.clientHeight;t.$refs.table.$el.style.height=e-s-a-r-1+"px","0"===t.lastGroupId?t.changedGroup("1"):t.changedGroup(t.currentGroupId),t.groupId=t.currentGroupId,t.lastScrollPos&&setTimeout((function(){console.log("to=>%s",t.lastScrollPos);p(t.$refs.table.$refs.virtScroll.$el);f(t.$refs.table.$refs.virtScroll.$el,t.lastScrollPos),t.setLastScrollPos(0)}),100)}),100)},data:function(){return{isAdmin:this.$store.state.system.isAdmin,IsLoading:!1,groupId:"1",data:[],pagination:{rowsPerPage:0},columns:[{name:"symbol",required:!0,label:"股票",align:"left",field:"symbol",sortable:!0},{name:"price",required:!0,label:"股票市價",align:"right",field:"price",sortable:!0},{name:"fair_value",required:!0,label:"合理價值",align:"right",field:"fair_value",sortable:!0},{name:"quality_score",required:!0,label:"品質分數",align:"right",field:"quality_score",sortable:!0}]}},methods:d(d({},Object(l["d"])("stock",["setCurrentGroupId","setLastScrollPos"])),{},{adjString:function(t,e){var r=/[\u4e00-\u9fa5]/g,s=t.substring(0,e),a=~~(s.match(r)&&s.match(r).length),o=2*s.length-a;return t.substr(0,o)+(o<t.length?"...":"")},changedGroup:function(t){var e=this;this.currentGroupId!==t&&(this.IsLoading=!0,this.setCurrentGroupId(t),this.$store.dispatch("stock/getGroupStocks",{group_id:this.currentGroupId,filter:"",finally:function(){e.IsLoading=!1}}))},clicked:function(t,e){var r=p(this.$refs.table.$refs.virtScroll.$el),s=g(r);this.setLastScrollPos(s),this.$router.push({path:"/stock/detail/".concat(e.symbol)})}}),computed:d(d({},Object(l["c"])("stock",["currentGroupId","lastGroupId","stockList","masterList","lastScrollPos"])),{},{gucciVisiable:function(){return"gugu.fund.test.1@gmail.com"==this.$store.state.account.user.email||this.isAdmin||this.$store.state.account.info.courses&&this.$store.state.account.info.courses.length>0},stocklistFilter:function(){var t=[{attrs:{id:"".concat(this.$store.state.global.gaHead,"stocklist_masterlist_1")},label:"股股金蛋50",value:"1"},{attrs:{id:"".concat(this.$store.state.global.gaHead,"stocklist_masterlist_2")},label:"股息成長",value:"2"},{attrs:{id:"".concat(this.$store.state.global.gaHead,"stocklist_masterlist_4")},label:"巴菲特持股",value:"4"}];return this.gucciVisiable&&(t.push({attrs:{id:"".concat(this.$store.state.global.gaHead,"stocklist_masterlist_3")},label:"Gucci持股",value:"3"}),t=this.$_.sortBy(t,(function(t){return t.value}))),t}})},h={mixins:[o["a"],b]},v=h,m=(r("c631"),r("2877")),_=r("9989"),y=r("6a67"),$=r("eb85"),x=r("eaac"),w=r("bd08"),k=r("357e"),q=r("db86"),S=r("0016"),G=r("74f7"),I=r("cf57"),O=r("e7a9"),P=r("9c40"),j=r("eebe"),C=r.n(j),L=Object(m["a"])(v,s,a,!1,null,null,null);e["default"]=L.exports;C()(L,"components",{QPage:_["a"],QBtnToggle:y["a"],QSeparator:$["a"],QTable:x["a"],QTr:w["a"],QTh:k["a"],QTd:q["a"],QIcon:S["a"],QInnerLoading:G["a"],QSpinnerGears:I["a"],QBtnGroup:O["a"],QBtn:P["a"]})},b980:function(t,e,r){},c631:function(t,e,r){"use strict";var s=r("b980"),a=r.n(s);a.a}}]);