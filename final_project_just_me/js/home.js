// Make it rain!
$('#openDropdown').on('click', function(){
  $('#dropdownMenu').slideToggle();
})


$("#main-slider > div:gt(0)").hide();
setInterval(function(){
  $('#main-slider>div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#main-slider');
}, 3000);
