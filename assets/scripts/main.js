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
(function(w, d, undefined) {

	"use strict";

	var init = function() {
  	header.init(); 
  	scrollTo.init();
  },

  onPageLoad = function() {
  
  };

	d.addEventListener('DOMContentLoaded', init);
	w.addEventListener('load', onPageLoad);


}(window, window.document));




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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbFRvLmpzIiwibWFpbi5qcyIsImhlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzY3JvbGxUbyA9IChmdW5jdGlvbih3LCBkLCB1bmRlZmluZWQpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHMgPSB7XG4gIFx0XHRcdGRlYnVnOiBmYWxzZSxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBzZWxlY3RvcnM6IHt9LFxuICAgICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIH0sXG4gICAgICBlbHMgPSB7fSxcbiAgICAgIGluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgXHRzLmRlYnVnICYmIGNvbnNvbGUubG9nKCdTQ1JPTExUTzogSU5JVCcpO1xuXG4gICAgICAgIGVscy50aGVUcmlnZ2VycyA9IGQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcblxuICAgICAgICBzLm9mZnNldCA9IGQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fd3JhcCcpLm9mZnNldEhlaWdodCAtIDQ1O1xuICAgICAgICBcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxzLnRoZVRyaWdnZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHRoZVRyaWdnZXIpIHtcbiAgICAgICAgICB0aGVUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhlYWRlci5oaWRlTWVudSgpO1xuICAgICAgICAgICAgc21vb3RoU2Nyb2xsKHRoZVRyaWdnZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIHNtb290aFNjcm9sbCA9IGZ1bmN0aW9uKHRoZVRyaWdnZXIpIHtcblxuICAgICAgICB2YXIgdGhlVGFyZ2V0ID0gdGhlVHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5yZXBsYWNlKCcjJywnJyk7XG4gICAgICAgIHZhciB0b3BPZkVsZW1lbnQgPSBkLmdldEVsZW1lbnRCeUlkKHRoZVRhcmdldCkub2Zmc2V0VG9wIC0gcy5vZmZzZXQ7XG4gICAgICAgXG4gICAgICAgICB3LnNjcm9sbCh7IHRvcDogdG9wT2ZFbGVtZW50LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcblxuICAgICAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6aW5pdFxuICB9O1xuXG59KHdpbmRvdywgd2luZG93LmRvY3VtZW50KSk7IiwiKGZ1bmN0aW9uKHcsIGQsIHVuZGVmaW5lZCkge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG4gIFx0aGVhZGVyLmluaXQoKTsgXG4gIFx0c2Nyb2xsVG8uaW5pdCgpO1xuICB9LFxuXG4gIG9uUGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgXG4gIH07XG5cblx0ZC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cdHcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uUGFnZUxvYWQpO1xuXG5cbn0od2luZG93LCB3aW5kb3cuZG9jdW1lbnQpKTtcblxuXG5cbiIsInZhciBoZWFkZXIgPSAoZnVuY3Rpb24odywgZCwgdW5kZWZpbmVkKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBzID0ge1xuICBcdFx0XHRkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHdpbmRvd1NpemU6IG51bGwsXG4gICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICBcdHRoZVdyYXA6ICcuaGVhZGVyJyxcbiAgICAgICAgXHR0aGVUcmlnZ2VyOiAnLmhlYWRlcl9fbWVudUljb24nLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgbWVudUlzT3BlbjogJ2hlYWRlci1pcy1vcGVuJyxcbiAgICAgICAgICBtZW51SXNTdGlja3k6ICdoZWFkZXItaXMtc3RpY2t5JyxcbiAgICAgICAgICBvdmVyZmxvdzogJ292ZXJmbG93LWlzLWhpZGRlbicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZWxzID0ge30sXG4gICAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIFx0cy5kZWJ1ZyAmJiBjb25zb2xlLmxvZygnSEVBREVSOiBJTklUJyk7XG5cbiAgICAgIFx0aWYoIXMuc2VsZWN0b3JzLnRoZVdyYXAubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgXHRcbiAgICAgIFx0ZWxzLnRoZVdyYXAgPSBkLnF1ZXJ5U2VsZWN0b3Iocy5zZWxlY3RvcnMudGhlV3JhcCk7XG4gICAgICBcdGVscy50aGVUcmlnZ2VyID0gZC5xdWVyeVNlbGVjdG9yKHMuc2VsZWN0b3JzLnRoZVRyaWdnZXIpO1xuXG4gICAgICBcdGVscy50aGVUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgXHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFx0XHRvblRyaWdnZXJDbGljaygpO1xuICAgICAgXHR9KTtcblxuICAgICAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkgeyBzLndpbmRvd1NpemUgPSBnZXRXaW5kb3dTaXplKCk7IH0pO1xuXG4gICAgICAgIHcuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmKGQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMocy5jbGFzc2VzLm1lbnVJc09wZW4pKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IDE5MCA/IGVscy50aGVXcmFwLmNsYXNzTGlzdC5hZGQocy5jbGFzc2VzLm1lbnVJc1N0aWNreSkgOiBlbHMudGhlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKHMuY2xhc3Nlcy5tZW51SXNTdGlja3kpO1xuICAgICAgICB9KTsgIFxuICAgICAgICBcbiAgICAgIH0sXG5cbiAgICAgIG9uVHJpZ2dlckNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIFx0cy5kZWJ1ZyAmJiBjb25zb2xlLmxvZygnSEVBREVSOiBDTElDSycpO1xuICAgICAgXHRkLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHMuY2xhc3Nlcy5tZW51SXNPcGVuKSA/IGhpZGVNZW51KCkgOiBzaG93TWVudSgpO1xuXG4gICAgICB9LFxuXG4gICAgICBoaWRlTWVudSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBcdHMuZGVidWcgJiYgY29uc29sZS5sb2coJ0hFQURFUjogQ0xPU0UgTUVOVScpO1xuXG4gICAgICBcdGQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHMuY2xhc3Nlcy5tZW51SXNPcGVuKTtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZCgndGhlQm9keScpLmNsYXNzTGlzdC5yZW1vdmUocy5jbGFzc2VzLm92ZXJmbG93KTtcbiAgICAgIH0sXG5cbiAgICAgIHNob3dNZW51ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIFx0cy5kZWJ1ZyAmJiBjb25zb2xlLmxvZygnSEVBREVSOiBPUEVOIE1FTlUnKTtcblxuICAgICAgXHRkLmJvZHkuY2xhc3NMaXN0LmFkZChzLmNsYXNzZXMubWVudUlzT3Blbik7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoJ3RoZUJvZHknKS5jbGFzc0xpc3QuYWRkKHMuY2xhc3Nlcy5vdmVyZmxvdyk7XG5cbiAgICAgIH0sXG5cbiAgICAgIGdldFdpbmRvd1NpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJzpiZWZvcmUnKS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG5cbiAgICAgIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OmluaXQsXG4gICAgaGlkZU1lbnU6IGhpZGVNZW51XG4gIH07XG5cbn0od2luZG93LCB3aW5kb3cuZG9jdW1lbnQpKTsiXX0=
