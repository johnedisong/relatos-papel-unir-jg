import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart} from "../context/CartContext";
import { books } from '../data/books';
import { formatPrice } from "../utils/formatCoin";

function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const book = books.find(book => book.id === parseInt(id));

    if (!book) {
        return (
            <div className="container mt-5">
                <h2>Libro no encontrado</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/home')}
                >
                    Volver al catálogo
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="img-fluid"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300';
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <h2>{book.title}</h2>
                    <h4 className="text-muted">{book.author}</h4>
                    <p className="lead">{formatPrice(book.price)}</p>
                    <p>{book.description}</p>
                    <p><strong>ISBN:</strong> {book.isbn}</p>
                    <button className="btn btn-success me-2"
                            onClick={() => addToCart(book)}>
                        Añadir al carrito
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate('/home')}
                    >
                        Volver al catálogo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;