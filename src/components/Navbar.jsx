import React, { useState } from 'react'
import styles from '../styles/Navbar.module.scss'
import logo from '../images/logo.svg'
import ShoppingCart  from '@mui/icons-material/ShoppingCartOutlined'
import profilePice from '../images/image-avatar.png'
import Cart from './Cart'

const Navbar = ({updateCart, remove}) => {
    //add the active class
    const [isActive, setIsActive] = useState(false)
    const [cartIsActive, setCartIsActive] = useState(false)
    
    const toggleActive = () => {
        setIsActive(!isActive)
    }
    const removeActive = () => {
        setIsActive(false)
    }

    //toggle cart
    const toggleCart = () => {
        setCartIsActive(!cartIsActive)
    }
  return (
    <nav className={styles.navbar}>
        <ul className={styles.leftNav}>
            <li>
                <ul className={styles.logo}>
                    <li className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActive}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </li>
                    <li>
                        <img src={logo} alt="logo" />
                    </li>
                </ul>
            </li>
            <li>
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li className={styles.navItem} onClick={removeActive}>
                        <a href="#home" className={styles.navLink}>Collection</a>
                    </li>
                    <li className={styles.navItem} onClick={removeActive}>
                        <a href="#home" className={styles.navLink}>Men</a>
                    </li>
                    <li className={styles.navItem} onClick={removeActive}>
                        <a href="#home" className={styles.navLink}>Women</a>
                    </li>
                    <li className={styles.navItem} onClick={removeActive}>
                        <a href="#home" className={styles.navLink}>About</a>
                    </li>
                    <li className={styles.navItem} onClick={removeActive}>
                        <a href="#home" className={styles.navLink}>Contact</a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className={styles.rightNav}>
            <li className={styles.cart}>
                <ShoppingCart onClick={toggleCart} sx={{cursor: 'pointer'}} id={styles.icon}/>
                <span id={styles.count}>{updateCart}</span>
                {cartIsActive && <Cart cartCount={updateCart} clearCart={remove}/>}
            </li>
            <li>
                <img id={styles.profile} src={profilePice} alt="profile" />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;