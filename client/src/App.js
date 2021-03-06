import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';



function App() {
  return (
   <div className="App">
     <Navbar />
     <Searchbar />
     <Card />
   </div>
  );
}

export default App;
