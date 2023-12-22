import React, { useState } from 'react'
import product from '../../api/Product.json'
import BeforeButton from '../cartButtons/BeforeButton'
import AfterButton from '../cartButtons/AfterButton'
import './ProductList.css'
const ProductList = () => {
    const [count,setCount]=useState(0)
    const addTocart=()=>{
        setCount(1)
    }
  return (
    <section className='container'> 
      {product?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
               {count > 0 ? <AfterButton/> :  <BeforeButton addTocart={addTocart}/>}
              
               
            </div>
         ))}

    </section>
  )
}

export default ProductList
