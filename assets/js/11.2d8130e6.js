(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{249:function(t,e,a){t.exports=a.p+"assets/img/19010118.f32e4c43.png"},250:function(t,e,a){t.exports=a.p+"assets/img/19010119.cd96b11b.png"},251:function(t,e,a){t.exports=a.p+"assets/img/19010120.0d07195d.png"},252:function(t,e,a){t.exports=a.p+"assets/img/19010121.7c316051.png"},253:function(t,e,a){t.exports=a.p+"assets/img/20082402.c683f401.png"},507:function(t,e,a){"use strict";a.r(e);var r=a(6),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",[t._v(" 理解控制器与类及View的加载 ")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("引言:")]),t._v(" "),r("p",[t._v("ViewController是iOS开发中MVC模式中的C(视图控制器)，ViewController是view的controller，ViewController的职责主要包括管理内部各个view的加载显示和卸载，同时负责与其他ViewController的通信和协调。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"一-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-简介"}},[t._v("#")]),t._v(" 一. 简介")]),t._v(" "),r("p",[t._v("在IOS中，有两类ViewController:")]),t._v(" "),r("p",[r("strong",[t._v("用于展示内容:")]),t._v("\n比如"),r("code",[t._v("UIViewController")]),t._v("、"),r("code",[t._v("UITableViewController")]),t._v("等，同时还可以自定义继承自UIViewController的UIViewController；")]),t._v(" "),r("p",[r("strong",[t._v("ViewController容器:")]),t._v("\n比如，"),r("code",[t._v("UINavigationViewController")]),t._v("和"),r("code",[t._v("UITabBarController")]),t._v("等，UINavigationController是以Stack的形式来存储和管理ViewController，UITabBarController是以Array的形式来管理ViewController。")]),t._v(" "),r("p",[t._v("不管是哪类ViewController,都继承自UIViewController")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"二-uiviewcontroller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-uiviewcontroller"}},[t._v("#")]),t._v(" 二. UIViewController")]),t._v(" "),r("h3",{attrs:{id:"_1-控制器从创建到销毁方法的执行顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制器从创建到销毁方法的执行顺序"}},[t._v("#")]),t._v(" 1. 控制器从创建到销毁方法的执行顺序")]),t._v(" "),r("div",{staticClass:"language-objectivec extra-class"},[r("pre",{pre:!0,attrs:{class:"language-objectivec"}},[r("code",[t._v("load"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\ninitialize"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initWithNibName"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \nloadView—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nviewDidLoad—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nviewWillApper—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nviewDidApper—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \nviewWillDisapper—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nviewDidDisapper—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nviewWillUnload"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("  \nviewDidUnload—"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ndealloc\n")])])]),r("p",[t._v("其中viewWillUnload"),r("code",[t._v("跟")]),t._v("viewDidUnLoad"),r("code",[t._v("在iOS6以后就过期了. 收到")]),t._v("low-memory"),r("code",[t._v("时系统不会释放")]),t._v("view"),r("code",[t._v("，而只是释放")]),t._v("controller"),r("code",[t._v("的")]),t._v("resource`。")]),t._v(" "),r("h3",{attrs:{id:"_2-注意点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意点"}},[t._v("#")]),t._v(" 2. 注意点")]),t._v(" "),r("p",[r("code",[t._v("LoadView:")])]),t._v(" "),r("ol",[r("li",[t._v("控制器调用loadView方法创建控制器的view.当控制器的view存在了就不会调用.")]),t._v(" "),r("li",[t._v("不要再LoadView中调用"),r("code",[t._v("[super loadView]")]),t._v(",会影响CPU性能")])]),t._v(" "),r("p",[t._v("苹果官方文档:")]),t._v(" "),r("blockquote",[r("p",[t._v("You should never call this method directly. The view controller calls this method when its view property is requested but is currently nil. This method loads or creates a view and assigns it to the view property.")]),t._v(" "),r("p",[t._v("当系统要展示这个控制器view的时候,会先去view的getter方法中寻找有没有返回view,如果"),r("code",[t._v("view == nil")]),t._v(",系统就会主动去调用这个方法.")])]),t._v(" "),r("p",[t._v("控制器的view都是懒加载,当需要展示的时候才会去创建")]),t._v(" "),r("ol",[r("li",[t._v("懒加载:重写getter方法")]),t._v(" "),r("li",[t._v("好处:不用管什么时候需要创建,做到要用时再创建")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"三-view的加载过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-view的加载过程"}},[t._v("#")]),t._v(" 三. view的加载过程")]),t._v(" "),r("p",[t._v("这里指的View是指Controller的View。它作为Controler的属性，生命周期在Controller的生命周期内。就是说你的Controller不能在view释放前就释放了。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(249),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_1-从代码中加载view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-从代码中加载view"}},[t._v("#")]),t._v(" 1. 从代码中加载view")]),t._v(" "),r("p",[r("img",{attrs:{src:a(250),alt:"代码创建"}})]),t._v(" "),r("h3",{attrs:{id:"_2-从storyboard-xib中创建view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-从storyboard-xib中创建view"}},[t._v("#")]),t._v(" 2. 从storyboard/xib中创建view")]),t._v(" "),r("p",[r("img",{attrs:{src:a(251),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_3-实现过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现过程"}},[t._v("#")]),t._v(" 3. 实现过程")]),t._v(" "),r("p",[r("img",{attrs:{src:a(252),alt:"view的实现过程"}})]),t._v(" "),r("h3",{attrs:{id:"_4-方法调用顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-方法调用顺序"}},[t._v("#")]),t._v(" 4. 方法调用顺序")]),t._v(" "),r("p",[r("code",[t._v("+ (id)alloc")]),t._v("\n分配内存；")]),t._v(" "),r("p",[r("code",[t._v("- (id)init")]),t._v(" 方法（包括其他-(id)init...方法）\n只允许调用一次，并且要与 alloc方法 写在一起，在init方法中申请的内存，要在dealloc方法中释放（或者其他地方）；")]),t._v(" "),r("p",[r("code",[t._v("- (void)awakeFromNib")]),t._v("\n使用Xib初始化后会调用此方法，一般不会重写此方法；")]),t._v(" "),r("p",[r("code",[t._v("- (void)loadView")]),t._v("\n如果使用Xib创建ViewController，就不要重写该方法。一般不会修改此方法；")]),t._v(" "),r("p",[r("code",[t._v("- (void)viewDidLoad")]),t._v("\n视图加载完成之后被调用，这个方法很重要，可以在此增加一些自己定义的控件，注意此时view的frame不一定是显示时候的frame，真实的frame会在 - (void)viewDidAppear: 后。\n在iOS6.0+版本中在对象的整个生命周期中只会被调用一次，这里要注意在iOS3.0~iOS5.X版本中可能会被重复调用，当ViewController收到内存警告后，会释放View，并调用viewDidUnload，之后会重新调用viewDidLoad，所以要支持iOS6.0以前版本的童鞋要注意这里的内存管理。")]),t._v(" "),r("p",[r("code",[t._v("- (void)viewWillAppear:(BOOL)animated")]),t._v("\nview 将要显示的时候，可以在此加载一些图片，和一些其他占内存的资源；")]),t._v(" "),r("p",[r("code",[t._v("- (void)viewDidAppear:(BOOL)animated")]),t._v("\nview 已经显示的时候调用；")]),t._v(" "),r("p",[r("code",[t._v("- (void)viewWillDisappear:(BOOL)animated")]),t._v("\nview 将要隐藏的时候，可以在此将一些占用内存比较大的资源先释放掉，在 viewWillAppear: 中重新加载。如：图片/声音/视频。如果View已经隐藏而又在内存中保留这些在显示前不会被调用的资源，那么App闪退的几率会增加，尤其是ViewController比较多的时候；")]),t._v(" "),r("p",[r("code",[t._v("- (void)viewDidAppear:(BOOL)animated")]),t._v("\nview 已经隐藏的时候调用；")]),t._v(" "),r("p",[r("code",[t._v("- (void)dealloc")]),t._v("\n不要手动调用此方法，当引用计数值为0的时候，系统会自动调用此方法。")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"四-类相关方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-类相关方法"}},[t._v("#")]),t._v(" 四. 类相关方法")]),t._v(" "),r("p",[r("code",[t._v("+(void)load")]),t._v("\n当一个类被加载时调用,只加载一次")]),t._v(" "),r("p",[r("code",[t._v("+(void)initialize")]),t._v("\n当本类或者子类被加载时调用,可能调用多次")]),t._v(" "),r("p",[r("code",[t._v("-(instancetype)init")]),t._v("\n用代码创建类的时候调用,只能做一些初始化操作,不能设置控件的frame,init其实是去调用initWithFrame,只不过frame为CGRectZero")]),t._v(" "),r("p",[r("code",[t._v("-(instancetype)initWithFrame:(CGRect)frame")]),t._v("\n用代码创建类的时候调用,只能做一些初始化操作,不能在这设置控件的frame,如果已经知道了frame,那么在这里设置子控件的frame是没有问题的,但是如果外界使用init的方式创建,最终也会调用initWithFrame方法,此时的frame传进来是0,那么,在这个方法里面设置的子控件的frame也会为0.所以,为了严谨起见,最好不要在这个方法里面设置子控件的frame。")]),t._v(" "),r("p",[r("code",[t._v("-(instancetype)initWithCoder:(NSCoder *)aDecoder")]),t._v("\n从xib/storyboard中加载就会调用此方法,只能在这个方法做一些一次性设置,不能设置控件的frame")]),t._v(" "),r("p",[r("code",[t._v("-(void)awakeFromNib")]),t._v("\n从文件中加载.就会调用此方法,可以在这个方法中设置frame")]),t._v(" "),r("p",[r("code",[t._v("-(void)layoutSubviews")]),t._v("\n如果你想改变子视图的默认布局时才需要去重写 layoutSubviews 方法。")]),t._v(" "),r("h3",{attrs:{id:"_1-使用-navigationcontroller-去-push-切换显示的view-调用的顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-navigationcontroller-去-push-切换显示的view-调用的顺序"}},[t._v("#")]),t._v(" 1. 使用 NavigationController 去 Push 切换显示的View, 调用的顺序")]),t._v(" "),r("p",[t._v("例如 从 A 控制器 Push 显示 B 控制器，\n"),r("code",[t._v("[self.navigationController pushViewController:B animated:YES]")])]),t._v(" "),r("div",{staticClass:"language-objectivec extra-class"},[r("pre",{pre:!0,attrs:{class:"language-objectivec"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 加载B控制器的View（如果没有的话）；\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 调用 A 的 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewWillDisappear"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("animated； A将要隐藏\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 调用 B 的 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewWillAppear"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("animated； B将要显示\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 调用 A 的 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidDisappear"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("animated；A已经隐藏\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 调用 B 的 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidAppear"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("animated； B已经显示\n")])])]),r("br"),t._v(" "),r("h2",{attrs:{id:"五-收到内存警告系统执行步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-收到内存警告系统执行步骤"}},[t._v("#")]),t._v(" 五. 收到内存警告系统执行步骤")]),t._v(" "),r("p",[r("code",[t._v("- (void)didReceiveMemoryWarning")]),t._v("\niOS6.0以后 内存不够用时,会调用这个方法,接收到内存警告.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(253),alt:""}})]),t._v(" "),r("br")])}),[],!1,null,null,null);e.default=s.exports}}]);