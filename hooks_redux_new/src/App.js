import './App.css';
import HeaderContainer from './Containers/HeaderContainer';
import HomeContainer from "./Containers/HomeContainer";
// import User from './User'

function App() {
  return (
    <div className="App">
    
     <h3>Welcome to Redux Tutorial</h3>
     {/* <User userData={{name:'Pravesh', age:22}}/> */}

    <HeaderContainer />
    <HomeContainer />
    
    </div>
  );
}

export default App;
