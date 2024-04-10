import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeersPage from "./pages/RandomBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import AddBeerPage from "./pages/AddBeerPage"
import Navbar from "./components/Navbar";

function App() {

  const location = useLocation()

  return (
    <div className="App">
      
      {location.pathname !== "/" && <Navbar />}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeersPage />} />
          <Route path="/random-beer" element={<RandomBeersPage />} />
          <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
          <Route path="/new-beer" element={<AddBeerPage />} />
        </Routes>
      
    </div>
  );
}

export default App;
