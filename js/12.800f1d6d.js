(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{c6f7:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-page-container",{staticClass:"fullscreen"},[n("q-toolbar"),n("div",{staticClass:" q-px-lg"},[n("div",[n("q-btn",{attrs:{flat:"",dese:"",icon:"keyboard_backspace",color:"main",to:"/onboard",padding:"0"}})],1),n("div",{staticClass:"text-h4 text-main q-py-lg text-bold"},[t._v("\n        "+t._s(t.$t("login.welcom_title"))+"\n      ")]),n("div",{staticClass:"row q-gutter-md justify-center q-py-lg "},[n("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{outline:"",color:"second"}},[n("img",{attrs:{width:"10px",src:"statics/facebook@3x.png"},on:{click:t.fbSignIn}})]),n("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{outline:"",color:"second"}},[n("img",{attrs:{width:"18px",src:"statics/google@3x.png"},on:{click:t.googleSignIn}})])],1),n("div",{staticClass:"q-py-md q-gutter-md "},[n("q-input",{attrs:{"label-color":"second",disable:t.handlingApi,color:"second",label:"用戶名稱"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),n("q-input",{attrs:{"label-color":"second",disable:t.handlingApi,color:"second",label:"密碼",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"row justify-between q-pb-lg"},[n("q-checkbox",{attrs:{label:"記住我",disable:t.handlingApi,color:"main"},model:{value:t.remrmberMe,callback:function(e){t.remrmberMe=e},expression:"remrmberMe"}}),n("q-btn",{staticClass:"text-main  text-bold ",attrs:{flat:"",dense:"",to:"/foo",label:"忘記密碼?"}})],1),n("div",{staticClass:"q-pb-md"},[n("q-btn",{staticClass:"text-bold full-width",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{unelevated:"",loading:t.handlingApi,disable:!(Boolean(t.user)&&Boolean(t.password)),label:"登入",color:"main",outline:""},on:{click:t.signIn}})],1),n("div",{staticClass:"full-width row justify-center items-center text-second "},[t._v("\n        還沒有帳號?\n        "),n("q-btn",{staticClass:"text-bold",attrs:{flat:"",color:"main",dense:"",label:"馬上註冊",to:"register"}})],1)])],1)],1)},a=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),i=n.n(s),r=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={created:function(){var t=this;setTimeout((function(){FB.init({appId:"338271380537138",cookie:!0,xfbml:!1,version:"v7.0"}),t.handlingApi=!1}),1e3)},mounted:function(){this.$store.state.account.token&&this.$router.push("/"),this.language=this.$i18n.locale,this.user=this.$store.state.account.user,this.remrmberMe=this.$store.state.account.remember},meta:{script:{ldJson:{type:"text/javascript",src:"https://apis.google.com/js/platform.js",async:!0,defer:!0},"facebook-jssdk":{crossorigin:"anonymous",type:"text/javascript",src:"https://connect.facebook.net/zh_TW/sdk.js",async:!0,defer:!0}}},data:function(){return{user:"",password:"",language:"",remrmberMe:!1,handlingApi:!0}},methods:l(l({},Object(r["b"])("account",["apiLogin","oauthLogin"])),{},{FBStatusChangeCallback:function(t){console.log(t),"connected"===t.status&&FB.api("/me?fields=id,name,email",(function(t){console.log(t)}))},fbSignIn:function(){var t=this;FB.login((function(e){t.FBStatusChangeCallback(e)}),{scope:"public_profile,email"})},signIn:function(){var t=this;this.handlingApi=!0,setTimeout((function(){t.apiLogin({remember:t.remrmberMe,account:t.user,password:t.password,locale:t.language,success:function(t){console.log(t)},error:function(t){console.log(t)},finally:function(){t.handlingApi=!1}})}),1e3)},googleSignIn:function(){var t=this;this.handlingApi=!0,gapi.load("auth2",(function(){gapi.auth2.init(t.$store.state.system.googleConfig).then((function(e){var n=gapi.auth2.getAuthInstance(),o=n.isSignedIn.get();console.log(o),n.signIn().then((function(e){var n=e,o=n.getBasicProfile(),a={image:o.getImageUrl(),id:o.getId(),name:o.getName(),email:o.getEmail(),source:"GOOGLE",locale:t.language,remember:t.remrmberMe,success:function(t){t.data},error:function(t){console.log(t)},finally:function(){t.handlingApi=!1}};t.oauthLogin(a)})).catch((function(t){console.log(t)}))})).catch((function(e){console.log(e),t.$q.notify({type:"warning",message:e.error})})).then((function(){t.handlingApi=!1}))}))}})},d=u,g=n("2877"),p=n("4d5a"),b=n("09e3"),f=n("65c6"),h=n("9c40"),m=n("27f9"),y=n("8f8e"),v=n("eebe"),w=n.n(v),x=Object(g["a"])(d,o,a,!1,null,null,null);e["default"]=x.exports;w()(x,"components",{QLayout:p["a"],QPageContainer:b["a"],QToolbar:f["a"],QBtn:h["a"],QInput:m["a"],QCheckbox:y["a"]})}}]);