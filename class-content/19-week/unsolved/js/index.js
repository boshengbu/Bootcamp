function fade(){
    $('.preloader').fadeOut("slow");
  };
setTimeout(fade, 3000);

setTimeout( function() {
    $('#fadeIn').fadeIn();
    }, 4000);
setTimeout( function() {
    $('#tourFade').fadeIn();
    }, 7000);

$('.toggle').click(function(){
    $(this).find('.toggleContainer').toggleClass('active');
    $(this).sibling('.toggle').find('.toggleContainer').removeClass('active');
  });
