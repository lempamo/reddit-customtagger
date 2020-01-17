browser.browserAction.onClicked.addListener(function(){
    browser.tabs.create({url: "config.html"});
});