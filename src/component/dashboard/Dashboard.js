import React, { Component } from 'react';
import Product from '../product/Product';

export default class Dashboard extends Component {
    render() {
        const products = this.props.products
        return (
                <div>
                    <ul>
                    {products.map(product => {
                        console.log(product)
                     return <Product product={product} />
                    })}
                </ul>
                <div>Dashboard</div>
            </div>
        )
    }
}