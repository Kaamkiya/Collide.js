const Collide = {
	point: {
		tri: function (point, tri = [0, 0, 0, 0, 0, 0]) {
			//////////
			// FIX //
			/////////
		},
		rect: function (p, rect) {
			// [x,y], [x,y,w,h]
			if (
				p[0] > rect[0] &&
				p[0] < rect[0] + rect[2] &&
				p[1] > rect[1] &&
				p[1] < rect[1] + rect[3]
			) {
				return true;
			}
			return false;
		},
		circle: function (p, circle) {
			if (
				Math.sqrt(
					Math.pow(p[0] - circle[0], 2) +
						Math.pow(p[1] - circle[1], 2)
				) < circle[2]
			) {
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
		line: function () {},
	},

	circle: {
		tri: function () {},
		rect: function () {},
		circle: function () {},
	},
};
