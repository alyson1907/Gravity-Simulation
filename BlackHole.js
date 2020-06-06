class BlackHole {
  constructor (x, y, mass) {
    this.position = new p5.Vector(x, y)
    this.mass = mass
  }

  attract (particle) {
    const force = p5.Vector.sub(this.position, particle.position)
    const realDistance = force.mag()
    const d = realDistance // constrain(realDistance, 3, 40)
    const forceDirection = force.normalize()
    const forceIntensity = (G * this.mass * particle.mass) / (d * d)
    const forceVector = forceDirection.mult(forceIntensity)
    particle.applyGravity(forceVector)
  }

  checkCollision (particle) {
    const distance = particle.position.dist(this.position)
    if (distance <= this.mass) {
      particle.isDead = true
    }
  }

  show () {
    stroke(0)
    strokeWeight(0)
    strokeWeight(this.mass)
    point(this.position)
  }
}
