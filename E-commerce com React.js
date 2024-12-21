// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componente principal do produto
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">R$ {product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

// Componente do carrinho
const Cart = ({ items, removeFromCart }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>R$ {item.price.toFixed(2)}</span>
          <button onClick={() => removeFromCart(item)}>Remover</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: R$ {total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

// Componente principal da aplicação
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "Smartphone XYZ",
      description: "Último lançamento com câmera incrível",
      price: 1999.99,
      image: "smartphone.jpg"
    },
    // Adicione mais produtos aqui
  ]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Minha Loja Virtual</h1>
          <nav>{/* Adicione navegação aqui */}</nav>
        </header>
        
        <Switch>
          <Route exact path="/">
            <div className="products-grid">
              {products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </Route>
          
          <Route path="/cart">
            <Cart items={cartItems} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
