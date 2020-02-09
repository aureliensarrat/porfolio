/*CLOCK*/

function clock(){
    const time = new Date()

    hours = time.getHours()
    minutes = time.getMinutes()
  
  function add0(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
  document.querySelector('.clock').innerHTML = add0(hours) + ":" + add0(minutes)
}
setInterval(clock, 1000);

/*SOUNDS*/

// Start the music directly at the portfolio enter
setTimeout(() => {
  backgroundSound.currentTime = 10
  backgroundSound.play()
  backgroundSound.loop = true
}, 1)

// Stop and play music
soundOn = document.querySelector('.sound-on')
soundOff = document.querySelector('.sound-off')

soundOn.addEventListener('click', () =>{
  soundOff.style.display = 'flex'
  soundOn.style.display = 'none'
  backgroundSound.pause()
  backgroundSound.currentTime = 10
})

soundOff.addEventListener('click', () =>{
  soundOn.style.display = 'flex'
  soundOff.style.display = 'none'
  backgroundSound.play()
})

// Interractives sounds

backgroundSound = new Audio('sounds/background-sound.mp3');
buttonHover = new Audio('sounds/button-hover.mp3');
buttonClick = new Audio('sounds/button-click.mp3');
buttons = document.querySelectorAll('.button')

function playSounds(){
  for (const button of buttons){
    button.addEventListener('mouseover',() =>{
      buttonHover.play()
      buttonHover.volume = 1
    })
    button.addEventListener('click',() =>{
      buttonClick.play()
      buttonClick.volume = 0.5
    })
  }
}playSounds()

/*MAKE BUTTONS*/

document.querySelector('.project1').addEventListener('click', () =>{
  window.location.href = 'https://aureliensarrat.github.io/Snake/'
})

document.querySelector('.project2').addEventListener('click', () =>{
  window.location.href = 'https://dr-ary-karsenty.fr/'
})

document.querySelector('.project3').addEventListener('click', () =>{
  window.location.href = 'https://eythansaillet.github.io/vaporwaveMinigolf/'
})

document.querySelector('.project4').addEventListener('click', () =>{
  window.location.href = 'http://cure.epizy.com/home'
})