$(()=>{
    //ADD A BUTTON TO THE PLAYER
    const closeButtonTemplate = `<div class="afro-button-wrapper"><button id="afro-close-fullscreen">CLOSE PLAYER (or hit Escape)</button></div>`;
    $('body').append(closeButtonTemplate);

    //WHEN BUTTON IS CLICKED, SEND MESSAGE TO BACKGROUND.JS
    $('#afro-close-fullscreen').click(()=>{
        chrome.runtime.sendMessage({message: "BODY_ESCAPE"});
    });


    //ADD SHARE BUTTON
    const shareButtonTemplate = `<a href="https://twitter.com/intent/tweet?button_hashtag=PlayMovieFullscreen" class="twitter-hashtag-button" data-size="large" data-text="Watching movies on @GooglePlay just got way better! Checkout this killer extension! @js_dev" data-url="https://chrome.google.com/webstore/detail/play-movies-fullscreen/nienaghdopiidkcmeoadejnnjangghnm" data-related="js_dev" data-lang="en" data-show-count="false">Tweet #PlayMovieFullscreen</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    $('body').append(`<div  class="afro-button-wrapper share">${shareButtonTemplate}</div>`);
});

