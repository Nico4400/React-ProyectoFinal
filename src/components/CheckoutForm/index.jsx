import { useState } from "react"

import { Button } from "antd"

import styles from './styles.module.css' 

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')    
    const [phone, setPhone] = useState('')    
    const [email, setEmail] = useState('')

    const confirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className={styles.Container}>
            <form onSubmit={confirm} className={styles.Form}>
            
                <label className={styles.Label}>
                    Nombre:
                    <input
                        className={styles.Input} 
                        type="text"
                        value={name}
                        onChange={ ({target}) => setName(target.value)}
                     />
                </label>

                <label className={styles.Label}>
                    Telefono:
                    <input
                        className={styles.Input} 
                        type="text"
                        value={phone}
                        onChange={ ({target}) => setPhone(target.value)}
                     />
                </label>

                <label className={styles.Label}>
                    Email:
                    <input
                        className={styles.Input} 
                        type="text"
                        value={email}
                        onChange={ ({target}) => setEmail(target.value)}
                     />
                </label>

                <div className={styles.Boton}>
                    <button type='submit'>Finalizar Comprar</button>
                </div>
            </form>
        </div>
    )
}
export default CheckoutForm