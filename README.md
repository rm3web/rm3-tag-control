# rm3 Tag Control

[![Build Status](https://travis-ci.org/rm3web/rm3-tag-control.svg?branch=master)](https://travis-ci.org/rm3web/rm3-tag-control)

I can guarantee this isn't yet useful.

It will eventually be a linked data (I'm avoiding using the word RDF : ) ) tagging UI in React.

## Targets

* `npm run prepubish` - will use babel to transpile jsx and es6 code to plain es5 javascript to the `dist` folder
* `npm run spa` - starts a web server at `http://localhost:9000` with a single page app that will require your already transpiled react module.
* `npm test`  - will use mocha to run all `rm3-tag-control/test` files

## Thanks

 * https://github.com/VikramN/Re-Tag - I cribbed and/or coppied sections of VikramN's tag editor.
 * https://github.com/goncalvesjoao/react-to-commonJS - Fired up all of the basic deps.