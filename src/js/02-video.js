import _throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY_V = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const Play = function (e) {
  localStorage.setItem(KEY_V, e.seconds);
};
player.on('timeupdate', _throttle(Play, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_V)));

console.log(player)