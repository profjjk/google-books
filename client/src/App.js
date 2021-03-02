import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Search />
      </div>
    </Router>
  );
}

export default App;
