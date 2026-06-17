import React from 'react';
import { RiShoppingBag3Line, RiSunLine, RiMoonLine, RiShoppingCartLine, RiLogoutBoxRLine, RiStore2Line, RiDashboardLine } from 'react-icons/ri';

const Navbar = ({ userRole, currentUser, theme, toggleTheme, cartCount, toggleCart, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <RiShoppingBag3Line className="brand-icon" style={{ fontSize: '1.6rem', color: 'var(--primary)' }} />
        <span>SwiftMarket</span>
      </div>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {userRole === 'buyer' ? (
          <span className="portal-badge buyer">
            <RiStore2Line style={{ marginRight: '4px', fontSize: '1rem' }} />
            Buyer Portal
          </span>
        ) : (
          <span className="portal-badge seller">
            <RiDashboardLine style={{ marginRight: '4px', fontSize: '1rem' }} />
            Seller Console
          </span>
        )}
      </div>

      <div className="nav-actions">
        {/* User Info */}
        <span className="user-info" title={currentUser}>
          {currentUser}
        </span>

        {/* Theme Toggle */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
        </button>

        {/* Cart Trigger (Buyer Only) */}
        {userRole === 'buyer' && (
          <button 
            className="cart-trigger" 
            onClick={toggleCart}
            aria-label="Open Cart"
            title="Open Cart"
          >
            <RiShoppingCartLine />
            {cartCount > 0 && (
              <span className="cart-badge fade-in">{cartCount}</span>
            )}
          </button>
        )}

        {/* Logout Button */}
        <button
          className="btn btn-secondary btn-sm"
          onClick={onLogout}
          title="Sign Out"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <RiLogoutBoxRLine />
          <span className="logout-text">Sign Out</span>
        </button>
      </div>

      {/* Local Badge CSS Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .portal-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
        }
        .portal-badge.buyer {
          background-color: var(--primary-light);
          color: var(--primary);
        }
        .portal-badge.seller {
          background-color: var(--accent-light);
          color: var(--accent);
        }
        .user-info {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
        }
        @media (max-width: 600px) {
          .user-info {
            display: none;
          }
        }
        @media (max-width: 550px) {
          .navbar {
            flex-wrap: wrap;
            padding: 12px 16px;
            gap: 12px 0;
          }
          .nav-brand {
            order: 1;
          }
          .nav-actions {
            order: 2;
          }
          .nav-links {
            order: 3;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 2px;
          }
        }
        @media (max-width: 500px) {
          .logout-text {
            display: none;
          }
          .btn-sm {
            padding: 6px 8px;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
