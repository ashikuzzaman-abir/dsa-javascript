class Set {
	constructor() {
		this.collection = [];
	}

	has = (value) => {
		return this.collection.indexOf(value) !== -1;
	};

	values = () => {
		return this.collection;
	};
	add = (value) => {
		if (this.has(value)) {
			return false;
		}
		this.collection.push(value);
	};
	remove = (value) => {
		if (!this.has(value)) {
			return false;
		}
		this.collection.splice(this.collection.indexOf(value), 1);
		return true;
	};

	size = () => {
		return this.collection.length;
	};

	union = (otherSet) => {
		const unionSet = new Set();
		const firstSet = this.values();
		const secondSet = otherSet.values();
		firstSet.forEach((value) => unionSet.add(value));
		secondSet.forEach((value) => unionSet.add(value));
		return unionSet;
	};
	intersection = (otherSet) => {
		const intersectionSet = new Set();
		const firstSet = this.values();
		firstSet.forEach((value) => {
			if (otherSet.has(value)) {
				intersectionSet.add(value);
			}
		});
		return intersectionSet;
	};
	difference = (otherSet) => {
		const differenceSet = new Set();
		const firstSet = this.values();
		firstSet.forEach((value) => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});
		return differenceSet;
	};
	subset = (otherSet) => {
		const firstSet = this.values();
		return firstSet.every((value) => otherSet.has(value));
	};
}

module.exports = Set;
