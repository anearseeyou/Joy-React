/*
 * @Author: zhengbingyi
 * @Date: 2020-12-27 22:02:04
 * @LastEditors: zhengbingyi
 * @LastEditTime: 2020-12-27 22:57:25
 * @Descripttion: 
 */
module.exports = {
  entry:{
    main:'./main.js',
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env'],
            plugins:[[
              '@babel/plugin-transform-react-jsx',  // babel 解析jsx的语法
              {
                pragma:'JoyReact.createElement'  // 文本替换，如果不加，则默认会寻找React.createElement
              }
            ]]
          }
        }
      }
    ]
  },
  mode:"development",
  optimization:{
    minimize:false
  }
}