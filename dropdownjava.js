$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(600);
});

$(window).resize(function(){
if (   $(window).width() > 600 ){
  $('nav ul').removeAttr('style');
}
});
});





$(document).ready(function() {
  $('.about-trigger').click(function() {
    $('.about ul').slideToggle(600);
});

$(window).resize(function(){
if (   $(window).width() > 600 ){
  $('.about ul').removeAttr('style');
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
