import updateShoppingCart from "./shopping-cart";
import updateBookList from "./book-list";

const reducer = (state , action) => {
    // console.log(action.type);
   return{
       bookList: updateBookList(state, action),
       shoppingCart: updateShoppingCart(state,action)

   }


};
export default reducer;