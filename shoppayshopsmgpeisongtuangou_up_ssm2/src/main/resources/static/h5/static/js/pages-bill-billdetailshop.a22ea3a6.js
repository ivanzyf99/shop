(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bill-billdetailshop"],{"02fc":function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.caritem[data-v-2454962a]{display:flex;width:100%;height:%?200?%;background-color:#fafafa;align-items:center;padding:%?10?%;margin:%?10?% 0}.carimg[data-v-2454962a]{width:%?180?%;height:%?180?%;margin-right:%?10?%}.carinfo[data-v-2454962a]{height:100%;display:flex;flex-direction:column;justify-content:space-around;flex:1}.cartitle[data-v-2454962a]{font-size:%?26?%}.carpricectn[data-v-2454962a]{display:flex;justify-content:space-between;width:100%}.carprice[data-v-2454962a]{color:red;font-size:%?25?%}',""]),t.exports=i},2548:function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return a}));var a={uNavbar:n("ca28").default,uPopup:n("c2ea").default,uFormItem:n("6db6").default,"u-Input":n("6ab0").default,uButton:n("99f7").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("u-navbar",{attrs:{title:"订单详情",border:!0,placeholder:!0,autoBack:!0},on:{leftClick:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}}),n("v-uni-scroll-view",{staticClass:"svcontainer",attrs:{"enable-flex":!0}},[n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("总价:"+t._s(t.fobj.total)+"元")])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("商品信息:"+t._s(t.fobj.gnames))])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("状态:"+t._s(t.fobj.statecn))])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("收货信息:"+t._s(t.fobj.address))])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("订单日期:"+t._s(t.fobj.ndate))])],1),t.fobj.kdgs?n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("发货信息:"+t._s(t.fobj.kdgs+" "+t.fobj.kddh))])],1):t._e(),n("v-uni-view",[n("u-popup",{attrs:{closeable:!0,show:t.popshow,mode:"bottom"},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.popshow=!1}}},[n("v-uni-view",{staticClass:"dialogctn"},[n("v-uni-form",[n("u-form-item",{attrs:{borderBottom:!0,"label-width":"76",label:"快递公司:",prop:"kdgs"}},[n("u--input",{attrs:{border:"none"},model:{value:t.fobj.kdgs,callback:function(i){t.$set(t.fobj,"kdgs",i)},expression:"fobj.kdgs"}})],1),n("u-form-item",{attrs:{borderBottom:!0,"label-width":"76",label:"快递单号:",prop:"kddh"}},[n("u--input",{attrs:{border:"none"},model:{value:t.fobj.kddh,callback:function(i){t.$set(t.fobj,"kddh",i)},expression:"fobj.kddh"}})],1)],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"hpaddingctn"},[n("u-button",{attrs:{type:"primary",text:"确认发货"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fahuo()}}})],1)],1)],1)],1)],1),"已付款"===t.fobj.statecn?n("v-uni-view",{staticClass:"formitem"},[n("u-button",{attrs:{type:"primary",text:"立即发货"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.popshow=!0}}}),n("v-uni-view",{staticClass:"hpaddingctn"},[n("u-button",{attrs:{type:"error",text:"取消订单"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeBillStatecn("已取消")}}})],1)],1):t._e(),t.fobj.shstatecn?n("v-uni-view",{staticClass:"hpaddingctn"},[n("v-uni-text",{},[t._v("售后详情:")]),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("描述:"+t._s(t.fobj.shnote))])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("售后方式:"+t._s(t.fobj.shtype))])],1),n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("售后状态:"+t._s(t.fobj.shstatecn))])],1),"待处理"===t.fobj.shstatecn?n("v-uni-view",[n("v-uni-view",{staticClass:"hpaddingctn"},[n("u-button",{attrs:{text:"同意",type:"warning"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doShouhou("同意售后")}}})],1),n("v-uni-view",{staticClass:"hpaddingctn"},[n("u-button",{attrs:{text:"拒绝",type:"error"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doShouhou("拒绝售后")}}})],1)],1):t._e()],1):t._e(),t.fobj.pnote?n("v-uni-view",{staticClass:"formitem"},[n("v-uni-view",{staticClass:"formlabel"},[t._v("客户评论:"+t._s(t.fobj.pnote))])],1):t._e(),n("v-uni-view",t._l(t.fobjgoodlist,(function(i,a){return n("v-uni-view",{key:a,staticClass:"caritem",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toGoodDetail(i.id,1)}}},[n("v-uni-image",{staticClass:"carimg",attrs:{src:t.fileUrl+i.img}}),n("v-uni-view",{staticClass:"carinfo"},[n("v-uni-view",{staticClass:"cartitle"},[t._v(t._s(i.gname))]),n("v-uni-view",{staticClass:"carpricectn"},[n("v-uni-view",{staticClass:"carprice"},[t._v("价格:"+t._s(i.price))])],1)],1)],1)})),1)],1)],1)},s=[]},"76e2":function(t,i,n){var a=n("02fc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("5e19ce68",a,!0,{sourceMap:!1,shadowMode:!1})},9397:function(t,i,n){"use strict";var a=n("76e2"),e=n.n(a);e.a},b70c:function(t,i,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("5530")),s=n("64a0"),o=n("3d88"),c=n("26cb"),l={data:function(){return{popshow:!1,fobj:{},fobjgoodlist:[],fileUrl:s.fileUrl,pingfen:0,rnote:""}},onLoad:function(t){var i=this,n=t.bid;(0,s.findj)({params:{table:"bill",id:n}}).then((function(t){i.fobj=t,i.fobj.table="bill";var n=i.fobj.gids,a="select * from wct_good where id in (".concat(n,")");(0,s.listSqlj)({params:{sql:a}}).then((function(t){i.fobjgoodlist=t})).catch((function(t){}))})).catch((function(t){}))},methods:(0,e.default)((0,e.default)({},(0,c.mapActions)(["updateUserInfo"])),{},{changeBillStatecn:function(t){this.fobj.statecn=t,(0,s.savej)({params:{table:"bill",id:this.fobj.id,statecn:t}}).then((function(t){})).catch((function(t){}))},doShouhou:function(t){this.fobj.shstatecn=t,(0,s.savej)({params:{table:"bill",id:this.fobj.id,shstatecn:this.fobj.shstatecn}}).then((function(t){})).catch((function(t){}))},pingjia:function(){this.fobj.statecn="已评价",this.fobj.pnote=this.rnote,this.fobj.pf=this.pingfen,(0,s.savej)({params:{table:"bill",id:this.fobj.id,pf:this.fobj.pf,pnote:this.fobj.pnote,statecn:this.fobj.statecn}}).then((function(t){})).catch((function(t){}))},goBack:function(){uni.switchTab({url:"/pages/bill/billshop"})},toGoodDetail:o.yewuutil.toGoodDetail,fahuo:function(){var t=this;this.passwd,this.userInfo.passwd;this.fobj.statecn="已发货",(0,s.savej)({params:{table:"bill",statecn:this.fobj.statecn,id:this.fobj.id,kdgs:this.fobj.kdgs,kddh:this.fobj.kddh}}).then((function(i){t.popshow=!1})).catch((function(t){}))},toShouhou:function(){uni.redirectTo({url:"billservice?tid="+this.fobj.id})}}),computed:(0,e.default)({},(0,c.mapState)(["userInfo"]))};i.default=l},e7ff:function(t,i,n){"use strict";n.r(i);var a=n("2548"),e=n("fbd2");for(var s in e)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(s);n("9397");var o=n("f0c5"),c=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"2454962a",null,!1,a["a"],void 0);i["default"]=c.exports},fbd2:function(t,i,n){"use strict";n.r(i);var a=n("b70c"),e=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a}}]);