/**
 * @name Collide
 * @version 0.1.2
 * @author Kaamkiya <http://scratch.mit.edu/users/Kaamkiya#comments>
 * @license MIT
 * @see ./LICENSE
 */

const Collide = {
	// Credit to jeffreythompson.org for some of the formulae
	// Translated by me to Vanilla JS (from Processing)

	point: {
		tri: function (p, tri = [0, 0, 0, 0, 0, 0]) {
			let p0x = tri[0], p0y = tri[1], p1x = tri[2];
			let p1y = tri[3], p2x = tri[4], p2y = tri[5];
			let dX = p[0] - p2x, dY = p[1] - p2y, dX21 = p2x - p1x;
			let dY12 = p1y - p2y, D = dY12 * (p0x - p2x) + dX21 * (p0y - p2y), s = dY12 * dX + dX21 * dY;
			let t = (p2y - p0y) * dX + (p0x - p2x) * dY;
			if (D < 0) return s <= 0 && t <= 0 && s + t >= D;
			return s >= 0 && t >= 0 && s + t <= D;
		},
		rect: function (p, rect = [0, 0, 123, 456]) {
			// [x,y], [x,y,w,h]
			if (p[0] > rect[0] && p[0] < rect[0] + rect[2] && p[1] > rect[1] && p[1] < rect[1] + rect[3]) {
				return true;
			}
			return false;
		},
		circle: function (p, circle) {
			if (Math.sqrt(Math.pow(p[0] - circle[0], 2) + Math.pow(p[1] - circle[1], 2)) < circle[2]) {
				return true;
			}
			return false;
		},
		point: function (p, point) {
			if (p == point) {
				return true;
			}
			return false;
		},
		line: function (p, line) {
			const len = Math.sqrt(Math.pow(line[0] - line[2], 2) + Math.pow(line[1] - line[3], 2));
			const d1 = Math.sqrt(Math.pow(line[0] - p[0], 2) + Math.pow(line[1] - p[1], 2));
			const d2 = Math.sqrt(Math.pow(line[2] - p[0], 2) + Math.pow(line[3] - p[1], 2));
			if (d1 + d2 == len) {
				return true;
			}
			return false;
		},
	},

	circle: {
		tri: function () {},
		rect: function (circle, rect) {
			// Stack Overflow
			const distX = Math.abs(circle[0] - rect[0] - rect[2] / 2);
			const distY = Math.abs(circle[1] - rect[1] - rect[3] / 2);

			if (distX > rect[2] / 2 + circle[2] || distY > rect[3] / 2 + circle[2]) {
				return false;
			}

			if (distX <= rect[2] / 2 || distY <= rect[3] / 2) {
				return true;
			}

			return (Math.pow(distX - rect[2] / 2, 2) + Math.pow(distY - rect[3] / 2, 2) <= Math.pow(circle[2], 2));
		},
		circle: function (c, circle) {
			const final = Math.sqrt(Math.pow(c[0] - circle[0], 2) +Math.pow(c[1] - circle[1], 2)) < circle[2] + c[2];
			if (final) {
				return true;
			}
			return false;
		},
		point: function (c, point) {
			if (Math.sqrt(Math.pow(point[0] - c[0], 2) + Math.pow(point[1] - c[1], 2)) < c[2]) {
				return true;
			}
			return false;
		},
		line: function (c, line) {
			const x1 = line[0], y1 = line[1], x2 = line[2], y2 = line[3];
			let distX = x1 - x2, distY = y1 - y2;
			const len = Math.sqrt(Math.pow(distX, 2)+Math.pow(distY, 2));
			const dot = (((c[0]-x1)*(x2-x1)) + ((c[1]-y1)*(y2-y1)))/Math.pow(len, 2);
			const closest = {x: x1 + (dot * (x2-x1)), y:y1 + (dot * (y2-y1))};

			distX = closest.x - c[0];
			distY = closest.y - c[1];
			const distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

			if (distance <= c[2]) {
				return true;
			}
			return false;
		},
	},

	rect: {
		tri: function (r, tri) {},
		rect: function (r, rect) {
			if (r[0] + r[2] <= rect[0] && r[0] <= rect[0] + rect[2] && r[1] + r[3] >= rect[1] && r[1] <= rect[1] + rect[3]) {
				return true;
			}
			return false;
		},
		circle: function (rect, circle) {
			// https://stackoverflow.com/a/21096179
			const distX = Math.abs(circle[0] - rect[0] - rect[2] / 2);
			const distY = Math.abs(circle[1] - rect[1] - rect[3] / 2);

			if (distX > rect[2] / 2 + circle[2] || distY > rect[3] / 2 + circle[2]) {
				return false;
			}

			if (distX <= rect[2] / 2 || distY <= rect[3] / 2) {
				return true;
			}

			return (Math.pow(distX - rect[2] / 2, 2) + Math.pow(distY - rect[3] / 2, 2) <= Math.pow(circle[2], 2));
		},
		point: function (rect, p) {
			// [x,y], [x,y,w,h]
			if (p[0] > rect[0] && p[0] < rect[0] + rect[2] && p[1] > rect[1] && p[1] < rect[1] + rect[3]) {
				return true;
			}
			return false;
		},
		line: function (r, line) {},
	},

	tri: {
		tri: function () {},
		rect: function () {},
		circle: function () {},
		point: function (tri, p) {
			let p0x = tri[0], p0y = tri[1], p1x = tri[2];
			let p1y = tri[3], p2x = tri[4], p2y = tri[5];
			let dX = p[0] - p2x, dY = p[1] - p2y, dX21 = p2x - p1x;
			let dY12 = p1y - p2y, D = dY12 * (p0x - p2x) + dX21 * (p0y - p2y), s = dY12 * dX + dX21 * dY;
			let t = (p2y - p0y) * dX + (p0x - p2x) * dY;
			if (D < 0) return s <= 0 && t <= 0 && s + t >= D;
			return s >= 0 && t >= 0 && s + t <= D;
		},
		line: function () {},
	},

	line: {
		line: function (line1, line2) {
			const x1=line1[0],y1=line1[1],x2=line1[2],y2=line1[3],x3=line2[0],y3=line2[1],x4=line1[2],y4=line1[3];
			const uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
			const uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
			if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
				return true;
			}
			return false;
		},
		tri: function () {},
		rect: function (line, rect) {
			const x1=line[0],y1=line[1],x2=line[2],y2=line[3];
			const rx=rect[0],ry=rect[1],rw=rect[2],rh=rect[3];
			let left = lineLine(x1,y1,x2,y2, rx,ry,rx, ry+rh);
			let right = lineLine(x1,y1,x2,y2, rx+rw,ry, rx+rw,ry+rh);
			let top = lineLine(x1,y1,x2,y2, rx,ry, rx+rw,ry);
			let bottom = lineLine(x1,y1,x2,y2, rx,ry+rh, rx+rw,ry+rh);
			if (left || right || top || bottom) {
				return true;
			}
			return false;
		},
		circle: function () {},
		point: function (line, p) {
			const len = Math.sqrt(Math.pow(line[0] - line[2], 2) + Math.pow(line[1] - line[3], 2));
			const d1 = Math.sqrt(Math.pow(line[0] - p[0], 2) + Math.pow(line[1] - p[1], 2));
			const d2 = Math.sqrt(Math.pow(line[2] - p[0], 2) + Math.pow(line[3] - p[1], 2));
			if (d1 + d2 == len) {
				return true;
			}
			return false;
		},
	},
};
