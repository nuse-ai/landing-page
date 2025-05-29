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

var span = document.getElementById('span');

function time() {
  span.textContent = 
     formatAMPM(new Date())
}

setInterval(time, 1000);

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours %= 12;
  hours = hours || 12;    
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes}`;

  return strTime;
};