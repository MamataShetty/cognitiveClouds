
$(window).on('load', function() {
  /* to check view port */

   var scroll = $(document).scrollTop();   
   var headerHeight = $('.navbar-fixed-top').outerHeight();


    $('#sort-news button').click(function() {
        $("#sort-news button.active").removeClass("active");
        $(this).addClass('active');
        var filter = $(this).val()
        filterList(filter);
    });

    /* animation for flixster*/
      if($('body').is('.flixster-animate')){
       doCheck();
      }
       /* yatra carousel for yatra */
      $(".carousel-yatra-bg .carousel").carousel({
           interval : 1500
       });

      $("#carousel-slide").carousel();

    $(window).scroll(function() { 
      var scrolled = $(document).scrollTop();

       if( scrolled > 100) {
        $('.navbar').addClass('custom-navabar');
       }
       else {
          $('.navbar').removeClass('custom-navabar');
        }

         /* animation for device */
        if($('body').is('.viewport-check')){
         doCheck();
        }

     });

    /* clock */

     $('#aclock').each(function () {
        updateTime();
      });

     /* usa clock */

     $('#aclock-usa').each(function () {
        updateTimeUsa()
      });

     /* singapore */
     $('#aclock-sp').each(function () {
        updateTimeSingapore();
      });

});
// filter function
function filterList(value) {
    var list = $(".more-customers .customer-block");
    $(list).hide();
    if (value == "All") {
        $(".more-customers").find(".customer-block").each(function (i) {
            $(this).show();
        });
    } else {
        //Notice this *=" <- This means that if the data-category contains multiple options, it will find them
        //Ex: data-category="Cat1, Cat2"
        $(".more-customers").find("div[data-category*=" + value + "]").each(function (i) {
            $(this).show();
        });
    }
}

/* viewport checker */
$.fn.isVisible = function() {
    // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
    // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
    // That is why either width or height have to be &gt; 0.
    var rect = this[0].getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function doCheck() {
    var elementToDetect = $('.image-section');
    
    if (elementToDetect.isVisible()) {
        $(".image-section").addClass("custom-animation");
    } else {
        $(".image-section").removeClass("custom-animation");
    }
    
}


/* js to rotate clock */

function updateTime() {
  // Get time from moment.js with specified format
  var now = moment().format("hhmmssdA");
  
  // Move the clock hands
  rotateHands(now[4]+now[5],now[2] + now[3],now[0] + now[1], now[7] + now[8]);
  setTimeout(updateTime, 1000);
}

function rotateHands(sec,min,hour,period) {
  var degSec = 360/60*sec;
  var degMin = 360/60*min;
  var degHour = 360/12*hour;

  var pd = period;

  var sHand = $('#secondhand');
  sHand.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)" 
    });

  var mHand = $('#minutehand');
  mHand.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)"
    });

  var hHand = $('#hourhand');
  hHand.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)" 
    });

  $("#period").text(pd);

   
   var isNight = false;
   var hourin24 = parseInt(moment().format("HHmmss").slice(0,2));
   if(hourin24 > 18 || hourin24 < 6){
    isNight = true;
   }
    $('#aclock').removeClass(isNight ? 'light' : 'dark').addClass(isNight ? 'dark' : 'light');
}



/* js to rotate clock  */

function updateTimeUsa() {

  // Get time from moment.js with specified format
  var now = moment().subtract({hour: 13, minute: 30}).format("hhmmssdA");
  
  // Move the clock hands
  rotateHandsUsa(now[4]+now[5],now[2] + now[3],now[0] + now[1], now[7] + now[8]);
  setTimeout(updateTimeUsa, 1000);
}

function rotateHandsUsa(sec,min,hour,period) {
  var degSec = 360/60*sec;
  var degMin = 360/60*min;
  var degHour = 360/12*hour;
  var pd = period;

  var sHand = $('#second-hand-usa');
  sHand.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)" 
    });

  var mHand = $('#minute-hand-usa');
  mHand.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)"
    });

  var hHand = $('#hour-hand-usa');
  hHand.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)" 
    });
   $("#period-usa").text(pd);

   var isNight = false;
   var hourin24 = parseInt(moment().subtract({hour: 13, minute: 30}).format("HHmmss").slice(0,2));
   if(hourin24 > 18 || hourin24 < 6){
    isNight = true;
   }
    $('#aclock-usa').removeClass(isNight ? 'light' : 'dark').addClass(isNight ? 'dark' : 'light');


    // var isNight = hour >= 19 || (hour < 5 && min <= 59 && sec <= 59); 
    
}
/* js for singapore clock */

function updateTimeSingapore() {
  var now = moment().add({hour: 2, minute: 30}).format("hhmmssdA");
  rotateHandsSingapore(now[4]+now[5],now[2] + now[3],now[0] + now[1], now[7] + now[8]);
  setTimeout(updateTimeSingapore, 1000);
}
function rotateHandsSingapore(sec,min,hour,period) {
  var degSec = 360/60*sec;
  var degMin = 360/60*min;
  var degHour = 360/12*hour;
  var pd = period;

  var sHand = $('#second-hand-sp');
  sHand.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)" 
    });

  var mHand = $('#minute-hand-sp');
  mHand.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)"
    });

  var hHand = $('#hour-hand-sp');
  hHand.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)" 
    });
   $("#period-sp").text(pd);

   var isNight = false;
   var hourin24 = parseInt(moment().add({hour: 2, minute: 30}).format("HHmmss").slice(0,2));
   if(hourin24 > 18 || hourin24 < 6){
    isNight = true;
   }
    $('#aclock-sp').removeClass(isNight ? 'light' : 'dark').addClass(isNight ? 'dark' : 'light');


    // var isNight = hour >= 19 || (hour < 5 && min <= 59 && sec <= 59); 
    
}