import React from 'react'
import product from '../../api/Product.json'
import BeforeButton from '../cartButtons/BeforeButton'
import AfterButton from '../cartButtons/AfterButton'
import './ProductList.css'
const ProductList = () => {
  return (
    <section className='container'> 
      {product?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
               <button product={product} >hello</button>
               <BeforeButton/>
               <AfterButton/>
            </div>
         ))}

    </section>
  )
}

export default ProductList
