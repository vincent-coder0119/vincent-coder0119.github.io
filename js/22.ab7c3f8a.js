(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"3ae4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"bg-white",attrs:{view:"hHh lpR fFf"}},[s("q-page-container",[s("q-page",{staticClass:"q-px-lg column ",staticStyle:{"padding-top":"30px"}},[s("div",{staticClass:"col-auto"},[t.freezed?t._e():s("q-btn",{attrs:{flat:"",dese:"",icon:"keyboard_backspace",color:"main",padding:"0"},on:{click:t.goback}})],1),s("div",{staticClass:"col "},[s("q-tab-panels",{ref:"tabs",attrs:{animated:""},on:{transition:t.transition},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[s("q-tab-panel",{staticClass:" q-pa-none",attrs:{name:"step1"}},[s("div",{staticClass:"gugu-title1 q-py-lg "},[t._v("\n              第一步\n            ")]),s("div",{staticClass:" text-subtitle1 q-pb-lg"},[s("div",{staticClass:"text-main text-bold q-pb-sm"},[t._v("\n                建立完帳號即可馬上享有\n              ")]),t._l(t.textmessages,(function(e){return s("div",{key:e.index,staticClass:"row no-wrap items-center",staticStyle:{"line-height":"27px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-check",color:"mygreen"}}),s("div",{staticClass:"text-main text-bold"},[t._v("\n                  "+t._s(e.content)+"\n                ")])],1)}))],2),s("div",[s("div",{staticClass:"font-13 text-blueGrey"},[t._v("\n                輸入電子郵件\n              ")]),s("q-input",{ref:"em1",attrs:{type:"email",dense:"",disable:t.isLoading,"label-color":"blueGrey",color:"blueGrey","lazy-rules":"",placeholder:"example@email.com","error-message":t.emailErrorMessage,rules:[t.checkEmail]},on:{focus:function(e){return e.stopPropagation(),t.emailFocused(e)}},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})],1)]),s("q-tab-panel",{staticClass:" q-pa-none",attrs:{name:"step2"}},[s("div",{staticClass:"gugu-title1 q-py-lg q-pb-xl"},[t._v("\n              第二步\n            ")]),s("div",{staticClass:"q-pb-sm"},[s("div",{staticClass:"font-13 text-blueGrey"},[t._v("您的電子郵件")]),s("q-input",{ref:"em2",attrs:{type:"email",dense:"",readonly:"","label-color":"blueGrey",color:"blueGrey"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"fas fa-check-circle",size:"20px",color:"green2"}})]},proxy:!0}]),model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}})],1),s("div",{staticClass:"q-pb-sm"},[s("div",{staticClass:"text-blueGrey font-13"},[t._v("設立密碼")]),s("q-input",{ref:"fldPasswordChange",attrs:{type:t.isPwd?"password":"",dense:"",clearable:"",disable:t.isLoading,"label-color":"blueGrey",color:"blueGrey",rules:t.Required,placeholder:"請輸入密碼"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1),s("div",{staticClass:"q-pb-sm"},[s("div",{staticClass:"text-blueGrey font-13"},[t._v("確認您的密碼")]),s("q-input",{ref:"fldPasswordChangeConfirm",attrs:{dense:"",clearable:"",disable:t.isLoading,type:t.isPwd?"password":"","label-color":"blueGrey",color:"blueGrey",rules:t.ConfirmPWD,placeholder:"請再次輸入您的密碼"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.comfirmPassword,callback:function(e){t.comfirmPassword=e},expression:"comfirmPassword"}})],1)]),s("q-tab-panel",{staticClass:" q-pa-none",attrs:{name:"result"}},[s("div",{staticClass:"gugu-title1 q-py-lg ",staticStyle:{"padding-bottom":"80px"}},[t._v("\n              恭喜完成！\n            ")]),s("div",{staticClass:"col content  text-subtitle1"},[s("div",{staticClass:"text-main text-bold ",staticStyle:{"padding-bottom":"20px",width:"84%","line-height":"1.4"}},[t._v("\n                您還有一個黃金會員限時試用優惠尚未領取哦，服務包含：\n              ")]),s("div",{staticClass:"column items-center",staticStyle:{"padding-bottom":"37px"}},t._l(t.memberRights,(function(e){return s("div",{key:e.index,staticClass:"row no-wrap items-center",staticStyle:{"line-height":"27px",width:"80%"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-check",color:"mygreen"}}),s("div",{staticClass:"text-main text-bold"},[t._v(t._s(e.content))])],1)})),0),s("q-btn",{staticClass:" full-width text-bold q-mb-md gugu-btn",attrs:{outline:"",color:"main",label:"開始體驗黃金會員資格 14 日"},on:{click:function(e){t.panel="result"}}}),s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"text-main text-bold text-center"},[t._v("先去逛逛")])])],1)])],1)],1),s("footer",{staticClass:"q-py-md "},["step1"==t.panel?s("q-btn",{staticClass:"gugu-btn full-width   bg-white  text-bold  ",attrs:{outline:"",color:"main",disable:t.isLoading||!t.emailPass},on:{click:function(e){t.panel="step2"}}},[t._v("繼續")]):t._e(),"step2"==t.panel?s("q-btn",{staticClass:"gugu-btn full-width text-bold bg-white ",attrs:{outline:"",disable:t.isLoading||t.InvalidPassword,color:"main",label:"完成註冊"},on:{click:t.registUser}}):t._e()],1)])],1)],1)},i=[],n=(s("551c"),s("06db"),{mounted:function(){window.app=this},computed:{ConfirmPWD:function(){var t=this;return[function(t){return!!t||"密碼為必填"},function(e){return e==t.$refs.fldPasswordChange.value||"兩次密碼輸入不同"}]},Required:function(){return[function(t){return!!t||"密碼為必填"},function(t){return t.length>=6||"密碼最小長度為6"}]},InvalidPassword:function(){return!Boolean(this.userPassword)||this.userPassword!=this.comfirmPassword}},data:function(){return{freezed:!1,isPwd:!0,isLoading:!1,emailPass:!1,emailErrorMessage:"",panel:"step1",userEmail:"",userPassword:"",comfirmPassword:"",textmessages:[{indx:"1",content:"查閱數萬個股分析報告"},{indx:"2",content:"大師持股清單揭露"},{indx:"3",content:"限時加送！黃金會員試用 14 日"}],memberRights:[{indx:"1",content:"查閱數萬個股合理價格"},{indx:"2",content:"完整品質分數關鍵指標報告"},{indx:"3",content:"無限個股分析查閱量        "}]}},methods:{emailFocused:function(){this.$refs.em1.resetValidation(),this.$refs.em1.select()},transition:function(t,e){this.freezed=2==this.$refs.tabs.panelIndex},checkEmail:function(){var t=this;return new Promise((function(e,s){return t.isLoading=!0,t.$api.account.checkEmail(t.userEmail).then((function(a){console.log(a);var i=a.data;t.emailPass=0==i.result,t.emailErrorMessage=i.message,t.emailPass?e(!0):s(i.message)})).catch((function(t){})).then((function(){t.isLoading=!1}))}))},goback:function(){0==this.$refs.tabs.panelIndex?this.$router.go(-1):this.$refs.tabs.previous()},registUser:function(){var t=this;this.isLoading=!0,this.$store.dispatch("account/register",{account:this.userEmail,email:this.userEmail,password:this.userPassword,success:function(e){var s=e.data;0==e.data.result?t.panel="result":t.$q.notify({message:s.message,position:"top",color:"negative"})},error:function(t){},finally:function(){t.isLoading=!1}})}}}),o=n,l=s("2877"),r=s("4d5a"),c=s("09e3"),u=s("9989"),d=s("9c40"),m=s("adad"),p=s("823b"),f=s("0016"),b=s("27f9"),g=s("eebe"),v=s.n(g),h=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QLayout:r["a"],QPageContainer:c["a"],QPage:u["a"],QBtn:d["a"],QTabPanels:m["a"],QTabPanel:p["a"],QIcon:f["a"],QInput:b["a"]})}}]);