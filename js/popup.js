/*!
 * <ADD COPYRIGHT DETAILS>
 */

(function (cxt) {
  const window = cxt.window;
  const document = cxt.document;
  const $ = cxt.$;
  const tabs = cxt.chrome.tabs;
  const runtime = cxt.chrome.runtime;
  const storage = cxt.chrome.storage;

  const local = storage.local;

  $(() => {
    // Todo
  });

  $("#shortcuts_link").click(() => {
    tabs.create({ url: "chrome://extensions/shortcuts" });
  });

  $("#author_flaticon_url").click(() => {
    tabs.create({ url: "https://www.flaticon.com/authors/flat-icons" });
  });

  $("#flaticon_url").click(() => {
    tabs.create({ url: "https://www.flaticon.com/" });
  });

  $("#sampleInput").change(() => {
    saveSettings();
  });

  $("#start").click(() => {
    runtime.sendMessage({ m: "scrap" }, () => {
      window.close();
    });
  });

  function saveSettings() {
    const settings = {};

    settings.sampleInput = $("#sampleInput").val();

    local.set({ settings: settings });
  }

  local.get("settings", (data) => {
    const settings = data.settings;
    if (settings) {
      $("#sampleInput").val(settings.sampleInput);
    }
  });
})(this);
