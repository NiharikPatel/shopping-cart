  import {React, useEffect, useState, useCallback} from 'react'
  import productData from './product-details.json';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import StarRating from './StarRating';
  import { FaShoppingCart } from 'react-icons/fa';
  import { useCart } from './CartContext';
  import ProductDetails from './ProductDetails';

  export default function HomePage() {
      // State variables to manage products, cart, product details, added products, and added message display
    const [products, setProducts] = useState([]);
    const {dispatch} = useCart();
    const [productDetails, setProductDetails] = useState(null);
    const [addedProducts, setAddedProducts] = useState([]);
    const [showAddedMessage, setShowAddedMessage] = useState(false);
    
    
  // Function to add a product to the cart
    const addToCart = useCallback((product)=>{
      if (!addedProducts.includes(product.id)) {
      // Dispatching an action to add the product to the cart
      dispatch({
        type:'ADD_TO_CART',
        product:{
        id: product.id, 
        title: product.title, 
        price:product.price, 
        thumbnail:product.thumbnail,
        discountPercentage:product.discountPercentage
    },});
    // Update the added products state and show added message
    setAddedProducts((prevProducts) => [...prevProducts, product.id]);
    setShowAddedMessage(true);
    // Show added message if the product is already in the cart
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 3000);
  }
  else{
    setShowAddedMessage(true);
     // Show added message if the product is already in the cart
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 3000);
    console.log('already added');
  }
    },[dispatch, addedProducts])

   // fetching and updating product data when the component mounts
    useEffect(()=>{
      setProducts(productData.productData);
    },[]);
     
    // Function to handle click on a product and display its details
    const handleClick = (product) => {
      setProductDetails(product);
    };

    // Function to close the product details modal
    const closeProductDetails = () => {
      setProductDetails(null);
    };

    return (
      <div className='home'>
      <div className="product m-3">
      {showAddedMessage && <div className="added-message">Product added to the cart!</div>}
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card" >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">{product.brand}</p>
                  {product.discountPercentage?(
                    <div>
                  <p className="card-text text-decoration-line-through text-muted">${product.price}</p>
                  <p className="card-text my-2">${Math.round(product.price * (100-product.discountPercentage)/100)}</p>
                  </div>
                  ):
                  ( <p className="card-text">{product.price}</p>
                  )
                }
                  <span className="d-flex justify-content-between align-items-center star">
                    <StarRating  rating={product.rating} />
            <button className="btn btn-primary" onClick={() => handleClick(product)}>View</button>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Add<FaShoppingCart/> </button></span> 
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
      {productDetails && <ProductDetails className="product overlay"  role="dialog" product={productDetails} onClose={closeProductDetails} />}
      </div>
    )
  }
