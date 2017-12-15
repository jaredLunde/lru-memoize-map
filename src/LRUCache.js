export default function LRUCache (size, multiArgs = false) {
  const cache = new Map()

  function getIterable (key) {
    let entryKey

    for (let k of cache.keys()) {
      let x
      let wasEqual = true

      for (x = 0; x < k.length; x++) {
        if (key[x] !== k[x]) {
          wasEqual = false
          break;
        }
      }

      if (wasEqual) {
        entryKey = k
        break
      }
    }

    return entryKey === void 0 ? void 0 : cache.get(entryKey)
  }

  const getter = multiArgs === true ? getIterable : cache.get.bind(cache)

  function get (key) {
    const item = getter(key)

    // found a cached entry
    if (item !== void 0) {
      // move it to the end of the cache
      cache.delete(key)
      cache.set(key, item)
      // delete the entry at the front of the cache
      if (cache.size > size) {
        const cacheIter = cache.keys()
        cache.delete(cacheIter.next().value)
      }
      // return the entry
      return item
    }
    // console.log('Uncached:', key)
    // no entry found in cache, return undefined
    return void 0
  }

  return {get, set: cache.set.bind(cache)}
}
