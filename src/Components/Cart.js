
import React, { useState } from 'react';
import { useCart } from './CartContext';
import Checkout from './Checkout';

// Creating Cart for display of shopping bag item and link to checkout page
function Cart() {
  const { cart, dispatch } = useCart();
  
  // For decreasing the order quantity.
  const decreaseQuantity = (productId) => {
    dispatch({ type: 'DECREASE_QUANTITY', id: productId });
  };

    // For increasing the order quantity.
  const increaseQuantity = (productId) => {
    dispatch({ type: 'INCREASE_QUANTITY', id: productId });
  };

  // Calculating total price, discount, qty and net pay
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const discount = Math.round(cart.reduce((total, product) => total + product.price * product.quantity * (product.discountPercentage / 100), 0));
  const bill = totalPrice - discount;
  const quantity = cart.reduce((total, product) => total + product.quantity, 0);
  
  //setting order state to pass it as props in checkout component
  let [order, setOrder] = useState(null);

  const orderDetails = () => {
    setOrder({ totalPrice, discount, bill, quantity });
  };

  const closeOrderDetails = () => {
    setOrder(null);
  };

  return (
    <div className="home ">
      <div className="product container ml-5">
        <div className="flex">
          <h4>Your Cart</h4>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="custom-card">
                <div className="custom-card-body row border m-3">
                  <div className="col-2 d-none d-md-block">
                    <img src={product.thumbnail} alt={product.title} width="100px" height="100px" />
                  </div>
                  <div className="col d-flex flex-column justify-content-between p-0">
                    <p>Product: {product.title}</p>
                    <p>Total Price: Rs. {product.price} X {product.quantity}</p>
                    <p>
                      Quantity: <button className="btn btn-info" onClick={() => decreaseQuantity(product.id)}> - </button> {product.quantity} <button className="btn btn-info" onClick={() => increaseQuantity(product.id)}> + </button>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="custom-card-body box p-2">
            <div>
              <p className="flex">
                <span className="text-left">Order Quantity:</span> <span className="float-right">{quantity}</span>
              </p>
              <hr></hr>
              <p className="flex">
                <span>Total Price: </span> <span className="float-right">$ {totalPrice}</span>
              </p>
              <hr></hr>
              <p className="flex">
                <span>Discount: </span> <span className="float-right">$ {discount}</span>
              </p>
              <hr></hr>
              <p className="flex bg-info font-weight-bold p-2">
                <span>You Pay: </span> <span className="float-right">$ {bill}</span>
              </p>
              <hr></hr>
              <div className="d-flex justify-content-end">
                <button className="btn btn-success" onClick={orderDetails}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {order && <Checkout className="product overlay" role="dialog" order={order} onClose={closeOrderDetails} />}
    </div>
  );
}

export default Cart;
