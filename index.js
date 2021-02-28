function wrap (fn, hook) {
  return function () {
    return hook.call(this, fn, [].slice.call(arguments))
  }
}

module.exports = function hookable(fn) {

  function hooked () {
    return fn.apply(this, [].slice.call(arguments))
  }

  Object.assign(hooked, fn)

  hooked.hook = function (hook) {
    fn = wrap(fn, hook)
    return this
  }

  return hooked
}
