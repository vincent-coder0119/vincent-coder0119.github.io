(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{c6f7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"bg-white",attrs:{view:"hHh lpR fFf"}},[a("q-page-container",[a("div",{staticClass:" q-px-lg",staticStyle:{"padding-top":"30px"}},[a("div",[a("q-btn",{attrs:{flat:"",dese:"",icon:"keyboard_backspace",color:"main",to:"/onboard",padding:"0"}})],1),a("div",{staticClass:"text-h4 text-main q-py-xl  text-bold"},[e._v("\n        "+e._s(e.$t("login.welcom_title"))+"\n      ")]),a("div",{staticClass:"row q-gutter-md justify-center q-pb-md "},[a("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{id:e.$store.state.global.gaHead+"login_thirdparty_fb",outline:"",disable:e.handlingApi,color:"blueGrey"},on:{click:e.fbSignIn}},[a("img",{attrs:{width:"10px",src:"statics/facebook@3x.png"}})]),a("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{id:e.$store.state.global.gaHead+"login_thirdparty_google",outline:"",disable:e.handlingApi,color:"blueGrey"},on:{click:e.googleSignIn}},[a("img",{attrs:{width:"18px",src:"statics/google@3x.png"}})])],1),a("div",{staticClass:"q-pb-md q-pt-md q-gutter-md "},[a("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"用戶名稱"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),a("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"密碼",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"row justify-between q-pb-md"},[a("q-checkbox",{attrs:{id:e.$store.state.global.gaHead+"login_remeberme",label:"記住我",disable:e.handlingApi,color:"main"},model:{value:e.remrmberMe,callback:function(t){e.remrmberMe=t},expression:"remrmberMe"}}),a("q-btn",{staticClass:"text-main text-bold ",attrs:{id:e.$store.state.global.gaHead+"login_forgetpwd",flat:"",dense:"",label:"忘記密碼?",to:"/accountRecover"}})],1),a("div",{staticClass:"text-caption text-grey-8 q-pb-xl q-px-xs text-left"},[e._v("\n        登入即代表您已經閱讀並同意\n        "),a("q-btn",{attrs:{id:e.$store.state.global.gaHead+"login_term_userterm",outline:"",size:"xs",dense:"",label:"使用者條款"},on:{click:function(t){return e.openTermsDialog("使用者條款","termsofuse")}}}),e._v("\n        與\n        "),a("q-btn",{attrs:{id:e.$store.state.global.gaHead+"login_term_privacy",size:"xs",outline:"",dense:"",label:"隱私權政策"},on:{click:function(t){return e.openTermsDialog("隱私權政策","PrivacyPolicies")}}})],1),a("div",{staticClass:"q-pb-sm"},[a("q-btn",{staticClass:"text-bold full-width",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{id:e.$store.state.global.gaHead+"login_cta",unelevated:"",loading:e.handlingApi,disable:!(Boolean(e.user)&&Boolean(e.password)),label:"登入",color:"main",outline:""},on:{click:e.signIn}})],1),a("div",{staticClass:"full-width row justify-center items-center text-blueGrey "},[e._v("\n        還沒有帳號?\n        "),a("q-btn",{staticClass:"text-bold",attrs:{id:e.$store.state.global.gaHead+"login_help_registernow",flat:"",color:"main",dense:"",label:"馬上註冊",to:"register"}})],1)])]),a("q-dialog",{model:{value:e.TermsDialog.show,callback:function(t){e.$set(e.TermsDialog,"show",t)},expression:"TermsDialog.show"}},[a("q-card",{staticClass:"q-dialog-plugin"},[a("q-card-section",[a("div",{staticClass:" text-main text-bold",staticStyle:{"font-size":"18px"}},[e._v("\n          "+e._s(e.TermsDialog.title)+"\n        ")])]),a("q-separator"),a("q-card-section",{staticClass:"scroll q-pa-sm",staticStyle:{"max-height":"60vh"}},[a(e.TermsDialog.name,{tag:"component"})],1),a("q-separator"),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{unelevated:"",color:"paleGrey","text-color":"main",label:"關閉"},on:{click:function(t){e.TermsDialog.show=!1}}})],1)],1)],1)],1)},n=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("9523")),s=a.n(o),l=a("2f62"),r=a("ef25"),c=a("0df5");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={components:{termsofuse:r["a"],PrivacyPolicies:c["a"]},created:function(){var e=this;setTimeout((function(){FB.init({appId:"1261120347553786",cookie:!0,xfbml:!1,version:"v8.0"}),e.handlingApi=!1}),1e3)},mounted:function(){this.$store.state.account.token&&this.$router.push("/"),this.language=this.$i18n.locale,this.user=this.$store.state.account.user.email,this.remrmberMe=this.$store.state.account.remember},meta:{script:{ldJson:{type:"text/javascript",src:"https://apis.google.com/js/platform.js",async:!0,defer:!0},"facebook-jssdk":{crossorigin:"anonymous",type:"text/javascript",src:"https://connect.facebook.net/zh_TW/sdk.js",async:!0,defer:!0}}},data:function(){return{TermsDialog:{show:!1,title:"",content:[],onlycontent:"",name:""},user:"",password:"",language:"",remrmberMe:!0,handlingApi:!0}},methods:d(d({},Object(l["b"])("account",["apiLogin","oauthLogin"])),{},{FBStatusChangeCallback:function(e){var t=this;this.handlingApi=!0,"connected"===e.status?FB.api("/me?fields=id,name,email,picture",(function(e){console.log(e);var a={image:e.picture.data.url,id:e.id,name:e.name,email:e.email,source:"FACEBOOK",locale:t.language,remember:t.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){t.handlingApi=!1}};t.oauthLogin(a)})):this.handlingApi=!1},fbSignIn:function(){var e=this;console.log("FB Sigin"),FB.login((function(t){e.FBStatusChangeCallback(t)}),{scope:"public_profile,email"})},signIn:function(){var e=this;this.handlingApi=!0,setTimeout((function(){e.apiLogin({remember:e.remrmberMe,account:e.user,password:e.password,locale:e.language,success:function(t){0!=t.data.result&&e.$q.notify({message:t.data.message})},error:function(t){e.$q.notify({message:t.message})},finally:function(){e.handlingApi=!1}})}),1e3)},googleSignIn:function(){this.handlingApi=!0,this.googleWebSigin()},googleAppSigin:function(){var e=this;this.$googleplus.login({scopes:"email profile openid",webClientId:"com.googleusercontent.apps.895029396519-sfqi9in7u5imof8c7d9mol0al85juiof",offline:!0},(function(t){console.log(t),e.handlingApi=!1}),(function(t){console.log(t),e.handlingApi=!1}))},googleWebSigin:function(){var e=this;gapi.load("auth2",(function(){gapi.auth2.init(e.$store.state.system.googleConfig).then((function(t){var a=gapi.auth2.getAuthInstance();a.isSignedIn.get();a.signIn().then((function(t){var a=t,i=a.getBasicProfile(),n={image:i.getImageUrl(),id:i.getId(),name:i.getName(),email:i.getEmail(),source:"GOOGLE",locale:e.language,remember:e.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){e.handlingApi=!1}};e.oauthLogin(n)})).catch((function(e){console.log(e)}))})).catch((function(t){console.log(t),"idpiframe_initialization_failed"==t.error?e.$q.notify({type:"warning",message:"請關閉「封鎖第三方Cookie」設定，以利於使用 Google 登入"}):e.$q.notify({type:"warning",message:t.error})})).then((function(){e.handlingApi=!1}))}))},openTermsDialog:function(e,t){this.TermsDialog.show=!0,this.TermsDialog.title=e,this.TermsDialog.name=t}})},p=u,m=a("2877"),b=a("4d5a"),f=a("09e3"),h=a("9c40"),y=a("27f9"),v=a("8f8e"),x=a("24e8"),w=a("f09f"),q=a("a370"),C=a("eb85"),_=a("4b7e"),k=a("eebe"),j=a.n(k),O=Object(m["a"])(p,i,n,!1,null,null,null);t["default"]=O.exports;j()(O,"components",{QLayout:b["a"],QPageContainer:f["a"],QBtn:h["a"],QInput:y["a"],QCheckbox:v["a"],QDialog:x["a"],QCard:w["a"],QCardSection:q["a"],QSeparator:C["a"],QCardActions:_["a"]})}}]);