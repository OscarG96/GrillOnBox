$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });
//   e.preventDefault();
//   $("#aboutBtn").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#About Us").offset().top},
//         'slow');
// });

// Smooth scroll
$("#nav .main-nav a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600);
});