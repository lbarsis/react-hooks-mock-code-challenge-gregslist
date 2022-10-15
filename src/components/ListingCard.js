import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavorite() {
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleDeleteItem() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => onDeleteItem(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details" onClick={handleFavorite}>
        {isFavorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
