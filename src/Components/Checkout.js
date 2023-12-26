import React from 'react'

export default function Checkout({order, onClose}) {
    console.log(order);
  return (
    <div className="modal-dialog modal-dialog-centered checkout " role="document">
      <div className="modal-content">
      <div className="text-end">
    <button type="button" className="btn-close bg-danger" aria-label="Close" onClick={onClose}></button>
  </div>
      <div className="container flex m-0">
      <div className="row p-4">
      <div className="col-md-4 order-md-1 ">
        <h4>Item details</h4>
        <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Total Items</h6>
              </div>
              <span className="text-muted">{order.quantity}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Total Price</h6>
              </div>
              <span className="text-muted">{order.totalPrice}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Discount</h6>
              </div>
              <span className="text-muted">{order.discount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$0</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>You Pay (USD)</span>
              <strong>{order.bill}</strong>
            </li>
          </ul>
          <hr className='mb-4'/>
        </div>
        <div className="col-md-4 order-md-3 ">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" />
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder=""  required="" />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder=""  required="" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

    

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required="">
                  <option >Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required="">
                  <option >Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            </div>
            <div className="col-md-4 order-md-2 mb-4">
            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-input"  required=""/>
                <label className="custom-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-input" required=""/>
                <label className="custom-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-input" required=""/>
                <label className="custom-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                <label htmlFor="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                
                </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col">
                <label htmlFor="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary btn-lg btn-block my-3" type="submit">Continue to checkout</button>
            <hr className="mb-4" />
        </div>
      </div>
      </div>
      </div>
      </div>
     

  )
}
