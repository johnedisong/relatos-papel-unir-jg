import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {formatPrice} from "../utils/formatCoin";

function Checkout() {
    const { cartItems, getTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        clearCart();
        setShowModal(false);
        navigate('/home');
    };

    return (
        <>
            <div className="container mt-5">
                <h2>Resumen de tu pedido</h2>
                <div className="row mt-4">
                    <div className="col-md-8">
                        {cartItems.map(item => (
                            <div key={item.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        Cantidad: {item.quantity}<br/>
                                        Precio unitario: {formatPrice(item.price)}<br/>
                                        Subtotal: {formatPrice(item.price * item.quantity)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total del pedido</h5>
                                <h3 className="card-text">{formatPrice(getTotal())}</h3>
                                <button
                                    className="btn btn-success w-100 mt-3"
                                    onClick={handleCheckout}
                                >
                                    Confirmar pedido
                                </button>
                                <button
                                    className="btn btn-outline-secondary w-100 mt-2"
                                    onClick={() => navigate('/home')}
                                >
                                    Seguir comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Confirmación */}
            <div className={`modal fade ${showModal ? 'show' : ''}`}
                 style={{ display: showModal ? 'block' : 'none' }}
                 tabIndex="-1"
                 role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">¡Pedido Exitoso!</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleConfirm}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Tu pedido ha sido procesado correctamente.</p>
                            <p>Gracias por comprar en Relatos de Papel.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleConfirm}
                            >
                                Volver al catálogo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop del modal */}
            {showModal && (
                <div
                    className="modal-backdrop fade show"
                    onClick={() => setShowModal(false)}
                ></div>
            )}
        </>
    );
}

export default Checkout;