chrome.commands.onCommand.addListener(function (command) {
    if (command === "next") {
        // do something
    } else if (command === "cancel") {
        // do something
    }
});

chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.m === "start") {
        console.log("Started");

        response && response();
    } else if (request.m === "getTabId") {
        response({tabId: sender.tab.id});
    } else {
        response && response();
    }
});
