import './search-box.styles.css';

import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input type='search' className='search' placeholder={placeholder} onChange={handleChange} />
        </div>
    );
};
