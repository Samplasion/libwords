# libwords

`libwords` is a tiny library for word utils.

> DEVELOPMENT version

## Usage

```js
const ln = require("libnouns");

console.log(ln.plural(2, "apple")) // => 2 apples
console.log(ln.wordPlural("match")) // => matches
console.log(ln.wordSingular("queries")) // => query
console.log(ln.wordSingular("freebies", true)) // => freebie
```

The second parameter in `ln.wordSingular` is whether the word, if it ends in "ies", should end in 'y' or 'ie'.

## Documentation

 * [Documentation](http://samplasion.github.io/libwords)
