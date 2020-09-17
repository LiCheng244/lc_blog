(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{368:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("UITableView 使用细节")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("引言:")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"一-隐藏多余-cell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-隐藏多余-cell"}},[t._v("#")]),t._v(" 一. 隐藏多余 cell")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableFooterView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIView alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"二-分割线相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-分割线相关"}},[t._v("#")]),t._v(" 二. 分割线相关")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去掉整个 tableView 的分割线：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("separatorStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UITableViewCellSeparatorStyleNone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 去掉某一个行 cell 的分割线：")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("separatorInset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIEdgeInsetsMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ScreenWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分割线顶到头部")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("separatorInset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIEdgeInsetsZero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layoutMargins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UIEdgeInsetsZero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分割线颜色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("separatorColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIColor redColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"三-隐藏滚动条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-隐藏滚动条"}},[t._v("#")]),t._v(" 三. 隐藏滚动条")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 垂直方向")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showsVerticalScrollIndicator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 竖直方向")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showsHorizontalScrollIndicator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"四-cell点击效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-cell点击效果"}},[t._v("#")]),t._v(" 四. cell点击效果")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点击无样式")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectionStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UITableViewCellSelectionStyleNone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义点击样式 - view")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedBackgroundView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIView alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedBackgroundView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIColor yellowColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义点击样式 - image")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectedBackgroundView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIImageView alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIImage imageNamed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右边辅助按钮样式")]),t._v("\ncell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessoryType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UITableViewCellAccessoryDetailButton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似 button 点击闪烁效果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UITableView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView didSelectRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSIndexPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("indexPath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tableView deselectRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("indexPath animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"五-tableview-自动布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-tableview-自动布局"}},[t._v("#")]),t._v(" 五. TableView 自动布局")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TableviewCell 使用SB约束好， 根据大小自动布局")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用SB布局的Cell ，直接使用下面代码达到自动布局目的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("estimatedRowHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UITableViewAutomaticDimension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"六-自定义分区头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六-自定义分区头"}},[t._v("#")]),t._v(" 六. 自定义分区头")]),t._v(" "),s("p",[s("strong",[t._v("注意：自定义分区头，tableView 的样式使用"),s("code",[t._v("Plain")]),t._v("就可以。")])]),t._v(" "),s("ol",[s("li",[t._v("自定义视图，继承自"),s("code",[t._v("UITableViewHeaderFooterView")])]),t._v(" "),s("li",[t._v("设置headerView 的行高：")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orderTableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sectionHeaderHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("注册 headerView：")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tablView registerNib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UINib nibWithNibName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSStringFromClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CustomHeaderView class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" forHeaderFooterViewReuseIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"header"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("实现代理方法：")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UITableView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView viewForHeaderInSection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("section "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tCustomHeaderView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("headerView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tableView dequeueReusableHeaderFooterViewWithIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"header"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\theaderView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("titleL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("section"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"date"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" headerView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"七-获取-tableview-可视区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七-获取-tableview-可视区域"}},[t._v("#")]),t._v(" 七. 获取 TableView 可视区域")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式一")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接返回一个 UITableViewCell 的数组，对于自定义 cell 处理起来比较繁琐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibleCells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式二")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个 NSIndexPath 的数组，可以使用 indexPath.row 去获取数据、获取 cell")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexPathsForVisibleRows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式三")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改方法可使用在代理回调比较多的设计中")]),t._v("\nNSIndexPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSIndexPath alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCGRect cellR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView rectForRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cellR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lc_height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cellR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lc_height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"此时的 cell不在 tableview 的可视区域来了"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：1和2 在自动根据数据伸长的 cell 好像不太好用。")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"八-禁止分区头跟随-tableview-滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八-禁止分区头跟随-tableview-滚动"}},[t._v("#")]),t._v(" 八. 禁止分区头跟随 TableView 滚动")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚动视图代理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollViewDidScroll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIScrollView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("scrollView "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tCGFloat headerHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" headerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tscrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentInset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIEdgeInsetsMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" headerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tscrollView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentInset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIEdgeInsetsMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("headerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"九-程序不执行代理方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九-程序不执行代理方法"}},[t._v("#")]),t._v(" 九. 程序不执行代理方法")]),t._v(" "),s("p",[t._v("当网络请求后，设置"),s("code",[t._v("reloadData")]),t._v("来刷新表格时，有时会不执行代理方法。")]),t._v(" "),s("p",[t._v("如果设置"),s("code",[t._v("-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView")]),t._v("代理方法，并且返回值是根据请求结果来设置分区个数的话，数值有可能为0。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("原因:")]),t._v(" "),s("p",[t._v("当返回的分区头个数0时，tableView 的其他代理方法都不会执行。\n开发中要注意：分区个数为0的情况。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"十-滚到视图顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十-滚到视图顶部"}},[t._v("#")]),t._v(" 十. 滚到视图顶部")]),t._v(" "),s("h3",{attrs:{id:"方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[t._v("#")]),t._v(" 方法一")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView scrollRectToVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView setContentOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGPointMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法三"}},[t._v("#")]),t._v(" 方法三")]),t._v(" "),s("p",[t._v("注意： 要判断数据是否为空的情况。")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滚到顶部")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loanList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tNSIndexPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("indexPat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSIndexPath indexPathForRow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" inSection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView scrollToRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("indexPat atScrollPosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("UITableViewScrollPositionBottom animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"十一-cell点击事件响应延迟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十一-cell点击事件响应延迟"}},[t._v("#")]),t._v(" 十一. Cell点击事件响应延迟")]),t._v(" "),s("h3",{attrs:{id:"问题描述："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述："}},[t._v("#")]),t._v(" 问题描述：")]),t._v(" "),s("p",[t._v("当某个cell同时满足了以下三个条件（暂且给这个cell命名为cellX）：")]),t._v(" "),s("ol",[s("li",[t._v("cellX为第一个被点击的cell或cellX被点击前的cell点击事件也出现了延迟问题")]),t._v(" "),s("li",[t._v("cellX的selectionStyle为UITableViewCellSelectionStyleNone；")]),t._v(" "),s("li",[t._v("cell的点击响应事件不是"),s("code",[t._v("[self.navigationController pushViewController:VC animated:YES];")]),t._v("时，会出现事件响应延迟的问题，大概会延迟5到9秒左右。")])]),t._v(" "),s("p",[t._v("当cellX不能同时满足上述三个条件时，不会出现响应延迟现象。")]),t._v(" "),s("h3",{attrs:{id:"问题解决："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决："}},[t._v("#")]),t._v(" 问题解决：")]),t._v(" "),s("p",[s("strong",[t._v("方法1：")]),t._v("\n不设置cellX的"),s("code",[t._v("selectionStyle")]),t._v("或设置cellX的selectionStyle设置为除"),s("code",[t._v("UITableViewCellSelectionStyleNone")]),t._v("的其他几种样式。")]),t._v(" "),s("p",[s("strong",[t._v("方法2：")]),t._v("\n不管设置cellX的"),s("code",[t._v("selectionStyle")]),t._v("为什么类型，只要在tableView的点击代理方法中添加"),s("code",[t._v("[tableView deselectRowAtIndexPath:indexPath animated:NO];")]),t._v("方法即可，代码如下：")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UITableView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tableView didSelectRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSIndexPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("indexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解决cell的点击延迟问题")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tableView deselectRowAtIndexPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("indexPath animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br")])}),[],!1,null,null,null);a.default=e.exports}}]);