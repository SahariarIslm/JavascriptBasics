// constructor

function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummery = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
// Initiate an Object
const book1 = new Book('book one','john doe','2013');
const book2 = new Book('book two','jane doe','2016');

console.log(book2);