import React, { useState } from 'react'
import styles from '../styles/Cart.module.scss'
import image from '../images/image-product-1-thumbnail.jpg'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = ({ cartCount,clearCart}) => {
    const [empty, setEmpty] = useState(cartCount);
    const total = 125.00;

    const emptyCart = () => {
        clearCart();
        setEmpty(0)
    }

  
  return (
    <section className={styles.cart}>
        <h1>Cart</h1>
        <hr />
        {empty !== 0 ? empty && <><article className={styles.product}>
            <img src={image} alt="product" height={50}/>
            <figure className={styles.info}>
                <h5>Fall Limited Edition Sneakers</h5>
                <p>$125.00 x <span>{cartCount}</span><span id={styles.total}>${total * cartCount}</span></p> 
            </figure>
            <DeleteForeverIcon sx={{color: 'grey', cursor: 'pointer'}} onClick={emptyCart}/>
            <br />

        </article>
         <button>
         Checkout
        </button>
        </>
         :
         <h5 id={styles.empty}>Cart is Empty</h5>}
    </section>
  )
}

export default Cart;