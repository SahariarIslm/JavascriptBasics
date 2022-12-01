class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummery(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getAge(){
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return "Barns & Noble";
    }
}

// Instantiate object

const book1 = new Book('book one','john doe','2013');

// console.log(book1);
// book1.revise(2018);
// console.log(book1);
console.log(Book.topBookStore());