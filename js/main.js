$( document ).ready(function() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       $('#navigationHeader').css({"background-color": "#ffffff" ,"box-shadow": "0px 2px 10px #e7e7e7","transition": "all 0.2s linear"});
        console.log('triii');
      } else {
        $('#navigationHeader').css({"background-color": "#F7FDFC", "box-shadow": "0px 0px 0px #ffffff","transition": "all 0.2s linear" });
      }
    }
});