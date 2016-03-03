

$(window).on('load', function() {
 	$('body').scrollspy({ target: '#navbarScroll' ,offset:150})
      var flag = false,
      main_header_height = $('#navbarScroll').height(),
      second_header_top = $('#navbarScroll').offset().top;

    $(window).on('resize scroll',function() {
       if ($(window).width() >= 780) { 
          if(($(window).scrollTop()) >= second_header_top){
            $('.department-list').addClass('fixtop');
            flag = true;
          }
          else if(flag){
            $('.department-list').removeClass('fixtop');
            flag = false;
          }
        }
    });
 });
