/**
 *  jQuery Avgrund Popin Plugin
 *  http://github.com/voronianski/jquery.avgrund.js/
 *
 *  (c) 2012-2013 http://pixelhunter.me/
 *  MIT licensed
 */(function(e){e.fn.avgrund=function(t){var n={width:380,height:280,showClose:!1,showCloseText:"",closeByEscape:!0,closeByDocument:!0,holderClass:"",overlayClass:"",enableStackAnimation:!1,onBlurContainer:"",openOnEvent:!0,setEvent:"click",onLoad:!1,onUnload:!1,template:"<p>This is test popin content!</p>"};t=e.extend(n,t);return this.each(function(){function u(e){t.closeByEscape&&e.keyCode===27&&l()}function a(n){if(t.closeByDocument){if(e(n.target).is(".avgrund-overlay, .avgrund-close")){n.preventDefault();l()}}else if(e(n.target).is(".avgrund-close")){n.preventDefault();l()}}function f(){typeof t.onLoad=="function"&&t.onLoad(n);setTimeout(function(){r.addClass("avgrund-active")},100);r.append('<div class="avgrund-popin '+t.holderClass+'">'+o+"</div>");e(".avgrund-popin").css({width:i+"px",height:s+"px","margin-left":"-"+(i/2+10)+"px","margin-top":"-"+(s/2+10)+"px"});t.showClose&&e(".avgrund-popin").append('<a href="#" class="avgrund-close">'+t.showCloseText+"</a>");t.enableStackAnimation&&e(".avgrund-popin").addClass("stack");r.bind("keyup",u);r.bind("click",a)}function l(){r.unbind("keyup",u);r.unbind("click",a);r.removeClass("avgrund-active");setTimeout(function(){e(".avgrund-popin").remove()},500);typeof t.onUnload=="function"&&t.onUnload(n)}var n=e(this),r=e("body"),i=t.width>640?640:t.width,s=t.height>350?350:t.height,o=typeof t.template=="function"?t.template(n):t.template;r.addClass("avgrund-ready");r.append('<div class="avgrund-overlay '+t.overlayClass+'"></div>');t.onBlurContainer!==""&&e(t.onBlurContainer).addClass("avgrund-blur");t.openOnEvent?n.bind(t.setEvent,function(t){t.stopPropagation();e(t.target).is("a")&&t.preventDefault();f()}):f()})}})(jQuery);