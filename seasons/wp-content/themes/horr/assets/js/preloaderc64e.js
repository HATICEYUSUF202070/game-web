'use strict';

/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var _window = window,
  $ = _window.jQuery,
  localStorage = _window.localStorage,
  horrPreloaderData = _window.horrPreloaderData;
var $doc = $(document);
var $html = $('html');
var $wnd = $(window);
var MAX_TIME = 7000;
var disabled = false;

/*
 * Display Once option.
 */
if (horrPreloaderData.show_once) {
  // Disable preloaded if user already saw it.
  if (localStorage.getItem('horrPreloaderSeen')) {
    $html.addClass('horr-preloader-disabled');
    disabled = true;
  } else {
    localStorage.setItem('horrPreloaderSeen', new Date());
  }
}

/*
 * Hide preloader when page loaded.
 */
function initPreloader() {
  var $preloader = $('.horr-preloader');
  var alreadyClosed = false;
  function maybeClosePreloader() {
    if (alreadyClosed) {
      return;
    }
    alreadyClosed = true;
    $doc.trigger('hidePreloader.horr');
    setTimeout(function () {
      $preloader.addClass('horr-preloader-hide');
    }, 1200);
  }

  // Page loaded.
  $wnd.on('load', function () {
    maybeClosePreloader();
  });

  // If nothing loaded, we need to force hide preloader.
  setTimeout(function () {
    maybeClosePreloader();
  }, MAX_TIME);
}
if (!disabled) {
  // Check when preloader ready.
  if ($('.horr-preloader').length) {
    initPreloader();
  } else {
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        for (var j = 0; j < mutations[i].addedNodes.length; j += 1) {
          // We're iterating through _all_ the elements as the parser parses them,
          // deciding if they're the preloader.
          if (mutations[i].addedNodes[j].matches && mutations[i].addedNodes[j].matches('.horr-preloader')) {
            initPreloader();
            observer.disconnect();
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
}
/******/ })()
;