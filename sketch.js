// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

const numberOfParticles = 30
const particlesMass = 4

/** Generates given amount of particles at random positions
 * @param {number} mass the size and mass of each particle
 * @param {number} qty the number of particles to be generated
 */
const randomParticles = (mass, qty) => {
  for (let i = 0; i < qty; i++) {
    particles.push(new Particle(random(windowWidth), random(windowHeight), mass))
  }
}

function setup () {
  createCanvas(windowWidth, windowHeight)
  background('#ddd')
  // Creating BlackHoles
  blackHoles.push(new BlackHole(1000, 350, 20))
  // Creating Particles
  randomParticles(particlesMass, numberOfParticles)

}

function draw () {
  // Uncomment `clear()` below to remove trailing for each particle
  // clear()
  blackHoles.forEach(blackHole => {
    blackHole.show()
    particles.forEach(particle => {
      blackHole.attract(particle)
      blackHole.checkCollision(particle)
    })
  })


  particles.forEach(pt => {
    pt.update()
    pt.show()
  })

}
