(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(t,a,n){t.exports=n.p+"assets/img/19010102.1c7d8ae5.png"},181:function(t,a,n){t.exports=n.p+"assets/img/19010103.c13877c5.png"},204:function(t,a,n){"use strict";n.r(a);var s=n(6),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("** 引言 **")]),t._v(" "),s("p",[t._v("iOS中的沙盒机制是一种安全体系, 规定了应用程序只能在为该改程序创建的文件中读取文件，不可以去其它地方访问，此区域被成为沙盒。\n所有的非代码文件都要保存在自己的沙盒中，例如图像，图标，声音，映像，属性列表，文本文件等。\n")])]),t._v(" "),s("br"),t._v("\n### I. 沙盒机制\n___\n1. 每个应用程序都有自己的存储空间\n2. 应用程序不能翻过自己的围墙去访问别的存储空间的内容\n3. 应用程序请求的数据都要通过权限检测，假如不符合条件的话，不会被放行。\n"),s("img",{attrs:{src:n(180),width:"400",align:"center"}}),t._v(" "),s("p",[t._v("通过这张图只能从表层上理解sandbox是一种安全体系，应用程序的所有操作都要通过这个体系来执行，其中核心内容是："),s("strong",[t._v("sandbox对应用程序执行各种操作的权限限制。")])]),t._v(" "),s("br"),t._v("\n### II. 目录结构\n___\n因为应用的沙盒机制，应用只能在以下几个目录下读写文件。默认情况下，每个沙盒含有3个文件夹：`Documents`, `Library` 和 `tmp`:\n"),s("p",[t._v("每个应用的沙盒目录都是相似的，主要包含图中所示的4个目录：")]),t._v(" "),s("img",{attrs:{src:n(181),width:"300",align:"center"}}),t._v(" "),s("h4",{attrs:{id:"_1、myapp-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、myapp-app"}},[t._v("#")]),t._v(" 1、MyApp.app")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n该目录包含了应用程序本身的数据，包括资源文件和可执行文件等。程序启动以后，会根据需要从该目录中动态加载代码或资源到内存，这里用到了lazy loading的思想。")]),t._v(" "),s("p",[s("code",[t._v("② 整个目录是只读的")]),t._v("\n为了防止被篡改，应用在安装的时候会将该目录签名。非越狱情况下，该目录中内容是无法更改的；在越狱设备上如果更改了目录内容，对应的签名就会被改变，这种情况下苹果官网描述的后果是应用程序将无法启动，我没实践过。")]),t._v(" "),s("p",[s("code",[t._v("③ 是否会被iTunes同步")]),t._v("\n否")]),t._v(" "),s("h4",{attrs:{id:"_2、documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、documents"}},[t._v("#")]),t._v(" 2、Documents")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n我们可以将应用程序的数据文件保存在该目录下。不过这些数据类型仅限于不可再生的数据，可再生的数据文件应该存放在Library/Cache目录下。")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n是")]),t._v(" "),s("h4",{attrs:{id:"_3、documents-inbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、documents-inbox"}},[t._v("#")]),t._v(" 3、Documents/Inbox")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n该目录用来保存由外部应用请求当前应用程序打开的文件。\n比如我们的应用叫A，向系统注册了几种可打开的文件格式，B应用有一个A支持的格式的文件F，并且申请调用A打开F。由于F当前是在B应用的沙盒中，我们知道，沙盒机制是不允许A访问B沙盒中的文件，因此苹果的解决方案是讲F拷贝一份到A应用的Documents/Inbox目录下，再让A打开F。")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n是")]),t._v(" "),s("h4",{attrs:{id:"_4、library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、library"}},[t._v("#")]),t._v(" 4、Library")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n苹果建议用来存放默认设置或其它状态信息。")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n是，但是要除了Caches子目录外")]),t._v(" "),s("h4",{attrs:{id:"_5、library-caches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、library-caches"}},[t._v("#")]),t._v(" 5、Library/Caches")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n主要是缓存文件，用户使用过程中缓存都可以保存在这个目录中。前面说过，Documents目录用于保存不可再生的文件，那么这个目录就用于保存那些可再生的文件，比如网络请求的数据。鉴于此，应用程序通常还需要负责删除这些文件。")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n否")]),t._v(" "),s("h4",{attrs:{id:"_6、library-preferences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、library-preferences"}},[t._v("#")]),t._v(" 6、Library/Preferences")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n应用程序的偏好设置文件。我们使用NSUserDefaults写的设置数据都会保存到该目录下的一个plist文件中，这就是所谓的写道plist中！")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n是")]),t._v(" "),s("h4",{attrs:{id:"_7、tmp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、tmp"}},[t._v("#")]),t._v(" 7、tmp")]),t._v(" "),s("p",[s("code",[t._v("① 存放内容")]),t._v("\n各种临时文件，保存应用再次启动时不需要的文件。而且，当应用不再需要这些文件时应该主动将其删除，因为该目录下的东西随时有可能被系统清理掉，目前已知的一种可能清理的原因是系统磁盘存储空间不足的时候。")]),t._v(" "),s("p",[s("code",[t._v("② 是否会被iTunes同步")]),t._v("\n否")]),t._v(" "),s("p",[s("strong",[t._v("iTunes在与iPhone同步时，备份所有的Documents和Library文件。")])]),t._v(" "),s("p",[s("strong",[t._v("iPhone在重启时，会丢弃所有的tmp文件。")])]),t._v(" "),s("br"),t._v("\n### III. 代码获取文件夹路径\n___\n#### 获取根目录:\n```objectivec\n"),s("p",[t._v('// 获取根目录\nNSString *homePath = NSHomeDirectory();\nNSLog(@"Home目录：%@",homePath);')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n#### 获取Documents文件夹目录:\n```objectivec\n\nNSArray *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask, YES);\nNSString *documentsPath = [docPath objectAtIndex:0];\nNSLog(@"Documents目录：%@",documentsPath);\n\n')])])]),s("h4",{attrs:{id:"获取library文件夹目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取library文件夹目录"}},[t._v("#")]),t._v(" 获取Library文件夹目录:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\nNSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("libsPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSearchPathForDirectoriesInDomains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSLibraryDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NSUserDomainMask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("libPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("libsPath objectAtIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Library目录：%@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("libPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"获取cache文件夹目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取cache文件夹目录"}},[t._v("#")]),t._v(" 获取Cache文件夹目录:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\nNSArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cacPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSSearchPathForDirectoriesInDomains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSCachesDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NSUserDomainMask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" YES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cachePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cacPath objectAtIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Cache目录：%@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cachePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"获取tmp目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取tmp目录"}},[t._v("#")]),t._v(" 获取tmp目录:")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//temp目录")]),t._v("\nNSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tempPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSTemporaryDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"temp目录：%@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tempPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("br"),t._v("\n### IV. 沙盒读写文件\n___\n#### 向沙盒中写入文件:\n```objectivec\n"),s("p",[t._v("NSArray *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask, YES);\nNSString *documentsPath = [docPath objectAtIndex:0];")]),t._v(" "),s("p",[t._v('//写入文件\nif (!documentsPath) {\nNSLog(@"目录未找到");\n}else {\nNSString *filePaht = [documentsPath stringByAppendingPathComponent:@"test.txt"];\nNSArray *array = [NSArray arrayWithObjects:@"Title",@"Contents", nil];\n[array writeToFile:filePaht atomically:YES];\n}')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n#### 向沙盒中写入文件:\n```objectivec\n\n//读取文件\nNSArray *docPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask, YES);\nNSString *documentsPath = [docPath objectAtIndex:0];\nNSString *readPath = [documentsPath stringByAppendingPathComponent:@"test.txt"];\n\n// 写入的什么类型的数据 就要用这个类型来读取\nNSArray *fileContent = [[NSArray alloc] initWithContentsOfFile:readPath];\nNSLog(@"文件内容：%@",fileContent);\n\n')])])]),s("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);