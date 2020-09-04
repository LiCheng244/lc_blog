(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{357:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("如何确定多个接口都已请求完成？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),a("p",[t._v("在日常开发中经常会遇到 需要同时请求多个接口， 在多个接口同时请求完成时再做相关业务处理。\n可以使用GCD中的信号量来实现。")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"i-实现代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-实现代码"}},[t._v("#")]),t._v(" I. 实现代码")]),t._v(" "),a("div",{staticClass:"language-objectivec extra-class"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("pragma")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("mark "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 加载数据")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("loadDataSuccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("success\n                failure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("errorMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("failure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3个接口，全部请求成功后刷新tableView")]),t._v("\n    NSInteger totalCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    __block NSInteger requestCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化一个信号量 值为0")]),t._v("\n    dispatch_semaphore_t sem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_semaphore_create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_get_global_queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DISPATCH_QUEUE_PRIORITY_DEFAULT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 请求1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求成功时加入下面代码")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求成功 requestCount+1 后 与 totalCount 比较 相等时 说明3个请求都已经完成， 信号量加1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("requestCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" totalCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_semaphore_signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提高信号量  信号量加1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 请求2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求成功时加入下面代码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("requestCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" totalCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_semaphore_signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 请求3")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求成功时加入下面代码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("requestCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" totalCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_semaphore_signal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待降低信号量")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sem = 0 时，函数会阻塞当前线程 等待 timeout 后")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sem > 0 时，该函数所处线程会继续执行下面语句，并将信号量减1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_semaphore_wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DISPATCH_TIME_FOREVER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 信号量大于0时 会执行下面代码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_get_main_queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 所有请求完成")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现回调")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br")])}),[],!1,null,null,null);s.default=e.exports}}]);