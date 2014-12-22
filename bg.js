chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({
    currentWindow: true
  }, function(tabs) {
    var allPinned = true;
    for (var i in tabs) {
      if (! tabs[i].pinned) {
        allPinned = false;
        break;
      }
    }

    for (var i in tabs) {
      chrome.tabs.update(tabs[i].id, {pinned: !allPinned});
    }
  });

});
