# Recursive Freeze

[![Build Status](https://flat.badgen.net/travis/risan/recur-freeze)](https://travis-ci.org/risan/recur-freeze)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/recur-freeze)](https://codeclimate.com/github/risan/recur-freeze)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/recur-freeze)](https://codeclimate.com/github/risan/recur-freeze)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)

[![Greenkeeper](https://badges.greenkeeper.io/risan/recur-freeze.svg?style=flat-square)](https://greenkeeper.io/)
[![Dev Dependencies](https://flat.badgen.net/david/dev/risan/recur-freeze)](https://david-dm.org/risan/recur-freeze?type=dev)

[![Latest Stable Version](https://flat.badgen.net/npm/v/recur-freeze)](https://www.npmjs.com/package/recur-freeze)
[![Node Version](https://flat.badgen.net/npm/node/recur-freeze)](https://www.npmjs.com/package/recur-freeze)
[![License](https://flat.badgen.net/npm/license/recur-freeze)](https://github.com/risan/recur-freeze/blob/master/LICENSE.txt)
[![Minified Gzip](https://flat.badgen.net/bundlephobia/minzip/recur-freeze)](https://bundlephobia.com/result?p=recur-freeze)

Freeze an object recursively.

## Install

```bash
$ npm install recur-freeze

# Or if you use Yarn
$ yarn add recur-freeze
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/recur-freeze@latest/dist/recur-freeze.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/recur-freeze@latest/dist/recur-freeze.umd.min.js"></script>
```

## Quick Start

```js
const recurFreeze = require("recur-freeze");

const jedi = {
  name: "Luke Skywalker",
  middleName: null,
  age: 19,
  address: {
    street: "Moisture Farm",
    planet: "Tatooine"
  },
  masters: ["Obi-Wan Kenobi", "Yoda"]
};

// Freeze the jedi object
recurFreeze(jedi);

// Can't change the property value
jedi.name = "Anakin Skywalker";
console.log(jedi.name); // Luke Skywalker

// Can't change the null property
jedi.middleName = "Starkiller";
console.log(jedi.middleName); // null

// Can't change the nested object property
jedi.address.planet = "Degobah";
console.log(jedi.address.planet); // Tatooine

// Can't change the array item
jedi.masters[1] = "Palpatine";
console.log(jedi.masters[1]); // Yoda

// Can't add a new property
jedi.address.postalCode = 12345;
console.log(jedi.address.postalCode); // undefined

// Can't add a new item to the array
jedi.masters[3] = 'Qui-Gon Jinn';
console.log(jedi.masters); // [ 'Obi-Wan Kenobi', 'Yoda' ]

// Can't delete the property
delete jedi.address.planet;
console.log(jedi.address.planet); // Tatooine

// Can't delete the array item
delete jedi.masters[1];
console.log(jedi.masters); // [ 'Obi-Wan Kenobi', 'Yoda' ]
```

Note that when you're using a [`strict`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) mode, any attempt on changing the frozen object will throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) exception.

## License

CC-BY-SA 4.0 · [Risan Bagja Pradana](https://bagja.net)

This package is based on code sample at MDN `Object.freeze` [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/About$history).
