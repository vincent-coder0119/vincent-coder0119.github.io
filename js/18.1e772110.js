(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{c6f7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"bg-white",attrs:{view:"hHh lpR fFf"}},[a("q-page-container",{class:e.$q.platform.is.ios?"safe-top":""},[a("div",{staticClass:" q-px-lg",staticStyle:{"padding-top":"30px"}},[a("div",[a("q-btn",{attrs:{flat:"",dese:"",icon:"keyboard_backspace",color:"main",to:"/onboard",padding:"0"}})],1),a("div",{staticClass:"gugu-title1 q-pt-lg q-pb-md "},[e._v("\n        "+e._s(e.$t("login.welcom_title"))+"\n      ")]),a("div",{staticClass:"q-pb-sm   q-gutter-sm "},[a("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"用戶名稱"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),a("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"密碼",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"row justify-between q-pb-md"},[a("q-checkbox",{attrs:{id:e.$store.state.global.gaHead+"login_remeberme",size:"sm",label:"記住我",disable:e.handlingApi,color:"main"},model:{value:e.remrmberMe,callback:function(t){e.remrmberMe=t},expression:"remrmberMe"}}),a("q-btn",{staticClass:"text-main text-bold ",attrs:{id:e.$store.state.global.gaHead+"login_forgetpwd",flat:"",dense:"",label:"忘記密碼?",to:"/accountRecover"}})],1),e._e(),a("div",[a("q-btn",{staticClass:"text-bold full-width",staticStyle:{"border-radius":"5px",height:"44px"},attrs:{id:e.$store.state.global.gaHead+"login_cta",unelevated:"",loading:e.handlingApi,disable:!(Boolean(e.user)&&Boolean(e.password)),label:"登入",color:"main",outline:""},on:{click:e.signIn}})],1),a("div",{staticClass:"row no-wrap ",staticStyle:{padding:"12px 0"}},[a("q-separator",{attrs:{spaced:""}}),a("div",{staticClass:"q-px-md text-caption text-grey-8"},[e._v("或")]),a("q-separator",{attrs:{spaced:""}})],1),a("div",[a("q-btn",{staticClass:"social-register-btn full-width q-mb-md  text-blueGrey ",attrs:{"no-caps":"",outline:""},on:{click:e.fbSignIn}},[a("q-icon",{staticClass:"absolute",staticStyle:{left:"16px"},attrs:{name:"fab fa-facebook-f",color:"fb",size:"xs"}}),a("div",{staticClass:"text-main"},[e._v("透過 Facebook 繼續")])],1),a("q-btn",{staticClass:"social-register-btn full-width q-mb-sm   text-blueGrey ",attrs:{"no-caps":"",outline:""},on:{click:e.googleSignIn}},[a("q-icon",{staticClass:"absolute",staticStyle:{left:"16px"},attrs:{name:"img:statics/google@2x.png",size:"xs"}}),a("div",{staticClass:"text-main"},[e._v("透過 Google 繼續")])],1),e.$store.state.system.clientInfo.ios?a("q-btn",{staticClass:"social-register-btn full-width q-my-sm  ",attrs:{"no-caps":"",unelevated:"",color:"black","text-color":"white"},on:{click:e.appleSignIn}},[a("q-icon",{attrs:{left:"",name:"fab fa-apple",size:"xs"}}),a("div",{staticClass:"text-white"},[e._v("使用Apple登入")])],1):e._e()],1),a("div",{staticClass:"row items-center justify-center text-blueGrey text-bold "},[e._v("\n        還沒有帳號?\n        "),a("q-btn",{staticClass:"text-bold",attrs:{id:e.$store.state.global.gaHead+"login_help_registernow",flat:"",color:"main",dense:"",label:"馬上註冊",to:"register"}})],1)])]),a("q-dialog",{model:{value:e.TermsDialog.show,callback:function(t){e.$set(e.TermsDialog,"show",t)},expression:"TermsDialog.show"}},[a("q-card",{staticClass:"q-dialog-plugin"},[a("q-card-section",[a("div",{staticClass:" text-main text-bold",staticStyle:{"font-size":"18px"}},[e._v("\n          "+e._s(e.TermsDialog.title)+"\n        ")])]),a("q-separator"),a("q-card-section",{staticClass:"scroll q-pa-sm",staticStyle:{"max-height":"60vh"}},[a(e.TermsDialog.name,{tag:"component"})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{unelevated:"",color:"paleGrey","text-color":"main",label:"關閉"},on:{click:function(t){e.TermsDialog.show=!1}}})],1)],1)],1)],1)},n=[],s=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("9523")),o=a.n(s),l=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={created:function(){var e=this;setTimeout((function(){FB.init({appId:"1261120347553786",cookie:!0,xfbml:!1,version:"v8.0"}),e.handlingApi=!1}),1e3)},mounted:function(){this.$store.state.account.token&&this.$router.push("/"),this.language=this.$i18n.locale,this.user=this.$store.state.account.user.email,this.remrmberMe=this.$store.state.account.remember},meta:{script:{ldJson:{type:"text/javascript",src:"https://apis.google.com/js/platform.js",async:!0,defer:!0},"facebook-jssdk":{crossorigin:"anonymous",type:"text/javascript",src:"https://connect.facebook.net/zh_TW/sdk.js",async:!0,defer:!0}}},data:function(){return{TermsDialog:{show:!1,title:"",content:[],onlycontent:"",name:""},user:"",password:"",language:"",remrmberMe:!0,handlingApi:!0}},methods:c(c({},Object(l["b"])("account",["apiLogin","oauthLogin"])),{},{appleSignIn:function(){},FBStatusChangeCallback:function(e){var t=this;this.handlingApi=!0,"connected"===e.status?FB.api("/me?fields=id,name,email,picture",(function(e){console.log(e);var a={image:e.picture.data.url,id:e.id,name:e.name,email:e.email,source:"FACEBOOK",locale:t.language,remember:t.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){t.handlingApi=!1}};t.oauthLogin(a)})):this.handlingApi=!1},fbSignIn:function(){var e=this;console.log("FB Sigin"),FB.login((function(t){e.handlingApi=!0,"connected"===t.status?FB.api("/me?fields=id,name,email,picture",(function(t){console.log(t);var a={image:t.picture.data.url,id:t.id,name:t.name,email:t.email,source:"FACEBOOK",locale:e.language,remember:e.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){e.handlingApi=!1}};e.oauthLogin(a)})):e.handlingApi=!1}),{scope:"public_profile,email"})},signIn:function(){var e=this;this.handlingApi=!0,setTimeout((function(){e.apiLogin({remember:e.remrmberMe,account:e.user,password:e.password,locale:e.language,success:function(t){0!=t.data.result&&e.$q.notify({message:t.data.message})},error:function(t){e.$q.notify({message:t.message})},finally:function(){e.handlingApi=!1}})}),1e3)},googleSignIn:function(){var e=this;this.handlingApi=!0,gapi.load("auth2",(function(){gapi.auth2.init(e.$store.state.system.googleConfig).then((function(t){var a=gapi.auth2.getAuthInstance();a.isSignedIn.get();a.signIn().then((function(t){var a=t,i=a.getBasicProfile(),n={image:i.getImageUrl(),id:i.getId(),name:i.getName(),email:i.getEmail(),source:"GOOGLE",locale:e.language,remember:e.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){e.handlingApi=!1}};e.oauthLogin(n)})).catch((function(e){console.log(e)}))})).catch((function(t){console.log(t),"idpiframe_initialization_failed"==t.error?e.$q.notify({type:"warning",message:"請關閉「封鎖第三方Cookie」設定，以利於使用 Google 登入"}):e.$q.notify({type:"warning",message:t.error})})).then((function(){e.handlingApi=!1}))}))},openTermsDialog:function(e,t){this.TermsDialog.show=!0,this.TermsDialog.title=e,this.TermsDialog.name=t}})},u=a("ef25"),d=a("0df5"),p={mixins:[g],components:{termsofuse:u["a"],PrivacyPolicies:d["a"]}},m=p,f=a("2877"),b=a("4d5a"),h=a("09e3"),y=a("9c40"),v=a("27f9"),w=a("8f8e"),q=a("eb85"),x=a("0016"),C=a("24e8"),k=a("f09f"),O=a("a370"),_=a("4b7e"),A=a("eebe"),j=a.n(A),S=Object(f["a"])(m,i,n,!1,null,null,null);t["default"]=S.exports;j()(S,"components",{QLayout:b["a"],QPageContainer:h["a"],QBtn:y["a"],QInput:v["a"],QCheckbox:w["a"],QSeparator:q["a"],QIcon:x["a"],QDialog:C["a"],QCard:k["a"],QCardSection:O["a"],QCardActions:_["a"]})}}]);