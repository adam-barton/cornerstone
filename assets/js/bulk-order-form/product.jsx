import React from 'react';

const Product = (props) => {
    const {
        name, product_id, sku, image, price, quantity, updateQuantity, custom, url, stock, no,
    } = props;
    return (
        <div className="bulk-form-row">
            <div className="bulk-form-col">
                <span className="mobile-wrap">
                    <span>No.</span>
                    {no === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {no}
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap"><span>Image</span>
                    <a aria-label={name} href={url}>
                        {image === null &&
                            <p>
                                N/A
                            </p>
                        }
                        <img src={image} className="bulk-product-image" alt={name} />
                    </a>
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap">
                    <span>Part No.</span>
                    {sku === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {sku}
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap product-text">
                    <span>Product</span>
                    {name === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {name}
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap">
                    <span>Qty. Req.</span>
                    {custom === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {custom}
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap">
                    <span>Stock</span>
                    {stock === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {stock}
                </span>
            </div>
            <div className="bulk-form-col">
                <span className="mobile-wrap price-text">
                    <span>Price</span>
                    {price === null &&
                        <p>
                            N/A
                        </p>
                    }
                    {price}
                </span>
            </div>
            <div className="bulk-form-col">
                <div className="form-increment">
                    <button aria-label="reduce amount" className="button button-icon" onClick={() => updateQuantity(quantity - 1, product_id)}>
                        <span className="is-srOnly">Decrease Quantity:</span>
                        <i className="icon" aria-hidden="true">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.41 276.62"><path fill="#231f20" d="M175.71 276.62L87.85 138.31 0 0H351.41l-87.85 138.31-87.85 138.31z" /></svg>
                        </i>
                    </button>
                    <input aria-label="quantity input" type="text" className="form-input form-input - incrementTotal" value={quantity} onChange={(e) => { updateQuantity(e.target.value, product_id); }}></input>
                    <button aria-label="increase amount" className="button button-icon" onClick={() => updateQuantity(quantity + 1, product_id)}>
                        <span className="is-srOnly">Increase Quantity:</span>
                        <i className="icon" aria-hidden="true">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.41 276.62"><path fill="#231f20" d="M175.71 0l87.85 138.31 87.85 138.31H0l87.85-138.31L175.71 0z" /></svg>
                        </i>
                    </button>
                </div>
            </div>
        </div >
    );
};
export default Product;
