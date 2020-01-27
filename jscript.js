var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5;
var navBtnId = 0;
var translateWidth = 0;
var countOfChars=0;
$(document).ready(function() {
    
   
    var items=document.getElementById('slidewrapper');
    var slides = items.getElementsByClassName('slide');
    var slidesLength = slides.length;
    var realSlideCount = slides.length;
    var lastSlide = slides[slidesLength - 1];
   var i=0;
   var sliderReelPosition=0;
  var isReturnable=false;
    if( $(".slide1")[0]) {
        
        $(".slide-nav-btn:first").addClass("active");
        
        rotate = function(){  
            if(i==slidesLength){
                secondSlide = slides[1];
                var cloneFirst = secondSlide.cloneNode(true);
                items.appendChild(cloneFirst);
                document.getElementById('slidewrapper').removeChild(document.getElementById('slide'));
                document.getElementById('slidewrapper').removeChild(document.getElementById('slide'));
                $('#slidewrapper').css({
                    'transition': 'all 0s',
                    'marginLeft': '0px'
                });
               i=0;
                sliderReelPosition=0;
                console.log(slides);
            }
        
            var sliderWidth = slides[i].clientWidth;
            sliderReelPosition = sliderReelPosition +  sliderWidth;
            console.log(i);
            console.log(sliderReelPosition);
           
          
            
            i++;
            if(i==slidesLength-1 && !isReturnable){
                
                firstSlide = slides[0];
                var cloneFirst = firstSlide.cloneNode(true);
                items.appendChild(cloneFirst);
            
            } 
            
            $(".slider_content").animate({
                marginLeft: -sliderReelPosition
            }, 800, "linear" );
            isReturnable=false;
           rotateBtn();
            
        };
        rotateBtn = function(){
              $(".slide-nav-btn").removeClass('active');
            $active.addClass('active');
           
            $(".slide-nav-btn>img").attr("src","");
            $(".slide-nav-btn.active>img").attr("src","img/point.png");
        };
        rotateSwitch = function(){
            play = setInterval(function(){
                $active = $('.slide-nav-btn.active').next();
                if ( $active.length === 0) {
                    
                    $active = $('.slide-nav-btn:first');
                }
                rotate();
                
                
            }, 5000);
        };
        rotateSwitch();
        
        $(".slide-nav-btn").click(function() {
            if(this.className != "slide-nav-btn active"){
            clearInterval(play);
            $active = $(this);
           if(i==1){
            isReturnable = true;
            $(".slider_content").animate({
                marginLeft:0
            }, 800, "linear" );
            i=0;
            sliderReelPosition=0;
            slidesLength = realSlideCount;
            rotateBtn();
            setTimeout(function(){}, 5000);
            
            rotateSwitch();
            
           }
           else{
           rotateSwitch();
           rotate();}
        }});
    }

    
});

$(document).ready(function() {
    $(".button.apply").click(function(event){
        

        if( $(".error span").length!=0){
            event.preventDefault();
            $(".error-message").remove();
        }
        if($(".log").val().length==0 && $(".pass").val().length==0){
            event.preventDefault();
            $(".error").append("<span class='error-message'>Пожалуйста, введите логин и пароль</span>");}
        else if($(".log").val().length==0){
            event.preventDefault();
            $(".error").append("<span class='error-message'>Пожалуйста, введите логин</span>");}
        else if ($(".pass").val().length==0){
            event.preventDefault();
            $(".error").append("<span class='error-message'>Пожалуйста, введите пароль</span>");
        }
    });
});

function show(state){
    document.getElementById('login').style.display = state;
    document.getElementById('gray').style.display = state;
}



var num= 0;
var count = 0;
    function handleFileSelect(evt) {
        var wid=0;
        var heig=0;
        var file = evt.target.files;
        var f = file[0];
          var reader = new FileReader();
          if (!f.type.match('image.*')) {
            reader.onload = (function(theFile) {
               
                    $('.err').css({'display': 'inline-block'});
                
            })(f);
            reader.readAsDataURL(f);
        }
        else {
          reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                wid=this.width;
                heig=this.height;
                addIm(f, wid, heig);
              console.log(wid+'x'+heig); 
            };
      
            
          }
          reader.readAsDataURL(f);

          }}
          function addIm(f, wid, heig){
            var reader1 = new FileReader();
              reader1.onload = (function(theFile) {
              if(wid!=270||heig!=270)
                        $('.err').css({'display': 'inline-block'});
                else
                {
                    $('.err').css({'display': 'none'});
            
                    return function(e) {
                        var span = document.createElement('span');
                        span.id=num;
                        span.style.display="flex";
                        span.innerHTML = ['<img  class="new-img" title="', escape(theFile.name), '" src="', e.target.result, '" style="width:40px; height:40px"  /> <span class="img-name">', escape(theFile.name),'</span>  <a  onclick="deleteImg(',num,')"><img src="img/close.png" alt="Закрыть" style="width: 20px; margin: 10px 0;" class="delete-img"></a>'].join('');
                       
                        document.getElementById('output').insertBefore(span, null);
                        num=num+1;}
               }
           
    
            })(f);
            reader1.readAsDataURL(f);
        }

    function deleteImg(className){
        var el = document.getElementById('output');
        el.removeChild(document.getElementById(className));
        
    }




    $(document).ready(function() {
    
    $('#apply-btn').click(function(event) {
       

        if ($('#text-field') != null && $('#text-field').val().length == 0 ) {
            event.preventDefault();
           $('#ph-styles').remove();


        var $style = $('<style>').attr('id', 'ph-styles');

        $style.text(
            '::placeholder { ' +
                'color: red;' +
            '}');
        $style.appendTo('head');
        }

        if(countOfChars>150){
            event.preventDefault();
             $('.err2').css({'display': 'inline-block'});
             
        }
           
            
    });});


    $(document).ready(function() {
        $('#text-field').keydown(function(){
        countOfChars = $(this).val().length+1; 
        var num = 151 - countOfChars; 
         $(".symbol-count").text("Символов: "+countOfChars+"/150");
        if(num < 0){
            $('.symbol-count').css({'color': 'red'});
        }}
        );
     });
 
        
      