// Gravity parameters
const G = 15
const blackHoles = []
const particles = []

// Parameters
const trailingParticles = false // true = particles will draw their paths
const numberOfParticles = 15
const particlesMass = 6

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
  blackHoles.push(new BlackHole(windowWidth / 4, windowHeight / 2, 20))
  blackHoles.push(new BlackHole(windowWidth / 1.5, windowHeight / 2, 20))

  // Creating Particles
  randomParticles(particlesMass, numberOfParticles)
}

function draw () {
  // Uncomment `clear()` below to remove trailing for each particle
  !trailingParticles && clear()
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
