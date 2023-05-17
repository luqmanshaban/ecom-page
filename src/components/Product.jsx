 import React from 'react'
 import styles from '../styles/Product.module.scss'
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
 
 const Product = ({add}) => {
   return (
     <div className={styles.product}>
      <ProductImages />
      <ProductInfo addToCart={add} />
     </div>
   )
 }
 
 export default Product;