$(document).ready(function() {

  $('.add').click(function(){
    var attribute = $('.text').attr('id');
    $('.text').attr('id', 'diferentid');
    $('.text').attr('title', 'Loonycorn rocks!');

    console.log(attribute);
  });

  $('.remove').click(function(){
    $('.text').removeAttr('style');
  });

});
