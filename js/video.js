/*
* jQuery Background video plugin for jQuery
* ---
* Copyright 2011, Victor Coulon (http://victorcoulon.fr)
* Released under the MIT, BSD, and GPL Licenses.
* based on jQuery Plugin Boilerplate 1.3
*/
(function(e) {
	e.backgroundVideo = function(t, n) {
		var r = {
			videoid: "video_background"
		};
		var i = this;
		i.settings = {};
		var s = function() {
			i.settings = e.extend({}, r, n);
			i.el = t;
			o()
		};
		var o = function() {
			var t = "";
			t += '<video muted id="' + i.settings.videoid + '" preload="auto" autoplay="autoplay" loop="loop"';
			if (i.settings.poster) {
				t += ' poster="' + i.settings.poster + '" '
			}
			t += 'style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';
			for (var n = 0; n < i.settings.types.length; n++) {
				t += '<source src="video/videobg3.'+i.settings.types[n]+'" />'
			}
			t += "bgvideo</video>";
			i.el.prepend(t);
			i.videoEl = document.getElementById(i.settings.videoid);
			i.$videoEl = e(i.videoEl);
			i.$videoEl.fadeIn(2e3);
			u()
		};
		var u = function() {
			var e = a();
			i.$videoEl.width(e * i.settings.width);
			i.$videoEl.height(e * i.settings.height);
			if (typeof i.settings.align !== "undefined") {
				f()
			}
		};
		var a = function() {
			var t = e(window).width();
			var n = e(window).height();
			var r = t / n;
			var s = i.settings.width / i.settings.height;
			var o = n / i.settings.height;
			if (r >= s) {
				o = t / i.settings.width
			}
			return o
		};
		var f = function() {
			var t = (e(window).width() >> 1) - (i.$videoEl.width() >> 1) | 0;
			var n = (e(window).height() >> 1) - (i.$videoEl.height() >> 1) | 0;
			if (i.settings.align == "centerXY") {
				i.$videoEl.css({
					left: t,
					top: n
				});
				return
			}
			if (i.settings.align == "centerX") {
				i.$videoEl.css("left", t);
				return
			}
			if (i.settings.align == "centerY") {
				i.$videoEl.css("top", n);
				return
			}
		};
		s();
		e(window).resize(function() {
			u()
		});
		i.$videoEl.bind("ended", function() {
			this.play()
		})
	}
})(jQuery)


 $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('#particles-js'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "media/",
      "filename": "cloud",
      "types": ["mp4"]
    });
  });