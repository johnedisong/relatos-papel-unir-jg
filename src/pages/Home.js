import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { books } from '../data/books';

function Home() {
    const location = useLocation();
    const [filteredBooks, setFilteredBooks] = useState(books);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get('search') || '';

        if (!searchTerm) {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book => {
                const searchLower = searchTerm.toLowerCase();
                return (
                    book.title.toLowerCase().includes(searchLower) ||
                    book.author.toLowerCase().includes(searchLower)
                );
            });
            setFilteredBooks(filtered);
        }
    }, [location.search]);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Catálogo de Libros</h1>
            {filteredBooks.length === 0 ? (
                <div className="alert alert-info">
                    No se encontraron libros que coincidan con tu búsqueda.
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="col">
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;