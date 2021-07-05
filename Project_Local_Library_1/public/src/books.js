const {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
} = require("./accounts.js");

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
    const notReturned = books.filter(book => book.borrows[0].returned === false)
    const returned = books.filter(book => book.borrows[0].returned === true)
    return [notReturned, returned]
}

function getBorrowersForBook(book, accounts) {
  let borrow = [];
  book.borrows.forEach((transaction) => {
    const account = findAccountById(accounts, transaction.id) 
    account.returned = transaction.returned
    borrow.push(account)
  })
  return borrow.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook
};
