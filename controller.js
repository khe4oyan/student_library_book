const Author = require('./Author');
const Student = require('./Student');
const Library = require('./Library');

class Controller {
	#lib;
	#authors;
	#students;

	constructor() {
		this.#lib = new Library(); 
		this.#authors = [];
		this.#students = [];
	}

	get students_count() { return this.#students.length; }
	get authors_count() { return this.#authors.length; }

	add_student(name) {
		this.#students.push(new Student(name));
	}

	add_author(name) {
		this.#authors.push(new Author(name));
	}

	create_book(autor_id, name, pages) {
		this.#authors[autor_id].make_book(name, pages);
	}

	student_find(student_id, book_name) {
		this.#students[student_id].find_book(book_name, this.#lib);
	}

	students_read_book() {
		for (let i = 0; i < this.#students.length; ++i) {
			if (this.#students[i].read()) {
				this.#lib.add_book(this.#students[i].return_book());
			}
		}
	}
};

module.exports = Controller;