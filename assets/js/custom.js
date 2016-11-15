/* wow animation init*/
$(document).ready(function(){
  var wow = new WOW(
{
boxClass:     'wow',
animateClass: 'animated',
offset:       0,
mobile:       true,
live:         true,
callback:     function(box) {

},
scrollContainer: null
}
);
wow.init();

/*sticky-footer*/
if ($(document).height() <= $(window).height())
 $("footer").addClass("footer-fixed-bottom");

/*smart nav*/
$(".smart-nav li a").click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    var block_offset = $(href).offset();
    var idx = $(this).closest('li').index();
    var $topMenu = $('.smart-nav');

    $topMenu.each(function(){
        $(this).find('li a').removeClass('active');
        $(this).find('li a').eq(idx).addClass('active');
    });

    $("html, body").animate({ scrollTop: block_offset.top - 70}, 600);
});

/*Стики хэдер*/
$(window).scroll(function() {
if ($(this).scrollTop() > 29){
    $('.header-bottom').addClass("header-sticky");
  }
  else{
    $('.header-bottom').removeClass("header-sticky");
  }
});

/*business-model tabs*/
$(".business-model__tab-item:first-child").find(".business-model__toggle").addClass("business-model__toggle--active")
$(".business-model__tab-item:first-child").find(".business-model__tab-content").addClass("business-model__tab-content--active")

$(".business-model__toggle").click(function(){
$(".business-model__toggle").removeClass("business-model__toggle--active")
$(this).addClass("business-model__toggle--active")
$(".business-model__tab-content").removeClass("business-model__tab-content--active")
$(this).parent().find(".business-model__tab-content").toggleClass("business-model__tab-content--active")
})

/* попапы в проекте детальном и руководство*/
$(".popup-open, .directors-board__popup-open").click(function(){
$(this).find(".popup").slideToggle()
$(this).find(".popup-overlay").fadeToggle()
$(".directors-board__popup").slideToggle()
$(".directors-board__overlay").fadeToggle()
});
$(".popup-close, .directors-board__popup-close").click(function(){
$(this).find(".popup").slideToggle()
$(this).find(".popup-overlay").fadeToggle()
$(".directors-board__popup").slideToggle()
$(".directors-board__overlay").fadeToggle()
});

/******       owl carousel      *****/
$("#owl-carousel").owlCarousel({
  items:4,
  navigation:true,
  loop: true,
  center: true,
  autoPlay:true,
  autoPlayHoverPause:true,
});


/*анимация оверлей в проектах*/
$(".projects__item").hover(
  function(){
  $(this).find(".projects__item-overlay").removeClass("fadeInDown").addClass("fadeInUp animated wow")
  },
  function(){
  $(this).find(".projects__item-overlay").removeClass("fadeInUp").addClass("fadeInDown")
  }
);

/*архив новостей*/
$(".archive__year").addClass("archive__active")
$(".archive__downdrop").hide();
$(".archive__year .archive__downdrop").show()
if($(".archive__year").hasClass("archive__active")){
  $(this).find(".archive__active i").addClass("fa-chevron-down")
}

$(".archive__year-title").click(function () {
  $(this).parent().find(".archive__downdrop").slideToggle()
  $(this).parent().siblings().find(".archive__downdrop").slideUp();
  $(this).parent().toggleClass("archive__active").siblings().removeClass("archive__active")
  $(this).find("i").toggleClass("fa-chevron-down")
  $(this).parent().siblings().find("i").removeClass("fa-chevron-down")
});

/*вакансии*/
$(".vacancy__list-item-details").hide();
if($(".vacancy__list-item").hasClass(".vacancy__list-item--active")){
  $(this).find(".archive__active i").addClass("fa-chevron-down")
}

$(".vacancy__list-item h5").click(function () {
  $(this).parent().find(".vacancy__list-item-details").slideToggle()
  $(this).parent().siblings().find(".vacancy__list-item-details").slideUp();
  $(this).parent().toggleClass("vacancy__list-item--active").siblings().removeClass("vacancy__list-item--active")
  $(this).find("i").toggleClass("fa-chevron-down")
  $(this).parent().siblings().find("i").removeClass("fa-chevron-down")
});

/*fancybox*/
$(".fancybox").fancybox();

/*disable parentRowTpl>a on Mobile*/
if($(window).width() < 769) {
  $(".main-nav__item:first-child  > a").click(function(e){
       e.preventDefault()
  })
}

/*анимация икноки мобильного меню и вызова мобильного меню*/
$('.mobile-nav-button').click(function(){
   $(".main-nav__dropdown-menu").hide()
   $('#nav-icon3').toggleClass('open')
   $(".main-nav").toggleClass("main-nav--open")
 });

$(".main-nav__item, .main-nav__item a").click(function(){
  $(".main-nav__dropdown-menu").show().css("opacity", "1");
})


});/*document-ready-end*/
