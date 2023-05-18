/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import styles from '../styles/ProductImages.module.scss';
import ArrowRightIcon from '@mui/icons-material/ChevronRight';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// images
import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState('image1');

  const images = {
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
  };

  const thumbnails = {
    image1: thumb1,
    image2: thumb2,
    image3: thumb3,
    image4: thumb4,
  };

  const imageKeys = Object.keys(images);
  const currentIndex = imageKeys.findIndex((key) => key === selectedImage);

  const handleClickNext = () => {
    const nextIndex = (currentIndex + 1) % imageKeys.length;
    setSelectedImage(imageKeys[nextIndex]);
  };

  const handleClickPrevious = () => {
    const previousIndex = (currentIndex - 1 + imageKeys.length) % imageKeys.length;
    setSelectedImage(imageKeys[previousIndex]);
  };

  const ImageClick = (product) => setSelectedImage(product);

  const blurSelectedImage = (product) =>
    selectedImage === product ? { filter: 'blur(4px)' } : {};

  return (
    <div className={styles.productImages}>
      {/* Main images */}
      <section className={styles.mainImages}>
        {Object.keys(images).map((key) => (
          selectedImage === key && (
            <img
              key={key}
              src={images[key]}
              alt={`image${key}`}
              height={500}
            />
          )
        ))}
      </section>

      {/* Thumbnails */}
      <section className={styles.thumbnails}>
        {Object.keys(thumbnails).map((key) => (
          <img
            key={key}
            src={thumbnails[key]}
            alt={`thumbnail${key}`}
            height={100}
            style={blurSelectedImage(key)}
            onClick={() => ImageClick(key)}
          />
        ))}
      </section>

      {/* Arrow icons */}
      <section className={styles.icons}>
        <span id={styles.leftIcon} onClick={handleClickPrevious}>
          <ArrowLeftIcon />
        </span>
        <span id={styles.rightIcon} onClick={handleClickNext}>
          <ArrowRightIcon />
        </span>
      </section>
    </div>
  );
};

export default ProductImages;
