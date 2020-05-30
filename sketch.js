// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

const numberOfParticles = 5

function setup () {
  createCanvas(windowWidth, windowHeight)
  background('#ddd')
  blackHoles.push(new BlackHole(700, 350, 20))
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(random(windowWidth), random(windowHeight), 4))
  }
}

function draw () {
  // clear()
  blackHoles.forEach(bh => {
    bh.show()
    particles.forEach(pt => {
      bh.attract(pt)
    })
  })


  particles.forEach(pt => {
    pt.update()
    pt.show()
  })

}
