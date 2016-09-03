$(()=>{
    //ADD A BUTTON TO THE PLAYER
    $('body').append(`<div class="afro-button-wrapper"><button id="afro-close-fullscreen">CLOSE PLAYER</button></div>`);

    //WHEN BUTTON IS CLICKED, SEND MESSAGE TO BACKGROUND.JS
    $('#afro-close-fullscreen').click(()=>{
        chrome.runtime.sendMessage({message: "BODY_ESCAPE"});
    })
})