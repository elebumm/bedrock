/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var WNP63 = {};
    var client = Mozilla.Client;

    WNP63.checkUpToDate = function() {
        // bug 1419573 - only show "Your Firefox is up to date" if it's the latest version.
        if (client.isFirefoxDesktop) {
            client.getFirefoxDetails(function(data) {
                if (data.isUpToDate) {
                    document.querySelector('.page-header').classList.add('show-up-to-date-message');
                }
            });
        }
    };

    WNP63.init = function() {
        WNP63.checkUpToDate();
    };

    window.Mozilla.WNP63 = WNP63;

})();
