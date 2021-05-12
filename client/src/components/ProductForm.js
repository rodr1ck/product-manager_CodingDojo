import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [tile, setTile] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault()
        //make a post request to create a new person
        axios
            .post('http://localhost:8000/api/new-product', {
                tile,
                price,
                description,
            })
            .then((res) => {
                console.log(res)
                const result = res.data.mensaje
                setMessage(result)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Tile</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setTile(e.target.value)}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </p>
                <input type="submit" />
            </form>
            <div>{message}</div>
        </>
    )
}

export default ProductForm
