import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { formatPrice } from "../utils/formatCoin";

function BookCard({ book }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="card h-100" style={{ width: '18rem' }}>
            <img
                src={book.cover}
                className="card-img-top"
                alt={book.title}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{formatPrice(book.price)}</p>
                <button
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    Ver detalles
                </button>
            </div>
        </div>
    );
}

export default BookCard;