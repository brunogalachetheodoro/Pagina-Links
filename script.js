const imgs = document.getElementById('imgs')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 3000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 250}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightButton.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftButton.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

/* Reveal */

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.hidden-txt1', {
    duration: 1000,
    distance: '250px',
    origin: 'left'
})

revelar.reveal('.hidden-txt2', {
    duration: 1000,
    distance: '250px',
    origin: 'left',
    delay: 500
})

revelar.reveal('.hidden-button1', {
    duration: 2000,
    distance: '100px',
    origin:'left',
})

revelar.reveal('.hidden-button2', {
    duration: 2000,
    distance: '100px',
    origin:'left',
    delay: 500
})

revelar.reveal('.hidden-button3', {
    duration: 2000,
    distance: '100px',
    origin:'left',
    delay: 1000
})

revelar.reveal('.hidden-img', {
    duration: 1000,
    distance: '100px',
    origin: 'bottom'
})