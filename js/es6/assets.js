
// alert("hello world!")

class Assets {

	constructor() {
	}

	createShip() {
		var thrust = new Path([10,4],[20,7.5],[30,4],[20, -20])
		thrust.closed = true;

		var ship = new Path([0,0], [20,50], [40,0], [20,7.5])
		ship.closed = true

		var group = new Group(ship, thrust)

		// Styling
		ship.fillColor = 'white'
		thrust.fillColor = '#F77542'

		/* Notes
		- set `thrust.visible = false` to hide thrust
		- rotate/scale using .rotate() and .scale(factor)
		*/
		group.thrust = thrust
		group.ship = ship
		group.center = group.bounds.center.clone()
		group.strokeColor = 'black'
		group.strokeWidth = 3
		return group
	}

	createAsteroid(radius) {
		var numSides = _.random(5, 12)
		var regShape = new Path.RegularPolygon(new Point(0,0), numSides, radius)
		var irrAmt = radius * 0.5
		var shape = new Path()

		// make regShape slightly irregular
		for (var i=0; i < numSides; i++) {
			var pt = regShape.segments[i].point
			var offset = (new Point(irrAmt, irrAmt)).multiply(Point.random()).negate()
			pt = pt.add(offset)

			shape.add(pt)
		}

		// shape.fillColor = 'white'
		shape.closed = true
		shape.strokeColor = 'white'
		shape.strokeWidth = 10

		var gravityRing = new Path.Circle(new Point(-(20 / 2),-(20 / 2)), radius + 20)
		gravityRing.strokeColor = "#000"
		gravityRing.strokeColor.alpha = 0.0

		var group = new Group(shape, gravityRing)
		group.gravityRing = gravityRing
		group.radius = radius
		// group.gravityRing.visible = false
		return group
	}

}

window.Assets = Assets