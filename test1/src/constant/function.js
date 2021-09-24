export const isIOS = function () {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1 || u.indexOf('iPad') > -1
}
export const isPC = function () {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod'
  ]
  let flag = true
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) != -1) {
      flag = false
      break
    }
  }
  return flag
}
