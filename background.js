(function () {
    chrome.commands.onCommand.addListener(function (command) {
        if (command === "next") {
            // do something
            console.log("Next command");
        } else if (command === "cancel") {
            // do something
            console.log("Cancel command");
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
})();
