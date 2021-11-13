$(document).ready(function() { 
  const clock = () => {
    var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes();
    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes);
    function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);
  const signal = () => {
    navigator.getBattery().then(function(battery) {
      battery.addEventListener('levelchange', function() {
        let level_ = (battery.level)? battery.level : 1;
        document.write((battery.level*100)+"%");
      })
      document.write((battery.level*100)+"%");
    });
  }
  //signal();

  // var body_ = $('#app');
  // body_.append('<button onclick="openFullscreen();" id="fcMode">Fullscreen</button>')

  // $('html').find('body #fcMode').click();
  
}); 

function openFullscreen() {
  var elem = document.getElementById("app");
  if (
    document.fullscreenEnabled || /* Standard syntax */
    document.webkitFullscreenEnabled || /* Safari */
    document.msFullscreenEnabled /* IE11 */
  ) {
   
    /* Show the element in fullscreen */
    if (elem.requestFullscreen) {
      elem.requestFullscreen(); /* Standard syntax */
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
}