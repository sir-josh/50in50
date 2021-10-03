const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopAllSounds();

        document.getElementById(sound).play();
    });

    document.getElementById('sound-buttons').appendChild(btn);
});

function stopAllSounds() {
    sounds.forEach(sound => {
        const soundAudio = document.getElementById(sound);

        soundAudio.pause();
        soundAudio.currentTime = 0;
    });
}