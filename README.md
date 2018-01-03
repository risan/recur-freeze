# Recursive Freeze

[![Latest Stable Version](https://img.shields.io/npm/v/recur-freeze.svg)](https://www.npmjs.com/package/recur-freeze)
[![Build Status](https://travis-ci.org/risan/recur-freeze.svg?branch=master)](https://travis-ci.org/risan/recur-freeze)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1c31b284f31bbaf20cf8/test_coverage)](https://codeclimate.com/github/risan/recur-freeze/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/1c31b284f31bbaf20cf8/maintainability)](https://codeclimate.com/github/risan/recur-freeze/maintainability)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/recur-freeze)
[![License](https://img.shields.io/npm/l/recur-freeze.svg)](https://www.npmjs.com/package/recur-freeze)

A Javascript package to recursively freeze an object, array or function.

## Install

You can install this package through NPM:

```bash
$ npm install recur-freeze
```

You can also use this library on browser. Simply load the UMD bundle like so:

```html
<!-- For development -->
<script src="https://unpkg.com/recur-freeze@latest/dist/recur-freeze.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/recur-freeze@latest/dist/recur-freeze.umd.min.js"></script>
```

## Usage

```js
const recurFreeze = require('recur-freeze');

const jedi = {
  name: 'Luke Skywalker',
  middleName: null,
  age: 19,
  address: {
    street: 'Moisture Farm',
    planet: 'Tatooine'
  },
  masters: ['Obi-Wan Kenobi', 'Yoda']
};

// Freeze the jedi object
recurFreeze(jedi);

// Can't change the property value
jedi.name = 'Anakin Skywalker';
console.log(jedi.name); // Luke Skywalker

// Can't change the null property
jedi.middleName = 'Starkiller';
console.log(jedi.middleName); // null

// Can't change nested object property
jedi.address.planet = 'Degobah';
console.log(jedi.address.planet); // Tatooine

// Can't change the array item
jedi.masters[1] = 'Palpatine';
console.log(jedi.masters[1]); // Yoda

// Can't add new property to object
jedi.address.postalCode = 12345;
console.log(jedi.address.postalCode); // undefined

// Can't add new item to array
jedi.masters[3] = 'Qui-Gon Jinn';
console.log(jedi.masters); // [ 'Obi-Wan Kenobi', 'Yoda' ]

// Can't delete the property from object
delete jedi.address.planet;
console.log(jedi.address.planet); // Tatooine

// Can't delete an array item
delete jedi.masters[1];
console.log(jedi.masters); // [ 'Obi-Wan Kenobi', 'Yoda' ]
```

Note that when you're using a [`strict`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) mode, any attempt on changing the frozen object will throw a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) exception.

## License

CC-BY-SA 4.0 · [Risan Bagja Pradana](https://risan.io)

This package is based on code sample at MDN `Object.freeze` [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/MDN/About$history).
