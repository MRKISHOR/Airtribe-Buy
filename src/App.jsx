import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Products';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ProductDetailsPage from './pages/ProductDetail';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// Updated ProtectedRoute Component
const RouteGuard = ({ children }) => {
  const isUserAuthenticated = !!localStorage.getItem('token');
  return isUserAuthenticated ? children : <Navigate to='/login' replace />;
};

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:productId' element={<ProductDetailsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route
            path='/cart'
            element={
              <RouteGuard>
                <CartPage />
              </RouteGuard>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  );
}

export default App;
