function anyCollision(player, targets) {
	var rect1 = player.getBoundingClientRect();
	for (var i = 0; i < targets.length; i++) {
		var target = targets[i];
		var rect2 = target.getBoundingClientRect();
		var overlap = !(
			rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom
		);
		if (overlap && player != target) {
			return true;
		}
	}
	return false;
}

function isColliding(player, targets) {
	return anyCollision(player, targets);
}

function allCollisions(player, targets) {
	var collisions = [];
	var rect1 = player.getBoundingClientRect();
	for (var i = 0; i < targets.length; i++) {
		var target = targets[i];
		var rect2 = target.getBoundingClientRect();
		var overlap = !(
			rect1.right < rect2.left ||
			rect1.left > rect2.right ||
			rect1.bottom < rect2.top ||
			rect1.top > rect2.bottom
		);
		if (overlap && player != target) {
			collisions.push(target);
		}
	}
	return collisions;
}

function getCollisions(player, targets) {
	return allCollisions(player, targets);
}
