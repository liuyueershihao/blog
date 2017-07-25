webpackJsonp([8],{39:function(n,s,r){var e=r(0)(null,r(79),null,null);n.exports=e.exports},79:function(n,s){n.exports={render:function(){var n=this,s=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,s=n.$createElement,r=n._self._c||s;return r("div",[r("div",{staticClass:"title"},[n._v("sass快速入门")]),n._v(" "),r("div",{staticClass:"tag"},[n._v("sass")]),n._v(" "),r("summary",[n._v("Sass 是对 CSS 的扩展，让 CSS 语言更强大、优雅。 它允许你使用变量、嵌套规则、 mixins、导入等众多功能， 并且完全兼容 CSS 语法。 Sass 有助于保持大型样式表结构良好， 同时也让你能够快速开始小型项目， 特别是在搭配 Compass 样式库一同使用时。")]),n._v(" "),r("h3",[n._v("1. 变量")]),n._v(" "),r("p",[n._v("\n        sass使用$标识符作为变量的识别。变量可以储存颜色、字体等任何你想要重复利用的css值\n    ")]),n._v(" "),r("pre",[n._v("\n        $color: #FFF;\n        body {\n            color: $color;\n        }\n    ")]),n._v(" "),r("h3",[n._v("2. 嵌套")]),n._v(" "),r("p",[n._v("嵌套规则允许css像html一样拥有层级逻辑，但是过重的嵌套通常被认为是不好的体验")]),n._v(" "),r("pre",[n._v("\n        nav {\n            ul {\n                margin: 0;\n                padding: 0;\n                list-style: none;\n            }\n\n            li { display: inline-block; }\n\n            a {\n                display: block;\n                padding: 6px 12px;\n                text-decoration: none;\n            }\n        }\n    ")]),n._v(" "),r("h3",[n._v("3. 局部")]),n._v(" "),r("p",[n._v("\n        我们可以将css文件分割为多个不同的sass片段，并且这样会使得你的代码具有更好的维护性。我们可以用 _ 开头作为标识，比如 _partical.scss ,当你看到这样的标识的时候，说明这部分未见应该被打包入css中。 sass片段使用@import指令\n    ")]),n._v(" "),r("h3",[n._v("4. import")]),n._v(" "),r("p",[n._v("你也可以用@import引入css片段来分割css代码，作为不同的块。但是这样做有一个坏处就是会增加http请求。sass的@import也是建立在css的@import上，但是却减少了http请求。因为sass文件最终会打包成为一个css文件在浏览器端解析。")]),n._v(" "),r("p",[n._v("现在你有两个文件： _reset.scss 和 base.scss。我们希望将 _reset.scss引入base.scss中")]),n._v(" "),r("pre",[n._v("\n        // _reset.scss\n        html,\n        body,\n        ul,\n        ol {\n        margin: 0;\n        padding: 0;\n        }\n\n        // base.scss\n        @import 'reset';\n\n        body {\n          font: 100% Helvetica, sans-serif;\n          background-color: #efefef;\n        }\n\n        // 最后css文件\n        html, body, ul, ol {\n            margin: 0;\n            padding: 0;\n        }\n\n        body {\n            font: 100% Helvetica, sans-serif;\n            background-color: #efefef;\n        }\n    ")]),n._v(" "),r("h3",[n._v("5. 混合器")]),n._v(" "),r("p",[n._v("很多时候，我们的css代码都比较乏味，尤其是css3中有比较多的属性都需要写浏览器前缀，这是一个比较枯燥的事。这时候我们可以选择使用混合器，并且可以向混合器中传入参数，使得混合器变得更加灵活。")]),n._v(" "),r("pre",[n._v("\n        @mixin border-radius($radius) {\n            -webkit-border-radius: $radius;\n            -moz-border-radius: $radius;\n            -ms-border-radius: $radius;\n            border-radius: $radius;\n        }\n        .box { @include border-radius(10px); }\n    ")]),n._v(" "),r("p",[n._v("创建混合器：首先，我们使用@mixin指令，其次，为这个混合器取名，方便在其他地方调用(比如我们这里的border-radius)，然后，可以向混合器传递参数，最后在我们需要的地方调用就可以了")]),n._v(" "),r("h3",[n._v("6. 继承")]),n._v(" "),r("p",[n._v("我们可以选择将我们的样式选择去继承另一个样式的属性")]),n._v(" "),r("pre",[n._v("\n        .message {\n            border: 1px solid #ccc;\n            padding: 10px;\n            color: #333;\n        }\n\n        .success {\n            @extend .message;\n            border-color: green;\n        }\n\n        .error {\n            @extend .message;\n            border-color: red;\n        }\n\n        .warning {\n            @extend .message;\n            border-color: yellow;\n        }\n    ")]),n._v(" "),r("p",[n._v("解析后：")]),n._v(" "),r("pre",[n._v("\n        .message, .success, .error, .warning {\n            border: 1px solid #cccccc;\n            padding: 10px;\n            color: #333;\n        }\n\n        .success {\n            border-color: green;\n        }\n\n        .error {\n            border-color: red;\n        }\n\n        .warning {\n            border-color: yellow;\n        }\n    ")]),n._v(" "),r("h3",[n._v("7. 运算符")]),n._v(" "),r("p",[n._v("sass文件支持简单的加减乘除运算")]),n._v(" "),r("pre",[n._v('\n        .container { width: 100%; }\n\n        article[role="main"] {\n            float: left;\n            width: 600px / 960px * 100%;\n        }\n\n        aside[role="complimentary"] {\n            float: right;\n            width: 300px / 960px * 100%;\n        }\n    ')]),n._v(" "),r("p",[n._v("解析后:")]),n._v(" "),r("pre",[n._v('\n        .container {\n            width: 100%;\n        }\n\n        article[role="main"] {\n            float: left;\n            width: 62.5%;\n        }\n\n        aside[role="complimentary"] {\n            float: right;\n            width: 31.25%;\n        }\n    ')])])}]}}});
//# sourceMappingURL=8.80f0b245dafca01944fe.js.map