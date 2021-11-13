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
  setInterval(clock, 1000);
}); 