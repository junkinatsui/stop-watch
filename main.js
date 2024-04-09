


let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;
  
let timeoutID;

$(document).ready(function(){
    $("#start").click(function() {
      ms = 0;
      sec = 0;
      min = 0;
      hour = 0;
      $("#timer").html('0:0:0:0');
      timeoutID = setInterval(countup, 100);
  
      $(this).prop('disabled', true);
      $("#stop,#reset").prop('disabled', false);
    });
  
    $("#stop").click(function() {
      clearInterval(timeoutID);
  
      $(this).prop('disabled', true);
      $("#start,#reset").prop('disabled', false);
    });
  
    $("#reset").click(function() {
      ms = 0;
      sec = 0;
      min = 0;
      hour = 0;
      $("#timer").html('0:0:0:0');
      clearInterval(timeoutID);
  
      $("#stop,#reset").prop('disabled', true);
      $("#start").prop('disabled', false);
    });
  

    function countup() {
       ms += 1;

      if (ms > 9) {
        ms = 0;
        sec += 1;
      }
  
      if (sec > 59) {
        sec = 0;
        min += 1;
      }
  
      if (min > 59) {
        min = 0;
        hour += 1;
      }

      ms_number = ('0' + ms).slice(-1);
      sec_number = ('00' + sec).slice(-2);
      min_number = ('00' + min).slice(-2);
      hour_number = ('00' + hour).slice(-1);
  
      $("#timer").html(hour_number + ':' +  min_number + ':' + sec_number + ':' + ms_number);
    }
});