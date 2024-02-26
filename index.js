let library =[];

//new Books to Library
function addBook(title,author){
    var book ={Title:title, Author:author, ReadStatus:"false" }
    library.push(book)
}

addBook("book01","aut01")
addBook("book02","aut02")
addBook("book03","aut03")

//make book as read
function makeAsRead(title){
    const readBook = library.findIndex(book =>book.Title === title);
    if (readBook !== -1){
        library[readBook].ReadStatus = "true"
    }
    else{
        console.log ("book not found")
    }
}

makeAsRead("book02")
console.log(library)