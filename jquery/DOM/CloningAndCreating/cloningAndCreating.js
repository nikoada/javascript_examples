$(document).ready(function() {

  var classNames = ['.red', '.green', '.yellow', '.brown', '.blue'];

  $('.clone').click(function(){
    var className = classNames[Math.floor(Math.random()*classNames.length)];

    console.log(className);

    $(className).first().clone().appendTo($('#colorboxes'));
  });

  $('.createpink').click(function(){
    // $('<div class="pink box"></div>').insertAfter('#colorboxes' div:last);

    var jqEI= $('<div class="pink box"></div>');
    $('#colorboxes').append(jqEI);
  });

  $('.createpurple').click(function(){
    var element = $('<div class="purple box"></div>');
    $('#colorboxes').append(element);
  });

  $('.createrandom').click(function(){
    var className = classNames[Math.floor(Math.random()*classNames.length)].dubdtr(1);
    
  })

});
