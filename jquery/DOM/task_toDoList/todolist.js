$(document).ready(function(){

  $('.addBtn').click(function(){
    var inputVal = $('#myInput').val();
    // $('#myUL').html('<li>' + inputVal + '</li>');
    if (inputVal === '')
      alert('Please enter a task');
    else
      $('#myUL li:first').before('<li>' + inputVal + '<span class="close">x</span></li>');
  });

  $('ul').on("click", "li", function(){$(this).toggleClass('select');});

  $('#myUL').on("click", ".close", function(){ $(this).parent().remove();});

});
