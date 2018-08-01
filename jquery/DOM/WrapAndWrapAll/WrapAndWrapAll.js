$(document).ready(function() {

  $('.each').click(function(){
    $('.box').each(function(){
      $(this).addClass('outer-box');
    });
});
});
