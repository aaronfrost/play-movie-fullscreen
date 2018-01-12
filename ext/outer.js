//LISTEN FOR MESSAGE FROM BACKGROUND.JS
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "BODY_ESCAPE") {
        doEscapeBody();
    }
});

//TRIGGER AN CLICK ON THE OVERLAY, WHICH WILL CLOSE THE MOVIE MODAL
function doEscapeBody() {
    $("body > .modal-dialog-overlay, .websky-modal-dialog-overlay").trigger(
        "click"
    );
}
