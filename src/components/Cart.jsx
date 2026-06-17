import React from 'react';
import { RiCloseLine, RiShoppingCartLine, RiDeleteBin7Line, RiSubtractLine, RiAddLine } from 'react-icons/ri';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onCheckout }) => {
  // Compute totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 9.99;
  const grandTotal = subtotal + shipping;

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RiShoppingCartLine style={{ color: 'var(--primary)' }} />
            <span>Shopping Cart</span>
          </h3>
          <button className="close-btn" onClick={onClose} aria-label="Close cart" title="Close cart">
            <RiCloseLine />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <RiShoppingCartLine className="cart-empty-icon" />
              <p style={{ fontWeight: 600 }}>Your cart is empty</p>
              <p style={{ fontSize: '0.85rem', textAlign: 'center', maxWidth: '240px' }}>
                Add items from the Buyer Store to get started with your purchase.
              </p>
              <button className="btn btn-primary btn-sm" onClick={onClose} style={{ marginTop: '8px' }}>
                Continue Browsing
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item fade-in">
                <img 
                  src={item.image} 
                  className="cart-item-img" 
                  alt={item.name} 
                  onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=Error'; }}
                />
                <div className="cart-item-info">
                  <div>
                    <div className="cart-item-title" title={item.name}>{item.name}</div>
                    <div className="cart-item-desc">{item.category || 'General'}</div>
                  </div>
                  
                  <div className="cart-item-controls">
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="qty-control">
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQty(item.id, -1)}
                          title="Decrease Quantity"
                          aria-label="Decrease quantity"
                        >
                          <RiSubtractLine size={12} />
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQty(item.id, 1)}
                          title="Increase Quantity"
                          aria-label="Increase quantity"
                        >
                          <RiAddLine size={12} />
                        </button>
                      </div>

                      <button 
                        className="btn btn-secondary btn-sm btn-icon-only" 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ border: 'none', padding: '6px', color: 'var(--danger)' }}
                        title="Remove Item"
                        aria-label="Remove item"
                      >
                        <RiDeleteBin7Line size={16} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Sums */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', marginTop: '-4px' }}>
                  Add ${(150 - subtotal).toFixed(2)} more for FREE shipping!
                </div>
              )}
              <div className="total-row grand-total">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              onClick={onCheckout}
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              Checkout Order
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
