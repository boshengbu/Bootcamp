$(".calculate").keyup(function(){
    // add carrots variable here
    var carrots = parseInt($("#carrots").val()) || 0;
    // add carrotsPrice variable here
    var carrotPrice = carrots * 180.00;
    // add onions variable here
    var onions= parseInt($("#onions").val()) || 0;
    // add carrotsPrice variable here
    var onionsPrice = onions * 250.00;
    // add onionsPrice variable here

    // add potatoes variable here
    var potatoes= parseInt($("#potatoes").val()) || 0;
    // add carrotsPrice variable here
    var potatoesPrice = potatoes * 1337.50;
    // add potatoesPrice variable here

    // add total variable here
    var total = potatoesPrice + onionsPrice + carrotPrice;
    // set totalPrice value equal to total variable
    $('.totalPrice').val(total+" "+"have fun starving")
    
});
