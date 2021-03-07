function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;//stops function from running if key is not on drum kit
    audio.currentTime = 0; //rewinds sound to start;
    audio.play();
    //key.style.margin = '10px 1rem 1rem' 
    key.classList.add('playing');
    counter2(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function counter2(key) {
        let total = 1;
        const el = document.querySelector("#count")
        window.addEventListener('keydown', e => {
            total++
            let margin = total * 10
            key.style.margin = `${margin}px 1rem 1rem`
            el.innerHTML = total + " presses"
            console.log(total);
            if (total == 10) {
                key.style.margin = '0px 1rem 1rem'
                total = 1;
            }
        }
    )};


function counter() {
    let keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    for (let i in keys) {
        const key = document.querySelector(`.key[data-key="${keys[i]}"]`);
        let total = 0;
        const el = document.querySelector("#count")
        window.addEventListener('keydown', e => {
            total++
            let margin = total * 10
            key.style.margin = `${margin}px 1rem 1rem`
            el.innerHTML = total + " presses"
            if (total == 10) {
                key.style.margin = '0px 1rem 1rem'
                total = 0;
            }
        }
    )}};


//counter();

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


/*

function handleArrow(event) {
    if (event.key == "65") {
        for (i = 0; i < 10; i++) {
            let margin = i * 10
            key.style.margin = `${margin}px 1rem 1rem`
            console.log(margin);
        }
    }
}


function counter2() {
    let total = 0;
    const el = document.querySelector("#count")
    window.addEventListener('keydown', e => {
        total++
        let margin = total * 10
        this.style.margin = `${margin}px 1rem 1rem`
        el.innerHTML = total + " presses"
        if (total == 10) {
            this.style.margin = '0px 1rem 1rem'
            total = 0;
        }
    }

    )
}

function countEachKey() {
    const keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
    keys.forEach(key => key.counter2());
}


This one kind of works
function counter2(key) {
        let total = 0;
        const el = document.querySelector("#count")
        window.addEventListener('keydown', e => {
            total++
            let margin = total * 10
            key.style.margin = `${margin}px 1rem 1rem`
            el.innerHTML = total + " presses"
            if (total == 10) {
                key.style.margin = '0px 1rem 1rem'
                total = 0;
            }
        }
    )};

*/
