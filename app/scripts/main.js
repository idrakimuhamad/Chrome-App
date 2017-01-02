'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  var width = 1200;
  var height = 600;

  chrome.app.window.create('index.html', {
    id: 'main',
    innerBounds: {
      width: width,
      height: height
    }
  });
});
