$(document).ready(function(){
  alert('Loaded');
  $('#clik_num').on("change",function(event) {
   alert($('#clik_num').val());
  });
});
function button_press(element){
  document.getElementById('clik_num').value=element;
   }