(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{205:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("hr"),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("引言:")])]),t._v(" "),a("p",[t._v("开发的每个程序都会使用到一些数据，而这些数据一般被封装在一个自定义的类中。例如一个音乐程序可能会有一个Song类，聊天程序则又一个 Friend类，点菜程序会有一个Recipe类等。有时候我们希望在程序中显示的列表数据是按照一定顺序进行排列的，本文我们就来看看在iOS中有哪些 方法可以对NSArray中的对象进行排序。")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"i-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-准备工作"}},[t._v("#")]),t._v(" I. 准备工作")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("我们将要排序的对象是一个 "),a("code",[t._v("Persion")]),t._v(" 类，如下定义：")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("surname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strong"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NSDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dateOfBirth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n")])])]),a("p",[t._v("而数组中包含如下内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Smith \t John \t03/01/1984 \nAndersen Jane \t16/03/1979 \nClark \t Anne \t13/09/1995 \nSmith \t David  19/07/1981 \nJohnson\t Rose \t22/02/1989\n")])])]),a("br"),t._v("\n### II. NSComparator排序\n___\n`comparator`实际上是用一个`block`对象作比较操作。它的定义如下所示：\n```objectivec\ntypedef NSComparisonResult (^NSComparator)(id obj1, id obj2);\n```\n"),a("p",[t._v("上面的参数(obj1、obj2)就是我们将要做比较的对象。block返回的结果为"),a("code",[t._v("NSComparisonResult")]),t._v("类型来表示两个对象的顺序。\n要对整个数组做排序，则需要使用"),a("code",[t._v("NSArray")]),t._v("的"),a("code",[t._v("sortArrayUsingComparator:")]),t._v("方法，如下代码所示：")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\nNSArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sortedArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persons sortedArrayUsingComparator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSComparisonResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("最终排序的结果如下所示：")]),t._v(" "),a("div",{staticClass:"language-objective extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Andersen \tJane \nClark \t\tAnne \nJohnson \tRose \nSmith \t\tJohn \nSmith \t\tDavid\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"iii-nsdescriptor排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-nsdescriptor排序"}},[t._v("#")]),t._v(" III. NSDescriptor排序")]),t._v(" "),a("p",[a("code",[t._v("Sort descriptor")]),t._v("不仅可以用来对数组进行排序，还能指定 "),a("code",[t._v("element")]),t._v("在"),a("code",[t._v("table view")]),t._v("中的排序，以及"),a("code",[t._v("Core Data")]),t._v("中对"),a("code",[t._v("fetch request")]),t._v("返回的数据做排序处理。通过"),a("code",[t._v("sort descriptor")]),t._v("可以很方便的对数组进行多个key的排序。下面来看看如何对我们的数组做"),a("code",[t._v("surname")]),t._v("排序，然后在进行name排序：")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("\nNSSortDescriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("firstDescriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSSortDescriptor alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"surname"')]),t._v(" ascending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nNSSortDescriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("secondDescriptor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSSortDescriptor alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"name"')]),t._v(" ascending"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\nNSArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sortDescriptors "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSArray arrayWithObjects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("firstDescriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondDescriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nNSArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sortedArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persons sortedArrayUsingDescriptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sortDescriptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("上面代码的排序结果如下所示：")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("Andersen \tJane \nClark \t\tAnne \nJohnson \tRose \nSmith \t\tDavid \nSmith \t\tJohn\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"iv-selector排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iv-selector排序"}},[t._v("#")]),t._v(" IV. selector排序")]),t._v(" "),a("p",[t._v("我们也可以定义自己的方法进行两个对象做比较，并将该方法用于数组排序。"),a("code",[t._v("comparator")]),t._v("消息会被发送到数值中的每个对象中，并携带数组中另外的一个对象当做参数。自定义的的方法的返回结果是这样的：如果本身对象小于参数中的对象，就返回"),a("code",[t._v("NSOrederedAscending")]),t._v("，相反，则返回 "),a("code",[t._v("NSOrderedDescending")]),t._v("，如果相等，那么返回"),a("code",[t._v("NSOrderedSame")]),t._v("。如下代码所示：")]),t._v(" "),a("div",{staticClass:"language-objetivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n- (NSComparisonResult)compare:(Person *)otherPerson { \n    return [self.dateOfBirth compare:otherPerson.dateOfBirth]; \n}\n\n")])])]),a("hr"),t._v(" "),a("p",[t._v("这个方法定义在Person类中，用来对person的生日进行排序。")]),t._v(" "),a("h3",{attrs:{id:"v-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-总结"}},[t._v("#")]),t._v(" V. 总结")]),t._v(" "),a("p",[t._v("上面所介绍的这些方法都是为了完成相同的事情：对数组做排序处理 你可能在想改选择使用哪个呢？")]),t._v(" "),a("ul",[a("li",[t._v("当需要通过多个key进行排序，那么最简单的方法就 是使用sort descriptor。")]),t._v(" "),a("li",[t._v("如果比较方法很复杂的话，建议在使用外面自己的selector。")]),t._v(" "),a("li",[t._v("用block作比较，可以不必使用任何的变量就能完成一个简单的比较方法，也可以定义一个复杂的block，来替换 selector。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);