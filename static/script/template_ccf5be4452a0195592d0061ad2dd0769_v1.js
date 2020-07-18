; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.actual.min.js?15700193901251";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.18
 *
 * Requires: jQuery >= 1.2.3
 */
(function (a) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], a);
	} else {
		a(jQuery);
	}
}(function (a) {
	a.fn.addBack = a.fn.addBack || a.fn.andSelf;
	a.fn.extend({
		actual: function (b, l) {
			if (!this[b]) {
				throw '$.actual => The jQuery method "' + b + '" you called does not exist';
			}
			var f = {
				absolute: false,
				clone: false,
				includeMargin: false,
				display: "block"
			};
			var i = a.extend(f, l);
			var e = this.eq(0);
			var h, j;
			if (i.clone === true) {
				h = function () {
					var m = "position: absolute !important; top: -1000 !important; ";
					e = e.clone().attr("style", m).appendTo("body");
				};
				j = function () {
					e.remove();
				};
			} else {
				var g = [];
				var d = "";
				var c;
				h = function () {
					c = e.parents().addBack().filter(":hidden");
					d += "visibility: hidden !important; display: " + i.display + " !important; ";
					if (i.absolute === true) {
						d += "position: absolute !important; ";
					}
					c.each(function () {
						var m = a(this);
						var n = m.attr("style");
						g.push(n);
						m.attr("style", n ? n + ";" + d : d);
					});
				};
				j = function () {
					c.each(function (m) {
						var o = a(this);
						var n = g[m];
						if (n === undefined) {
							o.removeAttr("style");
						} else {
							o.attr("style", n);
						}
					});
				};
			}
			h();
			var k = /(outer)/.test(b) ? e[b](i.includeMargin) : e[b]();
			j();
			return k;
		}
	});
}));
/* End */
;; /* Start:"a:4:{s:4:"full";s:77:"/bitrix/templates/aspro_next/vendor/js/jquery.bxslider.min.js?157001938923647";s:6:"source";s:57:"/bitrix/templates/aspro_next/vendor/js/jquery.bxslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (t) {
	var e = {
		mode: "horizontal",
		slideSelector: "",
		infiniteLoop: !0,
		hideControlOnEnd: !1,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: !1,
		captions: !1,
		ticker: !1,
		tickerHover: !1,
		adaptiveHeight: !1,
		adaptiveHeightSpeed: 500,
		video: !1,
		useCSS: !0,
		preloadImages: "visible",
		responsive: !0,
		slideZIndex: 50,
		wrapperClass: "bx-wrapper",
		touchEnabled: !0,
		swipeThreshold: 50,
		oneToOneTouch: !0,
		preventDefaultSwipeX: !0,
		preventDefaultSwipeY: !1,
		ariaLive: !0,
		ariaHidden: !0,
		keyboardEnabled: !1,
		pager: !0,
		pagerType: "full",
		pagerShortSeparator: " / ",
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,
		controls: !0,
		nextText: "Next",
		prevText: "Prev",
		nextSelector: null,
		prevSelector: null,
		autoControls: !1,
		startText: "Start",
		stopText: "Stop",
		autoControlsCombine: !1,
		autoControlsSelector: null,
		auto: !1,
		pause: 4e3,
		autoStart: !0,
		autoDirection: "next",
		stopAutoOnClick: !1,
		autoHover: !1,
		autoDelay: 0,
		autoSlideForOnePage: !1,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,
		shrinkItems: !1,
		onSliderLoad: function () {
			return !0
		},
		onSlideBefore: function () {
			return !0
		},
		onSlideAfter: function () {
			return !0
		},
		onSlideNext: function () {
			return !0
		},
		onSlidePrev: function () {
			return !0
		},
		onSliderResize: function () {
			return !0
		},
		onAutoChange: function () {
			return !0
		}
	};
	t.fn.bxSlider = function (n) {
		if (0 === this.length) return this;
		if (this.length > 1) return this.each(function () {
			t(this).bxSlider(n)
		}), this;
		var s = {},
			o = this,
			r = t(window).width(),
			a = t(window).height();
		if (!t(o).data("bxSlider")) {
			var l = function () {
					t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
						index: s.settings.startSlide
					}, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1 ? !0 : !1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function () {
						for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
							if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
						return !1
					}(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function () {
						t(this).data("origStyle", t(this).attr("style"))
					}), d())
				},
				d = function () {
					var e = s.children.eq(s.settings.startSlide);
					o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({
						width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto",
						position: "relative"
					}), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({
						width: "100%",
						overflow: "hidden",
						position: "relative"
					}), s.viewport.parent().css({
						maxWidth: u()
					}), s.children.css({
						"float": "horizontal" === s.settings.mode ? "left" : "none",
						listStyle: "none",
						position: "relative"
					}), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({
						position: "absolute",
						zIndex: 0,
						display: "none"
					}), s.children.eq(s.settings.startSlide).css({
						zIndex: s.settings.slideZIndex,
						display: "block"
					})), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && w(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g)
				},
				c = function (e, i) {
					var n = e.find('img:not([src=""]), iframe').length,
						s = 0;
					return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function () {
						t(this).one("load error", function () {
							++s === n && i()
						}).each(function () {
							(this.complete || "" == this.src) && t(this).trigger("load")
						})
					})
				},
				g = function () {
					if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
						var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
							i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
							n = s.children.slice(-e).clone(!0).addClass("bx-clone");
						s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n)
					}
					s.loader.remove(), m(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", U), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && L(), s.settings.ticker && O(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && Y(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(X)
				},
				p = function () {
					var e = 0,
						n = t();
					if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
						if (s.carousel) {
							var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x();
							for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i))
						} else n = s.children.eq(s.active.index);
					else n = s.children;
					return "vertical" === s.settings.mode ? (n.each(function (i) {
						e += t(this).outerHeight()
					}), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
						return t(this).outerHeight(!1)
					}).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e
				},
				u = function () {
					var t = "100%";
					return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
				},
				h = function () {
					var t = s.settings.slideWidth,
						e = s.viewport.width();
					if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;
					else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
						if (e > s.maxThreshold) return t;
						e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin))
					}
					return t
				},
				v = function () {
					var t = 1,
						e = null;
					return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e) || 1) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t
				},
				f = function () {
					var t = 0,
						e = 0,
						i = 0;
					if (s.settings.moveSlides > 0) {
						if (!s.settings.infiniteLoop) {
							for (; e < s.children.length;) ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
							return i
						}
						t = Math.ceil(s.children.length / x())
					} else t = Math.ceil(s.children.length / v());
					return t
				},
				x = function () {
					return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v()
				},
				m = function () {
					var t, e, i;
					s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * x()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)))
				},
				S = function (e, i, n, r) {
					var a, l;
					s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
						t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), A())
					}) : A()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
						t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), F())
					}) : (S(r.resetValue, "reset", 0), F()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function () {
						A()
					}) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function () {
						S(r.resetValue, "reset", 0), F()
					}))
				},
				b = function () {
					for (var e = "", i = "", n = f(), o = 0; n > o; o++) i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
					s.pagerEl.html(e)
				},
				w = function () {
					s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.on("click touchend", "a", z)
				},
				C = function () {
					s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
				},
				T = function () {
					s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), q(s.settings.autoStart ? "stop" : "start")
				},
				P = function () {
					s.children.each(function (e) {
						var i = t(this).find("img:first").attr("title");
						void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
					})
				},
				E = function (t) {
					t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
				},
				k = function (t) {
					t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
				},
				M = function (t) {
					o.startAuto(), t.preventDefault()
				},
				y = function (t) {
					o.stopAuto(), t.preventDefault()
				},
				z = function (e) {
					var i, n;
					e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n)))
				},
				I = function (e) {
					var i = s.children.length;
					return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function (i, n) {
						t(n).find("a").eq(e).addClass("active")
					}))
				},
				A = function () {
					if (s.settings.infiniteLoop) {
						var t = "";
						0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * x()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0))
					}
					s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)
				},
				q = function (t) {
					s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
				},
				D = function () {
					1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
				},
				H = function () {
					o.startAuto()
				},
				W = function () {
					o.stopAuto()
				},
				L = function () {
					if (s.settings.autoDelay > 0) {
						setTimeout(o.startAuto, s.settings.autoDelay)
					} else o.startAuto(), t(window).focus(H).blur(W);
					s.settings.autoHover && o.hover(function () {
						s.interval && (o.stopAuto(!0), s.autoPaused = !0)
					}, function () {
						s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
					})
				},
				O = function () {
					var e, i, n, r, a, l, d, c, g = 0;
					"next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function () {
						i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0)
					}, function () {
						c = 0, s.children.each(function (e) {
							c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
						}), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), F(d)
					})) : s.viewport.hover(function () {
						o.stop()
					}, function () {
						c = 0, s.children.each(function (e) {
							c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
						}), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), F(d)
					})), F()
				},
				F = function (t) {
					var e, i, n, r = t ? t : s.settings.speed,
						a = {
							left: 0,
							top: 0
						},
						l = {
							left: 0,
							top: 0
						};
					"next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = {
						resetValue: i
					}, S(e, "ticker", r, n)
				},
				N = function (e) {
					var i = t(window),
						n = {
							top: i.scrollTop(),
							left: i.scrollLeft()
						},
						s = e.offset();
					return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom)
				},
				X = function (t) {
					var e = document.activeElement.tagName.toLowerCase(),
						i = "input|textarea",
						n = new RegExp(e, ["i"]),
						s = n.exec(i);
					if (null == s && N(o)) {
						if (39 === t.keyCode) return E(t), !1;
						if (37 === t.keyCode) return k(t), !1
					}
				},
				Y = function () {
					s.touch = {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						}
					}, s.viewport.bind("touchstart MSPointerDown pointerdown", V), s.viewport.on("click", ".bxslider a", function (t) {
						s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"))
					})
				},
				V = function (t) {
					if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");
					else {
						s.touch.originalPos = o.position();
						var e = t.originalEvent,
							i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
						s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY;
						var n = "function" == typeof PointerEvent;
						if (n && void 0 === e.pointerId) return;
						s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", Z), s.viewport.bind("touchend MSPointerUp pointerup", B), s.viewport.bind("MSPointerCancel pointercancel", R)
					}
				},
				R = function (t) {
					S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", R), s.viewport.unbind("touchmove MSPointerMove pointermove", Z), s.viewport.unbind("touchend MSPointerUp pointerup", B), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
				},
				Z = function (t) {
					var e = t.originalEvent,
						i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
						n = Math.abs(i[0].pageX - s.touch.start.x),
						o = Math.abs(i[0].pageY - s.touch.start.y),
						r = 0,
						a = 0;
					3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0))
				},
				B = function (t) {
					s.viewport.unbind("touchmove MSPointerMove pointermove", Z), s.controls.el.removeClass("disabled");
					var e = t.originalEvent,
						i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
						n = 0,
						r = 0;
					s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && 0 > r) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (0 > r ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", B), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId)
				},
				U = function (e) {
					if (s.initialized)
						if (s.working) window.setTimeout(U, 10);
						else {
							var i = t(window).width(),
								n = t(window).height();
							(r !== i || a !== n) && (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index))
						}
				},
				j = function (t) {
					var e = v();
					s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"))
				},
				Q = function (t) {
					return 0 > t ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t
				};
			return o.goToSlide = function (e, i) {
				var n, r, a, l, d = !0,
					c = 0,
					g = {
						left: 0,
						top: 0
					},
					u = null;
				if (s.oldIndex = s.active.index, s.active.index = Q(e), !s.working && s.active.index !== s.oldIndex) {
					if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void(s.working = !1);
					"next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
						height: p()
					}, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
						zIndex: 0
					}), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function () {
						t(this).css("zIndex", s.settings.slideZIndex), A()
					})) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({
						height: p()
					}, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - x() : (f() - 1) * x() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(x()), g = s.children.eq(l).position()), "undefined" != typeof g && (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)), s.working = !1), s.settings.ariaHidden && j(s.active.index * x())
				}
			}, o.goToNextSlide = function () {
				if ((s.settings.infiniteLoop || !s.active.last) && 1 != s.working) {
					var t = parseInt(s.active.index) + 1;
					o.goToSlide(t, "next")
				}
			}, o.goToPrevSlide = function () {
				if ((s.settings.infiniteLoop || 0 !== s.active.index) && 1 != s.working) {
					var t = parseInt(s.active.index) - 1;
					o.goToSlide(t, "prev")
				}
			}, o.startAuto = function (t) {
				s.interval || (s.interval = setInterval(function () {
					"next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
				}, s.settings.pause), s.settings.onAutoChange.call(o, !0), s.settings.autoControls && t !== !0 && q("stop"))
			}, o.stopAuto = function (t) {
				s.interval && (clearInterval(s.interval), s.interval = null, s.settings.onAutoChange.call(o, !1), s.settings.autoControls && t !== !0 && q("start"))
			}, o.getCurrentSlide = function () {
				return s.active.index
			}, o.getCurrentSlideElement = function () {
				return s.children.eq(s.active.index)
			}, o.getSlideElement = function (t) {
				return s.children.eq(t)
			}, o.getSlideCount = function () {
				return s.children.length
			}, o.isWorking = function () {
				return s.working
			}, o.redrawSlider = function () {
				s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || m(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)), s.settings.ariaHidden && j(s.active.index * x())
			}, o.destroySlider = function () {
				s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function () {
					void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
				}), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", U), s.settings.keyboardEnabled && t(document).unbind("keydown", X), t(this).removeData("bxSlider"), t(window).off("blur", W).off("focus", H))
			}, o.reloadSlider = function (e) {
				void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this)
			}, l(), t(o).data("bxSlider", this), this
		}
	}
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/aspro_next/js/jqModal.min.js?15700193902622";s:6:"source";s:42:"/bitrix/templates/aspro_next/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (n) {
	n.fn.jqm = function (t) {
		var o = n.extend({}, n.jqm.params, t);
		return this.each(function () {
			var t = n(this),
				e = n(this).data("jqm");
			e || (e = {
				ID: m++
			}), t.data("jqm", n.extend(o, e)).addClass("jqm-init"), o.trigger && n(this).jqmAddTrigger(o.trigger)
		})
	}, n.fn.jqmAddTrigger = function (o) {
		return this.each(function () {
			s(n(this), "jqmShow", o) || t("jqmAddTrigger must be called on initialized modals")
		})
	}, n.fn.jqmAddClose = function (o) {
		return this.each(function () {
			s(n(this), "jqmHide", o) || t("jqmAddClose must be called on initialized modals")
		})
	}, n.fn.jqmShow = function (t) {
		return this.each(function () {
			!this._jqmShown && o(n(this), t)
		})
	}, n.fn.jqmHide = function (t) {
		return this.each(function () {
			this._jqmShown && e(n(this), t)
		})
	};
	var t = function (n) {
			window.console && window.console.error && window.console.error(n)
		},
		o = function (t, o) {
			var e = t.data("jqm"),
				o = o || window.event,
				i = parseInt(t.css("z-index")),
				i = i > 0 ? i : 3e3,
				a = n("<div></div>").addClass(e.overlayClass).css({
					height: "100%",
					width: "100%",
					position: "fixed",
					left: 0,
					top: 0,
					"z-index": i - 1,
					opacity: e.overlay / 100
				}),
				s = {
					w: t,
					c: e,
					o: a,
					t: o
				};
			if (t.css("z-index", i), e.ajax) {
				var d = e.target || t,
					c = e.ajax;
				d = "string" == typeof d ? n(d, t) : n(d), "@" == c.substr(0, 1) && (c = n(o).attr(c.substring(1))), d.html(e.ajaxText).load(c, function () {
					e.onLoad && e.onLoad.call(this, s), r(s)
				})
			} else r(s)
		},
		e = function (n, t) {
			var o = n.data("jqm"),
				t = t || window.event,
				e = {
					w: n,
					c: o,
					o: n.data("jqmv"),
					t: t
				};
			d(e)
		},
		i = function (t) {
			return t.w[0]._jqmShown ? !1 : (t.c.overlay > 0 && t.o.prependTo("body"), t.w.show(), n.jqm.focusFunc(t.w), !0)
		},
		a = function (n) {
			return n.w.hide() && n.o && n.o.remove(), !0
		},
		s = function (t, o, e) {
			return t.data("jqm") ? n(e).each(function () {
				this[o] = this[o] || [], this[o].push(t)
			}).click(function () {
				var t = this;
				return n.each(this[o], function (n, e) {
					e[o](t)
				}), !1
			}) : !1
		},
		r = function (t) {
			var o = t.w,
				e = t.o,
				i = t.c;
			i.onShow(t) !== !1 && (o[0]._jqmShown = !0, i.modal ? (!h[0] && c("bind"), h.push(o)) : o.jqmAddClose(e), i.closeClass && o.jqmAddClose(n("." + i.closeClass, o)), i.toTop && e && o.before('<span id="jqmP' + i.ID + '"></span>').insertAfter(e), o.data("jqmv", e))
		},
		d = function (t) {
			var o = t.w,
				e = t.o,
				i = t.c;
			i.onHide(t) !== !1 && (o[0]._jqmShown = !1, i.modal && (h.pop(), !h[0] && c("unbind")), i.toTop && e && n("#jqmP" + i.ID).after(o).remove())
		},
		c = function (t) {
			n(document)[t]("keypress keydown mousedown", u)
		},
		u = function (t) {
			var o = n(t.target).data("jqm") || n(t.target).parents(".jqm-init:first").data("jqm"),
				e = h[h.length - 1].data("jqm");
			return o && o.ID == e.ID ? !0 : n.jqm.focusFunc(e)
		},
		m = 0,
		h = [];
	n.jqm = {
		params: {
			overlay: 50,
			overlayClass: "jqmOverlay",
			closeClass: "jqmClose",
			trigger: ".jqModal",
			ajax: !1,
			target: !1,
			ajaxText: "",
			modal: !1,
			toTop: !1,
			onShow: i,
			onHide: a,
			onLoad: !1
		},
		focusFunc: function (t) {
			return n(":input:visible:first", t).focus(), !1
		}
	}
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/vendor/js/bootstrap.js?157001938927908";s:6:"source";s:51:"/bitrix/templates/aspro_next/vendor/js/bootstrap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

+
function (a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function (c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function (b) {
		function f() {
			e.trigger("closed.bs.alert").remove()
		}
		var c = a(this),
			d = c.attr("data-target");
		d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
		var e = a(d);
		b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close.bs.alert"));
		if (b.isDefaultPrevented()) return;
		e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.one(a.support.transition.end, f).emulateTransitionEnd(150) : f()
	};
	var d = a.fn.alert;
	a.fn.alert = function (b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), typeof b == "string" && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
	};
	b.DEFAULTS = {
		loadingText: "loading..."
	}, b.prototype.setState = function (a) {
		var b = "disabled",
			c = this.$element,
			d = c.is("input") ? "val" : "html",
			e = c.data();
		a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
			a == "loadingText" ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
		}, 0)
	}, b.prototype.toggle = function () {
		var a = this.$element.closest('[data-toggle="buttons"]');
		if (a.length) {
			var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
			b.prop("type") === "radio" && a.find(".active").removeClass("active")
		}
		this.$element.toggleClass("active")
	};
	var c = a.fn.button;
	a.fn.button = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = typeof c == "object" && c;
			e || d.data("bs.button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
		return a.fn.button = c, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
	})
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
	};
	b.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, b.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, b.prototype.getActiveIndex = function () {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, b.prototype.to = function (b) {
		var c = this,
			d = this.getActiveIndex();
		if (b > this.$items.length - 1 || b < 0) return;
		return this.sliding ? this.$element.one("slid", function () {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, b.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, b.prototype.next = function () {
		if (this.sliding) return;
		return this.slide("next")
	}, b.prototype.prev = function () {
		if (this.sliding) return;
		return this.slide("prev")
	}, b.prototype.slide = function (b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = b == "next" ? "left" : "right",
			h = b == "next" ? "first" : "last",
			i = this;
		if (!e.length) {
			if (!this.options.wrap) return;
			e = this.$element.find(".item")[h]()
		}
		this.sliding = !0, f && this.pause();
		var j = a.Event("slide.bs.carousel", {
			relatedTarget: e[0],
			direction: g
		});
		if (e.hasClass("active")) return;
		this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
			var b = a(i.$indicators.children()[i.getActiveIndex()]);
			b && b.addClass("active")
		}));
		if (a.support.transition && this.$element.hasClass("slide")) {
			this.$element.trigger(j);
			if (j.isDefaultPrevented()) return;
			e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
				e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger("slid")
				}, 0)
			}).emulateTransitionEnd(600)
		} else {
			this.$element.trigger(j);
			if (j.isDefaultPrevented()) return;
			d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
		}
		return f && this.cycle(), this
	};
	var c = a.fn.carousel;
	a.fn.carousel = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), typeof c == "object" && c),
				g = typeof c == "string" ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), typeof c == "number" ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = c, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
		var c = a(this),
			d, e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), c.data()),
			g = c.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = c.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
	}), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var b = a(this);
			b.carousel(b.data())
		})
	})
}(window.jQuery), + function (a) {
	function e() {
		a(b).remove(), a(c).each(function (b) {
			var c = f(a(this));
			if (!c.hasClass("open")) return;
			c.trigger(b = a.Event("hide.bs.dropdown"));
			if (b.isDefaultPrevented()) return;
			c.removeClass("open").trigger("hidden.bs.dropdown")
		})
	}

	function f(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	"use strict";
	var b = ".dropdown-backdrop",
		c = "[data-toggle=dropdown]",
		d = function (b) {
			var c = a(b).on("click.bs.dropdown", this.toggle)
		};
	d.prototype.toggle = function (b) {
		var c = a(this);
		if (c.is(".disabled, :disabled")) return;
		var d = f(c),
			g = d.hasClass("open");
		e();
		if (!g) {
			"ontouchstart" in document.documentElement && !d.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", e), d.trigger(b = a.Event("show.bs.dropdown"));
			if (b.isDefaultPrevented()) return;
			d.toggleClass("open").trigger("shown.bs.dropdown"), c.focus()
		}
		return !1
	}, d.prototype.keydown = function (b) {
		if (!/(38|40|27)/.test(b.keyCode)) return;
		var d = a(this);
		b.preventDefault(), b.stopPropagation();
		if (d.is(".disabled, :disabled")) return;
		var e = f(d),
			g = e.hasClass("open");
		if (!g || g && b.keyCode == 27) return b.which == 27 && e.find(c).focus(), d.click();
		var h = a("[role=menu] li:not(.divider):visible a", e);
		if (!h.length) return;
		var i = h.index(h.filter(":focus"));
		b.keyCode == 38 && i > 0 && i--, b.keyCode == 40 && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
	};
	var g = a.fn.dropdown;
	a.fn.dropdown = function (b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("dropdown");
			e || c.data("dropdown", e = new d(this)), typeof b == "string" && e[b].call(c)
		})
	}, a.fn.dropdown.Constructor = d, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = g, this
	}, a(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", c, d.prototype.toggle).on("keydown.bs.dropdown.data-api", c + ", [role=menu]", d.prototype.keydown)
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (b, c) {
		this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function (a) {
		return this[this.isShown ? "hide" : "show"](a)
	}, b.prototype.show = function (b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d);
		if (this.isShown || d.isDefaultPrevented()) return;
		this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
				c.$element.focus().trigger(e)
			}).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
		})
	}, b.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b);
		if (!this.isShown || b.isDefaultPrevented()) return;
		this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
	}, b.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] !== a.target && !this.$element.has(a.target).length && this.$element.focus()
		}, this))
	}, b.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
			a.which == 27 && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function (b) {
		var c = this,
			d = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var e = a.support.transition && d;
			this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function (a) {
				if (a.target !== a.currentTarget) return;
				this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
			}, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
			if (!b) return;
			e ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
	};
	var c = a.fn.modal;
	a.fn.modal = function (c, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), typeof c == "object" && c);
			f || e.data("bs.modal", f = new b(this, g)), typeof c == "string" ? f[c](d) : g.show && f.show(d)
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		b.preventDefault(), e.modal(f, this).one("hide", function () {
			c.is(":visible") && c.focus()
		})
	}), a(document).on("show.bs.modal", ".modal", function () {
		a(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function () {
		a(document.body).removeClass("modal-open")
	})
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	b.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, b.prototype.init = function (b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		var e = this.options.trigger.split(" ");
		for (var f = e.length; f--;) {
			var g = e[f];
			if (g == "click") this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if (g != "manual") {
				var h = g == "hover" ? "mouseenter" : "focus",
					i = g == "hover" ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, b.prototype.getDefaults = function () {
		return b.DEFAULTS
	}, b.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && typeof b.delay == "number" && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, b.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, b.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		clearTimeout(c.timeout), c.hoverState = "in";
		if (!c.options.delay || !c.options.delay.show) return c.show();
		c.timeout = setTimeout(function () {
			c.hoverState == "in" && c.show()
		}, c.options.delay.show)
	}, b.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		clearTimeout(c.timeout), c.hoverState = "out";
		if (!c.options.delay || !c.options.delay.hide) return c.hide();
		c.timeout = setTimeout(function () {
			c.hoverState == "out" && c.hide()
		}, c.options.delay.hide)
	}, b.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			if (b.isDefaultPrevented()) return;
			var c = this.tip();
			this.setContent(), this.options.animation && c.addClass("fade");
			var d = typeof this.options.placement == "function" ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
				e = /\s?auto?\s?/i,
				f = e.test(d);
			f && (d = d.replace(e, "") || "top"), c.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
			var g = this.getPosition(),
				h = c[0].offsetWidth,
				i = c[0].offsetHeight;
			if (f) {
				var j = this.$element.parent(),
					k = d,
					l = document.documentElement.scrollTop || document.body.scrollTop,
					m = this.options.container == "body" ? window.innerWidth : j.outerWidth(),
					n = this.options.container == "body" ? window.innerHeight : j.outerHeight(),
					o = this.options.container == "body" ? 0 : j.offset().left;
				d = d == "bottom" && g.top + g.height + i - l > n ? "top" : d == "top" && g.top - l - i < 0 ? "bottom" : d == "right" && g.right + h > m ? "left" : d == "left" && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
			}
			var p = this.getCalculatedOffset(d, g, h, i);
			this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
		}
	}, b.prototype.applyPlacement = function (a, b) {
		var c, d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		b == "top" && j != f && (c = !0, a.top = a.top + f - j);
		if (/bottom|top/.test(b)) {
			var k = 0;
			a.left < 0 && (k = a.left * -2, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
		} else this.replaceArrow(j - f, j, "top");
		c && d.offset(a)
	}, b.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, b.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, b.prototype.hide = function () {
		function e() {
			b.hoverState != "in" && c.detach()
		}
		var b = this,
			c = this.tip(),
			d = a.Event("hide.bs." + this.type);
		this.$element.trigger(d);
		if (d.isDefaultPrevented()) return;
		return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? c.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this
	}, b.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, b.prototype.hasContent = function () {
		return this.getTitle()
	}, b.prototype.getPosition = function () {
		var b = this.$element[0];
		return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
			width: b.offsetWidth,
			height: b.offsetHeight
		}, this.$element.offset())
	}, b.prototype.getCalculatedOffset = function (a, b, c, d) {
		return a == "bottom" ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : a == "top" ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : a == "left" ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, b.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
	}, b.prototype.tip = function () {
		return this.$tip = this.$tip || a(this.options.template)
	}, b.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, b.prototype.validate = function () {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, b.prototype.enable = function () {
		this.enabled = !0
	}, b.prototype.disable = function () {
		this.enabled = !1
	}, b.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, b.prototype.toggle = function (b) {
		var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, b.prototype.destroy = function () {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var c = a.fn.tooltip;
	a.fn.tooltip = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = typeof c == "object" && c;
			e || d.data("bs.tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = c, this
	}
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
		return b.DEFAULTS
	}, b.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, b.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, b.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || (typeof b.content == "function" ? b.content.call(a[0]) : b.content)
	}, b.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, b.prototype.tip = function () {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var c = a.fn.popover;
	a.fn.popover = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = typeof c == "object" && c;
			e || d.data("bs.popover", e = new b(this, f)), typeof c == "string" && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
		return a.fn.popover = c, this
	}
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (b) {
		this.element = a(b)
	};
	b.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
		if (b.parent("li").hasClass("active")) return;
		var e = c.find(".active:last a")[0],
			f = a.Event("show.bs.tab", {
				relatedTarget: e
			});
		b.trigger(f);
		if (f.isDefaultPrevented()) return;
		var g = a(d);
		this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
			b.trigger({
				type: "shown.bs.tab",
				relatedTarget: e
			})
		})
	}, b.prototype.activate = function (b, c, d) {
		function g() {
			e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var e = c.find("> .active"),
			f = d && a.support.transition && e.hasClass("fade");
		f ? e.one(a.support.transition.end, g).emulateTransitionEnd(150) : g(), e.removeClass("in")
	};
	var c = a.fn.tab;
	a.fn.tab = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), typeof c == "string" && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
		return a.fn.tab = c, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
		b.preventDefault(), a(this).tab("show")
	})
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (c, d) {
		this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
	};
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
		offset: 0
	}, b.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, b.prototype.checkPosition = function () {
		if (!this.$element.is(":visible")) return;
		var c = a(document).height(),
			d = this.$window.scrollTop(),
			e = this.$element.offset(),
			f = this.options.offset,
			g = f.top,
			h = f.bottom;
		typeof f != "object" && (h = g = f), typeof g == "function" && (g = f.top()), typeof h == "function" && (h = f.bottom());
		var i = this.unpin != null && d + this.unpin <= e.top ? !1 : h != null && e.top + this.$element.height() >= c - h ? "bottom" : g != null && d <= g ? "top" : !1;
		if (this.affixed === i) return;
		this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = i == "bottom" ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), i == "bottom" && this.$element.offset({
			top: document.body.offsetHeight - h - this.$element.height()
		})
	};
	var c = a.fn.affix;
	a.fn.affix = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.affix"),
				f = typeof c == "object" && c;
			e || d.data("bs.affix", e = new b(this, f)), typeof c == "string" && e[c]()
		})
	}, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
		return a.fn.affix = c, this
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
		})
	})
}(window.jQuery), + function (a) {
	"use strict";
	var b = function (c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function () {
		if (this.transitioning || this.$element.hasClass("in")) return;
		var b = a.Event("show.bs.collapse");
		this.$element.trigger(b);
		if (b.isDefaultPrevented()) return;
		var c = this.$parent && this.$parent.find("> .panel > .in");
		if (c && c.length) {
			var d = c.data("bs.collapse");
			if (d && d.transitioning) return;
			c.collapse("hide"), d || c.data("bs.collapse", null)
		}
		var e = this.dimension();
		this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
		var f = function () {
			this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
		};
		if (!a.support.transition) return f.call(this);
		var g = a.camelCase(["scroll", e].join("-"));
		this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
	}, b.prototype.hide = function () {
		if (this.transitioning || !this.$element.hasClass("in")) return;
		var b = a.Event("hide.bs.collapse");
		this.$element.trigger(b);
		if (b.isDefaultPrevented()) return;
		var c = this.dimension();
		this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
		var d = function () {
			this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
		};
		if (!a.support.transition) return d.call(this);
		this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350)
	}, b.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), typeof c == "object" && c);
			e || d.data("bs.collapse", e = new b(this, f)), typeof c == "string" && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
		var c = a(this),
			d, e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : c.data(),
			i = c.attr("data-parent"),
			j = i && a(i);
		if (!g || !g.transitioning) j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(c).addClass("collapsed"), c[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
		f.collapse(h)
	})
}(window.jQuery), + function (a) {
	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
	}
	"use strict", b.DEFAULTS = {
		offset: 10
	}, b.prototype.refresh = function () {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this,
			d = this.$body.find(this.selector).map(function () {
				var d = a(this),
					e = d.data("target") || d.attr("href"),
					f = /^#\w/.test(e) && a(e);
				return f && f.length && [
					[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
				] || null
			}).sort(function (a, b) {
				return a[0] - b[0]
			}).each(function () {
				c.offsets.push(this[0]), c.targets.push(this[1])
			})
	}, b.prototype.process = function () {
		var a = this.$scrollElement.scrollTop() + this.options.offset,
			b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			c = b - this.$scrollElement.height(),
			d = this.offsets,
			e = this.targets,
			f = this.activeTarget,
			g;
		if (a >= c) return f != (g = e.last()[0]) && this.activate(g);
		for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
	};
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function (c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = typeof c == "object" && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = c, this
	}, a(window).on("load", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(window.jQuery), + function (a) {
	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (a.style[c] !== undefined) return {
				end: b[c]
			}
	}
	"use strict", a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b()
	})
}(window.jQuery)
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/vendor/js/jquery.appear.js?15700193893188";s:6:"source";s:55:"/bitrix/templates/aspro_next/vendor/js/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($) {
	$.fn.appear = function (fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function () {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function () {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function () {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function () {
			var length = $.fn.appear.checks.length;
			if (length > 0)
				while (length--)($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function () {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'
	], function (i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function () {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/aspro_next/js/browser.min.js?1570019390662";s:6:"source";s:42:"/bitrix/templates/aspro_next/js/browser.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var matched, browser;
jQuery.uaMatch = function (e) {
	e = e.toLowerCase();
	var r = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie)[\s?]([\w.]+)/.exec(e) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
	return {
		browser: r[1] || "",
		version: r[2] || "0"
	}
}, matched = jQuery.uaMatch(navigator.userAgent), matched.browser = "trident" == matched.browser ? "msie" : matched.browser, browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser;
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/jquery.fancybox.min.js?157001939021526";s:6:"source";s:50:"/bitrix/templates/aspro_next/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e, t, n, i) {
	"use strict";
	var o = n(e),
		a = n(t),
		r = n.fancybox = function () {
			r.open.apply(this, arguments)
		},
		s = null,
		l = t.createTouch !== i,
		c = function (e) {
			return e && e.hasOwnProperty && e instanceof n
		},
		p = function (e) {
			return e && "string" === n.type(e)
		},
		d = function (e) {
			return p(e) && e.indexOf("%") > 0
		},
		h = function (e) {
			return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
		},
		f = function (e, t) {
			var n = parseInt(e, 10);
			return t && d(e) && (n = r.getViewport()[t] / 100 * n), Math.ceil(n)
		},
		u = function (e, t) {
			return f(e, t) + "px"
		};
	n.extend(r, {
		version: "2.1.0",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !l,
			autoCenter: !l,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: {
					closeClick: !0,
					speedOut: 200,
					showEarly: !0,
					css: {}
				},
				title: {
					type: "float"
				}
			},
			onCancel: n.noop,
			beforeLoad: n.noop,
			afterLoad: n.noop,
			beforeShow: n.noop,
			afterShow: n.noop,
			beforeChange: n.noop,
			beforeClose: n.noop,
			afterClose: n.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function (e, t) {
			return e && (n.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function (o, a) {
				var s, l, d, h, f, u, g, m = {};
				"object" === n.type(a) && (a.nodeType && (a = n(a)), c(a) ? (m = {
					href: a.attr("href"),
					title: a.attr("title"),
					isDom: !0,
					element: a
				}, n.metadata && n.extend(!0, m, a.metadata())) : m = a), s = t.href || m.href || (p(a) ? a : null), l = t.title !== i ? t.title : m.title || "", d = t.content || m.content, h = d ? "html" : t.type || m.type, !h && m.isDom && (h = a.data("fancybox-type"), h || (f = a.prop("class").match(/fancybox\.(\w+)/), h = f ? f[1] : null)), p(s) && (h || (r.isImage(s) ? h = "image" : r.isSWF(s) ? h = "swf" : "#" === s.charAt(0) ? h = "inline" : p(a) && (h = "html", d = a)), "ajax" === h && (u = s.split(/\s+/, 2), s = u.shift(), g = u.shift())), d || ("inline" === h ? s ? d = n(p(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : m.isDom && (d = a) : "html" === h ? d = s : h || s || !m.isDom || (h = "inline", d = a)), n.extend(m, {
					href: s,
					type: h,
					content: d,
					title: l,
					selector: g
				}), e[o] = m
			}), r.opts = n.extend(!0, {}, r.defaults, t), t.keys !== i && (r.opts.keys = t.keys ? n.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
		},
		cancel: function () {
			var e = r.coming;
			e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0).trigger("onReset").remove(), r.current || r.trigger("afterClose"), r.coming = null)
		},
		close: function (e) {
			r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isOpen && e !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), "fixed" === r.wrap.css("position") && r.wrap.css(r._getPosition(!0)), r.transitions[r.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut()))
		},
		play: function (e) {
			var t = function () {
					clearTimeout(r.player.timer)
				},
				i = function () {
					t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
				},
				o = function () {
					t(), n("body").unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
				},
				a = function () {
					r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, n("body").bind({
						"afterShow.player onUpdate.player": i,
						"onCancel.player beforeClose.player": o,
						"beforeLoad.player": t
					}), i(), r.trigger("onPlayStart"))
				};
			e === !0 || !r.player.isActive && e !== !1 ? a() : o()
		},
		next: function (e) {
			var t = r.current;
			t && (p(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
		},
		prev: function (e) {
			var t = r.current;
			t && (p(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
		},
		jumpto: function (e, t, n) {
			var o = r.current;
			o && (e = f(e), r.direction = t || o.direction[e >= o.index ? "next" : "prev"], r.router = n || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (r.cancel(), r._start(e)))
		},
		reposition: function (e, t) {
			var n;
			r.isOpen && (n = r._getPosition(t), e && "scroll" === e.type ? (delete n.position, r.wrap.stop(!0, !0).animate(n, 200)) : r.wrap.css(n))
		},
		update: function (e) {
			var t = e && e.type,
				n = !t || "orientationchange" === t;
			n && (clearTimeout(s), s = null), r.isOpen && !s && ((n || l) && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), s = setTimeout(function () {
				var n = r.current;
				n && (r.wrap.removeClass("fancybox-tmp"), "scroll" !== t && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), s = null)
			}, l ? 500 : n ? 20 : 300))
		},
		toggle: function (e) {
			r.isOpen && (r.current.fitToView = "boolean" === n.type(e) ? e : !r.current.fitToView, r.update())
		},
		hideLoading: function () {
			a.unbind("keypress.fb"), n("#fancybox-loading").remove()
		},
		showLoading: function () {
			var e, t;
			r.hideLoading(), a.bind("keypress.fb", function (e) {
				27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
			}), e = n('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), r.defaults.fixed || (t = r.getViewport(), e.css({
				position: "absolute",
				top: .5 * t.h + t.y,
				left: .5 * t.w + t.x
			}))
		},
		getViewport: function () {
			var t = r.current ? r.current.locked : !1,
				n = {
					x: o.scrollLeft(),
					y: o.scrollTop()
				};
			return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : o.width(), n.h = l && e.innerHeight ? e.innerHeight : o.height()), n
		},
		unbindEvents: function () {
			r.wrap && c(r.wrap) && r.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
		},
		bindEvents: function () {
			var e, t = r.current;
			t && (o.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), r.update), e = t.keys, e && a.bind("keydown.fb", function (o) {
				var a = o.which || o.keyCode,
					s = o.target || o.srcElement;
				o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || s && (s.type || n(s).is("[contenteditable]")) || n.each(e, function (e, s) {
					return t.group.length > 1 && s[a] !== i ? (r[e](s[a]), o.preventDefault(), !1) : n.inArray(a, s) > -1 ? (r[e](), o.preventDefault(), !1) : void 0
				})
			}), n.fn.mousewheel && t.mouseWheel && r.wrap.bind("mousewheel.fb", function (e, i, o, a) {
				for (var s = e.target || null, l = n(s), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = h(l[0]), l = n(l).parent();
				0 === i || c || r.group.length > 1 && !t.canShrink && (a > 0 || o > 0 ? r.prev(a > 0 ? "down" : "left") : (0 > a || 0 > o) && r.next(0 > a ? "up" : "right"), e.preventDefault())
			}))
		},
		trigger: function (e, t) {
			var i, o = t || r.coming || r.current;
			if (o) {
				if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
				"onCancel" !== e || r.isOpened || (r.isActive = !1), o.helpers && n.each(o.helpers, function (t, i) {
					i && r.helpers[t] && n.isFunction(r.helpers[t][e]) && r.helpers[t][e](i, o)
				}), n.event.trigger(e + ".fb")
			}
		},
		isImage: function (e) {
			return p(e) && e.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)
		},
		isSWF: function (e) {
			return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (e) {
			var t, i, o, a, s, c = {};
			if (e = f(e), t = r.group[e] || null, !t) return !1;
			if (c = n.extend(!0, {}, r.opts, t), a = c.margin, s = c.padding, "number" === n.type(a) && (c.margin = [a, a, a, a]), "number" === n.type(s) && (c.padding = [s, s, s, s]), c.modal && n.extend(!0, c, {
					closeBtn: !1,
					closeClick: !1,
					nextClick: !1,
					arrows: !1,
					mouseWheel: !1,
					keys: null,
					helpers: {
						overlay: {
							closeClick: !1
						}
					}
				}), c.autoSize && (c.autoWidth = c.autoHeight = !0), "auto" === c.width && (c.autoWidth = !0), "auto" === c.height && (c.autoHeight = !0), c.group = r.group, c.index = e, r.coming = c, !1 === r.trigger("beforeLoad")) return void(r.coming = null);
			if (o = c.type, i = c.href, !o) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
			if (r.isActive = !0, ("image" === o || "swf" === o) && (c.autoHeight = c.autoWidth = !1, c.scrolling = "visible"), "image" === o && (c.aspectRatio = !0), "iframe" === o && l && (c.scrolling = "scroll"), c.wrap = n(c.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + c.wrapCSS).appendTo(c.parent), n.extend(c, {
					skin: n(".fancybox-skin", c.wrap),
					outer: n(".fancybox-outer", c.wrap),
					inner: n(".fancybox-inner", c.wrap)
				}), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
					c.skin.css("padding" + t, u(c.padding[e]))
				}), r.trigger("onReady"), "inline" === o || "html" === o) {
				if (!c.content || !c.content.length) return r._error("content")
			} else if (!i) return r._error("href");
			"image" === o ? r._loadImage() : "ajax" === o ? r._loadAjax() : "iframe" === o ? r._loadIframe() : r._afterLoad()
		},
		_error: function (e) {
			n.extend(r.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: e,
				content: r.coming.tpl.error
			}), r._afterLoad()
		},
		_loadImage: function () {
			var e = r.imgPreload = new Image;
			e.onload = function () {
				this.onload = this.onerror = null, r.coming.width = this.width, r.coming.height = this.height, r._afterLoad()
			}, e.onerror = function () {
				this.onload = this.onerror = null, r._error("image")
			}, e.src = r.coming.href, e.complete !== i && e.complete || r.showLoading()
		},
		_loadAjax: function () {
			var e = r.coming;
			r.showLoading(), r.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
				url: e.href,
				error: function (e, t) {
					r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
				},
				success: function (t, n) {
					"success" === n && (e.content = t, r._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var e = r.coming,
				t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
			n(e.wrap).bind("onReset", function () {
				try {
					n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (e) {}
			}), e.iframe.preload && (r.showLoading(), t.one("load", function () {
				n(this).data("ready", 1), l || n(this).bind("load.fb", r.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
			})), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
		},
		_preloadImages: function () {
			var e, t, n = r.group,
				i = r.current,
				o = n.length,
				a = i.preload ? Math.min(i.preload, o - 1) : 0;
			for (t = 1; a >= t; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
		},
		_afterLoad: function () {
			var e, t, i, o, a, s, l = r.coming,
				p = r.current,
				d = "fancybox-placeholder";
			if (r.hideLoading(), l && r.isActive !== !1) {
				if (!1 === r.trigger("afterLoad", l, p)) return l.wrap.stop(!0).trigger("onReset").remove(), void(r.coming = null);
				switch (p && (r.trigger("beforeChange", p), p.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(), "fixed" === p.wrap.css("position") && p.wrap.css(r._getPosition(!0))), r.unbindEvents(), e = l, t = l.content, i = l.type, o = l.scrolling, n.extend(r, {
					wrap: e.wrap,
					skin: e.skin,
					outer: e.outer,
					inner: e.inner,
					current: e,
					previous: p
				}), a = e.href, i) {
					case "inline":
					case "ajax":
					case "html":
						e.selector ? t = n("<div>").html(t).find(e.selector) : c(t) && (t.data(d) || t.data(d, n('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
							n(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
						}));
						break;
					case "image":
						t = e.tpl.image.replace("{href}", a);
						break;
					case "swf":
						t = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', s = "", n.each(e.swf, function (e, n) {
							t += '<param name="' + e + '" value="' + n + '"></param>', s += " " + e + '="' + n + '"'
						}), t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
				}
				c(t) && t.parent().is(e.inner) || e.inner.append(t), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), r._setDimension(), e.wrap.removeClass("fancybox-tmp"), e.pos = n.extend({}, e.dim, r._getPosition(!0)), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? p.prevMethod && r.transitions[p.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
			}
		},
		_setDimension: function () {
			var e, t, i, o, a, s, l, c, p, h, g, m, y, w, v, b = r.getViewport(),
				x = 0,
				k = !1,
				C = !1,
				O = r.wrap,
				W = r.skin,
				_ = r.inner,
				S = r.current,
				P = S.width,
				E = S.height,
				T = S.minWidth,
				j = S.minHeight,
				L = S.maxWidth,
				M = S.maxHeight,
				H = S.scrolling,
				R = S.scrollOutside ? S.scrollbarWidth : 0,
				A = S.margin,
				I = A[1] + A[3],
				D = A[0] + A[2];
			if (O.add(W).add(_).width("auto").height("auto"), e = W.outerWidth(!0) - W.width(), t = W.outerHeight(!0) - W.height(), i = I + e, o = D + t, a = d(P) ? (b.w - i) * f(P) / 100 : P, s = d(E) ? (b.h - o) * f(E) / 100 : E, "iframe" === S.type) {
				if (w = S.content, S.autoHeight && 1 === w.data("ready")) try {
					w[0].contentWindow.document.location && (_.width(a).height(9999), v = w.contents().find("body"), R && v.css("overflow-x", "hidden"), s = v.height())
				} catch (V) {}
			} else(S.autoWidth || S.autoHeight) && (_.addClass("fancybox-tmp"), S.autoWidth || _.width(a), S.autoHeight || _.height(s), S.autoWidth && (a = _.width()), S.autoHeight && (s = _.height()), _.removeClass("fancybox-tmp"));
			if (P = f(a), E = f(s), p = a / s, T = f(d(T) ? f(T, "w") - i : T), L = f(d(L) ? f(L, "w") - i : L), j = f(d(j) ? f(j, "h") - o : j), M = f(d(M) ? f(M, "h") - o : M), l = L, c = M, m = b.w - I, y = b.h - D, S.aspectRatio ? (P > L && (P = L, E = P / p), E > M && (E = M, P = E * p), T > P && (P = T, E = P / p), j > E && (E = j, P = E * p)) : (P = Math.max(T, Math.min(P, L)), E = Math.max(j, Math.min(E, M))), S.fitToView)
				if (L = Math.min(b.w - i, L), M = Math.min(b.h - o, M), _.width(f(P)).height(f(E)), O.width(f(P + e)), h = O.width(), g = O.height(), S.aspectRatio)
					for (;
						(h > m || g > y) && P > T && E > j && !(x++ > 19);) E = Math.max(j, Math.min(M, E - 10)), P = E * p, T > P && (P = T, E = P / p), P > L && (P = L, E = P / p), _.width(f(P)).height(f(E)), O.width(f(P + e)), h = O.width(), g = O.height();
				else P = Math.max(T, Math.min(P, P - (h - m))), E = Math.max(j, Math.min(E, E - (g - y)));
			R && "auto" === H && s > E && m > P + e + R && (P += R), _.width(f(P)).height(f(E)), O.width(f(P + e)), h = O.width(), g = O.height(), k = (h > m || g > y) && P > T && E > j, C = S.aspectRatio ? l > P && c > E && a > P && s > E : (l > P || c > E) && (a > P || s > E), n.extend(S, {
				dim: {
					width: u(h),
					height: u(g)
				},
				origWidth: a,
				origHeight: s,
				canShrink: k,
				canExpand: C,
				wPadding: e,
				hPadding: t,
				wrapSpace: g - W.outerHeight(!0),
				skinSpace: W.height() - E
			}), !w && S.autoHeight && E > j && M > E && !C && _.height("auto")
		},
		_getPosition: function (e) {
			var t = r.current,
				n = r.getViewport(),
				i = t.margin,
				o = r.wrap.width() + i[1] + i[3],
				a = r.wrap.height() + i[0] + i[2],
				s = {
					position: "absolute",
					top: i[0],
					left: i[3]
				};
			return t.autoCenter && t.fixed && !e && a <= n.h && o <= n.w ? s.position = "fixed" : t.locked || (s.top += n.y, s.left += n.x), s.top = u(Math.max(s.top, s.top + (n.h - a) * t.topRatio)), s.left = u(Math.max(s.left, s.left + (n.w - o) * t.leftRatio)), s
		},
		_afterZoomIn: function () {
			var e = r.current;
			e && (r.isOpen = r.isOpened = !0, r.wrap.addClass("fancybox-opened").css("overflow", "visible"), r.reposition(), (e.closeClick || e.nextClick) && r.inner.css("cursor", "pointer").bind("click.fb", function (t) {
				n(t.target).is("a") || n(t.target).parent().is("a") || r[e.closeClick ? "close" : "next"]()
			}), e.closeBtn && n(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", r.close), e.arrows && r.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && n(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
		},
		_afterZoomOut: function () {
			var e = r.current;
			n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), n.extend(r, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), r.trigger("afterClose", e)
		}
	}), r.transitions = {
		getOrigPosition: function () {
			var e = r.current,
				t = e.element,
				n = e.orig,
				i = {},
				o = 50,
				a = 50,
				s = e.hPadding,
				l = e.wPadding,
				p = r.getViewport();
			return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), c(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), a = n.outerHeight())) : (i.top = p.y + (p.h - a) * e.topRatio, i.left = p.x + (p.w - o) * e.leftRatio), e.locked && (i.top -= p.y, i.left -= p.x), i = {
				top: u(i.top - s * e.topRatio),
				left: u(i.left - l * e.leftRatio),
				width: u(o + l),
				height: u(a + s)
			}
		},
		step: function (e, t) {
			var n, i, o, a = t.prop,
				s = r.current,
				l = s.wrapSpace,
				c = s.skinSpace;
			("width" === a || "height" === a) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (n = 1 - n), i = "width" === a ? s.wPadding : s.hPadding, o = e - i, r.skin[a](f("width" === a ? o : o - l * n)), r.inner[a](f("width" === a ? o : o - l * n - c * n)))
		},
		zoomIn: function () {
			var e = r.current,
				t = e.pos,
				i = e.openEffect,
				o = "elastic" === i,
				a = n.extend({
					opacity: 1
				}, t);
			delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), r.wrap.css(t).animate(a, {
				duration: "none" === i ? 0 : e.openSpeed,
				easing: e.openEasing,
				step: o ? this.step : null,
				complete: r._afterZoomIn
			})
		},
		zoomOut: function () {
			var e = r.current,
				t = e.closeEffect,
				n = "elastic" === t,
				i = {
					opacity: .1
				};
			n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), r.wrap.animate(i, {
				duration: "none" === t ? 0 : e.closeSpeed,
				easing: e.closeEasing,
				step: n ? this.step : null,
				complete: r._afterZoomOut
			})
		},
		changeIn: function () {
			var e, t = r.current,
				n = t.nextEffect,
				i = t.pos,
				o = {
					opacity: 1
				},
				a = r.direction,
				s = 200;
			i.opacity = .1, "elastic" === n && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (i[e] = u(f(i[e]) - s), o[e] = "+=" + s + "px") : (i[e] = u(f(i[e]) + s), o[e] = "-=" + s + "px")), "none" === n ? r._afterZoomIn() : r.wrap.css(i).animate(o, {
				duration: t.nextSpeed,
				easing: t.nextEasing,
				complete: r._afterZoomIn
			})
		},
		changeOut: function () {
			var e = r.previous,
				t = e.prevEffect,
				i = {
					opacity: .1
				},
				o = r.direction,
				a = 200;
			"elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + a + "px"), e.wrap.animate(i, {
				duration: "none" === t ? 0 : e.prevSpeed,
				easing: e.prevEasing,
				complete: function () {
					n(this).trigger("onReset").remove()
				}
			})
		}
	}, r.helpers.overlay = {
		overlay: null,
		update: function () {
			var e, i = "100%";
			this.overlay.width(i).height("100%"), n.browser.msie ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (i = a.width())) : a.width() > o.width() && (i = a.width()), this.overlay.width(i).height(a.height())
		},
		onReady: function (e, i) {
			n(".fancybox-overlay").stop(!0, !0), this.overlay || n.extend(this, {
				overlay: n('<div class="fancybox-overlay"></div>').appendTo(i.parent),
				margin: a.height() > o.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1,
				el: n(t.all && !t.querySelector ? "html" : "body")
			}), i.fixed && !l && (this.overlay.addClass("fancybox-overlay-fixed"), i.autoCenter && (this.overlay.append(i.wrap), i.locked = this.overlay)), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function (e, t) {
			var i = this.overlay.unbind(".fb").width("auto").height("auto").css(e.css);
			e.closeClick && i.bind("click.fb", function (e) {
				n(e.target).hasClass("fancybox-overlay") && r.close()
			}), t.fixed && !l ? t.locked && (this.el.addClass("fancybox-lock"), this.margin !== !1 && n("body").css("margin-right", f(this.margin) + t.scrollbarWidth)) : this.update(), i.show()
		},
		onUpdate: function (e, t) {
			(!t.fixed || l) && this.update()
		},
		afterClose: function (e) {
			var t = this,
				i = e.speedOut || 0;
			t.overlay && !r.isActive && t.overlay.fadeOut(i || 0, function () {
				n("body").css("margin-right", t.margin), t.el.removeClass("fancybox-lock"), t.overlay.remove(), t.overlay = null
			})
		}
	}, r.helpers.title = {
		beforeShow: function (e) {
			var t, i, o = r.current.title,
				a = e.type;
			if (p(o) && "" !== n.trim(o)) {
				switch (t = n('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + o + "</div>"), a) {
					case "inside":
						i = r.skin;
						break;
					case "outside":
						i = r.wrap;
						break;
					case "over":
						i = r.inner;
						break;
					default:
						i = r.skin, t.appendTo("body").width(t.width()).wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
				}
				"top" === e.position ? t.prependTo(i) : t.appendTo(i)
			}
		}
	}, n.fn.fancybox = function (e) {
		var t, i = n(this),
			o = this.selector || "",
			s = function (a) {
				var s, l, c = n(this).blur(),
					p = t;
				a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (s = e.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + s + '="' + l + '"]'), p = c.index(this)), e.index = p, r.open(c, e) !== !1 && a.preventDefault())
			};
		return e = e || {}, t = e.index || 0, o && e.live !== !1 ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this
	}, a.ready(function () {
		n.scrollbarWidth === i && (n.scrollbarWidth = function () {
			var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				t = e.children(),
				i = t.innerWidth() - t.height(99).innerWidth();
			return e.remove(), i
		}), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
			var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
				t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
			return e.remove(), t
		}()), n.extend(r.defaults, {
			scrollbarWidth: n.scrollbarWidth(),
			fixed: n.support.fixedPosition,
			parent: n("body")
		})
	})
}(window, document, jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro_next/js/jquery.flexslider.min.js?157001939022406";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.flexslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e) {
	var t = !0;
	e.flexslider = function (a, n) {
		var i = e(a);
		i.vars = e.extend({}, e.flexslider.defaults, n);
		var r, s = i.vars.namespace,
			o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
			c = "click touchend MSPointerUp keyup",
			d = "",
			u = "vertical" === i.vars.direction,
			v = i.vars.reverse,
			p = i.vars.itemWidth > 0,
			m = "fade" === i.vars.animation,
			f = "" !== i.vars.asNavFor,
			g = {};
		e.data(a, "flexslider", i), g = {
			init: function () {
				i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = e(i.vars.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = u ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !m && i.vars.useCSS && function () {
					var e = document.createElement("div"),
						t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var a in t)
						if (void 0 !== e.style[t[a]]) return i.pfx = t[a].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
					return !1
				}(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)), "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === e(i.vars.customDirectionNav).length && e(i.vars.customDirectionNav)), i.vars.randomize && (i.slides.sort(function () {
					return Math.round(Math.random()) - .5
				}), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && g.controlNav.setup(), i.vars.directionNav && g.directionNav.setup(), i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
					var t = e.keyCode;
					if (!i.animating && (39 === t || 37 === t)) {
						var a = 39 === t ? i.getTarget("next") : 37 === t && i.getTarget("prev");
						i.flexAnimate(a, i.vars.pauseOnAction)
					}
				}), i.vars.mousewheel && i.bind("mousewheel", function (e, t, a, n) {
					e.preventDefault();
					var r = t < 0 ? i.getTarget("next") : i.getTarget("prev");
					i.flexAnimate(r, i.vars.pauseOnAction)
				}), i.vars.pausePlay && g.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && g.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function () {
					i.manualPlay || i.manualPause || i.pause()
				}, function () {
					i.manualPause || i.manualPlay || i.stopped || i.play()
				}), i.vars.pauseInvisible && g.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && g.asNav.setup(), l && i.vars.touch && g.touch(), (!m || m && i.vars.smoothHeight) && e(window).bind("resize orientationchange", g.resize), i.find("img").attr("draggable", "false"), setTimeout(function () {
					i.vars.start(i)
				}, 200)
			},
			asNav: {
				setup: function () {
					i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(s + "active-slide").eq(i.currentItem).addClass(s + "active-slide"), o ? (a._slider = i, i.slides.each(function () {
						var t = this;
						t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function (e) {
							e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
						}, !1), t.addEventListener("MSGestureTap", function (t) {
							t.preventDefault();
							var a = e(this),
								n = a.index();
							e(i.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
						})
					})) : i.slides.on(c, function (t) {
						t.preventDefault();
						var a = e(this),
							n = a.index();
						a.offset().left - e(i).scrollLeft() <= 0 && a.hasClass(s + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function () {
					i.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
				},
				setupPaging: function () {
					var t, a, n = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
						r = 1;
					if (i.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + n + '"></ol>'), i.pagingCount > 1)
						for (var o = 0; o < i.pagingCount; o++) {
							void 0 === (a = i.slides.eq(o)).attr("data-thumb-alt") && a.attr("data-thumb-alt", "");
							var l = "" !== a.attr("data-thumb-alt") ? l = ' alt="' + a.attr("data-thumb-alt") + '"' : "";
							if (t = "thumbnails" === i.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + r + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
								var u = a.attr("data-thumbcaption");
								"" !== u && void 0 !== u && (t += '<span class="' + s + 'caption">' + u + "</span>")
							}
							i.controlNavScaffold.append("<li>" + t + "</li>"), r++
						}
					i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), i.controlNavScaffold.delegate("a, img", c, function (t) {
						if (t.preventDefault(), "" === d || d === t.type) {
							var a = e(this),
								n = i.controlNav.index(a);
							a.hasClass(s + "active") || (i.direction = n > i.currentSlide ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction))
						}
						"" === d && (d = t.type), g.setToClearWatchedEvent()
					})
				},
				setupManual: function () {
					i.controlNav = i.manualControls, g.controlNav.active(), i.controlNav.bind(c, function (t) {
						if (t.preventDefault(), "" === d || d === t.type) {
							var a = e(this),
								n = i.controlNav.index(a);
							a.hasClass(s + "active") || (n > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(n, i.vars.pauseOnAction))
						}
						"" === d && (d = t.type), g.setToClearWatchedEvent()
					})
				},
				set: function () {
					var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
					i.controlNav = e("." + s + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
				},
				active: function () {
					i.controlNav.removeClass(s + "active").eq(i.animatingTo).addClass(s + "active")
				},
				update: function (t, a) {
					i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e('<li><a href="#">' + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(a).closest("li").remove(), g.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(a, t) : g.controlNav.active()
				}
			},
			directionNav: {
				setup: function () {
					var t = e('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
					i.customDirectionNav ? i.directionNav = i.customDirectionNav : i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + s + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + s + "direction-nav li a", i)), g.directionNav.update(), i.directionNav.bind(c, function (t) {
						t.preventDefault();
						var a;
						"" !== d && d !== t.type || (a = e(this).hasClass(s + "next") ? i.getTarget("next") : i.getTarget("prev"), i.flexAnimate(a, i.vars.pauseOnAction)), "" === d && (d = t.type), g.setToClearWatchedEvent()
					})
				},
				update: function () {
					var e = s + "disabled";
					1 === i.pagingCount || i.pagingCount < 1 ? (i.directionNav.addClass(e).attr("tabindex", "-1"), i.directionNav.parent().addClass(e)) : i.vars.animationLoop ? (i.directionNav.removeClass(e).removeAttr("tabindex"), i.directionNav.parent().removeClass(e)) : 0 === i.animatingTo ? (i.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1"), i.directionNav.parent().removeClass(e), i.directionNav.filter("." + s + "prev").parent().addClass(e)) : i.animatingTo === i.last ? (i.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1"), i.directionNav.parent().removeClass(e), i.directionNav.filter("." + s + "next").parent().addClass(e)) : (i.directionNav.removeClass(e).removeAttr("tabindex"), i.directionNav.parent().removeClass(e))
				}
			},
			pausePlay: {
				setup: function () {
					var t = e('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
					i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + s + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + s + "pauseplay a", i)), g.pausePlay.update(i.vars.slideshow ? s + "pause" : s + "play"), i.pausePlay.bind(c, function (t) {
						t.preventDefault(), "" !== d && d !== t.type || (e(this).hasClass(s + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === d && (d = t.type), g.setToClearWatchedEvent()
					})
				},
				update: function (e) {
					"play" === e ? i.pausePlay.removeClass(s + "pause").addClass(s + "play").html(i.vars.playText) : i.pausePlay.removeClass(s + "play").addClass(s + "pause").html(i.vars.pauseText)
				}
			},
			touch: function () {
				var e, t, n, r, s, l, c, d, f, g = !1,
					h = 0,
					S = 0,
					x = 0;
				o ? (a.style.msTouchAction = "none", a._gesture = new MSGesture, a._gesture.target = a, a.addEventListener("MSPointerDown", function (e) {
					e.stopPropagation(), i.animating ? e.preventDefault() : (i.pause(), a._gesture.addPointer(e.pointerId), x = 0, r = u ? i.h : i.w, l = Number(new Date), n = p && v && i.animatingTo === i.last ? 0 : p && v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : v ? (i.last - i.currentSlide + i.cloneOffset) * r : (i.currentSlide + i.cloneOffset) * r)
				}, !1), a._slider = i, a.addEventListener("MSGestureChange", function (e) {
					e.stopPropagation();
					var t = e.target._slider;
					if (t) {
						var i = -e.translationX,
							o = -e.translationY;
						s = x += u ? o : i, g = u ? Math.abs(x) < Math.abs(-i) : Math.abs(x) < Math.abs(-o), e.detail !== e.MSGESTURE_FLAG_INERTIA ? (!g || Number(new Date) - l > 500) && (e.preventDefault(), !m && t.transitions && (t.vars.animationLoop || (s = x / (0 === t.currentSlide && x < 0 || t.currentSlide === t.last && x > 0 ? Math.abs(x) / r + 2 : 1)), t.setProps(n + s, "setTouch"))) : setImmediate(function () {
							a._gesture.stop()
						})
					}
				}, !1), a.addEventListener("MSGestureEnd", function (a) {
					a.stopPropagation();
					var i = a.target._slider;
					if (i) {
						if (i.animatingTo === i.currentSlide && !g && null !== s) {
							var o = v ? -s : s,
								c = o > 0 ? i.getTarget("next") : i.getTarget("prev");
							i.canAdvance(c) && (Number(new Date) - l < 550 && Math.abs(o) > 50 || Math.abs(o) > r / 2) ? i.flexAnimate(c, i.vars.pauseOnAction) : m || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
						}
						e = null, t = null, s = null, n = null, x = 0
					}
				}, !1)) : (c = function (s) {
					i.animating ? s.preventDefault() : (window.navigator.msPointerEnabled || 1 === s.touches.length) && (i.pause(), r = u ? i.h : i.w, l = Number(new Date), h = s.touches[0].pageX, S = s.touches[0].pageY, n = p && v && i.animatingTo === i.last ? 0 : p && v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : v ? (i.last - i.currentSlide + i.cloneOffset) * r : (i.currentSlide + i.cloneOffset) * r, e = u ? S : h, t = u ? h : S, a.addEventListener("touchmove", d, !1), a.addEventListener("touchend", f, !1))
				}, d = function (a) {
					h = a.touches[0].pageX, S = a.touches[0].pageY, s = u ? e - S : e - h;
					(!(g = u ? Math.abs(s) < Math.abs(h - t) : Math.abs(s) < Math.abs(S - t)) || Number(new Date) - l > 500) && (a.preventDefault(), !m && i.transitions && (i.vars.animationLoop || (s /= 0 === i.currentSlide && s < 0 || i.currentSlide === i.last && s > 0 ? Math.abs(s) / r + 2 : 1), i.setProps(n + s, "setTouch")))
				}, f = function (o) {
					if (a.removeEventListener("touchmove", d, !1), i.animatingTo === i.currentSlide && !g && null !== s) {
						var c = v ? -s : s,
							u = c > 0 ? i.getTarget("next") : i.getTarget("prev");
						i.canAdvance(u) && (Number(new Date) - l < 550 && Math.abs(c) > 50 || Math.abs(c) > r / 2) ? i.flexAnimate(u, i.vars.pauseOnAction) : m || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
					}
					a.removeEventListener("touchend", f, !1), e = null, t = null, s = null, n = null
				}, a.addEventListener("touchstart", c, !1))
			},
			resize: function () {
				!i.animating && i.is(":visible") && (p || i.doMath(), m ? g.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount)) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && g.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
			},
			smoothHeight: function (e) {
				if (!u || m) {
					var t = m ? i : i.viewport;
					e ? t.animate({
						height: i.slides.eq(i.animatingTo).innerHeight()
					}, e) : t.innerHeight(i.slides.eq(i.animatingTo).innerHeight())
				}
			},
			sync: function (t) {
				var a = e(i.vars.sync).data("flexslider"),
					n = i.animatingTo;
				switch (t) {
					case "animate":
						a.flexAnimate(n, i.vars.pauseOnAction, !1, !0);
						break;
					case "play":
						a.playing || a.asNav || a.play();
						break;
					case "pause":
						a.pause()
				}
			},
			uniqueID: function (t) {
				return t.filter("[id]").add(t.find("[id]")).each(function () {
					var t = e(this);
					t.attr("id", t.attr("id") + "_clone")
				}), t
			},
			pauseInvisible: {
				visProp: null,
				init: function () {
					var e = g.pauseInvisible.getHiddenProp();
					if (e) {
						var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(t, function () {
							g.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
						})
					}
				},
				isHidden: function () {
					var e = g.pauseInvisible.getHiddenProp();
					return !!e && document[e]
				},
				getHiddenProp: function () {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++)
						if (e[t] + "Hidden" in document) return e[t] + "Hidden";
					return null
				}
			},
			setToClearWatchedEvent: function () {
				clearTimeout(r), r = setTimeout(function () {
					d = ""
				}, 3e3)
			}
		}, i.flexAnimate = function (t, a, n, r, o) {
			if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, o) || n)) {
				if (f && r) {
					var c = e(i.vars.asNavFor).data("flexslider");
					i.atEnd = 0 === t || t === i.count - 1, c.flexAnimate(t, !0, !1, !0, o), i.direction = i.currentItem < t ? "next" : "prev", c.direction = i.direction, i.currentItem = t, i.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
					var d = Math.floor((t + 1) / i.visible) > 0 ? Math.floor((t + 1 - i.visible) / i.move) : 0;
					if (d == i.currentSlide) return !1;
					t = d
				}
				if (i.animating = !0, i.animatingTo = t, a && i.pause(), i.vars.before(i), i.syncExists && !o && g.sync("animate"), i.vars.controlNav && g.controlNav.active(), p || i.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && g.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), m) l ? (i.slides.eq(i.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), i.slides.eq(t).css({
					opacity: 1,
					zIndex: 2
				}), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, i.vars.animationSpeed, i.vars.easing, i.wrapup));
				else {
					var h, S, x, y = u ? i.slides.filter(":first").height() : i.computedW;
					p ? (h = i.vars.itemMargin, S = (x = (i.itemW + h) * i.move * i.animatingTo) > i.limit && 1 !== i.visible ? i.limit : x) : S = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? v ? (i.count + i.cloneOffset) * y : 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? v ? 0 : (i.count + 1) * y : v ? (i.count - 1 - t + i.cloneOffset) * y : (t + i.cloneOffset) * y, i.setProps(S, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function () {
						clearTimeout(i.ensureAnimationEnd), i.wrapup(y)
					}), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function () {
						i.wrapup(y)
					}, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function () {
						i.wrapup(y)
					})
				}
				i.vars.smoothHeight && g.smoothHeight(i.vars.animationSpeed)
			}
		}, i.wrapup = function (e) {
			m || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
		}, i.animateSlides = function () {
			!i.animating && t && i.flexAnimate(i.getTarget("next"))
		}, i.pause = function () {
			clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && g.pausePlay.update("play"), i.syncExists && g.sync("pause")
		}, i.play = function () {
			i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && g.pausePlay.update("pause"), i.syncExists && g.sync("play")
		}, i.stop = function () {
			i.pause(), i.stopped = !0
		}, i.canAdvance = function (e, t) {
			var a = f ? i.pagingCount - 1 : i.last;
			return !!t || (!(!f || i.currentItem !== i.count - 1 || 0 !== e || "prev" !== i.direction) || (!f || 0 !== i.currentItem || e !== i.pagingCount - 1 || "next" === i.direction) && (!(e === i.currentSlide && !f) && (!!i.vars.animationLoop || (!i.atEnd || 0 !== i.currentSlide || e !== a || "next" === i.direction) && (!i.atEnd || i.currentSlide !== a || 0 !== e || "next" !== i.direction))))
		}, i.getTarget = function (e) {
			return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
		}, i.setProps = function (e, t, a) {
			var n = function () {
				var a = e || (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo;
				return -1 * function () {
					if (p) return "setTouch" === t ? e : v && i.animatingTo === i.last ? 0 : v ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : a;
					switch (t) {
						case "setTotal":
							return v ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
						case "setTouch":
							return e;
						case "jumpEnd":
							return v ? e : i.count * e;
						case "jumpStart":
							return v ? i.count * e : e;
						default:
							return e
					}
				}() + "px"
			}();
			i.transitions && (n = u ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", a), i.container.css("transition-duration", a)), i.args[i.prop] = n, (i.transitions || void 0 === a) && i.container.css(i.args), i.container.css("transform", n)
		}, i.setup = function (t) {
			if (m) i.slides.css({
				width: "100%",
				float: "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === t && (l ? i.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(i.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(i.currentSlide).css({
				zIndex: 2
			}).css({
				opacity: 1
			}) : i.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(i.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && g.smoothHeight();
			else {
				var a, n;
				"init" === t && (i.viewport = e('<div class="' + s + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, v && (n = e.makeArray(i.slides).reverse(), i.slides = e(n), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(g.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = e(i.vars.selector, i), a = v ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, u && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
					i.newSlides.css({
						display: "block"
					}), i.doMath(), i.viewport.height(i.h), i.setProps(a * i.h, "init")
				}, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(a * i.computedW, "init"), setTimeout(function () {
					i.doMath(), i.newSlides.css({
						width: i.computedW,
						marginRight: i.computedM,
						float: "left",
						display: "block"
					}), i.vars.smoothHeight && g.smoothHeight()
				}, "init" === t ? 100 : 0))
			}
			p || i.slides.removeClass(s + "active-slide").eq(i.currentSlide).addClass(s + "active-slide"), i.vars.init(i)
		}, i.doMath = function () {
			var e = i.slides.first(),
				t = i.vars.itemMargin,
				a = i.vars.minItems,
				n = i.vars.maxItems;
			i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), p ? (i.itemT = i.vars.itemWidth + t, i.itemM = t, i.minW = a ? a * i.itemT : i.w, i.maxW = n ? n * i.itemT - t : i.w, i.itemW = i.minW > i.w ? (i.w - t * (a - 1)) / a : i.maxW < i.w ? (i.w - t * (n - 1)) / n : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor((i.itemT > i.itemW ? i.w + i.itemM : i.w) / (i.itemT > i.itemW ? i.itemT : i.itemW)), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.itemM = t, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding, i.computedM = i.itemM
		}, i.update = function (e, t) {
			i.doMath(), p || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === t && !p || i.pagingCount > i.controlNav.length ? g.controlNav.update("add") : ("remove" === t && !p || i.pagingCount < i.controlNav.length) && g.controlNav.update("remove", i.last)), i.vars.directionNav && g.directionNav.update()
		}, i.addSlide = function (t, a) {
			var n = e(t);
			i.count += 1, i.last = i.count - 1, u && v ? void 0 !== a ? i.slides.eq(i.count - a).after(n) : i.container.prepend(n) : void 0 !== a ? i.slides.eq(a).before(n) : i.container.append(n), i.update(a, "add"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
		}, i.removeSlide = function (t) {
			var a = isNaN(t) ? i.slides.index(e(t)) : t;
			i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : u && v ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(a, "remove"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
		}, g.init()
	}, e(window).blur(function (e) {
		t = !1
	}).focus(function (e) {
		t = !0
	}), e.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		fadeFirstSlide: !0,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		customDirectionNav: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {},
		added: function () {},
		removed: function () {},
		init: function () {}
	}, e.fn.flexslider = function (t) {
		if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function () {
			var a = e(this),
				n = t.selector ? t.selector : ".slides > li",
				i = a.find(n);
			1 === i.length && !1 === t.allowOneSlide || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
		});
		var a = e(this).data("flexslider");
		switch (t) {
			case "play":
				a.play();
				break;
			case "pause":
				a.pause();
				break;
			case "stop":
				a.stop();
				break;
			case "next":
				a.flexAnimate(a.getTarget("next"), !0);
				break;
			case "prev":
			case "previous":
				a.flexAnimate(a.getTarget("prev"), !0);
				break;
			default:
				"number" == typeof t && a.flexAnimate(t, !0)
		}
	}
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/aspro_next/vendor/js/moment.min.js?157001938934436";s:6:"source";s:52:"/bitrix/templates/aspro_next/vendor/js/moment.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
//! moment.js
//! version : 2.10.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function (a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
	"use strict";

	function a() {
		return Dc.apply(null, arguments)
	}

	function b(a) {
		Dc = a
	}

	function c(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function e(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}

	function f(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function g(a, b) {
		for (var c in b) f(b, c) && (a[c] = b[c]);
		return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function h(a, b, c, d) {
		return za(a, b, c, d, !0).utc()
	}

	function i() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}

	function j(a) {
		return null == a._pf && (a._pf = i()), a._pf
	}

	function k(a) {
		if (null == a._isValid) {
			var b = j(a);
			a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.nullInput && !b.invalidFormat && !b.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
		}
		return a._isValid
	}

	function l(a) {
		var b = h(0 / 0);
		return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
	}

	function m(a, b) {
		var c, d, e;
		if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Fc.length > 0)
			for (c in Fc) d = Fc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
		return a
	}

	function n(b) {
		m(this, b), this._d = new Date(+b._d), Gc === !1 && (Gc = !0, a.updateOffset(this), Gc = !1)
	}

	function o(a) {
		return a instanceof n || null != a && null != a._isAMomentObject
	}

	function p(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
	}

	function q(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && p(a[d]) !== p(b[d])) && g++;
		return g + f
	}

	function r() {}

	function s(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function t(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = s(a[f]).split("-"), b = e.length, c = s(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = u(e.slice(0, b).join("-"))) return d;
				if (c && c.length >= b && q(e, c, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return null
	}

	function u(a) {
		var b = null;
		if (!Hc[a] && "undefined" != typeof module && module && module.exports) try {
			b = Ec._abbr, require("./locale/" + a), v(b)
		} catch (c) {}
		return Hc[a]
	}

	function v(a, b) {
		var c;
		return a && (c = "undefined" == typeof b ? x(a) : w(a, b), c && (Ec = c)), Ec._abbr
	}

	function w(a, b) {
		return null !== b ? (b.abbr = a, Hc[a] || (Hc[a] = new r), Hc[a].set(b), v(a), Hc[a]) : (delete Hc[a], null)
	}

	function x(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ec;
		if (!c(a)) {
			if (b = u(a)) return b;
			a = [a]
		}
		return t(a)
	}

	function y(a, b) {
		var c = a.toLowerCase();
		Ic[c] = Ic[c + "s"] = Ic[b] = a
	}

	function z(a) {
		return "string" == typeof a ? Ic[a] || Ic[a.toLowerCase()] : void 0
	}

	function A(a) {
		var b, c, d = {};
		for (c in a) f(a, c) && (b = z(c), b && (d[b] = a[c]));
		return d
	}

	function B(b, c) {
		return function (d) {
			return null != d ? (D(this, b, d), a.updateOffset(this, c), this) : C(this, b)
		}
	}

	function C(a, b) {
		return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
	}

	function D(a, b, c) {
		return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function E(a, b) {
		var c;
		if ("object" == typeof a)
			for (c in a) this.set(c, a[c]);
		else if (a = z(a), "function" == typeof this[a]) return this[a](b);
		return this
	}

	function F(a, b, c) {
		for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
		return (e ? c ? "+" : "" : "-") + d
	}

	function G(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function () {
			return this[d]()
		}), a && (Mc[a] = e), b && (Mc[b[0]] = function () {
			return F(e.apply(this, arguments), b[1], b[2])
		}), c && (Mc[c] = function () {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function H(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function I(a) {
		var b, c, d = a.match(Jc);
		for (b = 0, c = d.length; c > b; b++) Mc[d[b]] ? d[b] = Mc[d[b]] : d[b] = H(d[b]);
		return function (e) {
			var f = "";
			for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}

	function J(a, b) {
		return a.isValid() ? (b = K(b, a.localeData()), Lc[b] || (Lc[b] = I(b)), Lc[b](a)) : a.localeData().invalidDate()
	}

	function K(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (Kc.lastIndex = 0; d >= 0 && Kc.test(a);) a = a.replace(Kc, c), Kc.lastIndex = 0, d -= 1;
		return a
	}

	function L(a, b, c) {
		_c[a] = "function" == typeof b ? b : function (a) {
			return a && c ? c : b
		}
	}

	function M(a, b) {
		return f(_c, a) ? _c[a](b._strict, b._locale) : new RegExp(N(a))
	}

	function N(a) {
		return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		}).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function O(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
				c[b] = p(a)
			}), c = 0; c < a.length; c++) ad[a[c]] = d
	}

	function P(a, b) {
		O(a, function (a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function Q(a, b, c) {
		null != b && f(ad, a) && ad[a](b, c._a, c, a)
	}

	function R(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function S(a) {
		return this._months[a.month()]
	}

	function T(a) {
		return this._monthsShort[a.month()]
	}

	function U(a, b, c) {
		var d, e, f;
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
			if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if (!c && this._monthsParse[d].test(a)) return d
		}
	}

	function V(a, b) {
		var c;
		return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), R(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
	}

	function W(b) {
		return null != b ? (V(this, b), a.updateOffset(this, !0), this) : C(this, "Month")
	}

	function X() {
		return R(this.year(), this.month())
	}

	function Y(a) {
		var b, c = a._a;
		return c && -2 === j(a).overflow && (b = c[cd] < 0 || c[cd] > 11 ? cd : c[dd] < 1 || c[dd] > R(c[bd], c[cd]) ? dd : c[ed] < 0 || c[ed] > 24 || 24 === c[ed] && (0 !== c[fd] || 0 !== c[gd] || 0 !== c[hd]) ? ed : c[fd] < 0 || c[fd] > 59 ? fd : c[gd] < 0 || c[gd] > 59 ? gd : c[hd] < 0 || c[hd] > 999 ? hd : -1, j(a)._overflowDayOfYear && (bd > b || b > dd) && (b = dd), j(a).overflow = b), a
	}

	function Z(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function $(a, b) {
		var c = !0,
			d = a + "\n" + (new Error).stack;
		return g(function () {
			return c && (Z(d), c = !1), b.apply(this, arguments)
		}, b)
	}

	function _(a, b) {
		kd[a] || (Z(b), kd[a] = !0)
	}

	function aa(a) {
		var b, c, d = a._i,
			e = ld.exec(d);
		if (e) {
			for (j(a).iso = !0, b = 0, c = md.length; c > b; b++)
				if (md[b][1].exec(d)) {
					a._f = md[b][0] + (e[6] || " ");
					break
				} for (b = 0, c = nd.length; c > b; b++)
				if (nd[b][1].exec(d)) {
					a._f += nd[b][0];
					break
				} d.match(Yc) && (a._f += "Z"), ta(a)
		} else a._isValid = !1
	}

	function ba(b) {
		var c = od.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (aa(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}

	function ca(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 1970 > a && h.setFullYear(a), h
	}

	function da(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 1970 > a && b.setUTCFullYear(a), b
	}

	function ea(a) {
		return fa(a) ? 366 : 365
	}

	function fa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function ga() {
		return fa(this.year())
	}

	function ha(a, b, c) {
		var d, e = c - b,
			f = c - a.day();
		return f > e && (f -= 7), e - 7 > f && (f += 7), d = Aa(a).add(f, "d"), {
			week: Math.ceil(d.dayOfYear() / 7),
			year: d.year()
		}
	}

	function ia(a) {
		return ha(a, this._week.dow, this._week.doy).week
	}

	function ja() {
		return this._week.dow
	}

	function ka() {
		return this._week.doy
	}

	function la(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function ma(a) {
		var b = ha(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function na(a, b, c, d, e) {
		var f, g, h = da(a, 0, 1).getUTCDay();
		return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
			year: g > 0 ? a : a - 1,
			dayOfYear: g > 0 ? g : ea(a - 1) + g
		}
	}

	function oa(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function pa(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function qa(a) {
		var b = new Date;
		return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
	}

	function ra(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			for (d = qa(a), a._w && null == a._a[dd] && null == a._a[cd] && sa(a), a._dayOfYear && (e = pa(a._a[bd], d[bd]), a._dayOfYear > ea(e) && (j(a)._overflowDayOfYear = !0), c = da(e, 0, a._dayOfYear), a._a[cd] = c.getUTCMonth(), a._a[dd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			24 === a._a[ed] && 0 === a._a[fd] && 0 === a._a[gd] && 0 === a._a[hd] && (a._nextDay = !0, a._a[ed] = 0), a._d = (a._useUTC ? da : ca).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ed] = 24)
		}
	}

	function sa(a) {
		var b, c, d, e, f, g, h;
		b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = pa(b.GG, a._a[bd], ha(Aa(), 1, 4).year), d = pa(b.W, 1), e = pa(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = pa(b.gg, a._a[bd], ha(Aa(), f, g).year), d = pa(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = na(c, d, e, g, f), a._a[bd] = h.year, a._dayOfYear = h.dayOfYear
	}

	function ta(b) {
		if (b._f === a.ISO_8601) return void aa(b);
		b._a = [], j(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			k = 0;
		for (e = K(b._f, b._locale).match(Jc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(M(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Mc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), Q(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
		j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ed] <= 12 && b._a[ed] > 0 && (j(b).bigHour = void 0), b._a[ed] = ua(b._locale, b._a[ed], b._meridiem), ra(b), Y(b)
	}

	function ua(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function va(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(0 / 0));
		for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], ta(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
		g(a, c || b)
	}

	function wa(a) {
		if (!a._d) {
			var b = A(a._i);
			a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ra(a)
		}
	}

	function xa(a) {
		var b, e = a._i,
			f = a._f;
		return a._locale = a._locale || x(a._l), null === e || void 0 === f && "" === e ? l({
			nullInput: !0
		}) : ("string" == typeof e && (a._i = e = a._locale.preparse(e)), o(e) ? new n(Y(e)) : (c(f) ? va(a) : f ? ta(a) : d(e) ? a._d = e : ya(a), b = new n(Y(a)), b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b))
	}

	function ya(b) {
		var f = b._i;
		void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ba(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
			return parseInt(a, 10)
		}), ra(b)) : "object" == typeof f ? wa(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
	}

	function za(a, b, c, d, e) {
		var f = {};
		return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, xa(f)
	}

	function Aa(a, b, c, d) {
		return za(a, b, c, d, !1)
	}

	function Ba(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
		for (d = b[0], e = 1; e < b.length; ++e) b[e][a](d) && (d = b[e]);
		return d
	}

	function Ca() {
		var a = [].slice.call(arguments, 0);
		return Ba("isBefore", a)
	}

	function Da() {
		var a = [].slice.call(arguments, 0);
		return Ba("isAfter", a)
	}

	function Ea(a) {
		var b = A(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = x(), this._bubble()
	}

	function Fa(a) {
		return a instanceof Ea
	}

	function Ga(a, b) {
		G(a, 0, 0, function () {
			var a = this.utcOffset(),
				c = "+";
			return 0 > a && (a = -a, c = "-"), c + F(~~(a / 60), 2) + b + F(~~a % 60, 2)
		})
	}

	function Ha(a) {
		var b = (a || "").match(Yc) || [],
			c = b[b.length - 1] || [],
			d = (c + "").match(td) || ["-", 0, 0],
			e = +(60 * d[1]) + p(d[2]);
		return "+" === d[0] ? e : -e
	}

	function Ia(b, c) {
		var e, f;
		return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Aa(b).local();
		return c._isUTC ? Aa(b).zone(c._offset || 0) : Aa(b).local()
	}

	function Ja(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Ka(b, c) {
		var d, e = this._offset || 0;
		return null != b ? ("string" == typeof b && (b = Ha(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this)
	}

	function La(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Ma(a) {
		return this.utcOffset(0, a)
	}

	function Na(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), this
	}

	function Oa() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(this._i)), this
	}

	function Pa(a) {
		return a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
	}

	function Qa() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ra() {
		if (this._a) {
			var a = this._isUTC ? h(this._a) : Aa(this._a);
			return this.isValid() && q(this._a, a.toArray()) > 0
		}
		return !1
	}

	function Sa() {
		return !this._isUTC
	}

	function Ta() {
		return this._isUTC
	}

	function Ua() {
		return this._isUTC && 0 === this._offset
	}

	function Va(a, b) {
		var c, d, e, g = a,
			h = null;
		return Fa(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = ud.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: p(h[dd]) * c,
			h: p(h[ed]) * c,
			m: p(h[fd]) * c,
			s: p(h[gd]) * c,
			ms: p(h[hd]) * c
		}) : (h = vd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: Wa(h[2], c),
			M: Wa(h[3], c),
			d: Wa(h[4], c),
			h: Wa(h[5], c),
			m: Wa(h[6], c),
			s: Wa(h[7], c),
			w: Wa(h[8], c)
		}) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), d
	}

	function Wa(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}

	function Xa(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Ya(a, b) {
		var c;
		return b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
	}

	function Za(a, b) {
		return function (c, d) {
			var e, f;
			return null === d || isNaN(+d) || (_(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), this
		}
	}

	function $a(b, c, d, e) {
		var f = c._milliseconds,
			g = c._days,
			h = c._months;
		e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && D(b, "Date", C(b, "Date") + g * d), h && V(b, C(b, "Month") + h * d), e && a.updateOffset(b, g || h)
	}

	function _a(a) {
		var b = a || Aa(),
			c = Ia(b, this).startOf("day"),
			d = this.diff(c, "days", !0),
			e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
		return this.format(this.localeData().calendar(e, this, Aa(b)))
	}

	function ab() {
		return new n(this)
	}

	function bb(a, b) {
		var c;
		return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this > +a) : (c = o(a) ? +a : +Aa(a), c < +this.clone().startOf(b))
	}

	function cb(a, b) {
		var c;
		return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +a > +this) : (c = o(a) ? +a : +Aa(a), +this.clone().endOf(b) < c)
	}

	function db(a, b, c) {
		return this.isAfter(a, c) && this.isBefore(b, c)
	}

	function eb(a, b) {
		var c;
		return b = z(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this === +a) : (c = +Aa(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
	}

	function fb(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}

	function gb(a, b, c) {
		var d, e, f = Ia(a, this),
			g = 6e4 * (f.utcOffset() - this.utcOffset());
		return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = hb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : fb(e)
	}

	function hb(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
	}

	function ib() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function jb() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : J(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function kb(b) {
		var c = J(this, b || a.defaultFormat);
		return this.localeData().postformat(c)
	}

	function lb(a, b) {
		return this.isValid() ? Va({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function mb(a) {
		return this.from(Aa(), a)
	}

	function nb(a, b) {
		return this.isValid() ? Va({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ob(a) {
		return this.to(Aa(), a)
	}

	function pb(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = x(a), null != b && (this._locale = b), this)
	}

	function qb() {
		return this._locale
	}

	function rb(a) {
		switch (a = z(a)) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function sb(a) {
		return a = z(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
	}

	function tb() {
		return +this._d - 6e4 * (this._offset || 0)
	}

	function ub() {
		return Math.floor(+this / 1e3)
	}

	function vb() {
		return this._offset ? new Date(+this) : this._d
	}

	function wb() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function xb() {
		return k(this)
	}

	function yb() {
		return g({}, j(this))
	}

	function zb() {
		return j(this).overflow
	}

	function Ab(a, b) {
		G(0, [a, a.length], 0, b)
	}

	function Bb(a, b, c) {
		return ha(Aa([a, 11, 31 + b - c]), b, c).week
	}

	function Cb(a) {
		var b = ha(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
		return null == a ? b : this.add(a - b, "y")
	}

	function Db(a) {
		var b = ha(this, 1, 4).year;
		return null == a ? b : this.add(a - b, "y")
	}

	function Eb() {
		return Bb(this.year(), 1, 4)
	}

	function Fb() {
		var a = this.localeData()._week;
		return Bb(this.year(), a.dow, a.doy)
	}

	function Gb(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Hb(a, b) {
		if ("string" == typeof a)
			if (isNaN(a)) {
				if (a = b.weekdaysParse(a), "number" != typeof a) return null
			} else a = parseInt(a, 10);
		return a
	}

	function Ib(a) {
		return this._weekdays[a.day()]
	}

	function Jb(a) {
		return this._weekdaysShort[a.day()]
	}

	function Kb(a) {
		return this._weekdaysMin[a.day()]
	}

	function Lb(a) {
		var b, c, d;
		for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
			if (this._weekdaysParse[b] || (c = Aa([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
	}

	function Mb(a) {
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Hb(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function Nb(a) {
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ob(a) {
		return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
	}

	function Pb(a, b) {
		G(a, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Qb(a, b) {
		return b._meridiemParse
	}

	function Rb(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Sb(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Tb(a) {
		G(0, [a, 3], 0, "millisecond")
	}

	function Ub() {
		return this._isUTC ? "UTC" : ""
	}

	function Vb() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Wb(a) {
		return Aa(1e3 * a)
	}

	function Xb() {
		return Aa.apply(null, arguments).parseZone()
	}

	function Yb(a, b, c) {
		var d = this._calendar[a];
		return "function" == typeof d ? d.call(b, c) : d
	}

	function Zb(a) {
		var b = this._longDateFormat[a];
		return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
			return a.slice(1)
		}), this._longDateFormat[a] = b), b
	}

	function $b() {
		return this._invalidDate
	}

	function _b(a) {
		return this._ordinal.replace("%d", a)
	}

	function ac(a) {
		return a
	}

	function bc(a, b, c, d) {
		var e = this._relativeTime[c];
		return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function cc(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
	}

	function dc(a) {
		var b, c;
		for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
		this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function ec(a, b, c, d) {
		var e = x(),
			f = h().set(d, b);
		return e[c](f, a)
	}

	function fc(a, b, c, d, e) {
		if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return ec(a, b, c, e);
		var f, g = [];
		for (f = 0; d > f; f++) g[f] = ec(a, f, c, e);
		return g
	}

	function gc(a, b) {
		return fc(a, b, "months", 12, "month")
	}

	function hc(a, b) {
		return fc(a, b, "monthsShort", 12, "month")
	}

	function ic(a, b) {
		return fc(a, b, "weekdays", 7, "day")
	}

	function jc(a, b) {
		return fc(a, b, "weekdaysShort", 7, "day")
	}

	function kc(a, b) {
		return fc(a, b, "weekdaysMin", 7, "day")
	}

	function lc() {
		var a = this._data;
		return this._milliseconds = Rd(this._milliseconds), this._days = Rd(this._days), this._months = Rd(this._months), a.milliseconds = Rd(a.milliseconds), a.seconds = Rd(a.seconds), a.minutes = Rd(a.minutes), a.hours = Rd(a.hours), a.months = Rd(a.months), a.years = Rd(a.years), this
	}

	function mc(a, b, c, d) {
		var e = Va(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function nc(a, b) {
		return mc(this, a, b, 1)
	}

	function oc(a, b) {
		return mc(this, a, b, -1)
	}

	function pc() {
		var a, b, c, d = this._milliseconds,
			e = this._days,
			f = this._months,
			g = this._data,
			h = 0;
		return g.milliseconds = d % 1e3, a = fb(d / 1e3), g.seconds = a % 60, b = fb(a / 60), g.minutes = b % 60, c = fb(b / 60), g.hours = c % 24, e += fb(c / 24), h = fb(qc(e)), e -= fb(rc(h)), f += fb(e / 30), e %= 30, h += fb(f / 12), f %= 12, g.days = e, g.months = f, g.years = h, this
	}

	function qc(a) {
		return 400 * a / 146097
	}

	function rc(a) {
		return 146097 * a / 400
	}

	function sc(a) {
		var b, c, d = this._milliseconds;
		if (a = z(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + 12 * qc(b), "month" === a ? c : c / 12;
		switch (b = this._days + Math.round(rc(this._months / 12)), a) {
			case "week":
				return b / 7 + d / 6048e5;
			case "day":
				return b + d / 864e5;
			case "hour":
				return 24 * b + d / 36e5;
			case "minute":
				return 1440 * b + d / 6e4;
			case "second":
				return 86400 * b + d / 1e3;
			case "millisecond":
				return Math.floor(864e5 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}

	function tc() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12)
	}

	function uc(a) {
		return function () {
			return this.as(a)
		}
	}

	function vc(a) {
		return a = z(a), this[a + "s"]()
	}

	function wc(a) {
		return function () {
			return this._data[a]
		}
	}

	function xc() {
		return fb(this.days() / 7)
	}

	function yc(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function zc(a, b, c) {
		var d = Va(a).abs(),
			e = fe(d.as("s")),
			f = fe(d.as("m")),
			g = fe(d.as("h")),
			h = fe(d.as("d")),
			i = fe(d.as("M")),
			j = fe(d.as("y")),
			k = e < ge.s && ["s", e] || 1 === f && ["m"] || f < ge.m && ["mm", f] || 1 === g && ["h"] || g < ge.h && ["hh", g] || 1 === h && ["d"] || h < ge.d && ["dd", h] || 1 === i && ["M"] || i < ge.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, yc.apply(null, k)
	}

	function Ac(a, b) {
		return void 0 === ge[a] ? !1 : void 0 === b ? ge[a] : (ge[a] = b, !0)
	}

	function Bc(a) {
		var b = this.localeData(),
			c = zc(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function Cc() {
		var a = he(this.years()),
			b = he(this.months()),
			c = he(this.days()),
			d = he(this.hours()),
			e = he(this.minutes()),
			f = he(this.seconds() + this.milliseconds() / 1e3),
			g = this.asSeconds();
		return g ? (0 > g ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
	}
	var Dc, Ec, Fc = a.momentProperties = [],
		Gc = !1,
		Hc = {},
		Ic = {},
		Jc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
		Kc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Lc = {},
		Mc = {},
		Nc = /\d/,
		Oc = /\d\d/,
		Pc = /\d{3}/,
		Qc = /\d{4}/,
		Rc = /[+-]?\d{6}/,
		Sc = /\d\d?/,
		Tc = /\d{1,3}/,
		Uc = /\d{1,4}/,
		Vc = /[+-]?\d{1,6}/,
		Wc = /\d+/,
		Xc = /[+-]?\d+/,
		Yc = /Z|[+-]\d\d:?\d\d/gi,
		Zc = /[+-]?\d+(\.\d{1,3})?/,
		$c = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		_c = {},
		ad = {},
		bd = 0,
		cd = 1,
		dd = 2,
		ed = 3,
		fd = 4,
		gd = 5,
		hd = 6;
	G("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}), G("MMM", 0, 0, function (a) {
		return this.localeData().monthsShort(this, a)
	}), G("MMMM", 0, 0, function (a) {
		return this.localeData().months(this, a)
	}), y("month", "M"), L("M", Sc), L("MM", Sc, Oc), L("MMM", $c), L("MMMM", $c), O(["M", "MM"], function (a, b) {
		b[cd] = p(a) - 1
	}), O(["MMM", "MMMM"], function (a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[cd] = e : j(c).invalidMonth = a
	});
	var id = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		jd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		kd = {};
	a.suppressDeprecationWarnings = !1;
	var ld = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		md = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
			["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
			["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
			["GGGG-[W]WW", /\d{4}-W\d{2}/],
			["YYYY-DDD", /\d{4}-\d{3}/]
		],
		nd = [
			["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		],
		od = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = $("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), G(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), y("year", "y"), L("Y", Xc), L("YY", Sc, Oc), L("YYYY", Uc, Qc), L("YYYYY", Vc, Rc), L("YYYYYY", Vc, Rc), O(["YYYY", "YYYYY", "YYYYYY"], bd), O("YY", function (b, c) {
		c[bd] = a.parseTwoDigitYear(b)
	}), a.parseTwoDigitYear = function (a) {
		return p(a) + (p(a) > 68 ? 1900 : 2e3)
	};
	var pd = B("FullYear", !1);
	G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), y("week", "w"), y("isoWeek", "W"), L("w", Sc), L("ww", Sc, Oc), L("W", Sc), L("WW", Sc, Oc), P(["w", "ww", "W", "WW"], function (a, b, c, d) {
		b[d.substr(0, 1)] = p(a)
	});
	var qd = {
		dow: 0,
		doy: 6
	};
	G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), L("DDD", Tc), L("DDDD", Pc), O(["DDD", "DDDD"], function (a, b, c) {
		c._dayOfYear = p(a)
	}), a.ISO_8601 = function () {};
	var rd = $("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
			var a = Aa.apply(null, arguments);
			return this > a ? this : a
		}),
		sd = $("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
			var a = Aa.apply(null, arguments);
			return a > this ? this : a
		});
	Ga("Z", ":"), Ga("ZZ", ""), L("Z", Yc), L("ZZ", Yc), O(["Z", "ZZ"], function (a, b, c) {
		c._useUTC = !0, c._tzm = Ha(a)
	});
	var td = /([\+\-]|\d\d)/gi;
	a.updateOffset = function () {};
	var ud = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
		vd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
	Va.fn = Ea.prototype;
	var wd = Za(1, "add"),
		xd = Za(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
	var yd = $("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	G(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}), G(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100
	}), Ab("gggg", "weekYear"), Ab("ggggg", "weekYear"), Ab("GGGG", "isoWeekYear"), Ab("GGGGG", "isoWeekYear"), y("weekYear", "gg"), y("isoWeekYear", "GG"), L("G", Xc), L("g", Xc), L("GG", Sc, Oc), L("gg", Sc, Oc), L("GGGG", Uc, Qc), L("gggg", Uc, Qc), L("GGGGG", Vc, Rc), L("ggggg", Vc, Rc), P(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
		b[d.substr(0, 2)] = p(a)
	}), P(["gg", "GG"], function (b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), G("Q", 0, 0, "quarter"), y("quarter", "Q"), L("Q", Nc), O("Q", function (a, b) {
		b[cd] = 3 * (p(a) - 1)
	}), G("D", ["DD", 2], "Do", "date"), y("date", "D"), L("D", Sc), L("DD", Sc, Oc), L("Do", function (a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), O(["D", "DD"], dd), O("Do", function (a, b) {
		b[dd] = p(a.match(Sc)[0], 10)
	});
	var zd = B("Date", !0);
	G("d", 0, "do", "day"), G("dd", 0, 0, function (a) {
		return this.localeData().weekdaysMin(this, a)
	}), G("ddd", 0, 0, function (a) {
		return this.localeData().weekdaysShort(this, a)
	}), G("dddd", 0, 0, function (a) {
		return this.localeData().weekdays(this, a)
	}), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), y("day", "d"), y("weekday", "e"), y("isoWeekday", "E"), L("d", Sc), L("e", Sc), L("E", Sc), L("dd", $c), L("ddd", $c), L("dddd", $c), P(["dd", "ddd", "dddd"], function (a, b, c) {
		var d = c._locale.weekdaysParse(a);
		null != d ? b.d = d : j(c).invalidWeekday = a
	}), P(["d", "e", "E"], function (a, b, c, d) {
		b[d] = p(a)
	});
	var Ad = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		Bd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		Cd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
	G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, function () {
		return this.hours() % 12 || 12
	}), Pb("a", !0), Pb("A", !1), y("hour", "h"), L("a", Qb), L("A", Qb), L("H", Sc), L("h", Sc), L("HH", Sc, Oc), L("hh", Sc, Oc), O(["H", "HH"], ed), O(["a", "A"], function (a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), O(["h", "hh"], function (a, b, c) {
		b[ed] = p(a), j(c).bigHour = !0
	});
	var Dd = /[ap]\.?m?\.?/i,
		Ed = B("Hours", !0);
	G("m", ["mm", 2], 0, "minute"), y("minute", "m"), L("m", Sc), L("mm", Sc, Oc), O(["m", "mm"], fd);
	var Fd = B("Minutes", !1);
	G("s", ["ss", 2], 0, "second"), y("second", "s"), L("s", Sc), L("ss", Sc, Oc), O(["s", "ss"], gd);
	var Gd = B("Seconds", !1);
	G("S", 0, 0, function () {
		return ~~(this.millisecond() / 100)
	}), G(0, ["SS", 2], 0, function () {
		return ~~(this.millisecond() / 10)
	}), Tb("SSS"), Tb("SSSS"), y("millisecond", "ms"), L("S", Tc, Nc), L("SS", Tc, Oc), L("SSS", Tc, Pc), L("SSSS", Wc), O(["S", "SS", "SSS", "SSSS"], function (a, b) {
		b[hd] = p(1e3 * ("0." + a))
	});
	var Hd = B("Milliseconds", !1);
	G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
	var Id = n.prototype;
	Id.add = wd, Id.calendar = _a, Id.clone = ab, Id.diff = gb, Id.endOf = sb, Id.format = kb, Id.from = lb, Id.fromNow = mb, Id.to = nb, Id.toNow = ob, Id.get = E, Id.invalidAt = zb, Id.isAfter = bb, Id.isBefore = cb, Id.isBetween = db, Id.isSame = eb, Id.isValid = xb, Id.lang = yd, Id.locale = pb, Id.localeData = qb, Id.max = sd, Id.min = rd, Id.parsingFlags = yb, Id.set = E, Id.startOf = rb, Id.subtract = xd, Id.toArray = wb, Id.toDate = vb, Id.toISOString = jb, Id.toJSON = jb, Id.toString = ib, Id.unix = ub, Id.valueOf = tb, Id.year = pd, Id.isLeapYear = ga, Id.weekYear = Cb, Id.isoWeekYear = Db, Id.quarter = Id.quarters = Gb, Id.month = W, Id.daysInMonth = X, Id.week = Id.weeks = la, Id.isoWeek = Id.isoWeeks = ma, Id.weeksInYear = Fb, Id.isoWeeksInYear = Eb, Id.date = zd, Id.day = Id.days = Mb, Id.weekday = Nb, Id.isoWeekday = Ob, Id.dayOfYear = oa, Id.hour = Id.hours = Ed, Id.minute = Id.minutes = Fd, Id.second = Id.seconds = Gd, Id.millisecond = Id.milliseconds = Hd, Id.utcOffset = Ka, Id.utc = Ma, Id.local = Na, Id.parseZone = Oa, Id.hasAlignedHourOffset = Pa, Id.isDST = Qa, Id.isDSTShifted = Ra, Id.isLocal = Sa, Id.isUtcOffset = Ta, Id.isUtc = Ua, Id.isUTC = Ua, Id.zoneAbbr = Ub, Id.zoneName = Vb, Id.dates = $("dates accessor is deprecated. Use date instead.", zd), Id.months = $("months accessor is deprecated. Use month instead", W), Id.years = $("years accessor is deprecated. Use year instead", pd), Id.zone = $("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
	var Jd = Id,
		Kd = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		Ld = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY LT",
			LLLL: "dddd, MMMM D, YYYY LT"
		},
		Md = "Invalid date",
		Nd = "%d",
		Od = /\d{1,2}/,
		Pd = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Qd = r.prototype;
	Qd._calendar = Kd, Qd.calendar = Yb, Qd._longDateFormat = Ld, Qd.longDateFormat = Zb, Qd._invalidDate = Md, Qd.invalidDate = $b, Qd._ordinal = Nd, Qd.ordinal = _b, Qd._ordinalParse = Od, Qd.preparse = ac, Qd.postformat = ac, Qd._relativeTime = Pd, Qd.relativeTime = bc, Qd.pastFuture = cc, Qd.set = dc, Qd.months = S, Qd._months = id, Qd.monthsShort = T, Qd._monthsShort = jd, Qd.monthsParse = U, Qd.week = ia, Qd._week = qd, Qd.firstDayOfYear = ka, Qd.firstDayOfWeek = ja, Qd.weekdays = Ib, Qd._weekdays = Ad, Qd.weekdaysMin = Kb, Qd._weekdaysMin = Cd, Qd.weekdaysShort = Jb, Qd._weekdaysShort = Bd, Qd.weekdaysParse = Lb, Qd.isPM = Rb, Qd._meridiemParse = Dd, Qd.meridiem = Sb, v("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (a) {
			var b = a % 10,
				c = 1 === p(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = $("moment.lang is deprecated. Use moment.locale instead.", v), a.langData = $("moment.langData is deprecated. Use moment.localeData instead.", x);
	var Rd = Math.abs,
		Sd = uc("ms"),
		Td = uc("s"),
		Ud = uc("m"),
		Vd = uc("h"),
		Wd = uc("d"),
		Xd = uc("w"),
		Yd = uc("M"),
		Zd = uc("y"),
		$d = wc("milliseconds"),
		_d = wc("seconds"),
		ae = wc("minutes"),
		be = wc("hours"),
		ce = wc("days"),
		de = wc("months"),
		ee = wc("years"),
		fe = Math.round,
		ge = {
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		he = Math.abs,
		ie = Ea.prototype;
	ie.abs = lc, ie.add = nc, ie.subtract = oc, ie.as = sc, ie.asMilliseconds = Sd, ie.asSeconds = Td, ie.asMinutes = Ud, ie.asHours = Vd, ie.asDays = Wd, ie.asWeeks = Xd, ie.asMonths = Yd, ie.asYears = Zd, ie.valueOf = tc, ie._bubble = pc, ie.get = vc, ie.milliseconds = $d, ie.seconds = _d, ie.minutes = ae, ie.hours = be, ie.days = ce, ie.weeks = xc, ie.months = de, ie.years = ee, ie.humanize = Bc, ie.toISOString = Cc, ie.toString = Cc, ie.toJSON = Cc, ie.locale = pb, ie.localeData = qb, ie.toIsoString = $("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Cc), ie.lang = yd, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), L("x", Xc), L("X", Zc), O("X", function (a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), O("x", function (a, b, c) {
		c._d = new Date(p(a))
	}), a.version = "2.10.3", b(Aa), a.fn = Jd, a.min = Ca, a.max = Da, a.utc = h, a.unix = Wb, a.months = gc, a.isDate = d, a.locale = v, a.invalid = l, a.duration = Va, a.isMoment = o, a.weekdays = ic, a.parseZone = Xb, a.localeData = x, a.isDuration = Fa, a.monthsShort = hc, a.weekdaysMin = kc, a.defineLocale = w, a.weekdaysShort = jc, a.normalizeUnits = z, a.relativeTimeThreshold = Ac;
	var je = a;
	return je
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/vendor/js/footable.min.js?157001938982382";s:6:"source";s:50:"/bitrix/templates/aspro_next/vendor/js/footable.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
 * @version 3.1.5
 * @link http://fooplugins.com
 * @copyright Steven Usher & Brad Vincent 2015
 * @license Released under the GPLv3 license.
 */
! function (a, b) {
	window.console = window.console || {
		log: function () {},
		error: function () {}
	}, a.fn.footable = function (a, c) {
		return a = a || {}, this.filter("table").each(function (d, e) {
			b.init(e, a, c)
		})
	};
	var c = {
		events: []
	};
	b.__debug__ = JSON.parse(localStorage.getItem("footable_debug")) || !1, b.__debug_options__ = JSON.parse(localStorage.getItem("footable_debug_options")) || c, b.debug = function (d, e) {
		return b.is["boolean"](d) ? (b.__debug__ = d, void(b.__debug__ ? (localStorage.setItem("footable_debug", JSON.stringify(b.__debug__)), b.__debug_options__ = a.extend(!0, {}, c, e || {}), b.is.hash(e) && localStorage.setItem("footable_debug_options", JSON.stringify(b.__debug_options__))) : (localStorage.removeItem("footable_debug"), localStorage.removeItem("footable_debug_options")))) : b.__debug__
	}, b.get = function (b) {
		return a(b).first().data("__FooTable__")
	}, b.init = function (a, c, d) {
		var e = b.get(a);
		return e instanceof b.Table && e.destroy(), new b.Table(a, c, d)
	}, b.getRow = function (b) {
		var c = a(b).closest("tr");
		return c.hasClass("footable-detail-row") && (c = c.prev()), c.data("__FooTableRow__")
	}
}(jQuery, FooTable = window.FooTable || {}),
function (a) {
	var b = function () {
		return !0
	};
	a.arr = {}, a.arr.each = function (b, c) {
		if (a.is.array(b) && a.is.fn(c))
			for (var d = 0, e = b.length; e > d && c(b[d], d) !== !1; d++);
	}, a.arr.get = function (b, c) {
		var d = [];
		if (!a.is.array(b)) return d;
		if (!a.is.fn(c)) return b;
		for (var e = 0, f = b.length; f > e; e++) c(b[e], e) && d.push(b[e]);
		return d
	}, a.arr.any = function (c, d) {
		if (!a.is.array(c)) return !1;
		d = a.is.fn(d) ? d : b;
		for (var e = 0, f = c.length; f > e; e++)
			if (d(c[e], e)) return !0;
		return !1
	}, a.arr.contains = function (b, c) {
		if (!a.is.array(b) || a.is.undef(c)) return !1;
		for (var d = 0, e = b.length; e > d; d++)
			if (b[d] == c) return !0;
		return !1
	}, a.arr.first = function (c, d) {
		if (!a.is.array(c)) return null;
		d = a.is.fn(d) ? d : b;
		for (var e = 0, f = c.length; f > e; e++)
			if (d(c[e], e)) return c[e];
		return null
	}, a.arr.map = function (b, c) {
		var d = [],
			e = null;
		if (!a.is.array(b) || !a.is.fn(c)) return d;
		for (var f = 0, g = b.length; g > f; f++) null != (e = c(b[f], f)) && d.push(e);
		return d
	}, a.arr.remove = function (b, c) {
		var d = [],
			e = [];
		if (!a.is.array(b) || !a.is.fn(c)) return e;
		for (var f = 0, g = b.length; g > f; f++) c(b[f], f, e) && (d.push(f), e.push(b[f]));
		for (d.sort(function (a, b) {
				return b - a
			}), f = 0, g = d.length; g > f; f++) {
			var h = d[f] - f;
			b.splice(h, 1)
		}
		return e
	}, a.arr["delete"] = function (b, c) {
		var d = -1,
			e = null;
		if (!a.is.array(b) || a.is.undef(c)) return e;
		for (var f = 0, g = b.length; g > f; f++)
			if (b[f] == c) {
				d = f, e = b[f];
				break
			} return -1 != d && b.splice(d, 1), e
	}, a.arr.replace = function (a, b, c) {
		var d = a.indexOf(b); - 1 !== d && (a[d] = c)
	}
}(FooTable),
function (a) {
	a.is = {}, a.is.type = function (a, b) {
		return typeof a === b
	}, a.is.defined = function (a) {
		return "undefined" != typeof a
	}, a.is.undef = function (a) {
		return "undefined" == typeof a
	}, a.is.array = function (a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}, a.is.date = function (a) {
		return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime())
	}, a.is["boolean"] = function (a) {
		return "[object Boolean]" === Object.prototype.toString.call(a)
	}, a.is.string = function (a) {
		return "[object String]" === Object.prototype.toString.call(a)
	}, a.is.number = function (a) {
		return "[object Number]" === Object.prototype.toString.call(a) && !isNaN(a)
	}, a.is.fn = function (b) {
		return a.is.defined(window) && b === window.alert || "[object Function]" === Object.prototype.toString.call(b)
	}, a.is.error = function (a) {
		return "[object Error]" === Object.prototype.toString.call(a)
	}, a.is.object = function (a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}, a.is.hash = function (b) {
		return a.is.object(b) && b.constructor === Object && !b.nodeType && !b.setInterval
	}, a.is.element = function (a) {
		return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName
	}, a.is.promise = function (b) {
		return a.is.object(b) && a.is.fn(b.then) && a.is.fn(b.promise)
	}, a.is.jq = function (b) {
		return a.is.defined(window.jQuery) && b instanceof jQuery && b.length > 0
	}, a.is.moment = function (b) {
		return a.is.defined(window.moment) && a.is.object(b) && a.is["boolean"](b._isAMomentObject)
	}, a.is.emptyObject = function (b) {
		if (!a.is.hash(b)) return !1;
		for (var c in b)
			if (b.hasOwnProperty(c)) return !1;
		return !0
	}, a.is.emptyArray = function (b) {
		return a.is.array(b) ? 0 === b.length : !0
	}, a.is.emptyString = function (b) {
		return a.is.string(b) ? 0 === b.length : !0
	}
}(FooTable),
function (a) {
	a.str = {}, a.str.contains = function (b, c, d) {
		return a.is.emptyString(b) || a.is.emptyString(c) ? !1 : c.length <= b.length && -1 !== (d ? b.toUpperCase().indexOf(c.toUpperCase()) : b.indexOf(c))
	}, a.str.containsExact = function (b, c, d) {
		return a.is.emptyString(b) || a.is.emptyString(c) || c.length > b.length ? !1 : new RegExp("\\b" + a.str.escapeRegExp(c) + "\\b", d ? "i" : "").test(b)
	}, a.str.containsWord = function (b, c, d) {
		if (a.is.emptyString(b) || a.is.emptyString(c) || b.length < c.length) return !1;
		for (var e = b.split(/\W/), f = 0, g = e.length; g > f; f++)
			if (d ? e[f].toUpperCase() == c.toUpperCase() : e[f] == c) return !0;
		return !1
	}, a.str.from = function (b, c) {
		return a.is.emptyString(b) ? b : a.str.contains(b, c) ? b.substring(b.indexOf(c) + 1) : b
	}, a.str.startsWith = function (b, c) {
		return a.is.emptyString(b) ? b == c : b.slice(0, c.length) == c
	}, a.str.toCamelCase = function (b) {
		return a.is.emptyString(b) ? b : b.toUpperCase() === b ? b.toLowerCase() : b.replace(/^([A-Z])|[-\s_](\w)/g, function (b, c, d) {
			return a.is.string(d) ? d.toUpperCase() : c.toLowerCase()
		})
	}, a.str.random = function (b) {
		return b = a.is.emptyString(b) ? "" : b, b + Math.random().toString(36).substr(2, 9)
	}, a.str.escapeRegExp = function (b) {
		return a.is.emptyString(b) ? b : b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
	}
}(FooTable),
function (a) {
	"use strict";

	function b() {}
	Object.create || (Object.create = function () {
		var b = function () {};
		return function (c) {
			if (arguments.length > 1) throw Error("Second argument not supported");
			if (!a.is.object(c)) throw TypeError("Argument must be an object");
			b.prototype = c;
			var d = new b;
			return b.prototype = null, d
		}
	}());
	var c = /xyz/.test(function () {
		xyz
	}) ? /\b_super\b/ : /.*/;
	b.__extend__ = function (b, d, e, f) {
		b[d] = a.is.fn(f) && c.test(e) ? function (a, b) {
			return function () {
				var a, c;
				return a = this._super, this._super = f, c = b.apply(this, arguments), this._super = a, c
			}
		}(d, e) : e
	}, b.extend = function (d, e) {
		function f(b, d, e, f) {
			b[d] = a.is.fn(f) && c.test(e) ? function (a, b, c) {
				return function () {
					var a, d;
					return a = this._super, this._super = c, d = b.apply(this, arguments), this._super = a, d
				}
			}(d, e, f) : e
		}
		var g = Array.prototype.slice.call(arguments);
		if (d = g.shift(), e = g.shift(), a.is.hash(d)) {
			var h = Object.create(this.prototype),
				i = this.prototype;
			for (var j in d) "__ctor__" !== j && f(h, j, d[j], i[j]);
			var k = a.is.fn(h.__ctor__) ? h.__ctor__ : function () {
				if (!a.is.fn(this.construct)) throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
				this.construct.apply(this, arguments)
			};
			return h.construct = a.is.fn(h.construct) ? h.construct : function () {}, k.prototype = h, h.constructor = k, k.extend = b.extend, k
		}
		a.is.string(d) && a.is.fn(e) && f(this.prototype, d, e, this.prototype[d])
	}, a.Class = b, a.ClassFactory = a.Class.extend({
		construct: function () {
			this.registered = {}
		},
		contains: function (b) {
			return a.is.defined(this.registered[b])
		},
		names: function () {
			var a, b = [];
			for (a in this.registered) this.registered.hasOwnProperty(a) && b.push(a);
			return b
		},
		register: function (b, c, d) {
			if (a.is.string(b) && a.is.fn(c)) {
				var e = this.registered[b];
				this.registered[b] = {
					name: b,
					klass: c,
					priority: a.is.number(d) ? d : a.is.defined(e) ? e.priority : 0
				}
			}
		},
		load: function (b, c, d) {
			var e, f, g = this,
				h = Array.prototype.slice.call(arguments),
				i = [],
				j = [];
			b = h.shift() || {};
			for (e in g.registered)
				if (g.registered.hasOwnProperty(e)) {
					var k = g.registered[e];
					b.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && (k = {
						name: e,
						klass: f,
						priority: g.registered[e].priority
					})), i.push(k)
				} for (e in b) b.hasOwnProperty(e) && !g.registered.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && i.push({
				name: e,
				klass: f,
				priority: 0
			}));
			return i.sort(function (a, b) {
				return b.priority - a.priority
			}), a.arr.each(i, function (b) {
				a.is.fn(b.klass) && j.push(g._make(b.klass, h))
			}), j
		},
		make: function (b, c, d) {
			var e, f = this,
				g = Array.prototype.slice.call(arguments);
			return b = g.shift(), e = f.registered[b], a.is.fn(e.klass) ? f._make(e.klass, g) : null
		},
		_make: function (a, b) {
			function c() {
				return a.apply(this, b)
			}
			return c.prototype = a.prototype, new c
		}
	})
}(FooTable),
function (a, b) {
	b.css2json = function (c) {
		if (b.is.emptyString(c)) return {};
		for (var d, e, f, g = {}, h = c.split(";"), i = 0, j = h.length; j > i; i++) b.is.emptyString(h[i]) || (d = h[i].split(":"), b.is.emptyString(d[0]) || b.is.emptyString(d[1]) || (e = b.str.toCamelCase(a.trim(d[0])), f = a.trim(d[1]), g[e] = f));
		return g
	}, b.getFnPointer = function (a) {
		if (b.is.emptyString(a)) return null;
		var c = window,
			d = a.split(".");
		return b.arr.each(d, function (a) {
			c[a] && (c = c[a])
		}), b.is.fn(c) ? c : null
	}, b.checkFnValue = function (a, c, d) {
		function e(a, c, d) {
			return b.is.fn(c) ? function () {
				return c.apply(a, arguments)
			} : d
		}
		return d = b.is.fn(d) ? d : null, b.is.fn(c) ? e(a, c, d) : b.is.type(c, "string") ? e(a, b.getFnPointer(c), d) : d
	}
}(jQuery, FooTable),
function (a, b) {
	b.Cell = b.Class.extend({
		construct: function (a, b, c, d) {
			this.ft = a, this.row = b, this.column = c, this.created = !1, this.define(d)
		},
		define: function (c) {
			this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$detail = null;
			var d = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);
			this.value = this.column.parser.call(this.column, b.is.jq(this.$el) ? this.$el : d ? c.value : c, this.ft.o), this.o = a.extend(!0, {
				classes: null,
				style: null
			}, d ? c.options : {}), this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}
		},
		$create: function () {
			this.created || ((this.$el = b.is.jq(this.$el) ? this.$el : a("<td/>")).data("value", this.value).contents().detach().end().append(this.format(this.value)), this._setClasses(this.$el), this._setStyle(this.$el), this.$detail = a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__", this).append(a("<th/>")).append(a("<td/>")), this.created = !0)
		},
		collapse: function () {
			this.created && (this.$detail.children("th").html(this.column.title), this.$el.clone().attr("id", this.$el.attr("id") ? this.$el.attr("id") + "-detail" : void 0).css("display", "table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()), b.is.jq(this.$detail.parent()) || this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))
		},
		restore: function () {
			if (this.created) {
				if (b.is.jq(this.$detail.parent())) {
					var a = this.$detail.children("td").first();
					this.$el.attr("class", a.attr("class")).attr("style", a.attr("style")).css("display", this.column.hidden || !this.column.visible ? "none" : "table-cell").append(a.contents().detach())
				}
				this.$detail.detach()
			}
		},
		parse: function () {
			return this.column.parser.call(this.column, this.$el, this.ft.o)
		},
		format: function (a) {
			return this.column.formatter.call(this.column, a, this.ft.o, this.row.value)
		},
		val: function (c, d, e) {
			if (b.is.undef(c)) return this.value;
			var f = this,
				g = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);
			if (this.o = a.extend(!0, {
					classes: f.classes,
					style: f.style
				}, g ? c.options : {}), this.value = g ? c.value : c, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, e = b.is["boolean"](e) ? e : !0, this.created && e) {
				this.$el.data("value", this.value).empty();
				var h = this.$detail.children("td").first().empty(),
					i = b.is.jq(this.$detail.parent()) ? h : this.$el;
				i.append(this.format(this.value)), this._setClasses(i), this._setStyle(i), (b.is["boolean"](d) ? d : !0) && this.row.draw()
			}
		},
		_setClasses: function (a) {
			var c = !b.is.emptyArray(this.column.classes),
				d = !b.is.emptyArray(this.classes),
				e = null;
			a.removeAttr("class"), (c || d) && (c && d ? e = this.classes.concat(this.column.classes).join(" ") : c ? e = this.column.classes.join(" ") : d && (e = this.classes.join(" ")), b.is.emptyString(e) || a.addClass(e))
		},
		_setStyle: function (c) {
			var d = !b.is.emptyObject(this.column.style),
				e = !b.is.emptyObject(this.style),
				f = null;
			c.removeAttr("style"), (d || e) && (d && e ? f = a.extend({}, this.column.style, this.style) : d ? f = this.column.style : e && (f = this.style), b.is.hash(f) && c.css(f))
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.Column = b.Class.extend({
		construct: function (a, c, d) {
			this.ft = a, this.type = b.is.emptyString(d) ? "text" : d, this.virtual = b.is["boolean"](c.virtual) ? c.virtual : !1, this.$el = b.is.jq(c.$el) ? c.$el : null, this.index = b.is.number(c.index) ? c.index : -1, this.internal = !1, this.define(c), this.$create()
		},
		define: function (a) {
			this.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, this.visible = b.is["boolean"](a.visible) ? a.visible : !0, this.name = b.is.string(a.name) ? a.name : null, null == this.name && (this.name = "col" + (a.index + 1)), this.title = b.is.string(a.title) ? a.title : null, !this.virtual && null == this.title && b.is.jq(this.$el) && (this.title = this.$el.html()), null == this.title && (this.title = "Column " + (a.index + 1)), this.style = b.is.hash(a.style) ? a.style : b.is.string(a.style) ? b.css2json(a.style) : {}, this.classes = b.is.array(a.classes) ? a.classes : b.is.string(a.classes) ? a.classes.match(/\S+/g) : [], this.parser = b.checkFnValue(this, a.parser, this.parser), this.formatter = b.checkFnValue(this, a.formatter, this.formatter)
		},
		$create: function () {
			(this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)
		},
		parser: function (c) {
			if (b.is.element(c) || b.is.jq(c)) {
				var d = a(c).data("value");
				return b.is.defined(d) ? d : a(c).html()
			}
			return b.is.defined(c) && null != c ? c + "" : null
		},
		formatter: function (a, b, c) {
			return null == a ? "" : a
		},
		createCell: function (a) {
			var c = b.is.jq(a.$el) ? a.$el.children("td,th").get(this.index) : null,
				d = b.is.hash(a.value) ? a.value[this.name] : null;
			return new b.Cell(this.ft, a, this, c || d)
		}
	}), b.columns = new b.ClassFactory, b.columns.register("text", b.Column)
}(jQuery, FooTable),
function (a, b) {
	b.Component = b.Class.extend({
		construct: function (a, c) {
			if (!(a instanceof b.Table)) throw new TypeError("The instance parameter must be an instance of FooTable.Table.");
			this.ft = a, this.enabled = b.is["boolean"](c) ? c : !1
		},
		preinit: function (a) {},
		init: function () {},
		destroy: function () {},
		predraw: function () {},
		draw: function () {},
		postdraw: function () {}
	}), b.components = new b.ClassFactory
}(jQuery, FooTable),
function (a, b) {
	b.Defaults = function () {
		this.stopPropagation = !1, this.on = null
	}, b.defaults = new b.Defaults
}(jQuery, FooTable),
function (a, b) {
	b.Row = b.Class.extend({
		construct: function (a, b, c) {
			this.ft = a, this.columns = b, this.created = !1, this.define(c)
		},
		define: function (c) {
			this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$toggle = a("<span/>", {
				"class": "footable-toggle fooicon fooicon-plus"
			});
			var d = b.is.hash(c),
				e = d && b.is.hash(c.options) && b.is.hash(c.value);
			this.value = d ? e ? c.value : c : null, this.o = a.extend(!0, {
				expanded: !1,
				classes: null,
				style: null
			}, e ? c.options : {}), this.expanded = b.is.jq(this.$el) ? this.$el.data("expanded") || this.o.expanded : this.o.expanded, this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, this.cells = this.createCells();
			var f = this;
			f.value = {}, b.arr.each(f.cells, function (a) {
				f.value[a.column.name] = a.val()
			})
		},
		$create: function () {
			if (!this.created) {
				(this.$el = b.is.jq(this.$el) ? this.$el : a("<tr/>")).data("__FooTableRow__", this), this._setClasses(this.$el), this._setStyle(this.$el), "last" == this.ft.rows.toggleColumn && this.$toggle.addClass("last-column"), this.$details = a("<tr/>", {
					"class": "footable-detail-row"
				}).append(a("<td/>", {
					colspan: this.ft.columns.visibleColspan
				}).append(a("<table/>", {
					"class": "footable-details " + this.ft.classes.join(" ")
				}).append("<tbody/>")));
				var c = this;
				b.arr.each(c.cells, function (a) {
					a.created || a.$create(), c.$el.append(a.$el)
				}), c.$el.off("click.ft.row").on("click.ft.row", {
					self: c
				}, c._onToggle), this.created = !0
			}
		},
		createCells: function () {
			var a = this;
			return b.arr.map(a.columns, function (b) {
				return b.createCell(a)
			})
		},
		val: function (c, d, e) {
			var f = this;
			if (!b.is.hash(c)) return b.is.hash(this.value) && !b.is.emptyObject(this.value) || (this.value = {}, b.arr.each(this.cells, function (a) {
				a.column.internal || (f.value[a.column.name] = a.val())
			})), this.value;
			this.collapse(!1);
			var g = b.is.hash(c),
				h = g && b.is.hash(c.options) && b.is.hash(c.value);
			if (this.o = a.extend(!0, {
					expanded: f.expanded,
					classes: f.classes,
					style: f.style
				}, h ? c.options : {}), this.expanded = this.o.expanded, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, g)
				if (h && (c = c.value), b.is.hash(this.value))
					for (var i in c) c.hasOwnProperty(i) && (this.value[i] = c[i]);
				else this.value = c;
			else this.value = null;
			e = b.is["boolean"](e) ? e : !0, b.arr.each(this.cells, function (a) {
				!a.column.internal && b.is.defined(f.value[a.column.name]) && a.val(f.value[a.column.name], !1, e)
			}), this.created && e && (this._setClasses(this.$el), this._setStyle(this.$el), (b.is["boolean"](d) ? d : !0) && this.draw())
		},
		_setClasses: function (a) {
			var c = !b.is.emptyArray(this.classes),
				d = null;
			a.removeAttr("class"), c && (d = this.classes.join(" "), b.is.emptyString(d) || a.addClass(d))
		},
		_setStyle: function (a) {
			var c = !b.is.emptyObject(this.style),
				d = null;
			a.removeAttr("style"), c && (d = this.style, b.is.hash(d) && a.css(d))
		},
		expand: function () {
			if (this.created) {
				var a = this;
				a.ft.raise("expand.ft.row", [a]).then(function () {
					a.__hidden__ = b.arr.map(a.cells, function (a) {
						return a.column.hidden && a.column.visible ? a : null
					}), a.__hidden__.length > 0 && (a.$details.insertAfter(a.$el).children("td").first().attr("colspan", a.ft.columns.visibleColspan), b.arr.each(a.__hidden__, function (a) {
						a.collapse()
					})), a.$el.attr("data-expanded", !0), a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"), a.expanded = !0, a.ft.raise("expanded.ft.row", [a])
				})
			}
		},
		collapse: function (a) {
			if (this.created) {
				var c = this;
				c.ft.raise("collapse.ft.row", [c]).then(function () {
					b.arr.each(c.__hidden__, function (a) {
						a.restore()
					}), c.$details.detach(), c.$el.removeAttr("data-expanded"), c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"), (b.is["boolean"](a) ? a : !0) && (c.expanded = !1), c.ft.raise("collapsed.ft.row", [c])
				})
			}
		},
		predraw: function (a) {
			this.created && (this.expanded && this.collapse(!1), this.$toggle.detach(), a = b.is["boolean"](a) ? a : !0, a && this.$el.detach())
		},
		draw: function (a) {
			this.created || this.$create(), b.is.jq(a) && a.append(this.$el);
			var c = this;
			b.arr.each(c.cells, function (a) {
				a.$el.css("display", a.column.hidden || !a.column.visible ? "none" : "table-cell"), c.ft.rows.showToggle && c.ft.columns.hasHidden && ("first" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.firstVisibleIndex || "last" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.lastVisibleIndex) && a.$el.prepend(c.$toggle), a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"), a.column.index == c.ft.columns.firstVisibleIndex && a.$el.add(a.column.$el).addClass("footable-first-visible"), a.column.index == c.ft.columns.lastVisibleIndex && a.$el.add(a.column.$el).addClass("footable-last-visible")
			}), this.expanded && this.expand()
		},
		toggle: function () {
			this.created && this.ft.columns.hasHidden && (this.expanded ? this.collapse() : this.expand())
		},
		_onToggle: function (b) {
			var c = b.data.self;
			a(b.target).is(c.ft.rows.toggleSelector) && c.toggle()
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.instances = [], b.Table = b.Class.extend({
		construct: function (c, d, e) {
			this._resizeTimeout = null, this.id = b.instances.push(this), this.initialized = !1, this.$el = (b.is.jq(c) ? c : a(c)).first(), this.$loader = a("<div/>", {
				"class": "footable-loader"
			}).append(a("<span/>", {
				"class": "fooicon fooicon-loader"
			})), this.o = a.extend(!0, {}, b.defaults, d), this.data = this.$el.data() || {}, this.classes = [], this.components = b.components.load(b.is.hash(this.data.components) ? this.data.components : this.o.components, this), this.breakpoints = this.use(FooTable.Breakpoints), this.columns = this.use(FooTable.Columns), this.rows = this.use(FooTable.Rows), this._construct(e)
		},
		_construct: function (a) {
			var c = this;
			return this._preinit().then(function () {
				return c._init().then(function () {
					return c.raise("ready.ft.table").then(function () {
						b.is.fn(a) && a.call(c, c)
					})
				})
			}).always(function (a) {
				c.$el.show(), b.is.error(a) && console.error("FooTable: unhandled error thrown during initialization.", a)
			})
		},
		_preinit: function () {
			var a = this;
			return this.raise("preinit.ft.table", [a.data]).then(function () {
				var c = (a.$el.attr("class") || "").match(/\S+/g) || [];
				a.o.ajax = b.checkFnValue(a, a.data.ajax, a.o.ajax), a.o.stopPropagation = b.is["boolean"](a.data.stopPropagation) ? a.data.stopPropagation : a.o.stopPropagation;
				for (var d = 0, e = c.length; e > d; d++) b.str.startsWith(c[d], "footable") || a.classes.push(c[d]);
				return a.$el.hide().after(a.$loader), a.execute(!1, !1, "preinit", a.data)
			})
		},
		_init: function () {
			var c = this;
			return c.raise("init.ft.table").then(function () {
				var d = c.$el.children("thead"),
					e = c.$el.children("tbody"),
					f = c.$el.children("tfoot");
				return c.$el.addClass("footable footable-" + c.id), b.is.hash(c.o.on) && c.$el.on(c.o.on), 0 == f.length && c.$el.append(f = a("<tfoot/>")), 0 == e.length && c.$el.append("<tbody/>"), 0 == d.length && c.$el.prepend(d = a("<thead/>")), c.execute(!1, !0, "init").then(function () {
					return c.$el.data("__FooTable__", c), 0 == f.children("tr").length && f.remove(), 0 == d.children("tr").length && d.remove(), c.raise("postinit.ft.table").then(function () {
						return c.draw()
					}).always(function () {
						a(window).off("resize.ft" + c.id, c._onWindowResize).on("resize.ft" + c.id, {
							self: c
						}, c._onWindowResize), c.initialized = !0
					})
				})
			})
		},
		destroy: function () {
			var c = this;
			return c.raise("destroy.ft.table").then(function () {
				return c.execute(!0, !0, "destroy").then(function () {
					c.$el.removeData("__FooTable__").removeClass("footable-" + c.id), b.is.hash(c.o.on) && c.$el.off(c.o.on), a(window).off("resize.ft" + c.id, c._onWindowResize), c.initialized = !1, b.instances[c.id] = null
				})
			}).fail(function (a) {
				b.is.error(a) && console.error("FooTable: unhandled error thrown while destroying the plugin.", a)
			})
		},
		raise: function (c, d) {
			var e = this,
				f = b.__debug__ && (b.is.emptyArray(b.__debug_options__.events) || b.arr.any(b.__debug_options__.events, function (a) {
					return b.str.contains(c, a)
				}));
			return d = d || [], d.unshift(this), a.Deferred(function (b) {
				var g = a.Event(c);
				1 == e.o.stopPropagation && e.$el.one(c, function (a) {
					a.stopPropagation()
				}), f && console.log("FooTable:" + c + ": ", d), e.$el.trigger(g, d), g.isDefaultPrevented() ? (f && console.log('FooTable: default prevented for the "' + c + '" event.'), b.reject(g)) : b.resolve(g)
			})
		},
		use: function (a) {
			for (var b = 0, c = this.components.length; c > b; b++)
				if (this.components[b] instanceof a) return this.components[b];
			return null
		},
		draw: function () {
			var a = this,
				c = a.$el.clone().insertBefore(a.$el);
			return a.$el.detach(), a.execute(!1, !0, "predraw").then(function () {
				return a.raise("predraw.ft.table").then(function () {
					return a.execute(!1, !0, "draw").then(function () {
						return a.raise("draw.ft.table").then(function () {
							return a.execute(!1, !0, "postdraw").then(function () {
								return a.raise("postdraw.ft.table")
							})
						})
					})
				})
			}).fail(function (a) {
				b.is.error(a) && console.error("FooTable: unhandled error thrown during a draw operation.", a)
			}).always(function () {
				c.replaceWith(a.$el), a.$loader.remove()
			})
		},
		execute: function (a, c, d, e, f) {
			var g = this,
				h = Array.prototype.slice.call(arguments);
			a = h.shift(), c = h.shift();
			var i = c ? b.arr.get(g.components, function (a) {
				return a.enabled
			}) : g.components.slice(0);
			return h.unshift(a ? i.reverse() : i), g._execute.apply(g, h)
		},
		_execute: function (c, d, e, f) {
			if (!c || !c.length) return a.when();
			var g, h = this,
				i = Array.prototype.slice.call(arguments);
			return c = i.shift(), d = i.shift(), g = c.shift(), b.is.fn(g[d]) ? a.Deferred(function (a) {
				try {
					var c = g[d].apply(g, i);
					if (b.is.promise(c)) return c.then(a.resolve, a.reject);
					a.resolve(c)
				} catch (e) {
					a.reject(e)
				}
			}).then(function () {
				return h._execute.apply(h, [c, d].concat(i))
			}) : h._execute.apply(h, [c, d].concat(i))
		},
		_onWindowResize: function (a) {
			var b = a.data.self;
			null != b._resizeTimeout && clearTimeout(b._resizeTimeout), b._resizeTimeout = setTimeout(function () {
				b._resizeTimeout = null, b.raise("resize.ft.table").then(function () {
					b.breakpoints.check()
				})
			}, 300)
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.ArrayColumn = b.Column.extend({
		construct: function (a, b) {
			this._super(a, b, "array")
		},
		parser: function (c) {
			if (b.is.element(c) || b.is.jq(c)) {
				var d = a(c),
					e = d.data("value");
				if (b.is.array(e)) return e;
				e = d.html();
				try {
					e = JSON.parse(e)
				} catch (f) {
					e = null
				}
				return b.is.array(e) ? e : null
			}
			return b.is.array(c) ? c : null
		},
		formatter: function (a, c, d) {
			return b.is.array(a) ? JSON.stringify(a) : ""
		}
	}), b.columns.register("array", b.ArrayColumn)
}(jQuery, FooTable),
function (a, b) {
	b.is.undef(window.moment) || (b.DateColumn = b.Column.extend({
		construct: function (a, c) {
			this._super(a, c, "date"), this.formatString = b.is.string(c.formatString) ? c.formatString : "MM-DD-YYYY"
		},
		parser: function (c) {
			if (b.is.element(c) || b.is.jq(c)) {
				var d = a(c).data("value");
				c = b.is.defined(d) ? d : a(c).text(), b.is.string(c) && (c = isNaN(c) ? c : +c)
			}
			if (b.is.date(c)) return moment(c);
			if (b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c;
			if (b.is.string(c)) {
				if (isNaN(c)) return moment(c, this.formatString);
				c = +c
			}
			return b.is.number(c) ? moment(c) : null
		},
		formatter: function (a, c, d) {
			return b.is.object(a) && b.is["boolean"](a._isAMomentObject) && a.isValid() ? a.format(this.formatString) : ""
		},
		filterValue: function (c) {
			if ((b.is.element(c) || b.is.jq(c)) && (c = a(c).data("filterValue") || a(c).text()), b.is.hash(c) && b.is.hash(c.options) && (b.is.string(c.options.filterValue) && (c = c.options.filterValue), b.is.defined(c.value) && (c = c.value)), b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c.format(this.formatString);
			if (b.is.string(c)) {
				if (isNaN(c)) return c;
				c = +c
			}
			return b.is.number(c) || b.is.date(c) ? moment(c).format(this.formatString) : b.is.defined(c) && null != c ? c + "" : ""
		}
	}), b.columns.register("date", b.DateColumn))
}(jQuery, FooTable),
function (a, b) {
	b.HTMLColumn = b.Column.extend({
		construct: function (a, b) {
			this._super(a, b, "html")
		},
		parser: function (c) {
			if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
				var d = c.prop("tagName").toLowerCase();
				if ("td" == d || "th" == d) {
					var e = c.data("value");
					return b.is.defined(e) ? e : c.contents()
				}
				return c
			}
			return null
		}
	}), b.columns.register("html", b.HTMLColumn)
}(jQuery, FooTable),
function (a, b) {
	b.NumberColumn = b.Column.extend({
		construct: function (a, c) {
			this._super(a, c, "number"), this.decimalSeparator = b.is.string(c.decimalSeparator) ? c.decimalSeparator : ".", this.thousandSeparator = b.is.string(c.thousandSeparator) ? c.thousandSeparator : ",", this.decimalSeparatorRegex = new RegExp(b.str.escapeRegExp(this.decimalSeparator), "g"), this.thousandSeparatorRegex = new RegExp(b.str.escapeRegExp(this.thousandSeparator), "g"), this.cleanRegex = new RegExp("[^-0-9" + b.str.escapeRegExp(this.decimalSeparator) + "]", "g")
		},
		parser: function (c) {
			if (b.is.element(c) || b.is.jq(c)) {
				var d = a(c).data("value");
				c = b.is.defined(d) ? d : a(c).text().replace(this.cleanRegex, "")
			}
			return b.is.string(c) && (c = c.replace(this.thousandSeparatorRegex, "").replace(this.decimalSeparatorRegex, "."), c = parseFloat(c)), b.is.number(c) ? c : null
		},
		formatter: function (a, b, c) {
			if (null == a) return "";
			var d = (a + "").split(".");
			return 2 == d.length && d[0].length > 3 && (d[0] = d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator)), d.join(this.decimalSeparator)
		}
	}), b.columns.register("number", b.NumberColumn)
}(jQuery, FooTable),
function (a, b) {
	b.ObjectColumn = b.Column.extend({
		construct: function (a, b) {
			this._super(a, b, "object")
		},
		parser: function (c) {
			if (b.is.element(c) || b.is.jq(c)) {
				var d = a(c),
					e = d.data("value");
				if (b.is.object(e)) return e;
				e = d.html();
				try {
					e = JSON.parse(e)
				} catch (f) {
					e = null
				}
				return b.is.object(e) ? e : null
			}
			return b.is.object(c) ? c : null
		},
		formatter: function (a, c, d) {
			return b.is.object(a) ? JSON.stringify(a) : ""
		}
	}), b.columns.register("object", b.ObjectColumn)
}(jQuery, FooTable),
function (a, b) {
	b.Breakpoint = b.Class.extend({
		construct: function (a, b) {
			this.name = a, this.width = b
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.Breakpoints = b.Component.extend({
		construct: function (a) {
			this._super(a, !0), this.o = a.o, this.current = null, this.array = [], this.cascade = this.o.cascade, this.useParentWidth = this.o.useParentWidth, this.hidden = null, this._classNames = "", this.getWidth = b.checkFnValue(this, this.o.getWidth, this.getWidth)
		},
		preinit: function (a) {
			var c = this;
			return this.ft.raise("preinit.ft.breakpoints", [a]).then(function () {
				c.cascade = b.is["boolean"](a.cascade) ? a.cascade : c.cascade, c.o.breakpoints = b.is.hash(a.breakpoints) ? a.breakpoints : c.o.breakpoints, c.getWidth = b.checkFnValue(c, a.getWidth, c.getWidth), null == c.o.breakpoints && (c.o.breakpoints = {
					xs: 480,
					sm: 768,
					md: 992,
					lg: 1200
				});
				for (var d in c.o.breakpoints) c.o.breakpoints.hasOwnProperty(d) && (c.array.push(new b.Breakpoint(d, c.o.breakpoints[d])), c._classNames += "breakpoint-" + d + " ");
				c.array.sort(function (a, b) {
					return b.width - a.width
				})
			})
		},
		init: function () {
			var a = this;
			return this.ft.raise("init.ft.breakpoints").then(function () {
				a.current = a.get()
			})
		},
		draw: function () {
			this.ft.$el.removeClass(this._classNames).addClass("breakpoint-" + this.current.name)
		},
		calculate: function () {
			for (var a, c = this, d = null, e = [], f = null, g = c.getWidth(), h = 0, i = c.array.length; i > h; h++) a = c.array[h], (!d && h == i - 1 || g >= a.width && (f instanceof b.Breakpoint ? g < f.width : !0)) && (d = a), d || e.push(a.name), f = a;
			return e.push(d.name), c.hidden = e.join(" "), d
		},
		visible: function (a) {
			if (b.is.emptyString(a)) return !0;
			if ("all" === a) return !1;
			for (var c = a.split(" "), d = 0, e = c.length; e > d; d++)
				if (this.cascade ? b.str.containsWord(this.hidden, c[d]) : c[d] == this.current.name) return !1;
			return !0
		},
		check: function () {
			var a = this,
				c = a.get();
			c instanceof b.Breakpoint && c != a.current && a.ft.raise("before.ft.breakpoints", [a.current, c]).then(function () {
				var b = a.current;
				return a.current = c, a.ft.draw().then(function () {
					a.ft.raise("after.ft.breakpoints", [a.current, b])
				})
			})
		},
		get: function (a) {
			return b.is.undef(a) ? this.calculate() : a instanceof b.Breakpoint ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
				return b.name == a
			}) : b.is.number(a) && a >= 0 && a < this.array.length ? this.array[a] : null
		},
		getWidth: function () {
			return b.is.fn(this.o.getWidth) ? this.o.getWidth(this.ft) : 1 == this.useParentWidth ? this.getParentWidth() : this.getViewportWidth()
		},
		getParentWidth: function () {
			return this.ft.$el.parent().width()
		},
		getViewportWidth: function () {
			return Math.max(document.documentElement.clientWidth, window.innerWidth, 0)
		}
	}), b.components.register("breakpoints", b.Breakpoints, 1e3)
}(jQuery, FooTable),
function (a) {
	a.Column.prototype.breakpoints = null, a.Column.prototype.__breakpoints_define__ = function (b) {
		this.breakpoints = a.is.emptyString(b.breakpoints) ? null : b.breakpoints
	}, a.Column.extend("define", function (a) {
		this._super(a), this.__breakpoints_define__(a)
	})
}(FooTable),
function (a) {
	a.Defaults.prototype.breakpoints = null, a.Defaults.prototype.cascade = !1, a.Defaults.prototype.useParentWidth = !1, a.Defaults.prototype.getWidth = null
}(FooTable),
function (a, b) {
	b.Columns = b.Component.extend({
		construct: function (a) {
			this._super(a, !0), this.o = a.o, this.array = [], this.$header = null, this.showHeader = a.o.showHeader, this._fromHTML = b.is.emptyArray(a.o.columns) && !b.is.promise(a.o.columns)
		},
		parse: function (c) {
			var d = this;
			return a.Deferred(function (c) {
				function e(c, d) {
					var e = [];
					if (0 == c.length || 0 == d.length) e = c.concat(d);
					else {
						var f = 0;
						b.arr.each(c.concat(d), function (a) {
							a.index > f && (f = a.index)
						}), f++;
						for (var g, h, i = 0; f > i; i++) g = {}, b.arr.each(c, function (a) {
							return a.index == i ? (g = a, !1) : void 0
						}), h = {}, b.arr.each(d, function (a) {
							return a.index == i ? (h = a, !1) : void 0
						}), e.push(a.extend(!0, {}, g, h))
					}
					return e
				}
				var f, g, h = [],
					i = [],
					j = d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();
				if (j.length > 0) {
					var k = j.parent().is("tbody") && j.children().length == j.children("td").length;
					k || (d.$header = j.addClass("footable-header")), j.children("td,th").each(function (b, c) {
						f = a(c), g = f.data(), g.index = b, g.$el = f, g.virtual = k, i.push(g)
					}), k && (d.showHeader = !1)
				}
				b.is.array(d.o.columns) && !b.is.emptyArray(d.o.columns) ? (b.arr.each(d.o.columns, function (a, b) {
					a.index = b, h.push(a)
				}), d.parseFinalize(c, e(h, i))) : b.is.promise(d.o.columns) ? d.o.columns.then(function (a) {
					b.arr.each(a, function (a, b) {
						a.index = b, h.push(a)
					}), d.parseFinalize(c, e(h, i))
				}, function (a) {
					c.reject(Error("Columns ajax request error: " + a.status + " (" + a.statusText + ")"))
				}) : d.parseFinalize(c, e(h, i))
			})
		},
		parseFinalize: function (a, c) {
			var d, e = this,
				f = [];
			b.arr.each(c, function (a) {
				(d = b.columns.contains(a.type) ? b.columns.make(a.type, e.ft, a) : new b.Column(e.ft, a)) && f.push(d)
			}), b.is.emptyArray(f) ? a.reject(Error("No columns supplied.")) : (f.sort(function (a, b) {
				return a.index - b.index
			}), a.resolve(f))
		},
		preinit: function (a) {
			var c = this;
			return c.ft.raise("preinit.ft.columns", [a]).then(function () {
				return c.parse(a).then(function (d) {
					c.array = d, c.showHeader = b.is["boolean"](a.showHeader) ? a.showHeader : c.showHeader
				})
			})
		},
		init: function () {
			var a = this;
			return this.ft.raise("init.ft.columns", [a.array]).then(function () {
				a.$create()
			})
		},
		destroy: function () {
			var a = this;
			this.ft.raise("destroy.ft.columns").then(function () {
				a._fromHTML || a.$header.remove()
			})
		},
		predraw: function () {
			var a = this,
				c = !0;
			a.visibleColspan = 0, a.firstVisibleIndex = 0, a.lastVisibleIndex = 0, a.hasHidden = !1, b.arr.each(a.array, function (b) {
				b.hidden = !a.ft.breakpoints.visible(b.breakpoints), !b.hidden && b.visible && (c && (a.firstVisibleIndex = b.index, c = !1), a.lastVisibleIndex = b.index, a.visibleColspan++), b.hidden && (a.hasHidden = !0)
			}), a.ft.$el.toggleClass("breakpoint", a.hasHidden)
		},
		draw: function () {
			b.arr.each(this.array, function (a) {
				a.$el.css("display", a.hidden || !a.visible ? "none" : "table-cell")
			}), !this.showHeader && b.is.jq(this.$header.parent()) && this.$header.detach()
		},
		$create: function () {
			var c = this;
			c.$header = b.is.jq(c.$header) ? c.$header : a("<tr/>", {
				"class": "footable-header"
			}), c.$header.children("th,td").detach(), b.arr.each(c.array, function (a) {
				c.$header.append(a.$el)
			}), c.showHeader && !b.is.jq(c.$header.parent()) && c.ft.$el.children("thead").append(c.$header)
		},
		get: function (a) {
			return a instanceof b.Column ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
				return b.name == a
			}) : b.is.number(a) ? b.arr.first(this.array, function (b) {
				return b.index == a
			}) : b.is.fn(a) ? b.arr.get(this.array, a) : null
		},
		ensure: function (a) {
			var c = this,
				d = [];
			return b.is.array(a) ? (b.arr.each(a, function (a) {
				d.push(c.get(a))
			}), d) : d
		}
	}), b.components.register("columns", b.Columns, 900)
}(jQuery, FooTable),
function (a) {
	a.Defaults.prototype.columns = [], a.Defaults.prototype.showHeader = !0
}(FooTable),
function (a, b) {
	b.Rows = b.Component.extend({
		construct: function (a) {
			this._super(a, !0), this.o = a.o, this.array = [], this.all = [], this.showToggle = a.o.showToggle, this.toggleSelector = a.o.toggleSelector, this.toggleColumn = a.o.toggleColumn, this.emptyString = a.o.empty, this.expandFirst = a.o.expandFirst, this.expandAll = a.o.expandAll, this.$empty = null, this._fromHTML = b.is.emptyArray(a.o.rows) && !b.is.promise(a.o.rows)
		},
		parse: function () {
			var c = this;
			return a.Deferred(function (a) {
				var d = c.ft.$el.children("tbody").children("tr");
				b.is.array(c.o.rows) && c.o.rows.length > 0 ? c.parseFinalize(a, c.o.rows) : b.is.promise(c.o.rows) ? c.o.rows.then(function (b) {
					c.parseFinalize(a, b)
				}, function (b) {
					a.reject(Error("Rows ajax request error: " + b.status + " (" + b.statusText + ")"))
				}) : b.is.jq(d) ? (c.parseFinalize(a, d), d.detach()) : c.parseFinalize(a, [])
			})
		},
		parseFinalize: function (c, d) {
			var e = this,
				f = a.map(d, function (a) {
					return new b.Row(e.ft, e.ft.columns.array, a)
				});
			c.resolve(f)
		},
		preinit: function (a) {
			var c = this;
			return c.ft.raise("preinit.ft.rows", [a]).then(function () {
				return c.parse().then(function (d) {
					c.all = d, c.array = c.all.slice(0), c.showToggle = b.is["boolean"](a.showToggle) ? a.showToggle : c.showToggle, c.toggleSelector = b.is.string(a.toggleSelector) ? a.toggleSelector : c.toggleSelector, c.toggleColumn = b.is.string(a.toggleColumn) ? a.toggleColumn : c.toggleColumn, "first" != c.toggleColumn && "last" != c.toggleColumn && (c.toggleColumn = "first"), c.emptyString = b.is.string(a.empty) ? a.empty : c.emptyString, c.expandFirst = b.is["boolean"](a.expandFirst) ? a.expandFirst : c.expandFirst, c.expandAll = b.is["boolean"](a.expandAll) ? a.expandAll : c.expandAll
				})
			})
		},
		init: function () {
			var a = this;
			return a.ft.raise("init.ft.rows", [a.all]).then(function () {
				a.$create()
			})
		},
		destroy: function () {
			var a = this;
			this.ft.raise("destroy.ft.rows").then(function () {
				b.arr.each(a.array, function (b) {
					b.predraw(!a._fromHTML)
				}), a.all = a.array = []
			})
		},
		predraw: function () {
			b.arr.each(this.array, function (a) {
				a.predraw()
			}), this.array = this.all.slice(0)
		},
		$create: function () {
			this.$empty = a("<tr/>", {
				"class": "footable-empty"
			}).append(a("<td/>").text(this.emptyString))
		},
		draw: function () {
			var a = this,
				c = a.ft.$el.children("tbody"),
				d = !0;
			a.array.length > 0 ? (a.$empty.detach(), b.arr.each(a.array, function (b) {
				(a.expandFirst && d || a.expandAll) && (b.expanded = !0, d = !1), b.draw(c)
			})) : (a.$empty.children("td").attr("colspan", a.ft.columns.visibleColspan), c.append(a.$empty))
		},
		load: function (c, d) {
			var e = this,
				f = a.map(c, function (a) {
					return new b.Row(e.ft, e.ft.columns.array, a)
				});
			b.arr.each(this.array, function (a) {
				a.predraw()
			}), this.all = (b.is["boolean"](d) ? d : !1) ? this.all.concat(f) : f, this.array = this.all.slice(0), this.ft.draw()
		},
		expand: function () {
			b.arr.each(this.array, function (a) {
				a.expand()
			})
		},
		collapse: function () {
			b.arr.each(this.array, function (a) {
				a.collapse()
			})
		}
	}), b.components.register("rows", b.Rows, 800)
}(jQuery, FooTable),
function (a) {
	a.Defaults.prototype.rows = [], a.Defaults.prototype.empty = "No results", a.Defaults.prototype.showToggle = !0, a.Defaults.prototype.toggleSelector = "tr,td,.footable-toggle", a.Defaults.prototype.toggleColumn = "first", a.Defaults.prototype.expandFirst = !1, a.Defaults.prototype.expandAll = !1
}(FooTable),
function (a) {
	a.Table.prototype.loadRows = function (a, b) {
		this.rows.load(a, b)
	}
}(FooTable),
function (a) {
	a.Filter = a.Class.extend({
		construct: function (b, c, d, e, f, g, h) {
			this.name = b, this.space = !a.is.string(e) || "OR" != e && "AND" != e ? "AND" : e, this.connectors = a.is["boolean"](f) ? f : !0, this.ignoreCase = a.is["boolean"](g) ? g : !0, this.hidden = a.is["boolean"](h) ? h : !1, this.query = c instanceof a.Query ? c : new a.Query(c, this.space, this.connectors, this.ignoreCase), this.columns = d
		},
		match: function (b) {
			return a.is.string(b) ? (a.is.string(this.query) && (this.query = new a.Query(this.query, this.space, this.connectors, this.ignoreCase)), this.query instanceof a.Query ? this.query.match(b) : !1) : !1
		},
		matchRow: function (b) {
			var c = this,
				d = a.arr.map(b.cells, function (b) {
					return a.arr.contains(c.columns, b.column) ? b.filterValue : null
				}).join(" ");
			return c.match(d)
		}
	})
}(FooTable),
function (a, b) {
	b.Filtering = b.Component.extend({
		construct: function (a) {
			this._super(a, a.o.filtering.enabled), this.filters = a.o.filtering.filters, this.delay = a.o.filtering.delay, this.min = a.o.filtering.min, this.space = a.o.filtering.space, this.connectors = a.o.filtering.connectors, this.ignoreCase = a.o.filtering.ignoreCase, this.exactMatch = a.o.filtering.exactMatch, this.placeholder = a.o.filtering.placeholder, this.dropdownTitle = a.o.filtering.dropdownTitle, this.position = a.o.filtering.position, this.focus = a.o.filtering.focus, this.container = a.o.filtering.container, this.$container = null, this.$row = null, this.$cell = null, this.$form = null, this.$dropdown = null, this.$input = null, this.$button = null, this._filterTimeout = null, this._exactRegExp = /^"(.*?)"$/
		},
		preinit: function (a) {
			var c = this;
			return c.ft.raise("preinit.ft.filtering").then(function () {
				c.ft.$el.hasClass("footable-filtering") && (c.enabled = !0), c.enabled = b.is["boolean"](a.filtering) ? a.filtering : c.enabled, c.enabled && (c.space = b.is.string(a.filterSpace) ? a.filterSpace : c.space, c.min = b.is.number(a.filterMin) ? a.filterMin : c.min, c.connectors = b.is["boolean"](a.filterConnectors) ? a.filterConnectors : c.connectors, c.ignoreCase = b.is["boolean"](a.filterIgnoreCase) ? a.filterIgnoreCase : c.ignoreCase, c.exactMatch = b.is["boolean"](a.filterExactMatch) ? a.filterExactMatch : c.exactMatch, c.focus = b.is["boolean"](a.filterFocus) ? a.filterFocus : c.focus, c.delay = b.is.number(a.filterDelay) ? a.filterDelay : c.delay, c.placeholder = b.is.string(a.filterPlaceholder) ? a.filterPlaceholder : c.placeholder, c.dropdownTitle = b.is.string(a.filterDropdownTitle) ? a.filterDropdownTitle : c.dropdownTitle, c.container = b.is.string(a.filterContainer) ? a.filterContainer : c.container, c.filters = b.is.array(a.filterFilters) ? c.ensure(a.filterFilters) : c.ensure(c.filters), c.ft.$el.hasClass("footable-filtering-left") && (c.position = "left"), c.ft.$el.hasClass("footable-filtering-center") && (c.position = "center"), c.ft.$el.hasClass("footable-filtering-right") && (c.position = "right"), c.position = b.is.string(a.filterPosition) ? a.filterPosition : c.position)
			}, function () {
				c.enabled = !1
			})
		},
		init: function () {
			var a = this;
			return a.ft.raise("init.ft.filtering").then(function () {
				a.$create()
			}, function () {
				a.enabled = !1
			})
		},
		destroy: function () {
			var a = this;
			return a.ft.raise("destroy.ft.filtering").then(function () {
				a.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()
			})
		},
		$create: function () {
			var c, d = this,
				e = a("<div/>", {
					"class": "form-group footable-filtering-search"
				}).append(a("<label/>", {
					"class": "sr-only",
					text: "Search"
				})),
				f = a("<div/>", {
					"class": "input-group"
				}).appendTo(e),
				g = a("<div/>", {
					"class": "input-group-btn"
				}),
				h = a("<button/>", {
					type: "button",
					"class": "btn btn-default dropdown-toggle"
				}).on("click", {
					self: d
				}, d._onDropdownToggleClicked).append(a("<span/>", {
					"class": "caret"
				}));
			switch (d.position) {
				case "left":
					c = "footable-filtering-left";
					break;
				case "center":
					c = "footable-filtering-center";
					break;
				default:
					c = "footable-filtering-right"
			}
			d.ft.$el.addClass("footable-filtering").addClass(c), d.$container = null === d.container ? a() : a(d.container).first(), d.$container.length ? d.$container.addClass("footable-filtering-external").addClass(c) : (d.$row = a("<tr/>", {
				"class": "footable-filtering"
			}).prependTo(d.ft.$el.children("thead")), d.$cell = a("<th/>").attr("colspan", d.ft.columns.visibleColspan).appendTo(d.$row), d.$container = d.$cell), d.$form = a("<form/>", {
				"class": "form-inline"
			}).append(e).appendTo(d.$container), d.$input = a("<input/>", {
				type: "text",
				"class": "form-control",
				placeholder: d.placeholder
			}), d.$button = a("<button/>", {
				type: "button",
				"class": "btn btn-primary"
			}).on("click", {
				self: d
			}, d._onSearchButtonClicked).append(a("<span/>", {
				"class": "fooicon fooicon-search"
			})), d.$dropdown = a("<ul/>", {
				"class": "dropdown-menu dropdown-menu-right"
			}), b.is.emptyString(d.dropdownTitle) || d.$dropdown.append(a("<li/>", {
				"class": "dropdown-header",
				text: d.dropdownTitle
			})), d.$dropdown.append(b.arr.map(d.ft.columns.array, function (b) {
				return b.filterable ? a("<li/>").append(a("<a/>", {
					"class": "checkbox"
				}).append(a("<label/>", {
					html: b.title
				}).prepend(a("<input/>", {
					type: "checkbox",
					checked: !0
				}).data("__FooTableColumn__", b)))) : null
			})), d.delay > 0 && (d.$input.on("keypress keyup paste", {
				self: d
			}, d._onSearchInputChanged), d.$dropdown.on("click", 'input[type="checkbox"]', {
				self: d
			}, d._onSearchColumnClicked)), g.append(d.$button, h, d.$dropdown), f.append(d.$input, g)
		},
		predraw: function () {
			if (!b.is.emptyArray(this.filters)) {
				var c = this;
				c.ft.rows.array = a.grep(c.ft.rows.array, function (a) {
					return a.filtered(c.filters)
				})
			}
		},
		draw: function () {
			b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan);
			var a = this.find("search");
			if (a instanceof b.Filter) {
				var c = a.query.val();
				this.exactMatch && this._exactRegExp.test(c) && (c = c.replace(this._exactRegExp, "$1")), this.$input.val(c)
			} else this.$input.val(null);
			this.setButton(!b.arr.any(this.filters, function (a) {
				return !a.hidden
			}))
		},
		addFilter: function (a, c, d, e, f, g, h) {
			var i = this.createFilter(a, c, d, e, f, g, h);
			i instanceof b.Filter && (this.removeFilter(i.name), this.filters.push(i))
		},
		removeFilter: function (a) {
			b.arr.remove(this.filters, function (b) {
				return b.name == a
			})
		},
		filter: function (a) {
			var b = this;
			return b.filters = b.ensure(b.filters), b.ft.raise("before.ft.filtering", [b.filters]).then(function () {
				if (b.filters = b.ensure(b.filters), a) var c = b.$input.prop("selectionStart"),
					d = b.$input.prop("selectionEnd");
				return b.ft.draw().then(function () {
					a && b.$input.focus().prop({
						selectionStart: c,
						selectionEnd: d
					}), b.ft.raise("after.ft.filtering", [b.filters])
				})
			})
		},
		clear: function () {
			return this.filters = b.arr.get(this.filters, function (a) {
				return a.hidden
			}), this.filter(this.focus)
		},
		setButton: function (a) {
			a ? this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search") : this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")
		},
		find: function (a) {
			return b.arr.first(this.filters, function (b) {
				return b.name == a
			})
		},
		columns: function () {
			return b.is.jq(this.$dropdown) ? this.$dropdown.find("input:checked").map(function () {
				return a(this).data("__FooTableColumn__")
			}).get() : this.ft.columns.get(function (a) {
				return a.filterable
			})
		},
		ensure: function (a) {
			var c = this,
				d = [],
				e = c.columns();
			return b.is.emptyArray(a) || b.arr.each(a, function (a) {
				a = c._ensure(a, e), a instanceof b.Filter && d.push(a)
			}), d
		},
		createFilter: function (a, c, d, e, f, g, h) {
			return b.is.string(a) && (a = {
				name: a,
				query: c,
				columns: d,
				ignoreCase: e,
				connectors: f,
				space: g,
				hidden: h
			}), this._ensure(a, this.columns())
		},
		_ensure: function (a, c) {
			return (b.is.hash(a) || a instanceof b.Filter) && !b.is.emptyString(a.name) && (!b.is.emptyString(a.query) || a.query instanceof b.Query) ? (a.columns = b.is.emptyArray(a.columns) ? c : this.ft.columns.ensure(a.columns), a.ignoreCase = b.is["boolean"](a.ignoreCase) ? a.ignoreCase : this.ignoreCase, a.connectors = b.is["boolean"](a.connectors) ? a.connectors : this.connectors, a.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, a.space = !b.is.string(a.space) || "AND" !== a.space && "OR" !== a.space ? this.space : a.space, a.query = b.is.string(a.query) ? new b.Query(a.query, a.space, a.connectors, a.ignoreCase) : a.query, a instanceof b.Filter ? a : new b.Filter(a.name, a.query, a.columns, a.space, a.connectors, a.ignoreCase, a.hidden)) : null
		},
		_onSearchInputChanged: function (a) {
			var c = a.data.self,
				d = "keypress" == a.type && !b.is.emptyString(String.fromCharCode(a.charCode)),
				e = "keyup" == a.type && (8 == a.which || 46 == a.which),
				f = "paste" == a.type;
			(d || e || f) && (13 == a.which && a.preventDefault(), null != c._filterTimeout && clearTimeout(c._filterTimeout), c._filterTimeout = setTimeout(function () {
				c._filterTimeout = null;
				var a = c.$input.val();
				a.length >= c.min ? (c.exactMatch && !c._exactRegExp.test(a) && (a = '"' + a + '"'), c.addFilter("search", a), c.filter(c.focus)) : b.is.emptyString(a) && c.clear()
			}, c.delay))
		},
		_onSearchButtonClicked: function (a) {
			a.preventDefault();
			var b = a.data.self;
			null != b._filterTimeout && clearTimeout(b._filterTimeout);
			var c = b.$button.children(".fooicon");
			if (c.hasClass("fooicon-remove")) b.clear();
			else {
				var d = b.$input.val();
				d.length >= b.min && (b.exactMatch && !b._exactRegExp.test(d) && (d = '"' + d + '"'), b.addFilter("search", d), b.filter(b.focus))
			}
		},
		_onSearchColumnClicked: function (a) {
			var b = a.data.self;
			null != b._filterTimeout && clearTimeout(b._filterTimeout), b._filterTimeout = setTimeout(function () {
				b._filterTimeout = null;
				var a = b.$button.children(".fooicon");
				a.hasClass("fooicon-remove") && (a.removeClass("fooicon-remove").addClass("fooicon-search"), b.addFilter("search", b.$input.val()), b.filter())
			}, b.delay)
		},
		_onDropdownToggleClicked: function (b) {
			b.preventDefault(), b.stopPropagation();
			var c = b.data.self;
			c.$dropdown.parent().toggleClass("open"), c.$dropdown.parent().hasClass("open") ? a(document).on("click.footable", {
				self: c
			}, c._onDocumentClicked) : a(document).off("click.footable", c._onDocumentClicked)
		},
		_onDocumentClicked: function (b) {
			if (0 == a(b.target).closest(".dropdown-menu").length) {
				b.preventDefault();
				var c = b.data.self;
				c.$dropdown.parent().removeClass("open"), a(document).off("click.footable", c._onDocumentClicked)
			}
		}
	}), b.components.register("filtering", b.Filtering, 500)
}(jQuery, FooTable),
function (a) {
	a.Query = a.Class.extend({
		construct: function (b, c, d, e) {
			this._original = null, this._value = null, this.space = !a.is.string(c) || "OR" != c && "AND" != c ? "AND" : c, this.connectors = a.is["boolean"](d) ? d : !0, this.ignoreCase = a.is["boolean"](e) ? e : !0, this.left = null, this.right = null, this.parts = [], this.operator = null, this.val(b)
		},
		val: function (b) {
			if (a.is.emptyString(b)) return this._value;
			if (a.is.emptyString(this._original)) this._original = b;
			else if (this._original == b) return;
			this._value = b, this._parse()
		},
		match: function (b) {
			return a.is.emptyString(this.operator) || "OR" === this.operator ? this._left(b, !1) || this._match(b, !1) || this._right(b, !1) : "AND" === this.operator ? this._left(b, !0) && this._match(b, !0) && this._right(b, !0) : void 0
		},
		_match: function (b, c) {
			var d = this,
				e = !1,
				f = a.is.emptyString(b);
			return a.is.emptyArray(d.parts) && d.left instanceof a.Query ? c : a.is.emptyArray(d.parts) ? e : ("OR" === d.space ? a.arr.each(d.parts, function (c) {
				if (c.empty && f) {
					if (e = !0, c.negate) return e = !1
				} else {
					var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);
					if (g && !c.negate && (e = !0), g && c.negate) return e = !1
				}
			}) : (e = !0, a.arr.each(d.parts, function (c) {
				if (c.empty) return (!f && !c.negate || f && c.negate) && (e = !1), e;
				var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);
				return (!g && !c.negate || g && c.negate) && (e = !1), e
			})), e)
		},
		_left: function (b, c) {
			return this.left instanceof a.Query ? this.left.match(b) : c
		},
		_right: function (b, c) {
			return this.right instanceof a.Query ? this.right.match(b) : c
		},
		_parse: function () {
			if (!a.is.emptyString(this._value))
				if (/\sOR\s/.test(this._value)) {
					this.operator = "OR";
					var b = this._value.split(/(?:\sOR\s)(.*)?/);
					this.left = new a.Query(b[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(b[1], this.space, this.connectors, this.ignoreCase)
				} else if (/\sAND\s/.test(this._value)) {
				this.operator = "AND";
				var c = this._value.split(/(?:\sAND\s)(.*)?/);
				this.left = new a.Query(c[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(c[1], this.space, this.connectors, this.ignoreCase)
			} else {
				var d = this;
				this.parts = a.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function (a) {
					return d._part(a)
				})
			}
		},
		_part: function (b) {
			var c = {
				query: b,
				negate: !1,
				phrase: !1,
				exact: !1,
				empty: !1
			};
			return a.str.startsWith(c.query, "-") && (c.query = a.str.from(c.query, "-"), c.negate = !0), /^"(.*?)"$/.test(c.query) ? (c.query = c.query.replace(/^"(.*?)"$/, "$1"), c.phrase = !0, c.exact = !0) : this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(c.query) && (c.query = c.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function (a, b) {
				return a.replace(b, " ")
			}), c.phrase = !0), c.empty = c.phrase && a.is.emptyString(c.query), c
		}
	})
}(FooTable),
function (a) {
	a.Cell.prototype.filterValue = null, a.Cell.prototype.__filtering_define__ = function (a) {
		this.filterValue = this.column.filterValue.call(this.column, a)
	}, a.Cell.prototype.__filtering_val__ = function (b) {
		a.is.defined(b) && (this.filterValue = this.column.filterValue.call(this.column, b))
	}, a.Cell.extend("define", function (a) {
		this._super(a), this.__filtering_define__(a)
	}), a.Cell.extend("val", function (a, b, c) {
		var d = this._super(a, b, c);
		return this.__filtering_val__(a), d
	})
}(FooTable),
function (a, b) {
	b.Column.prototype.filterable = !0, b.Column.prototype.filterValue = function (c) {
		if (b.is.element(c) || b.is.jq(c)) {
			var d = a(c).data("filterValue");
			return b.is.defined(d) ? "" + d : a(c).text()
		}
		if (b.is.hash(c) && b.is.hash(c.options)) {
			if (b.is.string(c.options.filterValue)) return c.options.filterValue;
			b.is.defined(c.value) && (c = c.value)
		}
		return b.is.defined(c) && null != c ? c + "" : ""
	}, b.Column.prototype.__filtering_define__ = function (a) {
		this.filterable = b.is["boolean"](a.filterable) ? a.filterable : this.filterable, this.filterValue = b.checkFnValue(this, a.filterValue, this.filterValue)
	}, b.Column.extend("define", function (a) {
		this._super(a), this.__filtering_define__(a)
	})
}(jQuery, FooTable),
function (a) {
	a.Defaults.prototype.filtering = {
		enabled: !1,
		filters: [],
		delay: 1200,
		min: 1,
		space: "AND",
		placeholder: "Search",
		dropdownTitle: null,
		position: "right",
		connectors: !0,
		ignoreCase: !0,
		exactMatch: !1,
		focus: !0,
		container: null
	}
}(FooTable),
function (a) {
	a.Row.prototype.filtered = function (b) {
		var c = !0,
			d = this;
		return a.arr.each(b, function (a) {
			return 0 == (c = a.matchRow(d)) ? !1 : void 0
		}), c
	}
}(FooTable),
function (a, b) {
	b.Sorter = b.Class.extend({
		construct: function (a, b) {
			this.column = a, this.direction = b
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.Sorting = b.Component.extend({
		construct: function (a) {
			this._super(a, a.o.sorting.enabled), this.o = a.o.sorting, this.column = null, this.allowed = !0, this.initial = null
		},
		preinit: function (a) {
			var c = this;
			this.ft.raise("preinit.ft.sorting", [a]).then(function () {
				c.ft.$el.hasClass("footable-sorting") && (c.enabled = !0), c.enabled = b.is["boolean"](a.sorting) ? a.sorting : c.enabled, c.enabled && (c.column = b.arr.first(c.ft.columns.array, function (a) {
					return a.sorted
				}))
			}, function () {
				c.enabled = !1
			})
		},
		init: function () {
			var c = this;
			this.ft.raise("init.ft.sorting").then(function () {
				if (!c.initial) {
					var d = !!c.column;
					c.initial = {
						isset: d,
						rows: c.ft.rows.all.slice(0),
						column: d ? c.column.name : null,
						direction: d ? c.column.direction : null
					}
				}
				b.arr.each(c.ft.columns.array, function (b) {
					b.sortable && b.$el.addClass("footable-sortable").append(a("<span/>", {
						"class": "fooicon fooicon-sort"
					}))
				}), c.ft.$el.on("click.footable", ".footable-sortable", {
					self: c
				}, c._onSortClicked)
			}, function () {
				c.enabled = !1
			})
		},
		destroy: function () {
			var a = this;
			this.ft.raise("destroy.ft.paging").then(function () {
				a.ft.$el.off("click.footable", ".footable-sortable", a._onSortClicked), a.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()
			})
		},
		predraw: function () {
			if (this.column) {
				var a = this,
					b = a.column;
				a.ft.rows.array.sort(function (a, c) {
					return "DESC" == b.direction ? b.sorter(c.cells[b.index].sortValue, a.cells[b.index].sortValue) : b.sorter(a.cells[b.index].sortValue, c.cells[b.index].sortValue)
				})
			}
		},
		draw: function () {
			if (this.column) {
				var a = this,
					b = a.ft.$el.find("thead > tr > .footable-sortable"),
					c = a.column.$el;
				b.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"), b.not(c).children(".fooicon").addClass("fooicon-sort"), c.addClass("DESC" == a.column.direction ? "footable-desc" : "footable-asc").children(".fooicon").addClass("DESC" == a.column.direction ? "fooicon-sort-desc" : "fooicon-sort-asc")
			}
		},
		sort: function (a, b) {
			return this._sort(a, b)
		},
		toggleAllowed: function (a) {
			a = b.is["boolean"](a) ? a : !this.allowed, this.allowed = a, this.ft.$el.toggleClass("footable-sorting-disabled", !this.allowed)
		},
		hasChanged: function () {
			return !(!this.initial || !this.column || this.column.name === this.initial.column && (this.column.direction === this.initial.direction || null === this.initial.direction && "ASC" === this.column.direction))
		},
		reset: function () {
			this.initial && (this.initial.isset ? this.sort(this.initial.column, this.initial.direction) : (this.column && (this.column.$el.removeClass("footable-asc footable-desc"), this.column = null), this.ft.rows.all = this.initial.rows, this.ft.draw()))
		},
		_sort: function (c, d) {
			if (!this.allowed) return a.Deferred().reject("sorting disabled");
			var e = this,
				f = new b.Sorter(e.ft.columns.get(c), b.Sorting.dir(d));
			return e.ft.raise("before.ft.sorting", [f]).then(function () {
				return b.arr.each(e.ft.columns.array, function (a) {
					a != e.column && (a.direction = null)
				}), e.column = e.ft.columns.get(f.column), e.column && (e.column.direction = b.Sorting.dir(f.direction)), e.ft.draw().then(function () {
					e.ft.raise("after.ft.sorting", [f])
				})
			})
		},
		_onSortClicked: function (b) {
			var c = b.data.self,
				d = a(this).closest("th,td"),
				e = d.is(".footable-asc, .footable-desc") ? d.hasClass("footable-desc") ? "ASC" : "DESC" : "ASC";
			c._sort(d.index(), e)
		}
	}), b.Sorting.dir = function (a) {
		return !b.is.string(a) || "ASC" != a && "DESC" != a ? "ASC" : a
	}, b.components.register("sorting", b.Sorting, 600)
}(jQuery, FooTable),
function (a) {
	a.Cell.prototype.sortValue = null, a.Cell.prototype.__sorting_define__ = function (a) {
		this.sortValue = this.column.sortValue.call(this.column, a)
	}, a.Cell.prototype.__sorting_val__ = function (b) {
		a.is.defined(b) && (this.sortValue = this.column.sortValue.call(this.column, b))
	}, a.Cell.extend("define", function (a) {
		this._super(a), this.__sorting_define__(a)
	}), a.Cell.extend("val", function (a, b, c) {
		var d = this._super(a, b, c);
		return this.__sorting_val__(a), d
	})
}(FooTable),
function (a, b) {
	b.Column.prototype.direction = null, b.Column.prototype.sortable = !0, b.Column.prototype.sorted = !1, b.Column.prototype.sorter = function (a, b) {
		return "string" == typeof a && (a = a.toLowerCase()), "string" == typeof b && (b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1
	}, b.Column.prototype.sortValue = function (c) {
		if (b.is.element(c) || b.is.jq(c)) {
			var d = a(c).data("sortValue");
			return b.is.defined(d) ? d : this.parser(c)
		}
		if (b.is.hash(c) && b.is.hash(c.options)) {
			if (b.is.string(c.options.sortValue)) return c.options.sortValue;
			b.is.defined(c.value) && (c = c.value)
		}
		return b.is.defined(c) && null != c ? c : null
	}, b.Column.prototype.__sorting_define__ = function (a) {
		this.sorter = b.checkFnValue(this, a.sorter, this.sorter), this.direction = b.is.type(a.direction, "string") ? b.Sorting.dir(a.direction) : null, this.sortable = b.is["boolean"](a.sortable) ? a.sortable : !0, this.sorted = b.is["boolean"](a.sorted) ? a.sorted : !1, this.sortValue = b.checkFnValue(this, a.sortValue, this.sortValue)
	}, b.Column.extend("define", function (a) {
		this._super(a), this.__sorting_define__(a)
	})
}(jQuery, FooTable),
function (a) {
	a.Defaults.prototype.sorting = {
		enabled: !1
	}
}(FooTable),
function (a, b) {
	b.HTMLColumn.extend("__sorting_define__", function (c) {
		this._super(c), this.sortUse = b.is.string(c.sortUse) && -1 !== a.inArray(c.sortUse, ["html", "text"]) ? c.sortUse : "html"
	}), b.HTMLColumn.prototype.sortValue = function (c) {
		if (b.is.element(c) || b.is.jq(c)) {
			var d = a(c).data("sortValue");
			return b.is.defined(d) ? d : this.parser(c)
		}
		if (b.is.hash(c) && b.is.hash(c.options)) {
			if (b.is.string(c.options.sortValue)) return c.options.sortValue;
			b.is.defined(c.value) && (c = c.value)
		}
		return b.is.defined(c) && null != c ? c : null
	}
}(jQuery, FooTable),
function (a, b) {
	b.NumberColumn.prototype.sortValue = function (c) {
		if (b.is.element(c) || b.is.jq(c)) {
			var d = a(c).data("sortValue");
			return b.is.number(d) ? d : this.parser(c)
		}
		if (b.is.hash(c) && b.is.hash(c.options)) {
			if (b.is.string(c.options.sortValue)) return this.parser(c);
			if (b.is.number(c.options.sortValue)) return c.options.sortValue;
			if (b.is.number(c.value)) return c.value
		}
		return b.is.string(c) ? this.parser(c) : b.is.number(c) ? c : null
	}
}(jQuery, FooTable),
function (a) {
	a.Table.prototype.sort = function (b, c) {
		return this.use(a.Sorting).sort(b, c)
	}
}(FooTable),
function (a, b) {
	b.Pager = b.Class.extend({
		construct: function (a, b, c, d, e) {
			this.total = a, this.current = b, this.size = c, this.page = d, this.forward = e
		}
	})
}(jQuery, FooTable),
function (a, b) {
	b.Paging = b.Component.extend({
		construct: function (a) {
			this._super(a, a.o.paging.enabled), this.strings = a.o.paging.strings, this.current = a.o.paging.current, this.size = a.o.paging.size, this.limit = a.o.paging.limit, this.position = a.o.paging.position, this.countFormat = a.o.paging.countFormat, this.container = a.o.paging.container, this.total = -1, this.totalRows = 0, this.previous = -1, this.formattedCount = null, this.$container = null, this.$wrapper = null, this.$row = null, this.$cell = null, this.$pagination = null, this.$count = null, this.detached = !0, this._createdLinks = 0
		},
		preinit: function (a) {
			var c = this;
			this.ft.raise("preinit.ft.paging", [a]).then(function () {
				c.ft.$el.hasClass("footable-paging") && (c.enabled = !0), c.enabled = b.is["boolean"](a.paging) ? a.paging : c.enabled, c.enabled && (c.size = b.is.number(a.pagingSize) ? a.pagingSize : c.size, c.current = b.is.number(a.pagingCurrent) ? a.pagingCurrent : c.current, c.limit = b.is.number(a.pagingLimit) ? a.pagingLimit : c.limit, c.ft.$el.hasClass("footable-paging-left") && (c.position = "left"), c.ft.$el.hasClass("footable-paging-center") && (c.position = "center"), c.ft.$el.hasClass("footable-paging-right") && (c.position = "right"), c.position = b.is.string(a.pagingPosition) ? a.pagingPosition : c.position, c.countFormat = b.is.string(a.pagingCountFormat) ? a.pagingCountFormat : c.countFormat, c.container = b.is.string(a.pagingContainer) ? a.pagingContainer : c.container, c.total = Math.ceil(c.ft.rows.all.length / c.size))
			}, function () {
				c.enabled = !1
			})
		},
		init: function () {
			var a = this;
			this.ft.raise("init.ft.paging").then(function () {
				a.$create()
			}, function () {
				a.enabled = !1
			})
		},
		destroy: function () {
			var a = this;
			this.ft.raise("destroy.ft.paging").then(function () {
				a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(), a.detached = !0, a._createdLinks = 0
			})
		},
		predraw: function () {
			this.total = Math.ceil(this.ft.rows.array.length / this.size), this.current = this.current > this.total ? this.total : this.current < 1 ? 1 : this.current, this.totalRows = this.ft.rows.array.length, this.totalRows > this.size && (this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size)), this.formattedCount = this.format(this.countFormat)
		},
		draw: function () {
			if (this.total <= 1) this.detached || (this.$row ? this.$row.detach() : this.$wrapper.detach(), this.detached = !0);
			else {
				if (this.detached) {
					if (this.$row) {
						var c = this.ft.$el.children("tfoot");
						0 == c.length && (c = a("<tfoot/>"), this.ft.$el.append(c)), this.$row.appendTo(c)
					} else this.$wrapper.appendTo(this.$container);
					this.detached = !1
				}
				b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan), this._createLinks(), this._setVisible(this.current, this.current > this.previous), this._setNavigation(!0), this.$count.text(this.formattedCount)
			}
		},
		$create: function () {
			this._createdLinks = 0;
			var c = "footable-paging-center";
			switch (this.position) {
				case "left":
					c = "footable-paging-left";
					break;
				case "right":
					c = "footable-paging-right"
			}
			if (this.ft.$el.addClass("footable-paging").addClass(c), this.$container = null === this.container ? null : a(this.container).first(), b.is.jq(this.$container)) this.$container.addClass("footable-paging-external").addClass(c);
			else {
				var d = this.ft.$el.children("tfoot");
				0 == d.length && (d = a("<tfoot/>"), this.ft.$el.append(d)), this.$row = a("<tr/>", {
					"class": "footable-paging"
				}).prependTo(d), this.$container = this.$cell = a("<td/>").attr("colspan", this.ft.columns.visibleColspan).appendTo(this.$row)
			}
			this.$wrapper = a("<div/>", {
				"class": "footable-pagination-wrapper"
			}).appendTo(this.$container), this.$pagination = a("<ul/>", {
				"class": "pagination"
			}).on("click.footable", "a.footable-page-link", {
				self: this
			}, this._onPageClicked), this.$count = a("<span/>", {
				"class": "label label-default"
			}), this.$wrapper.append(this.$pagination, a("<div/>", {
				"class": "divider"
			}), this.$count), this.detached = !1
		},
		format: function (a) {
			var b = this.size * (this.current - 1) + 1,
				c = this.size * this.current;
			return 0 == this.ft.rows.array.length ? (b = 0, c = 0) : c = c > this.totalRows ? this.totalRows : c, a.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, b).replace(/\{PL}/g, c).replace(/\{TR}/g, this.totalRows)
		},
		first: function () {
			return this._set(1)
		},
		prev: function () {
			return this._set(this.current - 1 > 0 ? this.current - 1 : 1)
		},
		next: function () {
			return this._set(this.current + 1 < this.total ? this.current + 1 : this.total)
		},
		last: function () {
			return this._set(this.total)
		},
		"goto": function (a) {
			return this._set(a > this.total ? this.total : 1 > a ? 1 : a)
		},
		prevPages: function () {
			var a = this.$pagination.children("li.footable-page.visible:first").data("page") - 1;
			this._setVisible(a, !0), this._setNavigation(!1)
		},
		nextPages: function () {
			var a = this.$pagination.children("li.footable-page.visible:last").data("page") + 1;
			this._setVisible(a, !1), this._setNavigation(!1)
		},
		pageSize: function (a) {
			return a = parseInt(a), isNaN(a) ? this.size : (this.size = a, this.total = Math.ceil(this.ft.rows.all.length / this.size), b.is.jq(this.$wrapper) && (this.$container.is("td") ? this.$row.remove() : this.$wrapper.remove()), this.$create(), void this.ft.draw())
		},
		_set: function (c) {
			var d = this,
				e = new b.Pager(d.total, d.current, d.size, c, c > d.current);
			return d.ft.raise("before.ft.paging", [e]).then(function () {
				return e.page = e.page > e.total ? e.total : e.page, e.page = e.page < 1 ? 1 : e.page, d.current == c ? a.when() : (d.previous = d.current, d.current = e.page, d.ft.draw().then(function () {
					d.ft.raise("after.ft.paging", [e])
				}))
			})
		},
		_createLinks: function () {
			if (this._createdLinks !== this.total) {
				var b = this,
					c = b.total > 1,
					d = function (b, c, d) {
						return a("<li/>", {
							"class": d
						}).attr("data-page", b).append(a("<a/>", {
							"class": "footable-page-link",
							href: "#"
						}).data("page", b).html(c))
					};
				b.$pagination.empty(), c && (b.$pagination.append(d("first", b.strings.first, "footable-page-nav")), b.$pagination.append(d("prev", b.strings.prev, "footable-page-nav")), b.limit > 0 && b.limit < b.total && b.$pagination.append(d("prev-limit", b.strings.prevPages, "footable-page-nav")));
				for (var e, f = 0; f < b.total; f++) e = d(f + 1, f + 1, "footable-page"), b.$pagination.append(e);
				c && (b.limit > 0 && b.limit < b.total && b.$pagination.append(d("next-limit", b.strings.nextPages, "footable-page-nav")), b.$pagination.append(d("next", b.strings.next, "footable-page-nav")), b.$pagination.append(d("last", b.strings.last, "footable-page-nav"))), b._createdLinks = b.total
			}
		},
		_setNavigation: function (a) {
			1 == this.current ? this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled") : this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"), this.current == this.total ? this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled") : this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"), 1 == (this.$pagination.children("li.footable-page.visible:first").data("page") || 1) ? this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"), (this.$pagination.children("li.footable-page.visible:last").data("page") || this.limit) == this.total ? this.$pagination.children('li[data-page="next-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"), this.limit > 0 && this.total < this.limit ? this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", "none") : this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", ""),
				a && this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="' + this.current + '"]').addClass("active")
		},
		_setVisible: function (a, b) {
			if (this.limit > 0 && this.total > this.limit) {
				if (!this.$pagination.children('li.footable-page[data-page="' + a + '"]').hasClass("visible")) {
					var c = 0,
						d = 0;
					1 == b ? (d = a > this.total ? this.total : a, c = d - this.limit) : (c = 1 > a ? 0 : a - 1, d = c + this.limit), 0 > c && (c = 0, d = this.limit > this.total ? this.total : this.limit), d > this.total && (d = this.total, c = this.total - this.limit < 0 ? 0 : this.total - this.limit), this.$pagination.children("li.footable-page").removeClass("visible").slice(c, d).addClass("visible")
				}
			} else this.$pagination.children("li.footable-page").removeClass("visible").slice(0, this.total).addClass("visible")
		},
		_onPageClicked: function (b) {
			if (b.preventDefault(), !a(b.target).closest("li").is(".active,.disabled")) {
				var c = b.data.self,
					d = a(this).data("page");
				switch (d) {
					case "first":
						return void c.first();
					case "prev":
						return void c.prev();
					case "next":
						return void c.next();
					case "last":
						return void c.last();
					case "prev-limit":
						return void c.prevPages();
					case "next-limit":
						return void c.nextPages();
					default:
						return void c._set(d)
				}
			}
		}
	}), b.components.register("paging", b.Paging, 400)
}(jQuery, FooTable),
function (a) {
	a.Defaults.prototype.paging = {
		enabled: !1,
		countFormat: "{CP} of {TP}",
		current: 1,
		limit: 5,
		position: "center",
		size: 10,
		container: null,
		strings: {
			first: "&laquo;",
			prev: "&lsaquo;",
			next: "&rsaquo;",
			last: "&raquo;",
			prevPages: "...",
			nextPages: "..."
		}
	}
}(FooTable),
function (a) {
	a.Table.prototype.gotoPage = function (b) {
		return this.use(a.Paging)["goto"](b)
	}, a.Table.prototype.nextPage = function () {
		return this.use(a.Paging).next()
	}, a.Table.prototype.prevPage = function () {
		return this.use(a.Paging).prev()
	}, a.Table.prototype.firstPage = function () {
		return this.use(a.Paging).first()
	}, a.Table.prototype.lastPage = function () {
		return this.use(a.Paging).last()
	}, a.Table.prototype.nextPages = function () {
		return this.use(a.Paging).nextPages()
	}, a.Table.prototype.prevPages = function () {
		return this.use(a.Paging).prevPages()
	}, a.Table.prototype.pageSize = function (b) {
		return this.use(a.Paging).pageSize(b)
	}
}(FooTable),
function (a, b) {
	b.Editing = b.Component.extend({
		construct: function (c) {
			this._super(c, c.o.editing.enabled), this.pageToNew = c.o.editing.pageToNew, this.alwaysShow = c.o.editing.alwaysShow, this.column = a.extend(!0, {}, c.o.editing.column, {
				visible: this.alwaysShow
			}), this.position = c.o.editing.position, this.showText = c.o.editing.showText, this.hideText = c.o.editing.hideText, this.addText = c.o.editing.addText, this.editText = c.o.editing.editText, this.deleteText = c.o.editing.deleteText, this.viewText = c.o.editing.viewText, this.allowAdd = c.o.editing.allowAdd, this.allowEdit = c.o.editing.allowEdit, this.allowDelete = c.o.editing.allowDelete, this.allowView = c.o.editing.allowView, this._$buttons = null, this.callbacks = {
				addRow: b.checkFnValue(this, c.o.editing.addRow),
				editRow: b.checkFnValue(this, c.o.editing.editRow),
				deleteRow: b.checkFnValue(this, c.o.editing.deleteRow),
				viewRow: b.checkFnValue(this, c.o.editing.viewRow)
			}
		},
		preinit: function (c) {
			var d = this;
			this.ft.raise("preinit.ft.editing", [c]).then(function () {
				if (d.ft.$el.hasClass("footable-editing") && (d.enabled = !0), d.enabled = b.is["boolean"](c.editing) ? c.editing : d.enabled, d.enabled) {
					if (d.pageToNew = b.is["boolean"](c.editingPageToNew) ? c.editingPageToNew : d.pageToNew, d.alwaysShow = b.is["boolean"](c.editingAlwaysShow) ? c.editingAlwaysShow : d.alwaysShow, d.position = b.is.string(c.editingPosition) ? c.editingPosition : d.position, d.showText = b.is.string(c.editingShowText) ? c.editingShowText : d.showText, d.hideText = b.is.string(c.editingHideText) ? c.editingHideText : d.hideText, d.addText = b.is.string(c.editingAddText) ? c.editingAddText : d.addText, d.editText = b.is.string(c.editingEditText) ? c.editingEditText : d.editText, d.deleteText = b.is.string(c.editingDeleteText) ? c.editingDeleteText : d.deleteText, d.viewText = b.is.string(c.editingViewText) ? c.editingViewText : d.viewText, d.allowAdd = b.is["boolean"](c.editingAllowAdd) ? c.editingAllowAdd : d.allowAdd, d.allowEdit = b.is["boolean"](c.editingAllowEdit) ? c.editingAllowEdit : d.allowEdit, d.allowDelete = b.is["boolean"](c.editingAllowDelete) ? c.editingAllowDelete : d.allowDelete, d.allowView = b.is["boolean"](c.editingAllowView) ? c.editingAllowView : d.allowView, d.column = new b.EditingColumn(d.ft, d, a.extend(!0, {}, d.column, c.editingColumn, {
							visible: d.alwaysShow
						})), d.ft.$el.hasClass("footable-editing-left") && (d.position = "left"), d.ft.$el.hasClass("footable-editing-right") && (d.position = "right"), "right" === d.position) d.column.index = d.ft.columns.array.length;
					else {
						d.column.index = 0;
						for (var e = 0, f = d.ft.columns.array.length; f > e; e++) d.ft.columns.array[e].index += 1
					}
					d.ft.columns.array.push(d.column), d.ft.columns.array.sort(function (a, b) {
						return a.index - b.index
					}), d.callbacks.addRow = b.checkFnValue(d, c.editingAddRow, d.callbacks.addRow), d.callbacks.editRow = b.checkFnValue(d, c.editingEditRow, d.callbacks.editRow), d.callbacks.deleteRow = b.checkFnValue(d, c.editingDeleteRow, d.callbacks.deleteRow), d.callbacks.viewRow = b.checkFnValue(d, c.editingViewRow, d.callbacks.viewRow)
				}
			}, function () {
				d.enabled = !1
			})
		},
		init: function () {
			var a = this;
			this.ft.raise("init.ft.editing").then(function () {
				a.$create()
			}, function () {
				a.enabled = !1
			})
		},
		destroy: function () {
			var a = this;
			this.ft.raise("destroy.ft.editing").then(function () {
				a.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()
			})
		},
		$create: function () {
			var b = this,
				c = "right" === b.position ? "footable-editing-right" : "footable-editing-left";
			b.ft.$el.addClass("footable-editing").addClass(c).on("click.ft.editing", ".footable-show", {
				self: b
			}, b._onShowClick).on("click.ft.editing", ".footable-hide", {
				self: b
			}, b._onHideClick).on("click.ft.editing", ".footable-edit", {
				self: b
			}, b._onEditClick).on("click.ft.editing", ".footable-delete", {
				self: b
			}, b._onDeleteClick).on("click.ft.editing", ".footable-view", {
				self: b
			}, b._onViewClick).on("click.ft.editing", ".footable-add", {
				self: b
			}, b._onAddClick), b.$cell = a("<td/>").attr("colspan", b.ft.columns.visibleColspan).append(b.$buttonShow()), b.allowAdd && b.$cell.append(b.$buttonAdd()), b.$cell.append(b.$buttonHide()), b.alwaysShow && b.ft.$el.addClass("footable-editing-always-show"), b.allowAdd || b.ft.$el.addClass("footable-editing-no-add"), b.allowEdit || b.ft.$el.addClass("footable-editing-no-edit"), b.allowDelete || b.ft.$el.addClass("footable-editing-no-delete"), b.allowView || b.ft.$el.addClass("footable-editing-no-view");
			var d = b.ft.$el.children("tfoot");
			0 == d.length && (d = a("<tfoot/>"), b.ft.$el.append(d)), b.$row = a("<tr/>", {
				"class": "footable-editing"
			}).append(b.$cell).appendTo(d)
		},
		$buttonShow: function () {
			return '<button type="button" class="btn btn-primary footable-show">' + this.showText + "</button>"
		},
		$buttonHide: function () {
			return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + "</button>"
		},
		$buttonAdd: function () {
			return '<button type="button" class="btn btn-primary footable-add">' + this.addText + "</button> "
		},
		$buttonEdit: function () {
			return '<button type="button" class="btn btn-default footable-edit">' + this.editText + "</button> "
		},
		$buttonDelete: function () {
			return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + "</button>"
		},
		$buttonView: function () {
			return '<button type="button" class="btn btn-default footable-view">' + this.viewText + "</button> "
		},
		$rowButtons: function () {
			return b.is.jq(this._$buttons) ? this._$buttons.clone() : (this._$buttons = a('<div class="btn-group btn-group-xs" role="group"></div>'), this.allowView && this._$buttons.append(this.$buttonView()), this.allowEdit && this._$buttons.append(this.$buttonEdit()), this.allowDelete && this._$buttons.append(this.$buttonDelete()), this._$buttons)
		},
		draw: function () {
			this.$cell.attr("colspan", this.ft.columns.visibleColspan)
		},
		_onEditClick: function (c) {
			c.preventDefault();
			var d = c.data.self,
				e = a(this).closest("tr").data("__FooTableRow__");
			e instanceof b.Row && d.ft.raise("edit.ft.editing", [e]).then(function () {
				d.callbacks.editRow.call(d.ft, e)
			})
		},
		_onDeleteClick: function (c) {
			c.preventDefault();
			var d = c.data.self,
				e = a(this).closest("tr").data("__FooTableRow__");
			e instanceof b.Row && d.ft.raise("delete.ft.editing", [e]).then(function () {
				d.callbacks.deleteRow.call(d.ft, e)
			})
		},
		_onViewClick: function (c) {
			c.preventDefault();
			var d = c.data.self,
				e = a(this).closest("tr").data("__FooTableRow__");
			e instanceof b.Row && d.ft.raise("view.ft.editing", [e]).then(function () {
				d.callbacks.viewRow.call(d.ft, e)
			})
		},
		_onAddClick: function (a) {
			a.preventDefault();
			var b = a.data.self;
			b.ft.raise("add.ft.editing").then(function () {
				b.callbacks.addRow.call(b.ft)
			})
		},
		_onShowClick: function (a) {
			a.preventDefault();
			var b = a.data.self;
			b.ft.raise("show.ft.editing").then(function () {
				b.ft.$el.addClass("footable-editing-show"), b.column.visible = !0, b.ft.draw()
			})
		},
		_onHideClick: function (a) {
			a.preventDefault();
			var b = a.data.self;
			b.ft.raise("hide.ft.editing").then(function () {
				b.ft.$el.removeClass("footable-editing-show"), b.column.visible = !1, b.ft.draw()
			})
		}
	}), b.components.register("editing", b.Editing, 850)
}(jQuery, FooTable),
function (a, b) {
	b.EditingColumn = b.Column.extend({
		construct: function (a, b, c) {
			this._super(a, c, "editing"), this.editing = b, this.internal = !0
		},
		$create: function () {
			(this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>", {
				"class": "footable-editing"
			})).html(this.title)
		},
		parser: function (c) {
			if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
				var d = c.prop("tagName").toLowerCase();
				return "td" == d || "th" == d ? c.data("value") || c.contents() : c
			}
			return null
		},
		createCell: function (c) {
			var d = this.editing.$rowButtons(),
				e = a("<td/>").append(d);
			return b.is.jq(c.$el) && (0 === this.index ? e.prependTo(c.$el) : e.insertAfter(c.$el.children().eq(this.index - 1))), new b.Cell(this.ft, c, this, e || e.html())
		}
	}), b.columns.register("editing", b.EditingColumn)
}(jQuery, FooTable),
function (a, b) {
	b.Defaults.prototype.editing = {
		enabled: !1,
		pageToNew: !0,
		position: "right",
		alwaysShow: !1,
		addRow: function () {},
		editRow: function (a) {},
		deleteRow: function (a) {},
		viewRow: function (a) {},
		showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
		hideText: "Cancel",
		addText: "New row",
		editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
		deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
		viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
		allowAdd: !0,
		allowEdit: !0,
		allowDelete: !0,
		allowView: !1,
		column: {
			classes: "footable-editing",
			name: "editing",
			title: "",
			filterable: !1,
			sortable: !1
		}
	}
}(jQuery, FooTable),
function (a, b) {
	b.is.defined(b.Paging) && (b.Paging.prototype.unpaged = [], b.Paging.extend("predraw", function () {
		this.unpaged = this.ft.rows.array.slice(0), this._super()
	}))
}(jQuery, FooTable),
function (a, b) {
	b.Row.prototype.add = function (c) {
		c = b.is["boolean"](c) ? c : !0;
		var d = this;
		return a.Deferred(function (a) {
			var b = d.ft.rows.all.push(d) - 1;
			return c ? d.ft.draw().then(function () {
				a.resolve(b)
			}) : void a.resolve(b)
		})
	}, b.Row.prototype["delete"] = function (c) {
		c = b.is["boolean"](c) ? c : !0;
		var d = this;
		return a.Deferred(function (a) {
			var e = d.ft.rows.all.indexOf(d);
			return b.is.number(e) && e >= 0 && e < d.ft.rows.all.length && (d.ft.rows.all.splice(e, 1), c) ? d.ft.draw().then(function () {
				a.resolve(d)
			}) : void a.resolve(d)
		})
	}, b.is.defined(b.Paging) && b.Row.extend("add", function (a) {
		a = b.is["boolean"](a) ? a : !0;
		var c, d = this,
			e = this._super(a),
			f = d.ft.use(b.Editing);
		return f && f.pageToNew && (c = d.ft.use(b.Paging)) && a ? e.then(function () {
			var a = c.unpaged.indexOf(d),
				b = Math.ceil((a + 1) / c.size);
			return c.current !== b ? c["goto"](b) : void 0
		}) : e
	}), b.is.defined(b.Sorting) && b.Row.extend("val", function (a, c) {
		c = b.is["boolean"](c) ? c : !0;
		var d = this._super(a);
		if (!b.is.hash(a)) return d;
		var e = this;
		return c && e.ft.draw().then(function () {
			var a, c = e.ft.use(b.Editing);
			if (b.is.defined(b.Paging) && c && c.pageToNew && (a = e.ft.use(b.Paging))) {
				var d = a.unpaged.indexOf(e),
					f = Math.ceil((d + 1) / a.size);
				if (a.current !== f) return a["goto"](f)
			}
		}), d
	})
}(jQuery, FooTable),
function (a) {
	a.Rows.prototype.add = function (b, c) {
		var d = b;
		a.is.hash(b) && (d = new FooTable.Row(this.ft, this.ft.columns.array, b)), d instanceof FooTable.Row && d.add(c)
	}, a.Rows.prototype.update = function (b, c, d) {
		var e = this.ft.rows.all.length,
			f = b;
		a.is.number(b) && b >= 0 && e > b && (f = this.ft.rows.all[b]), f instanceof FooTable.Row && a.is.hash(c) && f.val(c, d)
	}, a.Rows.prototype["delete"] = function (b, c) {
		var d = this.ft.rows.all.length,
			e = b;
		a.is.number(b) && b >= 0 && d > b && (e = this.ft.rows.all[b]), e instanceof FooTable.Row && e["delete"](c)
	}
}(FooTable),
function (a, b) {
	var c = 0,
		d = function (a) {
			var b, c, d = 2166136261;
			for (b = 0, c = a.length; c > b; b++) d ^= a.charCodeAt(b), d += (d << 1) + (d << 4) + (d << 7) + (d << 8) + (d << 24);
			return d >>> 0
		}(location.origin + location.pathname);
	b.State = b.Component.extend({
		construct: function (a) {
			this._super(a, a.o.state.enabled), this._key = "1", this.key = this._key + (b.is.string(a.o.state.key) ? a.o.state.key : this._uid()), this.filtering = b.is["boolean"](a.o.state.filtering) ? a.o.state.filtering : !0, this.paging = b.is["boolean"](a.o.state.paging) ? a.o.state.paging : !0, this.sorting = b.is["boolean"](a.o.state.sorting) ? a.o.state.sorting : !0
		},
		preinit: function (a) {
			var c = this;
			this.ft.raise("preinit.ft.state", [a]).then(function () {
				c.enabled = b.is["boolean"](a.state) ? a.state : c.enabled, c.enabled && (c.key = c._key + (b.is.string(a.stateKey) ? a.stateKey : c.key), c.filtering = b.is["boolean"](a.stateFiltering) ? a.stateFiltering : c.filtering, c.paging = b.is["boolean"](a.statePaging) ? a.statePaging : c.paging, c.sorting = b.is["boolean"](a.stateSorting) ? a.stateSorting : c.sorting)
			}, function () {
				c.enabled = !1
			})
		},
		get: function (a) {
			return JSON.parse(localStorage.getItem(this.key + ":" + a))
		},
		set: function (a, b) {
			localStorage.setItem(this.key + ":" + a, JSON.stringify(b))
		},
		remove: function (a) {
			localStorage.removeItem(this.key + ":" + a)
		},
		read: function () {
			this.ft.execute(!1, !0, "readState")
		},
		write: function () {
			this.ft.execute(!1, !0, "writeState")
		},
		clear: function () {
			this.ft.execute(!1, !0, "clearState")
		},
		_uid: function () {
			var a = this.ft.$el.attr("id");
			return d + "_" + (b.is.string(a) ? a : ++c)
		}
	}), b.components.register("state", b.State, 700)
}(jQuery, FooTable),
function (a) {
	a.Component.prototype.readState = function () {}, a.Component.prototype.writeState = function () {}, a.Component.prototype.clearState = function () {}
}(FooTable),
function (a) {
	a.Defaults.prototype.state = {
		enabled: !1,
		filtering: !0,
		paging: !0,
		sorting: !0,
		key: null
	}
}(FooTable),
function (a) {
	a.Filtering && (a.Filtering.prototype.readState = function () {
		if (this.ft.state.filtering) {
			var b = this.ft.state.get("filtering");
			a.is.hash(b) && !a.is.emptyArray(b.filters) && (this.filters = this.ensure(b.filters))
		}
	}, a.Filtering.prototype.writeState = function () {
		if (this.ft.state.filtering) {
			var b = a.arr.map(this.filters, function (b) {
				return {
					name: b.name,
					query: b.query instanceof a.Query ? b.query.val() : b.query,
					columns: a.arr.map(b.columns, function (a) {
						return a.name
					}),
					hidden: b.hidden,
					space: b.space,
					connectors: b.connectors,
					ignoreCase: b.ignoreCase
				}
			});
			this.ft.state.set("filtering", {
				filters: b
			})
		}
	}, a.Filtering.prototype.clearState = function () {
		this.ft.state.filtering && this.ft.state.remove("filtering")
	})
}(FooTable),
function (a) {
	a.Paging && (a.Paging.prototype.readState = function () {
		if (this.ft.state.paging) {
			var b = this.ft.state.get("paging");
			a.is.hash(b) && (this.current = b.current, this.size = b.size)
		}
	}, a.Paging.prototype.writeState = function () {
		this.ft.state.paging && this.ft.state.set("paging", {
			current: this.current,
			size: this.size
		})
	}, a.Paging.prototype.clearState = function () {
		this.ft.state.paging && this.ft.state.remove("paging")
	})
}(FooTable),
function (a) {
	a.Sorting && (a.Sorting.prototype.readState = function () {
		if (this.ft.state.sorting) {
			var b = this.ft.state.get("sorting");
			if (a.is.hash(b)) {
				var c = this.ft.columns.get(b.column);
				c instanceof a.Column && (this.column = c, this.column.direction = b.direction)
			}
		}
	}, a.Sorting.prototype.writeState = function () {
		this.ft.state.sorting && this.column instanceof a.Column && this.ft.state.set("sorting", {
			column: this.column.name,
			direction: this.column.direction
		})
	}, a.Sorting.prototype.clearState = function () {
		this.ft.state.sorting && this.ft.state.remove("sorting")
	})
}(FooTable),
function (a) {
	a.Table.extend("_construct", function (a) {
		return this.state = this.use(FooTable.State), this._super(a)
	}), a.Table.extend("_preinit", function () {
		var a = this;
		return a._super().then(function () {
			a.state.enabled && a.state.read()
		})
	}), a.Table.extend("draw", function () {
		var a = this;
		return a._super().then(function () {
			a.state.enabled && a.state.write()
		})
	})
}(FooTable),
function (a, b) {
	b.Export = b.Component.extend({
		construct: function (a) {
			this._super(a, !0), this.snapshot = []
		},
		predraw: function () {
			this.snapshot = this.ft.rows.array.slice(0)
		},
		columns: function () {
			var a = [];
			return b.arr.each(this.ft.columns.array, function (b) {
				b.internal || a.push({
					type: b.type,
					name: b.name,
					title: b.title,
					visible: b.visible,
					hidden: b.hidden,
					classes: b.classes,
					style: b.style
				})
			}), a
		},
		rows: function (a) {
			a = b.is["boolean"](a) ? a : !1;
			var c = a ? this.ft.rows.all : this.snapshot,
				d = [];
			return b.arr.each(c, function (a) {
				d.push(a.val())
			}), d
		},
		json: function (a) {
			return JSON.parse(JSON.stringify({
				columns: this.columns(),
				rows: this.rows(a)
			}))
		},
		csv: function (a) {
			var c, d, e = "",
				f = this.columns();
			b.arr.each(f, function (a, b) {
				d = '"' + a.title.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d
			}), e += "\n";
			var g = a ? this.ft.rows.all : this.snapshot;
			return b.arr.each(g, function (a) {
				b.arr.each(a.cells, function (a, b) {
					a.column.internal || (c = a.column.stringify.call(a.column, a.value, a.ft.o, a.row.value), d = '"' + c.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d)
				}), e += "\n"
			}), e
		}
	}), b.components.register("export", b.Export, 490)
}(jQuery, FooTable),
function (a) {
	a.Column.prototype.__export_define__ = function (b) {
		this.stringify = a.checkFnValue(this, b.stringify, this.stringify)
	}, a.Column.extend("define", function (a) {
		this._super(a), this.__export_define__(a)
	}), a.Column.prototype.stringify = function (a, b, c) {
		return a + ""
	}, a.DateColumn.prototype.stringify = function (b, c, d) {
		return a.is.object(b) && a.is["boolean"](b._isAMomentObject) && b.isValid() ? b.format(this.formatString) : ""
	}, a.ObjectColumn.prototype.stringify = function (b, c, d) {
		return a.is.object(b) ? JSON.stringify(b) : ""
	}, a.ArrayColumn.prototype.stringify = function (b, c, d) {
		return a.is.array(b) ? JSON.stringify(b) : ""
	}
}(FooTable),
function (a) {
	a.Table.prototype.toJSON = function (b) {
		return this.use(a.Export).json(b)
	}, a.Table.prototype.toCSV = function (b) {
		return this.use(a.Export).csv(b)
	}
}(FooTable);
/* End */
;; /* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/aspro_next/vendor/js/velocity/velocity.js?158443671344791";s:6:"source";s:59:"/bitrix/templates/aspro_next/vendor/js/velocity/velocity.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function (a) {
	"use strict";

	function b(a) {
		var b = a.length,
			d = c.type(a);
		return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
	}
	if (!a.jQuery) {
		var c = function (a, b) {
			return new c.fn.init(a, b)
		};
		c.isWindow = function (a) {
			return a && a === a.window
		}, c.type = function (a) {
			return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
		}, c.isArray = Array.isArray || function (a) {
			return "array" === c.type(a)
		}, c.isPlainObject = function (a) {
			var b;
			if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
			try {
				if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (d) {
				return !1
			}
			for (b in a);
			return b === undefined || f.call(a, b)
		}, c.each = function (a, c, d) {
			var e = 0,
				f = a.length,
				g = b(a);
			if (d) {
				if (g)
					for (; e < f && c.apply(a[e], d) !== !1; e++);
				else
					for (e in a)
						if (a.hasOwnProperty(e) && c.apply(a[e], d) === !1) break
			} else if (g)
				for (; e < f && c.call(a[e], e, a[e]) !== !1; e++);
			else
				for (e in a)
					if (a.hasOwnProperty(e) && c.call(a[e], e, a[e]) === !1) break;
			return a
		}, c.data = function (a, b, e) {
			if (e === undefined) {
				var f = a[c.expando],
					g = f && d[f];
				if (b === undefined) return g;
				if (g && b in g) return g[b]
			} else if (b !== undefined) {
				var h = a[c.expando] || (a[c.expando] = ++c.uuid);
				return d[h] = d[h] || {}, d[h][b] = e, e
			}
		}, c.removeData = function (a, b) {
			var e = a[c.expando],
				f = e && d[e];
			f && (b ? c.each(b, function (a, b) {
				delete f[b]
			}) : delete d[e])
		}, c.extend = function () {
			var a, b, d, e, f, g, h = arguments[0] || {},
				i = 1,
				j = arguments.length,
				k = !1;
			for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)
				if (f = arguments[i])
					for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : d !== undefined && (h[e] = d)));
			return h
		}, c.queue = function (a, d, e) {
			if (a) {
				d = (d || "fx") + "queue";
				var f = c.data(a, d);
				return e ? (!f || c.isArray(e) ? f = c.data(a, d, function (a, c) {
					var d = c || [];
					return a && (b(Object(a)) ? function (a, b) {
						for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
						if (c !== c)
							for (; b[d] !== undefined;) a[e++] = b[d++];
						a.length = e, a
					}(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
				}(e)) : f.push(e), f) : f || []
			}
		}, c.dequeue = function (a, b) {
			c.each(a.nodeType ? [a] : a, function (a, d) {
				b = b || "fx";
				var e = c.queue(d, b),
					f = e.shift();
				"inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
					c.dequeue(d, b)
				}))
			})
		}, c.fn = c.prototype = {
			init: function (a) {
				if (a.nodeType) return this[0] = a, this;
				throw new Error("Not a DOM node.")
			},
			offset: function () {
				var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
					top: 0,
					left: 0
				};
				return {
					top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				}
			},
			position: function () {
				var a = this[0],
					b = function (a) {
						for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent;
						return b || document
					}(a),
					d = this.offset(),
					e = /^(?:body|html)$/i.test(b.nodeName) ? {
						top: 0,
						left: 0
					} : c(b).offset();
				return d.top -= parseFloat(a.style.marginTop) || 0, d.left -= parseFloat(a.style.marginLeft) || 0, b.style && (e.top += parseFloat(b.style.borderTopWidth) || 0, e.left += parseFloat(b.style.borderLeftWidth) || 0), {
					top: d.top - e.top,
					left: d.left - e.left
				}
			}
		};
		var d = {};
		c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
		for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
		c.fn.init.prototype = c.fn, a.Velocity = {
			Utilities: c
		}
	}
}(window),
function (a) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function () {
	"use strict";
	return function (a, b, c, d) {
		function e(a) {
			for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
				var e = a[b];
				e && d.push(e)
			}
			return d
		}

		function f(a) {
			return u.isWrapped(a) ? a = s.call(a) : u.isNode(a) && (a = [a]), a
		}

		function g(a) {
			var b = o.data(a, "velocity");
			return null === b ? d : b
		}

		function h(a, b) {
			var c = g(a);
			c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
		}

		function i(a, b) {
			var c = g(a);
			c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
		}

		function j(a) {
			return function (b) {
				return Math.round(b * a) * (1 / a)
			}
		}

		function k(a, c, d, e) {
			function f(a, b) {
				return 1 - 3 * b + 3 * a
			}

			function g(a, b) {
				return 3 * b - 6 * a
			}

			function h(a) {
				return 3 * a
			}

			function i(a, b, c) {
				return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
			}

			function j(a, b, c) {
				return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
			}

			function k(b, c) {
				for (var e = 0; e < p; ++e) {
					var f = j(c, a, d);
					if (0 === f) return c;
					c -= (i(c, a, d) - b) / f
				}
				return c
			}

			function l() {
				for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d)
			}

			function m(b, c, e) {
				var f, g, h = 0;
				do {
					g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g
				} while (Math.abs(f) > r && ++h < s);
				return g
			}

			function n(b) {
				for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
				--e;
				var g = (b - x[e]) / (x[e + 1] - x[e]),
					h = c + g * u,
					i = j(h, a, d);
				return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
			}

			function o() {
				y = !0, a === c && d === e || l()
			}
			var p = 4,
				q = .001,
				r = 1e-7,
				s = 10,
				t = 11,
				u = 1 / (t - 1),
				v = "Float32Array" in b;
			if (4 !== arguments.length) return !1;
			for (var w = 0; w < 4; ++w)
				if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
			a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
			var x = v ? new Float32Array(t) : new Array(t),
				y = !1,
				z = function (b) {
					return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
				};
			z.getControlPoints = function () {
				return [{
					x: a,
					y: c
				}, {
					x: d,
					y: e
				}]
			};
			var A = "generateBezier(" + [a, c, d, e] + ")";
			return z.toString = function () {
				return A
			}, z
		}

		function l(a, b) {
			var c = a;
			return u.isString(a) ? y.Easings[a] || (c = !1) : c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x), c
		}

		function m(a) {
			if (a) {
				var b = y.timestamp && a !== !0 ? a : r.now(),
					c = y.State.calls.length;
				c > 1e4 && (y.State.calls = e(y.State.calls), c = y.State.calls.length);
				for (var f = 0; f < c; f++)
					if (y.State.calls[f]) {
						var h = y.State.calls[f],
							i = h[0],
							j = h[2],
							k = h[3],
							l = !!k,
							q = null,
							s = h[5],
							t = h[6];
						if (k || (k = y.State.calls[f][3] = b - 16), s) {
							if (s.resume !== !0) continue;
							k = h[3] = Math.round(b - t - 16), h[5] = null
						}
						t = h[6] = b - k;
						for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) {
							var z = i[w],
								B = z.element;
							if (g(B)) {
								var D = !1;
								if (j.display !== d && null !== j.display && "none" !== j.display) {
									if ("flex" === j.display) {
										var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
										o.each(E, function (a, b) {
											A.setPropertyValue(B, "display", b)
										})
									}
									A.setPropertyValue(B, "display", j.display)
								}
								j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility);
								for (var F in z)
									if (z.hasOwnProperty(F) && "element" !== F) {
										var G, H = z[F],
											I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing;
										if (u.isString(H.pattern)) {
											var J = 1 === v ? function (a, b, c) {
												var d = H.endValue[b];
												return c ? Math.round(d) : d
											} : function (a, b, c) {
												var d = H.startValue[b],
													e = H.endValue[b] - d,
													f = d + e * I(v, j, e);
												return c ? Math.round(f) : f
											};
											G = H.pattern.replace(/{(\d+)(!)?}/g, J)
										} else if (1 === v) G = H.endValue;
										else {
											var K = H.endValue - H.startValue;
											G = H.startValue + K * I(v, j, K)
										}
										if (!l && G === H.currentValue) continue;
										if (H.currentValue = G, "tween" === F) q = G;
										else {
											var L;
											if (A.Hooks.registered[F]) {
												L = A.Hooks.getRoot(F);
												var M = g(B).rootPropertyValueCache[L];
												M && (H.rootPropertyValue = M)
											}
											var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
											A.Hooks.registered[F] && (A.Normalizations.registered[L] ? g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1]) : g(B).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
										}
									} j.mobileHA && g(B).transformCache.translate3d === d && (g(B).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && A.flushTransformCache(B)
							}
						}
						j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
					}
			}
			y.State.isTicking && C(m)
		}

		function n(a, b) {
			if (!y.State.calls[a]) return !1;
			for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
				var l = c[j].element;
				b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility));
				var m = g(l);
				if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
					m.isAnimating = !1, m.rootPropertyValueCache = {};
					var n = !1;
					o.each(A.Lists.transforms3D, function (a, b) {
						var c = /^scale/.test(b) ? 1 : 0,
							e = m.transformCache[b];
						m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
					}), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && A.flushTransformCache(l), A.Values.removeClass(l, "velocity-animating")
				}
				if (!b && f.complete && !f.loop && j === k - 1) try {
					f.complete.call(e, e)
				} catch (r) {
					setTimeout(function () {
						throw r
					}, 1)
				}
				h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function (a, b) {
					if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) {
						var c = b.startValue;
						b.startValue = b.endValue, b.endValue = c
					}
					/^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
				}), y(l, "reverse", {
					loop: !0,
					delay: f.delay
				})), f.queue !== !1 && o.dequeue(l, f.queue)
			}
			y.State.calls[a] = !1;
			for (var p = 0, q = y.State.calls.length; p < q; p++)
				if (y.State.calls[p] !== !1) {
					i = !0;
					break
				} i === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
		}
		var o, p = function () {
				if (c.documentMode) return c.documentMode;
				for (var a = 7; a > 4; a--) {
					var b = c.createElement("div");
					if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
				}
				return d
			}(),
			q = function () {
				var a = 0;
				return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
					var c, d = (new Date).getTime();
					return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
						b(d + c)
					}, c)
				}
			}(),
			r = function () {
				var a = b.performance || {};
				if ("function" != typeof a.now) {
					var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : (new Date).getTime();
					a.now = function () {
						return (new Date).getTime() - c
					}
				}
				return a
			}(),
			s = function () {
				var a = Array.prototype.slice;
				try {
					return a.call(c.documentElement), a
				} catch (b) {
					return function (b, c) {
						var d = this.length;
						if ("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice) return a.call(this, b, c);
						var e, f = [],
							g = b >= 0 ? b : Math.max(0, d + b),
							h = c < 0 ? d + c : Math.min(c, d),
							i = h - g;
						if (i > 0)
							if (f = new Array(i), this.charAt)
								for (e = 0; e < i; e++) f[e] = this.charAt(g + e);
							else
								for (e = 0; e < i; e++) f[e] = this[g + e];
						return f
					}
				}
			}(),
			t = function () {
				return Array.prototype.includes ? function (a, b) {
					return a.includes(b)
				} : Array.prototype.indexOf ? function (a, b) {
					return a.indexOf(b) >= 0
				} : function (a, b) {
					for (var c = 0; c < a.length; c++)
						if (a[c] === b) return !0;
					return !1
				}
			},
			u = {
				isNumber: function (a) {
					return "number" == typeof a
				},
				isString: function (a) {
					return "string" == typeof a
				},
				isArray: Array.isArray || function (a) {
					return "[object Array]" === Object.prototype.toString.call(a)
				},
				isFunction: function (a) {
					return "[object Function]" === Object.prototype.toString.call(a)
				},
				isNode: function (a) {
					return a && a.nodeType
				},
				isWrapped: function (a) {
					return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0]))
				},
				isSVG: function (a) {
					return b.SVGElement && a instanceof b.SVGElement
				},
				isEmptyObject: function (a) {
					for (var b in a)
						if (a.hasOwnProperty(b)) return !1;
					return !0
				}
			},
			v = !1;
		if (a.fn && a.fn.jquery ? (o = a, v = !0) : o = b.Velocity.Utilities, p <= 8 && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
		var w = 400,
			x = "swing",
			y = {
				State: {
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: b.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					prefixElement: c.createElement("div"),
					prefixMatches: {},
					scrollAnchor: null,
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					isTicking: !1,
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				CSS: {},
				Utilities: o,
				Redirects: {},
				Easings: {},
				Promise: b.Promise,
				defaults: {
					queue: "",
					duration: w,
					easing: x,
					begin: d,
					complete: d,
					progress: d,
					display: d,
					visibility: d,
					loop: !1,
					delay: !1,
					mobileHA: !0,
					_cacheValues: !0,
					promiseRejectEmpty: !0
				},
				init: function (a) {
					o.data(a, "velocity", {
						isSVG: u.isSVG(a),
						isAnimating: !1,
						computedStyle: null,
						tweensContainer: null,
						rootPropertyValueCache: {},
						transformCache: {}
					})
				},
				hook: null,
				mock: !1,
				version: {
					major: 1,
					minor: 5,
					patch: 0
				},
				debug: !1,
				timestamp: !0,
				pauseAll: function (a) {
					var b = (new Date).getTime();
					o.each(y.State.calls, function (b, c) {
						if (c) {
							if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
							c[5] = {
								resume: !1
							}
						}
					}), o.each(y.State.delayedElements, function (a, c) {
						c && h(c, b)
					})
				},
				resumeAll: function (a) {
					var b = (new Date).getTime();
					o.each(y.State.calls, function (b, c) {
						if (c) {
							if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
							c[5] && (c[5].resume = !0)
						}
					}), o.each(y.State.delayedElements, function (a, c) {
						c && i(c, b)
					})
				}
			};
		b.pageYOffset !== d ? (y.State.scrollAnchor = b, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");
		var z = function () {
			function a(a) {
				return -a.tension * a.x - a.friction * a.v
			}

			function b(b, c, d) {
				var e = {
					x: b.x + d.dx * c,
					v: b.v + d.dv * c,
					tension: b.tension,
					friction: b.friction
				};
				return {
					dx: e.v,
					dv: a(e)
				}
			}

			function c(c, d) {
				var e = {
						dx: c.v,
						dv: a(c)
					},
					f = b(c, .5 * d, e),
					g = b(c, .5 * d, f),
					h = b(c, d, g),
					i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
					j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
				return c.x = c.x + i * d, c.v = c.v + j * d, c
			}
			return function d(a, b, e) {
				var f, g, h, i = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					j = [0],
					k = 0;
				for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * .016) : g = .016;;)
					if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4)) break;
				return f ? function (a) {
					return j[a * (j.length - 1) | 0]
				} : k
			}
		}();
		y.Easings = {
			linear: function (a) {
				return a
			},
			swing: function (a) {
				return .5 - Math.cos(a * Math.PI) / 2
			},
			spring: function (a) {
				return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
			}
		}, o.each([
			["ease", [.25, .1, .25, 1]],
			["ease-in", [.42, 0, 1, 1]],
			["ease-out", [0, 0, .58, 1]],
			["ease-in-out", [.42, 0, .58, 1]],
			["easeInSine", [.47, 0, .745, .715]],
			["easeOutSine", [.39, .575, .565, 1]],
			["easeInOutSine", [.445, .05, .55, .95]],
			["easeInQuad", [.55, .085, .68, .53]],
			["easeOutQuad", [.25, .46, .45, .94]],
			["easeInOutQuad", [.455, .03, .515, .955]],
			["easeInCubic", [.55, .055, .675, .19]],
			["easeOutCubic", [.215, .61, .355, 1]],
			["easeInOutCubic", [.645, .045, .355, 1]],
			["easeInQuart", [.895, .03, .685, .22]],
			["easeOutQuart", [.165, .84, .44, 1]],
			["easeInOutQuart", [.77, 0, .175, 1]],
			["easeInQuint", [.755, .05, .855, .06]],
			["easeOutQuint", [.23, 1, .32, 1]],
			["easeInOutQuint", [.86, 0, .07, 1]],
			["easeInExpo", [.95, .05, .795, .035]],
			["easeOutExpo", [.19, 1, .22, 1]],
			["easeInOutExpo", [1, 0, 0, 1]],
			["easeInCirc", [.6, .04, .98, .335]],
			["easeOutCirc", [.075, .82, .165, 1]],
			["easeInOutCirc", [.785, .135, .15, .86]]
		], function (a, b) {
			y.Easings[b[0]] = k.apply(null, b[1])
		});
		var A = y.CSS = {
			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
			},
			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
				colorNames: {
					aliceblue: "240,248,255",
					antiquewhite: "250,235,215",
					aquamarine: "127,255,212",
					aqua: "0,255,255",
					azure: "240,255,255",
					beige: "245,245,220",
					bisque: "255,228,196",
					black: "0,0,0",
					blanchedalmond: "255,235,205",
					blueviolet: "138,43,226",
					blue: "0,0,255",
					brown: "165,42,42",
					burlywood: "222,184,135",
					cadetblue: "95,158,160",
					chartreuse: "127,255,0",
					chocolate: "210,105,30",
					coral: "255,127,80",
					cornflowerblue: "100,149,237",
					cornsilk: "255,248,220",
					crimson: "220,20,60",
					cyan: "0,255,255",
					darkblue: "0,0,139",
					darkcyan: "0,139,139",
					darkgoldenrod: "184,134,11",
					darkgray: "169,169,169",
					darkgrey: "169,169,169",
					darkgreen: "0,100,0",
					darkkhaki: "189,183,107",
					darkmagenta: "139,0,139",
					darkolivegreen: "85,107,47",
					darkorange: "255,140,0",
					darkorchid: "153,50,204",
					darkred: "139,0,0",
					darksalmon: "233,150,122",
					darkseagreen: "143,188,143",
					darkslateblue: "72,61,139",
					darkslategray: "47,79,79",
					darkturquoise: "0,206,209",
					darkviolet: "148,0,211",
					deeppink: "255,20,147",
					deepskyblue: "0,191,255",
					dimgray: "105,105,105",
					dimgrey: "105,105,105",
					dodgerblue: "30,144,255",
					firebrick: "178,34,34",
					floralwhite: "255,250,240",
					forestgreen: "34,139,34",
					fuchsia: "255,0,255",
					gainsboro: "220,220,220",
					ghostwhite: "248,248,255",
					gold: "255,215,0",
					goldenrod: "218,165,32",
					gray: "128,128,128",
					grey: "128,128,128",
					greenyellow: "173,255,47",
					green: "0,128,0",
					honeydew: "240,255,240",
					hotpink: "255,105,180",
					indianred: "205,92,92",
					indigo: "75,0,130",
					ivory: "255,255,240",
					khaki: "240,230,140",
					lavenderblush: "255,240,245",
					lavender: "230,230,250",
					lawngreen: "124,252,0",
					lemonchiffon: "255,250,205",
					lightblue: "173,216,230",
					lightcoral: "240,128,128",
					lightcyan: "224,255,255",
					lightgoldenrodyellow: "250,250,210",
					lightgray: "211,211,211",
					lightgrey: "211,211,211",
					lightgreen: "144,238,144",
					lightpink: "255,182,193",
					lightsalmon: "255,160,122",
					lightseagreen: "32,178,170",
					lightskyblue: "135,206,250",
					lightslategray: "119,136,153",
					lightsteelblue: "176,196,222",
					lightyellow: "255,255,224",
					limegreen: "50,205,50",
					lime: "0,255,0",
					linen: "250,240,230",
					magenta: "255,0,255",
					maroon: "128,0,0",
					mediumaquamarine: "102,205,170",
					mediumblue: "0,0,205",
					mediumorchid: "186,85,211",
					mediumpurple: "147,112,219",
					mediumseagreen: "60,179,113",
					mediumslateblue: "123,104,238",
					mediumspringgreen: "0,250,154",
					mediumturquoise: "72,209,204",
					mediumvioletred: "199,21,133",
					midnightblue: "25,25,112",
					mintcream: "245,255,250",
					mistyrose: "255,228,225",
					moccasin: "255,228,181",
					navajowhite: "255,222,173",
					navy: "0,0,128",
					oldlace: "253,245,230",
					olivedrab: "107,142,35",
					olive: "128,128,0",
					orangered: "255,69,0",
					orange: "255,165,0",
					orchid: "218,112,214",
					palegoldenrod: "238,232,170",
					palegreen: "152,251,152",
					paleturquoise: "175,238,238",
					palevioletred: "219,112,147",
					papayawhip: "255,239,213",
					peachpuff: "255,218,185",
					peru: "205,133,63",
					pink: "255,192,203",
					plum: "221,160,221",
					powderblue: "176,224,230",
					purple: "128,0,128",
					red: "255,0,0",
					rosybrown: "188,143,143",
					royalblue: "65,105,225",
					saddlebrown: "139,69,19",
					salmon: "250,128,114",
					sandybrown: "244,164,96",
					seagreen: "46,139,87",
					seashell: "255,245,238",
					sienna: "160,82,45",
					silver: "192,192,192",
					skyblue: "135,206,235",
					slateblue: "106,90,205",
					slategray: "112,128,144",
					snow: "255,250,250",
					springgreen: "0,255,127",
					steelblue: "70,130,180",
					tan: "210,180,140",
					teal: "0,128,128",
					thistle: "216,191,216",
					tomato: "255,99,71",
					turquoise: "64,224,208",
					violet: "238,130,238",
					wheat: "245,222,179",
					whitesmoke: "245,245,245",
					white: "255,255,255",
					yellowgreen: "154,205,50",
					yellow: "255,255,0"
				}
			},
			Hooks: {
				templates: {
					textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
					boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
					backgroundPosition: ["X Y", "0% 0%"],
					transformOrigin: ["X Y Z", "50% 50% 0px"],
					perspectiveOrigin: ["X Y", "50% 50%"]
				},
				registered: {},
				register: function () {
					for (var a = 0; a < A.Lists.colors.length; a++) {
						var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
						A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b]
					}
					var c, d, e;
					if (p)
						for (c in A.Hooks.templates)
							if (A.Hooks.templates.hasOwnProperty(c)) {
								d = A.Hooks.templates[c], e = d[0].split(" ");
								var f = d[1].match(A.RegEx.valueSplit);
								"Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), A.Hooks.templates[c] = [e.join(" "), f.join(" ")])
							} for (c in A.Hooks.templates)
						if (A.Hooks.templates.hasOwnProperty(c)) {
							d = A.Hooks.templates[c], e = d[0].split(" ");
							for (var g in e)
								if (e.hasOwnProperty(g)) {
									var h = c + e[g],
										i = g;
									A.Hooks.registered[h] = [c, i]
								}
						}
				},
				getRoot: function (a) {
					var b = A.Hooks.registered[a];
					return b ? b[0] : a
				},
				getUnit: function (a, b) {
					var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
					return c && t(A.Lists.units, c) ? c : ""
				},
				fixColors: function (a) {
					return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (a, b, c) {
						return A.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
					})
				},
				cleanRootPropertyValue: function (a, b) {
					return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b
				},
				extractValue: function (a, b) {
					var c = A.Hooks.registered[a];
					if (c) {
						var d = c[0],
							e = c[1];
						return b = A.Hooks.cleanRootPropertyValue(d, b), b.toString().match(A.RegEx.valueSplit)[e]
					}
					return b
				},
				injectValue: function (a, b, c) {
					var d = A.Hooks.registered[a];
					if (d) {
						var e, f = d[0],
							g = d[1];
						return c = A.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(A.RegEx.valueSplit), e[g] = b, e.join(" ")
					}
					return c
				}
			},
			Normalizations: {
				registered: {
					clip: function (a, b, c) {
						switch (a) {
							case "name":
								return "clip";
							case "extract":
								var d;
								return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(A.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
							case "inject":
								return "rect(" + c + ")"
						}
					},
					blur: function (a, b, c) {
						switch (a) {
							case "name":
								return y.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var d = parseFloat(c);
								if (!d && 0 !== d) {
									var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
									d = e ? e[1] : 0
								}
								return d;
							case "inject":
								return parseFloat(c) ? "blur(" + c + ")" : "none"
						}
					},
					opacity: function (a, b, c) {
						if (p <= 8) switch (a) {
							case "name":
								return "filter";
							case "extract":
								var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
								return c = d ? d[1] / 100 : 1;
							case "inject":
								return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
						} else switch (a) {
							case "name":
								return "opacity";
							case "extract":
								return c;
							case "inject":
								return c
						}
					}
				},
				register: function () {
					function a(a, b, c) {
						if ("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase() === (c || !1)) {
							var d, e, f = 0,
								g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
								h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"];
							for (d = 0; d < h.length; d++) e = parseFloat(A.getPropertyValue(b, h[d])), isNaN(e) || (f += e);
							return c ? -f : f
						}
						return 0
					}

					function b(b, c) {
						return function (d, e, f) {
							switch (d) {
								case "name":
									return b;
								case "extract":
									return parseFloat(f) + a(b, e, c);
								case "inject":
									return parseFloat(f) - a(b, e, c) + "px"
							}
						}
					}
					p && !(p > 9) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D));
					for (var c = 0; c < A.Lists.transformsBase.length; c++) ! function () {
						var a = A.Lists.transformsBase[c];
						A.Normalizations.registered[a] = function (b, c, e) {
							switch (b) {
								case "name":
									return "transform";
								case "extract":
									return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
								case "inject":
									var f = !1;
									switch (a.substr(0, a.length - 1)) {
										case "translate":
											f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
											break;
										case "scal":
										case "scale":
											y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
											break;
										case "skew":
											f = !/(deg|\d)$/i.test(e);
											break;
										case "rotate":
											f = !/(deg|\d)$/i.test(e)
									}
									return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
							}
						}
					}();
					for (var e = 0; e < A.Lists.colors.length; e++) ! function () {
						var a = A.Lists.colors[e];
						A.Normalizations.registered[a] = function (b, c, e) {
							switch (b) {
								case "name":
									return a;
								case "extract":
									var f;
									if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
									else {
										var g, h = {
											black: "rgb(0, 0, 0)",
											blue: "rgb(0, 0, 255)",
											gray: "rgb(128, 128, 128)",
											green: "rgb(0, 128, 0)",
											red: "rgb(255, 0, 0)",
											white: "rgb(255, 255, 255)"
										};
										/^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : A.RegEx.isHex.test(e) ? g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
									}
									return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
								case "inject":
									return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
							}
						}
					}();
					A.Normalizations.registered.innerWidth = b("width", !0), A.Normalizations.registered.innerHeight = b("height", !0), A.Normalizations.registered.outerWidth = b("width"), A.Normalizations.registered.outerHeight = b("height")
				}
			},
			Names: {
				camelCase: function (a) {
					return a.replace(/-(\w)/g, function (a, b) {
						return b.toUpperCase()
					})
				},
				SVGAttribute: function (a) {
					var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
					return (p || y.State.isAndroid && !y.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
				},
				prefixCheck: function (a) {
					if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0];
					for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
						var e;
						if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
								return a.toUpperCase()
							}), u.isString(y.State.prefixElement.style[e])) return y.State.prefixMatches[a] = e, [e, !0]
					}
					return [a, !1]
				}
			},
			Values: {
				hexToRgb: function (a) {
					var b, c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
					return a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, c, d) {
						return b + b + c + c + d + d
					}), b = c.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
				},
				isCSSNullValue: function (a) {
					return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
				},
				getUnitType: function (a) {
					return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
				},
				getDisplayType: function (a) {
					var b = a && a.tagName.toString().toLowerCase();
					return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
				},
				addClass: function (a, b) {
					if (a)
						if (a.classList) a.classList.add(b);
						else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
					else {
						var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
						a.setAttribute("class", c + (c ? " " : "") + b)
					}
				},
				removeClass: function (a, b) {
					if (a)
						if (a.classList) a.classList.remove(b);
						else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
					else {
						var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
						a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
					}
				}
			},
			getPropertyValue: function (a, c, e, f) {
				function h(a, c) {
					var e = 0;
					if (p <= 8) e = o.css(a, c);
					else {
						var i = !1;
						/^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && (i = !0, A.setPropertyValue(a, "display", A.Values.getDisplayType(a)));
						var j = function () {
							i && A.setPropertyValue(a, "display", "none")
						};
						if (!f) {
							if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
								var k = a.offsetHeight - (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0);
								return j(), k
							}
							if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
								var l = a.offsetWidth - (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0);
								return j(), l
							}
						}
						var m;
						m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
					}
					if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
						var n = h(a, "position");
						("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
					}
					return e
				}
				var i;
				if (A.Hooks.registered[c]) {
					var j = c,
						k = A.Hooks.getRoot(j);
					e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), i = A.Hooks.extractValue(j, e)
				} else if (A.Normalizations.registered[c]) {
					var l, m;
					l = A.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, A.Names.prefixCheck(l)[0]), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])), i = A.Normalizations.registered[c]("extract", a, m)
				}
				if (!/^[\d-]/.test(i)) {
					var n = g(a);
					if (n && n.isSVG && A.Names.SVGAttribute(c))
						if (/^(height|width)$/i.test(c)) try {
							i = a.getBBox()[c]
						} catch (q) {
							i = 0
						} else i = a.getAttribute(c);
						else i = h(a, A.Names.prefixCheck(c)[0])
				}
				return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i
			},
			setPropertyValue: function (a, c, d, e, f) {
				var h = c;
				if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
				else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
				else {
					if (A.Hooks.registered[c]) {
						var i = c,
							j = A.Hooks.getRoot(c);
						e = e || A.getPropertyValue(a, j), d = A.Hooks.injectValue(i, d, e), c = j
					}
					if (A.Normalizations.registered[c] && (d = A.Normalizations.registered[c]("inject", a, d), c = A.Normalizations.registered[c]("name", a)), h = A.Names.prefixCheck(c)[0], p <= 8) try {
						a.style[h] = d
					} catch (l) {
						y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
					} else {
						var k = g(a);
						k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
					}
					y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
				}
				return [h, d]
			},
			flushTransformCache: function (a) {
				var b = "",
					c = g(a);
				if ((p || y.State.isAndroid && !y.State.isChrome) && c && c.isSVG) {
					var d = function (b) {
							return parseFloat(A.getPropertyValue(a, b))
						},
						e = {
							translate: [d("translateX"), d("translateY")],
							skewX: [d("skewX")],
							skewY: [d("skewY")],
							scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
							rotate: [d("rotateZ"), 0, 0]
						};
					o.each(g(a).transformCache, function (a) {
						/^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
					})
				} else {
					var f, h;
					o.each(g(a).transformCache, function (c) {
						if (f = g(a).transformCache[c], "transformPerspective" === c) return h = f, !0;
						9 === p && "rotateZ" === c && (c = "rotate"), b += c + f + " "
					}), h && (b = "perspective" + h + " " + b)
				}
				A.setPropertyValue(a, "transform", b)
			}
		};
		A.Hooks.register(), A.Normalizations.register(), y.hook = function (a, b, c) {
			var e;
			return a = f(a), o.each(a, function (a, f) {
				if (g(f) === d && y.init(f), c === d) e === d && (e = A.getPropertyValue(f, b));
				else {
					var h = A.setPropertyValue(f, b, c);
					"transform" === h[0] && y.CSS.flushTransformCache(f), e = h
				}
			}), e
		};
		var B = function () {
			function a() {
				return k ? z.promise || null : p
			}

			function e(a, e) {
				function f(f) {
					var k, n;
					if (i.begin && 0 === D) try {
						i.begin.call(r, r)
					} catch (V) {
						setTimeout(function () {
							throw V
						}, 1)
					}
					if ("scroll" === G) {
						var p, q, w, x = /^x$/i.test(i.axis) ? "Left" : "Top",
							B = parseFloat(i.offset) || 0;
						i.container ? u.isWrapped(i.container) || u.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + x], w = p + o(a).position()[x.toLowerCase()] + B) : i.container = null : (p = y.State.scrollAnchor[y.State["scrollProperty" + x]], q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], w = o(a).offset()[x.toLowerCase()] + B), j = {
							scroll: {
								rootPropertyValue: !1,
								startValue: p,
								currentValue: p,
								endValue: w,
								unitType: "",
								easing: i.easing,
								scrollData: {
									container: i.container,
									direction: x,
									alternateValue: q
								}
							},
							element: a
						}, y.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
					} else if ("reverse" === G) {
						if (!(k = g(a))) return;
						if (!k.tweensContainer) return void o.dequeue(a, i.queue);
						"none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
						for (var E in n)
							if (n.hasOwnProperty(E) && "element" !== E) {
								var F = n[E].startValue;
								n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = F, u.isEmptyObject(v) || (n[E].easing = i.easing), y.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a)
							} j = n
					} else if ("start" === G) {
						k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
						var H = function (e, f) {
							var g, l = A.Hooks.getRoot(e),
								m = !1,
								p = f[0],
								q = f[1],
								r = f[2];
							if (!(k && k.isSVG || "tween" === l || A.Names.prefixCheck(l)[1] !== !1 || A.Normalizations.registered[l] !== d)) return void(y.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
							(i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : A.Hooks.registered[e] ? r === d ? (m = A.getPropertyValue(a, l), r = A.getPropertyValue(a, e, m)) : m = A.Hooks.templates[l][1] : r === d && (r = A.getPropertyValue(a, e));
							var s, t, v, w = !1,
								x = function (a, b) {
									var c, d;
									return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
										return c = a, ""
									}), c || (c = A.Values.getUnitType(a)), [d, c]
								};
							if (r !== p && u.isString(r) && u.isString(p)) {
								g = "";
								var z = 0,
									B = 0,
									C = [],
									D = [],
									E = 0,
									F = 0,
									G = 0;
								for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) {
									var H = r[z],
										I = p[B];
									if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
										for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) {
											if ((H = r[z]) === L) L = "..";
											else if (!/\d/.test(H)) break;
											J += H
										}
										for (; ++B < p.length;) {
											if ((I = p[B]) === N) N = "..";
											else if (!/\d/.test(I)) break;
											K += I
										}
										var O = A.Hooks.getUnit(r, z),
											P = A.Hooks.getUnit(p, B);
										if (z += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
										else {
											var Q = parseFloat(J),
												R = parseFloat(K);
											g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
										}
									} else {
										if (H !== I) {
											E = 0;
											break
										}
										g += H, z++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
									}
								}
								z === r.length && B === p.length || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, t = v = "") : g = d)
							}
							g || (s = x(e, r), r = s[0], v = s[1], s = x(e, p), p = s[0].replace(/^([+-\/*])=/, function (a, b) {
								return w = b, ""
							}), t = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, t = "em") : /^scale/.test(e) ? (p /= 100, t = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, t = "")));
							if (/[\/*]/.test(w)) t = v;
							else if (v !== t && 0 !== r)
								if (0 === p) t = v;
								else {
									h = h || function () {
										var d = {
												myParent: a.parentNode || c.body,
												position: A.getPropertyValue(a, "position"),
												fontSize: A.getPropertyValue(a, "fontSize")
											},
											e = d.position === M.lastPosition && d.myParent === M.lastParent,
											f = d.fontSize === M.lastFontSize;
										M.lastParent = d.myParent, M.lastPosition = d.position, M.lastFontSize = d.fontSize;
										var g = {};
										if (f && e) g.emToPx = M.lastEmToPx, g.percentToPxWidth = M.lastPercentToPxWidth, g.percentToPxHeight = M.lastPercentToPxHeight;
										else {
											var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
											y.init(h), d.myParent.appendChild(h), o.each(["overflow", "overflowX", "overflowY"], function (a, b) {
												y.CSS.setPropertyValue(h, b, "hidden")
											}), y.CSS.setPropertyValue(h, "position", d.position), y.CSS.setPropertyValue(h, "fontSize", d.fontSize), y.CSS.setPropertyValue(h, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
												y.CSS.setPropertyValue(h, b, "100%")
											}), y.CSS.setPropertyValue(h, "paddingLeft", "100em"), g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100, g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100, g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100, d.myParent.removeChild(h)
										}
										return null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(b.innerWidth) / 100, M.vhToPx = parseFloat(b.innerHeight) / 100), g.remToPx = M.remToPx, g.vwToPx = M.vwToPx, g.vhToPx = M.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(g), a), g
									}();
									var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
									switch (v) {
										case "%":
											r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight;
											break;
										case "px":
											break;
										default:
											r *= h[v + "ToPx"]
									}
									switch (t) {
										case "%":
											r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight);
											break;
										case "px":
											break;
										default:
											r *= 1 / h[t + "ToPx"]
									}
								} switch (w) {
								case "+":
									p = r + p;
									break;
								case "-":
									p = r - p;
									break;
								case "*":
									p *= r;
									break;
								case "/":
									p = r / p
							}
							j[e] = {
								rootPropertyValue: m,
								startValue: r,
								currentValue: r,
								endValue: p,
								unitType: t,
								easing: q
							}, g && (j[e].pattern = g), y.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
						};
						for (var I in s)
							if (s.hasOwnProperty(I)) {
								var J = A.Names.camelCase(I),
									K = function (b, c) {
										var d, f, g;
										return u.isFunction(b) && (b = b.call(a, e, C)), u.isArray(b) ? (d = b[0], !u.isArray(b[1]) && /^[\d-]/.test(b[1]) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ? g = b[1] : u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]] || u.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), u.isFunction(d) && (d = d.call(a, e, C)), u.isFunction(g) && (g = g.call(a, e, C)), [d || 0, f, g]
									}(s[I]);
								if (t(A.Lists.colors, J)) {
									var L = K[0],
										O = K[1],
										P = K[2];
									if (A.RegEx.isHex.test(L)) {
										for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
											var U = [R[T]];
											O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U)
										}
										continue
									}
								}
								H(J, K)
							} j.element = a
					}
					j.element && (A.Values.addClass(a, "velocity-animating"), N.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), y.State.isTicking === !1 && (y.State.isTicking = !0, m())) : D++)
				}
				var h, i = o.extend({}, y.defaults, v),
					j = {};
				switch (g(a) === d && y.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function (b) {
					y.velocityQueueEntryFlag = !0;
					var c = y.State.delayedElements.count++;
					y.State.delayedElements[c] = a;
					var d = function (a) {
						return function () {
							y.State.delayedElements[a] = !1, b()
						}
					}(c);
					g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
						setTimeout: setTimeout(b, parseFloat(i.delay)),
						next: d
					}
				}), i.duration.toString().toLowerCase()) {
					case "fast":
						i.duration = 200;
						break;
					case "normal":
						i.duration = w;
						break;
					case "slow":
						i.duration = 600;
						break;
					default:
						i.duration = parseFloat(i.duration) || 1
				}
				if (y.mock !== !1 && (y.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(y.mock) || 1, i.delay *= parseFloat(y.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !u.isFunction(i.begin) && (i.begin = null), i.progress && !u.isFunction(i.progress) && (i.progress = null), i.complete && !u.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread, i.queue === !1)
					if (i.delay) {
						var k = y.State.delayedElements.count++;
						y.State.delayedElements[k] = a;
						var n = function (a) {
							return function () {
								y.State.delayedElements[a] = !1, f()
							}
						}(k);
						g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
							setTimeout: setTimeout(f, parseFloat(i.delay)),
							next: n
						}
					} else f();
				else o.queue(a, i.queue, function (a, b) {
					if (b === !0) return z.promise && z.resolver(r), !0;
					y.velocityQueueEntryFlag = !0, f(a)
				});
				"" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
			}
			var j, k, p, q, r, s, v, x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties));
			u.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]);
			var z = {
				promise: null,
				resolver: null,
				rejecter: null
			};
			if (k && y.Promise && (z.promise = new y.Promise(function (a, b) {
					z.resolver = a, z.rejecter = b
				})), x ? (s = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (s = arguments[q], v = arguments[q + 1]), !(r = f(r))) return void(z.promise && (s && v && v.promiseRejectEmpty === !1 ? z.resolver() : z.rejecter()));
			var C = r.length,
				D = 0;
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) {
				var E = q + 1;
				v = {};
				for (var F = E; F < arguments.length; F++) u.isArray(arguments[F]) || !/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F]) ? u.isString(arguments[F]) || u.isArray(arguments[F]) ? v.easing = arguments[F] : u.isFunction(arguments[F]) && (v.complete = arguments[F]) : v.duration = arguments[F]
			}
			var G;
			switch (s) {
				case "scroll":
					G = "scroll";
					break;
				case "reverse":
					G = "reverse";
					break;
				case "pause":
					var H = (new Date).getTime();
					return o.each(r, function (a, b) {
						h(b, H)
					}), o.each(y.State.calls, function (a, b) {
						var c = !1;
						b && o.each(b[1], function (a, e) {
							var f = v === d ? "" : v;
							return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (o.each(r, function (a, d) {
								if (d === e) return b[5] = {
									resume: !1
								}, c = !0, !1
							}), !c && void 0)
						})
					}), a();
				case "resume":
					return o.each(r, function (a, b) {
						i(b, H)
					}), o.each(y.State.calls, function (a, b) {
						var c = !1;
						b && o.each(b[1], function (a, e) {
							var f = v === d ? "" : v;
							return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function (a, d) {
								if (d === e) return b[5].resume = !0, c = !0, !1
							}), !c && void 0))
						})
					}), a();
				case "finish":
				case "finishAll":
				case "stop":
					o.each(r, function (a, b) {
						g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || v !== !0 && !u.isString(v) || (o.each(o.queue(b, u.isString(v) ? v : ""), function (a, b) {
							u.isFunction(b) && b()
						}), o.queue(b, u.isString(v) ? v : "", []))
					});
					var I = [];
					return o.each(y.State.calls, function (a, b) {
						b && o.each(b[1], function (c, e) {
							var f = v === d ? "" : v;
							if (f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1)) return !0;
							o.each(r, function (c, d) {
								if (d === e)
									if ((v === !0 || u.isString(v)) && (o.each(o.queue(d, u.isString(v) ? v : ""), function (a, b) {
											u.isFunction(b) && b(null, !0)
										}), o.queue(d, u.isString(v) ? v : "", [])), "stop" === s) {
										var h = g(d);
										h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function (a, b) {
											b.endValue = b.currentValue
										}), I.push(a)
									} else "finish" !== s && "finishAll" !== s || (b[2].duration = 1)
							})
						})
					}), "stop" === s && (o.each(I, function (a, b) {
						n(b, !0)
					}), z.promise && z.resolver(r)), a();
				default:
					if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
						if (u.isString(s) && y.Redirects[s]) {
							j = o.extend({}, v);
							var J = j.duration,
								K = j.delay || 0;
							return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function (a, b) {
								parseFloat(j.stagger) ? j.delay = K + parseFloat(j.stagger) * a : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)), j.drag && (j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), .75 * j.duration, 200)), y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d)
							}), a()
						}
						var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
						return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a()
					}
					G = "start"
			}
			var M = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				},
				N = [];
			o.each(r, function (a, b) {
				u.isNode(b) && e(b, a)
			}), j = o.extend({}, y.defaults, v), j.loop = parseInt(j.loop, 10);
			var O = 2 * j.loop - 1;
			if (j.loop)
				for (var P = 0; P < O; P++) {
					var Q = {
						delay: j.delay,
						progress: j.progress
					};
					P === O - 1 && (Q.display = j.display, Q.visibility = j.visibility, Q.complete = j.complete), B(r, "reverse", Q)
				}
			return a()
		};
		y = o.extend(B, y), y.animate = B;
		var C = b.requestAnimationFrame || q;
		if (!y.State.isMobile && c.hidden !== d) {
			var D = function () {
				c.hidden ? (C = function (a) {
					return setTimeout(function () {
						a(!0)
					}, 16)
				}, m()) : C = b.requestAnimationFrame || q
			};
			D(), c.addEventListener("visibilitychange", D)
		}
		return a.Velocity = y, a !== b && (a.fn.velocity = B, a.fn.velocity.defaults = y.defaults), o.each(["Down", "Up"], function (a, b) {
			y.Redirects["slide" + b] = function (a, c, e, f, g, h) {
				var i = o.extend({}, c),
					j = i.begin,
					k = i.complete,
					l = {},
					m = {
						height: "",
						marginTop: "",
						marginBottom: "",
						paddingTop: "",
						paddingBottom: ""
					};
				i.display === d && (i.display = "Down" === b ? "inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
					0 === e && j && j.call(g, g);
					for (var c in m)
						if (m.hasOwnProperty(c)) {
							l[c] = a.style[c];
							var d = A.getPropertyValue(a, c);
							m[c] = "Down" === b ? [d, 0] : [0, d]
						} l.overflow = a.style.overflow, a.style.overflow = "hidden"
				}, i.complete = function () {
					for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
					e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
				}, y(a, m, i)
			}
		}), o.each(["In", "Out"], function (a, b) {
			y.Redirects["fade" + b] = function (a, c, e, f, g, h) {
				var i = o.extend({}, c),
					j = i.complete,
					k = {
						opacity: "In" === b ? 1 : 0
					};
				0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function () {
					j && j.call(g, g), h && h.resolver(g)
				}, i.display === d && (i.display = "In" === b ? "auto" : "none"), y(this, k, i)
			}
		}), y
	}(window.jQuery || window.Zepto || window, window, window ? window.document : undefined)
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/aspro_next/vendor/js/velocity/velocity.ui.js?158443671313257";s:6:"source";s:62:"/bitrix/templates/aspro_next/vendor/js/velocity/velocity.ui.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
! function (t) {
	"function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function () {
	return function (t, a, e, r) {
		function n(t, a) {
			var e = [];
			return t && a ? ($.each([t, a], function (t, a) {
				var r = [];
				$.each(a, function (t, a) {
					for (; a.toString().length < 5;) a = "0" + a;
					r.push(a)
				}), e.push(r.join(""))
			}), parseFloat(e[0]) > parseFloat(e[1])) : !1
		}
		if (!t.Velocity || !t.Velocity.Utilities) return void(a.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
		var i = t.Velocity,
			$ = i.Utilities,
			s = i.version,
			o = {
				major: 1,
				minor: 1,
				patch: 0
			};
		if (n(o, s)) {
			var l = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
			throw alert(l), new Error(l)
		}
		i.RegisterEffect = i.RegisterUI = function (t, a) {
			function e(t, a, e, r) {
				var n = 0,
					s;
				$.each(t.nodeType ? [t] : t, function (t, a) {
					r && (e += t * r), s = a.parentNode, $.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (t, e) {
						n += parseFloat(i.CSS.getPropertyValue(a, e))
					})
				}), i.animate(s, {
					height: ("In" === a ? "+" : "-") + "=" + n
				}, {
					queue: !1,
					easing: "ease-in-out",
					duration: e * ("In" === a ? .6 : 1)
				})
			}
			return i.Redirects[t] = function (n, s, o, l, c, u) {
				function f() {
					s.display !== r && "none" !== s.display || !/Out$/.test(t) || $.each(c.nodeType ? [c] : c, function (t, a) {
						i.CSS.setPropertyValue(a, "display", "none")
					}), s.complete && s.complete.call(c, c), u && u.resolver(c || n)
				}
				var p = o === l - 1;
				a.defaultDuration = "function" == typeof a.defaultDuration ? a.defaultDuration.call(c, c) : parseFloat(a.defaultDuration);
				for (var d = 0; d < a.calls.length; d++) {
					var g = a.calls[d],
						y = g[0],
						m = s.duration || a.defaultDuration || 1e3,
						X = g[1],
						Y = g[2] || {},
						O = {};
					if (O.duration = m * (X || 1), O.queue = s.queue || "", O.easing = Y.easing || "ease", O.delay = parseFloat(Y.delay) || 0, O._cacheValues = Y._cacheValues || !0, 0 === d) {
						if (O.delay += parseFloat(s.delay) || 0, 0 === o && (O.begin = function () {
								s.begin && s.begin.call(c, c);
								var a = t.match(/(In|Out)$/);
								a && "In" === a[0] && y.opacity !== r && $.each(c.nodeType ? [c] : c, function (t, a) {
									i.CSS.setPropertyValue(a, "opacity", 0)
								}), s.animateParentHeight && a && e(c, a[0], m + O.delay, s.stagger)
							}), null !== s.display)
							if (s.display !== r && "none" !== s.display) O.display = s.display;
							else if (/In$/.test(t)) {
							var v = i.CSS.Values.getDisplayType(n);
							O.display = "inline" === v ? "inline-block" : v
						}
						s.visibility && "hidden" !== s.visibility && (O.visibility = s.visibility)
					}
					d === a.calls.length - 1 && (O.complete = function () {
						if (a.reset) {
							for (var t in a.reset) {
								var e = a.reset[t];
								i.CSS.Hooks.registered[t] !== r || "string" != typeof e && "number" != typeof e || (a.reset[t] = [a.reset[t], a.reset[t]])
							}
							var s = {
								duration: 0,
								queue: !1
							};
							p && (s.complete = f), i.animate(n, a.reset, s)
						} else p && f()
					}, "hidden" === s.visibility && (O.visibility = s.visibility)), i.animate(n, y, O)
				}
			}, i
		}, i.RegisterEffect.packagedEffects = {
			"callout.bounce": {
				defaultDuration: 550,
				calls: [
					[{
						translateY: -30
					}, .25],
					[{
						translateY: 0
					}, .125],
					[{
						translateY: -15
					}, .125],
					[{
						translateY: 0
					}, .25]
				]
			},
			"callout.shake": {
				defaultDuration: 800,
				calls: [
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 11
					}, .125],
					[{
						translateX: -11
					}, .125],
					[{
						translateX: 0
					}, .125]
				]
			},
			"callout.flash": {
				defaultDuration: 1100,
				calls: [
					[{
						opacity: [0, "easeInOutQuad", 1]
					}, .25],
					[{
						opacity: [1, "easeInOutQuad"]
					}, .25],
					[{
						opacity: [0, "easeInOutQuad"]
					}, .25],
					[{
						opacity: [1, "easeInOutQuad"]
					}, .25]
				]
			},
			"callout.pulse": {
				defaultDuration: 825,
				calls: [
					[{
						scaleX: 1.1,
						scaleY: 1.1
					}, .5, {
						easing: "easeInExpo"
					}],
					[{
						scaleX: 1,
						scaleY: 1
					}, .5]
				]
			},
			"callout.swing": {
				defaultDuration: 950,
				calls: [
					[{
						rotateZ: 15
					}, .2],
					[{
						rotateZ: -10
					}, .2],
					[{
						rotateZ: 5
					}, .2],
					[{
						rotateZ: -5
					}, .2],
					[{
						rotateZ: 0
					}, .2]
				]
			},
			"callout.tada": {
				defaultDuration: 1e3,
				calls: [
					[{
						scaleX: .9,
						scaleY: .9,
						rotateZ: -3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: 3
					}, .1],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						rotateZ: -3
					}, .1],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					["reverse", .125],
					[{
						scaleX: 1,
						scaleY: 1,
						rotateZ: 0
					}, .2]
				]
			},
			"transition.fadeIn": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [1, 0]
					}]
				]
			},
			"transition.fadeOut": {
				defaultDuration: 500,
				calls: [
					[{
						opacity: [0, 1]
					}]
				]
			},
			"transition.flipXIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateY: [0, -55]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipXOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateY: 55
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipYIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						rotateX: [0, -45]
					}]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						rotateX: 25
					}]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.flipBounceXIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateY: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateY: 10
					}, .25],
					[{
						opacity: 1,
						rotateY: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceXOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateY: -10
					}, .5],
					[{
						opacity: 0,
						rotateY: 90
					}, .5]
				],
				reset: {
					transformPerspective: 0,
					rotateY: 0
				}
			},
			"transition.flipBounceYIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [.725, 0],
						transformPerspective: [400, 400],
						rotateX: [-10, 90]
					}, .5],
					[{
						opacity: .8,
						rotateX: 10
					}, .25],
					[{
						opacity: 1,
						rotateX: 0
					}, .25]
				],
				reset: {
					transformPerspective: 0
				}
			},
			"transition.flipBounceYOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [.9, 1],
						transformPerspective: [400, 400],
						rotateX: -15
					}, .5],
					[{
						opacity: 0,
						rotateX: 90
					}, .5]
				],
				reset: {
					transformPerspective: 0,
					rotateX: 0
				}
			},
			"transition.swoopIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["100%", "50%"],
						transformOriginY: ["100%", "100%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						translateX: [0, -700],
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.swoopOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "100%"],
						transformOriginY: ["100%", "100%"],
						scaleX: 0,
						scaleY: 0,
						translateX: -700,
						translateZ: 0
					}]
				],
				reset: {
					transformOriginX: "50%",
					transformOriginY: "50%",
					scaleX: 1,
					scaleY: 1,
					translateX: 0
				}
			},
			"transition.whirlIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 0],
						scaleY: [1, 0],
						rotateY: [0, 160]
					}, 1, {
						easing: "easeInOutSine"
					}]
				]
			},
			"transition.whirlOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, "easeInOutQuint", 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 0,
						scaleY: 0,
						rotateY: 160
					}, 1, {
						easing: "swing"
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1,
					rotateY: 0
				}
			},
			"transition.shrinkIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, 1.5],
						scaleY: [1, 1.5],
						translateZ: 0
					}]
				]
			},
			"transition.shrinkOut": {
				defaultDuration: 600,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: 1.3,
						scaleY: 1.3,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.expandIn": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [1, 0],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: [1, .625],
						scaleY: [1, .625],
						translateZ: 0
					}]
				]
			},
			"transition.expandOut": {
				defaultDuration: 700,
				calls: [
					[{
						opacity: [0, 1],
						transformOriginX: ["50%", "50%"],
						transformOriginY: ["50%", "50%"],
						scaleX: .5,
						scaleY: .5,
						translateZ: 0
					}]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						scaleX: [1.05, .3],
						scaleY: [1.05, .3]
					}, .4],
					[{
						scaleX: .9,
						scaleY: .9,
						translateZ: 0
					}, .2],
					[{
						scaleX: 1,
						scaleY: 1
					}, .5]
				]
			},
			"transition.bounceOut": {
				defaultDuration: 800,
				calls: [
					[{
						scaleX: .95,
						scaleY: .95
					}, .35],
					[{
						scaleX: 1.1,
						scaleY: 1.1,
						translateZ: 0
					}, .35],
					[{
						opacity: [0, 1],
						scaleX: .3,
						scaleY: .3
					}, .3]
				],
				reset: {
					scaleX: 1,
					scaleY: 1
				}
			},
			"transition.bounceUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [-30, 1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: 10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceUpOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: 20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: -1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [30, -1e3]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateY: -10
					}, .2],
					[{
						translateY: 0
					}, .2]
				]
			},
			"transition.bounceDownOut": {
				defaultDuration: 1e3,
				calls: [
					[{
						translateY: -20
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateY: 1e3
					}, .8]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.bounceLeftIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [30, -1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: -10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceLeftOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: 30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: -1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.bounceRightIn": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [-30, 1250]
					}, .6, {
						easing: "easeOutCirc"
					}],
					[{
						translateX: 10
					}, .2],
					[{
						translateX: 0
					}, .2]
				]
			},
			"transition.bounceRightOut": {
				defaultDuration: 750,
				calls: [
					[{
						translateX: -30
					}, .2],
					[{
						opacity: [0, "easeInCirc", 1],
						translateX: 1250
					}, .8]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownIn": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownOut": {
				defaultDuration: 900,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -20],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightIn": {
				defaultDuration: 1e3,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 20],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightOut": {
				defaultDuration: 1050,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 20,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideUpBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideUpBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideDownBigIn": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [1, 0],
						translateY: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideDownBigOut": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [0, 1],
						translateY: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateY: 0
				}
			},
			"transition.slideLeftBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, -75],
						translateZ: 0
					}]
				]
			},
			"transition.slideLeftBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: -75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.slideRightBigIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						translateX: [0, 75],
						translateZ: 0
					}]
				]
			},
			"transition.slideRightBigOut": {
				defaultDuration: 750,
				calls: [
					[{
						opacity: [0, 1],
						translateX: 75,
						translateZ: 0
					}]
				],
				reset: {
					translateX: 0
				}
			},
			"transition.perspectiveUpIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveUpOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: ["100%", "100%"],
						rotateX: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveDownIn": {
				defaultDuration: 800,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveDownOut": {
				defaultDuration: 850,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [800, 800],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateX: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateX: 0
				}
			},
			"transition.perspectiveLeftIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: [0, -180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveLeftOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: [0, 0],
						transformOriginY: [0, 0],
						rotateY: -180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			},
			"transition.perspectiveRightIn": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [1, 0],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: [0, 180]
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%"
				}
			},
			"transition.perspectiveRightOut": {
				defaultDuration: 950,
				calls: [
					[{
						opacity: [0, 1],
						transformPerspective: [2e3, 2e3],
						transformOriginX: ["100%", "100%"],
						transformOriginY: [0, 0],
						rotateY: 180
					}]
				],
				reset: {
					transformPerspective: 0,
					transformOriginX: "50%",
					transformOriginY: "50%",
					rotateY: 0
				}
			}
		};
		for (var c in i.RegisterEffect.packagedEffects) i.RegisterEffect(c, i.RegisterEffect.packagedEffects[c]);
		i.RunSequence = function (t) {
			var a = $.extend(!0, [], t);
			a.length > 1 && ($.each(a.reverse(), function (t, e) {
				var r = a[t + 1];
				if (r) {
					var n = e.o || e.options,
						s = r.o || r.options,
						o = n && n.sequenceQueue === !1 ? "begin" : "complete",
						l = s && s[o],
						c = {};
					c[o] = function () {
						var t = r.e || r.elements,
							a = t.nodeType ? [t] : t;
						l && l.call(a, a), i(e)
					}, r.o ? r.o = $.extend({}, s, c) : r.options = $.extend({}, s, c)
				}
			}), a.reverse()), i(a[0])
		}
	}(window.jQuery || window.Zepto || window, window, document)
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/vendor/js/lazysizes.min.js?15844366987057";s:6:"source";s:55:"/bitrix/templates/aspro_next/vendor/js/lazysizes.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! lazysizes - v5.1.1 */
! function (a, b) {
	var c = b(a, a.document);
	a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}("undefined" != typeof window ? window : {}, function (a, b) {
	"use strict";
	var c, d;
	if (function () {
			var b, c = {
				lazyClass: "lazyload",
				loadedClass: "lazyloaded",
				loadingClass: "lazyloading",
				preloadClass: "lazypreload",
				errorClass: "lazyerror",
				autosizesClass: "lazyautosizes",
				srcAttr: "data-src",
				srcsetAttr: "data-srcset",
				sizesAttr: "data-sizes",
				minSize: 40,
				customMedia: {},
				init: !0,
				expFactor: 1.5,
				hFac: .8,
				loadMode: 2,
				loadHidden: !0,
				ricTimeout: 0,
				throttleDelay: 125
			};
			d = a.lazySizesConfig || a.lazysizesConfig || {};
			for (b in c) b in d || (d[b] = c[b])
		}(), !b || !b.getElementsByClassName) return {
		init: function () {},
		cfg: d,
		noSupport: !0
	};
	var e = b.documentElement,
		f = a.Date,
		g = a.HTMLPictureElement,
		h = "addEventListener",
		i = "getAttribute",
		j = a[h],
		k = a.setTimeout,
		l = a.requestAnimationFrame || k,
		m = a.requestIdleCallback,
		n = /^picture$/i,
		o = ["load", "error", "lazyincluded", "_lazyloaded"],
		p = {},
		q = Array.prototype.forEach,
		r = function (a, b) {
			return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
		},
		s = function (a, b) {
			r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
		},
		t = function (a, b) {
			var c;
			(c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
		},
		u = function (a, b, c) {
			var d = c ? h : "removeEventListener";
			c && u(a, b), o.forEach(function (c) {
				a[d](c, b)
			})
		},
		v = function (a, d, e, f, g) {
			var h = b.createEvent("Event");
			return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h
		},
		w = function (b, c) {
			var e;
			!g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({
				reevaluate: !0,
				elements: [b]
			})) : c && c.src && (b.src = c.src)
		},
		x = function (a, b) {
			return (getComputedStyle(a, null) || {})[b]
		},
		y = function (a, b, c) {
			for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
			return c
		},
		z = function () {
			var a, c, d = [],
				e = [],
				f = d,
				g = function () {
					var b = f;
					for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
					a = !1
				},
				h = function (d, e) {
					a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
				};
			return h._lsFlush = g, h
		}(),
		A = function (a, b) {
			return b ? function () {
				z(a)
			} : function () {
				var b = this,
					c = arguments;
				z(function () {
					a.apply(b, c)
				})
			}
		},
		B = function (a) {
			var b, c = 0,
				e = d.throttleDelay,
				g = d.ricTimeout,
				h = function () {
					b = !1, c = f.now(), a()
				},
				i = m && g > 49 ? function () {
					m(h, {
						timeout: g
					}), g !== d.ricTimeout && (g = d.ricTimeout)
				} : A(function () {
					k(h)
				}, !0);
			return function (a) {
				var d;
				(a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d))
			}
		},
		C = function (a) {
			var b, c, d = 99,
				e = function () {
					b = null, a()
				},
				g = function () {
					var a = f.now() - c;
					a < d ? k(g, d - a) : (m || e)(e)
				};
			return function () {
				c = f.now(), b || (b = k(g, d))
			}
		},
		D = function () {
			var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i,
				L = /^iframe$/i,
				M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
				N = 0,
				O = 0,
				P = 0,
				Q = -1,
				R = function (a) {
					P--, (!a || P < 0 || !a.target) && (P = 0)
				},
				S = function (a) {
					return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility")
				},
				T = function (a, c) {
					var d, f = a,
						g = S(a);
					for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
					return g
				},
				U = function () {
					var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements;
					if ((o = d.loadMode) && P < 8 && (a = u.length)) {
						for (f = 0, Q++; f < a; f++)
							if (u[f] && !u[f]._lazyRace)
								if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]);
								else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) {
							if (aa(u[f]), k = !0, P > 9) break
						} else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]);
						j && !k && aa(j)
					}
				},
				V = B(U),
				W = function (a) {
					var b = a.target;
					if (b._lazyCache) return void delete b._lazyCache;
					R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded")
				},
				X = A(W),
				Y = function (a) {
					X({
						target: a.target
					})
				},
				Z = function (a, b) {
					try {
						a.contentWindow.location.replace(b)
					} catch (c) {
						a.src = b
					}
				},
				$ = function (a) {
					var b, c = a[i](d.srcsetAttr);
					(b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
				},
				_ = A(function (a, b, c, e, f) {
					var g, h, j, l, o, p;
					(o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
						target: a
					}, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, {
						src: g
					})), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {
						var b = a.complete && a.naturalWidth > 1;
						p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () {
							"_lazyCache" in a && delete a._lazyCache
						}, 9)), "lazy" == a.loading && P--
					}, !0)
				}),
				aa = function (a) {
					if (!a._lazyRace) {
						var b, c = K.test(a.nodeName),
							e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
							f = "auto" == e;
						(!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++, _(a, b, f, e, c))
					}
				},
				ba = C(function () {
					d.loadMode = 3, V()
				}),
				ca = function () {
					3 == d.loadMode && (d.loadMode = 2), ba()
				},
				da = function () {
					if (!l) {
						if (f.now() - p < 999) return void k(da, 999);
						l = !0, d.loadMode = 3, V(), j("scroll", ca, !0)
					}
				};
			return {
				_: function () {
					p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, {
						childList: !0,
						subtree: !0,
						attributes: !0
					}) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (a) {
						b[h](a, V, !0)
					}), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V()
				},
				checkElems: V,
				unveil: aa,
				_aLSL: ca
			}
		}(),
		E = function () {
			var a, c = A(function (a, b, c, d) {
					var e, f, g;
					if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
						for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
					c.detail.dataAttr || w(a, c.detail)
				}),
				e = function (a, b, d) {
					var e, f = a.parentNode;
					f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
						width: d,
						dataAttr: !!b
					}), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
				},
				f = function () {
					var b, c = a.length;
					if (c)
						for (b = 0; b < c; b++) e(a[b])
				},
				g = C(f);
			return {
				_: function () {
					a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
				},
				checkElems: g,
				updateElem: e
			}
		}(),
		F = function () {
			!F.i && b.getElementsByClassName && (F.i = !0, E._(), D._())
		};
	return k(function () {
		d.init && F()
	}), c = {
		cfg: d,
		autoSizer: E,
		loader: D,
		init: F,
		uP: w,
		aC: s,
		rC: t,
		hC: r,
		fire: v,
		gW: y,
		rAF: z
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/jquery.validate.min.js?157001939022257";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	a.extend(a.fn, {
		
		valid: function () {
			var b, c;
			return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
				b = c.element(this) && b
			})), b
		},
		removeAttrs: function (b) {
			var c = {},
				d = this;
			return a.each(b.split(/\s/), function (a, b) {
				c[b] = d.attr(b), d.removeAttr(b)
			}), c
		},
		rules: function (b, c) {
			var d, e, f, g, h, i, j = this[0];
			if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
				case "add":
					a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
					break;
				case "remove":
					return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
						i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
					}), i) : (delete e[j.name], f)
			}
			return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
				required: h
			}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
				remote: h
			})), g
		}
	}), a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		},
		filled: function (b) {
			return !!a.trim("" + a(b).val())
		},
		unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (a, b) {
				(9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					var c = a.data(this[0].form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function (b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function (b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function (b) {
				var c = this.clean(b),
					d = this.validationTargetFor(c),
					e = !0;
				return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
			},
			showErrors: function (b) {
				if (b) {
					a.extend(this.errorMap, b), this.errorList = [];
					for (var c in b) this.errorList.push({
						message: b[c],
						element: this.findByName(c)[0]
					});
					this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (a) {
				var b, c = 0;
				for (b in a) c++;
				return c
			},
			hideErrors: function () {
				this.hideThese(this.toHide)
			},
			hideThese: function (a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (b) {}
			},
			findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function () {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function () {
					return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
				})
			},
			clean: function (b) {
				return a(b)[0]
			},
			errors: function () {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			reset: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function (b) {
				var c, d = a(b),
					e = b.type;
				return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f = a(b).rules(),
					g = a.map(f, function (a, b) {
						return b
					}).length,
					h = !1,
					i = this.elementValue(b);
				for (d in f) {
					e = {
						method: d,
						parameters: f[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
							h = !0;
							continue
						}
						if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (j) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
					}
				}
				if (!h) return this.objectLength(f) && this.successList.push(b), !0
			},
			customDataMessage: function (b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function () {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a];
				return void 0
			},
			defaultMessage: function (b, c) {
				return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
			},
			formatAndAdd: function (b, c) {
				var d = this.defaultMessage(b, c.method),
					e = /\$?\{(\d+)\}/g;
				"function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
					message: d,
					element: b,
					method: c.method
				}), this.errorMap[b.name] = d, this.submitted[b.name] = d
			},
			addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function () {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (b, c) {
				var d, e, f, g = this.errorsFor(b),
					h = this.idOrName(b),
					i = a(b).attr("aria-describedby");
				g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
					c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
				}))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
			},
			errorsFor: function (b) {
				var c = this.idOrName(b),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function (b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function (b) {
				return a(this.currentForm).find("[name='" + b + "']")
			},
			getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function (a, b) {
				return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
			},
			dependTypes: {
				"boolean": function (a) {
					return a
				},
				string: function (b, c) {
					return !!a(b, c.form).length
				},
				"function": function (a, b) {
					return a(b)
				}
			},
			optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function (a) {
				this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
			},
			stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (b) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		attributeRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (b) {
			var c, d, e = {},
				f = a(b);
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
			return e
		},
		staticRules: function (b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
			},
			email: function (a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function (a, b) {
				return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
			},
			date: function (a, b) {
				/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/
				var check = false,
					re = new RegExp((typeof (VALIDATE_DATE_MASK) !== 'undefined' ? VALIDATE_DATE_MASK : '^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),
					adata, gg, mm, aaaa, xdata;
				if (re.test(a)) {
					adata = a.split('.');
					if (adata.length === 1) {
						adata = a.split('-');
						if (adata.length === 1) {
							adata = a.split(' ');
							if (adata.length === 1) {
								adata = a.split('/');
								if (adata.length === 1) {
									adata = a.split(':');
								}
							}
						}
					}
					gg = parseInt(adata[0], 10);
					mm = parseInt(adata[1], 10);
					aaaa = parseInt(adata[2], 10);
					xdata = new Date(aaaa, mm - 1, gg, 12, 0, 0, 0);
					if ((xdata.getUTCFullYear() === aaaa) && (xdata.getUTCMonth() === mm - 1) && (xdata.getUTCDate() === gg)) {
						check = true;
					} else {
						check = false;
					}
				} else {
					check = false;
				}
				return this.optional(b) || check;
			},
			dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function (a, b) {
				return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			creditcard: function (a, b) {
				if (this.optional(b)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(a)) return !1;
				var c, d, e = 0,
					f = 0,
					g = !1;
				if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
				for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
				return e % 10 === 0
			},
			minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || d >= e
			},
			rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function (a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function (a, b, c) {
				return this.optional(b) || c >= a
			},
			range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			},
			remote: function (b, c, d) {
				if (this.optional(c)) return "dependency-mismatch";
				var e, f, g = this.previousValue(c);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
					url: d
				} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
					url: d,
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: f,
					context: e.currentForm,
					success: function (d) {
						var f, h, i, j = d === !0 || "true" === d;
						e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	}), a.format = function () {
		throw "$.format has been deprecated. Please use $.validator.format instead."
	};
	var b, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function (d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	}), a.extend(a.fn, {
		validateDelegate: function (b, c, d) {
			return this.bind(c, function (c) {
				var e = a(c.target);
				return e.is(b) ? d.apply(e, arguments) : void 0
			})
		}
	})
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js?157001939070933";s:6:"source";s:62:"/bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e) {
	function t(n) {
		if (i[n]) return i[n].exports;
		var a = i[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
	}
	var i = {};
	t.m = e, t.c = i, t.d = function (e, i, n) {
		t.o(e, i) || Object.defineProperty(e, i, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, t.n = function (e) {
		var i = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(i, "a", i), i
	}, t.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 3)
}([function (e, t, i) {
	"use strict";
	var n, a, r;
	"function" == typeof Symbol && Symbol.iterator, a = [i(2)], void 0 !== (r = "function" == typeof (n = function (e) {
		return e
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t, i) {
	"use strict";
	var n, a, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	a = [i(0), i(5), i(6)], void 0 !== (r = "function" == typeof (n = function (e, t, i, n) {
		function a(t, i, o) {
			if (!(this instanceof a)) return new a(t, i, o);
			this.el = n, this.events = {}, this.maskset = n, this.refreshValue = !1, !0 !== o && (e.isPlainObject(t) ? i = t : (i = i || {}, t && (i.alias = t)), this.opts = e.extend(!0, {}, this.defaults, i), this.noMasksCache = i && i.definitions !== n, this.userOptions = i || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, i, this.opts))
		}

		function r(t, i, o) {
			var s = a.prototype.aliases[t];
			return s ? (s.alias && r(s.alias, n, o), e.extend(!0, o, s), e.extend(!0, o, i), !0) : (null === o.mask && (o.mask = t), !1)
		}

		function s(t, i) {
			function r(t, r, o) {
				var s = !1;
				if (null !== t && "" !== t || ((s = null !== o.regex) ? t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, t = ".*")), 1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), o.repeat > 0 || "*" === o.repeat || "+" === o.repeat) {
					var l = "*" === o.repeat ? 0 : "+" === o.repeat ? 1 : o.repeat;
					t = o.groupmarker[0] + t + o.groupmarker[1] + o.quantifiermarker[0] + l + "," + o.repeat + o.quantifiermarker[1]
				}
				var u, c = s ? "regex_" + o.regex : o.numericInput ? t.split("").reverse().join("") : t;
				return a.prototype.masksCache[c] === n || !0 === i ? (u = {
					mask: t,
					maskToken: a.prototype.analyseMask(t, s, o),
					validPositions: {},
					_buffer: n,
					buffer: n,
					tests: {},
					excludes: {},
					metadata: r,
					maskLength: n
				}, !0 !== i && (a.prototype.masksCache[c] = u, u = e.extend(!0, {}, a.prototype.masksCache[c]))) : u = e.extend(!0, {}, a.prototype.masksCache[c]), u
			}
			if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
				if (t.mask.length > 1) {
					if (null === t.keepStatic) {
						t.keepStatic = "auto";
						for (var o = 0; o < t.mask.length; o++)
							if (t.mask[o].charAt(0) !== t.mask[0].charAt(0)) {
								t.keepStatic = !0;
								break
							}
					}
					var s = t.groupmarker[0];
					return e.each(t.isRTL ? t.mask.reverse() : t.mask, function (i, a) {
						s.length > 1 && (s += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]), a.mask === n || e.isFunction(a.mask) ? s += a : s += a.mask
					}), r(s += t.groupmarker[1], t.mask, t)
				}
				t.mask = t.mask.pop()
			}
			return t.mask && t.mask.mask !== n && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t)
		}

		function l(e) {
			var t = i.createElement("input"),
				n = "on" + e,
				a = n in t;
			return a || (t.setAttribute(n, "return;"), a = "function" == typeof t[n]), t = null, a
		}

		function u(r, s, c) {
			function d(e, t, i) {
				t = t || 0;
				var a, r, o, s = [],
					l = 0,
					u = v();
				do {
					!0 === e && h().validPositions[l] ? (r = (o = h().validPositions[l]).match, a = o.locator.slice(), s.push(!0 === i ? o.input : !1 === i ? r.nativeDef : N(l, r))) : (r = (o = P(l, a, l - 1)).match, a = o.locator.slice(), (!1 === c.jitMasking || l < u || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > l) && s.push(!1 === i ? r.nativeDef : N(l, r))), "auto" === c.keepStatic && r.newBlockMarker && null !== r.fn && (c.keepStatic = l - 1), l++
				} while (($ === n || l < $) && (null !== r.fn || "" !== r.def) || t > l);
				return "" === s[s.length - 1] && s.pop(), !1 === i && h().maskLength !== n || (h().maskLength = l - 1), s
			}

			function h() {
				return s
			}

			function g(e) {
				var t = h();
				t.buffer = n, !0 !== e && (t.validPositions = {}, t.p = 0)
			}

			function v(e, t, i) {
				var a = -1,
					r = -1,
					o = i || h().validPositions;
				e === n && (e = -1);
				for (var s in o) {
					var l = parseInt(s);
					o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l))
				}
				return -1 !== a && e - a > 1 || r < e ? a : r
			}

			function k(t, i, a, r) {
				var o, s = t,
					l = e.extend(!0, {}, h().validPositions),
					u = !1;
				for (h().p = t, o = i - 1; o >= s; o--) h().validPositions[o] !== n && (!0 !== a && (!h().validPositions[o].match.optionality && function (e) {
					var t = h().validPositions[e];
					if (t !== n && null === t.match.fn) {
						var i = h().validPositions[e - 1],
							a = h().validPositions[e + 1];
						return i !== n && a !== n
					}
					return !1
				}(o) || !1 === c.canClearPosition(h(), o, v(n, !0), r, c)) || delete h().validPositions[o]);
				for (g(!0), o = s + 1; o <= v();) {
					for (; h().validPositions[s] !== n;) s++;
					if (o < s && (o = s + 1), h().validPositions[o] === n && j(o)) o++;
					else {
						var p = P(o);
						!1 === u && l[s] && l[s].match.def === p.match.def ? (h().validPositions[s] = e.extend(!0, {}, l[s]), h().validPositions[s].input = p.input, delete h().validPositions[o], o++) : A(s, p.match.def) ? !1 !== _(s, p.input || N(o), !0) && (delete h().validPositions[o], o++, u = !0) : j(o) || (o++, s--), s++
					}
				}
				if (!0 !== r)
					for (o = v(-1, !0); h().validPositions[o] && !0 === h().validPositions[o].generatedInput;) delete h().validPositions[o--];
				g(!0)
			}

			function y(e, t, i) {
				for (var a, r = S(e = e > 0 ? e - 1 : 0), o = r.alternation !== n ? r.locator[r.alternation].toString().split(",") : [], s = 0; s < t.length && (!((a = t[s]).match && (c.greedy && !0 !== a.match.optionalQuantifier || (!1 === a.match.optionality || !1 === a.match.newBlockMarker) && !0 !== a.match.optionalQuantifier) && (r.alternation === n || r.alternation !== a.alternation || a.locator[r.alternation] !== n && D(a.locator[r.alternation].toString().split(","), o))) || !0 === i && (null !== a.match.fn || /[0-9a-bA-Z]/.test(a.match.def))); s++);
				return a
			}

			function b(e) {
				var t = e.locator[e.alternation];
				return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), t !== n ? t.toString() : ""
			}

			function x(e, t) {
				for (var i = (e.alternation != n ? e.mloc[b(e)] : e.locator).join(""); i.length < t;) i += "0";
				return i
			}

			function P(e, t, i) {
				return h().validPositions[e] || y(e, C(e, t ? t.slice() : t, i))
			}

			function S(e) {
				return h().validPositions[e] ? h().validPositions[e] : C(e)[0]
			}

			function A(e, t) {
				for (var i = !1, n = C(e), a = 0; a < n.length; a++)
					if (n[a].match && n[a].match.def === t) {
						i = !0;
						break
					} return i
			}

			function C(t, i, a) {
				function r(i, a, s, l) {
					function u(s, l, p) {
						function m(t, i) {
							var n = 0 === e.inArray(t, i.matches);
							return n || e.each(i.matches, function (e, a) {
								if (!0 === a.isQuantifier && (n = m(t, i.matches[e - 1]))) return !1
							}), n
						}

						function k(t, i, a) {
							var r, o;
							if ((h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
									if (t.mloc[i]) return r = t, !1;
									var s = a !== n ? a : t.alternation,
										l = t.locator[s] !== n ? t.locator[s].toString().indexOf(i) : -1;
									(o === n || l < o) && -1 !== l && (r = t, o = l)
								}), r) {
								var s = r.locator[r.alternation];
								return (r.mloc[i] || r.mloc[s] || r.locator).slice((a !== n ? a : r.alternation) + 1)
							}
							return a !== n ? k(t, i) : n
						}

						function y(e, t) {
							function i(e) {
								for (var t, i, n = [], a = 0, r = e.length; a < r; a++)
									if ("-" === e.charAt(a))
										for (i = e.charCodeAt(a + 1); ++t < i;) n.push(String.fromCharCode(t));
									else t = e.charCodeAt(a), n.push(e.charAt(a));
								return n.join("")
							}
							return c.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== i(t.match.def.replace(/[\[\]]/g, "")).indexOf(i(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef
						}

						function b(e, t) {
							if (t === n || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
								e.mloc = e.mloc || {};
								var i = e.locator[e.alternation];
								if (i !== n) {
									if ("string" == typeof i && (i = i.split(",")[0]), e.mloc[i] === n && (e.mloc[i] = e.locator.slice()), t !== n) {
										for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === n && (e.mloc[a] = t.mloc[a]);
										e.locator[e.alternation] = Object.keys(e.mloc).join(",")
									}
									return !0
								}
								e.alternation = n
							}
							return !1
						}
						if (f > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
						if (f === t && s.matches === n) return d.push({
							match: s,
							locator: l.reverse(),
							cd: v,
							mloc: {}
						}), !0;
						if (s.matches !== n) {
							if (s.isGroup && p !== s) {
								if (s = u(i.matches[e.inArray(s, i.matches) + 1], l)) return !0
							} else if (s.isOptional) {
								var x = s;
								if (s = r(s, a, l, p)) {
									if (!m(o = d[d.length - 1].match, x)) return !0;
									g = !0, f = t
								}
							} else if (s.isAlternator) {
								var P, S = s,
									A = [],
									C = d.slice(),
									M = l.length,
									E = a.length > 0 ? a.shift() : -1;
								if (-1 === E || "string" == typeof E) {
									var w, D = f,
										O = a.slice(),
										_ = [];
									if ("string" == typeof E) _ = E.split(",");
									else
										for (w = 0; w < S.matches.length; w++) _.push(w.toString());
									if (h().excludes[t]) {
										for (var j = _.slice(), F = 0, T = h().excludes[t].length; F < T; F++) _.splice(_.indexOf(h().excludes[t][F].toString()), 1);
										0 === _.length && (h().excludes[t] = n, _ = j)
									}(!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (_ = _.slice(0, 1));
									for (var R = 0; R < _.length; R++) {
										w = parseInt(_[R]), d = [], a = k(f, w, M) || O.slice(), S.matches[w] && u(S.matches[w], [w].concat(l), p) && (s = !0), P = d.slice(), f = D, d = [];
										for (var N = 0; N < P.length; N++) {
											var G = P[N],
												B = !1;
											G.alternation = G.alternation || M, b(G);
											for (var I = 0; I < A.length; I++) {
												var L = A[I];
												if ("string" != typeof E || G.alternation !== n && -1 !== e.inArray(G.locator[G.alternation].toString(), _)) {
													if (G.match.nativeDef === L.match.nativeDef) {
														B = !0, b(L, G);
														break
													}
													if (y(G, L)) {
														b(G, L) && (B = !0, A.splice(A.indexOf(L), 0, G));
														break
													}
													if (y(L, G)) {
														b(L, G);
														break
													}
													if (z = L, null === (U = G).match.fn && null !== z.match.fn && z.match.fn.test(U.match.def, h(), t, !1, c, !1)) {
														b(G, L) && (B = !0, A.splice(A.indexOf(L), 0, G));
														break
													}
												}
											}
											B || A.push(G)
										}
									}
									d = C.concat(A), f = t, g = d.length > 0, s = A.length > 0, a = O.slice()
								} else s = u(S.matches[E] || i.matches[E], [E].concat(l), p);
								if (s) return !0
							} else if (s.isQuantifier && p !== i.matches[e.inArray(s, i.matches) - 1])
								for (var H = s, V = a.length > 0 ? a.shift() : 0; V < (isNaN(H.quantifier.max) ? V + 1 : H.quantifier.max) && f <= t; V++) {
									var K = i.matches[e.inArray(H, i.matches) - 1];
									if (s = u(K, [V].concat(l), K)) {
										if ((o = d[d.length - 1].match).optionalQuantifier = V > H.quantifier.min - 1, m(o, K)) {
											if (V > H.quantifier.min - 1) {
												g = !0, f = t;
												break
											}
											return !0
										}
										return !0
									}
								} else if (s = r(s, a, l, p)) return !0
						} else f++;
						var U, z
					}
					for (var p = a.length > 0 ? a.shift() : 0; p < i.matches.length; p++)
						if (!0 !== i.matches[p].isQuantifier) {
							var m = u(i.matches[p], [p].concat(s), l);
							if (m && f === t) return m;
							if (f > t) break
						}
				}
				var o, s, l, u, p = h().maskToken,
					f = i ? a : 0,
					m = i ? i.slice() : [0],
					d = [],
					g = !1,
					v = i ? i.join("") : "";
				if (t > -1) {
					if (i === n) {
						for (var k, b = t - 1;
							(k = h().validPositions[b] || h().tests[b]) === n && b > -1;) b--;
						k !== n && b > -1 && (s = b, l = k, u = [], e.isArray(l) || (l = [l]), l.length > 0 && (l[0].alternation === n ? 0 === (u = y(s, l.slice()).locator.slice()).length && (u = l[0].locator.slice()) : e.each(l, function (e, t) {
							if ("" !== t.def)
								if (0 === u.length) u = t.locator.slice();
								else
									for (var i = 0; i < u.length; i++) t.locator[i] && -1 === u[i].toString().indexOf(t.locator[i]) && (u[i] += "," + t.locator[i])
						})), v = (m = u).join(""), f = b)
					}
					if (h().tests[t] && h().tests[t][0].cd === v) return h().tests[t];
					for (var x = m.shift(); x < p.length && !(r(p[x], m, [x]) && f === t || f > t); x++);
				}
				return (0 === d.length || g) && d.push({
					match: {
						fn: null,
						optionality: !0,
						casing: null,
						def: "",
						placeholder: ""
					},
					locator: [],
					mloc: {},
					cd: v
				}), i !== n && h().tests[t] ? e.extend(!0, [], d) : (h().tests[t] = e.extend(!0, [], d), h().tests[t])
			}

			function M() {
				return h()._buffer === n && (h()._buffer = d(!1, 1), h().buffer === n && (h().buffer = h()._buffer.slice())), h()._buffer
			}

			function E(e) {
				return h().buffer !== n && !0 !== e || (h().buffer = d(!0, v(), !0)), h().buffer
			}

			function w(e, t, i) {
				var a, r;
				if (!0 === e) g(), e = 0, t = i.length;
				else
					for (a = e; a < t; a++) delete h().validPositions[a];
				for (r = e, a = e; a < t; a++)
					if (g(!0), i[a] !== c.skipOptionalPartCharacter) {
						var o = _(r, i[a], !0, !0);
						!1 !== o && (g(!0), r = o.caret !== n ? o.caret : o.pos + 1)
					}
			}

			function D(t, i, a) {
				for (var r, o = c.greedy ? i : i.slice(0, 1), s = !1, l = a !== n ? a.split(",") : [], u = 0; u < l.length; u++) - 1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
				for (var p = 0; p < t.length; p++)
					if (-1 !== e.inArray(t[p], o)) {
						s = !0;
						break
					} return s
			}

			function O(t, i, a, r, o) {
				var s, l, u, p, f, m, d, k = e.extend(!0, {}, h().validPositions),
					y = !1,
					x = o !== n ? o : v();
				if (-1 === x && o === n) l = (p = S(s = 0)).alternation;
				else
					for (; x >= 0; x--)
						if ((u = h().validPositions[x]) && u.alternation !== n) {
							if (p && p.locator[u.alternation] !== u.locator[u.alternation]) break;
							s = x, l = h().validPositions[s].alternation, p = u
						} if (l !== n) {
					d = parseInt(s), h().excludes[d] = h().excludes[d] || [], !0 !== t && h().excludes[d].push(b(p));
					var P = [],
						A = 0;
					for (f = d; f < v(n, !0) + 1; f++)(m = h().validPositions[f]) && !0 !== m.generatedInput && /[0-9a-bA-Z]/.test(m.input) ? P.push(m.input) : f < t && A++, delete h().validPositions[f];
					for (; h().excludes[d] && h().excludes[d].length < 10;) {
						var C = -1 * A,
							M = P.slice();
						for (h().tests[d] = n, g(!0), y = !0; M.length > 0;) {
							var E = M.shift();
							if (E !== c.skipOptionalPartCharacter && !(y = _(v(n, !0) + 1, E, !1, r, !0))) break
						}
						if (y && i !== n) {
							var w = v(t) + 1;
							for (f = d; f < v() + 1; f++)((m = h().validPositions[f]) === n || null == m.match.fn) && f < t + C && C++;
							y = _((t += C) > w ? w : t, i, a, r, !0)
						}
						if (y) break;
						if (g(), p = S(d), h().validPositions = e.extend(!0, {}, k), !h().excludes[d]) {
							y = O(t, i, a, r, d - 1);
							break
						}
						var D = b(p);
						if (-1 !== h().excludes[d].indexOf(D)) {
							y = O(t, i, a, r, d - 1);
							break
						}
						for (h().excludes[d].push(D), f = d; f < v(n, !0) + 1; f++) delete h().validPositions[f]
					}
				}
				return h().excludes[d] = n, y
			}

			function _(t, i, r, o, s, l) {
				function u(e) {
					return X ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1
				}

				function p(i, r, s) {
					var l = !1;
					return e.each(C(i), function (p, f) {
						var d = f.match;
						if (E(!0), !1 !== (l = null != d.fn ? d.fn.test(r, h(), i, s, c, u(t)) : (r === d.def || r === c.skipOptionalPartCharacter) && "" !== d.def && {
								c: N(i, d, !0) || d.def,
								pos: i
							})) {
							var y = l.c !== n ? l.c : r;
							y = y === c.skipOptionalPartCharacter && null === d.fn ? N(i, d, !0) || d.def : y;
							var b = i,
								x = E();
							if (l.remove !== n && (e.isArray(l.remove) || (l.remove = [l.remove]), e.each(l.remove.sort(function (e, t) {
									return t - e
								}), function (e, t) {
									k(t, t + 1, !0)
								})), l.insert !== n && (e.isArray(l.insert) || (l.insert = [l.insert]), e.each(l.insert.sort(function (e, t) {
									return e - t
								}), function (e, t) {
									_(t.pos, t.c, !0, o)
								})), l.refreshFromBuffer) {
								var P = l.refreshFromBuffer;
								if (w(!0 === P ? P : P.start, P.end, x), l.pos === n && l.c === n) return l.pos = v(), !1;
								if ((b = l.pos !== n ? l.pos : i) !== i) return l = e.extend(l, _(b, y, !0, o)), !1
							} else if (!0 !== l && l.pos !== n && l.pos !== i && (b = l.pos, w(i, b, E().slice()), b !== i)) return l = e.extend(l, _(b, y, !0)), !1;
							return (!0 === l || l.pos !== n || l.c !== n) && (p > 0 && g(!0), m(b, e.extend({}, f, {
								input: function (t, i, n) {
									switch (c.casing || i.casing) {
										case "upper":
											t = t.toUpperCase();
											break;
										case "lower":
											t = t.toLowerCase();
											break;
										case "title":
											var r = h().validPositions[n - 1];
											t = 0 === n || r && r.input === String.fromCharCode(a.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
											break;
										default:
											if (e.isFunction(c.casing)) {
												var o = Array.prototype.slice.call(arguments);
												o.push(h().validPositions), t = c.casing.apply(this, o)
											}
									}
									return t
								}(y, d, b)
							}), o, u(t)) || (l = !1), !1)
						}
					}), l
				}

				function f(t, i, a) {
					var r;
					if (t === n)
						for (t = i - 1; t > 0 && !h().validPositions[t]; t--);
					for (var o = t; o < i; o++)
						if (h().validPositions[o] === n && !j(o, !0)) {
							var s = 0 == o ? S(o) : h().validPositions[o - 1];
							if (s) {
								var l, u = x(s),
									c = C(o).slice(),
									p = n,
									f = S(o);
								if ("" === c[c.length - 1].match.def && c.pop(), e.each(c, function (e, t) {
										l = x(t, u.length);
										var i = Math.abs(l - u);
										(p === n || i < p) && null === t.match.fn && !0 !== t.match.optionality && !0 !== t.match.optionalQuantifier && (p = i, f = t)
									}), (f = e.extend({}, f, {
										input: N(o, f.match, !0) || f.match.def
									})).generatedInput = !0, m(o, f, !0), !0 !== a) {
									var d = h().validPositions[i].input;
									h().validPositions[i] = n, r = _(i, d, !0, !0)
								}
							}
						} return r
				}

				function m(t, i, a, r) {
					if (r || c.insertMode && h().validPositions[t] !== n && a === n) {
						var o, s = e.extend(!0, {}, h().validPositions),
							l = v(n, !0);
						for (o = t; o <= l; o++) delete h().validPositions[o];
						h().validPositions[t] = e.extend(!0, {}, i);
						var u, p = !0,
							m = h().validPositions,
							d = !1;
						for (o = u = t; o <= l; o++) {
							var k = s[o];
							if (k !== n)
								for (var y = u;
									"" !== S(y).match.def && (null === k.match.fn && m[o] && (!0 === m[o].match.optionalQuantifier || !0 === m[o].match.optionality) || null != k.match.fn);) {
									if (y++, !1 === d && s[y] && s[y].match.def === k.match.def) h().validPositions[y] = e.extend(!0, {}, s[y]), h().validPositions[y].input = k.input, f(n, y, !0), u = y, p = !0;
									else if (A(y, k.match.def)) {
										var b = _(y, k.input, !0, !0);
										p = !1 !== b, u = b.caret || b.insert ? v() : y, d = !0
									} else if (!(p = !0 === k.generatedInput) && "" === S(y).match.def) break;
									if (p) break
								}
							if (!p) break
						}
						if (!p) return h().validPositions = e.extend(!0, {}, s), g(!0), !1
					} else h().validPositions[t] = e.extend(!0, {}, i);
					return g(!0), !0
				}
				r = !0 === r;
				var d = t;
				t.begin !== n && (d = X && !u(t) ? t.end : t.begin);
				var y = !0,
					b = e.extend(!0, {}, h().validPositions);
				if (e.isFunction(c.preValidation) && !r && !0 !== o && !0 !== l && (y = c.preValidation(E(), d, i, u(t), c)), !0 === y) {
					if (f(n, d, !0), u(t) && (K(0, a.keyCode.DELETE, t, !0, !0), d = h().p), ($ === n || d < $) && (y = p(d, i, r), (!r || !0 === o) && !1 === y && !0 !== l)) {
						var P = h().validPositions[d];
						if (!P || null !== P.match.fn || P.match.def !== i && i !== c.skipOptionalPartCharacter) {
							if ((c.insertMode || h().validPositions[F(d)] === n) && !j(d, !0))
								for (var M = d + 1, D = F(d); M <= D; M++)
									if (!1 !== (y = p(M, i, r))) {
										y = f(d, y.pos !== n ? y.pos : M) || y, d = M;
										break
									}
						} else y = {
							caret: F(d)
						}
					}!1 !== y || null === c.keepStatic || !1 === c.keepStatic || r || !0 === s || (y = O(d, i, r, o)), !0 === y && (y = {
						pos: d
					})
				}
				if (e.isFunction(c.postValidation) && !1 !== y && !r && !0 !== o && !0 !== l) {
					var T = c.postValidation(E(!0), y, c);
					if (T !== n) {
						if (T.refreshFromBuffer && T.buffer) {
							var R = T.refreshFromBuffer;
							w(!0 === R ? R : R.start, R.end, T.buffer)
						}
						y = !0 === T ? y : T
					}
				}
				return y && y.pos === n && (y.pos = d), !1 !== y && !0 !== l || (g(!0), h().validPositions = e.extend(!0, {}, b)), y
			}

			function j(e, t) {
				var i = P(e).match;
				if ("" === i.def && (i = S(e).match), null != i.fn) return i.fn;
				if (!0 !== t && e > -1) {
					var n = C(e);
					return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)
				}
				return !1
			}

			function F(e, t) {
				for (var i = e + 1;
					"" !== S(i).match.def && (!0 === t && (!0 !== S(i).match.newBlockMarker || !j(i)) || !0 !== t && !j(i));) i++;
				return i
			}

			function T(e, t) {
				var i, n = e;
				if (n <= 0) return 0;
				for (; --n > 0 && (!0 === t && !0 !== S(n).match.newBlockMarker || !0 !== t && !j(n) && ((i = C(n)).length < 2 || 2 === i.length && "" === i[1].match.def)););
				return n
			}

			function R(t, i, a, r, o) {
				if (r && e.isFunction(c.onBeforeWrite)) {
					var s = c.onBeforeWrite.call(J, r, i, a, c);
					if (s) {
						if (s.refreshFromBuffer) {
							var l = s.refreshFromBuffer;
							w(!0 === l ? l : l.start, l.end, s.buffer || i), i = E(!0)
						}
						a !== n && (a = s.caret !== n ? s.caret : a)
					}
				}
				t !== n && (t.inputmask._valueSet(i.join("")), a === n || r !== n && "blur" === r.type ? z(t, a, 0 === i.length) : I(t, a), !0 === o && (te = !0, e(t).trigger("input")))
			}

			function N(t, i, a) {
				if ((i = i || S(t).match).placeholder !== n || !0 === a) return e.isFunction(i.placeholder) ? i.placeholder(c) : i.placeholder;
				if (null === i.fn) {
					if (t > -1 && h().validPositions[t] === n) {
						var r, o = C(t),
							s = [];
						if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
							for (var l = 0; l < o.length; l++)
								if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === n || !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length)
					}
					return i.def
				}
				return c.placeholder.charAt(t % c.placeholder.length)
			}

			function G(t, i, r, o, s) {
				var l = o.slice(),
					u = "",
					p = -1,
					f = n;
				if (g(), r || !0 === c.autoUnmask) p = F(p);
				else {
					var m = M().slice(0, F(-1)).join(""),
						k = l.join("").match(new RegExp("^" + a.escapeRegex(m), "g"));
					k && k.length > 0 && (l.splice(0, k.length * m.length), p = F(p))
				} - 1 === p ? (h().p = F(p), p = 0) : h().p = p, e.each(l, function (i, a) {
					if (a !== n)
						if (h().validPositions[i] === n && l[i] === N(i) && j(i, !0) && !1 === _(i, l[i], !0, n, n, !0)) h().p++;
						else {
							var o = new e.Event("_checkval");
							o.which = a.charCodeAt(0), u += a;
							var s = v(n, !0),
								m = S(s),
								g = P(s + 1, m ? m.locator.slice() : n, s);
							if (y = p, b = u, -1 === d(!0, 0, !1).slice(y, F(y)).join("").indexOf(b) || j(y) || S(y).match.nativeDef !== b.charAt(0) && (" " !== S(y).match.nativeDef || S(y + 1).match.nativeDef !== b.charAt(0)) || r || c.autoUnmask) {
								var k = r ? i : null == g.match.fn && g.match.optionality && s + 1 < h().p ? s + 1 : h().p;
								(f = oe.keypressEvent.call(t, o, !0, !1, r, k)) && (p = k + 1, u = "")
							} else f = oe.keypressEvent.call(t, o, !0, !1, !0, s + 1);
							R(n, E(), f.forwardPosition, o, !1)
						} var y, b
				}), i && R(t, E(), f ? f.forwardPosition : n, s || new e.Event("checkval"), s && "input" === s.type)
			}

			function B(t) {
				if (t) {
					if (t.inputmask === n) return t.value;
					t.inputmask && t.inputmask.refreshValue && oe.setValueEvent.call(t)
				}
				var i = [],
					a = h().validPositions;
				for (var r in a) a[r].match && null != a[r].match.fn && i.push(a[r].input);
				var o = 0 === i.length ? "" : (X ? i.reverse() : i).join("");
				if (e.isFunction(c.onUnMask)) {
					var s = (X ? E().slice().reverse() : E()).join("");
					o = c.onUnMask.call(J, s, o, c)
				}
				return o
			}

			function I(a, r, o, s) {
				function l(e) {
					return !0 === s || !X || "number" != typeof e || c.greedy && "" === c.placeholder || (e = a.inputmask.__valueGet.call(a).length - e), e
				}
				var u;
				if (r === n) return a.setSelectionRange ? (r = a.selectionStart, o = a.selectionEnd) : t.getSelection ? (u = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== a && u.commonAncestorContainer !== a || (r = u.startOffset, o = u.endOffset) : i.selection && i.selection.createRange && (o = (r = 0 - (u = i.selection.createRange()).duplicate().moveStart("character", -a.inputmask._valueGet().length)) + u.text.length), {
					begin: l(r),
					end: l(o)
				};
				if (e.isArray(r) && (o = X ? r[0] : r[1], r = X ? r[1] : r[0]), r.begin !== n && (o = X ? r.begin : r.end, r = X ? r.end : r.begin), "number" == typeof r) {
					r = l(r), o = "number" == typeof (o = l(o)) ? o : r;
					var p = parseInt(((a.ownerDocument.defaultView || t).getComputedStyle ? (a.ownerDocument.defaultView || t).getComputedStyle(a, null) : a.currentStyle).fontSize) * o;
					if (a.scrollLeft = p > a.scrollWidth ? p : 0, !1 === c.insertMode && r === o && o++, a.inputmask.caretPos = {
							begin: r,
							end: o
						}, a.setSelectionRange) a.selectionStart = r, a.selectionEnd = o;
					else if (t.getSelection) {
						if (u = i.createRange(), a.firstChild === n || null === a.firstChild) {
							var f = i.createTextNode("");
							a.appendChild(f)
						}
						u.setStart(a.firstChild, r < a.inputmask._valueGet().length ? r : a.inputmask._valueGet().length), u.setEnd(a.firstChild, o < a.inputmask._valueGet().length ? o : a.inputmask._valueGet().length), u.collapse(!0);
						var m = t.getSelection();
						m.removeAllRanges(), m.addRange(u)
					} else a.createTextRange && ((u = a.createTextRange()).collapse(!0), u.moveEnd("character", o), u.moveStart("character", r), u.select());
					z(a, {
						begin: r,
						end: o
					})
				}
			}

			function L(t) {
				var i, a, r = E(),
					o = r.length,
					s = v(),
					l = {},
					u = h().validPositions[s],
					c = u !== n ? u.locator.slice() : n;
				for (i = s + 1; i < r.length; i++) c = (a = P(i, c, i - 1)).locator.slice(), l[i] = e.extend(!0, {}, a);
				var p = u && u.alternation !== n ? u.locator[u.alternation] : n;
				for (i = o - 1; i > s && ((a = l[i]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || p && (p !== l[i].locator[u.alternation] && null != a.match.fn || null === a.match.fn && a.locator[u.alternation] && D(a.locator[u.alternation].toString().split(","), p.toString().split(",")) && "" !== C(i)[0].def)) && r[i] === N(i, a.match); i--) o--;
				return t ? {
					l: o,
					def: l[o] ? l[o].match : n
				} : o
			}

			function H(e) {
				for (var t, i = L(), a = e.length, r = h().validPositions[v()]; i < a && !j(i, !0) && (t = r !== n ? P(i, r.locator.slice(""), r) : S(i)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || i + 1 === a && "" === (r !== n ? P(i + 1, r.locator.slice(""), r) : S(i + 1)).match.def);) i++;
				for (;
					(t = h().validPositions[i - 1]) && t && t.match.optionality && t.input === c.skipOptionalPartCharacter;) i--;
				return e.splice(i), e
			}

			function V(t) {
				if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
				if ("*" === c.repeat) return n;
				var i = !1,
					a = L(!0),
					r = T(a.l);
				if (a.def === n || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
					i = !0;
					for (var o = 0; o <= r; o++) {
						var s = P(o).match;
						if (null !== s.fn && h().validPositions[o] === n && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== N(o, s)) {
							i = !1;
							break
						}
					}
				}
				return i
			}

			function K(e, t, i, r, o) {
				if ((c.numericInput || X) && (t === a.keyCode.BACKSPACE ? t = a.keyCode.DELETE : t === a.keyCode.DELETE && (t = a.keyCode.BACKSPACE), X)) {
					var s = i.end;
					i.end = i.begin, i.begin = s
				}
				if (t === a.keyCode.BACKSPACE && (i.end - i.begin < 1 || !1 === c.insertMode) ? (i.begin = T(i.begin), h().validPositions[i.begin] !== n && h().validPositions[i.begin].input === c.groupSeparator && i.begin--) : t === a.keyCode.DELETE && i.begin === i.end && (i.end = j(i.end, !0) && h().validPositions[i.end] && h().validPositions[i.end].input !== c.radixPoint ? i.end + 1 : F(i.end) + 1, h().validPositions[i.begin] !== n && h().validPositions[i.begin].input === c.groupSeparator && i.end++), k(i.begin, i.end, !1, r), !0 !== r && null !== c.keepStatic && !1 !== c.keepStatic) {
					var l = O(!0);
					l && (i.begin = l.caret !== n ? l.caret : l.pos ? F(l.pos.begin ? l.pos.begin : l.pos) : v(-1, !0))
				}
				var u = v(i.begin, !0);
				if (u < i.begin || -1 === i.begin) h().p = F(u);
				else if (!0 !== r && (h().p = i.begin, !0 !== o))
					for (; h().p < u && h().validPositions[h().p] === n;) h().p++
			}

			function U(n) {
				var a = (n.ownerDocument.defaultView || t).getComputedStyle(n, null),
					r = i.createElement("div");
				r.style.width = a.width, r.style.textAlign = a.textAlign, q = i.createElement("div"), n.inputmask.colorMask = q, q.className = "im-colormask", n.parentNode.insertBefore(q, n), n.parentNode.removeChild(n), q.appendChild(r), q.appendChild(n), n.style.left = r.offsetLeft + "px", e(n).on("click", function (e) {
					return I(n, function (e) {
						var t, r = i.createElement("span");
						for (var o in a) isNaN(o) && -1 !== o.indexOf("font") && (r.style[o] = a[o]);
						r.style.textTransform = a.textTransform, r.style.letterSpacing = a.letterSpacing, r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto", r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", i.body.appendChild(r);
						var s, l = n.inputmask._valueGet(),
							u = 0;
						for (t = 0, s = l.length; t <= s; t++) {
							if (r.innerHTML += l.charAt(t) || "_", r.offsetWidth >= e) {
								var c = e - u,
									p = r.offsetWidth - e;
								r.innerHTML = l.charAt(t), t = (c -= r.offsetWidth / 3) < p ? t - 1 : t;
								break
							}
							u = r.offsetWidth
						}
						return i.body.removeChild(r), t
					}(e.clientX)), oe.clickEvent.call(n, [e])
				}), e(n).on("keydown", function (e) {
					e.shiftKey || !1 === c.insertMode || setTimeout(function () {
						z(n)
					}, 0)
				})
			}

			function z(e, t, a) {
				function r(e) {
					if (e === n && (e = ""), p || null !== o.fn && s.input !== n)
						if (p && (null !== o.fn && s.input !== n || "" === o.def)) {
							p = !1;
							var t = u.length;
							u[t - 1] = u[t - 1] + "</span>", u.push(e)
						} else u.push(e);
					else p = !0, u.push("<span class='im-static'>" + e)
				}
				var o, s, l, u = [],
					p = !1,
					f = 0;
				if (q !== n) {
					var m = E();
					if (t === n ? t = I(e) : t.begin === n && (t = {
							begin: t,
							end: t
						}), !0 !== a) {
						var d = v();
						do {
							h().validPositions[f] ? (s = h().validPositions[f], o = s.match, l = s.locator.slice(), r(m[f])) : (s = P(f, l, f - 1), o = s.match, l = s.locator.slice(), (!1 === c.jitMasking || f < d || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > f) && r(N(f, o))), f++
						} while (($ === n || f < $) && (null !== o.fn || "" !== o.def) || d > f || p);
						p && r(), i.activeElement === e && (u.splice(t.begin, 0, t.begin === t.end ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), u.splice(t.end + 1, 0, "</mark>"))
					}
					var g = q.getElementsByTagName("div")[0];
					g.innerHTML = u.join(""), e.inputmask.positionColorMask(e, g)
				}
			}
			s = s || this.maskset, c = c || this.opts;
			var Q, W, $, q, Z, J = this,
				Y = this.el,
				X = this.isRTL,
				ee = !1,
				te = !1,
				ie = !1,
				ne = !1,
				ae = !1,
				re = {
					on: function (t, i, r) {
						var o = function (t) {
							var i = this;
							if (i.inputmask === n && "FORM" !== this.nodeName) {
								var o = e.data(i, "_inputmask_opts");
								o ? new a(o).mask(i) : re.off(i)
							} else {
								if ("setvalue" === t.type || "FORM" === this.nodeName || !(i.disabled || i.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === a.keyCode.TAB))) {
									switch (t.type) {
										case "input":
											if (!0 === te) return te = !1, t.preventDefault();
											p && (ae = !0);
											break;
										case "keydown":
											ee = !1, te = !1;
											break;
										case "keypress":
											if (!0 === ee) return t.preventDefault();
											ee = !0;
											break;
										case "click":
											if (f || m) {
												var s = arguments;
												return setTimeout(function () {
													r.apply(i, s)
												}, 0), !1
											}
									}
									var l = r.apply(i, arguments);
									return ae && (ae = !1, setTimeout(function () {
										I(i, i.inputmask.caretPos, n, !0)
									})), !1 === l && (t.preventDefault(), t.stopPropagation()), l
								}
								t.preventDefault()
							}
						};
						t.inputmask.events[i] = t.inputmask.events[i] || [], t.inputmask.events[i].push(o), -1 !== e.inArray(i, ["submit", "reset"]) ? null !== t.form && e(t.form).on(i, o) : e(t).on(i, o)
					},
					off: function (t, i) {
						var n;
						t.inputmask && t.inputmask.events && (i ? (n = [])[i] = t.inputmask.events[i] : n = t.inputmask.events, e.each(n, function (i, n) {
							for (; n.length > 0;) {
								var a = n.pop(); - 1 !== e.inArray(i, ["submit", "reset"]) ? null !== t.form && e(t.form).off(i, a) : e(t).off(i, a)
							}
							delete t.inputmask.events[i]
						}))
					}
				},
				oe = {
					keydownEvent: function (t) {
						var i = this,
							n = e(i),
							r = t.keyCode,
							o = I(i);
						if (r === a.keyCode.BACKSPACE || r === a.keyCode.DELETE || m && r === a.keyCode.BACKSPACE_SAFARI || t.ctrlKey && r === a.keyCode.X && !l("cut")) t.preventDefault(), K(0, r, o), R(i, E(!0), h().p, t, i.inputmask._valueGet() !== E().join("")), i.inputmask._valueGet() === M().join("") ? n.trigger("cleared") : !0 === V(E()) && n.trigger("complete");
						else if (r === a.keyCode.END || r === a.keyCode.PAGE_DOWN) {
							t.preventDefault();
							var s = F(v());
							c.insertMode || s !== h().maskLength || t.shiftKey || s--, I(i, t.shiftKey ? o.begin : s, s, !0)
						} else r === a.keyCode.HOME && !t.shiftKey || r === a.keyCode.PAGE_UP ? (t.preventDefault(), I(i, 0, t.shiftKey ? o.begin : 0, !0)) : (c.undoOnEscape && r === a.keyCode.ESCAPE || 90 === r && t.ctrlKey) && !0 !== t.altKey ? (G(i, !0, !1, Q.split("")), n.trigger("click")) : r !== a.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && r === a.keyCode.TAB ? (!0 === t.shiftKey ? (null === S(o.begin).match.fn && (o.begin = F(o.begin)), o.end = T(o.begin, !0), o.begin = T(o.end, !0)) : (o.begin = F(o.begin, !0), o.end = F(o.begin, !0), o.end < h().maskLength && o.end--), o.begin < h().maskLength && (t.preventDefault(), I(i, o.begin, o.end))) : t.shiftKey || !1 === c.insertMode && (r === a.keyCode.RIGHT ? setTimeout(function () {
							var e = I(i);
							I(i, e.begin)
						}, 0) : r === a.keyCode.LEFT && setTimeout(function () {
							var e = I(i);
							I(i, X ? e.begin + 1 : e.begin - 1)
						}, 0)) : (c.insertMode = !c.insertMode, I(i, c.insertMode || o.begin !== h().maskLength ? o.begin : o.begin - 1));
						c.onKeyDown.call(this, t, E(), I(i).begin, c), ie = -1 !== e.inArray(r, c.ignorables)
					},
					keypressEvent: function (t, i, r, o, s) {
						var l = this,
							u = e(l),
							p = t.which || t.charCode || t.keyCode;
						if (!(!0 === i || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || ie)) return p === a.keyCode.ENTER && Q !== E().join("") && (Q = E().join(""), setTimeout(function () {
							u.trigger("change")
						}, 0)), !0;
						if (p) {
							46 === p && !1 === t.shiftKey && "" !== c.radixPoint && (p = c.radixPoint.charCodeAt(0));
							var f, m = i ? {
									begin: s,
									end: s
								} : I(l),
								d = String.fromCharCode(p);
							h().writeOutBuffer = !0;
							var v = _(m, d, o);
							if (!1 !== v && (g(!0), f = v.caret !== n ? v.caret : F(v.pos.begin ? v.pos.begin : v.pos), h().p = f), f = c.numericInput && v.caret === n ? T(f) : f, !1 !== r && (setTimeout(function () {
									c.onKeyValidation.call(l, p, v, c)
								}, 0), h().writeOutBuffer && !1 !== v)) {
								var k = E();
								R(l, k, f, t, !0 !== i), !0 !== i && setTimeout(function () {
									!0 === V(k) && u.trigger("complete")
								}, 0)
							}
							if (t.preventDefault(), i) return !1 !== v && (v.forwardPosition = f), v
						}
					},
					pasteEvent: function (i) {
						var n, a = this,
							r = i.originalEvent || i,
							o = e(a),
							s = a.inputmask._valueGet(!0),
							l = I(a);
						X && (n = l.end, l.end = l.begin, l.begin = n);
						var u = s.substr(0, l.begin),
							p = s.substr(l.end, s.length);
						if (u === (X ? M().reverse() : M()).slice(0, l.begin).join("") && (u = ""), p === (X ? M().reverse() : M()).slice(l.end).join("") && (p = ""), X && (n = u, u = p, p = n), t.clipboardData && t.clipboardData.getData) s = u + t.clipboardData.getData("Text") + p;
						else {
							if (!r.clipboardData || !r.clipboardData.getData) return !0;
							s = u + r.clipboardData.getData("text/plain") + p
						}
						var f = s;
						if (e.isFunction(c.onBeforePaste)) {
							if (!1 === (f = c.onBeforePaste.call(J, s, c))) return i.preventDefault();
							f || (f = s)
						}
						return G(a, !1, !1, X ? f.split("").reverse() : f.toString().split("")), R(a, E(), F(v()), i, Q !== E().join("")), !0 === V(E()) && o.trigger("complete"), i.preventDefault()
					},
					inputFallBackEvent: function (t) {
						var i, n, r = this,
							o = r.inputmask._valueGet();
						if (E().join("") !== o) {
							var s = I(r);
							if (n = s, "." === (i = o).charAt(n.begin - 1) && "" !== c.radixPoint && ((i = i.split(""))[n.begin - 1] = c.radixPoint.charAt(0), i = i.join("")), o = function (e, t, i) {
									if (f) {
										var n = t.replace(E().join(""), "");
										if (1 === n.length) {
											var a = t.split("");
											a.splice(i.begin, 0, n), t = a.join("")
										}
									}
									return t
								}(0, o = i, s), E().join("") !== o) {
								var l = E().join(""),
									u = o.length > l.length ? -1 : 0,
									p = o.substr(0, s.begin),
									m = o.substr(s.begin),
									d = l.substr(0, s.begin + u),
									h = l.substr(s.begin + u),
									g = s,
									v = "",
									k = !1;
								if (p !== d) {
									for (var y = (k = p.length >= d.length) ? p.length : d.length, b = 0; p.charAt(b) === d.charAt(b) && b < y; b++);
									k && (0 === u && (g.begin = b), v += p.slice(b, g.end))
								}
								if (m !== h && (m.length > h.length ? v += m.slice(0, 1) : m.length < h.length && (g.end += h.length - m.length, k || "" === c.radixPoint || "" !== m || p.charAt(g.begin + u - 1) !== c.radixPoint || (g.begin--, v = c.radixPoint))), R(r, E(), {
										begin: g.begin + u,
										end: g.end + u
									}), v.length > 0) e.each(v.split(""), function (t, i) {
									var n = new e.Event("keypress");
									n.which = i.charCodeAt(0), ie = !1, oe.keypressEvent.call(r, n)
								});
								else {
									g.begin === g.end - 1 && (g.begin = T(g.begin + 1), g.begin === g.end - 1 ? I(r, g.begin) : I(r, g.begin, g.end));
									var x = new e.Event("keydown");
									x.keyCode = a.keyCode.DELETE, oe.keydownEvent.call(r, x), !1 === c.insertMode && I(r, I(r).begin - 1)
								}
								t.preventDefault()
							}
						}
					},
					setValueEvent: function (t) {
						this.inputmask.refreshValue = !1;
						var i = this.inputmask._valueGet(!0);
						e.isFunction(c.onBeforeMask) && (i = c.onBeforeMask.call(J, i, c) || i), i = i.split(""), G(this, !0, !1, X ? i.reverse() : i), Q = E().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && this.inputmask._valueGet() === M().join("") && this.inputmask._valueSet("")
					},
					focusEvent: function (e) {
						var t = this,
							i = t.inputmask._valueGet();
						c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === i) && (t.inputmask._valueGet() !== E().join("") ? R(t, E(), F(v())) : !1 === ne && I(t, F(v()))), !0 === c.positionCaretOnTab && !1 === ne && oe.clickEvent.apply(t, [e, !0]), Q = E().join("")
					},
					mouseleaveEvent: function (e) {
						if (ne = !1, c.clearMaskOnLostFocus && i.activeElement !== this) {
							var t = E().slice(),
								n = this.inputmask._valueGet();
							n !== this.getAttribute("placeholder") && "" !== n && (-1 === v() && n === M().join("") ? t = [] : H(t), R(this, t))
						}
					},
					clickEvent: function (t, a) {
						var r = this;
						setTimeout(function () {
							if (i.activeElement === r) {
								var t = I(r);
								if (a && (X ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (c.positionCaretOnClick) {
									case "none":
										break;
									case "select":
										I(r, 0, E().length);
										break;
									case "radixFocus":
										if (function (t) {
												if ("" !== c.radixPoint) {
													var i = h().validPositions;
													if (i[t] === n || i[t].input === N(t)) {
														if (t < F(-1)) return !0;
														var a = e.inArray(c.radixPoint, E());
														if (-1 !== a) {
															for (var r in i)
																if (a < r && i[r].input !== N(r)) return !1;
															return !0
														}
													}
												}
												return !1
											}(t.begin)) {
											var o = E().join("").indexOf(c.radixPoint);
											I(r, c.numericInput ? F(o) : o);
											break
										}
										default:
											var s = t.begin,
												l = v(s, !0),
												u = F(l);
											if (s < u) I(r, j(s, !0) || j(s - 1, !0) ? s : F(s));
											else {
												var p = h().validPositions[l],
													f = P(u, p ? p.match.locator : n, p),
													m = N(u, f.match);
												if ("" !== m && E()[u] !== m && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !j(u, !0) && f.match.def === m) {
													var d = F(u);
													(s >= d || s === u) && (u = d)
												}
												I(r, u)
											}
								}
							}
						}, 0)
					},
					dblclickEvent: function (e) {
						var t = this;
						setTimeout(function () {
							I(t, 0, F(v()))
						}, 0)
					},
					cutEvent: function (n) {
						var r = e(this),
							o = I(this),
							s = n.originalEvent || n,
							l = t.clipboardData || s.clipboardData,
							u = X ? E().slice(o.end, o.begin) : E().slice(o.begin, o.end);
						l.setData("text", X ? u.reverse().join("") : u.join("")), i.execCommand && i.execCommand("copy"), K(0, a.keyCode.DELETE, o), R(this, E(), h().p, n, Q !== E().join("")), this.inputmask._valueGet() === M().join("") && r.trigger("cleared")
					},
					blurEvent: function (t) {
						var i = e(this);
						if (this.inputmask) {
							var a = this.inputmask._valueGet(),
								r = E().slice();
							"" === a && q === n || (c.clearMaskOnLostFocus && (-1 === v() && a === M().join("") ? r = [] : H(r)), !1 === V(r) && (setTimeout(function () {
								i.trigger("incomplete")
							}, 0), c.clearIncomplete && (g(), r = c.clearMaskOnLostFocus ? [] : M().slice())), R(this, r, n, t)), Q !== E().join("") && (Q = r.join(""), i.trigger("change"))
						}
					},
					mouseenterEvent: function (e) {
						ne = !0, i.activeElement !== this && c.showMaskOnHover && this.inputmask._valueGet() !== E().join("") && R(this, E())
					},
					submitEvent: function (e) {
						Q !== E().join("") && W.trigger("change"), c.clearMaskOnLostFocus && -1 === v() && Y.inputmask._valueGet && Y.inputmask._valueGet() === M().join("") && Y.inputmask._valueSet(""), c.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
							R(Y, E())
						}, 0))
					},
					resetEvent: function (e) {
						Y.inputmask.refreshValue = !0, setTimeout(function () {
							W.trigger("setvalue")
						}, 0)
					}
				};
			if (a.prototype.positionColorMask = function (e, t) {
					e.style.left = t.offsetLeft + "px"
				}, r !== n) switch (r.action) {
				case "isComplete":
					return Y = r.el, V(E());
				case "unmaskedvalue":
					return Y !== n && r.value === n || (Z = r.value, Z = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(J, Z, c) || Z).split(""), G(n, !1, !1, X ? Z.reverse() : Z), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(J, n, E(), 0, c)), B(Y);
				case "mask":
					! function (t) {
						re.off(t);
						var a = function (t, a) {
							var r = t.getAttribute("type"),
								s = "INPUT" === t.tagName && -1 !== e.inArray(r, a.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
							if (!s)
								if ("INPUT" === t.tagName) {
									var l = i.createElement("input");
									l.setAttribute("type", r), s = "text" === l.type, l = null
								} else s = "partial";
							return !1 !== s ? function (t) {
								function r() {
									return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== v() || !0 !== a.nullable ? i.activeElement === this && a.clearMaskOnLostFocus ? (X ? H(E().slice()).reverse() : H(E().slice())).join("") : l.call(this) : "" : l.call(this)
								}

								function s(t) {
									u.call(this, t), this.inputmask && e(this).trigger("setvalue")
								}
								var l, u, c;
								if (!t.inputmask.__valueGet) {
									if (!0 !== a.noValuePatching) {
										if (Object.getOwnPropertyDescriptor) {
											"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function (e) {
												return e.__proto__
											} : function (e) {
												return e.constructor.prototype
											});
											var p = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : n;
											p && p.get && p.set ? (l = p.get, u = p.set, Object.defineProperty(t, "value", {
												get: r,
												set: s,
												configurable: !0
											})) : "INPUT" !== t.tagName && (l = function () {
												return this.textContent
											}, u = function (e) {
												this.textContent = e
											}, Object.defineProperty(t, "value", {
												get: r,
												set: s,
												configurable: !0
											}))
										} else i.__lookupGetter__ && t.__lookupGetter__("value") && (l = t.__lookupGetter__("value"), u = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));
										t.inputmask.__valueGet = l, t.inputmask.__valueSet = u
									}
									t.inputmask._valueGet = function (e) {
										return X && !0 !== e ? l.call(this.el).split("").reverse().join("") : l.call(this.el)
									}, t.inputmask._valueSet = function (e, t) {
										u.call(this.el, null === e || e === n ? "" : !0 !== t && X ? e.split("").reverse().join("") : e)
									}, l === n && (l = function () {
										return this.value
									}, u = function (e) {
										this.value = e
									}, function (t) {
										if (e.valHooks && (e.valHooks[t] === n || !0 !== e.valHooks[t].inputmaskpatch)) {
											var i = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
													return e.value
												},
												r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
													return e.value = t, e
												};
											e.valHooks[t] = {
												get: function (e) {
													if (e.inputmask) {
														if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
														var t = i(e);
														return -1 !== v(n, n, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
													}
													return i(e)
												},
												set: function (t, i) {
													var n, a = e(t);
													return n = r(t, i), t.inputmask && a.trigger("setvalue"), n
												},
												inputmaskpatch: !0
											}
										}
									}(t.type), c = t, re.on(c, "mouseenter", function (t) {
										var i = e(this);
										this.inputmask._valueGet() !== E().join("") && i.trigger("setvalue")
									}))
								}
							}(t) : t.inputmask = n, s
						}(t, c);
						if (!1 !== a && (W = e(Y = t), -1 === ($ = Y !== n ? Y.maxLength : n) && ($ = n), !0 === c.colorMask && U(Y), p && ("inputmode" in Y && (Y.inputmode = c.inputmode, Y.setAttribute("inputmode", c.inputmode)), !0 === c.disablePredictiveText && ("autocorrect" in Y ? Y.autocorrect = !1 : (!0 !== c.colorMask && U(Y), Y.type = "password"))), !0 === a && (re.on(Y, "submit", oe.submitEvent), re.on(Y, "reset", oe.resetEvent), re.on(Y, "mouseenter", oe.mouseenterEvent), re.on(Y, "blur", oe.blurEvent), re.on(Y, "focus", oe.focusEvent), re.on(Y, "mouseleave", oe.mouseleaveEvent), !0 !== c.colorMask && re.on(Y, "click", oe.clickEvent), re.on(Y, "dblclick", oe.dblclickEvent), re.on(Y, "paste", oe.pasteEvent), re.on(Y, "dragdrop", oe.pasteEvent), re.on(Y, "drop", oe.pasteEvent), re.on(Y, "cut", oe.cutEvent), re.on(Y, "complete", c.oncomplete), re.on(Y, "incomplete", c.onincomplete), re.on(Y, "cleared", c.oncleared), p || !0 === c.inputEventOnly ? Y.removeAttribute("maxLength") : (re.on(Y, "keydown", oe.keydownEvent), re.on(Y, "keypress", oe.keypressEvent)), re.on(Y, "compositionstart", e.noop), re.on(Y, "compositionupdate", e.noop), re.on(Y, "compositionend", e.noop), re.on(Y, "keyup", e.noop), re.on(Y, "input", oe.inputFallBackEvent), re.on(Y, "beforeinput", e.noop)), re.on(Y, "setvalue", oe.setValueEvent), Q = M().join(""), "" !== Y.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || i.activeElement === Y)) {
							var r = e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(J, Y.inputmask._valueGet(!0), c) || Y.inputmask._valueGet(!0);
							"" !== r && G(Y, !0, !1, X ? r.split("").reverse() : r.split(""));
							var s = E().slice();
							Q = s.join(""), !1 === V(s) && c.clearIncomplete && g(), c.clearMaskOnLostFocus && i.activeElement !== Y && (-1 === v() ? s = [] : H(s)), R(Y, s), i.activeElement === Y && I(Y, F(v()))
						}
					}(Y);
					break;
				case "format":
					return Z = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(J, r.value, c) || r.value).split(""), G(n, !0, !1, X ? Z.reverse() : Z), r.metadata ? {
						value: X ? E().slice().reverse().join("") : E().join(""),
						metadata: u.call(this, {
							action: "getmetadata"
						}, s, c)
					} : X ? E().slice().reverse().join("") : E().join("");
				case "isValid":
					r.value ? (Z = r.value.split(""), G(n, !0, !0, X ? Z.reverse() : Z)) : r.value = E().join("");
					for (var se = E(), le = L(), ue = se.length - 1; ue > le && !j(ue); ue--);
					return se.splice(le, ue + 1 - le), V(se) && r.value === E().join("");
				case "getemptymask":
					return M().join("");
				case "remove":
					return Y && Y.inputmask && (W = e(Y), Y.inputmask._valueSet(c.autoUnmask ? B(Y) : Y.inputmask._valueGet(!0)), re.off(Y), Y.inputmask.colorMask && ((q = Y.inputmask.colorMask).removeChild(Y), q.parentNode.insertBefore(Y, q), q.parentNode.removeChild(q)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value") && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
						get: Y.inputmask.__valueGet,
						set: Y.inputmask.__valueSet,
						configurable: !0
					}) : i.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = n), Y;
				case "getmetadata":
					if (e.isArray(s.metadata)) {
						var ce = d(!0, 0, !1).join("");
						return e.each(s.metadata, function (e, t) {
							if (t.mask === ce) return ce = t, !1
						}), ce
					}
					return s.metadata
			}
		}
		var c = navigator.userAgent,
			p = l("touchstart"),
			f = /iemobile/i.test(c),
			m = /iphone/i.test(c) && !f;
		return a.prototype = {
			dataAttribute: "data-inputmask",
			defaults: {
				placeholder: "_",
				optionalmarker: ["[", "]"],
				quantifiermarker: ["{", "}"],
				groupmarker: ["(", ")"],
				alternatormarker: "|",
				escapeChar: "\\",
				mask: null,
				regex: null,
				oncomplete: e.noop,
				onincomplete: e.noop,
				oncleared: e.noop,
				repeat: 0,
				greedy: !0,
				autoUnmask: !1,
				removeMaskOnSubmit: !1,
				clearMaskOnLostFocus: !0,
				insertMode: !0,
				clearIncomplete: !1,
				alias: null,
				onKeyDown: e.noop,
				onBeforeMask: null,
				onBeforePaste: function (t, i) {
					return e.isFunction(i.onBeforeMask) ? i.onBeforeMask.call(this, t, i) : t
				},
				onBeforeWrite: null,
				onUnMask: null,
				showMaskOnFocus: !0,
				showMaskOnHover: !0,
				onKeyValidation: e.noop,
				skipOptionalPartCharacter: " ",
				numericInput: !1,
				rightAlign: !1,
				undoOnEscape: !0,
				radixPoint: "",
				radixPointDefinitionSymbol: n,
				groupSeparator: "",
				keepStatic: null,
				positionCaretOnTab: !0,
				tabThrough: !1,
				supportsInputType: ["text", "tel", "password", "search"],
				ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
				isComplete: null,
				canClearPosition: e.noop,
				preValidation: null,
				postValidation: null,
				staticDefinitionSymbol: n,
				jitMasking: !1,
				nullable: !0,
				inputEventOnly: !1,
				noValuePatching: !1,
				positionCaretOnClick: "lvp",
				casing: null,
				inputmode: "verbatim",
				colorMask: !1,
				disablePredictiveText: !1,
				importDataAttributes: !0
			},
			definitions: {
				9: {
					validator: "[0-91-9]",
					definitionSymbol: "*"
				},
				a: {
					validator: "[A-Za-z�-���A-y�]",
					definitionSymbol: "*"
				},
				"*": {
					validator: "[0-91-9A-Za-z�-���A-y�]"
				}
			},
			aliases: {},
			masksCache: {},
			mask: function (o) {
				var l = this;
				return "string" == typeof o && (o = i.getElementById(o) || i.querySelectorAll(o)), o = o.nodeName ? [o] : o, e.each(o, function (i, o) {
					var c = e.extend(!0, {}, l.opts);
					if (function (i, a, o, s) {
							if (!0 === a.importDataAttributes) {
								var l, u, c, p, f = function (e, a) {
										null !== (a = a !== n ? a : i.getAttribute(s + "-" + e)) && ("string" == typeof a && (0 === e.indexOf("on") ? a = t[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), o[e] = a)
									},
									m = i.getAttribute(s);
								if (m && "" !== m && (m = m.replace(/'/g, '"'), u = JSON.parse("{" + m + "}")), u) {
									c = n;
									for (p in u)
										if ("alias" === p.toLowerCase()) {
											c = u[p];
											break
										}
								}
								f("alias", c), o.alias && r(o.alias, o, a);
								for (l in a) {
									if (u) {
										c = n;
										for (p in u)
											if (p.toLowerCase() === l.toLowerCase()) {
												c = u[p];
												break
											}
									}
									f(l, c)
								}
							}
							return e.extend(!0, a, o), ("rtl" === i.dir || a.rightAlign) && (i.style.textAlign = "right"), ("rtl" === i.dir || a.numericInput) && (i.dir = "ltr", i.removeAttribute("dir"), a.isRTL = !0), Object.keys(o).length
						}(o, c, e.extend(!0, {}, l.userOptions), l.dataAttribute)) {
						var p = s(c, l.noMasksCache);
						p !== n && (o.inputmask !== n && (o.inputmask.opts.autoUnmask = !0, o.inputmask.remove()), o.inputmask = new a(n, n, !0), o.inputmask.opts = c, o.inputmask.noMasksCache = l.noMasksCache, o.inputmask.userOptions = e.extend(!0, {}, l.userOptions), o.inputmask.isRTL = c.isRTL || c.numericInput, o.inputmask.el = o, o.inputmask.maskset = p, e.data(o, "_inputmask_opts", c), u.call(o.inputmask, {
							action: "mask"
						}))
					}
				}), o && o[0] && o[0].inputmask || this
			},
			option: function (t, i) {
				return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t), this.el && !0 !== i && this.mask(this.el), this) : void 0
			},
			unmaskedvalue: function (e) {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "unmaskedvalue",
					value: e
				})
			},
			remove: function () {
				return u.call(this, {
					action: "remove"
				})
			},
			getemptymask: function () {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "getemptymask"
				})
			},
			hasMaskedValue: function () {
				return !this.opts.autoUnmask
			},
			isComplete: function () {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "isComplete"
				})
			},
			getmetadata: function () {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "getmetadata"
				})
			},
			isValid: function (e) {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "isValid",
					value: e
				})
			},
			format: function (e, t) {
				return this.maskset = this.maskset || s(this.opts, this.noMasksCache), u.call(this, {
					action: "format",
					value: e,
					metadata: t
				})
			},
			analyseMask: function (t, i, r) {
				function o(e, t, i, n) {
					this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
						min: 1,
						max: 1
					}
				}

				function s(t, o, s) {
					s = s !== n ? s : t.matches.length;
					var l = t.matches[s - 1];
					if (i) 0 === o.indexOf("[") || k && /\\d|\\s|\\w]/i.test(o) || "." === o ? t.matches.splice(s++, 0, {
						fn: new RegExp(o, r.casing ? "i" : ""),
						optionality: t.isOptional,
						newBlockMarker: l === n || l.def !== o,
						casing: null,
						def: o,
						placeholder: n,
						nativeDef: o
					}) : (k && (o = o[o.length - 1]), e.each(o.split(""), function (e, i) {
						l = t.matches[s - 1], t.matches.splice(s++, 0, {
							fn: null,
							optionality: t.isOptional,
							newBlockMarker: l === n || l.def !== i && null !== l.fn,
							casing: null,
							def: r.staticDefinitionSymbol || i,
							placeholder: r.staticDefinitionSymbol !== n ? i : n,
							nativeDef: i
						})
					})), k = !1;
					else {
						var u = (r.definitions ? r.definitions[o] : n) || a.prototype.definitions[o];
						u && !k ? t.matches.splice(s++, 0, {
							fn: u.validator ? "string" == typeof u.validator ? new RegExp(u.validator, r.casing ? "i" : "") : new function () {
								this.test = u.validator
							} : new RegExp("."),
							optionality: t.isOptional,
							newBlockMarker: l === n || l.def !== (u.definitionSymbol || o),
							casing: u.casing,
							def: u.definitionSymbol || o,
							placeholder: u.placeholder,
							nativeDef: o
						}) : (t.matches.splice(s++, 0, {
							fn: null,
							optionality: t.isOptional,
							newBlockMarker: l === n || l.def !== o && null !== l.fn,
							casing: null,
							def: r.staticDefinitionSymbol || o,
							placeholder: r.staticDefinitionSymbol !== n ? o : n,
							nativeDef: o
						}), k = !1)
					}
				}

				function l() {
					if (b.length > 0) {
						if (s(f = b[b.length - 1], c), f.isAlternator) {
							m = b.pop();
							for (var e = 0; e < m.matches.length; e++) m.matches[e].isGroup = !1;
							b.length > 0 ? (f = b[b.length - 1]).matches.push(m) : y.matches.push(m)
						}
					} else s(y, c)
				}
				var u, c, p, f, m, d, h, g = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
					v = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
					k = !1,
					y = new o,
					b = [],
					x = [];
				for (i && (r.optionalmarker[0] = n, r.optionalmarker[1] = n); u = i ? v.exec(t) : g.exec(t);) {
					if (c = u[0], i) switch (c.charAt(0)) {
						case "?":
							c = "{0,1}";
							break;
						case "+":
						case "*":
							c = "{" + c + "}"
					}
					if (k) l();
					else switch (c.charAt(0)) {
						case r.escapeChar:
							k = !0, i && l();
							break;
						case r.optionalmarker[1]:
						case r.groupmarker[1]:
							if ((p = b.pop()).openGroup = !1, p !== n)
								if (b.length > 0) {
									if ((f = b[b.length - 1]).matches.push(p), f.isAlternator) {
										m = b.pop();
										for (var P = 0; P < m.matches.length; P++) m.matches[P].isGroup = !1, m.matches[P].alternatorGroup = !1;
										b.length > 0 ? (f = b[b.length - 1]).matches.push(m) : y.matches.push(m)
									}
								} else y.matches.push(p);
							else l();
							break;
						case r.optionalmarker[0]:
							b.push(new o(!1, !0));
							break;
						case r.groupmarker[0]:
							b.push(new o(!0));
							break;
						case r.quantifiermarker[0]:
							var S = new o(!1, !1, !0),
								A = (c = c.replace(/[{}]/g, "")).split(","),
								C = isNaN(A[0]) ? A[0] : parseInt(A[0]),
								M = 1 === A.length ? C : isNaN(A[1]) ? A[1] : parseInt(A[1]);
							if ("*" !== M && "+" !== M || (C = "*" === M ? 0 : 1), S.quantifier = {
									min: C,
									max: M
								}, b.length > 0) {
								var E = b[b.length - 1].matches;
								(u = E.pop()).isGroup || ((h = new o(!0)).matches.push(u), u = h), E.push(u), E.push(S)
							} else(u = y.matches.pop()).isGroup || (i && null === u.fn && "." === u.def && (u.fn = new RegExp(u.def, r.casing ? "i" : "")), (h = new o(!0)).matches.push(u), u = h), y.matches.push(u), y.matches.push(S);
							break;
						case r.alternatormarker:
							if (b.length > 0) {
								var w = (f = b[b.length - 1]).matches[f.matches.length - 1];
								d = f.openGroup && (w.matches === n || !1 === w.isGroup && !1 === w.isAlternator) ? b.pop() : f.matches.pop()
							} else d = y.matches.pop();
							if (d.isAlternator) b.push(d);
							else if (d.alternatorGroup ? (m = b.pop(), d.alternatorGroup = !1) : m = new o(!1, !1, !1, !0), m.matches.push(d), b.push(m), d.openGroup) {
								d.openGroup = !1;
								var D = new o(!0);
								D.alternatorGroup = !0, b.push(D)
							}
							break;
						default:
							l()
					}
				}
				for (; b.length > 0;) p = b.pop(), y.matches.push(p);
				return y.matches.length > 0 && (function t(a) {
					a && a.matches && e.each(a.matches, function (e, o) {
						var l = a.matches[e + 1];
						(l === n || l.matches === n || !1 === l.isQuantifier) && o && o.isGroup && (o.isGroup = !1, i || (s(o, r.groupmarker[0], 0), !0 !== o.openGroup && s(o, r.groupmarker[1]))), t(o)
					})
				}(y), x.push(y)), (r.numericInput || r.isRTL) && function e(t) {
					t.matches = t.matches.reverse();
					for (var i in t.matches)
						if (t.matches.hasOwnProperty(i)) {
							var a = parseInt(i);
							if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
								var o = t.matches[i];
								t.matches.splice(i, 1), t.matches.splice(a + 1, 0, o)
							}
							t.matches[i].matches !== n ? t.matches[i] = e(t.matches[i]) : t.matches[i] = function (e) {
								return e === r.optionalmarker[0] ? e = r.optionalmarker[1] : e === r.optionalmarker[1] ? e = r.optionalmarker[0] : e === r.groupmarker[0] ? e = r.groupmarker[1] : e === r.groupmarker[1] && (e = r.groupmarker[0]), e
							}(t.matches[i])
						} return t
				}(x[0]), x
			}
		}, a.extendDefaults = function (t) {
			e.extend(!0, a.prototype.defaults, t)
		}, a.extendDefinitions = function (t) {
			e.extend(!0, a.prototype.definitions, t)
		}, a.extendAliases = function (t) {
			e.extend(!0, a.prototype.aliases, t)
		}, a.format = function (e, t, i) {
			return a(t).format(e, i)
		}, a.unmask = function (e, t) {
			return a(t).unmaskedvalue(e)
		}, a.isValid = function (e, t) {
			return a(t).isValid(e)
		}, a.remove = function (t) {
			e.each(t, function (e, t) {
				t.inputmask && t.inputmask.remove()
			})
		}, a.escapeRegex = function (e) {
			return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
		}, a.keyCode = {
			BACKSPACE: 8,
			BACKSPACE_SAFARI: 127,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			X: 88,
			CONTROL: 17
		}, a
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t) {
	e.exports = jQuery
}, function (e, t, i) {
	"use strict";

	function n(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	i(4), i(7), i(8), i(9);
	var a = n(i(1)),
		r = n(i(0)),
		o = n(i(2));
	r.default === o.default && i(10), window.Inputmask = a.default
}, function (e, t, i) {
	"use strict";
	var n, a, r;
	"function" == typeof Symbol && Symbol.iterator, a = [i(0), i(1)], void 0 !== (r = "function" == typeof (n = function (e, t) {
		function i(e) {
			if (!e.tokenizer) {
				var t = [];
				for (var i in o) - 1 === t.indexOf(i[0]) && t.push(i[0]);
				e.tokenizer = "(" + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g")
			}
			return e.tokenizer
		}

		function n(e, n, a) {
			for (var r, s = ""; r = i(a).exec(e);) void 0 === n ? s += o[r[0]] ? "(" + o[r[0]][0] + ")" : t.escapeRegex(r[0]) : o[r[0]] ? s += o[r[0]][3].call(n.date) : s += r[0];
			return s
		}

		function a(e, t) {
			for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
			return e
		}

		function r(e, t, n) {
			var a, r, s, l, u, c, p, f, m = {
					date: new Date(1, 0, 1)
				},
				d = e;
			if ("string" == typeof d) {
				for (; r = i(n).exec(t);) {
					var h = d.slice(0, r[0].length);
					o.hasOwnProperty(r[0]) && (a = o[r[0]][2], s = o[r[0]][1], l = m, u = h, c = n, p = void 0, f = void 0, "year" === a ? (l[a] = (f = 4 === (p = u).length ? p : (new Date).getFullYear().toString().substr(0, 4 - p.length) + p, n.min && n.min.year && n.max && n.max.year ? (f = f.replace(/[^0-9]/g, ""), f = p.charAt(0) === n.max.year.charAt(0) ? p.replace(/[^0-9]/g, "0") : f + n.min.year.substr(f.length)) : f = f.replace(/[^0-9]/g, "0"), f), l["raw" + a] = u) : l[a] = c.min && u.match(/[^0-9]/) ? c.min[a] : u, void 0 !== s && s.call(l.date, "month" == a ? parseInt(l[a]) - 1 : l[a])), d = d.slice(h.length)
				}
				return m
			}
		}
		var o = {
				d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
				dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
					return a(Date.prototype.getDate.call(this), 2)
				}],
				ddd: [""],
				dddd: [""],
				m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
					return Date.prototype.getMonth.call(this) + 1
				}],
				mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
					return a(Date.prototype.getMonth.call(this) + 1, 2)
				}],
				mmm: [""],
				mmmm: [""],
				yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
					return a(Date.prototype.getFullYear.call(this), 2)
				}],
				yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
					return a(Date.prototype.getFullYear.call(this), 4)
				}],
				h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
				hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
					return a(Date.prototype.getHours.call(this), 2)
				}],
				hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
				H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
				HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
					return a(Date.prototype.getHours.call(this), 2)
				}],
				HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
				M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
				MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function () {
					return a(Date.prototype.getMinutes.call(this), 2)
				}],
				s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
				ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function () {
					return a(Date.prototype.getSeconds.call(this), 2)
				}],
				l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
					return a(Date.prototype.getMilliseconds.call(this), 3)
				}],
				L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
					return a(Date.prototype.getMilliseconds.call(this), 2)
				}],
				t: [""],
				tt: [""],
				T: [""],
				TT: [""],
				Z: [""],
				o: [""],
				S: [""]
			},
			s = {
				isoDate: "yyyy-mm-dd",
				isoTime: "HH:MM:ss",
				isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
				isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
			};
		return t.extendAliases({
			datetime: {
				mask: function (e) {
					return e.inputFormat = s[e.inputFormat] || e.inputFormat, e.displayFormat = s[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = s[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = e.placeholder !== t.prototype.defaults.placeholder ? e.placeholder : e.inputFormat, e.min = r(e.min, e.inputFormat, e), e.max = r(e.max, e.inputFormat, e), e.regex = n(e.inputFormat, void 0, e), null
				},
				inputFormat: "isoDateTime",
				displayFormat: void 0,
				outputFormat: void 0,
				min: null,
				max: null,
				i18n: {
					dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				},
				postValidation: function (e, t, i) {
					var n, a, o, s, l, u = t,
						c = r(e.join(""), i.inputFormat, i);
					return u && c.date.getTime() == c.date.getTime() && (s = c, l = u, u = (u = (!isFinite(s.day) || "29" == s.day && !isFinite(s.rawyear) || new Date(s.date.getFullYear(), isFinite(s.month) ? s.month : s.date.getMonth() + 1, 0).getDate() >= s.day) && l) && (n = c.date, o = !0, (a = i).min && a.min.date.getTime() == a.min.date.getTime() && (o = o && a.min.date.getTime() <= n.getTime()), a.max && a.max.date.getTime() == a.max.date.getTime() && (o = o && a.max.date.getTime() >= n.getTime()), o)), u
				},
				onKeyDown: function (n, r, o, s) {
					if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
						for (var l, u = new Date, c = ""; l = i(s).exec(s.inputFormat);) "d" === l[0].charAt(0) ? c += a(u.getDate(), l[0].length) : "m" === l[0].charAt(0) ? c += a(u.getMonth() + 1, l[0].length) : "yyyy" === l[0] ? c += u.getFullYear().toString() : "y" === l[0].charAt(0) && (c += a(u.getYear(), l[0].length));
						this.inputmask._valueSet(c), e(this).trigger("setvalue")
					}
				},
				onUnMask: function (e, t, i) {
					return n(i.outputFormat, r(e, i.inputFormat, i), i)
				},
				insertMode: !1
			}
		}), t
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t, i) {
	"use strict";
	var n;
	"function" == typeof Symbol && Symbol.iterator, void 0 !== (n = function () {
		return window
	}.call(t, i, t, e)) && (e.exports = n)
}, function (e, t, i) {
	"use strict";
	var n;
	"function" == typeof Symbol && Symbol.iterator, void 0 !== (n = function () {
		return document
	}.call(t, i, t, e)) && (e.exports = n)
}, function (e, t, i) {
	"use strict";
	var n, a, r;
	"function" == typeof Symbol && Symbol.iterator, a = [i(0), i(1)], void 0 !== (r = "function" == typeof (n = function (e, t) {
		return t.extendDefinitions({
			A: {
				validator: "[A-Za-z�-���A-y�]",
				casing: "upper"
			},
			"&": {
				validator: "[0-9A-Za-z�-���A-y�]",
				casing: "upper"
			},
			"#": {
				validator: "[0-9A-Fa-f]",
				casing: "upper"
			}
		}), t.extendAliases({
			url: {
				definitions: {
					i: {
						validator: "."
					}
				},
				mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
				insertMode: !1,
				autoUnmask: !1,
				inputmode: "url"
			},
			ip: {
				mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
				definitions: {
					i: {
						validator: function (e, t, i, n, a) {
							return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
						}
					}
				},
				onUnMask: function (e, t, i) {
					return e
				},
				inputmode: "numeric"
			},
			email: {
				mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
				greedy: !1,
				onBeforePaste: function (e, t) {
					return (e = e.toLowerCase()).replace("mailto:", "")
				},
				definitions: {
					"*": {
						validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
						casing: "lower"
					},
					"-": {
						validator: "[0-9A-Za-z-]",
						casing: "lower"
					}
				},
				onUnMask: function (e, t, i) {
					return e
				},
				inputmode: "email"
			},
			mac: {
				mask: "##:##:##:##:##:##"
			},
			vin: {
				mask: "V{13}9{4}",
				definitions: {
					V: {
						validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
						casing: "upper"
					}
				},
				clearIncomplete: !0,
				autoUnmask: !0
			}
		}), t
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t, i) {
	"use strict";
	var n, a, r;
	"function" == typeof Symbol && Symbol.iterator, a = [i(0), i(1)], void 0 !== (r = "function" == typeof (n = function (e, t, i) {
		function n(e, i) {
			for (var n = "", a = 0; a < e.length; a++) t.prototype.definitions[e.charAt(a)] || i.definitions[e.charAt(a)] || i.optionalmarker.start === e.charAt(a) || i.optionalmarker.end === e.charAt(a) || i.quantifiermarker.start === e.charAt(a) || i.quantifiermarker.end === e.charAt(a) || i.groupmarker.start === e.charAt(a) || i.groupmarker.end === e.charAt(a) || i.alternatormarker === e.charAt(a) ? n += "\\" + e.charAt(a) : n += e.charAt(a);
			return n
		}
		return t.extendAliases({
			numeric: {
				mask: function (e) {
					if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = i), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
						var t = Math.floor(e.integerDigits / e.groupSize),
							a = e.integerDigits % e.groupSize;
						e.integerDigits = parseInt(e.integerDigits) + (0 === a ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
					}
					e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
					var r = "[+]";
					if (r += n(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}", e.digits !== i) {
						e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
						var o = e.digits.toString().split(",");
						isFinite(o[0] && o[1] && isFinite(o[1])) ? r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
					}
					return r += n(e.suffix, e), r += "[-]", e.greedy = !1, r
				},
				placeholder: "",
				greedy: !1,
				digits: "*",
				digitsOptional: !0,
				enforceDigitsOnBlur: !1,
				radixPoint: ".",
				positionCaretOnClick: "radixFocus",
				groupSize: 3,
				groupSeparator: "",
				autoGroup: !1,
				allowMinus: !0,
				negationSymbol: {
					front: "-",
					back: ""
				},
				integerDigits: "+",
				integerOptional: !0,
				prefix: "",
				suffix: "",
				rightAlign: !0,
				decimalProtect: !0,
				min: null,
				max: null,
				step: 1,
				insertMode: !0,
				autoUnmask: !1,
				unmaskAsNumber: !1,
				inputmode: "numeric",
				preValidation: function (t, n, a, r, o) {
					if ("-" === a || a === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === i || !o.isNegative, "" === t.join("") || {
						caret: n,
						dopost: !0
					});
					if (!1 === r && a === o.radixPoint && o.digits !== i && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
						var s = e.inArray(o.radixPoint, t);
						if (-1 !== s) return !0 === o.numericInput ? n === s : {
							caret: s + 1
						}
					}
					return !0
				},
				postValidation: function (n, a, r) {
					var o = r.suffix.split(""),
						s = r.prefix.split("");
					if (a.pos === i && a.caret !== i && !0 !== a.dopost) return a;
					var l = a.caret !== i ? a.caret : a.pos,
						u = n.slice();
					r.numericInput && (l = u.length - l - 1, u = u.reverse());
					var c = u[l];
					if (c === r.groupSeparator && (c = u[l += 1]), l === u.length - r.suffix.length - 1 && c === r.radixPoint) return a;
					c !== i && c !== r.radixPoint && c !== r.negationSymbol.front && c !== r.negationSymbol.back && (u[l] = "?", r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), s = s.join(""), o = o.join("");
					var p = u.join("").replace(s, "");
					if (p = (p = (p = (p = p.replace(o, "")).replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), "")).replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === c && (p = p.replace(/^\?/g, "")), p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p), "" !== p) {
						if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === a.event) && isFinite(r.digits)) {
							var f = e.inArray(r.radixPoint, p),
								m = e.inArray(r.radixPoint, u); - 1 === f && (p.push(r.radixPoint), f = p.length - 1);
							for (var d = 1; d <= r.digits; d++) r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== a.event) || p[f + d] !== i && p[f + d] !== r.placeholder.charAt(0) ? -1 !== m && u[m + d] !== i && (p[f + d] = p[f + d] || u[m + d]) : p[f + d] = a.placeholder || r.placeholder.charAt(0)
						}
						if (!0 !== r.autoGroup || "" === r.groupSeparator || c === r.radixPoint && a.pos === i && !a.dopost) p = p.join("");
						else {
							var h = p[p.length - 1] === r.radixPoint && a.c === r.radixPoint;
							p = t(function (e, t) {
								var i = "";
								if (i += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
									var n = e.join("").split(t.radixPoint);
									n[1] && (i += t.radixPoint + "*{" + n[1].match(/^\d*\??\d*/)[0].length + "}")
								}
								return i
							}(p, r), {
								numericInput: !0,
								jitMasking: !0,
								definitions: {
									"*": {
										validator: "[0-9?]",
										cardinality: 1
									}
								}
							}).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1)
						}
					}
					if (r.isNegative && "blur" === a.event && (r.isNegative = "0" !== p), p = s + p, p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back), p = p.split(""), c !== i)
						if (c !== r.radixPoint && c !== r.negationSymbol.front && c !== r.negationSymbol.back)(l = e.inArray("?", p)) > -1 ? p[l] = c : l = a.caret || 0;
						else if (c === r.radixPoint || c === r.negationSymbol.front || c === r.negationSymbol.back) {
						var g = e.inArray(c, p); - 1 !== g && (l = g)
					}
					r.numericInput && (l = p.length - l - 1, p = p.reverse());
					var v = {
						caret: c === i || a.pos !== i ? l + (r.numericInput ? -1 : 1) : l,
						buffer: p,
						refreshFromBuffer: a.dopost || n.join("") !== p.join("")
					};
					return v.refreshFromBuffer ? v : a
				},
				onBeforeWrite: function (n, a, r, o) {
					if (n) switch (n.type) {
						case "keydown":
							return o.postValidation(a, {
								caret: r,
								dopost: !0
							}, o);
						case "blur":
						case "checkval":
							var s;
							if ((l = o).parseMinMaxOptions === i && (null !== l.min && (l.min = l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator), "g"), ""), "," === l.radixPoint && (l.min = l.min.replace(l.radixPoint, ".")), l.min = isFinite(l.min) ? parseFloat(l.min) : NaN, isNaN(l.min) && (l.min = Number.MIN_VALUE)), null !== l.max && (l.max = l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator), "g"), ""), "," === l.radixPoint && (l.max = l.max.replace(l.radixPoint, ".")), l.max = isFinite(l.max) ? parseFloat(l.max) : NaN, isNaN(l.max) && (l.max = Number.MAX_VALUE)), l.parseMinMaxOptions = "done"), null !== o.min || null !== o.max) {
								if (s = o.onUnMask(a.join(""), i, e.extend({}, o, {
										unmaskAsNumber: !0
									})), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
									caret: r,
									dopost: !0,
									placeholder: "0"
								}, o);
								if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
									caret: r,
									dopost: !0,
									placeholder: "0"
								}, o)
							}
							return o.postValidation(a, {
								caret: r,
								placeholder: "0",
								event: "blur"
							}, o);
						case "_checkval":
							return {
								caret: r
							}
					}
					var l
				},
				regex: {
					integerPart: function (e, i) {
						return i ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
					},
					integerNPart: function (e) {
						return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
					}
				},
				definitions: {
					"~": {
						validator: function (e, n, a, r, o, s) {
							var l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
							if (!0 === l) {
								if (!0 !== o.numericInput && n.validPositions[a] !== i && "~" === n.validPositions[a].match.def && !s) {
									var u = n.buffer.join(""),
										c = (u = (u = u.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
									c.length > 1 && (c[1] = c[1].replace(/0/g, o.placeholder.charAt(0))), "0" === c[0] && (c[0] = c[0].replace(/0/g, o.placeholder.charAt(0))), u = c[0] + o.radixPoint + c[1] || "";
									var p = n._buffer.join("");
									for (u === o.radixPoint && (u = p); null === u.match(t.escapeRegex(p) + "$");) p = p.slice(1);
									l = (u = (u = u.replace(p, "")).split(""))[a] === i ? {
										pos: a,
										remove: a
									} : {
										pos: a
									}
								}
							} else r || e !== o.radixPoint || n.validPositions[a - 1] !== i || (n.buffer[a] = "0", l = {
								pos: a + 1
							});
							return l
						},
						cardinality: 1
					},
					"+": {
						validator: function (e, t, i, n, a) {
							return a.allowMinus && ("-" === e || e === a.negationSymbol.front)
						},
						cardinality: 1,
						placeholder: ""
					},
					"-": {
						validator: function (e, t, i, n, a) {
							return a.allowMinus && e === a.negationSymbol.back
						},
						cardinality: 1,
						placeholder: ""
					},
					":": {
						validator: function (e, i, n, a, r) {
							var o = "[" + t.escapeRegex(r.radixPoint) + "]",
								s = new RegExp(o).test(e);
							return s && i.validPositions[n] && i.validPositions[n].match.placeholder === r.radixPoint && (s = {
								caret: n + 1
							}), s
						},
						cardinality: 1,
						placeholder: function (e) {
							return e.radixPoint
						}
					}
				},
				onUnMask: function (e, i, n) {
					if ("" === i && !0 === n.nullable) return i;
					var a = e.replace(n.prefix, "");
					return a = (a = a.replace(n.suffix, "")).replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(t.escapeRegex.call(this, n.radixPoint), ".")), a = (a = a.replace(new RegExp("^" + t.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back) + "$"), ""), Number(a)) : a
				},
				isComplete: function (e, i) {
					var n = e.join("");
					if (e.slice().join("") !== n) return !1;
					var a = n.replace(i.prefix, "");
					return a = (a = a.replace(i.suffix, "")).replace(new RegExp(t.escapeRegex(i.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === i.radixPoint && (a = a.replace(t.escapeRegex(i.radixPoint), ".")), isFinite(a)
				},
				onBeforeMask: function (e, n) {
					if (n.isNegative = i, e = e.toString().charAt(e.length - 1) === n.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== n.radixPoint && isFinite(e)) {
						var a = e.split("."),
							r = "" !== n.groupSeparator ? parseInt(n.groupSize) : 0;
						2 === a.length && (a[0].length > r || a[1].length > r || a[0].length <= r && a[1].length < r) && (e = e.replace(".", n.radixPoint))
					}
					var o = e.match(/,/g),
						s = e.match(/\./g);
					if (e = s && o ? s.length > o.length ? (e = e.replace(/\./g, "")).replace(",", n.radixPoint) : o.length > s.length ? (e = e.replace(/,/g, "")).replace(".", n.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), 0 === n.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== n.radixPoint && isFinite(n.digits) && -1 !== e.indexOf(n.radixPoint)) {
						var l = e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];
						if (parseInt(n.digits) < l.toString().length) {
							var u = Math.pow(10, parseInt(n.digits));
							e = e.replace(t.escapeRegex(n.radixPoint), "."), e = (e = Math.round(parseFloat(e) * u) / u).toString().replace(".", n.radixPoint)
						}
					}
					return e
				},
				canClearPosition: function (e, t, i, n, a) {
					var r = e.validPositions[t],
						o = r.input !== a.radixPoint || null !== e.validPositions[t].match.fn && !1 === a.decimalProtect || r.input === a.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === i || r.input === a.groupSeparator || r.input === a.negationSymbol.front || r.input === a.negationSymbol.back;
					return !o || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (a.isNegative = !1), o
				},
				onKeyDown: function (i, n, a, r) {
					var o = e(this);
					if (i.ctrlKey) switch (i.keyCode) {
						case t.keyCode.UP:
							o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
							break;
						case t.keyCode.DOWN:
							o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue")
					}
				}
			},
			currency: {
				prefix: "$ ",
				groupSeparator: ",",
				alias: "numeric",
				placeholder: "0",
				autoGroup: !0,
				digits: 2,
				digitsOptional: !1,
				clearMaskOnLostFocus: !1
			},
			decimal: {
				alias: "numeric"
			},
			integer: {
				alias: "numeric",
				digits: 0,
				radixPoint: ""
			},
			percentage: {
				alias: "numeric",
				digits: 2,
				digitsOptional: !0,
				radixPoint: ".",
				placeholder: "0",
				autoGroup: !1,
				min: 0,
				max: 100,
				suffix: " %",
				allowMinus: !1
			}
		}), t
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t, i) {
	"use strict";
	var n, a, r;
	"function" == typeof Symbol && Symbol.iterator, a = [i(0), i(1)], void 0 !== (r = "function" == typeof (n = function (e, t) {
		function i(e, t) {
			var i = (e.mask || e).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""),
				n = (t.mask || t).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
			return i.localeCompare(n)
		}
		var n = t.prototype.analyseMask;
		return t.prototype.analyseMask = function (t, i, a) {
			var r = {};
			return a.phoneCodes && (a.phoneCodes && a.phoneCodes.length > 1e3 && (function e(i, n, a) {
				n = n || "", a = a || r, "" !== n && (a[n] = {});
				for (var o = "", s = a[n] || a, l = i.length - 1; l >= 0; l--) s[o = (t = i[l].mask || i[l]).substr(0, 1)] = s[o] || [], s[o].unshift(t.substr(1)), i.splice(l, 1);
				for (var u in s) s[u].length > 500 && e(s[u].slice(), u, s)
			}((t = t.substr(1, t.length - 2)).split(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0])), t = function t(i) {
				var n = "",
					r = [];
				for (var o in i) e.isArray(i[o]) ? 1 === i[o].length ? r.push(o + i[o]) : r.push(o + a.groupmarker[0] + i[o].join(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]) + a.groupmarker[1]) : r.push(o + t(i[o]));
				return 1 === r.length ? n += r[0] : n += a.groupmarker[0] + r.join(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]) + a.groupmarker[1], n
			}(r)), t = t.replace(/9/g, "\\9")), n.call(this, t, i, a)
		}, t.extendAliases({
			abstractphone: {
				groupmarker: ["<", ">"],
				countrycode: "",
				phoneCodes: [],
				keepStatic: "auto",
				mask: function (e) {
					return e.definitions = {
						"#": t.prototype.definitions[9]
					}, e.phoneCodes.sort(i)
				},
				onBeforeMask: function (e, t) {
					var i = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
					return (i.indexOf(t.countrycode) > 1 || -1 === i.indexOf(t.countrycode)) && (i = "+" + t.countrycode + i), i
				},
				onUnMask: function (e, t, i) {
					return e.replace(/[()#-]/g, "")
				},
				inputmode: "tel"
			}
		}), t
	}) ? n.apply(t, a) : n) && (e.exports = r)
}, function (e, t, i) {
	"use strict";
	var n, a, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	a = [i(2), i(1)], void 0 !== (r = "function" == typeof (n = function (e, t) {
		return void 0 === e.fn.inputmask && (e.fn.inputmask = function (i, n) {
			var a, r = this[0];
			if (void 0 === n && (n = {}), "string" == typeof i) switch (i) {
				case "unmaskedvalue":
					return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();
				case "remove":
					return this.each(function () {
						this.inputmask && this.inputmask.remove()
					});
				case "getemptymask":
					return r && r.inputmask ? r.inputmask.getemptymask() : "";
				case "hasMaskedValue":
					return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
				case "isComplete":
					return !r || !r.inputmask || r.inputmask.isComplete();
				case "getmetadata":
					return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
				case "setvalue":
					e(r).val(n), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
					break;
				case "option":
					if ("string" != typeof n) return this.each(function () {
						if (void 0 !== this.inputmask) return this.inputmask.option(n)
					});
					if (r && void 0 !== r.inputmask) return r.inputmask.option(n);
					break;
				default:
					return n.alias = i, a = new t(n), this.each(function () {
						a.mask(this)
					})
			} else {
				if ("object" == (void 0 === i ? "undefined" : o(i))) return a = new t(i), void 0 === i.mask && void 0 === i.alias ? this.each(function () {
					if (void 0 !== this.inputmask) return this.inputmask.option(i);
					a.mask(this)
				}) : this.each(function () {
					a.mask(this)
				});
				if (void 0 === i) return this.each(function () {
					(a = new t(n)).mask(this)
				})
			}
		}), e.fn.inputmask
	}) ? n.apply(t, a) : n) && (e.exports = r)
}]);
/* End */
;; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro_next/js/jquery.easing.1.3.min.js?15700193903338";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.easing.1.3.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (n, e, t, u, a) {
		return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
	},
	easeInQuad: function (n, e, t, u, a) {
		return u * (e /= a) * e + t
	},
	easeOutQuad: function (n, e, t, u, a) {
		return -u * (e /= a) * (e - 2) + t
	},
	easeInOutQuad: function (n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
	},
	easeInCubic: function (n, e, t, u, a) {
		return u * (e /= a) * e * e + t
	},
	easeOutCubic: function (n, e, t, u, a) {
		return u * ((e = e / a - 1) * e * e + 1) + t
	},
	easeInOutCubic: function (n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
	},
	easeInQuart: function (n, e, t, u, a) {
		return u * (e /= a) * e * e * e + t
	},
	easeOutQuart: function (n, e, t, u, a) {
		return -u * ((e = e / a - 1) * e * e * e - 1) + t
	},
	easeInOutQuart: function (n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
	},
	easeInQuint: function (n, e, t, u, a) {
		return u * (e /= a) * e * e * e * e + t
	},
	easeOutQuint: function (n, e, t, u, a) {
		return u * ((e = e / a - 1) * e * e * e * e + 1) + t
	},
	easeInOutQuint: function (n, e, t, u, a) {
		return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
	},
	easeInSine: function (n, e, t, u, a) {
		return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
	},
	easeOutSine: function (n, e, t, u, a) {
		return u * Math.sin(e / a * (Math.PI / 2)) + t
	},
	easeInOutSine: function (n, e, t, u, a) {
		return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
	},
	easeInExpo: function (n, e, t, u, a) {
		return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
	},
	easeOutExpo: function (n, e, t, u, a) {
		return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
	},
	easeInOutExpo: function (n, e, t, u, a) {
		return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
	},
	easeInCirc: function (n, e, t, u, a) {
		return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
	},
	easeOutCirc: function (n, e, t, u, a) {
		return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
	},
	easeInOutCirc: function (n, e, t, u, a) {
		return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
	},
	easeInElastic: function (n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (1 == (e /= a)) return t + u;
		if (i || (i = .3 * a), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
	},
	easeOutElastic: function (n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (1 == (e /= a)) return t + u;
		if (i || (i = .3 * a), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
	},
	easeInOutElastic: function (n, e, t, u, a) {
		var r = 1.70158,
			i = 0,
			s = u;
		if (0 == e) return t;
		if (2 == (e /= a / 2)) return t + u;
		if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
			s = u;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(u / s);
		return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
	},
	easeInBack: function (n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
	},
	easeOutBack: function (n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
	},
	easeInOutBack: function (n, e, t, u, a, r) {
		return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
	},
	easeInBounce: function (n, e, t, u, a) {
		return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
	},
	easeOutBounce: function (n, e, t, u, a) {
		return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
	},
	easeInOutBounce: function (n, e, t, u, a) {
		return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/aspro_next/js/equalize.min.js?1570019390588";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/equalize.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */
(function (b) {
	b.fn.equalize = function (a) {
		var d = !1,
			g = !1,
			c, e;
		b.isPlainObject(a) ? (c = a.equalize || "height", d = a.children || !1, g = a.reset || !1) : c = a || "height";
		if (!b.isFunction(b.fn[c])) return !1;
		e = 0 < c.indexOf("eight") ? "height" : "width";
		return this.each(function () {
			var a = d ? b(this).find(d) : b(this).children(),
				f = 0;
			a.each(function () {
				var a = b(this);
				g && a.css(e, "");
				a = a[c]();
				a > f && (f = a)
			});
			a.css(e, f + "px")
		})
	}
})(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/aspro_next/js/jquery.alphanumeric.min.js?1570019390942";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.alphanumeric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (n) {
	n.fn.alphanumeric = function (r) {
		var a, e, c = n(this),
			t = "abcdefghijklmnopqrstuvwxyz",
			i = n.extend({
				ichars: "!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- _",
				nchars: "",
				allow: ""
			}, r),
			h = i.allow.split(""),
			l = 0;
		for (l; l < h.length; l++) - 1 != i.ichars.indexOf(h[l]) && (h[l] = "\\" + h[l]);
		return i.nocaps && (i.nchars += t.toUpperCase()), i.allcaps && (i.nchars += t), i.allow = h.join("|"), e = new RegExp(i.allow, "gi"), a = (i.ichars + i.nchars).replace(e, ""), c.keypress(function (n) {
			var r = String.fromCharCode(n.charCode ? n.charCode : n.which); - 1 == a.indexOf(r) || n.ctrlKey || n.preventDefault()
		}), c.blur(function () {
			var n = c.val(),
				r = 0;
			for (r; r < n.length; r++)
				if (-1 != a.indexOf(n[r])) return c.val(""), !1;
			return !1
		}), c
	}, n.fn.numeric = function (r) {
		var a = "abcdefghijklmnopqrstuvwxyz",
			e = a.toUpperCase();
		return this.each(function () {
			n(this).alphanumeric(n.extend({
				nchars: a + e
			}, r))
		})
	}, n.fn.alpha = function (r) {
		var a = "1234567890";
		return this.each(function () {
			n(this).alphanumeric(n.extend({
				nchars: a
			}, r))
		})
	}
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.cookie.min.js?15700193903066";s:6:"source";s:48:"/bitrix/templates/aspro_next/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch (e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires,
					t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '',
				options.domain ? '; domain=' + options.domain : '',
				options.secure ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, {
			expires: -1
		}));
		return !$.cookie(key);
	};

}));

/* End */
;; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/jquery.plugin.min.js?15700193903181";s:6:"source";s:52:"/bitrix/templates/aspro_next/js/jquery.plugin.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function () {
	var j = false;
	window.JQClass = function () {};
	JQClass.classes = {};
	JQClass.extend = function extender(f) {
		var g = this.prototype;
		j = true;
		var h = new this();
		j = false;
		for (var i in f) {
			h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function (d, e) {
				return function () {
					var b = this._super;
					this._super = function (a) {
						return g[d].apply(this, a || [])
					};
					var c = e.apply(this, arguments);
					this._super = b;
					return c
				}
			})(i, f[i]) : f[i]
		}

		function JQClass() {
			if (!j && this._init) {
				this._init.apply(this, arguments)
			}
		}
		JQClass.prototype = h;
		JQClass.prototype.constructor = JQClass;
		JQClass.extend = extender;
		return JQClass
	}
})();
(function ($) {
	JQClass.classes.JQPlugin = JQClass.extend({
		name: 'plugin',
		defaultOptions: {},
		regionalOptions: {},
		_getters: [],
		_getMarker: function () {
			return 'is-' + this.name
		},
		_init: function () {
			$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
			var c = camelCase(this.name);
			$[c] = this;
			$.fn[c] = function (a) {
				var b = Array.prototype.slice.call(arguments, 1);
				if ($[c]._isNotChained(a, b)) {
					return $[c][a].apply($[c], [this[0]].concat(b))
				}
				return this.each(function () {
					if (typeof a === 'string') {
						if (a[0] === '_' || !$[c][a]) {
							throw 'Unknown method: ' + a;
						}
						$[c][a].apply($[c], [this].concat(b))
					} else {
						$[c]._attach(this, a)
					}
				})
			}
		},
		setDefaults: function (a) {
			$.extend(this.defaultOptions, a || {})
		},
		_isNotChained: function (a, b) {
			if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
				return true
			}
			return $.inArray(a, this._getters) > -1
		},
		_attach: function (a, b) {
			a = $(a);
			if (a.hasClass(this._getMarker())) {
				return
			}
			a.addClass(this._getMarker());
			b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
			var c = $.extend({
				name: this.name,
				elem: a,
				options: b
			}, this._instSettings(a, b));
			a.data(this.name, c);
			this._postAttach(a, c);
			this.option(a, b)
		},
		_instSettings: function (a, b) {
			return {}
		},
		_postAttach: function (a, b) {},
		_getMetadata: function (d) {
			try {
				var f = d.data(this.name.toLowerCase()) || '';
				f = f.replace(/'/g, '"');
				f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, i) {
					var c = f.substring(0, i).match(/"/g);
					return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
				});
				f = $.parseJSON('{' + f + '}');
				for (var g in f) {
					var h = f[g];
					if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
						f[g] = eval(h)
					}
				}
				return f
			} catch (e) {
				return {}
			}
		},
		_getInst: function (a) {
			return $(a).data(this.name) || {}
		},
		option: function (a, b, c) {
			a = $(a);
			var d = a.data(this.name);
			if (!b || (typeof b === 'string' && c == null)) {
				var e = (d || {}).options;
				return (e && b ? e[b] : e)
			}
			if (!a.hasClass(this._getMarker())) {
				return
			}
			var e = b || {};
			if (typeof b === 'string') {
				e = {};
				e[b] = c
			}
			this._optionsChanged(a, d, e);
			$.extend(d.options, e)
		},
		_optionsChanged: function (a, b, c) {},
		destroy: function (a) {
			a = $(a);
			if (!a.hasClass(this._getMarker())) {
				return
			}
			this._preDestroy(a, this._getInst(a));
			a.removeData(this.name).removeClass(this._getMarker())
		},
		_preDestroy: function (a, b) {}
	});

	function camelCase(c) {
		return c.replace(/-([a-z])/g, function (a, b) {
			return b.toUpperCase()
		})
	}
	$.JQPlugin = {
		createPlugin: function (a, b) {
			if (typeof a === 'object') {
				b = a;
				a = 'JQPlugin'
			}
			a = camelCase(a);
			var c = camelCase(b.name);
			JQClass.classes[c] = JQClass.classes[a].extend(b);
			new JQClass.classes[c]()
		}
	}
})(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/aspro_next/js/jquery.countdown.min.js?157001939013137";s:6:"source";s:55:"/bitrix/templates/aspro_next/js/jquery.countdown.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e) {
	var t = "countdown",
		i = 0,
		s = 1,
		n = 2,
		o = 3,
		r = 4,
		a = 5,
		l = 6;
	e.JQPlugin.createPlugin({
		name: t,
		defaultOptions: {
			until: null,
			since: null,
			timezone: null,
			serverSync: null,
			format: "dHMS",
			layout: "",
			compact: !1,
			padZeroes: !1,
			significant: 0,
			description: "",
			expiryUrl: "",
			expiryText: "",
			alwaysExpire: !1,
			onExpiry: null,
			onTick: null,
			tickInterval: 1
		},
		regionalOptions: {
			"": {
				labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
				labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
				compactLabels: ["y", "m", "w", "d"],
				whichLabels: null,
				digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
				timeSeparator: ":",
				isRTL: !1
			}
		},
		_getters: ["getTimes"],
		_rtlClass: t + "-rtl",
		_sectionClass: t + "-section",
		_amountClass: t + "-amount",
		_periodClass: t + "-period",
		_rowClass: t + "-row",
		_holdingClass: t + "-holding",
		_showClass: t + "-show",
		_descrClass: t + "-descr",
		_timerElems: [],
		_init: function () {
			function t(e) {
				var a = 1e12 > e ? n ? performance.now() + performance.timing.navigationStart : s() : e || s();
				a - r >= 1e3 && (i._updateElems(), r = a), o(t)
			}
			var i = this;
			this._super(), this._serverSyncs = [];
			var s = "function" == typeof Date.now ? Date.now : function () {
					return (new Date).getTime()
				},
				n = window.performance && "function" == typeof window.performance.now,
				o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
				r = 0;
			!o || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function () {
				i._updateElems()
			}, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || s(), o(t))
		},
		UTCDate: function (e, t, i, s, n, o, r, a) {
			"object" == typeof t && t.constructor == Date && (a = t.getMilliseconds(), r = t.getSeconds(), o = t.getMinutes(), n = t.getHours(), s = t.getDate(), i = t.getMonth(), t = t.getFullYear());
			var l = new Date;
			return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(s || 1), l.setUTCHours(n || 0), l.setUTCMinutes((o || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(r || 0), l.setUTCMilliseconds(a || 0), l
		},
		periodsToSeconds: function (e) {
			return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
		},
		resync: function () {
			var t = this;
			e("." + this._getMarker()).each(function () {
				var i = e.data(this, t.name);
				if (i.options.serverSync) {
					for (var s = null, n = 0; n < t._serverSyncs.length; n++)
						if (t._serverSyncs[n][0] == i.options.serverSync) {
							s = t._serverSyncs[n];
							break
						} if (null == s[2]) {
						var o = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
						s[2] = (o ? (new Date).getTime() - o.getTime() : 0) - s[1]
					}
					i._since && i._since.setMilliseconds(i._since.getMilliseconds() + s[2]), i._until.setMilliseconds(i._until.getMilliseconds() + s[2])
				}
			});
			for (var i = 0; i < t._serverSyncs.length; i++) null != t._serverSyncs[i][2] && (t._serverSyncs[i][1] += t._serverSyncs[i][2], delete t._serverSyncs[i][2])
		},
		_instSettings: function (e, t) {
			return {
				_periods: [0, 0, 0, 0, 0, 0, 0]
			}
		},
		_addElem: function (e) {
			this._hasElem(e) || this._timerElems.push(e)
		},
		_hasElem: function (t) {
			return e.inArray(t, this._timerElems) > -1
		},
		_removeElem: function (t) {
			this._timerElems = e.map(this._timerElems, function (e) {
				return e == t ? null : e
			})
		},
		_updateElems: function () {
			for (var e = this._timerElems.length - 1; e >= 0; e--) this._updateCountdown(this._timerElems[e])
		},
		_optionsChanged: function (t, i, s) {
			s.layout && (s.layout = s.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, s);
			var n = i.options.timezone != s.timezone;
			e.extend(i.options, s), this._adjustSettings(t, i, null != s.until || null != s.since || n);
			var o = new Date;
			(i._since && i._since < o || i._until && i._until > o) && this._addElem(t[0]), this._updateCountdown(t, i)
		},
		_updateCountdown: function (t, i) {
			if (t = t.jquery ? t : e(t), i = i || this._getInst(t), i && i.options) {
				if (t.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), e.isFunction(i.options.onTick)) {
					var s = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
					(1 == i.options.tickInterval || this.periodsToSeconds(s) % i.options.tickInterval == 0) && i.options.onTick.apply(t[0], [s])
				}
				var n = "pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
				if (n && !i._expiring) {
					if (i._expiring = !0, this._hasElem(t[0]) || i.options.alwaysExpire) {
						if (this._removeElem(t[0]), e.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(t[0], []), i.options.expiryText) {
							var o = i.options.layout;
							i.options.layout = i.options.expiryText, this._updateCountdown(t[0], i), i.options.layout = o
						}
						i.options.expiryUrl && (window.location = i.options.expiryUrl)
					}
					i._expiring = !1
				} else "pause" == i._hold && this._removeElem(t[0])
			}
		},
		_resetExtraLabels: function (e, t) {
			for (var i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = t[i]);
			for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof t[i] && (e[i] = null)
		},
		_adjustSettings: function (t, i, s) {
			for (var n = null, o = 0; o < this._serverSyncs.length; o++)
				if (this._serverSyncs[o][0] == i.options.serverSync) {
					n = this._serverSyncs[o][1];
					break
				} if (null != n) var r = i.options.serverSync ? n : 0,
				a = new Date;
			else {
				var l = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(t[0], []) : null,
					a = new Date,
					r = l ? a.getTime() - l.getTime() : 0;
				this._serverSyncs.push([i.options.serverSync, r])
			}
			var _ = i.options.timezone;
			_ = null == _ ? -a.getTimezoneOffset() : _, (s || !s && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(_, this._determineTime(i._since, null)), i._since && r && i._since.setMilliseconds(i._since.getMilliseconds() + r)), i._until = this.UTCDate(_, this._determineTime(i.options.until, a)), r && i._until.setMilliseconds(i._until.getMilliseconds() + r)), i._show = this._determineShow(i)
		},
		_preDestroy: function (e, t) {
			this._removeElem(e[0]), e.empty()
		},
		pause: function (e) {
			this._hold(e, "pause")
		},
		lap: function (e) {
			this._hold(e, "lap")
		},
		resume: function (e) {
			this._hold(e, null)
		},
		toggle: function (t) {
			var i = e.data(t, this.name) || {};
			this[i._hold ? "resume" : "pause"](t)
		},
		toggleLap: function (t) {
			var i = e.data(t, this.name) || {};
			this[i._hold ? "resume" : "lap"](t)
		},
		_hold: function (t, i) {
			var s = e.data(t, this.name);
			if (s) {
				if ("pause" == s._hold && !i) {
					s._periods = s._savePeriods;
					var n = s._since ? "-" : "+";
					s[s._since ? "_since" : "_until"] = this._determineTime(n + s._periods[0] + "y" + n + s._periods[1] + "o" + n + s._periods[2] + "w" + n + s._periods[3] + "d" + n + s._periods[4] + "h" + n + s._periods[5] + "m" + n + s._periods[6] + "s"), this._addElem(t)
				}
				s._hold = i, s._savePeriods = "pause" == i ? s._periods : null, e.data(t, this.name, s), this._updateCountdown(t, s)
			}
		},
		getTimes: function (t) {
			var i = e.data(t, this.name);
			return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
		},
		_determineTime: function (e, t) {
			var i = this,
				s = function (e) {
					var t = new Date;
					return t.setTime(t.getTime() + 1e3 * e), t
				},
				n = function (e) {
					e = e.toLowerCase();
					for (var t = new Date, s = t.getFullYear(), n = t.getMonth(), o = t.getDate(), r = t.getHours(), a = t.getMinutes(), l = t.getSeconds(), _ = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, p = _.exec(e); p;) {
						switch (p[2] || "s") {
							case "s":
								l += parseInt(p[1], 10);
								break;
							case "m":
								a += parseInt(p[1], 10);
								break;
							case "h":
								r += parseInt(p[1], 10);
								break;
							case "d":
								o += parseInt(p[1], 10);
								break;
							case "w":
								o += 7 * parseInt(p[1], 10);
								break;
							case "o":
								n += parseInt(p[1], 10), o = Math.min(o, i._getDaysInMonth(s, n));
								break;
							case "y":
								s += parseInt(p[1], 10), o = Math.min(o, i._getDaysInMonth(s, n))
						}
						p = _.exec(e)
					}
					return new Date(s, n, o, r, a, l, 0)
				},
				o = null == e ? t : "string" == typeof e ? n(e) : "number" == typeof e ? s(e) : e;
			return o && o.setMilliseconds(0), o
		},
		_getDaysInMonth: function (e, t) {
			return 32 - new Date(e, t, 32).getDate()
		},
		_normalLabels: function (e) {
			return e
		},
		_generateHTML: function (t) {
			var _ = this;
			t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
			for (var p = !1, c = 0, u = t.options.significant, d = e.extend({}, t._show), h = i; l >= h; h++) p |= "?" == t._show[h] && t._periods[h] > 0, d[h] = "?" != t._show[h] || p ? t._show[h] : null, c += d[h] ? 1 : 0, u -= t._periods[h] > 0 ? 1 : 0;
			for (var m = [!1, !1, !1, !1, !1, !1, !1], h = l; h >= i; h--) t._show[h] && (t._periods[h] ? m[h] = !0 : (m[h] = u > 0, u--));
			var g = t.options.compact ? t.options.compactLabels : t.options.labels,
				f = t.options.whichLabels || this._normalLabels,
				w = function (e) {
					var i = t.options["compactLabels" + f(t._periods[e])];
					return d[e] ? _._translateDigits(t, t._periods[e]) + (i ? i[e] : g[e]) + " " : ""
				},
				y = t.options.padZeroes ? 2 : 1,
				v = function (e) {
					var i = t.options["labels" + f(t._periods[e])];
					return !t.options.significant && d[e] || t.options.significant && m[e] ? '<span class="' + _._sectionClass + '"><span class="' + _._amountClass + '">' + _._minDigits(t, t._periods[e], y) + '</span><span class="' + _._periodClass + '">' + (i ? i[e] : g[e]) + "</span></span>" : ""
				};
			return t.options.layout ? this._buildLayout(t, d, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + w(i) + w(s) + w(n) + w(o) + (d[r] ? this._minDigits(t, t._periods[r], 2) : "") + (d[a] ? (d[r] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[a], 2) : "") + (d[l] ? (d[r] || d[a] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || c) + (t._hold ? " " + this._holdingClass : "") + '">' + v(i) + v(s) + v(n) + v(o) + v(r) + v(a) + v(l)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
		},
		_buildLayout: function (t, _, p, c, u, d) {
			for (var h = t.options[c ? "compactLabels" : "labels"], m = t.options.whichLabels || this._normalLabels, g = function (e) {
					return (t.options[(c ? "compactLabels" : "labels") + m(t._periods[e])] || h)[e]
				}, f = function (e, i) {
					return t.options.digits[Math.floor(e / i) % 10]
				}, w = {
					desc: t.options.description,
					sep: t.options.timeSeparator,
					yl: g(i),
					yn: this._minDigits(t, t._periods[i], 1),
					ynn: this._minDigits(t, t._periods[i], 2),
					ynnn: this._minDigits(t, t._periods[i], 3),
					y1: f(t._periods[i], 1),
					y10: f(t._periods[i], 10),
					y100: f(t._periods[i], 100),
					y1000: f(t._periods[i], 1e3),
					ol: g(s),
					on: this._minDigits(t, t._periods[s], 1),
					onn: this._minDigits(t, t._periods[s], 2),
					onnn: this._minDigits(t, t._periods[s], 3),
					o1: f(t._periods[s], 1),
					o10: f(t._periods[s], 10),
					o100: f(t._periods[s], 100),
					o1000: f(t._periods[s], 1e3),
					wl: g(n),
					wn: this._minDigits(t, t._periods[n], 1),
					wnn: this._minDigits(t, t._periods[n], 2),
					wnnn: this._minDigits(t, t._periods[n], 3),
					w1: f(t._periods[n], 1),
					w10: f(t._periods[n], 10),
					w100: f(t._periods[n], 100),
					w1000: f(t._periods[n], 1e3),
					dl: g(o),
					dn: this._minDigits(t, t._periods[o], 1),
					dnn: this._minDigits(t, t._periods[o], 2),
					dnnn: this._minDigits(t, t._periods[o], 3),
					d1: f(t._periods[o], 1),
					d10: f(t._periods[o], 10),
					d100: f(t._periods[o], 100),
					d1000: f(t._periods[o], 1e3),
					hl: g(r),
					hn: this._minDigits(t, t._periods[r], 1),
					hnn: this._minDigits(t, t._periods[r], 2),
					hnnn: this._minDigits(t, t._periods[r], 3),
					h1: f(t._periods[r], 1),
					h10: f(t._periods[r], 10),
					h100: f(t._periods[r], 100),
					h1000: f(t._periods[r], 1e3),
					ml: g(a),
					mn: this._minDigits(t, t._periods[a], 1),
					mnn: this._minDigits(t, t._periods[a], 2),
					mnnn: this._minDigits(t, t._periods[a], 3),
					m1: f(t._periods[a], 1),
					m10: f(t._periods[a], 10),
					m100: f(t._periods[a], 100),
					m1000: f(t._periods[a], 1e3),
					sl: g(l),
					sn: this._minDigits(t, t._periods[l], 1),
					snn: this._minDigits(t, t._periods[l], 2),
					snnn: this._minDigits(t, t._periods[l], 3),
					s1: f(t._periods[l], 1),
					s10: f(t._periods[l], 10),
					s100: f(t._periods[l], 100),
					s1000: f(t._periods[l], 1e3)
				}, y = p, v = i; l >= v; v++) {
				var D = "yowdhms".charAt(v),
					T = new RegExp("\\{" + D + "<\\}([\\s\\S]*)\\{" + D + ">\\}", "g");
				y = y.replace(T, !u && _[v] || u && d[v] ? "$1" : "")
			}
			return e.each(w, function (e, t) {
				var i = new RegExp("\\{" + e + "\\}", "g");
				y = y.replace(i, t)
			}), y
		},
		_minDigits: function (e, t, i) {
			return t = "" + t, t.length >= i ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - i)))
		},
		_translateDigits: function (e, t) {
			return ("" + t).replace(/[0-9]/g, function (t) {
				return e.options.digits[t]
			})
		},
		_determineShow: function (e) {
			var t = e.options.format,
				_ = [];
			return _[i] = t.match("y") ? "?" : t.match("Y") ? "!" : null, _[s] = t.match("o") ? "?" : t.match("O") ? "!" : null, _[n] = t.match("w") ? "?" : t.match("W") ? "!" : null, _[o] = t.match("d") ? "?" : t.match("D") ? "!" : null, _[r] = t.match("h") ? "?" : t.match("H") ? "!" : null, _[a] = t.match("m") ? "?" : t.match("M") ? "!" : null, _[l] = t.match("s") ? "?" : t.match("S") ? "!" : null, _
		},
		_calculatePeriods: function (e, t, _, p) {
			e._now = p, e._now.setMilliseconds(0);
			var c = new Date(e._now.getTime());
			e._since ? p.getTime() < e._since.getTime() ? e._now = p = c : p = e._since : (c.setTime(e._until.getTime()), p.getTime() > e._until.getTime() && (e._now = p = c));
			var u = [0, 0, 0, 0, 0, 0, 0];
			if (t[i] || t[s]) {
				var d = this._getDaysInMonth(p.getFullYear(), p.getMonth()),
					h = this._getDaysInMonth(c.getFullYear(), c.getMonth()),
					m = c.getDate() == p.getDate() || c.getDate() >= Math.min(d, h) && p.getDate() >= Math.min(d, h),
					g = function (e) {
						return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
					},
					f = Math.max(0, 12 * (c.getFullYear() - p.getFullYear()) + c.getMonth() - p.getMonth() + (c.getDate() < p.getDate() && !m || m && g(c) < g(p) ? -1 : 0));
				u[i] = t[i] ? Math.floor(f / 12) : 0, u[s] = t[s] ? f - 12 * u[i] : 0, p = new Date(p.getTime());
				var w = p.getDate() == d,
					y = this._getDaysInMonth(p.getFullYear() + u[i], p.getMonth() + u[s]);
				p.getDate() > y && p.setDate(y), p.setFullYear(p.getFullYear() + u[i]), p.setMonth(p.getMonth() + u[s]), w && p.setDate(y)
			}
			var v = Math.floor((c.getTime() - p.getTime()) / 1e3),
				D = function (e, i) {
					u[e] = t[e] ? Math.floor(v / i) : 0, v -= u[e] * i
				};
			if (D(n, 604800), D(o, 86400), D(r, 3600), D(a, 60), D(l, 1), v > 0 && !e._since)
				for (var T = [1, 12, 4.3482, 7, 24, 60, 60], M = l, S = 1, b = l; b >= i; b--) t[b] && (u[M] >= S && (u[M] = 0, v = 1), v > 0 && (u[b]++, v = 0, M = b, S = 1)), S *= T[b];
			if (_)
				for (var b = i; l >= b; b++) _ && u[b] ? _-- : _ || (u[b] = 0);
			return u
		}
	})
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/aspro_next/js/jquery.countdown-ru.min.js?15700193901011";s:6:"source";s:54:"/bitrix/templates/aspro_next/js/jquery.countdown-ru.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e) {
	e.countdown.regionalOptions.ru = {
		labels: [BX.message("COUNTDOWN_YEAR0"), BX.message("COUNTDOWN_MONTH0"), BX.message("COUNTDOWN_WEAK0"), BX.message("COUNTDOWN_DAY0"), BX.message("COUNTDOWN_HOUR"), BX.message("COUNTDOWN_MIN"), BX.message("COUNTDOWN_SEC")],
		labels1: [BX.message("COUNTDOWN_YEAR1"), BX.message("COUNTDOWN_MONTH1"), BX.message("COUNTDOWN_WEAK1"), BX.message("COUNTDOWN_DAY1"), BX.message("COUNTDOWN_HOUR"), BX.message("COUNTDOWN_MIN"), BX.message("COUNTDOWN_SEC")],
		labels2: [BX.message("COUNTDOWN_YEAR2"), BX.message("COUNTDOWN_MONTH2"), BX.message("COUNTDOWN_WEAK2"), BX.message("COUNTDOWN_DAY2"), BX.message("COUNTDOWN_HOUR"), BX.message("COUNTDOWN_MIN"), BX.message("COUNTDOWN_SEC")],
		compactLabels: ["л", "м", "н", "д"],
		compactLabels1: ["г", "м", "н", "д"],
		whichLabels: function (e) {
			var s = e % 10,
				O = Math.floor(e % 100 / 10);
			return 1 == e ? 1 : s >= 2 && 4 >= s && 1 != O ? 2 : 1 == s && 1 != O ? 1 : 0
		},
		digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
		timeSeparator: ":",
		isRTL: !1
	}, e.countdown.setDefaults(e.countdown.regionalOptions.ru)
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/jquery.ikSelect.min.js?157001939017725";s:6:"source";s:50:"/bitrix/templates/aspro_next/js/jquery.ikSelect.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (t, i, e, s) {
	var o, n = t(i),
		r = {
			syntax: '<div class="ik_select_link"><div class="ik_select_link_text"></div></div><div class="ik_select_dropdown"><div class="ik_select_list"></div></div>',
			autoWidth: !0,
			ddFullWidth: !0,
			equalWidths: !0,
			dynamicWidth: !1,
			extractLink: !1,
			customClass: "",
			linkCustomClass: "",
			ddCustomClass: "",
			ddMaxHeight: 200,
			filter: !1,
			nothingFoundText: "Nothing found",
			isDisabled: !1,
			onInit: function () {},
			onShow: function () {},
			onHide: function () {},
			onKeyUp: function () {},
			onKeyDown: function () {},
			onHoverMove: function () {}
		};
	if (!t.browser) {
		var h = function (t) {
				t = t.toLowerCase();
				var i = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
				return {
					browser: i[1] || "",
					version: i[2] || "0"
				}
			}(navigator.userAgent),
			l = {};
		h.browser && (l[h.browser] = !0, l.version = h.version), l.chrome ? l.webkit = !0 : l.webkit && (l.safari = !0), t.browser = l
	}

	function p(i, e) {
		var s = {};
		for (var o in this.el = i, this.$el = t(i), r) s[o] = this.$el.data(o.toLowerCase());
		this.options = t.extend({}, r, e, s), t.browser.mobile && (this.options.filter = !1), this.init()
	}
	t.browser.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent), t.browser.operamini = "[object OperaMini]" === Object.prototype.toString.call(i.operamini), t.extend(p.prototype, {
		init: function () {
			this.$wrapper = t('<div class="ik_select">' + this.options.syntax + "</div>"), this.$link = t(".ik_select_link", this.$wrapper), this.$linkText = t(".ik_select_link_text", this.$wrapper), this.$dropdown = t(".ik_select_dropdown", this.$wrapper), this.$list = t(".ik_select_list", this.$wrapper), this.$listInner = t('<div class="ik_select_list_inner"/>'), this.$active = t([]), this.$hover = t([]), this.hoverIndex = 0, this.$optionSet = t([]), this.$optgroupSet = t([]), this.$list.append(this.$listInner), this.options.filter && (this.$filter = t([]), this.$optionSetOriginal = t([]), this.$nothingFoundText = t('<div class="ik_select_nothing_found"/>').html(this.options.nothingFoundText), this.$filterWrap = t(".ik_select_filter_wrap", this.$wrapper), this.$filterWrap.length || (this.$filterWrap = t('<div class="ik_select_filter_wrap"/>')), this.$filter = t('<input type="text" class="ik_select_filter">'), this.$filterWrap.append(this.$filter), this.$list.prepend(this.$filterWrap), this.$filter.on({
				"keydown.ikSelect keyup.ikSelect": t.proxy(this, "_elKeyUpDown"),
				"keyup.ikSelect": t.proxy(this, "_filterKeyup")
			})), this.$wrapper.addClass(this.options.customClass), this.$link.addClass(this.options.linkCustomClass || this.options.customClass && this.options.customClass + "-link"), this.$dropdown.addClass(this.options.ddCustomClass || this.options.customClass && this.options.customClass + "-dd"), this.reset(), this.toggle(!(this.options.isDisabled || this.$el.prop("disabled") || this.$el.hasClass("hidden"))), this.$link.on("click.ikSelect", t.proxy(this, "_linkClick")), this.$el.on({
				"focus.ikSelect": t.proxy(this, "_elFocus"),
				"blur.ikSelect": t.proxy(this, "_elBlur"),
				"change.ikSelect": t.proxy(this, "_syncOriginalOption"),
				"keydown.ikSelect keyup.ikSelect": t.proxy(this, "_elKeyUpDown")
			}), this.$list.on({
				"click.ikSelect": t.proxy(this, "_optionClick"),
				"mouseover.ikSelect": t.proxy(this, "_optionMouseover")
			}, ".ik_select_option"), this.$wrapper.on("click", function () {
				return !1
			}), this.$el.after(this.$wrapper), this.redraw(), this.$el.appendTo(this.$wrapper), this.options.onInit(this), this.$el.trigger("ikinit", this)
		},
		_linkClick: function () {
			this.isDisabled || (this === o ? this.hideDropdown() : this.showDropdown())
		},
		_optionClick: function () {
			this._makeOptionActive(this.searchIndexes ? this.$optionSetOriginal.index(this.$hover) : this.hoverIndex, !0), this.hideDropdown(), this.$el.change().focus()
		},
		_optionMouseover: function (i) {
			var e = t(i.currentTarget);
			e.hasClass("ik_select_option_disabled") || (this.$hover.removeClass("ik_select_hover"), this.$hover = e.addClass("ik_select_hover"), this.hoverIndex = this.$optionSet.index(this.$hover))
		},
		_makeOptionActive: function (i, e) {
			var s = t(this.el.options[i]),
				o = "";
			s.data("img_src") && (o += '<span class="icon_color" style="background: url(' + s.data("img_src") + ')"></span>', this.$link.addClass("img")), s.attr("title") && this.$link.attr("title", s.attr("title")), o += s.text(), this.$linkText.html(o), this.$link.toggleClass("ik_select_link_novalue", !s.attr("value")), this.$hover.removeClass("ik_select_hover"), this.$active.removeClass("ik_select_active"), this.$hover = this.$active = this.$optionSet.eq(i).addClass("ik_select_hover ik_select_active"), this.hoverIndex = i, e && this._syncFakeOption()
		},
		_elKeyUpDown: function (i) {
			var e, s = t(i.currentTarget),
				o = i.type,
				n = i.which;
			switch (n) {
				case 38:
					"keydown" === o && (i.preventDefault(), this._moveToPrevActive());
					break;
				case 40:
					"keydown" === o && (i.preventDefault(), this._moveToNextActive());
					break;
				case 33:
					"keydown" === o && (i.preventDefault(), e = this.$hover.position().top - this.$listInner.height(), this._moveToPrevActive(function (t) {
						return t <= e
					}));
					break;
				case 34:
					"keydown" === o && (i.preventDefault(), e = this.$hover.position().top + this.$listInner.height(), this._moveToNextActive(function (t) {
						return t >= e
					}));
					break;
				case 36:
					"keydown" === o && s.is(this.$el) && (i.preventDefault(), this._moveToFirstActive());
					break;
				case 35:
					"keydown" === o && s.is(this.$el) && (i.preventDefault(), this._moveToLastActive());
					break;
				case 32:
					"keydown" === o && s.is(this.$el) && (i.preventDefault(), this.$dropdown.is(":visible") ? this.$hover.click() : this._linkClick());
					break;
				case 13:
					"keydown" === o && this.$dropdown.is(":visible") && (i.preventDefault(), this.$hover.click());
					break;
				case 27:
					"keydown" === o && this.$dropdown.is(":visible") && (i.preventDefault(), this.hideDropdown());
					break;
				case 9:
					"keydown" === o && (t.browser.webkit && this.$dropdown.is(":visible") ? i.preventDefault() : this.hideDropdown());
					break;
				default:
					"keyup" === o && s.is(this.$el) && this._syncOriginalOption()
			}
			"keyup" === o && t.browser.mozilla && this._syncFakeOption(), "keydown" === o && (this.options.onKeyDown(this, n), this.$el.trigger("ikkeydown", [this, n])), "keyup" === o && (this.options.onKeyUp(this, n), this.$el.trigger("ikkeyup", [this, n]))
		},
		_moveTo: function (i) {
			var e, s, o;
			if (!this.$dropdown.is(":visible") && t.browser.webkit) return this.showDropdown(), this;
			!this.$dropdown.is(":visible") || t.browser.mozilla ? this._makeOptionActive(i, !0) : (this.$hover.removeClass("ik_select_hover"), this.$hover = this.$optionSet.eq(i).addClass("ik_select_hover"), this.hoverIndex = i), s = (e = this.$hover.position().top) + this.$active.outerHeight(), this.$hover.index() || (o = this.$hover.closest(".ik_select_optgroup")).length && (e = o.position().top), s > this.$listInner.height() ? this.$listInner.scrollTop(this.$listInner.scrollTop() + s - this.$listInner.height()) : e < 0 && this.$listInner.scrollTop(this.$listInner.scrollTop() + e), this.options.onHoverMove(this), this.$el.trigger("ikhovermove", this)
		},
		_moveToFirstActive: function () {
			for (var t = 0; t < this.$optionSet.length; t++)
				if (!this.$optionSet.eq(t).hasClass("ik_select_option_disabled")) {
					this._moveTo(t);
					break
				}
		},
		_moveToLastActive: function () {
			for (var t = this.$optionSet.length - 1; t >= 0; t++)
				if (!this.$optionSet.eq(t).hasClass("ik_select_option_disabled")) {
					this._moveTo(t);
					break
				}
		},
		_moveToPrevActive: function (t) {
			for (var i, e = this.hoverIndex - 1; e >= 0; e--)
				if (!(i = this.$optionSet.eq(e)).hasClass("ik_select_option_disabled") && (void 0 === t || t(i.position().top))) {
					this._moveTo(e);
					break
				}
		},
		_moveToNextActive: function (t) {
			for (var i, e = this.hoverIndex + 1; e < this.$optionSet.length; e++)
				if (!(i = this.$optionSet.eq(e)).hasClass("ik_select_option_disabled") && (void 0 === t || t(i.position().top))) {
					this._moveTo(e);
					break
				}
		},
		_elFocus: function () {
			var t, i, e;
			if (this.isDisabled) return this;
			this.$link.addClass("ik_select_link_focus"), ((t = this.$wrapper.offset().top) + this.$wrapper.height() > (i = n.scrollTop()) + (e = n.height()) || t < i) && n.scrollTop(t - e / 2)
		},
		_elBlur: function () {
			this.$link.removeClass("ik_select_link_focus")
		},
		_filterKeyup: function () {
			var i, e = t.trim(this.$filter.val());
			this.$listInner.show(), void 0 === this.searchIndexes && (this.$optionSetOriginal = this.$optionSet, this.searchIndexes = t.makeArray(this.$optionSet.map(function (i, e) {
				return t(e).text().toLowerCase()
			}))), e !== i && ("" === e ? (this.$optionSet = this.$optionSetOriginal.show(), this.$optgroupSet.show(), this.$nothingFoundText.remove()) : (this.$optionSet = t([]), this.$optgroupSet.show(), this.$optionSetOriginal.each(t.proxy(function (i, s) {
				var o = t(s);
				this.searchIndexes[i].indexOf(e.toLowerCase()) >= 0 ? (this.$optionSet = this.$optionSet.add(o), o.show()) : o.hide()
			}, this)), this.$optionSet.length ? (this.$nothingFoundText.remove(), this.$optgroupSet.each(function (i, e) {
				var s = t(e);
				t(".ik_select_option:visible", s).length || s.hide()
			}), this.$hover.is(":visible") || this._moveToFirstActive()) : (this.$listInner.hide(), this.$list.append(this.$nothingFoundText))), i = e)
		},
		_syncFakeOption: function () {
			this.el.selectedIndex = this.hoverIndex
		},
		_syncOriginalOption: function () {
			this._makeOptionActive(this.el.selectedIndex)
		},
		_fixHeight: function () {
			this.$dropdown.show(), this.$listInner.css("height", "auto"), this.$listInner.height() > this.options.ddMaxHeight && this.$listInner.css({
				overflow: "auto",
				height: this.options.ddMaxHeight,
				position: "relative"
			}), this.$dropdown.hide()
		},
		redraw: function () {
			var i, e, s;
			this.options.filter && this.$filter.hide(), this.$wrapper.css({
				position: "relative"
			}), this.$dropdown.css({
				position: "absolute",
				zIndex: 9998,
				width: "100%"
			}), this.$list.css({
				position: "relative"
			}), this._fixHeight(), (this.options.dynamicWidth || this.options.autoWidth || this.options.ddFullWidth) && (this.$wrapper.width(""), this.$dropdown.show().width(9999), this.$listInner.css("float", "left"), this.$list.css("float", "left"), i = this.$list.outerWidth(!0), e = this.$listInner.width() - this.$listInnerUl.width(), this.$list.css("float", ""), this.$listInner.css("float", ""), this.$dropdown.css("width", "100%"), this.options.ddFullWidth && this.$dropdown.width(i + e), this.options.dynamicWidth ? this.$wrapper.css({
				display: "inline-block",
				width: "auto",
				verticalAlign: "top"
			}) : this.options.autoWidth && this.$wrapper.width(i + (this.options.equalWidths ? e : 0)).addClass("ik_select_autowidth"), s = this.$wrapper.parent().width(), this.$wrapper.width() > s && this.$wrapper.width(s)), this.options.filter && this.$filter.show().outerWidth(this.$filterWrap.width()), this.$dropdown.hide(), this.$el.css({
				position: "absolute",
				margin: 0,
				padding: 0,
				top: 0,
				left: -9999
			}), t.browser.mobile && this.$el.css({
				opacity: 0,
				left: 0,
				height: this.$wrapper.height(),
				width: this.$wrapper.width()
			})
		},
		reset: function () {
			var i = "";
			this.$linkText.html(this.$el.val()), this.$listInner.empty(), i = "<ul>", this.$el.children().each(t.proxy(function (e, s) {
				var o, n = t(s),
					r = s.tagName.toLowerCase();
				"optgroup" === r ? (o = n.children().map(t.proxy(function (i, e) {
					return this._generateOptionObject(t(e))
				}, this)), o = t.makeArray(o), i += this._renderListOptgroup({
					label: n.attr("label") || "&nbsp;",
					isDisabled: n.is(":disabled"),
					options: o
				})) : "option" === r && (i += this._renderListOption(this._generateOptionObject(n)))
			}, this)), i += "</ul>", this.$listInner.append(i), this._syncOriginalOption(), this.$listInnerUl = t("> ul", this.$listInner), this.$optgroupSet = t(".ik_select_optgroup", this.$listInner), this.$optionSet = t(".ik_select_option", this.$listInner)
		},
		hideDropdown: function () {
			this.options.filter && (this.$filter.val(""), this._filterKeyup()), this.$dropdown.hide().appendTo(this.$wrapper).css({
				left: "",
				top: ""
			}), this.options.extractLink && (this.$wrapper.outerWidth(this.$wrapper.data("outerWidth")), this.$wrapper.height(""), this.$link.removeClass("ik_select_link_extracted").css({
				position: "",
				top: "",
				left: "",
				zIndex: ""
			}).prependTo(this.$wrapper)), o = null, this.$el.focus(), this.options.onHide(this), this.$el.trigger("ikhide", this)
		},
		showDropdown: function () {
			var i, e, s, r, h, l, p, a, d;
			o !== this && this.$optionSet.length && (o && o.hideDropdown(), this._syncOriginalOption(), t(".show_un_props").length ? this.$dropdown.addClass("show_un_props") : t(".unshow_un_props").length && this.$dropdown.addClass("unshow_un_props"), this.$dropdown.show(), i = this.$dropdown.offset(), e = this.$dropdown.outerWidth(!0), s = this.$dropdown.outerHeight(!0), r = this.$wrapper.offset(), l = n.width(), p = n.height(), a = n.scrollTop(), this.options.ddFullWidth && r.left + e > l && (i.left = l - e), i.top + s > a + p && (i.top = a + p - s), this.$dropdown.css({
				left: i.left,
				top: i.top,
				width: this.$dropdown.width()
			}).appendTo("body"), this.options.extractLink && (d = this.$link.offset(), h = this.$wrapper.outerWidth(), this.$wrapper.data("outerWidth", h), this.$wrapper.outerWidth(h), this.$wrapper.outerHeight(this.$wrapper.outerHeight()), this.$link.outerWidth(this.$link.outerWidth()), this.$link.addClass("ik_select_link_extracted").css({
				position: "absolute",
				top: d.top,
				left: d.left,
				zIndex: 9999
			}).appendTo("body")), this.$listInner.scrollTop(this.$active.position().top - this.$list.height() / 2), this.options.filter ? this.$filter.focus() : this.$el.focus(), o = this, this.options.onShow(this), this.$el.trigger("ikshow", this))
		},
		_generateOptionObject: function (t) {
			return {
				value: t.val(),
				label: t.html() || "&nbsp;",
				isDisabled: t.is(":disabled"),
				dataParam: t.data(),
				className: t.attr("class"),
				title: t.attr("title")
			}
		},
		_renderListOption: function (t) {
			var i, e = t.isDisabled ? " ik_select_option_disabled" : "",
				s = t.dataParam.img_src ? " img" : "",
				o = "hidden" == t.className ? " missing" : "",
				n = t.title;
			return i = '<li class="ik_select_option' + e + s + o + '" title="' + n + '" data-value="' + t.value + '">', i += '<span class="ik_select_option_label" title="' + n + '">', t.dataParam.img_src && (i += '<span class="icon_color" style="background: url(' + t.dataParam.img_src + ')"></span>'), i += t.label, i += "</span>", i += "</li>"
		},
		_renderListOptgroup: function (i) {
			var e, s = i.isDisabled ? " ik_select_optgroup_disabled" : "";
			return e = '<li class="ik_select_optgroup' + s + '">', e += '<div class="ik_select_optgroup_label">' + i.label + "</div>", e += "<ul>", t.isArray(i.options) && t.each(i.options, t.proxy(function (t, i) {
				e += this._renderListOption({
					value: i.value,
					label: i.label || "&nbsp;",
					isDisabled: i.isDisabled
				})
			}, this)), e += "</ul>", e += "</li>"
		},
		_renderOption: function (t) {
			return '<option value="' + t.value + '">' + t.label + "</option>"
		},
		_renderOptgroup: function (i) {
			var e;
			return e = '<optgroup label="' + i.label + '">', t.isArray(i.options) && t.each(i.options, t.proxy(function (t, i) {
				e += this._renderOption(i)
			}, this)), e += "</option>"
		},
		addOptions: function (i, e, s) {
			var o, n, r = "",
				h = "",
				l = this.$listInnerUl,
				p = this.$el;
			i = t.isArray(i) ? i : [i], t.each(i, t.proxy(function (t, i) {
				r += this._renderListOption(i), h += this._renderOption(i)
			}, this)), t.isNumeric(s) && s < this.$optgroupSet.length && (l = this.$optgroupSet.eq(s), p = t("optgroup", this.$el).eq(s)), t.isNumeric(e) && e < (o = t(".ik_select_option", l)).length && (o.eq(e).before(r), (n = t("option", p)).eq(e).before(h)), n || (l.append(r), p.append(h)), this.$optionSet = t(".ik_select_option", this.$listInner), this._fixHeight()
		},
		addOptgroups: function (i, e) {
			var s = "",
				o = "";
			i && (i = t.isArray(i) ? i : [i], t.each(i, t.proxy(function (t, i) {
				s += this._renderListOptgroup(i), o += this._renderOptgroup(i)
			}, this)), t.isNumeric(e) && e < this.$optgroupSet.length ? (this.$optgroupSet.eq(e).before(s), t("optgroup", this.$el).eq(e).before(o)) : (this.$listInnerUl.append(s), this.$el.append(o)), this.$optgroupSet = t(".ik_select_optgroup", this.$listInner), this.$optionSet = t(".ik_select_option", this.$listInner), this._fixHeight())
		},
		removeOptions: function (i, e) {
			var s, o, n = t([]);
			t.isNumeric(e) && (e < 0 ? (s = t("> .ik_select_option", this.$listInnerUl), o = t("> option", this.$el)) : e < this.$optgroupSet.length && (s = t(".ik_select_option", this.$optgroupSet.eq(e)), o = t("optgroup", this.$el).eq(e).find("option"))), s || (s = this.$optionSet, o = t(this.el.options)), t.isArray(i) || (i = [i]), t.each(i, t.proxy(function (t, i) {
				i < s.length && (n = n.add(s.eq(i)).add(o.eq(i)))
			}, this)), n.remove(), this.$optionSet = t(".ik_select_option", this.$listInner), this._syncOriginalOption(), this._fixHeight()
		},
		removeOptgroups: function (i) {
			var e = t([]),
				s = t("optgroup", this.el);
			t.isArray(i) || (i = [i]), t.each(i, t.proxy(function (t, i) {
				i < this.$optgroupSet.length && (e = e.add(this.$optgroupSet.eq(i)).add(s.eq(i)))
			}, this)), e.remove(), this.$optionSet = t(".ik_select_option", this.$listInner), this.$optgroupSet = t(".ik_select_optgroup", this.$listInner), this._syncOriginalOption(), this._fixHeight()
		},
		disable: function () {
			this.toggle(!1)
		},
		enable: function () {
			this.toggle(!0)
		},
		toggle: function (t) {
			this.isDisabled = void 0 !== t ? !t : !this.isDisabled, this.$el.prop("disabled", this.isDisabled), this.$link.toggleClass("ik_select_link_disabled", this.isDisabled)
		},
		select: function (t, i) {
			i ? this.el.selectedIndex = t : this.$el.val(t), this._syncOriginalOption()
		},
		disableOptgroups: function (t) {
			this.toggleOptgroups(t, !1)
		},
		enableOptgroups: function (t) {
			this.toggleOptgroups(t, !0)
		},
		toggleOptgroups: function (i, e) {
			t.isArray(i) || (i = [i]), t.each(i, t.proxy(function (i, s) {
				var o, n, r, h = [],
					l = t("optgroup", this.$el).eq(s);
				o = void 0 !== e ? e : l.prop("disabled"), l.prop("disabled", !o), this.$optgroupSet.eq(s).toggleClass("ik_select_optgroup_disabled", !o), n = t("option", l);
				for (var p = r = t(this.el.options).index(n.eq(0)); p < r + n.length; p++) h.push(p);
				this.toggleOptions(h, !0, o)
			}, this)), this._syncOriginalOption()
		},
		disableOptions: function (t, i) {
			this.toggleOptions(t, i, !1)
		},
		enableOptions: function (t, i) {
			this.toggleOptions(t, i, !0)
		},
		toggleOptions: function (i, e, s) {
			var o = t("option", this.el);
			t.isArray(i) || (i = [i]);
			var n = t.proxy(function (t, i) {
				var e = void 0 !== s ? s : t.prop("disabled");
				t.prop("disabled", !e), this.$optionSet.eq(i).toggleClass("ik_select_option_disabled", !e)
			}, this);
			t.each(i, function (i, s) {
				e ? n(o.eq(s), s) : o.each(function (i, e) {
					var o = t(e);
					if (o.val() === s) return n(o, i), this
				})
			}), this._syncOriginalOption()
		},
		detach: function () {
			this.$el.off(".ikSelect").css({
				width: "",
				height: "",
				left: "",
				top: "",
				position: "",
				margin: "",
				padding: ""
			}), this.$wrapper.before(this.$el), this.$wrapper.remove(), this.$el.removeData("plugin_ikSelect")
		}
	}), t.fn.ikSelect = function (i) {
		var e;
		return t.browser.operamini ? this : (e = Array.prototype.slice.call(arguments, 1), this.each(function () {
			var s;
			t.data(this, "plugin_ikSelect") ? "string" == typeof i && "function" == typeof (s = t.data(this, "plugin_ikSelect"))[i] && s[i].apply(s, e) : t.data(this, "plugin_ikSelect", new p(this, i))
		}))
	}, t.ikSelect = {
		extendDefaults: function (i) {
			t.extend(r, i)
		}
	}, t(e).bind("click.ikSelect", function () {
		o && o.hideDropdown()
	})
}(jQuery, window, document);
/* End */
;; /* Start:"a:4:{s:4:"full";s:80:"/bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js?15700193907784";s:6:"source";s:65:"/bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function (e, t, n) {
	typeof define == "function" && define.amd ? define(["jquery"], function (r) {
		return n(r, e, t), r.mobile
	}) : n(e.jQuery, e, t)
})(this, document, function (e, t, n, r) {
	(function (e, t, n, r) {
		function T(e) {
			while (e && typeof e.originalEvent != "undefined") e = e.originalEvent;
			return e
		}

		function N(t, n) {
			var i = t.type,
				s, o, a, l, c, h, p, d, v;
			t = e.Event(t), t.type = n, s = t.originalEvent, o = e.event.props, i.search(/^(mouse|click)/) > -1 && (o = f);
			if (s)
				for (p = o.length, l; p;) l = o[--p], t[l] = s[l];
			i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1);
			if (i.search(/^touch/) !== -1) {
				a = T(s), i = a.touches, c = a.changedTouches, h = i && i.length ? i[0] : c && c.length ? c[0] : r;
				if (h)
					for (d = 0, v = u.length; d < v; d++) l = u[d], t[l] = h[l]
			}
			return t
		}

		function C(t) {
			var n = {},
				r, s;
			while (t) {
				r = e.data(t, i);
				for (s in r) r[s] && (n[s] = n.hasVirtualBinding = !0);
				t = t.parentNode
			}
			return n
		}

		function k(t, n) {
			var r;
			while (t) {
				r = e.data(t, i);
				if (r && (!n || r[n])) return t;
				t = t.parentNode
			}
			return null
		}

		function L() {
			g = !1
		}

		function A() {
			g = !0
		}

		function O() {
			E = 0, v.length = 0, m = !1, A()
		}

		function M() {
			L()
		}

		function _() {
			D(), c = setTimeout(function () {
				c = 0, O()
			}, e.vmouse.resetTimerDuration)
		}

		function D() {
			c && (clearTimeout(c), c = 0)
		}

		function P(t, n, r) {
			var i;
			if (r && r[t] || !r && k(n.target, t)) i = N(n, t), e(n.target).trigger(i);
			return i
		}

		function H(t) {
			var n = e.data(t.target, s),
				r;
			!m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
		}

		function B(t) {
			var n = T(t).touches,
				r, i, o;
			n && n.length === 1 && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
		}

		function j(e) {
			if (g) return;
			d || P("vmousecancel", e, C(e.target)), d = !0, _()
		}

		function F(t) {
			if (g) return;
			var n = T(t).touches[0],
				r = d,
				i = e.vmouse.moveDistanceThreshold,
				s = C(t.target);
			d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i, d && !r && P("vmousecancel", t, s), P("vmousemove", t, s), _()
		}

		function I(e) {
			if (g) return;
			A();
			var t = C(e.target),
				n, r;
			P("vmouseup", e, t), d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({
				touchID: E,
				x: r.clientX,
				y: r.clientY
			}), m = !0)), P("vmouseout", e, t), d = !1, _()
		}

		function q(t) {
			var n = e.data(t, i),
				r;
			if (n)
				for (r in n)
					if (n[r]) return !0;
			return !1
		}

		function R() {}

		function U(t) {
			var n = t.substr(1);
			return {
				setup: function () {
					q(this) || e.data(this, i, {});
					var r = e.data(this, i);
					r[t] = !0, l[t] = (l[t] || 0) + 1, l[t] === 1 && b.bind(n, H), e(this).bind(n, R), y && (l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
				},
				teardown: function () {
					--l[t], l[t] || b.unbind(n, H), y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
					var r = e(this),
						s = e.data(this, i);
					s && (s[t] = !1), r.unbind(n, R), q(this) || r.removeData(i)
				}
			}
		}
		var i = "virtualMouseBindings",
			s = "virtualTouchID",
			o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
			u = "clientX clientY pageX pageY screenX screenY".split(" "),
			a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
			f = e.event.props.concat(a),
			l = {},
			c = 0,
			h = 0,
			p = 0,
			d = !1,
			v = [],
			m = !1,
			g = !1,
			y = "addEventListener" in n,
			b = e(n),
			w = 1,
			E = 0,
			S, x;
		e.vmouse = {
			moveDistanceThreshold: 10,
			clickDistanceThreshold: 10,
			resetTimerDuration: 1500
		};
		for (x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
		y && n.addEventListener("click", function (t) {
			var n = v.length,
				r = t.target,
				i, o, u, a, f, l;
			if (n) {
				i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThreshold, u = r;
				while (u) {
					for (a = 0; a < n; a++) {
						f = v[a], l = 0;
						if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) {
							t.preventDefault(), t.stopPropagation();
							return
						}
					}
					u = u.parentNode
				}
			}
		}, !0)
	})(e, t, n),
	function (e) {
		e.mobile = {}
	}(e),
	function (e, t) {
		var r = {
			touch: "ontouchend" in n
		};
		e.mobile.support = e.mobile.support || {}, e.extend(e.support, r), e.extend(e.mobile.support, r)
	}(e),
	function (e, t, r) {
		function l(t, n, i, s) {
			var o = i.type;
			i.type = n, s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i), i.type = o
		}
		var i = e(n),
			s = e.mobile.support.touch,
			o = "touchmove scroll",
			u = s ? "touchstart" : "mousedown",
			a = s ? "touchend" : "mouseup",
			f = s ? "touchmove" : "mousemove";
		e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, n) {
			e.fn[n] = function (e) {
				return e ? this.bind(n, e) : this.trigger(n)
			}, e.attrFn && (e.attrFn[n] = !0)
		}), e.event.special.scrollstart = {
			enabled: !0,
			setup: function () {
				function s(e, n) {
					r = n, l(t, r ? "scrollstart" : "scrollstop", e)
				}
				var t = this,
					n = e(t),
					r, i;
				n.bind(o, function (t) {
					if (!e.event.special.scrollstart.enabled) return;
					r || s(t, !0), clearTimeout(i), i = setTimeout(function () {
						s(t, !1)
					}, 50)
				})
			},
			teardown: function () {
				e(this).unbind(o)
			}
		}, e.event.special.tap = {
			tapholdThreshold: 750,
			emitTapOnTaphold: !0,
			setup: function () {
				var t = this,
					n = e(t),
					r = !1;
				n.bind("vmousedown", function (s) {
					function a() {
						clearTimeout(u)
					}

					function f() {
						a(), n.unbind("vclick", c).unbind("vmouseup", a), i.unbind("vmousecancel", f)
					}

					function c(e) {
						f(), !r && o === e.target ? l(t, "tap", e) : r && e.preventDefault()
					}
					r = !1;
					if (s.which && s.which !== 1) return !1;
					var o = s.target,
						u;
					n.bind("vmouseup", a).bind("vclick", c), i.bind("vmousecancel", f), u = setTimeout(function () {
						e.event.special.tap.emitTapOnTaphold || (r = !0), l(t, "taphold", e.Event("taphold", {
							target: o
						}))
					}, e.event.special.tap.tapholdThreshold)
				})
			},
			teardown: function () {
				e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), i.unbind("vmousecancel")
			}
		}, e.event.special.swipe = {
			scrollSupressionThreshold: 30,
			durationThreshold: 1e3,
			horizontalDistanceThreshold: 30,
			verticalDistanceThreshold: 30,
			getLocation: function (e) {
				var n = t.pageXOffset,
					r = t.pageYOffset,
					i = e.clientX,
					s = e.clientY;
				if (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY) || e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX)) i -= n, s -= r;
				else if (s < e.pageY - r || i < e.pageX - n) i = e.pageX - n, s = e.pageY - r;
				return {
					x: i,
					y: s
				}
			},
			start: function (t) {
				var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
					r = e.event.special.swipe.getLocation(n);
				return {
					time: (new Date).getTime(),
					coords: [r.x, r.y],
					origin: e(t.target)
				}
			},
			stop: function (t) {
				var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
					r = e.event.special.swipe.getLocation(n);
				return {
					time: (new Date).getTime(),
					coords: [r.x, r.y]
				}
			},
			handleSwipe: function (t, n, r, i) {
				if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
					var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
					return l(r, "swipe", e.Event("swipe", {
						target: i,
						swipestart: t,
						swipestop: n
					}), !0), l(r, s, e.Event(s, {
						target: i,
						swipestart: t,
						swipestop: n
					}), !0), !0
				}
				return !1
			},
			eventInProgress: !1,
			setup: function () {
				var t, n = this,
					r = e(n),
					s = {};
				t = e.data(this, "mobile-events"), t || (t = {
					length: 0
				}, e.data(this, "mobile-events", t)), t.length++, t.swipe = s, s.start = function (t) {
					if (e.event.special.swipe.eventInProgress) return;
					e.event.special.swipe.eventInProgress = !0;
					var r, o = e.event.special.swipe.start(t),
						u = t.target,
						l = !1;
					s.move = function (t) {
						if (!o || t.isDefaultPrevented()) return;
						r = e.event.special.swipe.stop(t), l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)), Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()
					}, s.stop = function () {
						l = !0, e.event.special.swipe.eventInProgress = !1, i.off(f, s.move), s.move = null
					}, i.on(f, s.move).one(a, s.stop)
				}, r.on(u, s.start)
			},
			teardown: function () {
				var t, n;
				t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
			}
		}, e.each({
			scrollstop: "scrollstart",
			taphold: "tap",
			swipeleft: "swipe.left",
			swiperight: "swipe.right"
		}, function (t, n) {
			e.event.special[t] = {
				setup: function () {
					e(this).bind(n, e.noop)
				},
				teardown: function () {
					e(this).unbind(n)
				}
			}
		})
	}(e, this)
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/aspro_next/js/jquery.dotdotdot.min.js?15700193905908";s:6:"source";s:51:"/bitrix/templates/aspro_next/js/jquery.dotdotdot.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (t, e) {
	function n(t, e, n) {
		var r = t.children(),
			o = !1;
		t.empty();
		for (var i = 0, d = r.length; d > i; i++) {
			var l = r.eq(i);
			if (t.append(l), n && t.append(n), a(t, e)) {
				l.remove(), o = !0;
				break
			}
			n && n.detach()
		}
		return o
	}

	function r(e, n, i, d, l) {
		var s = !1,
			c = "a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
			u = "script, .dotdotdot-keep";
		return e.contents().detach().each(function () {
			var f = this,
				h = t(f);
			if ("undefined" == typeof f || 3 == f.nodeType && 0 == t.trim(f.data).length) return !0;
			if (h.is(u)) e.append(h);
			else {
				if (s) return !0;
				e.append(h), !l || h.is(d.after) || h.find(d.after).length || e[e.is(c) ? "after" : "append"](l), a(i, d) && (s = 3 == f.nodeType ? o(h, n, i, d, l) : r(h, n, i, d, l), s || (h.detach(), s = !0)), s || l && l.detach()
			}
		}), s
	}

	function o(e, n, r, o, d) {
		var c = e[0];
		if (!c) return !1;
		var f = s(c),
			h = -1 !== f.indexOf(" ") ? " " : "　",
			p = "letter" == o.wrap ? "" : h,
			g = f.split(p),
			v = -1,
			w = -1,
			y = 0,
			b = g.length - 1;
		for (o.fallbackToLetter && 0 == y && 0 == b && (p = "", g = f.split(p), b = g.length - 1); b >= y && (0 != y || 0 != b);) {
			var m = Math.floor((y + b) / 2);
			if (m == w) break;
			w = m, l(c, g.slice(0, w + 1).join(p) + o.ellipsis), a(r, o) ? (b = w, o.fallbackToLetter && 0 == y && 0 == b && (p = "", g = g[0].split(p), v = -1, w = -1, y = 0, b = g.length - 1)) : (v = w, y = w)
		}
		if (-1 == v || 1 == g.length && 0 == g[0].length) {
			var T = e.parent();
			e.detach();
			var x = d && d.closest(T).length ? d.length : 0;
			T.contents().length > x ? c = u(T.contents().eq(-1 - x), n) : (c = u(T, n, !0), x || T.detach()), c && (f = i(s(c), o), l(c, f), x && d && t(c).parent().append(d))
		} else f = i(g.slice(0, v + 1).join(p), o), l(c, f);
		return !0
	}

	function a(t, e) {
		return t.innerHeight() > e.maxHeight
	}

	function i(e, n) {
		for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1;) e = e.slice(0, -1);
		return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
	}

	function d(t) {
		return {
			width: t.innerWidth(),
			height: t.innerHeight()
		}
	}

	function l(t, e) {
		t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
	}

	function s(t) {
		return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
	}

	function c(t) {
		do t = t.previousSibling; while (t && 1 !== t.nodeType && 3 !== t.nodeType);
		return t
	}

	function u(e, n, r) {
		var o, a = e && e[0];
		if (a) {
			if (!r) {
				if (3 === a.nodeType) return a;
				if (t.trim(e.text())) return u(e.contents().last(), n)
			}
			for (o = c(a); !o;) {
				if (e = e.parent(), e.is(n) || !e.length) return !1;
				o = c(e[0])
			}
			if (o) return u(t(o), n)
		}
		return !1
	}

	function f(e, n) {
		return e ? "string" == typeof e ? (e = t(e, n), e.length ? e : !1) : e.jquery ? e : !1 : !1
	}

	function h(t) {
		for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; o > r; r++) {
			var a = parseInt(t.css(n[r]), 10);
			isNaN(a) && (a = 0), e -= a
		}
		return e
	}
	if (!t.fn.dotdotdot) {
		t.fn.dotdotdot = function (e) {
			if (0 == this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
			if (this.length > 1) return this.each(function () {
				t(this).dotdotdot(e)
			});
			var o = this;
			o.data("dotdotdot") && o.trigger("destroy.dot"), o.data("dotdotdot-style", o.attr("style") || ""), o.css("word-wrap", "break-word"), "nowrap" === o.css("white-space") && o.css("white-space", "normal"), o.bind_events = function () {
				return o.bind("update.dot", function (e, d) {
					e.preventDefault(), e.stopPropagation(), l.maxHeight = "number" == typeof l.height ? l.height : h(o), l.maxHeight += l.tolerance, "undefined" != typeof d && (("string" == typeof d || "nodeType" in d && 1 === d.nodeType) && (d = t("<div />").append(d).contents()), d instanceof t && (i = d)), g = o.wrapInner('<div class="dotdotdot" />').children(), g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
						height: "auto",
						width: "auto",
						border: "none",
						padding: 0,
						margin: 0
					});
					var c = !1,
						u = !1;
					return s.afterElement && (c = s.afterElement.clone(!0), c.show(), s.afterElement.detach()), a(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)), g.replaceWith(g.contents()), g = null, t.isFunction(l.callback) && l.callback.call(o[0], u, i), s.isTruncated = u, u
				}).bind("isTruncated.dot", function (t, e) {
					return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], s.isTruncated), s.isTruncated
				}).bind("originalContent.dot", function (t, e) {
					return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], i), i
				}).bind("destroy.dot", function (t) {
					t.preventDefault(), t.stopPropagation(), o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").data("dotdotdot", !1)
				}), o
			}, o.unbind_events = function () {
				return o.unbind(".dot"), o
			}, o.watch = function () {
				if (o.unwatch(), "window" == l.watch) {
					var e = t(window),
						n = e.width(),
						r = e.height();
					e.bind("resize.dot" + s.dotId, function () {
						n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(), r = e.height(), u && clearInterval(u), u = setTimeout(function () {
							o.trigger("update.dot")
						}, 100))
					})
				} else c = d(o), u = setInterval(function () {
					if (o.is(":visible")) {
						var t = d(o);
						(c.width != t.width || c.height != t.height) && (o.trigger("update.dot"), c = t)
					}
				}, 500);
				return o
			}, o.unwatch = function () {
				return t(window).unbind("resize.dot" + s.dotId), u && clearInterval(u), o
			};
			var i = o.contents(),
				l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e),
				s = {},
				c = {},
				u = null,
				g = null;
			return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), s.afterElement = f(l.after, o), s.isTruncated = !1, s.dotId = p++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), l.watch && o.watch(), o
		}, t.fn.dotdotdot.defaults = {
			ellipsis: "... ",
			wrap: "word",
			fallbackToLetter: !0,
			lastCharacter: {},
			tolerance: 0,
			callback: null,
			after: null,
			height: null,
			watch: !1,
			windowResizeFix: !0
		}, t.fn.dotdotdot.defaultArrays = {
			lastCharacter: {
				remove: [" ", "　", ",", ";", ".", "!", "?"],
				noEllipsis: []
			}
		}, t.fn.dotdotdot.debug = function (t) {};
		var p = 1,
			g = t.fn.html;
		t.fn.html = function (n) {
			return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
		};
		var v = t.fn.text;
		t.fn.text = function (n) {
			return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : v.apply(this, arguments)
		}
	}
}(jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:66:"/bitrix/templates/aspro_next/js/rating_likes.min.js?15700193907297";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/rating_likes.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!BXRL) var BXRL = {},
	BXRLW = null;
RatingLikes = function (t, e, i, n, o, p, s, a, u) {
	return this.enabled = !0, this.likeId = t, this.entityTypeId = e, this.entityId = i, this.available = "Y" == n, this.userId = o, this.localize = p, this.template = s, this.pathToUserProfile = a, this.pathToAjax = "string" == typeof u ? u : "/bitrix/components/bitrix/rating.vote/vote.ajax.php", this.box = BX("bx-ilike-button-" + t), null === this.box ? (this.enabled = !1, !1) : (this.button = BX.findChild(this.box, {
		className: "bx-ilike-left-wrap"
	}, !0, !1), this.wrapp = BX.findChild(this.box, {
		className: "all-wrapper"
	}, !0, !1), this.buttonText = BX.findChild(this.button, {
		className: "bx-ilike-text"
	}, !0, !1), this.count = BX.findChild(this.box, {
		tagName: "span",
		className: "bx-ilike-right-wrap"
	}, !0, !1), this.countText = BX.findChild(this.count, {
		tagName: "span",
		className: "bx-ilike-right"
	}, !0, !1), this.popup = null, this.popupId = null, this.popupOpenId = null, this.popupTimeoutId = null, this.popupContent = BX.findChild(BX("bx-ilike-popup-cont-" + t), {
		tagName: "span",
		className: "bx-ilike-popup"
	}, !0, !1), this.popupContentPage = 1, this.popupListProcess = !1, this.popupTimeout = !1, this.likeTimeout = !1, void(this.lastVote = BX.hasClass("standart" == s ? this.button : this.count, "bx-you-like") ? "plus" : "cancel"))
}, RatingLikes.LiveUpdate = function (t) {
	if (t.USER_ID == BX.message("USER_ID")) return !1;
	for (var e in BXRL)
		if (BXRL.hasOwnProperty(e) && BXRL[e].entityTypeId == t.ENTITY_TYPE_ID && BXRL[e].entityId == t.ENTITY_ID) {
			var i = BXRL[e];
			i.countText.innerHTML = parseInt(t.TOTAL_POSITIVE_VOTES), i.count.insertBefore(BX.create("span", {
				props: {
					className: "bx-ilike-plus-one"
				},
				style: {
					width: i.countText.clientWidth - 8 + "px",
					height: i.countText.clientHeight - 8 + "px"
				},
				html: "ADD" == t.TYPE ? "+1" : "-1"
			}), i.count.firstChild), i.popup && (i.popup.close(), i.popupContentPage = 1)
		}
}, RatingLikes.Set = function (t, e, i, n, o, p, s, a, u) {
	if (void 0 === s && (s = "standart"), !BXRL[t] || BXRL[t].tryToSet <= 5) {
		var l = BXRL[t] && BXRL[t].tryToSet ? BXRL[t].tryToSet : 1;
		BXRL[t] = new RatingLikes(t, e, i, n, o, p, s, a, u), BXRL[t].enabled ? RatingLikes.Init(t) : setTimeout(function () {
			BXRL[t].tryToSet = l + 1, RatingLikes.Set(t, e, i, n, o, p, s, a, u)
		}, 500)
	}
}, RatingLikes.Init = function (t) {
	BXRL[t].available ? (BX.bind("standart" == BXRL[t].template ? BXRL[t].button : BXRL[t].buttonText, "click", function (e) {
		clearTimeout(BXRL[t].likeTimeout), BX.hasClass("standart" == BXRL[t].template ? this : BXRL[t].count, "bx-you-like") ? (BXRL[t].buttonText.innerHTML = BXRL[t].localize.LIKE_N, BXRL[t].countText.innerHTML = parseInt(BXRL[t].countText.innerHTML) - 1, BX.removeClass("standart" == BXRL[t].template ? this : BXRL[t].count, "bx-you-like"), BXRL[t].likeTimeout = setTimeout(function () {
			"cancel" != BXRL[t].lastVote && RatingLikes.Vote(t, "cancel")
		}, 1e3)) : (BXRL[t].buttonText.innerHTML = BXRL[t].localize.LIKE_Y, BXRL[t].countText.innerHTML = parseInt(BXRL[t].countText.innerHTML) + 1, BX.addClass("standart" == BXRL[t].template ? this : BXRL[t].count, "bx-you-like"), BXRL[t].likeTimeout = setTimeout(function () {
			"plus" != BXRL[t].lastVote && RatingLikes.Vote(t, "plus")
		}, 1e3)), BX.removeClass(this.box, "bx-ilike-button-hover"), BX.PreventDefault(e)
	}), BX.bind(BXRL[t].box, "mouseover", function () {
		BX.addClass(this, "bx-ilike-button-hover")
	}), BX.bind(BXRL[t].box, "mouseout", function () {
		BX.removeClass(this, "bx-ilike-button-hover")
	})) : void 0 != BXRL[t].buttonText && (BXRL[t].buttonText.innerHTML = BXRL[t].localize.LIKE_D), RatingLikes.PopupScroll(t), console.log(), BX.bind(BXRL[t].wrapp, "mouseover", function () {
		clearTimeout(BXRL[t].popupTimeoutId), BXRL[t].popupTimeoutId = setTimeout(function () {
			return BXRLW == t ? !1 : (1 == BXRL[t].popupContentPage && RatingLikes.List(t, 1), void(BXRL[t].popupTimeoutId = setTimeout(function () {
				RatingLikes.OpenWindow(t)
			}, 400)))
		}, 400)
	}), BX.bind(BXRL[t].wrapp, "mouseout", function () {
		clearTimeout(BXRL[t].popupTimeoutId)
	}), BX.bind(BXRL[t].box, "mouseover", function () {
		clearTimeout(BXRL[t].popupTimeout)
	}), BX.bind(BXRL[t].box, "mouseout", function () {
		clearTimeout(BXRL[t].popupTimeout), BXRL[t].popupTimeout = setTimeout(function () {
			null !== BXRL[t].popup && (BXRL[t].popup.close(), BXRLW = null)
		}, 1e3)
	})
}, RatingLikes.OpenWindow = function (t) {
	return 0 == parseInt(BXRL[t].countText.innerHTML) ? !1 : (null == BXRL[t].popup && (BXRL[t].popup = new BX.PopupWindow("ilike-popup-" + t, "standart" == BXRL[t].template ? BXRL[t].count : BXRL[t].box, {
		lightShadow: !0,
		offsetLeft: 5,
		autoHide: !0,
		closeByEsc: !0,
		zIndex: 2005,
		bindOptions: {
			position: "top"
		},
		events: {
			onPopupClose: function () {
				BXRLW = null
			},
			onPopupDestroy: function () {}
		},
		content: BX("bx-ilike-popup-cont-" + t)
	}), BXRL[t].popup.setAngle({}), BX.bind(BX("ilike-popup-" + t), "mouseout", function () {
		clearTimeout(BXRL[t].popupTimeout), BXRL[t].popupTimeout = setTimeout(function () {
			BXRL[t].popup.close()
		}, 1e3)
	}), BX.bind(BX("ilike-popup-" + t), "mouseover", function () {
		clearTimeout(BXRL[t].popupTimeout)
	})), null != BXRLW && BXRL[BXRLW].popup.close(), BXRLW = t, BXRL[t].popup.show(), void RatingLikes.AdjustWindow(t))
}, RatingLikes.Vote = function (t, e) {
	return BX.ajax({
		url: BXRL[t].pathToAjax,
		method: "POST",
		dataType: "json",
		data: {
			RATING_VOTE: "Y",
			RATING_VOTE_TYPE_ID: BXRL[t].entityTypeId,
			RATING_VOTE_ENTITY_ID: BXRL[t].entityId,
			RATING_VOTE_ACTION: e,
			sessid: BX.bitrix_sessid()
		},
		onsuccess: function (e) {
			BXRL[t].lastVote = e.action, BXRL[t].countText.innerHTML = e.items_all, BXRL[t].popupContentPage = 1, BXRL[t].popupContent.innerHTML = "", spanTag0 = document.createElement("span"), spanTag0.className = "bx-ilike-wait", BXRL[t].popupContent.appendChild(spanTag0), RatingLikes.AdjustWindow(t), BX("ilike-popup-" + t) && "block" == BX("ilike-popup-" + t).style.display && RatingLikes.List(t, null)
		},
		onfailure: function (t) {}
	}), !1
}, RatingLikes.List = function (t, e) {
	return 0 == parseInt(BXRL[t].countText.innerHTML) ? !1 : (null == e && (e = BXRL[t].popupContentPage), BXRL[t].popupListProcess = !0, BX.ajax({
		url: BXRL[t].pathToAjax,
		method: "POST",
		dataType: "json",
		data: {
			RATING_VOTE_LIST: "Y",
			RATING_VOTE_TYPE_ID: BXRL[t].entityTypeId,
			RATING_VOTE_ENTITY_ID: BXRL[t].entityId,
			RATING_VOTE_LIST_PAGE: e,
			PATH_TO_USER_PROFILE: BXRL[t].pathToUserProfile,
			sessid: BX.bitrix_sessid()
		},
		onsuccess: function (i) {
			if (BXRL[t].countText.innerHTML = i.items_all, 0 == parseInt(i.items_page)) return !1;
			1 == e && (BXRL[t].popupContent.innerHTML = "", spanTag0 = document.createElement("span"), spanTag0.className = "bx-ilike-bottom_scroll", BXRL[t].popupContent.appendChild(spanTag0)), BXRL[t].popupContentPage += 1;
			for (var n = null, o = 0; o < i.items.length; o++) n = i.items[o].PHOTO_SRC.length > 0 ? BX.create("IMG", {
				attrs: {
					src: i.items[o].PHOTO_SRC
				},
				props: {
					className: "bx-ilike-popup-avatar-img"
				}
			}) : BX.create("IMG", {
				attrs: {
					src: "/bitrix/images/main/blank.gif"
				},
				props: {
					className: "bx-ilike-popup-avatar-img bx-ilike-popup-avatar-img-default"
				}
			}), BXRL[t].popupContent.appendChild(BX.create("div", {
				props: {
					className: "bx-ilike-popup-img" + (i.items[o].USER_TYPE ? " bx-ilike-popup-img-" + i.items[o].USER_TYPE : "")
				},
				children: [BX.create("SPAN", {
					props: {
						className: "bx-ilike-popup-avatar-new"
					},
					children: [n, BX.create("SPAN", {
						props: {
							className: "bx-ilike-popup-avatar-status-icon"
						}
					})]
				}), BX.create("SPAN", {
					props: {
						className: "bx-ilike-popup-name-new"
					},
					html: i.items[o].FULL_NAME
				})]
			}));
			RatingLikes.AdjustWindow(t), RatingLikes.PopupScroll(t), BXRL[t].popupListProcess = !1
		},
		onfailure: function (t) {}
	}), !1)
}, RatingLikes.AdjustWindow = function (t) {
	null != BXRL[t].popup && (BXRL[t].popup.bindOptions.forceBindPosition = !0, BXRL[t].popup.adjustPosition(), BXRL[t].popup.bindOptions.forceBindPosition = !1)
}, RatingLikes.PopupScroll = function (t) {
	BX.bind(BXRL[t].popupContent, "scroll", function () {
		this.scrollTop > (this.scrollHeight - this.offsetHeight) / 1.5 && (RatingLikes.List(t, null), BX.unbindAll(this))
	})
};
/* End */
;; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/aspro_next/js/video_banner.min.js?158443670217322";s:6:"source";s:47:"/bitrix/templates/aspro_next/js/video_banner.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var players = {};

function pauseMainBanner() {
	$(".top_slider_wrapp .flexslider").flexslider("pause")
}

function playMainBanner() {
	$(".top_slider_wrapp .flexslider").flexslider("play")
}

function startMainBannerSlideVideo(e) {
	var l = e.attr("data-slide_index"),
		a = e.closest(".slides").find('.box[data-slide_index="' + l + '"]');
	if (e.attr("data-video_source")) {
		a.addClass("loading"), pauseMainBanner();
		var i = e.closest(".flexslider");
		i.addClass("video_visible");
		var r = i.data("slidesIndexesWithVideo");
		void 0 === r && (r = []), r.push(l), i.data("slidesIndexesWithVideo", r);
		var n = e.attr("data-video_src"),
			d = 1 == e.attr("data-video_disable_sound"),
			s = 1 == e.attr("data-video_loop"),
			p = 1 == e.attr("data-video_cover"),
			y = (e.attr("data-video_under_text"), e.attr("data-video_player")),
			c = "YOUTUBE" === y,
			v = "VIMEO" === y,
			u = "RUTUBE" === y,
			f = "HTML5" === y,
			w = !f && e.attr("data-video_width"),
			g = !f && e.attr("data-video_height");
		if (n && !e.find(".video").length) {
			function t() {
				a.each(function (e, a) {
					var i = $(a),
						r = getRandomInt(100, 1e3),
						t = i.hasClass("clone"),
						o = i.attr("id");
					i.find(".video." + o).length || (c ? i.prepend('<div class="wrapper_video"><iframe id="player_' + r + '" class="video ' + o + (p ? " cover" : "") + '" src="' + n + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"' + (w && g ? ' data-video_proportion="' + w / g + '"' : "") + "></iframe></div>") : v ? i.prepend('<div class="wrapper_video"><iframe id="player_' + r + '" class="video ' + o + (p ? " cover" : "") + '" src="' + n + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen;"' + (w && g ? ' data-video_proportion="' + w / g + '"' : "") + "></iframe></div>") : u ? (n = n + "&playerid=" + r, i.prepend('<div class="wrapper_video"><iframe id="player_' + r + '" class="video ' + o + (p ? " cover" : "") + '" src="' + n + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; encrypted-media; gyroscope; fullscreen;"' + (w && g ? ' data-video_proportion="' + w / g + '"' : "") + "></iframe></div>")) : f && i.prepend('<div class="wrapper_video"><video autobuffer playsinline webkit-playsinline autoplay id="player_' + r + '" class="video ' + o + (p ? " cover" : "") + '"' + (s ? " loop " : "") + (d || t ? " muted " : "") + '><source src="' + n + '" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></iframe></div>')), void 0 !== players && players && (players[r] = {
						id: "player_" + r,
						mute: d || t,
						loop: s,
						cover: p,
						videoPlayer: y,
						slideIndex: l,
						clone: t,
						playing: !1,
						videoWidth: w,
						videoHeight: g,
						videoProportion: !(!w || !g) && w / g
					}, c ? window[players[r].id] = new YT.Player(players[r].id, {
						events: {
							onReady: onYoutubePlayerReady,
							onStateChange: onYoutubePlayerStateChange
						}
					}) : v ? (window[players[r].id] = new Vimeo.Player(document.getElementById(players[r].id), {
						autopause: !1,
						byline: !1,
						loop: !1,
						title: !1
					}), window[players[r].id].on("loaded", onVimeoPlayerReady), window[players[r].id].on("play", onVimeoPlayerStateChange), window[players[r].id].on("pause", onVimeoPlayerStateChange), window[players[r].id].on("ended", onVimeoPlayerStateChange)) : u ? document.getElementById(players[r].id).onload = function (e) {
						var a = this.id.replace("player_", "");
						players[a].contentWindow = this.contentWindow, onRutubePlayerReady(a)
					} : f && (document.getElementById(players[r].id).addEventListener("loadeddata", onHtml5PlayerReady), document.getElementById(players[r].id).addEventListener("play", onHtml5PlayerStateChange), document.getElementById(players[r].id).addEventListener("pause", onHtml5PlayerStateChange), document.getElementById(players[r].id).addEventListener("ended", onHtml5PlayerStateChange)))
				})
			}
			if (f) t();
			else {
				var o = "",
					m = "";
				if (void 0 === window.YoutubePlayerScriptLoaded && (window.YoutubePlayerScriptLoaded = !1), void 0 === window.VimeoPlayerScriptLoaded && (window.VimeoPlayerScriptLoaded = !1), void 0 === window.RutubePlayerListnersAdded && (window.RutubePlayerListnersAdded = !1), c) {
					if (o = "YT", m = "Player", !window.YoutubePlayerScriptLoaded) {
						(_ = document.createElement("script")).src = "https://www.youtube.com/iframe_api";
						var h = document.getElementsByTagName("script")[0];
						h.parentNode.insertBefore(_, h), window.YoutubePlayerScriptLoaded = !0
					}
				} else if (v) {
					var _;
					if (o = "Vimeo", !window.VimeoPlayerScriptLoaded)(_ = document.createElement("script")).src = "https://player.vimeo.com/api/player.js", (document.head || document.documentElement).appendChild(_), window.VimeoPlayerScriptLoaded = !0
				} else u && (window.RutubePlayerListnersAdded || window.addEventListener("message", function (e) {
					if (-1 !== e.origin.indexOf("rutube.ru")) {
						var a = JSON.parse(e.data);
						if ("object" == typeof a && a && void 0 !== a.type && a.type) {
							var i = !1;
							for (var r in players)
								if (void 0 !== players[r].contentWindow && players[r].contentWindow == e.source) {
									i = r;
									break
								} if (i) switch (a.type) {
								case "player:changeState":
									onRutubePlayerStateChange(i, a.data.state);
									break;
								case "player:currentTime":
									onRutubePlayerCurrentTime(i, a.data.time)
							}
						}
					}
				}));
				if (o.length)
					if ("object" == typeof window[o])(!m.length || m.length && "function" == typeof window[o][m]) && t();
					else var b = setInterval(function () {
						"object" == typeof window[o] && (!m.length || m.length && "function" == typeof window[o][m]) && (clearInterval(b), t())
					}, 50);
				else t()
			}
		} else if (void 0 !== players && players)
			for (var x in players) players[x].clone || "object" == typeof window[players[x].id] && (players[x].playing ? "YOUTUBE" === players[x].videoPlayer ? window[players[x].id].pauseVideo() : "VIMEO" === players[x].videoPlayer ? window[players[x].id].pause() : "RUTUBE" === players[x].videoPlayer ? document.getElementById(players[x].id).contentWindow.postMessage(JSON.stringify({
				type: "player:pause",
				data: {}
			}), "*") : "HTML5" === players[x].videoPlayer && document.getElementById(players[x].id).pause() : players[x].slideIndex == l && ("YOUTUBE" === players[x].videoPlayer ? window[players[x].id].playVideo() : "VIMEO" === players[x].videoPlayer ? window[players[x].id].play() : "RUTUBE" === players[x].videoPlayer ? document.getElementById(players[x].id).contentWindow.postMessage(JSON.stringify({
				type: "player:play",
				data: {}
			}), "*") : "HTML5" === players[x].videoPlayer && document.getElementById(players[x].id).play()))
	}
}
var CoverPlayer = function () {
	$(".top_slider_wrapp .video.cover").each(function () {
		var e = $(this).closest(".box"),
			a = e.height(),
			i = e.width(),
			r = $(this).attr("data-video_proportion");
		void 0 === r && (r = 16 / 9);
		var t = i,
			o = i / r;
		o < a && (t = a * r, o = a), $(this).width(t).height(o).css({
			"margin-top": "-" + (o - a) / 2 + "px",
			"margin-left": "-" + (t - i) / 2 + "px"
		})
	})
};

function onYoutubePlayerReady(e) {
	var a = e.target.a.id.replace("player_", "");
	if (a) {
		var i = players[a].mute,
			r = players[a].cover,
			t = players[a].clone,
			o = $("#player_" + a).closest(".box");
		if ((i || t) && window[players[a].id].mute(), r) {
			if (!players[a].videoProportion) {
				var l = e.target.getVideoEmbedCode();
				if (l.length) {
					var n = l.match(/width="(\d*)"[^>]*height="(\d*)"/);
					if (null !== n) {
						var d = n[1],
							s = n[2];
						players[a].videoWidth = d, players[a].videoHeight = s, players[a].videoProportion = d / s, o.find(".video").attr("data-video_proportion", players[a].videoProportion)
					}
				}
			}
			CoverPlayer()
		}
		t ? setTimeout(function () {
			e.target.pauseVideo()
		}, 100) : (pauseMainBanner(), e.target.playVideo()), o.addClass("started")
	}
}

function onYoutubePlayerStateChange(e) {
	var a = e.target.a.id.replace("player_", "");
	if (a) {
		var i = players[a].clone,
			r = players[a].loop,
			t = players[a].slideIndex;
		if (!i)
			if (e.data === YT.PlayerState.PLAYING) players[a].playing = !0, $("#player_" + a).closest(".box").find(".wrapper_inner").addClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").addClass("loading"), pauseMainBanner(), e.target.playVideo();
			else if (e.data === YT.PlayerState.PAUSED) {
			players[a].playing = !1;
			var o = Math.floor(10 * window[players[a].id].getCurrentTime()) / 10;
			for (var l in $("#player_" + a).closest(".box").find(".wrapper_inner").removeClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading"), window[players[a].id].seekTo(o, !0), players) players[l].slideIndex == t && players[l].clone && "getCurrentTime" in window[players[l].id] && (window[players[l].id].pauseVideo(), window[players[l].id].seekTo(o, !0))
		} else e.data === YT.PlayerState.ENDED ? (players[a].playing = !1, r ? e.target.playVideo() : playMainBanner()) : e.data === YT.PlayerState.UNSTARTED && (players[a].playing = !1, $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading"), window[players[a].id].mute(), e.target.playVideo())
	}
}

function onVimeoPlayerReady(e) {
	var r = this.element.id.replace("player_", "");
	if (r) {
		var a = players[r].mute,
			i = players[r].cover,
			t = players[r].clone,
			o = $("#player_" + r).closest(".box");
		if ((a || t) && window[players[r].id].setVolume(0), i && !players[r].videoProportion) {
			var l = window[players[r].id].getVideoWidth(),
				n = window[players[r].id].getVideoHeight();
			l.then(function (e) {
				var i = e;
				n.then(function (e) {
					var a = e;
					players[r].videoWidth = i, players[r].videoHeight = a, players[r].videoProportion = i / a, o.find(".video").attr("data-video_proportion", players[r].videoProportion), CoverPlayer()
				})
			})
		}
		if (t) setTimeout(function () {
			window[players[r].id].pause()
		}, 100);
		else {
			pauseMainBanner();
			var d = window[players[r].id].play();
			void 0 !== d && d.catch(function () {
				setTimeout(function () {
					window[players[r].id].setVolume(0), window[players[r].id].play()
				}, 100)
			})
		}
		o.addClass("started")
	}
}

function onVimeoPlayerStateChange(e) {
	var a = this.element.id.replace("player_", "");
	if (a) {
		players[a].cover;
		var i = players[a].clone,
			r = players[a].loop,
			t = players[a].slideIndex;
		i || window[players[a].id].getPaused().then(function (e) {
			e ? (players[a].playing = !1, $("#player_" + a).closest(".box").find(".wrapper_inner").removeClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading"), window[players[a].id].getCurrentTime().then(function (e) {
				var i = Math.floor(10 * e) / 10;
				window[players[a].id].setCurrentTime(i).then(function (e) {
					for (var a in players) players[a].slideIndex == t && players[a].clone && (window[players[a].id].pause(), window[players[a].id].setCurrentTime(i).then(function (e) {}))
				})
			})) : ($("#player_" + a).closest(".box").find(".wrapper_inner").addClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").addClass("loading"), window[players[a].id].getEnded().then(function (e) {
				e ? (players[a].playing = !1, r ? window[players[a].id].play() : playMainBanner()) : (players[a].playing = !0, pauseMainBanner())
			}))
		})
	}
}

function onRutubePlayerReady(e) {
	if (e) {
		var a = players[e].mute,
			i = players[e].cover,
			r = players[e].clone,
			t = document.getElementById(players[e].id),
			o = $("#player_" + e).closest(".box");
		(a || r) && t.contentWindow.postMessage(JSON.stringify({
			type: "player:mute",
			data: {}
		}), "*"), i && CoverPlayer(), r ? setTimeout(function () {
			t.contentWindow.postMessage(JSON.stringify({
				type: "player:pause",
				data: {}
			}), "*")
		}, 100) : (pauseMainBanner(), t.contentWindow.postMessage(JSON.stringify({
			type: "player:play",
			data: {}
		}), "*")), o.addClass("started")
	}
}

function onRutubePlayerCurrentTime(e, a) {
	e && (players[e].time = a)
}

function onRutubePlayerStateChange(e, a) {
	if (e) {
		var i = players[e].clone,
			r = players[e].loop,
			t = players[e].slideIndex,
			o = document.getElementById(players[e].id);
		if (!i)
			if ("playing" === a) $("#" + e).closest(".box").find(".wrapper_inner").addClass("loading"), $("#" + e).closest(".box").find(".wrapper_inner .btn-video").addClass("loading"), players[e].playing = !0, pauseMainBanner();
			else if ("paused" === a) {
			$("#" + e).closest(".box").find(".wrapper_inner").removeClass("loading"), $("#" + e).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading"), players[e].playing = !1;
			var l = Math.floor(10 * players[e].time) / 10;
			for (var n in o.contentWindow.postMessage(JSON.stringify({
					type: "player:setCurrentTime",
					data: {
						time: l
					}
				}), "*"), players) players[n].slideIndex == t && players[n].clone && (document.getElementById(players[n].id).contentWindow.postMessage(JSON.stringify({
				type: "player:pause",
				data: {}
			}), "*"), document.getElementById(players[n].id).contentWindow.postMessage(JSON.stringify({
				type: "player:setCurrentTime",
				data: {
					time: l
				}
			}), "*"))
		} else "stopped" === a && ($("#" + e).closest(".box").find(".wrapper_inner").removeClass("loading"), $("#" + e).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading"), players[e].playing = !1, r ? o.contentWindow.postMessage(JSON.stringify({
			type: "player:play",
			data: {}
		}), "*") : playMainBanner())
	}
}

function onHtml5PlayerReady(e) {
	var a = e.target.id.replace("player_", "");
	if (a) {
		var i = players[a].mute,
			r = players[a].cover,
			t = players[a].clone,
			o = $("#player_" + a).closest(".box");
		if ((i || t) && $("#" + players[a].id).prop("muted", !0), r) {
			if (!players[a].videoProportion) {
				var l = o.find(".video")[0].videoWidth,
					n = o.find(".video")[0].videoHeight;
				players[a].videoWidth = l, players[a].videoHeight = n, players[a].videoProportion = l / n, o.find(".video").attr("data-video_proportion", players[a].videoProportion)
			}
			CoverPlayer()
		}
		if (t) e.target.pause();
		else {
			pauseMainBanner();
			var d = e.target.play();
			void 0 !== d && d.catch(function () {
				setTimeout(function () {
					$("#" + players[a].id).prop("muted", !0), e.target.play()
				}, 100)
			})
		}
		o.addClass("started")
	}
}

function onHtml5PlayerStateChange(e) {
	var a = e.target.id.replace("player_", "");
	if (a) {
		players[a].cover;
		var i = players[a].clone,
			r = players[a].loop,
			t = players[a].slideIndex;
		if (!i)
			if (e.target.paused) {
				players[a].playing = !1, $("#player_" + a).closest(".box").find(".wrapper_inner").removeClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").removeClass("loading");
				var o = Math.floor(10 * e.target.currentTime) / 10;
				for (var l in e.target.currentTime = o, players) players[l].slideIndex == t && players[l].clone && (document.getElementById(players[l].id).pause(), document.getElementById(players[l].id).currentTime = o)
			} else e.target.ended ? (players[a].playing = !1, r ? ($("#player_" + a).closest(".box").find(".wrapper_inner").addClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").addClass("loading"), e.target.play()) : playMainBanner()) : (players[a].playing = !0, $("#player_" + a).closest(".box").find(".wrapper_inner").addClass("loading"), $("#player_" + a).closest(".box").find(".wrapper_inner .btn-video").addClass("loading"), pauseMainBanner())
	}
}
waitYTPlayer = function (e, a) {
	"undefined" != typeof YT && YT && YT.Player ? "function" == typeof a && a() : setTimeout(function () {
		waitYTPlayer(e, a)
	}, e)
}, $(document).on("click", "video.video", function (e) {
	var a = e.target.id.replace("player_", "");
	a && (players[a].playing ? e.target.pause() : e.target.play())
}), $(document).on("click", ".top_slider_wrapp .box .btn-video", function (e) {
	e.stopPropagation(), $(this).hasClass("loading") ? ($(this).removeClass("loading"), $(this).closest(".wrapper_inner").removeClass("loading")) : ($(this).addClass("loading"), $(this).closest(".wrapper_inner").addClass("loading")), startMainBannerSlideVideo($(this).closest(".box"))
}), $(document).on("click", ".top_slider_wrapp .box .wrapper_inner", function (e) {
	var a = $(this).closest(".box").hasClass("wvideo"),
		i = $(this).closest(".box").hasClass("wurl");
	if ($(e.target).hasClass("btn")) a && $(e.target).hasClass("btn-video") && (e.stopPropagation(), $(this).find(".btn-video").trigger("click"));
	else if (i) {
		var r = $(this).closest(".box").find(".target").attr("href");
		if (r.length) {
			var t = $(this).closest(".box").find(".target").attr("target");
			void 0 === t || "_self" === t ? location.href = r : window.open(r)
		}
	} else a && (e.stopPropagation(), $(this).find(".btn-video").trigger("click"))
}), $(document).ready(function () {
	$(".top_slider_wrapp.view_2").each(function () {
		$(this).find(".flexslider .slides > li .tablet_text .wrap").length && $(this).find(".flexslider .slides > li .tablet_text .wrap").sliceHeight({
			row: ".top_slider_wrapp.view_2 .flexslider .slides",
			item: ".top_slider_wrapp.view_2 .flexslider .slides > li .tablet_text .wrap",
			slice: $(this).find(".flexslider .slides > li").length,
			autoslicecount: !1
		})
	})
}), getRandomInt = function (e, a) {
	return Math.floor(Math.random() * (a - e)) + e
};
var ignoreResize = [];
BX.addCustomEvent("onWindowResize", function (e) {
	try {
		CoverPlayer()
	} catch (e) {} finally {
		ignoreResize.pop()
	}
}), BX.addCustomEvent("onSlideEnd", function (e) {
	try {
		if (ignoreResize.push(!0), e) e.slider && setTimeout(function () {
			$(".banners-big.front .btn-video, .banners-big.front .box").removeClass("loading")
		}, 300)
	} catch (e) {} finally {
		ignoreResize.pop()
	}
}), BX.addCustomEvent("onSlide", function (e) {
	try {
		if (ignoreResize.push(!0), e) {
			var a = e.slider;
			if (a) {
				var i = a.find(".box.flex-active-slide"),
					r = i.attr("data-slide_index");
				if ($(".top_slider_wrapp.view_2").each(function () {
						$(this).find(".flexslider .slides > li .tablet_text .wrap").length && $(this).find(".flexslider .slides > li .tablet_text .wrap").sliceHeight({
							resize: !1,
							row: ".top_slider_wrapp.view_2 .flexslider .slides",
							item: ".top_slider_wrapp.view_2 .flexslider .slides > li .tablet_text .wrap",
							slice: $(this).find(".flexslider .slides > li").length,
							autoslicecount: !1
						})
					}), void 0 !== r && r.length) {
					var t = a.data("slidesIndexesWithVideo");
					if (void 0 === t && (t = []), -1 != t.indexOf(r) ? a.addClass("video_visible") : a.removeClass("video_visible"), setTimeout(function () {
							CoverPlayer()
						}, 200), void 0 !== players && players)
						for (var o in players) players[o].playing && !players[o].clone && players[o].slideIndex != r && "object" == typeof window[players[o].id] && ("YOUTUBE" === players[o].videoPlayer ? window[players[o].id].pauseVideo() : "VIMEO" === players[o].videoPlayer ? window[players[o].id].pause() : "RUTUBE" === players[o].videoPlayer ? document.getElementById(players[o].id).contentWindow.postMessage(JSON.stringify({
							type: "player:pause",
							data: {}
						}), "*") : "HTML5" === players[o].videoPlayer && document.getElementById(players[o].id).pause());
					1 == i.attr("data-video_autoplay") && startMainBannerSlideVideo(i)
				}
				if (i.find("video").length && !i.find(".btn-video").length) {
					var l = i.find("video").attr("id");
					document.getElementById(l).play()
				}
			}
		}
	} catch (e) {} finally {
		ignoreResize.pop()
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/aspro_next/js/main.min.js?1584436713155424";s:6:"source";s:39:"/bitrix/templates/aspro_next/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var basketTimeoutSlide, resizeEventTimer, funcDefined = function (e) {
	try {
		return "function" == typeof e || "function" == typeof window[e]
	} catch (e) {
		return !1
	}
};
if (!funcDefined("setLocationSKU"))
function setLocationSKU(e) {
	var t = parseUrlQuery(),
		a = 0,
		i = "",
		o = "",
		n = "";
	if ("oid" in t && 0 < parseInt(t.oid)) {
		for (var s in t.oid = e, t) 0 < parseInt(a) && (i = "&"), o = o + i + s + "=" + t[s], a++;
		o && (n = location.pathname + "?" + o);
		try {
			return void history.replaceState(null, null, n)
		} catch (e) {}
		location.hash = "#" + n.substr(1)
	}
}
if (funcDefined("ShowOverlay") || (ShowOverlay = function () {
		$('<div class="jqmOverlay waiting"></div>').appendTo("body")
	}), funcDefined("HideOverlay") || (HideOverlay = function () {
		$(".jqmOverlay").remove()
	}), !funcDefined("trimPrice")) var trimPrice = function (e) {
	return e = (e = e.split(" ").join("")).split("&nbsp;").join("")
};
if (!funcDefined("markProductRemoveBasket")) var markProductRemoveBasket = function (e) {
	$(".in-cart[data-item=" + e + "]").hide(), $(".to-cart[data-item=" + e + "]").show(), $(".to-cart[data-item=" + e + "]").closest(".button_block").removeClass("wide"), $(".to-cart[data-item=" + e + "]").closest(".counter_wrapp").find(".counter_block").show(), $(".counter_block[data-item=" + e + "]").show(), $(".in-subscribe[data-item=" + e + "]").hide(), $(".to-subscribe[data-item=" + e + "]").show(), $(".wish_item[data-item=" + e + "]").removeClass("added"), $(".wish_item[data-item=" + e + "] .value:not(.added)").show(), $(".wish_item[data-item=" + e + "] .value.added").hide()
};
if (!funcDefined("markProductAddBasket")) var markProductAddBasket = function (e) {
	$(".to-cart[data-item=" + e + "]").hide(), $(".to-cart[data-item=" + e + "]").closest(".counter_wrapp").find(".counter_block").hide(), $(".to-cart[data-item=" + e + "]").closest(".button_block").addClass("wide"), $(".in-cart[data-item=" + e + "]").show(), $(".wish_item[data-item=" + e + "]").removeClass("added"), $(".wish_item[data-item=" + e + "] .value:not(.added)").show(), $(".wish_item[data-item=" + e + "] .value.added").hide()
};
if (!funcDefined("markProductDelay")) var markProductDelay = function (e) {
	$(".in-cart[data-item=" + e + "]").hide(), $(".to-cart[data-item=" + e + "]").show(), $(".to-cart[data-item=" + e + "]").closest(".counter_wrapp").find(".counter_block").show(), $(".to-cart[data-item=" + e + "]").closest(".button_block").removeClass("wide"), $(".wish_item[data-item=" + e + "]").addClass("added"), $(".wish_item[data-item=" + e + "] .value:not(.added)").hide(), $(".wish_item[data-item=" + e + "] .value.added").css("display", "block")
};
if (!funcDefined("markProductSubscribe")) var markProductSubscribe = function (e) {
	$(".to-subscribe[data-item=" + e + "]").hide(), $(".in-subscribe[data-item=" + e + "]").css("display", "block")
};
if (!funcDefined("basketFly")) var basketFly = function (a, i) {
	"object" == typeof obNextPredictions && obNextPredictions.updateAll(), $.post(arNextOptions.SITE_DIR + "ajax/basket_fly.php", "PARAMS=" + $("#basket_form").find("input#fly_basket_params").val(), $.proxy(function (e) {
		var t = $(".opener .basket_count").hasClass("small");
		$(e).find(".basket_count").find(".items div").text();
		$("#basket_line .basket_fly").addClass("loaded").html(e), "refresh" == a && $("li[data-type=AnDelCanBuy]").trigger("click"), void 0 === i && window.matchMedia("(min-width: 769px)").matches && ("open" == a ? t ? "N" !== arNextOptions.THEME.SHOW_BASKET_ONADDTOCART && $(".opener .basket_count").click() : ($(".opener .basket_count").removeClass("small"), $('.tabs_content.basket li[item-section="AnDelCanBuy"]').addClass("cur"), $('#basket_line ul.tabs li[item-section="AnDelCanBuy"]').addClass("cur")) : "wish" == a ? t ? "N" !== arNextOptions.THEME.SHOW_BASKET_ONADDTOCART && $(".opener .wish_count").click() : ($(".opener .wish_count").removeClass("small"), $('.tabs_content.basket li[item-section="DelDelCanBuy"]').addClass("cur"), $('#basket_line ul.tabs li[item-section="DelDelCanBuy"]').addClass("cur")) : "N" !== arNextOptions.THEME.SHOW_BASKET_ONADDTOCART && $(".opener .basket_count").click())
	}))
};
var lastHash = location.hash;
if ("onhashchange" in window) {
	function compareHash(e, t) {
		for (var a = 0, i = Math.min(e.length, t.length); a < i && e.charAt(0) == t.charAt(0); a++);
		e = e.substr(a), t = t.substr(a);
		for (a = 0, i = Math.min(e.length, t.length); a < i && e.substr(-1) == t.substr(-1); a++);
		return [e, t]
	}
	$(window).bind("hashchange", function () {
		var e = location.hash;
		"#delayed" == e ? $("#basket_toolbar_button_delayed").length && $("#basket_toolbar_button_delayed").trigger("click") : $("#basket_toolbar_button").length && $("#basket_toolbar_button").trigger("click");
		compareHash(e, lastHash);
		lastHash = e
	})
}
if ($(document).on("click", ".back-mobile-arrow .arrow-back", function () {
		document.referrer ? window.history.back() : location.href = "/"
	}), $(document).on("click", "#basket_toolbar_button", function () {
		lastHash && (location.hash = "cart")
	}), $(document).on("click", "#basket_toolbar_button_delayed", function () {
		lastHash && (location.hash = "delayed")
	}), $(document).on("click", "#basket_line .basket_fly .opener > div.clicked", function () {
		if (!arNextOptions.PAGES.BASKET_PAGE && window.matchMedia("(min-width: 769px)").matches) {
			var t = this;
			parseInt($("#basket_line .basket_fly").css("right")) < 0 ? $("#basket_line .basket_fly").stop().animate({
				right: "0"
			}, 333, function () {
				$(t).closest(".basket_fly.loaded").length ? a(t) : $.ajax({
					url: arNextOptions.SITE_DIR + "ajax/basket_fly.php",
					type: "post",
					success: function (e) {
						$("#basket_line .basket_fly").addClass("loaded").html(e), a(t)
					}
				})
			}) : $(this).is(".wish_count:not(.empty)") && !$("#basket_line .basket_fly .basket_sort ul.tabs li.cur").is("[item-section=DelDelCanBuy]") ? ($("#basket_line .basket_fly .tabs li").removeClass("cur"), $("#basket_line .basket_fly .tabs_content li").removeClass("cur"), $("#basket_line .basket_fly .remove_all_basket").removeClass("cur"), $("#basket_line .basket_fly .tabs_content li[item-section=" + $(this).data("type") + "]").addClass("cur"), $("#basket_line  .basket_fly .tabs li:eq(" + $(this).index() + ")").first().addClass("cur"), $("#basket_line .basket_fly .remove_all_basket." + $(this).data("type")).first().addClass("cur")) : $(this).is(".basket_count") && $("#basket_line .basket_fly .basket_sort ul.tabs li.cur").length && !$("#basket_line .basket_fly .basket_sort ul.tabs li.cur").is("[item-section=AnDelCanBuy]") ? ($("#basket_line .basket_fly .tabs li").removeClass("cur"), $("#basket_line .basket_fly .tabs_content li").removeClass("cur"), $("#basket_line .basket_fly .remove_all_basket").removeClass("cur"), $("#basket_line  .basket_fly .tabs_content li:eq(" + $(this).index() + ")").addClass("cur"), $("#basket_line  .basket_fly .tabs li:eq(" + $(this).index() + ")").first().addClass("cur"), $("#basket_line .basket_fly .remove_all_basket." + $(this).data("type")).first().addClass("cur")) : ($("#basket_line .basket_fly").stop().animate({
				right: -$("#basket_line .basket_fly").outerWidth()
			}, 150), $("#basket_line .basket_fly .opener > div.clicked").addClass("small"))
		}

		function a(e) {
			$("#basket_line .basket_fly .tabs li").removeClass("cur"), $("#basket_line .basket_fly .tabs_content li").removeClass("cur"), $("#basket_line .basket_fly .remove_all_basket").removeClass("cur"), $(e).is(".wish_count.empty") ? ($("#basket_line .basket_fly .tabs li").first().addClass("cur").siblings().removeClass("cur"), $("#basket_line .basket_fly .tabs_content li").first().addClass("cur").siblings().removeClass("cur"), $("#basket_line .basket_fly .remove_all_basket").first().addClass("cur")) : ($("#basket_line .basket_fly .tabs_content li[item-section=" + $(e).data("type") + "]").addClass("cur"), $("#basket_line .basket_fly .tabs li:eq(" + $(e).index() + ")").addClass("cur"), $("#basket_line .basket_fly .remove_all_basket." + $(e).data("type")).addClass("cur")), $("#basket_line .basket_fly .opener > div.clicked").removeClass("small")
		}
	}), !funcDefined("clearViewedProduct"))
function clearViewedProduct() {
	try {
		var e = "NEXT_VIEWED_ITEMS_" + arNextOptions.SITE_ID;
		void 0 !== BX.localStorage && BX.localStorage.set(e, {}, 0), $.removeCookie(e, {
			path: "/",
			expires: 30
		})
	} catch (e) {
		console.error(e)
	}
}
if (!funcDefined("setViewedProduct"))
function setViewedProduct(e, t) {
	try {
		var a = $.cookie.json;
		$.cookie.json = !0;
		var i = "NEXT_VIEWED_ITEMS_" + arNextOptions.SITE_ID;
		if (void 0 !== BX.localStorage && void 0 !== e && void 0 !== t) {
			var o = void 0 !== t.PRODUCT_ID ? t.PRODUCT_ID : e,
				n = BX.localStorage.get(i) ? BX.localStorage.get(i) : {},
				s = $.cookie(i) ? $.cookie(i) : {};
			for (var r in n) n[r].IS_LAST = !1, void 0 === s[r] && delete n[r];
			for (var r in s) void 0 === n[r] && delete s[r];
			for (var r in s) 0;
			void 0 !== n[o] && n[o].ID != e && (delete n[o], delete s[o]), delete n[2243], delete s[2243];
			var l = (new Date).getTime();
			t.ID = e, t.ACTIVE_FROM = l, t.IS_LAST = !0, n[o] = t, s[o] = [l.toString(), t.PICTURE_ID], $.cookie(i, s, {
				path: "/",
				expires: 30
			}), BX.localStorage.set(i, n, 2592e3)
		}
	} catch (e) {
		console.error(e)
	} finally {
		$.cookie.json = a
	}
}
if (!funcDefined("initSelects"))
function initSelects(e) {
	var t;
	!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || ($("#bx-soa-order").length || ($(e).find(".wrapper1 select:visible").ikSelect({
		syntax: '<div class="ik_select_link"> \t\t\t\t\t\t<span class="ik_select_link_text"></span> \t\t\t\t\t\t<div class="trigger"></div> \t\t\t\t\t</div> \t\t\t\t\t<div class="ik_select_dropdown"> \t\t\t\t\t\t<div class="ik_select_list"> \t\t\t\t\t\t</div> \t\t\t\t\t</div>',
		dynamicWidth: !0,
		ddMaxHeight: 112,
		customClass: "common_select",
		onShow: function (e) {
			e.$dropdown.css("top", parseFloat(e.$dropdown.css("top")) - 5 + "px"), e.$dropdown.outerWidth() < e.$link.outerWidth() && e.$dropdown.css("width", e.$link.outerWidth()), e.$dropdown.outerWidth() > e.$link.outerWidth() && e.$dropdown.css("width", e.$link.outerWidth());
			var t = 0;
			e.$dropdown.css("left", e.$link.offset().left), $(e.$listInnerUl).find("li").each(function () {
				$(this).hasClass("ik_select_option_disabled") || (0, t += $(this).outerHeight())
			}), t < 112 ? e.$listInner.css("height", "auto") : e.$listInner.css("height", "112px"), e.$link.addClass("opened"), e.$listInner.addClass("scroller"), $(".confirm_region").length && $(".confirm_region").remove()
		},
		onHide: function (e) {
			e.$link.removeClass("opened")
		}
	}), $(window).on("resize", function () {
		ignoreResize.push(!0), clearTimeout(t), t = setTimeout(function () {
			var e = "";
			(e = $(".common_select-link.opened + select").ikSelect().data("plugin_ikSelect")) && e.$dropdown.css("left", e.$link.offset().left + "px")
		}, 20), ignoreResize.pop()
	})))
}
if (funcDefined("CheckTopMenuFullCatalogSubmenu") || (CheckTopMenuFullCatalogSubmenu = function () {
		if ("HOVER" == arNextOptions.THEME.MENU_TYPE_VIEW) {
			var e = $(".menu_top_block");
			if (e.length) {
				var t = e.parents(".wrap_menu"),
					a = e.closest(".wrapper_inner").actual("width");
				a || (a = e.closest(".wraps").actual("width"));
				e.hasClass("catalogfirst");
				var i = $(".menu_top_block:visible li.full"),
					o = e.actual("outerWidth");
				t.length && (a = t.actual("outerWidth"), t.offset().left + a), $(".catalog_block.menu_top_block").length && $(".catalog_block.menu_top_block").is(":visible") && (i = $(".menu_top_block.catalog_block li.full")), i.each(function () {
					var e = $(this),
						t = e.find(">.dropdown");
					t.length && (t.css({
						left: o + "px",
						width: a - o + "px",
						"padding-left": "0px",
						"padding-right": "0px",
						opacity: 1
					}), isOnceInited || "TOP" != arNextOptions.THEME.MENU_POSITION || e.on("mouseenter", function () {
						t.css("min-height", e.closest(".dropdown").actual("outerHeight") + "px")
					}))
				})
			}
		}
	}), $.fn.getMaxHeights = function (a, e, t) {
		for (var i = this.map(function (e, t) {
				return $(t).css("height", ""), 1 == a ? $(t).actual("outerHeight") : $(t).actual("height")
			}).get(), o = 0, n = i.length; o < n; ++o) i[o] % 2 && --i[o];
		return Math.max.apply(this, i)
	}, $.fn.equalizeHeights = function (o, n, s) {
		for (var e = this.map(function (e, t) {
				var a = 0,
					i = 0;
				return !1 !== n && (isMobile || (a = parseInt($(t).find(n).actual("outerHeight")))), a && (a += 12), $(t).css("height", ""), i = 1 == o ? $(t).actual("outerHeight") - a : $(t).actual("height") - a, !1 !== s && (i < s && (i += s - i), window.matchMedia("(max-width: 520px)").matches && (i = 300), window.matchMedia("(max-width: 400px)").matches && (i = 200)), i
			}).get(), t = 0, a = e.length; t < a; ++t) e[t] % 2 && --e[t];
		return this.height(Math.max.apply(this, e))
	}, $.fn.getFloatWidth = function () {
		var e = 0;
		if ($(this).length) {
			var t = $(this)[0].getBoundingClientRect();
			(e = t.width) || (e = t.right - t.left)
		}
		return e
	}, $.fn.sliceHeight = function (l) {
		function i(e) {
			if (e.each(function () {
					$(this).css("line-height", ""), $(this).css("height", "")
				}), 1 != l.mobile || !window.matchMedia("(max-width: 550px)").matches) {
				if (void 0 === l.autoslicecount || !1 !== l.autoslicecount) {
					var t = void 0 !== l.row && l.row.length ? e.first().parents(l.row).getFloatWidth() : e.first().parents(".items").getFloatWidth(),
						a = void 0 !== l.item && l.item.length ? $(l.item).first().getFloatWidth() : e.first().closest(".item").getFloatWidth();
					t || (t = e.first().parents(".row").getFloatWidth()), a && l.fixWidth && (a -= l.fixWidth), t && a && (l.slice = Math.floor(t / a))
				}
				if (l.customSlice) {
					var i = Object.keys(l.breakpoint),
						o = !1;
					if (i.length) {
						a = void 0 !== l.item && l.item.length ? $(l.item).last().getFloatWidth() : e.last().closest(".item").getFloatWidth();
						for (var n in a && (l.sliceNext = Math.floor(t / a)), i) window.matchMedia(i[n].toString()).matches && (o = !0, l.slice = l.breakpoint[i[n]])
					}
				}
				if (void 0 === l.typeResize || 0 == l.typeResize) {
					if (l.slice)
						for (var s = 0; s < e.length; s += l.slice) l.customSlice && l.sliceNext && o && s && (l.slice = l.sliceNext), $(e.slice(s, s + l.slice)).equalizeHeights(l.outer, l.classNull, l.minHeight, l.typeResize, l.typeValue);
					if (l.lineheight) {
						var r = parseInt(l.lineheight);
						isNaN(r) && (r = 0), e.each(function () {
							$(this).css("line-height", $(this).actual("height") + r + "px")
						})
					}
				}
			}
		}
		l = $.extend({
			slice: null,
			sliceNext: null,
			outer: !1,
			lineheight: !1,
			autoslicecount: !0,
			classNull: !1,
			minHeight: !1,
			row: !1,
			item: !1,
			typeResize: !1,
			typeValue: !1,
			fixWidth: 0,
			resize: !0,
			mobile: !1,
			customSlice: !1,
			breakpoint: {}
		}, l);
		var o = $(this);
		o.length && (1 == l.mobile && "object" == typeof arNextOptions && "Y" === arNextOptions.THEME.MOBILE_CATALOG_LIST_ELEMENTS_COMPACT && o.first().parents(".catalog_block.items").length && (l.mobile = !1), i(o), l.resize && BX.addCustomEvent("onWindowResize", function (e) {
			try {
				i(o)
			} catch (e) {}
		}), $(this).find("img.lazyload").length && BX.addCustomEvent("onLazyLoaded", function (e) {
			var t = !1;
			if (e.length)
				for (var a in e)
					if ($(e[a]).closest(o).length) {
						t = !0;
						break
					} if (t) try {
				i(o)
			} catch (e) {}
		}))
	}, $.fn.sliceHeightNoResize = function (n) {
		function i(e) {
			if (e.each(function () {
					$(this).css("line-height", ""), $(this).css("height", "")
				}), void 0 === n.autoslicecount || !1 !== n.autoslicecount) {
				var t = e.first().closest(".item").getFloatWidth(),
					a = e.first().parents(".items").getFloatWidth();
				a || (a = e.first().parents(".row").getFloatWidth()), a && t && (n.slice = Math.floor(a / t))
			}
			if (n.slice)
				for (var i = 0; i < e.length; i += n.slice) $(e.slice(i, i + n.slice)).equalizeHeights(n.outer, n.classNull, n.minHeight);
			if (n.lineheight) {
				var o = parseInt(n.lineheight);
				isNaN(o) && (o = 0), e.each(function () {
					$(this).css("line-height", $(this).actual("height") + o + "px")
				})
			}
		}
		n = $.extend({
			slice: null,
			outer: !1,
			lineheight: !1,
			autoslicecount: !0,
			classNull: !1,
			minHeight: !1,
			options: !1,
			resize: !0
		}, n);
		var o = $(this);
		o.length && (i(o), $(this).find("img.lazyload").length && BX.addCustomEvent("onLazyLoaded", function (e) {
			var t = !1;
			if (e.length)
				for (var a in e)
					if ($(e[a]).closest(o).length) {
						t = !0;
						break
					} if (t) try {
				i(o)
			} catch (e) {}
		}))
	}, !funcDefined("initHoverBlock"))
function initHoverBlock(e) {}
if (!funcDefined("setStatusButton"))
function setStatusButton() {
	if (funcDefined("setItemButtonStatus") || (setItemButtonStatus = function (e) {
			if (e.BASKET)
				for (var t in e.BASKET) {
					"number" != typeof (a = e.BASKET[t]) && "string" != typeof a || ($(".to-cart[data-item=" + a + "]").hide(), $(".counter_block[data-item=" + a + "]").hide(), $(".in-cart[data-item=" + a + "]").show(), $(".in-cart[data-item=" + a + "]").closest(".button_block").addClass("wide"))
				}
			if (e.DELAY)
				for (var t in e.DELAY) {
					"number" != typeof (a = e.DELAY[t]) && "string" != typeof a || ($(".wish_item.to[data-item=" + a + "]").hide(), $(".wish_item.in[data-item=" + a + "]").show(), $(".wish_item[data-item=" + a + "]").find(".value.added").length && ($(".wish_item[data-item=" + a + "]").addClass("added"), $(".wish_item[data-item=" + a + "]").find(".value").hide(), $(".wish_item[data-item=" + a + "]").find(".value.added").show()))
				}
			if (e.SUBSCRIBE)
				for (var t in e.SUBSCRIBE) {
					"number" != typeof (a = e.SUBSCRIBE) && "string" != typeof a || ($(".to-subscribe[data-item=" + a + "]").hide(), $(".in-subscribe[data-item=" + a + "]").show())
				}
			if (e.COMPARE)
				for (var t in e.COMPARE) {
					var a;
					"number" != typeof (a = e.COMPARE) && "string" != typeof a || ($(".compare_item.to[data-item=" + a + "]").hide(), $(".compare_item.in[data-item=" + a + "]").show(), $(".compare_item[data-item=" + a + "]").find(".value.added").length && ($(".compare_item[data-item=" + a + "]").find(".value").hide(), $(".compare_item[data-item=" + a + "]").find(".value.added").show()))
				}
		}), Object.keys(arStatusBasketAspro).length) setItemButtonStatus(arStatusBasketAspro);
	else {
		if (void 0 === e) var e = {
			SITE_DIR: "/"
		};
		$.ajax({
			url: e.SITE_DIR + "ajax/getAjaxBasket.php",
			type: "POST",
			success: function (e) {
				arStatusBasketAspro = e, setItemButtonStatus(arStatusBasketAspro)
			}
		})
	}
}
if (!funcDefined("onLoadjqm")) var onLoadjqm = function (e, o, t, a, i, n, s) {
	if ($.each($(o.t).get(0).attributes, function (e, t) {
			if (/^data\-autoload\-(.+)$/.test(t.nodeName)) {
				var a = t.nodeName.match(/^data\-autoload\-(.+)$/)[1],
					i = $('input[data-sid="' + a.toUpperCase() + '"]');
				i.val(BX.util.htmlspecialcharsback($(o.t).data("autoload-" + a))).attr("readonly", "readonly"), i.closest(".form-group").addClass("input-filed"), i.attr("title", i.val())
			}
		}), o.w.hasClass("send_gift_frame")) {
		var r = priceHtml = propsHtml = "";
		$(".offers_img a").length ? r = $(".offers_img a").html() : $(".item_main_info .item_slider:not(.flex) .slides li").length && (r = $(".item_main_info .item_slider .slides li:first a").html()), $('.item_main_info *[itemprop="offers"]').length && ($(".offers_img.wof").length || $(".prices_tab").length ? $(".prices_block .price").length && (priceHtml = $(".prices_block .cost.prices").html().replace("id", "data-id")) : $(".prices_block .with_matrix").length ? priceHtml = '<div class="with_matrix">' + $(".prices_block .with_matrix").html() + "</div>" : $(".prices_block .price_group.min").length ? priceHtml = $(".prices_block .price_group.min").html() : $(".prices_block .price_matrix_wrapper").length && (priceHtml = $(".prices_block .price_matrix_wrapper").html())), $(".buy_block .sku_props").length && (propsHtml = '<div class="props_item">', $(".buy_block .sku_props .bx_catalog_item_scu > div").each(function () {
			var e = $(this).find(".bx_item_section_name > span").html();
			propsHtml += '<div class="prop_item"><span>' + e + (0 < e.indexOf(":") ? "" : ": ") + (0 < e.indexOf(":") ? "" : '<span class="val">' + $(this).find("ul li.active > span").text() + "</span>") + "</span></div>"
		}), propsHtml += "</div>"), $('<div class="custom_block"><div class="title">' + BX.message("POPUP_GIFT_TEXT") + '</div><div class="item_block"><table class="item_list"><tr><td class="image"><div>' + r + '</div></td><td class="text"><div class="name">' + $("h1").text() + "</div>" + priceHtml + propsHtml + "</td></tr></table></div></div>").prependTo(o.w.find(".form_body"))
	}
	"Y" == arNextOptions.THEME.REGIONALITY_SEARCH_ROW && (o.w.hasClass("city_chooser_frame ") || o.w.hasClass("city_chooser_small_frame")) && o.w.addClass("small_popup_regions"), o.w.addClass("show").css({
		"margin-left": $(window).width() > o.w.outerWidth() ? "-" + o.w.outerWidth() / 2 + "px" : "-" + $(window).width() / 2 + "px",
		opacity: 1
	}), o.w.addClass("show").css({
		top: ($(window).height() > o.w.height() ? Math.floor(($(window).height() - o.w.height()) / 2) : 0) + "px"
	});
	BX.onCustomEvent("onCompleteAction", [{
		action: "loadForm"
	}, $(o.t)[0]]), void 0 === t && (t = ""), void 0 === a && (a = !1);
	var l = $("." + e + "_frame").width();
	$("." + e + "_frame").css("margin-left", "-" + l / 2 + "px"), "order-popup-call" == e || ("order-button" == e ? $(".order-button_frame").find("div[product_name]").find("input").val(o.t.title).attr("readonly", "readonly").css({
		overflow: "hidden",
		"text-overflow": "ellipsis"
	}) : "basket_error" == e && ($(".basket_error_frame .pop-up-title").text(i), $(".basket_error_frame .ajax_text").html(t), window.matchMedia("(max-width: 991px)").matches && $("body").addClass("all_viewed"), initSelects(document), "Y" == n && s && $("<div class='popup_button_basket_wr'><span class='popup_button_basket big_btn button' data-item=" + s.data("item") + "><span class='btn btn-default'>" + BX.message("ERROR_BASKET_BUTTON") + "</span></span></div>").insertAfter($(".basket_error_frame .ajax_text")))), $("." + e + "_frame").show()
};
if ($.fn.jqmEx = function () {
		var n = $(this),
			t = n.data("name"),
			e = "";
		if (t.length) {
			n.closest("#fast_view_item").length && (e = "fast_view_popup");
			var a = arNextOptions.SITE_DIR + "ajax/form.php",
				s = "",
				r = "",
				l = {};
			$.each(n.get(0).attributes, function (e, t) {
				var a = t.nodeName,
					i = n.attr(a);
				if (r += "[" + a + '="' + i + '"]', l[a] = i, /^data\-param\-(.+)$/.test(a)) {
					var o = a.match(/^data\-param\-(.+)$/)[1];
					s += o + "=" + i + "&"
				}
			});
			var i = JSON.stringify(l),
				o = encodeURIComponent(i);
			a += "auth" == t ? "?" + s + "auth=Y" : "?" + s + "data-trigger=" + o, $("." + t + '_frame[data-trigger="' + o + '"]').length || "disabled" != n.attr("disabled") && ($("body").find("." + t + '_frame[data-trigger="' + o + '"]').remove(), $("body").append('<div class="' + t + "_frame " + e + ' jqmWindow popup" data-trigger="' + o + '"></div>'), $("." + t + '_frame[data-trigger="' + o + '"]').jqm({
				trigger: r,
				onLoad: function (e) {
					onLoadjqm(t, e)
				},
				onHide: function (e) {
					onHidejqm(t, e)
				},
				ajax: a
			}))
		}
	}, !funcDefined("onHidejqm")) var onHidejqm = function (e, t) {
	t.w.find(".one_click_buy_result_success").is(":visible") && "one_click_buy_basket" == e && (window.location.href = window.location.href), $(".xzoom-source").length && $(".xzoom-source").remove(), $(".xzoom-preview").length && $(".xzoom-preview").remove(), t.w.animate({
		opacity: 0
	}, 200, function () {
		t.w.hide(), t.w.empty(), t.o.remove(), t.w.removeClass("show"), window.matchMedia("(max-width: 991px)").matches && $("body").removeClass("all_viewed"), "fast_view" == e && $(".fast_view_popup").remove()
	})
};
if (!funcDefined("scroll_block"))
function scroll_block(e) {
	var t = e.offset().top;
	$("header").outerHeight(!0, !0);
	if ($(".stores_tab").length) $(".stores_tab").addClass("active").siblings().removeClass("active");
	else if ($(".prices_tab").addClass("active").siblings().removeClass("active"), $(".prices_tab .opener").length && !$(".prices_tab .opener .opened").length) {
		var a = $(".prices_tab .opener").first();
		a.find(".opener_icon").addClass("opened"), a.parents("tr").addClass("nb"), a.parents("tr").next(".offer_stores").find(".stores_block_wrap").slideDown(200)
	}
	$("html,body").animate({
		scrollTop: t - 80
	}, 150)
}
if (!funcDefined("jqmEd")) var jqmEd = function (t, e, a, i, o, n, s, r) {
	return void 0 === i && (i = ""), void 0 === o && (o = !1), $("body").find("." + t + "_frame").remove(), $("body").append('<div class="' + t + '_frame jqmWindow popup"></div>'), void 0 === a ? $("." + t + "_frame").jqm({
		trigger: "." + t + "_frame.popup",
		onHide: function (e) {
			onHidejqm(t, e)
		},
		onLoad: function (e) {
			onLoadjqm(t, e, i, o)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/form.php?form_id=" + e + (i.length ? "&" + i : "")
	}) : ("enter" == t ? $("." + t + "_frame").jqm({
		trigger: a,
		onHide: function (e) {
			onHidejqm(t, e)
		},
		onLoad: function (e) {
			onLoadjqm(t, e, i, o)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/auth.php"
	}) : "basket_error" == t ? $("." + t + "_frame").jqm({
		trigger: a,
		onHide: function (e) {
			onHidejqm(t, e)
		},
		onLoad: function (e) {
			onLoadjqm(t, e, i, o, n, s, r)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/basket_error.php"
	}) : $("." + t + "_frame").jqm({
		trigger: a,
		onHide: function (e) {
			onHidejqm(t, e)
		},
		onLoad: function (e) {
			onLoadjqm(t, e, i, o)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/form.php?form_id=" + e + (i.length ? "&" + i : "")
	}), $(a).dblclick(function () {
		return !1
	})), !0
};
if (!funcDefined("replaceBasketPopup"))
function replaceBasketPopup(e) {
	void 0 !== e && (e.w.hide(), e.o.hide())
}
if (!funcDefined("waitLayer"))
function waitLayer(e, t) {
	"undefined" != typeof dataLayer && "function" == typeof t ? t() : setTimeout(function () {
		waitLayer(e, t)
	}, e)
}
if (funcDefined("InitTopestMenuGummi") || (InitTopestMenuGummi = function () {
		if (!isOnceInited) {
			function t() {
				var e = r.actual("innerWidth"),
					t = r.find(">li:not(.more),li.more>.dropdown>li"),
					a = t.length;
				if (a) {
					for (var i = !1, o = a - 1; 0 <= o; --o) {
						if (!(0 < (n = t.eq(o)).parents(".more").length))
							if (d[o] > e) i || (i = !0, l.removeClass("hidden")), (s = n.clone()).find(">a").addClass("dark_font"), s.prependTo(c), n.addClass("cloned")
					}
					for (o = 0; o < a; ++o) {
						var n, s;
						if (0 < (n = t.eq(o)).parents(".more").length)
							if (d[o] <= e) o === a - 1 && (i = !1, l.addClass("hidden")), (s = n.clone()).find(">a").removeClass("dark_font"), s.insertBefore(l), n.addClass("cloned")
					}
					r.find("li.cloned").remove()
				}
			}
			var r = $(".menu.topest");
			if (r.length) {
				var l = r.find(">.more"),
					c = l.find(">.dropdown"),
					n = l.actual("outerWidth", {
						includeMargin: !0
					}),
					d = [];
				ignoreResize.push(!0),
					function () {
						var e = r.find(">li:not(.more)"),
							t = e.length;
						if (t)
							for (var a = 0, i = 0; i < t; ++i) {
								var o = e.eq(i).actual("outerWidth", {
									includeMargin: !0
								});
								d[i] = (a += o) + (i !== t - 1 ? n : 0)
							}
					}(), t(), ignoreResize.pop(), BX.addCustomEvent("onWindowResize", function (e) {
						try {
							ignoreResize.push(!0), t()
						} catch (e) {} finally {
							ignoreResize.pop()
						}
					})
			}
		}
	}), funcDefined("InitTopMenuGummi") || (InitTopMenuGummi = function () {
		function t() {
			var e = b.actual("innerWidth") - v.actual("innerWidth"),
				t = _.find(">li:not(.more):not(.catalog),li.more>.dropdown>li"),
				a = t.length;
			if (a) {
				for (var i = !1, o = a - 1; 0 <= o; --o) {
					if (!(0 < (n = t.eq(o)).parents(".more").length))
						if (k[o] > e) i || (i = !0, g.removeClass("hidden")), (s = n.clone()).find(">.dropdown").removeAttr("style").removeClass("toleft"), s.find(">a").addClass("dark_font").removeAttr("style"), s.prependTo(w), n.addClass("cloned")
				}
				for (o = 0; o < a; ++o) {
					var n, s;
					if (0 < (n = t.eq(o)).parents(".more").length)
						if (k[o] <= e) o === a - 1 && (i = !1, g.addClass("hidden")), (s = n.clone()).find(">a").removeClass("dark_font"), s.insertBefore(g), n.addClass("cloned")
				}
				_.find("li.cloned").remove();
				var r = _.find(">li:not(.more):not(.catalog)").length,
					l = e - k[r - 1],
					c = Math.floor(l / (r + (g.hasClass("hidden") ? 0 : 1))),
					d = C + c,
					p = Math.floor(d / 2),
					u = d - p;
				_.find(">li:not(.catalog):visible>a").each(function () {
					$(this).css({
						"padding-left": p + "px"
					}), $(this).css({
						"padding-right": u + "px"
					})
				});
				var h = d + l - (r + (g.is(":visible") ? 1 : 0)) * c,
					m = Math.floor(h / 2),
					f = h - m;
				_.find(">li:visible").last().find(">a").css({
					"padding-left": m + "px"
				}), _.find(">li:visible").last().find(">a").css({
					"padding-right": f + "px"
				})
			}
			CheckTopMenuFullCatalogSubmenu()
		}
		var _ = $(".menu_top_block");
		if ($menuTopest.length) {
			var b = _.parents(".wrap_menu"),
				v = b.find(".catalog_menu_ext"),
				g = _.find(">.more"),
				n = g.actual("outerWidth", {
					includeMargin: !0
				});
			g.addClass("hidden");
			var k = [],
				w = g.find(">.dropdown"),
				C = 2 * parseInt(g.find(">a").css("padding-left"));
			ignoreResize.push(!0),
				function () {
					var e = _.closest(".wrap_menu").find(".inc_menu .menu_top_block >li:not(.more)"),
						t = e.length;
					if (t)
						for (var a = 0, i = 0; i < t; ++i) {
							var o = e.eq(i).actual("outerWidth");
							k[i] = (a += o) + (i !== t - 1 ? n : 0)
						}
				}(), t(), ignoreResize.pop(), BX.addCustomEvent("onWindowResize", function (e) {
					try {
						ignoreResize.push(!0), t()
					} catch (e) {} finally {
						ignoreResize.pop()
					}
				})
		}
	}), !funcDefined("checkCounters"))
function checkCounters(e) {
	return void 0 !== e ? "google" == e && "Y" == arNextOptions.COUNTERS.GOOGLE_ECOMERCE && 0 < arNextOptions.COUNTERS.GOOGLE_COUNTER || "yandex" == e && "Y" == arNextOptions.COUNTERS.YANDEX_ECOMERCE && 0 < arNextOptions.COUNTERS.YANDEX_COUNTER : "Y" == arNextOptions.COUNTERS.YANDEX_ECOMERCE && 0 < arNextOptions.COUNTERS.YANDEX_COUNTER || "Y" == arNextOptions.COUNTERS.GOOGLE_ECOMERCE && 0 < arNextOptions.COUNTERS.GOOGLE_COUNTER
}
if (!funcDefined("addBasketCounter"))
function addBasketCounter(e) {
	if ("N" !== arNextOptions.COUNTERS.USE_BASKET_GOALS) {
		var t = {
			goal: "goal_basket_add",
			params: {
				id: e
			}
		};
		BX.onCustomEvent("onCounterGoals", [t])
	}
	checkCounters() && $.ajax({
		url: arNextOptions.SITE_DIR + "ajax/goals.php",
		dataType: "json",
		type: "POST",
		data: {
			ID: e
		},
		success: function (e) {
			e && e.ID && waitLayer(100, function () {
				dataLayer.push({
					event: arNextOptions.COUNTERS.GOOGLE_EVENTS.ADD2BASKET,
					ecommerce: {
						currencyCode: e.CURRENCY,
						add: {
							products: [{
								id: e.ID,
								name: e.NAME,
								price: e.PRICE,
								brand: e.BRAND,
								category: e.CATEGORY,
								quantity: e.QUANTITY
							}]
						}
					}
				})
			})
		}
	})
}
if (!funcDefined("purchaseCounter"))
function purchaseCounter(e, i, o) {
	checkCounters() && $.ajax({
		url: arNextOptions.SITE_DIR + "ajax/goals.php",
		dataType: "json",
		type: "POST",
		data: {
			ORDER_ID: e,
			TYPE: i
		},
		success: function (t) {
			var a = [];
			if (t.ITEMS)
				for (var e in t.ITEMS) a.push({
					id: t.ITEMS[e].ID,
					sku: t.ITEMS[e].ID,
					name: t.ITEMS[e].NAME,
					price: t.ITEMS[e].PRICE,
					brand: t.ITEMS[e].BRAND,
					category: t.ITEMS[e].CATEGORY,
					quantity: t.ITEMS[e].QUANTITY
				});
			t.ID ? waitLayer(100, function () {
				var e = {
					purchase: {
						actionField: {
							id: t.ACCOUNT_NUMBER,
							shipping: t.PRICE_DELIVERY,
							tax: t.TAX_VALUE,
							list: i,
							revenue: t.PRICE
						},
						products: a
					}
				};
				dataLayer.push({
					event: arNextOptions.COUNTERS.GOOGLE_EVENTS.PURCHASE,
					ecommerce: e
				}), void 0 !== o && o(e)
			}) : void 0 !== o && o()
		},
		error: function () {
			void 0 !== o && o()
		}
	})
}
if (!funcDefined("viewItemCounter"))
function viewItemCounter(e, t) {
	checkCounters() && $.ajax({
		url: arNextOptions.SITE_DIR + "ajax/goals.php",
		dataType: "json",
		type: "POST",
		data: {
			PRODUCT_ID: e,
			PRICE_ID: t
		},
		success: function (e) {
			e.ID && waitLayer(100, function () {
				dataLayer.push({
					ecommerce: {
						detail: {
							products: [{
								id: e.ID,
								name: e.NAME,
								price: e.PRICE,
								brand: e.BRAND,
								category: e.CATEGORY
							}]
						}
					}
				})
			})
		}
	})
}
if (!funcDefined("checkoutCounter"))
function checkoutCounter(i, o, e) {
	checkCounters("google") && $.ajax({
		url: arNextOptions.SITE_DIR + "ajax/goals.php",
		dataType: "json",
		type: "POST",
		data: {
			BASKET: "Y"
		},
		success: function (e) {
			var t = [];
			if (e.ITEMS)
				for (var a in e.ITEMS) t.push({
					id: e.ITEMS[a].ID,
					name: e.ITEMS[a].NAME,
					price: e.ITEMS[a].PRICE,
					brand: e.ITEMS[a].BRAND,
					category: e.ITEMS[a].CATEGORY,
					quantity: e.ITEMS[a].QUANTITY
				});
			t && waitLayer(100, function () {
				dataLayer.push({
					event: arNextOptions.COUNTERS.GOOGLE_EVENTS.CHECKOUT_ORDER,
					ecommerce: {
						checkout: {
							actionField: {
								step: i,
								option: o
							},
							products: t
						}
					}
				})
			})
		}
	})
}
if (!funcDefined("delFromBasketCounter"))
function delFromBasketCounter(e, t) {
	checkCounters() && $.ajax({
		url: arNextOptions.SITE_DIR + "ajax/goals.php",
		dataType: "json",
		type: "POST",
		data: {
			ID: e
		},
		success: function (e) {
			e.ID && waitLayer(100, function () {
				dataLayer.push({
					event: arNextOptions.COUNTERS.GOOGLE_EVENTS.REMOVE_BASKET,
					ecommerce: {
						remove: {
							products: [{
								id: e.ID,
								name: e.NAME,
								category: e.CATEGORY
							}]
						}
					}
				}), "function" == typeof t && t()
			})
		}
	})
}
if (!funcDefined("setHeightCompany"))
function setHeightCompany() {
	$(".md-50.img").height($(".md-50.big").outerHeight() - 35)
}
if (!funcDefined("initSly"))
function initSly() {
	var e = $(document).find(".frame"),
		t = (e.children("ul").eq(0), e.parent());
	arNextOptions.PAGES.CATALOG_PAGE && e.length && (e.sly({
		horizontal: 1,
		itemNav: "basic",
		smart: 1,
		mouseDragging: 0,
		touchDragging: 0,
		releaseSwing: 0,
		startAt: 0,
		scrollBar: t.find(".scrollbar"),
		scrollBy: 1,
		speed: 300,
		elasticBounds: 0,
		easing: "swing",
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
		forward: t.find(".forward"),
		backward: t.find(".backward")
	}), e.sly("reload"))
}
if (!funcDefined("createTableCompare"))
function createTableCompare(e, t, a) {
	try {
		var i = e.clone().removeAttr("id").addClass("clone");
		a.length ? (a.remove(), t.html(""), t.html(i)) : t.append(i)
	} catch (e) {}
}
if (funcDefined("fillBasketPropsExt") || (fillBasketPropsExt = function (e, t, a) {
		var i = 0,
			o = null,
			n = !1,
			s = {},
			r = null;
		if (r = BX(a)) {
			if ((o = r.getElementsByTagName("select")) && o.length)
				for (i = 0; i < o.length; i++)
					if (!o[i].disabled) switch (o[i].type.toLowerCase()) {
						case "select-one":
							s[o[i].name] = o[i].value, n = !0
					}
			if ((o = r.getElementsByTagName("input")) && o.length)
				for (i = 0; i < o.length; i++)
					if (!o[i].disabled) switch (o[i].type.toLowerCase()) {
						case "hidden":
							s[o[i].name] = o[i].value, n = !0;
							break;
						case "radio":
							o[i].checked && (s[o[i].name] = o[i].value, n = !0)
					}
		}
		return n || (s[t] = [], s[t][0] = 0), s
	}), funcDefined("showBasketError") || (showBasketError = function (e, t, a, i) {
		var o = t || BX.message("ERROR_BASKET_TITLE"),
			n = "N",
			s = "";
		void 0 !== typeof a && (n = "Y"), void 0 !== typeof i && (s = i), $("body").append("<span class='add-error-bakset' style='display:none;'></span>"), jqmEd("basket_error", "error-bakset", ".add-error-bakset", e, this, o, n, s), $("body .add-error-bakset").click(), $("body .add-error-bakset").remove()
	}), CheckTopMenuDotted = function () {
		var e = $("nav.mega-menu.sliced");
		if (!window.matchMedia("(max-width:991px)").matches) return e.length && e.each(function () {
			if ($(this).hasClass("initied")) return !1;
			var e = $(this).find("td.js-dropdown");
			if ("none" == $(this).parents(".collapse").css("display")) return !1;
			for (var t = $(this).closest("div").actual("width"), a = $(this).find("table").actual("outerWidth"), i = !1; t < a && (menuItemOldSave = $(this).find("td").not(".nosave").last(), menuItemOldSave.length);) {
				e.show();
				var o = menuItemOldSave.attr("class");
				menuItemNewSave = '<li class="menu-item ' + (menuItemOldSave.hasClass("dropdown") ? "dropdown-submenu " : "") + (menuItemOldSave.hasClass("active") ? "active " : "") + '" data-hidewidth="' + a + '" ' + (o ? 'data-class="' + o + '"' : "") + ">" + menuItemOldSave.find(".wrap").html() + "</li>", menuItemOldSave.remove(), e.find("> .wrap > .dropdown-menu").prepend(menuItemNewSave), a = $(this).find("table").actual("outerWidth"), i = !0
			}
			if (!i)
				do {
					var n = e.find(".dropdown-menu").find("li").length;
					if (menuItemOldSave = e.find(".dropdown-menu").find("li").first(), !menuItemOldSave.length) {
						e.hide();
						break
					}
					if (t < menuItemOldSave.attr("data-hidewidth")) break;
					o = menuItemOldSave.attr("data-class");
					if (menuItemNewSave = '<td class="' + (o ? o + " " : "") + '" data-hidewidth="' + t + '"><div class="wrap">' + menuItemOldSave.html() + "</div></td>", menuItemOldSave.remove(), $(menuItemNewSave).insertBefore($(this).find("td.js-dropdown")), !n) {
						e.hide();
						break
					}
					a = $(this).find("table").actual("outerWidth")
				} while (a <= t);
			$(this).find("td").css("visibility", "visible"), $(this).find("td").removeClass("unvisible"), $(this).addClass("ovisible"), $(this).addClass("initied")
		}), !1
	}, CheckTopVisibleMenu = function (e) {
		var t = $(".dropdown-menu:visible").last();
		if (t.length) {
			t.find("a").css("white-space", ""), t.css("left", ""), t.css("right", ""), t.removeClass("toright");
			var a = t.offset().left;
			if (void 0 !== a) {
				var i = t.parents(".mega-menu");
				i.length || (i = t.closest(".logo-row"));
				var o = i.outerWidth(),
					n = i.offset().left + o,
					s = 0 < t.parents(".toright").length,
					r = t.parents(".dropdown-menu"),
					l = 0 < r.length;
				if (l) var c = r.first().outerWidth() + r.first().offset().left;
				c + t.outerWidth() > n && t.find("a").css("white-space", "normal");
				var d = a + t.outerWidth();
				if (n < d || s) {
					var p;
					if (p = n - d, l || s) t.css("left", "auto"), t.css("right", "100%"), t.addClass("toright");
					else {
						var u = parseInt(t.css("left"));
						t.css("left", u + p + "px")
					}
				}
			}
		}
	}, !funcDefined("isRealValue"))
function isRealValue(e) {
	return e && "null" !== e && "undefined" !== e
}
if (!funcDefined("rightScroll"))
function rightScroll(e, t) {
	var a = BX("prop_" + e + "_" + t);
	if (a) {
		var i = parseInt(a.style.marginLeft);
		0 <= i && (a.style.marginLeft = i - 20 + "%")
	}
}
if (!funcDefined("leftScroll"))
function leftScroll(e, t) {
	var a = BX("prop_" + e + "_" + t);
	if (a) {
		var i = parseInt(a.style.marginLeft);
		i < 0 && (a.style.marginLeft = i + 20 + "%")
	}
}
if (funcDefined("replaceRegionTags") || (replaceRegionTags = function (e) {
		if ("undefined" != typeof arAsproOptions && "REGION" in arAsproOptions && "SEO_MARKS" in arAsproOptions) {
			for (var t in arAsproOptions.REGION) arAsproOptions.REGION.hasOwnProperty(t);
			$("body").html();
			for (var t in arAsproOptions.SEO_MARKS)
				if (arAsproOptions.SEO_MARKS.hasOwnProperty(t) && arAsproOptions.REGION[arAsproOptions.SEO_MARKS[t]]) {
					var a = new RegExp(t, "g");
					if ($("body h1").length) var i = $("body").find("h1").html().replace(a, arAsproOptions.REGION[arAsproOptions.SEO_MARKS[t]]);
					if ($("body .breadcrumbs").length) var o = $("body").find(".breadcrumbs").html().replace(a, arAsproOptions.REGION[arAsproOptions.SEO_MARKS[t]]);
					$("h1").html(i), $(".breadcrumbs").html(o)
				}
		}
	}), funcDefined("InitOrderCustom") || (InitOrderCustom = function () {
		$(".ps_logo img").wrap('<div class="image"></div>'), $("#bx-soa-order .radio-inline").each(function () {
			"checked" == $(this).find("input").attr("checked") && $(this).addClass("checked")
		}), $("#bx-soa-order .checkbox input[type=checkbox]").each(function () {
			"checked" == $(this).attr("checked") && $(this).parent().addClass("checked")
		}), $("#bx-soa-order .bx-authform-starrequired").each(function () {
			var e = $(this).html(),
				t = $(this).closest("label").length ? $(this).closest("label") : $(this).closest(".bx-authform-label-container"),
				a = t.find(".bx-captcha");
			a.length ? $('<span class="bx-authform-starrequired"> ' + e + "</span>").insertBefore(a) : t.append('<span class="bx-authform-starrequired"> ' + e + "</span>"), $(this).remove()
		}), $(".bx_ordercart_coupon").each(function () {
			$(this).find(".bad").length ? $(this).addClass("bad") : $(this).find(".good").length && $(this).addClass("good")
		})
	}), funcDefined("InitLabelAnimation") || (InitLabelAnimation = function (e) {
		$(e).length && ($(e).find(".form-group").each(function () {
			$(this).find("input[type=text], textarea").length && !$(this).find(".dropdown-block").length && "" != $(this).find("input[type=text], textarea").val() && $(this).addClass("value_y")
		}), $(document).on("click", e + " .form-group:not(.bx-soa-pp-field) label", function () {
			$(this).parent().find("input, textarea").focus()
		}), $(document).on("focusout", e + " .form-group:not(.bx-soa-pp-field) input, " + e + " .form-group:not(.bx-soa-pp-field) textarea", function () {
			"" == $(this).val() || $(this).closest(".form-group").find(".dropdown-block").length || $(this).closest(".form-group").find("#profile_change").length ? $(this).closest(".form-group").removeClass("value_y") : $(this).closest(".form-group").addClass("value_y")
		}), $(document).on("focus", e + " .form-group:not(.bx-soa-pp-field) input, " + e + " .form-group:not(.bx-soa-pp-field) textarea", function () {
			$(this).closest(".form-group").find(".dropdown-block").length || $(this).closest(".form-group").find("#profile_change").length || $(this).closest(".form-group").find("[name=PERSON_TYPE_OLD]").length || $(this).closest(".form-group").addClass("value_y")
		}))
	}), checkPopupWidth = function () {
		$(".popup.show").each(function () {
			var e = $(this).actual("width");
			$(this).css({
				"margin-left": $(window).width() > e ? "-" + e / 2 + "px" : "-" + $(window).width() / 2 + "px"
			})
		})
	}, checkCaptchaWidth = function () {
		$(".captcha-row").each(function () {
			var e = $(this).actual("width");
			$(this).hasClass("b") ? 320 < e && $(this).removeClass("b") : e <= 320 && $(this).addClass("b")
		})
	}, checkFormWidth = function () {
		$(".form .form_left").each(function () {
			var e = $(this).parents(".form"),
				t = e.actual("width");
			e.hasClass("b") ? 417 < t && e.removeClass("b") : t <= 417 && e.addClass("b")
		})
	}, checkFormControlWidth = function () {
		$(".form-control").each(function () {
			var e = $(this).actual("width"),
				t = $(this).find("label:not(.error) > span").actual("width"),
				a = $(this).find("label.error").actual("width");
			0 < a ? $(this).hasClass("h") ? t + a + 5 < e && $(this).removeClass("h") : e <= t + a + 5 && $(this).addClass("h") : $(this).removeClass("h")
		})
	}, scrollToTop = function () {
		if ("NONE" !== arNextOptions.THEME.SCROLLTOTOP_TYPE) {
			var e = !1;
			$("body").append($("<a />").addClass("scroll-to-top " + arNextOptions.THEME.SCROLLTOTOP_TYPE + " " + arNextOptions.THEME.SCROLLTOTOP_POSITION).attr({
				href: "#",
				id: "scrollToTop"
			})), $("#scrollToTop").click(function (e) {
				return e.preventDefault(), $("body, html").animate({
					scrollTop: 0
				}, 500), !1
			}), $(window).scroll(function () {
				e || (e = !0, e = (150 < $(window).scrollTop() ? $("#scrollToTop").stop(!0, !0).addClass("visible") : $("#scrollToTop").stop(!0, !0).removeClass("visible"), !1), checkScrollToTop())
			})
		}
	}, checkScrollToTop = function () {
		var e = $(window).scrollTop(),
			t = $(window).height(),
			a = 0;
		$("footer").length && (a = $("footer").offset().top + 70), "CONTENT" == arNextOptions.THEME.SCROLLTOTOP_POSITION && (warpperWidth = $("body > .wrapper > .wrapper_inner").width(), $("#scrollToTop").css("margin-left", Math.ceil(warpperWidth / 2) + 23)), a < e + t ? $("#scrollToTop").css("bottom", 55 + e + t - a + 40) : 55 < parseInt($("#scrollToTop").css("bottom")) && $("#scrollToTop").css("bottom", 55)
	}, CheckObjectsSizes = function () {
		$(".container iframe,.container object,.container video").each(function () {
			var e = $(this).attr("height"),
				t = $(this).attr("width");
			e && t && $(this).css("height", $(this).outerWidth() * e / t)
		})
	}, !funcDefined("reloadTopBasket")) var reloadTopBasket = function (e, t, a, i, o, n) {
	var s = {
		PARAMS: $("#top_basket_params").val(),
		ACTION: e
	};
	void 0 !== n && (s.delete_top_item = "Y", s.delete_top_item_id = n.data("id")), $.post(arNextOptions.SITE_DIR + "ajax/show_basket_actual.php", s, $.proxy(function (e) {
		$(t).html(e), getActualBasket();
		BX.onCustomEvent("onCompleteAction", [{
			action: "loadBasket"
		}])
	}))
};
if (CheckTabActive = function () {
		clicked_tab && window.matchMedia("(min-width: 768px)").matches && (clicked_tab--, $(".nav.nav-tabs li").each(function () {
			$(this).index() == clicked_tab && $(this).addClass("active")
		}), $(".catalog_detail .tab-content .tab-pane:eq(" + clicked_tab + ")").addClass("active"), $(".catalog_detail .tab-content .tab-pane .title-tab-heading").next().removeAttr("style"), clicked_tab = 0)
	}, !funcDefined("initCountdown")) var initCountdown = function () {
	$(".view_sale_block").size() && $(".view_sale_block").each(function () {
		var e = $(this).find(".active_to").text(),
			t = new Date(e.replace(/(\d+)\.(\d+)\.(\d+)/, "$3/$2/$1"));
		$(this).find(".countdown").countdown({
			until: t,
			format: "dHMS",
			padZeroes: !0,
			layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'
		}, $.countdown.regionalOptions.ru)
	})
};
if (!funcDefined("initCountdownTime")) var initCountdownTime = function (e, t) {
	if (t) {
		var a = new Date(t.replace(/(\d+)\.(\d+)\.(\d+)/, "$3/$2/$1"));
		e.find(".countdown").countdown("destroy"), e.find(".countdown").countdown({
			until: a,
			format: "dHMS",
			padZeroes: !0,
			layout: '{d<}<span class="days item">{dnn}<div class="text">{dl}</div></span>{d>} <span class="hours item">{hnn}<div class="text">{hl}</div></span> <span class="minutes item">{mnn}<div class="text">{ml}</div></span> <span class="sec item">{snn}<div class="text">{sl}</div></span>'
		}, $.countdown.regionalOptions.ru), e.find(".view_sale_block").show()
	} else e.find(".view_sale_block").hide()
};
waitCounter = function (e, t, a) {
	"object" == typeof window["yaCounter" + e] ? "function" == typeof a && a() : setTimeout(function () {
		waitCounter(e, t, a)
	}, t)
};
var isOnceInited = insertFilter = !1,
	animationTime = 200,
	delayTime = 200,
	topMenuEnterTimer = !1,
	isMobile = jQuery.browser.mobile;
if (isMobile && (document.documentElement.className += " mobile"), -1 != navigator.userAgent.indexOf("Edge") && (document.documentElement.className += " bx-ie-edge"), !funcDefined("oneClickBuy")) var oneClickBuy = function (e, t, a) {
	var i = "one_click_buy",
		o = 1,
		n = $(a).closest(".buy_block").find(".to-cart"),
		s = $(a).closest("tr").find(".to-cart");
	void 0 !== a && (o = $(a).attr("data-quantity"), $(a).attr("data-props")), o < 0 && (o = 1);
	var r = n.data("props"),
		l = s.data("props"),
		c = "",
		d = "",
		p = "N",
		u = {},
		h = n.data("iblockid"),
		m = n.attr("data-item");
	if (r ? c = r.split(";") : l && (c = l.split(";")), n.data("part_props") && (d = n.data("part_props")), n.data("add_props") && (p = n.data("add_props")), (u = fillBasketPropsExt(n, "prop", n.data("bakset_div"))).iblockID = h, u.part_props = d, u.add_props = p, u.props = JSON.stringify(c), u.item = m, u.ocb_item = "Y", console.log(c), console.log(JSON.stringify(u)), window.matchMedia("(min-width:992px)").matches) $(a).hasClass("clicked") || ($(a).addClass("clicked"), $("body").find("." + i + "_frame").remove(), $("body").find("." + i + "_trigger").remove(), $("body").append('<div class="' + i + '_frame popup"></div>'), $("body").append('<div class="' + i + '_trigger"></div>'), $("." + i + "_frame").jqm({
		trigger: "." + i + "_trigger",
		onHide: function (e) {
			onHidejqm(i, e)
		},
		toTop: !1,
		onLoad: function (e) {
			onLoadjqm(i, e)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/one_click_buy.php?ELEMENT_ID=" + e + "&IBLOCK_ID=" + t + "&ELEMENT_QUANTITY=" + o + "&OFFER_PROPS=" + u.props
	}), $("." + i + "_trigger").click());
	else {
		var f = arNextOptions.SITE_DIR + "form/";
		f += "?name=" + i + "&form_id=ocb&path=" + window.location.pathname + "&ELEMENT_ID=" + e + "&IBLOCK_ID=" + t + "&ELEMENT_QUANTITY=" + o + "&OFFER_PROPS=" + u.props, location.href = f
	}
};
if (!funcDefined("oneClickBuyBasket")) var oneClickBuyBasket = function () {
	if (name = "one_click_buy_basket", window.matchMedia("(min-width:992px)").matches) $(".fast_order").hasClass("clicked") || ($(".fast_order").addClass("clicked"), $("body").find("." + name + "_frame").remove(), $("body").find("." + name + "_trigger").remove(), $("body").append('<div class="' + name + '_frame popup"></div>'), $("body").append('<div class="' + name + '_trigger"></div>'), $("." + name + "_frame").jqm({
		trigger: "." + name + "_trigger",
		onHide: function (e) {
			onHidejqm(name, e)
		},
		onLoad: function (e) {
			onLoadjqm(name, e)
		},
		ajax: arNextOptions.SITE_DIR + "ajax/one_click_buy_basket.php"
	}), $("." + name + "_trigger").click());
	else {
		var e = arNextOptions.SITE_DIR + "form/";
		e += "?name=" + name + "&form_id=ocb&path=" + window.location.pathname + "&buy_basket=y", location.href = e
	}
};
$(document).on("click", ".menu_top_block>li .more a", function () {
	$this = $(this), $this.parents(".dropdown").first().find(">.hidden").removeClass("hidden"), $this.parent().addClass("hidden"), setTimeout(function () {
		$this.parent().remove()
	}, 500)
}), $(document).on("mouseenter", ".menu_top_block.catalogfirst>li>.dropdown>li.full", function () {
	$(this).find(">.dropdown").length && topMenuEnterTimer && (clearTimeout(topMenuEnterTimer), topMenuEnterTimer = !1)
}), $(document).on("mouseenter", ".menu_top_block>li:not(.full)", function () {
	var t = $(this).find(">.dropdown");
	if (t.length && !t.hasClass("visible")) {
		var e = $(this).parents(".menu").parents(".wrap_menu"),
			a = e.actual("outerWidth"),
			i = e.offset().left + a - ($(this).offset().left + t.actual("outerWidth"));
		if (window.matchMedia("(min-width: 951px)").matches && $(this).hasClass("catalog") && ($(".banner_auto").hasClass("catalog_page") || $(".banner_auto").hasClass("front_page"))) return;
		i < 0 && t.css({
			left: i + "px"
		}), t.stop().slideDown(animationTime, function () {
			t.css({
				height: "",
				overflow: "visible"
			})
		}), $(this).on("mouseleave", function () {
			var e = setTimeout(function () {
				t.stop().slideUp(animationTime, function () {
					t.css({
						left: ""
					})
				})
			}, delayTime);
			$(this).on("mouseenter", function () {
				e && (clearTimeout(e), e = !1)
			})
		})
	}
}), $(document).on("mouseenter", ".menu_top_block>li .dropdown>li", function () {
	var s = $(this),
		r = s.find(">.dropdown");
	if (r.length && (!s.parents(".full").length && !s.hasClass("full") || s.parents(".more").length)) {
		var l = s.parents(".menu").parents(".wrap_menu"),
			c = [];
		topMenuEnterTimer = setTimeout(function () {
			var e = l.actual("outerWidth"),
				t = l.offset().left,
				a = t + e,
				i = !!s.parent().hasClass("toleft");
			(i = i ? s.offset().left + s.actual("outerWidth") - r.actual("outerWidth") < t : s.offset().left + s.actual("outerWidth") + r.actual("outerWidth") > a) ? s.find(">.dropdown").addClass("toleft").show(): s.find(">.dropdown").removeClass("toleft").show();
			var o = r.offset().left,
				n = o + r.actual("outerWidth");
			s.parents(".dropdown").each(function () {
				var e = $(this),
					t = e.offset().left,
					a = t + e.actual("outerWidth");
				(o <= t && t < n - 1 || o + 1 < a && a <= n) && (c.push(e), e.find(">li>a").css({
					opacity: "0.1"
				}))
			})
		}, delayTime), s.unbind("mouseleave"), s.on("mouseleave", function () {
			var e = setTimeout(function () {
				if (s.find(".dropdown").removeClass("toleft").hide(), c.length)
					for (i in c) c[i].find(">li>a").css({
						opacity: ""
					})
			}, delayTime);
			s.unbind("mouseenter"), s.on("mouseenter", function () {
				e && (clearTimeout(e), e = !1)
			})
		})
	}
}), $(document).on("mouseenter", ".menu .mega-menu table td, .menu-row .mega-menu table td", function () {
	var e = $(this),
		t = e.find("> .wrap > .dropdown-menu");
	e.hasClass("wide_menu") || (t.show(), CheckTopVisibleMenu());
	$(".wrapper1.dark-hover-overlay").length;
	t.velocity("stop"), 0 != t.css("opacity") ? t.css("opacity", "1") : t.velocity("fadeIn", {
		duration: 150,
		delay: 250,
		complete: function () {}
	}), e.one("mouseleave", function () {
		t.velocity("stop").velocity("fadeOut", {
			duration: 50,
			delay: 300,
			complete: function () {}
		})
	})
}), $(document).on("mouseenter", ".menu-item:not(.wide_menu) .dropdown-menu .dropdown-submenu", function () {
	var e = $(this),
		t = e.find("> .dropdown-menu");
	t.velocity("stop"), 0 != t.css("opacity") ? t.css("opacity", "1") : t.velocity("transition.fadeIn", {
		duration: 300,
		delay: 250
	}), e.one("mouseleave", function () {
		t.velocity("stop").velocity("fadeOut", {
			duration: 150,
			delay: 300
		})
	})
}), getGridSize = function (e, t) {
	var a = 1;
	return window.matchMedia("(min-width: 1200px)").matches && (a = e[0], void 0 !== t.data("lg_count") && t.data("lg_count") && $(".front.wide_page").length && (a = t.data("lg_count"))), window.matchMedia("(max-width: 1200px)").matches && (a = e[1]), window.matchMedia("(max-width: 992px)").matches && (a = e[2]), e[3] && window.matchMedia("(max-width: 600px)").matches && (a = e[3]), e[4] && window.matchMedia("(max-width: 400px)").matches && (a = e[4]), a
}, CheckFlexSlider = function () {
	$(".flexslider:not(.thmb)").each(function () {
		var e = $(this);
		if (void 0 !== e.data("flexslider") && "vars" in e.data("flexslider")) {
			e.resize();
			var t = e.data("flexslider").vars.counts;
			if (void 0 !== t && e.is(":visible")) {
				var a = getGridSize(t, e);
				(a != e.data("flexslider").vars.minItems || a != e.data("flexslider").vars.maxItems || a != e.data("flexslider").vars.move) && (e.data("flexslider").vars.minItems = a, e.data("flexslider").vars.maxItems = a, e.data("flexslider").vars.move = a, e.flexslider(0), e.resize(), e.resize())
			}
		}
	})
}, InitFlexSlider = function () {
	$(".flexslider:not(.thmb):not(.flexslider-init)").each(function () {
		var e = $(this),
			t = $.extend({}, {
				animationLoop: !1,
				controlNav: !1,
				keyboard: !1,
				pauseOnAction: !1,
				pauseInvisible: !1,
				directionNav: !0,
				useCSS: !1,
				animation: "slide"
			}, void 0, e.data("plugin-options"));
		!e.parent().hasClass("top_slider_wrapp") && e.is(":visible") && (void 0 !== t.counts && "vertical" !== t.direction && (t.maxItems = getGridSize(t.counts, e), t.minItems = getGridSize(t.counts, e), t.itemWidth = 200), void 0 === t.move && (t.move = 1), t.start = function (e) {
			var t = {
				slider: e
			};
			BX.onCustomEvent("onSlideInit", [t])
		}, t.after = function (e) {
			var t = {
				slider: e
			};
			BX.onCustomEvent("onSlideComplete", [t])
		}, t.end = function (e) {
			var t = {
				slider: e
			};
			BX.onCustomEvent("onSlideEnd", [t])
		}, e.flexslider(t).addClass("flexslider-init"), t.controlNav && e.addClass("flexslider-control-nav"), t.directionNav && e.addClass("flexslider-direction-nav"))
	})
}, InitZoomPict = function (e) {
	var t = $(".zoom_picture");
	if (void 0 !== e && (t = e), t.length) {
		t.closest(".slides");
		var a = t,
			i = $.extend({}, {
				zoomWidth: 200,
				zoomHeight: 200,
				adaptive: !1,
				title: !0,
				Xoffset: 15
			}, void 0, a.data("plugin-options"));
		a.xzoom(i), t.on("mouseleave", function () {
			t.data("xzoom").movezoom(event)
		})
	}
};
var arBasketAsproCounters = arStatusBasketAspro = arBasketPrices = {};
if (SetActualBasketFlyCounters = function () {
		1 == arBasketAsproCounters.DEFAULT ? $.ajax({
			url: arNextOptions.SITE_DIR + "ajax/basket_fly.php",
			type: "post",
			success: function (e) {
				$("#basket_line .basket_fly").removeClass("loaded").html(e)
			}
		}) : ($(".basket_fly .opener .basket_count .count").attr("class", "count" + (0 < arBasketAsproCounters.READY.COUNT ? "" : " empty_items")).find(".items span").text(arBasketAsproCounters.READY.COUNT), $(".basket_fly .opener .basket_count + a").attr("href", arBasketAsproCounters.READY.HREF), $(".basket_fly .opener .basket_count").attr("title", arBasketAsproCounters.READY.TITLE).attr("class", "basket_count small clicked" + (0 < arBasketAsproCounters.READY.COUNT ? "" : " empty")), $(".basket_fly .opener .wish_count .count").attr("class", "count" + (0 < arBasketAsproCounters.DELAY.COUNT ? "" : " empty_items")).find(".items span").text(arBasketAsproCounters.DELAY.COUNT), $(".basket_fly .opener .wish_count + a").attr("href", arBasketAsproCounters.DELAY.HREF), $(".basket_fly .opener .wish_count").attr("title", arBasketAsproCounters.DELAY.TITLE).attr("class", "wish_count small clicked" + (0 < arBasketAsproCounters.DELAY.COUNT ? "" : " empty")), $(".basket_fly .opener .compare_count .wraps_icon_block").attr("class", "wraps_icon_block compare" + (0 < arBasketAsproCounters.COMPARE.COUNT ? "" : " empty_block")), $(".basket_fly .opener .compare_count .count").attr("class", "count" + (0 < arBasketAsproCounters.COMPARE.COUNT ? "" : " empty_items")).find(".items span").text(arBasketAsproCounters.COMPARE.COUNT), $(".basket_fly .opener .compare_count + a").attr("href", arBasketAsproCounters.COMPARE.HREF))
	}, CheckHeaderFixed = function () {
		var o = $("#headerfixed, #headerSimple");
		if (header = $("header, #headerSimple").first(), o.length && header.length) {
			var n = !1,
				s = !0,
				r = o.actual("outerHeight"),
				l = header.actual("outerHeight"),
				c = l - r,
				d = $(".btn.btn-responsive-nav"),
				p = $("#panel:visible").actual("outerHeight");
			topBlock = $(".TOP_HEADER").first(), c <= 0 && (c = 0), topBlock.length && (p += topBlock.actual("outerHeight")), $(window).scroll(function () {
				var e = $(".product-item-detail-tabs-container-fixed");
				if (window.matchMedia("(min-width:768px)").matches) {
					var t = $(window).scrollTop();
					s = !d.is(":visible");
					var a = $(".tabs_section .nav.nav-tabs").offset(),
						i = $(".search-wrapper .search-input:visible");
					$(".title-search-result." + i.attr("id"));
					n ? !n && s || (t <= c + p || !s) && (n = !1, o.removeClass("fixed"), $("#headerSimple").closest(".header-wrapper").css({
						"margin-top": 0
					})) : l + p < t && s && (n = !0, o.addClass("fixed"), headerSimpleHeight = $("#headerSimple").actual("outerHeight"), $("#headerSimple").closest(".header-wrapper").css({
						"margin-top": headerSimpleHeight
					}), $("nav.mega-menu.sliced").length && $("nav.mega-menu.sliced").removeClass("initied"), CheckTopMenuDotted()), e.length && (t + r > a.top ? (e.css({
						top: o.actual("outerHeight")
					}), e.addClass("fixed")) : e.hasClass("fixed") && (e.removeAttr("style"), e.removeClass("fixed")))
				}
			})
		}
		var t = $(".wrapper1.mfixed_Y #mobileheader, .wrapper1.mfixed_Y #mobileheadersimple");
		if (t.length && isMobile) {
			var a = !1,
				i = $("#panel:visible").actual("outerHeight");
			$(window).scroll(function () {
				var e = $(window).scrollTop();
				window.matchMedia("(max-width:991px)").matches ? $(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader").length || $(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheadersimple").length ? (startScroll < e ? ($(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader").removeClass("fixed"), $(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheadersimple").removeClass("fixed")) : 0 + i < e ? ($(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader").addClass("fixed"), $(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheadersimple").addClass("fixed")) : e <= 0 + i && ($(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheader").removeClass("fixed"), $(".wrapper1.mfixed_Y.mfixed_view_scroll_top #mobileheadersimple").removeClass("fixed")), startScroll = e) : a ? a && e <= 0 + i && (a = !1, t.removeClass("fixed")) : 0 + i < e && (a = !0, t.addClass("fixed")) : t.removeClass("fixed")
			})
		}
	}, CheckHeaderFixedMenu = function () {
		if (2 == arNextOptions.THEME.HEADER_FIXED && $("#headerfixed .js-nav").length && window.matchMedia("(min-width: 992px)").matches) {
			$("#headerfixed .js-nav").css("width", "0");
			var e = 0,
				t = $("#headerfixed .maxwidth-theme").actual("width"),
				a = $("#headerfixed .logo-row.v2 .menu-block").actual("outerWidth") - $("#headerfixed .logo-row.v2 .menu-block").actual("width");
			$("#headerfixed .logo-row.v2 > .inner-table-block").each(function () {
				$(this).hasClass("menu-block") || (e += $(this).actual("outerWidth"))
			}), $("#headerfixed .js-nav").width(t - e - a)
		}
	}, CheckTopMenuPadding = function () {
		if ($(".logo_and_menu-row .right-icons .wrap_icon").length && $(".logo_and_menu-row .menu-row").length) {
			var i = $(".menu-row .menu-only").position().left,
				o = 0,
				n = 0;
			$(".logo_and_menu-row .menu-row>div").each(function (e) {
				if (!$(this).hasClass("menu-only")) {
					var t = $(this).position().left,
						a = $(this).outerWidth() + 1;
					i < t ? n += a : o += a
				}
			}).promise().done(function () {
				$(".logo_and_menu-row .menu-only").css({
					"padding-left": o,
					"padding-right": n
				})
			})
		}
	}, CheckTopMenuOncePadding = function () {
		if ($(".menu-row.sliced .right-icons .wrap_icon").length) {
			var i = $(".menu-row .menu-only").position().left,
				o = 0,
				n = 0;
			$(".menu-row.sliced .maxwidth-theme>div>div>div").each(function (e) {
				if (!$(this).hasClass("menu-only")) {
					var t = $(this).position().left,
						a = $(this).outerWidth() + 1;
					i < t ? n += a : o += a
				}
			}).promise().done(function () {
				$(".menu-row.sliced .menu-only").css({
					"padding-left": o,
					"padding-right": n
				})
			})
		}
	}, CheckSearchWidth = function () {
		if ($(".logo_and_menu-row .search_wrap").length) {
			$(".logo_and_menu-row .search_wrap").position().left;
			var t = $(".logo_and_menu-row .maxwidth-theme").width() - 2;
			width = 0, $(".logo_and_menu-row .maxwidth-theme > .row >div").each(function () {
				if (!$(this).hasClass("search_wrap")) {
					var e = $(this).outerWidth();
					width = width ? width - e : t - e
				}
			}).promise().done(function () {
				$(".logo_and_menu-row .search_wrap.wide_search").length ? $(".logo_and_menu-row .search_wrap .search-block").outerWidth(width) : $(".logo_and_menu-row .search_wrap").outerWidth(width), $(".logo_and_menu-row .search_wrap").css({
					opacity: 1,
					visibility: "visible"
				})
			})
		}
	}, CheckPhoneDropdown = function () {
		var e = $("#footer"),
			t = $("#footer .phone .dropdown");
		e.length && t.length && e.offset().top + e.height() < t.offset().top + t.height() && t.css({
			top: "-" + t.height() + "px"
		})
	}, scrollPreviewBlock = function () {
		if (void 0 !== $.cookie("scroll_block") && $.cookie("scroll_block")) {
			var e = $($.cookie("scroll_block"));
			e.length && $("body, html").animate({
				scrollTop: e.offset().top
			}, 500), $.cookie("scroll_block", null)
		}
	}, scrollToBlock = function (e) {
		if ($(e).length) {
			var t = $(e).offset().top;
			void 0 !== $(e).data("toggle") && $(e).click(), void 0 !== $(e).data("offset") && (t += $(e).data("offset")), $("body, html").animate({
				scrollTop: t
			}, 500)
		}
	}, SetFixedAskBlock = function () {
		if ($(".ask_a_question_wrapper").length) {
			var e = $(".ask_a_question_wrapper").offset(),
				t = 0,
				a = $(".ask_a_question_wrapper").find(".ask_a_question"),
				i = BX.pos(a[0]),
				o = i.bottom - i.top,
				n = $("#headerfixed").height() + 20;
			if ($("footer").length && (t = $("footer").offset().top), $(".banner.CONTENT_BOTTOM").length && (t = $(".banner.CONTENT_BOTTOM").offset().top), t < o + n + documentScrollTopLast + 130) a.removeClass("fixed").css({
				top: "auto",
				width: "auto",
				bottom: 0
			}), a.parent().css("position", "static"), a.parent().parent().css("position", "static");
			else if (a.parent().removeAttr("style"), a.parent().parent().removeAttr("style"), documentScrollTopLast + n > e.top) {
				var s = $(".fixed_block_fix").width();
				a.addClass("fixed").css({
					top: n,
					bottom: "auto"
				}), s && a.css({
					width: $(".fixed_block_fix").width()
				})
			} else a.removeClass("fixed").css({
				top: 0,
				width: "auto"
			})
		}
	}, MegaMenuFixed = function () {
		$(".logo_and_menu-row .burger").on("click", function () {
			$(".mega_fixed_menu").fadeIn(150), $(".header_wrap").toggleClass("zindexed")
		}), $(".mega_fixed_menu .svg.svg-inline-close").on("click", function () {
			$(this).closest(".mega_fixed_menu").fadeOut(150), $(".header_wrap").toggleClass("zindexed")
		}), $(".mega_fixed_menu .dropdown-menu .arrow").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), $(this).closest(".dropdown-submenu").find(".dropdown-menu").slideToggle(150), $(this).closest(".dropdown-submenu").addClass("opened")
		})
	}, CheckPopupTop = function () {
		var e = $(".jqmWindow.show:last");
		if (e.length || (e = $(".jqmWindow.show")), e.length || (e = $(".jqm-init.show")), e.length) {
			var t = $(document).scrollTop(),
				a = $(window).height(),
				i = parseInt(e.css("top")),
				o = e.height();
			o <= a ? i = (a - o) / 2 : (documentScrollTopLast < t ? i -= t - documentScrollTopLast : t < documentScrollTopLast && (i += documentScrollTopLast - t), i + o < a ? i = a - o : 0 < i && (i = 0)), e.css("top", i + "px")
		}
	}, initCalculatePreview = function () {
		$(".calculate-delivery.with_preview:not(.inited)").each(function () {
			var i = $(this),
				o = i.find("span[data-event=jqm]"),
				n = i.find(".calculate-delivery-preview");
			i.addClass("inited"), i.appear(function () {
				if (o.length) {
					void 0 === window["calculate-delivery-preview-index"] ? window["calculate-delivery-preview-index"] = 1001 : ++window["calculate-delivery-preview-index"];
					var e = 1 * o.attr("data-param-product_id"),
						t = 1 * o.attr("data-param-quantity");
					if (0 < e) {
						var a = window["calculate-delivery-preview-index"];
						o.data({
							areaIndex: a
						}), $.ajax({
							url: arNextOptions.SITE_DIR + "ajax/delivery.php",
							type: "POST",
							data: {
								is_preview: "Y",
								index: a,
								product_id: e,
								quantity: t
							},
							beforeSend: function () {
								i.addClass("loadings")
							},
							success: function (e) {
								var t = o.data("areaIndex");
								void 0 !== t && t == a && (o.hide(), n.html(e), n.find(".catalog-delivery-preview").length || (n.empty(), o.show()))
							},
							error: function (e, t, a) {},
							complete: function () {
								var e = o.data("areaIndex");
								void 0 !== e && e == a && i.removeClass("loadings")
							}
						})
					}
				}
			}, {
				accX: 0,
				accY: 0
			})
		})
	}, !funcDefined("setPriceItem")) var setPriceItem = function (e, t, a, i, o, n, s) {
	var r = e.find(".to-cart").attr("data-ratio"),
		l = void 0 !== a && a ? a : e.find(".to-cart").attr("data-value"),
		c = e.find(".to-cart").attr("data-currency"),
		d = '<div class="total_summ" style="display:none;"><div>' + BX.message("TOTAL_SUMM_ITEM") + "<span></span></div></div>",
		p = (e.find(".cost.prices"), e.find(".has_offer_prop").length, void 0 !== i && i);
	e.find(".buy_block").length ? e.find(".buy_block .total_summ").length || o || $(d).appendTo(e.find(".buy_block")) : e.find(".counter_wrapp").length && (e.find(".counter_wrapp + .wrapp-one-click").length ? e.find(".wrapp-one-click .total_summ").length || o || $(d).appendTo(e.find(".counter_wrapp + .wrapp-one-click")) : e.find(".counter_wrapp .total_summ").length || o || $(d).appendTo(e.find(".counter_wrapp:first"))), e.find(".total_summ").length && (l && c ? 1 == t && r == t || void 0 !== o && o && !p ? e.find(".total_summ").slideUp(50) : (e.find(".total_summ span").html(BX.Currency.currencyFormat(l * t, c, !0)), e.find(".total_summ").is(":hidden") && e.find(".total_summ").slideDown(100)) : e.find(".total_summ").slideUp(100))
};
if (!funcDefined("getCurrentPrice")) var getCurrentPrice = function (e, t, a) {
	var i = "",
		o = BX.Currency.currencyFormat(e, t);
	return 0 <= a.indexOf(o) ? (i = a.replace(o, '<span class="price_value">' + o + '</span><span class="price_currency">'), i += "</span>") : i = a, i
};

function touchMenu(e) {
	isMobile ? $(e).length && $(e).each(function () {
		$(this).on("touchend", function (e) {
			var t = $(e.target).closest(".menu-item");
			if ($(".menu.topest > li").removeClass("hover"), $(".menu_top_block.catalog_block li").removeClass("hover"), $(".bx-breadcrumb-item.drop").removeClass("hover"), t.find(".dropdown-menu").length && !t.hasClass("hover")) e.preventDefault(), e.stopPropagation(), t.siblings().removeClass("hover"), t.addClass("hover"), $(".menu-row .dropdown-menu").css({
				display: "none",
				opacity: 0
			}), t.hasClass("menu-item") && t.closest(".dropdown-menu").css({
				display: "block",
				opacity: 1
			}), t.find("> .wrap > .dropdown-menu") ? t.find("> .wrap > .dropdown-menu").css({
				display: "block",
				opacity: 1
			}) : t.find("> .dropdown-menu") && t.find("> .dropdown-menu").css({
				display: "block",
				opacity: 1
			}), CheckTopVisibleMenu();
			else {
				var a = $(e.target).attr("href") ? $(e.target).attr("href") : $(e.target).closest("a").attr("href");
				a && "undefined" !== a && (location.href = a)
			}
		})
	}) : $(e).off()
}

function touchTopMenu(e) {
	isMobile ? $(e).length && $(e).each(function () {
		$(this).on("touchend", function (e) {
			var t = $(e.target).closest("li");
			if ($(".menu-item").removeClass("hover"), $(".menu_top_block.catalog_block li").removeClass("hover"), $(".bx-breadcrumb-item.drop").removeClass("hover"), t.hasClass("more") && !t.hasClass("hover")) e.preventDefault(), e.stopPropagation(), t.siblings().removeClass("hover"), t.addClass("hover"), $(".menu.topest").css({
				overflow: "visible"
			});
			else {
				var a = $(e.target).attr("href") ? $(e.target).attr("href") : $(e.target).closest("a").attr("href");
				a && "undefined" !== a && (location.href = a)
			}
		})
	}) : $(e).off()
}

function touchLeftMenu(e) {
	isMobile ? $(e).length && $(e).each(function () {
		$(this).on("touchend", function (e) {
			var t = $(e.target).closest("li");
			if ($(".menu-item").removeClass("hover"), $(".bx-breadcrumb-item.drop").removeClass("hover"), $(".menu.topest > li").removeClass("hover"), t.hasClass("has-child") && !t.hasClass("hover")) e.preventDefault(), e.stopPropagation(), t.siblings().removeClass("hover"), t.addClass("hover");
			else {
				var a = $(e.target).attr("href") ? $(e.target).attr("href") : $(e.target).closest("a").attr("href");
				a && "undefined" !== a && (location.href = a)
			}
		})
	}) : $(e).off()
}

function touchBreadcrumbs(e) {}

function touchItemBlock(e) {}

function touchBasket(e) {
	"N" !== arNextOptions.THEME.SHOW_BASKET_ONADDTOCART && (600 < $(window).outerWidth() ? $(document).find(e).on("touchend", function (e) {
		$(this).parent().find(".basket_popup_wrapp").length && !$(this).hasClass("hover") && (e.preventDefault(), e.stopPropagation(), $(this).addClass("hover"), $(this).parent().find(".basket_popup_wrapp").slideDown())
	}) : $(e).off())
}

function showTotalSummItem(e) {
	if ("ALWAYS" == arNextOptions.THEME.SHOW_TOTAL_SUMM_TYPE && "Y" == arNextOptions.THEME.SHOW_TOTAL_SUMM) {
		var t = "body ";
		"string" == typeof e && "Y" == e && (t = ".popup "), $(t + ".counter_wrapp .counter_block input.text").each(function () {
			var e = $(this);
			if (e.data("product")) {
				var t = e.data("product");
				"object" == typeof window[t] ? window[t].setPriceAction("Y") : setPriceItem(e.closest(".main_item_wrapper"), e.val())
			} else setPriceItem(e.closest(".main_item_wrapper"), e.val())
		})
	}
}

function initFull() {
	initSelects(document), initHoverBlock(document), touchItemBlock(".catalog_item a"), InitOrderCustom(), showTotalSummItem(), basketActions(), orderActions(), checkMobileRegion()
}
$(document).ready(function () {
	if (CheckSearchWidth(), MegaMenuFixed(), CheckPhoneDropdown(), arNextOptions.PAGES.ORDER_PAGE) {
		var e = parseUrlQuery();
		if ("ORDER_ID" in e) {
			var t = e.ORDER_ID;
			if ("N" !== arNextOptions.COUNTERS.USE_FULLORDER_GOALS) {
				var a = {
					goal: "goal_order_success",
					result: t
				};
				BX.onCustomEvent("onCounterGoals", [a])
			}
			if (checkCounters() && "undefined" != typeof localStorage) {
				var i = localStorage.getItem("gtm_e_" + t),
					o = "";
				try {
					o = JSON.parse(i)
				} catch (e) {
					o = i
				}
				"object" == typeof o && (window.dataLayer = window.dataLayer || [], dataLayer.push({
					event: arNextOptions.COUNTERS.GOOGLE_EVENTS.PURCHASE,
					ecommerce: o
				})), "undefined" != typeof localStorage && localStorage.removeItem("gtm_e_" + t)
			}
		}
	}
	var n = !1;
	"object" == typeof jQuery.browser ? n = jQuery.browser.safari : "object" == typeof browser && (n = browser.safari), n ? setTimeout(function () {
		$(window).resize(), setTimeout(function () {
			CheckTopMenuPadding(), CheckTopMenuOncePadding(), CheckTopMenuDotted(), CheckHeaderFixed(), setTimeout(function () {
				$(window).scroll()
			}, 50)
		}, 50)
	}, 350) : (CheckTopMenuPadding(), CheckTopMenuOncePadding(), CheckTopMenuDotted(), CheckHeaderFixed(), setTimeout(function () {
		$(window).resize()
	}, 150), setTimeout(function () {
		$(window).scroll()
	}, 250)), "Y" === arNextOptions.THEME.USE_DEBUG_GOALS ? $.cookie("_ym_debug", 1, {
		path: "/"
	}) : $.cookie("_ym_debug", null, {
		path: "/"
	});
	var s = $("#mobilemenu, #mobileheadersimple");
	if (s.isOpen = !1, s.length) {
		if (s.isOpen = s.hasClass("show"), s.isLeftSide = s.hasClass("leftside"), s.isDowndrop = s.find(">.scroller").hasClass("downdrop"), $(document).on("click", "#mobileheader .burger", function () {
				SwipeMobileMenu()
			}), s.isLeftSide) {
			s.parent().append('<div id="mobilemenu-overlay"></div>');
			var r = $("#mobilemenu-overlay");
			r.click(function () {
				s.isOpen && CloseMobileMenu()
			}), $(document).swiperight(function (e) {
				$(e.target).closest(".flexslider").length || $(e.target).closest(".swipeignore").length || $(e.target).closest("ymaps").length || OpenMobileMenu()
			}), $(document).swipeleft(function (e) {
				$(e.target).closest(".flexslider").length || $(e.target).closest(".swipeignore").length || $(e.target).closest("ymaps").length || CloseMobileMenu()
			})
		} else $(document).on("click", "#mobileheader", function (e) {
			$(e.target).closest("#mobilemenu").length || $(e.target).closest(".burger").length || !s.isOpen || CloseMobileMenu()
		});
		$(document).on("click", "#mobilemenu .menu a,#mobilemenu .social-icons a", function (e) {
			var t = $(this);
			if (t.hasClass("parent")) e.preventDefault(), s.isDowndrop ? t.closest("li").hasClass("expanded") ? t.closest("li").removeClass("expanded") : t.closest("li").addClass("expanded") : (t.closest("li").addClass("expanded"), MoveMobileMenuWrapNext());
			else {
				if (!t.hasClass("city_item")) {
					var a = t.attr("href");
					void 0 !== a && a.length && (e.preventDefault(), window.location.href = a)
				}
				t.closest(".menu_back").length || CloseMobileMenu()
			}
		}), $(document).on("click", "#mobilemenu .dropdown .menu_back", function (e) {
			e.preventDefault();
			var t = $(this);
			MoveMobileMenuWrapPrev(), setTimeout(function () {
				t.closest(".expanded").removeClass("expanded")
			}, 400)
		}), OpenMobileMenu = function () {
			if (CloseMobilePhone(), !s.isOpen && ($(".style-switcher").hasClass("active") && $(".style-switcher .switch").trigger("click"), $(".style-switcher .switch").hide(), s.isLeftSide ? (setTimeout(function () {
					r.fadeIn("fast")
				}, 100), $("body").css({
					"overflow-y": "hidden"
				})) : ($("body").scrollTop(0).css({
					position: "fixed"
				}), s.css({
					top: +($("#mobileheader").height() + $("#mobileheader").offset().top) + "px"
				}), $("#mobileheader .burger").addClass("c")), s.addClass("show"), s.isOpen = !0, !s.isDowndrop)) {
				var e = s.find(".wrap").first(),
					t = e.data("params");
				void 0 === t && (t = {
					depth: 0,
					scroll: {},
					height: {}
				}), e.data("params", t)
			}
		}, CloseMobileMenu = function () {
			s.isOpen && (s.removeClass("show"), s.isOpen = !1, $(".style-switcher .switch").show(), s.isLeftSide ? ($("body").css({
				"overflow-y": "auto"
			}), setTimeout(function () {
				r.fadeOut("fast")
			}, 100)) : ($("#mobileheader .burger").removeClass("c"), $("body").css({
				position: ""
			})), s.isDowndrop || setTimeout(function () {
				var e = s.find(".scroller").first(),
					t = s.find(".wrap").first(),
					a = t.data("params");
				a.depth = 0, t.data("params", a).attr("style", ""), s.scrollTop(0), e.css("height", "")
			}, 400))
		}, SwipeMobileMenu = function () {
			s.isOpen ? CloseMobileMenu() : OpenMobileMenu()
		}, MoveMobileMenuWrapNext = function () {
			if (!s.isDowndrop) {
				var e = s.find(".scroller").first(),
					t = s.find(".wrap").first();
				if (t.length) {
					var a = t.data("params"),
						i = s.find(".expanded>.dropdown").eq(a.depth);
					if (i.length) {
						a.scroll[a.depth] = parseInt(s.scrollTop()), a.height[a.depth + 1] = Math.max(i.height(), a.depth ? s.find(".expanded>.dropdown").eq(a.depth - 1).height() : t.height()), e.css("height", a.height[a.depth + 1] + "px"), ++a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)"), setTimeout(function () {
							s.animate({
								scrollTop: 0
							}, 200)
						}, 100);
						var o = i.height();
						setTimeout(function () {
							o ? e.css("height", o + "px") : e.css("height", "")
						}, 200)
					}
					t.data("params", a)
				}
			}
		}, MoveMobileMenuWrapPrev = function () {
			if (!s.isDowndrop) {
				var e = s.find(".scroller").first(),
					t = s.find(".wrap").first();
				if (t.length) {
					var a = t.data("params");
					if (0 < a.depth)
						if (s.find(".expanded>.dropdown").eq(a.depth - 1).length) {
							e.css("height", a.height[a.depth] + "px"), --a.depth, t.css("transform", "translateX(" + -100 * a.depth + "%)"), setTimeout(function () {
								s.animate({
									scrollTop: a.scroll[a.depth]
								}, 200)
							}, 100);
							var i = !!a.depth && s.find(".expanded>.dropdown").eq(a.depth - 1).height();
							setTimeout(function () {
								i ? e.css("height", i + "px") : e.css("height", "")
							}, 200)
						} t.data("params", a)
				}
			}
		}
	}
	var l = $("#mobileheader, #mobileheadersimple"),
		c = $("#mobilePhone");
	c.isOpen = !1, c.length && (c.isOpen = c.hasClass("show"), $(document).on("click", ".wrap_phones .svg-inline-phone", function (e) {
		SwipeMobilePhone(), e.stopPropagation()
	}), $(document).on("click", ".wrap_phones .svg-inline-close", function (e) {
		CloseMobilePhone(), e.stopPropagation()
	})), SwipeMobilePhone = function () {
		c.isOpen ? CloseMobilePhone() : OpenMobilePhone()
	}, OpenMobilePhone = function () {
		c.isOpen || (CloseMobileMenu(), $('<div class="jqmOverlay mobp" style="top:' + (l.position().top + l.height()) + 'px;"></div>').appendTo("body"), setTimeout(function () {
			c.slideDown("fast", function () {
				c.addClass("show"), c.isOpen = !0
			})
		}, 100))
	}, CloseMobilePhone = function () {
		c.isOpen && setTimeout(function () {
			c.slideUp("fast", function () {
				c.removeClass("show"), c.isOpen = !1, $(".jqmOverlay.mobp").remove()
			})
		}, 100)
	}, checkMobilePhone = function () {
		window.matchMedia("(max-width: 991px)").matches || CloseMobilePhone()
	};
	var d = $("#mobilefilter");
	if (d.length) {
		d.isOpen = s.hasClass("show"), d.isAppendLeft = !1, d.isWrapFilter = !1, d.isHorizontalOrCompact = $(".filter_horizontal").length || $(".bx_filter_vertical.compact").length, d.close = '<i class="svg svg-close close-icons"></i>', $(document).on("click", ".filter_opener", function () {
			OpenMobileFilter()
		}), $(document).on("click", "#mobilefilter .svg-close.close-icons", function () {
			CloseMobileFilter()
		}), $(document).on("click", ".bx_filter_select_block", function (e) {
			var t = $(e.target).parents(".bx_filter_select_container");
			if (t.length) {
				var a = t.closest(".bx_filter_parameters_box").attr("data-property_id");
				$("#smartFilterDropDown" + a).length && $("#smartFilterDropDown" + a).css({
					"max-width": t.width(),
					"z-index": "3020"
				})
			}
		}), $(document).on("mouseup", ".bx_filter_section", function (e) {
			$(e.target).hasClass("bx_filter_search_button") && CloseMobileFilter()
		}), $(document).on("mouseup", ".bx_filter_parameters_box_title", function (e) {
			$("[id^='smartFilterDropDown']").hide(), $(e.target).hasClass("close-icons") && CloseMobileFilter()
		}), d.parent().append('<div id="mobilefilter-overlay"></div>');
		var p = $("#mobilefilter-overlay");
		p.click(function () {
			d.isOpen && CloseMobileFilter()
		}), mobileFilterNum = function (e, t) {
			if (t) $(".bx_filter_search_button").val(e.data("f"));
			else {
				var a = "",
					i = $(".bx_filter_parameters_box > span");
				a += i.data("f") + " " + e + " " + declOfNumFilter(e, [i.data("fi"), i.data("fr"), i.data("frm")]), $(".bx_filter_search_button").val(a)
			}
		}, declOfNumFilter = function (e, t) {
			return cases = [2, 0, 1, 1, 1, 2], t[4 < e % 100 && e % 100 < 20 ? 2 : cases[e % 10 < 5 ? e % 10 : 5]]
		}, OpenMobileFilter = function () {
			d.isOpen || (d.isAppendLeft || (d.isWrapFilter || ($(".bx_filter").wrap("<div id='wrapInlineFilter'></div>"), d.isWrapFilter = !0), $(".bx_filter").appendTo($("#mobilefilter")).find(".title .bx_filter_parameters_box_title").append(d.close), d.isAppendLeft = !0), setTimeout(function () {
				p.fadeIn("fast")
			}, 100), $("body").css({
				"overflow-y": "hidden"
			}), d.addClass("show"), d.find(".bx_filter").css({
				display: "block"
			}), d.isOpen = !0, void 0 === d.data("init") && (d.scroll(function () {
				$(".bx_filter_section .bx_filter_select_container").each(function () {
					var e = $(this).closest(".bx_filter_parameters_box").attr("data-property_id");
					$("#smartFilterDropDown" + e).length && $("#smartFilterDropDown" + e).hide()
				})
			}), d.data("init", "Y")))
		}, CloseMobileFilter = function (e) {
			d.isOpen && (d.find(".bx_filter_parameters").scrollTop(0), $("body").css({
				"overflow-y": "auto"
			}), setTimeout(function () {
				p.fadeOut("fast")
			}, 100), d.removeClass("show"), d.isOpen = !1), e && d.isAppendLeft && ($(".bx_filter").appendTo($("#wrapInlineFilter")).show().find(".svg-close").remove(), d.isAppendLeft = !1, d.removeData("init"), mobileFilterNum($("#modef_num_mobile"), !0))
		}, checkMobileFilter = function () {
			(!window.matchMedia("(max-width: 991px)").matches && !d.isHorizontalOrCompact || !window.matchMedia("(max-width: 767px)").matches && d.isHorizontalOrCompact) && CloseMobileFilter(!0)
		}
	} else checkTopFilter(), $(document).on("click", ".filter_opener", function () {
		$(this).toggleClass("opened"), $(".visible_mobile_filter").length ? $(".visible_mobile_filter").show() : $(".bx_filter_vertical").closest("div[id^=bx_incl]").show(), $(".bx_filter_vertical, .bx_filter").slideToggle(333)
	});
	$("#headerfixed .js-nav").length && (2 == arNextOptions.THEME.HEADER_FIXED && CheckHeaderFixedMenu(), setTimeout(function () {
		$("#headerfixed .js-nav").addClass("opacity1")
	}, 350)), $(".instagram_ajax").length ? BX.addCustomEvent("onCompleteAction", function (e) {
		"instagrammLoaded" === e.action && scrollPreviewBlock()
	}) : scrollPreviewBlock(), scrollToTop(), $.extend($.validator.messages, {
		required: BX.message("JS_REQUIRED"),
		email: BX.message("JS_FORMAT"),
		equalTo: BX.message("JS_PASSWORD_COPY"),
		minlength: BX.message("JS_PASSWORD_LENGTH"),
		remote: BX.message("JS_ERROR")
	}), $.validator.addMethod("regexp", function (e, t, a) {
		var i = new RegExp(a);
		return this.optional(t) || i.test(e)
	}, BX.message("JS_FORMAT")), $.validator.addMethod("filesize", function (e, t, a) {
		return this.optional(t) || t.files[0].size <= a
	}, BX.message("JS_FILE_SIZE")), $.validator.addMethod("date", function (e, t, a) {
		var i, o, n = !1;
		!e || e.length <= 0 ? n = !1 : (i = new RegExp("^([0-9]{4})(.)([0-9]{2})(.)([0-9]{2})$").exec(e)) ? n = (o = new Date(i[1], i[3] - 1, i[5])).getMonth() == i[3] - 1 && o.getDate() == i[5] && o.getFullYear() == i[1] : (i = new RegExp("^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$").exec(e)) && (n = (o = new Date(i[5], i[3] - 1, i[1])).getMonth() == i[3] - 1 && o.getDate() == i[1] && o.getFullYear() == i[5]);
		return n
	}, BX.message("JS_DATE")), $.validator.addMethod("extension", function (e, t, a) {
		return a = "string" == typeof a ? a.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp(".(" + a + ")$", "i"))
	}, BX.message("JS_FILE_EXT")), $.validator.addMethod("captcha", function (e, t, a) {
		return $.validator.methods.remote.call(this, e, t, {
			url: arNextOptions.SITE_DIR + "ajax/check-captcha.php",
			type: "post",
			data: {
				captcha_word: e,
				captcha_sid: function () {
					return $(t).closest("form").find('input[name="captcha_sid"]').val()
				}
			}
		})
	}, BX.message("JS_ERROR")), $.validator.addMethod("recaptcha", function (e, t, a) {
		var i = $(t).closest("form").find(".g-recaptcha").attr("data-widgetid");
		return void 0 === i || "" != grecaptcha.getResponse(i)
	}, BX.message("JS_RECAPTCHA_ERROR")), $.validator.addClassRules({
		phone: {
			regexp: arNextOptions.THEME.VALIDATE_PHONE_MASK
		},
		confirm_password: {
			equalTo: 'input[name="REGISTER[PASSWORD]"]',
			minlength: 6
		},
		password: {
			minlength: 6
		},
		inputfile: {
			extension: arNextOptions.THEME.VALIDATE_FILE_EXT,
			filesize: 5e6
		},
		captcha: {
			captcha: ""
		},
		recaptcha: {
			recaptcha: ""
		}
	}), arNextOptions.THEME.PHONE_MASK && $("input.phone").inputmask("mask", {
		mask: arNextOptions.THEME.PHONE_MASK
	}), initCalculatePreview(), $("select.region").on("change", function () {
		var e = parseInt($(this).val());
		$("select.city").length && (e ? ($("select.city option").hide(), $("select.city option").prop("disabled", "disabled"), $("select.city option[data-parent_section=" + e + "]").prop("disabled", ""), $("select.city option:eq(0)").prop("disabled", ""), $("select.city").ikSelect("reset"), $("select.city option[data-parent_section=" + e + "]").show()) : $("select.city option").prop("disabled", "disabled"), $("select.city option:eq(0)").prop("disabled", ""), $("select.city").ikSelect("reset"))
	}), $("select.city, select.region").on("change", function () {
		var e = $(this),
			t = parseInt(e.val());
		e.hasClass("region") && ($("select.city option:eq(0)").show(), $("select.city").val(0)), (e.hasClass("region") && !t || e.hasClass("city")) && $.ajax({
			type: "POST",
			data: {
				ID: t
			}
		}).success(function (e) {
			var t = BX.processHTML(e);
			$(".ajax_items")[0].innerHTML = t.HTML, BX.ajax.processScripts(t.SCRIPT)
		})
	}), $(document).on("click", ".mobile_regions .city_item", function (e) {
		e.preventDefault();
		var t = $(this);
		$.removeCookie("current_region"), $.cookie("current_region", t.data("id"), {
			path: "/",
			domain: arNextOptions.SITE_ADDRESS
		}), location.href = t.attr("href")
	});
	$("section.toggle > label").prepend($("<i />").addClass("fa fa-plus")), $("section.toggle > label").prepend($("<i />").addClass("fa fa-minus")), $("section.toggle.active > p").addClass("preview-active"), $("section.toggle.active > div.toggle-content").slideDown(350, function () {}), $("section.toggle > label").click(function (e) {
		var t = $(this).parent(),
			a = $(this).parents("div.toogle"),
			i = !1;
		if (a.hasClass("toogle-accordion") && void 0 !== e.originalEvent && a.find("section.toggle.active > label").trigger("click"), t.toggleClass("active"), t.find("> p").get(0)) {
			var o = (i = t.find("> p")).css("height");
			i.css("height", "auto");
			var n = i.css("height");
			i.css("height", o)
		}
		var s = t.find("> div.toggle-content");
		t.hasClass("active") ? ($(i).animate({
			height: n
		}, 350, function () {
			$(this).addClass("preview-active")
		}), s.slideDown(350, function () {})) : ($(i).animate({
			height: 25
		}, 350, function () {
			$(this).removeClass("preview-active")
		}), s.slideUp(350, function () {}))
	}), $(".tables-responsive .responsive").footable(), $("a[rel=tooltip]").tooltip(), $("span[data-toggle=tooltip]").tooltip(), $(".toggle .more_items").on("click", function () {
		$(this).closest(".toggle").find(".collapsed").fadeToggle(), $(this).remove(), void 0 !== $(this).data("resize") && $(this).data("resize") && $(window).resize()
	}), $(".toggle_menu .more_items").on("click", function () {
		$(this).closest(".toggle_menu").find(".collapsed").addClass("clicked_exp"), $(this).remove()
	}), $(document).on("keyup", ".search-input-div input", function (e) {
		var t = $(this).val();
		$(".search-input-div input:not(:focus").val(t), $(this).closest("#headerfixed").length && 13 == e.keyCode && $(".search form").submit()
	}), $(document).on("keyup", function (e) {
		27 == e.keyCode && ($(".jqmWindow").length ? $(".jqmWindow").jqmHide() : $(".inline-search-block.fixed").hasClass("show") ? ($(".inline-search-block .close-block").click(), setTimeout(function () {
			$(".title-search-result").hide()
		}, 0)) : $(".mega_fixed_menu").is(":visible") && $(".mega_fixed_menu .svg-inline-close").click())
	}), $(document).on("click", ".search-button-div button", function (e) {
		$(this).closest("#headerfixed").length && $(".search form").submit()
	}), $(".inline-search-show, .inline-search-hide").on("click", function (e) {
		if (CloseMobilePhone(), void 0 !== $(this).data("type_search") && "fixed" == $(this).data("type_search") && $(".inline-search-block").addClass("fixed"), "fixed" == arNextOptions.THEME.TYPE_SEARCH && $(".inline-search-block.fixed.big .search-input").focus(), "fixed" != arNextOptions.THEME.TYPE_SEARCH) {
			var t = 0;
			$("header.long").length ? t = $("header.long").closest("#header").actual("outerHeight") : (t = $(this).closest(".maxwidth-theme").actual("outerHeight"), $(this).closest(".top-block").length ? t = $(this).closest(".top-block").actual("outerHeight") : $(this).closest("header.header-v8").length && (t = $(this).closest("header.header-v8").actual("outerHeight"))), $("#bx-panel").length && (t += $("#bx-panel").actual("outerHeight")), $(".inline-search-block").css({
				height: t,
				"line-height": t - 4 + "px"
			})
		}
		$(".inline-search-block").toggleClass("show"), $(".top-block").length && ($(".inline-search-block").hasClass("show") ? $(".inline-search-block").css("background", $(".top-block").css("background-color")) : ($(".inline-search-block").css("background", "#fff"), $("#title-search-input").blur(), $(".jqmOverlay").detach())), "fixed" === arNextOptions.THEME.TYPE_SEARCH && ($(".inline-search-block").hasClass("show") ? $('<div class="jqmOverlay search"></div>').appendTo("body") : $(".jqmOverlay").remove())
	}), $("html, body").on("mousedown", function (e) {
		if ("string" == typeof e.target.className && e.target.className.indexOf("adm") < 0) {
			e.stopPropagation();
			var t = $(e.target).closest(".bx_searche");
			$(e.target).hasClass("inline-search-block") || $(e.target).hasClass("svg") || t.length || ($(".inline-search-block").removeClass("show"), $(".title-search-result").hide(), "fixed" === arNextOptions.THEME.TYPE_SEARCH && $(".jqmOverlay.search").remove()), c.length && CloseMobilePhone(), $("#basket_line .basket_fly").length && 0 <= parseInt($("#basket_line .basket_fly").css("right")) && ($(e.target).closest(".basket_wrapp").length || $("#basket_line .basket_fly").stop().animate({
				right: -$("#basket_line .basket_fly").outerWidth()
			}, 150)), isMobile && t.length && (location.href = t.attr("href"));
			var a = $(e.target).attr("class");
			(void 0 === a || a.indexOf("tooltip") < 0) && $(".tooltip-link").tooltip("hide")
		}
	}), $(".inline-search-block").find("*").on("mousedown", function (e) {
		e.stopPropagation()
	}), jQuery.browser.mobile ? ($(document).on("click", '*[data-event="jqm"]', function (e) {
		e.preventDefault(), e.stopPropagation();
		var n = $(this),
			t = n.data("name");
		if (window.matchMedia("(min-width:992px)").matches) return $(this).hasClass("clicked") || ($(this).addClass("clicked"), $(this).jqmEx(), $(this).trigger("click")), !1;
		if (t.length) {
			var a = arNextOptions.SITE_DIR + "form/",
				s = "",
				r = {};
			$.each(n.get(0).attributes, function (e, t) {
				var a = t.nodeName,
					i = n.attr(a);
				if (r[a] = i, /^data\-param\-(.+)$/.test(a)) {
					var o = a.match(/^data\-param\-(.+)$/)[1];
					s += o + "=" + i + "&"
				}
			});
			var i = JSON.stringify(r),
				o = encodeURIComponent(i);
			a += "?name=" + t + "&" + s + "data-trigger=" + o, location.href = a
		}
	}), 
	$(".fancybox").removeClass("fancybox")) : $(document).on("click", '*[data-event="jqm"]', function (e) {
		return e.preventDefault(), e.stopPropagation(), $(this).hasClass("clicked") || ($(this).addClass("clicked"), $(this).jqmEx(), $(this).trigger("click")), !1
	}), 
	// // $(".animate-load").on("click", function () {
	// 	jQuery.browser.mobile || $(this).parent().addClass("loadings")
	// }), 
	BX.addCustomEvent("onCompleteAction", function (e, t) {
		try {
			if ("loadForm" === e.action) $(t).parent().removeClass("loadings"), $(t).removeClass("clicked"), $(t).hasClass("one_click_buy_trigger") ? $(".one_click").removeClass("clicked") : $(t).hasClass("one_click_buy_basket_trigger") && $(".fast_order").removeClass("clicked");
			else if ("loadBasket" === e.action) $(".basket-link.basket").attr("title", arBasketPrices.BASKET_SUMM_TITLE), $(".basket-link.delay").attr("title", arBasketPrices.DELAY_SUMM_TITLE), 0 < arBasketPrices.BASKET_COUNT ? ($(".basket-link.basket").addClass("basket-count"), $(".basket-link.basket .count").removeClass("empted"), $(".basket-link.basket .prices").length && $(".basket-link.basket .prices").html(arBasketPrices.BASKET_SUMM)) : ($(".basket-link.basket").removeClass("basket-count"), $(".basket-link.basket .count").addClass("empted"), $(".basket-link.basket .prices").length && $(".basket-link.basket .prices").html(arBasketPrices.BASKET_SUMM_TITLE_SMALL)), $(".basket-link.basket .count").text(arBasketPrices.BASKET_COUNT), 0 < arBasketPrices.DELAY_COUNT ? ($(".basket-link.delay").addClass("basket-count"), $(".basket-link.delay .count").removeClass("empted")) : ($(".basket-link.delay").removeClass("basket-count"), $(".basket-link.delay .count").addClass("empted")), $(".basket-link.delay .count").text(arBasketPrices.DELAY_COUNT);
			else if ("loadActualBasketCompare" === e.action) {
				var a = Object.keys(arBasketAspro.COMPARE).length;
				0 < a ? ($(".basket-link.compare").addClass("basket-count"), $(".basket-link.compare .count").removeClass("empted"), $("#compare_fly").length && $("#compare_fly").removeClass("empty_block")) : ($(".basket-link.compare").removeClass("basket-count"), $(".basket-link.compare .count").addClass("empted"), $("#compare_fly").length && $("#compare_fly").addClass("empty_block")), $(".basket-link.compare .count").text(a)
			} else "instagrammLoaded" === e.action ? $(".instagram .scroll-title").mCustomScrollbar({
				mouseWheel: {
					scrollAmount: 150,
					preventDefault: !0
				}
			}) : e.action
		} catch (e) {
			console.error(e)
		}
	}), $(".banners-small .item.normal-block").length && $(".banners-small .item.normal-block").sliceHeight(), $(".teasers .item").length && $(".teasers .item").sliceHeight(), $(".wrap-portfolio-front .row.items > div").length && $(".wrap-portfolio-front .row.items > div").sliceHeight({
		row: ".row.items",
		item: ".item1"
	}), $("img").removeAttr("draggable"), clicked_tab = 0, $(".title-tab-heading").on("click", function () {
		var e = $(this).parent(),
			t = $(this).next(),
			a = e.hasClass("media_review");
		if (clicked_tab = e.index() + 1, e.siblings().removeClass("active"), $(".nav.nav-tabs li").removeClass("active"), e.hasClass("active")) a ? $("#reviews_content").slideUp(200, function () {
			e.removeClass("active")
		}) : t.slideUp(200, function () {
			e.removeClass("active")
		});
		else if (e.addClass("active"), a) $("#reviews_content").slideDown();
		else if ($(".tabs_section + #reviews_content").length && $(".tabs_section + #reviews_content").slideUp(), t.slideDown(), void 0 !== e.attr("id") && "descr" == e.attr("id")) {
			var i = $(".galerys-block");
			if (i.length) {
				var o = i.find(".big_slider").length ? i.find(".big_slider") : i.find(".small_slider");
				InitFlexSlider();
				var n = setInterval(function () {
					-1 === o.find(".slides .item").attr("style").indexOf("height") ? $(window).resize() : clearInterval(n)
				}, 100)
			}
		}
	}), InitFlexSlider(), setTimeout(function () {
		InitTopestMenuGummi(), isOnceInited = !0
	}, 50), InitZoomPict(), $(document).on("click", ".captcha_reload", function (e) {
		var t = $(this).parents(".captcha-row");
		e.preventDefault(), $.ajax({
			url: arNextOptions.SITE_DIR + "ajax/captcha.php"
		}).done(function (e) {
			t.find("input[name=captcha_sid]").val(e), t.find("img").attr("src", "/bitrix/tools/captcha.php?captcha_sid=" + e), t.find("input[name=captcha_word]").val("").removeClass("error"), t.find(".captcha_input").removeClass("error").find(".error").remove()
		})
	}), arNextOptions.PAGES.BASKET_PAGE ? "Y" == arNextOptions.THEME.SHOW_BASKET_PRINT && $(".page-top h1").length && $('<div class="print-link" title="' + arNextOptions.THEME.EXPRESSION_FOR_PRINT_PAGE + '"><i class="svg svg-print"></i></div>').insertBefore($(".page-top h1")) : "Y" == arNextOptions.THEME.PRINT_BUTTON && setTimeout(function () {
		$(".page-top .rss-block.top").length ? $('<div class="print-link" title="' + arNextOptions.THEME.EXPRESSION_FOR_PRINT_PAGE + '"><i class="svg svg-print"></i></div>').insertBefore($(".page-top .rss-block.top .share_wrapp")) : $(".page-top .rss").length ? $('<div class="print-link" title="' + arNextOptions.THEME.EXPRESSION_FOR_PRINT_PAGE + '"><i class="svg svg-print"></i></div>').insertAfter($(".page-top .rss")) : $(".page-top h1").length && $('<div class="print-link" title="' + arNextOptions.THEME.EXPRESSION_FOR_PRINT_PAGE + '"><i class="svg svg-print"></i></div>').insertBefore($(".page-top h1"))
	}, 150), $(document).on("click", ".print-link", function () {
		window.print()
	}), $(".head-block .item-link").on("click", function () {
		var e = $(this);
		e.siblings().removeClass("active"), e.addClass("active")
	}), $("table.table").each(function () {
		var e = $(this),
			t = e.find("thead tr th");
		if (t.length || (t = e.find("thead tr td")), t.length) {
			var a = 0;
			e.find("tbody tr td").each(function (e) {
				a > t.length - 1 && (a = 0), $('<div class="th-mobile">' + t[a].textContent + "</div>").appendTo($(this)), a++
			})
		}
	}), window.matchMedia("(min-width: 768px)").matches && $(".wrapper_middle_menu.wrap_menu").removeClass("mobile"), window.matchMedia("(max-width: 767px)").matches && $(".wrapper_middle_menu.wrap_menu").addClass("mobile"), $(".menu_top_block .v_bottom > a").on("click", function (e) {
		$(e.target).hasClass("toggle_block") && e.preventDefault()
	}), $(".menu_top_block .v_bottom > a .toggle_block").on("click", function (e) {
		$(this).closest(".v_bottom").toggleClass("opened"), $(this).closest(".v_bottom").find(">.dropdown").slideToggle()
	}), $(document).on("click", ".show_props", function () {
		$(this).prev(".props_list_wrapp").stop().slideToggle(333), $(this).find(".char_title").toggleClass("opened")
	}), $(".see_more").on("click", function (e) {
		e.preventDefault();
		var t = $(this).is(".see_more") ? $(this) : $(this).parents(".see_more").first(),
			a = t.find("> a").length ? t.find("> a") : t,
			i = t.parent().find("> .d");
		return t.hasClass("open") ? (a.text(BX.message("CATALOG_VIEW_MORE")), t.removeClass("open"), i.hide()) : (a.text(BX.message("CATALOG_VIEW_LESS")), t.addClass("open"), i.show()), !1
	}), $(".button.faq_button").click(function (e) {
		e.preventDefault(), $(this).toggleClass("opened"), $(".faq_ask .form").slideToggle()
	}), $(".staff.list .staff_section .staff_section_title a").click(function (e) {
		e.preventDefault(), $(this).parents(".staff_section").toggleClass("opened"), $(this).parents(".staff_section").find(".staff_section_items").stop().slideToggle(600), $(this).parents(".staff_section_title").find(".opener_icon").toggleClass("opened")
	}), $(".jobs_wrapp .item .name").click(function (e) {
		$(this).closest(".item").toggleClass("opened"), $(this).closest(".item").find(".description_wrapp").stop().slideToggle(600), $(this).closest(".item").find(".opener_icon").toggleClass("opened")
	}), $(".faq.list .item .q a").on("click", function (e) {
		e.preventDefault(), $(this).parents(".item").toggleClass("opened"), $(this).parents(".item").find(".a").stop().slideToggle(), $(this).parents(".item").find(".q .opener_icon").toggleClass("opened")
	}), $(".opener_icon").click(function (e) {
		e.preventDefault(), $(this).parent().find("a").trigger("click")
	}), $(".dotdot").dotdotdot(), $(".more_block span").on("click", function () {
		var e = $(".catalog_detail .tabs_section").offset();
		$("html, body").animate({
			scrollTop: e.top - 43
		}, 400)
	}), $(document).on("click", ".counter_block:not(.basket) .plus", function () {
		if (!$(this).parents(".basket_wrapp").length && "Y" != $(this).parent().data("offers")) {
			var e = $(this).parents(".counter_block_wr").length;
			input = $(this).parents(".counter_block").find("input[type=text]"), tmp_ratio = e ? $(this).parents("tr").first().find("td.buy .to-cart").data("ratio") : $(this).parents(".counter_wrapp").find(".to-cart").data("ratio"), isDblQuantity = e ? $(this).parents("tr").first().find("td.buy .to-cart").data("float_ratio") : $(this).parents(".counter_wrapp").find(".to-cart").data("float_ratio"), ratio = isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10), max_value = "", currentValue = input.val(), isDblQuantity && (ratio = Math.round(ratio * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor), curValue = isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10), curValue += ratio, isDblQuantity && (curValue = Math.round(curValue * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor), 0 < parseFloat($(this).data("max")) ? input.val() < $(this).data("max") && (curValue <= $(this).data("max") && input.val(curValue), input.change()) : (input.val(curValue), input.change())
		}
	}), $(document).on("click", ".counter_block:not(.basket) .minus", function () {
		if (!$(this).parents(".basket_wrapp").length && "Y" != $(this).parent().data("offers")) {
			var e = $(this).parents(".counter_block_wr").length;
			input = $(this).parents(".counter_block").find("input[type=text]"), tmp_ratio = e ? $(this).parents("tr").first().find("td.buy .to-cart").data("ratio") : $(this).parents(".counter_wrapp").find(".to-cart").data("ratio"), isDblQuantity = e ? $(this).parents("tr").first().find("td.buy .to-cart").data("float_ratio") : $(this).parents(".counter_wrapp").find(".to-cart").data("float_ratio"), ratio = isDblQuantity ? parseFloat(tmp_ratio) : parseInt(tmp_ratio, 10), max_value = "", currentValue = input.val(), isDblQuantity && (ratio = Math.round(ratio * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor), curValue = isDblQuantity ? parseFloat(currentValue) : parseInt(currentValue, 10), curValue -= ratio, isDblQuantity && (curValue = Math.round(curValue * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor), 0 < parseFloat($(this).parents(".counter_block").find(".plus").data("max")) ? currentValue > ratio && (curValue < ratio ? input.val(ratio) : input.val(curValue), input.change()) : (curValue > ratio ? input.val(curValue) : ratio ? input.val(ratio) : 1 < currentValue && input.val(curValue), input.change())
		}
	}), $(".counter_block input[type=text]").numeric({
		allow: "."
	}), $(".counter_block input[type=text]").on("focus", function () {
		$(this).addClass("focus")
	}), $(".counter_block input[type=text]").on("blur", function () {
		$(this).removeClass("focus")
	});
	var u, h = !1;
	$(document).on("change", ".counter_block input[type=text]", function (e) {
		if (!$(this).parents(".basket_wrapp").length) {
			var a = $(this).val(),
				t = $(this).parents(".counter_wrapp").find(".to-cart").data("ratio") ? $(this).parents(".counter_wrapp").find(".to-cart").data("ratio") : $(this).parents("tr").first().find("td.buy .to-cart").data("ratio"),
				i = $(this).parents(".counter_wrapp").find(".to-cart").data("float_ratio") ? $(this).parents(".counter_wrapp").find(".to-cart").data("float_ratio") : $(this).parents("tr").first().find("td.buy .to-cart").data("float_ratio"),
				o = i ? parseFloat(t) : parseInt(t, 10),
				n = a % o;
			i && (o = Math.round(o * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor, Math.round(n * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor == o && (n = 0)), $(this).hasClass("focus") && (intCount = Math.round(Math.round(a * arNextOptions.JS_ITEM_CLICK.precisionFactor / o) / arNextOptions.JS_ITEM_CLICK.precisionFactor) || 1, a = intCount <= 1 ? o : intCount * o, a = Math.round(a * arNextOptions.JS_ITEM_CLICK.precisionFactor) / arNextOptions.JS_ITEM_CLICK.precisionFactor), 0 < parseFloat($(this).parents(".counter_block").find(".plus").data("max")) && a > parseFloat($(this).parents(".counter_block").find(".plus").data("max")) && (a = parseFloat($(this).parents(".counter_block").find(".plus").data("max"))), a < o ? a = o : parseFloat(a) || (a = 1), $(this).parents(".counter_block").parent().parent().find(".to-cart").attr("data-quantity", a), $(this).parents(".counter_block").closest(".buy_block").find(".one_click").attr("data-quantity", a), $(this).val(a);
			var s = $(this).closest(".item").length ? $(this).closest(".item").find(".calculate-delivery") : $(this).closest(".catalog_detail").find(".calculate-delivery");
			s.length && s.each(function () {
				var e = $(this).find("span[data-event=jqm]").first();
				if (e.length) {
					var t = e.clone();
					t.attr("data-param-quantity", a).removeClass("clicked"), t.insertAfter(e).on("click", function () {
						jQuery.browser.mobile || $(this).parent().addClass("loadings")
					}), e.remove()
				}
				$(this).hasClass("with_preview") && ($(this).removeClass("inited"), h && clearTimeout(h), h = setTimeout(function () {
					initCalculatePreview(), h = !1
				}, 1e3))
			});
			var r = {
				type: "change",
				params: {
					id: $(this),
					value: a
				}
			};
			BX.onCustomEvent("onCounterProductAction", [r])
		}
	}), BX.addCustomEvent("onCounterProductAction", function (e) {
		"object" != typeof e && (e = {
			type: "undefined"
		});
		try {
			if (void 0 !== e.type && !e.params.id.closest(".gifts").length) {
				var t = e.params.id.data("product");
				e.params.id.closest(".has_offer_prop").length && (void 0 === window.obSkuQuantys && (window.obSkuQuantys = {}), window.obSkuQuantys[e.params.id.closest(".offer_buy_block").find(".to-cart").data("item")] = e.params.value), "object" == typeof window[t] ? "obOffers" == t ? setPriceAction("", "", "Y") : window[t].setPriceAction("Y") : e.params.id.length && e.params.id.closest(".main_item_wrapper").length && "Y" == arNextOptions.THEME.SHOW_TOTAL_SUMM && setPriceItem(e.params.id.closest(".main_item_wrapper"), e.params.value), BX.onCustomEvent("onCounterProductActionResize")
			}
		} catch (e) {
			console.error(e)
		}
	}), $(document).on("mouseenter", "#basket_line .basket_normal:not(.empty_cart):not(.bcart) .basket_block ", function () {
		$(this).closest(".basket_normal").find(".popup").addClass("block"), $(this).closest(".basket_normal").find(".basket_popup_wrapp").stop(!0, !0).slideDown(150)
	}), $(document).on("mouseleave", "#basket_line .basket_normal .basket_block ", function () {
		var e = $(this);
		$(this).closest(".basket_normal").find(".basket_popup_wrapp").stop(!0, !0).slideUp(150, function () {
			e.closest(".basket_normal").find(".popup").removeClass("block")
		})
	}), $(document).on("click", ".popup_button_basket", function () {
		var t = $(".to-cart[data-item=" + $(this).data("item") + "]"),
			e = t.attr("data-quantity");
		e || ($val = 1);
		var a = t.data("props"),
			i = "",
			o = "",
			n = "N",
			s = {},
			r = t.data("iblockid"),
			l = t.data("offers"),
			c = "",
			d = "",
			p = t.attr("data-item");
		"Y" != l ? l = "N" : d = t.closest(".prices_tab").find(".bx_sku_props input").val(), a && (i = a.split(";")), t.data("part_props") && (o = t.data("part_props")), t.data("add_props") && (n = t.data("add_props")), $(".rid_item").length ? c = $(".rid_item").data("rid") : t.data("rid") && (c = t.data("rid")), (s = fillBasketPropsExt(t, "prop", "bx_ajax_text")).quantity = e, s.add_item = "Y", s.rid = c, s.offers = l, s.iblockID = r, s.part_props = o, s.add_props = n, s.props = JSON.stringify(i), s.item = p, s.basket_props = d, $.ajax({
			type: "POST",
			url: arNextOptions.SITE_DIR + "ajax/item.php",
			data: s,
			dataType: "json",
			success: function (e) {
				$(".basket_error_frame").jqmHide(), "STATUS" in e ? (getActualBasket(s.iblockID), "OK" === e.STATUS ? (t.hide(), t.closest(".counter_wrapp").find(".counter_block").hide(), t.parents("tr").find(".counter_block_wr .counter_block").hide(), t.closest(".button_block").addClass("wide"), t.parent().find(".in-cart").show(), addBasketCounter(p), $(".wish_item[data-item=" + p + "]").removeClass("added"), $(".wish_item[data-item=" + p + "]").find(".value").show(), $(".wish_item[data-item=" + p + "]").find(".value.added").hide(), $("#ajax_basket").length && reloadTopBasket("add", $("#ajax_basket"), 200, 5e3, "Y"), $("#basket_line .basket_fly").length && (t.closest(".fast_view_frame").length || window.matchMedia("(max-width: 767px)").matches ? basketFly("open", "N") : basketFly("open"))) : showBasketError(BX.message(e.MESSAGE))) : showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR"))
			}
		})
	}), 
	// $(document).on("click", ".to-cart:not(.read_more)", function (e) {
	// 	e.preventDefault();
	// 	var t = $(this);
	// 	if (!t.hasClass("clicked")) {
	// 		t.addClass("clicked");
	// 		var a = $(this).attr("data-quantity"),
	// 			i = $(this).data("props"),
	// 			o = "",
	// 			n = "",
	// 			s = "N",
	// 			r = {},
	// 			l = $(this).data("iblockid"),
	// 			c = $(this).data("offers"),
	// 			d = "",
	// 			p = "",
	// 			u = $(this).attr("data-item");
	// 		if (t.closest(".but-cell").length && $('.counter_block[data-item="' + u + '"]').length && (a = $('.counter_block[data-item="' + u + '"] input').val()), a || (a = 1), "Y" != c ? c = "N" : p = $(this).closest(".prices_tab").find(".bx_sku_props input").val(), i && (o = i.split(";")), $(this).data("part_props") && (n = $(this).data("part_props")), $(this).data("add_props") && (s = $(this).data("add_props")), $(".rid_item").length ? d = $(".rid_item").data("rid") : $(this).data("rid") && (d = $(this).data("rid")), (r = fillBasketPropsExt(t, "prop", t.data("bakset_div"))).quantity = a, r.add_item = "Y", r.rid = d, r.offers = c, r.iblockID = l, r.part_props = n, r.add_props = s, r.props = JSON.stringify(o), r.item = u, r.basket_props = p, "N" == t.data("empty_props")) {
	// 			showBasketError($("#" + t.data("bakset_div")).html(), BX.message("ERROR_BASKET_PROP_TITLE"), "Y", t);
	// 			BX.onCustomEvent("onCompleteAction", [{
	// 				action: "loadForm"
	// 			}, t[0]])
	// 		} else $.ajax({
	// 			type: "POST",
	// 			url: arNextOptions.SITE_DIR + "ajax/item.php",
	// 			data: r,
	// 			dataType: "json",
	// 			success: function (e) {
	// 				getActualBasket(r.iblockID);
	// 				BX.onCustomEvent("onCompleteAction", [{
	// 					action: "loadForm"
	// 				}, t[0]]), arStatusBasketAspro = {}, null !== e ? "STATUS" in e ? (null === e.MESSAGE_EXT && (e.MESSAGE_EXT = ""), "OK" === e.STATUS ? ($(".to-cart[data-item=" + u + "]").hide(), $(".to-cart[data-item=" + u + "]").closest(".counter_wrapp").find(".counter_block").hide(), $(".to-cart[data-item=" + u + "]").parents("tr").find(".counter_block_wr .counter_block").hide(), $(".to-cart[data-item=" + u + "]").closest(".button_block").addClass("wide"), $(".in-cart[data-item=" + u + "]").show(), addBasketCounter(u), $(".wish_item[data-item=" + u + "]").removeClass("added"), $(".wish_item[data-item=" + u + "]").find(".value").show(), $(".wish_item[data-item=" + u + "]").find(".value.added").hide(), $("#ajax_basket").length && reloadTopBasket("add", $("#ajax_basket"), 200, 5e3, "Y"), $("#basket_line .basket_fly").length && (t.closest(".fast_view_frame").length || window.matchMedia("(max-width: 767px)").matches || $("#basket_line .basket_fly.loaded").length ? basketFly("open", "N") : basketFly("open"))) : showBasketError(BX.message(e.MESSAGE) + " <br/>" + e.MESSAGE_EXT)) : showBasketError(BX.message("CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR")) : ($(".to-cart[data-item=" + u + "]").hide(), $(".to-cart[data-item=" + u + "]").closest(".counter_wrapp").find(".counter_block").hide(), $(".to-cart[data-item=" + u + "]").parents("tr").find(".counter_block_wr .counter_block").hide(), $(".to-cart[data-item=" + u + "]").closest(".button_block").addClass("wide"), $(".in-cart[data-item=" + u + "]").show(), addBasketCounter(u), $(".wish_item[data-item=" + u + "]").removeClass("added"), $(".wish_item[data-item=" + u + "]").find(".value").show(), $(".wish_item[data-item=" + u + "]").find(".value.added").hide(), $("#ajax_basket").length && reloadTopBasket("add", $("#ajax_basket"), 200, 5e3, "Y"), $("#basket_line .basket_fly").length && (t.closest(".fast_view_frame").length || window.matchMedia("(max-width: 767px)").matches || $("#basket_line .basket_fly.loaded").length ? basketFly("open", "N") : basketFly("open")))
	// 			}
	// 		})
	// 	}
	// }), 
	$(document).on("click", ".to-subscribe", function (e) {
		e.preventDefault();
		var t = $(this);
		if (!t.hasClass("clicked"))
			if (t.addClass("clicked"), $(this).is(".auth")) $(this).hasClass("nsubsc") ? ($(this).jqmEx(), $(this).trigger("click")) : location.href = arNextOptions.SITE_DIR + "auth/?backurl=" + location.pathname;
			else {
				var a = $(this).attr("data-item"),
					i = $(this).attr("data-iblockid");
				$(".to-subscribe[data-item=" + a + "]").hide(), $(".to-subscribe[data-item=" + a + "]").parent().find(".in-subscribe").show(), $.get(arNextOptions.SITE_DIR + "ajax/item.php?item=" + a + "&subscribe_item=Y", $.proxy(function (e) {
					arStatusBasketAspro = {}, getActualBasket(i)
				})), t.removeClass("clicked")
			}
	}), $(document).on("click", ".in-subscribe", function (e) {
		e.preventDefault();
		var t = $(this).attr("data-item"),
			a = $(this).attr("data-iblockid");
		$(".in-subscribe[data-item=" + t + "]").hide(), $(".in-subscribe[data-item=" + t + "]").parent().find(".to-subscribe").removeClass("clicked"), $(".in-subscribe[data-item=" + t + "]").parent().find(".to-subscribe").show(), $.get(arNextOptions.SITE_DIR + "ajax/item.php?item=" + t + "&subscribe_item=Y", $.proxy(function (e) {
			getActualBasket(a), arStatusBasketAspro = {}
		}))
	}), 
	// $(document).on("click", ".wish_item", function (e) {
	// 	e.preventDefault();
	// 	var t = $(this).attr("data-quantity"),
	// 		a = $(this),
	// 		i = $(this).data("offers"),
	// 		o = $(this).data("iblock"),
	// 		n = $(this).data("props"),
	// 		s = "",
	// 		r = $(this).attr("data-item");
	// 	item2 = $(this).attr("data-item"), a.hasClass("clicked") || (a.addClass("clicked"), t || ($val = 1), "Y" != i && (i = "N"), n && (s = n.split(";")), $(this).hasClass("text") ? $(this).hasClass("added") ? ($(".wish_item[data-item=" + r + "]").removeClass("added"), $(".wish_item[data-item=" + r + "]").find(".value").show(), $(".wish_item[data-item=" + r + "]").find(".value.added").hide(), $(".like_icons").each(function () {
	// 		$(this).find(".wish_item_button").length && ($(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').removeClass("added"), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value").show(), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value.added").hide())
	// 	})) : ($(".wish_item[data-item=" + r + "]").addClass("added"), $(".wish_item[data-item=" + r + "]").find(".value").hide(), $(".wish_item[data-item=" + r + "]").find(".value.added").css("display", "block"), $(".like_icons").each(function () {
	// 		$(this).find(".wish_item_button").length && ($(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').addClass("added"), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value").hide(), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value.added").show())
	// 	})) : $(this).hasClass("added") ? ($(this).hide(), $(this).closest(".wish_item_button").find(".to").show(), $(".like_icons").each(function () {
	// 		$(this).find('.wish_item.text[data-item="' + r + '"]').length && ($(this).find('.wish_item.text[data-item="' + r + '"]').removeClass("added"), $(this).find('.wish_item.text[data-item="' + r + '"]').find(".value").show(), $(this).find('.wish_item.text[data-item="' + r + '"]').find(".value.added").hide()), $(this).find(".wish_item_button").length && ($(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').removeClass("added"), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value").show(), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value.added").hide())
	// 	})) : ($(this).hide(), $(this).closest(".wish_item_button").find(".in").addClass("added").show(), $(".like_icons").each(function () {
	// 		$(this).find('.wish_item.text[data-item="' + r + '"]').length && ($(this).find('.wish_item.text[data-item="' + r + '"]').addClass("added"), $(this).find('.wish_item.text[data-item="' + r + '"]').find(".value").hide(), $(this).find('.wish_item.text[data-item="' + r + '"]').find(".value.added").css({
	// 			display: "block"
	// 		})), $(this).find(".wish_item_button").length && ($(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').addClass("added"), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value").hide(), $(this).find(".wish_item_button").find('.wish_item[data-item="' + r + '"]').find(".value.added").show())
	// 	})), $(".in-cart[data-item=" + r + "]").hide(), $(".to-cart[data-item=" + r + "]").removeClass("clicked"), $(".to-cart[data-item=" + r + "]").parent().removeClass("wide"), $(".counter_block[data-item=" + r + "]").closest(".counter_wrapp").find(".to-order").length || ($(".to-cart[data-item=" + r + "]").show(), $(".counter_block[data-item=" + r + "]").show()), $(this).closest(".module-cart").size() || $.ajax({
	// 		type: "GET",
	// 		url: arNextOptions.SITE_DIR + "ajax/item.php",
	// 		data: "item=" + item2 + "&quantity=" + t + "&wish_item=Y&offers=" + i + "&iblockID=" + o + "&props=" + JSON.stringify(s),
	// 		dataType: "json",
	// 		success: function (e) {
	// 			if (getActualBasket(o), arStatusBasketAspro = {}, null !== e)
	// 				if (null === e.MESSAGE_EXT && (e.MESSAGE_EXT = ""), "STATUS" in e)
	// 					if ("OK" === e.STATUS) {
	// 						if ("N" !== arNextOptions.COUNTERS.USE_BASKET_GOALS) {
	// 							var t = {
	// 								goal: "goal_wish_add",
	// 								params: {
	// 									id: item2
	// 								}
	// 							};
	// 							BX.onCustomEvent("onCounterGoals", [t])
	// 						}
	// 						$("#ajax_basket").length && reloadTopBasket("wish", $("#ajax_basket"), 200, 5e3, "N"), $("#basket_line .basket_fly").length && (a.closest(".fast_view_frame").length || window.matchMedia("(max-width: 767px)").matches || $("#basket_line .basket_fly.loaded").length ? basketFly("wish", "N") : basketFly("wish"))
	// 					} else showBasketError(BX.message(e.MESSAGE) + " <br/>" + e.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
	// 			else showBasketError(BX.message(e.MESSAGE) + " <br/>" + e.MESSAGE_EXT, BX.message("ERROR_ADD_DELAY_ITEM"));
	// 			else $("#ajax_basket").length && reloadTopBasket("wish", $("#ajax_basket"), 200, 5e3, "N"), $("#basket_line .basket_fly").length && (a.closest(".fast_view_frame").length || window.matchMedia("(max-width: 767px)").matches || $("#basket_line .basket_fly.loaded").length ? basketFly("wish", "N") : basketFly("wish"));
	// 			a.removeClass("clicked")
	// 		}
	// 	}))
	// }), 
$(document).on("click", ".item_main_info .item_slider .flex-direction-nav li span", function (e) {
		$(".inner_slider .slides_block").length && ($(this).parent().hasClass("flex-nav-next") ? $(".inner_slider .slides_block li.current").next().click() : $(".inner_slider .slides_block li.current").prev().click())
	}), $(document).on("click", ".compare_item", function (e) {
		e.preventDefault();
		var t = $(this).attr("data-item"),
			a = $(this).attr("data-iblock"),
			i = $(this);
		i.hasClass("clicked") || (i.addClass("clicked"), $(this).hasClass("text") ? $(this).hasClass("added") ? ($(".compare_item[data-item=" + t + "]").removeClass("added"), $(".compare_item[data-item=" + t + "]").find(".value").show(), $(".compare_item[data-item=" + t + "]").find(".value.added").hide(), $(".like_icons").each(function () {
			$(this).find(".compare_item_button").length && ($(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').removeClass("added"), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value").show(), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value.added").hide())
		})) : ($(".compare_item[data-item=" + t + "]").addClass("added"), $(".compare_item[data-item=" + t + "]").find(".value").hide(), $(".compare_item[data-item=" + t + "]").find(".value.added").css("display", "block"), $(".like_icons").each(function () {
			$(this).find(".compare_item_button").length && ($(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').addClass("added"), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value.added").show(), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value").hide())
		})) : $(this).hasClass("added") ? ($(this).hide(), $(this).closest(".compare_item_button").find(".to").show(), $(".like_icons").each(function () {
			$(this).find('.compare_item.text[data-item="' + t + '"]').length && ($(this).find('.compare_item.text[data-item="' + t + '"]').removeClass("added"), $(this).find('.compare_item.text[data-item="' + t + '"]').find(".value").show(), $(this).find('.compare_item.text[data-item="' + t + '"]').find(".value.added").hide()), $(this).find(".compare_item_button").length && ($(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').removeClass("added"), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value").show(), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value.added").hide())
		})) : ($(this).hide(), $(this).closest(".compare_item_button").find(".in").show(), $(".like_icons").each(function () {
			$(this).find('.compare_item.text[data-item="' + t + '"]').length && ($(this).find('.compare_item.text[data-item="' + t + '"]').addClass("added"), $(this).find('.compare_item.text[data-item="' + t + '"]').find(".value").hide(), $(this).find('.compare_item.text[data-item="' + t + '"]').find(".value.added").css({
				display: "block"
			})), $(this).find(".compare_item_button").length && ($(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').addClass("added"), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value.added").show(), $(this).find(".compare_item_button").find('.compare_item[data-item="' + t + '"]').find(".value").hide())
		})), $.get(arNextOptions.SITE_DIR + "ajax/item.php?item=" + t + "&compare_item=Y&iblock_id=" + a, $.proxy(function (e) {
			getActualBasket(a, "Compare"), arStatusBasketAspro = {}, $("#compare_fly").length && jsAjaxUtil.InsertDataToNode(arNextOptions.SITE_DIR + "ajax/show_compare_preview_fly.php", "compare_fly", !1), i.removeClass("clicked")
		})))
	}), $(".fancy").fancybox({
		openEffect: "fade",
		closeEffect: "fade",
		nextEffect: "fade",
		prevEffect: "fade",
		tpl: {
			closeBtn: '<a title="' + BX.message("FANCY_CLOSE") + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
			next: '<a title="' + BX.message("FANCY_NEXT") + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
			prev: '<a title="' + BX.message("FANCY_PREV") + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		}
	}), $(".fancybox").fancybox(), $(".video_link").fancybox({
		type: "iframe",
		maxWidth: 800,
		maxHeight: 600,
		fitToView: !0,
		autoSize: !0,
		closeClick: !1
	}), $(".tabs>li").on("click", function () {
		var e = $(this).parent();
		if (!$(this).hasClass("active")) {
			var t = $(this).index(),
				a = $(this).closest(".top_blocks").find(".slider_navigation").find(">li:eq(" + t + ")"),
				i = $(this).closest(".top_blocks").siblings(".tabs_content").find(">li:eq(" + t + ")");
			$(this).addClass("active").addClass("cur").siblings().removeClass("active").removeClass("cur"), i.addClass("cur").siblings().removeClass("cur"), a.addClass("cur").siblings().removeClass("cur"), e.hasClass("ajax") && ($(this).hasClass("clicked") || ($.ajax({
				url: arNextOptions.SITE_DIR + "include/mainpage/comp_catalog_ajax.php",
				type: "POST",
				data: {
					AJAX_POST: "Y",
					FILTER_HIT_PROP: $(this).data("code"),
					AJAX_PARAMS: $(this).closest(".tab_slider_wrapp").find(".request-data").data("value"),
					GLOBAL_FILTER: i.data("filter")
				}
			}).success(function (e) {
				i.find(".tabs_slider").html(e), setTimeout(function () {
					i.addClass("opacity1")
				}, 100), i.find(".catalog_block .catalog_item_wrapp .catalog_item .item_info:visible .item-title").sliceHeight({
					item: ".catalog_item:visible",
					mobile: !0
				}), i.find(".catalog_block .catalog_item_wrapp .catalog_item .item_info:visible").sliceHeight({
					item: ".catalog_item:visible",
					mobile: !0
				}), i.find(".catalog_block .catalog_item_wrapp:visible").sliceHeight({
					classNull: ".footer_button",
					item: ".catalog_item:visible",
					mobile: !0
				}), initCountdown()
			}), $(this).addClass("clicked")))
		}
	}), $(".search_block .icon").on("click", function () {
		var e = $(this);
		$(this).hasClass("open") ? ($(this).closest(".center_block").find(".search_middle_block").removeClass("active"), $(this).removeClass("open"), $(this).closest(".center_block").find(".search_middle_block").find(".noborder").hide()) : (setTimeout(function () {
			e.closest(".center_block").find(".search_middle_block").find(".noborder").show()
		}, 100), $(this).closest(".center_block").find(".search_middle_block").addClass("active"), $(this).addClass("open"))
	}), $(document).on("mouseenter", ".display_list .item_wrap", function () {
		$(this).prev().addClass("prev")
	}), $(document).on("mouseleave", ".display_list .item_wrap", function () {
		$(this).prev().removeClass("prev")
	}), $(document).on("click", ".no_goods .button", function () {
		$(".bx_filter .smartfilter .bx_filter_search_reset").trigger("click")
	}), 
	// $(document).on("click", ".ajax_load_btn", function () {
	// 	var e = $(this).closest(".container").find(".module-pagination .flex-direction-nav .flex-next").attr("href"),
	// 		a = $(this).find(".more_text_ajax");
	// 	if (!a.hasClass("loading")) {
	// 		a.addClass("loading");
	// 		var t = parseUrlQuery(),
	// 			i = "";
	// 		obGetData = {
	// 			ajax_get: "Y",
	// 			AJAX_REQUEST: "Y"
	// 		}, "clear_cache" in t && "Y" == t.clear_cache && (i = "&clear_cache=Y"), a.closest(".goods-block.ajax_load") && (obGetData.bitrix_include_areas = "N"), $.ajax({
	// 			url: e + i,
	// 			data: obGetData,
	// 			success: function (e) {
	// 				if ($(".ajax_load").length) {
	// 					a.removeClass("loading"), $(".display_list").length ? $(".display_list").append(e) : $(".block_list").length ? ($(".block_list").append(e), touchItemBlock(".catalog_item a")) : $(".module_products_list").length && $(".module_products_list > tbody").append(e), setStatusButton(), initCountdown();
	// 					var t = {
	// 						action: "ajaxContentLoadedTab"
	// 					};
	// 					BX.onCustomEvent("onAjaxSuccess", [t]), $(".bottom_nav").html($(e).find(".bottom_nav").html())
	// 				} else {
	// 					$(".banners-small.front").length ? ($(".banners-small .items.row").append(e), $(".bottom_nav").html($(".banners-small .items.row .bottom_nav").html()), $(".banners-small .items.row .bottom_nav").remove()) : (a.closest(".item-views").find(".items").length ? a.closest(".item-views").find(".items").append(e) : $(e).insertBefore($(".blog .bottom_nav")), $(".bottom_nav").html($(".bottom_nav:hidden").html()), $(".bottom_nav:hidden").remove());
	// 					t = {
	// 						action: "ajaxContentLoaded",
	// 						content: e
	// 					};
	// 					BX.onCustomEvent("onCompleteAction", [t, a[0]]), setTimeout(function () {
	// 						$(".banners-small .item.normal-block").sliceHeight({
	// 							resize: !1
	// 						}), $(".item.slice-item").length && ($(".item.slice-item .title").sliceHeight({
	// 							resize: !1
	// 						}), $(".item.slice-item").sliceHeight({
	// 							resize: !1
	// 						})), a.removeClass("loading")
	// 					}, 100)
	// 				}
	// 			}
	// 		})
	// 	}
	// }), 
	$(document).on("click", ".bx_ordercart_order_table_container .control > a, .basket-item-actions-remove, a[data-entity=basket-item-remove-delayed]", function (e) {
		$.removeCookie("click_basket", {
			path: "/"
		}), $.cookie("click_basket", "Y", {
			path: "/"
		})
	}), $(document).on("click", ".bx_compare .tabs-head li", function () {
		var t = $(this).find(".sortbutton").data("href");
		BX.showWait(BX("bx_catalog_compare_block")), $.ajax({
			url: t,
			data: {
				ajax_action: "Y"
			},
			success: function (e) {
				history.pushState(null, null, t), $("#bx_catalog_compare_block").html(e), BX.closeWait()
			}
		})
	}), $(document).on({
		mouseover: function (e) {
			var t = $(this),
				a = t.closest("tbody").index() + 1,
				i = t.index() + 1;
			u = $(e.delegateTarget).find(".data_table_props").children(":nth-child(" + a + ")").children(":nth-child(" + i + ")").addClass("hovered")
		},
		mouseleave: function (e) {
			u && u.removeClass("hovered")
		}
	}, ".bx_compare .data_table_props tbody>tr"), $(document).on("click", ".fancy_offer", function (e) {
		e.preventDefault();
		var t = [],
			a = 0;
		$(this).closest(".item_slider").find(".sliders .slides_block li").each(function () {
			var e;
			e = {
				title: $(this).find("img").attr("alt"),
				href: $(this).data("big")
			}, $(this).hasClass("current") && (a = $(this).index()), t.push(e)
		}), $.fancybox(t, {
			index: a,
			openEffect: "fade",
			closeEffect: "fade",
			nextEffect: "fade",
			prevEffect: "fade",
			type: "image",
			tpl: {
				closeBtn: '<a title="' + BX.message("FANCY_CLOSE") + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="' + BX.message("FANCY_NEXT") + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="' + BX.message("FANCY_PREV") + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			}
		})
	}), $(".tabs_section .tabs-head li").on("click", function () {
		$(this).is(".current") || ($(".tabs_section .tabs-head li").removeClass("current"), $(this).addClass("current"), $(".tabs_section ul.tabs_content li").removeClass("current"), "product_reviews_tab" == $(this).attr("id") ? ($(".shadow.common").hide(), $("#reviews_content").show()) : ($(".shadow.common").show(), $("#reviews_content").hide(), $(".tabs_section ul.tabs_content > li:eq(" + $(this).index() + ")").addClass("current")))
	}), setTimeout(function () {
		$(".jobs_wrapp .item:first .name tr").trigger("click")
	}, 300), $(".choise").on("click", function () {
		var e = $(this);
		void 0 !== e.data("block") && scrollToBlock(e.data("block"))
	}), $(document).on("click", ".buy_block .slide_offer", function () {
		scroll_block($(".tabs_section"))
	}), $(".share  > .share_wrapp .text").on("click", function () {
		var e = $(this).parent().find(".shares");
		e.is(":visible") || $(this).closest(".share.top").length || $("#content").css("z-index", 3), e.fadeToggle(100, function () {
			e.is(":visible") || $("#content").css("z-index", 2)
		})
	}), $("html, body").on("mousedown", function (e) {
		"string" == typeof e.target.className && e.target.className.indexOf("adm") < 0 && (e.stopPropagation(), $("div.shares").fadeOut(100, function () {
			$("#content").css("z-index", 2), $(".price_txt .share_wrapp").removeClass("opened")
		}), $(".search_middle_block").removeClass("active_wide"))
	}), $(".share_wrapp").find("*").on("mousedown", function (e) {
		e.stopPropagation()
	}), $(".price_txt .share_wrapp .text").click(function () {
		$(this).parent().toggleClass("opened"), $(this).parent().find(".shares").fadeToggle()
	}), $(document).on("click", ".reviews-collapse-link", function () {
		$(".reviews-reply-form").slideToggle()
	}), $(".panel-collapse").on("hidden.bs.collapse", function () {
		$(this).parent().toggleClass("opened")
	}), $(".panel-collapse").on("show.bs.collapse", function () {
		$(this).parent().toggleClass("opened")
	}), $(".accordion-head").on("click", function (e) {
		e.preventDefault(), $(this).next().hasClass("collapsing") || ($(this).toggleClass("accordion-open"), $(this).toggleClass("accordion-close"))
	}), $("[data-appear-progress-animation]").each(function () {
		var t = $(this);
		t.appear(function () {
			var e = t.attr("data-appear-animation-delay") ? t.attr("data-appear-animation-delay") : 1;
			1 < e && t.css("animation-delay", e + "ms"), t.addClass(t.attr("data-appear-animation")), setTimeout(function () {
				t.animate({
					width: t.attr("data-appear-progress-animation")
				}, 1500, "easeOutQuad", function () {
					t.find(".progress-bar-tooltip").animate({
						opacity: 1
					}, 500, "easeOutQuad")
				})
			}, e)
		}, {
			accX: 0,
			accY: -50
		})
	}), initCountdown(), $(".item.animated-block").length && $(".item.animated-block").appear(function () {
		var e = $(this);
		e.addClass(e.data("animation")).addClass("visible")
	}, {
		accX: 0,
		accY: 150
	}), $(".menu.adaptive").on("click", function () {
		$(this).toggleClass("opened"), $(this).hasClass("opened") ? $(".mobile_menu").toggleClass("opened").slideDown() : $(".mobile_menu").toggleClass("opened").slideUp()
	}), $(".mobile_menu .has-child >a").on("click", function (e) {
		var t = $(this).parent();
		e.preventDefault(), t.toggleClass("opened"), t.find(".dropdown").slideToggle()
	}), $(".mobile_menu .search-input-div input").on("keyup", function (e) {
		var t = $(this).val();
		$(".center_block .stitle_form input").val(t), 13 == e.keyCode && $(".center_block .stitle_form form").submit()
	}), $(".center_block .stitle_form input").on("keyup", function (e) {
		var t = $(this).val();
		$(".mobile_menu .search-input-div input").val(t), 13 == e.keyCode && $(".center_block .stitle_form form").submit()
	}), $(".mobile_menu .search-button-div button").on("click", function (e) {
		e.preventDefault();
		var t = $(this).parents().find("input").val();
		$(".center_block .stitle_form input").val(t), $(".center_block .stitle_form form").submit()
	}), $(document).on("click", ".mega-menu .dropdown-menu", function (e) {
		e.stopPropagation()
	}), $(document).on("click", ".mega-menu .dropdown-toggle.more-items", function (e) {
		e.preventDefault()
	}), $(".table-menu .dropdown,.table-menu .dropdown-submenu,.table-menu .dropdown-toggle").on("mouseenter", function () {
		setTimeout(function () {
			CheckTopVisibleMenu()
		}, 275)
	}), $(document).on("mouseenter", "#headerfixed .table-menu .dropdown-menu .dropdown-submenu", function () {
		setTimeout(function () {
			CheckTopVisibleMenu()
		}, 275)
	}), $(".mega-menu .search-item .search-icon, .menu-row #title-search .fa-close").on("click", function (e) {
		e.preventDefault(), $(".menu-row #title-search").toggleClass("hide")
	}), $(".mega-menu ul.nav .search input").on("keyup", function (e) {
		var t = $(this).val();
		$(".menu-row > .search input").val(t), 13 == e.keyCode && $(".menu-row > .search form").submit()
	}), $(".menu-row > .search input").on("keyup", function (e) {
		var t = $(this).val();
		$(".mega-menu ul.nav .search input").val(t), 13 == e.keyCode && $(".menu-row > .search form").submit()
	}), $(".mega-menu ul.nav .search button").on("click", function (e) {
		e.preventDefault();
		var t = $(this).parents(".search").find("input").val();
		$(".menu-and-search .search input").val(t), $(".menu-row > .search form").submit()
	}), $(".btn.btn-add").on("click", function () {
		$.ajax({
			type: "GET",
			url: arNextOptions.SITE_DIR + "ajax/clearBasket.php",
			success: function (e) {}
		})
	}), $(".sort_display a").on("click", function () {
		$(this).siblings().removeClass("current"), $(this).addClass("current")
	}), $(".sale-order-detail-payment-options-methods-info-change-link").on("click", function () {
		$(this).closest(".sale-order-detail-payment-options-methods-info").addClass("opened").siblings().addClass("opened")
	}), $(document).on("click", ".expand_block", function () {
		togglePropBlock($(this))
	}), $(document).on("click", ".reviews-navigation-box .modern-page-navigation a", function (e) {
		e.preventDefault();
		var t = $(this);
		$.ajax({
			url: t.attr("href"),
			type: "POST",
			data: {
				AJAX: "Y"
			},
			success: function (e) {
				$("#reviews_content").html(e)
			},
			error: function () {
				console.log()
			}
		})
	}), document.addEventListener("touchend", function (e) {
		if ($(e.target).closest(".menu-item").length || $(e.target).hasClass("menu-item") || ($(".menu-row .dropdown-menu").css({
				display: "none",
				opacity: 0
			}), $(".menu-item").removeClass("hover"), $(".bx-breadcrumb-item.drop").removeClass("hover")), $(e.target).closest(".menu.topest").length || ($(".menu.topest").css({
				overflow: "hidden"
			}), $(".menu.topest > li").removeClass("hover")), $(e.target).closest(".full.has-child").length || $(".menu_top_block.catalog_block li").removeClass("hover"), $(e.target).closest(".basket_block").length || ($(".basket_block .link").removeClass("hover"), $(".basket_block .basket_popup_wrapp").slideUp()), !$(e.target).closest(".catalog_item").length) {
			var t = 1 * $(".tab:visible").attr("data-unhover");
			$(".tab:visible").stop().animate({
				height: t
			}, 100), $(".tab:visible").find(".catalog_item").removeClass("hover"), $(".tab:visible").find(".catalog_item .buttons_block").stop().fadeOut(233), $(".catalog_block").length && ($(".catalog_block").find(".catalog_item_wrapp").removeClass("hover"), $(".catalog_block").find(".catalog_item").removeClass("hover"))
		}
	}, !1), touchMenu(".menu-row .menu-item"), touchTopMenu(".menu.topest li"), touchLeftMenu(".menu_top_block li.full"), touchBreadcrumbs(".bx-breadcrumb-item.drop"), $(document).on("keyup", ".coupon .input_coupon input", function () {
		$(this).val().length ? ($(this).removeClass("error"), $(this).closest(".input_coupon").find(".error").remove()) : ($(this).addClass("error"), $("<label class='error'>" + BX.message("INPUT_COUPON") + "</label>").insertBefore($(this)))
	}), showPhoneMask("input[autocomplete=tel]"), BX.addCustomEvent(window, "onAjaxSuccessFilter", function (e) {
		setBasketStatusBtn()
	}), BX.addCustomEvent(window, "onAjaxSuccess", function (e) {
		void 0 !== e && "OK" == e || (void 0 !== e && e && void 0 !== e.FILTER_URL && void 0 !== e.ELEMENT_COUNT && mobileFilterNum(e.ELEMENT_COUNT), initSelects(document), InitOrderCustom(), replaceRegionTags(e), showPhoneMask("input[autocomplete=tel]"), $(".catalog_detail").length && !$(".fast_view_frame").length && ($(".bx_filter").remove(), InitFlexSlider()), arNextOptions.PAGES.CATALOG_PAGE && initCountdown(), arNextOptions.PAGES.ORDER_PAGE && orderActions(e))
	}), BX.addCustomEvent(window, "OnBasketChange", function (e) {
		if (arNextOptions.PAGES.BASKET_PAGE) {
			var t = 0,
				a = "";
			void 0 !== BX.Sale ? void 0 !== BX.Sale.BasketComponent && (t = BX.Sale.BasketComponent.result.allSum, a = BX.message("JS_BASKET_COUNT_TITLE").replace("SUMM", t)) : (t = $("#allSum_FORMATED").html().replace(/&nbsp;/g, " "), a = BX.message("JS_BASKET_COUNT_TITLE").replace("SUMM", t)), $(".js-basket-block .wrap .prices").length && $(".js-basket-block .wrap .prices").html(t), $("a.basket-link.basket").length && $("a.basket-link.basket").attr("title", a), $(".basket_fly .opener .basket_count").length && $(".basket_fly .opener .basket_count").attr("title", a)
		}
	}), BX.addCustomEvent(window, "onFrameDataRequestFail", function (e) {
		console.log(e)
	})
}), funcDefined("setBasketStatusBtn") || (setBasketStatusBtn = function () {
	if ("undefined" != typeof arBasketAspro) {
		if ("BASKET" in arBasketAspro && arBasketAspro.BASKET)
			for (var e in arBasketAspro.BASKET) $(".to-cart[data-item=" + e + "]").hide(), $(".counter_block[data-item=" + e + "]").hide(), $(".in-cart[data-item=" + e + "]").show(), $(".in-cart[data-item=" + e + "]").closest(".button_block").addClass("wide");
		if ("DELAY" in arBasketAspro && arBasketAspro.DELAY)
			for (var e in arBasketAspro.DELAY) $(".wish_item.to[data-item=" + e + "]").hide(), $(".wish_item.in[data-item=" + e + "]").show(), $(".wish_item[data-item=" + e + "]").find(".value.added").length && ($(".wish_item[data-item=" + e + "]").addClass("added"), $(".wish_item[data-item=" + e + "]").find(".value").hide(), $(".wish_item[data-item=" + e + "]").find(".value.added").css("display", "block"));
		if ("SUBSCRIBE" in arBasketAspro && arBasketAspro.SUBSCRIBE)
			for (var e in arBasketAspro.SUBSCRIBE) $(".to-subscribe[data-item=" + e + "]").hide(), $(".in-subscribe[data-item=" + e + "]").show();
		if ("COMPARE" in arBasketAspro && arBasketAspro.COMPARE)
			for (var e in arBasketAspro.COMPARE) $(".compare_item.to[data-item=" + e + "]").hide(), $(".compare_item.in[data-item=" + e + "]").show(), $(".compare_item[data-item=" + e + "]").find(".value.added").length && ($(".compare_item[data-item=" + e + "]").addClass("added"), $(".compare_item[data-item=" + e + "]").find(".value").hide(), $(".compare_item[data-item=" + e + "]").find(".value.added").css("display", "block"))
	}
}), funcDefined("togglePropBlock") || (togglePropBlock = function (e) {
	var t = e.closest(".bx_filter_parameters_box_container").find(".hidden_values");
	t.length && (e.hasClass("inner_text") || e.hasClass("expand_block")) && (t.is(":visible") ? (e.text(BX.message("FILTER_EXPAND_VALUES")), t.hide()) : (e.text(BX.message("FILTER_HIDE_VALUES")), t.show()))
}), funcDefined("showPhoneMask") || (showPhoneMask = function (e) {
	$(e).inputmask("mask", {
		mask: arNextOptions.THEME.PHONE_MASK,
		showMaskOnHover: !1
	})
}), funcDefined("parseUrlQuery") || (parseUrlQuery = function () {
	var e = {};
	if (location.search)
		for (var t = location.search.substr(1).split("&"), a = 0; a < t.length; a++) {
			var i = t[a].split("=");
			e[i[0]] = i[1]
		}
	return e
}), funcDefined("getActualBasket") || (getActualBasket = function (e, a) {
	var t = "";
	void 0 !== e && (t = {
		iblockID: e
	}), $.ajax({
		type: "GET",
		url: arNextOptions.SITE_DIR + "ajax/actualBasket.php",
		data: t,
		success: function (e) {
			if ($(".js_ajax").length || $("body").append('<div class="js_ajax"></div>'), $(".js_ajax").html(e), void 0 !== typeof a) {
				var t = {
					action: "loadActualBasket" + a
				};
				BX.onCustomEvent("onCompleteAction", [t])
			}
		}
	})
}), checkMobileRegion = function () {
	$(".confirm_region").length && ($(".top_mobile_region").length || $('<div class="top_mobile_region"><div class="confirm_wrapper"><div class="confirm_region"></div><div class="close_popup"></div></div></div>').insertBefore($("#mobileheader")), $(".top_mobile_region .confirm_region").html($(".confirm_region").html()), $(".top_mobile_region .close_popup").click(function () {
		$(this).remove(), $(".confirm_region").remove()
	}))
}, funcDefined("orderActions") || (orderActions = function (e) {
	if (arNextOptions.PAGES.ORDER_PAGE) {
		if ($("#bx-soa-order input[autocomplete=tel]").length) {
			for (var t = 0; t < BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties.length; ++t)
				if ("Y" == BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[t].IS_PHONE) var a = BX.Sale.OrderAjaxComponent.result.ORDER_PROP.properties[t];
			if (void 0 !== BX.Sale.OrderAjaxComponent && "object" == typeof BX.Sale.OrderAjaxComponent && "object" == typeof a && a) {
				BX.Sale.OrderAjaxComponent.validatePhone = function (e, t, a) {
					if (!e || !t) return [];
					var i, o, n = e.value,
						s = [],
						r = BX.util.htmlspecialchars(t.NAME),
						l = BX.message("SOA_FIELD") + ' "' + r + '"';
					if ("Y" == t.REQUIRED && 0 == n.length && s.push(l + " " + BX.message("SOA_REQUIRED")), "Y" == t.IS_PHONE && 0 < n.length) {
						(i = $(e).val(), $(e), o = arNextOptions.THEME.VALIDATE_PHONE_MASK.length ? arNextOptions.THEME.VALIDATE_PHONE_MASK : ".*", new RegExp(o).test(i)) || s.push(l + " " + BX.message("JS_FORMAT_ORDER"))
					}
					return s
				}, BX.Sale.OrderAjaxComponent.getValidationDataPhone = function (a, e) {
					var t, i = {};
					switch (a.TYPE) {
						case "STRING":
							if (i.action = "blur", i.func = BX.delegate(function (e, t) {
									return this.validatePhone(e, a, t)
								}, this), t = e.querySelectorAll("input[type=tel]"), $(t).length) {
								i.inputs = t;
								break
							}
					}
					return i
				}, BX.Sale.OrderAjaxComponent.bindValidationPhone = function (e, t) {
					if (this.validation.properties && this.validation.properties[e]) {
						var a, i, o = this.validation.properties[e],
							n = this.getValidationDataPhone(o, t);
						if (n && n.inputs && n.action)
							for (a = 0; a < $(n.inputs).length; a++)
								if (BX.type.isElementNode(n.inputs[a])) BX.bind(n.inputs[a], n.action, BX.delegate(function () {
									this.isValidProperty(n)
								}, this));
								else
									for (i = 0; i < $(n.inputs[a]).length; i++) BX.bind(n.inputs[a][i], n.action, BX.delegate(function () {
										this.isValidProperty(n)
									}, this))
					}
				}, BX.Sale.OrderAjaxComponent.isValidPropertiesBlock = function (e) {
					if (!this.options.propertyValidation) return [];
					var t, a, i, o, n, s = this.orderBlockNode.querySelectorAll(".bx-soa-customer-field[data-property-id-row]"),
						r = [];
					for (n = 0; n < s.length; n++) t = s[n].getAttribute("data-property-id-row"), e && this.locations[t] || (a = s[n].querySelector(".soa-property-container")) && (i = this.validation.properties[t], o = this.getValidationData(i, a), dataPhone = this.getValidationDataPhone(i, a), o = $.extend({}, o, dataPhone), r = r.concat(this.isValidProperty(o, !0)));
					return r
				};
				(d = $("input[autocomplete=tel]"))[0].outerHTML;
				var i = d.val(),
					o = d[0].outerHTML.replace('type="text"', 'type="tel" value="' + i + '"');
				$(d).length < 2 && (d.hide(), $(o).insertAfter(d)), showPhoneMask("input[autocomplete=tel][type=tel]"), $("input[autocomplete=tel][type=tel]").on("blur", function () {
					var e = $(this),
						t = e.val();
					e.parent().find("input[autocomplete=tel][type=text]").val(t)
				}), BX.Sale.OrderAjaxComponent.bindValidationPhone(a.ID, $("input[autocomplete=tel]").parent()[0])
			}
		}
		if ($(".bx-soa-cart-total").length) {
			if ($(".change_basket").length || $(".bx-soa-cart-total").prepend('<div class="change_basket">' + BX.message("BASKET_CHANGE_TITLE") + '<a href="' + arNextOptions.SITE_DIR + 'basket/" class="change_link">' + BX.message("BASKET_CHANGE_LINK") + "</a></div>"), "object" == typeof BX.Sale.OrderAjaxComponent) {
				if ("N" !== arNextOptions.COUNTERS.USE_FULLORDER_GOALS && void 0 === BX.Sale.OrderAjaxComponent.reachgoalbegin) {
					BX.Sale.OrderAjaxComponent.reachgoalbegin = !0;
					BX.onCustomEvent("onCounterGoals", [{
						goal: "goal_order_begin"
					}])
				}
				if (BX.Sale.OrderAjaxComponent.hasOwnProperty("params") && ($(".bx-soa-cart-total .change_link").attr("href", BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET), arNextOptions.PRICES.MIN_PRICE && arNextOptions.PRICES.MIN_PRICE > Number(BX.Sale.OrderAjaxComponent.result.TOTAL.ORDER_PRICE) && ($('<div class="fademask_ext"></div>').appendTo($("body")), location.href = BX.Sale.OrderAjaxComponent.params.PATH_TO_BASKET)), $("#bx-soa-auth").length && !$("#bx-soa-auth .redisigned").length) {
					if ($('input[name="USER_LOGIN"]').length)(n = $('input[name="USER_LOGIN"]').closest(".bx-authform-formgroup-container").find(".bx-authform-label-container")).find(".bx-authform-starrequired").length || n.html(n.html() + '<span class="bx-authform-starrequired"> *</span>');
					if ($('input[name="USER_PASSWORD"]').length)(n = $('input[name="USER_PASSWORD"]').closest(".bx-authform-formgroup-container").find(".bx-authform-label-container")).find(".bx-authform-starrequired").length || n.html(n.html() + '<span class="bx-authform-starrequired"> *</span>');
					if ($('input[name="USER_REMEMBER"]').length) {
						var n = $('input[name="USER_REMEMBER"]').attr("id", "ORDER_AUTH_USER_REMEMBER").closest("label").attr("for", "ORDER_AUTH_USER_REMEMBER"),
							s = $('input[name="USER_REMEMBER"]').attr("id", "ORDER_AUTH_USER_REMEMBER").wrap('<div id="trem_"></div>').parent().html();
						$("#trem_").remove(), n.html(n.text()), $(s).insertBefore(n).closest(".bx-authform-formgroup-container").addClass("filter");
						s = $("#bx-soa-auth .bx-authform>a").addClass("pull-right").addClass("forgot").wrap('<div id="trem_"></div>').parent().html();
						$("#trem_").remove(), $(s).insertBefore(n.closest(".checkbox"))
					}
					$("#bx-soa-auth .bx-soa-reg-block .btn").removeClass("btn-default").removeClass("btn-lg").addClass("transparent").text(BX.message("ORDER_REGISTER_BUTTON")), $("#bx-soa-auth").append('<div class="redisigned hidden></div>')
				}
				if ($(".bx-soa-section-content.reg").length && !$(".bx-soa-section-content.reg .redisigned").length) {
					var r = !1;
					if ("Y" === arNextOptions.THEME.LOGIN_EQUAL_EMAIL && (r = !0, $('input[name="NEW_LOGIN"]').length && $('input[name="NEW_LOGIN"]').closest(".bx-authform-formgroup-container").hide()), "Y" === arNextOptions.THEME.PERSONAL_ONEFIO && (r = !0, $('input[name="NEW_NAME"]').length && $('input[name="NEW_NAME"]').closest(".bx-authform-formgroup-container").find(".bx-authform-label-container").html(BX.message("ORDER_FIO_LABEL") + '<span class="bx-authform-starrequired"> *</span>'), $('input[name="NEW_LAST_NAME"]').length && ($('input[name="NEW_LAST_NAME"]').closest(".bx-authform-formgroup-container").hide(), $('input[name="NEW_LAST_NAME"]').val(" "))), r) {
						var l = $("#do_register~input[type=submit]");
						l.length && (BX.unbindAll(l[0]), $(document).on("click", "#do_register~input[type=submit]", function (e) {
							if (e.preventDefault(), e.stopImmediatePropagation(), "Y" === arNextOptions.THEME.LOGIN_EQUAL_EMAIL) {
								var t = BX.findChild(BX("bx-soa-auth"), {
										attribute: {
											name: "NEW_EMAIL"
										}
									}, !0, !1),
									a = BX.findChild(BX("bx-soa-auth"), {
										attribute: {
											name: "NEW_LOGIN"
										}
									}, !0, !1);
								a && t && (a.value = t.value)
							}
							BX("do_register").value = "Y", BX.Sale.OrderAjaxComponent.sendRequest("showAuthForm")
						}))
					}
					var c = $(".bx-soa-section-content.reg").find(".bx-captcha");
					if (c.length && (c.addClass("captcha_image"), c.append('<div class="captcha_reload"></div>'), c.closest(".bx-authform-formgroup-container").addClass("captcha-row").find("input[name=captcha_word]").closest(".bx-authform-input-container").addClass("captcha_input")), $("input[name=NEW_NAME]").length && $("input[name=NEW_LAST_NAME]").length && "Y" !== arNextOptions.THEME.PERSONAL_ONEFIO && !$("input[name=NEW_NAME]").closest(".bx-authform-formgroup-container.col-md-6").length) {
						$("input[name=NEW_NAME],input[name=NEW_LAST_NAME]").closest(".bx-authform-formgroup-container").addClass("col-md-6");
						s = $("input[name=NEW_LAST_NAME]").closest(".bx-authform-formgroup-container").wrap('<div id="trem_"></div>').parent().html();
						$("#trem_").remove(), $(s).insertAfter($("input[name=NEW_NAME]").closest(".bx-authform-formgroup-container").wrap('<div class="row"></div>'))
					}
					if ($("input[name=NEW_EMAIL]").length && $("input[name=PHONE_NUMBER]").length && !$("input[name=PHONE_NUMBER]").closest(".bx-authform-formgroup-container.col-md-6").length) {
						$("input[name=NEW_EMAIL],input[name=PHONE_NUMBER]").closest(".bx-authform-formgroup-container").addClass("col-md-6");
						s = $("input[name=PHONE_NUMBER]").closest(".bx-authform-formgroup-container").wrap('<div id="trem_"></div>').parent().html();
						$("#trem_").remove(), $(s).insertAfter($("input[name=NEW_EMAIL]").closest(".bx-authform-formgroup-container").wrap('<div class="row"></div>'))
					}
					if ($("input[name=NEW_PASSWORD]").length && $("input[name=NEW_PASSWORD_CONFIRM]").length && !$("input[name=NEW_PASSWORD]").closest(".bx-authform-formgroup-container.col-md-6").length) {
						$("input[name=NEW_PASSWORD],input[name=NEW_PASSWORD_CONFIRM]").closest(".bx-authform-formgroup-container").addClass("col-md-6");
						s = $("input[name=NEW_PASSWORD_CONFIRM]").closest(".bx-authform-formgroup-container").wrap('<div id="trem_"></div>').parent().html();
						$("#trem_").remove(), $(s).insertAfter($("input[name=NEW_PASSWORD]").closest(".bx-authform-formgroup-container").wrap('<div class="row"></div>'))
					}
					if ($("input[name=PHONE_NUMBER]").length) {
						var d;
						(d = $("input[name=PHONE_NUMBER]"))[0].outerHTML, i = d.val(), o = d[0].outerHTML.replace('type="text"', 'type="tel" value="' + i + '"');
						if ($(d).length < 2) d.hide(), $(o).insertAfter(d), showPhoneMask("input[name=PHONE_NUMBER][type=tel]"), $("input[name=PHONE_NUMBER][type=tel]").on("blur", function () {
							var e = $(this),
								t = e.val();
							e.parent().find("input[name=PHONE_NUMBER][type=text]").val(t)
						}), (n = $("input[name=PHONE_NUMBER][type=tel]").closest(".bx-authform-formgroup-container").find(".bx-authform-label-container")).html(BX.message("ORDER_PHONE_LABEL") + (n.find(".bx-authform-starrequired").length ? '<span class="bx-authform-starrequired"> *</span>' : ""))
					}
					$(".bx-soa-section-content.reg").append('<div class="redisigned hidden></div>')
				}
				if ($(".bx-soa-cart-total-line-total").length && "Y" == arNextOptions.THEME.SHOW_LICENCE && (void 0 === e && (BX.Sale.OrderAjaxComponent.state_licence = "Y" == arNextOptions.THEME.LICENCE_CHECKED ? "checked" : ""), $(".licence_block.filter").length || ($('<div class="form"><div class="licence_block filter label_block"><label data-for="licenses_order" class="hidden error">' + BX.message("JS_REQUIRED_LICENSES") + '</label><input type="checkbox" name="licenses_order" required ' + BX.Sale.OrderAjaxComponent.state_licence + ' value="Y"><label data-for="licenses_order" class="license">' + BX.message("LICENSES_TEXT") + "</label></div></div>").insertBefore($("#bx-soa-orderSave")), $(document).on("click", ".bx-soa .licence_block label.license", function () {
						var e = $(this).data("for");
						$(".bx-soa .licence_block label.error").addClass("hidden"), $("input[name=" + e + "]").prop("checked") ? ($("input[name=" + e + "]").prop("checked", ""), BX.Sale.OrderAjaxComponent.state_licence = "") : ($("input[name=" + e + "]").prop("checked", "checked"), BX.Sale.OrderAjaxComponent.state_licence = "checked")
					}), $(document).on("click", ".lic_condition a", function () {
						if (BX.hasClass(BX("bx-soa-order"), "orderform--v1")) BX.Sale.OrderAjaxComponent.isValidForm() && BX.Sale.OrderAjaxComponent.animateScrollTo($(".licence_block")[0], 800, 50);
						else {
							var e = BX.Sale.OrderAjaxComponent.isValidPropertiesBlock().length;
							BX.Sale.OrderAjaxComponent.activeSectionId && e || BX.Sale.OrderAjaxComponent.animateScrollTo($(".licence_block")[0], 800, 50)
						}
					})), $("#bx-soa-orderSave, .bx-soa-cart-total-button-container").addClass("lic_condition"), void 0 === BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction && void 0 !== BX.Sale.OrderAjaxComponent.clickOrderSaveAction && (BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction = BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent.clickOrderSaveAction = function (e) {
						$('input[name="licenses_order"]').prop("checked") ? ($(".bx-soa .licence_block label.error").addClass("hidden"), BX.Sale.OrderAjaxComponent.isValidForm() && ("function" == typeof BX.Sale.OrderAjaxComponent.allowOrderSave && BX.Sale.OrderAjaxComponent.allowOrderSave(), "function" == typeof BX.Sale.OrderAjaxComponent.doSaveAction ? BX.Sale.OrderAjaxComponent.doSaveAction() : BX.Sale.OrderAjaxComponent.oldClickOrderSaveAction(e))) : $(".bx-soa .licence_block label.error").removeClass("hidden")
					}, BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector(".checkbox") && "object" == typeof browser && ("msie" in browser && browser.msie ? $(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector(".checkbox")).remove() : BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector(".checkbox").remove()), BX.unbindAll(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector("a.btn-order-save")), BX.unbindAll(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector("a.btn-order-save")), BX.unbindAll(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector("a")), BX.bind(BX.Sale.OrderAjaxComponent.totalInfoBlockNode.querySelector("a.btn-order-save"), "click", BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent)), BX.bind(BX.Sale.OrderAjaxComponent.mobileTotalBlockNode.querySelector("a.btn-order-save"), "click", BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent)), BX.bind(BX.Sale.OrderAjaxComponent.orderSaveBlockNode.querySelector("a"), "click", BX.proxy(BX.Sale.OrderAjaxComponent.clickOrderSaveAction, BX.Sale.OrderAjaxComponent)))), $(window).scroll(), checkCounters() && void 0 === BX.Sale.OrderAjaxComponent.oldSaveOrder) {
					var p = void 0 !== BX.Sale.OrderAjaxComponent.saveOrder ? "saveOrder" : "saveOrderWithJson";
					void 0 !== BX.Sale.OrderAjaxComponent[p] && (BX.Sale.OrderAjaxComponent.oldSaveOrder = BX.Sale.OrderAjaxComponent[p], BX.Sale.OrderAjaxComponent[p] = function (t) {
						var e = BX.parseJSON(t);
						e && e.order ? e.order.SHOW_AUTH ? BX.Sale.OrderAjaxComponent.oldSaveOrder(t) : e.order.REDIRECT_URL && e.order.REDIRECT_URL.length && (!e.order.ERROR || BX.util.object_keys(e.order.ERROR).length < 1) && (arMatch = e.order.REDIRECT_URL.match(/ORDER_ID\=[^&=]*/g)) && arMatch.length && (_id = arMatch[0].replace(/ORDER_ID\=/g, "", arMatch[0])) ? $.ajax({
							url: arNextOptions.SITE_DIR + "ajax/check_order.php",
							dataType: "json",
							type: "POST",
							data: {
								ID: _id
							},
							success: function (e) {
								parseInt(e) ? purchaseCounter(parseInt(e), BX.message("FULL_ORDER"), function (e) {
									"undefined" != typeof localStorage && "object" == typeof e && localStorage.setItem("gtm_e_" + _id, JSON.stringify(e)), BX.Sale.OrderAjaxComponent.oldSaveOrder(t)
								}) : BX.Sale.OrderAjaxComponent.oldSaveOrder(t)
							},
							error: function () {
								BX.Sale.OrderAjaxComponent.oldSaveOrder(t)
							}
						}) : BX.Sale.OrderAjaxComponent.oldSaveOrder(t) : BX.Sale.OrderAjaxComponent.oldSaveOrder(t)
					})
				}
				var u, h;
				if ($("#bx-soa-order-form .captcha-row").length && window.asproRecaptcha && window.asproRecaptcha.key && "invisible" == window.asproRecaptcha.params.recaptchaSize && ($("#bx-soa-order-form .captcha-row").addClass("invisible"), "n" === asproRecaptcha.params.recaptchaLogoShow && $("#bx-soa-order-form .captcha-row").addClass("logo_captcha_n")), $("#bx-soa-order-form .captcha-row.invisible").length)
					if (void 0 === BX.Sale.OrderAjaxComponent.oldSendRequest && void 0 !== BX.Sale.OrderAjaxComponent.sendRequest) BX.Sale.OrderAjaxComponent.oldSendRequest = BX.Sale.OrderAjaxComponent.sendRequest, BX.Sale.OrderAjaxComponent.sendRequest = function (e, t) {
						var a = !0;
						if ($("#bx-soa-order-form .captcha-row.invisible").length && window.renderRecaptchaById && window.asproRecaptcha && window.asproRecaptcha.key && "invisible" == window.asproRecaptcha.params.recaptchaSize) {
							var i = BX("bx-soa-order-form");
							$(i).find(".g-recaptcha").length && (a = !!$(i).find(".g-recaptcha-response").val() || ("undefined" != typeof grecaptcha && grecaptcha.execute($(i).find(".g-recaptcha").data("widgetid")), !1))
						}
						a ? BX.Sale.OrderAjaxComponent.oldSendRequest(e, t) : (u = e, h = t)
					}, $(document).on("submit", "#bx-soa-order-form", function (e) {
						e.preventDefault(), void 0 === u && void 0 === h || (BX.Sale.OrderAjaxComponent.sendRequest(u, h), h = u = void 0)
					})
			}
			$(".bx-ui-sls-quick-locations.quick-locations").on("click", function () {
				$(this).siblings().removeClass("active"), $(this).addClass("active")
			})
		}
	}
}), funcDefined("basketActions") || (basketActions = function () {
	if (arNextOptions.PAGES.BASKET_PAGE) {
		if (checkMinPrice(), void 0 !== BX.Sale && "object" == typeof BX.Sale && void 0 !== BX.Sale.BasketComponent && "object" == typeof BX.Sale.BasketComponent && $(document).on("click", ".basket-item-actions-remove", function () {
				var e = $(this).closest(".basket-items-list-item-container").data("id");
				delFromBasketCounter(BX.Sale.BasketComponent.items[e].PRODUCT_ID)
			}), location.hash) {
			var e = location.hash.substring(1);
			$("#basket_toolbar_button_" + e).length && $("#basket_toolbar_button_" + e).trigger("click"), $('.basket-items-list-header-filter a[data-filter="' + e + '"]').length && $('.basket-items-list-header-filter a[data-filter="' + e + '"]')[0].click()
		}
		if ($(".bx_sort_container").append('<div class="top_control basket_sort"><span style="opacity:0;" class="delete_all btn btn-default white white-bg grey remove_all_basket">' + BX.message("BASKET_CLEAR_ALL_BUTTON") + "</span></div>"), $(".basket-items-list-header-filter").length) {
			$(".basket-items-list-header-filter").append('<div class="top_control basket_sort"><span style="opacity:1;" class="delete_all btn btn-default white white-bg grey remove_all_basket">' + BX.message("BASKET_CLEAR_ALL_BUTTON") + "</span></div>"), 3 == (t = $(".basket-items-list-header-filter > a.active").index()) && (t = 2), "all" == $(".basket-items-list-header-filter > a.active").data("filter") && (t = "all"), $(".basket-items-list-header-filter .top_control .delete_all").data("type", t), $(".basket-items-list-header-filter > a").on("click", function () {
				var e = $(this).index();
				3 == e && (e = 2), "all" == $(this).data("filter") && (e = "all"), $(".basket-items-list-header-filter .top_control .delete_all").data("type", e)
			})
		} else {
			var t = $(".bx_sort_container a.current").index();
			$(".bx_sort_container .top_control .delete_all").data("type", t), $(".bx_ordercart > div:eq(" + t + ") table tbody tr td.item").length && $(".bx_sort_container .top_control .delete_all").css("opacity", 1), $(".bx_ordercart .bx_ordercart_coupon #coupon").wrap('<div class="input"></div>'), $(".bx_sort_container > a").on("click", function () {
				var e = $(this).index();
				$(".bx_sort_container .top_control .delete_all").data("type", e), $(".bx_ordercart > div:eq(" + e + ") table tbody tr td.item").length ? $(".bx_sort_container .top_control .delete_all").css("opacity", 1) : $(".bx_sort_container .top_control .delete_all").css("opacity", 0)
			})
		}
		$(".basket_print").on("click", function () {
			window.print()
		}), $(".delete_all").on("click", function () {
			if ("N" !== arNextOptions.COUNTERS.USE_BASKET_GOALS) {
				var e = {
					goal: "goal_basket_clear",
					params: {
						type: $(this).data("type")
					}
				};
				BX.onCustomEvent("onCounterGoals", [e])
			}
			$.post(arNextOptions.SITE_DIR + "ajax/action_basket.php", "TYPE=" + $(this).data("type") + "&CLEAR_ALL=Y", $.proxy(function (e) {
				location.reload()
			}))
		}), $(".bx_item_list_section .bx_catalog_item").sliceHeight({
			row: ".bx_item_list_slide",
			item: ".bx_catalog_item"
		}), BX.addCustomEvent("onAjaxSuccess", function () {
			checkMinPrice();
			var e = $.trim($("#warning_message").text());
			$("#basket_items_list .error_text").remove(), "" != e && ($("#warning_message").hide().text(""), $("#basket_items_list").prepend('<div class="error_text">' + e + "</div>"))
		}), $(document).on("click", ".bx_ordercart_order_pay_center .checkout, .basket-checkout-section-inner .basket-btn-checkout", function () {
			checkCounters("google") && checkoutCounter(1, "start order")
		})
	}
}), funcDefined("checkMinPrice") || (checkMinPrice = function () {
	if (arNextOptions.PAGES.BASKET_PAGE) {
		var e = 0,
			t = 0;
		if ($("#allSum_FORMATED").length) {
			if (e = $("#allSum_FORMATED").text().replace(/[^0-9\.,]/g, ""), t = parseFloat(e), $("#basket_items").length) {
				t = 0;
				$("#basket_items tr").each(function () {
					void 0 !== $(this).data("item-price") && $(this).data("item-price") && (t += $(this).data("item-price") * $(this).find("#QUANTITY_INPUT_" + $(this).attr("id")).val())
				})
			}
			$(".catalog_back").length || $(".bx_ordercart_order_pay_center").prepend('<a href="' + arNextOptions.PAGES.CATALOG_PAGE_URL + '" class="catalog_back btn btn-default btn-lg white grey">' + BX.message("BASKET_CONTINUE_BUTTON") + "</a>")
		}
		"Y" == arNextOptions.THEME.SHOW_ONECLICKBUY_ON_BASKET_PAGE && $(".basket-coupon-section").addClass("smallest"), void 0 !== BX.Sale && void 0 !== BX.Sale.BasketComponent && void 0 !== BX.Sale.BasketComponent.result && (t = BX.Sale.BasketComponent.result.allSum), arNextOptions.PRICES.MIN_PRICE ? arNextOptions.PRICES.MIN_PRICE > t ? ($(".oneclickbuy.fast_order").length && $(".oneclickbuy.fast_order").remove(), $(".basket-checkout-container").length ? $(".icon_error_wrapper").length || $(".basket-checkout-block.basket-checkout-block-btn").html('<div class="icon_error_wrapper"><div class="icon_error_block">' + BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arNextOptions.PRICES.MIN_PRICE)) + "</div></div>") : ($(".icon_error_wrapper").length || "undefined" == typeof jsPriceFormat || $(".bx_ordercart_order_pay_center").prepend('<div class="icon_error_wrapper"><div class="icon_error_block">' + BX.message("MIN_ORDER_PRICE_TEXT").replace("#PRICE#", jsPriceFormat(arNextOptions.PRICES.MIN_PRICE)) + "</div></div>"), $(".bx_ordercart_order_pay .checkout").length && $(".bx_ordercart_order_pay .checkout").remove())) : ($(".icon_error_wrapper").length && $(".icon_error_wrapper").remove(), $(".basket-checkout-container").length ? $(".oneclickbuy.fast_order").length || "Y" != arNextOptions.THEME.SHOW_ONECLICKBUY_ON_BASKET_PAGE || $(".basket-btn-checkout.disabled").length || $(".basket-checkout-section-inner").append('<div class="fastorder"><span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">' + BX.message("BASKET_QUICK_ORDER_BUTTON") + "</span></div>") : ($(".bx_ordercart_order_pay .checkout").length ? $(".bx_ordercart .bx_ordercart_order_pay .checkout").css("opacity", "1") : $(".bx_ordercart_order_pay_center").append('<a href="javascript:void(0)" onclick="checkOut();" class="checkout" style="opacity: 1;">' + BX.message("BASKET_ORDER_BUTTON") + "</a>"), $(".oneclickbuy.fast_order").length || "Y" != arNextOptions.THEME.SHOW_ONECLICKBUY_ON_BASKET_PAGE || $(".bx_ordercart_order_pay_center").append('<span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">' + BX.message("BASKET_QUICK_ORDER_BUTTON") + "</span>"))) : $(".basket-checkout-container").length ? $(".oneclickbuy.fast_order").length || "Y" != arNextOptions.THEME.SHOW_ONECLICKBUY_ON_BASKET_PAGE || $(".basket-btn-checkout.disabled").length || $(".basket-checkout-section-inner").append('<div class="fastorder"><span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">' + BX.message("BASKET_QUICK_ORDER_BUTTON") + "</span></div>") : ($(".bx_ordercart .bx_ordercart_order_pay .checkout").css("opacity", "1"), $(".oneclickbuy.fast_order").length || "Y" != arNextOptions.THEME.SHOW_ONECLICKBUY_ON_BASKET_PAGE || $(".bx_ordercart_order_pay_center").append('<span class="oneclickbuy btn btn-default btn-lg fast_order" onclick="oneClickBuyBasket()">' + BX.message("BASKET_QUICK_ORDER_BUTTON") + "</span>")), $("#basket-root .basket-checkout-container .basket-checkout-section .basket-checkout-block .basket-btn-checkout").addClass("white"), $("#basket-root .basket-checkout-container").addClass("visible")
	}
});
var isFrameDataReceived = !1;
void 0 !== window.frameCacheVars ? BX.addCustomEvent("onFrameDataReceived", function (e) {
	initFull(), CheckTopMenuPadding(), CheckTopMenuOncePadding(), CheckTopMenuDotted(), CheckSearchWidth(), $(".logo-row.v2").length && ($(window).resize(), setTimeout(function () {
		CheckTopMenuDotted()
	}, 100)), isFrameDataReceived = !0
}) : $(document).ready(initFull), funcDefined("setHeightBlockSlider") || (setHeightBlockSlider = function () {
	$(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").equalize({
		children: ".item-title"
	}), $(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").equalize({
		children: ".item_info"
	}), $(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").equalize({
		children: ".catalog_item"
	});
	$(document).find(".specials.tab_slider_wrapp").outerWidth();
	if ($(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").length <= 1) {
		$(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").css("height", "");
		var e = 0;
		$(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button").length && ($(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button").css("height", "auto"), e = $(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button").height(), $(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur .tabs_slider li .footer_button").css("height", ""));
		var t = 1 * $(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur").height(),
			a = t + e + 50;
		$(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur").attr("data-unhover", t), $(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur").attr("data-hover", a), $(document).find(".specials.tab_slider_wrapp .tabs_content").height(t), $(document).find(".specials.tab_slider_wrapp .tabs_content .tab.cur .flex-viewport").height(t)
	} else $(document).find(".specials.tab_slider_wrapp .tabs_content > li.cur").each(function () {
		var e = $(this);
		e.css("height", "");
		var t = 0;
		e.find(".tabs_slider li .footer_button").length && (e.find(".tabs_slider li .footer_button").css("height", "auto"), t = e.find(".tabs_slider li .footer_button").height(), e.find(".tabs_slider li .footer_button").css("height", ""));
		var a = 1 * e.height(),
			i = a + t + 50;
		e.attr("data-unhover", a), e.attr("data-hover", i), e.parent().height(a), e.find(".flex-viewport").height(a)
	})
}), funcDefined("checkTopFilter") || (checkTopFilter = function () {
	if ($(".adaptive_filter").length && window.matchMedia("(max-width: 991px)").matches && !$("#mobilefilter").length) {
		var e = $(".adaptive_filter").position().top;
		$(".bx_filter.bx_filter_vertical").css({
			top: e + 43
		})
	}
}), funcDefined("checkStickyFooter") || (checkStickyFooter = function () {
	try {
		ignoreResize.push(!0), $("#content").css("min-height", "");
		var e = $("#content").offset().top,
			t = e + $("#content").outerHeight();
		$("footer").length && (footerOffset = $("footer").offset().top), $("#content").css("min-height", $(window).height() - e - (0 - t) - $("footer").outerHeight() + "px"), ignoreResize.pop()
	} catch (e) {
		console.error(e)
	}
});
var timerResize = !1,
	ignoreResize = [];
$(window).resize(function () {
	CheckPopupTop(), ignoreResize.length || (timerResize && (clearTimeout(timerResize), timerResize = !1), timerResize = setTimeout(function () {
		BX.onCustomEvent("onWindowResize", !1)
	}, 50))
});
var timerScroll = !1,
	ignoreScroll = [],
	documentScrollTopLast = $(document).scrollTop(),
	startScroll = 0;
$(window).scroll(function () {
	CheckPopupTop(), documentScrollTopLast = $(document).scrollTop(), SetFixedAskBlock(), ignoreScroll.length || (timerScroll && (clearTimeout(timerScroll), timerScroll = !1), timerScroll = setTimeout(function () {
		BX.onCustomEvent("onWindowScroll", !1)
	}, 50))
});
var timerLazyLoad = !1,
	lastLazyLoaded = [];
$(document).on("lazyloaded", function (e) {
	timerLazyLoad && (clearTimeout(timerLazyLoad), timerLazyLoad = !1), lastLazyLoaded.push(e.target), timerLazyLoad = setTimeout(function () {
		BX.onCustomEvent("onLazyLoaded", [lastLazyLoaded]), lastLazyLoaded = []
	}, 100)
}), BX.addCustomEvent("onWindowResize", function (e) {
	try {
		ignoreResize.push(!0), CheckTopMenuPadding(), CheckTopMenuOncePadding(), CheckSearchWidth(), CheckTabActive(), CheckTopMenuFullCatalogSubmenu(), CheckHeaderFixedMenu(), CheckTopMenuDotted(), $("nav.mega-menu.sliced").length && $("nav.mega-menu.sliced").removeClass("initied"), CheckTopVisibleMenu(), checkScrollToTop(), CheckObjectsSizes(), CheckFlexSlider(), initSly(), checkMobilePhone(), checkTopFilter(), checkMobileFilter(), window.matchMedia("(min-width: 767px)").matches && $(".wrapper_middle_menu.wrap_menu").removeClass("mobile"), window.matchMedia("(max-width: 767px)").matches && $(".wrapper_middle_menu.wrap_menu").addClass("mobile"), $("#basket_form").length && $(window).outerWidth() <= 600 && $("#basket_form .tabs_content.basket > li.cur td").each(function () {
			$(this).css("width", "")
		}), $(".bx_filter_section .bx_filter_select_container").each(function () {
			var e = $(this).closest(".bx_filter_parameters_box").attr("data-property_id");
			$("#smartFilterDropDown" + e).length && $("#smartFilterDropDown" + e).css("max-width", $(this).width())
		})
	} catch (e) {} finally {
		ignoreResize.pop()
	}
}), BX.addCustomEvent("onWindowScroll", function (e) {
	try {
		ignoreScroll.push(!0)
	} catch (e) {} finally {
		ignoreScroll.pop()
	}
}), BX.addCustomEvent("onSlideInit", function (e) {
	try {
		if (ignoreResize.push(!0), e) {
			var t = e.slider;
			if (t) {
				t.hasClass("small-gallery") && $(window).resize(), t.find(".item").removeClass("current");
				var a = t.find(".item.flex-active-slide"),
					i = a.attr("id");
				t.find(".flex-direction-nav");
				a.addClass("current"), t.find(".visible").css("opacity", "1"), a.hasClass("shown") && t.find(".item.clone[id=" + i + "_clone]").addClass("shown"), a.addClass("shown")
			}
		}
	} catch (e) {} finally {
		ignoreResize.pop()
	}
}), BX.addCustomEvent("onCounterGoals", function (t) {
	if ("Y" == arNextOptions.THEME.YA_GOALS && arNextOptions.THEME.YA_COUNTER_ID) {
		var a = arNextOptions.THEME.YA_COUNTER_ID;
		if (a = parseInt(a), "object" != typeof t && (t = {
				goal: "undefined"
			}), "string" != typeof t.goal && (t.goal = "undefined"), a) try {
			waitCounter(a, 50, function () {
				var e = window["yaCounter" + a];
				"object" == typeof e && e.reachGoal(t.goal)
			})
		} catch (e) {
			console.error(e)
		} else console.info("Bad counter id!", a)
	}
});
var onCaptchaVerifyinvisible = function (e) {
		$(".g-recaptcha:last").each(function () {
			void 0 !== $(this).attr("data-widgetid") && e && ($(this).closest("form").find(".g-recaptcha-response").val() || $(this).closest("form").find(".g-recaptcha-response").val(e), $("iframe[src*=recaptcha]").length && $("iframe[src*=recaptcha]").each(function () {
				var e = $(this).parent().parent();
				e.hasClass("grecaptcha-badge") || e.css("width", "100%")
			}), $(this).closest("form").submit())
		})
	},
	onCaptchaVerifynormal = function (e) {
		$(".g-recaptcha").each(function () {
			var e = $(this).attr("data-widgetid");
			void 0 !== e && "" != grecaptcha.getResponse(e) && $(this).closest("form").find(".recaptcha").valid()
		})
	};
BX.addCustomEvent("onSubmitForm", function (e) {
	try {
		if (!window.renderRecaptchaById || !window.asproRecaptcha || !window.asproRecaptcha.key) return e.form.submit(), $(e.form).closest(".form").addClass("sending"), !0;
		if ("invisible" != window.asproRecaptcha.params.recaptchaSize || !$(e.form).find(".g-recaptcha").length) return e.form.submit(), $(e.form).closest(".form").addClass("sending"), !0;
		if ($(e.form).find(".g-recaptcha-response").val()) return e.form.submit(), $(e.form).closest(".form").addClass("sending"), !0;
		if ("undefined" == typeof grecaptcha) return !1;
		grecaptcha.execute($(e.form).find(".g-recaptcha").data("widgetid"))
	} catch (e) {
		return console.error(e), !0
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/aspro_next/js/jquery.mCustomScrollbar.min.js?158443666439873";s:6:"source";s:62:"/bitrix/templates/aspro_next/js/jquery.mCustomScrollbar.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
	var t, o, a, n, i, r, l, s, c, d, u, f, h, m, p, g, v, x, _, w, S, b, C, y, B, T, k, M, O, I, D, E, W, R, A, L, z, P, H, U, F, q, j, Y, X, N, V, Q, G, J, K, Z, $, ee, te, oe, ae, ne, ie, re;
	ne = "function" == typeof define && define.amd, ie = "undefined" != typeof module && module.exports, re = "https:" == document.location.protocol ? "https:" : "http:", ne || (ie ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + re + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
		setTop: 0,
		setLeft: 0,
		axis: "y",
		scrollbarPosition: "inside",
		scrollInertia: 100,
		autoDraggerLength: !0,
		alwaysShowScrollbar: 0,
		snapOffset: 0,
		mouseWheel: {
			enable: !0,
			scrollAmount: "auto",
			axis: "y",
			deltaFactor: "auto",
			disableOver: ["select", "option", "keygen", "datalist", "textarea"]
		},
		scrollButtons: {
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		keyboard: {
			enable: !0,
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		contentTouchScroll: 25,
		documentTouchScroll: !0,
		advanced: {
			autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
			updateOnContentResize: !0,
			updateOnImageLoad: "auto",
			autoUpdateTimeout: 60
		},
		theme: "light",
		callbacks: {
			onTotalScrollOffset: 0,
			onTotalScrollBackOffset: 0,
			alwaysTriggerOffsets: !0
		}
	}, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
		init: function (t) {
			var t = e.extend(!0, {}, i, t),
				o = f.call(this);
			if (t.live) {
				var s = t.liveSelector || this.selector || n,
					c = e(s);
				if ("off" === t.live) return void m(s);
				l[s] = setTimeout(function () {
					c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
				}, 500)
			} else m(s);
			return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
				enable: !0,
				scrollAmount: "auto",
				axis: "y",
				preventDefault: !1,
				deltaFactor: "auto",
				normalizeDelta: !1,
				invert: !1
			}), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
				var o = e(this);
				if (!o.data(a)) {
					o.data(a, {
						idx: ++r,
						opt: t,
						scrollRatio: {
							y: null,
							x: null
						},
						overflowed: null,
						contentReset: {
							y: null,
							x: null
						},
						bindEvents: !1,
						tweenRunning: !1,
						sequential: {},
						langDir: o.css("direction"),
						cbOffsets: null,
						trigger: null,
						poll: {
							size: {
								o: 0,
								n: 0
							},
							img: {
								o: 0,
								n: 0
							},
							change: {
								o: 0,
								n: 0
							}
						}
					});
					var n = o.data(a),
						i = n.opt,
						l = o.data("mcs-axis"),
						s = o.data("mcs-scrollbar-position"),
						c = o.data("mcs-theme");
					l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
				}
			})
		},
		update: function (t, o) {
			var n = t || f.call(this);
			return e(n).each(function () {
				var t = e(this);
				if (t.data(a)) {
					var n = t.data(a),
						i = n.opt,
						r = e("#mCSB_" + n.idx + "_container"),
						l = e("#mCSB_" + n.idx),
						s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
					if (!r.length) return;
					n.tweenRunning && V(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
					var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
					"x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (Q(t, c[0].toString(), {
						dir: "y",
						dur: 0,
						overwrite: "none"
					}), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && Q(t, c[1].toString(), {
						dir: "x",
						dur: 0,
						overwrite: "none"
					}))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (Q(t, c[1].toString(), {
						dir: "x",
						dur: 0,
						overwrite: "none"
					}), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && Q(t, c[0].toString(), {
						dir: "y",
						dur: 0,
						overwrite: "none"
					}))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
				}
			})
		},
		scrollTo: function (t, o) {
			if (void 0 !== t && null != t) {
				var n = f.call(this);
				return e(n).each(function () {
					var n = e(this);
					if (n.data(a)) {
						var i = n.data(a),
							r = i.opt,
							l = {
								trigger: "external",
								scrollInertia: r.scrollInertia,
								scrollEasing: "mcsEaseInOut",
								moveDragger: !1,
								timeout: 60,
								callbacks: !0,
								onStart: !0,
								onUpdate: !0,
								onComplete: !0
							},
							s = e.extend(!0, {}, l, o),
							c = Y.call(this, t),
							d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
						c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ae() ? 0 : d, setTimeout(function () {
							null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", Q(n, c[0].toString(), s)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", Q(n, c[1].toString(), s))
						}, s.timeout)
					}
				})
			}
		},
		stop: function () {
			var t = f.call(this);
			return e(t).each(function () {
				var t = e(this);
				t.data(a) && V(t)
			})
		},
		disable: function (t) {
			var o = f.call(this);
			return e(o).each(function () {
				var o = e(this);
				o.data(a) && (o.data(a), N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]))
			})
		},
		destroy: function () {
			var t = f.call(this);
			return e(t).each(function () {
				var n = e(this);
				if (n.data(a)) {
					var i = n.data(a),
						r = i.opt,
						l = e("#mCSB_" + i.idx),
						s = e("#mCSB_" + i.idx + "_container"),
						c = e(".mCSB_" + i.idx + "_scrollbar");
					r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), Z(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
				}
			})
		}
	}, f = function () {
		return "object" != typeof e(this) || e(this).length < 1 ? n : this
	}, h = function (t) {
		t.autoDraggerLength = !(e.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : t.scrollbarPosition
	}, m = function (e) {
		l[e] && (clearTimeout(l[e]), Z(l, e))
	}, p = function (e) {
		return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
	}, g = function (e) {
		return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
	}, v = function () {
		var t = e(this),
			n = t.data(a),
			i = n.opt,
			r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
			l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
			s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
			c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
			u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
			f = i.autoHideScrollbar ? " " + d[6] : "",
			h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
		i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
		var m = e("#mCSB_" + n.idx),
			p = e("#mCSB_" + n.idx + "_container");
		"y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
		var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
		g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
	}, x = function (t) {
		var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
				return e(this).outerWidth(!0)
			}).get())],
			a = t.parent().width();
		return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
	}, _ = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = e("#mCSB_" + o.idx + "_container");
		if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
			i.css({
				width: "auto",
				"min-width": 0,
				"overflow-x": "scroll"
			});
			var r = Math.ceil(i[0].scrollWidth);
			3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
				width: r,
				"min-width": "100%",
				"overflow-x": "inherit"
			}) : i.css({
				"overflow-x": "inherit",
				position: "absolute"
			}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
				width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
				"min-width": "100%",
				position: "relative"
			}).unwrap()
		}
	}, w = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = e(".mCSB_" + o.idx + "_scrollbar:first"),
			r = te(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
			l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
			s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
		n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
	}, S = function () {
		var t = e(this),
			o = t.data(a),
			n = e("#mCSB_" + o.idx),
			i = e("#mCSB_" + o.idx + "_container"),
			r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
			l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
			c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
			d = s && c[1] < c[0] ? c[0] : c[1],
			u = s && c[3] < c[2] ? c[2] : c[3];
		r[0].css({
			height: d,
			"max-height": r[0].parent().height() - 10
		}).find(".mCSB_dragger_bar").css({
			"line-height": c[0] + "px"
		}), r[1].css({
			width: u,
			"max-width": r[1].parent().width() - 10
		})
	}, b = function () {
		var t = e(this),
			o = t.data(a),
			n = e("#mCSB_" + o.idx),
			i = e("#mCSB_" + o.idx + "_container"),
			r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
			l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
			s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
		o.scrollRatio = {
			y: s[0],
			x: s[1]
		}
	}, C = function (e, t, o) {
		var a = o ? d[0] + "_expanded" : "",
			n = e.closest(".mCSB_scrollTools");
		"active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])))
	}, y = function () {
		var t = e(this),
			o = t.data(a),
			n = e("#mCSB_" + o.idx),
			i = e("#mCSB_" + o.idx + "_container"),
			r = null == o.overflowed ? i.height() : i.outerHeight(!1),
			l = null == o.overflowed ? i.width() : i.outerWidth(!1),
			s = i[0].scrollHeight,
			c = i[0].scrollWidth;
		return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
	}, B = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = e("#mCSB_" + o.idx),
			r = e("#mCSB_" + o.idx + "_container"),
			l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
		if (V(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), Q(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
			var s = dx = 0;
			"rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), Q(t, "_resetX")
		}
	}, T = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt;
		if (!o.bindEvents) {
			var i;
			if (I.call(this), n.contentTouchScroll && D.call(this), E.call(this), n.mouseWheel.enable) ! function o() {
				i = setTimeout(function () {
					e.event.special.mousewheel ? (clearTimeout(i), W.call(t[0])) : o()
				}, 100)
			}();
			P.call(this), U.call(this), n.advanced.autoScrollOnFocus && H.call(this), n.scrollButtons.enable && F.call(this), n.keyboard.enable && q.call(this), o.bindEvents = !0
		}
	}, k = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = a + "_" + o.idx,
			r = ".mCSB_" + o.idx + "_scrollbar",
			l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
			s = e("#mCSB_" + o.idx + "_container");
		n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
			e(this).unbind("." + i)
		}), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), Z(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), Z(s[0], "onCompleteTimeout"), o.bindEvents = !1)
	}, M = function (t) {
		var o = e(this),
			n = o.data(a),
			i = n.opt,
			r = e("#mCSB_" + n.idx + "_container_wrapper"),
			l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
			s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
			c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
		"x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
	}, O = function (t) {
		var o = t.type,
			a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
			n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
		switch (o) {
			case "pointerdown":
			case "MSPointerDown":
			case "pointermove":
			case "MSPointerMove":
			case "pointerup":
			case "MSPointerUp":
				return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
			case "touchstart":
			case "touchmove":
			case "touchend":
				var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
					r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
				return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
			default:
				return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
		}
	}, I = function () {
		var t, o, n, i = e(this),
			r = i.data(a),
			l = r.opt,
			d = a + "_" + r.idx,
			u = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"],
			f = e("#mCSB_" + r.idx + "_container"),
			h = e("#" + u[0] + ",#" + u[1]),
			m = l.advanced.releaseDraggableSelectors ? h.add(e(l.advanced.releaseDraggableSelectors)) : h,
			p = l.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(l.advanced.extraDraggableSelectors)) : e(!A() || top.document);

		function g(e, o, a, n) {
			if (f[0].idleTimer = l.scrollInertia < 233 ? 250 : 0, t.attr("id") === u[1]) var s = "x",
				c = (t[0].offsetLeft - o + n) * r.scrollRatio.x;
			else var s = "y",
				c = (t[0].offsetTop - e + a) * r.scrollRatio.y;
			Q(i, c.toString(), {
				dir: s,
				drag: !0
			})
		}
		h.bind("contextmenu." + d, function (e) {
			e.preventDefault()
		}).bind("mousedown." + d + " touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function (a) {
			if (a.stopImmediatePropagation(), a.preventDefault(), $(a)) {
				c = !0, s && (document.onselectstart = function () {
					return !1
				}), L.call(f, !1), V(i);
				var r = (t = e(this)).offset(),
					d = O(a)[0] - r.top,
					u = O(a)[1] - r.left,
					h = t.height() + r.top,
					m = t.width() + r.left;
				d < h && d > 0 && u < m && u > 0 && (o = d, n = u), C(t, "active", l.autoExpandScrollbar)
			}
		}).bind("touchmove." + d, function (e) {
			e.stopImmediatePropagation(), e.preventDefault();
			var a = t.offset(),
				i = O(e)[0] - a.top,
				r = O(e)[1] - a.left;
			g(o, n, i, r)
		}), e(document).add(p).bind("mousemove." + d + " pointermove." + d + " MSPointerMove." + d, function (e) {
			if (t) {
				var a = t.offset(),
					i = O(e)[0] - a.top,
					r = O(e)[1] - a.left;
				if (o === i && n === r) return;
				g(o, n, i, r)
			}
		}).add(m).bind("mouseup." + d + " touchend." + d + " pointerup." + d + " MSPointerUp." + d, function (e) {
			t && (C(t, "active", l.autoExpandScrollbar), t = null), c = !1, s && (document.onselectstart = null), L.call(f, !0)
		})
	}, D = function () {
		var o, n, i, r, l, s, d, u, f, h, m, p, g, v, x = e(this),
			_ = x.data(a),
			w = _.opt,
			S = a + "_" + _.idx,
			b = e("#mCSB_" + _.idx),
			C = e("#mCSB_" + _.idx + "_container"),
			y = [e("#mCSB_" + _.idx + "_dragger_vertical"), e("#mCSB_" + _.idx + "_dragger_horizontal")],
			B = [],
			T = [],
			k = 0,
			M = "yx" === w.axis ? "none" : "all",
			I = [],
			D = C.find("iframe"),
			E = ["touchstart." + S + " pointerdown." + S + " MSPointerDown." + S, "touchmove." + S + " pointermove." + S + " MSPointerMove." + S, "touchend." + S + " pointerup." + S + " MSPointerUp." + S],
			W = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

		function R(e) {
			if (!ee(e) || c || O(e)[2]) t = 0;
			else {
				t = 1, g = 0, v = 0, o = 1, x.removeClass("mCS_touch_action");
				var a = C.offset();
				n = O(e)[0] - a.top, i = O(e)[1] - a.left, I = [O(e)[0], O(e)[1]]
			}
		}

		function L(e) {
			if (ee(e) && !c && !O(e)[2] && (w.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!v || g) && o)) {
				d = J();
				var t = b.offset(),
					a = O(e)[0] - t.top,
					r = O(e)[1] - t.left,
					l = "mcsLinearOut";
				if (B.push(a), T.push(r), I[2] = Math.abs(O(e)[0] - I[0]), I[3] = Math.abs(O(e)[1] - I[1]), _.overflowed[0]) var s = y[0].parent().height() - y[0].height(),
					u = n - a > 0 && a - n > -s * _.scrollRatio.y && (2 * I[3] < I[2] || "yx" === w.axis);
				if (_.overflowed[1]) var f = y[1].parent().width() - y[1].width(),
					h = i - r > 0 && r - i > -f * _.scrollRatio.x && (2 * I[2] < I[3] || "yx" === w.axis);
				u || h ? (W || e.preventDefault(), g = 1) : (v = 1, x.addClass("mCS_touch_action")), W && e.preventDefault(), m = "yx" === w.axis ? [n - a, i - r] : "x" === w.axis ? [null, i - r] : [n - a, null], C[0].idleTimer = 250, _.overflowed[0] && U(m[0], k, l, "y", "all", !0), _.overflowed[1] && U(m[1], k, l, "x", M, !0)
			}
		}

		function z(e) {
			if (!ee(e) || c || O(e)[2]) t = 0;
			else {
				t = 1, e.stopImmediatePropagation(), V(x), s = J();
				var o = b.offset();
				r = O(e)[0] - o.top, l = O(e)[1] - o.left, B = [], T = []
			}
		}

		function P(e) {
			if (ee(e) && !c && !O(e)[2]) {
				o = 0, e.stopImmediatePropagation(), g = 0, v = 0, u = J();
				var t = b.offset(),
					a = O(e)[0] - t.top,
					n = O(e)[1] - t.left;
				if (!(u - d > 30)) {
					var i = "mcsEaseOut",
						x = (h = 1e3 / (u - s)) < 2.5,
						S = x ? [B[B.length - 2], T[T.length - 2]] : [0, 0];
					f = x ? [a - S[0], n - S[1]] : [a - r, n - l];
					var y = [Math.abs(f[0]), Math.abs(f[1])];
					h = x ? [Math.abs(f[0] / 4), Math.abs(f[1] / 4)] : [h, h];
					var k = [Math.abs(C[0].offsetTop) - f[0] * H(y[0] / h[0], h[0]), Math.abs(C[0].offsetLeft) - f[1] * H(y[1] / h[1], h[1])];
					m = "yx" === w.axis ? [k[0], k[1]] : "x" === w.axis ? [null, k[1]] : [k[0], null], p = [4 * y[0] + w.scrollInertia, 4 * y[1] + w.scrollInertia];
					var I = parseInt(w.contentTouchScroll) || 0;
					m[0] = y[0] > I ? m[0] : 0, m[1] = y[1] > I ? m[1] : 0, _.overflowed[0] && U(m[0], p[0], i, "y", M, !1), _.overflowed[1] && U(m[1], p[1], i, "x", M, !1)
				}
			}
		}

		function H(e, t) {
			var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
			return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
		}

		function U(e, t, o, a, n, i) {
			e && Q(x, e.toString(), {
				dur: t,
				scrollEasing: o,
				dir: a,
				overwrite: n,
				drag: i
			})
		}
		C.bind(E[0], function (e) {
			R(e)
		}).bind(E[1], function (e) {
			L(e)
		}), b.bind(E[0], function (e) {
			z(e)
		}).bind(E[2], function (e) {
			P(e)
		}), D.length && D.each(function () {
			e(this).bind("load", function () {
				A(this) && e(this.contentDocument || this.contentWindow.document).bind(E[0], function (e) {
					R(e), z(e)
				}).bind(E[1], function (e) {
					L(e)
				}).bind(E[2], function (e) {
					P(e)
				})
			})
		})
	}, E = function () {
		var o, n = e(this),
			i = n.data(a),
			r = i.opt,
			l = i.sequential,
			s = a + "_" + i.idx,
			d = e("#mCSB_" + i.idx + "_container"),
			u = d.parent();

		function f(e, t, a) {
			l.type = a && o ? "stepped" : "stepless", l.scrollAmount = 10, j(n, e, t, "mcsLinearOut", a ? 60 : null)
		}
		d.bind("mousedown." + s, function (e) {
			t || o || (o = 1, c = !0)
		}).add(document).bind("mousemove." + s, function (e) {
			if (!t && o && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
				var a = d.offset(),
					n = O(e)[0] - a.top + d[0].offsetTop,
					s = O(e)[1] - a.left + d[0].offsetLeft;
				n > 0 && n < u.height() && s > 0 && s < u.width() ? l.step && f("off", null, "stepped") : ("x" !== r.axis && i.overflowed[0] && (n < 0 ? f("on", 38) : n > u.height() && f("on", 40)), "y" !== r.axis && i.overflowed[1] && (s < 0 ? f("on", 37) : s > u.width() && f("on", 39)))
			}
		}).bind("mouseup." + s + " dragend." + s, function (e) {
			t || (o && (o = 0, f("off", null)), c = !1)
		})
	}, W = function () {
		if (e(this).data(a)) {
			var t = e(this),
				o = t.data(a),
				n = o.opt,
				i = a + "_" + o.idx,
				r = e("#mCSB_" + o.idx),
				l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
				c = e("#mCSB_" + o.idx + "_container").find("iframe");
			c.length && c.each(function () {
				e(this).bind("load", function () {
					A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + i, function (e, t) {
						d(e, t)
					})
				})
			}), r.bind("mousewheel." + i, function (e, t) {
				d(e, t)
			})
		}

		function d(a, i) {
			if (V(t), !z(t, a.target)) {
				var c = "auto" !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor) : s && a.deltaFactor < 100 ? 100 : a.deltaFactor || 100,
					d = n.scrollInertia;
				if ("x" === n.axis || "x" === n.mouseWheel.axis) var u = "x",
					f = [Math.round(c * o.scrollRatio.x), parseInt(n.mouseWheel.scrollAmount)],
					h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.width() ? .9 * r.width() : f[0],
					m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
					p = l[1][0].offsetLeft,
					g = l[1].parent().width() - l[1].width(),
					v = "y" === n.mouseWheel.axis ? a.deltaY || i : a.deltaX;
				else var u = "y",
					f = [Math.round(c * o.scrollRatio.y), parseInt(n.mouseWheel.scrollAmount)],
					h = "auto" !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= r.height() ? .9 * r.height() : f[0],
					m = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
					p = l[0][0].offsetTop,
					g = l[0].parent().height() - l[0].height(),
					v = a.deltaY || i;
				"y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((n.mouseWheel.invert || a.webkitDirectionInvertedFromDevice) && (v = -v), n.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== p || v < 0 && p !== g || n.mouseWheel.preventDefault) && (a.stopImmediatePropagation(), a.preventDefault()), a.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (h = a.deltaFactor, d = 17), Q(t, (m - v * h).toString(), {
					dir: u,
					dur: d
				}))
			}
		}
	}, R = new Object, A = function (t) {
		var o = !1,
			a = !1,
			n = null;
		if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), !1 !== a && void 0 !== R[a]) return R[a];
		if (t) {
			try {
				var i = t.contentDocument || t.contentWindow.document;
				n = i.body.innerHTML
			} catch (e) {}
			o = null !== n
		} else {
			try {
				var i = top.document;
				n = i.body.innerHTML
			} catch (e) {}
			o = null !== n
		}
		return !1 !== a && (R[a] = o), o
	}, L = function (e) {
		var t = this.find("iframe");
		if (t.length) {
			var o = e ? "auto" : "none";
			t.css("pointer-events", o)
		}
	}, z = function (t, o) {
		var n = o.nodeName.toLowerCase(),
			i = t.data(a).opt.mouseWheel.disableOver;
		return e.inArray(n, i) > -1 && !(e.inArray(n, ["select", "textarea"]) > -1 && !e(o).is(":focus"))
	}, P = function () {
		var t, o = e(this),
			n = o.data(a),
			i = a + "_" + n.idx,
			r = e("#mCSB_" + n.idx + "_container"),
			l = r.parent(),
			s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
		s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
			c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
		}).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function (e) {
			c = !1
		}).bind("click." + i, function (a) {
			if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
				V(o);
				var i = e(this),
					s = i.find(".mCSB_dragger");
				if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
					if (!n.overflowed[1]) return;
					var c = "x",
						u = a.pageX > s.offset().left ? -1 : 1,
						f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
				} else {
					if (!n.overflowed[0]) return;
					var c = "y",
						u = a.pageY > s.offset().top ? -1 : 1,
						f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
				}
				Q(o, f.toString(), {
					dir: c,
					scrollEasing: "mcsEaseInOut"
				})
			}
		})
	}, H = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = a + "_" + o.idx,
			r = e("#mCSB_" + o.idx + "_container"),
			l = r.parent();
		r.bind("focusin." + i, function (o) {
			var a = e(document.activeElement),
				i = r.find(".mCustomScrollBox").length;
			a.is(n.advanced.autoScrollOnFocus) && (V(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? 17 * i : 0, t[0]._focusTimeout = setTimeout(function () {
				var e = [oe(a)[0], oe(a)[1]],
					o = [r[0].offsetTop, r[0].offsetLeft],
					i = [o[0] + e[0] >= 0 && o[0] + e[0] < l.height() - a.outerHeight(!1), o[1] + e[1] >= 0 && o[0] + e[1] < l.width() - a.outerWidth(!1)],
					s = "yx" !== n.axis || i[0] || i[1] ? "all" : "none";
				"x" === n.axis || i[0] || Q(t, e[0].toString(), {
					dir: "y",
					scrollEasing: "mcsEaseInOut",
					overwrite: s,
					dur: 0
				}), "y" === n.axis || i[1] || Q(t, e[1].toString(), {
					dir: "x",
					scrollEasing: "mcsEaseInOut",
					overwrite: s,
					dur: 0
				})
			}, t[0]._focusTimer))
		})
	}, U = function () {
		var t = e(this),
			o = t.data(a),
			n = a + "_" + o.idx,
			i = e("#mCSB_" + o.idx + "_container").parent();
		i.bind("scroll." + n, function (t) {
			0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
		})
	}, F = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = o.sequential,
			r = a + "_" + o.idx,
			l = ".mCSB_" + o.idx + "_scrollbar",
			s = e(l + ">a");
		s.bind("contextmenu." + r, function (e) {
			e.preventDefault()
		}).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
			if (a.preventDefault(), $(a)) {
				var r = e(this).attr("class");
				switch (i.type = n.scrollButtons.scrollType, a.type) {
					case "mousedown":
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
						if ("stepped" === i.type) return;
						c = !0, o.tweenRunning = !1, l("on", r);
						break;
					case "mouseup":
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					case "mouseout":
					case "pointerout":
					case "MSPointerOut":
						if ("stepped" === i.type) return;
						c = !1, i.dir && l("off", r);
						break;
					case "click":
						if ("stepped" !== i.type || o.tweenRunning) return;
						l("on", r)
				}
			}

			function l(e, o) {
				i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o)
			}
		})
	}, q = function () {
		var t = e(this),
			o = t.data(a),
			n = o.opt,
			i = o.sequential,
			r = a + "_" + o.idx,
			l = e("#mCSB_" + o.idx),
			s = e("#mCSB_" + o.idx + "_container"),
			c = s.parent(),
			d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
			u = s.find("iframe"),
			f = ["blur." + r + " keydown." + r + " keyup." + r];

		function h(a) {
			switch (a.type) {
				case "blur":
					o.tweenRunning && i.dir && m("off", null);
					break;
				case "keydown":
				case "keyup":
					var r = a.keyCode ? a.keyCode : a.which,
						l = "on";
					if ("x" !== n.axis && (38 === r || 40 === r) || "y" !== n.axis && (37 === r || 39 === r)) {
						if ((38 === r || 40 === r) && !o.overflowed[0] || (37 === r || 39 === r) && !o.overflowed[1]) return;
						"keyup" === a.type && (l = "off"), e(document.activeElement).is(d) || (a.preventDefault(), a.stopImmediatePropagation(), m(l, r))
					} else if (33 === r || 34 === r) {
						if ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" === a.type) {
							V(t);
							var u = 34 === r ? -1 : 1;
							if ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
								h = Math.abs(s[0].offsetLeft) - u * (.9 * c.width());
							else var f = "y",
								h = Math.abs(s[0].offsetTop) - u * (.9 * c.height());
							Q(t, h.toString(), {
								dir: f,
								scrollEasing: "mcsEaseInOut"
							})
						}
					} else if ((35 === r || 36 === r) && !e(document.activeElement).is(d) && ((o.overflowed[0] || o.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" === a.type)) {
						if ("x" === n.axis || "yx" === n.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
							h = 35 === r ? Math.abs(c.width() - s.outerWidth(!1)) : 0;
						else var f = "y",
							h = 35 === r ? Math.abs(c.height() - s.outerHeight(!1)) : 0;
						Q(t, h.toString(), {
							dir: f,
							scrollEasing: "mcsEaseInOut"
						})
					}
			}

			function m(e, a) {
				i.type = n.keyboard.scrollType, i.scrollAmount = n.keyboard.scrollAmount, "stepped" === i.type && o.tweenRunning || j(t, e, a)
			}
		}
		u.length && u.each(function () {
			e(this).bind("load", function () {
				A(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function (e) {
					h(e)
				})
			})
		}), l.attr("tabindex", "0").bind(f[0], function (e) {
			h(e)
		})
	}, j = function (t, o, n, i, r) {
		var l = t.data(a),
			s = l.opt,
			c = l.sequential,
			u = e("#mCSB_" + l.idx + "_container"),
			f = "stepped" === c.type,
			h = s.scrollInertia < 26 ? 26 : s.scrollInertia,
			m = s.scrollInertia < 1 ? 17 : s.scrollInertia;
		switch (o) {
			case "on":
				if (c.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], V(t), te(n) && "stepped" === c.type) return;
				p(f);
				break;
			case "off":
				clearTimeout(c.step), Z(c, "step"), V(t), (f || l.tweenRunning && c.dir) && p(!0)
		}

		function p(e) {
			s.snapAmount && (c.scrollAmount = s.snapAmount instanceof Array ? "x" === c.dir[0] ? s.snapAmount[1] : s.snapAmount[0] : s.snapAmount);
			var o = "stepped" !== c.type,
				a = r || (e ? o ? h / 1.5 : m : 1e3 / 60),
				n = e ? o ? 7.5 : 40 : 2.5,
				d = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
				f = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
				g = "x" === c.dir[0] ? d[1] + c.dir[1] * (f[1] * n) : d[0] + c.dir[1] * (f[0] * n),
				v = "x" === c.dir[0] ? d[1] + c.dir[1] * parseInt(c.scrollAmount) : d[0] + c.dir[1] * parseInt(c.scrollAmount),
				x = "auto" !== c.scrollAmount ? v : g,
				_ = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
				w = !!e;
			e && a < 17 && (x = "x" === c.dir[0] ? d[1] : d[0]), Q(t, x.toString(), {
				dir: c.dir[0],
				scrollEasing: _,
				dur: a,
				onComplete: w
			}), e ? c.dir = !1 : (clearTimeout(c.step), c.step = setTimeout(function () {
				p()
			}, a))
		}
	}, Y = function (t) {
		var o = e(this).data(a).opt,
			n = [];
		return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
	}, X = function (t, o) {
		if (null != t && void 0 !== t) {
			var n = e(this),
				i = n.data(a),
				r = i.opt,
				l = e("#mCSB_" + i.idx + "_container"),
				s = l.parent(),
				c = typeof t;
			o || (o = "x" === r.axis ? "x" : "y");
			var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
				f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
				h = "x" === o ? "left" : "top";
			switch (c) {
				case "function":
					return t();
				case "object":
					var m = t.jquery ? t : e(t);
					if (!m.length) return;
					return "x" === o ? oe(m)[1] : oe(m)[0];
				case "string":
				case "number":
					if (te(t)) return Math.abs(t);
					if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
					if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
					if (-1 !== t.indexOf("+=")) {
						var p = f + parseInt(t.split("+=")[1]);
						return p >= 0 ? 0 : Math.abs(p)
					}
					if (-1 !== t.indexOf("px") && te(t.split("px")[0])) return Math.abs(t.split("px")[0]);
					if ("top" === t || "left" === t) return 0;
					if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
					if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
					if ("first" === t || "last" === t) {
						var m = l.find(":" + t);
						return "x" === o ? oe(m)[1] : oe(m)[0]
					}
					return e(t).length ? "x" === o ? oe(e(t))[1] : oe(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]))
			}
		}
	}, N = function (t) {
		var o = e(this),
			n = o.data(a),
			i = n.opt,
			r = e("#mCSB_" + n.idx + "_container");
		if (t) return clearTimeout(r[0].autoUpdate), void Z(r[0], "autoUpdate");

		function l(e) {
			clearTimeout(r[0].autoUpdate), u.update.call(null, o[0], e)
		}! function t() {
			clearTimeout(r[0].autoUpdate), 0 !== o.parents("html").length ? r[0].autoUpdate = setTimeout(function () {
				return i.advanced.updateOnSelectorChange && (n.poll.change.n = function () {
					!0 === i.advanced.updateOnSelectorChange && (i.advanced.updateOnSelectorChange = "*");
					var e = 0,
						t = r.find(i.advanced.updateOnSelectorChange);
					return i.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
						e += this.offsetHeight + this.offsetWidth
					}), e
				}(), n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n, void l(3)) : i.advanced.updateOnContentResize && (n.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + r[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth, n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n, void l(1)) : !i.advanced.updateOnImageLoad || "auto" === i.advanced.updateOnImageLoad && "y" === i.axis || (n.poll.img.n = r.find("img").length, n.poll.img.n === n.poll.img.o) ? void((i.advanced.updateOnSelectorChange || i.advanced.updateOnContentResize || i.advanced.updateOnImageLoad) && t()) : (n.poll.img.o = n.poll.img.n, void r.find("img").each(function () {
					! function (t) {
						if (e(t).hasClass(d[2])) l();
						else {
							var o, a, n = new Image;
							n.onload = (o = n, a = function () {
								this.onload = null, e(t).addClass(d[2]), l(2)
							}, function () {
								return a.apply(o, arguments)
							}), n.src = t.src
						}
					}(this)
				}))
			}, i.advanced.autoUpdateTimeout) : o = null
		}()
	}, V = function (t) {
		var o = t.data(a),
			n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
		n.each(function () {
			K.call(this)
		})
	}, Q = function (t, o, n) {
		var i = t.data(a),
			r = i.opt,
			l = {
				trigger: "internal",
				dir: "y",
				scrollEasing: "mcsEaseOut",
				drag: !1,
				dur: r.scrollInertia,
				overwrite: "all",
				callbacks: !0,
				onStart: !0,
				onUpdate: !0,
				onComplete: !0
			},
			n = e.extend(l, n),
			s = [n.dur, n.drag ? 0 : n.dur],
			c = e("#mCSB_" + i.idx),
			d = e("#mCSB_" + i.idx + "_container"),
			u = d.parent(),
			f = r.callbacks.onTotalScrollOffset ? Y.call(t, r.callbacks.onTotalScrollOffset) : [0, 0],
			h = r.callbacks.onTotalScrollBackOffset ? Y.call(t, r.callbacks.onTotalScrollBackOffset) : [0, 0];
		if (i.trigger = n.trigger, 0 === u.scrollTop() && 0 === u.scrollLeft() || (e(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), u.scrollTop(0).scrollLeft(0)), "_resetY" !== o || i.contentReset.y || (M("onOverflowYNone") && r.callbacks.onOverflowYNone.call(t[0]), i.contentReset.y = 1), "_resetX" !== o || i.contentReset.x || (M("onOverflowXNone") && r.callbacks.onOverflowXNone.call(t[0]), i.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
			if (!i.contentReset.y && t[0].mcs || !i.overflowed[0] || (M("onOverflowY") && r.callbacks.onOverflowY.call(t[0]), i.contentReset.x = null), !i.contentReset.x && t[0].mcs || !i.overflowed[1] || (M("onOverflowX") && r.callbacks.onOverflowX.call(t[0]), i.contentReset.x = null), r.snapAmount) {
				var m = r.snapAmount instanceof Array ? "x" === n.dir ? r.snapAmount[1] : r.snapAmount[0] : r.snapAmount;
				p = o, g = m, v = r.snapOffset, o = Math.round(p / g) * g - v
			}
			var p, g, v;
			switch (n.dir) {
				case "x":
					var x = e("#mCSB_" + i.idx + "_dragger_horizontal"),
						_ = "left",
						w = d[0].offsetLeft,
						S = [c.width() - d.outerWidth(!1), x.parent().width() - x.width()],
						b = [o, 0 === o ? 0 : o / i.scrollRatio.x],
						y = f[1],
						B = h[1],
						T = y > 0 ? y / i.scrollRatio.x : 0,
						k = B > 0 ? B / i.scrollRatio.x : 0;
					break;
				case "y":
					var x = e("#mCSB_" + i.idx + "_dragger_vertical"),
						_ = "top",
						w = d[0].offsetTop,
						S = [c.height() - d.outerHeight(!1), x.parent().height() - x.height()],
						b = [o, 0 === o ? 0 : o / i.scrollRatio.y],
						y = f[0],
						B = h[0],
						T = y > 0 ? y / i.scrollRatio.y : 0,
						k = B > 0 ? B / i.scrollRatio.y : 0
			}
			b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (O(), M("onInit") && r.callbacks.onInit.call(t[0])), clearTimeout(d[0].onCompleteTimeout), G(x[0], _, Math.round(b[1]), s[1], n.scrollEasing), !i.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || G(d[0], _, Math.round(b[0]), s[0], n.scrollEasing, n.overwrite, {
				onStart: function () {
					n.callbacks && n.onStart && !i.tweenRunning && (M("onScrollStart") && (O(), r.callbacks.onScrollStart.call(t[0])), i.tweenRunning = !0, C(x), i.cbOffsets = [r.callbacks.alwaysTriggerOffsets || w >= S[0] + y, r.callbacks.alwaysTriggerOffsets || w <= -B])
				},
				onUpdate: function () {
					n.callbacks && n.onUpdate && M("whileScrolling") && (O(), r.callbacks.whileScrolling.call(t[0]))
				},
				onComplete: function () {
					if (n.callbacks && n.onComplete) {
						"yx" === r.axis && clearTimeout(d[0].onCompleteTimeout);
						var e = d[0].idleTimer || 0;
						d[0].onCompleteTimeout = setTimeout(function () {
							M("onScroll") && (O(), r.callbacks.onScroll.call(t[0])), M("onTotalScroll") && b[1] >= S[1] - T && i.cbOffsets[0] && (O(), r.callbacks.onTotalScroll.call(t[0])), M("onTotalScrollBack") && b[1] <= k && i.cbOffsets[1] && (O(), r.callbacks.onTotalScrollBack.call(t[0])), i.tweenRunning = !1, d[0].idleTimer = 0, C(x, "hide")
						}, e)
					}
				}
			})
		}

		function M(e) {
			return i && r.callbacks[e] && "function" == typeof r.callbacks[e]
		}

		function O() {
			var e = [d[0].offsetTop, d[0].offsetLeft],
				o = [x[0].offsetTop, x[0].offsetLeft],
				a = [d.outerHeight(!1), d.outerWidth(!1)],
				i = [c.height(), c.width()];
			t[0].mcs = {
				content: d,
				top: e[0],
				left: e[1],
				draggerTop: o[0],
				draggerLeft: o[1],
				topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
				leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
				direction: n.dir
			}
		}
	}, G = function (e, t, o, a, n, i, r) {
		e._mTween || (e._mTween = {
			top: {},
			left: {}
		});
		var l, s, r = r || {},
			c = r.onStart || function () {},
			d = r.onUpdate || function () {},
			u = r.onComplete || function () {},
			f = J(),
			h = 0,
			m = e.offsetTop,
			p = e.style,
			g = e._mTween[t];
		"left" === t && (m = e.offsetLeft);
		var v = o - m;

		function x() {
			g.stop || (h || c.call(), h = J() - f, _(), h >= g.time && (g.time = h > g.time ? h + l - (h - g.time) : h + l - 1, g.time < h + 1 && (g.time = h + 1)), g.time < a ? g.id = s(x) : u.call())
		}

		function _() {
			a > 0 ? (g.currVal = function (e, t, o, a, n) {
				switch (n) {
					case "linear":
					case "mcsLinear":
						return o * e / a + t;
					case "mcsLinearOut":
						return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
					case "easeInOutSmooth":
						return (e /= a / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
					case "easeInOutStrong":
						return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
					case "easeInOut":
					case "mcsEaseInOut":
						return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
					case "easeOutSmooth":
						return e /= a, -o * (--e * e * e * e - 1) + t;
					case "easeOutStrong":
						return o * (1 - Math.pow(2, -10 * e / a)) + t;
					case "easeOut":
					case "mcsEaseOut":
					default:
						var i = (e /= a) * e,
							r = i * e;
						return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
				}
			}(g.time, m, v, a, n), p[t] = Math.round(g.currVal) + "px") : p[t] = o + "px", d.call()
		}
		g.stop = 0, "none" !== i && null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id), g.id = null), l = 1e3 / 60, g.time = h + l, s = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
			return _(), setTimeout(e, .01)
		}, g.id = s(x)
	}, J = function () {
		return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
	}, K = function () {
		var e = this;
		e._mTween || (e._mTween = {
			top: {},
			left: {}
		});
		for (var t = ["top", "left"], o = 0; o < t.length; o++) {
			var a = t[o];
			e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
		}
	}, Z = function (e, t) {
		try {
			delete e[t]
		} catch (o) {
			e[t] = null
		}
	}, $ = function (e) {
		return !(e.which && 1 !== e.which)
	}, ee = function (e) {
		var t = e.originalEvent.pointerType;
		return !(t && "touch" !== t && 2 !== t)
	}, te = function (e) {
		return !isNaN(parseFloat(e)) && isFinite(e)
	}, oe = function (e) {
		var t = e.parents(".mCSB_container");
		return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
	}, ae = function () {
		var e = function () {
			var e = ["webkit", "moz", "ms", "o"];
			if ("hidden" in document) return "hidden";
			for (var t = 0; t < e.length; t++)
				if (e[t] + "Hidden" in document) return e[t] + "Hidden";
			return null
		}();
		return !!e && document[e]
	}, e.fn[o] = function (t) {
		return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
	}, e[o] = function (t) {
		return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
	}, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
		e(n)[o](), e.extend(e.expr[":"], {
			mcsInView: e.expr[":"].mcsInView || function (t) {
				var o, a, n = e(t),
					i = n.parents(".mCSB_container");
				if (i.length) return o = i.parent(), (a = [i[0].offsetTop, i[0].offsetLeft])[0] + oe(n)[0] >= 0 && a[0] + oe(n)[0] < o.height() - n.outerHeight(!1) && a[1] + oe(n)[1] >= 0 && a[1] + oe(n)[1] < o.width() - n.outerWidth(!1)
			},
			mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
				var n, i, r, l, s = e(t),
					c = s.parents(".mCSB_container"),
					d = "exact" === a[3] ? [
						[1, 0],
						[1, 0]
					] : [
						[.9, .1],
						[.6, .4]
					];
				if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + oe(s)[0], c[0].offsetLeft + oe(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], r[0] - i[0] * (l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]])[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
			},
			mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
				var o = e(t).data(a);
				if (o) return o.overflowed[0] || o.overflowed[1]
			}
		})
	})
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:110:"/bitrix/templates/aspro_next/components/aspro/com.banners.next/top_slider_banners/script.min.js?15844367021142";s:6:"source";s:91:"/bitrix/templates/aspro_next/components/aspro/com.banners.next/top_slider_banners/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function checkNavColor(e) {
	"dark" == e.find(".flex-active-slide").data("nav_color") ? e.find(".flex-control-nav").addClass("flex-dark") : e.find(".flex-control-nav").removeClass("flex-dark");
	var a = {
		slider: e
	};
	BX.onCustomEvent("onSlide", [a])
}
$(document).ready(function () {
	if ($(".top_slider_wrapp .flexslider").length) {
		var e = {
			controlNav: !0,
			animationLoop: !0,
			pauseOnHover: !0
		};
		if (void 0 !== arNextOptions.THEME) {
			var a = Math.abs(parseInt(arNextOptions.THEME.BIGBANNER_SLIDESSHOWSPEED)),
				o = Math.abs(parseInt(arNextOptions.THEME.BIGBANNER_ANIMATIONSPEED));
			e.slideshow = !(!a || !arNextOptions.THEME.BIGBANNER_ANIMATIONTYPE.length), e.animation = "FADE" === arNextOptions.THEME.BIGBANNER_ANIMATIONTYPE ? "fade" : "slide", 0 <= o && (e.animationSpeed = o), 0 <= a && (e.slideshowSpeed = a), "FADE" !== arNextOptions.THEME.BIGBANNER_ANIMATIONTYPE && (e.direction = "SLIDE_VERTICAL" === arNextOptions.THEME.BIGBANNER_ANIMATIONTYPE ? "vertical" : "horizontal"), e.start = function (e) {
				checkNavColor(e), e.count <= 1 && e.find(".flex-direction-nav li").addClass("flex-disabled"), $(e).find(".flex-control-nav").css("opacity", 1)
			}, e.after = function (e) {
				checkNavColor(e)
			}
		}
		$(".top_slider_wrapp .flexslider").flexslider(e)
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/templates/aspro_next/components/aspro/tabs.next/main/script.min.js?15844367131664";s:6:"source";s:70:"/bitrix/templates/aspro_next/components/aspro/tabs.next/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
	$(".catalog_block .catalog_item_wrapp .catalog_item .item_info:visible .item-title").sliceHeight({
		item: ".catalog_item",
		mobile: !0
	}), $(".catalog_block .catalog_item_wrapp .catalog_item .item_info:visible").sliceHeight({
		item: ".catalog_item",
		mobile: !0
	}), $(".catalog_block .catalog_item_wrapp:visible").sliceHeight({
		classNull: ".footer_button",
		item: ".catalog_item",
		mobile: !0
	}), SelectOfferProp = function () {
		var a = $(this),
			e = {},
			t = {},
			c = parseUrlQuery(),
			l = "",
			o = a.closest(".bx_catalog_item_scu");
		e = {
			PARAMS: a.closest(".js_wrapper_items").data("params"),
			ID: o.data("offer_id"),
			SITE_ID: o.data("site_id"),
			LINK_ID: o.data("id") + "_" + a.closest(".tab").data("code"),
			IBLOCK_ID: o.data("offer_iblockid"),
			PROPERTY_ID: o.data("propertyid"),
			DEPTH: a.closest(".item_wrapper").index(),
			VALUE: a.data("onevalue"),
			CLASS: "inner_content",
			PICTURE: a.closest(".catalog_item_wrapp").find(".thumb img").attr("src"),
			ARTICLE_NAME: a.closest(".catalog_item_wrapp").find(".article_block").data("name"),
			ARTICLE_VALUE: a.closest(".catalog_item_wrapp").find(".article_block").data("value")
		}, "clear_cache" in c && "Y" == c.clear_cache && (l += "?clear_cache=Y");
		for (i = 0; i < e.DEPTH + 1; i++) strName = "PROP_" + o.find(".item_wrapper:eq(" + i + ") > div").data("id"), t[strName] = o.find(".item_wrapper:eq(" + i + ") li.item.active").data("onevalue"), e[strName] = o.find(".item_wrapper:eq(" + i + ") li.item.active").data("onevalue");
		a.siblings().removeClass("active"), a.addClass("active"), $.ajax({
			url: arNextOptions.SITE_DIR + "ajax/js_item_detail.php" + l,
			type: "POST",
			data: e
		}).success(function (a) {
			var e = BX.processHTML(a);
			BX.ajax.processScripts(e.SCRIPT)
		})
	}, $(document).on("click", ".bx_catalog_item_scu li.item", SelectOfferProp)
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/aspro_next/components/bitrix/news.list/front_akc/script.min.js?1570019390183";s:6:"source";s:76:"/bitrix/templates/aspro_next/components/bitrix/news.list/front_akc/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
BX.addCustomEvent("onSlideInit", function (e) {
	try {
		if (ignoreResize.push(!0), e) {
			var i = e.slider;
			i && $(".news_akc_block .items .item").sliceHeight()
		}
	} catch (n) {} finally {
		ignoreResize.pop()
	}
});
/* End */
;; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/templates/aspro_next/components/bitrix/menu/left_front_catalog/script.js?157001939069";s:6:"source";s:80:"/bitrix/templates/aspro_next/components/bitrix/menu/left_front_catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
	CheckTopMenuFullCatalogSubmenu();
})
/* End */
;; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js?1570019390186";s:6:"source";s:76:"/bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
	if (typeof obDataSubscribe !== "undefined") {
		$(".s_" + obDataSubscribe + " form.sform").validate({
			rules: {
				"sf_EMAIL": {
					email: true
				}
			}
		});
	}
})
/* End */
;; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15808908966443";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t) {
	var e = this;
	this.arParams = {
		AJAX_PAGE: t.AJAX_PAGE,
		CONTAINER_ID: t.CONTAINER_ID,
		INPUT_ID: t.INPUT_ID,
		MIN_QUERY_LEN: parseInt(t.MIN_QUERY_LEN)
	};
	if (t.WAIT_IMAGE) this.arParams.WAIT_IMAGE = t.WAIT_IMAGE;
	if (t.MIN_QUERY_LEN <= 0) t.MIN_QUERY_LEN = 1;
	this.cache = [];
	this.cache_key = null;
	this.startText = "";
	this.running = false;
	this.runningCall = false;
	this.currentRow = -1;
	this.RESULT = null;
	this.CONTAINER = null;
	this.INPUT = null;
	this.WAIT = null;
	this.ShowResult = function (t) {
		if (BX.type.isString(t)) {
			e.RESULT.innerHTML = t
		}
		e.RESULT.style.display = e.RESULT.innerHTML !== "" ? "block" : "none";
		var s = e.adjustResultNode();
		var i;
		var n;
		var l = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, true);
		if (l) {
			n = BX.findChild(l, {
				tag: "th"
			}, true)
		}
		if (n) {
			var r = BX.pos(l);
			r.width = r.right - r.left;
			var a = BX.pos(n);
			a.width = a.right - a.left;
			n.style.width = a.width + "px";
			e.RESULT.style.width = s.width + a.width + "px";
			e.RESULT.style.left = s.left - a.width - 1 + "px";
			if (r.width - a.width > s.width) e.RESULT.style.width = s.width + a.width - 1 + "px";
			r = BX.pos(l);
			i = BX.pos(e.RESULT);
			if (i.right > r.right) {
				e.RESULT.style.width = r.right - r.left + "px"
			}
		}
		var o;
		if (l) o = BX.findChild(e.RESULT, {
			class: "title-search-fader"
		}, true);
		if (o && n) {
			i = BX.pos(e.RESULT);
			o.style.left = i.right - i.left - 18 + "px";
			o.style.width = 18 + "px";
			o.style.top = 0 + "px";
			o.style.height = i.bottom - i.top + "px";
			o.style.display = "block"
		}
	};
	this.onKeyPress = function (t) {
		var s = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, true);
		if (!s) return false;
		var i;
		var n = s.rows.length;
		switch (t) {
			case 27:
				e.RESULT.style.display = "none";
				e.currentRow = -1;
				e.UnSelectAll();
				return true;
			case 40:
				if (e.RESULT.style.display == "none") e.RESULT.style.display = "block";
				var l = -1;
				for (i = 0; i < n; i++) {
					if (!BX.findChild(s.rows[i], {
							class: "title-search-separator"
						}, true)) {
						if (l == -1) l = i;
						if (e.currentRow < i) {
							e.currentRow = i;
							break
						} else if (s.rows[i].className == "title-search-selected") {
							s.rows[i].className = ""
						}
					}
				}
				if (i == n && e.currentRow != i) e.currentRow = l;
				s.rows[e.currentRow].className = "title-search-selected";
				return true;
			case 38:
				if (e.RESULT.style.display == "none") e.RESULT.style.display = "block";
				var r = -1;
				for (i = n - 1; i >= 0; i--) {
					if (!BX.findChild(s.rows[i], {
							class: "title-search-separator"
						}, true)) {
						if (r == -1) r = i;
						if (e.currentRow > i) {
							e.currentRow = i;
							break
						} else if (s.rows[i].className == "title-search-selected") {
							s.rows[i].className = ""
						}
					}
				}
				if (i < 0 && e.currentRow != i) e.currentRow = r;
				s.rows[e.currentRow].className = "title-search-selected";
				return true;
			case 13:
				if (e.RESULT.style.display == "block") {
					for (i = 0; i < n; i++) {
						if (e.currentRow == i) {
							if (!BX.findChild(s.rows[i], {
									class: "title-search-separator"
								}, true)) {
								var a = BX.findChild(s.rows[i], {
									tag: "a"
								}, true);
								if (a) {
									window.location = a.href;
									return true
								}
							}
						}
					}
				}
				return false
		}
		return false
	};
	this.onTimeout = function () {
		e.onChange(function () {
			setTimeout(e.onTimeout, 500)
		})
	};
	this.onChange = function (t) {
		if (e.running) {
			e.runningCall = true;
			return
		}
		e.running = true;
		if (e.INPUT.value != e.oldValue && e.INPUT.value != e.startText) {
			e.oldValue = e.INPUT.value;
			if (e.INPUT.value.length >= e.arParams.MIN_QUERY_LEN) {
				e.cache_key = e.arParams.INPUT_ID + "|" + e.INPUT.value;
				if (e.cache[e.cache_key] == null) {
					if (e.WAIT) {
						var s = BX.pos(e.INPUT);
						var i = s.bottom - s.top - 2;
						e.WAIT.style.top = s.top + 1 + "px";
						e.WAIT.style.height = i + "px";
						e.WAIT.style.width = i + "px";
						e.WAIT.style.left = s.right - i + 2 + "px";
						e.WAIT.style.display = "block"
					}
					BX.ajax.post(e.arParams.AJAX_PAGE, {
						ajax_call: "y",
						INPUT_ID: e.arParams.INPUT_ID,
						q: e.INPUT.value,
						l: e.arParams.MIN_QUERY_LEN
					}, function (s) {
						e.cache[e.cache_key] = s;
						e.ShowResult(s);
						e.currentRow = -1;
						e.EnableMouseEvents();
						if (e.WAIT) e.WAIT.style.display = "none";
						if (!!t) t();
						e.running = false;
						if (e.runningCall) {
							e.runningCall = false;
							e.onChange()
						}
					});
					return
				} else {
					e.ShowResult(e.cache[e.cache_key]);
					e.currentRow = -1;
					e.EnableMouseEvents()
				}
			} else {
				e.RESULT.style.display = "none";
				e.currentRow = -1;
				e.UnSelectAll()
			}
		}
		if (!!t) t();
		e.running = false
	};
	this.onScroll = function () {
		if (BX.type.isElementNode(e.RESULT) && e.RESULT.style.display !== "none" && e.RESULT.innerHTML !== "") {
			e.adjustResultNode()
		}
	};
	this.UnSelectAll = function () {
		var t = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, true);
		if (t) {
			var s = t.rows.length;
			for (var i = 0; i < s; i++) t.rows[i].className = ""
		}
	};
	this.EnableMouseEvents = function () {
		var t = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, true);
		if (t) {
			var s = t.rows.length;
			for (var i = 0; i < s; i++)
				if (!BX.findChild(t.rows[i], {
						class: "title-search-separator"
					}, true)) {
					t.rows[i].id = "row_" + i;
					t.rows[i].onmouseover = function (t) {
						if (e.currentRow != this.id.substr(4)) {
							e.UnSelectAll();
							this.className = "title-search-selected";
							e.currentRow = this.id.substr(4)
						}
					};
					t.rows[i].onmouseout = function (t) {
						this.className = "";
						e.currentRow = -1
					}
				}
		}
	};
	this.onFocusLost = function (t) {
		setTimeout(function () {
			e.RESULT.style.display = "none"
		}, 250)
	};
	this.onFocusGain = function () {
		if (e.RESULT.innerHTML.length) e.ShowResult()
	};
	this.onKeyDown = function (t) {
		if (!t) t = window.event;
		if (e.RESULT.style.display == "block") {
			if (e.onKeyPress(t.keyCode)) return BX.PreventDefault(t)
		}
	};
	this.adjustResultNode = function () {
		if (!(BX.type.isElementNode(e.RESULT) && BX.type.isElementNode(e.CONTAINER))) {
			return {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				width: 0,
				height: 0
			}
		}
		var t = BX.pos(e.CONTAINER);
		e.RESULT.style.position = "absolute";
		e.RESULT.style.top = t.bottom + 2 + "px";
		e.RESULT.style.left = t.left + "px";
		e.RESULT.style.width = t.width + "px";
		return t
	};
	this._onContainerLayoutChange = function () {
		if (BX.type.isElementNode(e.RESULT) && e.RESULT.style.display !== "none" && e.RESULT.innerHTML !== "") {
			e.adjustResultNode()
		}
	};
	this.Init = function () {
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
		BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);
		this.RESULT = document.body.appendChild(document.createElement("DIV"));
		this.RESULT.className = "title-search-result";
		this.INPUT = document.getElementById(this.arParams.INPUT_ID);
		this.startText = this.oldValue = this.INPUT.value;
		BX.bind(this.INPUT, "focus", function () {
			e.onFocusGain()
		});
		BX.bind(this.INPUT, "blur", function () {
			e.onFocusLost()
		});
		this.INPUT.onkeydown = this.onKeyDown;
		if (this.arParams.WAIT_IMAGE) {
			this.WAIT = document.body.appendChild(document.createElement("DIV"));
			this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
			if (!BX.browser.IsIE()) this.WAIT.style.backgroundRepeat = "none";
			this.WAIT.style.display = "none";
			this.WAIT.style.position = "absolute";
			this.WAIT.style.zIndex = "1100"
		}
		BX.bind(this.INPUT, "bxchange", function () {
			e.onChange()
		});
		var t = BX.findParent(this.CONTAINER, BX.is_fixed);
		if (BX.type.isElementNode(t)) {
			BX.bind(window, "scroll", BX.throttle(this.onScroll, 100, this))
		}
	};
	BX.ready(function () {
		e.Init(t)
	})
}
/* End */
;; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.min.js?15844366716349";s:6:"source";s:75:"/bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCTitleSearch2(t) {
	var e = this;
	this.arParams = {
		AJAX_PAGE: t.AJAX_PAGE,
		CONTAINER_ID: t.CONTAINER_ID,
		INPUT_ID: t.INPUT_ID,
		INPUT_ID_TMP: t.INPUT_ID_TMP,
		MIN_QUERY_LEN: parseInt(t.MIN_QUERY_LEN)
	}, t.WAIT_IMAGE && (this.arParams.WAIT_IMAGE = t.WAIT_IMAGE), t.MIN_QUERY_LEN <= 0 && (t.MIN_QUERY_LEN = 1), this.cache = [], this.cache_key = null, this.startText = "", this.running = !1, this.needRunAgain = !1, this.currentRow = -1, this.RESULT = null, this.CONTAINER = null, this.INPUT = null, this.WAIT = null, this.ShowResult = function (t) {
		BX.type.isString(t) && (e.RESULT.innerHTML = t), e.RESULT.style.display = "" !== e.RESULT.innerHTML ? "block" : "none";
		var s, n, i, a = e.adjustResultNode(),
			l = BX.findChild(e.RESULT, {
				tag: "table",
				class: "title-search-result"
			}, !0);
		if (l && (n = BX.findChild(l, {
				tag: "th"
			}, !0)), n) {
			var r = BX.pos(l);
			r.width = r.right - r.left;
			var o = BX.pos(n);
			o.width = o.right - o.left, n.style.width = o.width + "px", e.RESULT.style.width = a.width + o.width + "px", e.RESULT.style.left = a.left - o.width - 1 + "px", r.width - o.width > a.width && (e.RESULT.style.width = a.width + o.width - 1 + "px"), r = BX.pos(l), (s = BX.pos(e.RESULT)).right > r.right && (e.RESULT.style.width = r.right - r.left + "px")
		}
		l && (i = BX.findChild(e.RESULT, {
			class: "title-search-fader"
		}, !0)), i && n && (s = BX.pos(e.RESULT), i.style.left = s.right - s.left - 18 + "px", i.style.width = "18px", i.style.top = "0px", i.style.height = s.bottom - s.top + "px", i.style.display = "block")
	}, this.onKeyPress = function (t) {
		var s, n = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, !0);
		if (!n) return !1;
		var i = n.rows.length;
		switch (t) {
			case 27:
				return e.RESULT.style.display = "none", e.currentRow = -1, e.UnSelectAll(), !0;
			case 40:
				"none" == e.RESULT.style.display && (e.RESULT.style.display = "block");
				var a = -1;
				for (s = 0; s < i; s++)
					if (!BX.findChild(n.rows[s], {
							class: "title-search-separator"
						}, !0)) {
						if (-1 == a && (a = s), e.currentRow < s) {
							e.currentRow = s;
							break
						}
						"title-search-selected" == n.rows[s].className && (n.rows[s].className = "")
					} return s == i && e.currentRow != s && (e.currentRow = a), n.rows[e.currentRow].className = "title-search-selected", !0;
			case 38:
				"none" == e.RESULT.style.display && (e.RESULT.style.display = "block");
				var l = -1;
				for (s = i - 1; s >= 0; s--)
					if (!BX.findChild(n.rows[s], {
							class: "title-search-separator"
						}, !0)) {
						if (-1 == l && (l = s), e.currentRow > s) {
							e.currentRow = s;
							break
						}
						"title-search-selected" == n.rows[s].className && (n.rows[s].className = "")
					} return s < 0 && e.currentRow != s && (e.currentRow = l), n.rows[e.currentRow].className = "title-search-selected", !0;
			case 13:
				if ("block" == e.RESULT.style.display)
					for (s = 0; s < i; s++)
						if (e.currentRow == s && !BX.findChild(n.rows[s], {
								class: "title-search-separator"
							}, !0)) {
							var r = BX.findChild(n.rows[s], {
								tag: "a"
							}, !0);
							if (r) return window.location = r.href, !0
						} return !1
		}
		return !1
	}, this.onTimeout = function () {
		e.onChange(function () {
			setTimeout(e.onTimeout, 500)
		})
	}, this.onChange = function (t) {
		if (e.running) e.needRunAgain = !0;
		else {
			if (e.running = !0, e.INPUT.value != e.oldValue && e.INPUT.value != e.startText)
				if (e.oldValue = e.INPUT.value, e.INPUT.value.length >= e.arParams.MIN_QUERY_LEN) {
					if (e.cache_key = e.arParams.INPUT_ID + "|" + e.INPUT.value, null == e.cache[e.cache_key]) {
						if (e.WAIT) {
							var s = BX.pos(e.INPUT),
								n = s.bottom - s.top - 2;
							e.WAIT.style.top = s.top + 1 + "px", e.WAIT.style.height = n + "px", e.WAIT.style.width = n + "px", e.WAIT.style.left = s.right - n + 2 + "px", e.WAIT.style.display = "block"
						}
						return void BX.ajax.post(e.arParams.AJAX_PAGE, {
							ajax_call: "y",
							INPUT_ID: e.arParams.INPUT_ID_TMP,
							q: e.INPUT.value,
							l: e.arParams.MIN_QUERY_LEN
						}, function (s) {
							e.cache[e.cache_key] = s, e.ShowResult(s), e.currentRow = -1, e.EnableMouseEvents(), e.WAIT && (e.WAIT.style.display = "none"), t && t(), e.running = !1, e.needRunAgain && (e.needRunAgain = !1, e.onChange(t))
						})
					}
					e.ShowResult(e.cache[e.cache_key]), e.currentRow = -1, e.EnableMouseEvents()
				} else e.RESULT.style.display = "none", e.currentRow = -1, e.UnSelectAll();
			t && t(), e.running = !1
		}
	}, this.UnSelectAll = function () {
		var t = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, !0);
		if (t)
			for (var s = t.rows.length, n = 0; n < s; n++) t.rows[n].className = ""
	}, this.EnableMouseEvents = function () {
		var t = BX.findChild(e.RESULT, {
			tag: "table",
			class: "title-search-result"
		}, !0);
		if (t)
			for (var s = t.rows.length, n = 0; n < s; n++) BX.findChild(t.rows[n], {
				class: "title-search-separator"
			}, !0) || (t.rows[n].id = "row_" + n, t.rows[n].onmouseover = function (t) {
				e.currentRow != this.id.substr(4) && (e.UnSelectAll(), this.className = "title-search-selected", e.currentRow = this.id.substr(4))
			}, t.rows[n].onmouseout = function (t) {
				this.className = "", e.currentRow = -1
			})
	}, this.onFocusLost = function (t) {
		setTimeout(function () {
			e.RESULT.style.display = "none"
		}, 300)
	}, this.onFocusGain = function () {
		e.RESULT.innerHTML.length && e.ShowResult()
	}, this.onKeyDown = function (t) {
		if (t || (t = window.event), "block" == e.RESULT.style.display && e.onKeyPress(t.keyCode)) return BX.PreventDefault(t)
	}, this.adjustResultNode = function () {
		var t, s, n = BX.findParent(e.CONTAINER, BX.is_fixed);
		return n ? (e.RESULT.style.position = "fixed", e.RESULT.style.zIndex = BX.style(n, "z-index") + 2, t = BX.pos(e.CONTAINER, !0)) : (e.RESULT.style.position = "absolute", t = BX.pos(e.CONTAINER)), s = BX.pos(e.INPUT), t.width = t.right - t.left, e.RESULT.style.top = t.bottom + 2 + "px", e.RESULT.style.left = s.left + "px", $(e.INPUT).closest(".inline-search-block.with-close").length ? e.RESULT.style.width = s.width + "px" : e.RESULT.style.width = t.width + "px", t
	}, this._onContainerLayoutChange = function () {
		"none" !== e.RESULT.style.display && "" !== e.RESULT.innerHTML && e.adjustResultNode()
	}, this.Init = function () {
		this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID), BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange), this.RESULT = document.body.appendChild(document.createElement("DIV")), this.RESULT.className = "title-search-result " + this.arParams.INPUT_ID, "title-search-input_fixed" != this.arParams.INPUT_ID && (this.RESULT.className += " " + arNextOptions.THEME.TYPE_SEARCH + "_type"), this.INPUT = document.getElementById(this.arParams.INPUT_ID), this.startText = this.oldValue = this.INPUT.value, BX.bind(this.INPUT, "focus", function () {
			e.onFocusGain()
		}), BX.bind(this.INPUT, "blur", function () {
			e.onFocusLost()
		}), BX.browser.IsSafari() || BX.browser.IsIE() ? this.INPUT.onkeydown = this.onKeyDown : this.INPUT.onkeypress = this.onKeyDown, this.arParams.WAIT_IMAGE && (this.WAIT = document.body.appendChild(document.createElement("DIV")), this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')", BX.browser.IsIE() || (this.WAIT.style.backgroundRepeat = "none"), this.WAIT.style.display = "none", this.WAIT.style.position = "absolute", this.WAIT.style.zIndex = "1100"), BX.bind(this.INPUT, "bxchange", function () {
			e.onChange()
		})
	}, BX.ready(function () {
		e.Init(t)
	})
}
/* End */
;; /* Start:"a:4:{s:4:"full";s:60:"/local/js/reaspekt/reaspekt.geobase/script.js?15810676884682";s:6:"source";s:45:"/local/js/reaspekt/reaspekt.geobase/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window, document, $, undefined) {
	"use strict";

	var paramsDefault = {
		height: "250",
		width: "500",
		ajax: {
			dataType: 'html',
			headers: {
				'X-reaspektPopupBox': true
			}
		},
		content: null,
		fixedPosition: false
	};
	var params = {
		htmlPopup: '<div class="ReaspektPopupOverlay"></div><div id="ReaspektPopupBody"><div class="ReaspektClosePosition"><div id="ReaspektCloseBtn"></div></div><div id="ReaspektPopupContainer">��������...</div></div>',
		objPopupIdBody: '#ReaspektPopupBody',
		objPopupIdOverlay: '.ReaspektPopupOverlay',
		objPopupIdCloseBtn: '#ReaspektCloseBtn',
		objPopupIdContainer: '#ReaspektPopupContainer',
		activeClassBodyReaspekt: 'activeClassBodyReaspekt'
	};
	var methods = {
		init: function (options) {


			return this.click(function (element) {
				var obClass = $(this);
				paramsDefault['href'] = obClass.data('reaspektmodalbox-href') || obClass.attr('href');

				var settings = $.extend($.ReaspektModalBox, paramsDefault, options);

				methods.addHtmlTemplate(settings);


				if (!settings.fixedPosition) {
					$(window).bind('resize.ReaspektPopupOverlay', $.proxy(methods.rePosition, this));
					methods.rePosition();
				}
			});
		},

		//��������� Div`s
		addHtmlTemplate: function (settings) {
			methods.closeReaspektPopup();
			$('body').append(params.htmlPopup);
			$('body').addClass(params.activeClassBodyReaspekt);
			methods.addContainerData(settings);
		},

		//Add data in popup html
		addContainerData: function (settings) {
			//Add event click close button
			$(params.objPopupIdCloseBtn).bind("click", function (e) {
				e.preventDefault();

				methods.closeReaspektPopup();
			});

			//Add event click overlay
			$(params.objPopupIdOverlay).bind("click", function (e) {
				e.preventDefault();

				methods.closeReaspektPopup();
			});

			methods._loadAjax(settings);
		},

		//Close popup
		closeReaspektPopup: function () {
			$(window).unbind('resize.ReaspektPopupOverlay');
			$('body').removeClass(params.activeClassBodyReaspekt);
			$(params.objPopupIdBody).remove();
			$(params.objPopupIdOverlay).remove();
		},

		rePosition: function () {

			$(params.objPopupIdBody).css("top", Math.max(0, (($(window).height() - $(params.objPopupIdBody).outerHeight()) / 2) + $(window).scrollTop()) + "px");

			$(params.objPopupIdBody).css("left", Math.max(0, (($(window).width() - $(params.objPopupIdBody).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
		},

		_loadAjax: function (settings) {
			if (settings.href) {
				$.ajax($.extend({}, settings.ajax, {
					url: settings.href,
					error: function (jqXHR, textStatus) {
						console.log(jqXHR);
						console.log(textStatus);
					},
					success: function (data, textStatus) {
						if (textStatus === 'success') {
							settings.content = data;

							methods._afterLoad(settings);
						}
					}
				}));
			} else {
				console.log('Error, not atribute href or data-reaspektmodalbox-href');
			}
		},

		_afterLoad: function (settings) {
			$(params.objPopupIdContainer).html(settings.content);

			methods.rePosition();
		}
	};

	$.fn.ReaspektModalBox = function (method) {

		// ������ ������ ������
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('����� � ������ ' + method + ' �� ���������� ��� jQuery.ReaspektModalBox');
		}
	};

})(window, document, jQuery);
/* End */
;; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/aspro_next/js/custom.js?1570019390100";s:6:"source";s:41:"/bitrix/templates/aspro_next/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/
/* End */
;; /* /bitrix/templates/aspro_next/js/jquery.actual.min.js?15700193901251*/ ; /* /bitrix/templates/aspro_next/vendor/js/jquery.bxslider.min.js?157001938923647*/ ; /* /bitrix/templates/aspro_next/js/jqModal.min.js?15700193902622*/ ; /* /bitrix/templates/aspro_next/vendor/js/bootstrap.js?157001938927908*/ ; /* /bitrix/templates/aspro_next/vendor/js/jquery.appear.js?15700193893188*/ ; /* /bitrix/templates/aspro_next/js/browser.min.js?1570019390662*/ ; /* /bitrix/templates/aspro_next/js/jquery.fancybox.min.js?157001939021526*/ ; /* /bitrix/templates/aspro_next/js/jquery.flexslider.min.js?157001939022406*/ ; /* /bitrix/templates/aspro_next/vendor/js/moment.min.js?157001938934436*/ ; /* /bitrix/templates/aspro_next/vendor/js/footable.min.js?157001938982382*/ ; /* /bitrix/templates/aspro_next/vendor/js/velocity/velocity.js?158443671344791*/ ; /* /bitrix/templates/aspro_next/vendor/js/velocity/velocity.ui.js?158443671313257*/ ; /* /bitrix/templates/aspro_next/vendor/js/lazysizes.min.js?15844366987057*/ ; /* /bitrix/templates/aspro_next/js/jquery.validate.min.js?157001939022257*/ ; /* /bitrix/templates/aspro_next/js/jquery.inputmask.bundle.min.js?157001939070933*/ ; /* /bitrix/templates/aspro_next/js/jquery.easing.1.3.min.js?15700193903338*/ ; /* /bitrix/templates/aspro_next/js/equalize.min.js?1570019390588*/ ; /* /bitrix/templates/aspro_next/js/jquery.alphanumeric.min.js?1570019390942*/ ; /* /bitrix/templates/aspro_next/js/jquery.cookie.min.js?15700193903066*/ ; /* /bitrix/templates/aspro_next/js/jquery.plugin.min.js?15700193903181*/ ; /* /bitrix/templates/aspro_next/js/jquery.countdown.min.js?157001939013137*/ ; /* /bitrix/templates/aspro_next/js/jquery.countdown-ru.min.js?15700193901011*/ ; /* /bitrix/templates/aspro_next/js/jquery.ikSelect.min.js?157001939017725*/ ; /* /bitrix/templates/aspro_next/js/jquery.mobile.custom.touch.min.js?15700193907784*/ ; /* /bitrix/templates/aspro_next/js/jquery.dotdotdot.min.js?15700193905908*/ ; /* /bitrix/templates/aspro_next/js/rating_likes.min.js?15700193907297*/ ; /* /bitrix/templates/aspro_next/js/video_banner.min.js?158443670217322*/ ; /* /bitrix/templates/aspro_next/js/main.min.js?1584436713155424*/ ; /* /bitrix/templates/aspro_next/js/jquery.mCustomScrollbar.min.js?158443666439873*/ ; /* /bitrix/templates/aspro_next/components/aspro/com.banners.next/top_slider_banners/script.min.js?15844367021142*/ ; /* /bitrix/templates/aspro_next/components/aspro/tabs.next/main/script.min.js?15844367131664*/ ; /* /bitrix/templates/aspro_next/components/bitrix/news.list/front_akc/script.min.js?1570019390183*/ ; /* /bitrix/templates/aspro_next/components/bitrix/menu/left_front_catalog/script.js?157001939069*/ ; /* /bitrix/templates/aspro_next/components/bitrix/subscribe.form/main/script.js?1570019390186*/ ; /* /bitrix/components/bitrix/search.title/script.min.js?15808908966443*/ ; /* /bitrix/templates/aspro_next/components/bitrix/search.title/fixed/script.min.js?15844366716349*/ ; /* /local/js/reaspekt/reaspekt.geobase/script.js?15810676884682*/ ; /* /bitrix/templates/aspro_next/js/custom.js?1570019390100*/

//# sourceMappingURL=template_ccf5be4452a0195592d0061ad2dd0769.map.js