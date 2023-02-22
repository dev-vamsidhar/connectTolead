// Function: Send message to content.js
const sendMessage = async (message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
};

// Function: Receive message from any where
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.task == "INCREMENT") {
    document.getElementById("count").innerHTML = request.count;
  }
});

document.getElementById("connectbtn").onclick = function () {
  if (document.getElementById("connectbtn").innerText == "Connect") {
    sendMessage({ task: "AUTOMATE" });
    document.getElementById("connectbtn").innerText = "Stop";
  } else {
    sendMessage({ task: "STOP" });
    document.getElementById("connectbtn").innerText = "Completed";
  }
};
