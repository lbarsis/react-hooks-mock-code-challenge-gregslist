import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { items, setItems } ) {

  function onDeleteItem(deletedItem) {
    const displayItems = items.filter(item => item.id !== deletedItem.id)
    setItems(displayItems)
  }

  const displayItems = items.map(item => {
    return <ListingCard key={item.id} item={item} onDeleteItem={onDeleteItem}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
