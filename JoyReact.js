/*
 * @Author: zhengbingyi
 * @Date: 2020-12-27 22:01:25
 * @LastEditors: zhengbingyi
 * @LastEditTime: 2020-12-28 00:26:55
 * @Descripttion: 
 */
// 定义一个包装element的类
class ElementWrapper {
  constructor(type){
    this.root = document.createElement(type)
  }
  setAttribute(name,value){
    this.root.setAttribute(name,value)
  }
  appendChild(vchild){
    vchild.mountTo(this.root)
  }
  mountTo(parent){
    parent.appendChild(this.root)
  }
}
// 定义一个包装text的类
class TextWrapper {
  constructor(content){
    this.root = document.createTextNode(content)
  }
  mountTo(parent){
    parent.appendChild(this.root)
  }
}

export let JoyReact = {
  createElement(type, attributes, ...children){
    console.log(arguments)
    let element
    if(typeof type === 'string') element = new ElementWrapper()
    else element = new type
    for(let name in attributes){  // attributes 就是传过来的name和id 等属性
      element.setAttribute(name,attributes[name])
    }
    for(let child of children){  // children 就是传过来的span等元素
      if(typeof child === 'string') child = new TextWrapper(child)
      element.appendChild(child)
    }
    return element
  },
  render(vdom,element){
    vdom.mountTo(element)
  }
}