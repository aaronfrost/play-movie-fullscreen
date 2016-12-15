$(()=>{
    //Track loading of page
    let movieTitle;
    setTimeout(()=>{
        movieTitle = document.querySelector('.playing-title').innerHTML;
        console.log('Hello ', movieTitle)
        tracker.sendEvent('PlayerView', 'open', movieTitle);
    }, 1000);


    //ADD A BUTTON TO THE PLAYER
    const closeButtonTemplate = `<div class="afro-button-wrapper"><button id="afro-close-fullscreen">CLOSE PLAYER (or hit Escape)</button></div>`;
    $('body').append(closeButtonTemplate);

    //WHEN BUTTON IS CLICKED, SEND MESSAGE TO BACKGROUND.JS
    $('#afro-close-fullscreen').click(()=>{
        tracker.sendEvent('ClosePlayerBtn', 'click', movieTitle);
        chrome.runtime.sendMessage({message: "BODY_ESCAPE"});
    });

    //Track button hover
    $('#afro-close-fullscreen').on('mouseenter',()=>{
        tracker.sendEvent('ClosePlayerBtn', 'hover', movieTitle);
    });


    //ADD SHARE BUTTON
    const shareButtonTemplate = `<a href="https://twitter.com/intent/tweet?button_hashtag=PlayMovieFullscreen" class="twitter-hashtag-button" data-size="large" data-text="Watching movies on @GooglePlay just got way better! Checkout this killer extension! @js_dev" data-url="https://chrome.google.com/webstore/detail/play-movies-fullscreen/nienaghdopiidkcmeoadejnnjangghnm" data-related="js_dev" data-lang="en" data-show-count="false">Tweet #PlayMovieFullscreen</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    $('body').append(`<div class="afro-button-wrapper share">${shareButtonTemplate}</div>`);

    $('.afro-button-wrapper.share').on('mouseenter',()=>{
        tracker.sendEvent('TweetBtn', 'hover', movieTitle);
    }).on('mousedown',()=>{
        tracker.sendEvent('TweetBtn', 'click', movieTitle);
    });

    //Do some timed events
    let intervals = [10,20,30,40,50,60,70,80,90];
    intervals.forEach(i=>{
        setTimeout(()=>{
            doTimedWatch(i);
        }, (1000*60*i));
    });

    function doTimedWatch(time){
        let eventName = `Watched`;
        tracker.sendEvent(eventName, `${time}`, movieTitle);
    }

});

