import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/client';
import styles from './styles.module.css';

const Order = ({ orderId }) => {
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            if (!orderId) return;

            try {
                const orderRef = doc(db, 'orders', orderId);
                const orderSnap = await getDoc(orderRef);

                if (orderSnap.exists()) {
                    setOrderData(orderSnap.data());
                } else {
                    console.error('Orden no encontrada');
                }
            } catch (error) {
                console.error('Error al obtener la orden:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (loading) {
        return <h2 className={styles.Loading}>Cargando orden...</h2>;
    }

    if (!orderData) {
        return <h2 className={styles.Error}>No se encontró la orden</h2>;
    }

    const { buyer, items, total } = orderData;

    return (
        <div className={styles.Order}>
            <h1>Orden de Compra</h1>
            <p><strong>ID:</strong> {orderId}</p>

            {/* Datos del comprador */}
            <div className={styles.Buyer}>
                <h2>Datos del Comprador</h2>
                <p><strong>Nombre:</strong> {buyer.name}</p>
                <p><strong>Teléfono:</strong> {buyer.phone}</p>
                <p><strong>Email:</strong> {buyer.email}</p>
            </div>

            {/* Productos Comprados */}
            <div className={styles.Items}>
                <h2>Productos Comprados</h2>

                {console.log("Items de la orden:", orderData.items)}

                {Array.isArray(orderData.items) && orderData.items.length > 0 ? (
                    orderData.items.map((item, index) => (
                        <div key={index} className={styles.Item}>
                            <img src={item.imagen || "default-image.jpg"} alt={item.producto || "Producto"} />
                            <div>
                                <p><strong>Producto:</strong> {item.producto || "Sin nombre"}</p>
                                <p><strong>Cantidad:</strong> {item.cantidad || 0}</p>
                                <p><strong>Precio:</strong> ${item.precio ? item.precio.toFixed(2) : "N/A"}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en la orden.</p>
                )}
            </div>

            <h2 className={styles.Total}>Total: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default Order;
