import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cartItems } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/home?search=${searchTerm}`);
    };

    const getTotalBooks = () => {
        return cartItems.reduce((total, item) => total +item.quantity, 0);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/home">Relatos de Papel</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <div className="d-lg-flex w-100 justify-content-between align-items-center">


                        <form className="d-flex my-2 my-lg-0 flex-grow-1 mx-lg-3" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar por título o autor..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-light" type="submit">
                                Buscar
                            </button>
                        </form>
                        <button
                            className="btn btn-outline-light mt-2 mt-lg-0 w-lg-auto"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                        >
                            🛒 Carrito ({getTotalBooks()})
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;