$(function(){ 
    var navMain = $(".navbar-collapse"); 
    if ($(window).width() <= 1024) {
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
}
});

$(function(){ 
    var navMain = $(".but"); 
    if ($(window).width() <= 1024) {
    navMain.on("click", "a([data-toggle])", null, function () {
        navMain.collapse('show');
    });
}
});


$(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault(); 
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });


 /*  $(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY); 
 /*    e.preventDefault();  */
    
   /*  $(document.body).stop().animate( { 
    scrollTop : nt 
    } , 500 ); 
    } )  */

/* // optional
$('#blogCarousel').carousel({
    interval: 5000
}); */

/* 
// training
const btn = document.querySelector('.tr-el-more'),
      more = document.querySelector('.training-element-more'),
      close = document.querySelector('.close');

function openMore() {
        more.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeMore() {
        more.style.display = 'none';
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', openMore);
    close.addEventListener('click', closeMore); */