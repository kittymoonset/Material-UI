import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import menu from "./pages/Menu/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;