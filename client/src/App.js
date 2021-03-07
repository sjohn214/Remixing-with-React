import "./App.css";
import Navbar from "./components/Navbar/index";
import Searchbar from "./components/SearchForm/index";
import SearchResults from "./components/SearchResults/index";
import Conditions from "./components/Conditions/index";
import Card from "./components/Card/index";



function App() {
  return (
   <div className="App">
     <Navbar />
     <Searchbar />
     <SearchResults />
     <Conditions />
     <Card />
   </div>
  );
}

export default App;
