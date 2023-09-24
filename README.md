<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterFactorialln

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively evaluates the natural logarithm of the [factorial function][@stdlib/math/base/special/factorialln].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterFactorialln from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-factorialln@esm/index.mjs';
```

#### iterFactorialln( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively evaluates the natural logarithm of the [factorial function][@stdlib/math/base/special/factorialln].

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var it = iterFactorialln( array2iterator( [ 3.0, -1.5, -0.5 ] ) );
// returns <Object>

var r = it.next().value;
// returns ~1.79176

r = it.next().value;
// returns ~1.26551

r = it.next().value;
// returns ~0.57236

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-discrete-uniform@esm/index.mjs';
import iterFactorialln from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-special-factorialln@esm/index.mjs';

// Create a seeded iterator for generating pseudorandom numbers:
var rand = discreteUniform( 0, 171, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterFactorialln( rand );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/factorialln`][@stdlib/math/base/special/factorialln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the factorial function.</span>
-   <span class="package-name">[`@stdlib/math-iter/special/factorial`][@stdlib/math/iter/special/factorial]</span><span class="delimiter">: </span><span class="description">create an iterator which evaluates the factorial function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-special-factorialln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-special-factorialln

[test-image]: https://github.com/stdlib-js/math-iter-special-factorialln/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-iter-special-factorialln/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-special-factorialln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-special-factorialln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-special-factorialln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-special-factorialln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-special-factorialln/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-special-factorialln/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-special-factorialln/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-special-factorialln/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-special-factorialln/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/math/base/special/factorialln]: https://github.com/stdlib-js/math-base-special-factorialln/tree/esm

[@stdlib/math/iter/special/factorial]: https://github.com/stdlib-js/math-iter-special-factorial/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
