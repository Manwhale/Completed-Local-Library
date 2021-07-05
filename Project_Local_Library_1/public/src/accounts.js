
function findAccountById(accounts, id) {
  return accounts.find((name, match) => name.id === id)
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((account1, account2) => {  
    return account1.name.last > account2.name.last ? 1 : -1
  })
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc,book) => {
    let users = book.borrows.map(borrow => borrow.id);
    if(users.includes(account.id)){
      acc++
    }
    return acc
  }, 0)
}
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter() find all books author has
  const booksUserHas = books.filter(book => !book.borrows[0].returned && book.borrows[0].id === account.id);
  let array = [];
  booksUserHas.forEach(book => {
  let author = findAuthorById(authors, book.authorId);
  const { id, title, genre, authorId, borrows } = book;
    array.push( {id, title, genre, authorId, author: author, borrows} )
  })
  return array
  //add authors []
  //forEach()
  //-find author by id^^ sort()-
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
