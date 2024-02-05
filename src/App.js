import { Header, AddList, Main, Footer } from "./Components/import";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <AddList />
        <Main />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
