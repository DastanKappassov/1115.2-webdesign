$(function(){
    // NAV
    $(".nav>ul>li").mouseenter(function(){
        $(this).children(".subnav").stop(true).slideDown(200)
    })
    $(".nav>ul>li").mouseleave(function(){
        $(this).children(".subnav").stop(true).slideUp(200)
    })

    // SLIDES
    setInterval(function(){
        $('.slides').animate({'margin-left':'-100%'},function(){
            $('.slide:first').appendTo('.slides')
            $('.slides').css({'margin-left':'0%'})
        })
    },5000)

    // TABS
    $('.gallery>a>h3').click(function(){
        $(this).addClass('active');
        $('.notice>a>h3').removeClass('active');
        $('.notice>a>.icon').removeClass('select');
        $('.gallery>a>.icon').addClass('select');
        $('.notice>ul').stop(true).fadeOut(100);
        $('.gallery>ul').stop(true).fadeIn(100);
    });
    $('.notice>a>h3').click(function(){
        $(this).addClass('active');
        $('.gallery>a>h3').removeClass('active');
        $('.gallery>a>.icon').removeClass('select');
        $('.notice>a>.icon').addClass('select');
        $('.gallery>ul').stop(true).fadeOut(100);
        $('.notice>ul').stop(true).fadeIn(100);
    });

    // POPUP
    $('.notice>ul>li:nth-child(2)').click(function(){
        $('#popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200)
    })
});