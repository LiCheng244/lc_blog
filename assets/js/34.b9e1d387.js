(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{194:function(t,s,a){t.exports=a.p+"assets/img/19022600.9d4a7418.png"},337:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("UIScrollView 使用细节")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),n("ol",[n("li",[t._v("移动设备的屏幕⼤大⼩小是极其有限的,因此直接展⽰示在⽤用户眼前的内容也相当有限")]),t._v(" "),n("li",[t._v("当展⽰示的内容较多,超出⼀一个屏幕时,⽤用户可通过滚动⼿手势来查看屏幕以外的内容")]),t._v(" "),n("li",[t._v("普通的 UIView 不具备滚动功能,不能显⽰示过多的内容")]),t._v(" "),n("li",[t._v("UIScrollView 是一个能够滚动的视图控件,可以⽤用来展⽰示⼤大量的内容,并且可以通过滚 动查看所有的内容")])])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"i-常用属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-常用属性"}},[t._v("#")]),t._v(" I. 常用属性")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("createScrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    _scrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScrollView alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 设置scrollview内容的尺寸")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 设置内容的偏移量，contentOffset参照contentSize的坐标系")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3. 设置是否回弹")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounces "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4. 设置内容的边距")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentInset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIEdgeInsetsMake")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5. 设置是否可以滚动")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollEnabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//6. 是否可以滚动到内容的顶部（点击状态栏）")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollsToTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//7. 按页滚动")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pagingEnabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8. 是否显示水平和垂直方向的指示器")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showsHorizontalScrollIndicator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showsVerticalScrollIndicator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//9. 设置指示器的样式")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indicatorStyle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIScrollViewIndicatorStyleWhite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10. 设置代理")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    CGFloat imageWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//11. 设置最小和最大缩放比例")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minimumZoomScale "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WIDTH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" imageWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maximumZoomScale "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view addSubview"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("_scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"几个坐标属性示意图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#几个坐标属性示意图"}},[t._v("#")]),t._v(" 几个坐标属性示意图:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(194),alt:""}})]),t._v(" "),n("br"),t._v(" "),n("ol",[n("li",[t._v("UIScrollView 的 "),n("code",[t._v("frame")]),t._v(" 与 "),n("code",[t._v("contentsize")]),t._v(" 属性的区分："),n("code",[t._v("frame")]),t._v(" 指的是这个 scrollview 的可视范围（可看见的区域），"),n("code",[t._v("contentsize")]),t._v(" 是其滚动范围。")]),t._v(" "),n("li",[n("code",[t._v("contentinset")]),t._v("（不带*号的一般不是结构体就是枚举），为 UIScrollView 增加额外的滚动区域。（上，左，下，右）逆时针。")]),t._v(" "),n("li",[n("code",[t._v("contentsize")]),t._v(" 属性只能使用代码设置。")]),t._v(" "),n("li",[n("code",[t._v("contentoffset")]),t._v(" 是个 "),n("code",[t._v("CGpoint")]),t._v(" 类型的结构体，用来记录 ScrollView 的滚动位置，即记录着“框”跑到了哪里。知道了这个属性，就知道了其位置，可以通过设置这个属性来控制这个“框”的移动。")]),t._v(" "),n("li",[t._v("不允许直接修改某个对象内部结构体属性的成员，三个步骤（先拿到值，修改之，再把修改后的值赋回去）。")])]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"ii-代理方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ii-代理方法"}},[t._v("#")]),t._v(" II. 代理方法")]),t._v(" "),n("blockquote",[n("p",[t._v("UIScrollView 有自己的代理方法，在代理方法中有相当全面的调用时机，借用代理方法可以制作多种，ScrollView 的高级使用.")])]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("mark "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" UIScrollViewDelegate")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只要发生滚动，就会调用该方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidScroll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    NSLog(@"scrollview滚动");')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n                                           \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只要zoomScale发生变化，就会调用该方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidZoom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"发生缩放"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始拖动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewWillBeginDragging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"开始拖动"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将要结束拖动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewWillEndDragging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView withVelocity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CGPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("velocity targetContentOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inout CGPoint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("targetContentOffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"将要结束拖动"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拖动结束")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidEndDragging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView willDecelerate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("decelerate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"拖动结束"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将要开始减速")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewWillBeginDecelerating"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"将要开始减速"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 减速结束")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidEndDecelerating"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"减速结束"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//停止滚动")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动动画结束")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidEndScrollingAnimation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"滚动动画结束"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回要缩放的子视图")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewForZoomingInScrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回可以进行缩放的子视图")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subviews"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将要开始缩放")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewWillBeginZooming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView withView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullable UIView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("view "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"将要开始缩放"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放结束")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidEndZooming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView withView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullable UIView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("view atScale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CGFloat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scale"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"缩放结束"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否可以滚动到顶部")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewShouldScrollToTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//scrollToTop = YES,才会调用该方法")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回YES，可以滚动到顶部；NO 不可以")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动到顶部")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidScrollToTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"滚动到顶部"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])])]),n("br")])}),[],!1,null,null,null);s.default=e.exports}}]);