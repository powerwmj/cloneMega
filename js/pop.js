
$('.open').on('click', function(){
    $('body').addClass('lock');
    $('.pop_w').fadeIn(500);
    $('.back').fadeIn(500);
    $('.pop_cont').fadeIn(500);
});

$('.close').on('click', function(){
    
    $('body').removeClass('lock');
    $('.back').fadeOut(500);
    $('.pop_w').fadeOut(500);
});