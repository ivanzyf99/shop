(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-brand-brand"],{"0206":function(n,t,e){"use strict";e.r(t);var r=e("fff5"),a=e("145f");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("4969");var u=e("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"7d36922b",null,!1,r["a"],void 0);t["default"]=c.exports},"0467":function(n,t,e){var r=e("12a6");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var a=e("4f06").default;a("602fb228",r,!0,{sourceMap:!1,shadowMode:!1})},"12a6":function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.gridlistctn[data-v-7d36922b]{display:flex;flex-wrap:wrap}.gitem[data-v-7d36922b]{width:25%;padding:%?20?%;height:%?230?%}.gitem uni-image[data-v-7d36922b]{width:100%;border-radius:50%}.gitem uni-view[data-v-7d36922b]{text-align:center}',""]),n.exports=t},"145f":function(n,t,e){"use strict";e.r(t);var r=e("920b"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},4969:function(n,t,e){"use strict";var r=e("0467"),a=e.n(r);a.a},8525:function(n,t,e){"use strict";e.r(t);var r=e("c8bac"),a=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);t["default"]=a.a},"920b":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e("64a0"),a={name:"grid-menu",props:{dataList:{type:Array,require:!1,default:function(){return[]}},clickItem:{type:Function,default:null}},data:function(){return{fileUrl:r.fileUrl}},methods:{fatherFun:function(n){this.$emit("clickItem",n)}}};t.default=a},b75c:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var r={uNavbar:e("ca28").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("u-navbar",{attrs:{title:"品牌列表",border:!0,placeholder:!0,autoBack:!1},on:{leftClick:function(t){arguments[0]=t=n.$handleEvent(t),n.goBack.apply(void 0,arguments)}}}),e("v-uni-scroll-view",{staticClass:"svcontainer",attrs:{"enable-flex":!0}},[e("gridMenu",{attrs:{dataList:n.fobjList},on:{clickItem:function(t){arguments[0]=t=n.$handleEvent(t),n.brandGoods.apply(void 0,arguments)}}})],1)],1)},i=[]},bc5d:function(n,t,e){"use strict";e.r(t);var r=e("b75c"),a=e("8525");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);var u=e("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"675da7e7",null,!1,r["a"],void 0);t["default"]=c.exports},c8bac:function(n,t,e){"use strict";e("7a82");var r=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(e("5530")),i=e("64a0"),u=e("26cb"),c=r(e("0206")),o={components:{gridMenu:c.default},data:function(){return{fobjList:[],fileUrl:i.fileUrl}},onLoad:function(n){var t=this;(0,i.listj)({params:{table:"brand"}}).then((function(n){t.fobjList=n})).catch((function(n){}))},methods:{goBack:function(){uni.ytool.toIndex()},brandGoods:function(n){uni.navigateTo({url:"/pages/brand/brandgoods?ppid="+n})}},computed:(0,a.default)({},(0,u.mapState)(["userInfo"]))};t.default=o},fff5:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"gridlistctn"},n._l(n.dataList,(function(t,r){return e("v-uni-view",{key:r,staticClass:"gitem",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.fatherFun(t.id)}}},[e("v-uni-image",{attrs:{src:n.fileUrl+t.img,mode:"widthFix"}}),e("v-uni-view",[n._v(n._s(t.title))])],1)})),1)],1)},a=[]}}]);