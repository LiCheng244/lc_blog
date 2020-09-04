(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{346:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("关于 frame、bounds 和 center")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("引言：")]),t._v(" "),a("p",[t._v("每个视图有两个属性："),a("code",[t._v("frame")]),t._v("和"),a("code",[t._v("bounds")]),t._v("。这两个属性都是一个简单的数据结构，叫做"),a("code",[t._v("CGRect")]),t._v("，其中定义了一个原点(x，y), 以及一个尺寸(宽度, 高度)。虽然相似, 实际上视图的frame和bounds有不同的定义和用途。")]),t._v(" "),a("p",[t._v("通过以下属性可以修改控件的位置:\t"),a("code",[t._v("frame.origin")]),t._v(", "),a("code",[t._v("center")]),t._v(";\n通过以下属性可以修改控件的尺寸: "),a("code",[t._v("frame.size")]),t._v(", "),a("code",[t._v("bounds.size")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"i-frame"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-frame"}},[t._v("#")]),t._v(" I. frame")]),t._v(" "),a("p",[t._v("视图的"),a("code",[t._v("frame")]),t._v("定义了一个矩形的宽和高, 以及一个原点, 原点的值是该视图的原点在父视图中的位置。")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("floatView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"ii-bounds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-bounds"}},[t._v("#")]),t._v(" II. bounds")]),t._v(" "),a("p",[t._v("视图的"),a("code",[t._v("bounds")]),t._v("也定义了宽和高, 但是原点是相对于当前视图的值，并且通常是(0, 0)。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"iii-center"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-center"}},[t._v("#")]),t._v(" III. center")]),t._v(" "),a("p",[a("code",[t._v("center")]),t._v("为视图的中心点, 是基于 frame 的 "),a("code",[t._v("origin")]),t._v(" 和 "),a("code",[t._v("size")]),t._v(" 决定的。")]),t._v(" "),a("p",[t._v("center 是一个结构体,包含x和y。")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \ncenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"iv-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iv-总结"}},[t._v("#")]),t._v(" IV. 总结")]),t._v(" "),a("p",[a("strong",[t._v("frame 修改,  会影响到 center 和 bounds")])]),t._v(" "),a("p",[a("strong",[t._v("center 修改,  会影响 frame,  bounds 不发生变化")])]),t._v(" "),a("p",[a("strong",[t._v("bounds 修改,  会影响到 frame 和 center")])]),t._v(" "),a("br")])}),[],!1,null,null,null);s.default=n.exports}}]);