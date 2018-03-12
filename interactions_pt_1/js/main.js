$('#answer2').hide();
$('#openDropdown').on('click', function(){
  $('#dropdownMenu').slideToggle();
})

//question1
$('#question1').on('click', function (){
  $('#answer1').slideDown();
  $('#answer2').slideUp();
  $('#question1').addClass('active');
  $('#question2').removeClass('active');
})

$('#question2').on('click', function (){
  $('#answer2').slideDown();
  $('#answer1').slideUp();
  $('#question2').addClass('active');
  $('#question1').removeClass('active');
})

$('#showYellowCircles').on('click', function(){
  $('.blue').hide();
  $('.yellow').show();
})

$('#showBlueCircles').on('click', function(){
  $('.yellow').hide();
  $('.blue').show();
})
