const sendMessage = async (message) => {
  chrome.runtime.sendMessage(message);
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.task == "AUTOMATE") {
    automate();
  }
});
