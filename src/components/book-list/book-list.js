import React, {Component} from "react";
import BooksListItem from "../book-list-item/books-list-item";
import {connect} from 'react-redux';
import withBookstoreService from "../hoc/with-bookstore-service";
import {fetchBooks, bookAddedToCart} from '../../actions/index';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import {bindActionCreators} from "redux";

const BookList = ({books, onAddedToCart}) => {
    return (
        <main className='row'>
            {books.map((book) => {
                return (
                    <div key={book.id} className="col" style={{display: 'flex', justifyContent: 'center'}}>
                        <BooksListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                    </div>
                )
            })}
        </main>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return (
            <BookList books={books}
                      onAddedToCart={onAddedToCart}/>
        );
    }
}


const mapStateToProps = ({bookList:{books, loading, error}}) => {
    return {
        books,
        loading,
        error
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;

    //old return for old fetchBooks func!!!
    // return {
    //     fetchBooks: fetchBooks(bookstoreService, dispatch),
    //     onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    // }

    // new return with bindActionCreators for new fetchBooks func
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
};
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));