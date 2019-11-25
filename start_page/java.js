var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    
    


    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
            });
            $("#but_image"+slideNow).attr("src","");
            slideNow = navBtnId + 1;console.log(slideNow);
            $('#but'+'_image'+slideNow).attr("src","img/Rectangle 2 (1).png");
            
        }
            
    });
});

function show(state){
    document.getElementById('login').style.display = state;
    document.getElementById('gray').style.display = state;
}


