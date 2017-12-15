import LRUCache from './LRUCache'


export default function memoize (size = 1, opt = {coalesceWith: void 0, multiArgs: false}) {
  const cache = LRUCache(size, opt.multiArgs)

  return function (fn) {
    return function (...args) {
      let key

      if (args.length > 1) {
        if (opt.coalesceWith !== void 0) {
          key = opt.coalesceWith(args)
        } else {
          key = args
        }
      } else {
        key = args[0]
      }

      let item = cache.get(key)

      if (item === void 0) {
        item = fn(...args)
        cache.set(key, item)
      }

      return item
    }
  }
}
