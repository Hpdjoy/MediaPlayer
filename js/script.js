const speedUp = document.querySelector('#speedUp');
const speedDown = document.querySelector('#speedDown');
const volumeUp = document.querySelectorAll('.volumeUp');
const volumeDown = document.querySelectorAll('.volumeDown');
const volumeMute = document.querySelectorAll('.volumeMute');
const openBtn = document.querySelector('#openBtn');
const videoInput = document.querySelector('#videoInput');
const videoPlayer = document.querySelector('#main');
const toast = document.querySelector('.toast');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const fullScreen = document.querySelector('#fullScreen');




const handleInput = () => {
    console.log('Video Input was clicked!');
    videoInput.click();
}

openBtn.addEventListener('click', handleInput);

const acceptInputHandeler = (obj) => {
    console.log('Video Input was accepted!');
    console.log(obj.target.files[0]);

    const existingVideoElement = document.querySelector('.main .video');
    if (existingVideoElement) {
        videoPlayer.removeChild(existingVideoElement);
    }

    const link = URL.createObjectURL(obj.target.files[0]);
    const videoElement = document.createElement('video');
    videoElement.src = link;
    videoElement.setAttribute('class', 'video');
    videoElement.play();
    videoPlayer.appendChild(videoElement);
    videoElement.controls = false;


}

videoInput.addEventListener('change', acceptInputHandeler);

// VOLUME UP AND VOLUME DOWN
volumeUp.forEach(volumeUpElement => {
volumeUpElement.addEventListener('click', () => {
    console.log('Volume Up was clicked!');
    const videoElement = document.querySelector('.video'); // Ensure correct selection
    if (videoElement) {
        if (videoElement.volume >= 1.0) {  // Corrected condition
            showToast('Max Volume');
            return;
        }
        videoElement.volume = Math.min(1.0, videoElement.volume + 0.1);
        console.log('New Volume:', videoElement.volume);
        showToast(Math.round(videoElement.volume * 100) + "%");
    } else {
        console.log('No video element found');
    }
});
});
volumeDown.forEach(volumeDownElement => {
volumeDownElement.addEventListener('click', () => {
    console.log('Volume Down was clicked!');
    const videoElement = document.querySelector('.video');
    if (videoElement) {
        videoElement.volume = Math.max(0.0, videoElement.volume - 0.1); // Prevent negative volume
        console.log('New Volume:', videoElement.volume);
        showToast(Math.round(videoElement.volume * 100) + "%");
    } else {
        console.log('No video element found');
    }
});
});

volumeMute.forEach(volumeMuteElement => {
volumeMuteElement.addEventListener('click', () => {
    console.log('Volume Mute was clicked!');
    const videoElement = document.querySelector('.video');
    if (videoElement) {
        videoElement.muted = !videoElement.muted;
        console.log('Muted:', videoElement.muted);
        showToast(videoElement.muted ? 'Muted' : 'Unmuted');
    } else {
        console.log('No video element found');
    }
});
});


// SPEED UP AND SPEED DOWN.........................................................  
speedUp.addEventListener('click', () => {
    const videoElement = document.querySelector('.main .video');
    if (videoElement !== null) {
        console.log(videoElement.playbackRate);
        videoElement.playbackRate += 0.1;
        showToast(videoElement.playbackRate +'X');
    } else {
        console.log('No video element found');
    }

    console.log('Speed Up was clicked!');
});


speedDown.addEventListener('click', () => {
    const videoElement = document.querySelector('.main .video');
    if (videoElement !== null) {
        console.log(videoElement.playbackRate);
        videoElement.playbackRate -= 0.1;
        showToast(videoElement.playbackRate +'X');
    } else {
        console.log('No video element found');
    }

    console.log('Speed Down was clicked!');
});

// toast notification  
function showToast(message) {
    toast.innerText = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    },1000);
} 



//Play and Pause
play.addEventListener('click', () => {
    const videoElement = document.querySelector('.main .video');
    if (videoElement !== null) {
        if(videoElement.paused){
        videoElement.play();
        console.log('Play was clicked!');
        } else {
            videoElement.pause();
            console.log('Pause was clicked!');
        }
    } else {
        console.log('No video element found');
    }
});

pause.addEventListener('click', () => {
    const videoElement = document.querySelector('.main .video');
    if (videoElement !== null) {
        videoElement.pause();
        console.log('Pause was clicked!');
    } else {
        console.log('No video element found');
    }
});

// Full Screen

fullScreen.addEventListener('click', () => {
    
        videoPlayer.requestFullscreen();
        console.log('Full Screen was clicked!');
});
