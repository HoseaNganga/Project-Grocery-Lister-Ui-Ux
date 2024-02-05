import { useContext } from "react";
import DataContext from "../../Context/DataContext";

const Footer = () => {
  const { myItems } = useContext(DataContext);
  return (
    <footer className="footer">
      <p>
        {myItems.length} {myItems.length === 1 ? "item" : "items"} remaining
      </p>
      <p>All rights reserved &copy;</p>
    </footer>
  );
};

export default Footer;
