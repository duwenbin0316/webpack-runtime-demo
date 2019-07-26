
module.exports = function(source) {
  const reg = new RegExp(/(\/\/.*)|(\/\*[\s\S]*?\*\/)/g)

  return source.replace(reg, '')
}
