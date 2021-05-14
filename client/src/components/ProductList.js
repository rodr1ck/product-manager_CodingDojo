import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  
    const productos = props.products.map((product, idx) => {
        return (
            <li key={idx}>
                <Link to={`/people/${product._id}`}>{product.title}</Link>
            </li>
        )
    })

    return <ul className="unsorted-list">{productos.length ? productos : "There are no products."}</ul>
}

export default ProductList
