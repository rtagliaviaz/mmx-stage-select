const sound = new Audio('./SFX/MMX38.wav')
const stageTheme = new Audio('./theme/MMX - Stage Select Theme.mp3')
const box = document.getElementsByClassName("box")

const map = document.getElementById("map")
const stage = document.getElementById("stage")
const spec = document.getElementById("spec")

centerImg = document.getElementById('center')



document.body.addEventListener("mouseover", function() {
  stageTheme.volume=0.5
  stageTheme.play()
})

// box.onmouseover = () => {
//   console.log('hola')
// }

for (let i = 0; i < box.length; i++) {
  box[i].onmouseover = () => {
    console.log(box[i].id)
    if (i == 0 || i == 3 || i == 6 || i == 9 ) {
      center.src = "./img/maps.gif"
    } else {
      center.src = `./img/stages/${box[i].id}.gif`
    }
    
    sound.play()
  };

  box[i].onmouseout = () => {
    center.src = "./img/maps.gif"
  }
}

map.onmouseenter = () => {
  map.src = "./img/map-on.gif"
}

map.onmouseout = () => {
  map.src = "./img/map.gif"
}

stage.onmouseenter = () => {
  stage.src = "./img/stage-on.gif"
}

stage.onmouseout = () => {
  stage.src = "./img/stage.gif"
}

spec.onmouseenter = () => {
  spec.src = "./img/spec-on.gif"
}

spec.onmouseout = () => {
  spec.src = "./img/spec.gif"
}

// center

