addEventListener('load', () => {
    const beats = document.querySelectorAll('.pads audio');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60b2d3']

    // let's get going with the sound
    pads.forEach((pad, i) => {
        pad.addEventListener('click', function(e) {
            beats[i].currentTime = 0;
            beats[i].play();
            createBeats(i,e);
            document.body.style.background  = colors[i];
        });

    });

    // create beats
    const createBeats = (i, e) => {
        const bubble = e.target.children[1].cloneNode();
        visual.appendChild(bubble);
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
            document.body.style.background  = '';
        });
    }
});