(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{438:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v(" 自定义实现『刮刮乐』效果 ")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),s("p",[t._v("类似 彩票刮刮乐效果。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"一-核心代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-核心代码"}},[t._v("#")]),t._v(" 一. 核心代码")]),t._v(" "),s("h3",{attrs:{id:"_1-创建刮奖区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建刮奖区"}},[t._v("#")]),t._v(" 1. 创建刮奖区:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("createSubViews "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     注意:\n     1. 这两个控件的位置要相同\n     2. 一定要先创建下面的label, 再创建图片\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 展示刮出来的效果的view")]),t._v("\n    UILabel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("labelL        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UILabel alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("280")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"刮刮乐效果展示"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numberOfLines   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIColor brownColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIFont systemFontOfSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlignment   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NSTextAlignmentCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view addSubview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被刮的图片")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageView       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIImageView alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("labelL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIImage imageNamed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"222.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view addSubview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"_2-实现刮刮乐效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现刮刮乐效果"}},[t._v("#")]),t._v(" 2. 实现刮刮乐效果:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/// 手指触摸\n-(void)touchesMoved:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {\n   \n    // 触摸任意位置\n    UITouch *touch = touches.anyObject;\n    // 触摸位置在图片上的坐标\n    CGPoint cententPoint = [touch locationInView:self.imageView];\n    // 设置清除点的大小\n    CGRect  rect = CGRectMake(cententPoint.x, cententPoint.y, 20, 20);\n    // 默认是去创建一个透明的视图\n    UIGraphicsBeginImageContextWithOptions(self.imageView.bounds.size, NO, 0);\n    // 获取上下文(画板)\n    CGContextRef ref = UIGraphicsGetCurrentContext();\n    // 把imageView的layer映射到上下文中\n    [self.imageView.layer renderInContext:ref];\n    // 清除划过的区域\n    CGContextClearRect(ref, rect);\n    // 获取图片\n    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();\n    // 结束图片的画板, (意味着图片在上下文中消失)\n    UIGraphicsEndImageContext();\n    self.imageView.image = image;\n}\n")])])]),s("br")])}),[],!1,null,null,null);a.default=e.exports}}]);