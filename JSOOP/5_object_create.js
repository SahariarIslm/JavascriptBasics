// Object of Protos

const bookProtos = {
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function(){
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title='Book One';
// book1.author='John';
// book1.year='2013';
const book1 = Object.create(bookProtos,{
    title: {value: 'Book One'},
    author: {value: 'John'},
    year: {value: '2013'},
});
console.log(book1);