export function isVNode(node) {
  return typeof node === 'object' && node.hasOwnProperty('componentOptions')
}

/**
 *  获取元素相对于页面的高度
 *  @param node {NodeElement} 指定的DOM元素
 */
export function getActualTop(node) {
  let actualTop = node.offsetTop
  let current = node.offsetParent

  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent
  }

  return actualTop
}

/**
 *  获取元素相对于页面左侧的宽度
 *  @param node {NodeElement} 指定的DOM元素
 */
export function getActualLeft(node) {
  let actualLeft = node.offsetLeft
  let current = node.offsetParent

  while (current !== null) {
    actualLeft += current.offsetLeft
    current = current.offsetParent
  }

  return actualLeft
}

/**
 *  判断是否为整形数字
 */
export function isInteger(obj) {
  return typeof obj === 'number' && obj % 1 === 0
}
