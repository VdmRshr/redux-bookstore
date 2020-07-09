import React from 'react';
import {connect} from 'react-redux';
import {bookAddedToCart,
    bookRemoveFromCart,
    allBooksRemoveFromCart} from'../../actions';

const CartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <th scope="row">{idx+1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td align='center'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                                onClick={() => onIncrease(id)}
                                className="btn-success">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                        <button type="button"
                                onClick={() => onDecrease(id)}
                                className="btn btn-warning">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                        <button type="button"
                                onClick={() => onDelete(id)}
                                className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        )
    };

    return (
        <table className="table" style={{marginTop: '40px'}}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Count</th>
                <th scope="col">Price</th>
                <th scope="col" align='center'>Action</th>
            </tr>
            </thead>
            <tbody>
            {items.map(renderRow)}
            </tbody>
            <div><span>Total: </span><span style={{color: 'red'}}>{total}</span></div>
        </table>

    );
};
const mapStateToProps = ({shoppingCart:{cartItems, total}}) => {
    return {
        items: cartItems,
        total
    }
};
const mapDispatchToProps =  {

        onIncrease: bookAddedToCart,
        onDecrease: bookRemoveFromCart,
        onDelete: allBooksRemoveFromCart,

};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);