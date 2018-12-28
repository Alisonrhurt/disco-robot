//toggle eyes on and off function
$('.flash').click(function() {
  $('.brain').toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  
  //creates random RGBA color combo
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  
  // and change the bodys background to random color
  $('body').css("background", randomRGBA);

});