import React, { useState } from "react";
import Iphone from "../Images/iphone.png";
import watch from "../Images/watch.jpg";
import cart from "../Images/cart.jpg";
import { addToCart } from "../Services/Actions/Actions";

function Home(props) {
  const displayStyle = {
    position: "absolute",
    bottom: "0%",
    top: "15%",
    left: "60%",
  };
  // console.warn("Home", props.data)
  // console.warn("Length--->>>", props.data.length)
  const [flag, setFlag] = useState(false);
  const displayItems = (props) => {
    console.log("display item", props.data);
    setFlag(true);
  };
  const showItems = () => {
    return props.data.map((value, key) => (
      <div key={key}>
        <br />
        <span>{key + 1}) Item Name: </span>
        {value.cardData.name}
        <br />
        <span>Item Price: </span>${value.cardData.price}
        <hr />
      </div>
    ));   
  };
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={Iphone} alt="Image here" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button
            className="btn btn-primary"
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "I-Phone" })
            }
          >
            Add to Cart
          </button>

          <span> </span>

          <button
            className="btn btn-primary"
            onClick={() => props.removeFromCartHandler()}
          >
            Remove from Cart
          </button>
        </div>
      </div>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={watch} alt="Image here" />
        </div>

        <div className="text-wrapper item">
          <span>Watch</span>
          <span>Price: $500.00</span>
        </div>

        <div className="btn-wrapper item">
          <button
              className="btn btn-primary"
            onClick={() =>
              props.addToCartHandler({ price: 5000, name: "Watch" })
            }
          >
            Add to Cart
          </button>

          <span> </span>

          <button
            className="btn btn-primary"
            onClick={() => props.removeFromCartHandler()}
          >
            Remove from Cart
          </button>
        </div>
      </div>
      <div style={displayStyle}>
        <button className="btn btn-primary" onClick={() => displayItems(props)}>
          Display items
        </button>
        {flag && showItems()}
      </div>
    </div>
  );
}

export default Home;
