$(window).scroll(function(){
      if ($(this).scrollTop() > 135) {
          $('#myButton').addClass('fixed');
      } else {
          $('#myButton').removeClass('fixed');
      }
  });





//profile picture changer js
var imgArray = [ 'images/profile.jpg', 'images/profile2.jpg', 'images/profile3.jpg','images/profile4.jpg','images/profile5.jpg','images/profile6.jpg','images/profile7.jpg'];
var counter = 0;
document.getElementById('myButton').onmouseover = function () {  
document.getElementById('myButton').src = imgArray[counter % imgArray.length]; 
counter += 1;
}

document.getElementById('myButton').onmouseout = function () {  
document.getElementById('myButton').src = imgArray[counter % imgArray.length]; 
counter += 1;
}


