(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{397:function(i,v,_){"use strict";_.r(v);var a=_(6),t=Object(a.a)({},(function(){var i=this,v=i.$createElement,_=i._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[_("h1",[i._v(" +(void)load和+(void)initialize的区别 ")]),i._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[i._v("引言:")]),i._v(" "),_("p",[i._v("官方文档给出的区别:")]),i._v(" "),_("p",[_("code",[i._v("load")]),i._v("是只要类所在文件被引用就会被调用，而"),_("code",[i._v("initialize")]),i._v("是在类或者其子类的第一个方法被调用前调用。所以如果类没有被引用进项目，就不会有"),_("code",[i._v("load")]),i._v("调用；但即使类文件被引用进来，但是没有使用，那么"),_("code",[i._v("initialize")]),i._v("也不会被调用。")])]),i._v(" "),_("br"),i._v(" "),_("h2",{attrs:{id:"一-load和initialize的共同特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-load和initialize的共同特点"}},[i._v("#")]),i._v(" 一. load和initialize的共同特点")]),i._v(" "),_("ul",[_("li",[i._v("在不考虑开发者主动使用的情况下, 两个方法系统最多会调用一次 ;")]),i._v(" "),_("li",[i._v("如果父类和子类都被调用，父类的调用一定在子类之前 ;")]),i._v(" "),_("li",[i._v("都是为了应用运行提前创建合适的运行环境 ;")]),i._v(" "),_("li",[i._v("在使用时都不要过重地依赖于这两个方法，除非真正必要 ;")])]),i._v(" "),_("br"),i._v(" "),_("h2",{attrs:{id:"二-load方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-load方法"}},[i._v("#")]),i._v(" 二. +load方法")]),i._v(" "),_("ul",[_("li",[i._v("调用时机比较早，运行环境有不确定因素。通常都是 App 启动前进行调用，当 "),_("code",[i._v("load")]),i._v(" 调用的时候，并不能保证所有类都加载完成且可用，必要时还要自己负责做"),_("code",[i._v("auto release")]),i._v("处理;")]),i._v(" "),_("li",[i._v("load类所在文件被引用就会调用, 如果没有被引用到项目中, 就不会调用;")]),i._v(" "),_("li",[i._v("如果子类没有实现该方法, 该子类不会是不会调用该方法的, 就算父类实现了也不会调用父类的"),_("code",[i._v("load")]),i._v("方法;")]),i._v(" "),_("li",[i._v("如果子类实现了, 父类的 "),_("code",[i._v("load")]),i._v(" 方法会优先于子类调用,类别的"),_("code",[i._v("load")]),i._v("方法一般最后调用不会直接触发"),_("code",[i._v("initialize")]),i._v("的调用;")])]),i._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[i._v("总结:")]),i._v(" "),_("p",[i._v("在程序启动之前会调用所有的类的(手动实现的) +load 方法(没有实现就不调用咯),")]),i._v(" "),_("p",[i._v("按(父类->子类->类别)的顺序调用.")])]),i._v(" "),_("br"),i._v(" "),_("h2",{attrs:{id:"三-initialize方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-initialize方法"}},[i._v("#")]),i._v(" 三. +initialize方法")]),i._v(" "),_("ul",[_("li",[_("code",[i._v("initialize")]),i._v(" 的自然调用是在第一次主动使用当前类或者子类时,在第一个方法(alloc)被调用前调用 ;")]),i._v(" "),_("li",[i._v("在 "),_("code",[i._v("initialize")]),i._v(" 方法被调用时，应用的运行环境基本健全 ;")]),i._v(" "),_("li",[_("code",[i._v("initialize")]),i._v(" 的运行过程中是能保证线程安全的 ;")]),i._v(" "),_("li",[i._v("和 load 不同，如果子类不实现 "),_("code",[i._v("initialize")]),i._v(" 方法，会把父类的实现继承过来调用一遍。注意的是在此之前，父类的方法已经被执行过一次了，同样不需要super 调用 ;")])]),i._v(" "),_("h3",{attrs:{id:"_1-调用顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-调用顺序"}},[i._v("#")]),i._v(" 1. 调用顺序:")]),i._v(" "),_("ul",[_("li",[i._v("如果父类的 "),_("code",[i._v("initialize")]),i._v(" 方法没有被调用过会先调用父类的 "),_("code",[i._v("initialize")]),i._v(" 方法 ;")]),i._v(" "),_("li",[i._v("如果该类有类别只会调用类别的 "),_("code",[i._v("+initialize")]),i._v(" (如果有多个类别会调用某一个类别的 "),_("code",[i._v("initialize")]),i._v(" 方法,其他的不会调用);")])]),i._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[i._v("总结:")]),i._v(" "),_("p",[i._v("在程序启动之后,在第一次创建这个类的对象的时候(也就是分配内存空间alloc的时候),会调用该类的"),_("code",[i._v("+initialize")]),i._v(" 方法且只调用一次 ;")])])])}),[],!1,null,null,null);v.default=t.exports}}]);