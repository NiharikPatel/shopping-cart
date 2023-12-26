import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';

function ProductDetails({product, onClose}) {
 
  console.log(product)

  return (
   
   
     
    <div className="modal-dialog modal-dialog-centered " style={{ maxWidth: '800px' }} role="document">
      <div className="modal-content bg-light">
        <div className="modal-header m-2">
        <div className="col-6">
    <h5 className="modal-title my-2">{product.title}</h5>
  </div>
  <div className="col-6 text-end">

    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    <h6 className="modal-title star"><StarRating rating={product.rating} /></h6>
  </div>
       
        </div>
        <div className="modal-body m-2" >
        <div id={`carousel-${product.id}`} className="carousel slide" data-ride="carousel"  style={{margin: '0 auto', overflow: 'hidden' }}>
              <div className="carousel-inner" style={{justifyItems:'center', width:'100%' }}  >
                {product.images.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ textAlign:'center' }}>
                             <img src={image}  alt={`Product ${index + 1}`} style={{ width:'300px', height:'auto' }} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'rgb(255, 221, 221)' }}></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${product.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: 'rgb(255, 221, 221)' }}></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {product.discountPercentage?(
                  <div>
                <p><b>Price: </b><span className="card-text text-decoration-line-through text-muted"> ${product.price}</span>
                <span className="card-text my-2"> ${Math.round(product.price * (100-product.discountPercentage)/100)}</span>
                </p> </div>
                ):
                ( <p className="card-text">$ {product.price}</p>
                )}
                
                <p><b>Brand: </b>{product.brand}</p>
               <p><b>Description: </b>{product.description}</p>
               <p><b>Category: </b>{product.category}</p>
          
         
       
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
