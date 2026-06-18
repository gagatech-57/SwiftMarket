import React from 'react';
import { RiShoppingCartLine, RiEyeLine, RiCloseLine } from 'react-icons/ri';

const ProductList = ({ products, onAddToCart, onQuickView, cart = [], onRemoveFromCart }) => {
  const isInCart = (product) => cart.some(item => item.id === product.id);
  return (
    <div className="grid-container fade-in">
      {products.map((product) => (
        <div key={product.id} className="card product-card">
          <div className="product-img-wrapper" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
            <img 
              src={product.image} 
              className="product-img" 
              alt={product.name} 
              loading="lazy"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Image+Load+Error'; }}
            />
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: 700
            }}>
              {product.category || 'General'}
            </div>
            
            {/* Quick Eye Hover icon */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity var(--transition-fast)',
              cursor: 'pointer'
            }}
            className="quick-view-overlay"
            title="Click for Details"
            >
              <div style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-main)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <RiEyeLine style={{ fontSize: '1.2rem' }} />
              </div>
            </div>
          </div>

          <div className="product-info">
            <h4 
              className="product-title" 
              onClick={() => onQuickView(product)}
              style={{ cursor: 'pointer' }}
              title={product.name}
            >
              {product.name}
            </h4>
            <p className="product-desc">{product.description}</p>
            
            <div className="product-footer" style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px' }}>
              <span className="product-price">${product.price.toFixed(2)}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn btn-secondary btn-sm btn-icon-only"
                  onClick={() => onQuickView(product)}
                  title="Quick View"
                  aria-label="View product details"
                >
                  <RiEyeLine />
                </button>
                {isInCart(product) ? (
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => onRemoveFromCart(product.id)}
                    title="Remove from Cart"
                    aria-label="Remove from cart"
                    style={{
                      backgroundColor: 'var(--danger-light)',
                      color: 'var(--danger)',
                      borderColor: 'var(--danger)',
                      borderWidth: '1px',
                      borderStyle: 'solid'
                    }}
                  >
                    <RiCloseLine />
                    <span className="cart-btn-text"> Remove</span>
                  </button>
                ) : (
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => onAddToCart(product)}
                    title="Add to Cart"
                    aria-label="Add to cart"
                  >
                    <RiShoppingCartLine />
                    <span className="cart-btn-text"> Add to Cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dynamic Hover Styles for Overlay */}
      <style dangerouslySetInnerHTML={{__html: `
        .product-img-wrapper:hover .quick-view-overlay {
          opacity: 1 !important;
        }
      `}} />
    </div>
  );
};

export default ProductList;
