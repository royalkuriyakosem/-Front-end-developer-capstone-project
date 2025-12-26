import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
