import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  let items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];
  // items = [];
  return (
    <>
      <h1>List</h1>
      {/* {items.length == 0 ? <p>No Item found </p> : null} */}
      {items.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
