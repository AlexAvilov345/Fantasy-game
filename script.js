let action_btns = document.querySelectorAll('button[data-target]')
let scene_list = document.querySelectorAll('.scene')
let background = document.querySelector('.background')

action_btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let nextSceneId = btn.getAttribute('data-target')
    let nextScene = document.getElementById(nextSceneId)

    scene_list.forEach(function(scene) {
      scene.style.display = 'none'
    })

    nextScene.style.display = 'block'

    let newBackground = nextScene.getAttribute('data-background')
    if (newBackground) {
      background.style.backgroundImage = `url('${newBackground}')`
    }
  })
})

window.addEventListener('DOMContentLoaded', () => {
  let initialScene = document.querySelector('.scene[style*="display: block"]')
  if (!initialScene) {
    initialScene = document.getElementById('scene-1')
    if (initialScene) {
      initialScene.style.display = 'block'
    }
  }

  let bg = initialScene.getAttribute('data-background')
  if (bg) {
    background.style.backgroundImage = `url('${bg}')`
  }
})
