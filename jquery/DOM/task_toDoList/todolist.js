$(document).ready(function(){

  $('.addBtn').click(function(){
    var inputVal = $('#myInput').val();
    $('#myUL').html('<li>' + inputVal + '</li>');
  });

});
