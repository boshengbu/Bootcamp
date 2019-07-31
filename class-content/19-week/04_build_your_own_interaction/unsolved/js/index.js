// Add Event Listener Below

var rotated = false;
var rainbow = false;

$(".top").on("click", function(){
    $(".toggle").slideToggle();
    if(rotated === false) {
        $(".rotate").css({'transform' : 'rotate(180deg)'});
        rotated = true;
    } else {
        $(".rotate").css({'transform' : 'rotate(0deg)'});
        rotated = false;
    }
    if(rainbow === false) {
        $(".toggle").css('backgroundImage','linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)');
        rainbow = true;
    } else {
        $(".toggle").css('backgroundImage','linear-gradient(to right, white, gray)');
        rainbow = false;
    }
    
 });
 $('.click').on("click ", function(){
    $('.wrapper').append("<div class='child'>SUPRISE MUTHAFUKA!</div>" )
    console.log("YOU HAVE TRIGGERED THE KILLER QUEEN THIRD BOMB! BITE ZA DUSTO")
    });
   append=true;