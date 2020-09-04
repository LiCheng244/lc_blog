(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{417:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("hr"),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("引言:")]),t._v("\n应用中经常会用到调用系统打电话、发信息、发邮件等功能，下面一一实现。")])]),t._v(" "),n("br"),t._v("\n### I. 打电话\n____\n"),n("h4",{attrs:{id:"方式一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[t._v("#")]),t._v(" 方式一")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最简单最直接的方式: 直接跳转到拨号界面")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缺点: 拨打电话完毕后, 不会自动回到原应用界面, 直接停留在通话记录界面")]),t._v("\nNSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"tel'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//10086"];')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIApplication sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" openURL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"方式二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[t._v("#")]),t._v(" 方式二")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拨号之前会弹框询问用户是否拨号, 拨号完毕后会直接回到原应用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缺点: 因为是私有API, 所以可能会被拒掉")]),t._v("\nNSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"telprompt'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//10086"];')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIApplication sharedApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" openURL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"方式三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式三"}},[t._v("#")]),t._v(" 方式三")]),t._v(" "),n("div",{staticClass:"language-objectivec extra-class"},[n("pre",{pre:!0,attrs:{class:"language-objectivec"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n  *  创建一个UIWebView来加载url, 拨号后能自动回到原应用\n  *\n  *  拨号之前会弹框询问用户是否拨号, 拨号完毕后自动回到原应用\n  * \n  *  注意: webView不要设置尺寸, 不然会遮挡住其他界面  只是用来打电话,不需要显示\n  */")]),t._v("\nNSURL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURL URLWithString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v('"tel'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//10086"];')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_webView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _webView "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIWebView alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CGRectZero"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_webView loadRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSURLRequest requestWithURL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("br"),t._v('\n### II. 发短信:\n____\n#### 方式一\n```objectivec\n// 直接跳转到发短信界面, 但是不能指定短信内容, 而且不能返回到原应用\nNSURL *url = [NSURL URLWithString:@"sms://15084089244"];\n[[UIApplication sharedApplication] openURL:url];\n```\n#### 方式二\n1 如果想指定短信内容, 使用MessageUI框架  \n```objectivec\n    //1. 导入头文件\n    //2. 显示发短信的控制器\n    MFMessageComposeViewController *messageVC = [[MFMessageComposeViewController alloc] init];\n'),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('//3. 设置短信内容\nmessageVC.body = @"吃饭了?";\n\n//4. 设置收件人列表(可以添加多个)\nmessageVC.recipients = @[@"13917714464", @"15084089244"];\n\n//5. 设置代理\nmessageVC.messageComposeDelegate = self;\n\n[self presentViewController:messageVC animated:YES completion:nil];\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n2 代理方法:\n```objectivec\n// 当短信界面关闭的时候调用, 发完后会自动回到原应用\n- (void)messageComposeViewController:(MFMessageComposeViewController *)controller didFinishWithResult:(MessageComposeResult)result{\n\n    // 关闭短信界面\n    [controller dismissViewControllerAnimated:YES completion:nil];\n\n    if (result == MessageComposeResultCancelled) {\n        NSLog(@"取消发送");\n    }else if (result == MessageComposeResultSent){\n        NSLog(@"已经发出");\n    }else{\n        NSLog(@"发送失败");\n    }\n}\n')])])]),n("br"),t._v('\n### III. 发邮件\n_____\n#### 方式一:\n```objectivec\n// 调用系统自带的邮件客户端, 发完邮件后不会自动回到原应用\nNSURL *url = [NSURL URLWithString:@"mailro://244344094@qq.com"];\n[[UIApplication sharedApplication] openURL:url];\n```\n#### 方式二:\n```objective\n// 指定邮件内容, 和发短信方式2 差不多.  使用\nMFMailComposeViewController *emailVC = [[MFMailComposeViewController alloc] init];\nemailVC.mailComposeDelegate = self;\n```\n'),n("br"),t._v("\n_____\n")])}),[],!1,null,null,null);s.default=e.exports}}]);