class Timer {
	constructor(interval) {
		this.interval = interval;
		this.value = 0;
	}

	ready() {
		this.value += 1;
		if (this.value >= this.interval) {
			this.value = 0;
			return true;
		} else {
			return false;
		}
	}
}
