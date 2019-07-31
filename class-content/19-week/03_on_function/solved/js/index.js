// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Part 1 event Listener Here
$('#button1').on("click", function(){
  $('.hideMe').slideToggle();
});
// Part 2 event listener here
$('#button2').on("click", function(){
  $('.cssChange').css("background-color","red");
});
// Part 3 event listener here
$('#button3').on("click", function(){
  $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
});
