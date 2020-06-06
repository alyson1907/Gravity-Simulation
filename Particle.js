class Particle {
  constructor (x, y, mass, iniAccel, color) {
    this.position = new p5.Vector(x, y)
    this.acceleration = iniAccel || new p5.Vector(random(-1.5, 1.5), random(-1.5, 1.5))
    this.mass = mass
    this.velocity = new p5.Vector(12, 12)
    this.isDead = false
    this.color = color || {
      r: random(200),
      g: random(200),
      b: random(200)
    }
  }

  applyGravity (gravity) {
    const force = gravity.div(this.mass / 1.5)
    this.acceleration = this.acceleration.add(force)
  }

  update () {
    if (!this.isDead) {
      this.velocity = this.velocity.add(this.acceleration)
      this.position = this.position.add(this.acceleration)
    }
  }

  show () {
    const { r, g, b } = this.color
    stroke(r, g, b)
    strokeWeight(this.mass)
    point(this.position)
  }
}
