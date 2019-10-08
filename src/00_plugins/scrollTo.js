var scrollTo = (function(w, d, undefined) {

  'use strict';

  var s = {
  			debug: false,
        offset: 0,
        selectors: {},
        classes: {},
      },
      els = {},
      init = function() {

      	s.debug && console.log('SCROLLTO: INIT');

        els.theTriggers = d.querySelectorAll('a[href^="#"]');

        s.offset = d.querySelector('.header__wrap').offsetHeight - 45;
        
        Array.prototype.slice.call(els.theTriggers).forEach(function(theTrigger) {
          theTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            header.hideMenu();
            smoothScroll(theTrigger);
          });
        });
      },

      smoothScroll = function(theTrigger) {

        var theTarget = theTrigger.getAttribute('href').replace('#','');
        var topOfElement = d.getElementById(theTarget).offsetTop - s.offset;
       
         w.scroll({ top: topOfElement, behavior: "smooth" });

      };

  return {
    init:init
  };

}(window, window.document));