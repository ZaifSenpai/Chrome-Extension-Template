chrome.runtime.onInstalled.addListener(function () {
    new chrome.declarativeContent.ShowPageAction();
});

chrome.commands.onCommand.addListener(function (command) {
    if (command == "next") {
        // do something
    }
    else if (command == "cancel") {
        // do something
    }
});
