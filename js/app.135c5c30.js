(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},1:function(e,t){},2:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var o=n("a34a"),r=n.n(o),a=(n("a481"),n("96cf"),n("c973")),i=n.n(a),s=(n("e54f"),n("9f29"),n("573e"),n("7d6e"),n("985d"),n("4e2f"),n("0047"),n("2b0e")),c=n("db10"),u=n("42d2"),l=n("b05d"),f=n("18d6"),d=n("a639"),m=n("2a19"),p=n("436b"),h=n("f508"),g=n("9c64"),y=n("696d");s["a"].use(l["a"],{config:{notify:{position:"top",timeout:3e3,multiLine:!1}},lang:c["a"],iconSet:u["a"],plugins:{LocalStorage:f["a"],SessionStorage:d["a"],Notify:m["a"],Dialog:p["a"],Loading:h["a"],Meta:g["a"],AddressbarColor:y["a"]}});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},b=[],k=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),_=n.n(k),S=n("2f62");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){_()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={mounted:function(){this.handleAuthStateChanged()},methods:w({},Object(S["b"])("account",["handleAuthStateChanged"]))},T=P,M=n("2877"),I=Object(M["a"])(T,v,b,!1,null,null,null),C=I.exports,F=(n("7f7f"),n("551c"),n("097d"),n("bc3a")),A=n.n(F),R=["HistoricalPrice","MasterList","Login","MasterGroup","Stock","MemberRegister","CheckEmail","MyList","MyListOrder","MyGroup","MasterGroup","TransactionToken","OAuthLogin","ChangeMemberPassword","MyAccount","CustomerTalk","SyncDeviceToken","SearchStock","FinancialReport","SymbolInMyList","ForumList","ForumReplyList","ForumPost","ForumReply","ForumLike"];function x(){var e={};return R.forEach((function(t){e[t]="/".concat(t)})),e}var O=x(),D=O,E=null;E="https://api.gugu.fund/";var G=A.a.create({baseURL:E});function U(e,t){return G.get(E+e,{params:t})}function V(e,t){return G.post(E+e,t)}function j(e,t){return G.put(E+e,t)}function H(e,t){return G.delete(E+e,{data:t})}G.defaults.headers.post["Content-Type"]="application/json;charset=utf-8";var z={instance:G,account:{login:function(e){return V(D.Login,e)},memberRegister:function(e){return V(D.MemberRegister,e)},checkEmail:function(e){return V(D.CheckEmail,{email:e})},register:function(e){return V(D.MemberRegister,e)},OAuthLogin:function(e){return V(D.OAuthLogin,e)},ChangeMemberPassword:function(e,t,n){return V(D.ChangeMemberPassword,{old_password:e,new_password_1:t,new_password_2:n})},MyAccount:function(){return U(D.MyAccount)}},service:{CustomerTalk:function(e,t,n){return V(D.CustomerTalk,{name:e,email:t,content:n})},SyncDeviceToken:function(e,t){return V(D.SyncDeviceToken,{email:e,token:t})}},stock:{SymbolInMyList:function(e){return V(D.SymbolInMyList,{symbol:e})},MyListOrder:function(e){return V(D.MyListOrder,{symbol_order:e})},MyList:function(){return U(D.MyList)},MyListAdd:function(e){return j(D.MyList,{symbol:e})},MyListDelete:function(e){return H(D.MyList,{symbol:e})},FinancialReport:function(e,t,n){var o={report_type:e,symbol:n,interval:t};return U(D.FinancialReport,o)},SearchStock:function(e){return U(D.SearchStock,{filter:e})},hPrice:function(e,t,n,o){var r={symbol:e,price_type:t,begin_date:n,end_date:o};return U(D.HistoricalPrice,r)},MasterList:function(e){return U(D.MasterList,e)},stock:function(e){return U(D.Stock,{symbol:e})}},forum:{ForumList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return U(D.ForumList,{forum_id:e})},ForumReplyList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";return U(D.ForumReplyList,{forum_id:t,post_uid:e})},ForumPost:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";return V(D.ForumPost,{forum_id:t,content:e})},ForumReply:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";return V(D.ForumReply,{forum_id:n,post_uid:e,content:t})},ForumLike:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1";return V(D.ForumLike,{forum_id:n,post_uid:e,like:t})}}},N=z,K={namespaced:!0,state:{defaultHead:"https://app.gugu.fund/assets/img/testimonial/default.png",accountType:"",token:"",user:{account:"",email:""},remember:!1,head:"",settings:{notify:{all:!0}}},getters:{defaultHead:function(e){return e.defaultHead},user:function(e){return e.user},token:function(e){return e.token},remember:function(e){return e.remember},head:function(e){return e.head},settings:function(e){return e.settings},accountType:function(e){return e.accountType}},mutations:{setAccountType:function(e,t){console.log("setAccountType %s",t),e.accountType=t},setToken:function(e,t){e.token=t},setUser:function(e,t){e.user=t},setRemember:function(e,t){e.remember=t},setHead:function(e,t){e.head=t},setSettings:function(e,t){e.settings=t},setNotifyAll:function(e,t){e.settings.notify.all=t}},actions:{setUserInfo:function(e,t){var n=e.commit;n("setUser",{account:t.account,email:t.email}),n("setRemember",t.remember),n("setHead",t.headUrl),n("setAccountType",t.type)},setToken:function(e,t){var n=e.commit;t?N.instance.defaults.headers.common["Authorization"]="Bearer ".concat(t):delete N.instance.defaults.headers.common["Authorization"],n("setToken",t)},register:function(e,t){var n=this,o=(e.commit,e.dispatch),r=e.state,a={account:t.account,email:t.email,password:t.password,source:"APP",oauth_token:""};o("setUserInfo",{remember:!1,account:t.account,email:t.email,headUrl:r.defaultHead,type:"APP"}),delete N.instance.defaults.headers.common["Authorization"],N.account.register(a).then((function(e){var r=e.data;0==r.result?(o("setToken",r.data.login_token),o("system/saveStorage",{},{root:!0}),o("afterSigin",""),n.$router.push("/")):o("setToken",""),t["success"]&&t.success(e)})).catch((function(e){t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},apiLogin:function(e,t){var n=this,o=(e.commit,e.dispatch),r=e.state;o("setUserInfo",{remember:t.remember,account:t.account,email:t.account,headUrl:r.defaultHead,type:"APP"});t.remember;var a={account:t.account,password:t.password,locale:t.locale};delete N.instance.defaults.headers.common["Authorization"],N.account.login(a).then((function(e){var r=e.data;0==r.result?(o("setToken",r.data.login_token),o("system/saveStorage",{},{root:!0}),o("stock/getMyFavorites",{},{root:!0}),o("afterSigin",""),n.$router.push("/")):o("setToken",""),t["success"]&&t.success(e)})).catch((function(e){t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},oauthLogin:function(e,t){var n=this,o=(e.commit,e.dispatch);o("setUserInfo",{remember:t.remember,account:t.email,email:t.email,headUrl:t.image,type:t.source});t.remember;var r=JSON.stringify({image:t.image,id:t.id,name:t.name,email:t.email}),a={oauth_token:r,source:t.source,locale:t.locale};delete N.instance.defaults.headers.common["Authorization"],N.account.OAuthLogin(a).then((function(e){var r=e.data;0==r.result?(o("setToken",r.data.login_token),o("system/saveStorage",{},{root:!0}),o("stock/getMyFavorites",{},{root:!0}),o("afterSigin",""),n.$router.push("/")):o("setToken",""),t["success"]&&t.success(e)})).catch((function(e){t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},setApiToken:function(e,t){e.commit;N.instance.defaults.headers.common["Authorization"]="Bearer ".concat(t)},afterSigin:function(e){e.commit;var t=e.dispatch;e.state;t("firebase/syncDevicceToken",{},{root:!0})},handleAuthStateChanged:function(e){e.commit,e.dispatch;var t=e.state,n=e.rootState;e.rootGetters;n.system.splashShowed?t.token||this.$router.push("/login"):this.$router.push("/splash")}}},B=(n("f751"),"gugu-v1-"),q=B+"S-",Q=B+"L-",$={sessionSplash:q+"splash",sessionToken:q+"key",localLogin:Q+"Info"},J=(n("6b54"),n("3452")),W=n.n(J),X=W.a.enc.Utf8.parse("DZWT9I0U8IV6O1SVJ1RZ1ZXTJVADPQHK"),Y=W.a.enc.Utf8.parse("WellanSecurity");function Z(e){var t=W.a.enc.Hex.parse(e),n=W.a.enc.Base64.stringify(t),o=W.a.AES.decrypt(n,X,{iv:Y,mode:W.a.mode.CBC,padding:W.a.pad.Pkcs7}),r=o.toString(W.a.enc.Utf8);return r.toString()}function ee(e){var t=W.a.enc.Utf8.parse(e),n=W.a.AES.encrypt(t,X,{iv:Y,mode:W.a.mode.CBC,padding:W.a.pad.Pkcs7});return n.ciphertext.toString().toUpperCase()}var te={Decrypt:Z,Encrypt:ee},ne={namespaced:!0,state:{version:"beta:0.0.0.1",title:"",splashShowed:!1,restoredStorage:!1,clientInfo:{},googleConfig:{client_id:"895029396519-sfqi9in7u5imof8c7d9mol0al85juiof.apps.googleusercontent.com"}},getters:{version:function(e){return e.version},title:function(e){return e.title},restoredStorage:function(e){return e.restoredStorage},splashShowed:function(e){return e.splashShowed},googleConfig:function(e){return e.googleConfig},clientInfo:function(e){return e.clientInfo}},mutations:{setRestored:function(e,t){return e.restoredStorage=t},setVersion:function(e,t){return e.version=t},setTitle:function(e,t){return e.title=t},setSplash:function(e,t){return e.splashShowed=t},setClientInfo:function(e,t){return e.clientInfo=t}},actions:{updateVersion:function(e,t){var n=e.commit;n("setVersion",t)},updateTitle:function(e,t){var n=e.commit;n("setTitle",t)},saveSplash:function(e,t){var n=e.commit;d["a"].set($.sessionSplash,t),n("setSplash",t)},restoreSplash:function(e){var t=e.commit;if(d["a"].has($.sessionSplash)){var n=d["a"].getItem($.sessionSplash);t("setSplash",n)}else t("setSplash",!1)},LoadStorage:function(e){var t=e.commit,n=e.dispatch;e.rootState;n("restoreSplash");var o="";if(d["a"].has($.sessionToken)){var r=d["a"].getItem($.sessionToken);r&&(o=te.Decrypt(r))}var a=f["a"].getItem($.localLogin);if(null!=a){var i=JSON.parse(te.Decrypt(a));0,i.settings&&t("account/setSettings",i.settings,{root:!0}),i.accountType&&t("account/setAccountType",i.accountType,{root:!0}),i.user&&t("account/setUser",i.user,{root:!0}),i.head&&t("account/setHead",i.head,{root:!0}),i.remember&&t("account/setRemember",i.remember,{root:!0}),o||(o=i.token)}n("account/setToken",o,{root:!0}),t("setRestored",!0)},saveStorage:function(e,t){e.commit;var n=e.rootState;var o=Object.assign({},n.account);d["a"].set($.sessionToken,te.Encrypt(o.token)),o.token=o.remember?o.token:"",console.log(o),f["a"].set($.localLogin,te.Encrypt(JSON.stringify(o)))}}},oe={namespaced:!0,state:{needReloadFavoriteList:!0,myFavorites:[],currentGroupId:"0",lastGroupId:"0",currentStockId:"",favoritesSymbolList:[],lastScrollPos:0,searchText:"",searchResult:[],masterList:[]},getters:{needReloadFavoriteList:function(e){return e.needReloadFavoriteList},myFavorites:function(e){return e.myFavorites},currentGroupId:function(e){return e.currentGroupId},lastGroupId:function(e){return e.lastGroupId},currentStockId:function(e){return e.currentStockId},favoritesSymbolList:function(e){return e.favoritesSymbolList},lastScrollPos:function(e){return e.lastScrollPos},masterList:function(e){return e.masterList},stockList:function(e){return e.masterList},searchText:function(e){return e.searchText},searchResult:function(e){return e.searchResult}},mutations:{setNeedReload:function(e,t){e.needReloadFavoriteList=t},setMyFavorites:function(e,t){e.myFavorites=t},setCurrentStockId:function(e,t){e.currentStockId=t},setFavoritesSymbolList:function(e,t){e.favoritesSymbolList=t},setLastScrollPos:function(e,t){console.log("setLastScrollPos",t),e.lastScrollPos=t},setCurrentGroupId:function(e,t){e.lastGroupId=e.currentGroupId,e.currentGroupId=t},setMasterList:function(e,t){e.masterList=t},setSearchText:function(e,t){e.searchText=t},setSearchResult:function(e,t){e.searchResult=t}},actions:{MyFavoritesAdd:function(e,t){var n=e.commit;e.dispatch,e.state;N.stock.MyListAdd(t.symbol).then((function(e){console.log(e);e.data;n("setNeedReload",!0),t["success"]&&t.success(e)})).catch((function(e){console.log(e),t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},MyFavoritesDel:function(e,t){var n=e.commit;e.dispatch,e.state;N.stock.MyListDelete(t.symbol).then((function(e){console.log(e);e.data;n("setNeedReload",!0),t["success"]&&t.success(e)})).catch((function(e){console.log(e),t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},RefreshFavoritesSymbolList:function(e){var t=e.commit,n=(e.dispatch,e.state),o=[],r=n.myFavorites;0!=r.length&&r.forEach((function(e,t){o.push(e.symbol)})),t("setFavoritesSymbolList",Object.assign([],o))},UpdateMyFavorites:function(e,t){var n=e.commit;e.dispatch,e.state;n("setMyFavorites",t)},getMyFavorites:function(e,t){var n=e.commit,o=e.dispatch,r=(e.state,[]);N.stock.MyList().then((function(e){var o=e.data;0===o.result&&null!==o.data&&(n("setNeedReload",!1),r=o.data.symbols),t["success"]&&t.success(e)})).catch((function(e){console.log(e),t["error"]&&t.error(e)})).then((function(){o("UpdateMyFavorites",r),t["finally"]&&t.finally()}))},UpdateFavoritesSymbolList:function(e,t){e.commit,e.dispatch,e.state;N.stock.MyListOrder(t.data).then((function(e){console.log(e),t["success"]&&t.success(e)})).catch((function(e){console.log(e),t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))},switchGroup:function(e,t){var n=e.commit,o=e.state;n("setCurrentGroupId",t);o.masterList[t]},getGroupStocks:function(e,t){var n=e.commit,o=e.dispatch,r=(e.state,{group_id:t.group_id,filter:t.filter});n("setLastScrollPos",0),n("setMasterList",[]),N.stock.MasterList(r).then((function(e){n("setMasterList",e.data.data.symbols),o("switchGroup",t.group_id),t["success"]&&t.success(e)})).catch((function(e){console.log(e),t["error"]&&t.error(e)})).then((function(){t["finally"]&&t.finally()}))}}},re=n("59ca"),ae=(n("0098"),{namespaced:!0,state:{firebaseConfig:{apiKey:"AIzaSyDDS2TacfPH8semqXqoRWUi6WskuTUSTnY",authDomain:"gugu-app-282710.firebaseapp.com",databaseURL:"https://gugu-app-282710.firebaseio.com",projectId:"gugu-app-282710",storageBucket:"gugu-app-282710.appspot.com",messagingSenderId:"895029396519",appId:"1:895029396519:web:28643fd1dccd999fa97a02",measurementId:"G-48GVS9XGYW"},apiKey:"AAAA0GPoxCc:APA91bE6IwCokC1flNbzGb1-Na8afGBo-C9HHcAMmA5Yt0_HOBL5KuvOBptPbKkNIXvpB-TQal9Czjj69QmMmi3W2R5XcdR-vVvU1piaFFudhlSQ2K_AW8SLp_Qj4JYFS2QQjGZKKp0D",publicVapidKey:"BFHekDLgueVh-i6T8sqzDI4HDnzA8gOZxu25AJqeoKNLDxYXudIzwn96rxShLW9nCYVjQ-TnLjOd17fHeESIri8",token:"",tokenSynced:!1,messages:[]},getters:{firebaseConfig:function(e){return e.firebaseConfig},apiKey:function(e){return e.apiKey},publicVapidKey:function(e){return e.publicVapidKey},token:function(e){return e.token},tokenSynced:function(e){return e.tokenSynced}},mutations:{setTokenSynced:function(e,t){return e.tokenSynced=t},setToken:function(e,t){return e.token=t},addMessage:function(e,t){e.messages.push({receivedTime:new Date,readed:!1,data:t})}},actions:{initCordova:function(e){var t=e.commit,n=e.state;e.rootState;FirebasePlugin.getToken((function(e){console.log(e),t("setToken",e)}),(function(e){console.error(e)})),FirebasePlugin.onMessageReceived((function(e){t("addMessage",e),console.log(n.messages)}),(function(e){console.log(e)})),FirebasePlugin.getId((function(e){console.log(e)}),(function(e){console.error(e)}))},init:function(e){var t=e.commit,n=e.state;e.getters;re["initializeApp"](n.firebaseConfig);var o=re["messaging"]();o.usePublicVapidKey(n.publicVapidKey),o.getToken().then((function(e){console.log("firebase token",e),t("setToken",e)})).catch((function(e){console.log("FCM got Token error-----------"),console.log(e)})),o.onTokenRefresh((function(){o.getToken().then((function(e){console.log("FCM got Token refreshed-----------"),console.log(e),t("setToken",e)})).catch((function(e){console.log("Unable to retrieve refreshed token ",e)}))})),o.onMessage((function(e){console.log("Message received. ",e),t("addMessage",e),console.log(n.messages)}))},syncDevicceToken:function(e){var t=e.commit,n=e.state,o=e.rootState,r=e.getters;if(!r.tokenSynced&&r.token){var a=o.account.user.email,i=n.token;console.log("email=%s,token=%s",a,i),N.service.SyncDeviceToken(a,i).then((function(e){console.log(e),t("setTokenSynced",!0)})).catch((function(e){})).then((function(){}))}}}}),ie={namespaced:!0,state:{isCustomListEditing:!1},getters:{isCustomListEditing:function(e){return e.isCustomListEditing}},mutations:{setIsCustomListEditing:function(e,t){return e.isCustomListEditing=t}},actions:{}};s["a"].use(S["a"]);var se=function(){var e=new S["a"].Store({modules:{account:K,system:ne,stock:oe,firebase:ae,global:ie},strict:!1});return e},ce=n("8c4f"),ue=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",components:{default:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"31ee"))},foot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"17cd"))}}},{path:"stock/detail/:stockId",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"1ed4"))}},{path:"/stock/annualReport/:stockId",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"377f"))}},{path:"/stock/findata/:stockId",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"a9eb"))}},{path:"/more/accountsetting",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"2bf9"))}},{path:"/more/notifysetting",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"0097"))}},{path:"/mailbox",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"c37d"))}},{path:"/more/reportproblem",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"9f17"))}},{path:"/search",components:{default:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"dba4"))},foot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"17cd"))}}}]},{path:"/splash",component:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"77f4"))}},{path:"/onboard",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"035a"))}},{path:"/register",component:function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"3ae4"))}},{path:"/community",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",components:{default:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"cfea"))},foot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"17cd"))}}},{path:"/community/feeds/:forumId",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"7454"))}},{path:"/community/feeds-reply/:forumId/:uid",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"6b35"))}}]},{path:"/mylist",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",components:{default:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"8695"))},foot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"17cd"))}}}]},{path:"/more",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",components:{default:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"41cc"))},foot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"17cd"))}}}]},{path:"/login",component:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"c6f7"))}}];ue.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}});var le=ue;s["a"].use(ce["a"]);var fe=function(){var e=new ce["a"]({scrollBehavior:function(e,t,n){if(n)return n;var o={};return e.hash?(o.selector=e.hash,!(!/^#\d/.test(e.hash)&&!document.querySelector(e.hash))&&o):e.meta.pos?{x:0,y:e.meta.pos}:new Promise((function(t){e.matched.some((function(e){return e.meta.scrollToTop}))&&(o.x=0,o.y=0),t(o)}))},routes:le,mode:"history",base:"/"});return e.afterEach((function(e,t){})),e},de=function(){return me.apply(this,arguments)};function me(){return me=i()(r.a.mark((function e(){var t,n,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof se){e.next=6;break}return e.next=3,se({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=se;case 7:if(t=e.t0,"function"!==typeof fe){e.next=14;break}return e.next=11,fe({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=fe;case 15:return n=e.t1,t.$router=n,o={router:n,store:t,render:function(e){return e(C)}},o.el="#q-app",e.abrupt("return",{app:o,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}var pe=n("0967"),he=n("2ef0"),ge=n.n(he),ye=function(){var e=i()(r.a.mark((function e(t){var n,o;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.app,t.router,n=t.Vue,o=t.store,o.commit("system/setClientInfo",pe["b"].is),o.dispatch("system/LoadStorage"),n.prototype.$api=N,n.prototype.$_=ge.a,console.log(o.state.system.clientInfo),o.state.system.clientInfo.ios||o.state.system.clientInfo.mac||o.dispatch("firebase/init");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=n("a925"),be={common:{},login:{welcom_title:"歡迎來到股股"},stock:{masterList:{fair_value_over:"市價打折 {0} %",fair_value_less:"市價貴了 {0} %"}},stockInfo:{symbol:"股票代號",company_name:"公司名稱(英文)",company_name_cn:"公司名稱(中文)",company_info:"公司資訊",description:"公司介紹",index_category:"所屬指數",tag:"所屬產業",industrial_status:"產業地位",margin_of_safety:"安全邊際",dps_avg_est_value:"平均股息估值",dps_est_value:"股息估值",pe_est_value:"本益比估值",pe_avg_est_value:"平均本益比估值",pe_ind_est_value:"產業本益比估值",peg_est_value:"本益成長比估值",book_value_est_value:"淨資產估值",dividend_pv_est_value:"股息折現估值",quality_score:"品質分數",price:"股票市價",price_change:"價位漲跌",price_change_percent:"價位漲跌比例",fair_value:"公允價值",fair_value_desc:"公允價值說明",power_years:"年度",power_a:"收益力",a01:"營業利潤率",a02:"自由現金利潤率",a03:"股東權益報酬率",power_b:"成長力",b01:"營收成長率",b02:"每股盈餘成長率",b03:"自由現金流成長率",power_c:"安全力",c01:"負債比率",c02:"利息保障倍數",c03:"淨債務對息稅折舊攤銷前利潤比",power_d:"競爭力",d01:"經濟護城河",d02:"每股盈餘預估成長率",d03:"公司管理"}},ke={common:{},login:{welcom_title:"Welcome to shares"},stock:{masterList:{fair_value_over:"Market discount {0} %",fair_value_less:"Market price is {0}% more expensive"}},stockInfo:{symbol:"Stock Symbol",company_name:"Company Name (English)",company_name_cn:"Company Name (Chinese)",company_info:"Company Information",description:"Company Introduction",index_category:"Affiliated Index",tag:"Industry",industrial_status:"Industrial status",margin_of_safety:"Safety margin",dps_avg_est_value:"Evaluation model average dividend valuation",dps_est_value:"Valuation Model Dividend Valuation",pe_est_value:"Valuation model price-to-earnings ratio valuation",pe_avg_est_value:"Evaluation Model Average P/E Ratio Valuation",pe_ind_est_value:"valuation model industry price-to-earnings ratio valuation",peg_est_value:"Evaluation model of cost-benefit growth ratio valuation",book_value_est_value:"Valuation Model Net Asset Valuation",dividend_pv_est_value:"Valuation model discounted valuation of dividends",quality_score:"Quality Score",price:"Stock Market Price",price_change:"Price rises and falls",price_change_percent:"Percentage of price change",fair_value:"Fair value",fair_value_desc:"Fair value description",power_years:"Annual",power_a:"Profitability",a01:"Operating Margin",a02:"Free Cash Margin",a03:"Return on shareholder equity",power_b:"Growth Power",b01:"Revenue growth rate",b02:"Earnings per share growth rate",b03:"Free cash flow growth rate",power_c:"Safety",c01:"Debt ratio",c02:"Interest Guarantee Multiple",c03:"Net debt to profit before interest, tax, depreciation and amortization",power_d:"Competitiveness",d01:"Economic Moat",d02:"Estimated earnings per share growth rate",d03:"Company Management"}},_e={en:ke,"zh-hant":be};s["a"].use(ve["a"]);var Se=new ve["a"]({locale:"zh-hant",fallbackLocale:"zh-hant",messages:_e}),Le=function(e){var t=e.app;t.i18n=Se};s["a"].prototype.$axios=A.a;var we=function(){y["a"].set("##77869E")};function Pe(){return Te.apply(this,arguments)}function Te(){return Te=i()(r.a.mark((function e(){var t,n,o,a,i,c,u,l,f;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:t=e.sent,n=t.app,o=t.store,a=t.router,i=!0,c=function(e){i=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),l=[ye,Le,void 0,we],f=0;case 11:if(!(!0===i&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:a,store:o,Vue:s["a"],ssrContext:null,redirect:c,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==i){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Te.apply(this,arguments)}Pe()},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}},[[0,4,0]]]);