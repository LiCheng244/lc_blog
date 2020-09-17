(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{206:function(t,a,s){t.exports=s.p+"assets/img/19010115.bdbeef1b.png"},207:function(t,a,s){t.exports=s.p+"assets/img/19010116.8ac23fb3.png"},363:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("UILabel 使用细节")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("引言")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"一-自定义间距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-自定义间距"}},[t._v("#")]),t._v(" 一. 自定义间距")]),t._v(" "),n("h3",{attrs:{id:"_1-行间距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-行间距"}},[t._v("#")]),t._v(" 1. 行间距")]),t._v(" "),n("h4",{attrs:{id:"方法："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法："}},[t._v("#")]),t._v(" 方法：")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 改变 label 行间距")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("lc_changeLineSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("space "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    NSString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("labelText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSMutableAttributedString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("attr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableAttributedString alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("labelText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSMutableParagraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("paragraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableParagraphStyle alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    CGFloat ss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lineSpace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("paragraphStyle setLineSpacing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("attr addAttribute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSParagraphStyleAttributeName value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("paragraphStyle range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSMakeRange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("labelText length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributedText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" sizeToFit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意:")]),t._v(" "),n("p",[t._v("如果我们只设置"),n("code",[t._v("paragraphStyle.lineSpacing = 10")]),t._v(" 会有问题:")]),t._v(" "),n("p",[t._v("红色区域是默认绘制单行文本占用的区域，可以看到文字的上下是有一些空白的。\n红色区域的高度是 "),n("code",[t._v("label.font.lineHeight")]),t._v("，通过计算就可得到要设置的真实行间距："),n("code",[t._v("10 - (label.font.lineHeight - label.font.pointSize);")])]),t._v(" "),n("img",{attrs:{src:s(206),width:"200",height:"200"}}),t._v(" "),n("img",{attrs:{src:s(207),width:"400",height:"200"}}),t._v(" "),n("h3",{attrs:{id:"_2-字间距"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-字间距"}},[t._v("#")]),t._v(" 2. 字间距")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 修改 label 字间距")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("lc_changeWordSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("space "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    NSString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("labelText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSMutableAttributedString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("attr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableAttributedString alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("labelText attributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("NSKernAttributeName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("space"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSMutableParagraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("paragraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableParagraphStyle alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("attr addAttribute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSParagraphStyleAttributeName value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("paragraphStyle range"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSMakeRange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("labelText length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributedText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" sizeToFit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("br"),t._v(" "),n("h2",{attrs:{id:"二-显示-html-数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-显示-html-数据"}},[t._v("#")]),t._v(" 二. 显示 HTML 数据")]),t._v(" "),n("p",[t._v("使用 富文本 "),n("code",[t._v("NSHTMLTextDocumentType")]),t._v(" 实现 :")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[t._v("\tNSString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("htmlStr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"'),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Header"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Subheader"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Some "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("em"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("em"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//blogs.babble.com/famecrawler/files/2010/11/mickey_mouse-1097.jpg' width=70 height=100 />\";")]),t._v("\n    \n    UILabel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UILabel alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSAttributedString "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("attr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSAttributedString alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("htmlStr dataUsingEncoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSUnicodeStringEncoding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                                                options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("NSDocumentTypeDocumentAttribute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NSHTMLTextDocumentType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                                                     documentAttributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil\n                                                                  error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributedText "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("br"),t._v(" "),n("h2",{attrs:{id:"三-计算文本高度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-计算文本高度"}},[t._v("#")]),t._v(" 三. 计算文本高度")]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 计算高度一定要在给 label 设置了文本之后； 要先确保设置了 width 才能去计算高度；")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 计算 size   要先确保设置了 width\n *\n * @param lineS           行间距\n * @param wordS           字间距\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CGSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("lc_computeSizeWithLineSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("lineS\n                            wordSpace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("wordS "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置高度宽度的最大限度")]),t._v("\n    CGSize size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGSizeMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lc_width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MAXFLOAT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算方式")]),t._v("\n    NSStringDrawingOptions options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NSStringDrawingUsesFontLeading "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NSStringDrawingTruncatesLastVisibleLine "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NSStringDrawingUsesLineFragmentOrigin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 富文本")]),t._v("\n    CGFloat ss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lineS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSMutableParagraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("paragraphStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSMutableParagraphStyle alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    paragraphStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineSpacing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSDictionary "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("attributes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("NSFontAttributeName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字号")]),t._v("\n                                 NSParagraphStyleAttributeName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" paragraphStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 行间距")]),t._v("\n                                 NSKernAttributeName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wordS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字间距")]),t._v("\n    \n    CGRect rect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text boundingRectWithSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("size options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("options attributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("attributes context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGSizeMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lc_width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("br")])}),[],!1,null,null,null);a.default=e.exports}}]);