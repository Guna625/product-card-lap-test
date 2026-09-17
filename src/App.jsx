import { useState } from 'react'

const products = [
  {
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: '₹1,999',
    description: 'Portable wireless speaker with room-filling sound.',
    icon: '◒',
    accent: 'sunset',
  },
  {
    name: 'Canvas Daypack',
    category: 'Accessories',
    price: '₹2,499',
    description: 'A sturdy everyday bag made for commutes and weekends.',
    icon: '▱',
    accent: 'forest',
  },
  {
    name: 'Stoneware Mug',
    category: 'Home & Living',
    price: '₹799',
    description: 'Hand-finished ceramic with a warm, comfortable handle.',
    icon: '◡',
    accent: 'clay',
  },
  {
    name: 'Trail Running Shoes',
    category: 'Footwear',
    price: '₹4,299',
    description: 'Lightweight grip and cushioned support for rough trails.',
    icon: '⌁',
    accent: 'ocean',
  },
]

function ProductCard({ name, category, price, description, icon, accent, onView }) {
  return (
    <article className="product-card">
      <div className={`product-image ${accent}`} aria-label={`${name} placeholder image`}>
        <span className="image-mark" aria-hidden="true">{icon}</span>
        <span className="image-label">Northstar / 2026</span>
      </div>
      <div className="product-content">
        <div className="product-meta">
          <span className="category">{category}</span>
          <span className="stock"><span className="stock-dot" /> In stock</span>
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <strong>{price}</strong>
          <button type="button" onClick={() => onView(name)}>
            View Product <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Northstar Goods home">
          <span className="brand-mark">N</span>
          <span>Northstar Goods</span>
        </a>
        <div className="nav-links">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <button className="bag-button" type="button" aria-label="Shopping bag">Bag <span>0</span></button>
        </div>
      </nav>

      <header className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">Small things, thoughtfully made</p>
          <h1>Objects for a<br /><em>slower</em> everyday.</h1>
          <p className="hero-description">A considered collection of useful goods for your desk, your home, and the road between them.</p>
          <a className="explore-link" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note" aria-hidden="true">
          <span>EST.</span>
          <strong>2026</strong>
          <span>MADE TO LAST</span>
        </div>
      </header>

      <section className="collection" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The edit / 04 pieces</p>
            <h2>Current collection</h2>
          </div>
          <p className="section-note">Four considered essentials,<br />ready for the everyday.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} onView={setSelectedProduct} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>Northstar Goods</span>
        <span>Made with intention / Bengaluru</span>
        <span>© 2026</span>
      </footer>

      {selectedProduct && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details">×</button>
            <p className="eyebrow">Product details</p>
            <h2 id="modal-title">{selectedProduct}</h2>
            <p>This product is part of the current Northstar Goods collection. Add it to your bag or continue exploring the edit.</p>
            <button className="modal-action" type="button" onClick={() => setSelectedProduct(null)}>Add to bag</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
