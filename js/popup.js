
document.getElementById('shortcuts_link').onclick = function () {
    chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
};

document.getElementById("author_flaticon_url").onclick = function () {
    chrome.tabs.create({ url: "https://www.flaticon.com/authors/flat-icons" });
}

document.getElementById("flaticon_url").onclick = function () {
    chrome.tabs.create({ url: "https://www.flaticon.com/" });
}
