$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger,.header__links,.header__bg').toggleClass('active');
      $('body').toggleClass('lock');
   });
});