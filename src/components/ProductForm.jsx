import React, { useState, useEffect, useRef } from 'react';
import { RiUploadCloud2Line, RiLink, RiImageAddLine, RiCheckLine, RiCloseLine } from 'react-icons/ri';

const PRESETS = [
  {
    name: 'Keyboard',
    url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80'
  },
  {
    name: 'Headphones',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80'
  },
  {
    name: 'Sneakers',
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80'
  },
  {
    name: 'Watch',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80'
  }
];

const ProductForm = ({ onSubmit, editingProduct, onCancelEdit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [image, setImage] = useState('');
  
  const [imageSourceType, setImageSourceType] = useState('preset'); // 'preset', 'file', 'url'
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const resetForm = () => {
    setName('');
    setPrice('');
    setDescription('');
    setCategory('Electronics');
    setImage(PRESETS[0].url);
    setImageSourceType('preset');
    setErrors({});
  };

  // Sync editing state
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setDescription(editingProduct.description);
      setCategory(editingProduct.category || 'Electronics');
      setImage(editingProduct.image);
      
      if (editingProduct.image.startsWith('data:image')) {
        setImageSourceType('file');
      } else if (PRESETS.some(p => p.url === editingProduct.image)) {
        setImageSourceType('preset');
      } else {
        setImageSourceType('url');
      }
    } else {
      resetForm();
    }
  }, [editingProduct]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024 * 1.5) { // 1.5MB warning
        alert('Warning: High-resolution images take a lot of localStorage space. Trying to compress or use a smaller image is recommended.');
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Product name is required';
    if (!price || parseFloat(price) <= 0) newErrors.price = 'Please enter a valid price greater than 0';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!image) newErrors.image = 'An image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Sanitize function to strip HTML tags to prevent XSS
    const sanitize = (text) => {
      if (!text) return '';
      return text.replace(/<[^>]*>/g, '').trim();
    };

    const productData = {
      name: sanitize(name),
      price: parseFloat(price),
      description: sanitize(description),
      category: sanitize(category),
      image
    };

    if (editingProduct) {
      productData.id = editingProduct.id;
    }

    onSubmit(productData);
    resetForm();
    if (onCancelEdit) onCancelEdit();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.25rem', fontWeight: 800 }}>
        {editingProduct ? 'Edit Product Details' : 'List a New Product'}
      </h3>

      <div className="form-group">
        <label className="form-label">Product Name</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="e.g. Mechanical Keyboard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Category</label>
        <select 
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Wearables">Wearables</option>
          <option value="Fashion">Fashion</option>
          <option value="Home & Office">Home & Office</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Price ($ USD)</label>
        <input 
          type="number" 
          step="0.01"
          className="form-control" 
          placeholder="e.g. 99.99"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <span className="form-error">{errors.price}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea 
          className="form-control" 
          placeholder="Describe key features, dimensions, specifications..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <span className="form-error">{errors.description}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Product Image Source</label>
        
        {/* Toggle between Preset, Upload, and URL */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <button
            type="button"
            className={`btn btn-sm ${imageSourceType === 'preset' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setImageSourceType('preset');
              setImage(PRESETS[0].url);
            }}
            style={{ flex: 1 }}
          >
            Presets
          </button>
          <button
            type="button"
            className={`btn btn-sm ${imageSourceType === 'file' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setImageSourceType('file');
              setImage('');
            }}
            style={{ flex: 1 }}
          >
            Upload File
          </button>
          <button
            type="button"
            className={`btn btn-sm ${imageSourceType === 'url' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setImageSourceType('url');
              setImage('');
            }}
            style={{ flex: 1 }}
          >
            Image URL
          </button>
        </div>

        {/* Preset Selector */}
        {imageSourceType === 'preset' && (
          <div className="preset-selector">
            {PRESETS.map((p) => (
              <div 
                key={p.name}
                className={`preset-img-option ${image === p.url ? 'selected' : ''}`}
                onClick={() => setImage(p.url)}
                title={p.name}
              >
                <img src={p.url} alt={p.name} />
                {image === p.url && (
                  <div style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem'
                  }}>
                    <RiCheckLine />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* File Uploader */}
        {imageSourceType === 'file' && (
          <div 
            className="image-upload-area"
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept="image/*"
              onChange={handleFileChange}
            />
            {image ? (
              <div>
                <img src={image} className="preview-thumbnail" alt="Preview" />
                <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>Click to Replace File</p>
              </div>
            ) : (
              <div>
                <RiUploadCloud2Line style={{ fontSize: '2.5rem', color: 'var(--text-muted)', marginBottom: '8px' }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Click to Browse Files</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>JPG, PNG or GIF</span>
              </div>
            )}
          </div>
        )}

        {/* URL Input */}
        {imageSourceType === 'url' && (
          <div>
            <div className="search-input-wrapper">
              <RiLink className="search-icon" />
              <input 
                type="text" 
                className="form-control" 
                placeholder="https://example.com/image.jpg"
                value={image.startsWith('data:') ? '' : image}
                onChange={(e) => setImage(e.target.value)}
                style={{ paddingLeft: '44px' }}
              />
            </div>
            {image && !image.startsWith('data:') && (
              <div style={{ marginTop: '12px' }}>
                <img src={image} className="preview-thumbnail" alt="Preview URL" onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Invalid+Image+URL'; }} />
              </div>
            )}
          </div>
        )}
        
        {errors.image && <span className="form-error" style={{ display: 'block', marginTop: '6px' }}>{errors.image}</span>}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        {editingProduct && (
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => {
              resetForm();
              onCancelEdit();
            }}
            style={{ flex: 1 }}
          >
            <RiCloseLine /> Cancel
          </button>
        )}
        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ flex: 2 }}
        >
          <RiImageAddLine /> {editingProduct ? 'Save Changes' : 'Publish Product'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
