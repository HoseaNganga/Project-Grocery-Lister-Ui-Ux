import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [myItems, setMyItems] = useState(
    JSON.parse(localStorage.getItem("reactGroceryItem")) || []
  );
  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const newArray = Array.from(myItems).filter((val) =>
      val.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(newArray.reverse());
  }, [myItems, search]);

  const addNewItem = (item) => {
    const id = myItems.length ? myItems[myItems.length - 1].id + 1 : 1;
    const newItem = { id: id, item: item };
    const newArrayItems = [...myItems, newItem];
    setMyItems(newArrayItems);

    localStorage.setItem("reactGroceryItem", JSON.stringify(newArrayItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItem) return;
    addNewItem(addItem);
    setAddItem("");
  };

  const handleDelete = (id) => {
    const newArrayItems = Array.from(myItems).filter((val) => val.id !== id);
    setMyItems(newArrayItems);
    localStorage.setItem(`reactGroceryItem`, JSON.stringify(newArrayItems));
  };
  return (
    <DataContext.Provider
      value={{
        myItems,
        setMyItems,
        addItem,
        setAddItem,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        addNewItem,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
