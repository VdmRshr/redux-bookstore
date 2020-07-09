import React from 'react';

const Header = ({items, total}) => {
    return (
        <header className="card-header row" style={{marginBottom:'30px'}}>
           <div className="col-sm-9"><h2>Bookstore</h2></div>
           <div className="col-sm-3" style={{textAlign:"right"}}><i className="fa fa-shopping-cart"></i>
               {items} items (${total})

           </div>
        </header>
    );
};

export default Header;