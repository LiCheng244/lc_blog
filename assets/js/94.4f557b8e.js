(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{348:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("关于 loadView 、viewDidLoad 和 viewDidUnload")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),e("p",[t._v("loadView 和 viewDidLoad 是 iPhone 开发中肯定要用到的两个方法。 他们都可以用来在视图载入的时候初始化一些内容。 但是他们有什么区别呢？")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"i-loadview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-loadview"}},[t._v("#")]),t._v(" I. loadView")]),t._v(" "),e("h3",{attrs:{id:"什么时候被调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候被调用"}},[t._v("#")]),t._v(" 什么时候被调用?")]),t._v(" "),e("p",[t._v("每次访问"),e("code",[t._v("UIViewController")]),t._v("的"),e("code",[t._v("view")]),t._v("(比如controller.view、self.view)而且view 为"),e("code",[t._v("nil")]),t._v(", loadView方法就会被调用。")]),t._v(" "),e("h3",{attrs:{id:"有什么作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有什么作用"}},[t._v("#")]),t._v(" 有什么作用?")]),t._v(" "),e("p",[t._v("loadView方法是用来负责创建UIViewController的view")]),t._v(" "),e("h3",{attrs:{id:"默认实现是怎样的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认实现是怎样的"}},[t._v("#")]),t._v(" 默认实现是怎样的?")]),t._v(" "),e("p",[t._v("即"),e("code",[t._v("[super loadView]")]),t._v("里面做了什么事情。")]),t._v(" "),e("p",[e("strong",[t._v("一:")]),t._v("\n它会先去查找与"),e("code",[t._v("UIViewController")]),t._v("相关联的xib文件,通过加载xib文件来创建UIViewController 的view。\n如果在初始化"),e("code",[t._v("UIViewController")]),t._v("指定了xib文件名,就会根据传入的xib文件名加载对应的xib文件"),e("code",[t._v('[[MJViewController alloc] initWithNibName:@"MJViewController" bundle:nil];')]),t._v("\n如果没有明显地传xib文件名,就会加载跟UIViewController同名的xib文件 "),e("code",[t._v("[[MJViewController alloc] init];")]),t._v(" // 加载MJViewController.xib")]),t._v(" "),e("p",[e("strong",[t._v("二:")]),t._v("\n如果没有找到相关联的xib文件,就会创建一个空白的"),e("code",[t._v("UIView")]),t._v(",然后赋值给UIViewController的 view 属性,大致如下:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIView alloc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// applicationFrame的值是:{{x = 0, y = 20}, {width = 320, height = 460}}")]),t._v("\n")])])]),e("h3",{attrs:{id:"怎样正确使用这个方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎样正确使用这个方法"}},[t._v("#")]),t._v(" 怎样正确使用这个方法?")]),t._v(" "),e("p",[t._v("大家都知道"),e("code",[t._v("UIViewControlle")]),t._v("r的view可以通过xib文件来创建,但是在某些情况下,xib不是那么地灵活,所以有时候我们想通过代码来创建UIView,比如:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIWebView alloc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("如果想通过代码来创建UIViewController的view, 就要重写loadView方法,并且不需要调用"),e("code",[t._v("[super loadView]")]),t._v(", 因为在第3点里面已经提到:若没有xib文件,"),e("code",[t._v("[super loadView]")]),t._v("默认会创建一个空白的"),e("code",[t._v("UIView")]),t._v("。我们既然要通过代码来自定义UIView,那么就没必要事先创建一个空白的UIView,以节省不必要的开销。正确的做法应该是这样:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("loadView "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIWebView alloc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationFrame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("不需要调用"),e("code",[t._v("[super loadView]")]),t._v(",你调用了也不会出错,只是造成了一些不必要的开销。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),e("p",[t._v("总结一句话,苹果设计这个方法就是给我们自定义UIViewController的view用的.")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"ii-viewdidload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ii-viewdidload"}},[t._v("#")]),t._v(" II. viewDidLoad")]),t._v(" "),e("h3",{attrs:{id:"什么时候被调用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候被调用-2"}},[t._v("#")]),t._v(" 什么时候被调用?")]),t._v(" "),e("p",[t._v("无论你是通过xib文件还是重写"),e("code",[t._v("loadView")]),t._v("方法创建UIViewController的view,在view创建完毕后,最终都会调用"),e("code",[t._v("viewDidLoad")]),t._v("方法。")]),t._v(" "),e("h3",{attrs:{id:"有什么作用-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有什么作用-2"}},[t._v("#")]),t._v(" 有什么作用?")]),t._v(" "),e("p",[t._v("一般我们会在这里做界面上的初始化操作,比如往view中添加一些子视图、从数据库或者网络加载模型数据 装配到子视图中。例如:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("­ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加一个按钮")]),t._v("\n    UIButton "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("button "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIButton buttonWithType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("UIButtonTypeContactAdd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("button addTarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("click"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nforControlEvents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("UIControlEventTouchUpInside"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view addSubview"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("h2",{attrs:{id:"iii-viewdidunload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iii-viewdidunload"}},[t._v("#")]),t._v(" III. viewDidUnload")]),t._v(" "),e("h3",{attrs:{id:"什么时候被调用-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候被调用-3"}},[t._v("#")]),t._v(" 什么时候被调用?")]),t._v(" "),e("p",[t._v("iOS设备的内存是极其有限的,如果应用程序占用的内存过多的话,系统就会对应用程序发出内存警告。"),e("code",[t._v("UIViewController")]),t._v(" 就会收到"),e("code",[t._v("didReceiveMemoryWarning")]),t._v("消息。")]),t._v(" "),e("p",[e("code",[t._v("didReceiveMemoryWarning")]),t._v("方法的默认实现是:\n如果当前UIViewController的view不在应用程序的视图层次结构(View Hierarchy) 中, 即view的superview为nil的时候, 就会将view释放, 并且调用 "),e("code",[t._v("viewDidUnload")]),t._v(" 方法。")]),t._v(" "),e("h3",{attrs:{id:"有什么作用-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有什么作用-3"}},[t._v("#")]),t._v(" 有什么作用?")]),t._v(" "),e("p",[t._v("上面说到,发出内存警告且view被释放的时候就会调用"),e("code",[t._v("viewDidUnload")]),t._v("方法,所以一般在释放资源,主要是释放界面元素相关的资源,将相关的实例都赋值为nil:")]),t._v(" "),e("div",{staticClass:"language-objectivec extra-class"},[e("pre",{pre:!0,attrs:{class:"language-objectivec"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidUnload "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidUnload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pwd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"dealloc也是用来释放资源的-那跟viewdidunload有什么关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dealloc也是用来释放资源的-那跟viewdidunload有什么关系"}},[t._v("#")]),t._v(" dealloc也是用来释放资源的,那跟viewDidUnload有什么关系?")]),t._v(" "),e("p",[t._v("当发出内存警告调用"),e("code",[t._v("viewDidUnload")]),t._v("方法时,只是释放了"),e("code",[t._v("view")]),t._v(",并没有释放"),e("code",[t._v("UIViewController")]),t._v(",所以并不会调用"),e("code",[t._v("dealloc")]),t._v("方法。\n即"),e("code",[t._v("viewDidUnload")]),t._v("和"),e("code",[t._v("dealloc")]),t._v("方法并没有任何关系, "),e("code",[t._v("dealloc")]),t._v("方法只会在"),e("code",[t._v("UIViewController")]),t._v("被释放的时候调用。")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"iv-三者的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iv-三者的关系"}},[t._v("#")]),t._v(" IV.三者的关系")]),t._v(" "),e("ol",[e("li",[t._v("第一次访问"),e("code",[t._v("UIViewController")]),t._v("的"),e("code",[t._v("view")]),t._v("时,view为"),e("code",[t._v("nil")]),t._v(",然后就会调用"),e("code",[t._v("loadView")]),t._v("方法创建view ;")]),t._v(" "),e("li",[t._v("view创建完毕后会调用"),e("code",[t._v("viewDidLoad")]),t._v("方法进行界面元素的初始化;")]),t._v(" "),e("li",[t._v("当内存警告时,系统可能会释放UIViewController的view,将view赋值为nil,并且调 用"),e("code",[t._v("viewDidUnload")]),t._v("方法;")]),t._v(" "),e("li",[t._v("当再次访问UIViewController的view时,view已经在3中被赋值为nil,所以又会调用"),e("code",[t._v("loadView")]),t._v("方法 重新创建view;")]),t._v(" "),e("li",[t._v("view被重新创建完毕后,还是会调用"),e("code",[t._v("viewDidLoad")]),t._v("方法进行界面元素的初始化。")])]),t._v(" "),e("br")])}),[],!1,null,null,null);a.default=n.exports}}]);