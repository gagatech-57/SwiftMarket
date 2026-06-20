import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart';
import { RiCheckboxCircleLine, RiNotification3Line } from 'react-icons/ri';
// Database backend handles product data
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? ''
  : 'https://swiftmarket-d9vz.onrender.com';

function App() {
  // 1. Initial State
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') || null; // 'buyer' or 'seller'
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return {
      email: localStorage.getItem('currentUserEmail') || '',
      name: localStorage.getItem('currentUserName') || ''
    };
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message: string, type: 'success' | 'info' }
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  // Fetch products from database
  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    fetch(`${API_BASE}/api/products`, { headers })
      .then(res => {
        if (!res.ok) throw new Error('Failed to load products');
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return res.json();
        }
        throw new Error('Server returned an invalid content-type');
      })
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, [isLoggedIn, userRole]);

  // Validate JWT session token on load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${API_BASE}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        if (!res.ok) throw new Error('Session expired');
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return res.json();
        }
        throw new Error('Invalid server response format');
      })
      .then(data => {
        setIsLoggedIn(true);
        setUserRole(data.role);
        setCurrentUser({ email: data.email, name: data.name });
        if (data.cart) {
          setCart(data.cart);
        }
      })
      .catch(err => {
        console.warn('Auto-login failed:', err.message);
        handleLogout();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Persist State in LocalStorage (Products managed in database, only syncing Cart/Theme)

  // Sync cart list to database when client cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const token = localStorage.getItem('token');
    if (token && isLoggedIn && userRole === 'buyer') {
      fetch(`${API_BASE}/api/cart/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cart })
      })
      .catch(err => console.error('Error syncing cart:', err));
    }
  }, [cart, isLoggedIn, userRole]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);



  // 4. Helper functions
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 4. Session actions
  function handleLogin(role, email, token, name, dbCart) {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentUser({ name, email });
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    localStorage.setItem('currentUserEmail', email);
    localStorage.setItem('currentUserName', name);
    localStorage.setItem('token', token);
    if (dbCart) {
      setCart(dbCart);
      localStorage.setItem('cart', JSON.stringify(dbCart));
    }
    showToast(`Welcome! Logged in as ${role === 'buyer' ? 'Buyer' : 'Seller'}`, 'success');
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentUser({ name: '', email: '' });
    setIsCartOpen(false);
    setCart([]);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUserEmail');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    showToast('Logged out successfully.', 'info');
  }

  // 5. Product actions (Seller)
  const handleAddProduct = (newProduct) => {
    const token = localStorage.getItem('token');
    fetch(`${API_BASE}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to save product');
      return res.json();
    })
    .then(savedProduct => {
      if (newProduct.id) {
        setProducts(prev => prev.map(p => p.id === savedProduct.id ? savedProduct : p));
        setCart(prev => prev.map(item => item.id === savedProduct.id ? { ...item, ...savedProduct } : item));
        showToast(`Updated product "${savedProduct.name}" successfully!`);
      } else {
        setProducts(prev => [savedProduct, ...prev]);
        showToast(`Product "${savedProduct.name}" added successfully!`);
      }
    })
    .catch(err => {
      showToast(`Error: ${err.message}`, 'error');
    });
  };

  const handleDeleteProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    const token = localStorage.getItem('token');
    fetch(`${API_BASE}/api/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete product');
      return res.json();
    })
    .then(() => {
      setProducts(prev => prev.filter(p => p.id !== productId));
      setCart(prev => prev.filter(item => item.id !== productId));
      showToast(`Removed product "${product?.name || 'Item'}"`);
    })
    .catch(err => {
      showToast(`Error: ${err.message}`, 'error');
    });
  };

  // 6. Cart Actions (Buyer)
  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        showToast(`Increased quantity of "${product.name}" in cart`);
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      showToast(`"${product.name}" added to cart!`);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateCartQty = (productId, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.id === productId);
      if (!item) return prev;

      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        showToast(`Removed "${item.name}" from cart`);
        return prev.filter(i => i.id !== productId);
      }

      return prev.map(i => i.id === productId ? { ...i, quantity: newQty } : i);
    });
  };

  const handleRemoveFromCart = (productId) => {
    const item = cart.find(i => i.id === productId);
    setCart(prev => prev.filter(i => i.id !== productId));
    showToast(`Removed "${item?.name || 'item'}" from cart`);
  };

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    setIsCheckoutSuccess(true);
  };

  // Cart total quantities
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Navbar 
            userRole={userRole} 
            currentUser={currentUser}
            theme={theme} 
            toggleTheme={toggleTheme} 
            cartCount={totalCartCount} 
            toggleCart={() => setIsCartOpen(!isCartOpen)} 
            onLogout={handleLogout}
          />

          <main className="content-container">
            {userRole === 'seller' ? (
              <SellerPage 
                products={products} 
                onAddProduct={handleAddProduct} 
                onDeleteProduct={handleDeleteProduct} 
              />
            ) : (
              <BuyerPage 
                products={products} 
                onAddToCart={handleAddToCart} 
                cart={cart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            )}
          </main>

          {/* Slide Drawer Cart */}
          <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cartItems={cart} 
            onUpdateQty={handleUpdateCartQty} 
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}

      {/* Checkout Success Modal */}
      {isCheckoutSuccess && (
        <div className="modal-overlay fade-in">
          <div className="modal-content scale-up" style={{ maxWidth: '450px' }}>
            <div className="success-screen">
              <div className="success-icon-wrapper">
                <RiCheckboxCircleLine />
              </div>
              <h3 className="success-title">Order Placed Successfully!</h3>
              <p className="success-text">
                Thank you for your purchase. We are processing your mock payment and order details. 
                Have a great day!
              </p>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsCheckoutSuccess(false)}
                style={{ width: '100%' }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Toast Alert */}
      {toast && (
        <div className="toast fade-in">
          <RiNotification3Line style={{ color: 'var(--primary)' }} />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}

export default App;
