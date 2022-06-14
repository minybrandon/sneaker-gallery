import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Unauthenticated />} />
        <Route path="/authenticated" element={<Authenticated />} />
      </Routes>
    </Router>
  );
}

export default App;
