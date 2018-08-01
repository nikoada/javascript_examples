$(document).ready(function() {

  $('.insertAfter').click(function(){

    var value = $('input').val();
    $('<li>'+value+'</li>').insertAfter('#contendersList li:last');

  });

  $('.after').click(function(){
    var value = $('input').val();

    $('#contendersList li:last').after('<li>'+value+'</li>');
  });

  $('.insertBefore').click(function(){
    var value = $('input').val();

    $('#contendersList li:first').insertBefore('<li>'+value+'</li>');
  });

  $('.appendTo').click(function(){
    $('#contendersList li:first').appendTo('#contendersList');
  });

});
