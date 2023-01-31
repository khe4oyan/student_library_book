const Author = require('./Author');

class Book {
	#name;
	#pages;
	#author;
	#bookmark;
	constructor(name, pages, author) {
		this.#name = name;
		this.#pages = pages;
		this.#author = author;
		this.#bookmark = 0;
	}

	get book_name() { return this.#name; }
	get book_pages() { return this.#pages; }
	get book_author() { return this.#author; }
	read() {
		return (++this.#bookmark == this.#pages) ? true : false;
	}
};

module.export = Book;