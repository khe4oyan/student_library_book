const Book = require('./Book');
const Author = require('./Author');

class Library {
	#id;
	#books;

	constructor() {
		this.#id = 0;
		this.#books = new Map();
	}

	add_book(book) {
		this.#books.set(this.#id++, book);
	}

	find_book(book_name) {
		let book_list = [];

		for (let id of this.#books) {
			if (this.#books[id].book_name() == book_name) {
				book_list.push(`${book_name} - ${this.#books[id].book_author().name}`);
			}
		}

		return book_list;
	}

	give_book(id) {
		let tmp = this.#books.get(id);
		this.#books.delete(id);
		return tmp;
	}
};

module.export = Library;