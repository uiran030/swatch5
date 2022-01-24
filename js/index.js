$('.open').on('click', function(){
    $(this).toggleClass('on')
    $(this).next().toggleClass('on')
    if ($(this).hasClass('on')) {
        $('html').css({overflowY:'hidden'})
    } else {
        $('html').css({overflowY:'auto'})
    }
})


var cflag = false
function liscroll(num){
    cflag = ture;
    var offleft = $('#wrap section').eq(num).offset().left
    // var offtop = $(window).height()*index
    $('html').animate({scrollLeft:offleft}, 500, function(){cflag = false})
}

//openlist의 메뉴를 클릭하면, openlist가 닫히게 하기
$('.openlist li a').on('click', function(){
    $(this).parents('.openlist').removeClass('on')
    $('.open').removeClass('on')
    $('html').css({overflowY:'auto'})
    var index = $(this).parent().index()
    $('#menu li').eq(index).addClass('on').siblings().removeClass('on')
    liscroll(index)
    return false
})

$('#menu li a').on('click', function(){
    $(this).parent().addClass('on').siblings().removeClass('on')
    var index = $(this).parent().index()
    liscroll(index)
    return false
})


var wh0 = $('section').eq(0).offset().left       //$(this).height()*0
var wh1 = $('section').eq(1).offset().left       //$(this).height()*1
var wh2 = $('section').eq(2).offset().left       //$(this).height()*2
// 마지막 센션이 윈도우 높이보다 크거나 같을 때
var wh3 = $('section').eq(3).offset().left       //$(this).height()*3
// 마지막 섹션이 윈도우 높이보다 작을 때
// var wh3 =  $('body').height() - $(window).height()

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=wh0 && sct<wh1 && !cflag) {
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
    } else if (sct>=wh1 && sct<wh2 && !cflag) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
    } else if (sct>=wh2 && sct<wh3 && !cflag) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
    } else if (sct>=wh3 && !cflag) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
    }

// section의 높이가 같은 경우에만 for문을 사용할 수 있음.
    // for (let i=0; i<4; i++) {
    //     if (sct>=wh*i && sct<wh*(i+1)) {
    //         $('#menu li').eq(i).addClass('on').siblings().removeClass('on')
    //     }
    // }
})

var offLeft = 0;
$('section').on('mousewheel', function(e, delta){
    // console.log(delta) : 아래로 -1값 출력, 위로 +1값 출력
    if (delta<0) {
        var offLeft = $(this).next().offset().left
    } else if (delta>0) {
        var offLeft = $(this).prev().offset().left
    }
    $('html').stop().animate({scrollLeft:offLeft}, 500)
})