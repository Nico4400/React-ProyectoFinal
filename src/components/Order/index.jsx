import React from 'react'

import styles from './styles.module.css'

const Order = ({ orderId }) => {
    return (
      <div className={styles.Order}>
        <h1>El ID de su compra es: {orderId}</h1>        
      </div>
    )
  }  
  export default Order;