(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1ed4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-grey-2"},[s("div",{staticClass:" bg-white q-pt-md q-mb-lg"},[s("div",{staticClass:"row items-end q-pb-md  q-px-lg "},[s("div",{staticClass:"text-second text-bold text-subtitle1 q-pr-xs"},[t._v("\n        "+t._s(t.stockId)+"\n      ")]),s("div",{staticClass:"text-second text-caption"},[t._v("\n        "+t._s("zh-hant"==t.$i18n.locale?t.stockInfo.company_name_cn:t.stockInfo.company_name)+"\n      ")])]),s("div",{staticClass:"relative-position row q-px-sm justify-center  ",attrs:{id:"p5Canvas"}}),s("div",{staticClass:"q-px-lg q-py-md"},[s("div",{staticClass:"row justify-between text-h6 text-bold"},[s("div",{class:[t.stockInfo.price_change>0?"text-positive":"text-negative"]},[t._v("\n          "+t._s(t.stockInfo.price)+"\n        ")]),s("div",{class:[t.stockInfo.fair_value>t.stockInfo.price?"text-positive":"text-negative"]},[t._v("\n          "+t._s(t.stockInfo.fair_value)+"\n          "),s("q-btn",{staticClass:"color-lightgrey",attrs:{icon:"fas fa-question-circle",flat:"",round:"",size:"xs",dense:""},on:{click:function(e){t.dialogEstimated.show=!0}}})],1)]),s("div",{staticClass:"row justify-between text-bold"},[s("div",{class:["row","no-wrap","items-end",t.stockInfo.price_change>0?"text-positive":"text-negative"]},[s("q-icon",{staticClass:"q-pr-xs",attrs:{name:t.stockInfo.price_change>0?"fas fa-sort-up":"fas fa-sort-down"}}),s("div",[t._v("\n            "+t._s(t.stockInfo.price_change)+" ("+t._s(t.stockInfo.price_change_percent)+")\n          ")])],1),s("div",{class:["row","no-wrap",t.stockInfo.fair_value>t.stockInfo.price?"text-positive":"text-negative"]},[t._v("\n          "+t._s(t.stockInfo.fair_value>t.stockInfo.price?t.$t("stock.masterList.fair_value_over",[t.stockInfo.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[t.stockInfo.fair_value_desc]))+"\n        ")])]),s("div",{staticClass:"row justify-between text-second text-bold"},[s("div",[t._v("\n          "+t._s(t.$t("stockInfo.price"))+"\n        ")]),s("div",[t._v("\n          "+t._s(t.$t("stockInfo.fair_value"))+"\n        ")])])]),s("div"),s("TVChart",{attrs:{symbol:t.stockId}})],1),s("div",{staticClass:"bg-white q-pt-md q-mb-md displayRate-div"},[s("q-btn-toggle",{staticClass:"q-gutter-sm  q-px-lg ",attrs:{ripple:!1,unelevated:"","no-wrap":"",dense:"",size:"13px","text-color":"second","toggle-color":"toggle-color","toggle-text-color":"main",options:t.toggleOptions},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),s("q-carousel",{staticClass:" text-second  q-px-lg ",attrs:{animated:"","navigation-position":"bottom",navigation:"","control-type":"flat","control-color":"main",height:"auto","navigation-icon":"fas fa-window-minimize"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[s("q-carousel-slide",{staticClass:" q-px-none ",attrs:{name:"power_a"}},[s("div",{staticClass:"displayRate-carouselInner"},[s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.a01"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_a.a01_score/t.stockInfo.power_a.a01_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.a02"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_a.a02_score/t.stockInfo.power_a.a02_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.a03"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_a.a03_score/t.stockInfo.power_a.a03_max,color:"sunYellow"}})],1)])])]),s("q-carousel-slide",{staticClass:" q-px-none ",attrs:{name:"power_b"}},[s("div",{staticClass:"displayRate-carouselInner"},[s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.b01"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_b.b01_score/t.stockInfo.power_b.b01_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.b02"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_b.b02_score/t.stockInfo.power_b.b02_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.b03"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_b.b03_score/t.stockInfo.power_b.b03_max,color:"sunYellow"}})],1)])])]),s("q-carousel-slide",{staticClass:" q-px-none ",attrs:{name:"power_c"}},[s("div",{staticClass:"displayRate-carouselInner"},[s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.c01"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_c.c01_score/t.stockInfo.power_c.c01_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.c02"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_c.c02_score/t.stockInfo.power_c.c02_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.c03"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_c.c03_score/t.stockInfo.power_c.c03_max,color:"sunYellow"}})],1)])])]),s("q-carousel-slide",{staticClass:" q-px-none",attrs:{name:"power_d"}},[s("div",{staticClass:"displayRate-carouselInner"},[s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.d01"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_d.d01_score/t.stockInfo.power_d.d01_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.d02"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_d.d02_score/t.stockInfo.power_d.d02_max,color:"sunYellow"}})],1)]),s("div",{staticClass:"row full-width items-center"},[s("div",{staticClass:"col-4 q-pr-sm text-second text-bold text-caption letter-space-21"},[t._v("\n              "+t._s(t.$t("stockInfo.d03"))+"\n            ")]),s("div",{staticClass:"col-8"},[s("q-linear-progress",{attrs:{rounded:"","track-color":"toggle-color",size:"10px",value:t.stockInfo.power_d.d03_score/t.stockInfo.power_d.d03_max,color:"sunYellow"}})],1)])])])],1),s("q-carousel",{staticClass:"TableBlurCover",style:"power_d"!==this.model?"min-height:144px; height:144px":"min-height:0px; height:0px",attrs:{animated:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[s("q-carousel-slide",{staticClass:"q-pa-none ",attrs:{name:"power_a"}},[s("div",{staticClass:" relative-position full-height"},[s("div",{staticClass:"row no-wrap absolute q-py-sm q-pr-md items-center full-height "},[s("div",{staticClass:"gu-indicator q-mx-md"}),s("q-markup-table",{staticClass:"gu-indexTtable",attrs:{dense:"",bordered:"",flat:""}},[s("thead",[s("tr",{staticClass:"text-bold"},[s("th"),t._l(t.stockInfo.power_a.power_years,(function(e,a){return s("th",{key:a,staticClass:"text-center text-second text-bold"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)]),s("tbody",[s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.a01"))+"\n                  ")]),t._l(t.stockInfo.power_a.a01s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.a02"))+"\n                  ")]),t._l(t.stockInfo.power_a.a02s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.a03"))+"\n                  ")]),t._l(t.stockInfo.power_a.a03s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)])])],1)])]),s("q-carousel-slide",{staticClass:"q-pa-none ",attrs:{name:"power_b"}},[s("div",{staticClass:" relative-position full-height"},[s("div",{staticClass:"row no-wrap absolute q-py-sm q-pr-md items-center full-height "},[s("div",{staticClass:"gu-indicator q-mx-md"}),s("q-markup-table",{staticClass:"gu-indexTtable",attrs:{dense:"",bordered:"",flat:""}},[s("thead",[s("tr",{staticClass:"text-bold"},[s("th"),t._l(t.stockInfo.power_b.power_years,(function(e,a){return s("th",{key:a,staticClass:"text-center text-second text-bold"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)]),s("tbody",[s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.b01"))+"\n                  ")]),t._l(t.stockInfo.power_b.b01s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.b02"))+"\n                  ")]),t._l(t.stockInfo.power_b.b02s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.b03"))+"\n                  ")]),t._l(t.stockInfo.power_b.b03s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)])])],1)])]),s("q-carousel-slide",{staticClass:"q-pa-none ",attrs:{name:"power_c"}},[s("div",{staticClass:" relative-position full-height"},[s("div",{staticClass:"row no-wrap absolute q-py-sm q-pr-md items-center full-height "},[s("div",{staticClass:"gu-indicator q-mx-md"}),s("q-markup-table",{staticClass:"gu-indexTtable",attrs:{dense:"",bordered:"",flat:""}},[s("thead",[s("tr",{staticClass:"text-bold"},[s("th"),t._l(t.stockInfo.power_c.power_years,(function(e,a){return s("th",{key:a,staticClass:"text-center text-second text-bold"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)]),s("tbody",[s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.c01"))+"\n                  ")]),t._l(t.stockInfo.power_c.c01s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.c02"))+"\n                  ")]),t._l(t.stockInfo.power_c.c02s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2),s("tr",[s("td",{staticClass:"text-left text-second text-bold text-caption"},[t._v("\n                    "+t._s(t.$t("stockInfo.c03"))+"\n                  ")]),t._l(t.stockInfo.power_c.c03s,(function(e,a){return s("td",{key:a,staticClass:"text-center text-main"},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)])])],1)])])],1)],1),s("q-list",{staticClass:"text-second text-caption  bg-white list-CompanyInfo",attrs:{dense:"",padding:""}},[s("q-item-label",{staticClass:"text-main text-bold q-py-none",attrs:{header:""}},[t._v(t._s(t.$t("stockInfo.company_info")))]),s("q-expansion-item",{attrs:{label:t.$t("stockInfo.description"),"header-class":"text-second text-bold "},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[s("q-card",[s("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.stockInfo.description)+"\n        ")])],1)],1),s("q-separator",{attrs:{inset:""}}),s("div",[s("q-item",[s("q-item-section",{attrs:{avatar:"",top:""}},[s("q-item-label",{staticClass:"text-bold"},[t._v(t._s(t.$t("stockInfo.index_category")))])],1),s("q-item-section",{staticClass:"text-right",attrs:{top:""}},[t._v(t._s(t.stockInfo.index_category)+"\n        ")])],1)],1),s("q-separator",{attrs:{inset:""}}),s("div",[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-item-label",{staticClass:"text-bold"},[t._v(t._s(t.$t("stockInfo.tag")))])],1),s("q-item-section",{staticClass:"text-right"},[t._v(t._s(t.stockInfo.tag)+"\n        ")])],1)],1),s("q-separator",{attrs:{inset:""}}),s("div",[s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-item-label",{staticClass:"text-bold"},[t._v(t._s(t.$t("stockInfo.industrial_status")))])],1),s("q-item-section",{staticClass:"text-right"},[t._v(t._s(t.stockInfo.industrial_status)+"\n        ")])],1)],1),s("q-separator",{attrs:{inset:""}}),s("div",{staticClass:"row justify-end q-px-md q-py-xs"},[s("q-btn",{staticClass:"text-bold",attrs:{size:"12px",dense:"",flat:"","icon-right":"keyboard_tab","text-color":"link",label:"官方網站 "},on:{click:t.openlink}})],1)],1),s("div",{staticClass:"functionLinks-div"},[s("q-list",[s("q-item",{staticClass:"link-annualreport",attrs:{to:"/stock/annualReport/"+t.stockId}},[s("q-item-section",{attrs:{avatar:""}},[s("img",{attrs:{src:"statics/icon/finData.png"}})]),s("q-item-section",[s("div",{staticClass:"text-bold text-main"},[t._v("\n            財務報表\n          ")]),s("div",{staticClass:"text-caption text-second"},[t._v("\n            關鍵數據、資產負債、損益、現金流量表\n          ")])]),s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{color:"grey-5",name:"fas fa-angle-right"}})],1)],1),s("q-item",{staticClass:"link-findata",attrs:{to:"/stock/findata/"+t.stockInfo.exchange+":"+t.stockId}},[s("q-item-section",{attrs:{avatar:""}},[s("img",{attrs:{src:"statics/icon/annualChart.png"}})]),s("q-item-section",[s("div",{staticClass:"text-bold text-main"},[t._v("\n            財務數據\n          ")]),s("div",{staticClass:"text-caption text-second"},[t._v("\n            評價、股利、歷史價格、經營指標、利益率\n          ")])]),s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{color:"grey-5",name:"fas fa-angle-right"}})],1)],1)],1)],1),s("q-dialog",{attrs:{position:"bottom",id:"EstimateModel"},model:{value:t.dialogEstimated.show,callback:function(e){t.$set(t.dialogEstimated,"show",e)},expression:"dialogEstimated.show"}},[s("q-card",{staticClass:"EstimateModel-card"},[s("q-carousel",{staticClass:"q-px-md q-py-lg",attrs:{swipeable:"","control-color":"second",navigation:"",padding:""},model:{value:t.dialogEstimated.slide,callback:function(e){t.$set(t.dialogEstimated,"slide",e)},expression:"dialogEstimated.slide"}},[s("q-carousel-slide",{staticClass:"column",attrs:{name:"first"}},[s("div",{staticClass:" text-subtitle1 q-pb-md text-main text-bold"},[t._v("\n            什麼是股股估價?\n          ")]),s("div",{staticClass:" text-bold text-second"},[t._v("\n            股股估價基於各式估值模型進行公允價值分析，將中位平均數，計算至最終欄位\n          ")]),s("div",{staticClass:"col row  flex flex-center "},[s("div",{staticClass:"col-8 row items-center q-px-lg q-py-md justify-between  marginOfSafety-div"},[s("div",{class:["col","text-center","text-subtitle1","text-main","text-bold",t.stockInfo.fair_value>t.stockInfo.price?"text-positive":"text-negative"]},[t._v("\n                "+t._s(t.stockInfo.fair_value>t.stockInfo.price?t.$t("stock.masterList.fair_value_over",[t.stockInfo.fair_value_desc]):t.$t("stock.masterList.fair_value_less",[t.stockInfo.fair_value_desc]))+"\n              ")])])])]),s("q-carousel-slide",{staticClass:"column",attrs:{name:"second"}},[s("div",{staticClass:"  q-pb-md text-main text-bold",staticStyle:{"font-size":"18px"}},[t._v("\n            估價模型比較\n          ")]),s("q-list",{staticClass:"col",attrs:{dense:"",separator:""}},t._l(t.dialogEstimated.compare,(function(e){return s("q-item",{key:e.name,staticClass:"text-caption"},[s("q-item-section",{staticClass:"text-main  text-bold"},[t._v(t._s(t.$t("stockInfo."+e)))]),s("q-item-section",{class:[t.stockInfo[e]>185?"text-positive":"text-negative","text-bold"],attrs:{side:""}},[t._v(t._s(t.stockInfo[e]))])],1)})),1)],1)],1)],1)],1)],1)},o=[],n=(s("6c7b"),s("0d6d"),s("872c")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:t.containerId}},[s("div",{staticClass:"row text-second text-bold q-py-sm q-px-md "},[s("q-select",{staticClass:"gugu-select",attrs:{"popup-content-class":"gugu-select-popup","dropdown-icon":"keyboard_arrow_down","hide-bottom-space":"",behavior:"menu",dense:"","bg-color":"white","option-label":"text","option-value":"value",borderless:"","options-dense":"","options-selected-class":"text-second text-bold bg-verylightblue",options:t.options},on:{input:t.selected},model:{value:t.optionsItem,callback:function(e){t.optionsItem=e},expression:"optionsItem"}})],1)])},i=[],r=s("8192"),l=s("bd4c"),d=s("c1df"),p=s.n(d),f=null,_=null,u={name:"TVChart",props:{symbol:{default:"AAPL",type:String},interval:{default:"D",type:String},containerId:{default:"tv_chart_container",type:String},datafeedUrl:{default:"https://demo_feed.tradingview.com",type:String},libraryPath:{default:"/charting_library/",type:String},chartsStorageUrl:{default:"https://saveload.tradingview.com",type:String},chartsStorageApiVersion:{default:"1.1",type:String},clientId:{default:"tradingview.com",type:String},userId:{default:"public_user_id",type:String},fullscreen:{default:!1,type:Boolean},autosize:{default:!0,type:Boolean},studiesOverrides:{type:Object},charData:{type:Array},price_type:{default:"D",type:String}},chart:null,mounted:function(){_=document.getElementById(this.containerId);var t=new Date;this.end_date=l["a"].formatDate(t,"YYYY-MM-DD"),this.updateData()},data:function(){return{optionsItem:{text:"日",value:"D"},options:[{text:"日",value:"D"},{text:"週",value:"W"},{text:"月",value:"M"}],begin_date:"",end_date:""}},methods:{set_end_date:function(){var t=1;switch(this.optionsItem.value){case"D":t=1;break;case"W":t=7;break;case"M":t=30;break;default:t=1;break}var e=-365*t,s=new Date;this.begin_date=p()(s).add(e,"days").format("YYYY-MM-DD")},selected:function(t){console.log(t),null!==this.chart&&(this.chart.remove(),this.chart=null),this.updateData()},updateData:function(){this.set_end_date(),this.chart=Object(r["a"])(_,{height:200,symble:this.symbol,timezone:"Asia/Taipei",autosize:this.autosize,layout:{fontFamily:"Avenir-Black"},priceScale:{borderColor:"rgba(197, 203, 206, 1)",position:"left"},timeScale:{borderColor:"rgba(197, 203, 206, 1)"}}),f=this.chart.addAreaSeries({topColor:"rgba(255, 167, 50, 0.75)",bottomColor:"rgba(223, 231, 245, 0.5)",lineColor:"rgba(255, 200, 50, 1)",lineWidth:3}),this.$api.stock.hPrice(this.symbol,this.optionsItem.value,this.begin_date,this.end_date).then((function(t){f.setData(t.data.data.prices)})).catch((function(t){console.log(t)}))}},destroyed:function(){null!==this.chart&&(this.chart.remove(),this.chart=null)}},b=u,v=s("2877"),m=s("ddd8"),x=s("eebe"),g=s.n(x),k=Object(v["a"])(b,c,i,!1,null,null,null),h=k.exports;g()(k,"components",{QSelect:m["a"]});var w=s("f303"),j=s("3425"),C={mixins:[n["a"]],components:{TVChart:h},meta:{script:{ldJson:{type:"text/javascript",src:"https://s3.tradingview.com/tv.js"}}},data:function(){return{piInstance:null,toggleOptions:[{label:this.$t("stockInfo.power_a"),value:"power_a"},{label:this.$t("stockInfo.power_b"),value:"power_b"},{label:this.$t("stockInfo.power_c"),value:"power_c"},{label:this.$t("stockInfo.power_d"),value:"power_d"}],dialogEstimated:{show:!1,slide:"first",compare:["dps_avg_est_value","dps_est_value","pe_est_value","pe_avg_est_value","pe_ind_est_value","peg_est_value","book_value_est_value","dividend_pv_est_value"]},expanded:!1,model:"power_a",widgitData:[],stockInfo:{website:"",exchange:"",book_value_est_value:0,company_name:"",company_name_cn:"",description:"",dividend_pv_est_value:0,dps_avg_est_value:0,dps_est_value:0,fair_value:0,fair_value_desc:0,index_category:"",industrial_status:"",margin_of_safety:"",pe_avg_est_value:"",pe_est_value:"",pe_ind_est_value:"",peg_est_value:"",power_a:{a01_max:0,a01_score:0,a01s:[],a02_max:0,a02_score:0,a02s:[],a03_max:0,a03_score:0,a03s:[],power_years:[]},power_b:{b01_max:0,b01_score:0,b01s:[],b02_max:0,b02_score:0,b02s:[],b03_max:0,b03_score:0,b03s:[],power_years:[]},power_c:{c01_max:0,c01_score:0,c01s:[],c02_max:0,c02_score:0,c02s:[],c03_max:0,c03_score:0,c03s:[],power_years:[]},power_d:{d01_max:0,d01_score:0,d01s:[],d02_max:0,d02_score:0,d02s:[],d03_max:0,d03_score:0,d03s:[],power_years:[]},price:0,price_change:0,price_change_percent:0,quality_score:0,symbol:"",tag:""}}},beforeMount:function(){this.title="大師股"},mounted:function(){var t=this;this.$api.stock.stock(this.stockId).then((function(e){t.stockInfo=Object.freeze(e.data.data),setTimeout((function(){t.piInstance=new j(t.p5Draw)}),50)}))},computed:{stockId:function(){return this.$route.params.stockId}},methods:{openlink:function(){return this.stockInfo.website&&window.open(this.stockInfo.website,"_system"),!1},p5Draw:function(t){var e=this,s=document.getElementById("p5Canvas"),a=.42,o=.7,n=w["c"].width(s),c=a*n,i=o*n,r=13;t.setup=function(){var s=t.createCanvas(n,c);s.parent("p5Canvas"),t.angleMode(t.DEGREES),t.translate(n/2,c-r),t.rotate(180),t.background(t.color("white")),t.strokeWeight(12),t.noFill(),t.stroke(t.color(255,244,198)),t.arc(0,0,i,i,0,180),t.stroke(t.color("#FFD246"));var a=1.8,o=e.stockInfo.quality_score*a;t.arc(0,0,i,i,0,o>180?180:o),t.rotate(180),t.strokeWeight(1),t.textStyle(t.NORMAL),t.textSize(16),t.textAlign(t.CENTER),t.stroke(t.color("#8397B9")),t.text("品質分數",0,-40),t.stroke(t.color("black")),t.textFont('"Avenir-Black",微軟正黑體,"思源黑體 Noto Sans","Mocrosoft JhengHei"'),t.textSize(28),t.fill(t.color(4,44,92)),t.text(e.stockInfo.quality_score,0,-5),t.noLoop()},t.draw=function(){}}}},I=C,y=s("9c40"),q=s("0016"),z=s("6a67"),$=s("880c"),O=s("62cd"),D=s("6b1d"),S=s("2bb1"),E=s("1c1c"),Y=s("0170"),Q=s("3b73"),T=s("f09f"),M=s("a370"),L=s("eb85"),P=s("66e5"),A=s("4074"),B=s("24e8"),R=Object(v["a"])(I,a,o,!1,null,null,null);e["default"]=R.exports;g()(R,"components",{QBtn:y["a"],QIcon:q["a"],QBtnToggle:z["a"],QCarousel:$["a"],QCarouselSlide:O["a"],QLinearProgress:D["a"],QMarkupTable:S["a"],QList:E["a"],QItemLabel:Y["a"],QExpansionItem:Q["a"],QCard:T["a"],QCardSection:M["a"],QSeparator:L["a"],QItem:P["a"],QItemSection:A["a"],QDialog:B["a"]})},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3b","./en-ie.js":"e1d3b","./en-il":"73332","./en-il.js":"73332","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba96","./hr.js":"4ba96","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=n,t.exports=o,o.id="4678"},"872c":function(t,e,s){"use strict";s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d");var a=s("9523"),o=s.n(a),n=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:"",gearColor:"sunYellow"}},methods:i({},Object(n["b"])("system",["updateTitle"]))}}}]);