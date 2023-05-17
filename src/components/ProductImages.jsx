import React, { useState } from 'react';
import styles from '../styles/ProductImages.module.scss'
//images
import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';

const ProductImages = () => {
    //keep track of the current rendered image
    //The default image is image 1
    const [selectedImage, setSelectedImage] = useState('image1')

    //Reneders the image that corresponds the clicked thumnail
    const ImageClick = product => setSelectedImage(product)

    //style the thumnail when it's corresponding image is rendered
    const blurSelectedImage = product =>  selectedImage === product ? {filter: 'blur(4px)'} : {}

  return (
    <div className={styles.productImages}>
        {/* This code snippet renders the truthy image only */}
        <section className={styles.mainImages}>
           {selectedImage === 'image1' && <img src={image1} alt='image1' height={500} />} 
           {selectedImage === 'image2' && <img src={image2} alt='image2' height={500} />} 
           {selectedImage === 'image3' && <img src={image3} alt='image3' height={500} />} 
           {selectedImage === 'image4' && <img src={image4} alt='image4' height={500} />} 
        </section>

         {/* This code snippet renders the thumnails */}
        <section className={styles.thumnails}>
           <img src={thumb1} alt='thumnail1' height={100} style={blurSelectedImage('image1')} onClick={() => ImageClick('image1')} />
   
           <img src={thumb2} alt='thumnail2' height={100} style={blurSelectedImage('image2')} onClick={() => ImageClick('image2')}/>
           
           <img src={thumb3} alt='thumnail3' height={100} style={blurSelectedImage('image3')} onClick={() => ImageClick('image3')}/>
           
           <img src={thumb4} alt='thumnail4' height={100} style={blurSelectedImage('image4')} onClick={() => ImageClick('image4')}/>
        </section>
    </div>
  );
};

export default ProductImages;
