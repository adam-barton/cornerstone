import React from 'react';
import Product from './product';
// import './bulk-order-form.css';

const ProductGroup = (props) => {
    const productRows = props.products.map((product, index) => (
        <Product
            key={index}
            name={product.name}
            product_id={product.id}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            updateQuantity={props.updateQuantity}
            custom={product.custom}
            sku={product.sku}
            url={product.url}
            stock={product.stock}
            no={product.no}
        />
    ));
    return (
        <div className="bulk-form-field">
            <div className="bulk-form-row">
                <div className="bulk-form-col bulk-header"><strong>No.</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Image</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Part No.</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Product</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Qty. Req</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Stock</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Price</strong></div>
                <div className="bulk-form-col bulk-header"><strong>Quantity</strong></div>
            </div>
            {productRows}
            <div className="bulk-form-row">
                <div className="bulk-form-col message"><strong>{props.message}</strong></div>
                <button className="button button--primary bulk-add-cart" onClick={props.addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};
export default ProductGroup;
