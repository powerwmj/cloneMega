let pos = {y: 0, dy:0, state: true} // true : 스크롤 내릴때, false : 스크롤 올릴때
    window.onscroll = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;

        if($('header').height() < window.scrollY){
            $('.gnb').addClass('active');
        } else {
            $('.gnb').removeClass('active');
        }

        let innerH = window.innerHeight;
        let conH = $('.container').innerHeight();

        if( innerH * .5 < window.scrollY) {
            $('.quick_w').fadeIn();
        } else {
            $('.quick_w').fadeOut();
        }


        

        if ( conH * .7 < window.scrollY) {
            $(".quick_w").addClass('active')
            //alert(conH)
        } else {
            $(".quick_w").removeClass('active');
        }


        $(".quick_w a").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
    }