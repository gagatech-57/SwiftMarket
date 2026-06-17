import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { RiEdit2Line, RiDeleteBin6Line, RiInboxLine, RiMoneyDollarCircleLine, RiPlayListAddLine } from 'react-icons/ri';

const SellerPage = ({ products, onAddProduct, onDeleteProduct }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  // Compute Stats
  const totalProducts = products.length;
  const totalValue = products.reduce((acc, p) => acc + p.price, 0).toFixed(2);

  const handleEdit = (product) => {
    setEditingProduct(product);
    // Scroll window to top to let the user see the edit form clearly on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="seller-container fade-in">
      <header style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Seller Dashboard</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your catalog, analyze listings, and add new inventory items.</p>
      </header>

      <div className="seller-grid">
        {/* Left Side: Stats and Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Dashboard Stats */}
          <div className="seller-stats">
            <div className="stat-box card">
              <RiPlayListAddLine style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '8px' }} />
              <h4>Total Listings</h4>
              <p>{totalProducts}</p>
            </div>
            <div className="stat-box card">
              <RiMoneyDollarCircleLine style={{ fontSize: '1.5rem', color: 'var(--success)', marginBottom: '8px' }} />
              <h4>Catalog Value</h4>
              <p>${totalValue}</p>
            </div>
          </div>

          {/* Product Form Card */}
          <div className="card form-card">
            <ProductForm 
              onSubmit={onAddProduct} 
              editingProduct={editingProduct} 
              onCancelEdit={handleCancelEdit} 
            />
          </div>
        </div>

        {/* Right Side: Product Catalog List */}
        <div>
          <h2 style={{ marginBottom: '20px', fontSize: '1.25rem', fontWeight: 800 }}>
            Your Listings ({products.length})
          </h2>

          {products.length === 0 ? (
            <div className="card" style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <RiInboxLine style={{ fontSize: '3.5rem', opacity: 0.4, marginBottom: '16px' }} />
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>No Listings Yet</p>
              <p style={{ fontSize: '0.9rem', maxWidth: '320px', margin: '0 auto' }}>
                Use the form on the left to add your first product to the inventory database.
              </p>
            </div>
          ) : (
            <div className="grid-container">
              {products.map((product) => (
                <div key={product.id} className="card product-card fade-in">
                  <div className="product-img-wrapper">
                    <img 
                      src={product.image} 
                      className="product-img" 
                      alt={product.name} 
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
                  </div>

                  <div className="product-info">
                    <h4 className="product-title" title={product.name}>{product.name}</h4>
                    <p className="product-desc">{product.description}</p>
                    
                    <div className="product-footer" style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px' }}>
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          className="btn btn-secondary btn-sm btn-icon-only" 
                          onClick={() => handleEdit(product)}
                          title="Edit Product"
                          aria-label="Edit product"
                        >
                          <RiEdit2Line />
                        </button>
                        <button 
                          className="btn btn-danger btn-sm btn-icon-only" 
                          onClick={() => {
                            if(confirm(`Are you sure you want to delete "${product.name}"?`)) {
                              onDeleteProduct(product.id);
                              if (editingProduct?.id === product.id) {
                                handleCancelEdit();
                              }
                            }
                          }}
                          title="Delete Product"
                          aria-label="Delete product"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
