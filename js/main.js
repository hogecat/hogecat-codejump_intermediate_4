$(function(){
    // ハンバーガーメニュー
    $('.hamburger').on('click',function() {
        $('.hamburger').toggleClass('active');
        $('#navi').toggleClass('active');
    });
    
    $('#navi a').on('click',function() {
        $('#navi').removeClass('active');
        $('.hamburger').removeClass('active');
    });

    // reason
    $('.inview-slide-left').on('inview', function(event, isInView) {
        if(isInView){
          $(this).stop().addClass('slide-left');
        }
    });
    $('.inview-slide-right').on('inview', function(event, isInView) {
        if(isInView){
          $(this).stop().addClass('slide-right');
        }
    });
    
    // voice
    $('.inview-balloon').on('inview', function(event, isInView) {
        if(isInView){
          $(this).stop().addClass('balloon');
        }
    });
});