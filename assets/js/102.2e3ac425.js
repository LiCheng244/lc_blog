(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{472:function(t,c,v){"use strict";v.r(c);var _=v(6),a=Object(_.a)({},(function(){var t=this,c=t.$createElement,v=t._self._c||c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",[t._v("关于正则表达式")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),v("p",[t._v("正则表达式就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，用来表达对字符串的一种过滤逻辑。")]),t._v(" "),v("p",[t._v("通过正则表达式可以达到如下的目的：")]),t._v(" "),v("ol",[v("li",[t._v("给定的字符串是否符合正则表达式的过滤逻辑（称作“匹配”）；")]),t._v(" "),v("li",[t._v("可以通过正则表达式，从字符串中获取我们想要的特定部分。")])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"一-匹配普通文本字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-匹配普通文本字符"}},[t._v("#")]),t._v(" 一. 匹配普通文本字符")]),t._v(" "),v("p",[t._v("正则表达式可以只包含普通的文本，代表去精确匹配这个文本。例如:")]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：song\n待匹配文本：xiaosongge，xiaoSongge\n匹配后结果：xiaosongge")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("分析:")]),t._v(" "),v("p",[t._v('正则表达式默认是区分大小写的，所以song不会匹配 "Song" 。但是大部分的正则表达式实现都提供了一个选项表示不区分大小写。')])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"二-匹配任意字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-匹配任意字符"}},[t._v("#")]),t._v(" 二. 匹配任意字符")]),t._v(" "),v("p",[v("code",[t._v(".")]),t._v("用来匹配一个任意字符，例如：")]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：c.t\n待匹配文本：cat cet caaat dog\n匹配后结果：cat cet")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("分析:")]),t._v(" "),v("p",[v("code",[t._v("c.t")]),t._v(' 会匹配以 "c" 开头，以 "t" 结尾，中间为任意字符的字符串。')])]),t._v(" "),v("p",[t._v("同理，多个连续的.可以匹配多个连续的任意字符：")]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：c..t\n待匹配文本：cat cet caat dog\n匹配后结果：caat")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"三-匹配特殊字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-匹配特殊字符"}},[t._v("#")]),t._v(" 三. 匹配特殊字符")]),t._v(" "),v("p",[v("code",[t._v(".")]),t._v("在正则表达式中含有特殊的意义，是一个特殊的字符。"),v("code",[t._v("\\")]),t._v('也是特殊字符，可以对特殊字符起到转义作用。如果你想匹配的是一个真正的 "." 字符，需要在 '),v("code",[t._v(".")]),t._v(" 前面加上 "),v("code",[t._v("\\")]),t._v(" 对字符进行转义。所以，"),v("code",[t._v("\\.")]),t._v(' 表示真正的 "." 字符。')]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：c.t\n待匹配文本：cat c.t dog\n匹配后结果：c.t")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意:")]),t._v(" "),v("p",[t._v("因为"),v("code",[t._v("\\")]),t._v('也是特殊字符，所以想要匹配一个真正的 "" 字符，需要使用两个反斜线'),v("code",[t._v("\\\\")]),t._v("：")])]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：c\\\\t\n待匹配文本：cat c\\t dog\n匹配后结果：c\\t")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"四-使用字符集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四-使用字符集合"}},[t._v("#")]),t._v(" 四. 使用字符集合")]),t._v(" "),v("p",[t._v("上面说到.能匹配一个任意字符，但是如果我想匹配几个特定字符怎么办？匹配一组特定的字符可以使用[和]元字符。")]),t._v(" "),v("blockquote",[v("p",[t._v("正则表达式：c[ab]t\n待匹配文本：cat cbt cet\n匹配后结果：cat cbt cet")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("分析:")]),t._v(" "),v("p",[v("code",[t._v("[ab]")]),t._v('会匹配 "a" 或者 "b"。所以 '),v("code",[t._v("c[ab]t")]),t._v(' 会匹配 "cat" 和 "cbt" 而不会匹配 "cet"。')])]),t._v(" "),v("br")])}),[],!1,null,null,null);c.default=a.exports}}]);