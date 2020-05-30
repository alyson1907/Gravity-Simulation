class BlackHole {
  constructor (x, y, mass) {
    this.position = new p5.Vector(x, y)
    this.mass = mass
  }

  attract (particle) {
    const force = p5.Vector.sub(this.position, particle.position)
    const realDistance = force.mag()
    const d = realDistance // constrain(realDistance, 0, 5150)
    const forceDirection = force.normalize()
    const forceIntensity = (G * this.mass * particle.mass) / (d * d)
    const forceVector = forceDirection.mult(forceIntensity)
    particle.applyGravity(forceVector)
  }

  show () {
    stroke(0)
    strokeWeight(0)
    strokeWeight(this.mass)
    point(this.position)
  }
}
