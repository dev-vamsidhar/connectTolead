var automate = async () => {
  const buttonSelector =
    "div > ul > li > div > div > div.entity-result__actions.entity-result__divider >div >button";
  const buttons = document.querySelectorAll(buttonSelector);
  var count = 0;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText == "Connect") {
      console.log("Connecting to " + buttons[i]);
      buttons[i].click();
      DialogOpenAction();
      await new Promise((r) => setTimeout(r, 5000));
      count++;
      sendMessage({ task: "INCREMENT", count: count });
    }
  }
  document.querySelector('button[aria-label="Next"]').click();
};

const DialogOpenAction = () => {
  var dialogElement = document.querySelector('div[role="dialog"]');
  if (dialogElement != null) {
    if (dialogElement.querySelectorAll(".artdeco-button__text")[2] != null) {
      dialogElement.querySelectorAll(".artdeco-button__text")[2].click();
    } else if (
      dialogElement.querySelector(
        'button[aria-label="We don\'t know each other"]'
      ) != null
    ) {
      dialogElement.querySelector('button[aria-label="Other"]').click();
      dialogElement.querySelectorAll(".artdeco-button__text")[1].click();
      DialogOpenAction();
    }
  }
};
