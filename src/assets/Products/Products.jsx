import React from 'react'
import './Products.css'
import mug from '../Images/mugs.png'

const Products = () => {
  return (
    <div className='products' id='products'>
        <h2>Categories</h2>
        <p>Personalized mugs and frames perfect for businesses and events.</p>

        <div className='product_cards'>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
                <div className='pro_card'>
                    <img src={mug}/>
                    <p>Product 1</p>
                </div>
        </div>
    </div>
  )
}

export default Products
