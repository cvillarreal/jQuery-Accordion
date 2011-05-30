(function($){var settings={'header':'h4','container':'div','speed':250,'openClass':'open'}
var methods={init:function(options){return this.each(function(){if(options){$.extend(settings,options);}
$(this).find(settings.header).bind('click.accordion',methods.click);});},destroy:function(){return this.each(function(){$(this).find(settings.header).unbind('.accordion');});},click:function(){var $theAccordion=$(this).parent(),theClasses=this.classList;if(theClasses.contains(settings.openClass)){$theAccordion.find(settings.container).slideUp(settings.speed,function(){theClasses.remove(settings.openClass);});}else{$theAccordion.find(settings.container).slideDown(settings.speed,function(){theClasses.add(settings.openClass);});}}};$.fn.accordion=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.accordion');}};})(jQuery);