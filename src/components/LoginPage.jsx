import React, { useState } from 'react';
import { RiUser3Line, RiLockLine, RiShoppingBag3Line, RiStore2Line, RiArrowRightLine } from 'react-icons/ri';

const LoginPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('buyer'); // 'buyer' or 'seller'
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignupMode && !name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    const endpoint = isSignupMode ? '/api/auth/signup' : '/api/auth/login';
    const requestBody = isSignupMode 
      ? { name: name.trim(), email: email.toLowerCase().trim(), password, role: activeTab }
      : { email: email.toLowerCase().trim(), password };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(async (res) => {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Authentication failed. Please try again.');
        }
        return data;
      } else {
        throw new Error(`Server Error (${res.status}): The server returned an invalid response. If you are using Render, make sure you have deployed the latest backend code.`);
      }
    })
    .then((data) => {
      // Validate that the account role matches the active portal tab
      if (data.role !== activeTab) {
        setError(`Access Denied: This account is registered for the ${data.role === 'buyer' ? 'Buyer' : 'Seller'} Portal.`);
        return;
      }
      onLogin(data.role, data.email, data.token, data.name, data.cart);
    })
    .catch((err) => {
      setError(err.message);
    });
  };

  return (
    <div className="login-wrapper fade-in">
      <div className="login-card card">
        
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            fontSize: '2rem',
            marginBottom: '16px'
          }}>
            <RiShoppingBag3Line />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>Welcome to SwiftMarket</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            {isSignupMode ? 'Create a new account to get started' : 'Access your account to start trading or shopping'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="login-tabs">
          <button 
            type="button" 
            className={`login-tab-btn ${activeTab === 'buyer' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('buyer');
              setError('');
            }}
          >
            <RiShoppingBag3Line size={18} />
            Buyer Portal
          </button>
          <button 
            type="button" 
            className={`login-tab-btn ${activeTab === 'seller' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('seller');
              setError('');
            }}
          >
            <RiStore2Line size={18} />
            Seller Portal
          </button>
        </div>

        {/* Login/Signup Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
          {error && (
            <div style={{
              backgroundColor: 'var(--danger-light)',
              color: 'var(--danger)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              {error}
            </div>
          )}

          {isSignupMode && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="search-input-wrapper">
                <RiUser3Line className="search-icon" />
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Guna"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ paddingLeft: '44px' }}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="search-input-wrapper">
              <RiUser3Line className="search-icon" />
              <input 
                type="email" 
                className="form-control" 
                placeholder="guna@swiftmarket.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: '44px' }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="search-input-wrapper">
              <RiLockLine className="search-icon" />
              <input 
                type="password" 
                className="form-control" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: '44px' }}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '14px', marginTop: '16px' }}
          >
            {isSignupMode ? 'Create Account & Sign In' : `Sign In as ${activeTab === 'buyer' ? 'Buyer' : 'Seller'}`}
            <RiArrowRightLine style={{ marginLeft: '4px' }} />
          </button>
        </form>

        {/* Toggle Form Mode Link */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button
            type="button"
            className="btn-link"
            onClick={() => {
              setIsSignupMode(!isSignupMode);
              setError('');
              setName('');
              setEmail('');
              setPassword('');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignupMode ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>

      </div>

      {/* Embedded CSS specific to Login Screen layout */}
      <style dangerouslySetInnerHTML={{__html: `
        .login-wrapper {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .login-card {
          width: 100%;
          max-width: 440px;
          padding: 40px 32px;
          background-color: var(--bg-card);
        }
        .login-tabs {
          display: flex;
          background-color: var(--bg-main);
          padding: 6px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .login-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border: none;
          background: transparent;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .login-tab-btn.active {
          background-color: var(--bg-card);
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .login-demo-actions {
          display: flex;
          gap: 10px;
        }
        @media (max-width: 400px) {
          .login-demo-actions {
            flex-direction: column;
            gap: 8px;
          }
          .login-tab-btn {
            font-size: 0.75rem;
            padding: 8px 4px;
            gap: 4px;
          }
          .login-card {
            padding: 24px 16px;
          }
        }
      `}} />
    </div>
  );
};

export default LoginPage;
