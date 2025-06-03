import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  let items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];
  items = [];
  if (items.length == 0) {
    return (
      <>
        <h1>Hello Bichaess</h1>
        <p>No Items Found</p>
      </>
    );
  }

  return (
    <>
      <h1>Hello Bitchaess</h1>
      <ul className="list group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
