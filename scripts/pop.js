// Function: Send message to content.js
const sendMessage = async (message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
};

// Function: Receive message from any where
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message);
});

document.getElementById("connectbtn").onclick = function () {
  sendMessage({ task: "AUTOMATE" });
};
