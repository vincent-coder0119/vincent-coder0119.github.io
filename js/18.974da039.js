(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{c6f7:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"bg-white",attrs:{view:"hHh lpR fFf"}},[n("q-page-container",[n("div",{staticClass:" q-px-lg",staticStyle:{"padding-top":"30px"}},[n("div",[n("q-btn",{attrs:{flat:"",dese:"",icon:"keyboard_backspace",color:"main",to:"/onboard",padding:"0"}})],1),n("div",{staticClass:"text-h4 text-main q-py-xl  text-bold"},[e._v("\n        "+e._s(e.$t("login.welcom_title"))+"\n      ")]),n("div",{staticClass:"row q-gutter-md justify-center q-pb-md "},[n("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{outline:"",disable:e.handlingApi,color:"blueGrey"},on:{click:e.fbSignIn}},[n("img",{attrs:{width:"10px",src:"statics/facebook@3x.png"}})]),n("q-btn",{staticClass:"col ",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{outline:"",disable:e.handlingApi,color:"blueGrey"},on:{click:e.googleSignIn}},[n("img",{attrs:{width:"18px",src:"statics/google@3x.png"}})])],1),n("div",{staticClass:"q-pb-md q-pt-md q-gutter-md "},[n("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"用戶名稱"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),n("q-input",{attrs:{"label-color":"blueGrey",disable:e.handlingApi,color:"blueGrey",label:"密碼",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("div",{staticClass:"row justify-between q-pb-md"},[n("q-checkbox",{attrs:{label:"記住我",disable:e.handlingApi,color:"main"},model:{value:e.remrmberMe,callback:function(t){e.remrmberMe=t},expression:"remrmberMe"}}),n("q-btn",{staticClass:"text-main text-bold ",attrs:{flat:"",dense:"",label:"忘記密碼?",to:"/accountRecover"}})],1),n("div",{staticClass:"text-caption text-grey-8 q-pb-xl q-px-xs text-left"},[e._v("\n        登入即代表您已經閱讀並同意\n        "),n("q-btn",{attrs:{outline:"",size:"xs",dense:"",label:"使用者條款"},on:{click:function(t){return e.openTermsDialog("使用者條款","termsofuse")}}}),e._v("\n        與\n        "),n("q-btn",{attrs:{size:"xs",outline:"",dense:"",label:"隱私權政策"},on:{click:function(t){return e.openTermsDialog("隱私權政策","PrivacyPolicies")}}})],1),n("div",{staticClass:"q-pb-sm"},[n("q-btn",{staticClass:"text-bold full-width",staticStyle:{"border-radius":"6px",height:"44px"},attrs:{unelevated:"",loading:e.handlingApi,disable:!(Boolean(e.user)&&Boolean(e.password)),label:"登入",color:"main",outline:""},on:{click:e.signIn}})],1),n("div",{staticClass:"full-width row justify-center items-center text-blueGrey "},[e._v("\n        還沒有帳號?\n        "),n("q-btn",{staticClass:"text-bold",attrs:{flat:"",color:"main",dense:"",label:"馬上註冊",to:"register"}})],1)])]),n("q-dialog",{model:{value:e.TermsDialog.show,callback:function(t){e.$set(e.TermsDialog,"show",t)},expression:"TermsDialog.show"}},[n("q-card",{staticClass:"q-dialog-plugin"},[n("q-card-section",[n("div",{staticClass:" text-main text-bold",staticStyle:{"font-size":"18px"}},[e._v("\n          "+e._s(e.TermsDialog.title)+"\n        ")])]),n("q-separator"),n("q-card-section",{staticClass:"scroll q-pa-sm",staticStyle:{"max-height":"60vh"}},[n(e.TermsDialog.name,{tag:"component"})],1),n("q-separator"),n("q-card-actions",{attrs:{align:"center"}},[n("q-btn",{attrs:{unelevated:"",color:"paleGrey","text-color":"main",label:"關閉"},on:{click:function(t){e.TermsDialog.show=!1}}})],1)],1)],1)],1)},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("9523")),s=n.n(o),l=n("2f62"),r=n("ef25"),c=n("0df5");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={components:{termsofuse:r["a"],PrivacyPolicies:c["a"]},created:function(){var e=this;setTimeout((function(){FB.init({appId:"1261120347553786",cookie:!0,xfbml:!1,version:"v8.0"}),e.handlingApi=!1}),1e3)},mounted:function(){this.$store.state.account.token&&this.$router.push("/"),this.language=this.$i18n.locale,this.user=this.$store.state.account.user.email,this.remrmberMe=this.$store.state.account.remember},meta:{script:{ldJson:{type:"text/javascript",src:"https://apis.google.com/js/platform.js",async:!0,defer:!0},"facebook-jssdk":{crossorigin:"anonymous",type:"text/javascript",src:"https://connect.facebook.net/zh_TW/sdk.js",async:!0,defer:!0}}},data:function(){return{TermsDialog:{show:!1,title:"",content:[],onlycontent:"",name:""},user:"",password:"",language:"",remrmberMe:!0,handlingApi:!0}},methods:u(u({},Object(l["b"])("account",["apiLogin","oauthLogin"])),{},{FBStatusChangeCallback:function(e){var t=this;this.handlingApi=!0,"connected"===e.status?FB.api("/me?fields=id,name,email,picture",(function(e){console.log(e);var n={image:e.picture.data.url,id:e.id,name:e.name,email:e.email,source:"FACEBOOK",locale:t.language,remember:t.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){t.handlingApi=!1}};t.oauthLogin(n)})):this.handlingApi=!1},fbSignIn:function(){var e=this;console.log("FB Sigin"),FB.login((function(t){e.FBStatusChangeCallback(t)}),{scope:"public_profile,email"})},signIn:function(){var e=this;this.handlingApi=!0,setTimeout((function(){e.apiLogin({remember:e.remrmberMe,account:e.user,password:e.password,locale:e.language,success:function(t){0!=t.data.result&&e.$q.notify({message:t.data.message})},error:function(t){e.$q.notify({message:t.message})},finally:function(){e.handlingApi=!1}})}),1e3)},googleSignIn:function(){this.handlingApi=!0,this.googleWebSigin()},googleAppSigin:function(){var e=this;this.$googleplus.login({scopes:"email profile openid",webClientId:"com.googleusercontent.apps.895029396519-sfqi9in7u5imof8c7d9mol0al85juiof",offline:!0},(function(t){console.log(t),e.handlingApi=!1}),(function(t){console.log(t),e.handlingApi=!1}))},googleWebSigin:function(){var e=this;gapi.load("auth2",(function(){gapi.auth2.init(e.$store.state.system.googleConfig).then((function(t){var n=gapi.auth2.getAuthInstance();n.isSignedIn.get();n.signIn().then((function(t){var n=t,i=n.getBasicProfile(),a={image:i.getImageUrl(),id:i.getId(),name:i.getName(),email:i.getEmail(),source:"GOOGLE",locale:e.language,remember:e.remrmberMe,success:function(e){e.data},error:function(e){console.log(e)},finally:function(){e.handlingApi=!1}};e.oauthLogin(a)})).catch((function(e){console.log(e)}))})).catch((function(t){console.log(t),"idpiframe_initialization_failed"==t.error?e.$q.notify({type:"warning",message:"請關閉「封鎖第三方Cookie」設定，以利於使用 Google 登入"}):e.$q.notify({type:"warning",message:t.error})})).then((function(){e.handlingApi=!1}))}))},openTermsDialog:function(e,t){this.TermsDialog.show=!0,this.TermsDialog.title=e,this.TermsDialog.name=t}})},p=d,m=n("2877"),f=n("4d5a"),b=n("09e3"),h=n("9c40"),y=n("27f9"),v=n("8f8e"),x=n("24e8"),w=n("f09f"),q=n("a370"),C=n("eb85"),k=n("4b7e"),j=n("eebe"),O=n.n(j),A=Object(m["a"])(p,i,a,!1,null,null,null);t["default"]=A.exports;O()(A,"components",{QLayout:f["a"],QPageContainer:b["a"],QBtn:h["a"],QInput:y["a"],QCheckbox:v["a"],QDialog:x["a"],QCard:w["a"],QCardSection:q["a"],QSeparator:C["a"],QCardActions:k["a"]})}}]);