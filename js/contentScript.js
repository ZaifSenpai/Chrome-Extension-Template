/*!
 * <ADD COPYRIGHT DETAILS>
 */

(function (cxt) {
  const window = cxt.window;
  const document = cxt.document;
  const $ = cxt.$;
  const storage = cxt.chrome.storage;
  // const runtime = cxt.chrome.runtime;
  // const commands = cxt.chrome.commands;
  // const tabs = cxt.chrome.tabs;
  // const windows = cxt.chrome.windows;
  // const contextMenus = cxt.chrome.contextMenus;
  // const action = cxt.chrome.action;

  const local = storage.local; // use local.set() and local.get()

  $(() => {
    // toastr["success"]("Content script inserted", "Ext");
    //
    // Swal.fire({
    //   title: "Are you sure?",
    //   html: "<b>Do you want to perform this action now?</b>",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#d33",
    //   cancelButtonColor: "#3085d6",
    //   confirmButtonText: "Yes!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     toastr["info"]("You pressed Yes!", "Ext");
    //   }
    // });
  });

  runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.m === "start") {
      // Todo
      sendResponse();
    } else {
      sendResponse();
    }
  });

  //
  // Some helper functions:
  //

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function FindElementsByXpath(xpath, parent = document) {
    let els = document.evaluate(
      xpath,
      parent,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    const els_array = [];

    if (els) {
      let el = els.iterateNext();
      while (el) {
        els_array.push(el);
        el = els.iterateNext();
      }
    }
    return els_array;
  }

  function FindElementByXpath(xpath, parent = document) {
    var el = document.evaluate(
      xpath,
      parent,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );

    if (el && el.singleNodeValue) {
      return el.singleNodeValue;
    }
  }

  function smoothScrollTo(el, last = false) {
    try {
      (last ? $(el).last() : $(el))[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } catch (e) {}
  }
})(this);
