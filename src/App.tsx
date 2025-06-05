import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nigga1", "Nigga2", "Nigga3", "Nigga4"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
