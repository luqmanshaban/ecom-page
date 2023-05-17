import React, { useState } from 'react'
import styles from '../styles/Cart.module.scss'
import image from '../images/image-product-1-thumbnail.jpg'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = ({clearCart}) => {
    const [empty, setEmpty] = useState(true)

    const emptyCart = () => {
        clearCart();
        setEmpty(!empty)
    }

  
  return (
    <section className={styles.cart}>
        <h1>Cart</h1>
        <hr />
        {empty ? empty && <><article className={styles.product}>
            <img src={image} alt="product" height={50}/>
            <figure className={styles.info}>
                <h5>Fall Limited Edition Sneakers</h5>
                <p>$125.00 x <span></span> <span id={styles.total}></span></p> 
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