import React, { useState } from "react";

function Search({ items, setItems }) {
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const displayItems = items.filter(item => item.description.includes(search))

    if (search === '') {
      fetch('http://localhost:6001/listings')
        .then(r => r.json())
        .then(items => setItems(items))
    } else {
      setItems(displayItems)
    }
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
