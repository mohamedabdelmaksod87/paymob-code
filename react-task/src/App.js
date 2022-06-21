import Login from "./Login";

function App() {
  const handleSubmit = (username, password, eve) => {
    eve.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="App">
      <Login handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
