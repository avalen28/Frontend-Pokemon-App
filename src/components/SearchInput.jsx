import React from 'react';

const SearchInput = () => {
    return (
        <div>
            <input type="text" placeholder='Find your pokemon' required />
            <button>Search!</button>
        </div>
    );
};

export default SearchInput;