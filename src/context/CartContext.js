import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === book.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === book.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            }
            return [...prevItems, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (bookId) => {
        setCartItems(prevItems =>{
          const existingItem = prevItems.find(item => item.id === bookId);
          if (existingItem.quantity === 1) {
              return prevItems.map(item => item.id !== bookId);

          } else {
              return prevItems.map(item =>
                  item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
              );
          };
        });
    };


    const removeCompletelyFromCart = (bookId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== bookId)
        );
    };

    const getTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                removeCompletelyFromCart,
                getTotal,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}