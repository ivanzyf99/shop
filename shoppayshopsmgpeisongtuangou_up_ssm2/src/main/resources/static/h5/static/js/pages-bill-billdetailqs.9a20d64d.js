(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bill-billdetailqs"],{"61e8":function(t,i,e){"use strict";var n=e("7220"),a=e.n(n);a.a},7220:function(t,i,e){var n=e("ac90");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7e9f67e4",n,!0,{sourceMap:!1,shadowMode:!1})},ac90:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.caritem[data-v-1eb3c98b]{display:flex;width:100%;height:%?200?%;background-color:#fafafa;align-items:center;padding:%?10?%;margin:%?10?% 0}.carimg[data-v-1eb3c98b]{width:%?180?%;height:%?180?%;margin-right:%?10?%}.carinfo[data-v-1eb3c98b]{height:100%;display:flex;flex-direction:column;justify-content:space-around;flex:1}.cartitle[data-v-1eb3c98b]{font-size:%?26?%}.carpricectn[data-v-1eb3c98b]{display:flex;justify-content:space-between;width:100%}.carprice[data-v-1eb3c98b]{color:red;font-size:%?25?%}',""]),t.exports=i},b044:function(t,i,e){"use strict";e.r(i);var n=e("e47b"),a=e("b3f9");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("61e8");var o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1eb3c98b",null,!1,n["a"],void 0);i["default"]=c.exports},b3f9:function(t,i,e){"use strict";e.r(i);var n=e("c1d7"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},c1d7:function(t,i,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5530")),s=e("64a0"),o=e("3d88"),c=e("26cb"),r={data:function(){return{fobj:{},fobjgoodlist:[],fileUrl:s.fileUrl,pingfen:0,rnote:"",money:2}},onLoad:function(t){var i=this,e=t.bid;(0,s.findj)({params:{table:"bill",id:e}}).then((function(t){i.fobj=t,i.fobj.table="bill";var e=i.fobj.gids,n="select * from wct_good where id in (".concat(e,")");(0,s.listSqlj)({params:{sql:n}}).then((function(t){i.fobjgoodlist=t})).catch((function(t){}))})).catch((function(t){}))},methods:(0,a.default)((0,a.default)({},(0,c.mapActions)(["updateUserInfo"])),{},{changeBillStatecn:function(t){var i=this;this.fobj.statecn=t,(0,s.savej)({params:{table:"bill",id:this.fobj.id,statecn:t}}).then((function(t){i.charge()})).catch((function(t){}))},charge:function(){if(this.money>0){var t=this.userInfo.money||0,i=1*t+1*this.money;this.userInfo.money=i,this.updateUserInfo(this.userInfo),(0,s.savej)({params:{table:"user",id:this.userInfo.id,money:i}}).then((function(t){}))}},doShouhou:function(t){this.fobj.shstatecn=t,(0,s.savej)({params:{table:"bill",id:this.fobj.id,shstatecn:this.fobj.shstatecn}}).then((function(t){})).catch((function(t){}))},pingjia:function(){this.fobj.statecn="已评价",this.fobj.pnote=this.rnote,this.fobj.pf=this.pingfen,(0,s.savej)({params:{table:"bill",id:this.fobj.id,pf:this.fobj.pf,pnote:this.fobj.pnote,statecn:this.fobj.statecn}}).then((function(t){})).catch((function(t){}))},goBack:function(){uni.redirectTo({url:"/pages/bill/billqs"})},toGoodDetail:o.yewuutil.toGoodDetail,inputDialogToggle:function(){this.$refs.inputDialog.open("bottom")},jiedan:function(){var t=this;this.fobj.qid=this.userInfo.id,this.fobj.qusername=this.userInfo.username,this.fobj.qtel=this.userInfo.tel,this.fobj.statecn="已接单",(0,s.savej)({params:{table:"bill",statecn:this.fobj.statecn,id:this.fobj.id,qid:this.fobj.qid,qusername:this.fobj.qusername,qtel:this.fobj.qtel}}).then((function(i){t.$refs.inputDialog.close()})).catch((function(t){}))},toShouhou:function(){uni.redirectTo({url:"billservice?tid="+this.fobj.id})}}),computed:(0,a.default)({},(0,c.mapState)(["userInfo"]))};i.default=r},e47b:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uNavbar:e("ca28").default,uButton:e("99f7").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("u-navbar",{attrs:{title:"订单详情",border:!0,placeholder:!0,autoBack:!1},on:{leftClick:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}}),e("v-uni-scroll-view",{staticClass:"svcontainer",attrs:{"enable-flex":!0}},[e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("总价:"+t._s(t.fobj.total)+"元")])],1),e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel"},[t._v("商品信息:"+t._s(t.fobj.gnames))])],1),e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("状态:"+t._s(t.fobj.statecn))])],1),e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel"},[t._v("收货信息:"+t._s(t.fobj.address))])],1),e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel",staticStyle:{color:"red"}},[t._v("配送费:2元")])],1),e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel"},[t._v("订单日期:"+t._s(t.fobj.ndate))])],1),t.fobj.qid?e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel"},[t._v("团长信息:"+t._s(t.fobj.qusername+" "+t.fobj.qtel))])],1):t._e(),"待领取"===t.fobj.statecn?e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"hpaddingctn"},[e("u-button",{attrs:{type:"error",text:"接单"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jiedan()}}})],1)],1):t._e(),"已接单"===t.fobj.statecn?e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"hpaddingctn"},[e("u-button",{attrs:{type:"error",text:"配送中"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeBillStatecn("配送中")}}})],1)],1):t._e(),"配送中"===t.fobj.statecn?e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"hpaddingctn"},[e("u-button",{attrs:{type:"success",text:"已领取"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeBillStatecn("已领取")}}})],1)],1):t._e(),t.fobj.pnote?e("v-uni-view",{staticClass:"formitem"},[e("v-uni-view",{staticClass:"formlabel"},[t._v("客户评论:"+t._s(t.fobj.pnote))])],1):t._e(),e("v-uni-view",t._l(t.fobjgoodlist,(function(i,n){return e("v-uni-view",{key:n,staticClass:"caritem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodDetail(i.id,1)}}},[e("v-uni-image",{staticClass:"carimg",attrs:{src:t.fileUrl+i.img}}),e("v-uni-view",{staticClass:"carinfo"},[e("v-uni-view",{staticClass:"cartitle"},[t._v(t._s(i.gname))]),e("v-uni-view",{staticClass:"carpricectn"},[e("v-uni-view",{staticClass:"carprice"},[t._v("价格:"+t._s(i.price))])],1)],1)],1)})),1)],1)],1)},s=[]}}]);