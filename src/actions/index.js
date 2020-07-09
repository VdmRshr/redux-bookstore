const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};
const booksRequested = () => {
    return 'FETCH_BOOKS_REQUEST'
};
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};
const bookAddedToCart=(bookId)=>{
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload:bookId
    }
}
const bookRemoveFromCart=(bookId)=>{
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload:bookId
    }
}
const allBooksRemoveFromCart=(bookId)=>{
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload:bookId
    }
}

//old version fetchBooks func
const fetchBooksOld=(bookstoreService, dispatch)=> () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error))
        );
};

// new func version with THUNK
const fetchBooks=(bookstoreService)=>()=>(dispatch)=>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error))
        );
};
export {
   fetchBooks,
    bookAddedToCart,
    bookRemoveFromCart,
    allBooksRemoveFromCart
};