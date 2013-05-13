$(document).ready(function(){
  function updateCountdown() {
    var characters = 140 - $('.field textarea').val().length;
    $('#countdown').text(characters + ' characters remaining');
  };
  $('.field').change(updateCountdown);
  $('.field').keyup(updateCountdown);
  updateCountdown;
});