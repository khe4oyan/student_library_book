class Person {
	#name;
	constructor(name) {
		this.#name = name;
	}

	get name() { return this.#name; }
};

module.export = Person;