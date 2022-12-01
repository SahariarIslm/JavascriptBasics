const book1 = {
    title:'Book One',
    author:'John',
    year:'2013',
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title:'Book Two',
    author:'Jane',
    year:'2016',
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(Object.values(book2));
console.log(Object.keys(book2));