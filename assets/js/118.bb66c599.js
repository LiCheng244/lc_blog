(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{385:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("UITableView 性能优化")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("引言：")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"i-如何查看刷新的帧率？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-如何查看刷新的帧率？"}},[t._v("#")]),t._v(" I. 如何查看刷新的帧率？")]),t._v(" "),s("ol",[s("li",[t._v("要保证良好的用户体验， 刷新的帧率要在 50+（帧率最大为60）。")]),t._v(" "),s("li",[t._v("右键 XCode 选择 open developer tool --\x3e Instruments 工具 --\x3e")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"ii-表格为什么会卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ii-表格为什么会卡"}},[t._v("#")]),t._v(" II. 表格为什么会卡?")]),t._v(" "),s("ol",[s("li",[t._v("在两帧刷新之间，运算没有做完；")]),t._v(" "),s("li",[t._v("出现跳帧现象，卡顿。")]),t._v(" "),s("li",[t._v("跳帧：也叫丢帧，由于显示器刷新率跟不上程序的计算，只能舍弃一部分画面，这种现象就是跳帧。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"iii-如何提高表格性能？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iii-如何提高表格性能？"}},[t._v("#")]),t._v(" III. 如何提高表格性能？")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("最重要的就是减少计算量")]),t._v("，保证每一帧都能完成计算， 从而达到流畅的效果；")]),t._v(" "),s("li",[t._v("减少对CPU的消耗， 用 内存来换取 CPU。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"iv-优化方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iv-优化方式"}},[t._v("#")]),t._v(" IV. 优化方式")]),t._v(" "),s("h3",{attrs:{id:"_1-对-cell-进行操作："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-对-cell-进行操作："}},[t._v("#")]),t._v(" 1. 对 cell 进行操作：")]),t._v(" "),s("p",[s("strong",[t._v("栅格化：")])]),t._v(" "),s("ul",[s("li",[t._v("美工的术语， 将 cell 中所有的 内容生成一张独立的图像， 在cell滚动时只显示图像。")]),t._v(" "),s("li",[t._v("注意： 栅格化时必须要指定分辨率，不然会按照1倍分辨率生成图像，图像会模糊。")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shouldRasterize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栅格化时必须制定分辨率，不然会按照1倍分辨率生成图像， 图像模糊")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rasterizationScale "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("异步绘制：")])]),t._v(" "),s("ul",[s("li",[t._v("对 cell 进行异步绘制， 苹果介绍很少， 只是说 在 cell 比较复杂的时候可以使用。")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawsAsynchronously "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-行高一定要缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-行高一定要缓存"}},[t._v("#")]),t._v(" 2. 行高一定要缓存")]),t._v(" "),s("p",[t._v("在表格滚动时 行高方法 调用的非常频繁，将行高缓存起来，避免每次都需要去计算。")]),t._v(" "),s("h3",{attrs:{id:"_3-不要动态创建子视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-不要动态创建子视图"}},[t._v("#")]),t._v(" 3. 不要动态创建子视图")]),t._v(" "),s("p",[t._v("在 cell 中把所有的子视图都提前创建好，在不使用时可以 hidden = yes。")]),t._v(" "),s("h3",{attrs:{id:"_4-所有的子视图-都要-设置背景颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-所有的子视图-都要-设置背景颜色"}},[t._v("#")]),t._v(" 4. 所有的子视图 都要 设置背景颜色")]),t._v(" "),s("p",[t._v("如果不设置背景颜色， push 到下一界面时 会卡顿。")]),t._v(" "),s("h3",{attrs:{id:"_5-所有的颜色-都不要设置-alpha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-所有的颜色-都不要设置-alpha"}},[t._v("#")]),t._v(" 5. 所有的颜色 都不要设置 alpha")]),t._v(" "),s("ul",[s("li",[t._v("如果设置 alpha，会严重影响性能！")]),t._v(" "),s("li",[t._v("没有透明度的视图， 会直接覆盖后面的东西；")]),t._v(" "),s("li",[t._v("有透明度的视图， 会先 计算 视图重叠面积，然后再根据透明度来绘制视图， 特别麻烦！")])]),t._v(" "),s("h3",{attrs:{id:"_6-减少计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-减少计算"}},[t._v("#")]),t._v(" 6. 减少计算")]),t._v(" "),s("p",[t._v("所有需要的素材尽量提前计算好，避免大量的计算，出现跳帧的现象。")]),t._v(" "),s("h3",{attrs:{id:"_7-cell-不要过于复杂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-cell-不要过于复杂"}},[t._v("#")]),t._v(" 7. cell 不要过于复杂")]),t._v(" "),s("p",[t._v("cell 中的层次越少越好， 子控件的数量越少越好。")]),t._v(" "),s("h3",{attrs:{id:"_8-所有的子视图都添加到-contentview-上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-所有的子视图都添加到-contentview-上"}},[t._v("#")]),t._v(" 8. 所有的子视图都添加到 contentView 上")]),t._v(" "),s("br")])}),[],!1,null,null,null);a.default=r.exports}}]);