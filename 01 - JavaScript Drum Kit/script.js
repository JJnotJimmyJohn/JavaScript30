
// add event listener
const buttons = document.querySelectorAll('.key');


function play_audio(key) {
    sound=document.querySelector("audio[data-key='"+key+"']");
    if (!sound) return;
    sound.currentTime=0;
    sound.play();
};

function toggle_effect(key) {
    pressed_div=document.querySelector("div[data-key='"+key+"']");
    if (!pressed_div) return;
    pressed_div.classList.toggle("playing");
};


// get "keydown" event
document.body.addEventListener("keydown",(event)=>{
    // console.log(event.keyCode);
    play_audio(event.keyCode);
    toggle_effect(event.keyCode);
    // play that sound that matches the keycode
    // toggle the class for the div
});

document.body.addEventListener("keyup",(event)=>{
    // console.log(event.keyCode);
    toggle_effect(event.keyCode);
    key.classList.remove('playing');    
    // play that sound that matches the keycode
    // toggle the class for the div
});




// use the event.target or something to get what key is pressed down
// then play the respective audio where data-key="65", for example
// also need to toggle the class "playing" when keydown and keyup