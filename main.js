/*
 * @Author: zhengbingyi
 * @Date: 2020-12-27 22:01:28
 * @LastEditors: zhengbingyi
 * @LastEditTime: 2020-12-28 00:37:59
 * @Descripttion: 
 */
import { JoyReact } from './JoyReact.js'

class JoyComponent {
  render(){
    return <div><span>Hello</span><span>Joy</span><span>React!!!!!!!</span></div>
  }
  setAttribute(name,value){  // setAttribute 就是property
    this[name] = value
  }
  mountTo(parent){
    let vdom = this.render()
    vdom.mountTo(parent)
  }
}

// 把dom抽象成组件
let joy = <JoyComponent name='joy' id='joy'></JoyComponent>

JoyReact.render(
  joy,
  document.body
)

// 渲染dom
// let joy = <div name='joyName' id='joyId'>
//             <span>Hello</span>
//             <span>Joy</span>
//             <span>React!</span>
//           </div>
// document.body.appendChild(joy)

// console.log(joy)



/*
var joy = JoyReact.createElement("div", {
  name: "joyName",
  id: "joyId"
}, 
JoyReact.createElement("span", null, "Hello"), 
JoyReact.createElement("span", null, "Joy"), 
JoyReact.createElement("span", null, "React!"));
*/