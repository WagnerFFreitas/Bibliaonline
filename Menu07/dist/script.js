$(function() {

$('.drop-box').click (function() {
  $('#ul')
    .fadeToggle();
});

$('.drop-box').on('click', function() {
  $(this).toggleClass('marked');
  $('.drop-text').toggleClass('marked1');
});

$(".drop-box").click(function(){
    $('.rotate').toggleClass("down"); 
});






});