import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart';
import { RiCheckboxCircleLine, RiNotification3Line } from 'react-icons/ri';
import { generate700Products } from './data/mockProducts';

function App() {
  // 1. Initial State
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Auto-update to 700 products if the user has older, smaller cache
      if (parsed.length < 700) {
        const generated = generate700Products();
        localStorage.setItem('products', JSON.stringify(generated));
        return generated;
      }
      return parsed;
    }
    return generate700Products();
  });

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
    return localStorage.getItem('currentUser') || '';
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message: string, type: 'success' | 'info' }
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  // 2. Persist State in LocalStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  // 3. Security Shield (Block right click and developer tools keybinds)
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      showToast('Security Notice: Right-click is restricted to protect catalog assets.', 'info');
    };

    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const metaOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      
      const isConsoleHotkey = [
        e.key === 'F12',
        metaOrCtrl && e.shiftKey && e.key.toLowerCase() === 'i',
        metaOrCtrl && e.shiftKey && e.key.toLowerCase() === 'j',
        metaOrCtrl && e.shiftKey && e.key.toLowerCase() === 'c',
        metaOrCtrl && e.shiftKey && e.key.toLowerCase() === 'k',
        metaOrCtrl && e.key.toLowerCase() === 'u'
      ].some(Boolean);

      if (isConsoleHotkey) {
        e.preventDefault();
        showToast('Security Shield: Source code inspection hotkeys are restricted.', 'info');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 4. Helper functions
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 4. Session actions
  const handleLogin = (role, email) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentUser(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    localStorage.setItem('currentUser', email);
    showToast(`Welcome! Logged in as ${role === 'buyer' ? 'Buyer' : 'Seller'}`, 'success');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentUser('');
    setIsCartOpen(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
    showToast('Logged out successfully.', 'info');
  };

  // 5. Product actions (Seller)
  const handleAddProduct = (newProduct) => {
    if (newProduct.id) {
      setProducts(prev => prev.map(p => p.id === newProduct.id ? newProduct : p));
      setCart(prev => prev.map(item => item.id === newProduct.id ? { ...item, ...newProduct } : item));
      showToast(`Updated product "${newProduct.name}" successfully!`);
    } else {
      const productWithId = {
        ...newProduct,
        id: `prod-${Date.now()}`
      };
      setProducts(prev => [productWithId, ...prev]);
      showToast(`Product "${newProduct.name}" added successfully!`);
    }
  };

  const handleDeleteProduct = (productId) => {
    const product = products.find(p => p.id === productId);
    setProducts(prev => prev.filter(p => p.id !== productId));
    setCart(prev => prev.filter(item => item.id !== productId));
    showToast(`Removed product "${product?.name || 'Item'}"`);
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
