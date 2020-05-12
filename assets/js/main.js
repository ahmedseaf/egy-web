var swiper = new Swiper('.swiper-main-slider-top', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(document).ready( function (){
    var btn_next        = $('.swiper-button-next'),
        btn_prev        = $('.swiper-button-prev'),
        link_a          = $('.item-slider a'),
        line_top_p      = $('.line-top p'),
        line_top_span   = $('.line-top span'),
        line_bottom     = $('.line-bottom'),
        user_ask     = $('.user-ask');
        tl              = gsap.timeline();
        animateTopSlider();
    function animateTopSlider(){
        tl.from(line_top_p, {x: -150, duration: 2, opacity: 0})
        .from(line_top_span, {y: -150, duration: 2,opacity: 0} ,"-=2")
        .from(line_bottom, {y:-30, duration: 2, opacity:0})
        .from(link_a,  {duration:0.5, y:10, opacity:0, scale:0.3,transformOrigin: "50% 50%", ease: "bounce.out"});   
    }
    btn_next.on('click', function () {  animateTopSlider(); });
    btn_prev.on('click', function () {  animateTopSlider(); });
  });



  $('.mega-menu ul li').on('mouseover', function () { 
     $(this).find('.dropdown').addClass('active');
   });
   $('.mega-menu ul li').on('mouseleave', function() {
    $(this).find('.dropdown').removeClass('active');
  });



  // nav-about side-nav-item
  //nav-item-view

  // tab_number
  // tab_active

 // nav-item-view" data-view
  //----------------- For Tabs --------------------------------------
/* $(document).ready(function (){
  var btn_side_bar = $('.nav-about .side-nav-item');
  var tabsContainer = document.querySelector('.nav-about')
      btn_side_bar.on('click', function () { 
        btn_side_bar.removeClass('active');
        $(this).addClass('active');

        var nav_active = $(this).attr('data-link');
       // console.log($(this).parent().parent().next().html());
        var tabActive = tabsContainer.querySelector(`.nav-item-view[data-view="${nav_active}"]`);
        //var content_active = $('.nav-about .nav-item-view[data-view= '+tab_active+'] ');
        console.log(tabActive);
       });
}); */
  //$('.tabContent img[value='+selectboxvalue+']')

//---------------------- End Tabs ---------------------------

 // nav-about side-nav-item
  //nav-item-view

  // tab_number
  // tab_active
//----------------- For Tabs --------------------------------------
function setupTabs () {
  document.querySelectorAll(".nav-about .side-nav-item").forEach(button => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement.parentElement;
      const tabNumber = button.dataset.navLink;
      const tabActive = tabsContainer.querySelector(`.nav-item-view[data-view="${tabNumber}"]`);


    
      sideBar.querySelectorAll(".side-nav-item").forEach(button => {
        button.classList.remove("active");
      });
      tabsContainer.querySelectorAll(".nav-item-view").forEach(content => {
        content.classList.remove("active");
      });
      button.classList.add("active");
      tabActive.classList.add("active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
//---------------------- End Tabs ---------------------------

$('.collapse').collapse();