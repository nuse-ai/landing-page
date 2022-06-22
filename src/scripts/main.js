// Get all utils
import * as exports from './utils';
// ANIMEJS
import anime from 'animejs/lib/anime.es.js';
// Smooth scrollbar
import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('html'), {
  damping: 0.1,
  renderByPixels: true,
  continuousScrolling: true,
});

Object.entries(exports).forEach(([name, exported]) => window[name] = exported);
const $ = (selector) => document.querySelector(selector);

getOctaneCommit().then(res => {
  let ele = $("#octane-commit");
  ele.innerHTML = getHash(res);
  insertDate(ele, getDate(res));
})

getRTomlCommit().then(res => {
  let ele = $("#rtoml-commit");
  ele.innerHTML = getHash(res);
  insertDate(ele, getDate(res));
})

getCoChatCommit().then(res => {
  let ele = $("#cochat-commit");
  ele.innerHTML = getHash(res);
  insertDate(ele, getDate(res));
})


getSanitizerCommit().then(res => {
  let ele = $("#sanitizer-commit");
  ele.innerHTML = getHash(res);
  insertDate(ele, getDate(res));
})

anime({
  targets: '.equals',
  left: 0,
  duration: 800
});

anime({
  targets: '.top',
  opacity: 1,
  top: 0,
  delay: function (el, i, l) {
    return i * 200;
  },
});

anime({
  targets: '.right',
  opacity: 1,
  right: 0,
  delay: function (el, i, l) {
    return i * 200;
  },
});

anime({
  targets: '.left',
  opacity: 1,
  left: 0,
  delay: function (el, i, l) {
    return i * 200;
  },
});

anime({
  targets: '.dots',
  opacity: 1,
  delay: function (el, i, l) {
    return i * 1000;
  },
})
