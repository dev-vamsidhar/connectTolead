// This is service worker file to listen messages if it is not there messages will not be received
// when popup.js is inactive it will raise an error
chrome.runtime.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {});
