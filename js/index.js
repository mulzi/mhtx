function imgRun(boxId, lefte, nextr) {
    var len = $(boxId).children('ul').children('li').length;
    var liW = $(boxId).children('ul').children('li').width() + 11.333;
    var boxUlW = len * liW;
    var ulw = $(boxId).children('ul');
    ulw.css({
        width: boxUlW + 'px',
    });
    var index = 0;

    function runlun() {
        ulw.stop().animate({
            left: -(index * liW)
        }, 600);

    };


    $(lefte).click(function() {

        index++;
        if (index >= len - 3) {
            index = len - 4
        } else {
            runlun();
        }
        console.log(index)
    });
    $(nextr).click(function() {

        index--;
        if (index < 0) {
            index = 0
        } else {
            runlun();
        }

        console.log(index)
    })


}
imgRun(".img_team_ov", ".pre_c", ".right_c"); //主页设计师左右点击

// $(function() {
//     $(window).scroll(function() {
//         $('.sc_top').remove();
//         if ($(window).scrollTop() >= 900) {
//             $('<div class="sc_top">\
// 			 <img src="./img/ftop.png" title="返回顶部">\
// 			   </div>').appendTo('.foot');
//             $('.sc_top').click(function() {
//                 $('html,body').animate({
//                     scrollTop: 0,
//                 }, 800)
//             })
//         } else {
//             $('.sc_top').fadeOut();
//         }
//     });

// })

$(function() {
    $('.news_menu ul li').mouseenter(function() {
        $(this).siblings().removeClass('action');
        $(this).addClass('action');
        $('.news_list_right dl').eq($(this).index()).siblings().css({
            display: 'none',
        });
        $('.news_list_right dl').eq($(this).index()).css({
           display: 'block',
        });
    })
})