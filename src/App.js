import React from 'react';
import './App.css';
import productsData from './products.json';
import ProductsList from './components/ProductList'

const allProducts = productsData;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filteredProducts: allProducts
    }
  }

  filterProducts(e){
    const text = e.currentTarget.value;
    this.getFilteredProductsForText(text).then(filteredProducts => {
      this.setState({
            filteredProducts
      });
    })
  }

  getFilteredProductsForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
          const filteredProducts = allProducts.filter(product => product.text.toLowerCase().includes(text.toLowerCase()));
          resolve(filteredProducts);
      }, time) ;
    });
  }

  render(){
    return (
      <div className="container-fluid p-0 m-0">
        <div className="search">
          <h2 className="search__title">Nie wiesz do którego kosza wyrzucić odpad?</h2>
          <p className="search__info">Wpisz w wyszukiwarkę produkt i dowiedz się gdzie należy go wyrzucić.</p>
          <input className="search__input" onInput={this.filterProducts.bind(this)} placeholder="Wpisz produkt"/>
        </div>
        <ProductsList products={this.state.filteredProducts}/>
      </div>
    );
  }
}

export default App;
