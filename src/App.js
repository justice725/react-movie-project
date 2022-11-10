import "./App.css";
import { useEffect, useState } from "react";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Movie from "./components/movie";
import {BrowserRouter, Routes, Route, Router, Link} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
