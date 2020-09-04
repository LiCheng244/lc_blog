(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{225:function(t,a,s){t.exports=s.p+"assets/img/19010107.856cc04d.png"},226:function(t,a,s){t.exports=s.p+"assets/img/19010108.bb291703.png"},227:function(t,a,s){t.exports=s.p+"assets/img/19010109.cd2facbe.png"},228:function(t,a,s){t.exports=s.p+"assets/img/19010110.3a2e0184.png"},371:function(t,a,s){"use strict";s.r(a);var v=s(6),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",[t._v("多线程 基础概念")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("引言:")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"i-基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#i-基础知识"}},[t._v("#")]),t._v(" I. 基础知识")]),t._v(" "),v("h3",{attrs:{id:"进程是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程是什么"}},[t._v("#")]),t._v(" 进程是什么?")]),t._v(" "),v("p",[t._v("是指在系统中正在运行的一个 应用程序。")]),t._v(" "),v("p",[t._v("进程之间是相互独立的, 每一个进程都有一块独立的内存空间, 之间互相不干扰。")]),t._v(" "),v("h3",{attrs:{id:"线程是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程是什么"}},[t._v("#")]),t._v(" 线程是什么?")]),t._v(" "),v("p",[t._v("每一个进程中,必须至少有一个线程, 没有线程 程序就无法运行。")]),t._v(" "),v("p",[t._v("是程序执行流的最小单元。线程是进程中的一个实体，是被系统独立调度和分派的基本单位，线程自己不拥有系统资源。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(225),alt:""}})]),t._v(" "),v("h3",{attrs:{id:"多线程是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程是什么"}},[t._v("#")]),t._v(" 多线程是什么?")]),t._v(" "),v("p",[t._v("是指从软件或者硬件上实现多个线程并发执行的技术。")]),t._v(" "),v("h3",{attrs:{id:"什么是串行？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是串行？"}},[t._v("#")]),t._v(" 什么是串行？")]),t._v(" "),v("p",[t._v("是指的我们从事某项工作时一个步骤一个步骤的去实施。")]),t._v(" "),v("h3",{attrs:{id:"什么是并行？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是并行？"}},[t._v("#")]),t._v(" 什么是并行？")]),t._v(" "),v("p",[t._v("一组程序按独立异步的速度执行，不等于时间上的重叠（同一个时刻发生)。")]),t._v(" "),v("h3",{attrs:{id:"线程概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程概念"}},[t._v("#")]),t._v(" 线程概念")]),t._v(" "),v("ol",[v("li",[t._v("**主线程：**UI线程，显示、刷新UI界面，处理UI控件的事件")]),t._v(" "),v("li",[t._v("**子线程：**后台线程，异步线程")])]),t._v(" "),v("h3",{attrs:{id:"多线程的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程的原理"}},[t._v("#")]),t._v(" 多线程的原理")]),t._v(" "),v("ol",[v("li",[t._v("在同一时间, CPU只能处理一条线程, 只能有一条线程 在进行工作.")]),t._v(" "),v("li",[t._v("多线程的并发执行实际上是, CPU在多个线程之间快速的调度(切换).(但比一定按照顺序调度)")]),t._v(" "),v("li",[t._v("比如说: 在线程a执行0.1秒, 然后切换到线程b执行0.1秒, 然后切换到线程c执行0.1秒, 再 回到线程a 继续执行 , 依次循环, 直到结束.")]),t._v(" "),v("li",[t._v("如果线程之间调度的足够快, 就会造成多条线程并发执行的假象.")])]),t._v(" "),v("p",[v("img",{attrs:{src:s(226),alt:""}})]),t._v(" "),v("h3",{attrs:{id:"多线程的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程的优点"}},[t._v("#")]),t._v(" 多线程的优点")]),t._v(" "),v("ol",[v("li",[t._v("能够适当的提高程序的执行效率")]),t._v(" "),v("li",[t._v("能够适当的提高资源的利用率(CPU, 内存利用率)")])]),t._v(" "),v("h3",{attrs:{id:"多线程的缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程的缺点"}},[t._v("#")]),t._v(" 多线程的缺点")]),t._v(" "),v("ol",[v("li",[t._v("开启线程需要占用一定的内存空间, 一般情况, 一个主线程占用1M, 子线程占用512KB. 开启线程越多, 就会占用大量的内存, 降低程序的性能.")]),t._v(" "),v("li",[t._v("线程越多, CPU在线程间调度的开销就越大. CPU消耗就越大.")]),t._v(" "),v("li",[t._v("程序的设计会更加复杂: 线程间的通信, 线程间的数据共享等等.")])]),t._v(" "),v("h3",{attrs:{id:"多线程的注意点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程的注意点"}},[t._v("#")]),t._v(" 多线程的注意点")]),t._v(" "),v("ol",[v("li",[t._v("不要同时开太多的线程（1~3条线程即可，不要超过5条）")]),t._v(" "),v("li",[t._v("不要把耗时的操作放在主线程，要放在子线程中执行")])]),t._v(" "),v("h3",{attrs:{id:"开启线程非常多-会造成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开启线程非常多-会造成"}},[t._v("#")]),t._v(" 开启线程非常多, 会造成")]),t._v(" "),v("ol",[v("li",[t._v("CPU 会在 N条线程之间调度(切换), CPU会累死, 会消耗大量的CPU资源.")]),t._v(" "),v("li",[t._v("每条线程被调度执行的频率会降低, 会影响线程的的执行效率.")]),t._v(" "),v("li",[t._v("线程切开且珍惜, 不要开太多, 3 - 5条就好.")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"ii-线程中任务的执行方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ii-线程中任务的执行方式"}},[t._v("#")]),t._v(" II. 线程中任务的执行方式")]),t._v(" "),v("h3",{attrs:{id:"串行队列："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#串行队列："}},[t._v("#")]),t._v(" 串行队列：")]),t._v(" "),v("p",[v("strong",[t._v("串行队列: 一个 线程 中的任务是串行执行.")])]),t._v(" "),v("p",[t._v("如果在一个线程中执行多个任务, 只能一个一个的任务按顺序去执行. 在 同一段时间内 , 一个线程 只能执行一个任务.")]),t._v(" "),v("p",[t._v("例子: 只有下载完a 才能下载b：")]),t._v(" "),v("img",{attrs:{src:s(227),width:"400"}}),t._v(" "),v("h3",{attrs:{id:"并行队列："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行队列："}},[t._v("#")]),t._v(" 并行队列：")]),t._v(" "),v("p",[t._v("并行队列: 一个进程 可以开启多条线程, 每条线程并行(同时)执行不同的任务 。"),v("strong",[t._v("一个 进程 中的多个线程是并行执行的.")])]),t._v(" "),v("img",{attrs:{src:s(228),width:"400"}}),t._v(" "),v("br")])}),[],!1,null,null,null);a.default=_.exports}}]);