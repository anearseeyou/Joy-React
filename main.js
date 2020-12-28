
import { JoyReact, Component } from './JoyReact.js'

// 把结构抽象成组件
class JoyComponent extends Component {
  render(){
    return <div>
            <h1>2020年年终述职</h1>
            <h2>汽车事业</h2>
            <h3>前端研发部 - 郑炳懿</h3>
            { this.children }
          </div>
  }
}

let joy = <JoyComponent name='joy' id='joy'>
            <h3>郑炳懿</h3>
          </JoyComponent>

// document.body.append(joy)

// 渲染真实dom
JoyReact.render(
  joy,
  document.body
)




/*
var joy = JoyReact.createElement("div", {
  name: "joyName",
  id: "joyId"
}, 
JoyReact.createElement("span", null, "2020年年终述职"), 
JoyReact.createElement("span", null, "汽车事业部"), 
JoyReact.createElement("span", null, "前端研发部-郑炳懿!"));
*/

// JoyReact.render(
//   joy,
//   document.body
// )

// 渲染dom
// let joy = <div name='joyName' id='joyId'>
//             <span>Hello</span>
//             <span>Joy</span>
//             <span>React!</span>
//           </div>
// document.body.appendChild(joy)

// console.log(joy)



