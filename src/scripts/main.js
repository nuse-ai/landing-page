// ANIMEJS
import anime from 'animejs/lib/anime.es.js';

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
