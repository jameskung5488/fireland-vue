webpackJsonp([15],{"6kSq":function(t,n){},XKUF:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("iCWw"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var c=e("jYid");var o=function(t){e("6kSq")},r=e("VU/8")(i.a,c.a,!1,o,"data-v-9269f02e",null);n.default=r.exports},iCWw:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["account"],ready:function(){},methods:{login:function(t){this.$emit("requestId")},toland:function(t){location.href="/#/game/land"}}}},jYid:function(t,n,e){"use strict";var a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-container"},[e("div",[e("b-img",{staticClass:"logo",attrs:{src:"https://gw.alicdn.com/tfs/TB1tdCOnAzoK1RjSZFlXXai4VXa-1024-1024.png"}}),t._v(" "),e("span",{staticClass:"logo-title"},[t._v("EOS国土无双")])],1),t._v(" "),e("div",{staticClass:"header-left"},[t.account?t._e():e("el-button",{staticClass:"login-button",attrs:{type:"danger"},on:{click:t.login}},[t._v("登录(EOS)账户")]),t._v(" "),t.account?e("div",{staticClass:"login-account-name",attrs:{type:"primary"}},[t._v(t._s(t.account.name))]):t._e()],1)])},staticRenderFns:[]};n.a=a}});