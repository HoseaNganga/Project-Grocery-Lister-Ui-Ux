import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const GroceryItems = ({ searchResult, handleDelete }) => {
  return (
    <ul className="listContainer">
      {Array.from(searchResult).map((val) => (
        <li className="listItem" key={val.id}>
          <h3>{val.item}</h3>
          <button className="deleteItem" onClick={() => handleDelete(val.id)}>
            <FaTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default GroceryItems;
