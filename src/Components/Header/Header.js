import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { FaMobileAlt, FaLaptop, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "../../Hooks/useWindowSize";

const Header = () => {
  const { search, setSearch } = useContext(DataContext);
  const { width } = useWindowSize();
  return (
    <header className="header">
      <h1 className="gradient-text">
        Grocery List
        {width < 768 ? (
          <FaMobileAlt color="white" />
        ) : width < 998 ? (
          <FaTabletAlt color="white" />
        ) : (
          <FaLaptop color="white" />
        )}
      </h1>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="inputsearch">Search</label>
        <input
          type="text"
          id="inputsearch"
          className="inputSearch"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
