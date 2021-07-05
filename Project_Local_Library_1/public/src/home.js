function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre)
  const genreCount = genres.reduce((acc, genre)=> {
    if (!acc[genre]) {
      acc[genre] = 1 ;
    } else {
      acc[genre]++ ;
    }
    return acc;
  }, {})
   let genresArr = [];
  for (let genre in genreCount) {
    const count = genreCount[genre];
    genresArr.push({name: `${genre}`, count: count });
  }
  return getTopFive(genresArr)
}

function getMostPopularBooks(books) {
  let mostPopular = [];
  books.forEach((book) => mostPopular.push({
    name: book.title, count:book.borrows.length
  }))
  return getTopFive(mostPopular)
}

function getMostPopularAuthors(books, authors) {
  let authorsArr = [];
  authors.forEach(author => {
    let authorObj = {}; //create an object for each author
    const {name: {first, last}} = author 
    authorObj.name = `${first} ${last}`;
    authorObj.count = 0;
    books.forEach(book => {
      if (book.authorId === author.id) {
        authorObj.count += book.borrows.length
      }
    })
    authorsArr.push(authorObj);
  })
  return getTopFive(authorsArr)
}
//

function getTopFive(array){
  let result = array.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, 5)
  return result
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
