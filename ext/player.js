$(() => {
    //Track loading of page
    let movieTitle;
    setTimeout(() => {
        movieTitle = document.querySelector(".playing-title").innerHTML;
        tracker.sendEvent("PlayerView", "open", movieTitle);
    }, 1000);

    //ADD A BUTTON TO THE PLAYER
    const closeButtonTemplate = `<div class="afro-button-wrapper"><button id="afro-close-fullscreen">hit Escape to close player</button></div>`;
    $("body").append(closeButtonTemplate);

    //WHEN BUTTON IS CLICKED, SEND MESSAGE TO BACKGROUND.JS
    $("#afro-close-fullscreen").click(() => {
        tracker.sendEvent("ClosePlayerBtn", "click", movieTitle);
        chrome.runtime.sendMessage({ message: "BODY_ESCAPE" });
    });

    //Track button hover
    $("#afro-close-fullscreen").on("mouseenter", () => {
        tracker.sendEvent("ClosePlayerBtn", "hover", movieTitle);
    });

    // //ADD SHARE BUTTON
    // const shareFacebookButtonTemplate = `<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fplay-movies-fullscreen%2Fnienaghdopiidkcmeoadejnnjangghnm&layout=button&size=large&mobile_iframe=true&appId=174552899258363&width=73&height=28" width="73" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`;
    // const shareTwitterButtonTemplate = `<a href="https://twitter.com/intent/tweet?button_hashtag=PlayMovieFullscreen" class="twitter-hashtag-button" data-size="large" data-text="Watching movies on @GooglePlay just got way better! Checkout this killer extension! @js_dev" data-url="https://chrome.google.com/webstore/detail/play-movies-fullscreen/nienaghdopiidkcmeoadejnnjangghnm" data-related="js_dev" data-lang="en" data-show-count="false">Tweet #PlayMovieFullscreen</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    // $('body').append(`<div class="afro-button-wrapper share">${shareFacebookButtonTemplate} ${shareTwitterButtonTemplate}</div>`);
    //
    // let tweetBtn = $('.afro-button-wrapper.share .twitter-hashtag-button');
    // tweetBtn.on('mouseenter',()=>{
    //     tracker.sendEvent('TweetBtn', 'hover', movieTitle);
    // });
    // tweetBtn.on('click',()=>{
    //     tracker.sendEvent('TweetBtn', 'click', movieTitle);
    // });
    //
    // let fbBtn = $('.afro-button-wrapper.share iframe');
    // fbBtn.on('mouseenter',()=>{
    //     tracker.sendEvent('FacebookBtn', 'hover', movieTitle);
    // });
    // fbBtn.on('click',()=>{
    //     tracker.sendEvent('FacebookBtn', 'click', movieTitle);
    // });

    //Do some timed events
    let intervals = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    intervals.forEach(i => {
        setTimeout(() => {
            doTimedWatch(i);
        }, 1000 * 60 * i);
    });

    function doTimedWatch(time) {
        let eventName = `Watched`;
        tracker.sendEvent(eventName, `${time}`, movieTitle);
    }
});
