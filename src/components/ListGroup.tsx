import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  let items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* {items.length == 0 ? <p>No Item found </p> : null} */}
      {items.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
