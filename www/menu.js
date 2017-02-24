$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.mainnav').slideToggle(300);
});

$(window).resize(function(){
if (   $(window).width() > 600 ){
  $('.mainnav').removeAttr('style');
}
});
});



$(document).ready(function() {
  $('.parents-1').click(function() {
    $('.sub-1').slideToggle(300);
  });
  $(window).resize(function() {
       if (  $(window).width() > 600 ) {
        $('.sub-1').removeAttr('style');
     }
    });
});



/*
$(document).ready(function() {
  $('.about-trigger').click(function() {
    $('.about li').slideToggle(600);
});

$(window).resize(function(){
if (   $(window).width() > 600 ){
  $('.about li').removeAttr('style');
}
});
});







/* When the user clicks on the button,
toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
