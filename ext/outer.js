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


setInterval(()=> {
    // Select iframes that haven't been targeted with the play movie fullscreen class
    const iframes = document.querySelectorAll('iframe:not(.pmf-iframe)');
    const filter = Array.prototype.filter;

    // For each iframe that matches, filter to the ones we're looking for and then add the targeting class
    const playerIframe = filter.call(iframes, (i)=> i.src.startsWith("https://play.google.com/video/lava/player"))
      .forEach(iframe => {
          iframe.classList.add('pmf-iframe');
      });
}, 1000);
