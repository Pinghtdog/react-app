import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];

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
