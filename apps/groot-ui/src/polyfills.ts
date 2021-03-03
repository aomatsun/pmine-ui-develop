
/**
 * Polyfill stable language features. These imports will be optimized by `@babel/preset-env`.
 *
 * See: https://github.com/zloirock/core-js#babel
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';


(window as { global: unknown }).global = window;

(window as { process: unknown }).process = {
  env: { DEBUG: undefined },
  nextTick: require('next-tick')
};

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;
