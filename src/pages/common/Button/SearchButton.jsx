import React from 'react';

const SearchButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchButton;
