chrome.browserAction.onClicked.addListener(function(activeTab) {
    var mypage = "app/tabs.html";
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {
        chrome.tabs.query({},function (alltabs) {
            console.log(alltabs);
            var flag = false;
            alltabs.forEach(function(item, i, arr) {
                console.log(item.title);
                if (item.title.indexOf("FDL") != -1) {
                    chrome.tabs.update(item.id, {active: true})
                    flag = true;
                }
            });
            if (flag == false) {
                var tab = tabs[0];
                if (tab.title.indexOf("FDL") != -1) {
                    chrome.tabs.update(tab.id, {url: mypage})
                } else {
                    chrome.tabs.create({
                        url: mypage
                    }, function (tab) {
                    });
                }
            }
        });
    });
});
