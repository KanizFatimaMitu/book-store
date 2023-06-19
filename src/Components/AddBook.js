import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [price, setPrice] = useState('')
    const [featured, setFeatured] = useState('')
    const navigate = useNavigate();

    const reset = () => {
        setName('')
        setAuthor('')
        setThumbnail('')
        setPrice('')
        setFeatured('')
    }

    const handleAddBook = (e) => {
        e.preventDefault();
        const data = {
            name,
            author,
            thumbnail,
            price,
            featured
        }
        console.log(data)
        fetch('http://localhost:5000/books', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('book added successfully')
                if (featured === 'on') {
                    navigate('/featured')
                }
                else {
                    navigate('/')
                }
            })
        reset();
    }
    return (
        <div>
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form class="book-form" onSubmit={handleAddBook}>
                <div class="space-y-2">
                    <label for="name">Book Name</label>
                    <input required class="text-input" type="text" id="input-Bookname" name="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="space-y-2">
                    <label for="category">Author</label>
                    <input required class="text-input" type="text" id="input-Bookauthor" name="author" onChange={e => setAuthor(e.target.value)} />
                </div>

                <div class="space-y-2">
                    <label for="image">Image Url</label>
                    <input required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" onChange={e => setThumbnail(e.target.value)} />
                </div>

                <div class="grid grid-cols-2 gap-8 pb-4">
                    <div class="space-y-2">
                        <label for="price">Price</label>
                        <input required class="text-input" type="number" id="input-Bookprice" name="price" onChange={e => setPrice(e.target.value)} />
                    </div>

                    <div class="space-y-2">
                        <label for="quantity">Rating</label>
                        <input required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                    </div>
                </div>

                <div class="flex items-center">
                    <input id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" onChange={e => setFeatured(e.target.value)} />
                    <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button type="submit" class="submit" id="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;