import React from 'react';

const User = (props) =>{
 console.warn("Props ----->>",props.userData)

//  const {userData}=props; 

    return(
      <div>
           <p>Name={props.userData.name}</p>
           <p>Age={props.userData.age}</p>
      </div>
    );
}

export default User
