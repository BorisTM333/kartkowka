let books = [

    { title: "Władca Pierścieni", author: "J.R.R. Tolkien", year: 1954, available: true, rating: 5 },

    { title: "1984", author: "George Orwell", year: 1949, available: false, rating: 4 },

    { title: "Hobbit", author: "J.R.R. Tolkien", year: 1937, available: true, rating: 5 },

    { title: "Folwark zwierzęcy", author: "George Orwell", year: 1945, available: true, rating: 4 },

    { title: "Duma i uprzedzenie", author: "Jane Austen", year: 1813, available: false, rating: 4 },

    { title: "Harry Potter", author: "J.K. Rowling", year: 1997, available: true, rating: 5 },

    { title: "Miasteczko Twin Peaks", author: "Mark Frost", year: 1990, available: true, rating: 3 }

];

for (let book of books) {
    if(book.available === true) {
        console.log("Tytuł: "+book.title+ ", Autor: "+book.author);
    }
}

console.log(" ");

let dostępne =0;
let unavailable = 0;
for (var i=0; i < books.length; i++) {
    if (books[i].available) {
        dostępne++;
    }
    else {
        unavailable++;
    }





}
if (!books.available) {;
    console.log("Dostępnych jest: " + dostępne);
    console.log("Niedostępnych jest: " + unavailable);


    let searchAuthor = "George Orwell";

    i=0
    let found = 0;
    while (i<7) {
        if (books.author === searchAuthor) {
            console.log("Found " +books[i].title);
            found++;

        }
        i++;
    }
}