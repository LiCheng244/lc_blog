(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,s,a){t.exports=a.p+"assets/img/20101601.6c3c8460.png"},190:function(t,s,a){t.exports=a.p+"assets/img/20101602.06df8da0.png"},191:function(t,s,a){t.exports=a.p+"assets/img/20101603.1b20e324.gif"},192:function(t,s,a){t.exports=a.p+"assets/img/20101604.ef0048ed.gif"},193:function(t,s,a){t.exports=a.p+"assets/img/20101605.427184dc.gif"},194:function(t,s,a){t.exports=a.p+"assets/img/20101606.ca690acd.gif"},195:function(t,s,a){t.exports=a.p+"assets/img/20101607.57efc74e.gif"},355:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("JavaScript 事件循环")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),n("p",[t._v("事件循环是每个 Javascript 开发人员都必须面对的，起初理解起来会有些混乱。事件循环的唯一任务是将队列与调用栈连接起来~。如果调用栈为空，也就是先前调用的函数都返回了值并从调用栈中调出，这时队列中的第一项便可以添加到调用栈中。")])]),t._v(" "),n("br"),t._v(" "),n("p",[n("img",{attrs:{src:a(189),alt:""}})]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"一-事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-事件循环"}},[t._v("#")]),t._v(" 一. 事件循环")]),t._v(" "),n("p",[t._v("首先，事件循环是什么，为什么我们需要关注它？")]),t._v(" "),n("p",[t._v("我们都知道 "),n("code",[t._v("Javascript 是单线程的：一次只能运行一个任务")]),t._v("。通常，这没什么大问题，但是假设你现在正在运行一个耗时需要 30s 的任务。由于是单线程处理，我们需要等待 30s 才能去做其它事情（默认情况下，Javascript 在浏览器的主线程上运行，因此整个界面将卡住）。我想，现在没有人想访问这样一个反应迟钝的网站了。")]),t._v(" "),n("p",[t._v("幸运的是，浏览器为我们提供了一个 Javascript 引擎本身没有的功能："),n("code",[t._v("Web API")]),t._v("。"),n("code",[t._v("它包含了 DOM API、setTimeout、HTTP 请求 等等")]),t._v("。这可帮助我们创建一些异步的，非阻塞的行为。")]),t._v(" "),n("p",[t._v("当我们调用一个函数时，函数会被添加到调用栈中。调用栈是 JS 引擎的一部分，而不是与游览器相关的。它是一个栈，即满足 FIFO。当一个函数返回一个值时，会从栈中弹出。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(190),alt:""}})]),t._v(" "),n("p",[n("code",[t._v("respond")]),t._v(" 函数返回一个 "),n("code",[t._v("setTimeout")]),t._v(" 函数。 "),n("code",[t._v("setTimeout")]),t._v("函数是由 Web API 提供的：它让我们可以延迟任务而不会阻塞主线程。我们传递给 "),n("code",[t._v("setTimeout")]),t._v(" 函数的回调函数，即箭头函数 "),n("code",[t._v("() => { return 'Hey'}")]),t._v("会被添加到 Web API。同时， "),n("code",[t._v("setTimeout")]),t._v(" 函数和 "),n("code",[t._v("respond")]),t._v(" 函数从栈中弹出，它们都返回了自己的值。")]),t._v(" "),n("p",[t._v("在 Web API 中，计时器运行了 1000ms （我们传递的第二个参数）。回调不会立即添加到调用栈中，而是会传递到队列中。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(191),alt:""}})]),t._v(" "),n("p",[t._v("在 Web API 中，计时器运行了 1000ms （我们传递的第二个参数）。回调不会立即添加到调用栈中，而是会传递到队列中。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(192),alt:""}})]),t._v(" "),n("p",[t._v("这可能是一个令人困惑的地方：\n这并不意味着在 1000ms 后将回调函数添加到调用栈中（从而返回一个值）。而只是简单地在 1000ms 后添加到队列中。而在队列中，函数必须等待，直到轮到它！")]),t._v(" "),n("p",[t._v("现在到了我们要讨论的重点：")]),t._v(" "),n("p",[n("strong",[t._v("事件循环:")]),t._v(" "),n("code",[t._v("事件循环的唯一任务是将队列与调用栈连接起来。如果调用栈为空，也就是先前调用的函数都返回了值并从调用栈中调出，这时队列中的第一项便可以添加到调用栈中。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(193),alt:""}})]),t._v(" "),n("p",[t._v("回调被添加到调用栈中，被调用，并返回一个值，然后从调用栈中弹出。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(194),alt:""}})]),t._v(" "),n("br"),t._v(" "),n("h2",{attrs:{id:"二-举例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-举例"}},[t._v("#")]),t._v(" 二. 举例")]),t._v(" "),n("p",[t._v("我们再举个例子。运行下面的命令，看看会输出什么内容:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"First"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bar")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Second"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("baz")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Third"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("br"),t._v(" "),n("p",[t._v("看出来了么？让我们看看在浏览器中运行这段代码会发生什么。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("执行")]),t._v(" "),n("ul",[n("li",[t._v("首先调用 bar ， bar 返回一个 setTimeout 函数。")]),t._v(" "),n("li",[t._v("我们传递给 setTimeout 的回调被添加到 Web API， setTimeout 函数从调用栈中弹出")]),t._v(" "),n("li",[t._v("运行计时器，同时调用 foo 并打印 First 。 foo 返回，调用 baz ，回调函数被添加到队列。")]),t._v(" "),n("li",[t._v("baz 打印出 Third ，事件循环发现在 baz 返回后，调用栈为空，所以将回调添加到调用栈中。")]),t._v(" "),n("li",[t._v("回调打印出 Second")])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(195),alt:""}})]),t._v(" "),n("br")])}),[],!1,null,null,null);s.default=e.exports}}]);