const Person = require('./Person');
const Book = require('./Book');

class Author extends Person{
	#books;
	constructor(name) {
		super(name);
		this.#books = [];
	}

	make_book(book_name, pages) {
		this.#books.push(new Book(book_name, pages, this));
	}

	book_list() {
		let book_list = [];

		for (let i = 0; i < this.#books.length; ++i) {
			book_list.push(this.#books[i].book_name() + ', ');
		}

		return book_list;
	}

	give_copy_book(book_name) {
		for (let i = 0; i < this.#books.length; ++i) {
			if (book_name == this.#books[i].book_name()) {
				return new Book(book_name, this.#books.book_pages(), this);
			}
		}

		return null;
	}
};

module.export = Author;