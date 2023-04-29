import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Welcome to Our Invoice Generator Web App! </h1>
                <div className={styles.paragraph}>
                   
                    <p>Generate customized invoices for your business needs in just a few clicks, saving you time and effort.</p>
                </div>
                <div className={styles.imgContainer}>
                    {/* <img src="https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png" alt="invoicing-app"/> */}
                </div>
            </section>
        </div>
    )
}

export default Home
