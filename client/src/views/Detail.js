import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/' + id)
            .then((res) => {
                setProduct({ ...res.data })
                console.log(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Link to="/">Return Home</Link>
            <div>
                {loaded ? <p>First Name: {product.title}</p> : ''}
                {loaded ? <p>Last Name: {product.price}</p> : ''}
                {loaded ? <p>Last Name: {product.description}</p> : ''}
            </div>
            
        </>
    )
}

export default Detail
