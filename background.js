function reddenPage() {
  document.body.style.backgroundColor = 'red';
  document.getElementById('inputUserName').value = 'usuario-teste';
  window.alert('works')
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});