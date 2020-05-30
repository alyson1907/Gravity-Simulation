// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

const numberOfParticles = 1

function setup () {
  createCanvas(windowWidth, windowHeight)
  background('#ddd')
  blackHoles.push(new BlackHole(500, 300, 25))
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(200, 100, 5))
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
