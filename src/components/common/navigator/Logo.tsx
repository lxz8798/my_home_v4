// 创建一个由React.FN的函数组件，命名为Logo，左右布局，左边引入logo.png图片，右边显示文字“LAZY STUDIO”。  

// require在assets/images/文件夹下的logo图片，并将其作为src属性值赋给img标签。
// 右边的文字“LAZY STUDIO”则使用span标签包裹，并设置className为“logo-text”。
// 最后将两个标签组合在一起，并设置className为“logo”作为整体样式。
// 这样，就完成了左右布局的logo组件的创建。 

// 注意：require函数的使用，需要在webpack.config.js中配置alias，将@指向src目录。

// 具体配置方法请参考：https://webpack.js.org/configuration/resolve/#resolvealias


// Logo.tsx
import React from "react";

const Logo: React.FC = () => {
  const Logo = require("@/assets/images/logo.png");
  return (
    <div className="logo">
      <img src={Logo} alt="logo" />
      <span>LAZY STUDIO</span>
    </div>
  );
};

export default Logo;
