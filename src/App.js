import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Footer from './components/Footer';
import BookDetail from './pages/BookDetail';
import './App.css';
import Checkout from "./pages/Checkout";

function App() {
    return (
        <CartProvider>
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Cart />
                <Footer />
            </div>
        </BrowserRouter>
        </CartProvider>
    );
}

export default App;