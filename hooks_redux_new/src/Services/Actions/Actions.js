import ADD_TO_CART from '../Constants'
import REMOVE_FROM_CART from '../Constants'

export const addToCart = (data) =>{
    // console.warn('action-data', data);

    // console.warn('action', action); action no defined

    return{
        type: "ADD_TO_CART",
        payload: data
    }
}

export const removeFromCart = () =>{
    return{
        type: "REMOVE_FROM_CART",
   }
}
