import React, { useState } from 'react'
import styles from '../styles/ProductInfo.module.scss'
import  Remove  from '@mui/icons-material/Remove';
import  Add  from '@mui/icons-material/Add';
import { ThemeProvider, createTheme } from '@mui/material';
import  ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const iconsStyle = createTheme({
  palette: {
    primary: {
      main: '#AB4906'
    }
  }
})

const ProductInfo = ({addToCart}) => {
  const [count, setCount] = useState(0)

  //Increment 
  const add = () =>{ 
    setCount(prev => prev + 1)
  }
  //decrement
  const remove = () =>{ 
    setCount(prev => Math.max(prev - 1, 0))
  }
  //add item to cart
  const addItemToCart = () =>{
    addToCart();
  }
  
  return (
    <div className={styles.info}>
      <h5>SNEAKER COMPANY</h5>
      <h1>Fall Limited Edition <br />Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weathe can offer.</p>

      <section className={styles.price}>
        <span>
        <h3>$125.00</h3> <h5>50%</h5>
        </span>
        <p>$250.00</p>
      </section>

      <section className={styles.btn}>
        <ThemeProvider theme={iconsStyle}>
           <span>
           <Remove color='primary' sx={{cursor: 'pointer'}} onClick={remove}/>
           <span>{count}</span>
           <Add color='primary' sx={{cursor: 'pointer'}} onClick={add}/>
           </span>
           <button className={styles.addToCart} onClick={addItemToCart} disabled={count === 0}>
            <ShoppingCartOutlined />
            Add to cart
           </button>
        </ThemeProvider>
      </section>
    </div>
  )
}

export default ProductInfo;