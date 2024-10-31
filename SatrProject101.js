let BooksInfo = [
    { id: 1, book: "Start with why", author: "Simon Sinek", price: 80.0, quantity: 13 },
    { id: 2, book: "But how do it know", author: "J. Clark Scott", price: 59.9, quantity: 22 },
    { id: 3, book: "Clean Code", author: "Robert Cecil Martin", price: 50.0, quantity: 5 },
    { id: 4, book: "Zero to One", author: "Peter Thiel", price: 45.0, quantity: 12 },
    { id: 5, book: "You don't know JS", author: "Kyle Simpson", price: 39.9, quantity: 9 }
]

function searchBooks(input) {
let available= false;
    for (let i = 0; i < BooksInfo.length; i++) {
        if (typeof input === 'number'){
            if (input === BooksInfo[i].id) {
                available=true;
                console.log(`id: ${BooksInfo[i].id}, book:${BooksInfo[i].book}, author: ${BooksInfo[i].author}, price:${BooksInfo[i].price} , quantity: ${BooksInfo[i].quantity}`)
                return i ;
            }
        }
        else if (input.toLowerCase() === BooksInfo[i].book.toLowerCase() || input.toLowerCase() === BooksInfo[i].author.toLowerCase()) {
            available=true;
            console.log(`id: ${BooksInfo[i].id}, book:${BooksInfo[i].book}, author: ${BooksInfo[i].author}, price:${BooksInfo[i].price} , quantity: ${BooksInfo[i].quantity}`)
            return i ;
        }
    }
    if(!available){
        console.log("Sorry book not available");
        return -1;
    }
}


function sellBooks(book,quantity,currentBalance ){
    console.log(`Welcome! We're checking if the book you requested is available...`);
    
    let bookAvailability = searchBooks(book);
    
    if(bookAvailability===-1){
        return ;
    }
    
    if (quantity>BooksInfo[bookAvailability].quantity){
        console.log(`The specified quantity is not available. The available quantity is: ${BooksInfo[bookAvailability].quantity}`);
    }
    else if (quantity<=BooksInfo[bookAvailability].quantity){
        let cost= BooksInfo[bookAvailability].price * quantity
    
        console.log(`Total cost: ${cost}`);
        if(cost<=currentBalance){
            let remaining= currentBalance-cost;
            console.log("Sale successful! Enjoy your purchase!")
            console.log(`Remaining balance: ${remaining}`)
        }
        else {
            console.log("Sorry your balance is insufficient");
    
        }
    
    }
    
    }

searchBooks(1);  //Search by book ID
searchBooks("zero to one");  //Search by book name
searchBooks("Kyle Simpson");  //Search by book author

sellBooks("Clean Code",3,1000);


