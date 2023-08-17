import FilterComponent from "./components/Filter";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filter" element={<FilterComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
