$(document).ready(function() {

  $('.updatehtml').click(function(){

    //alert("input==>"+$('input').val());
    var htmlMarkup= $('input').val();

    $('.text').html(htmlMarkup);

  });

  $('.updatetext').click(function(){

    $('.text').text(htmlMarkup);

  });

});
