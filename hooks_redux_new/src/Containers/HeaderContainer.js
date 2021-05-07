import {connect} from 'react-redux'
import Header from '../Components/Header'
import cardItems from '../Services/Reducers/Reducers'

// const mapStateToProps = (state) => ({
//     data: state.cardItems
// })

const mapStateToProps = (state) => {
    return {
     // cardItems is our reducer and reducer returns the updated state, hence it is giving us updated data present in state.
    data:state.cardItems
    }
}

const mapDispatchToProps = (dispatch) => {
  return{}   
}

export default connect(mapStateToProps , mapDispatchToProps)(Header)


