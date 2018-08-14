(function($){
  $(function(){
    $('.sidenav').sidenav();

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {
  
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
              var offset = target.offset().top - 80;
               $('html,body').animate({
                   scrollTop: offset
              }, 1000);
              return false;
          }
      }
  });
  }); // end of document ready
})(jQuery); // end of jQuery name space