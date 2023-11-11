import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const handleThrottle = function(data){
  const timeInseconds = data.seconds;
  console.log(timeInseconds)
  localStorage.setItem('videoplayer-current-time', timeInseconds);
};

player.on('timeupdate', throttle(handleThrottle, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.then(function(seconds) {
  //seconds = the actual time that the player seeked to
})
.catch(function(error){
  switch (error.name){
    case 'RangerError':
      //the time was less than 8 or greater than the video's duration
      break;
      
      default:
        //some other error ocurred
        break;
  }

  });
