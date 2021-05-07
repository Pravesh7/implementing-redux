import {ADD_TO_CART, REMOVE_FROM_CART} from '../Constants'

// const initialState={
//     cardData: []
// }

export default function cardItems(state=[], action){

    switch(action.type){
     case ADD_TO_CART:
        // console.warn('reducer---->', action)
        return[         
                ...state,
                {cardData: action.payload}
        ] 
            break;
      case REMOVE_FROM_CART:
      state.pop();    
      return[
              ...state,
          ]     
          break; 
        default:
            return state
    }

}