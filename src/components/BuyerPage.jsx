import React, { useState, useMemo, useEffect } from 'react';
import ProductList from './ProductList';
import { RiSearchLine, RiCloseLine, RiShoppingCartLine, RiShoppingBagLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const BuyerPage = ({ products, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'price-low', 'price-high', 'name-asc', 'name-desc'
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 16;

  // Scroll to top of window when active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // 1. Get unique categories
  const categories = useMemo(() => {
    const list = new Set(products.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(list)];
  }, [products]);

  // Handlers that reset page to 1
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  // 2. Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => 
          p.name.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort Products
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  // 3. Pagination Slicing
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const activePage = currentPage > totalPages ? totalPages : currentPage;

  const paginatedProducts = useMemo(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, activePage]);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="buyer-container fade-in">
      
      {/* Search and Filters Header */}
      <header className="buyer-header">
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Marketplace</h1>
          <p style={{ color: 'var(--text-muted)' }}>Explore the latest premium items uploaded by sellers globally.</p>
        </div>

        <div className="buyer-search-row">
          {/* Search bar */}
          <div className="search-input-wrapper">
            <RiSearchLine className="search-icon" style={{ fontSize: '1.2rem' }} />
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search products by title, feature, keywords..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Sort selector */}
          <select 
            className="form-control filter-select"
            value={sortBy}
            onChange={handleSortChange}
            aria-label="Sort products"
          >
            <option value="newest">Sort by: Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>

        {/* Category horizontal scrolling bar */}
        {categories.length > 1 && (
          <div className="category-tags">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tag ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Product Grid */}
      {paginatedProducts.length === 0 ? (
        <div className="card" style={{ padding: '80px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <RiShoppingBagLine style={{ fontSize: '4rem', opacity: 0.3, marginBottom: '16px' }} />
          <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>No Products Found</p>
          <p style={{ fontSize: '0.95rem', maxWidth: '360px', margin: '0 auto' }}>
            We couldn't find anything matching your filters. Try clearing your search or picking a different category.
          </p>
          {(searchQuery || selectedCategory !== 'All') && (
            <button 
              className="btn btn-primary btn-sm" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              style={{ marginTop: '20px' }}
            >
              Clear All Filters
            </button>
          )}
        </div>
      ) : (
        <>
          <ProductList 
            products={paginatedProducts} 
            onAddToCart={onAddToCart} 
            onQuickView={handleOpenQuickView} 
          />

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination-container fade-in">
              <div className="pagination-info">
                Showing <strong>{Math.min((activePage - 1) * itemsPerPage + 1, totalItems)}</strong> to{' '}
                <strong>{Math.min(activePage * itemsPerPage, totalItems)}</strong> of{' '}
                <strong>{totalItems}</strong> products
              </div>
              
              <div className="pagination-buttons">
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCurrentPage(1)}
                  disabled={activePage === 1}
                  title="First Page"
                >
                  First
                </button>
                <button 
                  className="btn btn-secondary btn-sm btn-icon-only"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={activePage === 1}
                  title="Previous Page"
                  aria-label="Previous Page"
                >
                  <RiArrowLeftSLine />
                </button>
                
                {/* Numeric Pagination Window */}
                {(() => {
                  const range = [];
                  const start = Math.max(1, activePage - 2);
                  const end = Math.min(totalPages, activePage + 2);
                  
                  for (let p = start; p <= end; p++) {
                    range.push(p);
                  }
                  
                  return range.map(p => (
                    <button
                      key={p}
                      className={`pagination-num-btn ${activePage === p ? 'active' : ''}`}
                      onClick={() => setCurrentPage(p)}
                    >
                      {p}
                    </button>
                  ));
                })()}
                
                <button 
                  className="btn btn-secondary btn-sm btn-icon-only"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={activePage === totalPages}
                  title="Next Page"
                  aria-label="Next Page"
                >
                  <RiArrowRightSLine />
                </button>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={activePage === totalPages}
                  title="Last Page"
                >
                  Last
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Quick View Detail Modal */}
      {quickViewProduct && (
        <div className="modal-overlay fade-in" onClick={handleCloseQuickView}>
          <div className="modal-content scale-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontWeight: 800 }}>Product details</h3>
              <button className="close-btn" onClick={handleCloseQuickView} aria-label="Close details">
                <RiCloseLine />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-grid">
                <img 
                  src={quickViewProduct.image} 
                  className="detail-img" 
                  alt={quickViewProduct.name} 
                  onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Image+Load+Error'; }}
                />
                
                <div className="detail-info">
                  <div style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    {quickViewProduct.category || 'General'}
                  </div>
                  <h3 className="detail-title">{quickViewProduct.name}</h3>
                  <div className="detail-price">${quickViewProduct.price.toFixed(2)}</div>
                  <p className="detail-desc">{quickViewProduct.description}</p>
                  
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      onAddToCart(quickViewProduct);
                      handleCloseQuickView();
                    }}
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    <RiShoppingCartLine /> Add to Shopping Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local Pagination CSS rules */}
      <style dangerouslySetInnerHTML={{__html: `
        .pagination-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 16px;
        }
        .pagination-info {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .pagination-buttons {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pagination-num-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background-color: var(--bg-card);
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pagination-num-btn:hover {
          border-color: var(--text-muted);
          background-color: var(--bg-hover);
        }
        .pagination-num-btn.active {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        .pagination-buttons button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        @media (max-width: 600px) {
          .pagination-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}} />

    </div>
  );
};

export default BuyerPage;
