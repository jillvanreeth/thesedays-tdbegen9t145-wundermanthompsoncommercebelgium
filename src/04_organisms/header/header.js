var header = (function(w, d, undefined) {

  'use strict';

  var s = {
  			debug: false,
        windowSize: null,
        selectors: {
        	theWrap: '.header',
        	theTrigger: '.header__menuIcon',
        },
        classes: {
          menuIsOpen: 'header-is-open',
          menuIsSticky: 'header-is-sticky',
          overflow: 'overflow-is-hidden',
        },
      },
      els = {},
      init = function() {

      	s.debug && console.log('HEADER: INIT');

      	if(!s.selectors.theWrap.length) { return false; }
      	
      	els.theWrap = d.querySelector(s.selectors.theWrap);
      	els.theTrigger = d.querySelector(s.selectors.theTrigger);

      	els.theTrigger.addEventListener('click', function(e) {
      		e.preventDefault();
      		onTriggerClick();
      	});

        w.addEventListener('resize', function() { s.windowSize = getWindowSize(); });

        w.addEventListener('scroll', function(e) {
          if(d.body.classList.contains(s.classes.menuIsOpen)) { return false; }
          window.pageYOffset > 190 ? els.theWrap.classList.add(s.classes.menuIsSticky) : els.theWrap.classList.remove(s.classes.menuIsSticky);
        });  
        
      },

      onTriggerClick = function() {

      	s.debug && console.log('HEADER: CLICK');
      	d.body.classList.contains(s.classes.menuIsOpen) ? hideMenu() : showMenu();

      },

      hideMenu = function() {

      	s.debug && console.log('HEADER: CLOSE MENU');

      	d.body.classList.remove(s.classes.menuIsOpen);
        d.getElementById('theBody').classList.remove(s.classes.overflow);
      },

      showMenu = function() {

      	s.debug && console.log('HEADER: OPEN MENU');

      	d.body.classList.add(s.classes.menuIsOpen);
        d.getElementById('theBody').classList.add(s.classes.overflow);

      },

      getWindowSize = function() {

        return w.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content');

      };

  return {
    init:init,
    hideMenu: hideMenu
  };

}(window, window.document));