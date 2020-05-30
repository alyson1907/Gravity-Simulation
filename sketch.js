// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

const numberOfParticles = 25

function setup () {
  createCanvas(windowWidth, windowHeight)
  background('#ddd')
  blackHoles.push(new BlackHole(500, 300, 20))
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(random(windowWidth), random(windowHeight), 3))
  }
}

function draw () {
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
