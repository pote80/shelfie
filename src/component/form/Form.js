import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            img_url: '',
            product_name: '',
            price: ''
        }
         this.handleUrlChange = this.handleUrlChange.bind(this);
         this.handleNameChange = this.handleNameChange.bind(this);
         this.handlePriceChange = this.handlePriceChange.bind(this);
    }
    handleUrlChange = (e) =>{
        this.setState({img_url: e.target.value})
    }
    handleNameChange = (e) =>{
       this.setState({product_name: e.target.value})
    }
    handlePriceChange = (e) =>{
        this.setState({price: e.target.value})
    }
    clearInputs = () =>{
        this.setState({img_url: '', product_name: '', price: ''})
    }
    render() {
        return (
            <div>
                Form
                <div><label> URL: <input value = {this.state.img_url} onChange={this.handleUrlChange}/></label></div>
                <div><label> Product Name: <input value = {this.state.product_name} onChange={this.handleNameChange}/></label></div>
                <div><label> Price: <input type="number" value = {this.state.price} onChange={this.handlePriceChange}/></label></div>
                <div>
                    <button>Add To Inventory</button>
                    <button onClick={this.clearInputs}>Clear</button>
                </div>
            </div>
        )
    }
}