(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{220:function(t,o,a){t.exports=a.p+"assets/img/19010122.0fde03fd.png"},221:function(t,o,a){t.exports=a.p+"assets/img/19010123.32fec019.png"},378:function(t,o,a){"use strict";a.r(o);var n=a(6),s=Object(n.a)({},(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("关于 position 与 anchorPoint")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("引言：")]),t._v(" "),n("p",[t._v("每一个UIView内部都默认关联着一个"),n("code",[t._v("CALayer")]),t._v(",  UIView有"),n("code",[t._v("frame")]),t._v("、"),n("code",[t._v("bounds")]),t._v("和"),n("code",[t._v("center")]),t._v("三个属性;"),n("br"),t._v("\nCALayer也有类似的属性，分别为"),n("code",[t._v("frame")]),t._v("、"),n("code",[t._v("bounds")]),t._v("、"),n("code",[t._v("position")]),t._v("、 "),n("code",[t._v("anchorPoint")]),t._v("。")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"一-anchorpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-anchorpoint"}},[t._v("#")]),t._v(" 一. anchorPoint")]),t._v(" "),n("h3",{attrs:{id:"_1-什么是anchorpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是anchorpoint"}},[t._v("#")]),t._v(" 1. 什么是anchorPoint ?")]),t._v(" "),n("p",[t._v("举例: 把一张A4白纸用图钉订在书桌上，如果订得不是 很紧的话，白纸就可以沿顺时针或逆时针方向围绕图钉旋转，这时候图钉就起着支点的作用。我们要解释的"),n("code",[t._v("anchorPoint")]),t._v(" 就相当于白纸上的图钉，它主要的作用就是用来作为变换的支点，旋转就是一种变换，类似的还有平移、缩放。")]),t._v(" "),n("p",[t._v("白纸的旋转形态随图钉的位置不同而不同，图钉订在白纸的正中间 与左上角时分别造就了两种旋转形态，这是由图钉（anchorPoint）的位置决定的。")]),t._v(" "),n("h3",{attrs:{id:"_2-如何衡量图钉（anchorpoint）在白纸中的位置呢？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何衡量图钉（anchorpoint）在白纸中的位置呢？"}},[t._v("#")]),t._v(" 2. 如何衡量图钉（anchorPoint）在白纸中的位置呢？")]),t._v(" "),n("p",[t._v("在 iOS中，anchorPoint点的值是用一种相对bounds的比例值来确定的，在白纸的左上角、右下角，anchorPoint分为为(0,0), (1, 1)，**也就是说anchorPoint是在单元坐标空间(同时也是左手坐标系)中定义的。**类似地，可以得出在白纸的中心点、左下角和右上角的 anchorPoint为(0.5,0.5), (0,1), (1,0)。")]),t._v(" "),n("p",[t._v("然后再来看下面两张图，注意图中分iOS与MacOS，因为两者的坐标系不相同，iOS使用左手坐标系，坐标原点在左上角，MacOS使用右手坐标系，原点在左下角，我们看iOS部分即可:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(220),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(221),alt:""}})]),t._v(" "),n("p",[t._v("像UIView有"),n("code",[t._v("superView")]),t._v("与"),n("code",[t._v("subView")]),t._v("的概念一样，CALayer 也有"),n("code",[t._v("superLayer")]),t._v("与"),n("code",[t._v("layer")]),t._v("的概念，前面说到的白纸和图中的矩形可以理解为layer，书桌和图中矩形以外的坐标系可以理解成 superLayer。如果各自以左上角为原点，则在图中有相对的两个坐标空间。")]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"二-position"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-position"}},[t._v("#")]),t._v(" 二. position")]),t._v(" "),n("p",[t._v("在图1中，anchorPoint有(0.5,0.5)和(0,0)两种情况，分别为矩形的中心点与原点。那么，这两个anchorPoint在superLayer中的实际位置分别为多少呢？简单计算一下就可以得到(100, 100)和(40, 60)，把这两个值分别与各自的position值比较，发现完全一致，该不会是巧合？")]),t._v(" "),n("p",[t._v("这时候可以大胆猜测一下，position是不是就是"),n("code",[t._v("anchorPoint")]),t._v(" 在 "),n("code",[t._v("superLayer")]),t._v(" 中的位置呢？答案是确定的。更确切地说，"),n("strong",[t._v("position是layer中的anchorPoint点在superLayer中的位置坐标。")])]),t._v(" "),n("p",[t._v("因此可以说, "),n("code",[t._v("position")]),t._v("点是相对"),n("code",[t._v("suerLayer")]),t._v("的，"),n("code",[t._v("anchorPoint")]),t._v("点是相对"),n("code",[t._v("layer")]),t._v("的，两者是相对不同的坐标空间的一个重合点。")]),t._v(" "),n("p",[t._v("再来看看position的原始定义：")]),t._v(" "),n("blockquote",[n("p",[t._v("The layer’s position in its superlayer’s coordinate space。")])]),t._v(" "),n("p",[t._v("中文可以理解成为position是layer相对superLayer坐标空间的位置，很显然，这里的位置是根据anchorPoint来确定的。")]),t._v(" "),n("p",[t._v("图2中是矩形沿不同的anchorPoint点旋转的形态，这就是类似于刚才讲的图钉订在白纸的正中间与左上角时分别造就了两种旋转形态。")]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"三-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-总结"}},[t._v("#")]),t._v(" 三. 总结")]),t._v(" "),n("p",[n("code",[t._v("position")]),t._v("是"),n("code",[t._v("layer")]),t._v("中的"),n("code",[t._v("anchorPoint")]),t._v("在"),n("code",[t._v("superLayer")]),t._v("中的位置坐标。")]),t._v(" "),n("p",[t._v("互不影响原则：单独修改"),n("code",[t._v("position")]),t._v("与"),n("code",[t._v("anchorPoint")]),t._v("中任何一个属性都不影响另一个属性。")]),t._v(" "),n("p",[t._v("frame、position与anchorPoint有以下关系：")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[t._v("frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width；  \nframe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" anchorPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height； \n")])])]),n("br")])}),[],!1,null,null,null);o.default=s.exports}}]);