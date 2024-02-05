import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

const AddGroceryList = () => {
  const { addItem, setAddItem, handleSubmit } = useContext(DataContext);
  return (
    <form className="AddForm" onSubmit={handleSubmit}>
      <label htmlFor="inputadd">Add</label>
      <input
        type="text"
        id="inputadd"
        className="inputAdd"
        placeholder="Add your Item..."
        autoComplete="off"
        autoFocus
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <button className="addListBtn">
        <FaPlus size={22} />
      </button>
    </form>
  );
};

export default AddGroceryList;
