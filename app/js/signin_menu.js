'use strict';

$(document).ready(function() {
  $('#signup-form-div').hide();

  $('.example').on('click', function(){
   window.location.href='http:localhost:9000/';
  });

  $('.item').on('click', function(){
    $('.item').toggleClass('active');
    $('.bottom.attached.segment').toggle();
  });

  $('.example')
  .popup({
    hoverable: true,
    position: 'top center'
  });

});
