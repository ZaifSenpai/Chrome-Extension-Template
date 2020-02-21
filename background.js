//// To limit for specific host
// chrome.runtime.onInstalled.addListener(function () {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { hostContains: 'google.com' },
//             })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
// });

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
