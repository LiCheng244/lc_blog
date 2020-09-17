(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{387:function(t,s,r){"use strict";r.r(s);var a=r(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",[t._v("iOS9.0+ http协议无法请求问题")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),r("p",[t._v("iOS9引入了新特性"),r("code",[t._v("App Transport Security (ATS)")]),t._v("。")]),t._v(" "),r("p",[t._v("新特性要求App内访问的网络必须使用HTTPS协议。但是现在公司的项目使用的是HTTP协议，使用私有加密方式保证数据安全。现在也不能马上改成HTTPS协议传输。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"一-通过info-plist文件解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-通过info-plist文件解决"}},[t._v("#")]),t._v(" 一. 通过Info.plist文件解决")]),t._v(" "),r("p",[t._v("在Info.plist中添加 "),r("code",[t._v("NSAppTransportSecurity")]),t._v("类型为:"),r("code",[t._v("Dictionary")]),t._v("。\n在 "),r("code",[t._v("NSAppTransportSecurity")]),t._v(" 下添加 "),r("code",[t._v("NSAllowsArbitraryLoads")]),t._v(" 类型"),r("code",[t._v("为Boolean")]),t._v(", 值设为"),r("code",[t._v("YES")]),t._v("。")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"二-通过代码解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-通过代码解决"}},[t._v("#")]),t._v(" 二. 通过代码解决")]),t._v(" "),r("p",[t._v("将Info.plist文件 "),r("code",[t._v("Source Code")]),t._v(" 打开, 输入下面代码:")]),t._v(" "),r("div",{staticClass:"language-objectivec extra-class"},[r("pre",{pre:!0,attrs:{class:"language-objectivec"}},[r("code",[t._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("NSAppTransportSecurity"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("key"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dict"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("NSAllowsArbitraryLoads"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("key"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("true"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dict"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),r("br")])}),[],!1,null,null,null);s.default=e.exports}}]);