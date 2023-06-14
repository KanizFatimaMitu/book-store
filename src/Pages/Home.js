import React from 'react';
import Navbar from '../Components/Navbar';

import BookCard from '../Components/BookCard';
import BookNav from '../Components/BookNav';
import AddBook from '../Components/AddBook';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main class="py-12 2xl:px-6">
                <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                    <div class="order-2 xl:-order-1">
                        <BookNav></BookNav>
                        <div class="lws-bookContainer">
                            <BookCard></BookCard>
                        </div>
                    </div>
                    <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                        <AddBook></AddBook>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;