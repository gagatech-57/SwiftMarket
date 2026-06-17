import React, { useState } from 'react';
import { RiUser3Line, RiLockLine, RiShoppingBag3Line, RiStore2Line, RiArrowRightLine } from 'react-icons/ri';

const LoginPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('buyer'); // 'buyer' or 'seller'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all credentials');
      return;
    }

    // Mock verification
    if (activeTab === 'buyer') {
      if (email.toLowerCase() === 'buyer@swiftmarket.com' && password === 'buyer123') {
        onLogin('buyer', email);
      } else {
        // Allow any email/password, but if they entered something wrong, let's validate it
        // Or let's accept any login to make it extremely easy to test, but check basic formatting!
        if (!email.includes('@')) {
          setError('Please enter a valid email address');
        } else {
          onLogin('buyer', email);
        }
      }
    } else {
      if (email.toLowerCase() === 'seller@swiftmarket.com' && password === 'seller123') {
        onLogin('seller', email);
      } else {
        if (!email.includes('@')) {
          setError('Please enter a valid email address');
        } else {
          onLogin('seller', email);
        }
      }
    }
  };

  const handleQuickFill = (role) => {
    if (role === 'buyer') {
      setActiveTab('buyer');
      setEmail('buyer@swiftmarket.com');
      setPassword('buyer123');
    } else {
      setActiveTab('seller');
      setEmail('seller@swiftmarket.com');
      setPassword('seller123');
    }
    setError('');
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
            Access your account to start trading or shopping
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

        {/* Login Form */}
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

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="search-input-wrapper">
              <RiUser3Line className="search-icon" />
              <input 
                type="email" 
                className="form-control" 
                placeholder={activeTab === 'buyer' ? 'buyer@swiftmarket.com' : 'seller@swiftmarket.com'}
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
            style={{ width: '100%', padding: '14px', marginTop: '10px' }}
          >
            Sign In as {activeTab === 'buyer' ? 'Buyer' : 'Seller'}
            <RiArrowRightLine style={{ marginLeft: '4px' }} />
          </button>
        </form>

        {/* Quick Demo Fill Buttons */}
        <div style={{
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          textAlign: 'left'
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Quick Demo Accounts
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick={() => handleQuickFill('buyer')}
              style={{ flex: 1, fontSize: '0.8rem' }}
            >
              Fill Buyer Demo
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick={() => handleQuickFill('seller')}
              style={{ flex: 1, fontSize: '0.8rem' }}
            >
              Fill Seller Demo
            </button>
          </div>
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
      `}} />
    </div>
  );
};

export default LoginPage;
