import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../Services/Actions/Actions'
import Home from "../Components/Home";

const mapStateToProps = (state) => ({
    // cardItems is our reducer and reducer returns the updated state, hence it is giving us updated data present in state.
    
    data:state.cardItems
    
})

const mapDispatchToProps = (dispatch) => ({
     
    // dispatcher:- dispatches the action.

        addToCartHandler:(data) => {
            dispatch(addToCart(data))
        
        },
         removeFromCartHandler:()=>{
            dispatch(removeFromCart())   
        }
    })


export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;
