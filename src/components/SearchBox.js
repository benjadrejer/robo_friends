import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="pa2">
        <input type="search" placeholder="Search Robots..." className="pa3 ba b--green bg-lightest-blue" onChange={(e) => props.searchChange(e.target.value)} />
    </div>
  )
}

export default SearchBox;
