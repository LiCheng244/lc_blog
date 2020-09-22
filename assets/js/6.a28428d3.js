(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(t,s,a){t.exports=a.p+"assets/img/20091103.2343db57.png"},161:function(t,s,a){t.exports=a.p+"assets/img/20091106.adc8dfc0.png"},162:function(t,s,a){t.exports=a.p+"assets/img/20091104.d6521be9.jpeg"},163:function(t,s,a){t.exports=a.p+"assets/img/20091105.e64d7529.jpeg"},186:function(t,s,a){t.exports=a.p+"assets/img/20091701.fee127fd.png"},324:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("关于前端屏幕适配规范")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),n("p",[t._v("适应APP横屏、竖屏， PC版  UI布局")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"一-基础概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-基础概念"}},[t._v("#")]),t._v(" 一. 基础概念")]),t._v(" "),n("h3",{attrs:{id:"_1-canvas（画布）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-canvas（画布）"}},[t._v("#")]),t._v(" 1. Canvas（画布）")]),t._v(" "),n("p",[t._v("组件随时获得设备屏幕的实际分辨率并对场景中所有渲染元素进行适当的缩放")]),t._v(" "),n("h3",{attrs:{id:"_2-widget（对齐挂件）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-widget（对齐挂件）"}},[t._v("#")]),t._v(" 2. Widget（对齐挂件）")]),t._v(" "),n("p",[t._v("放置在渲染元素上，能够根据需要将元素对齐父节点的不同参考位置")]),t._v(" "),n("h3",{attrs:{id:"_3-设计分辨率"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-设计分辨率"}},[t._v("#")]),t._v(" 3. 设计分辨率")]),t._v(" "),n("p",[t._v("游戏在设计制作时场景的分辨率，即 Canvas 中的 Design Resolution 属性，也就是图中紫色边框的区域\n"),n("img",{attrs:{src:a(186),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_4-屏幕分辨率"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-屏幕分辨率"}},[t._v("#")]),t._v(" 4. 屏幕分辨率")]),t._v(" "),n("p",[t._v("顾名思义，就是设备上屏幕的分辨率")]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"二-游戏设计分辨率"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-游戏设计分辨率"}},[t._v("#")]),t._v(" 二. 游戏设计分辨率")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("设备")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("尺寸")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("横屏")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("1334 * 750")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("竖屏")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("750 * 1334")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("PC")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("1920 * 1080")])])])]),t._v(" "),n("p",[t._v("在游戏初始时定义全局模板属性 Template ；\n设置模板类型："),n("code",[t._v("LS（横屏）")]),t._v("、"),n("code",[t._v("PT（竖屏")]),t._v("）、"),n("code",[t._v("PC（PC端）")]),t._v("；")]),t._v(" "),n("p",[t._v("手机端壳内给出当前屏幕的方向，初始化中定义好模板属性。如："),n("code",[t._v("Template = PT; //游戏为竖屏")]),t._v(", 之后的模板属性Template不可更改，此次游戏的状态都为竖屏。")]),t._v(" "),n("p",[t._v("如果是PC状态，由游戏中自己锁定。")]),t._v(" "),n("p",[t._v("美术在设计UI时不可超过当前模板的设计分辨率。")]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"三-游戏的屏幕适配模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-游戏的屏幕适配模式"}},[t._v("#")]),t._v(" 三. 游戏的屏幕适配模式")]),t._v(" "),n("h3",{attrs:{id:"场景适配："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#场景适配："}},[t._v("#")]),t._v(" 场景适配：")]),t._v(" "),n("p",[t._v("取宽高比小的那个值做基准，等比缩放到全屏大小。")]),t._v(" "),n("p",[t._v("这种模式在两边会留下空白部分，可以让美术出一张较大的背景底图垫在背后。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initUILayout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVisibleSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVisibleSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1334")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h3",{attrs:{id:"弹框适配："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#弹框适配："}},[t._v("#")]),t._v(" 弹框适配：")]),t._v(" "),n("p",[t._v("现在所有弹框类型（中心弹出、无动画、右渐入、左渐入等）都无需设置 Weight\n只要 保证 Node.Position 为 0，0 就可以：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(160),alt:""}})]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),n("p",[t._v("五子棋项目，由于 游戏界面 是用 prefab 创建， 所以在关闭弹框时 请谨慎使用 Pop 的 "),n("code",[t._v("removeAll()")]),t._v(" 方法， 该方法会把所有弹出框关闭掉，最终回到当前场景页。")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"四-ui的设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-ui的设计"}},[t._v("#")]),t._v(" 四. UI的设计")]),t._v(" "),n("p",[t._v("在游戏的三种模板属性下，UI也要设计对应的三套。（每个界面都对应有三套布局，除了一些可以通用的小弹窗）")]),t._v(" "),n("h3",{attrs:{id:"横屏："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#横屏："}},[t._v("#")]),t._v(" 横屏：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(161),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"竖屏："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#竖屏："}},[t._v("#")]),t._v(" 竖屏：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(162),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"pc-端："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pc-端："}},[t._v("#")]),t._v(" PC 端：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(163),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"五-代码逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五-代码逻辑"}},[t._v("#")]),t._v(" 五. 代码逻辑")]),t._v(" "),n("p",[t._v("在UI在打开中判断当前的模板属性来打开对应的UI。\n如：\nMainUI，设计有三套，分别为：LS_MainUI、PT_MainUI、PC_MainUI；\n打开UI时：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LS_MainUI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tBreak"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PT_MainUI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tBreak"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tsase "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PC")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PC_MainUI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tBreak"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("三套UI中的可操作单元要完全一致，包括变量和方法，以方便外部调动管理。")])]),t._v(" "),n("p",[t._v("建议把逻辑层和UI层分开，一个逻辑类对应三个UI布局类。\n如：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("Class "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LS_UIA")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布局类（横屏）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ctrl_A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn1Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn2Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nClass "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PT_UIA")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布局类（竖屏）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ctrl_A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn1Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn2Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nClass "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PC_UIA")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布局类（PC）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ctrl_A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn1Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBtn2Click")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nClass Ctrl_A "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//逻辑控制类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onAdd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRemove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickBtn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);