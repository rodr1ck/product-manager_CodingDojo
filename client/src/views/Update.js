import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    let { id } = useParams()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [editmessage, setEditMessage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id).then((res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
    }, [])
    const updateProduct = (e) => {
        e.preventDefault()
        axios
            .put('http://localhost:8000/api/products/' + id, {
                title,
                price,
                description
            })
            .then((res) => {
                setTitle('')
                setPrice('')
                setDescription('')
                setEditMessage(res.data.editmessage)
                console.log(res)
            })
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                </p>
                <input type="submit" />
            </form>
            <div>{editmessage}</div>
            <br></br>
            <Link to="/">Return Home</Link>
        </div>
    )
}

export default Update
