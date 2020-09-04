(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{257:function(t,s,a){t.exports=a.p+"assets/img/18122001.4ffa69b0.png"},411:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("UINavigationBar『导航栏头像缩放』")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),n("p",[t._v("类似简书 个人中心 滚动 头像缩放效果；")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"i-效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-效果"}},[t._v("#")]),t._v(" I. 效果")]),t._v(" "),n("p",[n("img",{attrs:{src:a(257),alt:""}})]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"ii-思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ii-思路"}},[t._v("#")]),t._v(" II. 思路")]),t._v(" "),n("ol",[n("li",[t._v("在"),n("code",[t._v("scrollViewDidScroll")]),t._v("视图滚动的代理方法中，根据视图偏移量来判断图片的状态。")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("CGAffineTransformMakeScale")]),t._v("来实时缩放图片。")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"iii-核心代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iii-核心代码"}},[t._v("#")]),t._v(" III. 核心代码")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("mark "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UIScrollViewDelegate"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前视图y值偏移量 + tableView 的顶部的内边距")]),t._v("\n    CGFloat contentSet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userTableView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentInset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contentSet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" contentSet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" IconImgViewWidth"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 头像的下半部分还没有偏移到导航栏时")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 偏移量 0 - IconImgViewWidth/2 图片逐渐缩小")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 偏移量 IconImgViewWidth/2 - 0 图片逐渐放大")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGAffineTransformMakeScale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("contentSet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("IconImgViewWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("contentSet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("IconImgViewWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contentSet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" IconImgViewWidth"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向上滚动 超过固定高度后， 图片变为原来的一半大小")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGAffineTransformMakeScale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contentSet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在正常界面向下拉时，界面不变")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGAffineTransformMakeScale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconImgView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     *      CGAffineTransformMakeScale\n\n     *  缩放效果  两个参数： 代表宽，高的缩放比例\n     */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])])]),n("br")])}),[],!1,null,null,null);s.default=e.exports}}]);