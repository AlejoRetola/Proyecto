import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/FotoInfo";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <NavBar />
        <Main />
        <Cards />
      </div>
    </div>
  );
}

export default App;
