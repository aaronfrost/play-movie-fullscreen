//LISTEN FOR MESSAGE "BODY_ESCAPE"
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "BODY_ESCAPE"){
        doEscapeBody();
    }
});


//SEND A MESSAGE TO THE CURRENT TAB, IN OUTER.JS
function doEscapeBody(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "BODY_ESCAPE"});
    });
}