/*!
 * jQuery Accordion Plugin
 * version: 1.00 (30-MAY-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
	var settings = {
		'header'	: 'h4',
		'container'	: 'div',
		'speed'		: 250,
		'openClass' : 'open'
	}

	var methods = {
		init : function (options) {
			return this.each( function () {
				//Extend our settings with the options being passed in.
				if ( options ) { 
					$.extend(settings, options);
				}

				//bind the click event to the headers
				 $(this).find(settings.header).bind('click.accordion', methods.click);
			});
		},
		
		destroy : function () {
			return this.each( function () {
				//unbind the click event from the headers
				 $(this).find(settings.header).unbind('.accordion');
			});
		}, 
		
		click : function () {
			var $theAccordion = $(this).parent(),
				theClasses	  = this.classList;
			
			if (theClasses.contains(settings.openClass)) {
				//lets close it
				$theAccordion.find(settings.container).slideUp(settings.speed, function () {
					theClasses.remove(settings.openClass);
				});
			} else {
				//lets open it
				$theAccordion.find(settings.container).slideDown(settings.speed, function () {
					theClasses.add(settings.openClass);
				});
			}
		}
	};

	$.fn.accordion = function ( method ) {
		if ( methods[method] ) {
		  return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
		  return methods.init.apply( this, arguments );
		} else {
		  $.error( 'Method ' +  method + ' does not exist on jQuery.accordion' );
		}   	
	};
})(jQuery);