import { GroceryItems } from "../import";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

const Main = () => {
  const { searchResult, handleDelete } = useContext(DataContext);
  return (
    <main className="main">
      <GroceryItems searchResult={searchResult} handleDelete={handleDelete} />
    </main>
  );
};

export default Main;
