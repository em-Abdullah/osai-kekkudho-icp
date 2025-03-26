import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import IcpCode from "./pages/IcpCode";
import Library from "./pages/Library";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/icp" element={<IcpCode />} />
        <Route path="/library" element={<Library />} />

        <Route path="*" element={<NotFoundPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
