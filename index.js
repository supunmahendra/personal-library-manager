let library =[];

//new Books to Library
function addBook(title,author){
    var book ={Title:title, Author:author, ReadStatus:"false" }
    library.push(book)
}

addBook("book01","aut01")
addBook("book02","aut02")
addBook("book03","aut02")
addBook("book04","aut04")
addBook("book05","aut02")
addBook("book06","aut06")

//make book as read
function makeAsRead(title){
    const readBookId = library.findIndex(book =>book.Title === title);
    if (readBookId !== -1){
        library[readBookId].ReadStatus = "true"
    }
    else{
        console.log ("book not found")
    }
}

makeAsRead("book02")
makeAsRead("book06")


//Remove book
function removeBook(title){
    const removeBookId = library.findIndex(book =>book.Title === title);
    if (removeBookId !== -1){
        library.splice(removeBookId,1);
    }
    else{
        console.log ("book not found")
    }
}

removeBook("book04")

//list all unread books
let unreadBookTitle
function listUnread(){
    let unreadBooks = library.filter(book => book.ReadStatus === "true")
    return unreadBookTitle = unreadBooks.map(book => book.Title)
}

//listUnread()
//console.log(listUnread())

//find books by author

function findBookByAuthor(author){
    let matchedBooks = library.filter(book => book.Author === author)
    if(matchedBooks.length !== 0){
        return matchBookTitle = matchedBooks.map(book => book.Title)
    }
    else{
        console.log("Author do not exist")
    }
    
}

findBookByAuthor("aut02")
console.log(matchBookTitle)
