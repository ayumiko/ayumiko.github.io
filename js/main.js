
$(function() {
  
  jQuery(function($){
    $(document).ready(function() {
      $(".drawer").drawer();
    });
  });
  

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    infinite:true,

  });


  $('#sugosikata-title li').click(function (){
      var clickedIndex = $('#sugosikata-title li').index($(this));
      $('.index-btn,.slide').removeClass('active');
      $(this).addClass('active');
      $('.slide').removeClass('show').eq(clickedIndex).addClass('show');
  });

  $('#top-logo,#to-top').click(function() {
    $('html,body').animate({
      'scrollTop':0
    },'slow');
  });

  $('.scroll-btn').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },'slow');
  });

  





















  




});
