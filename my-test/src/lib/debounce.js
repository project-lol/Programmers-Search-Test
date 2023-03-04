export const debounce = (callback, delay) => {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(_ => callback.apply(this, arguments), delay)
  }
}
