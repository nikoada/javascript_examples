$(document).ready( function() {
  console.log('document is ready: hello world');

  $('#clickbutton').click(function(e) {
    alert('this is the click handler');
  });

  $('#bindbutton').bind('click',
  function(e) {
    alert('This is the bind handler')
  })

  $('#onbutton').on('click', function(e) {
    alert('this is the on handler');
  });


  $('li').click(function(e) {
    alert($(this).html());
  });

  $('a').click( function(e) {
    e.preventDefault();
    if ($(this).attr('href') == 'evil') {
      alert('thats it');
    }
  });

});
