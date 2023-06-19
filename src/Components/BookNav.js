import React from 'react';
import { Link } from 'react-router-dom';

const BookNav = () => {
    return (
        <div>
             <div class="flex items-center justify-between mb-12">
                <h4 class="mt-2 text-xl font-bold">Book List</h4>

                <div class="flex items-center space-x-4">
                    <button class="filter-btn active-filter" id="lws-filterAll"><Link to='/'>All</Link></button>
                    <button class="filter-btn" id="lws-filterFeatured"><Link to='/featured'>Featured</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BookNav;