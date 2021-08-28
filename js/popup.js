/*!
 * <ADD COPYRIGHT DETAILS>
 */

(function (window, document) {
    $('#shortcuts_link').click(() => {
        chrome.tabs.create({url: "chrome://extensions/shortcuts"});
    });

    $('#author_flaticon_url').click(() => {
        chrome.tabs.create({url: "https://www.flaticon.com/authors/flat-icons"});
    });

    $('#flaticon_url').click(() => {
        chrome.tabs.create({url: "https://www.flaticon.com/"});
    });

    $("#sampleInput").change(() => {
        saveSettings();
    });

    $("#start").click(() => {
        chrome.runtime.sendMessage({m: "scrap"}, () => {
            window.close();
        });
    });

    function saveSettings() {
        const settings = {};

        settings.sampleInput = $("#sampleInput").val();

        chrome.storage.local.set({settings: settings});
    }

    chrome.storage.local.get("settings", (data) => {
        const settings = data.settings;
        if (settings) {
            $("#sampleInput").val(settings.sampleInput);
        }
    });
})(window, document);
