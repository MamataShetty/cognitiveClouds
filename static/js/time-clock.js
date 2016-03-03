
$(window).on('load', function() {
  var $hands = $('#liveclock div.hand')

  window.requestAnimationFrame = window.requestAnimationFrame
                                 || window.mozRequestAnimationFrame
                                 || window.webkitRequestAnimationFrame
                                 || window.msRequestAnimationFrame
                                 || function(f){setTimeout(f, 60)}


  function updateclock(){
    var curdate = new Date();
    var h = curdate.getHours();
    var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360;
    var minute_as_degree = curdate.getMinutes() / 60 * 360;
    var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360;
    var diem = "AM";


    if (h == 0) {
      h = 12
      } else if (h > 12) {
          h = h - 12;
          diem = "PM";
      }

      var myClock = document.getElementById ("clockDisplay");
      myClock.textContent = diem;


    $hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
    $hands.filter('.hour-usa').css({transform: 'rotate(' + hour_as_degree_usa + 'deg)' })

    $hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
    $hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })
    requestAnimationFrame(updateclock)
  }


  requestAnimationFrame(updateclock);
});