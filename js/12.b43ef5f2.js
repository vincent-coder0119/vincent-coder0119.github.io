(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"41cc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-background-light2 q-pt-lg q-px-lg"},[n("q-card",{staticClass:"bg-paleGrey absolute-top",staticStyle:{height:"204px"},attrs:{flat:""}}),n("q-card",{staticStyle:{"border-radius":"12px","box-shadow":"0 0 20px 0 rgba(0,0,0,0.08)"}},[n("div",{staticClass:"row  justify-center q-pt-lg  q-pb-md"},[n("div",{staticClass:"col-6 column "},[n("q-avatar",{staticClass:"self-center",attrs:{rounded:"",size:"80px"}},[n("img",{staticStyle:{border:"8px solid #F5F5F5","border-radius":"10px"},attrs:{src:t.$store.state.account.head}})]),n("div",{staticClass:"text-main text-bold text-subtitle1 q-mb-xs  q-mt-md text-center",staticStyle:{"letter-spacing":"0.4px"}},[t._v("\n          "+t._s(t.$store.state.account.user.account)+"\n        ")]),n("div",{staticClass:"text-second text-bold q-mb-sm font-13 text-center"},[t._v("\n          "+t._s(t.$store.state.account.user.email)+"\n        ")]),n("div",{staticClass:"q-pb-sm text-center"},[n("q-badge",{staticClass:"text-bold q-pa-xs",staticStyle:{"border-radius":"8px"},attrs:{label:t.account.role,color:"lightblue2","text-color":"second",size:"23px"}})],1),n("q-btn",{staticClass:"full-width text-bold ",attrs:{flat:"",align:"left","text-color":"link",dense:"",size:"11px","icon-right":"keyboard_arrow_right",label:"立即享有 Premium 服務","no-wrap":""}})],1)])]),n("div",[n("q-list",{staticStyle:{padding:"24px 0 20px 0"}},t._l(t.functionList,(function(e,i){return n("q-item",{directives:[{name:"show",rawName:"v-show",value:e.visible(),expression:"item.visible()"}],key:i,staticClass:"bg-white q-pa-sm",staticStyle:{"border-radius":"10px","margin-bottom":"12px","box-shadow":"0 0 20px 0 rgba(0,0,0,0.05)"},attrs:{to:e.link?e.link:void 0}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{staticStyle:{"border-radius":"8px"},attrs:{icon:e.icon,"text-color":"brandkey",color:"primary-light",size:"26px","font-size":"12px"}})],1),n("q-item-section",[n("div",{staticClass:"text-bold text-main text-subtitle1",on:{click:function(t){e.action&&e.action()}}},[t._v("\n            "+t._s(e.title)+"\n          ")])]),n("q-item-section",{attrs:{side:""}},[n("q-icon",{staticClass:"text-lightgrey2",attrs:{name:"navigate_next"}})],1)],1)})),1),n("q-separator"),n("q-list",{staticClass:"q-pt-sm text-subtitle1 text-main text-bold q-pb-lg",attrs:{dense:""}},[t._l(t.links,(function(e,i){return n("q-item",{key:i,attrs:{clickable:""},on:{click:function(n){return t.openTermsDialog(e.title,e.link,e.name)}}},[n("q-item-section",[t._v(t._s(e.title))]),n("q-item-section",{attrs:{side:""}},[n("q-icon",{attrs:{name:"navigate_next"}})],1)],1)})),n("q-item",[n("q-item-section",[t._v("登出 "+t._s(t.$store.state.account.user.account))])],1)],2)],1),n("q-dialog",{on:{"before-show":t.DialogShowed,hide:t.DialogClosed},model:{value:t.TermsDialog.show,callback:function(e){t.$set(t.TermsDialog,"show",e)},expression:"TermsDialog.show"}},[n("q-card",{staticClass:"q-dialog-plugin"},[n("q-card-section",[n("div",{staticClass:" text-main text-bold",staticStyle:{"font-size":"18px"}},[t._v("\n          "+t._s(t.TermsDialog.title)+"\n        ")])]),n("q-separator"),n("q-card-section",{staticClass:"scroll q-pa-sm",staticStyle:{"max-height":"60vh"}},[n(t.TermsDialog.name,{tag:"component"})],1),n("q-separator"),n("q-card-actions",{attrs:{align:"center"}},[n("q-btn",{attrs:{unelevated:"",color:"paleGrey","text-color":"main",label:"關閉"},on:{click:function(e){t.TermsDialog.show=!1}}})],1)],1)],1)],1)},s=[],o=(n("7f7f"),n("b54a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card-section",{class:t.contentclass},[t._v("\n    本使用者條款（以下稱「本條款」）適用於所有位於及連結於https://www.gugu.fund、https://app.gugu.fund、https://webapp.gugu.fund網域之網站或我們的所有之移動裝置平台（股股選股神器App）（以下稱「我們」「我們的」），使用我們的各項服務(以下簡稱「本服務」)。\n  ")]),t._l(t.content,(function(e,i){return n("q-card-section",{key:i,staticClass:"q-pa-none"},[n("q-card-section",{class:t.TiTleclass,domProps:{innerHTML:t._s(e.title)}}),n("q-card-section",{class:t.contentclass,domProps:{innerHTML:t._s(e.content)}})],1)}))],2)}),l=[],a={name:"termsofuse",data:function(){return{TiTleclass:"text-main text-bold text-subtitle1",contentclass:"text-grey-9 text-caption",content:[{title:"同意條款",content:"不論個別的使用者其物理位置於何處，本條款適用於所有連結至股股選股神器之會員或訪客（以下合稱「使用者」、「您」），透過持續使用我們提供之服務，即表示您已知悉且同意本條款，若您不同意本條款之部分或全部內容，您應立即停止使用本服務。</br></br>若您未滿二十歲，除應遵守上述規定外，並應於您的家長（或監護人）應同時確實閱讀、了解並同意遵守本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本服務；當您於本服務條款修改或變更後仍使用或繼續使用本服務時，即表示您及您的家長（或監護人）亦已確實閱讀、了解並同意遵守接受本服務條款之所有內容及其後修改或變更。"},{title:"同意條款",content:"不論個別的使用者其物理位置於何處，本條款適用於所有連結至股股選股神器之會員或訪客（以下合稱「使用者」、「您」），透過持續使用我們提供之服務，即表示您已知悉且同意本條款，若您不同意本條款之部分或全部內容，您應立即停止使用本服務。</br></br>若您未滿二十歲，除應遵守上述規定外，並應於您的家長（或監護人）應同時確實閱讀、了解並同意遵守本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本服務；當您於本服務條款修改或變更後仍使用或繼續使用本服務時，即表示您及您的家長（或監護人）亦已確實閱讀、了解並同意遵守接受本服務條款之所有內容及其後修改或變更。"},{title:"本條款更新",content:"我們在法律准許的範圍內，有權隨時修改、調整本條款中的任何條款內容。一旦我們對本條款內容進行修改或調整，我們將會以公告形式發佈通知。任何修改或調整將於公布之時起生效。如果使用者在修改公布後，繼續使用我們所提供的服務，則表示同意遵守本條款之更動。因此，請使用者務必定期查閱本條款，以確保了解本條款的所有更動。如果使用者不同意我們對本條款之更動，請離開我們的網站並立即停止使用我們的服務，同時，會員應刪除個人檔案並註銷會員資格。我們亦有權於會員有違規情事發生時，刪除會員個人檔案並註銷會員資格。"},{title:"會員帳號及密碼安全",content:"無論使用者是訪客或會員，都可以瀏覽股股選股神器上的內容，但只有註冊成為會員之使用者始得享受我們提供的各項服務。訪客可以很容易在股股選股神器上建立帳號，只要輸入 Email 或使用其個人已註冊之 Google 或 Facebook 帳號登入即可。<br/></br>使用者不應使用任何與其個人真實資料無關之資訊建立其帳號名稱，包括但不限於使用模仿他人姓名或使用攻擊性的字眼、任何種族歧視的文字及任何會傷害、侵害他人權利之文字作為帳號名稱，如發生前開事項，我們有權終止該帳號的服務。且會員應注意如下事項：應妥善保管其帳號及密碼，不應將其帳號及密碼轉讓或出借給他人使用，如會員發現其帳號遭他人非法使用，應立即通知我們。因駭客行為或會員的保管疏忽導致帳號、密碼遭他人非法使用，我們不負擔任何責任。<br/><br/>您有義務妥善保管帳戶、密碼及其他相關身分驗證資訊，並為此帳號登入系統後所進行之一切活動、行為負責，包括但不限於衍生之相關費用。<br/><br/>您同意在使用股股選股神器時遵循所有適用法律，且僅可基於合法目的使用本服務。以非經我們同意或指示之方式使用本服務或接觸系統，均應被嚴格禁止，我們有權停止提供該使用者之服務。"},{title:"隱私權政策",content:"使用者提供的個人資料及股股選股神器保存與使用者相關之若干其它資料將受到中華民國法律和我們的隱私權政策之規範。"},{title:"使用規定和條約",content:"任何經由股股選股神器服務上傳、張貼、發送電子郵件或任何其它方式傳送的文字、文件、影片、照片（包括使用者的照片）、圖片、聲音、音樂作品、創作作品或任何其他內容（以下簡稱「內容」），無論為公開或是私下傳送，均由內容提供者承擔責任。我們針對任何會員上傳未經授權之內容，不負擔任何責任。<br/><br/>使用者均不得下載、重製、公開傳輸、轉售、公開播放、分享或使用我們的服務。使用者違反前述規定，將負擔所有因此侵權行為而生之法律責任。"},{title:"第三方連結",content:"我們可能含有連結至股股選股神器以外之第三方網站，由於我們無法控制這些網站及資源，因此使用者在使用各該第三方網站前，需自行瞭解各該第三方網站之使用者條款及隱私權政策。"},{title:"智慧財產權",content:"我們擁有股股選股神器上發表之所有內容（“網站內容”）之所有權利，所有權及一切因此所生之利益，包括所有著作權、專利、商業秘密，商標和其他智慧財產權。所有未被明確授權之權利將僅能由我們行使。 </br>網站內容的所有材料和組合，包括但不限於文字、各式圖片和常見問答均以我們為著作人。您對網站內容的所有材料和組合的使用均受本條款之約束。</br>我們的設計或排版受著作權，外觀設計，商標，公平法和其他法律的保護，不得進行部分或全部之重製或模仿。未經我們的明確授權，不得重製或轉發 我們的商標，設計、聲音或圖像。"},{title:"內容和其他合法權益",content:"當會員發表、上傳、提交內容至股股選股神器的留言或對話板，該會員即同意授與 我們不可撤銷的、非獨家的、免費的授權可以重製、使用、發表、翻譯、公開展示、公開傳輸、公開傳播、改作前述內容至所有現在或未來的媒體平台。該會員同意前述使用將無須支付任何費用。"},{title:"終止服務",content:"使用者同意我們有權可基於其判斷或任何原因，隨時以各樣理由終止或暫停會員使用我們之服務，包括但不限於該會員顯少使用服務、違反本條款等。</br>我們於終止服務後，不論是否已通知，均得刪除該會員之帳號及內容，並可避免該使用者於未來連結至股股選股神器或使用股股選股神器。"},{title:"賠償",content:"使用者擔保如我們及其管理階層、董事、員工、代理人及承包商因 a) 該使用者所發布或遞交之內容 b) 使用股股選股神器 c) 該使用者違反本條款及 d) 使用者侵犯第三人之任何權利，而產生之各樣主張、要求，從而受有損失、須負擔責任、損害賠償或支出（包括但不限於合理的律師費用），使用者同意賠償。"},{title:"資料備份",content:"使用者同意隨時為資料備份，以防資料遺失，我們不對任何內容遺失及使用者因此而受的相關損失承擔責任。"},{title:"與廣告商進行之交易",content:"使用者明白於股股選股神器上所投放之廣告內容、行銷文字及商品說明等各種銷售資訊，均由各該廣告商、產品與服務供應商所刊登，我們僅接受委託予以刊登，對內容並不做實質之審查或修改，請使用者自行謹慎斟酌判斷此等廣告之正確性與可信度。除有關法律法規有明文規定要求我們承擔責任以外，使用者因前述廣告而產生之交易遭受的任何的損失或損害，我們均不予負責。"},{title:"禁止商業行為",content:"使用者同意於使用股股選股神器時將不會修改、重製、對於任何功能、程式進行還原工程 （reverse engineering）、反向組譯（disassemble）或任何企圖取得原始碼或內容之行為。我們有權自行認定並將違反規定之內容無條件下架或移除。"},{title:"擔保與保證",content:"我們不保證以下事項：a) 本服務將符合使用者的特定要求；b) 於股股選股神器取得之任何服務、資訊將符合使用者的期望。"},{title:"一般性條款",content:"本條款及使用者與我們之關係，均以中華民國法律為準據法。使用者與我們就本服務、本條款或其它有關事項發生的爭議，應以台灣台北地方法院為第一審管轄法院。倘本條款之部分規定因與中華民國法律抵觸而無效者，本條款其它規定仍應具有完整的效力及效果。本條款之標題僅供方便而設，不具任何法律或契約效果。"},{title:"檢舉",content:"倘發現任何違反本條款之情事，請以 Email 寄至support@gugu.fund通知我們。"},{title:"聯繫我們",content:"如果您對隱私權政策有任何疑問、或關於資料傳送、任何本網站運作等事項，請透過下列網頁聯繫我們。 客服信箱：support@gugu.fund "}]}},methods:{}},c=a,r=n("2877"),u=n("a370"),p=n("eebe"),d=n.n(p),b=Object(r["a"])(c,o,l,!1,null,null,null),m=b.exports;d()(b,"components",{QCardSection:u["a"]});var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card-section",{class:t.contentclass},[t._v("\n    本隱私權政策規範股股金融科技股份有限公司（以下簡稱「股股」、「我們」、「我們的」）於https://www.gugu.fund、https://app.gugu.fund、https://webapp.gugu.fund、https://school.gugu.fund網域之網站或我們的所有之移動裝置平台（股股選股神器App）（以下合稱本平台）蒐集、處理、利用、保留和揭露使用者（以下簡稱「使用者」）資料。本隱私權政策適用於本平台所有提供之產品與服務。使用者光臨網站、購買或使用我們的服務時，視為已接受本隱私政策之運作與政策。\n  ")]),t._l(t.content,(function(e,i){return n("q-card-section",{key:i,staticClass:"q-pa-none"},[n("q-card-section",{class:t.TiTleclass,domProps:{innerHTML:t._s(e.title)}}),n("q-card-section",{class:t.contentclass,domProps:{innerHTML:t._s(e.content)}})],1)}))],2)},f=[],x={name:"PrivacyPolicies",data:function(){return{TiTleclass:"text-main text-bold text-subtitle1",contentclass:"text-grey-9 text-caption",content:[{title:"同意條款",content:"不論個別的使用者其物理位置於何處，本條款適用於所有連結至股股選股神器之會員或訪客（以下合稱「使用者」、「您」），透過持續使用我們提供之服務，即表示您已知悉且同意本條款，若您不同意本條款之部分或全部內容，您應立即停止使用本服務。</br></br>若您未滿二十歲，除應遵守上述規定外，並應於您的家長（或監護人）應同時確實閱讀、了解並同意遵守本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本服務；當您於本服務條款修改或變更後仍使用或繼續使用本服務時，即表示您及您的家長（或監護人）亦已確實閱讀、了解並同意遵守接受本服務條款之所有內容及其後修改或變更。"},{title:"個人資料",content:"個人資料係指具個人可辨認性的資訊、例如姓名、使用者名稱、密碼、地址、郵件地址、電話號碼等非公開之資料（以下簡稱「個人資料」）。我們蒐集個人資料以提供更優質的服務給使用者。</br></br>上述特定目的，法定編號包含：〇六七 信用卡、現金卡、轉帳卡或電子票證業務、○八一 個人資料之合法交易業務、〇九〇 消費者、客戶管理與服務、〇九一 消費者保護、〇九八 商業與技術資訊、一三五 資（通）訊服務、一三六 資（通）訊與資料庫管理、一五二 廣告或商業行為管理、一五七 調查、統計與研究分析、一八一 其他經營合於營業登記項目或組織章程所定之業務。</br></br>使用者可能會被要求提供個人資料，包括但不限於當使用者光臨我們的網站、於網站註冊、以及我們網站連結之其他活動、服務、特徵或資源時。然而，使用者可能匿名光臨網站。我們僅在使用者自願提供予我們時蒐集個人資料。然而，如果使用者拒絕提供個人資料，使用者可能將無法接觸特定網站相關活動。</br></br>我們會蒐集個人資料之目的，包含：</br><ul><li>會員註冊：姓名和電郵地址。</li><li>訂閱電子報或部落格：姓名和電郵地址。</li><li>購買股股產品或服務：姓名、地址、電郵地址和信用卡詳細資訊。</li><li>股股會員及雲端服務：姓名、地址、電郵地址、電話號碼、IP位址、設備相關識別碼、使用之瀏覽器與裝置種類。</li><li>行銷活動：姓名、地址、電郵地址、電話號碼、國家和其他與股股服務內容或行銷目的相關之資訊。</li><li>免註冊可使用的股股軟體：包括姓名、電郵、 IP位址、設備相關識別碼或使用的瀏覽器與裝置種類。</li></ul>"},{title:"非個人資料",content:"我們可能會於使用者在網站互動過程中，蒐集使用者不具個人可辨識性的資料。不具個人可辨識性資料係指無法辨識到使用者本身之資料，包括但不限於使用者於瀏覽器上之使用者名稱、使用者連結我們網站之電腦類型和技術資訊，如作業系統和網路服務提供者與其他類似資訊。"},{title:"網頁瀏覽器Cookies",content:"特定資料可能會被蒐集，如網際網路協定位址、設備事件資訊包括但不限於瀏覽器類型、當機或閃退記錄、系統活動和其他伺服器登入資料。我們的網站可能會使用cookies來提升使用者體驗。使用者的網頁瀏覽器會在硬碟置入cookies用來記錄瀏覽記錄以及有時用來追蹤使用資訊。使用者可以選擇關閉cookies或設定瀏覽器於cookies傳送時將提醒您。然請注意當網頁瀏覽器設定拒絕cookies時，網站上之部分功能可能無法順利運作。"},{title:"我們如何運作及使用蒐集的資訊",content:"股股金融科技股份有限公司在符合下列特定目的（以下簡稱「目的」）之特定範圍與期間內可能以電郵、電話或其他合理合法方式傳送或使用使用者之個人資料。</br><ul><li>由使用者授權運用之個人資料</br>我們蒐集、處理及存儲特定的個人資料，係由使用者授權予我們運用之個人資料。使用者為資料控制者且負責運用大部分的個人資料。</li><li>與使用者溝通</br>當使用者在網站上提交或詢問任何意見，我們將透過其提供之聯絡資訊回覆使用者。</li><li>個人化使用者體驗</br>我們可能整合使用者資料，以瞭解我們的使用者如何使用我們網站提供的服務和資源。</li><li>向訂閱者寄送電子報或行銷活動資訊</br>如果使用者在網站上訂閱我們的電子報，我們會以電子郵件方式寄發給訂閱者有關我們公司的資訊，如公司新聞、最新活動、更新資訊，及相關產品或服務資訊。取消訂閱電子報的詳細操作方式提供於電子郵件的最下方，使用者可隨時取消訂閱。一旦接受使用者要求取消訂閱，我們將立即於我們的郵件清單中移除使用者的電子郵件並停止寄送後續的電子郵件給使用者。</li> </ul>"},{title:"我們如何保護您的資料",content:"我們採取適當的資料保護、儲存和處理機制及資料安全措施，以避免未經授權之接觸、變更、揭露或破壞您的個人資料、交易資訊與於我們網站處理及儲存之資料。 我們的網站遵循PCI漏洞標準（PCI vulnerability standards）以盡可能地提供使用者一個安全的使用環境。"},{title:"資料分享與揭露",content:"<ul><li>我們不會與任何第三人出售、交易或出租使用者之個人資料。</li><li>我們可能使用第三人之服務以幫助我們業務與網站之營運或代表我們管理活動，例如寄送電子報或問卷調查。我們於上開目的範圍內可能和這些第三人分享您的資料，並依據我們的指示，遵守本政策和任何其他適當的保密和安全措施。</li><li>我們可能會和我們的合作夥伴、可信賴之分支機構或廣告商於上開目的範圍內分享通用性且經整合的統計資訊，此統計資訊未連結至任何使用者或訪客之個人資料。</li><li>我們可能分享經整合或已去識別化之非個人資料，因這些資料無法合理地用於識別個人身份。</li><li>如果我們涉及合併、收購或出售資產，我們將繼續採取措施保護個人資料之機密性，並在向新實體轉移任何個人資料前通知受影響的用戶。</li><li>我們可能揭露、出售、交易或出租通用性且經整合的統計資訊，此統計資訊係屬經整合或已去識別化之非個人資料，包含但不限於應用程式名稱、安裝/卸載之時間日期及場域（國家）等未連結至任何個人資料之統計資訊。</li></ul>"},{title:"廣告",content:"我們的網站可能出現第三方廣告業者之廣告，並傳送給有設置Cookies的使用者。這些Cookies允許廣告業者之伺服器每次寄送線上廣告給您時得以辨認您的電腦，以及編輯您或任何使用您的電腦者之非個人資料。這些資料使廣告業者可傳送那些他們確信您將會有興趣之特定性廣告。本隱私政策未包含使用Cookies或這些廣告業者之任何行為。您有許多選項來控制或限制我們和第三方將如何使用cookies和相似之技術，包括用於廣告。例如：您可在瀏覽器的偏好設定隨時移除這些定向與廣告Cookies。"},{title:"第三方網站",content:"股股之網站或服務，可能存在由第三方所提供之網站連結，或是服務內容，該等網站與服務並非由股股所經營管理。使用者接觸、點擊或採用該等網站或服務前，應先了解該等網站或服務提供者，所制定之使用者條款或隱私權政策。該等網站或服務，不在適用本政策之範圍內，我們也不對第三方網站或服務蒐集使用者個資的行為，承擔任何法律責任。"},{title:"我們隱私權政策的更新",content:"我們會定期檢視我們的隱私權政策及遵循之情況。我們的隱私權政策可能隨著時間而更動。如果有任何變動，我們將於網站上更新我們的隱私權政策，且相關資料之變動將會公告。我們鼓勵使用者經常檢視本網頁。同時，您應瞭解且同意您有責任定期檢閱本隱私政策。"},{title:"您對於隱私權政策之同意",content:"當使用本網站時即代表您同意我們最新的隱私權政策。倘您不同意隱私權政策的規範或拒絕提供您的個人資料，您可以停止使用網站提供的服務，否則我們將無法提供給您完整功能之服務。此外，若我們認為我們的隱私權政策未被遵守或是個人資料未完整的提供，我們保有終止或暫停提供您相關服務之權利。"},{title:"僅限於線上隱私權政策",content:"本線上隱私權政策僅適用於透過網站蒐集的資料，不適用於離線蒐集之資料。"},{title:"有關您的隱私保證",content:"為了確保您資料的安全性以及隱私權政策之實施，我們會向我們的員工宣導我們的這些政策、規範及管理監控。"},{title:"您的權利",content:"我們尊重您提供的個人資料。關於您所提供予我們的個人資料，您可以透過聯繫股股客戶服務support@gugu.fund 行使下列權利：</br><ul><li>查詢或請求閱覽。</li><li>請求製給複製本。</li><li>請求補充或更正。</li><li>請求停止蒐集、處理或利用。</li><li>請求刪除。</li> </ul>"},{title:"資料保存",content:"我們保留您的帳戶資料，因為我們需要它來操作您的帳戶。為了我們的合法商業利益、法律原因和防止損害，我們保留關於您和您的使用的個人資料。"},{title:"聯繫我們",content:"如果您對隱私權政策有任何疑問、或關於資料傳送、任何本網站運作等事項，請透過下列網頁聯繫我們。 客服信箱：support@gugu.fund </br></br>本隱私政策最後更新於2020年7月25日。"}]}},methods:{}},h=x,v=Object(r["a"])(h,g,f,!1,null,null,null),q=v.exports;d()(v,"components",{QCardSection:u["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card-section",{class:t.contentclass},[n("p",[t._v("\n      本免責聲明，指股股金融科技股份有限公司（以下簡稱「我們」、「我們的」，公司基本資料詳列如下）授權您於https://www.gugu.fund、https://app.gugu.fund、https://webapp.gugu.fund、https://school.gugu.fund網域之網站或我們的所有之移動裝置平台（股股選股神器App）（以下合稱本平台），使用本平台各項服務\n      (以下簡稱「本服務」)。爰此，關於本服務之免責聲明，雙方同意以本契約約定之。\n    ")]),n("p",[t._v("\n      任何瀏覽本平台的人士，須自行承擔一切風險，本網站不會負責任何因瀏覽或使用本平台而引致之損失。本網站不會作出任何默示的擔保。\n      投資必有風險，投資人必須謹慎、理性地判讀各種市場資訊並為個人投資決策及其後果負起盈虧責任。\n    ")]),n("p",[t._v("\n      我們的各項服務係依據美國相關之網站資料直接呈現，或綜整；圖表化；工具化等方式呈現，已力求正確與即時。但不保證本網站的效能、速度與安全性，以及資訊內容完整、正確與可靠性等。如發生相關狀況，本公司不負擔相關之損害賠償及法律責任。\n    ")]),n("p",[t._v("\n      本網站所提供之各項資訊服務，包括其他使用者張貼的文章、評論及意見等，皆不具立即性、統一適用性，不應視為任何程度的投資建議，亦不代表本公司立場。相關資訊的真實性、完整性、可信度有賴使用者自行審度，投資人務必多方蒐集資訊參考佐證，自行分析且獨立思考判斷，萬不可直接依賴本網站服務進行投資決策，相關風險應自行承擔。若因此發生直接或衍生之損失，本公司恕不負擔任何損害賠償及法律責任。\n    ")]),n("p",[t._v("\n      此外，本公司之關係企業、相關管理人員及董事、以及所屬員工或代理人在法律容許的限度內，不向您承擔以下原因所引發之任何損害：\n      本網站服務之可能錯誤、延遲、遺漏、瑕疵、中斷或停止傳輸；\n    ")]),n("ul",[n("li",[t._v("\n        第三方駭客攻擊或藉由本網站服務傳輸惡意軟體、病毒、木馬或類似性質之程式；\n      ")]),n("li",[t._v("\n        本網站受託廣告刊登行為，或使用者對廣告商或贊助人所發生的任何交易或行為；\n      ")]),n("li",[t._v("\n        本網站對提供服務之範圍與內容，以及相關免責聲明、服務條款、隱私權條款等規範所進行的任何異動之行為（例如：一部分或全部性的變更、修改、暫時停止服務、永久停止服務等異動行為）。\n      ")]),n("li",[t._v("\n        本網站使用者違反中華民國法律及本網站各項服務條款、承諾、義務與注意事項之行為。\n      ")])]),n("p",[t._v("本免責聲明最後更新於2020年7月25日")])])],1)},w=[],_={name:"Disclaimer",data:function(){return{TiTleclass:"text-main text-bold text-subtitle1",contentclass:"text-grey-9 text-caption",content:[{title:null,content:""}]}},methods:{}},k=_,C=Object(r["a"])(k,y,w,!1,null,null,null),T=C.exports;d()(C,"components",{QCardSection:u["a"]});var D=n("872c"),P={name:"more",components:{termsofuse:m,PrivacyPolicies:q,Disclaimer:T},mixins:[D["a"]],beforeMount:function(){this.title="個人檔案"},data:function(){var t=this;return{TermsDialog:{show:!1,title:"",content:[],onlycontent:"",name:""},contentLink:"",account:{role:"一般會員"},functionList:[{visible:function(){return console.log(t.$store.state.account.accountType),"APP"===t.$store.state.account.accountType},icon:"fas fa-shield-alt",title:"帳號設定",link:"/more/accountsetting"},{visible:function(){return!0},icon:"fas fa-bell",title:"通知設定",link:"/more/notifysetting"},{visible:function(){return!0},icon:"settings",title:"清理暫存",link:"",action:function(){t.$q.notify({message:"已清除快取資料.."})}}],links:[{title:"回報問題"},{title:"使用者條款",link:"/more/termsofuse",name:"termsofuse"},{title:"隱私權政策",link:"https://app.gugu.fund/policy.html",name:"PrivacyPolicies"},{title:"免責聲明",link:"https://app.gugu.fund/disclaimer.html",name:"Disclaimer"}]}},methods:{openTermsDialog:function(t,e,n){e&&(this.TermsDialog.show=!0,this.TermsDialog.title=t,this.TermsDialog.link=e,this.TermsDialog.name=n)},openLink:function(t,e){e&&(this.contentLink=e,this.TermsDialog.show=!0)},DialogShowed:function(){var t=document.body;t.style.cssText="position:relative !important ; overflow:hidden;"},DialogClosed:function(){var t=document.body;t.style.cssText=""}}},O=P,S=n("9989"),j=n("f09f"),Q=n("cb32"),$=n("58a8"),L=n("9c40"),E=n("1c1c"),I=n("66e5"),z=n("4074"),A=n("0016"),M=n("eb85"),F=n("24e8"),H=n("4b7e"),G=Object(r["a"])(O,i,s,!1,null,null,null);e["default"]=G.exports;d()(G,"components",{QPage:S["a"],QCard:j["a"],QAvatar:Q["a"],QBadge:$["a"],QBtn:L["a"],QList:E["a"],QItem:I["a"],QItemSection:z["a"],QIcon:A["a"],QSeparator:M["a"],QDialog:F["a"],QCardSection:u["a"],QCardActions:H["a"]})},"872c":function(t,e,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var i=n("9523"),s=n.n(i),o=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={mounted:function(){this.updateTitle(this.title)},data:function(){return{title:""}},methods:a({},Object(o["b"])("system",["updateTitle"]))}}}]);