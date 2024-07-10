import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/page/CharacterList";
import CharacterDetail from "./components/page/CharacterDetails";
import CharacterLocation from "./components/page/CharacterLocation";
import { APIProvider } from "./context/Character";

function App() {
  return (
    <APIProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/location" element={<CharacterLocation />} />
        </Routes>
      </Router>
    </APIProvider>
  );
}

export default App;
