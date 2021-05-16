import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductList = (props) => {
    const productos = props.products.map((product, idx) => {
        return (
            <div>
                <li key={idx}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </li>
                <button
                    onClick={(e) => {
                        deleteProduct(product._id)
                    }}
                >
                    Delete
                </button>
            </div>
        )
    })

    const { removeFromDom } = props
    const deleteProduct = (productId) => {
        axios
            .delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                removeFromDom(productId)
            })
    }

    return (
        <ul className="unsorted-list">
            {productos.length ? productos : 'There are no products.'}
        </ul>
    )
}

export default ProductList
