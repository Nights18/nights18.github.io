// Make it rain!

$('#openDropdown').on('click', function(){
  $('#dropdownMenu').slideToggle();
})




var imageNumber = 0;

$('#next').on('click', function(){
  if (imageNumber < 4){
    imageNumber +=1;
  } else {
    imageNumber = 0;
  }
  console.log(imageNumber);

  $('article').hide();
  $('article').eq(imageNumber).show();
})

$('#previous').on('click', function(){
  if (imageNumber > 0){
    imageNumber -=1;
  } else {
    imageNumber = 4;
  }
  console.log(imageNumber);

  $('article').hide();
  $('article').eq(imageNumber).show();
})
