$(document).ready(function() {

  var el=$('.box');

  el.click(function(){
    alert('Click event! And Loonycorn rocks');
  });

  $('.remove').click(function(){
    el=$('.box').remove();
  });
  $('.detach').click(function(){
    el=$('.box').detach();
  });

  $('.empty').click(function(){
    $('.box').empty();
  });

  $('.add').click(function(){
    $('.container').append(el);
  });

});
