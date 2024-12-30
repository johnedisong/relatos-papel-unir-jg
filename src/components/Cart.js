import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import  { formatPrice } from "../utils/formatCoin";

function Cart() {
    const { cartItems, removeFromCart, removeCompletelyFromCart, getTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        const offcanvasElement = document.getElementById('cartOffcanvas');
        if (offcanvasElement) {
            offcanvasElement.classList.remove('show');
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
        navigate('/checkout');
    };

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Carrito de Compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <div key={item.id} className="card mb-3">
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <p className="card-text">
                                        Cantidad: {item.quantity}<br/>
                                        Precio: {formatPrice(item.price)}
                                    </p>
                                    <div className="d-flex gap-2">
                                        {item.quantity > 1 && (
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                -1
                                            </button>
                                        )}
                                            <button className="btn btn-danger btn-sm"
                                                    onClick={() => removeCompletelyFromCart(item.id)}>
                                                Eliminar Todos
                                            </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-3">
                            <h5>Total: {formatPrice(getTotal())}</h5>
                            <button
                                className="btn btn-success"
                                onClick={handleCheckout}
                            >
                                Proceder al pago
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;