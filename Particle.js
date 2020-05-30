class Particle {
  constructor (x, y, mass) {
    this.position = new p5.Vector(x, y)
    this.acceleration = new p5.Vector(Math.random(), Math.random())
    this.mass = mass
    this.velocity = new p5.Vector(12, 12)
    this.color = {
      r: random(255),
      g: random(255),
      b: random(255)
    }
  }
  
  applyGravity (gravity) {
    const force = gravity.div(this.mass)
    this.acceleration = this.acceleration.add(force)
  }

  update () {
    this.velocity = this.velocity.add(this.acceleration)
    this.position = this.position.add(this.acceleration)
  }

  show () {
    const { r, g, b } = this.color
    stroke(r, g, b)
    strokeWeight(this.mass)
    point(this.position)
  }
}
