const Student = require('./Person');
const Book = require('./Book');
const Library = require('./Library');

class Student extends Student{
	#book;
	constructor(name) {
		this.#book = null;
		super(name);
	}

	read() {
		return this.#book.read();
	}

	#set_book(book) {
		this.#book = book;
	}

	find_book(book_name, lib) {
		// come back when done lib.js
		let book_list = lib.find_book(book_name);
		let rand_book_id = Math.floor(Math.random() * book_list.length);
		this.get_book(rand_book_id, lib);
	}

	get_book(book_id, lib) {
		// come back when done lib.js
		this.#set_book(lib.give_book(book_id));
	}

	return_book() {
		let tmp = this.#book;
		this.#book = null;
		return tmp;
	}
};

module.export = Student;