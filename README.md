`yarn add lru-memoize-map`


```js
import memoize from 'lru-memoize-map'

// Single-argument memoization
const memoizer = memoize(1024)(
  function (arg) {
    // do some work
  }
)


// Multi-argument memoization
// This option creates an array from the arguments and uses that as the Map
// key. All entries in the cache must be checked for matches on the argument
// array in this case each time the cache is utilized.
const multiArgMemoizer = memoize(1024, {multiArg: true})(
  function (arg1, arg2) {
    // do some work
  }
)


// Multi-argument memoization with JSON serializable arguments
// the 'coalasceWith' option is used to coalesce multiple arguments
// into a single argument
const jsonArgMemoizer = memoize(1024, {coalesceWith: JSON.stringify})(
  function (arg1, arg2) {
    // do some work
  }
)
```
