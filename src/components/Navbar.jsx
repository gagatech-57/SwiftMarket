import React, { useState } from 'react';
import { RiShoppingBag3Line, RiSunLine, RiMoonLine, RiShoppingCartLine, RiLogoutBoxRLine, RiStore2Line, RiDashboardLine } from 'react-icons/ri';

const Navbar = ({ userRole, currentUser, theme, toggleTheme, cartCount, toggleCart, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Safely extract the first letter of the name (fallback to email or "?")
  const displayName = currentUser?.name || '';
  const displayEmail = currentUser?.email || '';
  const initial = (displayName || displayEmail || '?').charAt(0).toUpperCase();

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

        {/* User Profile Avatar Dropdown */}
        <div className="nav-profile-wrapper">
          <button 
            className="avatar-btn" 
            onClick={() => setShowDropdown(!showDropdown)}
            title={`${displayName} (${displayEmail})`}
            aria-label="User menu"
          >
            {initial}
          </button>

          {showDropdown && (
            <>
              {/* Invisible backdrop to close dropdown on click outside */}
              <div className="dropdown-backdrop" onClick={() => setShowDropdown(false)} />
              
              <div className="profile-dropdown card fade-in">
                <div className="dropdown-header">
                  <div className="dropdown-avatar">{initial}</div>
                  <div className="dropdown-user-details">
                    <div className="user-name" title={displayName}>{displayName || 'User'}</div>
                    <div className="user-email" title={displayEmail}>{displayEmail}</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item" 
                  onClick={() => {
                    setShowDropdown(false);
                    onLogout();
                  }}
                >
                  <RiLogoutBoxRLine />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Local CSS Styles */}
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
        
        /* Profile Dropdown Specific Styles */
        .nav-profile-wrapper {
          position: relative;
          display: inline-block;
        }
        .avatar-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background-color: var(--primary);
          color: white;
          border: none;
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }
        .avatar-btn:hover {
          background-color: var(--primary-hover);
          transform: scale(1.05);
        }
        .dropdown-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          z-index: 999;
        }
        .profile-dropdown {
          position: absolute;
          top: 48px;
          right: 0;
          width: 240px;
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          z-index: 1000;
          text-align: left;
        }
        .dropdown-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .dropdown-avatar {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-full);
          background-color: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .dropdown-user-details {
          display: flex;
          flex-direction: column;
          min-width: 0; /* allows text truncation */
        }
        .dropdown-user-details .user-name {
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dropdown-user-details .user-email {
          font-size: 0.8rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 2px;
        }
        .dropdown-divider {
          height: 1px;
          background-color: var(--border);
          margin: 12px 0;
        }
        .dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-family: var(--font-sans);
          font-weight: 700;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .dropdown-item:hover {
          background-color: var(--bg-hover);
          color: var(--danger);
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
      `}} />
    </nav>
  );
};

export default Navbar;
