'use strict';
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var webview = document.createElement('webview');
  webview.src = 'https://facebook.github.io';
  webview.style.width = '100%';
	webview.style.height = '100%';
  webview.setAttribute('frameborder', '0');
	webview.setAttribute('autosize', true);
  body.appendChild(webview);
}, false);
