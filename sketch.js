// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

const numberOfParticles = 3

function setup () {
  createCanvas(windowWidth, windowHeight)
  background('#ddd')
  blackHoles.push(new BlackHole(1000, 350, 20))
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(random(windowWidth), random(windowHeight), 4))
  }
}

function draw () {
  // Uncomment `clear()` below to remove trailing for each particle
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
