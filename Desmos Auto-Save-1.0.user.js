// ==UserScript==
// @name         Desmos Auto-Save
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-save desmos because it is not a feature for some reason
// @author       Eric Song
// @match        https://www.desmos.com/calculator/*
// @grant        none
// ==/UserScript==

var checkForSaveBttnThenClick = function() {
    'use strict';
    var results = xpath("//span[contains(@class, 'dcg-action-save') and not(contains(@class, 'dcg-disabled'))]");
    if (results.length == 1 && results[0].innerText == "Save") {
        var saveKeys = new KeyboardEvent("keydown", {key: 's', code: 'KeyS', ctrlKey: true});
        document.dispatchEvent(saveKeys);
    }
};

var xpath = function (xpathToExecute) {
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
};

(function() {
    'use strict';
    setInterval(checkForSaveBttnThenClick, 5000);
})();
