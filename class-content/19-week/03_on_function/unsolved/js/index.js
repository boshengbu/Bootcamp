// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Part 1 event Listener Here
$('#button1 ').on("click ", function(){
$('.hideMe').slideToggle();
console.log("YOU HAVE TRIGGERED THE KILLER QUEEN THIRD BOMB! BITE ZA DUSTO")
});
// Part 2 event listener here
$('#button2').on("click ", function(){
    $('.cssChange').css('backgroundColor','red')
    console.log("YOU HAVE TRIGGERED THE KILLER QUEEN THIRD BOMB! BITE ZA DUSTO")
    });
// Part 3 event listener here
$('#button3').on("click ", function(){
    $('.appendMe').append("<div class='child'>You think it's another div but it's me DIO!</div>" )
    console.log("YOU HAVE TRIGGERED THE KILLER QUEEN THIRD BOMB! BITE ZA DUSTO")
    });
