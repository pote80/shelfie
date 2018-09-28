import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      products: [
        {img_url: 'https://i.imgur.com/HzafyBA.jpg',
        product_name: 'Fluffy Cow',
        price: 200},
        {img_url: 'https://i.imgur.com/ZPymHji.jpg',
        product_name: 'Ewok Cow',
        price: 2000}
      ]
    }
  }
  render() {
    
    return (
      <div>
        <div> <Dashboard products={this.state.products}/></div>
        <div> <Form /> </div>
        <div> <Header /> </div>
      </div>
    );
  }
}


export default App;
