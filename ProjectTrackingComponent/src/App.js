import FilterComponent from "./components/Filter";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Production";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./components/store/store";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/filter" element={<FilterComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
