
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function FindElementsByXpath(xpath, parent = document) {
    let els = document.evaluate(xpath, parent, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
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
    var el = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    if (el && el.singleNodeValue) {
        return el.singleNodeValue;
    }
}

function smoothScrollTo(el, last = false) {
    try {
        (last ? $(el).last() : $(el))[0].scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    } catch (e) {
    }
}
