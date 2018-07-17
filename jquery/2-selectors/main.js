$(document).ready( function() {
  console.log('document is ready: hello world');

  $('h1').addClass('red-color');

  $('#firstpara').addClass('blue-color');
  // $(firstpara).addClass('blue-color');

  $('.para-class').addClass('green-color');

  $('li[name="theking"]').addClass('red-color');
  $('.company, .ceo').addClass('underline');
  $('#companies > li').addClass('border');
  $('li.company:gt(0)').addClass('odd-row');
  $('ul.flagship li').addClass('blue-color');
  $('tr:even').addClass('even-row');
  $('tr:odd').addClass('odd-row');
  $('tr > td:even').addClass('blue-color');
  $('tr > td:odd').addClass('odd-row');
  $("td:contains('Hagrid')").addClass('highight-2');
  $('.non-human:eq(1)').addClass('highight-2');
  $('.non-human:gt(1)').addClass('highight-2');
  $('.non-human:lt(1)').addClass('highight-2')

  //$('.father').parent().addClass('red-color');
  //$('.son').parents().addClass('blue-color');
  // $('.son').parentsUntil('.great-grandfather').addClass('red-color');
  // $('.daughter').closest('div').addClass('green-color');
  // $('.mother').closest('div').addClass('green-color');
  // $('.father').children().addClass('green-color');
  // $('.great-grandfather').next().addClass('red-color');
  // $('.great-grandfather').prev().addClass('blue-color');
  // $('.great-grandfather').nextAll().addClass('red-color');
  // $('.great-grandfather').nextAll().last().addClass('red-color');
  // $('.great-grandaunt').prevAll().addClass('blue-color');

  $('#chaos').

});
