(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-posts-postslist"],{"5b1a":function(t,e,n){"use strict";n.r(e);var a=n("f7b6"),i=n("b410");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"3eac0963",null,!1,a["a"],void 0);e["default"]=s.exports},"6e3a":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("64a0"),u=n("26cb"),s=a(n("51fe")),c=(n("3d88"),{data:function(){return{fobjList:[],ftype:1,ptitle:"我的发帖"}},components:{imgList:s.default},onLoad:function(t){var e=this,n=this.userInfo.id;this.ftype=t.type,this.ftype,this.ptitle="我的发帖",(0,o.listj)({params:{table:"posts",uid:n,type:this.ftype}}).then((function(t){e.fobjList=t})).catch((function(t){}))},onShow:function(){},methods:(0,i.default)((0,i.default)({},(0,u.mapActions)(["updateUserInfo"])),{},{postsMg:function(t){console.log("------------------\x3e:aid:"+t),uni.redirectTo({url:"./postsmg?totype=2&type="+this.ftype+"&tid="+t})},goBack:function(){uni.switchTab({url:"/pages/me/me"})}}),computed:(0,i.default)({},(0,u.mapState)(["userInfo"]))});e.default=c},b410:function(t,e,n){"use strict";n.r(e);var a=n("6e3a"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f7b6:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("ca28").default,uButton:n("99f7").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:t.ptitle,border:!0,placeholder:!0,autoBack:!1},on:{leftClick:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),n("v-uni-scroll-view",{staticClass:"svcontainer",attrs:{"enable-flex":!0}},[n("v-uni-view",{staticClass:"hpaddingctn"},[n("u-button",{attrs:{type:"primary",text:"新增"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.postsMg()}}})],1),n("imgList",{attrs:{imgSize:20,titleName:"title",dataList:t.fobjList,tName:"username",sName:"ndate"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.postsMg.apply(void 0,arguments)}}})],1)],1)},o=[]}}]);