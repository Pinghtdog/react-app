import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];
  // items = [];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length == 0 ? <p>No Item found </p> : null} */}
      {items.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(item, index, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
