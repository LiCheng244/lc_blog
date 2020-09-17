(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{382:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("强制转换屏幕方向")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),s("p",[t._v("iOS App中大多数页面是只展示竖屏下的效果，但是少部分页面需要支持横竖屏。\n比如：视频播放类 APP，肯定不会只有小窗口播放，播放器界面要支持横竖屏切换。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"一-前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-前提"}},[t._v("#")]),t._v(" 一. 前提")]),t._v(" "),s("p",[s("strong",[t._v("想要强制转换到某个方向，前提是: 项目中必须设置支持要旋转的方向。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"二-代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-代码实现"}},[t._v("#")]),t._v(" 二. 代码实现")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("interfaceOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIInterfaceOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("orientation\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIDevice currentDevice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" respondsToSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n        SEL selector  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSelectorFromString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"setOrientation:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        NSInvocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("invocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSInvocation invocationWithMethodSignature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIDevice instanceMethodSignatureForSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setSelector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIDevice currentDevice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从2开始是因为0 1 两个参数已经被selector和target占用")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation setArgument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("val atIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invocation invoke"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"三-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-使用"}},[t._v("#")]),t._v(" 三. 使用")]),t._v(" "),s("h3",{attrs:{id:"_1-设置屏幕方向："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置屏幕方向："}},[t._v("#")]),t._v(" 1. 设置屏幕方向：")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" interfaceOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIInterfaceOrientationLandscapeLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-获取当前屏幕方向："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取当前屏幕方向："}},[t._v("#")]),t._v(" 2. 获取当前屏幕方向：")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v(" UIInterfaceOrientation orientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIApplication sharedApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" statusBarOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);